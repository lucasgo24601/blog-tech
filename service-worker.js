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

var precacheConfig = [["/blog-tech2020/02/14/部落格介紹/index.html","468ac5c40ee3a966fc3e1a56f88e74e3"],["/blog-tech2022/06/02/前端P.01 - 網頁三兄弟/index.html","5261de763dab72bd92dcb7230ba83dc6"],["/blog-tech2022/06/02/前端P.02 - ECMA組織/index.html","4c091f2b38a4a77356be4c2d44d8618c"],["/blog-tech2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","b9bf23a30ca7f9e21d8486f8397c2526"],["/blog-tech2022/06/02/前端P.04 - JIT & V8/index.html","c87f4b90e6e909cf40d67853a2394cb3"],["/blog-tech2022/06/02/前端P.05 - TypeScript/index.html","c92629dbc1899fe596204d01192b7819"],["/blog-tech2022/06/02/前端P.06 - WebAssembly/index.html","c1a9e9dc7b999a08f4ebbf72ebf8391c"],["/blog-tech2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","f20a9d024917be6bb4ff90ac44b7cb93"],["/blog-tech2022/06/02/前端P.08 - AJAX & 跨域/index.html","532b4ef10f700ebc140284312fe72138"],["/blog-tech2022/06/02/前端P.09 - 同步和異步/index.html","fbf9e7d170d6b86e847251e7452f5671"],["/blog-tech2022/06/02/前端P.10 - Scope/index.html","c2dfa6c2fa6fa2730d93fd40318d4cdc"],["/blog-tech2022/06/02/前端P.11 - 模組/index.html","54a273f4cd8675f247d4922a1cca7377"],["/blog-tech2022/06/02/前端P.12 - NodeJS/index.html","12bacc9d170389ec47489285cda8db23"],["/blog-tech2022/06/02/前端P.13 - WebPack/index.html","9913576d4741c2de465959c5ad87933d"],["/blog-tech2022/06/02/前端P.14 - 單元測試Mocha/index.html","c2e79c3112d9a85b83c4d6aa81fad16f"],["/blog-tech2022/06/02/讀書P.01 - 人類簡史/index.html","3c927d49a9f65c53061db110ba1386ab"],["/blog-tech2022/06/02/通訊P.01 - 協定/index.html","110a0fb107b2ad79671f890cc7a3dce2"],["/blog-tech2022/06/02/通訊P.02 - OSI七層模型/index.html","203e873c8136b339073dbb28d9a86865"],["/blog-tech2022/06/02/通訊P.03 - 實體層、介質/index.html","c96dffc7fa1b7e3c3d9da07b268e98c4"],["/blog-tech2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","608581d69b6733e9c55998cfb1381d5e"],["/blog-tech2022/06/02/通訊P.05 - 資料鏈結層/index.html","c17088ceb51886d1bfed26477d4ef91a"],["/blog-techabout/index.html","590d328838ec7b91fbf13c5abb77f6d0"],["/blog-techarchives/2020/02/index.html","4068b3c6df39150f8d24a515e8f6a43f"],["/blog-techarchives/2020/index.html","beb4f73b829987d63d62605897aa77c0"],["/blog-techarchives/2022/06/index.html","fe55d1b19bc9e3811ffd49abf18b6b80"],["/blog-techarchives/2022/06/page/2/index.html","f0ac4613a7bf832c2107c4aea396cef8"],["/blog-techarchives/2022/index.html","a9a6f8ec0fe296c1c072225166cfc638"],["/blog-techarchives/2022/page/2/index.html","626d8c46d4c59264eec278fbed20d7d9"],["/blog-techarchives/index.html","ce9ae46bb42408e4d8e492cefe0cd16a"],["/blog-techarchives/page/2/index.html","77650180b521dd12d2b6f88a9459937f"],["/blog-techarchives/page/3/index.html","065db7bd3dcc5816838ed85672d4c5c9"],["/blog-techcategories/index.html","9b9c60a1e96da941f9b5153e4d9b92b2"],["/blog-techcategories/前端系列/index.html","94452457743e0a82e41c20442a216190"],["/blog-techcategories/前端系列/page/2/index.html","d7ce0c565e6268a07f4910aea2b0175d"],["/blog-techcategories/基本文件/index.html","87ba932a29777be790c8f4bec84e3719"],["/blog-techcategories/讀書心得系列/index.html","e61fbfae49f3a893e48ab0a75cd3ad7d"],["/blog-techcategories/通訊協定系列/index.html","6fcb934b9629a08febae02e54d1cb3a6"],["/blog-techcss/index.css","d596cc019db5ad77d44e30d4134e0a21"],["/blog-techcss/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["/blog-techcss/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/blog-techcss/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog-techimg/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog-techimg/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog-techimg/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["/blog-techimg/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog-techimg/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["/blog-techimg/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog-techimg/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog-techimg/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog-techimg/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog-techimg/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["/blog-techimg/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["/blog-techimg/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["/blog-techimg/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["/blog-techimg/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["/blog-techimg/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["/blog-techimg/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["/blog-techimg/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["/blog-techindex.html","164a7991903afba06167256761432749"],["/blog-techjs/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["/blog-techjs/main.js","36ac5c5196d2a4ac259c49270207bf68"],["/blog-techjs/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["/blog-techjs/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog-techjs/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["/blog-techpage/2/index.html","f09a9911742034d9a08afad4bf028292"],["/blog-techpage/3/index.html","e11a0b4cb1fbca2454c9a6e2ffb2102b"],["/blog-techtags/16PSK/index.html","13028f6bb8aba20626fec2bcbd099953"],["/blog-techtags/1G/index.html","3b250b96de3f300f31bb42e3ba4bff8e"],["/blog-techtags/2-4G/index.html","0fe4624017e5b7d9cb14edd5a9184e60"],["/blog-techtags/2G/index.html","4fa51aeaf8a7dc1efcd9aa5ac29ea39a"],["/blog-techtags/3G/index.html","ce624843cb747987c32059b1d3754034"],["/blog-techtags/4G/index.html","b98273f794cc985d58200cac1c7f8244"],["/blog-techtags/5G/index.html","33cc9178c650f4d5153e6eb6dea68692"],["/blog-techtags/AJAX/index.html","0dae633b35202996ab39cd046a353b49"],["/blog-techtags/AM/index.html","2730a09c1f00beb130fb8e2cacb49584"],["/blog-techtags/AMD/index.html","2cbd762cac4920943a2382473c77cf6e"],["/blog-techtags/ARP/index.html","377667ec36642809ce5169d4bdd29c0e"],["/blog-techtags/ARPA/index.html","f20a5a6701fd12de53306265f4c9bba8"],["/blog-techtags/ARP攻擊/index.html","c5b47c064e0a147619a902b131a5a785"],["/blog-techtags/ARP緩存表/index.html","ea7809689e9045ef658f54d99ad14058"],["/blog-techtags/ASK/index.html","e3d5a91b1096e8db902dbe07cfbd255d"],["/blog-techtags/Async/index.html","e42ec8b4274695705e723d28cc34c024"],["/blog-techtags/Await/index.html","e7b24e4145dd7c7bebf11d1c16cd6386"],["/blog-techtags/BPSK/index.html","385d3e9ac1e6c7f0f5ebcaf3d4b88896"],["/blog-techtags/Bable/index.html","071bb46032ecd9eb97581cfc41a4c016"],["/blog-techtags/C/index.html","8c8a0cdef2d3326b461375dcc0bd4a14"],["/blog-techtags/CCITT/index.html","162ab401b6dfd0547aad81921a46895f"],["/blog-techtags/CDMA/index.html","be5933d4700e3e5747c03af7a41e296c"],["/blog-techtags/CI-CD/index.html","da3c997ef8a959ea125a9f918bb349fa"],["/blog-techtags/CI/index.html","356a1603e5fa353e6791bac6c6f67b1e"],["/blog-techtags/CMD/index.html","e6da6ffb2f28b146705379a7854b1b55"],["/blog-techtags/CORS/index.html","b72a6341a52280a623c638fe59396221"],["/blog-techtags/CRC/index.html","f15b6a289e3d2622cbcf5329fddf75ca"],["/blog-techtags/CSMA-CD/index.html","f7bb178b0b3ac43cc43927b88ac58cc3"],["/blog-techtags/CSMA-CS/index.html","0051fa5e2bf862ac407a4458bed2d9cf"],["/blog-techtags/CSS/index.html","eb506fa42bbc72277ba3817644a3c47a"],["/blog-techtags/CallBack/index.html","7f22f3c218d53474aa62b4753f7341e0"],["/blog-techtags/CodeStyle/index.html","b6106ed4f20c0a99498d5ed62d0b6946"],["/blog-techtags/CommonJS/index.html","78d4e37038ca755b43e2ec2f4dc08004"],["/blog-techtags/DSAP/index.html","6d39bd73be98bba84695d0bc032050ab"],["/blog-techtags/ECMA/index.html","e417860fe65e0b371764b25538d63aed"],["/blog-techtags/ECMAScript/index.html","f7e184c7b2f8466aaddab0085c189650"],["/blog-techtags/ES5/index.html","a78e7411557c755d808dc79842703e72"],["/blog-techtags/ES6/index.html","35941e5cb32ddf187812cba3cd1c7c5c"],["/blog-techtags/FDMA/index.html","add65a258edcdf73b160309331450a4b"],["/blog-techtags/FM/index.html","69c5a18b5f732ffe60160140aa3f84ff"],["/blog-techtags/FSK/index.html","0dcc3bec4e0f207ac6ddf8151af77c73"],["/blog-techtags/GC/index.html","673947de46ef2a37de5d675b8be2e467"],["/blog-techtags/Google/index.html","2f52add8e1b262f8ac9f4543a759dcc5"],["/blog-techtags/Hoisting/index.html","94a6ebbcc242568f44fcdbede6c951ab"],["/blog-techtags/Html/index.html","fe517f2eafb852d66a720c7f41851958"],["/blog-techtags/IE/index.html","ff4f6e44f2493022ddd06ba96d249c3c"],["/blog-techtags/IEEE/index.html","19a5ef7ba5ef9d34cb2fd5532bbb17c9"],["/blog-techtags/IEEE802-11/index.html","910bd0eb5179ff6504da4fc50098cb20"],["/blog-techtags/IEEE802/index.html","64413be7238adebf62908393e0bd5f52"],["/blog-techtags/ISM/index.html","676286570104a356fce210ba2c258a85"],["/blog-techtags/ISO-31-1/index.html","ed3a547798de1f36b95538fa29e358f5"],["/blog-techtags/ISO/index.html","add1879480e4628532ed2ab8b70fcaee"],["/blog-techtags/ITU/index.html","9fa872786fa73e3122651a014014a1e4"],["/blog-techtags/JIT/index.html","517507eaec9a4d4828a1b8055b3117e4"],["/blog-techtags/JSONP/index.html","f464baed4764579f24824dbb2ff2067e"],["/blog-techtags/JavaScript/index.html","50e6877a4f02de89dc45e150e6ac6481"],["/blog-techtags/LLC/index.html","f6b926c3c4a077431b3c401d6654e146"],["/blog-techtags/MAC/index.html","a55622c0828e335468c5b1357ce00310"],["/blog-techtags/MACAddress/index.html","6c3360c24319202e68a18237e81132ae"],["/blog-techtags/Mocha/index.html","5b5c1db43d811fd5d2fe23ffb7ce95fb"],["/blog-techtags/NVM/index.html","185ce14d61b3a4143434b53e9a839563"],["/blog-techtags/Netscape/index.html","1043da7b329feb65eadb42acf3bed42a"],["/blog-techtags/NodeJS/index.html","5ed45aedfe7474aab78059e1b72d8f53"],["/blog-techtags/OFDM/index.html","e7bf7c81bc7a99d286c92658df4ad0a3"],["/blog-techtags/OSI/index.html","efca68837bb3e3665c3126848c1ba020"],["/blog-techtags/PM/index.html","ac9e14cb74e222b8b8bac7ea61d4f434"],["/blog-techtags/PSK/index.html","58f35d78637605f8d8e700063a51dfa2"],["/blog-techtags/Promise/index.html","be5eb7ae9d713739483347fae696542b"],["/blog-techtags/Proxy/index.html","2521592f16c521cbcdd32ce275ed6628"],["/blog-techtags/QAM/index.html","b8180d0caff8afa4d93aeb10ba1bfab6"],["/blog-techtags/QPSK/index.html","368d382ffaedf8c03a2cb6aebf9c2d1c"],["/blog-techtags/RJ45/index.html","074dac8898c258b4d818d8f0931372ad"],["/blog-techtags/RS-232C編碼/index.html","b9af26719b7236a81254df2d756856d4"],["/blog-techtags/RequireJS/index.html","4f238a5d1e8de2903711c332f5380f5a"],["/blog-techtags/SSAP/index.html","6c40816b9e1c8b2a150169d8202eee17"],["/blog-techtags/STP/index.html","e50a47c1ca99576777d0b1f306f449f6"],["/blog-techtags/Scope/index.html","b781ab3ecffa53165b5a5092ed9fec8a"],["/blog-techtags/ServerJS/index.html","9943c797e976aed4f4f54cae9442d297"],["/blog-techtags/TCP-IP協定/index.html","923ac8669cac8a196e47a0d986110de7"],["/blog-techtags/TDMA/index.html","87617d712a73273d1675275da16d1b09"],["/blog-techtags/TypeScript/index.html","1d5c1d659c642f2a63341f46789329fb"],["/blog-techtags/UTP/index.html","883e3d58ecb2b0374304a0e1f0d942b5"],["/blog-techtags/Uglify/index.html","2058f214631d51fc90640220ad68acff"],["/blog-techtags/V8/index.html","ad712d2b5f2fb9d35a94330ccd565d09"],["/blog-techtags/VSCode/index.html","ee5edde26626dd24fc26e98e632c4598"],["/blog-techtags/W3C/index.html","44592145f81ef991a1a93fcd29cfaa04"],["/blog-techtags/WebAssembly/index.html","99594f7cb90f1f97d71830a75cf7e638"],["/blog-techtags/WebPack/index.html","0cca6c918ceb15f5c2018441238f5b5f"],["/blog-techtags/WebSocket/index.html","4a6cc8bd7fa5931e29d78cbc7e8d2f5a"],["/blog-techtags/WiFi/index.html","ba5bde4896c44c74db69b1939deb3ee9"],["/blog-techtags/WiFi探針/index.html","14464fc9843121cbcb6aef76aee471f9"],["/blog-techtags/XMLHttpRequest/index.html","684aa4ff178b731576505fac2ffd24f6"],["/blog-techtags/apply/index.html","184810994672348e7562b5cdfc88f453"],["/blog-techtags/bind/index.html","29ced3f92b52f56c1b7533340ec74f5f"],["/blog-techtags/call/index.html","cd359803bf7b573848699fea54aa11a4"],["/blog-techtags/const/index.html","5f9275c112fd0e1d7cfc426ca9ea3170"],["/blog-techtags/export/index.html","4f28b67cf88f8924e6bcc143f63d42ad"],["/blog-techtags/exports/index.html","1c596322fd2032b9a967d01479431da2"],["/blog-techtags/import/index.html","fe771b552b908f9e601294a4b374f3a7"],["/blog-techtags/index.html","a4f40b0a64514ca6bbf04beb94ab7efc"],["/blog-techtags/jQuery/index.html","7c501b86ea842b52500a71f948a9b61e"],["/blog-techtags/let/index.html","29eb988ca0d4635ca6b50a162b974a3a"],["/blog-techtags/npm/index.html","b88702518452e36bf8ac3ecd61713bf1"],["/blog-techtags/packeage-json/index.html","f2b57f7a84f43b5d150fbf8f8519e24b"],["/blog-techtags/require/index.html","ee565dcf9522811e80f44c4e5c5127f2"],["/blog-techtags/runtime/index.html","725cc8a236b3821a36cfbc39eb0711ca"],["/blog-techtags/seaJS/index.html","e7f186e990098f25a45a38bed6634e71"],["/blog-techtags/this/index.html","86e6457ed0f08e84e9a3eed6cad73f9b"],["/blog-techtags/tsc/index.html","3ce112831401692660925072eefa48ae"],["/blog-techtags/tsconfig-json/index.html","29c102509804ce03dd08c999c47f3e99"],["/blog-techtags/var/index.html","d69c460889f311158a87214f9e7d3f8d"],["/blog-techtags/中頻/index.html","2a442932d30eea264fe7640b28da49bd"],["/blog-techtags/交流電/index.html","4d9f5010684104f0270a11514f450dee"],["/blog-techtags/人流監控/index.html","ff783790babd79bc0ee5fca470f93b64"],["/blog-techtags/人類/index.html","159ef921e28395e6659f3ddb2f31503b"],["/blog-techtags/介質/index.html","69938c01edd74351e94eba593cd887f1"],["/blog-techtags/傳輸層/index.html","bd62297d90ff5e3a311ba0cba17dfd50"],["/blog-techtags/光纖/index.html","3b971d98e99a2b888da913f1b9d3b82e"],["/blog-techtags/全雙工/index.html","3bc570a8faaa195fd4f581c549f2fd78"],["/blog-techtags/前端歷史/index.html","a9d95740a0a487cc217774c9e8c4e61a"],["/blog-techtags/半雙工/index.html","cb0462879316338a9b110b33837da3f0"],["/blog-techtags/協定/index.html","56b758425861e7d023f3915c96edbaec"],["/blog-techtags/厄斯特/index.html","c0de9032961f93b6fa38a208e49da359"],["/blog-techtags/可見光/index.html","84753adbbe2373ce95427209281c1ecd"],["/blog-techtags/同步/index.html","924b5c6020314cb04540739dbc914e71"],["/blog-techtags/同軸電纜/index.html","1233b77c534063180ceae079bdcb2a1d"],["/blog-techtags/單元測試/index.html","fdf741b0e76471935294ef2fa325c571"],["/blog-techtags/單工/index.html","05a17a62735860780e3fb303b1408d85"],["/blog-techtags/嚴格模式/index.html","3e65ff58cb0c6d19632a3451af1a9f89"],["/blog-techtags/國際電信聯盟/index.html","c676a3bf4dd67517c5d95b063da71f52"],["/blog-techtags/基頻/index.html","bc8906abcb2d70492cff538f09b59498"],["/blog-techtags/多工/index.html","af35d4927c33e660efe788b7672fdb57"],["/blog-techtags/大腦/index.html","8424bd3eca8d5320b633cfd3271b1593"],["/blog-techtags/定位輔助/index.html","44403065a09bb81fd5c9a1eb7e030d9e"],["/blog-techtags/實體層/index.html","6f1b2aa79fc2279409203bd25cb9ce23"],["/blog-techtags/封包交換/index.html","ae9c3c35c8c71216aa267553d583ce46"],["/blog-techtags/射頻/index.html","980056bbd6ba7b5d531225ad922f838e"],["/blog-techtags/尼安德特人/index.html","e2837fec2cce831d4f2f726f73c072d7"],["/blog-techtags/差動式曼徹斯特編碼/index.html","7ccac289e9dfb08dfd74d00c583c10d0"],["/blog-techtags/差動式零補差編碼/index.html","c64b1224612e1c34ead198523a6b05f8"],["/blog-techtags/廣告投射/index.html","fd55daf33748084d8eb15cdada568f54"],["/blog-techtags/弱型別/index.html","1ca08b6e688ea7997ba12e159d152f1c"],["/blog-techtags/強型別/index.html","f01614cac939df68ccd3caa0eea64cd5"],["/blog-techtags/應用層/index.html","15405d811798f02749a0454a1d05718b"],["/blog-techtags/抽象檔案-d-ts/index.html","97a6c8b41208a307383b1cd3d196ca5e"],["/blog-techtags/數位/index.html","10e3f68a2b92497ec8ae7cee062331fd"],["/blog-techtags/時間/index.html","c7c6955b9db33e026813103ac76a2845"],["/blog-techtags/智人/index.html","681823db5dda0ff239aca7540944ab36"],["/blog-techtags/曼徹斯特編碼/index.html","ad7f06661c986c8a8a34eb1ab8b1d764"],["/blog-techtags/會議層/index.html","db8d0c62741cfb6dd7b0f085b8e6f652"],["/blog-techtags/有線通訊/index.html","0894516aa0ba8de644bc92be2288fbaa"],["/blog-techtags/汙染變數/index.html","fa07326f195e26dd717aa541e359bc35"],["/blog-techtags/法拉第/index.html","b9ec901035e234125213ab0dc5183854"],["/blog-techtags/瀏覽器/index.html","8b5371eceb1da522fece19babca5b9af"],["/blog-techtags/無線通訊/index.html","37ae13f2f0c3ee5a3c1ec05dc46eb2f9"],["/blog-techtags/特斯拉/index.html","5c770c97a17194663e08d15838b0abea"],["/blog-techtags/異步/index.html","4134507fb8d1bdfe23dcffbbfa8fd1f1"],["/blog-techtags/磁場/index.html","6cdd53d4cde507f74044a6b1a2181dd5"],["/blog-techtags/第一次瀏覽器大戰/index.html","ee2991bb977623922e9309b9df7e3c0f"],["/blog-techtags/第六代WiFi/index.html","f319f95381a35a4728335c0d520f9dc3"],["/blog-techtags/網路層/index.html","1537e7ad257718337b2ad5c6cce6c2de"],["/blog-techtags/線路交換/index.html","cece5f970639f671a929b3f0303fc6fe"],["/blog-techtags/緩存/index.html","874454c3e0d7c0fea5e2d87ef43481d6"],["/blog-techtags/聲波/index.html","0bda533385f6321f0ab5acd1eed40390"],["/blog-techtags/能階/index.html","587e00eab1029ede0b6705789718ea15"],["/blog-techtags/腳本語言/index.html","2114c866681943dd65600932e082c53f"],["/blog-techtags/行為監控/index.html","14d1d0dd72bc3543b5d6212dfb219cfe"],["/blog-techtags/表現層/index.html","f3d60b8260e7fe6e76ec94549bac99e3"],["/blog-techtags/解釋型/index.html","bf92a36e94bc06f62a1eef802998cde8"],["/blog-techtags/詐騙資料/index.html","64d6094173c881b551bd8804fad0e54b"],["/blog-techtags/調變/index.html","8ace0cc40e4d8131a000ce96c6624b6a"],["/blog-techtags/資安保護/index.html","36889d84d840821a84e7eeeb25529fb3"],["/blog-techtags/資料鏈結層/index.html","cbc43481580b80047956d7dc8aa9f527"],["/blog-techtags/跨域/index.html","7d38f2e7ab83046d8525dbda457d60c5"],["/blog-techtags/身分證/index.html","504695a8f9652ebab483ef63f6387194"],["/blog-techtags/通道訪問控制/index.html","c30e2d7a22ec77b070eb98ebb2c8acc7"],["/blog-techtags/銫原子/index.html","8399ae13ba5eb8fa96d333f40908a96f"],["/blog-techtags/閉包/index.html","0e5de0a2d1a3809d747131330ebe840c"],["/blog-techtags/雙工/index.html","e94d89263db05ffb24980d98eead4bde"],["/blog-techtags/雙絞銅線/index.html","f00ae99c33fb4a0d85fcbe2579f889f6"],["/blog-techtags/雜訊/index.html","c44fff1f24ea9dc6715ce47c7c913dcf"],["/blog-techtags/電場/index.html","a313da022d8d8da783eaea0a299d04aa"],["/blog-techtags/電磁波/index.html","b484d98fc52040e6e423a767e8de3807"],["/blog-techtags/電視/index.html","f7e2135ac5f86da4e241bfb785466630"],["/blog-techtags/靜態優化/index.html","ab9a14c30ecc8c0ccae57b74857b6c58"],["/blog-techtags/頻譜/index.html","893325991ad9c5a00ac62c9e44305495"],["/blog-techtags/類比/index.html","e6fedee33f86a2516eecc30de79745d4"],["/blog-techtags/馬克士威/index.html","28f3eddaa44d51af07ef786caca12b99"]];
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







