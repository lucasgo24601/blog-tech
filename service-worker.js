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

var precacheConfig = [["/blog-tech/2020/02/14/部落格介紹/index.html","468ac5c40ee3a966fc3e1a56f88e74e3"],["/blog-tech/2022/06/02/前端P.01 - 網頁三兄弟/index.html","5261de763dab72bd92dcb7230ba83dc6"],["/blog-tech/2022/06/02/前端P.02 - ECMA組織/index.html","bdd6eb28b4031732ed91fe6a76c827ec"],["/blog-tech/2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","550dc7394fe953231b0488b68141ccff"],["/blog-tech/2022/06/02/前端P.04 - JIT & V8/index.html","e8c675d9f918e305ef015610bb36ca20"],["/blog-tech/2022/06/02/前端P.05 - TypeScript/index.html","5630baa89544450215b641f49ba4fccf"],["/blog-tech/2022/06/02/前端P.06 - WebAssembly/index.html","a4e03bb0d5f15a4b4d83f85c6a556161"],["/blog-tech/2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","f20a9d024917be6bb4ff90ac44b7cb93"],["/blog-tech/2022/06/02/前端P.08 - AJAX & 跨域/index.html","1072425f455481167f7410925e7e10c0"],["/blog-tech/2022/06/02/前端P.09 - 同步和異步/index.html","d7d9d2eec64ef0fa5d5b1b4d8ff202aa"],["/blog-tech/2022/06/02/前端P.10 - Scope/index.html","e63da83c7fa8ca6d698a55abd927d6f7"],["/blog-tech/2022/06/02/前端P.11 - 模組/index.html","aca7f04da1ae136ca0ab63e9e2350926"],["/blog-tech/2022/06/02/前端P.12 - NodeJS/index.html","12bacc9d170389ec47489285cda8db23"],["/blog-tech/2022/06/02/前端P.13 - WebPack/index.html","9913576d4741c2de465959c5ad87933d"],["/blog-tech/2022/06/02/前端P.14 - 單元測試Mocha/index.html","10c8e59e1b1506fda92157955ab51740"],["/blog-tech/2022/06/02/讀書P.01 - 人類簡史/index.html","3c927d49a9f65c53061db110ba1386ab"],["/blog-tech/2022/06/02/通訊P.01 - 協定/index.html","b10098244747a58c2f9b38d8dd554a16"],["/blog-tech/2022/06/02/通訊P.02 - OSI七層模型/index.html","44e96a45deafe36165d4c81b737e0671"],["/blog-tech/2022/06/02/通訊P.03 - 實體層、介質/index.html","fab8e734ae87e5c88fbd5baeb661bb74"],["/blog-tech/2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","a6ba78ae96273ee34945c0b041919351"],["/blog-tech/2022/06/02/通訊P.05 - 資料鏈結層/index.html","9aeaf71a905aa2318d1d0e2ff14f63fb"],["/blog-tech/about/index.html","1333752eb7f09198af7129116dec167c"],["/blog-tech/archives/2020/02/index.html","9fe0b8f2ec0ccdb2a47022fa17518239"],["/blog-tech/archives/2020/index.html","e7e6f7fb275ada144becd53195730d86"],["/blog-tech/archives/2022/06/index.html","98741ed65bbba6eda4cd1945e7396cd9"],["/blog-tech/archives/2022/06/page/2/index.html","9100d3a120b86898b726d961bb1ef355"],["/blog-tech/archives/2022/index.html","a9b688721233c702e34c3a722cbd9c85"],["/blog-tech/archives/2022/page/2/index.html","0605deac188ce082a255133af97f8c9c"],["/blog-tech/archives/index.html","1bccf3394bca9f0ef4fea40ee9d36029"],["/blog-tech/archives/page/2/index.html","e3b97b5b7788ff2f8c36ea47601ce3af"],["/blog-tech/archives/page/3/index.html","d76cf5e6b203daead3b31aa80a3fdee9"],["/blog-tech/categories/index.html","cb95fb326761f4fe798da20b326d728f"],["/blog-tech/categories/前端系列/index.html","ef2628cb1c956ca485361ef1c017305a"],["/blog-tech/categories/前端系列/page/2/index.html","ad3552fa18b5aa9ea42a24480250604b"],["/blog-tech/categories/基本文件/index.html","a9fe721e59bc7b2e28b143afc5da0ff9"],["/blog-tech/categories/讀書心得系列/index.html","95a6adfab0f0df399a8d95daeb42d41b"],["/blog-tech/categories/通訊協定系列/index.html","a12d2105b9d7a440d7403d87a6266548"],["/blog-tech/css/index.css","d596cc019db5ad77d44e30d4134e0a21"],["/blog-tech/css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["/blog-tech/css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/blog-tech/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog-tech/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog-tech/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog-tech/img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["/blog-tech/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog-tech/img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["/blog-tech/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog-tech/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog-tech/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog-tech/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog-tech/img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["/blog-tech/img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["/blog-tech/img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["/blog-tech/img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["/blog-tech/img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["/blog-tech/img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["/blog-tech/img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["/blog-tech/img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["/blog-tech/index.html","97592f6be37d05fe965eec9015669d15"],["/blog-tech/js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["/blog-tech/js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["/blog-tech/js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["/blog-tech/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog-tech/js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["/blog-tech/page/2/index.html","3ffc788a090369cb729999fb5951fae7"],["/blog-tech/tags/16PSK/index.html","2b976071402f10c11cd12960e75420d4"],["/blog-tech/tags/1G/index.html","43b24833d41dc2cf436bbd140ffeae1b"],["/blog-tech/tags/2-4G/index.html","571ff941b8076c0bed9fab6c88e5203a"],["/blog-tech/tags/2G/index.html","3c16cfe334145f1ca95373bf31b5df2a"],["/blog-tech/tags/3G/index.html","6fb3807ab33610b3b4b6852b3203a05d"],["/blog-tech/tags/4G/index.html","c56063e0ffebeecbd1a008196cb03586"],["/blog-tech/tags/5G/index.html","55144dba7b0385c8006eac8f68d9fa39"],["/blog-tech/tags/AJAX/index.html","ea9955e724d47cb069e1f72110948c43"],["/blog-tech/tags/AM/index.html","7968da4922340053fdf86e87d3e1b4ea"],["/blog-tech/tags/AMD/index.html","87657e18a71f3eede18450993936e93b"],["/blog-tech/tags/ARP/index.html","c38d4218021b92fb7715d006f73f4636"],["/blog-tech/tags/ARPA/index.html","f3ab6640553ced66b150244343091b2b"],["/blog-tech/tags/ARP攻擊/index.html","82147f83b622df0a04c7536d9e05039e"],["/blog-tech/tags/ARP緩存表/index.html","9c312b938fc93f85393b443808aa005a"],["/blog-tech/tags/ASK/index.html","5fd0648ce58bd8e3071a3e175788b30c"],["/blog-tech/tags/Async/index.html","fd5ff9a32f8672f5578d974b82a2653f"],["/blog-tech/tags/Await/index.html","733a3e55fe929c454b76d9c948439a66"],["/blog-tech/tags/BPSK/index.html","5d38c9d903cad19ed0983662ddfe3e31"],["/blog-tech/tags/Bable/index.html","776e125759b2e53d4f695b4ab248f4de"],["/blog-tech/tags/C/index.html","f31a3afbd39523d19fd85ecbaec2b554"],["/blog-tech/tags/CCITT/index.html","3bfb5d6a656bae60b3c6db1b66d84e81"],["/blog-tech/tags/CDMA/index.html","ce9f87a47913c7242e8b45c49558352a"],["/blog-tech/tags/CI-CD/index.html","bdadafbfcfe9eb06c8c45bb69cf1a705"],["/blog-tech/tags/CI/index.html","3cc39e89d0e7ec9fd24e5db519fc2d62"],["/blog-tech/tags/CMD/index.html","407f5d9625dc42c5de6242d31a3f9635"],["/blog-tech/tags/CORS/index.html","e6ca8f54f27dad5cf10210096c7eb0fc"],["/blog-tech/tags/CRC/index.html","9e94788d67db9144576814ec0add8c93"],["/blog-tech/tags/CSMA-CD/index.html","3827ef4bda1fb30d12d95db6e969e76c"],["/blog-tech/tags/CSMA-CS/index.html","1c1fcd379cd1c510747d6203939000d3"],["/blog-tech/tags/CSS/index.html","2ee4eb921b2a0a730d3a56ae11b254ef"],["/blog-tech/tags/CallBack/index.html","c22cf97c2c0c2bd05c3e1e9514ec9035"],["/blog-tech/tags/CodeStyle/index.html","d1b697332c814f7105577bf6285bdce3"],["/blog-tech/tags/CommonJS/index.html","79732d355a20acfed86f201eb56e9137"],["/blog-tech/tags/DSAP/index.html","723dcdf690fe55f147f877a30e8467d3"],["/blog-tech/tags/ECMA/index.html","bce245904951a121f771bddb29cf1e56"],["/blog-tech/tags/ECMAScript/index.html","e590bd57cb6de7f17da00726723b1c48"],["/blog-tech/tags/ES5/index.html","96ced7c9643e4ee1f2af3a3974dcb04e"],["/blog-tech/tags/ES6/index.html","b264e507833b8b3e72e5f1f19b143090"],["/blog-tech/tags/FDMA/index.html","04499a17d6f92b058dadf0a80ecf5904"],["/blog-tech/tags/FM/index.html","932481b2a5b6bbf7d7a02dbda8bf49fa"],["/blog-tech/tags/FSK/index.html","a4b419483e88c794417acaef97f59d1c"],["/blog-tech/tags/GC/index.html","442295eb9b0b5d3aef06973df10cecb6"],["/blog-tech/tags/Google/index.html","156d073de7ba0cac3dce63f53914e41a"],["/blog-tech/tags/Hoisting/index.html","6173632dbe7328ad90bf24403ed7e397"],["/blog-tech/tags/Html/index.html","bd505f76d1129f85ecc8600ddcc6863c"],["/blog-tech/tags/IE/index.html","cbd32051c1e152aeb6092299a9d8ffe8"],["/blog-tech/tags/IEEE/index.html","5bd060c54e7432f10cbb0e496bc95c97"],["/blog-tech/tags/IEEE802-11/index.html","5d8247a4d3c64aa4719a614671976c3d"],["/blog-tech/tags/IEEE802/index.html","a1b5da4c677e22ce7a59ef6cbd3a6126"],["/blog-tech/tags/ISM/index.html","dd1cb1b3b26e9cf2fbad5c1c0346dc0c"],["/blog-tech/tags/ISO-31-1/index.html","4a8d09e97482553a5d4ff95202c4f43d"],["/blog-tech/tags/ISO/index.html","cfee49a281d3a6c823a63574fa1dbf26"],["/blog-tech/tags/ITU/index.html","328474025446d78bd239919e0d6cecc6"],["/blog-tech/tags/JIT/index.html","02dfe73bd63178855ac6f3192a10d870"],["/blog-tech/tags/JSONP/index.html","61e5b77f62fbc6ef15fa31e565e410c9"],["/blog-tech/tags/JavaScript/index.html","0368cad1507d7f0ddcc97b650aeb9457"],["/blog-tech/tags/LLC/index.html","e00bbdb56e1d1fba52405f1b1c7a2bc7"],["/blog-tech/tags/MAC/index.html","5866cfe228e83c3239fa66444112e4a5"],["/blog-tech/tags/MACAddress/index.html","9b0f065aa3679b328976df3478948808"],["/blog-tech/tags/Mocha/index.html","a2a0541be08593464519517e680cb9c6"],["/blog-tech/tags/NVM/index.html","d211f99961327ad6ab675e01f4b730cd"],["/blog-tech/tags/Netscape/index.html","9f04addd75944cb153ad3215ae0e9713"],["/blog-tech/tags/NodeJS/index.html","23bb56ce55b0efd648da65e42f754ead"],["/blog-tech/tags/OFDM/index.html","e3c763d68b5d907a359dcb3a66a11539"],["/blog-tech/tags/OSI/index.html","c644056957eec79afb9aa65392ad8902"],["/blog-tech/tags/PM/index.html","374b779e680eb4be8fe0f63d56a7f5be"],["/blog-tech/tags/PSK/index.html","76243a8e6023cf3eef8b6ecf932d984a"],["/blog-tech/tags/Promise/index.html","82aff0783b4b13dcf5fc10d953f4529e"],["/blog-tech/tags/Proxy/index.html","fa295958ecc2462b9af11844c1bd042e"],["/blog-tech/tags/QAM/index.html","203ba988bcbf981bce1c2219c2ae3623"],["/blog-tech/tags/QPSK/index.html","93581c4b3619434178dff824377f380b"],["/blog-tech/tags/RJ45/index.html","34efcb30e7906e7a614aa4dc3cbd3866"],["/blog-tech/tags/RS-232C編碼/index.html","23bf7b8b778d8a4a41d7f2b1a9a3a9ce"],["/blog-tech/tags/RequireJS/index.html","fc1a3d9c2063d402e53bfe66fa74579a"],["/blog-tech/tags/SSAP/index.html","ffcfc8834308cb9d627c16e4d688b233"],["/blog-tech/tags/STP/index.html","a43a9d549361f7e550d2238c67b280d7"],["/blog-tech/tags/Scope/index.html","6afaa03ce0e88758b14a5dbded6525dc"],["/blog-tech/tags/ServerJS/index.html","63ce39e1b1b46525c115dbde0d98bdc0"],["/blog-tech/tags/TCP-IP協定/index.html","261a5a586d306bfff127bcbb7f59c623"],["/blog-tech/tags/TDMA/index.html","9b58b104f9e05817a7707761f64264c4"],["/blog-tech/tags/TypeScript/index.html","a112f8d36c4ae33060722e5b64013df5"],["/blog-tech/tags/UTP/index.html","757493f40e15a81c03a79de0b75eb962"],["/blog-tech/tags/Uglify/index.html","c59595d81681b367b834a85ca573b6e8"],["/blog-tech/tags/V8/index.html","f2f71bf3655629d1fa812d7e87eab817"],["/blog-tech/tags/VSCode/index.html","4120bea1163964733254639d52d9ee48"],["/blog-tech/tags/W3C/index.html","0e28823d1730342edc62c4ba13a32aac"],["/blog-tech/tags/WebAssembly/index.html","5a43380aa1a809714ab8260e38978735"],["/blog-tech/tags/WebPack/index.html","dd69b99ad6306ed41ae3dfab559d9660"],["/blog-tech/tags/WebSocket/index.html","391b895341e3e7c28d8aafa50ed633cc"],["/blog-tech/tags/WiFi/index.html","018c41806f9c4032e18af64570619761"],["/blog-tech/tags/WiFi探針/index.html","2ce6cef5a77d3e31165ded8d74fdef60"],["/blog-tech/tags/XMLHttpRequest/index.html","2d158e9982fe5e854fc8b424156faef3"],["/blog-tech/tags/apply/index.html","58dd9df8ccfa8e6762b0455d54bec584"],["/blog-tech/tags/bind/index.html","f46a2264e4788bd0aa052cb64d2ab4cf"],["/blog-tech/tags/call/index.html","63cf4a3bcd16df80cf77f539ea10e255"],["/blog-tech/tags/const/index.html","8b20d4b7ee18901232d13a7a35c65428"],["/blog-tech/tags/export/index.html","401c92960eeaecd24b41823dacaf538c"],["/blog-tech/tags/exports/index.html","7f3c57a1b505c1814c443e1f3c7985bf"],["/blog-tech/tags/import/index.html","7d92a6d26468ade17478dbb84db25933"],["/blog-tech/tags/index.html","04e7082036349e91ba72b0953e7ecea6"],["/blog-tech/tags/jQuery/index.html","769fab1303c8d9c2bb8e47dbde910ab8"],["/blog-tech/tags/let/index.html","43f080a1fe743d21c4b5ab8f1ff4232a"],["/blog-tech/tags/npm/index.html","1e5f9b52c95d6727a47308f74e3f098b"],["/blog-tech/tags/packeage-json/index.html","8c0217fc0dfd5c2083116a30c29f24f3"],["/blog-tech/tags/require/index.html","86769f8282de0b8ee307ccd25d6b46a0"],["/blog-tech/tags/runtime/index.html","6ff6778951da023af133d058c43d2b5f"],["/blog-tech/tags/seaJS/index.html","7856e3db7ec030c2c8e910d2fca34e04"],["/blog-tech/tags/this/index.html","d99aa3691b79d681fc6783f1f64bdc24"],["/blog-tech/tags/tsc/index.html","072a0dc71a90e8c491e1b641b59aa4b3"],["/blog-tech/tags/tsconfig-json/index.html","5e6bc9113566a031611743c8b374b265"],["/blog-tech/tags/var/index.html","e0959ae815ba771bbd2c3af82302f0fc"],["/blog-tech/tags/中頻/index.html","50d1ad23380f14c65169f3f7e0cf2222"],["/blog-tech/tags/交流電/index.html","44dd7a8bf6a5d32d4ebe3edac434132e"],["/blog-tech/tags/人流監控/index.html","aa3198fcd2ab6754f29778d49fbb3ec7"],["/blog-tech/tags/人類/index.html","37e7d2fe6b21d1837fa8b81e14ddf55f"],["/blog-tech/tags/介質/index.html","769185d7614c58d317e930ef158df40e"],["/blog-tech/tags/傳輸層/index.html","2e55b51c1138f4885e4784e8ddc4e85c"],["/blog-tech/tags/光纖/index.html","ded08c8bb48b14e6f4f7f9204d033515"],["/blog-tech/tags/全雙工/index.html","922c7c2207d7b21480ed9f764b91f8eb"],["/blog-tech/tags/前端歷史/index.html","299079fbe13affac6d452df4fce16f47"],["/blog-tech/tags/半雙工/index.html","6b47fd93159cdb6eade5df5a32ebd651"],["/blog-tech/tags/協定/index.html","04aa91ba5b289c2354cd1de44ae471dd"],["/blog-tech/tags/厄斯特/index.html","29c01ca564526201310c50bfee8fb04f"],["/blog-tech/tags/可見光/index.html","7939cca9ed5bf3bbd6fe24712ff482fd"],["/blog-tech/tags/同步/index.html","5a366ab4da4b816e926057c3f6f7a0a4"],["/blog-tech/tags/同軸電纜/index.html","d95433f8232386337b42f52cc9c8e604"],["/blog-tech/tags/單元測試/index.html","a1599d9612a8cc499339e00f9fd2a8d4"],["/blog-tech/tags/單工/index.html","3c746c755c12fe4aac8340ce1728427c"],["/blog-tech/tags/嚴格模式/index.html","cd648c75dadd0ffeaf9e95567f5dcd80"],["/blog-tech/tags/國際電信聯盟/index.html","988429ed02a71974f3063b0056df8928"],["/blog-tech/tags/基頻/index.html","1f85546522d288e25c8d792d7dec95cc"],["/blog-tech/tags/多工/index.html","0f96469e2d00e56520e166cdbd8578d9"],["/blog-tech/tags/大腦/index.html","737d903648de50db846124bea6b50d18"],["/blog-tech/tags/定位輔助/index.html","89224d5d83ce7891a6a05d86cae24cde"],["/blog-tech/tags/實體層/index.html","92dc388e770b505e4ef567e16964d71b"],["/blog-tech/tags/封包交換/index.html","72be247ddaa5c7adca781200637951a6"],["/blog-tech/tags/射頻/index.html","16cfeecebed4c54c445543c0aa32a029"],["/blog-tech/tags/尼安德特人/index.html","0afa98030827a823bb0d8a6e198bf016"],["/blog-tech/tags/差動式曼徹斯特編碼/index.html","0aabeb19c2acc1d9363bf3d4c440528c"],["/blog-tech/tags/差動式零補差編碼/index.html","e01b49b679a19163b7a8c450280662ea"],["/blog-tech/tags/廣告投射/index.html","ee3e44d71ddd7e246b26d1dd1659885a"],["/blog-tech/tags/弱型別/index.html","800e77928094f0714c48be947d1f2e01"],["/blog-tech/tags/強型別/index.html","f95dfc382c3f3d9cbd6135d2599206e9"],["/blog-tech/tags/應用層/index.html","941079209b459dc011b94c5a8fb82c8f"],["/blog-tech/tags/抽象檔案-d-ts/index.html","7450168bbe05f348f5039de2c97740e1"],["/blog-tech/tags/數位/index.html","8b6b361bbcf8cdd837068f110b68cfab"],["/blog-tech/tags/時間/index.html","7aace5c4033ec8d63135ae6c91c5f0d4"],["/blog-tech/tags/智人/index.html","7f8b9a56c5329c3bdb8ab1ab026e06dc"],["/blog-tech/tags/曼徹斯特編碼/index.html","db5067b7ee7d16c37041df05afcc61df"],["/blog-tech/tags/會議層/index.html","f5adbb6f05bd90e27e8ec61b8a0ef3ef"],["/blog-tech/tags/有線通訊/index.html","9ddbd171fcda769a56fb56d8addba3b6"],["/blog-tech/tags/汙染變數/index.html","d50220d4695ea657f3413681ea95b0a9"],["/blog-tech/tags/法拉第/index.html","cfc7dd107b9796591eb1e1ebbe45f6b4"],["/blog-tech/tags/瀏覽器/index.html","b6f5d27377906cc940c4ed6a875a1da5"],["/blog-tech/tags/無線通訊/index.html","27bd930bf630adb463aad1b94c7b19d6"],["/blog-tech/tags/特斯拉/index.html","a2cc31b3c585f52bdf3c9c497629d0fe"],["/blog-tech/tags/異步/index.html","c69a817918686a0c392a0599e386b12e"],["/blog-tech/tags/磁場/index.html","1bd2294d7fbb0e0a87612a558e0126ff"],["/blog-tech/tags/第一次瀏覽器大戰/index.html","61045a89aa559949b6f36d0b085e7754"],["/blog-tech/tags/第六代WiFi/index.html","4f46ae0da02ac3ff1821bdc9a0db367d"],["/blog-tech/tags/網路層/index.html","0de6dca5275a78d6b57bc86970e45348"],["/blog-tech/tags/線路交換/index.html","a227d1e99d9268e0d7c612d755fc40af"],["/blog-tech/tags/緩存/index.html","fcb9bada7b24249bf0731641be7b5bc2"],["/blog-tech/tags/聲波/index.html","789636fd1587bebf7cf7b76583298fb1"],["/blog-tech/tags/能階/index.html","ca01555a64cb3327e7667498c205573d"],["/blog-tech/tags/腳本語言/index.html","66bd9959102872ee8459da22882def76"],["/blog-tech/tags/行為監控/index.html","5eafb6255280b7d4177528716ec67346"],["/blog-tech/tags/表現層/index.html","dd1150effe4d18a7a3375aa9bcb2ea9f"],["/blog-tech/tags/解釋型/index.html","9373a348b63d61ba938579a664b89fd6"],["/blog-tech/tags/詐騙資料/index.html","1bb56166af4315f30098f0dbf43549bd"],["/blog-tech/tags/調變/index.html","d5567874602ef8dc4b73352b15f473b9"],["/blog-tech/tags/資安保護/index.html","02d1f3ed5242b9e44b08481c9762865b"],["/blog-tech/tags/資料鏈結層/index.html","d5c2c6b2b9cd7b1821520daebd46f5b6"],["/blog-tech/tags/跨域/index.html","843e18a3f9aef0c06aeb7621b9acf654"],["/blog-tech/tags/身分證/index.html","1c701efd834ab5d318e6186d838ab5d7"],["/blog-tech/tags/通道訪問控制/index.html","ec5a48a03afd1ab7e63e14185ea52a08"],["/blog-tech/tags/銫原子/index.html","e6992264a4604108fa27a11c2c70b4ec"],["/blog-tech/tags/閉包/index.html","719e20ec80b555775d9e242551adea0a"],["/blog-tech/tags/雙工/index.html","369c5855a27fbea1962436fa2ee0c5d7"],["/blog-tech/tags/雙絞銅線/index.html","06677f6c2d4aa942b15e184d70af0155"],["/blog-tech/tags/雜訊/index.html","bab42b1eda5fd979f8d32fc9d8d770e9"],["/blog-tech/tags/電場/index.html","f4e1fef14054ac797f85280c09b145d7"],["/blog-tech/tags/電磁波/index.html","3ba029757fe10d18c02be759c6a24da9"],["/blog-tech/tags/電視/index.html","8f31cf4796e45232fbf2b8e1e2e253f6"],["/blog-tech/tags/靜態優化/index.html","07b970b8cd512829b2844919967c22b6"],["/blog-tech/tags/頻譜/index.html","1a59f3aafcf490ca68bfcf32ce885d1c"],["/blog-tech/tags/類比/index.html","2e9887115576abcfbf525e9fc40741c1"],["/blog-tech/tags/馬克士威/index.html","c46a15a6560f32dffa3ab8d535d8cfdd"]];
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







