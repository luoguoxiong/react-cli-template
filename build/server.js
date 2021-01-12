const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const config = require('../config');
const koaStatic = require('koa-static');
const Router = require('koa-router');
const compress = require('koa-compress');
const app = new Koa();
const chalk = require('chalk');
const router = new Router();
const files = require('./view/config');
const regTestFn = reg => str => reg.test(str);

const isEndWithJs = regTestFn(/\.js$/);

const isEndWithCss = regTestFn(/\.css$/);
const render = async (path, ctx) => {
    const js = files.filter(item => isEndWithJs(item));
    const css = files.filter(item => isEndWithCss(item));
    const scripts = js.map(script => `<script src="${script}"></script>`).join('');
    const styles = css.map(style => `<link href="${style}" rel="stylesheet"/>`).join('');
    const title = 'test';
    await ctx.render(path, {
        title,
        styles,
        scripts,
    });
};
if (config.build.productionGzip) {
    app.use(compress({}));
}

app.use(
    koaStatic(config.build.assetsRoot, {
        maxage: config.build.cacheControl,
        gzip: config.build.productionGzip,
        extensions: ['html'],
    })
);

app.use(
    views(path.join(__dirname, './view'), {
        extension: 'ejs',
    })
);

router.get('/count', async ctx => {
    await render('count', ctx);
});
router.get('/', async ctx => {
    await render('index', ctx);
});
router.get('*', async ctx => {
    await render('index', ctx);
});

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(config.build.port, () => {
    console.log(chalk.green(`server is running at http://localhost:${config.build.port}`));
});
