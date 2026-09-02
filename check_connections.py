import urllib.request
import json
import time

base_api = 'http://germanyservers3.net:8080/player_api.php?username=ilyasilmek&password=13467900'

for i in range(4):
    req = urllib.request.Request(base_api, headers={'User-Agent': 'IPTVSmarters/1.0'})
    try:
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = json.loads(resp.read().decode())
            u = data.get('user_info', {})
            act = u.get('active_cons')
            mx = u.get('max_connections')
            print(f"Check {i+1}: Active connections: {act} / {mx}")
    except Exception as e:
        print("Error:", e)
    time.sleep(2)
