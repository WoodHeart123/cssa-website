const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');
const SitemapPlugin = require('sitemap-webpack-plugin').default
// You can write the paths as an array of strings or an array of objects
const paths = [
  {
      path: '/',
      lastmod: '2022-09-06',
      priority: 1.0,
      changefreq: 'yearly'
  },
  {
      path: '/AboutCSSA/',
      lastmod: '2022-09-06',
      priority: 0.9,
      changefreq: 'yearly'
  },{
    path: '/Contact/',
    lastmod: '2022-09-06',
    priority: 0.9,
    changefreq: 'yearly'
},{
    path: '/Member/',
    lastmod: '2022-09-06',
    priority: 0.9,
    changefreq: 'yearly'
}
]
module.exports = {
    configureWebpack: () => {
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    staticDir: path.join(__dirname,'dist'),
                    routes: ['/', '/AboutCSSA','/Contact','/Member'],
                    renderer: new Renderer({
                        inject: {
                            foo: 'bar'
                        },
                        headless: false,
                        // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                        renderAfterDocumentEvent: 'render-event'
                    })
                }),
                new SitemapPlugin({ base: 'http://www.cssaatuwmadison.com.cn', paths })
            ],
        };
    }
}