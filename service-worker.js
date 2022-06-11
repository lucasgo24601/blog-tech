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

var precacheConfig = [["/blog-tech/2020/02/14/部落格介紹/index.html","479691d500d1ccfd3d3f59819e936bcd"],["/blog-tech/2022/06/02/前端P.01 - 網頁三兄弟/index.html","cd65d3b24ee64edafeda8986ef5e2ae3"],["/blog-tech/2022/06/02/前端P.02 - ECMA組織/index.html","83e35ad22f7323ccb90bccc53bc3e5f4"],["/blog-tech/2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","b60a25c5bcf4a87d7bce2e1232e838f1"],["/blog-tech/2022/06/02/前端P.04 - JIT & V8/index.html","63ec23542643555b8e2319080d802f6c"],["/blog-tech/2022/06/02/前端P.05 - TypeScript/index.html","4b360a810001fa591f81329eb1162ab7"],["/blog-tech/2022/06/02/前端P.06 - WebAssembly/index.html","88c60171e0afe3ee696e7bd8f4ddfd91"],["/blog-tech/2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","2466d30be8e8c290baeacd2363513d8d"],["/blog-tech/2022/06/02/前端P.08 - AJAX & 跨域/index.html","8fb820503b5e89f9aee4b7aad87e60fd"],["/blog-tech/2022/06/02/前端P.09 - 同步和異步/index.html","198ed31647ad218dbd8210c7a82eaff8"],["/blog-tech/2022/06/02/前端P.10 - Scope/index.html","bd92a2fb96d91b5706d0114569e77ad8"],["/blog-tech/2022/06/02/前端P.11 - 模組/index.html","485267ec1a6e8709822fcaa5fb4d3adb"],["/blog-tech/2022/06/02/前端P.12 - NodeJS/index.html","d9d14f54385e166fea1cfc7f97a9fa8b"],["/blog-tech/2022/06/02/前端P.13 - WebPack/index.html","478d7ffa35229cc1b1047adb1c392548"],["/blog-tech/2022/06/02/前端P.14 - 單元測試Mocha/index.html","421b83515b2ef742d201cccb7ee83573"],["/blog-tech/2022/06/02/讀書P.01 - 人類簡史/index.html","a56bfa125622f2112ea428841f90f35b"],["/blog-tech/2022/06/02/通訊P.01 - 協定/index.html","b162853ed0f23e451f7e22e1dbc74e07"],["/blog-tech/2022/06/02/通訊P.02 - OSI七層模型/index.html","b57f47adbea12b8519e3102ebaa5d16a"],["/blog-tech/2022/06/02/通訊P.03 - 實體層、介質/index.html","c778fda1094223c67094ae3d567ec2d3"],["/blog-tech/2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","d833cc1030f5de9eab39f8c3804c762c"],["/blog-tech/2022/06/02/通訊P.05 - 資料鏈結層/index.html","c173c1606b27b9bc666aacfbb030144b"],["/blog-tech/about/index.html","e4da649ed558135d0f1395b405f6c2c5"],["/blog-tech/archives/2020/02/index.html","224e6e5b1645218b061e035f75414d5a"],["/blog-tech/archives/2020/index.html","e45f4350f363c750f3398447d79efc6c"],["/blog-tech/archives/2022/06/index.html","3acedbdc0777ff7380f4d73a8f41f63f"],["/blog-tech/archives/2022/06/page/2/index.html","00c2426d7850ae1b15aa1d801ab9cd3d"],["/blog-tech/archives/2022/index.html","f95c8cf9d3b9e0c7fc870a13933fe3a1"],["/blog-tech/archives/2022/page/2/index.html","96d7cbd28a9f58cbab0e90ae08411086"],["/blog-tech/archives/index.html","3e1e59c4ce6bab383150a818822bc479"],["/blog-tech/archives/page/2/index.html","e7325125c7fe9e57ea89ad4e073bce43"],["/blog-tech/archives/page/3/index.html","486f02545063030c4a7f8bb3fd15bd68"],["/blog-tech/categories/index.html","28071a816a2440d886ea5f06ddcce305"],["/blog-tech/categories/前端系列/index.html","ffa9565c189bb33b0ad3d19558f5445d"],["/blog-tech/categories/前端系列/page/2/index.html","c51cc8d70250d6897a617f6962777bd4"],["/blog-tech/categories/基本文件/index.html","6e1b12fbfa90b05e0fbeb044bed39d6e"],["/blog-tech/categories/讀書心得系列/index.html","0bb50378c0f0a43f2fd66e5f4d4746f0"],["/blog-tech/categories/通訊協定系列/index.html","5572da0bef644710fd04137a72a086bc"],["/blog-tech/css/index.css","d596cc019db5ad77d44e30d4134e0a21"],["/blog-tech/css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["/blog-tech/css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/blog-tech/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog-tech/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog-tech/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog-tech/img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["/blog-tech/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog-tech/img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["/blog-tech/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog-tech/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog-tech/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog-tech/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog-tech/img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["/blog-tech/img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["/blog-tech/img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["/blog-tech/img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["/blog-tech/img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["/blog-tech/img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["/blog-tech/img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["/blog-tech/img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["/blog-tech/index.html","0f47aa07b5bebbf790f4c29221baea7c"],["/blog-tech/js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["/blog-tech/js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["/blog-tech/js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["/blog-tech/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog-tech/js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["/blog-tech/page/2/index.html","ab924bff7c21c16b282306aa0a0c48a9"],["/blog-tech/tags/16PSK/index.html","53aaa42350e5751805b0e3c3a3a52da6"],["/blog-tech/tags/1G/index.html","b5aff25731d8903cc1d4363cd1ad2a7b"],["/blog-tech/tags/2-4G/index.html","9a6d6322d379da0674ac5533defc9259"],["/blog-tech/tags/2G/index.html","c99663c3bce0443e601898efeb01795b"],["/blog-tech/tags/3G/index.html","db6317c16208d51b65f9439e9236b1de"],["/blog-tech/tags/4G/index.html","33c105aa851eedd28754811f4826501e"],["/blog-tech/tags/5G/index.html","6862c80091f43b7df67ea095f99646c9"],["/blog-tech/tags/AJAX/index.html","d590a934308dc27d8cb9bfc345cec15b"],["/blog-tech/tags/AM/index.html","273ef3182f64053cc708345325b84a1a"],["/blog-tech/tags/AMD/index.html","4b6c04735e86500ba8abd81f63b46e41"],["/blog-tech/tags/ARP/index.html","9d128307ca82c769ece144bf3ce28466"],["/blog-tech/tags/ARPA/index.html","8045c089def1e8e931ce32cdf1916cd4"],["/blog-tech/tags/ARP攻擊/index.html","1187a65465a68192533d035735eff393"],["/blog-tech/tags/ARP緩存表/index.html","51254a87ce5c417c51d97e890bd3d181"],["/blog-tech/tags/ASK/index.html","ceb5969e4a49a12f9dff8522db3b8e93"],["/blog-tech/tags/Async/index.html","f967f4b5bf8beec629aea200ac5075f1"],["/blog-tech/tags/Await/index.html","cdf5f6270f63908cc0bea7e57f07030b"],["/blog-tech/tags/BPSK/index.html","b56192d379d53c5d94dedf99ffd6ed41"],["/blog-tech/tags/Bable/index.html","6d9df94ffa9e1447e8895bf5bf899902"],["/blog-tech/tags/C/index.html","ca71825c253729bd450248410fef7afa"],["/blog-tech/tags/CCITT/index.html","b9d9e2b80a5bd61415c5bfaa1f51c6eb"],["/blog-tech/tags/CDMA/index.html","23121d5a57a9943d0431d7a355c5e676"],["/blog-tech/tags/CI-CD/index.html","c8667171aab42c3338a6a4c8fee9e81f"],["/blog-tech/tags/CI/index.html","377b376578ac74c050653693542c20b8"],["/blog-tech/tags/CMD/index.html","cae0b652c2a440f21171b1ffa66001bd"],["/blog-tech/tags/CORS/index.html","01d992da5070ac3f4e76151855003b6d"],["/blog-tech/tags/CRC/index.html","60457da531939dd5b0a56a1744fb4b43"],["/blog-tech/tags/CSMA-CD/index.html","1f51dedfb30ecd61d4cfe53980c49933"],["/blog-tech/tags/CSMA-CS/index.html","4cade859bfd32d64874d557473a01820"],["/blog-tech/tags/CSS/index.html","0314aa89e1bfb5aaaaa9255ad8b7c042"],["/blog-tech/tags/CallBack/index.html","b70a63b4511a34b826cfe8110fdb3fc8"],["/blog-tech/tags/CodeStyle/index.html","91ae90e97f7b8637d79d938088a091a7"],["/blog-tech/tags/CommonJS/index.html","9bff0febc8a7acc59fb1dc526974e552"],["/blog-tech/tags/DSAP/index.html","3bf5db02f344f87bd00f066f19ca76f8"],["/blog-tech/tags/ECMA/index.html","545058f766a3ad7d9399b65e2c6e4f79"],["/blog-tech/tags/ECMAScript/index.html","dc48c8a1736ce4aaefb0c9b9d70bba59"],["/blog-tech/tags/ES5/index.html","eee4d2b153bef9b167e8d82f638d4457"],["/blog-tech/tags/ES6/index.html","9b025ce68a3841a0bc7a269edd7d6658"],["/blog-tech/tags/FDMA/index.html","3a64636e036263b6d3c3f804c96f3fdd"],["/blog-tech/tags/FM/index.html","a1613259cda07d1a318efb8ced61dd3d"],["/blog-tech/tags/FSK/index.html","ece59baa0dca2da5cd3c081e74893f44"],["/blog-tech/tags/GC/index.html","e34e8239f4f55aa62aafe9bec1c8b358"],["/blog-tech/tags/Google/index.html","bda065f54a9babb299dac187d846ca7f"],["/blog-tech/tags/Hoisting/index.html","cf2111b4bc6a3183d78d011dfda7922e"],["/blog-tech/tags/Html/index.html","efb2dbf359d06e0f94732af3e3ad1d67"],["/blog-tech/tags/IE/index.html","46669fc5f0c51304318f527102532342"],["/blog-tech/tags/IEEE/index.html","396fc6f3e39b0e31e3cb4e2650f84aa4"],["/blog-tech/tags/IEEE802-11/index.html","538f75644f67cb6352a6327de598646f"],["/blog-tech/tags/IEEE802/index.html","04ad391a9a2729e5029d797e0cd276ce"],["/blog-tech/tags/ISM/index.html","a64e4c7f43338adb08afed1637f92616"],["/blog-tech/tags/ISO-31-1/index.html","9e1ebc87280025eaf1706471b1a5c522"],["/blog-tech/tags/ISO/index.html","16cbc1c8a483615e72263b75fdb1498c"],["/blog-tech/tags/ITU/index.html","73eea87d8935cdd2c86b74dbeab706fe"],["/blog-tech/tags/JIT/index.html","fb6e56e53336aa184e83db568ecde64d"],["/blog-tech/tags/JSONP/index.html","6f99efb7d1e2c2b772243c3bd22b554b"],["/blog-tech/tags/JavaScript/index.html","4f301b61f818e76d1554eadbbf10f58f"],["/blog-tech/tags/LLC/index.html","120ecb151cf42844a17ca19a95073d44"],["/blog-tech/tags/MAC/index.html","1ef627195a46fe7d058dfc5e154d078f"],["/blog-tech/tags/MACAddress/index.html","9842a0bfa35b78fdbf1f8801f8fa0e1e"],["/blog-tech/tags/Mocha/index.html","41472eda5af4f4442d3b43dcb802c873"],["/blog-tech/tags/NVM/index.html","9a6892c50f76a5f85625cf4494a1807a"],["/blog-tech/tags/Netscape/index.html","a27e87fe0f30007e7e9e1a8bfe9661c2"],["/blog-tech/tags/NodeJS/index.html","8c1f8976812d328fcb1f60322b2a1084"],["/blog-tech/tags/OFDM/index.html","de3505659edb0646e996d8575a00aeee"],["/blog-tech/tags/OSI/index.html","a180da6746d221d51ead6285cd2e3659"],["/blog-tech/tags/PM/index.html","f2b154bccd741c20b6105c09af1cf24f"],["/blog-tech/tags/PSK/index.html","d8c53ac6679e7e8f219e540623e97f3b"],["/blog-tech/tags/Promise/index.html","4c176a520905b2998b00b240cf832293"],["/blog-tech/tags/Proxy/index.html","9507473ed4248302ab489bd01f7c5456"],["/blog-tech/tags/QAM/index.html","8873a453cc57730398612411a1365480"],["/blog-tech/tags/QPSK/index.html","65968c6801109adf914735ae785a567b"],["/blog-tech/tags/RJ45/index.html","1190a4dc41079a37b4d450258196d019"],["/blog-tech/tags/RS-232C編碼/index.html","b48a56808241401e1d87b656397a6660"],["/blog-tech/tags/RequireJS/index.html","5ffdba94dd3f9a96c11f379d1371e147"],["/blog-tech/tags/SSAP/index.html","769b8b3f4646cc88e1145dc2fe8758d4"],["/blog-tech/tags/STP/index.html","93816eb8934435bf1fb9e36333e8f5f4"],["/blog-tech/tags/Scope/index.html","263c34e855ea5ce3504de0461b90c45c"],["/blog-tech/tags/ServerJS/index.html","c23c4de665e38a8232c43b3b42259c08"],["/blog-tech/tags/TCP-IP協定/index.html","f02e42c05c1d5f480be64ffc65bb6397"],["/blog-tech/tags/TDMA/index.html","146aac2cc0966ac7ba5da9b99fec4487"],["/blog-tech/tags/TypeScript/index.html","4e8b15433162c503803b5f8ce97c16bd"],["/blog-tech/tags/UTP/index.html","47c4e033125b0864c67a70e6692c8cab"],["/blog-tech/tags/Uglify/index.html","4bf47e2b56124a03ba17dceee8c8fa8d"],["/blog-tech/tags/V8/index.html","130d9c14e4036509c86bcc04aaa531ce"],["/blog-tech/tags/VSCode/index.html","568f7adbe39b7127a214b67c4a247807"],["/blog-tech/tags/W3C/index.html","6eb8f928f192041e314197ba7a4c37ac"],["/blog-tech/tags/WebAssembly/index.html","067845447c124c8b3aeb5f61f40a4768"],["/blog-tech/tags/WebPack/index.html","d59e16b5d9520fcb4488043bbf0cc71a"],["/blog-tech/tags/WebSocket/index.html","d5d25a08147af88322b225001db6ab6a"],["/blog-tech/tags/WiFi/index.html","61555eb49bd1d756a2f30346f3a3d5bf"],["/blog-tech/tags/WiFi探針/index.html","6a3a6bc4efdcdde240c1914f34d595b0"],["/blog-tech/tags/XMLHttpRequest/index.html","65ae0a857722674979eb2434bae3727a"],["/blog-tech/tags/apply/index.html","17e2d6fea3f9bdfb17949d9299e18dd8"],["/blog-tech/tags/bind/index.html","8daec19bbb3f993ef50631ebc3b98b80"],["/blog-tech/tags/call/index.html","bddd8a210c5ff7c65ac82cf882ff528f"],["/blog-tech/tags/const/index.html","fdac94f7bf99ba7fc3cb71c109434ed0"],["/blog-tech/tags/export/index.html","03852cd476edc40410ba9f660da73408"],["/blog-tech/tags/exports/index.html","98abad59bffcf24b56820415fd86e659"],["/blog-tech/tags/import/index.html","47ba1a25fb0f47888dcc5bfe6d2068b4"],["/blog-tech/tags/index.html","a87f3420e0640659470bcaf918a71b22"],["/blog-tech/tags/jQuery/index.html","5a27c288378da38f086008a44fa34cc7"],["/blog-tech/tags/let/index.html","6a4c80333c68f4ac6218c5214ff0466d"],["/blog-tech/tags/npm/index.html","c51385c641b714a951cc313a0f3369f1"],["/blog-tech/tags/packeage-json/index.html","6451081c383fa5305496f0ce9c258118"],["/blog-tech/tags/require/index.html","a527177b5d792c5dd4acf97f39547cc8"],["/blog-tech/tags/runtime/index.html","2b40a13760cf106ad60c22b094809c3e"],["/blog-tech/tags/seaJS/index.html","d852c9f156eb8c0f9428f7ab01c8d109"],["/blog-tech/tags/this/index.html","794006d61d0f15b7a8f618f1d665c9cb"],["/blog-tech/tags/tsc/index.html","aedb6d865e25be5f2d9247a68a0c40d3"],["/blog-tech/tags/tsconfig-json/index.html","2f792c85b554f5dbbe755343070cb126"],["/blog-tech/tags/var/index.html","ea8a3af86cd0e5280013a015dec41234"],["/blog-tech/tags/中頻/index.html","dc97c47b2f1321a32745a69b7d8e14e4"],["/blog-tech/tags/交流電/index.html","966cf99154359505f803dab8d0ab68f9"],["/blog-tech/tags/人流監控/index.html","a3a4e130880c5ce41079a4c09147fe90"],["/blog-tech/tags/人類/index.html","30fcdf0222186204575e063569b8b2b8"],["/blog-tech/tags/介質/index.html","5f35c493bf3796dcc768720e84140091"],["/blog-tech/tags/傳輸層/index.html","d1e7838dd975f3d18f62fe83f827565e"],["/blog-tech/tags/光纖/index.html","1b2074142609f19cc70add3902156f4d"],["/blog-tech/tags/全雙工/index.html","1a923417b0bb7c9c85f477b372eba5e8"],["/blog-tech/tags/前端歷史/index.html","0a8db40729768288613a47ed1adb06d9"],["/blog-tech/tags/半雙工/index.html","7fe588000a57b41ebec8d7de1869d0f3"],["/blog-tech/tags/協定/index.html","138b4b964c0fea620ec4f5dd4ad99228"],["/blog-tech/tags/厄斯特/index.html","801908f85092a01b06e9922c6f83f159"],["/blog-tech/tags/可見光/index.html","a07c37ef7401db1d3972805e9a200dbe"],["/blog-tech/tags/同步/index.html","7bcfc2dad8375c2805483370dfba47ae"],["/blog-tech/tags/同軸電纜/index.html","667ad5e4add0c3dcf6416f419a236031"],["/blog-tech/tags/單元測試/index.html","676b16b275c5eb3394c8dda38510a7e8"],["/blog-tech/tags/單工/index.html","8b80f74563fe5573e073523290c06a4d"],["/blog-tech/tags/嚴格模式/index.html","8a08e338433d604dbfc55690b0d3e5d2"],["/blog-tech/tags/國際電信聯盟/index.html","2c84d3abfec94ac84a432ac0d65b259e"],["/blog-tech/tags/基頻/index.html","bd8f83180a6cfa0fd3348f65dfc51c9b"],["/blog-tech/tags/多工/index.html","3d34a4b6388d0b0de83efef3adf448cb"],["/blog-tech/tags/大腦/index.html","ec8c7e89fd48d5baaab0793edac3c87d"],["/blog-tech/tags/定位輔助/index.html","65cdc5bc03770bf5f9c408d2aa040203"],["/blog-tech/tags/實體層/index.html","7126c026b7e655b7c18c5bbed2ebb372"],["/blog-tech/tags/封包交換/index.html","257b7f181cbce69c7aa989c65d9cad2d"],["/blog-tech/tags/射頻/index.html","86d20d408f3f2a68a86b5fed9e0afb56"],["/blog-tech/tags/尼安德特人/index.html","5345605a0bae79f4d3de38e169301ef4"],["/blog-tech/tags/差動式曼徹斯特編碼/index.html","a625f93b1b8dbc42a151159b379ae996"],["/blog-tech/tags/差動式零補差編碼/index.html","6f1cd10210067621eaa6ba1cdadae79a"],["/blog-tech/tags/廣告投射/index.html","74abc7cb926e830d58f8c9aa9338575f"],["/blog-tech/tags/弱型別/index.html","58acbec6d6244e86a58313bc6a3a1f55"],["/blog-tech/tags/強型別/index.html","736e216a2881d9cc2b626a7a5b41a38e"],["/blog-tech/tags/應用層/index.html","12ca35361991ecdf3fb470aaebab72e2"],["/blog-tech/tags/抽象檔案-d-ts/index.html","4afa41e32eac26bd135377dc03a4f9cc"],["/blog-tech/tags/數位/index.html","44555da3ea3070b6f940e32be2be5905"],["/blog-tech/tags/時間/index.html","fe1807c9fc55447fec96a28676d0377f"],["/blog-tech/tags/智人/index.html","79f6b00746144bba8d67c1caf45132a4"],["/blog-tech/tags/曼徹斯特編碼/index.html","48962dce0d935f24031d6f44f0cca65e"],["/blog-tech/tags/會議層/index.html","7ad8dec4d8e2e7f21160591380c1157d"],["/blog-tech/tags/有線通訊/index.html","2293977fcf6c7cdbf991a3b23e507dec"],["/blog-tech/tags/汙染變數/index.html","aefdb6015d5f35eb4d2557fa7a3cced5"],["/blog-tech/tags/法拉第/index.html","3b08476819b583586a09addcf6ce4a8f"],["/blog-tech/tags/瀏覽器/index.html","63eee978b690621884cc375200788b58"],["/blog-tech/tags/無線通訊/index.html","6b4a913c02056ac84b000fa0581283f0"],["/blog-tech/tags/特斯拉/index.html","d8fc39bb73ee17a1eaa4a4b2cfa8a7e1"],["/blog-tech/tags/異步/index.html","ed4b9033d427e9772015284f41b44943"],["/blog-tech/tags/磁場/index.html","d44d96337291a29ee3c801e1ff505aa6"],["/blog-tech/tags/第一次瀏覽器大戰/index.html","784be54e9f000959072b50de0206db8c"],["/blog-tech/tags/第六代WiFi/index.html","61828276d422b4b8c44914344b975229"],["/blog-tech/tags/網路層/index.html","d0b2e9cc9c08dc2fe7c346e092532614"],["/blog-tech/tags/線路交換/index.html","b20472f8578d890196cf6e8829247562"],["/blog-tech/tags/緩存/index.html","5db32eb5badd414f174bf7755778f361"],["/blog-tech/tags/聲波/index.html","7de284ace46096a8daa5b6b5d0e30f8b"],["/blog-tech/tags/能階/index.html","56ccef51829f27ad7110506bb3b0a167"],["/blog-tech/tags/腳本語言/index.html","a542396037d0c437637a61be94e5d025"],["/blog-tech/tags/行為監控/index.html","96ffc043180b5abb234271d2a5a99726"],["/blog-tech/tags/表現層/index.html","a8d1694002dd0276902b053dc4fc016b"],["/blog-tech/tags/解釋型/index.html","7e79a00b367cd3f9eefda54dbf7ec9d7"],["/blog-tech/tags/詐騙資料/index.html","7e6d9a8470d0241dd582939810c9ba9a"],["/blog-tech/tags/調變/index.html","fa612ad38e98540020dfa05a5ca9f4c2"],["/blog-tech/tags/資安保護/index.html","b67b98a7fde1e55b43a936485a229419"],["/blog-tech/tags/資料鏈結層/index.html","4d034796ad4f6bf61d756485e89e06c7"],["/blog-tech/tags/跨域/index.html","d24c2f55472071a32ee9e932e3c141a7"],["/blog-tech/tags/身分證/index.html","f829aaa309b6c580375afc0902d7fa43"],["/blog-tech/tags/通道訪問控制/index.html","c1faf712423b280a213b103a0168e318"],["/blog-tech/tags/銫原子/index.html","58c70bf8377ed38bf63d2748eb76044c"],["/blog-tech/tags/閉包/index.html","53f4985789b97e6a2c367a4a7b40f136"],["/blog-tech/tags/雙工/index.html","62c503519656de83b8e2dbc27c1182bd"],["/blog-tech/tags/雙絞銅線/index.html","a1a4a59761ac80de7f0382e747b008f5"],["/blog-tech/tags/雜訊/index.html","44c22b804bfde87a548582725dc0db42"],["/blog-tech/tags/電場/index.html","8ed59b3a34e661f8eadddde8647d7624"],["/blog-tech/tags/電磁波/index.html","e2f0490b83c61794b56665a439a7e385"],["/blog-tech/tags/電視/index.html","d38b7d00d0dbe363defe12b1164e2a68"],["/blog-tech/tags/靜態優化/index.html","a6d134ae1e6d72239fb73e0bdddf5a3a"],["/blog-tech/tags/頻譜/index.html","0d0c74c7dbb64a68edfd62440f2e1a33"],["/blog-tech/tags/類比/index.html","a2a965343bacdab0050c0664bf73a21f"],["/blog-tech/tags/馬克士威/index.html","55eb8da167ad00cfd894b0dcfccba736"]];
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







