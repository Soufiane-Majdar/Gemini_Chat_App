'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "fc4c56fabb43f7baf4dc0be6d497fd8f",
"/": "fc4c56fabb43f7baf4dc0be6d497fd8f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"version.json": "d0b8ab9d6ff358e74034940f017274bf",
"manifest.json": "c7157ec0a181303869208cfc6996885f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
".github/workflows/jekyll-gh-pages.yml": "2298ba4da64197a0fa321ba698d085f2",
".git/ORIG_HEAD": "a26ec7ab622368a7c3c1fd519bd6de80",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/FETCH_HEAD": "2652443f7d03a213327bfcfb43892fff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/e7/160f23a0178bb105da0e5d952aafe24a6967c4": "8511af520008ea4d034c5016562f954b",
".git/objects/e7/e55d4620a646e42cd4cce7ae7824eb1b82c60e": "00159b1a201bea609cb6ceb736edeb39",
".git/objects/b6/026c9e5da9871468e4f2ff3027c312649c26a2": "8b248f8a40bc24321fe21fb9fdf7f694",
".git/objects/33/3f5548eba2c41ff157ce651878068ef80031c1": "ca64e7595e8478e0fe1ccaa98c432a0c",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/e9/0fa6fd277e87c05830d9d7b892149f2ff27158": "f678acb17702031ae10dd2b5e66ff0e9",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/53/6bb8c2b5786a56d3fb41081064fadbab20b95f": "01b3e2062289513b0a6b615f9b4ccd74",
".git/objects/c3/73342b46e5e43ed228d0ef56334f0097069ed1": "fbdc7ccc77a665d7a8b1de7b24a223ed",
".git/objects/c3/ed4fde70c6937b24c17fe40f86ac90fa384f29": "d2f4589b44e042a04cd2d72bdb52e7e6",
".git/objects/3d/6c9bd3d998d3efed443f6edaef802b6097ee45": "edbc63ebe68a5fb7fb85ab72941d9c3c",
".git/objects/3d/31f7fabf2e52d424efacc130f6ac74b8e9aaf2": "843c7b147f7858aacb767956fa4fc1e9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/46/c3f1812e94a1e353f687a728c7bf1172db817f": "bccb1549f9544aa2fec973e3e794ab03",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ed/df67a39ef60191a466ba0c7508aafcd50379c1": "47ca64709792bacc4dbe6d743922d8ee",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/38/4cccee6304a1e37ed2c6c380c669bf7c52efb3": "767547b049668062272f2e2598384e92",
".git/objects/05/2757765c4a36ff45d1815e22d5357086ec1ebe": "7c8897f265f97cbb589d386eefcf4329",
".git/objects/83/b525fe84f46d19e9425ef2b986d747ccb46b06": "12f6b57456309f1487b155dad7d5268f",
".git/objects/04/c0bc35db5bb0c5b74b7db2a8412cea8f2c0d18": "6feb941a84bff410b1a7df4f8dcd1aaf",
".git/objects/27/eb58c7a3d2c7d3b226b0e51fffb026fe52c6b6": "31c7ee080ebb7a14f8484b4f4f6f1c78",
".git/objects/27/a2acd7b9053ab12c5c09bdc2db53cabdf3d066": "6c399ea4dd68ba8d524b67e5b1d49c61",
".git/objects/24/34a4d4bb39f9aa2436705c5040440df50121e6": "627c6f07861e732c708e4c0544fb8886",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/3c/2ea7ae9b52be9f84333228e68fa62a70562783": "d9fa184f835cb4b56638908044560c70",
".git/objects/06/9e4a1bfc8ca9d3a51363d52e0ceeebb5e9904c": "820bf1e098004ee4a5a1f19d69cf26d5",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b3/98aa2a458da8cfbda422025510d22e9e664d64": "0781df424cd30e48b0dd6c4e5560a090",
".git/objects/d7/260c5041bbbbe1970cb25eac968ee7d11f2a51": "60eda8c2d0b10dbe2291349408aa3266",
".git/objects/96/343370a3ef1dce34f66187136a42c7b7b414df": "cbe4e3b35820dabaddddea5bd9b75b0c",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/81/af39b0b1a3c99b4adb810f10c19094bcdfe779": "cbb37eb527b1ac087acbc44193bb8e79",
".git/objects/2e/486973a9f558fb24d32f65eedbefb5e9d123f6": "c13f9435a5d397e45f90186aa125574f",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/9f/035cfef8b33a06a1e3e0dd956b2d2a2f57f250": "82563dd2a960bda8d342a81aaf8de4c4",
".git/objects/02/362c225101a4646cdd530b04bceb8abf04df50": "82fe796d840429226f517865aa5d773c",
".git/objects/42/1613d862b1ad691677d821ef1c71b76e36ec85": "432fb488ade3bcbabd45f2b1d3c4a44f",
".git/objects/15/61ccdcd51e6fd6699765f8452eb4c0c1e0ba63": "484f912f1a5b6b43870a0ed0ef4cbfd9",
".git/objects/36/43af859579fca335be9c58b885e13cbcd23fc9": "00ed9a75dbe0f9950251f3d24f4f0f86",
".git/objects/ec/b38d917bce9895f08b82570de45f6734bab6fa": "df2068a1681e9a9b46d0a2f676dca79c",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/ff/f4ab923ce55f11569939421ffa39cd3566f5d9": "8b646f4d41169875cc1bae313ee800b9",
".git/objects/69/2ee1146e8b809b3dcbaaa3ad31382970128a92": "7eb1764fbcef9c4a6e0e2a203c801356",
".git/objects/e3/1d81c5864303b9e18929ca21a5bc41e64f39b2": "bb23507a304b81176b85df2decb1d6ef",
".git/objects/e0/d42e48c1a5bd6654dd431553e0a4cd4755962e": "7eca0ccb40eb753cb988ea16fa50e612",
".git/objects/71/5f9d4bea2485014d7797bdce8a66e5910b1cf0": "d5e08bbacccaa7f786ef6edc5d33a3fc",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/21/5bc9ac96f064a38a16240574d25a3694d77f4e": "51faab31969d771c7742d94b0ee08739",
".git/objects/85/624f0f36bd3a1c6586faa952f4e0fad5d3e873": "21b9ba06869a12469dc3c6d333151c9e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ab/1a63db88abbfc7349235701f3bb76170dba33a": "bff39bf1a1ab97a21089d7224d01ac2e",
".git/objects/56/534fac60fcd56fd4df33c47b121df0b62ec278": "0c55d3845ec8ba26ace74902420d17c4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/54/7c077010c7a9c3c63fd145b761697b39494b62": "a0811b30a10b453e0e5429f2f77556e6",
".git/objects/2f/7efbeab578c8042531ea7908ee8ffd7589fe46": "aa9408a44a7560b833dd793a6cb10ddd",
".git/objects/23/1bc5565e45853a1ffaf2681323de49fba254ed": "fa81f91a8ff6fe0b08ede2f2ebc2a0cc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/f6/5338ba684444ac058ffe9a6964f2ebb4802508": "f9a5efa3614d86ec3c37eabc76ec87f2",
".git/objects/17/4b9cb63d1b4095cf61c6bd99c0d9ee67954608": "5dae60c12925cc1d896d23bd8106d5c2",
".git/objects/dc/cf3b9fa11c987e49706b757cb87d933dd55bef": "f095d876a4e4873616390e6dde4851e8",
".git/objects/d2/ff0f72613c976ef54cd36405f0ecfd8ee90108": "dc4aa78a38601e0260c7bc6b30aa595a",
".git/objects/d2/5f832d065d045dbb3786da9f99af5bff79241b": "bd4ca43db91ec6259d81df9d58c889ea",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/97/8afe5c8292cc841ec4c88cccd8f37828322d2b": "ed4459d22c896830981b319721c381ad",
".git/objects/75/701c94ebeeff39be1977ff4d0e000312bfee68": "7b44b0cf337d8e8b514d9b87806264de",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/99/5b4afe6c18e42fd0a6231be0d552dac4c2bcde": "9555e58d76e7157380618fce0bae645b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ae/75b09712d6d2f9c42eaf80324c9a489516f0b8": "11addca09920ce3f5c421f9ef8a1a0f6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/3f/a5e7a52b9370e9e3944287b4373b6795275079": "bdc3d05d566c23df45d748b8727961c8",
".git/objects/ad/bb03f26c64d8df0e35fe603f01d889d10df0c9": "ac0a7971ee8875290be000da0dc5b24b",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/refs/remotes/origin/main": "76c5939d86c7c060a2f3262eaa14ec0c",
".git/refs/heads/main": "76c5939d86c7c060a2f3262eaa14ec0c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "3e8deb514b42cd27d9fb452376fcccc3",
".git/config": "5b4c6f53d4a40779d230bda728d7d5ef",
".git/index": "e47b1dd579277f6cce5e8d1c7f4c83a0",
".git/logs/HEAD": "ad7ddd3c614edecbd6550c279f9bd266",
".git/logs/refs/remotes/origin/main": "1e97b0ae620c6ce88a1bda17c5f21757",
".git/logs/refs/heads/main": "9277221d24e0735f406b2354635e195e",
"main.dart.js": "08f248172621d9af2eab2b956ade01cf",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/AssetManifest.bin.json": "3e970273d111185a87b0a0cf89c3c2fd",
"assets/fonts/MaterialIcons-Regular.otf": "839f1040ee76210b5ccf2aeca3c0c163",
"assets/AssetManifest.bin": "a795623ad6157c69555724cde138686e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/dash_chat_2/assets/placeholder.png": "ce1fece6c831b69b75c6c25a60b5b0f3",
"assets/packages/dash_chat_2/assets/profile_placeholder.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "b897553a769cd2e827c7d78fa4b1c5b1",
"assets/AssetManifest.json": "84688d4c031099e75ab56c1fcd0eaf6f",
"assets/assets/google-gemini-logo.png": "b27a6ce458b6b3c1419e31a672dc9352",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"_config.yml": "d88166bbeaf9421921db9fb119080112"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
