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

var precacheConfig = [["/blog-tech/2020/02/14/部落格介紹/index.html","468ac5c40ee3a966fc3e1a56f88e74e3"],["/blog-tech/2022/06/02/前端P.01 - 網頁三兄弟/index.html","3a626023808fa35af1468322bdb95667"],["/blog-tech/2022/06/02/前端P.02 - ECMA組織/index.html","03040752095d58819ec2c2c2df4176f6"],["/blog-tech/2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","918ad9dc4844d620104778a0512c8bd9"],["/blog-tech/2022/06/02/前端P.04 - JIT & V8/index.html","a93a8b707119a637da189c7907f15859"],["/blog-tech/2022/06/02/前端P.05 - TypeScript/index.html","c92629dbc1899fe596204d01192b7819"],["/blog-tech/2022/06/02/前端P.06 - WebAssembly/index.html","c1a9e9dc7b999a08f4ebbf72ebf8391c"],["/blog-tech/2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","f9996a599d5c3b40db4538d2870baf66"],["/blog-tech/2022/06/02/前端P.08 - AJAX & 跨域/index.html","92f2aefbc6de2348e4adc3baee776814"],["/blog-tech/2022/06/02/前端P.09 - 同步和異步/index.html","4b6e3cc3cf106741f5c9512432fbfcb7"],["/blog-tech/2022/06/02/前端P.10 - Scope/index.html","c2dfa6c2fa6fa2730d93fd40318d4cdc"],["/blog-tech/2022/06/02/前端P.11 - 模組/index.html","a85ac8bca9c5dd47cd5a2aa6b81d510c"],["/blog-tech/2022/06/02/前端P.12 - NodeJS/index.html","2e94fa29c4002d47c69023b0247f5089"],["/blog-tech/2022/06/02/前端P.13 - WebPack/index.html","79c8a1cdcef2754b098d6f794cabc78b"],["/blog-tech/2022/06/02/前端P.14 - 單元測試Mocha/index.html","c2e79c3112d9a85b83c4d6aa81fad16f"],["/blog-tech/2022/06/02/讀書P.01 - 人類簡史/index.html","3c927d49a9f65c53061db110ba1386ab"],["/blog-tech/2022/06/02/通訊P.01 - 協定/index.html","110a0fb107b2ad79671f890cc7a3dce2"],["/blog-tech/2022/06/02/通訊P.02 - OSI七層模型/index.html","e9fe8b18475d3624b0324e96623d63f3"],["/blog-tech/2022/06/02/通訊P.03 - 實體層、介質/index.html","e10718b23ebbda46c2d222025a6f658d"],["/blog-tech/2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","608581d69b6733e9c55998cfb1381d5e"],["/blog-tech/2022/06/02/通訊P.05 - 資料鏈結層/index.html","c17088ceb51886d1bfed26477d4ef91a"],["/blog-tech/about/index.html","bb9c34a55160cd2beed1c16058002030"],["/blog-tech/archives/2020/02/index.html","495ada25f9ccdfe64ac1b3dec2e6b662"],["/blog-tech/archives/2020/index.html","2601a00b4579605f487f606db17dd8e7"],["/blog-tech/archives/2022/06/index.html","99f3f4f78b093a99c582a34405687532"],["/blog-tech/archives/2022/06/page/2/index.html","d50c2222d59dbeb4a326cedce7d714d8"],["/blog-tech/archives/2022/index.html","a67bf385b1ebcc8054d2049c87f26719"],["/blog-tech/archives/2022/page/2/index.html","641548d3eaeae9a9a76919b6a9946690"],["/blog-tech/archives/index.html","baa05bd37eb08805b5cb07e89fd3b812"],["/blog-tech/archives/page/2/index.html","52c0395f5ab7b592454aa4ccc683dcc9"],["/blog-tech/archives/page/3/index.html","67b8a9533e59adb3260b6a056f11988f"],["/blog-tech/categories/index.html","9801cbaf54cd7c40e60b218e64e78f14"],["/blog-tech/categories/前端系列/index.html","90e3f1d803e8547bca4da7a8e20a8559"],["/blog-tech/categories/前端系列/page/2/index.html","79c18f84fb6a3a893cf0a3c890f0a0af"],["/blog-tech/categories/基本文件/index.html","c02eb1b953471b7b61110a59544c3fae"],["/blog-tech/categories/讀書心得系列/index.html","ec203a14796135fdb7fc165c64883dcb"],["/blog-tech/categories/通訊協定系列/index.html","77d9cc3426f084a0f88b3a6615a409af"],["/blog-tech/css/index.css","d596cc019db5ad77d44e30d4134e0a21"],["/blog-tech/css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["/blog-tech/css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/blog-tech/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog-tech/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog-tech/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog-tech/img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["/blog-tech/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog-tech/img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["/blog-tech/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog-tech/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog-tech/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog-tech/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog-tech/img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["/blog-tech/img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["/blog-tech/img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["/blog-tech/img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["/blog-tech/img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["/blog-tech/img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["/blog-tech/img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["/blog-tech/img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["/blog-tech/index.html","911284c7804bab51fdfa5b685c968b86"],["/blog-tech/js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["/blog-tech/js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["/blog-tech/js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["/blog-tech/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog-tech/js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["/blog-tech/page/2/index.html","8ed9019f7e7d786f66b3db0e932f64b9"],["/blog-tech/tags/16PSK/index.html","76e421a8126fac1d94fc092ffe0f47ef"],["/blog-tech/tags/1G/index.html","e149ba72b3bfd7f94f6ca548bd96dd29"],["/blog-tech/tags/2-4G/index.html","c69d3d9d0e46b708b9cc1a5e596625f0"],["/blog-tech/tags/2G/index.html","3821c82cd61d1d63e30469d42656d6ab"],["/blog-tech/tags/3G/index.html","feecdde85955d7f23bed200deb0c17f9"],["/blog-tech/tags/4G/index.html","7f8c8634c76be9a7bd0c8742cc4c60aa"],["/blog-tech/tags/5G/index.html","b85ba34bd43c4bd78d700c7fc865d0d3"],["/blog-tech/tags/AJAX/index.html","099a4b55cbd61f8ad9f5ef5aa90c7a74"],["/blog-tech/tags/AM/index.html","510419ca791bc9a1f91b6145156323cb"],["/blog-tech/tags/AMD/index.html","befc8a3dfc8940c2b08de79011bb7527"],["/blog-tech/tags/ARP/index.html","100c81dd83ce929271ce6d549a05df74"],["/blog-tech/tags/ARPA/index.html","19f2399b71f5b82c2aaf88700f03a2d6"],["/blog-tech/tags/ARP攻擊/index.html","864c3e6d73ad7a7cc2dc8a3d0e9a4c94"],["/blog-tech/tags/ARP緩存表/index.html","06825340fb7ee6d6feee04c2a5222846"],["/blog-tech/tags/ASK/index.html","c383a83fc664a56bea2f0c3e4adcb59f"],["/blog-tech/tags/Async/index.html","63471e2ff5cd55f6742295778487d99c"],["/blog-tech/tags/Await/index.html","00a0b6495279a7dca5c82ea54f74e8f4"],["/blog-tech/tags/BPSK/index.html","9f7ab4a4f47be015b3651e63c60ca724"],["/blog-tech/tags/Bable/index.html","f867277cc01d54a7abd8585c6b4e40ff"],["/blog-tech/tags/C/index.html","66c12a9aab42c1c69f66152927c217ce"],["/blog-tech/tags/CCITT/index.html","16bea6c660015b9c4fe77c391b55fc27"],["/blog-tech/tags/CDMA/index.html","d8a5647b736c3721867e663772cada80"],["/blog-tech/tags/CI-CD/index.html","8f95237bccc7584187021ce5cfa345be"],["/blog-tech/tags/CI/index.html","d8785d2cf66e6a665500c07fe2496107"],["/blog-tech/tags/CMD/index.html","7b34dffffe4041c830c7151e9ff5b57c"],["/blog-tech/tags/CORS/index.html","ac374005ed3d538c354fd20205e088b5"],["/blog-tech/tags/CRC/index.html","3a06ac96a336d0733be330f6786d4368"],["/blog-tech/tags/CSMA-CD/index.html","c4e65d01f9941084338b8cc0adf445ee"],["/blog-tech/tags/CSMA-CS/index.html","549e2ac74b7e7f7632ebae7028de8cc3"],["/blog-tech/tags/CSS/index.html","d4ab82ba2f5961b5bb3454b4d2644b0c"],["/blog-tech/tags/CallBack/index.html","a86d4b04fda26b2ff9ab2dd8d1517ac7"],["/blog-tech/tags/CodeStyle/index.html","029c7f47903f323a81d55f2fffe5a203"],["/blog-tech/tags/CommonJS/index.html","fe894db8fa5ed547bca79d952b67c7b8"],["/blog-tech/tags/DSAP/index.html","4b65b20fd0163cfde69f17d51f15294a"],["/blog-tech/tags/ECMA/index.html","4084a0fa58b600cef2b1ceddf1d5b903"],["/blog-tech/tags/ECMAScript/index.html","e714710f66e3b887df51b5a5e2daecbd"],["/blog-tech/tags/ES5/index.html","bda53e375b282f232d033e907ff7c7e1"],["/blog-tech/tags/ES6/index.html","869f439394346a989e57192a8e0de196"],["/blog-tech/tags/FDMA/index.html","93f2386e7ae14a3c926c1df16ace094e"],["/blog-tech/tags/FM/index.html","d42b3565cd76e61e8147261e66bf7fb6"],["/blog-tech/tags/FSK/index.html","bb4140c6b9b06f04691495bf143ddd85"],["/blog-tech/tags/GC/index.html","76cc7067134fb7facc1dfa9e0af36dd0"],["/blog-tech/tags/Google/index.html","26e2c0d3bbdfcfd3e6b7a488b9ccca32"],["/blog-tech/tags/Hoisting/index.html","66f7f655822a164e78a2bfcc5332b51b"],["/blog-tech/tags/Html/index.html","3590c92d5d466fd37a952954a0781f8b"],["/blog-tech/tags/IE/index.html","dd083ceaba634a65a28de2b7984cec86"],["/blog-tech/tags/IEEE/index.html","a6eea4c4b8b2fba8df893f709b847bad"],["/blog-tech/tags/IEEE802-11/index.html","bde2ff2f6f7318b3abfa49dbc8ea2fcb"],["/blog-tech/tags/IEEE802/index.html","5f981e448f2b255f2a51e6064fae381b"],["/blog-tech/tags/ISM/index.html","66cecb74a1283a91dae5c7d883f8172c"],["/blog-tech/tags/ISO-31-1/index.html","b59bf74fa2c801eb3f4ce93372a743fd"],["/blog-tech/tags/ISO/index.html","8b924513d7012e3daedabfb4448e796d"],["/blog-tech/tags/ITU/index.html","685fd1452b0215f95ff6c9b6c03d9dd9"],["/blog-tech/tags/JIT/index.html","74947ca14125e4cb15103745f0e3a2ee"],["/blog-tech/tags/JSONP/index.html","8cb59339e47e5aee2df66f0caa7fd0bf"],["/blog-tech/tags/JavaScript/index.html","87019ade6faae4f732c3339de3bb6d6c"],["/blog-tech/tags/LLC/index.html","8d3b45b1176b452387f627052d3fb7fa"],["/blog-tech/tags/MAC/index.html","f5f49de8eb3b229be558c84ce2f31d7b"],["/blog-tech/tags/MACAddress/index.html","26e37326edd664371ec43a5bbe183475"],["/blog-tech/tags/Mocha/index.html","78a5117c01f8eb72aab3234ba8dc97f4"],["/blog-tech/tags/NVM/index.html","841d72f5b169f0a9125f40ad8428199e"],["/blog-tech/tags/Netscape/index.html","ace0e9fbb9489a3445c594305b06b50a"],["/blog-tech/tags/NodeJS/index.html","60579bac3ba7e3fb97fb1bd7a330d3a2"],["/blog-tech/tags/OFDM/index.html","cdc3db5f2d430a72a699611fbf045249"],["/blog-tech/tags/OSI/index.html","08919d5ae01e4fd96d92a7a8a1f0e45d"],["/blog-tech/tags/PM/index.html","efc45238206f14a14d3d1409360fd213"],["/blog-tech/tags/PSK/index.html","c67e7e047739e3d3097d19aba31fdbb5"],["/blog-tech/tags/Promise/index.html","79642d8906f08d63edb32a21a91106d6"],["/blog-tech/tags/Proxy/index.html","94b67865c8e551bdd2230d7371143f56"],["/blog-tech/tags/QAM/index.html","fd41717c41c62f06aa4f627439c41ff6"],["/blog-tech/tags/QPSK/index.html","aa65dcf435bdda10b84386bd211008e9"],["/blog-tech/tags/RJ45/index.html","2be8800f574f0e007c86cb89abe0225d"],["/blog-tech/tags/RS-232C編碼/index.html","fbe24e1ecea4d2147d446eb3c6a0378d"],["/blog-tech/tags/RequireJS/index.html","8a370d0e71ba53cd640ceb283653f4fc"],["/blog-tech/tags/SSAP/index.html","9452544e31d3165c8e07fd0423b7d395"],["/blog-tech/tags/STP/index.html","52599672e843faadc58ba82d649811eb"],["/blog-tech/tags/Scope/index.html","60df1562e544cd55f9767f24f57fa94c"],["/blog-tech/tags/ServerJS/index.html","5a8349810ae0858d04b2c4f0ccfdc18a"],["/blog-tech/tags/TCP-IP協定/index.html","d36205070a4f9084e4967b69659634eb"],["/blog-tech/tags/TDMA/index.html","77b0ae1c2d531750e54d0c8f54c8df71"],["/blog-tech/tags/TypeScript/index.html","ffab3fcba4f3f5e51cb181c2470dd86d"],["/blog-tech/tags/UTP/index.html","816c02990df9f1a73e184fed2ab07093"],["/blog-tech/tags/Uglify/index.html","984ae505459d989e45195e04b7115dc6"],["/blog-tech/tags/V8/index.html","eb11beb20fea5ea5540b1d1fb0e984cd"],["/blog-tech/tags/VSCode/index.html","473d46585b66613a3179326dbf3747c9"],["/blog-tech/tags/W3C/index.html","5b632c6037316aa5b87f724a07fd6522"],["/blog-tech/tags/WebAssembly/index.html","44e199f108b10be2606fc0bce4faee6f"],["/blog-tech/tags/WebPack/index.html","23d757bbf5ce3927f2cbaca2f52429c5"],["/blog-tech/tags/WebSocket/index.html","5f6b11eba4403e91cd74327aa0c87c09"],["/blog-tech/tags/WiFi/index.html","df8043df176dada33233c5007ca9e6dd"],["/blog-tech/tags/WiFi探針/index.html","fe594e139a9a37e28568891f03877a92"],["/blog-tech/tags/XMLHttpRequest/index.html","84e39e1983b6699429e28dee49c625a6"],["/blog-tech/tags/apply/index.html","d2ac90d18b28917b545bc1c9ddfce6a0"],["/blog-tech/tags/bind/index.html","c4f1bd805fa1e42028a752fe213f0746"],["/blog-tech/tags/call/index.html","cad07cfddb23474bc0260ea2bcf8c4cb"],["/blog-tech/tags/const/index.html","62c674d874fab59c7aeae2757d5f549b"],["/blog-tech/tags/export/index.html","212d3706e29dafb2b482e0fb98afa4df"],["/blog-tech/tags/exports/index.html","f3cfdd85c63dd5f5f507105d2bd1ca76"],["/blog-tech/tags/import/index.html","e45845bc3f5f9da75c30bd5d5ed75a61"],["/blog-tech/tags/index.html","520fcfe0c93a21583a7e234331c3493b"],["/blog-tech/tags/jQuery/index.html","64d1196a4cc8b6e0b68fe3c0ef97e5c8"],["/blog-tech/tags/let/index.html","cee67d63e9fe792a0abf4ca6046b826a"],["/blog-tech/tags/npm/index.html","d6e64640cf946c6b2607c6448ca49aea"],["/blog-tech/tags/packeage-json/index.html","2ceedc151c4788edc8f1f9556bd0ba01"],["/blog-tech/tags/require/index.html","e464b5440468622820a7514f7ea233f5"],["/blog-tech/tags/runtime/index.html","5caf973729f8cb8d29342c06e64dc072"],["/blog-tech/tags/seaJS/index.html","e837d088594fa4dcbc7969ab801efee1"],["/blog-tech/tags/this/index.html","47a689d82ab99c00841c401f0560f8ce"],["/blog-tech/tags/tsc/index.html","e1123776e5e312e172035132e47e38b3"],["/blog-tech/tags/tsconfig-json/index.html","c7df3bb49eee7750aef19f3b50d6b3e3"],["/blog-tech/tags/var/index.html","0b11d190d7e60d14c8c0208c0ac5a6f4"],["/blog-tech/tags/中頻/index.html","e8199445962537d0731608cc0a29c7ea"],["/blog-tech/tags/交流電/index.html","2183feb580c57ad0571835811ff356eb"],["/blog-tech/tags/人流監控/index.html","a6539d6f37d9d3f44088236b2c2a6fb7"],["/blog-tech/tags/人類/index.html","6f3061f16a0e24aa60b9ffe0dfc87442"],["/blog-tech/tags/介質/index.html","3ad8b895006385c968140d701048d0a5"],["/blog-tech/tags/傳輸層/index.html","b106b0da72c8fbf285c8dc6e4048c837"],["/blog-tech/tags/光纖/index.html","918e3f62c73038060ee96e42798b560d"],["/blog-tech/tags/全雙工/index.html","f323c4f964ca9d0e4bc7efa3c5257dc1"],["/blog-tech/tags/前端歷史/index.html","0df5b316a6b916e6159ef3b2b26f6135"],["/blog-tech/tags/半雙工/index.html","edff8ca331483d2c1a4b5389dfda91f9"],["/blog-tech/tags/協定/index.html","85ca43b5c1bf1ae093ac32d79ad9f1ff"],["/blog-tech/tags/厄斯特/index.html","d25c3a091947469d0ff9dc8fe897edf0"],["/blog-tech/tags/可見光/index.html","3d843e94054c53f5a6bed72df56d3863"],["/blog-tech/tags/同步/index.html","304d5f16dcfb5dcac574d060f96409f1"],["/blog-tech/tags/同軸電纜/index.html","e0f395afe21aafde6bae85cb10c50d61"],["/blog-tech/tags/單元測試/index.html","238f4119ee1c51fc67c0269559d5cfe6"],["/blog-tech/tags/單工/index.html","1d30fd73024e9a079c13252a7f95528c"],["/blog-tech/tags/嚴格模式/index.html","981252d271c02c0d843262312ec51c87"],["/blog-tech/tags/國際電信聯盟/index.html","6ad912cf8fb9067c3477e7d0c1b93375"],["/blog-tech/tags/基頻/index.html","6493ee8e6cd6b20cfb57fd956db6c8f9"],["/blog-tech/tags/多工/index.html","3c1f35e956efb7362a0ef7505cca06ed"],["/blog-tech/tags/大腦/index.html","710ef39e3aa63e47c15c979953945be6"],["/blog-tech/tags/定位輔助/index.html","c076c773798d7a5d3e300b0b2e67ff2c"],["/blog-tech/tags/實體層/index.html","7cfae9809041bd956d01ea7318fd4689"],["/blog-tech/tags/封包交換/index.html","baf949dc8568d1214fc0d3e5f2938ffd"],["/blog-tech/tags/射頻/index.html","c815e472254cafd104ac34b3a73d2f37"],["/blog-tech/tags/尼安德特人/index.html","380a384f98e3ef29191f470a28be5006"],["/blog-tech/tags/差動式曼徹斯特編碼/index.html","6fdf876f7f0890309ce0800ad2303049"],["/blog-tech/tags/差動式零補差編碼/index.html","c75e675ebfdf73f9722ff1422b8b4ce7"],["/blog-tech/tags/廣告投射/index.html","40baa5b0aedcd2f96b0394b4de64026d"],["/blog-tech/tags/弱型別/index.html","a570316983f72e18e1eb580a9ecf6ec7"],["/blog-tech/tags/強型別/index.html","25344adf5e083356861375869d8cb241"],["/blog-tech/tags/應用層/index.html","b58b0ff2c03ca394e0dd45417871f709"],["/blog-tech/tags/抽象檔案-d-ts/index.html","d18f1546c3e275492420da86c43a72a0"],["/blog-tech/tags/數位/index.html","4d471ce683a2c52df59b17e3b9d7aa71"],["/blog-tech/tags/時間/index.html","00c253cb1062f4efd7e83a43695e66ec"],["/blog-tech/tags/智人/index.html","e7c20550b7a0c4a07aef82b2dde77826"],["/blog-tech/tags/曼徹斯特編碼/index.html","bd3642562e22c7d8c5f4e9dbaf451049"],["/blog-tech/tags/會議層/index.html","41e42d1cc7ab659fdbecb0e4355778b1"],["/blog-tech/tags/有線通訊/index.html","9c6dedc435a608b91ab7ac61386cf895"],["/blog-tech/tags/汙染變數/index.html","45e5b89b735015e2f919feb70de48859"],["/blog-tech/tags/法拉第/index.html","ddc993deb6a0700d0b56a6166951f491"],["/blog-tech/tags/瀏覽器/index.html","304a38c2db54cc7cab4340427e23f196"],["/blog-tech/tags/無線通訊/index.html","ebbb4abc7dd7bebde9dd62f96d44c339"],["/blog-tech/tags/特斯拉/index.html","9f0613a691154425d0c5845d615b1b4e"],["/blog-tech/tags/異步/index.html","da6b0f48dc5696093aa95231a06f53bd"],["/blog-tech/tags/磁場/index.html","5295b545418473c3daedb5be0c4d95c0"],["/blog-tech/tags/第一次瀏覽器大戰/index.html","d607c4a70d45a3f1be8390d085ad9513"],["/blog-tech/tags/第六代WiFi/index.html","592839736738d57e2a760bcb3f821fea"],["/blog-tech/tags/網路層/index.html","0461cc405feffe495181dbb8af58b4af"],["/blog-tech/tags/線路交換/index.html","f01dceba8e1a3ce1d99b6d071422319c"],["/blog-tech/tags/緩存/index.html","a35eac8b372214fb7ab82e4fd8ec4343"],["/blog-tech/tags/聲波/index.html","058bc6b26b3e97ad97c1aab7d84091e5"],["/blog-tech/tags/能階/index.html","f4643cdf0a5e5ded7a045fcda9f7dbae"],["/blog-tech/tags/腳本語言/index.html","ae09da2032e32480045fb946c748ba2a"],["/blog-tech/tags/行為監控/index.html","c73097c5d17f97b48d0e2d9d998ba9b3"],["/blog-tech/tags/表現層/index.html","106931dc7f65e269a5d41b2090699d8c"],["/blog-tech/tags/解釋型/index.html","644d57f562c9f3b35f3a6439aaf130d0"],["/blog-tech/tags/詐騙資料/index.html","269182b98cc2bee60a2bc03eabf3b8ec"],["/blog-tech/tags/調變/index.html","3150e57cd6f2cd01c84a3f50e44b70c4"],["/blog-tech/tags/資安保護/index.html","b9eacfbcbb18533c3ea89a64d60a970b"],["/blog-tech/tags/資料鏈結層/index.html","edd290e148ea6e089ccf31c90f93fff4"],["/blog-tech/tags/跨域/index.html","b7a9d0fba3cc783cf6d4a0073427f8a1"],["/blog-tech/tags/身分證/index.html","4537c73e52b7c598e0c56891a273006a"],["/blog-tech/tags/通道訪問控制/index.html","be0dac570ea1b002148d330fa9e9532c"],["/blog-tech/tags/銫原子/index.html","8a7344756a0f9e65229b1c07e089fe15"],["/blog-tech/tags/閉包/index.html","1ebe48e4739f25c4e81f45445c5eec9f"],["/blog-tech/tags/雙工/index.html","f074d3bf536ad754de0e00520bb3f993"],["/blog-tech/tags/雙絞銅線/index.html","26ec159f224537c48fc78c2978085de0"],["/blog-tech/tags/雜訊/index.html","4f06104e8726176d62b025292445c16c"],["/blog-tech/tags/電場/index.html","726fcf7bd6954e0593ee2d3f8ba66fa6"],["/blog-tech/tags/電磁波/index.html","34a2a5c6e096e3fa8a16e27927b7b78a"],["/blog-tech/tags/電視/index.html","0d4b1bcd05a0316b39bbe910f9b5f10d"],["/blog-tech/tags/靜態優化/index.html","92871112d13c5bdcf22163965e90131a"],["/blog-tech/tags/頻譜/index.html","f01e3696ed23bee4d372d41d2d4c8dd6"],["/blog-tech/tags/類比/index.html","4bcf818acb9b73bf1f9bc5124896a9c0"],["/blog-tech/tags/馬克士威/index.html","5ad84d696e0459d3e6b4d7076c8f6011"]];
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







