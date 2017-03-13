'use strict';
var fs = require('fs');
var app = require('koa')();
var path = require('path');
var router = require('koa-router')();
var json = require('koa-json');
var parse = require('co-body');

app.use(function*(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms)
});

app.use(json());

router.post('/mock/*', function *() {
    var contentType = this.req.headers['content-type'], body;
    if(contentType === 'application/x-www-form-urlencoded') {
      body = yield parse.form(this.req);
    } else if(contentType === 'application/json') {
      body = yield parse.json(this.req)
    }
    this.body = require(path.join(process.cwd(), this.request.url) + '.js')(body);
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, function(err) {
    if (err) {
        console.log(err);
        return
    }
    var uri = 'http://localhost:3000';
    console.log('Listening at ' + uri + '\n');
});

app.on('error', (err) => {
    console.log(err.stack)
});

