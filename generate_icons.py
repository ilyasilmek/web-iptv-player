from PIL import Image, ImageDraw

def create_pwa_icon(size, filename):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # 1. Background rounded rectangle with gradient effect
    bg_color = (2, 132, 199, 255) # Sky blue #0284c7
    dark_blue = (15, 23, 42, 255) # Dark slate #0f172a
    
    # Draw dark background
    draw.rounded_rectangle([0, 0, size, size], radius=int(size * 0.22), fill=dark_blue)
    
    # Inner border / glow
    draw.rounded_rectangle([int(size*0.04), int(size*0.04), int(size*0.96), int(size*0.96)], 
                           radius=int(size * 0.18), fill=(30, 41, 59, 255), outline=bg_color, width=max(2, int(size*0.02)))
    
    # Draw TV Screen / Monitor Box
    margin_x = int(size * 0.2)
    margin_y = int(size * 0.24)
    box_w = size - (2 * margin_x)
    box_h = int(box_w * 0.65)
    
    draw.rounded_rectangle([margin_x, margin_y, margin_x + box_w, margin_y + box_h],
                           radius=int(size * 0.08), fill=(14, 165, 233, 255))
    
    # Draw Play Triangle inside TV
    cx = margin_x + (box_w // 2)
    cy = margin_y + (box_h // 2)
    tri_w = int(box_w * 0.3)
    tri_h = int(box_h * 0.45)
    
    p1 = (cx - tri_w//2, cy - tri_h//2)
    p2 = (cx - tri_w//2, cy + tri_h//2)
    p3 = (cx + tri_w//2 + int(size*0.02), cy)
    
    draw.polygon([p1, p2, p3], fill=(255, 255, 255, 255))
    
    # Draw TV Stand
    stand_top = margin_y + box_h + int(size * 0.04)
    stand_w = int(size * 0.25)
    draw.rectangle([cx - int(size*0.03), margin_y + box_h, cx + int(size*0.03), stand_top], fill=(148, 163, 184, 255))
    draw.rounded_rectangle([cx - stand_w//2, stand_top, cx + stand_w//2, stand_top + int(size*0.04)], radius=int(size*0.02), fill=(148, 163, 184, 255))
    
    img.save(filename, 'PNG')
    print(f"Created {filename} ({size}x{size})")

create_pwa_icon(192, 'assets/icon-192.png')
create_pwa_icon(512, 'assets/icon-512.png')
