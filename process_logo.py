from PIL import Image
import numpy as np
import os

# Source logo
logo_path = "logos/CBF black2-100.jpg.jpeg"
output_path = "public/img/logo_clean.png"

print(f"Processing logo: {logo_path}...")

img = Image.open(logo_path).convert("RGBA")
data = np.array(img)
r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# Luminance formula
luminance = 0.299 * r + 0.587 * g + 0.114 * b

# Threshold (aggressive for a clean logo)
THRESHOLD = 200
new_alpha = np.where(luminance > THRESHOLD, 0, 255).astype(np.uint8)

# Apply transparency
data[:,:,3] = new_alpha
data[new_alpha == 0] = [0, 0, 0, 0]

result = Image.fromarray(data)
result.save(output_path, "PNG")

print(f"🎉 Logo saved as true transparent PNG: {output_path}")
