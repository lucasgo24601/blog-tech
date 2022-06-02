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

var precacheConfig = [["2020/02/14/部落格介紹/index.html","d93d0141ef7671f5175ae096ff03c68b"],["2022/06/02/前端P.01 - 網頁三兄弟/index.html","3dfa808aea7d310364f28d9f8a218b47"],["2022/06/02/前端P.02 - ECMA組織/index.html","3a9235b26f4fdf1e9f8ca4a0d49de92c"],["2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","f60de959012a41ac6f4e275519a40718"],["2022/06/02/前端P.04 - JIT & V8/index.html","2dd663974994bafdf677367e67a7f533"],["2022/06/02/前端P.05 - TypeScript/index.html","68c3bbf2bf0f6ceed68f0243218cc77e"],["2022/06/02/前端P.06 - WebAssembly/index.html","891eac5f6f726815310dc0797cc60579"],["2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","41b03092b7e9935d31158df1e0e127ab"],["2022/06/02/前端P.08 - AJAX & 跨域/index.html","784d9518b682634ed0ab31c7d1fe467a"],["2022/06/02/前端P.09 - 同步和異步/index.html","c511476ce264026066bc7cdf76b3be62"],["2022/06/02/前端P.10 - Scope/index.html","fad7e6f510a274fb2766853395f37219"],["2022/06/02/前端P.11 - 模組/index.html","80cbc1ee56630fcb5778112f13e0b685"],["2022/06/02/前端P.12 - NodeJS/index.html","783e66d5294ca41a154aa9d89f202ea0"],["2022/06/02/前端P.13 - WebPack/index.html","907f9e6d8be4ebb1c6d157a52e7c3fd2"],["2022/06/02/前端P.14 - 單元測試Mocha/index.html","d20daf9168399692e512f094598f5ae5"],["2022/06/02/讀書P.01 - 人類簡史/index.html","c293f1772a806a1ff5df3a086e000c5c"],["2022/06/02/通訊P.01 - 協定/index.html","be49519e137a3cbe13e8662ace24b775"],["2022/06/02/通訊P.02 - OSI七層模型/index.html","c4df53e9e46c9f3d53ff01a327734929"],["2022/06/02/通訊P.03 - 實體層、介質/index.html","d77ca001f18edf29a9bcc50ce7130b2c"],["2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","e7ad30d90becdbb4c880a2b8dac12a83"],["2022/06/02/通訊P.05 - 資料鏈結層/index.html","e1b58b796b5b47f9ff10035b9febd460"],["about/index.html","51e72fcb679c2eeb09d27502a4abd68b"],["archives/2020/02/index.html","0d560c9944c55a98f9bba0cb4b58d801"],["archives/2020/index.html","1cba5a399f443ce797092ce4d950cc68"],["archives/2022/06/index.html","e39c9e4f90d670b621ee57bf387e8576"],["archives/2022/06/page/2/index.html","952af92d65933a20f535b2972476adf0"],["archives/2022/index.html","db2e594421872b7a47e23122ad4cd9bb"],["archives/2022/page/2/index.html","07034b32222e0e71f26cbf07e744f515"],["archives/index.html","3c1f69ea4a5be01fc024563d0061a9d4"],["archives/page/2/index.html","0cc2d10c81ff48c32414dbae0c6e9b93"],["archives/page/3/index.html","01fb8a521a0c799aff64afe88946b81a"],["categories/index.html","c5df113ad72aade2969c202eb8599c25"],["categories/前端系列/index.html","e1b665b6b1fdfb76caa43817cc15cc80"],["categories/前端系列/page/2/index.html","62bda801a921aa74484277bb4f0e75eb"],["categories/基本文件/index.html","bf2757de64e8e5b96c49adc934546ef7"],["categories/讀書心得系列/index.html","d14985703981febf858329a726dfea1f"],["categories/通訊協定系列/index.html","a02405f4a406cd7a12b6f14948058c18"],["css/index.css","ffa6854e04063a25e3bb93b4de2eb146"],["css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["index.html","c35924c07f5bead4af10dcc586ee9501"],["js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["page/2/index.html","aa13ea8c346898e06ef00e3f5602f72a"],["page/3/index.html","73162180c836933cb48d9d3ce3c14c97"],["tags/16PSK/index.html","76ab713b2883d799c2e1835bea1d511a"],["tags/1G/index.html","6c42b50aaa8e3271833598351666a9b8"],["tags/2-4G/index.html","f427e574404b645b0aecdd804202b1ed"],["tags/2G/index.html","f34180d89f4d0a780f083468d602eef3"],["tags/3G/index.html","878c1ae0982d169a7786d7673d5cee70"],["tags/4G/index.html","d3f305a8f7dc8912f4f1abdd018e5dca"],["tags/5G/index.html","e2756af52355922720b2a1202364be3c"],["tags/AJAX/index.html","1e8dd74d31659003cc41bed7f575688a"],["tags/AM/index.html","edb5e03ee2f0456f1569e2b13c0c820a"],["tags/AMD/index.html","dad6d86206aa567f0eb915aa18b418ea"],["tags/ARP/index.html","ecf2b5ec3d9027c2120dd651f87e6b57"],["tags/ARPA/index.html","88d8d989324c6be8932d4a8095d0820e"],["tags/ARP攻擊/index.html","d4b9f46a5f1a057efac31970633dc0f5"],["tags/ARP緩存表/index.html","00fa4215cdc858a7bd7cb22afd763c62"],["tags/ASK/index.html","530364e02d869d3a8dc3ed80d2326efb"],["tags/Async/index.html","ae2ab887ad0bc6ba2c00d918fbf08ce3"],["tags/Await/index.html","e33e819e1645ba60670c96b57bdd4314"],["tags/BPSK/index.html","9a641184dfd7ca427833e687b202a6e1"],["tags/Bable/index.html","d64625fd782f653b2e5818cf21ae509a"],["tags/C/index.html","cf6baa6b89a31956344dce5df1eb5246"],["tags/CCITT/index.html","354df22eb37a42adc17050ff33b9f04b"],["tags/CDMA/index.html","861fc5ad4ee6ee1653245e8bcafac64a"],["tags/CI-CD/index.html","2257e4a988f231804896c9eb96694d7a"],["tags/CI/index.html","68021ed6db0008699407f692c308a624"],["tags/CMD/index.html","7867e9bcddfffeafc18716dac50bd5d0"],["tags/CORS/index.html","07cda095668cda827371be17fd55c0fb"],["tags/CRC/index.html","0086587161d81a78a0ba6d5d16c72f9b"],["tags/CSMA-CD/index.html","ab5fb7087c7dd4dff16e6fe6cd3a8814"],["tags/CSMA-CS/index.html","55a7aa9366ed0dbf72779bf184160335"],["tags/CSS/index.html","1b3966af622b0469fb89ed2eab5b65fe"],["tags/CallBack/index.html","9fa4dfabdeb3f6a1c460afa7eccd2b63"],["tags/CodeStyle/index.html","e14d81e252261394543819e16eadabf9"],["tags/CommonJS/index.html","871527d270303a14385bb9904ef44a2d"],["tags/DSAP/index.html","fdc424c78a596377929b54edddbfe958"],["tags/ECMA/index.html","4fbc48989cd9894ea4541917b552088c"],["tags/ECMAScript/index.html","3d931db13cb8a694f84ad68f1e88db10"],["tags/ES5/index.html","090969bf9d054fa1499536a1e68c0671"],["tags/ES6/index.html","87a889a47647104175ff7e14fa75c561"],["tags/FDMA/index.html","23bdc7dbfdf05046f372f14a24da150f"],["tags/FM/index.html","3d1249de56ed7690a44e331c3b239278"],["tags/FSK/index.html","bf3b7588349c4744c2e19e1d0f255fdf"],["tags/GC/index.html","73c42a416ab3a09f285743439bac91b0"],["tags/Google/index.html","aa0d671296f31c55e771c76b40563c7e"],["tags/Hoisting/index.html","04142bdf040885b469b08e7629ff8c3f"],["tags/Html/index.html","6ea24a97dc7df8d6081eb325fa87860c"],["tags/IE/index.html","180c92fe6a4c170497e92741e553c95f"],["tags/IEEE/index.html","7c606fd25350c49faf18bda72701fad6"],["tags/IEEE802-11/index.html","6deb9ca7631f18c171ed0a0a5ce10084"],["tags/IEEE802/index.html","fc97d712471846cadc52443b274ea5ac"],["tags/ISM/index.html","b2a6599ee4f9f3dc3a5c65360251da20"],["tags/ISO-31-1/index.html","ca34a88f38ec9ff2a708f9dd64fb906c"],["tags/ISO/index.html","e7dc3e65e8bbb9a14758a12dd726d65a"],["tags/ITU/index.html","14ac9b88de3bcd9b0a4c543deaa8ea5d"],["tags/JIT/index.html","ed248cbb1ffe136dd92043084519ea94"],["tags/JSONP/index.html","765d1a00c313141aa4ec96d39c997dcd"],["tags/JavaScript/index.html","75463265974d5f89e75b0e25c2cf0e2a"],["tags/LLC/index.html","0e0283127ea766b029c808a0a966c71c"],["tags/MAC/index.html","e04d8588ba7d43a932079a002dca8087"],["tags/MACAddress/index.html","6e0a390fb9c3f208aa403ca372737147"],["tags/Mocha/index.html","a7d5fa92bca77ef49a8318279c6ff609"],["tags/NVM/index.html","6deab9438edb9a6d66691c7ade068a3e"],["tags/Netscape/index.html","6f16e4e872946c13740ebcad9d1cda1c"],["tags/NodeJS/index.html","f39f5df2d6f46b6a2f7e6c2d5d6792d0"],["tags/OFDM/index.html","56582da5e8a43bbba5440f2a378acdd1"],["tags/OSI/index.html","5faf0a2dbe89ec840e866a5aca58d296"],["tags/PM/index.html","959d2905c392177222507ae53afdc27b"],["tags/PSK/index.html","0bbecb5dbbd5757c940faa26f0d649e6"],["tags/Promise/index.html","1f03e93a50cb7c5d7579cccd9fe8ec08"],["tags/Proxy/index.html","150da6cee2931ab9abdbfe8801524358"],["tags/QAM/index.html","121829422aa7197f8753357e32a71b2d"],["tags/QPSK/index.html","4096aaed5d1b59a0384b59eb7a67d450"],["tags/RJ45/index.html","a4f92f64e1e12880f7347e0590d700e3"],["tags/RS-232C編碼/index.html","11201070c0e0cf130670abe55d58787b"],["tags/RequireJS/index.html","ab53bbda3088ad851c10848f96e9df99"],["tags/SSAP/index.html","9cafa034c6c6e8709271d61e28563878"],["tags/STP/index.html","305717d0d1dd18159495828cb2d16d9e"],["tags/Scope/index.html","0ca16c9b22c65c74c83577f9da8f2d86"],["tags/ServerJS/index.html","bb023632e2425e788579daeebe151b97"],["tags/TCP-IP協定/index.html","56501a11a441c1c74d13b44f5e24692e"],["tags/TDMA/index.html","5fd4d986e369b605bdcfa1ebb945d881"],["tags/TypeScript/index.html","6db1288d237e1d5dfbce0426fddde636"],["tags/UTP/index.html","1364ea1a56141a5b028c76f2c0f8f5c6"],["tags/Uglify/index.html","22ff28e34621de399aa088ac91250d95"],["tags/V8/index.html","d8bfd305e327156e7fb5ce525ccfb9de"],["tags/VSCode/index.html","80b6ccfafac95ae253f3c82933c18c7a"],["tags/W3C/index.html","019e5cc15818e00a2616491b1ba29bc3"],["tags/WebAssembly/index.html","90056732af756a15d41c7b3933f63d42"],["tags/WebPack/index.html","0d0eb4b6c9839794473bc829502f4330"],["tags/WebSocket/index.html","8cd724a8ec4f18768be27ab0b34405d4"],["tags/WiFi/index.html","86277c3c0f7fde70fbc2462413120759"],["tags/WiFi探針/index.html","40ccdf2ead26f9609248cf6fb4b52776"],["tags/XMLHttpRequest/index.html","1781314dd69dd35ba61bfaa770b6ead2"],["tags/apply/index.html","290c4ebeea1b14abbf8bacb27dd1bd3f"],["tags/bind/index.html","3b6a18def65e9151d6007eeba02939d6"],["tags/call/index.html","1099eb594b5c8b208297aba5f4e91b5c"],["tags/const/index.html","36df34ac2a062531dfa620191de0ce45"],["tags/export/index.html","d96d80e539b8174e006ae6a77ee3adfb"],["tags/exports/index.html","8afc5c4c5bdafc12ad5cdab4dce0a203"],["tags/import/index.html","382d45fbf7e0db234aa1cdadc2315ead"],["tags/index.html","12de3168ca52dfeb027c2f5374dc80d0"],["tags/jQuery/index.html","4f211240d1fba275e2db1c6c22172d7f"],["tags/let/index.html","846531968a911f1a34bab7f1073f10b5"],["tags/npm/index.html","0ad3396c9f8c29681763789966366c68"],["tags/packeage-json/index.html","21ad3575aab7dfd6d910a18d3846d314"],["tags/require/index.html","b2a3dd8f3c9c397fefd63e6e1c12fb35"],["tags/runtime/index.html","14cd79a1d686a266299f8639ab9ea87f"],["tags/seaJS/index.html","4fe8b124f80389656d695b59055f05a1"],["tags/this/index.html","973204e6b000c472e501b361b36b49b1"],["tags/tsc/index.html","343d732398dc22dc74f46da61b32a773"],["tags/tsconfig-json/index.html","c9aa5b4dbfdc77519d34ffa5439be4bf"],["tags/var/index.html","3f8f25f1ece72fc0477b7f66301edc89"],["tags/中頻/index.html","b699f0517e3ea04938fae18a30d53a82"],["tags/交流電/index.html","f01ebe7d8923acc61feb6d8b6200990b"],["tags/人流監控/index.html","8f2cf1be067785e2a541a7e29920466e"],["tags/人類/index.html","0fae96ffc787d8259cc029ba7c6c0c77"],["tags/介質/index.html","5c25da092d5b04f5819ba579ea7dfbdf"],["tags/傳輸層/index.html","90d05fdad91f29b893207a32d5d07b8b"],["tags/光纖/index.html","a01601abc298a7b33bb131a5cb029989"],["tags/全雙工/index.html","2a31d4c69425b22b662ea7bd5a66a851"],["tags/前端歷史/index.html","9b68d082c49a951c69f1a336a882e2fb"],["tags/半雙工/index.html","554625d27d419975448bb02a1267906a"],["tags/協定/index.html","0191bcb68b38819d9764d01931897a11"],["tags/厄斯特/index.html","d85e151bc8ce15fd5478881b0ddfeac2"],["tags/可見光/index.html","c417c3e0055cbf543fdcf488739b9e29"],["tags/同步/index.html","213767df21e84c2d35b155791b6124af"],["tags/同軸電纜/index.html","505b508e5ec3d1c99a8c4903fe03c921"],["tags/單元測試/index.html","4fbd9bc05e20b5ea22c4fe417d9fc2e6"],["tags/單工/index.html","31dd617c4a35ef7f048d3da62ab95d89"],["tags/嚴格模式/index.html","2fd35399b2f487e9a498ea4e4f4c6098"],["tags/國際電信聯盟/index.html","86156b985dbe521bb0320902bbafaf18"],["tags/基頻/index.html","3a8eb0cd26cc1a6ad5d8d5075c90c7c2"],["tags/多工/index.html","2f54c03bbe8012c3a85e94ae3829f2ab"],["tags/大腦/index.html","c58bdea6b77ada2c163e23fd2c37d713"],["tags/定位輔助/index.html","e9965848d4c2b5e9842d1858cc015c12"],["tags/實體層/index.html","d917fa6cc10f524cf4fa4f51f2851cd4"],["tags/封包交換/index.html","4ff13b9429ad8a649c0ba666ee096a81"],["tags/射頻/index.html","8ed6da3c63a6f6e4517763ec834b0c10"],["tags/尼安德特人/index.html","c89268b2e592ffce633519337f15c79e"],["tags/差動式曼徹斯特編碼/index.html","0a01945140182f168945d9e2d1066282"],["tags/差動式零補差編碼/index.html","c93f2380647fdc2e23896708f20c6366"],["tags/廣告投射/index.html","40226df16f537263afe14ae9718d687a"],["tags/弱型別/index.html","f2284066538f2f83ce20882324772222"],["tags/強型別/index.html","3db2dd0d2418cf6f521130ed3266a4d4"],["tags/應用層/index.html","7c5cf858767f2930e13eee7e0fc0bcd4"],["tags/抽象檔案-d-ts/index.html","75444f9b4775272ae569f8c17c29326c"],["tags/數位/index.html","0ccf5569bbf433e1fa0ccd5bc5fc150b"],["tags/時間/index.html","ce4aac0703869b802a05d29564fb3e39"],["tags/智人/index.html","dfbf72554c82d0e13d20dc187a40ac34"],["tags/曼徹斯特編碼/index.html","1005856c29d8e6b60434d9b097bad955"],["tags/會議層/index.html","d8556bb2f5e211b7e452adfc5686aee4"],["tags/有線通訊/index.html","0c70074552ef6707bd44790abe254330"],["tags/汙染變數/index.html","94a8a609ce837e077b278d839bcd4156"],["tags/法拉第/index.html","aa4494b0d684da66d41d060a5a13dbf6"],["tags/瀏覽器/index.html","e2ff593bd648ce71b2ae4ec9dbf6f9e7"],["tags/無線通訊/index.html","0b28785afbfb6570ac6058bc79e3acc3"],["tags/特斯拉/index.html","fc9036bf47e376fd9e6b6eb18b2cfe34"],["tags/異步/index.html","d4e8dcbe2340c460217576350abcc9d3"],["tags/磁場/index.html","81bd081e24f41ba6403e66705d47b860"],["tags/第一次瀏覽器大戰/index.html","fac5637c55ebeeb90ae7e28602822444"],["tags/第六代WiFi/index.html","326742b565eb1799b70213a16bc15bb7"],["tags/網路層/index.html","1c7f1a2766db06798b63bb4349c3f65e"],["tags/線路交換/index.html","f61cbbbd62356edc9f720d577f8f929e"],["tags/緩存/index.html","4afd41fd8b588ef74ea20537ccf51452"],["tags/聲波/index.html","39dc1ac316e2df48a2e10cd81509d9b2"],["tags/能階/index.html","fbf1e0c3e35bb3f8c2d139180d25ba35"],["tags/腳本語言/index.html","41aece6ea36fdc75223fb97e201e1513"],["tags/行為監控/index.html","dbba51265b75240c24c5db07097cfcb3"],["tags/表現層/index.html","9e15390df8e8e9d421a944e44b502d97"],["tags/解釋型/index.html","9b49743351222a82ffb6401bd5e2190c"],["tags/詐騙資料/index.html","12fd9dcff260f28031ca6a887061802b"],["tags/調變/index.html","9de8be60016c94ec2abf3021f88e37f6"],["tags/資安保護/index.html","efa84fa67caefed4cf544e54875d6f58"],["tags/資料鏈結層/index.html","27b4ce90cf7d180ff4c64a90fee3d75e"],["tags/跨域/index.html","806580243c785b9888f7b501c3e54887"],["tags/身分證/index.html","499b61cd51d544b6063b26cebe72aa99"],["tags/通道訪問控制/index.html","daad87b566ff4aa1ed10af5d71e7c009"],["tags/銫原子/index.html","ec5a04d4e696cafd96e62270dd2f2301"],["tags/閉包/index.html","51edce321469e53a226c4fe100a25e6a"],["tags/雙工/index.html","14b71fea38198fed01e9837d510e548a"],["tags/雙絞銅線/index.html","4b529b061fe35d990fda4c85e967f9a1"],["tags/雜訊/index.html","0edf9e767028d61fd95ddc398b37fd8e"],["tags/電場/index.html","59354f1798e5a73b65fb61a33823ae8d"],["tags/電磁波/index.html","deb82a4b10c211391c899f02c2314edc"],["tags/電視/index.html","2bd2506902992c23fe9c7429cc00c19e"],["tags/靜態優化/index.html","a50f1ec4012df5f0226acabd8d008aeb"],["tags/頻譜/index.html","bb75940057e87d256c008341a6b5bbc3"],["tags/類比/index.html","699a3a373b8f4cdf2bcd4d6fc4e0c502"],["tags/馬克士威/index.html","71bf871776fa70ac1f88f391c99816b1"]];
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







