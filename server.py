from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import urllib.request
import urllib.parse
import shutil
import os
import sys

PORT = 5173

class IPTVProxyHTTPHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, HEAD')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        # 1. Live Stream & Segment Proxy (/stream?url=...)
        if self.path.startswith('/stream?url='):
            raw_url = self.path[12:]
            target_url = urllib.parse.unquote(raw_url)
            
            print(f"[Stream Proxy] Connecting to: {target_url}", flush=True)
            
            try:
                headers = {
                    'User-Agent': 'IPTVSmarters/1.0',
                    'Accept': '*/*'
                }
                req = urllib.request.Request(target_url, headers=headers)
                response = urllib.request.urlopen(req, timeout=15)
                
                content_type = response.headers.get('Content-Type')
                if not content_type:
                    if target_url.endswith('.m3u8'):
                        content_type = 'application/vnd.apple.mpegurl'
                    elif target_url.endswith('.ts'):
                        content_type = 'video/mp2t'
                    else:
                        content_type = 'application/octet-stream'

                self.send_response(200)
                self.send_header('Content-Type', content_type)
                self.end_headers()
                
                shutil.copyfileobj(response, self.wfile)
                return
            except Exception as e:
                print(f"[Stream Proxy Error] {target_url} -> {e}", flush=True)
                err_msg = f"Yayın Sunucusu Hatası: {str(e)}"
                if "403" in str(e):
                    err_msg += " (Hesap eşzamanlı bağlantı sınırına (2/2) ulaştı veya sunucu erişimi reddetti)"
                self.send_response(500)
                self.send_header('Content-Type', 'text/plain; charset=utf-8')
                self.end_headers()
                self.wfile.write(err_msg.encode('utf-8'))
                return

        return super().do_GET()

def run():
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)
    
    server_address = ('0.0.0.0', PORT)
    ThreadingHTTPServer.allow_reuse_address = True
    httpd = ThreadingHTTPServer(server_address, IPTVProxyHTTPHandler)
    print(f"==================================================", flush=True)
    print(f" IPTV Web Hub Sunucusu Aktif: http://localhost:{PORT}", flush=True)
    print(f"==================================================", flush=True)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nSunucu durduruldu.", flush=True)
        httpd.shutdown()

if __name__ == "__main__":
    run()
