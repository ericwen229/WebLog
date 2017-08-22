import urllib.request
import urllib.parse

class LogManager:
    url = '127.0.0.1'
    port = 8082

    @classmethod
    def config(cls, url='127.0.0.1', port=8082):
        cls.url = url
        cls.port = port

    @classmethod
    def log(cls, logStr):
        try:
            data = urllib.parse.urlencode({'str': logStr}).encode('utf-8')
            req = urllib.request.Request('http://%s:%d/api/logs' % (cls.url, cls.port), data=data)
            res = urllib.request.urlopen(req)
        except Exception as e:
            print('[ERROR: failed to upload] ', end='')
        print(logStr, end='')

if __name__ == '__main__':
    LogManager.config(url='127.0.0.1', port=8082)
    LogManager.log('hello, world\n')

