'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".firebase/hosting.cHVibGlj.cache": "e92bff985f502350f2fb3b4fb33b52e3",
".git/COMMIT_EDITMSG": "eac38bb8b4dcf4a2dde85c05ef11f1c0",
".git/config": "d0680fc67db25b0bd74269a9fd752889",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "032e16af4c93ce2094dd33933f8a6665",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "22efaf20d586920d9e0162520eaf260c",
".git/logs/refs/heads/main": "994afb5e157f76477c1fa9771eca51b3",
".git/logs/refs/remotes/origin/main": "586d86306acf90a81ade91068fc895b2",
".git/objects/03/d9ea51af1a977689d085bf79f64fe389f1d1b6": "cf29d5eb04126ed860e2b573b3256320",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/c0be6e57eda12ffffa9a6c7a4c73879455e493": "cbfbb590d0610ef0301d1795e62046c8",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/16/13484695524be252cb089e1f633c91d2a47cb7": "48eb05a61e518eb93d17529fc0103d7d",
".git/objects/1a/c7d9194ad9382c63a550dd01af2e49887affb2": "3438889a71229e11eb05e1fb21eaa862",
".git/objects/1b/8300be499b327b1a41a00fd9ad5235ef14c079": "7cfa9bf1763dfb4fc0127b6af0d69d64",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2b/b07f01dc0e91b2e3bcc3344e9d14a256e94f19": "77d0100a6933a3f28d75272acbd4df69",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/6cfde759e8c38748df8e53e4868fddd4a03066": "f9894abc0961df2dfe82cc0139d39eea",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/53cd7e83fb9a9de9a40d34b2ae65764481ba91": "a812c9401c8c860d93a4e8edce55bf6b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f64d61064c62026217d4a4f1e3f148a2b98169": "3651d8e44c95e17df0c1951dd1993717",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/c3b627f202bd1f7a211e6ef34e448ee86b31c7": "ef0feb2b9aa21224d15169a16b284cac",
".git/objects/56/66bea121fe718e638749589b0878e10ccbb509": "22f40b015bbfa6ef01329aee2817b8e2",
".git/objects/56/fca1da81800e5e29a4015d9659fb7e962c0be9": "1b2141664c490b08f595cd6666ef3ee3",
".git/objects/64/66abb010c24d670c8a091df5fe5cd299a348fb": "6e0c789bb3fe36dd2dbae564805c6008",
".git/objects/70/c3d97a5c70f7d29cca5692c5cf70dc26da2201": "bcf4e847ad694ee99a232ee3655932f4",
".git/objects/78/03c2ae87de83e62d1708641674077d879c1012": "a2eabe96e6e3fe8b8d320113a406a147",
".git/objects/7a/e536ada27b2eff79b7aced369997482f4341f2": "e44a8522793ffe474a8ad8bc1f09c369",
".git/objects/7f/b726f84d9811eea106591521748acf989410b3": "d38ad4844a6729eafaef8b1234bb39d7",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f56a68e63198e651eeaf94823ce6cf3a98587f": "2a24d08fb28c7399c6237ede504c2c15",
".git/objects/94/1f3423c4d47bff7f7181241c12acff366c8515": "6c9d57d36e05028b960185cb513ae4dd",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/201dcccd0a639d56ca12614869d88682bff129": "30fd6649d6896fa556c77ae1fcba76af",
".git/objects/9a/5cd9eb9770f3c25b4c4016db7c322520309e5b": "e5797e3f870f3aa2b0f692a017241dae",
".git/objects/9e/d7a06fab3ca2dc6a5267a547f3a5864a982ae4": "adcd662c163d1668862b83f75fa16736",
".git/objects/a2/c120243538e9359e837283b6ff06bca79f74da": "273c7a97dd4d521888770f3573f2e775",
".git/objects/b0/63b2bf74629190357951ada97fc195f84c7937": "a874def71c2ac61ce030037807aaae75",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c2/6a4d383c8f249a7867d35f63418de129072974": "f0bb073ec1fa8257827e01817138d0da",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/cd/35507e41f20cd1b60d9d860fa5ecf45f8d6052": "09acd05a6c53bee5213371e69964a88b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/385020e204b0f08254e00823cb06ae867b963d": "7e5bff4e3b475a45902ee75903926315",
".git/objects/db/b58ffbfa3c0d813911938b50b946c8eac0c9e4": "b51b7dc588315ca3de6735899fdb79f3",
".git/objects/dd/d05644e07d1b8f63edca45fc787419b5392cd2": "f8f3fbb9949d435890b501cbb33cb5e2",
".git/objects/de/03361663e682c6a2468e67a82d9ef49cb4e517": "dffcc3a5241eacfaa641f4f4540f5251",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/82939234c1352f011da86be23f3fdd6e743347": "9c428554f5bdd21d9a4777d78f5f5090",
".git/objects/e7/cc605b1113d128fa9a329ebf5cda281a80ea7f": "6a144b3f45a7749a68840e07944e3bf7",
".git/objects/e8/704436b9d88e1be67725c2725328ef867c304c": "b9e3e125dd9b60fc832ec1f7aa1cf0fb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/0c9a9cb2323e18d57363cfd885b97acfe9dd7f": "ab7264c06a36cbb652d783e8922bfddc",
".git/objects/f6/650409c4a8e4a071e9ffae2e07d726466c8e0f": "bdf485bcf19434f80e8ffe678c313543",
".git/objects/f8/510c5664686c7021ef05de3ac675d6a2a24980": "02fb350f7714cf49d092c892afb548b7",
".git/objects/ff/20a20a60b43063d8751b5da57670210804453a": "1274c234e0e18c7c0725aeb0fbcd8a8a",
".git/refs/heads/main": "e680697c7fcd0b98de2047c03e547f07",
".git/refs/remotes/origin/main": "e680697c7fcd0b98de2047c03e547f07",
"assets/AssetManifest.bin": "84ef81f9c781fdad661ec904b36a82fd",
"assets/AssetManifest.bin.json": "f3f4896417d39673b0e187e94f0cc303",
"assets/AssetManifest.json": "f9e70907f91556c822bbe9221397356c",
"assets/assets/about.png": "621bad9ae4d440883a46ade037cb3077",
"assets/assets/app_logo_rounded.png": "f3737814b02d07d5516d5395a22b0d68",
"assets/assets/app_logo_sharp.png": "6bb6589c6e599acfcd31f0899dd0edad",
"assets/assets/arrow_right.png": "2accb92a5b50cfa1f8061da13b638269",
"assets/assets/background.png": "cdbe620567d2bcb31f36c7db3f9b0854",
"assets/assets/calendar.png": "4572deabdacaf6ef9e922d5fb7c0582f",
"assets/assets/camera_icon.png": "33984f0debe7281b72d75baa8195132d",
"assets/assets/dilg_logo.png": "f538880e375850b82f63edafba534e0c",
"assets/assets/email.png": "49b9a54d1a66305ee959325dc2ebc7c6",
"assets/assets/forms.png": "b75fb8d8afbb4fbd217fa40c1f0df253",
"assets/assets/gallery_icon.png": "3682496b6bb48ca7d64242a08157019f",
"assets/assets/key.png": "fbc58eb206564dbd8f9f61c28a06f867",
"assets/assets/logout.png": "2866f3d528fc1b46801f482d49fc3d2b",
"assets/assets/manual.png": "d9d529b4578eab5ea2a0e7e33685cecb",
"assets/assets/upload.png": "a90fcb1a8fde4a58c5c2a361f93aa3e1",
"assets/assets/user.png": "29479ba0435741580ca9f4a467be6207",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0d159e33002d268f4da6bc7588c4eaa1",
"assets/NOTICES": "c9d54cbf4b36b6fcbaa2f1139756e3df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-debug.log": "0f81292296d1e7a74d29fdde12830896",
"firebase.json": "9448a9ab3011b8a3ff1934c7def6d382",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5bf9773457fd9a6ed94e647d3c5fda20",
"/": "42c38dd322dd7068a55f15ecc1828cec",
"main.dart.js": "48e34cb75d8ca37c60c003db1a3eee6d",
"manifest.json": "03860a02d5a29ea7312219b5ad4ad3a2",
"public/404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"public/index.html": "42c38dd322dd7068a55f15ecc1828cec",
"version.json": "65edb3c765ac8676c30b4615066ff7a8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
