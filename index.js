import Express from 'express';
// import path from "path"
// const __dirname = path.resolve();
import hisprice from './routes/hisprice.js';
import price from './routes/price.js';
// 创建服务器
const app = Express()

app.set('x-powered-by', false)
app.use(Express.json())
// 配置中间件
app.use(Express.urlencoded({ extended: false }))


// 配置路由
app.get('/:purl', hisprice)

app.post('/price', price)

app.all('/', (req, res) => {
    res.send('404')
}
)
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Start service success! listening port: http://127.0.0.1:' + port);
})