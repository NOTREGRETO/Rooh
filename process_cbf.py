from PIL import Image
import numpy as np
import os

# Source image
img_path = "logos/Black2-100.jpg.jpeg"
output_path = "public/img/curated_by_fire_clean.png"

print(f"Processing image: {img_path}...")

img = Image.open(img_path).convert("RGBA")
data = np.array(img)
r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# Luminance formula
luminance = 0.299 * r + 0.587 * g + 0.114 * b

# Threshold
THRESHOLD = 220
new_alpha = np.where(luminance > THRESHOLD, 0, 255).astype(np.uint8)

# Apply transparency
data[:,:,3] = new_alpha
data[new_alpha == 0] = [0, 0, 0, 0]

result = Image.fromarray(data)
result.save(output_path, "PNG")

print(f"🎉 Image saved as true transparent PNG: {output_path}")
