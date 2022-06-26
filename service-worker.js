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

var precacheConfig = [["/blog-tech/2020/01/11/部落格介紹/index.html","af4cfec9a0fa61e0cc571a0c7535899d"],["/blog-tech/2020/02/11/前端P.01 - 網頁三兄弟/index.html","8b1c0fb2e1caa71e4514a65ea18e0a7f"],["/blog-tech/2020/02/12/前端P.02 - ECMA組織/index.html","92a69dc3d5ea38ed34b5d4109b01f164"],["/blog-tech/2020/02/13/前端P.03 - 分析解釋型、弱型別/index.html","6c879f8cb25d93ddf353bd53513fe879"],["/blog-tech/2020/02/14/前端P.04 - JIT & V8/index.html","760111d6e77a8399d2e383f3dcdeb09e"],["/blog-tech/2020/02/15/前端P.05 - TypeScript/index.html","2fbc7c5f623461ffdf92fab6cadf1fa8"],["/blog-tech/2020/02/16/前端P.06 - WebAssembly/index.html","7d7bc08df5f5e770a1288e5e1b9c9dd6"],["/blog-tech/2020/02/17/前端P.07 - jQuery & AJAX歷史/index.html","e7942e914e537d864cdf8cda9fc93365"],["/blog-tech/2020/02/18/前端P.08 - AJAX & 跨域/index.html","e669c6c61370c5aeb1b1f953805c0e4a"],["/blog-tech/2020/02/19/前端P.09 - 同步和異步/index.html","7634361f2c544a683cee89680f4c8c2b"],["/blog-tech/2020/02/20/前端P.10 - Scope/index.html","b6a1ce4a4e9430901c282d233fb764b3"],["/blog-tech/2020/02/21/前端P.11 - 模組/index.html","fc84f9669941c0d44cf713ed6e7fd334"],["/blog-tech/2020/02/22/前端P.12 - NodeJS/index.html","a49336a22c6e1010cbbe0f7370ccea7e"],["/blog-tech/2020/02/23/前端P.13 - WebPack/index.html","7354ef7791a23441671e55052ddaf036"],["/blog-tech/2020/02/24/前端P.14 - 單元測試Mocha/index.html","29eed266a70ccc07fbb01173d47e5ce6"],["/blog-tech/2020/03/01/通訊P.01 - 協定/index.html","d7d3cc440efb6034fe6635e01132fe14"],["/blog-tech/2020/03/02/通訊P.02 - OSI七層模型/index.html","931c2a3984a75f0a7459b0ec903ae774"],["/blog-tech/2020/03/03/通訊P.03 - 實體層、介質/index.html","2fb6041cd95672c8a152f0f6955c7af6"],["/blog-tech/2020/03/04/通訊P.04 - 實體層、傳輸技術/index.html","f48de5c53eff046c393d90c8edfc5a55"],["/blog-tech/2020/03/05/通訊P.05 - 資料鏈結層/index.html","226ea9caf4d77a6d9b0266f6856fcbb6"],["/blog-tech/2020/03/06/讀書P.01 - 人類簡史/index.html","acdecfb60c26da181a1fdb2135017e08"],["/blog-tech/about/index.html","fc01a4e97d5f57d543a463ebe2ee14ca"],["/blog-tech/archives/2020/01/index.html","eb03eabfaf2ecee276624d4d6142c884"],["/blog-tech/archives/2020/02/index.html","4094cd3ceca8eb1a17271ceb1ace4658"],["/blog-tech/archives/2020/02/page/2/index.html","6300569d67ab1d1f6bd3ff27bcf7bf29"],["/blog-tech/archives/2020/03/index.html","8d4832afd380575c3a01c1b7aa351658"],["/blog-tech/archives/2020/index.html","158c1b8c8f88b24e443d275ccdfd1abf"],["/blog-tech/archives/2020/page/2/index.html","03189e6b672f4e8e5de35bd804dd8fa2"],["/blog-tech/archives/2020/page/3/index.html","c4497e27a9a74687834dd0bb99245a52"],["/blog-tech/archives/index.html","0a84eccb2c0fce5c3d0cbda4b000f16f"],["/blog-tech/archives/page/2/index.html","e0f1ae490d345b4ebd304966e2900828"],["/blog-tech/archives/page/3/index.html","8651d0ad6d0914c9b0be5b45e3f90ecc"],["/blog-tech/categories/index.html","b052432fbc207c39a6410b812180e5df"],["/blog-tech/categories/前端系列/index.html","5b59a416b60e2798ecd7f37e8bd10d11"],["/blog-tech/categories/前端系列/page/2/index.html","b70716ce24fd2eeaed0a673dc23fdc56"],["/blog-tech/categories/基本文件/index.html","ff3aa21737b7d2e92637ec665c1b1d4e"],["/blog-tech/categories/讀書心得系列/index.html","2626069ae4af4811e4886b4bb2ae2f20"],["/blog-tech/categories/通訊協定系列/index.html","03a38a16cbc3b55a89e1bbd0e38c7ca5"],["/blog-tech/css/index.css","f2506492ed3aa85b70822fe543139304"],["/blog-tech/css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["/blog-tech/css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/blog-tech/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog-tech/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog-tech/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog-tech/img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["/blog-tech/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog-tech/img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["/blog-tech/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog-tech/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog-tech/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog-tech/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog-tech/img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["/blog-tech/img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["/blog-tech/img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["/blog-tech/img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["/blog-tech/img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["/blog-tech/img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["/blog-tech/img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["/blog-tech/img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["/blog-tech/index.html","097d774dc2ef88c1935fe81a075d5d71"],["/blog-tech/js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["/blog-tech/js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["/blog-tech/js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["/blog-tech/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog-tech/js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["/blog-tech/page/2/index.html","827f2a7fec5a16af3ae065619af9d3b9"],["/blog-tech/page/3/index.html","94269c629950a9b91bdcc736f7be3e31"],["/blog-tech/tags/16PSK/index.html","c41c6417f8a9178611cb9e7b0713c71a"],["/blog-tech/tags/1G/index.html","239ca8da0d0d0d120db6ba9ca16637e9"],["/blog-tech/tags/2-4G/index.html","608fa923b1fc5966f5a634e17f9745ae"],["/blog-tech/tags/2G/index.html","906ef9a21f442e7dcc1274ad475f3ac6"],["/blog-tech/tags/3G/index.html","0b8109307b6896df0ec4f214a0558425"],["/blog-tech/tags/4G/index.html","e82d24f69630a3667245269bce28a942"],["/blog-tech/tags/5G/index.html","92b0737f3cdb1e68a31772c421b024b1"],["/blog-tech/tags/AJAX/index.html","39149a17e7bc43ee7ef852132ceff5f1"],["/blog-tech/tags/AM/index.html","b3fd9221c42872d997a3c4e82eeb6200"],["/blog-tech/tags/AMD/index.html","cf26de1562a28c07fadfc0b276462aaf"],["/blog-tech/tags/ARP/index.html","f2115e73a293618d0f84f892942b72d2"],["/blog-tech/tags/ARPA/index.html","d1456d7ea2f017f60da297aec3ca73e8"],["/blog-tech/tags/ARP攻擊/index.html","d1e42249de78a8b227ed74256afe2952"],["/blog-tech/tags/ARP緩存表/index.html","ab2822af5dbc5b48ee07eb283db035d1"],["/blog-tech/tags/ASK/index.html","0e35d69bd198f651635cdfee87c2bad0"],["/blog-tech/tags/Async/index.html","922010b54c16af4ce095b2c96b3951e1"],["/blog-tech/tags/Await/index.html","d5d7abafeef0c0a553fa222f0015d638"],["/blog-tech/tags/BPSK/index.html","1d3608777634d5059fe1d8afd8c77390"],["/blog-tech/tags/Bable/index.html","b0465a0f73b0190bd4fa46684f58fc6e"],["/blog-tech/tags/C/index.html","db8974fbc931b4411cbe432d0afa46bd"],["/blog-tech/tags/CCITT/index.html","5a2989d0572b4b126b9d4fbdccb6fa50"],["/blog-tech/tags/CDMA/index.html","14c51f698da45973aa84d761985cb2d5"],["/blog-tech/tags/CI-CD/index.html","033b267435ed2f3266307face1b61346"],["/blog-tech/tags/CI/index.html","0982a89549c789e7af0db07271970827"],["/blog-tech/tags/CMD/index.html","345e68aed785ed32a49c53bdc8c97995"],["/blog-tech/tags/CORS/index.html","8918a28d4f2036647f0607305f2bb69d"],["/blog-tech/tags/CRC/index.html","8bd7f4a7538ad66aa5cfcd34a5f3318c"],["/blog-tech/tags/CSMA-CD/index.html","7372386cbf533bf11326df9eaeea152e"],["/blog-tech/tags/CSMA-CS/index.html","20929021b4d0a02d76c117be19a4873a"],["/blog-tech/tags/CSS/index.html","d8cd2c058a463ece85c136d34c8d7f4c"],["/blog-tech/tags/CallBack/index.html","af9a077b8fd72b5c11a5b54d21a4a568"],["/blog-tech/tags/CodeStyle/index.html","8b5d85da7adc85e8a5b6a3d70b16825d"],["/blog-tech/tags/CommonJS/index.html","67c3f1f3f422b150ff685f457f4aac52"],["/blog-tech/tags/DSAP/index.html","4290f2825e579dc65f5a18d120672307"],["/blog-tech/tags/ECMA/index.html","273219eef45d2b43ac19092f1ffd74cb"],["/blog-tech/tags/ECMAScript/index.html","68f5a13144a3fd429e8438a5094a67d2"],["/blog-tech/tags/ES5/index.html","5ddc9a0709fefc3207d078c708e18190"],["/blog-tech/tags/ES6/index.html","d90dce04e4956f9240d143e5373f03cc"],["/blog-tech/tags/FDMA/index.html","eac736cc92e1cbbcaaa4232ad7ea1b20"],["/blog-tech/tags/FM/index.html","713447afdf06174e4e4cb43f540a12cc"],["/blog-tech/tags/FSK/index.html","65e7cfe68c765bff0f722e0c3d8981ed"],["/blog-tech/tags/GC/index.html","7f5d69f5e5c62b70a1e04f5c5f83a20e"],["/blog-tech/tags/Google/index.html","4b4247a72d0dbf591a3a5f6b25fe0fbb"],["/blog-tech/tags/Hoisting/index.html","25c690319ac8c1a3364ceec8299050c5"],["/blog-tech/tags/Html/index.html","78af1e799d06e5957731a36036c64f5d"],["/blog-tech/tags/IE/index.html","acb91ec6242c11b75d184c1ab653c4e6"],["/blog-tech/tags/IEEE/index.html","076d4eed7a62689ffad7477f552fef1d"],["/blog-tech/tags/IEEE802-11/index.html","2ff1a6ed2beac355ebc88f150332df04"],["/blog-tech/tags/IEEE802/index.html","2b25e2c8e320e271806508c903cb4cd0"],["/blog-tech/tags/ISM/index.html","1694ac22efecd81d15189f6b825ff1ff"],["/blog-tech/tags/ISO-31-1/index.html","9a813ab3dc5223959fdbe6baefc76adf"],["/blog-tech/tags/ISO/index.html","f7a956e130df1eafc2cebb92a27ef557"],["/blog-tech/tags/ITU/index.html","9f390ef8942e93a74b3cd44d73933bb3"],["/blog-tech/tags/JIT/index.html","9c7f32e9c187ee9af18439af7d746e8c"],["/blog-tech/tags/JSONP/index.html","66e37440737ad930ade2c75fa3fdd56b"],["/blog-tech/tags/JavaScript/index.html","78faab2d17a68fe9cfc7dfccbc64dc73"],["/blog-tech/tags/LLC/index.html","26e9935867b965f57263af4a5f66830b"],["/blog-tech/tags/MAC/index.html","f56d055b7d6a3f5c9bbf684d60c4ac99"],["/blog-tech/tags/MACAddress/index.html","602c6dc831fe0148c7a3f4ce0010dda3"],["/blog-tech/tags/Mocha/index.html","593f0d1dc830d2d3b40505eb86a82a77"],["/blog-tech/tags/NVM/index.html","cc92e022e9f34b0ba1f1af8477bf1b8d"],["/blog-tech/tags/Netscape/index.html","92b234b02a71e914ca3a720af4e8bdc1"],["/blog-tech/tags/NodeJS/index.html","b87ebc99dd9aa36856891576117689d5"],["/blog-tech/tags/OFDM/index.html","3370c13c334b6fc9e2ba132634bda484"],["/blog-tech/tags/OSI/index.html","cff12e2283d3877d99a58d1b5ef61611"],["/blog-tech/tags/PM/index.html","9114c640786dc7f81b9b6d8a21bd3eb7"],["/blog-tech/tags/PSK/index.html","d6e6bdfa8e7082606768bf03d27c6a7f"],["/blog-tech/tags/Promise/index.html","b30cc8c2ad4421c8bdbc41afbc01426f"],["/blog-tech/tags/Proxy/index.html","a71f4df3a9ccf0133434012a9204aa61"],["/blog-tech/tags/QAM/index.html","033fbb2e4d54ac17e42b1bf749cf616e"],["/blog-tech/tags/QPSK/index.html","e68f9f24a25f5d66196ab04d6ff500ee"],["/blog-tech/tags/RJ45/index.html","40b236490c760567887aa8a2c6c01a2f"],["/blog-tech/tags/RS-232C編碼/index.html","5783e71c222b9e976f214f335f77702c"],["/blog-tech/tags/RequireJS/index.html","29182e9193eb4100ae9bbd1f89f1b15c"],["/blog-tech/tags/SSAP/index.html","3628ad6a100e1c45408bc3c6fb05dc10"],["/blog-tech/tags/STP/index.html","3d57b75fbd80200fa435c643c2542d01"],["/blog-tech/tags/Scope/index.html","792e11afbc3e9f66ebdd26b008d0c32f"],["/blog-tech/tags/ServerJS/index.html","524d3b3494c6b5e71c0e7e2d20c6ab6a"],["/blog-tech/tags/TCP-IP協定/index.html","8e721bc35ccefc731cdaf88cf11bdf1a"],["/blog-tech/tags/TDMA/index.html","359f0d57ef43bc9c17aeea749a206e51"],["/blog-tech/tags/TypeScript/index.html","3fb738876d75d2031a79558e4fcc4c54"],["/blog-tech/tags/UTP/index.html","47622a1bdb00798ea88683dd25b25b22"],["/blog-tech/tags/Uglify/index.html","39f2a47b17bfc17d6b95fa2ad224e172"],["/blog-tech/tags/V8/index.html","23f8b0a5c32dff82f2cd40e063ffa320"],["/blog-tech/tags/VSCode/index.html","e177d16255b2a25e7980d8ccc379f9e4"],["/blog-tech/tags/W3C/index.html","804ee188d6f66ff34f3b47f9ff996893"],["/blog-tech/tags/WebAssembly/index.html","3f7e9e17def2cfef62e7accc6362f61f"],["/blog-tech/tags/WebPack/index.html","e164c089f7db4e3445478b70dfc1534b"],["/blog-tech/tags/WebSocket/index.html","2d1a2d32f1dcdb094e5835f183eeb604"],["/blog-tech/tags/WiFi/index.html","cc01e4d7b1fa4d64307b3bee8bea5fbe"],["/blog-tech/tags/WiFi探針/index.html","62286cc094597946ace4090f99cd2eec"],["/blog-tech/tags/XMLHttpRequest/index.html","57e8ef4dd498d30f28e59a2187bcbbbf"],["/blog-tech/tags/apply/index.html","d31dff4a3102090bd4ff92c2c67bbb6e"],["/blog-tech/tags/bind/index.html","645b65716526c002a661fb07ec1899d1"],["/blog-tech/tags/call/index.html","b175fb2ca51d3e7dd884fa71282212d8"],["/blog-tech/tags/const/index.html","9feea2ae42fe87e9e3a17ba41759f126"],["/blog-tech/tags/export/index.html","96d65e1ac14352287a6fc948cb713304"],["/blog-tech/tags/exports/index.html","00db6b64df989a0d316deb68d99d220f"],["/blog-tech/tags/import/index.html","e10a69e647368f5bbe4a16fddaa9a0aa"],["/blog-tech/tags/index.html","50252436645ab630a38b56bfdd43a701"],["/blog-tech/tags/jQuery/index.html","fbad6580f3bc7c7ebb503e889f0caaab"],["/blog-tech/tags/let/index.html","34b7d6322873027825358c61d51e44ef"],["/blog-tech/tags/npm/index.html","00253cbc4801bb7cff0a0178b2f8ce23"],["/blog-tech/tags/packeage-json/index.html","e2bfc34576784222aab5de7721cd8530"],["/blog-tech/tags/require/index.html","1b58be0929c22b5ccdd8c979fe12cd5d"],["/blog-tech/tags/runtime/index.html","f3efe7101d2b348f998251f338b26b25"],["/blog-tech/tags/seaJS/index.html","bce23992284dcca436bcb23178b0b8b7"],["/blog-tech/tags/this/index.html","3ad1220d7b09baae002fe4c1d5eb411f"],["/blog-tech/tags/tsc/index.html","26856e357d107d3c286381167debdaaa"],["/blog-tech/tags/tsconfig-json/index.html","463d89816d6bdab284ea8ebddbf2b27c"],["/blog-tech/tags/var/index.html","9ae6b6997588e69492b900c53941703d"],["/blog-tech/tags/中頻/index.html","a25f4fb31da38cd7b4dd8787f30d3605"],["/blog-tech/tags/交流電/index.html","040acbd5fee1bfa341fa25acd3fdc755"],["/blog-tech/tags/人流監控/index.html","5f77f73a648dbc8e12df00d81d56c6c9"],["/blog-tech/tags/人類/index.html","b0df7ae963d2968b66f106cfd3d21a24"],["/blog-tech/tags/介質/index.html","1a46e5174d506e17bbab46dfc29f3162"],["/blog-tech/tags/傳輸層/index.html","71c5aaceb7fba69a4ec6fcae49dee1ea"],["/blog-tech/tags/光纖/index.html","f150861f5278f72bb61f84a5feefdd45"],["/blog-tech/tags/全雙工/index.html","23c90297d8b50f10db0df3a39249b14b"],["/blog-tech/tags/前端歷史/index.html","8d047b4829a5e6601df2e444a05e2a8c"],["/blog-tech/tags/半雙工/index.html","a9ca531a79308184a46888f8aa1c1881"],["/blog-tech/tags/協定/index.html","3b3eebcf91dc9bc363977111f7e6c7cc"],["/blog-tech/tags/厄斯特/index.html","0d6c933b1ec780ac7804a567b2599ea8"],["/blog-tech/tags/可見光/index.html","63fba96a60732c4bd0d958d743b1803f"],["/blog-tech/tags/同步/index.html","d44e7f0b09e4b9dc51d7b6898cf72684"],["/blog-tech/tags/同軸電纜/index.html","f72693771aa37f4229041c841fa4535a"],["/blog-tech/tags/單元測試/index.html","af8ca71f1528d88c4915d685cac88d3c"],["/blog-tech/tags/單工/index.html","d0cdd50cfe9be0ad1d956a31bb83bccb"],["/blog-tech/tags/嚴格模式/index.html","20114905423efedaffa29782e99380f2"],["/blog-tech/tags/國際電信聯盟/index.html","e7211b9616f68e8915d7b9a6f37f828e"],["/blog-tech/tags/基頻/index.html","afcedf3d11723436c1a1a6b6148b4a04"],["/blog-tech/tags/多工/index.html","afcc4ffbf6303ceba8cac6c4ecff851c"],["/blog-tech/tags/大腦/index.html","6268b00009c922b70574fb8a911ef382"],["/blog-tech/tags/定位輔助/index.html","cfe48bf63d9bb3c8ac70ff06f5da536d"],["/blog-tech/tags/實體層/index.html","445857875990b7141908cf6432ba8527"],["/blog-tech/tags/封包交換/index.html","208b6bcfd78fc9231e59f8736f8d5fb9"],["/blog-tech/tags/射頻/index.html","ca426ae9ec7e40dfdd54e828d8d08cf2"],["/blog-tech/tags/尼安德特人/index.html","5287c7996202e04830090271c23b9d56"],["/blog-tech/tags/差動式曼徹斯特編碼/index.html","00caad01d6d77bdd23e5a0bfa70ef405"],["/blog-tech/tags/差動式零補差編碼/index.html","3fd5710ab658d95cb13e220cdccb6800"],["/blog-tech/tags/廣告投射/index.html","23aad469ef1c183589f519f7df65d38f"],["/blog-tech/tags/弱型別/index.html","a24fbc446dce45f9fd827c09d490fd60"],["/blog-tech/tags/強型別/index.html","cc425a9e8221da2eab14c259e8174af5"],["/blog-tech/tags/應用層/index.html","10d9d73df5003cddc73b2376f36ce11d"],["/blog-tech/tags/抽象檔案-d-ts/index.html","599759ab73cbf8f01510d578292efa5e"],["/blog-tech/tags/數位/index.html","d616daad0fb7be8a5b7e5e93cc4b8ebe"],["/blog-tech/tags/時間/index.html","8053a5147b294b4771f5326900ec551f"],["/blog-tech/tags/智人/index.html","de9d7d1b4d8e033415fb97d62def9006"],["/blog-tech/tags/曼徹斯特編碼/index.html","461d8d85c23e1d624e8f83915d87d3dd"],["/blog-tech/tags/會議層/index.html","7d2f13a13fbf773e33cdd5b0833eeb95"],["/blog-tech/tags/有線通訊/index.html","f822e7de51c68b7cd167e2f80e65ebc6"],["/blog-tech/tags/汙染變數/index.html","07fa9a03af2ac25553e587caba282e90"],["/blog-tech/tags/法拉第/index.html","0899eee63353d155a363547777765784"],["/blog-tech/tags/瀏覽器/index.html","00ba28f20a5a7a79096cdeb83a081af5"],["/blog-tech/tags/無線通訊/index.html","821fe092e3bafc76475228e03f7a53c0"],["/blog-tech/tags/特斯拉/index.html","9ca8ad9667f9996be6ebb8d4da6da134"],["/blog-tech/tags/異步/index.html","40f030c2690c9f5e59ebed814e89b92c"],["/blog-tech/tags/磁場/index.html","df2c7c9a5a78b7805c67aeecd63d119b"],["/blog-tech/tags/第一次瀏覽器大戰/index.html","d0ef3d673caa2c569d9ff8b3807e2bfc"],["/blog-tech/tags/第六代WiFi/index.html","79787fdffc7ce7ca1d9925c8154ca0f6"],["/blog-tech/tags/網路層/index.html","5802641d8a979e333168ba9b802cbcae"],["/blog-tech/tags/線路交換/index.html","744b32a7d666a23b709f9e5b9d115cdc"],["/blog-tech/tags/緩存/index.html","70ac295e1601c15554750c33daeabf5a"],["/blog-tech/tags/聲波/index.html","a5541f2b4e680d05515e8aa0e90884b0"],["/blog-tech/tags/能階/index.html","2d5436d03a8181d7e41d2e602c031f92"],["/blog-tech/tags/腳本語言/index.html","13ee1dd7f6d53f5aad0a9123018340d2"],["/blog-tech/tags/行為監控/index.html","ab86edd8c5953420676065fefc2a070d"],["/blog-tech/tags/表現層/index.html","4f0c32d189dd26739999e238530e3410"],["/blog-tech/tags/解釋型/index.html","a640795e499035e5a45ad980e2d70791"],["/blog-tech/tags/詐騙資料/index.html","8eae209fa699d1059e5506f22d4b93bb"],["/blog-tech/tags/調變/index.html","3745cbdc0f68b101b2be59579a316ddc"],["/blog-tech/tags/資安保護/index.html","130c50a4c8892c3f23ee33efe48e55c6"],["/blog-tech/tags/資料鏈結層/index.html","38cbe34d9f8c3193b7a950da4cb40d1d"],["/blog-tech/tags/跨域/index.html","a1480042bd26106acbe2f18787e88d4b"],["/blog-tech/tags/身分證/index.html","f00964d96ab316b783cc09eea639b49e"],["/blog-tech/tags/通道訪問控制/index.html","f52f508c8486f6158b5297e265143b55"],["/blog-tech/tags/銫原子/index.html","3cfbf51304b4527b0443b05e1a43d989"],["/blog-tech/tags/閉包/index.html","ddeb58e79dcf41f116629deeb8b03d34"],["/blog-tech/tags/雙工/index.html","00a5508a578f5d1f0cb09bae999cff8c"],["/blog-tech/tags/雙絞銅線/index.html","343539b82038ecf194236d1941a0d4c2"],["/blog-tech/tags/雜訊/index.html","67a5d0b6186557fa9925b18e1f3bbda4"],["/blog-tech/tags/電場/index.html","bae854b79c9e6346b247fea608c88b97"],["/blog-tech/tags/電磁波/index.html","ad09ffe554828f7014574617c99c9543"],["/blog-tech/tags/電視/index.html","8c69d52b046e944c338200d813ef9f3c"],["/blog-tech/tags/靜態優化/index.html","8f11d315fe49020ea39fb271520c0279"],["/blog-tech/tags/頻譜/index.html","9958ad9e4790926f84bc59c80e6da6d2"],["/blog-tech/tags/類比/index.html","01742c2467891cf6061287f3b182cd41"],["/blog-tech/tags/馬克士威/index.html","249b1bcec511f0e39eccf52fc1f0bfeb"]];
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







