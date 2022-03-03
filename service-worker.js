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

var precacheConfig = [["C:/Users/User/Desktop/Self/hexo-tech/public/2020/02/14/部落格介紹/index.html","5e9b1be9976d13ccf63404915c6fdff2"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/前端P.01 - 網頁三兄弟/index.html","dc34069cb09e947c71700916bda1dd8b"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/前端P.02 - ECMA組織/index.html","474351c423f1e091b6e8b27190730440"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/前端P.03 - 分析解釋型、弱型別/index.html","5d1790f2b39284ed40e3f2ead99884c1"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/前端P.04 - JIT & V8/index.html","3afd56555eda546f922ae49434ff18ad"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/前端P.05 - TypeScript/index.html","657a6f6e1d7928bc0bae2bc73e9499e6"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/前端P.06 - WebAssembly/index.html","8bcc23fc4868ea5238e1023c19efd930"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/前端P.07 - jQuery & AJAX歷史/index.html","516bbba73e24e1d7661dada168f65abc"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/前端P.08 - AJAX & 跨域/index.html","614fbdbc1d8d06f202054edbc0decb70"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/前端P.09 - 同步和異步/index.html","f79958b6115fe5c71e4ba681f6c00bd3"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/前端P.10 - Scope/index.html","407e777ada8a48d7596887b72d0ea714"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/前端P.11 - 模組/index.html","9366c4558fb2a95196f3e3aa8d325dbf"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/前端P.12 - NodeJS/index.html","cdd4938e0e4262455d57159a18b88412"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/前端P.13 - WebPack/index.html","78d2d7f949bac653b2bca0f94e4123d0"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/前端P.14 - 單元測試Mocha/index.html","902003083c681df69842e3de577ecc8f"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/讀書P.01 - 人類簡史/index.html","330e17e2d390ea5ae204353d8a533547"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/通訊P.01 - 協定/index.html","1427aed2ecd66fec3acedece62929dda"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/通訊P.02 - OSI七層模型/index.html","0413d11e4e68291dc6915d4c0331d55f"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/通訊P.03 - 實體層、介質/index.html","c8f3e77d69f087c1c14b18f3c4131d27"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/通訊P.04 - 實體層、傳輸技術/index.html","1f414d04b4dc441e160ae8eb746d6624"],["C:/Users/User/Desktop/Self/hexo-tech/public/2022/03/01/通訊P.05 - 資料鏈結層/index.html","fc7345acdc6f9fcf156b4f1d813c1f67"],["C:/Users/User/Desktop/Self/hexo-tech/public/about/index.html","34405976e03dc20c580df7c6738780d6"],["C:/Users/User/Desktop/Self/hexo-tech/public/archives/2020/02/index.html","9d48ba540159e2e178c889b53440128a"],["C:/Users/User/Desktop/Self/hexo-tech/public/archives/2020/index.html","21d6c7bf062893a58f7e4f3a8b93215a"],["C:/Users/User/Desktop/Self/hexo-tech/public/archives/2022/03/index.html","d3aa74c1dca13d6f3c638e8e59ceca77"],["C:/Users/User/Desktop/Self/hexo-tech/public/archives/2022/03/page/2/index.html","fb5d1306161a18e32ac0c1343dc4283d"],["C:/Users/User/Desktop/Self/hexo-tech/public/archives/2022/index.html","c645f0e5f2fbee06bda32debdd5446d0"],["C:/Users/User/Desktop/Self/hexo-tech/public/archives/2022/page/2/index.html","01f4b74150c6f98212b30b7a5850baba"],["C:/Users/User/Desktop/Self/hexo-tech/public/archives/index.html","b6b40bc482b0a31aa1fef108b8a046e4"],["C:/Users/User/Desktop/Self/hexo-tech/public/archives/page/2/index.html","d97a621c13b869df0415398f6fcb926e"],["C:/Users/User/Desktop/Self/hexo-tech/public/archives/page/3/index.html","5a5f1f44d2c1544010706d62c892c3b3"],["C:/Users/User/Desktop/Self/hexo-tech/public/categories/index.html","e260e8546c5a4855ff1214cf1ad4794f"],["C:/Users/User/Desktop/Self/hexo-tech/public/categories/前端系列/index.html","dab7a13c13d73cfe8abb04d2637bc6d1"],["C:/Users/User/Desktop/Self/hexo-tech/public/categories/前端系列/page/2/index.html","2fcae76a932ca7275427641eb37ee870"],["C:/Users/User/Desktop/Self/hexo-tech/public/categories/基本文件/index.html","85850286231fcb7c56a111a2a55e778b"],["C:/Users/User/Desktop/Self/hexo-tech/public/categories/讀書心得系列/index.html","86aa11b5a4abc4cf16450a36cc052554"],["C:/Users/User/Desktop/Self/hexo-tech/public/categories/通訊協定系列/index.html","f0da2e1f9ce75575c1ae4ca8fe6a96c4"],["C:/Users/User/Desktop/Self/hexo-tech/public/css/index.css","7d115e890f3fcc3bd156fa2858ced940"],["C:/Users/User/Desktop/Self/hexo-tech/public/css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["C:/Users/User/Desktop/Self/hexo-tech/public/css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["C:/Users/User/Desktop/Self/hexo-tech/public/css/sakula/style.css","6cb2d5d6b51ac16969496c1c6ffe5207"],["C:/Users/User/Desktop/Self/hexo-tech/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["C:/Users/User/Desktop/Self/hexo-tech/public/img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["C:/Users/User/Desktop/Self/hexo-tech/public/index.html","e9db88dada928bd98d19db3019a6714c"],["C:/Users/User/Desktop/Self/hexo-tech/public/js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["C:/Users/User/Desktop/Self/hexo-tech/public/js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["C:/Users/User/Desktop/Self/hexo-tech/public/js/self.js","511962e6a9a94b6d05e905c23a79897a"],["C:/Users/User/Desktop/Self/hexo-tech/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Users/User/Desktop/Self/hexo-tech/public/js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["C:/Users/User/Desktop/Self/hexo-tech/public/page/2/index.html","9433e60ebf4a5c5e2c26255481886ffd"],["C:/Users/User/Desktop/Self/hexo-tech/public/page/3/index.html","81aa7716a8540aba54d5188138f58498"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/16PSK/index.html","c217a8ba80fc33be6b9001d899717504"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/1G/index.html","24689a12358e4f078b036d2e815da038"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/2-4G/index.html","3998bc1c48c5445a38e4a135deae9462"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/2G/index.html","563ed366d2999458d28c732d6b6c09e7"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/3G/index.html","04e71ac68ba959cd5ef969943a894f00"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/4G/index.html","b31379da424a4fd69508235c7e8ba04b"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/5G/index.html","e690ace0e8d1f497fd455cd1dac2d20a"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/AJAX/index.html","619acf57060797f07837ea0d171be826"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/AM/index.html","8fa4270b0c6d8eae37fe68acfb51a5a5"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/AMD/index.html","fcddd8551c8137819e70145ad3b053df"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/ARP/index.html","85aa08c8161516626146c38ce4872975"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/ARPA/index.html","e1ea9fa126a9090ca4714ad15a2c700e"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/ARP攻擊/index.html","9594de0542ccdc713d2633214c13b443"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/ARP緩存表/index.html","a57977c86050f9b72a8ed5b1623df278"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/ASK/index.html","3e676cd4ca4ad3c15c55395a06d3ee71"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/Async/index.html","5a213b7fafc032488ae54acc9fa59b6e"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/Await/index.html","73a03f6fcdba7c10bccd5b186cb3de6f"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/BPSK/index.html","24aa1e95c60dc90680c5e590ec702cdd"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/Bable/index.html","3835f9717d190cbb9c3297dc52611a7e"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/C/index.html","f57cd4990c36a14474329bdfcff5cc3d"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/CCITT/index.html","bc47f25a0dc9f484b6800b993993cd94"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/CDMA/index.html","535d2089c41cbac2111d5d70144d2a7b"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/CI-CD/index.html","50cf7bd0d12fa0cea1c152839b4f959c"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/CI/index.html","a666985df23df4cf11ff9b653b43ba74"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/CMD/index.html","f545b9a11b7605fa317b637108ede396"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/CORS/index.html","15180bf2668589e4a3c8c05b05ff7e5d"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/CRC/index.html","4e35d7c68d0198ed34852b3e4fe7150a"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/CSMA-CD/index.html","0a86093df03d2c82c9166d8b27a5b94e"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/CSMA-CS/index.html","e0bc3ddffc1ce33979d2dd69fe987bea"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/CSS/index.html","1ac56b5f6986713f2bb0e6cd77806299"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/CallBack/index.html","81e0ab86ff097ce998faf1235ec72ba3"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/CodeStyle/index.html","597835d95a98070d7d146da4d9ce6efe"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/CommonJS/index.html","f0d161f2dfa8a00c89e4d9a25a2281e9"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/DSAP/index.html","644d95e72cffcb2ec62e5da1a8917ecf"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/ECMA/index.html","1c6de9b74caf06a9d9b8d1dd9637d511"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/ECMAScript/index.html","c6681d90c88c06814c2add672d1c3b3a"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/ES5/index.html","f5fafa3dfb2cf0448d055314485bfa3e"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/ES6/index.html","f4093c90058f47ca8d1d7a63e3b89ed9"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/FDMA/index.html","bf39da845adab592a828d4e98207809a"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/FM/index.html","2d2de485027b246388e976f3a0c164e2"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/FSK/index.html","71fc8a5d7a9e2df032277ee0a3dd8197"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/GC/index.html","61ff30eef06bdff5707f1fab49a35474"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/Google/index.html","8ac1042da77255c8861397b32c4ae780"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/Hoisting/index.html","c16110ed5a9334b054e2e5a158870e0f"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/Html/index.html","afafe6030e906742f0e9c9107c9c1f45"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/IE/index.html","4ced9d74b2adf998587b4fdcd78772aa"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/IEEE/index.html","230b8bd91efad13556bfd5542a0744f7"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/IEEE802-11/index.html","39661445385545592f6d6dce1c2387f1"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/IEEE802/index.html","b4b81df83f62a8d1dee3ee344da22a0b"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/ISM/index.html","7ec4bc516737aa820e9a21ee7ad6cf5b"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/ISO-31-1/index.html","b26bb19bb2b07843e92264688c0f436c"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/ISO/index.html","be53e4de0ab80a3587f0a7294052424e"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/ITU/index.html","bb45577b1cd30bf31f653ad7ac6cb414"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/JIT/index.html","e67f703086f77f17da7d67d8d6e914db"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/JSONP/index.html","be7de186a24b46973e5a775afd342b87"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/JavaScript/index.html","ba4d92ec96f81477d29abddbc36b8cb2"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/LLC/index.html","280651209886fe16873a123492e5d156"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/MAC/index.html","7cf6ce5af8260e6a7a0e0a97fb56ac6b"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/MACAddress/index.html","d9551c609eb223e0b3d289c1e066fe6c"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/Mocha/index.html","6aabb1b9c65f1b1e5ec715c224111f81"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/NVM/index.html","afa30c360de4e6b55bd7485cc592bfa2"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/Netscape/index.html","765e7512e2189dbaa849130658345df8"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/NodeJS/index.html","4831e298c53573c46d26bb4743b9f89e"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/OFDM/index.html","ea1e8eeae5ba0c28ea2c3a5f3224ab78"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/OSI/index.html","7b2a0a7cade59a011d6736bfd03083bf"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/PM/index.html","a395b72180d31e35ec0fd685122e4d16"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/PSK/index.html","1ababc9668a84504dad836c59bbbf0c6"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/Promise/index.html","1c5fe9b07fda177bde7be17107055d9c"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/Proxy/index.html","db7a3ddfd0de2ab4ce5e986a8f9348d9"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/QAM/index.html","bb7f6927892e00e1f9558bfbfd763691"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/QPSK/index.html","1a44524fb97618179a68cfec0ddca094"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/RJ45/index.html","bb91ba96547728c3c9448db8177d3891"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/RS-232C編碼/index.html","e964ae3bc39655fc0ed0594adf849a51"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/RequireJS/index.html","621112bddd793f7555b039fe2de7bad4"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/SSAP/index.html","397c06d41aa3811e33bec2bcb87f8fb3"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/STP/index.html","39a815c3f76462b312be60b50ba8d706"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/Scope/index.html","4c5a0063a038e5e7e141427b18059026"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/ServerJS/index.html","c4a846e0afb686b158079d03e45e38fc"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/TCP-IP協定/index.html","a5079867b8d44876021f7c7afb0019d6"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/TDMA/index.html","df6f2c642e9bb1c7a1d15294eb81aefe"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/TypeScript/index.html","ae3eb4c79d756ee79405e07fe40c241b"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/UTP/index.html","65259c2bb18167f567a8e8c4b8f4e68d"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/Uglify/index.html","9197665ca299613f0228a508905afee6"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/V8/index.html","3159f93559ecc1bfc45f6d9206239154"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/VSCode/index.html","02994d599daa739369cac306b74d78b7"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/W3C/index.html","6a4e223a75eb04e4903cbb3b40d472c5"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/WebAssembly/index.html","1743c08b9d6a002da13f39cce6d6a07b"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/WebPack/index.html","7b5fda563314a086450ea4917e21f578"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/WebSocket/index.html","e40b07100bdda6ba63674e6a80abf9e6"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/WiFi/index.html","cae5cf5d848e10b838568223ae13f38c"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/WiFi探針/index.html","4973ed1a87f34b7eb0470a5c1f7b18e8"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/XMLHttpRequest/index.html","afcf850478b2c74f57fd7464ff8a3d40"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/apply/index.html","e874f00cad250627fd5bdd72a182f81b"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/bind/index.html","fb75243981f398448fa6bdf2ae1badb6"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/call/index.html","de8b707b66e3ce52831ffac88f2f58bc"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/const/index.html","3232b8cf621d3ceaf467e94a1f63a5e4"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/export/index.html","16210b504a5ba25e37549cf7fa061d2f"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/exports/index.html","af85084c9b65d82332925b747d73aad6"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/import/index.html","ad065a31257b13c142c8720f2277b59e"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/index.html","72a86c3375b2de7705b084a4c404f537"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/jQuery/index.html","c6d852797e78b860a186a817b9a1298f"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/let/index.html","50dfd21562ab2e870e0a8757d10d2abd"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/npm/index.html","bca6c199c3eccab71174b2b4e18efb98"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/packeage-json/index.html","87c63d5213fc74cc5b97140842e09b10"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/require/index.html","1c1b16e62dabe60679d9595af6a6e892"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/runtime/index.html","4d69383373aeb27230f857a155171326"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/seaJS/index.html","4f9d3cd38e642e569166b940e44c60e5"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/this/index.html","0e1e67677cd9e52115cc4eccbe0aa279"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/tsc/index.html","768866c18fee62400d279c27881c80bc"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/tsconfig-json/index.html","86fe837a8354a6d9831007e4ba7ee524"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/var/index.html","3b9fe41989045127ce093ad8defbf5d7"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/中頻/index.html","8d0a483a2bea1d54935b3008493556b3"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/交流電/index.html","e461d1244bce6d2b2996bb26598b3547"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/人流監控/index.html","9b0ac0bdd5735162432326ff3e79f9e5"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/人類/index.html","b2f6b25d791afc171f42a0fa5073b582"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/介質/index.html","7a7d13ca9209573ebf37707084029e30"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/傳輸層/index.html","efba772c0f0967502b7e51ad17f11135"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/光纖/index.html","2fbbc189570d43e8767131710d5cea49"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/全雙工/index.html","db07219e7641564c5d9671ab4e11ef27"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/前端歷史/index.html","ae7e5aa10fa00e0dfe3d1d75e712d87c"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/半雙工/index.html","000c8e731d8e08948f75d8031971d247"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/協定/index.html","56d6c089f615e548913f801fd74f89fc"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/厄斯特/index.html","c0bb9748270084e646c2184de3470a40"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/可見光/index.html","92bc65fe5dbacfb4fff31253abe53230"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/同步/index.html","56b5e427a2684b643a789c7683d1a4a1"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/同軸電纜/index.html","eeae9a171bd9c1de9210453bd5844a48"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/單元測試/index.html","7d1a4669dc65c067a60ec7f6729cf6e0"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/單工/index.html","fc67649a9c2723f5620e7e082b1d31a6"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/嚴格模式/index.html","825a25a1990a0be7a8883f948e933193"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/國際電信聯盟/index.html","858da2c20a98c09670edaedc3f2df21d"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/基頻/index.html","c6104e258b65b5f0e308b700474ad230"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/多工/index.html","7aa4988b3bb835ed3a9b557b1de0ac05"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/大腦/index.html","172bc026d242dd730f97ad7f26d1899d"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/定位輔助/index.html","d93a70f8137de52713c05d21b72147cb"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/實體層/index.html","bd685a781d1963500eca8f122b37d57f"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/封包交換/index.html","3d48de6ac7151ad8d92ee10319f4bab8"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/射頻/index.html","20d4cb78d82c6d4716c748ff56941b41"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/尼安德特人/index.html","32354383b66f329284509800e2feb3c0"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/差動式曼徹斯特編碼/index.html","6c26a3692fb4ca27e223ab9e98992777"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/差動式零補差編碼/index.html","c4716587a7fd7f658b0810dc29e389cb"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/廣告投射/index.html","2aa4d22e8614f0383917acfe766aa8e2"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/弱型別/index.html","792b6132aa5d08e6801e76385753f72d"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/強型別/index.html","7dc0fd45735a725aac27b477bfb7ec4d"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/應用層/index.html","efd937fcff6ab52bdf189167b20e80ff"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/抽象檔案-d-ts/index.html","5c2ed8dd0f27791697348b8d0e1b0003"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/數位/index.html","035c983d1dcffeb834926e5c6187bde3"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/時間/index.html","571b7be6c4492dc1f42fb4889f63673e"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/智人/index.html","ffcedbc80919f10f5a3965a90396b367"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/曼徹斯特編碼/index.html","d0ba22ac07bdaaf7a83ce49122a0811a"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/會議層/index.html","57c6222bbb3f45e8a30e7773eb07bf97"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/有線通訊/index.html","a9a46bb34d29e79818b3ad7de46fcd54"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/汙染變數/index.html","867602051b71fc36b26e8acdbf3f3c39"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/法拉第/index.html","278a6888ca7c498832618583595f4dc4"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/瀏覽器/index.html","a13685e7f64421b2a4394b2177879a6f"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/無線通訊/index.html","4d77347f8812bc8b26a4a8261e232eaf"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/特斯拉/index.html","424ec2d34561b34681421ea8538f9fd0"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/異步/index.html","56e89f1e6fa7acfc21fac8cd796ad694"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/磁場/index.html","41e6ae2bd151e319fb75a14db6af0593"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/第一次瀏覽器大戰/index.html","0cb794becc4431cd776263035c52c00b"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/第六代WiFi/index.html","7708e191e50da3ab365cde449e8a51f5"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/網路層/index.html","e025fb62b0e4de2be01d6006565f474f"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/線路交換/index.html","3dcc9d2ffac21fce00753478660d84bb"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/緩存/index.html","686e1bffa9c7090475a98ca0bbbb7194"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/聲波/index.html","63559a592fb5029cbba898e64b4ef098"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/能階/index.html","d231352663318c57779a07a62743ca08"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/腳本語言/index.html","ca9e12f1eb5ca25efd08cb5fde57a99c"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/行為監控/index.html","153cfca9f5e45106ffb711b43dc6d396"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/表現層/index.html","a0845e7d1a67deeee30ccead50b2a086"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/解釋型/index.html","006d97239e6e00bd45893645afdd1e70"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/詐騙資料/index.html","ef3a77e9c15224b7cad16cca79ec09bc"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/調變/index.html","da2750fa3c30bf5f00da19ff5b1d1fdf"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/資安保護/index.html","842cf0e9a03969af8844deb1b0467285"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/資料鏈結層/index.html","2b1cd0fc46f58099bfb04822cba2c6b3"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/跨域/index.html","eddc6aab666131fa5ffddad8710181b0"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/身分證/index.html","c22022712bc0abcd56168380be6c436c"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/通道訪問控制/index.html","5ebf1ced63b53e4453e57508a4920273"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/銫原子/index.html","97d7283e9f90020dd323895159995618"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/閉包/index.html","8ec769063db52c4ebdad29c0b0e4adf7"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/雙工/index.html","0c11eaeb8cd6cdbe57075ff604144207"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/雙絞銅線/index.html","f9c5a63dce816db2692610df54914cd6"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/雜訊/index.html","e7dffdc8a4b86eab31bb86f9137e9161"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/電場/index.html","bfa023533850bdeea8f033d937aa4d63"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/電磁波/index.html","79e6e37f4d6c56c7347a09daa9b65efc"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/電視/index.html","ea41c09f7334dc6509862f815072d705"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/靜態優化/index.html","ebc8fbe76c49c3a32fc43f66f0e9cbf5"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/頻譜/index.html","a53d1419dd7a86bf423ad2da3d37dd83"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/類比/index.html","900a53fe4e9bfbf0c90934d42dfe8b55"],["C:/Users/User/Desktop/Self/hexo-tech/public/tags/馬克士威/index.html","ed706cff022f5e77ba5ca2cd381f1cdf"]];
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







