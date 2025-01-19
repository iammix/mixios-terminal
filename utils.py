from PIL import Image

# Load the original image
input_image_path = "face.png"  # Replace with the path to your image
original_image = Image.open(input_image_path)

# Define the sizes
# sizes = [16, 32, 48, 72, 96, 128, 192, 384, 512]
sizes = [48]

# Resize and save the images
for size in sizes:
    resized_image = original_image.resize((size, size), Image.ANTIALIAS)
    output_image_path = f"favicon_{size}x{size}.png"
    resized_image.save(output_image_path)
    print(f"Saved: {output_image_path}")
