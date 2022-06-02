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

var precacheConfig = [["2020/02/14/部落格介紹/index.html","0da150f41b7937223cfa41c21c00beac"],["2022/06/02/前端P.01 - 網頁三兄弟/index.html","5b3495968852ab1615e4991f50b10c42"],["2022/06/02/前端P.02 - ECMA組織/index.html","cad62a23502df310bc83522f630b235e"],["2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","1ba5c821e23c222fbd354151414d23cf"],["2022/06/02/前端P.04 - JIT & V8/index.html","d7f3a0544f5d7c1949e79b700e5ec412"],["2022/06/02/前端P.05 - TypeScript/index.html","c484c3996406c897480394c9c721abe3"],["2022/06/02/前端P.06 - WebAssembly/index.html","eb2b7af0d1c71a5a96861d12ac73bc81"],["2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","81eeb2e9806e6cbdfc79fc260cd27eb6"],["2022/06/02/前端P.08 - AJAX & 跨域/index.html","1e0a81d7895a143012c3dd04200bf5f5"],["2022/06/02/前端P.09 - 同步和異步/index.html","0164e0a27ddece0cd4eede85f7d7746b"],["2022/06/02/前端P.10 - Scope/index.html","201e7576bf36fd9f73d73f7e24284dc2"],["2022/06/02/前端P.11 - 模組/index.html","cf1c4170eec644d3dabcc259813c2a68"],["2022/06/02/前端P.12 - NodeJS/index.html","2787df5a8181e28bbcea585b736eb573"],["2022/06/02/前端P.13 - WebPack/index.html","93cc6a9d7f115157d22f02c16d4e69c3"],["2022/06/02/前端P.14 - 單元測試Mocha/index.html","159bfc8b419842d365366d1b0d32bb1c"],["2022/06/02/讀書P.01 - 人類簡史/index.html","22f57a95edc784cbba1c392e53476b4b"],["2022/06/02/通訊P.01 - 協定/index.html","3614cbf8c62fcd15d1823f9089010ca3"],["2022/06/02/通訊P.02 - OSI七層模型/index.html","57ca2aa82ab22b7804a214279e6cf3fc"],["2022/06/02/通訊P.03 - 實體層、介質/index.html","de81793daa86f2143de1d47ec6082fcd"],["2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","730bd51015e800c421d2499d5e6651c6"],["2022/06/02/通訊P.05 - 資料鏈結層/index.html","56f45148bbee974cfb6375eb9d0b3e3c"],["about/index.html","41ae57402b82f2a7edbf568d137a57ff"],["archives/2020/02/index.html","5dae62487545c556c64a0d7d8047f10b"],["archives/2020/index.html","6efac47954c849ed30ed5cdf083f876c"],["archives/2022/06/index.html","9583d2f1a20aafd069c90fc2a91e9180"],["archives/2022/06/page/2/index.html","3ca038ab2d568a679fd78082b6db3bb0"],["archives/2022/index.html","831bfc950e3a2395b62a2cfea9c1d61b"],["archives/2022/page/2/index.html","c0d1d7a0ae3cf7f559e21c2d4256b41c"],["archives/index.html","007b3e671cd9dc2f5ab3ec524b4d85e9"],["archives/page/2/index.html","8d7f45b55d0ab9c0c76e79c4b53be73b"],["archives/page/3/index.html","4411a8c965fe95d242b599da7de9d4b6"],["categories/index.html","d7404de1bc1666348957fe19f08873b0"],["categories/前端系列/index.html","24a1781527bca451ec89c9aab624db54"],["categories/前端系列/page/2/index.html","bcd71d4433598011b337cce6d30db6a2"],["categories/基本文件/index.html","6a0b10d75557ba9d44a821d4bbac2ea9"],["categories/讀書心得系列/index.html","3c7831ad2088db0706c38cecb1cc606f"],["categories/通訊協定系列/index.html","57ebaaf60672afc99a5ad08d70b1fde2"],["css/index.css","d596cc019db5ad77d44e30d4134e0a21"],["css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["index.html","59cd1a860821edd9600d94f205006d01"],["js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["page/2/index.html","4ccbc96f8dd2fee9f03d6738f1186e4c"],["page/3/index.html","81f4d74fbbbe600aa301758ccd096599"],["tags/16PSK/index.html","57a341fb64b437649cfc138bae1fc3e9"],["tags/1G/index.html","841b5a704d78559e61d8540ac33cd475"],["tags/2-4G/index.html","665faa601c0cd674e54797a033a99e02"],["tags/2G/index.html","b72377f31f6615be6a27ac1ae856d0f1"],["tags/3G/index.html","1b90b1f164252ea6280bd09e1a91b9e3"],["tags/4G/index.html","616f89ab057c75626c7d9cb9f6aa43b4"],["tags/5G/index.html","c18dbf302d1f3583baf5039b345839ea"],["tags/AJAX/index.html","0af32de024a67753a250de72d67bcc2b"],["tags/AM/index.html","c6d3b1da1bae022aaf282e19d6a6b22f"],["tags/AMD/index.html","9bf6228d27c9b76daf16746881034690"],["tags/ARP/index.html","985ee3b8578b1365ba17a7b2e0a8decf"],["tags/ARPA/index.html","1753334d1611af39b504326de24107e5"],["tags/ARP攻擊/index.html","6541c45eb88b7fb18e1c23db38d0ae60"],["tags/ARP緩存表/index.html","653d12ca6e398942258dffc23c2af43b"],["tags/ASK/index.html","eb7fb40422b57cb9babc5297aef13894"],["tags/Async/index.html","e7c998a20e082c5fb0bd1f74c30eb43b"],["tags/Await/index.html","b2486a188ba3a062a5b0b1955ada6a05"],["tags/BPSK/index.html","1fac71f896730fc36cb1f64ef836aa80"],["tags/Bable/index.html","f9257081cd3e908c6a3f632fc46a7467"],["tags/C/index.html","ffe57d83ede63848328f56141763f185"],["tags/CCITT/index.html","a88935da386c402045f1e11025853765"],["tags/CDMA/index.html","ac86d04d624e9ddccd23aa58fda6cf4b"],["tags/CI-CD/index.html","2f5acad0bdc5c2f26c4cfa9fb0177f86"],["tags/CI/index.html","3719d964a72938d2277d7cfed9650e71"],["tags/CMD/index.html","5f3f3106421f2a1f741f43fff4e70f3b"],["tags/CORS/index.html","c33f9b91f1017a8929dfb24e84370412"],["tags/CRC/index.html","43b5aa45508db8386c5563aeceeebe3b"],["tags/CSMA-CD/index.html","93959da3a9d550f9ff33b33cc53cd96a"],["tags/CSMA-CS/index.html","ffd9703b62c7b1febf2840b277e9ffa5"],["tags/CSS/index.html","9fd994f0dac0cdd3bee66bf29b4a48ae"],["tags/CallBack/index.html","e25651e45850b69cd99795898cad907f"],["tags/CodeStyle/index.html","ea605e38c7ab5734ef5b6fae331f1d53"],["tags/CommonJS/index.html","9b6172a0f14597ab0cc43ca5b74f15b9"],["tags/DSAP/index.html","a3fa9c4f623c1acbbcff509071642684"],["tags/ECMA/index.html","93cad30c0a22d940b653f3ccf98658ec"],["tags/ECMAScript/index.html","f14da636bede14b12f5daf7713ad29d2"],["tags/ES5/index.html","8d83c1bc8368c5225b14d7aea4d1d6e3"],["tags/ES6/index.html","a838049a6b8e6f053550dfb3c6c633d4"],["tags/FDMA/index.html","7844267ce5a271c35774c04bc427271f"],["tags/FM/index.html","2d0b31433708df0ac250fccbb07d1418"],["tags/FSK/index.html","b45ec84bc291aba7b47c08625936242a"],["tags/GC/index.html","c50492793afeb1ee3b2c617740f16f09"],["tags/Google/index.html","b37893e6e3f74e85ec92597e7a1265a5"],["tags/HTML/index.html","a05d41f6dfb615dbde2039ff1828ab30"],["tags/Hoisting/index.html","109538aa31bd89cea5fa744ab3fdb93a"],["tags/IE/index.html","be00906aab014fb5df313f339977151e"],["tags/IEEE/index.html","d997577d4df4c6d5e1fb844e5d90b9fe"],["tags/IEEE802-11/index.html","96efc37ecb696386f6882aad5e37409a"],["tags/IEEE802/index.html","3f126dbf8a70256d8324afb9f0841107"],["tags/ISM/index.html","52fc6583d84662b546dbde5155d5bef9"],["tags/ISO-31-1/index.html","87df8da09d6516387ef1223471f56545"],["tags/ISO/index.html","fa408e118a3e867ae3b662161df9c4c3"],["tags/ITU/index.html","48ab9fbae384e82c622920a431638f88"],["tags/JIT/index.html","4904bb77a1743156a54465740020ccae"],["tags/JSONP/index.html","b7c2c81bc89eafcbdfd8bee450ce16d2"],["tags/JavaScript/index.html","f12819cb8bbb3ee3dc69bf6ed2d9a41d"],["tags/LLC/index.html","4754b232d6a6effa0476dc664e41b04f"],["tags/MAC/index.html","0b0bf63fca7776b9bf2757a23f039d39"],["tags/MACAddress/index.html","0f6af666f6b5fd2617a009db9b1bc455"],["tags/Mocha/index.html","e16147fc4be0f8f663739fcb08ccdb33"],["tags/NVM/index.html","32262f214f9e17bdabd627b70c26b822"],["tags/Netscape/index.html","22fea9e3d12b0c14ca19013d29bcbef0"],["tags/NodeJS/index.html","a4e3a2bc70d34154e160ed57b911d025"],["tags/OFDM/index.html","958cd2ac0fa217351cc8a0508ae999ce"],["tags/OSI/index.html","000445982426e6a81fe42ff6cb9027f0"],["tags/PM/index.html","af995cac1a898caf05a121a26e37a1be"],["tags/PSK/index.html","84dbd68c995171d4ad8130357586fe64"],["tags/Promise/index.html","8cae4cd38666bef83d0b381ccbf029e2"],["tags/Proxy/index.html","be682bec155b48705d92288eb616bd74"],["tags/QAM/index.html","af2406efb43c999867f97af86fde8a3f"],["tags/QPSK/index.html","8a0b563f2d210f68acfc0f5ec8ab2a16"],["tags/RJ45/index.html","2c0cdb97ae4e79a11aa4893018a9de27"],["tags/RS-232C編碼/index.html","bbae0eb87daa3081ba51a32c4601921b"],["tags/RequireJS/index.html","d29294cba2da057c5c50f0540d6f36b1"],["tags/SSAP/index.html","527265fb46a25c18363c2436814e191e"],["tags/STP/index.html","de69b2a0e1873a9bb06694b37901141d"],["tags/Scope/index.html","a145b08742215e21c0dd36cb70a65474"],["tags/ServerJS/index.html","35f6ff7cd1964fd2b5ba0cd3343ccfc9"],["tags/TCP-IP協定/index.html","44a62b3b3db14d153ec889e5dbf866f0"],["tags/TDMA/index.html","33ce0bf3d598720951d3fef00367e7c4"],["tags/TypeScript/index.html","7581fa28dec184bf0d2900e3b223fefe"],["tags/UTP/index.html","2e2f3325ae5a42f6a1cb3095593ca203"],["tags/Uglify/index.html","4fcc116a68e5240a05f7f4af6c439913"],["tags/V8/index.html","3e1f09f6fb171f1cb6fec9f07dec2155"],["tags/VSCode/index.html","57290fd817cd6a4384a1230e45ec87e3"],["tags/W3C/index.html","0d9d6069f936440536bcbaff271c555c"],["tags/WebAssembly/index.html","2dbf2eac80ec2dcb2cab1e99452c8854"],["tags/WebPack/index.html","104a91fffdfdb1faadd161dc81e1d7d3"],["tags/WebSocket/index.html","a3545fa1cf83d66a93d4ff554c3bf516"],["tags/WiFi/index.html","b4b7e2b01031222f762d26313d06f350"],["tags/WiFi探針/index.html","7996480908d37588f7710179a8d2be67"],["tags/XMLHttpRequest/index.html","f5038971929b6f63274f68401de65c89"],["tags/apply/index.html","e45d4198fe15ccbcaea7ff35a68dfea0"],["tags/bind/index.html","22c52b4be26212a5c81de78fb5441a2a"],["tags/call/index.html","0fbfac5e9994eed19483f7da3f3725f9"],["tags/const/index.html","97289e85f137dac645f6d620277d3115"],["tags/export/index.html","2114c223625b061588ca5aaf2bc8e5b1"],["tags/exports/index.html","b42bf967b708686ffd85f059a423e5a8"],["tags/import/index.html","dd8f0f219dd28c64a1288d7010ad3a68"],["tags/index.html","1157ab760241a1627cfabb3f89bc8324"],["tags/jQuery/index.html","fe617e7eb272f28470ab2396d6fc470f"],["tags/let/index.html","99d45a0e98b0259eda6adb3779ea2c48"],["tags/npm/index.html","6ff3126b714bb3bfcefd9b5e9be93cd0"],["tags/packeage-json/index.html","3cdcc1f5226098b946f0213598849a38"],["tags/require/index.html","f2c46bf5a3bf0ac18de58687cf3cc5b7"],["tags/runtime/index.html","c0a1506ee84f1ed60b8713501921c337"],["tags/seaJS/index.html","45458e85c8bcb71a41f80d2bd20f99f0"],["tags/this/index.html","78232ab7830fc013a05552f0e47c4271"],["tags/tsc/index.html","8d1885118088dbc06402b5c512486267"],["tags/tsconfig-json/index.html","506011a14ac3a6393bfa8a69cf799e35"],["tags/var/index.html","bf561065cdf8fd178bdc1f9a90101949"],["tags/中頻/index.html","93bd294a0d15a4fd79167031b99b7cc9"],["tags/交流電/index.html","0434d708fa4478b518d0759640539cde"],["tags/人流監控/index.html","b2d1f6f1423d55a06c116c7ffb880b44"],["tags/人類/index.html","fa9013d1ff73c8ffc16dbb8cfefbf2ad"],["tags/介質/index.html","25cc67ae39b9254472a26e7956179a6b"],["tags/傳輸層/index.html","dfa7e6eda9d35ec85fb7dd53420c265a"],["tags/光纖/index.html","184b06b5979eb6f2a96aa30211d5d367"],["tags/全雙工/index.html","92984ac429c5f43fe78dcdd5f76f9ae7"],["tags/前端歷史/index.html","1bfed3ac96961c4f66e708e4d1cd7da8"],["tags/半雙工/index.html","fabc836c71abb7400fb01cb5287f56d6"],["tags/協定/index.html","ac2826affaa006f81b0025923b37c3e1"],["tags/厄斯特/index.html","54ada0419a4b05419220b73a2ab18e93"],["tags/可見光/index.html","2d4d0e1f35f54e6a3378e459e438fe89"],["tags/同步/index.html","7f71995cf88170c6037d10be6f1e1024"],["tags/同軸電纜/index.html","bd82b548f8f564b0f7574ea65bc346f8"],["tags/單元測試/index.html","b7b059ed56fa4ff81087391e6d3979d4"],["tags/單工/index.html","57341c1b3a644ba6122cf87a5af2b851"],["tags/嚴格模式/index.html","ad861acc3a1934b92b841a1b99c9410f"],["tags/國際電信聯盟/index.html","feb4743616417e0ceb27b849e47c74d7"],["tags/基頻/index.html","ae112cdaf9dc4a910d5ca35dfa31af30"],["tags/多工/index.html","65f2221c2b17ecebc2387a23720b6e6b"],["tags/大腦/index.html","68e09607ac53a60810b0ab6000c8d02b"],["tags/定位輔助/index.html","d9089ff060c0f15a6e912401bb78e683"],["tags/實體層/index.html","c76a27562f08cb88c17f469c7d3833e7"],["tags/封包交換/index.html","7de8099179cb1f10e5b078d5adb03674"],["tags/射頻/index.html","e89835337e30d321e44f5daf73ac04ce"],["tags/尼安德特人/index.html","0f23d92e9dee06c9e3b2ca51280b8050"],["tags/差動式曼徹斯特編碼/index.html","696acf836409943be788b79e395682d5"],["tags/差動式零補差編碼/index.html","38ad4ca0282960301473eb677a42931a"],["tags/廣告投射/index.html","98b0a3984f93f169328e682f46c62292"],["tags/弱型別/index.html","aaecde91c23bbe35767817cf4f64fa22"],["tags/強型別/index.html","dc6f0d842390c352233dbd2216480ce7"],["tags/應用層/index.html","af9556c8456b6e71c070c78b932e68cc"],["tags/抽象檔案-d-ts/index.html","ad5cbb1d95bf46ec7ca9e1060b1562d8"],["tags/數位/index.html","da4330fc0a14858ea82fed28f2659c9e"],["tags/時間/index.html","3eef8eccaf920aa587a5c96c41351e48"],["tags/智人/index.html","41eede53e107fed4132952267f851204"],["tags/曼徹斯特編碼/index.html","a41e3c5570db60638ce60c4f7734a55a"],["tags/會議層/index.html","7798c0d48c84e8256d4223c0298ed78a"],["tags/有線通訊/index.html","a5a99582af2f508c5e9e9ae86086810b"],["tags/汙染變數/index.html","dea65b4ff1a8919ef8d55567878a2d5d"],["tags/法拉第/index.html","3194a880f893d1fc4127d48a5515040e"],["tags/瀏覽器/index.html","995adbeae8e57baca18ebbb4ea31700e"],["tags/無線通訊/index.html","8183aba7b2173c1fa42f2deb6a82322f"],["tags/特斯拉/index.html","cb6d34c257bfa345a3bd991742d80bce"],["tags/異步/index.html","659d1251eaa9599e4c338009d65b7382"],["tags/磁場/index.html","029563abc51cae02733d03c2c11b178d"],["tags/第一次瀏覽器大戰/index.html","328f78b6d37d4f0908a6d662897be30f"],["tags/第六代WiFi/index.html","c776108530b3610bd4d1bb36d61b923f"],["tags/網路層/index.html","71b69dc9cba4bf11904c7151223d913c"],["tags/線路交換/index.html","dc8caf5125203cc7ab9dc165540980a0"],["tags/緩存/index.html","42f4e5cf7ff064915113e03257e698d8"],["tags/聲波/index.html","682c90cb3d0c6919cb724b3beb581715"],["tags/能階/index.html","18c917e52e1a8ff1d8ebca0a15c3af87"],["tags/腳本語言/index.html","4002be26e4241bd303ebc208c944fc29"],["tags/行為監控/index.html","a58714a3aac16d627f95a9302497114d"],["tags/表現層/index.html","67d619d7c21440d70b1cfd0170e5a99e"],["tags/解釋型/index.html","78eeda9dd8bf75874c867ba1c0b61626"],["tags/詐騙資料/index.html","d18e12acf10c2106ca9957d6f9c81749"],["tags/調變/index.html","afbb3c0818c1dbd884d40e43f4cd2855"],["tags/資安保護/index.html","fe2e182e773142990e2a47b382d3e2cc"],["tags/資料鏈結層/index.html","e32608d61e79e44c0ade776574f06463"],["tags/跨域/index.html","1f2d2f23d5862d014b41134e91b2cc18"],["tags/身分證/index.html","70dca1cbad9f12cb8b5ef6e53c3a7603"],["tags/通道訪問控制/index.html","45050fba5ee739e8faf9c2e46cc6af03"],["tags/銫原子/index.html","9d615aefea18e4fa5eba51f8d837471d"],["tags/閉包/index.html","cf28f3a9c202b750cd41c73a1457d2a6"],["tags/雙工/index.html","d2bd17540d1217e2d3af0bd296bb3fbb"],["tags/雙絞銅線/index.html","118d071a43261e9a573e1bb2f07a0aba"],["tags/雜訊/index.html","d312e1df0f56bfe5bee1c215dbb59a58"],["tags/電場/index.html","f9e38d67be69b83f9a820732d8aaa388"],["tags/電磁波/index.html","d7c4f79784598ac8289a6ffaf9d51e97"],["tags/電視/index.html","bb4af7aedb2862d44160b8e8b0e8cd40"],["tags/靜態優化/index.html","cfda0a781f13e58d39e567e16321f9f1"],["tags/頻譜/index.html","7c65bacfcdf2781962d392eda9ff50ab"],["tags/類比/index.html","a1c89a9bba634e01fae9fb0fad843910"],["tags/馬克士威/index.html","0211ee100e98cc5d72b5c065127aa56e"]];
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







