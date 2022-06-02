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

var precacheConfig = [["2020/02/14/部落格介紹/index.html","0ea70ed8e7ba37cd9b173d400a45e251"],["2022/06/02/前端P.01 - 網頁三兄弟/index.html","398cc055f72c4a21a5fab8c63ae5484b"],["2022/06/02/前端P.02 - ECMA組織/index.html","625b4242090ef81a521cfad6ac9858bc"],["2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","79993cffbadd31d744470317c6c84b8d"],["2022/06/02/前端P.04 - JIT & V8/index.html","b7e3a88c6c21743f0e263b96bb7d4f1d"],["2022/06/02/前端P.05 - TypeScript/index.html","b7f775606956cc21c59496406db7419c"],["2022/06/02/前端P.06 - WebAssembly/index.html","4c11fa427d833628117f9774c83fef6f"],["2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","7704ab9b2bb2ef7bff1674b6766010ba"],["2022/06/02/前端P.08 - AJAX & 跨域/index.html","505876392812b8deea1481a5bf984efc"],["2022/06/02/前端P.09 - 同步和異步/index.html","5059f250c65f65d92d15ac29fd116c19"],["2022/06/02/前端P.10 - Scope/index.html","928133388c34c123eaae97d9d04e2582"],["2022/06/02/前端P.11 - 模組/index.html","2ea771df6c6bd4a8d105cec20901e71b"],["2022/06/02/前端P.12 - NodeJS/index.html","2f44ee6d1addfa06fb7003ef765c7567"],["2022/06/02/前端P.13 - WebPack/index.html","1e48760d8fa35868ce9ee5108bac0367"],["2022/06/02/前端P.14 - 單元測試Mocha/index.html","68114ba6a55f647bacf4ca6c6f7775b3"],["2022/06/02/讀書P.01 - 人類簡史/index.html","eeea26fd8b6068439d8d7b1b5019c1ba"],["2022/06/02/通訊P.01 - 協定/index.html","88e30b0d8725a88462caa5224671f989"],["2022/06/02/通訊P.02 - OSI七層模型/index.html","c660acd10aed6e103d1bd163823229f4"],["2022/06/02/通訊P.03 - 實體層、介質/index.html","d898c19f604bd03cd25607c2f38ca271"],["2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","388788037e83e641790ef81353933fe2"],["2022/06/02/通訊P.05 - 資料鏈結層/index.html","6013c97956b989422c081161926b5d80"],["about/index.html","4fa93aa7f81c3f18341b0d52b82e7d9a"],["archives/2020/02/index.html","0ec834d6a4a15a82ec4c06d496fc0147"],["archives/2020/index.html","91a58a6ee7a8b8f2736dd846e1451503"],["archives/2022/06/index.html","af4b38457d41434d259c53cb60c61222"],["archives/2022/06/page/2/index.html","bf5e5683806778cda5db98229e5efcb6"],["archives/2022/index.html","2aded76046fd9ffde23b6194bfbc7754"],["archives/2022/page/2/index.html","8a218eeff8c18114f735a1ae8a859002"],["archives/index.html","eea18b2e352d03e535739e6e35991f08"],["archives/page/2/index.html","a5594c421d6d6cf51f69184f198ae6c2"],["archives/page/3/index.html","682a6beec2c01ef068a228e5a3d1c8a6"],["categories/index.html","81cace145460e1f14c0cbbf219530562"],["categories/前端系列/index.html","7ca33d35a9a4634348eece575d048ccb"],["categories/前端系列/page/2/index.html","ef4717c6a369f1ec7b4ec2e0f49a6147"],["categories/基本文件/index.html","1cae1b57345077f68db447e8ed9f9d4a"],["categories/讀書心得系列/index.html","08b4876313b4826cb24bd549ce6c53c5"],["categories/通訊協定系列/index.html","608d56d6dcfeae8b49c1053323377f39"],["css/index.css","ffa6854e04063a25e3bb93b4de2eb146"],["css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["index.html","51a30f2829656bde58cd50a14356bb9a"],["js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["page/2/index.html","bf925283ff75b18eeea3d913d3522029"],["page/3/index.html","30be0c7f11a23048d0946b435d02b588"],["tags/16PSK/index.html","f94c28c394ff1a54f57e6c99ebc73c8a"],["tags/1G/index.html","7ced5a3944c9263ce285a2c993204d45"],["tags/2-4G/index.html","6afddb168e1b74ad4e02c450855d363d"],["tags/2G/index.html","5ee87fd1df93252e61939f3dde0d9830"],["tags/3G/index.html","330964c1324405d957620e394cd17408"],["tags/4G/index.html","ed21e8b6b1baee1ebd2e0283180a3523"],["tags/5G/index.html","6977c9e354de52b489bb9c9db0a11e16"],["tags/AJAX/index.html","6ddc5b81a53019c64369948806b68be6"],["tags/AM/index.html","0200ddca3e468469df18b4001786780e"],["tags/AMD/index.html","8488e7ad91db3291dd68bf9dbbb8e35d"],["tags/ARP/index.html","db4f71fe17e83db2cf2c4ded0a233f66"],["tags/ARPA/index.html","53c110cf43ecf1c5ba1af93c445c16e2"],["tags/ARP攻擊/index.html","b88f21c09b25999ef0eca5e48b23f2bb"],["tags/ARP緩存表/index.html","3ca001f18ee6c5a6629cfd7effd13688"],["tags/ASK/index.html","58eaaae1a5b771e5a837389e98898db0"],["tags/Async/index.html","a8654b71bb86f6333a6b990d84f831de"],["tags/Await/index.html","dfb46d73f4b39b7301d213f509f00258"],["tags/BPSK/index.html","971fdd500f29f5bfd8aebe2916b2b5b6"],["tags/Bable/index.html","087ac66a9968b58801b86bdfc2417c70"],["tags/C/index.html","41aef19ef1047f1da2ea9e05f62161e1"],["tags/CCITT/index.html","7bb6c9aca65ccfc021b8e36278430d8f"],["tags/CDMA/index.html","09e8377b34d2f7666b30fbf5c5ab7064"],["tags/CI-CD/index.html","4002f4e5f94e39212c6e26219cbb9ef2"],["tags/CI/index.html","d772c504139e31e728540484993f2712"],["tags/CMD/index.html","34508bee74964249fd19a96bd702aba1"],["tags/CORS/index.html","acd9527d041b72e82659f22071b97b90"],["tags/CRC/index.html","41a627163916f237cd334d2e16587113"],["tags/CSMA-CD/index.html","73cfc0c131add59623ed57c0b40b175b"],["tags/CSMA-CS/index.html","bcefc3eb0d07f0f36240f6f06359b40f"],["tags/CSS/index.html","b933671a4d090a7148603fae3783ccb2"],["tags/CallBack/index.html","c0c079ae01c4fdc250f68a0ae9baea48"],["tags/CodeStyle/index.html","b496fd92af338a7f8c00dcf1d3f3ae21"],["tags/CommonJS/index.html","5e376e43ef75fdee146f4f957d897e32"],["tags/DSAP/index.html","62f9d9f71288a4681a8bd7132b7603e5"],["tags/ECMA/index.html","2abf304b1f7e00fd0420dc243f610651"],["tags/ECMAScript/index.html","dcd71089f8bf34502a2e1c4df4e2e866"],["tags/ES5/index.html","7d9a7d95da473ca3ccca68ecd31725b3"],["tags/ES6/index.html","b8c6a4dbe77659e86fa3932091b2e1af"],["tags/FDMA/index.html","9015c193cd758d9bdf3ccd9c2d65fda9"],["tags/FM/index.html","ee486fcd24442493ad041338cbdf402f"],["tags/FSK/index.html","f85b1c6f27ce32ce7637b7b26af4bc94"],["tags/GC/index.html","5a4e48a0f333bae5570e2ae2433e70e7"],["tags/Google/index.html","dfdcc95f01dbcff5b3c5ac0267b9af28"],["tags/Hoisting/index.html","747e123a97c45c194621f83a0ed0834b"],["tags/Html/index.html","3584792ca22e24be385b50cff434e686"],["tags/IE/index.html","c4f771e8a8904f66e5dbb17c8045f0ea"],["tags/IEEE/index.html","0a1daea866f90e78c423b19ccf88c60b"],["tags/IEEE802-11/index.html","aa00fac359533d376ae92cd43add0170"],["tags/IEEE802/index.html","b2a20d8a2036d4f5f87bc355ad19ceae"],["tags/ISM/index.html","ea41e4f4029dcf978c2fa7982348292c"],["tags/ISO-31-1/index.html","bc15068d799839c5a0c9cd09ef5fd2af"],["tags/ISO/index.html","153bd33c982997bc6b4682deaa0d94d5"],["tags/ITU/index.html","c5a1817723e4ee956fd878d23d28bd2d"],["tags/JIT/index.html","34817f75403639606c9ecbe6d6edfebb"],["tags/JSONP/index.html","46ad68e9417962045a8678d41d71aaff"],["tags/JavaScript/index.html","b8db48ad614d382af582f6ebc2990b00"],["tags/LLC/index.html","e7383b19400a96fc18064ca15bebf762"],["tags/MAC/index.html","8932114cf740a83793bea039f4fa915c"],["tags/MACAddress/index.html","7e534b4591529eaa69eeec474439cf59"],["tags/Mocha/index.html","6a4a7fcef9b50af671f34e80057701dd"],["tags/NVM/index.html","dbdd98a7b79f47530cd7d211fea6eb9f"],["tags/Netscape/index.html","35ecead6acb1ab25213d519c1699b8d9"],["tags/NodeJS/index.html","e163e98638911238cb712ffc8e8e5064"],["tags/OFDM/index.html","ff710af33b6506d530a90b18f43c569a"],["tags/OSI/index.html","6e1f2cff2caabcd3e4917fc3f461ac05"],["tags/PM/index.html","c75a0d474e71b4acc9f43303fea6c2a1"],["tags/PSK/index.html","993d7d0a0553513197799949c579c391"],["tags/Promise/index.html","7828eab7c39a5ac96c793de02d4b0775"],["tags/Proxy/index.html","dfb2a45a2e7cc266fa4ce506242011df"],["tags/QAM/index.html","658706020962332b6a44263292b81138"],["tags/QPSK/index.html","bff06d3f53e6047de9d38f16cb7d22a2"],["tags/RJ45/index.html","b2b860659ee23bbdae3a35847c7820de"],["tags/RS-232C編碼/index.html","037b4db07f72ae62cfd7c91d1cb146e2"],["tags/RequireJS/index.html","9dc666c8fe00872cb9d31899bc60da20"],["tags/SSAP/index.html","89a79eefc07f2feff0ebca4f2eec1bc8"],["tags/STP/index.html","124696866ef4c0ef13ffaea18dcd5d05"],["tags/Scope/index.html","8575ebfb0f05333199967690b9f67292"],["tags/ServerJS/index.html","d3c00d25db7562d7c891fd7ea6545817"],["tags/TCP-IP協定/index.html","6c024c04963381bdbc5918c2abde3af4"],["tags/TDMA/index.html","7554f8d8dfce50a8d9d3464616bf726d"],["tags/TypeScript/index.html","c46bd468ee663f92ef876c530d198962"],["tags/UTP/index.html","3eda81f876e8aef9175c8ca8d7daa4f1"],["tags/Uglify/index.html","935a73feef4b6460c42737d19ca0f7c3"],["tags/V8/index.html","e579aea6fe982a59836aeb86f2a4ecff"],["tags/VSCode/index.html","933498fbc2c7cc45f764e590cb44b005"],["tags/W3C/index.html","0059b5981306bfbd699aebf049018a2b"],["tags/WebAssembly/index.html","589bc14c8f874ac1122e81fdc21bd225"],["tags/WebPack/index.html","31f2bc520b81ca1d5b50570e9e1ef3cf"],["tags/WebSocket/index.html","0f13e99398b07433be5ff10c978c5317"],["tags/WiFi/index.html","a64cdc06fd8abd4857a9cb8f529d8f8b"],["tags/WiFi探針/index.html","577453886ca1e59d9f92d5fd036ab0e5"],["tags/XMLHttpRequest/index.html","e1c50ea5c0856e86e42c368a5c2f26a6"],["tags/apply/index.html","6ff5aec89bec0fe6eb1feab92132550a"],["tags/bind/index.html","30a8a62a72535216080938a92dd4a900"],["tags/call/index.html","fdd0c225efcf73128ed4508939fe88af"],["tags/const/index.html","a6d34ec2124c2258ade4de3ee0e5cb5d"],["tags/export/index.html","6c1d45655c473a8fc4928537312f75c2"],["tags/exports/index.html","7926ac67503e5d5f5643b476ac04d193"],["tags/import/index.html","9c1e6fc476df377b77e4ca7c58e74a80"],["tags/index.html","7ce11fd20ca7e21fcde060876d132878"],["tags/jQuery/index.html","7205155a17a089f9ebdccb79c45015e9"],["tags/let/index.html","d07861324c51c616eea3cae57c304465"],["tags/npm/index.html","37fccaf63ce02b307f87d1658ad5319e"],["tags/packeage-json/index.html","23b3813dac5c3416ede5857a7468d006"],["tags/require/index.html","e8893459bd6987b2da5a6e3ce8cf4d03"],["tags/runtime/index.html","a51294beb02b6146f8ce4605e3e21806"],["tags/seaJS/index.html","9c6de120b7ab6a8242661625c3dad705"],["tags/this/index.html","ce4f9b36a494b514aaed400c3f22acf2"],["tags/tsc/index.html","ec0f5108e8d1e48f4c6d4a96300cba8f"],["tags/tsconfig-json/index.html","662c91e88a834679a332353bd9101d40"],["tags/var/index.html","745654ade23b8a69660be81f7b566ab9"],["tags/中頻/index.html","2fa2106c066ed85e7458d5251e392b0a"],["tags/交流電/index.html","f44b6b3aefb542c0e61a35d0adb130b6"],["tags/人流監控/index.html","232b634a11740256988fcdc3e38f45a2"],["tags/人類/index.html","ee5d87ef6542770496b7e5d69ef6be64"],["tags/介質/index.html","db0b2581834874044ea22519b333b632"],["tags/傳輸層/index.html","23b578e5e0d6a4ec816768a7dc4831ac"],["tags/光纖/index.html","32cea67aba9a8b2e531d6c53466ca1ec"],["tags/全雙工/index.html","249e9f894ac36ee5c4c92f24e95aec98"],["tags/前端歷史/index.html","f67a1ab130141e06ec3046cc7b694eb3"],["tags/半雙工/index.html","2206e885c65a6c1b88f81f8247644cae"],["tags/協定/index.html","4001258276a5deaafc067404f68f4202"],["tags/厄斯特/index.html","78b40bb5bc56d159227ddfd5c264c18a"],["tags/可見光/index.html","69b3acf96368507b4c5f97d141860dec"],["tags/同步/index.html","c030c5e3d353e3bb545c6454a0f3bff3"],["tags/同軸電纜/index.html","589860f43c3de9b1446b734169950a6c"],["tags/單元測試/index.html","9129720a67592aebba292d03ad91ee31"],["tags/單工/index.html","b1e41ba7188d7c6c236d9139a57ae511"],["tags/嚴格模式/index.html","9b8b11eb8c3c57ebebcea11cde0ebebb"],["tags/國際電信聯盟/index.html","b5c2b8507da1f67b0cfa1e9aa9ce476a"],["tags/基頻/index.html","8304ef187bd1344bfe238db6ae177f31"],["tags/多工/index.html","cd5cb7113462766abb5669523fd7f3de"],["tags/大腦/index.html","10a4bec4e82d2b6197f691531c721a5d"],["tags/定位輔助/index.html","846e39747f80b74a8711d2ffe073b91c"],["tags/實體層/index.html","7da7d1c8959489793330820b18f33919"],["tags/封包交換/index.html","1793c2ca6827719d671ad86b16914681"],["tags/射頻/index.html","3e340de8db7fb5c45b3f0c59071c4351"],["tags/尼安德特人/index.html","13373c825de2520de049169375f9ae6d"],["tags/差動式曼徹斯特編碼/index.html","1bc1a036a88a73c62f0caa4633c1d8be"],["tags/差動式零補差編碼/index.html","1709bd56aa6e2e8dc9dcefcc25fdf476"],["tags/廣告投射/index.html","a2f764cfe5b516b6e7af28ca25322cce"],["tags/弱型別/index.html","42df37c729887164927329900fce9d03"],["tags/強型別/index.html","34ebec74ad54d11a0438a32e25335331"],["tags/應用層/index.html","0d249ac0f93a2269aef00c5704f011f6"],["tags/抽象檔案-d-ts/index.html","8abe8afa12e760b7ee20fa112b76096f"],["tags/數位/index.html","ca179e7ec0324ff7294c47a80f229273"],["tags/時間/index.html","3e5534ec9c8a3aa49d167b0bec6609f3"],["tags/智人/index.html","cfd7289bff858d630faa3a89645392f5"],["tags/曼徹斯特編碼/index.html","bfa69938b3a5ea6856ca11a73c0ff73d"],["tags/會議層/index.html","d779d7c5db425e0e4d353e560256cd0e"],["tags/有線通訊/index.html","2dc61efe00680dfaeaea634eaff8dc64"],["tags/汙染變數/index.html","2c760a87131deb4f74ad887f0a2bec27"],["tags/法拉第/index.html","3ebf35861d05c0138209a4dc56a97929"],["tags/瀏覽器/index.html","35d9e4fad55f27c539aacd825197d4bf"],["tags/無線通訊/index.html","6acc17e277b387e279dead21af691208"],["tags/特斯拉/index.html","c6f444a37e66c477877023b063d194da"],["tags/異步/index.html","83c3487887eabb3bd668ecd7a79576df"],["tags/磁場/index.html","73780d818fbf6b6fa191a355197baccb"],["tags/第一次瀏覽器大戰/index.html","6735d41040dfa4ed8300101789f7683c"],["tags/第六代WiFi/index.html","e77a67744a69dda9bb1bb7cf7ab1e970"],["tags/網路層/index.html","6cf2a815369aa5b50671ae41e85fc690"],["tags/線路交換/index.html","613c5242c41afcba03e125bd27789fab"],["tags/緩存/index.html","ebc85a51814b36f3a7f79a0d4303ab46"],["tags/聲波/index.html","d7a3e5521c6053880c1a97c6911cd68b"],["tags/能階/index.html","2d96661397962c0de981980f6b87abfd"],["tags/腳本語言/index.html","eeb49c2d99469cbe12309b002a86affe"],["tags/行為監控/index.html","8d622d72e8e98ee7bcbd65145cf9f490"],["tags/表現層/index.html","50c00c2132d5bc96aca9324370c83fc4"],["tags/解釋型/index.html","9a9f7ddb71dc7472a5dfb51f2773319a"],["tags/詐騙資料/index.html","68d89e35dd3e2bac8758e11471e5b47c"],["tags/調變/index.html","99ec18388b189e70b6d580e0bdd52194"],["tags/資安保護/index.html","dd894d04bc29e59c03f65922adf3e1d8"],["tags/資料鏈結層/index.html","c836629bd42aedddf84e948363ff004f"],["tags/跨域/index.html","dc96ad0bfb9fb5545fa98c944e0199c1"],["tags/身分證/index.html","c43a804c58fa10b87f3ee8009c36946a"],["tags/通道訪問控制/index.html","5d91bfe84c63a11ac9135b5ac0ed3891"],["tags/銫原子/index.html","49f5a3f0cb299066d63b7a99ccf04f0a"],["tags/閉包/index.html","510b4ecfa5ab306d241a930a9ed923c4"],["tags/雙工/index.html","c7a4e78b33c9b12406ade3465cb25dfd"],["tags/雙絞銅線/index.html","86f362cb9078afeb9cfff73fd6e66719"],["tags/雜訊/index.html","4c3779e5f9e737a0c4598e75f783d1a2"],["tags/電場/index.html","d0da645a167298691be6ce75a0033e21"],["tags/電磁波/index.html","61a2c0e78f1d25f2fa375297e8d4f3eb"],["tags/電視/index.html","8fb99d0bb3b29f01e7e7b068654a7fc7"],["tags/靜態優化/index.html","6da7f1c0926cbce99e05127be83977be"],["tags/頻譜/index.html","7a69eaa188ab15605adc74f14fa79e95"],["tags/類比/index.html","fb93ddc1d6411f966b9ba8b392d0e3ec"],["tags/馬克士威/index.html","6fde104c1afd5b809583b43e5796040b"]];
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







