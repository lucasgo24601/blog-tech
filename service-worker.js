/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2020/02/14/部落格介紹/index.html","224c152ddd2463139e5ca168f2258903"],["2022/06/02/前端P.01 - 網頁三兄弟/index.html","22f6a776e90981a5f28e441143e89f37"],["2022/06/02/前端P.02 - ECMA組織/index.html","fc0a1ff06c699b6925711265a813c69d"],["2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","a76df898f4f020ffc6820d860b62c150"],["2022/06/02/前端P.04 - JIT & V8/index.html","21be062a4c9503995a7bbb7e0e76e047"],["2022/06/02/前端P.05 - TypeScript/index.html","f380b71918b8c2696536459a8605232d"],["2022/06/02/前端P.06 - WebAssembly/index.html","436dd2f30fa073dd8ab173c7f16cf257"],["2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","72da960a0b644321849f1210149c4c83"],["2022/06/02/前端P.08 - AJAX & 跨域/index.html","f6c0ea49a5027a5b0b2f503e3fa93b54"],["2022/06/02/前端P.09 - 同步和異步/index.html","077e6df5cbbb05e77da7e3a2f9b4fe40"],["2022/06/02/前端P.10 - Scope/index.html","2330dfb0cad4526524faebffd64b3d69"],["2022/06/02/前端P.11 - 模組/index.html","7c3d6b33e506495bd0d5dc7961085900"],["2022/06/02/前端P.12 - NodeJS/index.html","61a31ad1c62a2195e62a9d8505f1a2da"],["2022/06/02/前端P.13 - WebPack/index.html","06efa6cdec6df280e38c181b03088cf8"],["2022/06/02/前端P.14 - 單元測試Mocha/index.html","f7240a3b6a0a2c85b81697101ff86f75"],["2022/06/02/讀書P.01 - 人類簡史/index.html","8faa149a71adfa408eb7239a2753087e"],["2022/06/02/通訊P.01 - 協定/index.html","7a93705df690c22de0061a14ecdaac0f"],["2022/06/02/通訊P.02 - OSI七層模型/index.html","56330dd4ad4f9f40e0ce01dba74bf440"],["2022/06/02/通訊P.03 - 實體層、介質/index.html","fc0b16acdcf3bb5bfd07150ca834cab9"],["2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","08e2b922b8d730296b9aeaac66c3dc52"],["2022/06/02/通訊P.05 - 資料鏈結層/index.html","e23fe44c9c722361e8f548a79ea1ddab"],["about/index.html","c61a40962244124fe23e07d7126a1855"],["archives/2020/02/index.html","3486a6dafa5997f786dd0a2107a0ac86"],["archives/2020/index.html","d4135be1e9f77f369b40f2a7bf36d2e3"],["archives/2022/06/index.html","8db2a0f0c2ea563b9739e0f07fde3fe6"],["archives/2022/06/page/2/index.html","df12ebf1f8ff67f6ea26d5b5b30ae679"],["archives/2022/index.html","cc8d552d1c9950aec7eb835e3b5330cf"],["archives/2022/page/2/index.html","d0f8bdeb3281f94e65d091de83e22c9a"],["archives/index.html","b9542d9910800b4bf3fc2c13b5508dca"],["archives/page/2/index.html","5cdd3288230c19ecb14329136a059745"],["archives/page/3/index.html","83a99e7397633b2ce97aedd6ae1bdb94"],["categories/index.html","2b60502aa4a4a5f0b01f73c477ffe847"],["categories/前端系列/index.html","b10e0a371f1816084f41386bd099cac7"],["categories/前端系列/page/2/index.html","4459e63951ec40c7e60ef2bde52c9b74"],["categories/基本文件/index.html","303cbf74f1b1215b0aea8217665f3e4b"],["categories/讀書心得系列/index.html","35ae9638492bf24e70a247e88dbdc7dd"],["categories/通訊協定系列/index.html","e00db04048811fd75371d7afbd50d5f5"],["css/index.css","ffa6854e04063a25e3bb93b4de2eb146"],["css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["index.html","712bc160c5b9d759da991bfbbe12e589"],["js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["page/2/index.html","68af8bfad890a1517d8969a122a8e992"],["page/3/index.html","bc87fe7385949c606d950dada2d496e6"],["tags/16PSK/index.html","6ab22e26bf5709d8ee116d571da5a5c7"],["tags/1G/index.html","c6a4141b0b8a1f9e7f6f847124b0c8e2"],["tags/2-4G/index.html","b0282715148e201fb2ced79b32805648"],["tags/2G/index.html","1d371435c9a4d91fc4d18a6e3fdeacd0"],["tags/3G/index.html","7b162af9ee97613a3586556e333a8f68"],["tags/4G/index.html","b7ac59654a4a9cd2bdaf1c7cf869f6f5"],["tags/5G/index.html","a6ac197892ee631bddbb365cacb1cd31"],["tags/AJAX/index.html","e8d11e49c8e557a67f91ba10b9c757b4"],["tags/AM/index.html","783f0859690804144cb9b45df6e1710f"],["tags/AMD/index.html","9097b6a6b2966426088a7f54eac39c76"],["tags/ARP/index.html","e64db6344dbeb2faa571145072a5872a"],["tags/ARPA/index.html","4d8604f53659e6f1625134c3c4f2e8ec"],["tags/ARP攻擊/index.html","17bfd9f5a6346a082910ddf6647354fd"],["tags/ARP緩存表/index.html","84a5b297537dd60747e6e97b80d28f25"],["tags/ASK/index.html","9b41269a70c2a02408453b71d6ff6ea5"],["tags/Async/index.html","2f29ce4dc0c5e389d6ac15b3d17d497e"],["tags/Await/index.html","57dab24ded7f9970dedd70b0063dfb5a"],["tags/BPSK/index.html","00e300e09171c9eb70f8daab93c0c300"],["tags/Bable/index.html","fa3159a3414538d47d0302e48d8013ef"],["tags/C/index.html","cc0ae387f5f53a63b3ce62b8803e11a6"],["tags/CCITT/index.html","ea975578e6c158e2323bf290b64c301a"],["tags/CDMA/index.html","7552cc5e0d1bbb3b93adfa01b15123ba"],["tags/CI-CD/index.html","0253b6ffa27b62a5590f333244ba9c2c"],["tags/CI/index.html","7e6f4532afd096a95cf6b7fc36da0786"],["tags/CMD/index.html","1ed2d78918340b0dd60a528ecfa7f07c"],["tags/CORS/index.html","bebd1f1b8508e1f04e54e1963282a1ed"],["tags/CRC/index.html","cbd6a3820be8169103425dc4f4f0f83b"],["tags/CSMA-CD/index.html","74d602317afabc0f148e71d8305d0566"],["tags/CSMA-CS/index.html","055324a8673354c50f42626e4c345b16"],["tags/CSS/index.html","457f97d8c990e197a97b140769d5868d"],["tags/CallBack/index.html","4f06ea631906e3b6460ba0e7ecb2d577"],["tags/CodeStyle/index.html","abf7de309b6e9924868acce44457beeb"],["tags/CommonJS/index.html","3aa175542ae3c6edea6001b7154d6b32"],["tags/DSAP/index.html","82f2ff6f99ea70cb0a33cfc3dd8e8679"],["tags/ECMA/index.html","b2f1c477b64bcccf3b01cb3fac2cceb5"],["tags/ECMAScript/index.html","e9574c97a3ac2b1e3b47bdc273fe187a"],["tags/ES5/index.html","2225f9ba8249ded5fc9a61d14c081e8a"],["tags/ES6/index.html","137b7c86ea70b2a47c8cbdbeb15009a6"],["tags/FDMA/index.html","3f6e333ca1e732352cdf6b238ed8b6b3"],["tags/FM/index.html","f182e7989c7bec43ef7aa33f85700688"],["tags/FSK/index.html","d6db8418d21acb687137ab56eef3201e"],["tags/GC/index.html","4cef8ebaf019bf07fc4903faf31d5aa9"],["tags/Google/index.html","2023c74b48d180252f8aba932444d615"],["tags/Hoisting/index.html","92cc8a89aa1b1c4b29778077aff208b8"],["tags/Html/index.html","ac1722e193c81389967afebe33c9afc5"],["tags/IE/index.html","070bb9c80ad7dd11a16d3ddff9affd64"],["tags/IEEE/index.html","53155aa6aaa4104cd91151c003b54353"],["tags/IEEE802-11/index.html","7e4d2577ab94d6555eb7bddfff0e0cf1"],["tags/IEEE802/index.html","7828a9c187d2be19beebee4a33aacc42"],["tags/ISM/index.html","4eb87eb902abd70cfd9f5fb8fc08e6c3"],["tags/ISO-31-1/index.html","8ecff36de67da1089a7373ac87318292"],["tags/ISO/index.html","e416d78d3358eceefa331b3b3cf073b6"],["tags/ITU/index.html","b63d548cbe82e93736f1eb36e4137e5a"],["tags/JIT/index.html","e963e8e3766e9e64ef0f14ab17dd5944"],["tags/JSONP/index.html","f8c5eec42f6cd20208779be1b4dbfa5d"],["tags/JavaScript/index.html","91816236716c8f07708d10102a4414db"],["tags/LLC/index.html","6255b78ba0fb03d5a07a109cb01d897f"],["tags/MAC/index.html","84b6c9e557b6d64e1ad4a1634519791e"],["tags/MACAddress/index.html","219ce4f71fd7ba7dcf9da3ddb0f1cad2"],["tags/Mocha/index.html","1e80128cd2513c7ac6467ba6f79c0de2"],["tags/NVM/index.html","5a888e753e4f91c4ca6d4769bee66d9f"],["tags/Netscape/index.html","3e917a7e2c8c2694ce566f19a3144d6b"],["tags/NodeJS/index.html","38416f116f076b59fe99dbf490045504"],["tags/OFDM/index.html","3bcaee730fd6093964575005f4b8dfbe"],["tags/OSI/index.html","f3163b285c24064d36b713f5fa068094"],["tags/PM/index.html","f7d3903ed5c9c8a0b8b94bd8ce03bae3"],["tags/PSK/index.html","1d46bf39c29e621aec4d9f9c46aa161b"],["tags/Promise/index.html","60f9121220ca2149374bfb86cabde14f"],["tags/Proxy/index.html","803f8a133694a44f1157bba6156fc47b"],["tags/QAM/index.html","f880a800f84f1ad67900eeae7234c89f"],["tags/QPSK/index.html","770873b2640fb5413a2ebb8dda738e34"],["tags/RJ45/index.html","62f5928f42fc0835a54c610579553bac"],["tags/RS-232C編碼/index.html","7a488e7f93260e786ed66b9430e394f5"],["tags/RequireJS/index.html","1372a26ad3ca7b429ce62236eb98c304"],["tags/SSAP/index.html","3ffb36a82c2e0e192ce1c394213ac355"],["tags/STP/index.html","31cc16417833c1f903ec067fa45a76f7"],["tags/Scope/index.html","346c8f0fe8d7cf6fab239f570f104468"],["tags/ServerJS/index.html","37e3333a50026516065b6d6856e49f98"],["tags/TCP-IP協定/index.html","3862c3324e4293df1a7539e4cd5e834f"],["tags/TDMA/index.html","a08ae60af79bee0fd293a5726010320b"],["tags/TypeScript/index.html","eca7cd2bce51463bfef80bb5571306af"],["tags/UTP/index.html","8fdccb682bfee68a37bf32c4807094e6"],["tags/Uglify/index.html","a013478ab6551c3809cf740bd10fa7b1"],["tags/V8/index.html","06bd6a1e2423b7dd8852c5b6b8e6d4b4"],["tags/VSCode/index.html","8f9fab92fe9d6ea7402050ed18b19ef9"],["tags/W3C/index.html","763a750775211644a24bb5aa37b9ed81"],["tags/WebAssembly/index.html","e2d8357da7adfceb2de9eddd6a762f65"],["tags/WebPack/index.html","517487b53d6bfa3ab0e487576d173ab3"],["tags/WebSocket/index.html","324ce5f0cf89fc9b72e67008feb4d308"],["tags/WiFi/index.html","724359cec8cc6dd0de5ea75c6ae0ffd3"],["tags/WiFi探針/index.html","12eb96c8a29e350ecc587f2fe31331f2"],["tags/XMLHttpRequest/index.html","cb2d53871a0d3715084d5a6e35459366"],["tags/apply/index.html","ed9c1c611d90304ef8572256de75b07e"],["tags/bind/index.html","25e0d9af68318617302fdd7d764cf222"],["tags/call/index.html","3ae93cd82dbb7ab3910bb24ea0986c6c"],["tags/const/index.html","fcadadfeba2697422d9891ae956e692f"],["tags/export/index.html","7e5f94553ad9eea1adc8042665ae2b57"],["tags/exports/index.html","e9d8b43ee931e9fa783b18af62fa0cc3"],["tags/import/index.html","50e4aa16702b820bc89e75f8bef596be"],["tags/index.html","f6413df764cea4a1a690d6db378bd0a5"],["tags/jQuery/index.html","6e5d2e73a0f80708fe07e51da15ae090"],["tags/let/index.html","c7f23a7dcd040fe5f304fc59c869f27a"],["tags/npm/index.html","e0fd23e6a31acda402f24d059d0939fb"],["tags/packeage-json/index.html","383a35cc1f8ee9e897876fe836462dda"],["tags/require/index.html","7028194f20c8bca61562966cefac1ef7"],["tags/runtime/index.html","bc152b56b68adacc629821db55b027c8"],["tags/seaJS/index.html","90b0ad694e19c7a86d687680b4a8565b"],["tags/this/index.html","1a7793e88e43fc9c243066f270549e56"],["tags/tsc/index.html","8d2506b4d38def26f14cba5f24bea8c6"],["tags/tsconfig-json/index.html","cebe04b8af6ebb84aba02b886f49c323"],["tags/var/index.html","13586ee1ca452c40da7efab01ea7d75f"],["tags/中頻/index.html","f68f70bae68f81bc8675a5d96c01a409"],["tags/交流電/index.html","12d23c005e37ed676a7794c647df9ea7"],["tags/人流監控/index.html","ae3b2c6b943026b83bc4a04db6b0eab2"],["tags/人類/index.html","25cd339f68b13df517d00eb03cce7580"],["tags/介質/index.html","1c78c3b886150424caa3a404ce377452"],["tags/傳輸層/index.html","7184b48b150b2fb4bac6a30199a39b73"],["tags/光纖/index.html","ab6edec3c03c734e77dbfe743c6e2f35"],["tags/全雙工/index.html","92be5d888a4e3d21c5634802bb97f964"],["tags/前端歷史/index.html","b9877c8ec8df4a60455be9de8f259020"],["tags/半雙工/index.html","3f68c41c27300d4fa9b4c84cb3a247bf"],["tags/協定/index.html","0a08d1a1dbf48cb83c6bb273949f79e4"],["tags/厄斯特/index.html","90915897eb7b10b1cbffca6cff328f66"],["tags/可見光/index.html","c4ce82796ef006afea75f54b560181e5"],["tags/同步/index.html","feea4ff6a8c67bf6eb4951ed0045f62b"],["tags/同軸電纜/index.html","c6e2634311c4d779ffc17dbad63d3599"],["tags/單元測試/index.html","53ecf2d422765a6e50ee2edd7eb58008"],["tags/單工/index.html","190a3faea18c795a1014f2faa992dd94"],["tags/嚴格模式/index.html","8bfaee5a86d4d6865d4f38a380ecdba4"],["tags/國際電信聯盟/index.html","0db1253ff80c071e8067226d4870f94d"],["tags/基頻/index.html","28ab7e8cdebbc943dcbcab1c35db2d5c"],["tags/多工/index.html","59da3c114b297ee9aa3df08a6aa823cd"],["tags/大腦/index.html","e4f1fc7b6884aafd3af171b1295321bd"],["tags/定位輔助/index.html","08f6078f356f2ee9b9b8ac4be009b0b0"],["tags/實體層/index.html","0ecf4d6d0e73b9a73836fdd0dc4cc252"],["tags/封包交換/index.html","d70c7794c8c8c9ce6b78f45b171c0a84"],["tags/射頻/index.html","bb76824c1bbffeac1e645b4fd28c97b3"],["tags/尼安德特人/index.html","200ca386ae93e5434dde2e5bd7dc06a2"],["tags/差動式曼徹斯特編碼/index.html","1c6d29c7b1adc81ea515f8bd02bddedf"],["tags/差動式零補差編碼/index.html","76a040aa749b6f04dc64de32d7ca070d"],["tags/廣告投射/index.html","6793f4470741d000758dd00c4fddefca"],["tags/弱型別/index.html","7660b7a692eb4753c148d124cb96ffb5"],["tags/強型別/index.html","3b349770a6a5d2232194336b74743ca7"],["tags/應用層/index.html","ae1897996fb865513e58bb70ac5acbe9"],["tags/抽象檔案-d-ts/index.html","7bf13750d0588340cda0bc25d4ad883d"],["tags/數位/index.html","de473538294af3681c163c3a609d8219"],["tags/時間/index.html","304fd64942f389a466c019fbc371ba30"],["tags/智人/index.html","e6439072919c65252e44ba330046c7f1"],["tags/曼徹斯特編碼/index.html","889483dcf017017b26aa3cc7891e4d4f"],["tags/會議層/index.html","c12959103fa327ed8d08034afd1e9be4"],["tags/有線通訊/index.html","10242e56d5abad675225b0ac586b6d02"],["tags/汙染變數/index.html","2847aa794d4776c3442beae4390fa436"],["tags/法拉第/index.html","6c4dd68eb15e39120bf5d4a2c57aa0c6"],["tags/瀏覽器/index.html","a759ae2de80130a0efd280c21818f229"],["tags/無線通訊/index.html","a4a4f4449058951088b06e9c52222090"],["tags/特斯拉/index.html","0ed82e4d014d09f5a66a6dc276eddd21"],["tags/異步/index.html","9f603fe78919944d82a674c6f2ab0347"],["tags/磁場/index.html","9cd4f5dccceb508e0f5753e6d167f5be"],["tags/第一次瀏覽器大戰/index.html","c85869e5d870ff2b2fb72b39a49ee677"],["tags/第六代WiFi/index.html","d15409c25846e7787228893d6b6354da"],["tags/網路層/index.html","d63eb19103d25d351cc3df0df6f9dceb"],["tags/線路交換/index.html","a4344243c5daf5bf2ccd4ba99737d4e4"],["tags/緩存/index.html","50d600c867ae398fe4921fa39597cd5e"],["tags/聲波/index.html","bd2809f33f67b9acedb88e109aa4e3f3"],["tags/能階/index.html","4225ffb16da95ef5f6cd7dff8a676bf2"],["tags/腳本語言/index.html","e938a328bcf1a63ab2460505e0a20cac"],["tags/行為監控/index.html","d82c07ae5089773cab9fd94542190006"],["tags/表現層/index.html","75595b91e81b94f2bae0ed6c16515cae"],["tags/解釋型/index.html","ce9f169851fd93fcb4624f3a8585a1eb"],["tags/詐騙資料/index.html","376ecf48cda0285592e28129e0e34234"],["tags/調變/index.html","44a84542b7e214a75cb46bd2f5730f74"],["tags/資安保護/index.html","88e8cf4350764865846d1a75876a9c26"],["tags/資料鏈結層/index.html","6fa65f79db8cdbea91a0b0d4924bb9ea"],["tags/跨域/index.html","23db8d36ba365c27f37b0e0127e48d4a"],["tags/身分證/index.html","e2a688fa3ac965a82605a540e53a1783"],["tags/通道訪問控制/index.html","15af93f110730705a4546850ec1d0a2c"],["tags/銫原子/index.html","b1093969df7c9bc53af32182e16aa23a"],["tags/閉包/index.html","d0761c88ea6932885e7666e4fba7c26c"],["tags/雙工/index.html","51255f62106b21e92a936334be0d4303"],["tags/雙絞銅線/index.html","1819e92cad70780bcc97385b2ed1f77e"],["tags/雜訊/index.html","d83f557931805b57f77dd5345967c53e"],["tags/電場/index.html","7f97db36093ae96f06fbb32785bbf032"],["tags/電磁波/index.html","721d2f11f88f906678f968ec226e879a"],["tags/電視/index.html","630d3a9f2d080c165204b9657f5734af"],["tags/靜態優化/index.html","a8440611363480dc5679f74aec5fac86"],["tags/頻譜/index.html","4c8902e54b7a4f93dff836daf39b331d"],["tags/類比/index.html","cecebc70082695a09ca38775616a26be"],["tags/馬克士威/index.html","951db65eab1e4d51dfd6848da12f6d8b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







