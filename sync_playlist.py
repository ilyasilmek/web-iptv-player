import urllib.request
import json

base_url = 'http://germanyservers3.net:8080/player_api.php?username=ilyasilmek&password=13467900'

print("Connecting to Xtream Codes API...")
# 1. Categories
req_cats = urllib.request.Request(base_url + '&action=get_live_categories', headers={'User-Agent': 'IPTVSmarters/1.0'})
with urllib.request.urlopen(req_cats, timeout=10) as resp:
    cats_data = json.loads(resp.read().decode('utf-8', errors='ignore'))
    cat_map = {c['category_id']: c['category_name'] for c in cats_data}

print(f"Loaded {len(cat_map)} categories.")

# 2. Live streams
req_streams = urllib.request.Request(base_url + '&action=get_live_streams', headers={'User-Agent': 'IPTVSmarters/1.0'})
with urllib.request.urlopen(req_streams, timeout=15) as resp:
    streams = json.loads(resp.read().decode('utf-8', errors='ignore'))

print(f"Loaded {len(streams)} channels.")

channels_list = []
m3u_lines = ['#EXTM3U']

for s in streams:
    name = s.get('name', 'Kanal').strip()
    stream_id = s.get('stream_id')
    cat_id = s.get('category_id')
    group = cat_map.get(cat_id, 'Genel').strip()
    logo = s.get('stream_icon', '').strip()
    
    # Xtream stream URLs
    stream_url = f"http://germanyservers3.net:8080/live/ilyasilmek/13467900/{stream_id}.m3u8"
    
    # Infer resolution
    upper = name.upper()
    res = "FHD" if ("FHD" in upper or "1080" in upper) else ("4K" if "4K" in upper or "UHD" in upper else ("HD" if "HD" in upper or "720" in upper else "SD"))

    channels_list.append({
        "id": f"de-{stream_id}",
        "name": name,
        "group": group,
        "logo": logo,
        "url": stream_url,
        "resolution": res
    })

    m3u_lines.append(f'#EXTINF:-1 tvg-id="{stream_id}" tvg-name="{name}" tvg-logo="{logo}" group-title="{group}",{name}')
    m3u_lines.append(stream_url)

# Save M3U8 file
with open('germany_iptv.m3u8', 'w', encoding='utf-8') as f:
    f.write('\n'.join(m3u_lines))

# Save JSON file
with open('germany_channels.json', 'w', encoding='utf-8') as f:
    json.dump(channels_list, f, ensure_ascii=False, indent=2)

print(f"Successfully generated clean {len(channels_list)} channels in germany_channels.json!")
