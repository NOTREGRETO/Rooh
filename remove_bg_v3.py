from PIL import Image, ImageOps
import numpy as np
import os

# Source images
images = {
    "1": "roohi didi images/1.jpeg",
    "3": "roohi didi images/3.jpeg",
    "4": "roohi didi images/4.jpeg",
    "11": "roohi didi images/11.jpeg",
}

output_dir = "public/img"
os.makedirs(output_dir, exist_ok=True)

# Very aggressive threshold for removing anything that isn't almost black
# 180 means anything lighter than dark gray becomes transparent
THRESHOLD = 180 

for name, path in images.items():
    print(f"Processing {path}...")
    
    img = Image.open(path).convert("RGBA")
    
    # Optional: Enhance contrast before processing
    # img = ImageOps.autocontrast(img.convert("L"), cutoff=2).convert("RGBA")
    
    data = np.array(img)
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Luminance formula
    luminance = 0.299 * r + 0.587 * g + 0.114 * b
    
    # Create mask: Only keep very dark pixels
    # 0 = transparent, 255 = opaque
    new_alpha = np.where(luminance > THRESHOLD, 0, 255).astype(np.uint8)
    
    # Apply mask
    data[:,:,3] = new_alpha
    
    # Force all transparent pixels to be white (or black) to avoid weird edges
    # But actually, keeping them black is better for dark line art
    data[new_alpha == 0] = [0, 0, 0, 0]
    
    result = Image.fromarray(data)
    
    # Save with a new name to bust browser cache
    output_path = os.path.join(output_dir, f"{name}_v3.png")
    result.save(output_path, "PNG")
    print(f"  ✅ Saved: {output_path}")

print("\n🎉 Done! New version saved as _v3.png")
