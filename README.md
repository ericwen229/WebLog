WebLog
========

What is it?
--------

WebLog lets you upload your log to the server
 and get real-time update from a web page.

This software is free software released under GPLv3
 license.

Why this?
-------
In most cases, tools like ssh are adequate, except that
 the worker machine is not accessible from public network.
 Suppose there are several machines in a lab, and usually
 few of them have public IP addresses. Therefore, things
 would be much easier if a server is set up and each worker
 machine post its log to the server.

How to use it?
--------

First you will have to set up the server. This can be done
 by simply cloning the project and run.

Then use the library provided to print log in your program.
 Actually the library (currently only Python 3 version
 provided) simply encapsulates the HTTP POST request that
 uploads the log, so you can also write your own method to
 upload the log (description of the APIs will be included
 later).

Setting up backend server
--------

Prerequesites:

```sh
node # or nodejs, whatever
npm # should've come along with Node.js
```

First clone the project:

```sh
git clone https://github.com/ericwen229/WebLog
```

Or just download the ZIP and unzip it:

```sh
unzip WebLog.zip
```

Then go to the `server` directory, install
 all required dependencies, and start the
 server:

```sh
cd WebLog/server
npm install
node weblog.js
```

Default settings can be found in `config.js`, and
 are fully customizable.

Setting up frontend server
--------

See `README.md` in subdirectory `frontend`.

Posting the log
--------

Make an HTTP request as follows to post log to
 the server:

```
scheme: HTTP
url: /api/logs
method: POST
accept: application/x-www-form-urlencoded
parameters:
  str:
    description: log to post
    type: string
    required: yes
```

curl example:

```sh
curl --request POST \
  --url http://127.0.0.1:3000/api/logs \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data str=foo
```

Python 3 example (using given library):

```python
from weblog import WebLog as wl
wl.config('127.0.0.1', 3000)
wl.log('foo')
```

Python 3 example:

```python
data = urllib.parse.urlencode({'str': 'foo'}).encode('utf-8')
req = urllib.request.Request('http://%s:%d/api/logs' % (url, port), data=data)
res = urllib.request.urlopen(req)
```

