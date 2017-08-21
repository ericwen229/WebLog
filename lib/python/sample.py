from time import sleep
from weblog import WebLog as wl

wl.config(url='127.0.0.1', port=8082)
for i in range(10):
    wl.log('testing #%d\n' % (i))
    sleep(1)

