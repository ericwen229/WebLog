WebLog
========

What is it?
--------

WebLog lets developers upload their log to the server
 and get real-time update from a web page.

This software is free software released under GPLv3
 license.

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

Setting up the server
--------

Prerequesites:

```sh
node # or nodejs, whatever
npm # should've come along with Node.js
```

First clone the project (or just download it):

```sh
git clone https://github.com/ericwen229/WebLog
```

Then go to the `server` directory, install
 all required dependencies, and start the
 server:

```sh
cd WebLog/server
npm install
node weblog.js
```

