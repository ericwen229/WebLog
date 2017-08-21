import urllib.request
import urllib.parse

class WebLog:
    url = '127.0.0.1'
    port = 3000

    @classmethod
    def config(cls, url='127.0.0.1', port=3000):
        cls.url = url
        cls.port = port

    @classmethod
    def log(cls, logStr):
        data = urllib.parse.urlencode({'str': logStr}).encode('utf-8')
        req = urllib.request.Request('http://%s:%d/api/logs' % (cls.url, cls.port), data=data)
        res = urllib.request.urlopen(req)
        print(logStr, end='')

