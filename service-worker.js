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

var precacheConfig = [["/blog-tech2020/02/14/部落格介紹/index.html","a9b5f3fe73fabb61567eab20e761c518"],["/blog-tech2022/06/02/前端P.01 - 網頁三兄弟/index.html","795ef3fa1d121b42fcf5ec2318e6c06d"],["/blog-tech2022/06/02/前端P.02 - ECMA組織/index.html","66248601546a56e9611c58ad452102db"],["/blog-tech2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","41bb62d9b067420726adcb9ca696ad1a"],["/blog-tech2022/06/02/前端P.04 - JIT & V8/index.html","bf4a193784ca3bd3e5815c4affc2c4a3"],["/blog-tech2022/06/02/前端P.05 - TypeScript/index.html","1a9288808f54401d3a37bfc3d6b1bd4d"],["/blog-tech2022/06/02/前端P.06 - WebAssembly/index.html","d487db86ebfb6f33db4928c0bbd5baab"],["/blog-tech2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","05043e0423ac8ab88040af5b1234aa16"],["/blog-tech2022/06/02/前端P.08 - AJAX & 跨域/index.html","a542d25813978e918c9219a07dcf3b0d"],["/blog-tech2022/06/02/前端P.09 - 同步和異步/index.html","86d4b9f81e3e01f01979538afc7b47c5"],["/blog-tech2022/06/02/前端P.10 - Scope/index.html","db3cd1f34eedbcae23577a22d47a0f57"],["/blog-tech2022/06/02/前端P.11 - 模組/index.html","7dc3409431e27eed3ee382341142a283"],["/blog-tech2022/06/02/前端P.12 - NodeJS/index.html","56df3abe7cf19d2608ce6957ea766d86"],["/blog-tech2022/06/02/前端P.13 - WebPack/index.html","9d4f633be57b84cacc6c092ca2935b98"],["/blog-tech2022/06/02/前端P.14 - 單元測試Mocha/index.html","8bd9501c8dfc5650e346bb4c2a9587ed"],["/blog-tech2022/06/02/讀書P.01 - 人類簡史/index.html","f7189852ec1377963e70c72bb210c80b"],["/blog-tech2022/06/02/通訊P.01 - 協定/index.html","ecd5b4eb6609a1d5a94e2ab8b6245271"],["/blog-tech2022/06/02/通訊P.02 - OSI七層模型/index.html","c8aba8542092f9e7f16b3a1920a77e51"],["/blog-tech2022/06/02/通訊P.03 - 實體層、介質/index.html","1074e5b9038de3b0bfb77fb2cdd163be"],["/blog-tech2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","fd62ecb5ad1524d7dd5f369130452bf3"],["/blog-tech2022/06/02/通訊P.05 - 資料鏈結層/index.html","62bfe86dd386554391d2ddc73819b1de"],["/blog-techabout/index.html","dd046e47710616fe8853cbc8130a4040"],["/blog-techarchives/2020/02/index.html","2dd2eba52741b8d0dfd03d404a82d2a5"],["/blog-techarchives/2020/index.html","2504540f07fbb87aa2ff385c10c86850"],["/blog-techarchives/2022/06/index.html","df75f1829b775003bdfdc94919e3e193"],["/blog-techarchives/2022/06/page/2/index.html","f8b2cbe5f882696f5d27dbd696e2ec81"],["/blog-techarchives/2022/index.html","26298403492bb4101a3ec913942cb97d"],["/blog-techarchives/2022/page/2/index.html","15834c467325467de149f44cba78a948"],["/blog-techarchives/index.html","56a41ccc1fb0a859abbd922dabcc8c7c"],["/blog-techarchives/page/2/index.html","6d5dd0ab4cdd6382f3f13fde364b7bbc"],["/blog-techarchives/page/3/index.html","4e8139fda2ad04510f199069f96073ee"],["/blog-techcategories/index.html","c9692c9a4b7a98bf76aff9bd140c9f4f"],["/blog-techcategories/前端系列/index.html","150b6703d800f73adf67cb7975b55c57"],["/blog-techcategories/前端系列/page/2/index.html","a1aabbf8bc6eb5dee50b7c4175290fca"],["/blog-techcategories/基本文件/index.html","0a0184e0b1e742edb8bcbf3a35d754ec"],["/blog-techcategories/讀書心得系列/index.html","e52a12bad9fa52b49a29428b67649e6d"],["/blog-techcategories/通訊協定系列/index.html","c1bd7dc01ca6f765eaadc25a67cd748f"],["/blog-techcss/index.css","d596cc019db5ad77d44e30d4134e0a21"],["/blog-techcss/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["/blog-techcss/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/blog-techcss/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog-techimg/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog-techimg/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog-techimg/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["/blog-techimg/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog-techimg/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["/blog-techimg/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog-techimg/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog-techimg/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog-techimg/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog-techimg/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["/blog-techimg/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["/blog-techimg/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["/blog-techimg/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["/blog-techimg/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["/blog-techimg/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["/blog-techimg/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["/blog-techimg/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["/blog-techindex.html","1bbb905702a6c10c835f3010f345a7a8"],["/blog-techjs/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["/blog-techjs/main.js","36ac5c5196d2a4ac259c49270207bf68"],["/blog-techjs/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["/blog-techjs/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog-techjs/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["/blog-techpage/2/index.html","6d49324302d856d771918884cd250d30"],["/blog-techpage/3/index.html","fc6bd69982ef0fcbc6ccf672de7c7a86"],["/blog-techtags/16PSK/index.html","e08ce8dfe3ab1ea96049290389e60661"],["/blog-techtags/1G/index.html","2b5f7a0fd6f18ab62b2a825f53db2376"],["/blog-techtags/2-4G/index.html","3adaa357b11643f8a530fca268d48a59"],["/blog-techtags/2G/index.html","78da99320414b2f922de38c2faa7433b"],["/blog-techtags/3G/index.html","0ff072ecba2af91ef04a7076eb4133ed"],["/blog-techtags/4G/index.html","0cddb1e2a22ef64e60f9555ac10612c6"],["/blog-techtags/5G/index.html","157aff3a5c930ad311da6f07f36cc348"],["/blog-techtags/AJAX/index.html","3490cad0c2953cef5ead9a2b0ab163de"],["/blog-techtags/AM/index.html","fb29ec6d7a4213e3fc663299db536e1f"],["/blog-techtags/AMD/index.html","9783dd1498ce16460339c8fdadc0bde9"],["/blog-techtags/ARP/index.html","db11cc2552ae91a04b2060b2e8e1c24c"],["/blog-techtags/ARPA/index.html","abfa00b7a1c36e74d68fb091a19fd2aa"],["/blog-techtags/ARP攻擊/index.html","3425f9ce7a9beb96bfcc1c588afed7f9"],["/blog-techtags/ARP緩存表/index.html","0242d30bb0c7f20d050abe8c5c04d9b7"],["/blog-techtags/ASK/index.html","cf45a52f17cd7d24b0ce25b72b3d7005"],["/blog-techtags/Async/index.html","7556ecc52929b3c4eb1dbf3e91490ad3"],["/blog-techtags/Await/index.html","9106a77979ddff7fb18eea151871aac6"],["/blog-techtags/BPSK/index.html","47ffe577fc55ad22a8a3d76404a601d1"],["/blog-techtags/Bable/index.html","cef72843fc867e5d49b1ef247dcdfb38"],["/blog-techtags/C/index.html","f257b8488d92c7867c607ea424f46627"],["/blog-techtags/CCITT/index.html","0b131d0db569240d4c9e2ca2b402e534"],["/blog-techtags/CDMA/index.html","c9b787b9602e30ce9c5f7d4409e1318d"],["/blog-techtags/CI-CD/index.html","942cee9e7dbcbcba8b50e57f459fcf5d"],["/blog-techtags/CI/index.html","aa4e2fadb9c2f88825ef969373c8df77"],["/blog-techtags/CMD/index.html","3d2c38ea52c0149e705fde0de10dbff1"],["/blog-techtags/CORS/index.html","4b0837bc2ce1d040d0d360f7f96508e1"],["/blog-techtags/CRC/index.html","33838baf9f57311ed4096dc61ca982ff"],["/blog-techtags/CSMA-CD/index.html","cebcc1d870289a88574b55f770869b84"],["/blog-techtags/CSMA-CS/index.html","4ba981ac092196030332805b5b5b59db"],["/blog-techtags/CSS/index.html","dbed63d4595946a4f815aba8187f46e6"],["/blog-techtags/CallBack/index.html","42967643e2cdb07f097e36069d9a4f0b"],["/blog-techtags/CodeStyle/index.html","68f49a2756079ac484a242dfe63f5733"],["/blog-techtags/CommonJS/index.html","b2ae9a5ff7a30f609a53c36614168901"],["/blog-techtags/DSAP/index.html","482bb4e57b18cec477c19b45cab2cb7c"],["/blog-techtags/ECMA/index.html","852f42dd12587a12919e16a064c8c8ca"],["/blog-techtags/ECMAScript/index.html","68dd5e68621f8f6658437384c0ea6868"],["/blog-techtags/ES5/index.html","e56d1f2c2c80f43470f0178ec70268cf"],["/blog-techtags/ES6/index.html","4e8de409d00b42c56c69682b435396c1"],["/blog-techtags/FDMA/index.html","48bfc8b8d83c42fc408c48855f46acce"],["/blog-techtags/FM/index.html","1c2dc6318451d00b4cbb645865a17680"],["/blog-techtags/FSK/index.html","ed8e91e031629872e4f60e92284ad92f"],["/blog-techtags/GC/index.html","f5e30eccd4750011993c583ba69dfec5"],["/blog-techtags/Google/index.html","650e3d568779216922fee3fe3b78277d"],["/blog-techtags/HTML/index.html","78535cf0d569f0956100d6a191db610d"],["/blog-techtags/Hoisting/index.html","535ed45628cf0a7b338890c714f2cea9"],["/blog-techtags/IE/index.html","23c67cc4b0c0113a5d1ef089c95ca2d3"],["/blog-techtags/IEEE/index.html","7c161690dfddba6e82590c11cb52a2cd"],["/blog-techtags/IEEE802-11/index.html","600f5cca9a78e27acb81926818eba75f"],["/blog-techtags/IEEE802/index.html","3c4b55b4d1d8e38f76d1f8aa86df55f0"],["/blog-techtags/ISM/index.html","387cb56fcf7f748044a4791a762602f6"],["/blog-techtags/ISO-31-1/index.html","47cff2fddedd0a5f12331d841bfcfe6c"],["/blog-techtags/ISO/index.html","e6e5b9b0c3b1cd9dbb84029975720c27"],["/blog-techtags/ITU/index.html","344717a3f7b589d88eb936c69e663117"],["/blog-techtags/JIT/index.html","b7fb2f8df023bca0c3309fbf7d66f981"],["/blog-techtags/JSONP/index.html","6b1982cb536abf72631a5991fd742fa9"],["/blog-techtags/JavaScript/index.html","a13672fe5d55bf374ffa34e99506670e"],["/blog-techtags/LLC/index.html","1d662ed37152ded52ac83961a140fb04"],["/blog-techtags/MAC/index.html","27412238672c799140af992b4bbc529b"],["/blog-techtags/MACAddress/index.html","ab6f7e8ee7735a7c04c16a079ded57be"],["/blog-techtags/Mocha/index.html","6df0795ba6c7f9aca2bc25d6437e3970"],["/blog-techtags/NVM/index.html","46ef9de61ec7974f46662230f51ddf73"],["/blog-techtags/Netscape/index.html","7521edd6bd8e7b24c358973acdb7b675"],["/blog-techtags/NodeJS/index.html","b2f556003d49e1c1f3ffbf7e36bdd6ca"],["/blog-techtags/OFDM/index.html","37225f0bf6d85592990a8c357ca8318f"],["/blog-techtags/OSI/index.html","2e06a934e7b1e5fadae518cb0d6f320a"],["/blog-techtags/PM/index.html","a1828d2e9b97629ae548e8d793f5e6c1"],["/blog-techtags/PSK/index.html","e4f565b751912ca4e4a2d201174c2658"],["/blog-techtags/Promise/index.html","68ed8ab9ba1bf2bd5d12b770ec4e8d71"],["/blog-techtags/Proxy/index.html","ae08d1cc318159bd597ae9766f735a8f"],["/blog-techtags/QAM/index.html","3d6b454971f1027a06107476fc1b237f"],["/blog-techtags/QPSK/index.html","acadcf6a9425de432ec32c61a74501d3"],["/blog-techtags/RJ45/index.html","67f58bd4cc16bd7c29d59a9f8296a7f7"],["/blog-techtags/RS-232C編碼/index.html","ef7c3b2afe248848fa34bf1b7a328e79"],["/blog-techtags/RequireJS/index.html","74ddfb741b7dca66c34e8ed626a82d6e"],["/blog-techtags/SSAP/index.html","80b3c668aca8cc4295dc37faaa10611a"],["/blog-techtags/STP/index.html","00b43f50f84f35e09e611fd6c6537b63"],["/blog-techtags/Scope/index.html","dd0ce8722a3c3aeec2b9488aa707062c"],["/blog-techtags/ServerJS/index.html","0be72d55cd804347e559ddefd35997f0"],["/blog-techtags/TCP-IP協定/index.html","930b75d0a0306c5a6edceb28dfb9a50e"],["/blog-techtags/TDMA/index.html","916b34dbc411b4cc800002814726951f"],["/blog-techtags/TypeScript/index.html","7ad011a48018859e6412631faa29445d"],["/blog-techtags/UTP/index.html","be311022ee98abbbcc1aea6af5c8011b"],["/blog-techtags/Uglify/index.html","83ce48e881dbbee15ee00d3e5a517f63"],["/blog-techtags/V8/index.html","88987c38cc6c966b28c277be5ab24d3b"],["/blog-techtags/VSCode/index.html","43f49123949a8f34b86a1f68ef66526b"],["/blog-techtags/W3C/index.html","19b4f3485d99d28c04118b7fa86d5825"],["/blog-techtags/WebAssembly/index.html","6defc508d109793d35865a899b605cd1"],["/blog-techtags/WebPack/index.html","3f955fc119d1c6cf793778ad7df02b18"],["/blog-techtags/WebSocket/index.html","85438017f11d52b148943d3d32dc6cb3"],["/blog-techtags/WiFi/index.html","8050efc03f017e5eba5c4dff1b82be58"],["/blog-techtags/WiFi探針/index.html","a92f0bd0c46ea59eb0ab8236a33d3fe7"],["/blog-techtags/XMLHttpRequest/index.html","a3ba6a980ff45529b28e8eafda4e757a"],["/blog-techtags/apply/index.html","01716291408bfc0926ad8054af63715d"],["/blog-techtags/bind/index.html","76138f047b4fbdf9bf3bf944b7850b05"],["/blog-techtags/call/index.html","f4729a6c21d604785c656306124a9e3e"],["/blog-techtags/const/index.html","89d67c1c559685f9bbd737acb71c8bb7"],["/blog-techtags/export/index.html","6cafdc11e3ebb9e8dd641db86ef4ae55"],["/blog-techtags/exports/index.html","1acddaf97f6d1f181cf285f7a2c8992d"],["/blog-techtags/import/index.html","5be88b88810123a82d9f7f244769dae1"],["/blog-techtags/index.html","a5bed4ed0540e206128872649589ebb5"],["/blog-techtags/jQuery/index.html","cdee2630b71892f19496ca92b932680d"],["/blog-techtags/let/index.html","60a3f9a041f627742d4eda314b25a19a"],["/blog-techtags/npm/index.html","623aab7f37111c6a910e7af28bd6f064"],["/blog-techtags/packeage-json/index.html","ec29028b9865d307a672a75c178a1cdb"],["/blog-techtags/require/index.html","6d3604ec13e0fcb9654a6c78cd1d988c"],["/blog-techtags/runtime/index.html","77f48c542bbf1797eee89b3f1b36fb79"],["/blog-techtags/seaJS/index.html","1b3163f5f30d855c1116a44626d79b57"],["/blog-techtags/this/index.html","6d216f542cd78c667a4dee69d6351ac2"],["/blog-techtags/tsc/index.html","4a4b3ba5e8a98f68e6416f8408d66b83"],["/blog-techtags/tsconfig-json/index.html","a843635c301c7c94589167fd77c354d2"],["/blog-techtags/var/index.html","a58106921a06a45dd2b1e69fcba223a2"],["/blog-techtags/中頻/index.html","c45bfd1eb57820f0b5f45b12f091541c"],["/blog-techtags/交流電/index.html","f488346ca26fdb7b1b35b87e37b34d14"],["/blog-techtags/人流監控/index.html","07c246ae1fbbb3cfef8defe4adfe7056"],["/blog-techtags/人類/index.html","5ec2265745cade36ac288853806291d2"],["/blog-techtags/介質/index.html","0d06cccaf68d0bc938810c0c2ce8ab8e"],["/blog-techtags/傳輸層/index.html","14c7f3853f402aee88c5d419affbad15"],["/blog-techtags/光纖/index.html","5b99dfe31373bcad4d47a1ff177f6366"],["/blog-techtags/全雙工/index.html","766544da2d9a4511b1f16a439764efe2"],["/blog-techtags/前端歷史/index.html","b1fffea5f492b340e0d87880b979c448"],["/blog-techtags/半雙工/index.html","1ed35461ab9d58e01a4c380bd013a6a6"],["/blog-techtags/協定/index.html","4c9151b995694ffbec5ae56d673d5760"],["/blog-techtags/厄斯特/index.html","f822ee3a2db4c4f52000b9980a18f479"],["/blog-techtags/可見光/index.html","743b9607b52c00dabb61fdfd6443ca41"],["/blog-techtags/同步/index.html","9c68f879fe4d481c02ff20c404c1f3ea"],["/blog-techtags/同軸電纜/index.html","3e5a5f7aacf46b4c4eba6c7aaa907438"],["/blog-techtags/單元測試/index.html","d1b0a67ff77ac6aac3cc2d3f302922ca"],["/blog-techtags/單工/index.html","bff89d50d308e80958e34191d98896e2"],["/blog-techtags/嚴格模式/index.html","64e07605bc63e7ca8b265afcaab0d27b"],["/blog-techtags/國際電信聯盟/index.html","d3eb39584e7958263c62831325e38c63"],["/blog-techtags/基頻/index.html","ce5841b1498de13ae12861e47acd3482"],["/blog-techtags/多工/index.html","ed54da6a62af46ae09143942baee0c69"],["/blog-techtags/大腦/index.html","4334856880d97a0618ede9ce28bdd2c1"],["/blog-techtags/定位輔助/index.html","46ef13aada1217c4287796306bbb5d91"],["/blog-techtags/實體層/index.html","34f5c788fb082ca9b8ebe7541fafb10a"],["/blog-techtags/封包交換/index.html","2614699852522a4d9a9c44f94483a88a"],["/blog-techtags/射頻/index.html","9796ad8384707eb681d899320a5075ea"],["/blog-techtags/尼安德特人/index.html","43ebea0057c9bac856f11d628c973065"],["/blog-techtags/差動式曼徹斯特編碼/index.html","748680be71de86eee78201337289e1b2"],["/blog-techtags/差動式零補差編碼/index.html","733ff7dcc33600e86dd03e469aeaf594"],["/blog-techtags/廣告投射/index.html","08cc529d41b7d99596405381cc7e98de"],["/blog-techtags/弱型別/index.html","42a49b49445b99ab3f4d6c297da0771a"],["/blog-techtags/強型別/index.html","fd6c565ae5e8aa1d5d50996cd2dc9be6"],["/blog-techtags/應用層/index.html","a67d79edb9ce458fa95751f3701ec49c"],["/blog-techtags/抽象檔案-d-ts/index.html","889378697a15d6fb6334d72f64efc3e4"],["/blog-techtags/數位/index.html","083ee84f54efb250fa759355eab17f37"],["/blog-techtags/時間/index.html","a3c8d62b95efa90beb27ee0369da9cab"],["/blog-techtags/智人/index.html","77e7929254ee7598493654d9953fedb8"],["/blog-techtags/曼徹斯特編碼/index.html","9461d63c437b660f7607148e6fea2a28"],["/blog-techtags/會議層/index.html","f4e0391f974d6703b0322449ce06d682"],["/blog-techtags/有線通訊/index.html","f6d5844130c6259dcf8e430acbdce915"],["/blog-techtags/汙染變數/index.html","2d1b186ff0992126df3f9f4ae60e8c69"],["/blog-techtags/法拉第/index.html","b2692c54fc960bd432f4bfc5971cfe49"],["/blog-techtags/瀏覽器/index.html","1d0125a113a4dc9f9508ee2e055acd80"],["/blog-techtags/無線通訊/index.html","af677e5f59a1df496a548061b142c2a8"],["/blog-techtags/特斯拉/index.html","fc978bc5ff37c7f268e4e6cd22d2cd83"],["/blog-techtags/異步/index.html","ba09106f4a143fdd593a2617ff3682ca"],["/blog-techtags/磁場/index.html","90947e8db2dde474cba0c9d234fb301a"],["/blog-techtags/第一次瀏覽器大戰/index.html","76ca058321eae5111e8588e71603bc12"],["/blog-techtags/第六代WiFi/index.html","89ddf7ddf8cf96e977c99d5683576066"],["/blog-techtags/網路層/index.html","0e6f07fe36ae20adacf03b76400c812d"],["/blog-techtags/線路交換/index.html","2d16ab595beeb6e28960892dc2d2fefe"],["/blog-techtags/緩存/index.html","a1588b17ebab95a418b7c15bbfac1d3d"],["/blog-techtags/聲波/index.html","3c6fa95b404fcd54088934f5b3e8c838"],["/blog-techtags/能階/index.html","bae0b7c5b9a5f9da9f4270f59245d0ba"],["/blog-techtags/腳本語言/index.html","57a36680e2d08fed1dac563942121eae"],["/blog-techtags/行為監控/index.html","cc07d02979d65fc9585041d7421e07c4"],["/blog-techtags/表現層/index.html","4005eec2a08af8d2a0610fbf30e46bd6"],["/blog-techtags/解釋型/index.html","5f42294eb81d686fa2c396dce8ca8842"],["/blog-techtags/詐騙資料/index.html","c63d22c8f49eec677c47d0aa62f0030d"],["/blog-techtags/調變/index.html","390147ffcdef9fbd7ade217e44b71dc2"],["/blog-techtags/資安保護/index.html","8771055d8951c2e992a045919fd8929a"],["/blog-techtags/資料鏈結層/index.html","03e067eb405bb7f4c6603f7f14756735"],["/blog-techtags/跨域/index.html","fb455d00516472e3bf8bb34d6e90fe30"],["/blog-techtags/身分證/index.html","2b6b86d5c163f9aa424a7469569263bf"],["/blog-techtags/通道訪問控制/index.html","1693b03cdaef5386e690454b60f99d5a"],["/blog-techtags/銫原子/index.html","84e8da96a0adba176e224780805bfe4c"],["/blog-techtags/閉包/index.html","568626fe7c169c2c7c28680cbce3d419"],["/blog-techtags/雙工/index.html","ca6271a6742ae91c0d19e11891e9169b"],["/blog-techtags/雙絞銅線/index.html","838a03b5f9d6e6ee82693976b42f09db"],["/blog-techtags/雜訊/index.html","92eb1376c49d36d1caccb7ad28ca95c8"],["/blog-techtags/電場/index.html","c1fb238c9478c38540c7c7b01cba33d2"],["/blog-techtags/電磁波/index.html","090d2c0c50ea7b257ec7e47244bc0c07"],["/blog-techtags/電視/index.html","f94ac0b2c9509c32ce64f3ae58eb0576"],["/blog-techtags/靜態優化/index.html","2df5b3cc7ceba0421377f2b53229bdab"],["/blog-techtags/頻譜/index.html","44aea4fcd16a5cc3a15f58cbabbde2ae"],["/blog-techtags/類比/index.html","465cfa911450424f7bff7db52563873a"],["/blog-techtags/馬克士威/index.html","08f6e5bff63394776fb1d60dcc112bbe"]];
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







