'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "84c890a23dfad6326a01f16fbc1f4746",
"splash/img/light-background.png": "82115b564644d4572db1a2d93fd2345e",
"index.html": "82a803913def4f87a7b581198aea983e",
"/": "82a803913def4f87a7b581198aea983e",
"main.dart.js": "3a39d6d90370c0abfe3968d254efc1d5",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "16a10d62bee9e1db978ad7a9ebd80b60",
".git/REBASE_HEAD": "8d25a6428395a1f580b2423239907cc0",
".git/ORIG_HEAD": "7f05eb217335edf3ae490f1ee9ae4237",
".git/config": "ed3c246e4e9a6056b5a8d510af2bc2ed",
".git/objects/95/ced7a083ee2a54c209ecdd2dbd7952f1516a7c": "7c3c553d2f436fcd165ee485df7babe5",
".git/objects/66/d5019e7d5bb815c4de26b604bfe4677bafd95d": "7946d5c71ab55e945f121c526547133b",
".git/objects/50/bb2e85cef8bd3edab0059f4eaae5656e75bce4": "0293e927928e83ff5b1a61967f31b14a",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/375695254ad7b9467770d23c62472b35a9ad9a": "12784217f2364ba0ca5304b22d659d1e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/cdb4f93a016aacca803e0f13bb539ddfaca22e": "7108dc1d6291d4f7b9b520a41340cb64",
".git/objects/69/2fe2d38beacbc38e254c5e5fc7d8197c1571c5": "ec1ee3488a42a714577fe6f12b498c5c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/34/b24349e357e0bfdf3e812bc992b8305a404455": "d9fec2bad62401a022fee2e6394b6756",
".git/objects/5f/22090bbbd995254ef8967bf95672025dd199e6": "ce1fe6fb0299127884fa770585b404a6",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b2/d7b92b3417fc8df61f75aeb4b4fec838ea685f": "4db0f7292407ad40bd453626a7b677e2",
".git/objects/df/64021e161687a65911c2a6504053b7c1033654": "b7b044f98cb2845c8b81d78968f4c9a3",
".git/objects/b4/020a25fe9cf441a5ba8aee3eb352693dc45205": "755704ebe3e44da932f169247ccdeb02",
".git/objects/bd/66a57fca40246dd8cd4eb9e907a1e316f94cef": "e7be37d519352cdf8f008b74d928db54",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/8a8edc7b991d48952e5930936ba39cba4b8969": "911389e3aecc5e7c94c6a56df569bed6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/0fb63a9b2c3e36ea95d3a25f5a1a60913262f4": "7b38f1cb254a812b6b154a354ca99ee5",
".git/objects/fd/72af76b0b0b2e838c53e7f8cd35ea729337bf2": "da96b343a45fe547a2dd0ca4508a5f00",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/a162a8953f749c65358a701c99ffd67c2e74db": "dbf4cf1c9975b9b4faabb86f49f54a1d",
".git/objects/fe/33e689657977654904e050d59b550c26b2de80": "8693eb74a076f5cfe5f8f4e7bbb9dd8a",
".git/objects/c8/b1cae28c869b67ab6cf8bd3ed7616c854e678c": "6119a073a82fc790696ccaf542bca988",
".git/objects/ed/620a060920beeb27d3f26e49fcb7aa8e37a3b1": "d2e88fd778e6de4bc79618b3774de6bb",
".git/objects/20/43de1b9f0b30526c94dbc0cd89b0e42005405b": "4b352414add818205fbd9ae1059cb967",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/45/338f2d322d7521bb53932d98f1849b7d7fba96": "90ff4d2004a333e9937dd674a57972f6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/5932e4532abaaa8881b1f26ed9e86f57da75d9": "3dae1492ff870055c7531eaa682f196c",
".git/objects/8a/e8353337d638cda92776a10a792ecb75e3a51e": "b0ac6e17f46391096386308a28f0161a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/3c7fa398de5997d1fc7ee66ccb28bd0941a2de": "38048cf4f8f540b3015a953e8733b76d",
".git/objects/81/bb2d3633c4989cb4cb56a14e56da96abb5666d": "8f7fc1c229c2922e4f1f32f501d7a0c8",
".git/objects/2a/2ffdf87f849d6fe0891d7feac2a455d0cd5e12": "8de7bb7743d724488e613cf47b343aca",
".git/objects/2f/844f7a95fa038f447fc27b4ed5f245ede80e60": "b806671348289d573c8cfd62320b14f8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/156678cb3638467ed10f569954709ac2a5ac3f": "cc7819cf3fcadb7fd2b52509fa8eacef",
".git/objects/07/f0a40bb3ada7e0ebe562cc9049f76ba5fd097a": "3cb0f8349d40021c64f04f760be6a26f",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/65/b700f052d7e4421862488b153a16d825a16993": "11e1afa2112e84e97d46e0c17e14a79a",
".git/objects/96/9554d207230f0dc2b85a6efeb29e6b9303365e": "13780ac3f68b81fc721afb4fcc266495",
".git/objects/3f/faa08c2ecf75074471f63bc251c73b9ff14c31": "6b317c6ef21f9c30ecbfa6b6127f29cd",
".git/objects/6d/64affbe8d37d70f5071c6eceb7566eb40933fa": "ce08bebed63077fb1d72afa337bd830f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a9/e72546197e72711c8896a650d3b13441dd3e36": "84726320677977b52922c79e3d8db909",
".git/objects/af/9795130ce514268b46ed4862897c76f6ace751": "54391a5bf4b177d8a19a62aecf3fc652",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/86bc37a19b448b049474bd75342622ee17cba2": "c8d6bc97656915994e1278521c57cb2b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/1849abd856d8e095ec1724b93c4b0c62117e51": "018572fe65b89b3975ab15aedd014837",
".git/objects/e1/59809d5380171aaa0aa2fb0aee981eaf1a16fa": "06859be3d57fcb6d9fe0400487062533",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cc/62572c5e28162dc719de97f489b163869fdf6f": "5cd3465114ee274cca5014eb2a276b36",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e7/cd71fe674e10eb95560fc40b7c0cfc000defab": "16b9902081013fb657aaca9208ab044e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4f/a106faf4bf6d103e92c423171c505cfe62736a": "3686f0f17685201b78841f5eea4659dc",
".git/objects/15/44f1079ae8c37e737462665660b66aef930436": "9601493d2171b62d86446a04fb00ecce",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1d/e2ee1a2a5730787393ba9d6b97b0842e3bcab2": "baaab18d774adabb5370399039b2d814",
".git/objects/1d/3563a453a9bb86ff93c239f849ed4fc9aa0fdb": "28e0fbfc070d6e6558bf358114db1edb",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/47/20bd1446f31e5adbcab489edc7dc1544424a0c": "f1a7df4c3911a01edb5500c8f213cb5a",
".git/objects/78/589044609935d3800df995f000e2ead3925b86": "88d1cbb258d3117bc6b884213d47a355",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0c04d35e2e2415caba3409c3d5b2ce81",
".git/logs/refs/heads/main": "16beade1ff15c2c7f4720ae8315c4606",
".git/logs/refs/remotes/origin/main": "403aa15846ceaa5910019084da40c77d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "54406a070a079c9cad97ea213bb60400",
".git/refs/remotes/origin/main": "54406a070a079c9cad97ea213bb60400",
".git/index": "d619c573deab6f08388785a1fcaf82b7",
".git/COMMIT_EDITMSG": "0beb0911c49063c70710c3c1363ccf48",
".git/FETCH_HEAD": "381d82a32763e3af162fffda6b45dfb4",
"assets/AssetManifest.json": "ee5dce59d3255b509a452633ef893129",
"assets/NOTICES": "3802cfa5151cb0ed4fe7009962c68eac",
"assets/FontManifest.json": "30f3bdfc5ff01e2a5ce922218d25eb63",
"assets/AssetManifest.bin.json": "d7f7ea962dfb598c0636c5001d6a7d7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ffddecd27a7b72beeecf5f44625d066c",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/back_image.png": "d0b7626cb58d068b0bd1f3380194cc97",
"assets/assets/images/Image2.png": "93918981c705cac79eabdc267fcd9a1c",
"assets/assets/images/Image.png": "82115b564644d4572db1a2d93fd2345e",
"assets/assets/fonts/SF-Pro-Text-Light.otf": "753fc9d460f7722614e34fe61ed1c073",
"assets/assets/fonts/SF-Pro-Text-Regular.otf": "a07152f3f0c03589a75b218b2c6536cb",
"assets/assets/fonts/SF-Pro-Text-Bold.otf": "88b6e0b21919fa6abb7899faa1571f01",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
