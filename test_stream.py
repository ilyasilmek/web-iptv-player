import urllib.request

user_agents = [
    'VLC/3.0.18 LibVLC/3.0.18',
    'Lavf/58.29.100',
    'IPTVSmarters/1.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
]

stream_id = '88956'
for ua in user_agents:
    for ext in ['ts', 'm3u8']:
        url = f'http://germanyservers3.net:8080/live/ilyasilmek/13467900/{stream_id}.{ext}'
        req = urllib.request.Request(url, headers={'User-Agent': ua})
        try:
            with urllib.request.urlopen(req, timeout=5) as resp:
                data = resp.read(2048)
                print(f"SUCCESS [UA: {ua[:15]}, Ext: {ext}] -> Status {resp.status}, Got {len(data)} bytes!")
        except Exception as e:
            print(f"Fail [UA: {ua[:15]}, Ext: {ext}] -> {e}")
