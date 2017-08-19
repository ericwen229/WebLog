from time import sleep
from weblog import WebLog as wl

wl.config(url='127.0.0.1', port=3000)
for i in range(10):
    wl.log(str(i))
    sleep(1)

