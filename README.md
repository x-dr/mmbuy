## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


## Use it

> POST
```bash
curl https://price.tryxd.cn/price -d "p_url=百亿补贴 38亓，立白茶籽洗衣液10斤/箱 /HeCrdb5EHOf/  CZ00"
```
+ `p_url` : 淘口令或京东链接

> GET
```bash
curl  'https://price.tryxd.cn/100038004359'
```

