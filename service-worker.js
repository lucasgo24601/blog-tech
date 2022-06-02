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

var precacheConfig = [["2020/02/14/部落格介紹/index.html","0ef70cd852a0135a37a413c3592b2c83"],["2022/06/02/前端P.01 - 網頁三兄弟/index.html","013d787cb15fc06ed3ecb062018c70bb"],["2022/06/02/前端P.02 - ECMA組織/index.html","6939ea6881bcfc49088859ac52675a77"],["2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","7825656a14a7d4e19f52f3bd1338acbd"],["2022/06/02/前端P.04 - JIT & V8/index.html","09d43c74a3ed772242a5f38f56256aab"],["2022/06/02/前端P.05 - TypeScript/index.html","942d0e745d95d08a0961a03f0c583264"],["2022/06/02/前端P.06 - WebAssembly/index.html","522239527851c885abd9b75da8c956ac"],["2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","4f395eed58eaa97db82d15b52aa3758d"],["2022/06/02/前端P.08 - AJAX & 跨域/index.html","5ce9cb92b6de2e916eade2884f2493a6"],["2022/06/02/前端P.09 - 同步和異步/index.html","ca2da11ca2e18125e47e0a2190760de6"],["2022/06/02/前端P.10 - Scope/index.html","216ae50b242c74a81fd5f709f697bb26"],["2022/06/02/前端P.11 - 模組/index.html","061d66c3938bbf6398ab714e56c1bd1d"],["2022/06/02/前端P.12 - NodeJS/index.html","b2ff894d38754d70d100afdf87b8616a"],["2022/06/02/前端P.13 - WebPack/index.html","24b3ae2243fd080853df1c30bfad9ddf"],["2022/06/02/前端P.14 - 單元測試Mocha/index.html","b56cae3274ca916b187146d41f25b867"],["2022/06/02/讀書P.01 - 人類簡史/index.html","c95643b9202ba99aea43a63e79b1c60d"],["2022/06/02/通訊P.01 - 協定/index.html","87899da781d894486266a95d9bd39676"],["2022/06/02/通訊P.02 - OSI七層模型/index.html","a4ebae28cce5957a7267465a4f2dd853"],["2022/06/02/通訊P.03 - 實體層、介質/index.html","6fdf358c4064b0f5f6a3d476b6fde5b4"],["2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","2aff752f01032cea60261223e64b9d18"],["2022/06/02/通訊P.05 - 資料鏈結層/index.html","19bc2a9a566187f1e77c00fd1ec8614e"],["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2022/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2022/06/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2022/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2022/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/前端系列/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/前端系列/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/基本文件/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/讀書心得系列/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/通訊協定系列/index.html","d41d8cd98f00b204e9800998ecf8427e"],["css/index.css","ffa6854e04063a25e3bb93b4de2eb146"],["css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["index.html","d41d8cd98f00b204e9800998ecf8427e"],["js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/16PSK/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/1G/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/2-4G/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/2G/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/3G/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/4G/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/5G/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/AJAX/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/AM/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/AMD/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ARP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ARPA/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ARP攻擊/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ARP緩存表/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ASK/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Async/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Await/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/BPSK/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Bable/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/C/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CCITT/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CDMA/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CI-CD/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CI/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CMD/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CORS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CRC/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CSMA-CD/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CSMA-CS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CSS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CallBack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CodeStyle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CommonJS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/DSAP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ECMA/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ECMAScript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ES5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ES6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/FDMA/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/FM/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/FSK/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/GC/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Google/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Hoisting/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Html/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/IE/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/IEEE/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/IEEE802-11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/IEEE802/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ISM/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ISO-31-1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ISO/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ITU/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/JIT/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/JSONP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/JavaScript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/LLC/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/MAC/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/MACAddress/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Mocha/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/NVM/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Netscape/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/NodeJS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/OFDM/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/OSI/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/PM/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/PSK/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Promise/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Proxy/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/QAM/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/QPSK/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/RJ45/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/RS-232C編碼/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/RequireJS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/SSAP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/STP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Scope/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ServerJS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/TCP-IP協定/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/TDMA/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/TypeScript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/UTP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Uglify/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/V8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/VSCode/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/W3C/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/WebAssembly/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/WebPack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/WebSocket/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/WiFi/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/WiFi探針/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/XMLHttpRequest/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/apply/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/bind/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/call/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/const/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/export/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/exports/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/import/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/jQuery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/let/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/npm/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/packeage-json/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/require/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/runtime/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/seaJS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/this/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/tsc/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/tsconfig-json/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/var/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/中頻/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/交流電/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/人流監控/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/人類/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/介質/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/傳輸層/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/光纖/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/全雙工/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/前端歷史/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/半雙工/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/協定/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/厄斯特/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/可見光/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/同步/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/同軸電纜/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/單元測試/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/單工/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/嚴格模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/國際電信聯盟/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/基頻/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/多工/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/大腦/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/定位輔助/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/實體層/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/封包交換/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/射頻/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/尼安德特人/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/差動式曼徹斯特編碼/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/差動式零補差編碼/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/廣告投射/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/弱型別/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/強型別/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/應用層/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/抽象檔案-d-ts/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/數位/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/時間/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/智人/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/曼徹斯特編碼/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/會議層/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/有線通訊/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/汙染變數/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/法拉第/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/瀏覽器/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/無線通訊/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/特斯拉/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/異步/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/磁場/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/第一次瀏覽器大戰/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/第六代WiFi/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/網路層/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/線路交換/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/緩存/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/聲波/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/能階/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/腳本語言/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/行為監控/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/表現層/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/解釋型/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/詐騙資料/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/調變/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/資安保護/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/資料鏈結層/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/跨域/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/身分證/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/通道訪問控制/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/銫原子/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/閉包/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/雙工/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/雙絞銅線/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/雜訊/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/電場/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/電磁波/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/電視/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/靜態優化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/頻譜/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/類比/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/馬克士威/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







