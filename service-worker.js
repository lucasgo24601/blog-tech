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

var precacheConfig = [["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2020/02/14/部落格介紹/index.html","d69f1286c920600e8a295398645112a0"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/前端P.01 - 網頁三兄弟/index.html","8f302b24f89fcab10ba194f797329834"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/前端P.02 - ECMA組織/index.html","18c968391d74e21eb5ef6be91afe7bd5"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/前端P.03 - 分析解釋型、弱型別/index.html","3e6057ea3d3099cffdc6a14a8b28beb2"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/前端P.04 - JIT & V8/index.html","0d421d0c655117b2fe7354f9148977ba"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/前端P.05 - TypeScript/index.html","9e3e1a41868a669f3b3e592ed6856330"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/前端P.06 - WebAssembly/index.html","faf36a642bf3d4254bf97650bed035e6"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/前端P.07 - jQuery & AJAX歷史/index.html","87a22e4ccbf0c359c1557e3570a1b4ed"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/前端P.08 - AJAX & 跨域/index.html","605f4860643d0eee28b7fccca21ff4f8"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/前端P.09 - 同步和異步/index.html","953258e69f62e67f0d474b972389ea2a"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/前端P.10 - Scope/index.html","d40a2bf3227dba3da397c275344539a7"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/前端P.11 - 模組/index.html","88731b255cfb3147181a7caa541b163f"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/前端P.12 - NodeJS/index.html","d3a530e50f4a05e663f7e01356153a11"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/前端P.13 - WebPack/index.html","8128a00677412d8fb73acbfd4ec67f7e"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/前端P.14 - 單元測試Mocha/index.html","fa0d41813cf9b0671c70d69f97645bfd"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/讀書P.01 - 人類簡史/index.html","52482c641fdfde8f5461be18e851055b"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/通訊P.01 - 協定/index.html","e8480ae567867fbf7b2dc0258c469a7c"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/通訊P.02 - OSI七層模型/index.html","ae49640e4bd9ee2cf58feb019469a9d1"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/通訊P.03 - 實體層、介質/index.html","426cc8279f63bcf1dc06c234743a89f9"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/通訊P.04 - 實體層、傳輸技術/index.html","cd023f129fef166afc339c0bbdae60dd"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/2022/03/03/通訊P.05 - 資料鏈結層/index.html","7fe53cb4e0b155971ce19acff3f29832"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/about/index.html","e695b55cf07edbe4e498e6f6f5e4d519"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/archives/2020/02/index.html","1b23ef0d5cdb7d04533c497a31c6f30d"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/archives/2020/index.html","69d1ddda9f9877ebf443881efad002f7"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/archives/2022/03/index.html","abe45df0ac890a5354252c5c37cbe610"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/archives/2022/03/page/2/index.html","1f32ace998ac7956220476735c688871"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/archives/2022/index.html","ef009336e64947c098b37ae839eb5670"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/archives/2022/page/2/index.html","99df9cba8d453c682796d7ae91d791d5"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/archives/index.html","af3dbf6f1f2ee2a11ddfbc22bb6195ba"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/archives/page/2/index.html","08e056554e6ac30101bb3c34e795169a"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/archives/page/3/index.html","5c52830be64938e7852e308239f4babd"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/categories/index.html","d7cf540b1cbf367a5e9c02e4223469e6"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/categories/前端系列/index.html","5ed60372583a2ea4fbf0c50da2e5530b"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/categories/前端系列/page/2/index.html","ef4537c7d1a79fca40d97657eb43f635"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/categories/基本文件/index.html","a15e0d9d0272cdee1e76c20868a22787"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/categories/讀書心得系列/index.html","6e77cf7a3d2a71bb230dd462abda271f"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/categories/通訊協定系列/index.html","8ebf852a2877026dd2b3ad6f000bd54e"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/css/index.css","7d115e890f3fcc3bd156fa2858ced940"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/css/sakula/style.css","6cb2d5d6b51ac16969496c1c6ffe5207"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/index.html","ac73134068c2b163436bf003410d85f4"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/js/self.js","511962e6a9a94b6d05e905c23a79897a"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/page/2/index.html","96bb6cdedfcbf539cecb0ada29f4d3af"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/page/3/index.html","540d5f7ef000510b8f54b4a772eda4f7"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/16PSK/index.html","0af3ec789958c6707d8f5fb9a35c7cbd"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/1G/index.html","7697a5ea01d9c19e442d47d37ce12c6e"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/2-4G/index.html","f53b89707e3b5e3b23a974cd42061a5c"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/2G/index.html","27b460da4953b1dceee20b25ada7787a"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/3G/index.html","3b8cdb30a5323847796a5e57c7d5fe04"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/4G/index.html","f77faeb2c0c7c57cb9552a9c1508b3be"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/5G/index.html","1b57918c42d0e931e6c022f844710bdc"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/AJAX/index.html","12491db158eef019f5cb2f673de801fa"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/AM/index.html","71ec9ac375974496f509c873903ac80d"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/AMD/index.html","2052445c97fb769b7c7a5407167296f3"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/ARP/index.html","d6c016bf2e582bd6df89c13d5847ed1d"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/ARPA/index.html","4b93928a7ba21b6a33f7056413eb2dc1"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/ARP攻擊/index.html","03179741e52533d9630c695828bfba3b"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/ARP緩存表/index.html","0898cb828c60423d4dbc7e0567a12dbc"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/ASK/index.html","2064f534d553c069a066881e8f43eb5a"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/Async/index.html","97818ac3623608ea369d123897d5cbb0"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/Await/index.html","531e096bb06af96bcec92638bb57b657"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/BPSK/index.html","7087ffc5c9682f53d60e268100d6f152"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/Bable/index.html","cb8baae202e105a8725b1d18283bb05e"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/C/index.html","1d220bb741ddbc64fd30ac81c5beed1e"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/CCITT/index.html","8e744e5b435443cace55a1c0fadcdbe3"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/CDMA/index.html","e4751da10ef9caa92e19ac6ce32b43ab"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/CI-CD/index.html","ac0e8fcc11ae3e05af23b63595f9f5a0"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/CI/index.html","94fd0b982181f7f3a7f483de606e1d10"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/CMD/index.html","64f48d5687f24475edf688b033a8a364"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/CORS/index.html","2129c2cc76af40d36956e076d704cedf"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/CRC/index.html","bfb28df0b4d918e944ab4d0b62596abd"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/CSMA-CD/index.html","e9e38220eb5f66c646c79114c5fd4294"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/CSMA-CS/index.html","40fb0de69c0e4cf3a15ab5fa4042b937"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/CSS/index.html","1174b927d9d3c7deaf6b2709b37f7802"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/CallBack/index.html","ad0967b16863413d157bdb8ff98168bd"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/CodeStyle/index.html","e79c340c5b5fe9a5c755d53e5e09eba1"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/CommonJS/index.html","3b5c6426c7f1ab2b93ef51e8dd42aac5"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/DSAP/index.html","87079975569be00cef6f47c40c31dff3"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/ECMA/index.html","0addf95f64f56eab9f13c207c4b3baff"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/ECMAScript/index.html","d53c8daf50a61e82b0bea6e45f3e9dc0"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/ES5/index.html","e1070761c9d37c1aa009974bf18a8ff9"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/ES6/index.html","40f2ccdecec977e13a85540011137cda"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/FDMA/index.html","68e6f1c067b1f5634a29dca142c41d98"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/FM/index.html","f75fa71564b4e6907620110f7774ef18"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/FSK/index.html","a086ab56849b3ed44a557a701517939b"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/GC/index.html","dd6a68db209a85450f7e7dfe8cc90094"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/Google/index.html","1e7dc0089c4d4af0151998063cac96ac"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/Hoisting/index.html","bffd1a14df203965ef4158fb7de21d7f"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/Html/index.html","d37360a02323189c4f24555612d920c5"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/IE/index.html","ca6513abe80080fb6203077df00fd3c7"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/IEEE/index.html","17925ef899fb636e8acdafa24957ef0e"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/IEEE802-11/index.html","139a6b4a6cc704f01e9eefcc65515ca0"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/IEEE802/index.html","ec85184d5965f3f21c47495a784fbfc5"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/ISM/index.html","f12a1cee2478754220331d06ee524c8f"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/ISO-31-1/index.html","ab7a570c742a5a722e3095b88bf76292"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/ISO/index.html","5af9c7bcb452d0fae9b4ec23a4496681"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/ITU/index.html","99bf0aa48682b7d3a5b86347f0477f9d"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/JIT/index.html","de58c3d21abaf7d3024a8d6df5d39cfe"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/JSONP/index.html","c9286c1d6bed26ebb34280d91db2c3c7"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/JavaScript/index.html","bbaaa7179cc31bd9a4ec9562ef5a102c"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/LLC/index.html","8720a65c668a6178d3a13227004ab606"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/MAC/index.html","5ba4199cf248a86468c83c25d51e5fad"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/MACAddress/index.html","6ea570f0af3bdf01411fb49770d3f67d"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/Mocha/index.html","2714159c45e42db2328b2cd6d8c517dc"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/NVM/index.html","e39a1f87bbe8b2b0d3b232ade5a6bd94"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/Netscape/index.html","279f083b74f3ccd6bee63dc705e5d27b"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/NodeJS/index.html","2eb0487dec1a2888e1122868b48f3d70"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/OFDM/index.html","7b814d7f972abca5a7a8a2eb45681cc9"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/OSI/index.html","4d9a2f2351674a90e5e96c36b51e5ddc"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/PM/index.html","b3f5d101da7e00f5a49d180c1e490edc"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/PSK/index.html","cf62c093358405e2e882003005e30c44"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/Promise/index.html","cdabae5e1f5eb3ac52332b7dd40bd6d2"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/Proxy/index.html","af911b1b45de5405db202b9b7f021f32"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/QAM/index.html","c457885928e8f7743daa5c914c3e10c2"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/QPSK/index.html","b245409f6f8ec182c46036cc6fbd60af"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/RJ45/index.html","6beb516394e498c983f7070bdf3ed5b2"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/RS-232C編碼/index.html","b9316897ccbbccf955837ac1eb6ab916"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/RequireJS/index.html","8a24df05874fc8ab65b872fd106e4326"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/SSAP/index.html","7174fe9f5a686c45acada3fb177be052"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/STP/index.html","deaf8daf929d3d161258189149174b16"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/Scope/index.html","4aeda4386cab99dfaf06729f22cdcb98"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/ServerJS/index.html","562d6b68b5b911e603f198e14eb39a5d"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/TCP-IP協定/index.html","8c6723a8d11a51a9e222f8c0b3bb5a70"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/TDMA/index.html","baa226efd9ce58b5b150713b037fc0d9"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/TypeScript/index.html","b868e4b7c82f9faf263731e66bb1de05"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/UTP/index.html","2a4a4fbaa7fc6eed35397183f05e902f"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/Uglify/index.html","2dbabb18e1eb35e72741e3830e891ac8"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/V8/index.html","5f511498705ab89ab2a42f5c228706b4"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/VSCode/index.html","420466b2e4d12d7b16cecca81a5dda69"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/W3C/index.html","3dac180c7050eceee51571de03805a78"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/WebAssembly/index.html","e9085a3a1d10583be1fbfba6c87ca9db"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/WebPack/index.html","ac34440c4d8e53a76fcdbc894ac3335f"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/WebSocket/index.html","ebcd97e0edeb46bcd931e36f40eab37d"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/WiFi/index.html","3d1516aba1b8eb6cb3ffce0aa0f816e0"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/WiFi探針/index.html","dc560e829c8086ca7487f5b2e6c9e1c8"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/XMLHttpRequest/index.html","87828d0bd7158df014c5bc72b7a9b36d"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/apply/index.html","da6ef633cf79e381cdcd5ebc473db540"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/bind/index.html","76d726ce5b917bca1ac33de17095eaa2"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/call/index.html","74aba36278bf7469e652760e00c25a36"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/const/index.html","afd1dc8f5cf01327c118e86068b7983c"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/export/index.html","4c3dd14de09e345be393ff4dedcc48e3"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/exports/index.html","ab87ca7b98d37a4d3e187687b55aba6a"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/import/index.html","471a6faae2975b873642875f0d742f9e"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/index.html","f2f2046a1dbdf2781e503e7f6c1980cc"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/jQuery/index.html","63858dbd1908756d1b20e601f3afae2a"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/let/index.html","84ba3c056d951bb07bb82938004fa668"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/npm/index.html","86fdf0ec5da95d3f454c3ee535e22d2f"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/packeage-json/index.html","e9943b09a89150876847a93d6c7ff151"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/require/index.html","87e959e32c76cb496fd13918d2bee1e4"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/runtime/index.html","0a10b9a5f34b0302490d6357ff2980ca"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/seaJS/index.html","eca68c58a83319b1eedabfa73511967a"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/this/index.html","1c5e1783d661ab2b1660cf85676a5830"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/tsc/index.html","da41c1e4485a67fe901f52f428089c6a"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/tsconfig-json/index.html","d43cd668c07ef280b4e5f5d4bacdd684"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/var/index.html","5b9441c2fe7d6a5ca63616bc0b70a829"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/中頻/index.html","2b810b91e42f2566c3e38dd034c47919"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/交流電/index.html","d8388c2ae8c53c8eef154395f3cc2fd8"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/人流監控/index.html","f8737b0d76a83dc5efbf998e65a26bb1"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/人類/index.html","b2c3a0c1540c7df8afe26fa98b7ee5ae"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/介質/index.html","7ee7e7abf44637dd7f47081c962baf19"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/傳輸層/index.html","34c4de41c332983df5a6df2402ffeb5c"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/光纖/index.html","91c46d16933ff6531ad5ac7e88fc1385"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/全雙工/index.html","16571ea01ac14422c8864e163aeab0ee"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/前端歷史/index.html","e1ca7861685f3732570250340b06c524"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/半雙工/index.html","1e102b687ea5afa12b94637dfae9a0d4"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/協定/index.html","b4a2bc01f808e52feaec145799927d9b"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/厄斯特/index.html","caf1ebda7fefc9bfe3cd83a9c96f0e20"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/可見光/index.html","9ba2132405ca33681fcd7d2edaec0b76"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/同步/index.html","cd8874a672c6120ecafd6c2d71a67bf9"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/同軸電纜/index.html","5ff312805c202cba6348ad6094b2da57"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/單元測試/index.html","69a6b8bb755aea7b2e8121e6b5febe63"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/單工/index.html","da92258d4f3de70be344ae295da69416"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/嚴格模式/index.html","04a8f2d77873b9c96c4e4b784962081d"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/國際電信聯盟/index.html","20c2ac4a5c99c406a211622965839da1"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/基頻/index.html","7bec103b613979eac37d92e3fdce6a2c"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/多工/index.html","d539f495a03bc80763371159c1db4e38"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/大腦/index.html","f1febbd1b54cede36099d494e7c20aea"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/定位輔助/index.html","f755103e6834f21f912665315d7bf468"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/實體層/index.html","08cb69a472a8755430df1ad3597eba60"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/封包交換/index.html","5887ae7a5e7edbea81c538ca385c7c01"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/射頻/index.html","d12840246af4359fc465c957d6a31acb"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/尼安德特人/index.html","e0d5740e3ba22883b272f058d910d76c"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/差動式曼徹斯特編碼/index.html","1a09903fcd0d81b0f9a3c05f7ab69d5c"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/差動式零補差編碼/index.html","7d7dca384a54a76e87c79da661394524"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/廣告投射/index.html","0fbe75cc45f9455fd4163babd8de9237"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/弱型別/index.html","d882b159e5842ac92bd7fae06e15460d"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/強型別/index.html","4b8765d973f61fd1736adbeacec60ca9"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/應用層/index.html","a6f91fbd8a6eb64dff801a9ec4ff9e6c"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/抽象檔案-d-ts/index.html","366f18ec2247298f13ab6853dc9631b7"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/數位/index.html","f4044b561193cf76711d32ca27ed9d5f"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/時間/index.html","6ea4fd10a56687b9c887d2ad1f161e74"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/智人/index.html","5caedde6ae715c31153607c96e1adf6a"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/曼徹斯特編碼/index.html","a35c8c15c0a6517244cb677d979931a7"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/會議層/index.html","8094ef1351a643defa45573bbd32c5f9"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/有線通訊/index.html","3eb10f6aacc5c1caf024000eef3ccc47"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/汙染變數/index.html","45146c3b661eb57f2aca141644dcc19d"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/法拉第/index.html","d83d2dadb7473bac532d8ba5c2e5b50c"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/瀏覽器/index.html","ca39683ac5491012916bc9f3e65142a5"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/無線通訊/index.html","830ff83e3df89d7ac6a45f865c4ab273"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/特斯拉/index.html","e4c3a7011e9c7f03283c3a61ad6f580e"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/異步/index.html","710f8c60c0425fbd82fa6efbc1003e48"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/磁場/index.html","76e3632dc36095df232058e2e6f32026"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/第一次瀏覽器大戰/index.html","2a073cb197d0d9e82ab24b13225bd301"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/第六代WiFi/index.html","0dbf0c7364f7176a5b27b9df8a394cd5"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/網路層/index.html","03397bd8483af9e6fbdb25c8898bbc72"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/線路交換/index.html","89cba9483c4aad251743c439a2c77ede"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/緩存/index.html","11d9eb6723bd051d7a5e1f9a1d8a5149"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/聲波/index.html","045e28669ab55c8cadaf02d8963a09f2"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/能階/index.html","2fd6a908183f23fbd1652b1aa513ab54"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/腳本語言/index.html","f1f9d7c19b65b95abd9d5413e4536e0e"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/行為監控/index.html","43012f508763be5f12998d60162726e8"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/表現層/index.html","62ecb67f588cdfaf0ef7d3fce1f4e689"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/解釋型/index.html","4129f75037a3060d9c33fc67edb4d2a4"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/詐騙資料/index.html","760e22eb0edb1cd8386d378abd220b50"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/調變/index.html","9fa9a7160fc56b5826679b89450c2b82"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/資安保護/index.html","45348bccb2cc4d5b66e301e0a727b323"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/資料鏈結層/index.html","301bcacf0ea43fa57bf95e227d185949"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/跨域/index.html","39f24361838453b19c5a83e8dc9cedf4"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/身分證/index.html","1d06cd5113a5bd2973ca5c8e80a23f40"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/通道訪問控制/index.html","723fdabf144072857a891bb009bc2732"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/銫原子/index.html","894f5757ce7b96f606de6c9584820f0d"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/閉包/index.html","4cabd81af9ef40c83d9396741632c125"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/雙工/index.html","dc43c9386021ea6579dd1304a58bcb4c"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/雙絞銅線/index.html","b87f6546571beff48dd73b3da45c75f2"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/雜訊/index.html","7adbd329addb02e6c431d58fde2f36ec"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/電場/index.html","5d5e44df123440561cbcf64ea93713a8"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/電磁波/index.html","0b1845a921272552e928cab0f5e7c4c2"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/電視/index.html","7dc0442a362038119022a1993f062580"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/靜態優化/index.html","4c0f54c348812e112682dd6211e6c3fc"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/頻譜/index.html","5e9460ad27d6a5e208320552977f0f75"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/類比/index.html","eb0db5c729006ad78cfbeb7427ff3dbe"],["C:/Users/jlthu/Desktop/Code/hexo-tech/public/tags/馬克士威/index.html","cc94de830bea5d56ed3f9b5264d9e7f7"]];
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







