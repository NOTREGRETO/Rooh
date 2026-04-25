"""
Remove white background from JPEG illustrations and create true transparent PNGs.
Uses luminance thresholding: light pixels become transparent, dark pixels stay.
"""

from PIL import Image
import numpy as np
import os

# Source images (original JPEGs with white backgrounds)
images = {
    "1": "roohi didi images/1.jpeg",
    "3": "roohi didi images/3.jpeg",
    "4": "roohi didi images/4.jpeg",
    "11": "roohi didi images/11.jpeg",
}

output_dir = "public/img"
os.makedirs(output_dir, exist_ok=True)

# Threshold: pixels lighter than this become transparent
# Higher = more aggressive removal. 220-240 works well for white BG illustrations
THRESHOLD = 230

for name, path in images.items():
    print(f"Processing {path}...")
    
    img = Image.open(path).convert("RGBA")
    data = np.array(img)
    
    # Calculate luminance for each pixel (perceived brightness)
    # Using standard luminance formula: 0.299*R + 0.587*G + 0.114*B
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    luminance = 0.299 * r + 0.587 * g + 0.114 * b
    
    # Create alpha mask: transparent for light pixels, opaque for dark ones
    # Use smooth transition near the threshold for cleaner edges
    alpha = np.where(luminance > THRESHOLD, 0, 255).astype(np.uint8)
    
    # For pixels near the threshold, create smooth anti-aliased edges
    near_threshold = (luminance > THRESHOLD - 30) & (luminance <= THRESHOLD)
    alpha[near_threshold] = ((THRESHOLD - luminance[near_threshold]) / 30 * 255).astype(np.uint8)
    
    # Set the alpha channel
    data[:,:,3] = alpha
    
    # Make fully transparent pixels black (cleaner rendering)
    fully_transparent = alpha == 0
    data[fully_transparent, 0] = 0
    data[fully_transparent, 1] = 0
    data[fully_transparent, 2] = 0
    
    # Boost contrast on remaining dark pixels for crisper lines
    visible = alpha > 0
    for c in range(3):  # R, G, B
        channel = data[:,:,c].astype(float)
        # Darken visible pixels slightly for sharper illustration
        channel[visible] = np.clip(channel[visible] * 0.85, 0, 255)
        data[:,:,c] = channel.astype(np.uint8)
    
    result = Image.fromarray(data)
    
    output_path = os.path.join(output_dir, f"{name}_clean.png")
    result.save(output_path, "PNG", optimize=True)
    
    # Verify transparency
    has_transparency = np.any(data[:,:,3] < 255)
    transparent_pct = np.sum(data[:,:,3] == 0) / data[:,:,3].size * 100
    print(f"  ✅ Saved: {output_path}")
    print(f"     Has real transparency: {has_transparency}")
    print(f"     Transparent pixels: {transparent_pct:.1f}%")
    print(f"     Size: {result.size[0]}x{result.size[1]}")

print("\n🎉 Done! All images now have TRUE alpha-channel transparency.")
