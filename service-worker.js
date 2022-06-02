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

var precacheConfig = [["2020/02/14/部落格介紹/index.html","2837768f74ae156d5d526a2653d09cf0"],["2022/06/02/前端P.01 - 網頁三兄弟/index.html","db5b141b018a72600e689234a15389e4"],["2022/06/02/前端P.02 - ECMA組織/index.html","09f6702fa5510a0feb1178903115af3b"],["2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","937f96ce4e7a5f043b44dfc402efb312"],["2022/06/02/前端P.04 - JIT & V8/index.html","e153f7ee98c25d7f0fe934a2925955af"],["2022/06/02/前端P.05 - TypeScript/index.html","76e7f71f6207d8ba634bd35b5845b67f"],["2022/06/02/前端P.06 - WebAssembly/index.html","b5d5068a608c9349ccc83c76f1d6e138"],["2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","28913943f28ae5e04728a7640519b648"],["2022/06/02/前端P.08 - AJAX & 跨域/index.html","80a288a1ff1d330190195d6ae202ed74"],["2022/06/02/前端P.09 - 同步和異步/index.html","3d794d18fad58b14f8b857c8f67560e5"],["2022/06/02/前端P.10 - Scope/index.html","5f2c5e1d3eafa00b3d7c16e1e9ec7822"],["2022/06/02/前端P.11 - 模組/index.html","a35768d1e9a0855217b9dcb32360454f"],["2022/06/02/前端P.12 - NodeJS/index.html","77dabbf468e6da0a939ee136016b5928"],["2022/06/02/前端P.13 - WebPack/index.html","9dc0a4f44c2fc23dde84c603675e116c"],["2022/06/02/前端P.14 - 單元測試Mocha/index.html","b2843cb521253f814d84224378898e08"],["2022/06/02/讀書P.01 - 人類簡史/index.html","70948342493e7d24558f68e255dfd3cc"],["2022/06/02/通訊P.01 - 協定/index.html","aff285598083395ab2509c22d1e278b0"],["2022/06/02/通訊P.02 - OSI七層模型/index.html","e390571cff0e5c280f72172d853969a6"],["2022/06/02/通訊P.03 - 實體層、介質/index.html","5a1d1dd85b07187115a46ce1b1e2e8ab"],["2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","8bd0436b93943e300d8e47516d40c027"],["2022/06/02/通訊P.05 - 資料鏈結層/index.html","76771a9c92026f9d10282e2d45bc0ec5"],["about/index.html","83c3ffebd0ff377543b6e821c39a5e20"],["archives/2020/02/index.html","c85d53e5487c15a5377ea7ef054cb07f"],["archives/2020/index.html","d3d524fc2835cc1682744ba692a5d5ee"],["archives/2022/06/index.html","891f618f2d0a213d894f8ba229327986"],["archives/2022/06/page/2/index.html","82832729beb58b94429837c10f68071a"],["archives/2022/index.html","54243f49a75df674fd51b0c2e1e83896"],["archives/2022/page/2/index.html","f83b511fd5c9e2f55b7629a35a43bfa0"],["archives/index.html","b8e6713b15b8b79acf265a38681db20d"],["archives/page/2/index.html","2ebc7a1876df1547fc78056471191f84"],["archives/page/3/index.html","e66e4cdf5a3bf9ba8807271a0aaca196"],["categories/index.html","d8e25d07e64fbf5c7a4dda96cf985d41"],["categories/前端系列/index.html","dc61c8f5a2cc902a3ac7c2b1fdd91a6a"],["categories/前端系列/page/2/index.html","dac2eed87b75b11f1c34a1f8f843a8f6"],["categories/基本文件/index.html","d3eadeb7b0f32835ccea2ecf702de7eb"],["categories/讀書心得系列/index.html","f488ceaa31a7fd0182ae84dffa8b04ff"],["categories/通訊協定系列/index.html","d161ab423fe1fd942f77efca35174116"],["css/index.css","d596cc019db5ad77d44e30d4134e0a21"],["css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["index.html","12efafacd473fe4d38dc9c556df2229b"],["js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["page/2/index.html","9b1ed136eb997d5d95673388fd2a5b62"],["page/3/index.html","e166dbd3a10850e061f1eb43c06f3590"],["tags/16PSK/index.html","0e8f06ffe49348a2ddbe8b10e6fc4ed8"],["tags/1G/index.html","b9110e2a78eddd6b8d4debb69388cdd6"],["tags/2-4G/index.html","973d96f8dee99560b60a423f7d83aab9"],["tags/2G/index.html","107b99b3ba99abb8a45a79f19739aba7"],["tags/3G/index.html","818a89a9899e553eb67ab5772290a96f"],["tags/4G/index.html","6050ae40488ea9470d45914f89bf052d"],["tags/5G/index.html","e456ecc51da9e16e0bc56c9ac52995a6"],["tags/AJAX/index.html","6ad1ee6b41f8133017b6e65b2fd873c0"],["tags/AM/index.html","8dc9b9297ad1b968115a6d6358b94224"],["tags/AMD/index.html","c004492e0e0f7182394f8612b8636c9b"],["tags/ARP/index.html","dbcba712ac31b7123ad8582f7402ac00"],["tags/ARPA/index.html","168b3fbde6e46af0149cf58627d317f8"],["tags/ARP攻擊/index.html","756a95f6d17a0955a5006d6aae2171af"],["tags/ARP緩存表/index.html","eab1a173c9d8dcbbced42f74a0956302"],["tags/ASK/index.html","def19e63f5380fb51f6f9241025dde66"],["tags/Async/index.html","82cd1b0480ba71f081269c598fccc8b4"],["tags/Await/index.html","67d81b354023c7a82babac72beac8251"],["tags/BPSK/index.html","ae8787c02e5df6ee35ad8aa561d14174"],["tags/Bable/index.html","cfcb63ba388ea20b68321b384c9021d1"],["tags/C/index.html","717280bea15e229fa5029c8ebe5ec0aa"],["tags/CCITT/index.html","330cdff4588f644fc26b49c9c7be2de4"],["tags/CDMA/index.html","4c8ea05521d10f77a45d0a3a97a96305"],["tags/CI-CD/index.html","50cfd9312fba068f86edbb8368017a0b"],["tags/CI/index.html","b19bb43eb866f3b212fb51009b591136"],["tags/CMD/index.html","5de1e86c2590611b0048875b5a798519"],["tags/CORS/index.html","a1ca0b848d2bc595fc76c018f9e064f3"],["tags/CRC/index.html","d1db40ad2c590ebc6ba742e0498c5e83"],["tags/CSMA-CD/index.html","6fff0ee3e039886ab030840660925b5e"],["tags/CSMA-CS/index.html","c9bd71ef700413d540191d608f8d1e55"],["tags/CSS/index.html","1b3cbb2f2493a1f4f3657b4047fa7141"],["tags/CallBack/index.html","25e307ee32a2f74cdc4668c605c9bda2"],["tags/CodeStyle/index.html","ba87212c1c56afb74b19e0bde066a5c8"],["tags/CommonJS/index.html","99a620ff00b7e18b0a85cb0a0e1eb824"],["tags/DSAP/index.html","d7f919c620bd74a627bfe281dd09db45"],["tags/ECMA/index.html","299a3f316100083ad00f0ff62da849f1"],["tags/ECMAScript/index.html","6c3f8b3cc29f0d762f052ad465493224"],["tags/ES5/index.html","69305a25acd5964695b5047268ac0e29"],["tags/ES6/index.html","dc51eec36336061fad6ca648ee3c9dc6"],["tags/FDMA/index.html","b565424fdfb4b3791a34cb9cc9dcc5ea"],["tags/FM/index.html","60d8faa044cc0d879aa9caea3d0db5a9"],["tags/FSK/index.html","62c84c36d9746b634071ac293e1ffb7e"],["tags/GC/index.html","b0389b9d87b57e2d40a1d21e33b3e159"],["tags/Google/index.html","a782e6866b1f20ac1c7e15c2394bcfe4"],["tags/Hoisting/index.html","5674782d329f75e226cf8cd24b152e41"],["tags/Html/index.html","53ba1f20e3c5a871100b85a93d0576e5"],["tags/IE/index.html","15f8574ed4b440e89970d63e0477c141"],["tags/IEEE/index.html","5175adeaa3a76a88f546027297fba645"],["tags/IEEE802-11/index.html","7db3db74da4c1e308ed9d08a6ae8c23a"],["tags/IEEE802/index.html","16ef7e04117c24011ff0252b27b71f59"],["tags/ISM/index.html","8f63e88393bb0ba6c34d3b1a63052624"],["tags/ISO-31-1/index.html","f21ce753364a681033b1322454fb3152"],["tags/ISO/index.html","4ac95af796f3ff55c1c53ca87bfa1007"],["tags/ITU/index.html","17ae35a6dd1263ea226772a13452e15a"],["tags/JIT/index.html","757cc73f7e25f257ff502f1f9a3abeb0"],["tags/JSONP/index.html","96916e590f9eb8b8ff21dcfeab211950"],["tags/JavaScript/index.html","d1d61cf228c4453fb79aa4f34fe8cb5c"],["tags/LLC/index.html","8711a57f154647a3c2b39bcfc9dc0add"],["tags/MAC/index.html","2e495d8ca8544d678e5319e460a177af"],["tags/MACAddress/index.html","33a1e36ef56a7378dee4c5dbfb42ae34"],["tags/Mocha/index.html","adc523c2920ed758a9887e189fa576ae"],["tags/NVM/index.html","8296cabbe16fb9500833bd7c0913764a"],["tags/Netscape/index.html","4bfb346c626afaab7eb84098656128a9"],["tags/NodeJS/index.html","d9b9e6d4bedaf4821d1b2f54990d23cd"],["tags/OFDM/index.html","43b7883809c49f107e4febf41a0ad5c3"],["tags/OSI/index.html","8b5965660b3bd541ea7ba216d024ca96"],["tags/PM/index.html","552255f562dc2d65d658ae10fc28dcfb"],["tags/PSK/index.html","7900e9afa0e1af3d8e2bf214b264fb22"],["tags/Promise/index.html","9cfe3e51ba55dfed9527a76022b19c28"],["tags/Proxy/index.html","2ad3b555aed5684becc6eb79af45c572"],["tags/QAM/index.html","a662c57ee89af2959b08c24a67be934b"],["tags/QPSK/index.html","a4168a615b2897e12a89b9fd6125b0ac"],["tags/RJ45/index.html","451054a61a5f43d0b0c8d3e6d7ebece3"],["tags/RS-232C編碼/index.html","0f98884baafecf35a41998346bf8f4d0"],["tags/RequireJS/index.html","1afa35a0bba0a40600d72075a8ee9781"],["tags/SSAP/index.html","307804f03d8c59f6388f1cae51faa916"],["tags/STP/index.html","c66144a49774b6529c0e1c4591bf935e"],["tags/Scope/index.html","c079f7023fd967fdc70bb932788228d6"],["tags/ServerJS/index.html","c2528ba13f732fad9b4be06a35c0f126"],["tags/TCP-IP協定/index.html","071ab105b17be381d00653e053522596"],["tags/TDMA/index.html","c4e802695c6abe836214c1182515e5af"],["tags/TypeScript/index.html","2c803157158361d8da405244fc5c4c6e"],["tags/UTP/index.html","b6e4fd28ad9e4d059e9e60a8878f111a"],["tags/Uglify/index.html","d42b8c5a967157d27a0340ebe527cb65"],["tags/V8/index.html","424fc79ba3a752c64cce7091842dad96"],["tags/VSCode/index.html","9929a75d8d22a910d19b2d44a36d973c"],["tags/W3C/index.html","26d6dec3596336c1f18e3059957c7cdb"],["tags/WebAssembly/index.html","7005c9a072f58a1d42009d2427986e4d"],["tags/WebPack/index.html","dc487129cadc67f072db5a41936026d6"],["tags/WebSocket/index.html","707dd17d4b9b5daf7659cfe4e4795b14"],["tags/WiFi/index.html","3076a26d6b1cb7abe6305dcc1810920d"],["tags/WiFi探針/index.html","a3b4bc70107975561b023fd7e05f5cec"],["tags/XMLHttpRequest/index.html","961eb3fc564a26657ec65fd969162f43"],["tags/apply/index.html","eacf7c5f039518c893eed624cbb8c8f5"],["tags/bind/index.html","443a25e238e6c02c74f10681997f2fa8"],["tags/call/index.html","932d968d6bb2c0783eb358f3d2758062"],["tags/const/index.html","76091f429ad70c31c34499a74adaf19f"],["tags/export/index.html","b79e413de773169c3c34e17a35d149ed"],["tags/exports/index.html","2f7de7203e839ab12f7854633c612514"],["tags/import/index.html","49762018f062f198ee607475d33ad458"],["tags/index.html","3497da3a157b7476733507abc23983a8"],["tags/jQuery/index.html","903c51dd7f0150b20ca6eb7c3b955bb1"],["tags/let/index.html","77b842418b23c38295cb9346567ba5d0"],["tags/npm/index.html","97e6c74c61ad4d9a4cdbf78dc7ebb146"],["tags/packeage-json/index.html","b675cd2ddd6ce2dd56e21860f3df954a"],["tags/require/index.html","257e22f8b75958191c053f481160261e"],["tags/runtime/index.html","553875d50093025b65ba7ce05221a3f8"],["tags/seaJS/index.html","c7485b00623bf79a187e023010d78c74"],["tags/this/index.html","d20482eaa9ffac7fb68d3ab475790998"],["tags/tsc/index.html","eeee66e4473eab6457c00555966834f6"],["tags/tsconfig-json/index.html","c0515720ce56fadd962fe3aa2d19c724"],["tags/var/index.html","b84cb6f0ef45d181852668e03e70688a"],["tags/中頻/index.html","03f88cd19c4965bd9add4302c556c43d"],["tags/交流電/index.html","31106fcd53d25f13703842fdff5ae492"],["tags/人流監控/index.html","0a3e8d3b7ec8596481fcf71d1fe556fa"],["tags/人類/index.html","7bbdc95a2a9d387f4a2a89b58ff39427"],["tags/介質/index.html","76a0e5bf22cb573ed922a5b147a2ee08"],["tags/傳輸層/index.html","d4ccbd504760d34ee47f541079238467"],["tags/光纖/index.html","46695cbb9dfed2b12e338046f8468ee6"],["tags/全雙工/index.html","79a496f146a1eaf2098a813c435d40c8"],["tags/前端歷史/index.html","fd3b8bb7fca7c375635c6a61d839d89e"],["tags/半雙工/index.html","7af22cb8adedeb41e748fa153f71a21a"],["tags/協定/index.html","97cc28f0fc790677d055fc63ae4427ae"],["tags/厄斯特/index.html","47b7ed9b7cd951164148c5263489a2cb"],["tags/可見光/index.html","e1d6af27972e5cfb1aa177b95855543b"],["tags/同步/index.html","01db301adc3a91e8d152e05ef5b1da95"],["tags/同軸電纜/index.html","300c13817f01ceecf27d274f1a36952f"],["tags/單元測試/index.html","830f2107d8aa9666c64358366bb44954"],["tags/單工/index.html","f8144f0b0df473355b67887ec07a748b"],["tags/嚴格模式/index.html","780eb9712b3388ff49e27fc6725af5bc"],["tags/國際電信聯盟/index.html","e3fbd35577c5bb0f064b4f78234335c8"],["tags/基頻/index.html","ef42b63de21b0da331aec8302f5867ee"],["tags/多工/index.html","b07a5a8a085f2ddd69ebb2bb9d7bcb80"],["tags/大腦/index.html","9af1fdc64803a815300492aeaad4ed84"],["tags/定位輔助/index.html","b8cb40c7f56b408c9ae3bc32bf69b96c"],["tags/實體層/index.html","5f0f422dfc66ec49144675e737300605"],["tags/封包交換/index.html","a80d328de30e5d2df98dc87b89cb99db"],["tags/射頻/index.html","1d3a11a4931e0d642c14d5ca9278c1ce"],["tags/尼安德特人/index.html","a2c722132025efea6a3ea80f9eda9268"],["tags/差動式曼徹斯特編碼/index.html","e96418fac6ffb89b2f8608fcda888293"],["tags/差動式零補差編碼/index.html","e8528de30211b812c4bb966ee8e680f7"],["tags/廣告投射/index.html","109f16dceb21d742373ca9aec220cb94"],["tags/弱型別/index.html","32d8af7d92fddfdd40b952929adbb67e"],["tags/強型別/index.html","221a5fe3410da941280e17913a0868ee"],["tags/應用層/index.html","057f5531f3789e5947ff265e161e8ce8"],["tags/抽象檔案-d-ts/index.html","c991f9d3728641e8fde5915a19b43f47"],["tags/數位/index.html","883af06f57cab5ee22a6e57fd6935fe5"],["tags/時間/index.html","9666122b0d9cfa0077ea589942e10629"],["tags/智人/index.html","dec70a760dff05728096d3df92da588c"],["tags/曼徹斯特編碼/index.html","8c64aa566d251d0f38f8477d9da300a3"],["tags/會議層/index.html","0c8b36f06d80ba1337ea5536f08ce086"],["tags/有線通訊/index.html","9ef75f0160dccbf72e87cfd69083c45b"],["tags/汙染變數/index.html","cc78f6c5fdd64631ea9d4049105404c1"],["tags/法拉第/index.html","796284a876af9d37c9bcc7c4f89b5806"],["tags/瀏覽器/index.html","501d53db86f4c5ff900e9585056efbec"],["tags/無線通訊/index.html","d1a0b97aaab6ad9e9d5ad0aa700112fb"],["tags/特斯拉/index.html","8adcc703b2e68850de58cb946c692284"],["tags/異步/index.html","24fe33bb48bb231253d1beb4fa7eb6bc"],["tags/磁場/index.html","8480de9ae6acf1aaa9be5295be29abb1"],["tags/第一次瀏覽器大戰/index.html","71765f24c33e7e28e1b7148f314d635f"],["tags/第六代WiFi/index.html","667b0cd7593b2eea1bc38b3ba1f11964"],["tags/網路層/index.html","2603e16d2ff633d407974c01c25f45e7"],["tags/線路交換/index.html","cdce0b45019462499f0ef2bf033bc9a7"],["tags/緩存/index.html","310d8ad650b9024200e91033bec76956"],["tags/聲波/index.html","2a48dd59e4dbd27c45e4e95f92b3270b"],["tags/能階/index.html","8676d2cd60e078dd6e0cb4b249d1500f"],["tags/腳本語言/index.html","5233e3bbb2c511b2dd8662c9922bca41"],["tags/行為監控/index.html","1693576e44c5cca732ee2764f923faef"],["tags/表現層/index.html","d974243fe14b39da0441fa4cc4fbf3b4"],["tags/解釋型/index.html","e7a861570b83573e3acc561f4d2de813"],["tags/詐騙資料/index.html","341366ab21c916eb69a1380f0c6f1c6f"],["tags/調變/index.html","d546e2f7b1c8ab2415d855fa935976d5"],["tags/資安保護/index.html","c698a0979006e2d84a3dd22cbdd9f31d"],["tags/資料鏈結層/index.html","e3491aa1eb5c1cd632627f4e39d0fc47"],["tags/跨域/index.html","3fb295f9645904020769f7c03a8becf6"],["tags/身分證/index.html","10637de36222a19f59433d12da964c5f"],["tags/通道訪問控制/index.html","1eee95bd4664141b2811fe31786c4d07"],["tags/銫原子/index.html","046fb478a470a0c17980d80837735493"],["tags/閉包/index.html","faaae5dc4aaf7eccfb0d694b8dd88fee"],["tags/雙工/index.html","2488f6546e546470d2b31143986deb81"],["tags/雙絞銅線/index.html","09d7a5b56646a9709c74d6c50ad3e127"],["tags/雜訊/index.html","be9563605c692c766b3f0b947b9a7c6c"],["tags/電場/index.html","ac55df9303ae485771e2c1b409c6d21a"],["tags/電磁波/index.html","2d8723af542bc542fba40937ea984501"],["tags/電視/index.html","cf3432bbf4d1aa974c2d060a200089e8"],["tags/靜態優化/index.html","4e28504b33a775f44ad205173e5a2b88"],["tags/頻譜/index.html","0624e5a47e1837664fca8c55f32c1e3f"],["tags/類比/index.html","998f964fac2bf0eb50c837247e4c44d1"],["tags/馬克士威/index.html","9ba41aa338793b33a4f29327f1e85536"]];
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







