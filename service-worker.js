/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "404.html",
    "revision": "e9aa3df6e7ebad64e99ab1ea5319f968"
  },
  {
    "url": "assets/css/0.styles.328a9450.css",
    "revision": "2c053af2c61c882de2bcdbc7a3d6e070"
  },
  {
    "url": "assets/img/bg.97fa5136.png",
    "revision": "97fa51366ebe43b418897531a9688a0b"
  },
  {
    "url": "assets/js/1.5714021c.js",
    "revision": "9ffee40490b26bac401c3dc5fb4f35d9"
  },
  {
    "url": "assets/js/10.accff01b.js",
    "revision": "de07e6da97365f8dbba22f44f7632a2b"
  },
  {
    "url": "assets/js/11.2142b47a.js",
    "revision": "da1a78b91b4e4b5003e0f138351ae1e8"
  },
  {
    "url": "assets/js/12.e1da2162.js",
    "revision": "7c024425aacaab23d4bb25c44c7f4fe2"
  },
  {
    "url": "assets/js/13.58af5cbf.js",
    "revision": "6c11c9f3139aa40adbd6ffc5de85816b"
  },
  {
    "url": "assets/js/14.f40cade5.js",
    "revision": "d4bf44ea1e7e35eb1524fd398f8a54c7"
  },
  {
    "url": "assets/js/15.35435d71.js",
    "revision": "c1d9946f63fd46414e995e76102d7beb"
  },
  {
    "url": "assets/js/16.1d497959.js",
    "revision": "3cdac141ba9b8e1d973b46db51649d80"
  },
  {
    "url": "assets/js/17.533aa19f.js",
    "revision": "54df60c6ce5271933dccf0e0203d9d76"
  },
  {
    "url": "assets/js/18.3102ac72.js",
    "revision": "82a4f18ad6b10222423dd141f83e675b"
  },
  {
    "url": "assets/js/19.19780362.js",
    "revision": "e79147751fcc4d3c6859c9cb5bf8ebde"
  },
  {
    "url": "assets/js/20.159652de.js",
    "revision": "271860687b948e7454bfe5f237b2f930"
  },
  {
    "url": "assets/js/21.7c96849a.js",
    "revision": "d0fcb0fc3116141884ff60ae15b8c7f8"
  },
  {
    "url": "assets/js/22.5c94db75.js",
    "revision": "5b6361ec9ce5bd91fb4fe547ad7defbf"
  },
  {
    "url": "assets/js/3.603c4aab.js",
    "revision": "0771208328716a023d956e6a88578692"
  },
  {
    "url": "assets/js/4.e24886dd.js",
    "revision": "43ebf2695e3772fa378dd47d9148cfba"
  },
  {
    "url": "assets/js/5.89a1ea21.js",
    "revision": "1bfbb66a22330994616a85c14b4532bb"
  },
  {
    "url": "assets/js/6.058cd792.js",
    "revision": "966abfceb330b17153fa78042277c105"
  },
  {
    "url": "assets/js/7.4d628511.js",
    "revision": "338a5e42653fe8d0cffd605202817be0"
  },
  {
    "url": "assets/js/8.2f4fad3d.js",
    "revision": "4ce466843b1b3fc9e673e5328dfc5811"
  },
  {
    "url": "assets/js/9.981486a6.js",
    "revision": "da3d2d98b393a1f5da8522da62bbedca"
  },
  {
    "url": "assets/js/app.70aebece.js",
    "revision": "b11434faaaa7cbb542858cfe22a206e4"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/JavaScript/Effective JavaScript 编写高质量JavaScript代码的68个有效方法.html",
    "revision": "75e86358e88bf2031e7bcd960cb02d59"
  },
  {
    "url": "blogs/前端.html",
    "revision": "00c971753b2632fc5e08984c8b83be14"
  },
  {
    "url": "categories/index.html",
    "revision": "b7f6f26c4b7fd174d907483771908b20"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "283b88dc4e4a4bed37f4f08a7ed076c9"
  },
  {
    "url": "docs/Front-end/index.html",
    "revision": "99e4e79f9788ce8dce64de3331d6ae57"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "34b2c0255b7163f301aee94c0f3ff258"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "0842ebc8218e001427535b9032dde735"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "07bf9ac23019ff8694215b7e68cdb4bb"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "0a7a43c84d147b03638c5c3c7d9385ef"
  },
  {
    "url": "docs/深入学习JavaScript/01-JavaScript深入之从原型到原型链.html",
    "revision": "116b425f9d449990bfc342c4da6609c3"
  },
  {
    "url": "docs/深入学习JavaScript/index.html",
    "revision": "5a5c4da34da887936a67397ef06bc7ad"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "484a09f7e639328207056ed014b7890b"
  },
  {
    "url": "logo.gif",
    "revision": "b334e83801e81cc0f5bf6677e91e6338"
  },
  {
    "url": "tag/index.html",
    "revision": "0402440bb2c8079da821757fbe99753d"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "2d46384b5dbb9ebe7c0e730789c70c91"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "721544c6f36f1a23077c9ea00e0535b1"
  },
  {
    "url": "timeline/index.html",
    "revision": "51ed75ad4964c11f7b724634beb50d33"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
