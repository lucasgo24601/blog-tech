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

var precacheConfig = [["/blog-tech/2020/01/11/部落格介紹/index.html","f566f4d6a1af2c29df67d87d544f15b0"],["/blog-tech/2020/02/11/前端P.01 - 網頁三兄弟/index.html","e1e748a284d79e220f10334f11613a2d"],["/blog-tech/2020/02/12/前端P.02 - ECMA組織/index.html","8be6b91eebb29f775060d7b24f436487"],["/blog-tech/2020/02/13/前端P.03 - 分析解釋型、弱型別/index.html","3cb83345e017c46568abd4a69a8a8fd4"],["/blog-tech/2020/02/14/前端P.04 - JIT & V8/index.html","94d79ec1a48066771499dc88ac8d39e5"],["/blog-tech/2020/02/15/前端P.05 - TypeScript/index.html","3f759e1fc959f79414fff34df7e827ca"],["/blog-tech/2020/02/16/前端P.06 - WebAssembly/index.html","1f59618a5ffcf25184ac0849fed1a1b8"],["/blog-tech/2020/02/17/前端P.07 - jQuery & AJAX歷史/index.html","4fa0c626716e5b4c4d92174321269d4c"],["/blog-tech/2020/02/18/前端P.08 - AJAX & 跨域/index.html","38499d6fbc16c7879f0ed1286cb8bbcb"],["/blog-tech/2020/02/19/前端P.09 - 同步和異步/index.html","587d92f717c6f8a2b9f2baf3b8a212a3"],["/blog-tech/2020/02/20/前端P.10 - Scope/index.html","b04f4b18b5817c430bd0180e63696db3"],["/blog-tech/2020/02/21/前端P.11 - 模組/index.html","a4f7dc870900c46cf2c486d0cbb5a5c0"],["/blog-tech/2020/02/22/前端P.12 - NodeJS/index.html","37d5dffef07f96024feaabba0fd4424a"],["/blog-tech/2020/02/23/前端P.13 - WebPack/index.html","213532f1b8b0cf3bfcc5916b72750e94"],["/blog-tech/2020/02/24/前端P.14 - 單元測試Mocha/index.html","4a792efe686946f5adf085703891a110"],["/blog-tech/2020/03/01/通訊P.01 - 協定/index.html","002e0b7ba2ef6d81e5259026749c9197"],["/blog-tech/2020/03/02/通訊P.02 - OSI七層模型/index.html","552ab20f84d279c750473846f5e8e7e7"],["/blog-tech/2020/03/03/通訊P.03 - 實體層、介質/index.html","a325e54eb851b546cae200ec9f139708"],["/blog-tech/2020/03/04/通訊P.04 - 實體層、傳輸技術/index.html","b9a7b2c54dc8417a06bd1559e372e7a4"],["/blog-tech/2020/03/05/通訊P.05 - 資料鏈結層/index.html","08ee6dadc5e7a8861688cb6e7237211a"],["/blog-tech/2020/03/06/讀書P.01 - 人類簡史/index.html","428ff33f7a6c4fc58054bc936f6ebb12"],["/blog-tech/2022/06/27/週報P.01 - 測試週報/index.html","f002029d57d8a500dfa5102bdfc1e43c"],["/blog-tech/about/index.html","064c8ae2e8d9eef8cc821802d98b8717"],["/blog-tech/archives/2020/01/index.html","9583bda3762e75fd6ae271d3dde796dd"],["/blog-tech/archives/2020/02/index.html","26debb0dff250656a18b817770c8b19c"],["/blog-tech/archives/2020/02/page/2/index.html","cba9374e10157fa9fb8539fec4e59723"],["/blog-tech/archives/2020/03/index.html","2ed4be446f7f1a53e890134f57a5a614"],["/blog-tech/archives/2020/index.html","9b308cb56ca187439229c033f2361014"],["/blog-tech/archives/2020/page/2/index.html","9fd7ff70f41c9cc4cb83b353fb81095a"],["/blog-tech/archives/2020/page/3/index.html","f68813cce274d5fcffbcc0eb95a7f06e"],["/blog-tech/archives/2022/06/index.html","a770d80e8786a870066105a5a514d314"],["/blog-tech/archives/2022/index.html","7ec8af472558c8a2e08a48f9385bce8e"],["/blog-tech/archives/index.html","95a42d6352b040cf0423b93df3b5028e"],["/blog-tech/archives/page/2/index.html","d8cd463cca10f62e6484b9e2aef4e2e9"],["/blog-tech/archives/page/3/index.html","ddc329883cee9df094fce314351d6099"],["/blog-tech/categories/index.html","5005d2bd3248b7ab7ad9e394fae94e27"],["/blog-tech/categories/前端系列/index.html","794ecc8a58b2162669ef0b7966bcd6fb"],["/blog-tech/categories/前端系列/page/2/index.html","03d7ac33ab67be2a03c068990b7e6984"],["/blog-tech/categories/基本文件/index.html","10c4edc7ebb9f9576c3f8b7236df1a70"],["/blog-tech/categories/讀書心得系列/index.html","06da4ee7e24c10058f3c703475b2ae0e"],["/blog-tech/categories/通訊協定系列/index.html","751c4c2c3b28aa6d3edad6753514ac83"],["/blog-tech/categories/週報系列/index.html","bf8d3e4d551a0054e1b1ed070b9e6c18"],["/blog-tech/css/index.css","616d6112f77ab4bfc6ec208056e9b104"],["/blog-tech/css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["/blog-tech/css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/blog-tech/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog-tech/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog-tech/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog-tech/img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["/blog-tech/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog-tech/img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["/blog-tech/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog-tech/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog-tech/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog-tech/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog-tech/img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["/blog-tech/img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["/blog-tech/img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["/blog-tech/img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["/blog-tech/img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["/blog-tech/img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["/blog-tech/img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["/blog-tech/img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["/blog-tech/index.html","f78997c6fe6712a6e590e5a078730eb1"],["/blog-tech/js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["/blog-tech/js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["/blog-tech/js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["/blog-tech/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog-tech/js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["/blog-tech/newsletter/index.html","5afdecd37ec67650d8ab5ce7dce291de"],["/blog-tech/page/2/index.html","bcc8e64da86ae33ef944dad0a1a7c318"],["/blog-tech/page/3/index.html","d666880b021d49d656e039ddec1ffcbe"],["/blog-tech/tags/16PSK/index.html","3b3b0b4f49f3410f1b0e4f8fc1cae68d"],["/blog-tech/tags/1G/index.html","7f1ceea34153ec2756b06fef7da49ed0"],["/blog-tech/tags/2-4G/index.html","70992a0f6e8f1d293bd7b3a1a02e4e9c"],["/blog-tech/tags/2G/index.html","e10b7cb2b29c40ce003adcf676f4a4d2"],["/blog-tech/tags/3G/index.html","de353e1114809f97775e6b68c9bea1b9"],["/blog-tech/tags/4G/index.html","96012f375425f8d70949bda9f5ca91bb"],["/blog-tech/tags/5G/index.html","3ca6ae29fb80aaf4353c68a455a8a175"],["/blog-tech/tags/AJAX/index.html","0cbdac53e3871ecb0c9a29293b21a894"],["/blog-tech/tags/AM/index.html","baf09418a6d1f99488026c0a0300ea65"],["/blog-tech/tags/AMD/index.html","ab1cceb63bcf1c44fdeac6a2ea5a25e0"],["/blog-tech/tags/ARP/index.html","6505b78ce3560a5770f13834ad81224d"],["/blog-tech/tags/ARPA/index.html","11af5262fc54ffba81e8f69849dfc608"],["/blog-tech/tags/ARP攻擊/index.html","03735705c26923d165688e5e02a1521f"],["/blog-tech/tags/ARP緩存表/index.html","b362021141c9b5fae06c1b0710f8f369"],["/blog-tech/tags/ASK/index.html","cd4da42224407b5a492e9534423c2dd9"],["/blog-tech/tags/Async/index.html","d6b0cf44362e624bb5c2826b3ca33b99"],["/blog-tech/tags/Await/index.html","446db133c5e2fbe2c6ce94d6749b81bb"],["/blog-tech/tags/BPSK/index.html","3c52f58c7673bd0407538df4332aba9d"],["/blog-tech/tags/Bable/index.html","fd57885e64a718b7e05aafd76aa6cc8e"],["/blog-tech/tags/C/index.html","37d607c00fa43a0b4ce3876c0308689a"],["/blog-tech/tags/CCITT/index.html","a7c2e72f85816665a2e3524ac2148b1d"],["/blog-tech/tags/CDMA/index.html","cbaa97a5729cc02ff6229297842d4e4e"],["/blog-tech/tags/CI-CD/index.html","059a23d19e53aa5af9efc6089232668e"],["/blog-tech/tags/CI/index.html","472d4c6c570c5f8ed6900488da555de4"],["/blog-tech/tags/CMD/index.html","dfb603d5d4bbb020ea527569f80b7cfb"],["/blog-tech/tags/CORS/index.html","a0bfcd60041e750e2080acdd826d4162"],["/blog-tech/tags/CRC/index.html","9101af13df4f2232c9978b1ea60eafa3"],["/blog-tech/tags/CSMA-CD/index.html","ad6cee91d4378592af711d138d990da6"],["/blog-tech/tags/CSMA-CS/index.html","7d5188408aabc39717655fa820a6f01d"],["/blog-tech/tags/CSS/index.html","01b0758314fd2377a7a6865349797bab"],["/blog-tech/tags/CallBack/index.html","61dff5bd8bcbeb77112b396ec19c0572"],["/blog-tech/tags/CodeStyle/index.html","ee10d583364edae3e1e840acdfb64d34"],["/blog-tech/tags/CommonJS/index.html","500024bc31c65c6250661bd8fa620322"],["/blog-tech/tags/DSAP/index.html","d8b108b550637c973ef6c5321e48a16a"],["/blog-tech/tags/ECMA/index.html","3a0c1206d37b07028ed0945e20fa1087"],["/blog-tech/tags/ECMAScript/index.html","5d136e770128fa7a2dd5ba78c6e949f1"],["/blog-tech/tags/ES5/index.html","af9e48edbb2e201713e6bbf8da816ac8"],["/blog-tech/tags/ES6/index.html","c0c14b12dafc0475c31116c254e0f970"],["/blog-tech/tags/FDMA/index.html","388d1c7aa7a5f051b5bb4adfc753b1a7"],["/blog-tech/tags/FM/index.html","f28ba732d29c318f7e68a0d9d5325f62"],["/blog-tech/tags/FSK/index.html","8032f02464bca45e42bf9cd1d3a0a6c9"],["/blog-tech/tags/GC/index.html","39a26fa8a9dee00d2da61463b4341a10"],["/blog-tech/tags/Google/index.html","05f1c393963caaa3371f07a51d83e9cb"],["/blog-tech/tags/HTML/index.html","8871c3776fc7cbfb877649e39ddfbf5d"],["/blog-tech/tags/Hoisting/index.html","fb3c7ff1f27bcbab14af4ca22762ae02"],["/blog-tech/tags/IE/index.html","219f2b9fc56b6eeb2cec6b8448aa1bb3"],["/blog-tech/tags/IEEE/index.html","83bbad92862e065092305a2fddbaab7e"],["/blog-tech/tags/IEEE802-11/index.html","c298fe1aecb06061216997e93d1c108d"],["/blog-tech/tags/IEEE802/index.html","efc300f1410f538c27bb6ff312838be5"],["/blog-tech/tags/ISM/index.html","acc3ecf5a9a1a6e1b1fea418e64b9741"],["/blog-tech/tags/ISO-31-1/index.html","a4c438f495b389d468cb2d0f00ff1609"],["/blog-tech/tags/ISO/index.html","3212e384b2c7117415111ec5c57a5696"],["/blog-tech/tags/ITU/index.html","364e783d5153279ec6e7b31607fc8ccd"],["/blog-tech/tags/JIT/index.html","5d5d0c0079b947b9af6ab28dc40ded82"],["/blog-tech/tags/JSONP/index.html","3490541a825fd01320d7b8414f8c4265"],["/blog-tech/tags/JavaScript/index.html","b9a79cacf3d5cbfe94ad63d4037bc293"],["/blog-tech/tags/LLC/index.html","4b73cd6b7fd409249011e254e32a6044"],["/blog-tech/tags/MAC/index.html","fd14b6348a5f19fdd523e150d4c53b17"],["/blog-tech/tags/MACAddress/index.html","dfaa5cf6300852b6561cb39b59efc587"],["/blog-tech/tags/Mocha/index.html","4509e786a35b76c64aef07de96f8fd75"],["/blog-tech/tags/NVM/index.html","0f436626a43e62e1804dd16771e1cbe1"],["/blog-tech/tags/Netscape/index.html","00eb347e816201933095a870bb03c02c"],["/blog-tech/tags/NodeJS/index.html","87d9d3c72227ac4235c20e49c110c180"],["/blog-tech/tags/OFDM/index.html","33f10f1ac1f488f9ed69ce7618f2dfc5"],["/blog-tech/tags/OSI/index.html","5814507982b3664487b6d3cd3545ba1d"],["/blog-tech/tags/PM/index.html","34a8f9d9cb0b153bb400e83a096aa370"],["/blog-tech/tags/PSK/index.html","489edd0fc9c0158aa5ef1bf7e539d763"],["/blog-tech/tags/Promise/index.html","c3127611bc4bacc70a75b8d1a54b050f"],["/blog-tech/tags/Proxy/index.html","4fe0eef9fe169d880f848e124408fb4e"],["/blog-tech/tags/QAM/index.html","145ee3284e78b181cb49edebff9076ac"],["/blog-tech/tags/QPSK/index.html","5ae8c29c83493682845d6ce764f84b03"],["/blog-tech/tags/RJ45/index.html","5a5427fc9bd76cfc396d3aad57da2236"],["/blog-tech/tags/RS-232C編碼/index.html","9e8c8141485f4a98a78072d5a73dee51"],["/blog-tech/tags/RequireJS/index.html","2a73133260a8f06fcb2ae49249b6f2b7"],["/blog-tech/tags/SSAP/index.html","fe56110c149ae96fe5e941220f468e5c"],["/blog-tech/tags/STP/index.html","d001056ac24aadff434aec84666c2555"],["/blog-tech/tags/Scope/index.html","67729073ca0a996a5ee2768115b997b9"],["/blog-tech/tags/ServerJS/index.html","cce697e9a618781347d44e13b197b317"],["/blog-tech/tags/TCP-IP協定/index.html","81f229f2d3e11cdf3d1acc00262bf7d3"],["/blog-tech/tags/TDMA/index.html","f8e49d10531238031290d1979081186b"],["/blog-tech/tags/TypeScript/index.html","73a538e371a1bd66624ef0bcb3764455"],["/blog-tech/tags/UTP/index.html","57234c5338b782daddbc4caf6ec43604"],["/blog-tech/tags/Uglify/index.html","7023fd2faffb0d38ae195ac1011b6b68"],["/blog-tech/tags/V8/index.html","e8fb20ee17a140f5037e86380f141c3f"],["/blog-tech/tags/VSCode/index.html","b83a6daba965bd8b95d7f552e66f7c1a"],["/blog-tech/tags/W3C/index.html","b781f719105d9ff01d74e5da0ba4e935"],["/blog-tech/tags/WebAssembly/index.html","1d708adaa9da27806506955af17f8b22"],["/blog-tech/tags/WebPack/index.html","5283cc699fd972de59d0d9d522cccf0c"],["/blog-tech/tags/WebSocket/index.html","2857e29d522b84253c09df1a38da5a7d"],["/blog-tech/tags/WiFi/index.html","0cd01f5e4c14d80edd3ff8b4e1518d05"],["/blog-tech/tags/WiFi探針/index.html","e3cc08d0c0ba78345cf71716fde616a2"],["/blog-tech/tags/XMLHttpRequest/index.html","c1563df6e8ed14f3cab9253e18656a63"],["/blog-tech/tags/apply/index.html","8e65d482fbf6e13ebdc4919ac8cdc4d3"],["/blog-tech/tags/bind/index.html","acabfae28721c1403f398d305243d2b4"],["/blog-tech/tags/call/index.html","182160786223f882afa2e0e9f408ac5b"],["/blog-tech/tags/const/index.html","f77f6fe83a60f40455d11912561c123c"],["/blog-tech/tags/export/index.html","80a2e63fc677e308a7b6a173ef788f5a"],["/blog-tech/tags/exports/index.html","91070f079cff3d414c4fba267be8f7d5"],["/blog-tech/tags/import/index.html","b9884de31cb955fbe3abbe2758407c43"],["/blog-tech/tags/index.html","ec8f9e12c51b90748601a4dd99811f52"],["/blog-tech/tags/jQuery/index.html","86ac9fdbf2d4d43b5545abfa01859706"],["/blog-tech/tags/let/index.html","0c62628a9d8d8a9ce6e1671b4cd8b01b"],["/blog-tech/tags/npm/index.html","2046f74f25c7b34d6774b73a931141b4"],["/blog-tech/tags/packeage-json/index.html","8ba6e15960a323ca4d52d89aedf9cfbe"],["/blog-tech/tags/require/index.html","182870979729f6182bea01810fc517c2"],["/blog-tech/tags/runtime/index.html","5d9ca62206d144d4f3485552db3ac587"],["/blog-tech/tags/seaJS/index.html","6501cd9dae3584abb9979a75ec75d3ba"],["/blog-tech/tags/this/index.html","cec071bcda99ee78b5b4cf67ac1f4fae"],["/blog-tech/tags/tsc/index.html","7290938dd91f0c2f092933062e377415"],["/blog-tech/tags/tsconfig-json/index.html","7538b41fd7a5e71736c34d6902ad343d"],["/blog-tech/tags/var/index.html","ad5380624de87ae672242ed888fb883e"],["/blog-tech/tags/中頻/index.html","132d137718f2ba0a27f9f7f2f347c525"],["/blog-tech/tags/交流電/index.html","be9cd0cbbf8c9c418167224ede3ddb75"],["/blog-tech/tags/人流監控/index.html","1518634ef2cfe8a0ca0d1de70eb1a758"],["/blog-tech/tags/人類/index.html","f94d8bf366057b10d8056427ed9d108e"],["/blog-tech/tags/介質/index.html","ac3a14d9df65b27e128be37229405276"],["/blog-tech/tags/傳輸層/index.html","63d49d3e70e6233183fc6a542a2afb92"],["/blog-tech/tags/光纖/index.html","ec57d3b185ea53ccf26367ec0ccca8e1"],["/blog-tech/tags/全雙工/index.html","8dff9dec2a97d7caadc568ce3c756f4d"],["/blog-tech/tags/前端歷史/index.html","dafdf3c7634c05b8be335b8fcfa7c59e"],["/blog-tech/tags/半雙工/index.html","0645d3ddf7f41575bc1389e9909ad75a"],["/blog-tech/tags/協定/index.html","e7e7ae669763322af15df1fc40279d2a"],["/blog-tech/tags/厄斯特/index.html","d027c6e70d3a231ab6279576c8be85bb"],["/blog-tech/tags/可見光/index.html","df2775765310f4ac1a13865d4aa79455"],["/blog-tech/tags/同步/index.html","a0051718cbc5cb4f6f966236293d1a58"],["/blog-tech/tags/同軸電纜/index.html","bc1147344989f99a324f24ff2a1a2209"],["/blog-tech/tags/單元測試/index.html","03b865d0e6f4c3017ad7e269f7fdf3c3"],["/blog-tech/tags/單工/index.html","5f2ad4b9f265c9e840b9406eb9795f25"],["/blog-tech/tags/嚴格模式/index.html","7bfa6b3b6e5e79dbd770363ce81f5815"],["/blog-tech/tags/國際電信聯盟/index.html","00a288d06bb50637bc638619b57e0999"],["/blog-tech/tags/基頻/index.html","5bc409d3b564a46097047059c097d93c"],["/blog-tech/tags/多工/index.html","45ab34d9c23463802eb7b6f737fe0e2e"],["/blog-tech/tags/大腦/index.html","37c272bd3884bd37537d3670831c01c5"],["/blog-tech/tags/定位輔助/index.html","22055529397d73cfcd001a8555ec0824"],["/blog-tech/tags/實體層/index.html","3f239007cf211e3e2e23abb7691b91d1"],["/blog-tech/tags/封包交換/index.html","81a9419ed661675b707a92c325565e78"],["/blog-tech/tags/射頻/index.html","150b017737fdaea6ae70167f00b8b465"],["/blog-tech/tags/尼安德特人/index.html","c92881a1519942350e83ff5584d17d8a"],["/blog-tech/tags/差動式曼徹斯特編碼/index.html","26cf3c78f5d60d7e4e9c50a24032987b"],["/blog-tech/tags/差動式零補差編碼/index.html","02726827ad640fe324bd5c36fde1f850"],["/blog-tech/tags/廣告投射/index.html","eae92aee8a03b0c8dd895cd175785d32"],["/blog-tech/tags/弱型別/index.html","d7a00c8e81c7bdb59df69f15d4de5fc7"],["/blog-tech/tags/強型別/index.html","3f8ad2add2b66207146736acba10e246"],["/blog-tech/tags/應用層/index.html","d120287095b397a1f3b0e50cdb0324a6"],["/blog-tech/tags/抽象檔案-d-ts/index.html","72e444ca22f64ebd5518f108ad5fd452"],["/blog-tech/tags/數位/index.html","04f91546a82f66bfd54e42150aa37086"],["/blog-tech/tags/時間/index.html","bdbd1db40588d649513f868c682623f4"],["/blog-tech/tags/智人/index.html","7ed7d4ff2b288ecf6ed532f3667424d2"],["/blog-tech/tags/曼徹斯特編碼/index.html","8f86c74aacfdcbe3ab334e16d1ba5277"],["/blog-tech/tags/會議層/index.html","01e1b53bdd513e9835cead651f314c10"],["/blog-tech/tags/有線通訊/index.html","8358a05adda63a98939a0fb544ebe545"],["/blog-tech/tags/汙染變數/index.html","d6cce81849d0b38c938a7bfad65534c1"],["/blog-tech/tags/法拉第/index.html","fe5cc6bb7e3fdf2e50c8c127a7fa5827"],["/blog-tech/tags/瀏覽器/index.html","e9e7683e48ef44add72c947f4c0a10fb"],["/blog-tech/tags/無線通訊/index.html","4e9e0cfa77048da49ec3940645e80aa8"],["/blog-tech/tags/特斯拉/index.html","d96b815055875bf53d4936dfec432ef5"],["/blog-tech/tags/異步/index.html","334a0838705cdf14ede44860e6a2912d"],["/blog-tech/tags/磁場/index.html","492bf8a14d420cff360017591d4bea6a"],["/blog-tech/tags/第一次瀏覽器大戰/index.html","caf9ac3d917c0c2a12a854249a1888d6"],["/blog-tech/tags/第六代WiFi/index.html","a85b4b147c50f43848d2adb9d8c4ddf3"],["/blog-tech/tags/網路層/index.html","42b86ad31f98acc042a3086fe5032e9e"],["/blog-tech/tags/線路交換/index.html","231e5e4456c68b3ab3fee8771415ff28"],["/blog-tech/tags/緩存/index.html","0d0fbc23687083bf627a32082fcc1bd0"],["/blog-tech/tags/聲波/index.html","20e85b358d2137e4a6fa368cfe2dbfd5"],["/blog-tech/tags/能階/index.html","75e3ecc55ce36a542e29cc99adfce477"],["/blog-tech/tags/腳本語言/index.html","3e90d48724f5ccac726ccf22ad63071d"],["/blog-tech/tags/行為監控/index.html","a86dba4424297b5c69a7916743edf519"],["/blog-tech/tags/表現層/index.html","da80f35e9749488a6e734bbd38cb5709"],["/blog-tech/tags/解釋型/index.html","a2dba24cb7659213b45cf0fb9bd33f21"],["/blog-tech/tags/詐騙資料/index.html","7b00923d8ef089d16dc8b9ffeb2da2dd"],["/blog-tech/tags/調變/index.html","fa48a6d5959db1d992a4b8faf6bd998f"],["/blog-tech/tags/資安保護/index.html","8b5024670b1905e6f3dffc665326582b"],["/blog-tech/tags/資料鏈結層/index.html","2adf8d45196f18a76be46544cf81457e"],["/blog-tech/tags/跨域/index.html","00120cfff48a0f8383ccb5d8cb0619e4"],["/blog-tech/tags/身分證/index.html","f8c873fdb7d3f702b5aca1d7c4192d5b"],["/blog-tech/tags/通道訪問控制/index.html","2430b0c10eea6cdd1cadac8f40fb05dd"],["/blog-tech/tags/週報歷史/index.html","718e1a6c2b2385ca1d239391ca088ba3"],["/blog-tech/tags/銫原子/index.html","94ec6c0eed9b3225ab8d2f83584f2061"],["/blog-tech/tags/閉包/index.html","89cfd5d7b30888e471192a9c8c3e9575"],["/blog-tech/tags/雙工/index.html","be67e3afece054d327cca14792dccde1"],["/blog-tech/tags/雙絞銅線/index.html","dbac6bb9c61846e5469c536c4778e38c"],["/blog-tech/tags/雜訊/index.html","f262333094f6d484029fd1973aac1240"],["/blog-tech/tags/電場/index.html","22df50bc96da55836eb728f93511d9dd"],["/blog-tech/tags/電磁波/index.html","5b17c43f0bfbdb09a00b2939240d8722"],["/blog-tech/tags/電視/index.html","524bba88b99cf8fd3625664e3875e26f"],["/blog-tech/tags/靜態優化/index.html","e8eb7ee85e5119ad65a9a3102a5dcc34"],["/blog-tech/tags/頻譜/index.html","0ec810bc710d3a4dd81529c59f75ccdd"],["/blog-tech/tags/類比/index.html","9223fba8a7657d24191371c8ff9e63c5"],["/blog-tech/tags/馬克士威/index.html","7070f5d255b0031721f59994a4c8b148"]];
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







