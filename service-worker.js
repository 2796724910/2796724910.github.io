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
    "url": "404.html",
    "revision": "4126e59d6c99eebce31dbfc60390e676"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.7cc586ae.js",
    "revision": "e1122f8868c4e6315e8a7bf11d315b22"
  },
  {
    "url": "assets/js/10.51e1d46f.js",
    "revision": "8f92585f2c257ab4fdc9c04b9a4e6b04"
  },
  {
    "url": "assets/js/11.64843a3d.js",
    "revision": "06ffa0bb3165b1d8ec2e19e1297c6565"
  },
  {
    "url": "assets/js/12.4fb260f4.js",
    "revision": "975fb7d05964bb074f6c4f8eaa6d4d9a"
  },
  {
    "url": "assets/js/13.1e31eb7d.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.872488a3.js",
    "revision": "7d5adaaf2e449ab6248b4c69383d1507"
  },
  {
    "url": "assets/js/15.7da432ba.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.2dfcc019.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.7bc3218e.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.6e360152.js",
    "revision": "7ab1ea39429d17256addd80ff592867b"
  },
  {
    "url": "assets/js/4.108a7e30.js",
    "revision": "2971ff8699ce6f0f8b7e5017c3ef1a5e"
  },
  {
    "url": "assets/js/5.dd47fe1a.js",
    "revision": "7cca75e8e4ba93d3c9450f7abb9a64a5"
  },
  {
    "url": "assets/js/6.298f61e3.js",
    "revision": "1ec20a6e7e67382f2246b0f1365beaf5"
  },
  {
    "url": "assets/js/7.2bffdee6.js",
    "revision": "7d30b98bfd57db7181109a2a075025be"
  },
  {
    "url": "assets/js/8.dded6dc4.js",
    "revision": "cbe2e70db850a968b3fe5ccba1bccd99"
  },
  {
    "url": "assets/js/9.970031bf.js",
    "revision": "bca34c4ae9ae3c148ea244fbbf490c70"
  },
  {
    "url": "assets/js/app.024bc549.js",
    "revision": "348509da9d6a6003908f558b3134be90"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.8e492b97.js",
    "revision": "5f74bb947a906e821af871857bb92c32"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "075eefc9e27f3281a4a8d2bc0eafa21c"
  },
  {
    "url": "categories/java/index.html",
    "revision": "89569cf02945a1bfbea23defce9439a1"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "94dcd059a879b26881970e8fe600ed5f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7feb62140dc544fb46281b29b14f93eb"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "99efda105d800f5250c9799cfc15334c"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "74097944b9c2208de9a5f2120078e5bb"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "5585f8aaad9d6b443a07088ea8ae18ac"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "8a014407c696cc2c85bd1f0e97f5c4e4"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "fe8aa68ab856ed54620949d5699366cd"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e1a599ec95c34a8c04ff73e3075f01bd"
  },
  {
    "url": "tags/js/index.html",
    "revision": "10167cdee7f55966a7bc431173387543"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "9f07dde5551cd37285bd316a98d1d491"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "360fcdb30f36027597683da7e8b0157d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "fb09dcbf428061068ad814b04925731a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "2a7ae427b66672fdcda5ce714c7cc591"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "b90fb7596b88546c2f890daf4e882056"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "c1256f2d64ff727b1513074d4529ca02"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "6da1ca3b653836b420c1781902e4fd59"
  },
  {
    "url": "timeline/index.html",
    "revision": "dd1544d662ab0f6651a748595f767696"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "71ca4c3cfd875f4e3cf063b6ec7fe7ae"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "034720b7dddf436512e97c56532f6835"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "1ba46c8534ec04d84fa47691e72f9f68"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e13d884e440778cd875f9714d6ba8dfd"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c5b4ae48ed0ef7ab620f64218d69f28e"
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
