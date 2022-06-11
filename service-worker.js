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

var precacheConfig = [["/blog-tech/2020/02/14/部落格介紹/index.html","610cb6ed3c20a2a7b0848a52722c2195"],["/blog-tech/2022/06/02/前端P.01 - 網頁三兄弟/index.html","01e400e3913e24783a123fec21f5ce4d"],["/blog-tech/2022/06/02/前端P.02 - ECMA組織/index.html","35420b2e3c95841c476341ecbf45f7d6"],["/blog-tech/2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","00f2d151296462f88fb371403175e0e2"],["/blog-tech/2022/06/02/前端P.04 - JIT & V8/index.html","f7dcb33255dd572a6a5a5b4f5b6b9eed"],["/blog-tech/2022/06/02/前端P.05 - TypeScript/index.html","79a41c75c556e4768c14493d76d03154"],["/blog-tech/2022/06/02/前端P.06 - WebAssembly/index.html","f8fc1b76c48b645cade5556044cf9624"],["/blog-tech/2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","7db6c146e09042a3686336428fc1e99c"],["/blog-tech/2022/06/02/前端P.08 - AJAX & 跨域/index.html","03a305a544ed2ee57cc0cc299630222a"],["/blog-tech/2022/06/02/前端P.09 - 同步和異步/index.html","5640482d9693bb7cb6e3b2243f7dc8da"],["/blog-tech/2022/06/02/前端P.10 - Scope/index.html","ec4c44123de6397df8e837a36ec31cbf"],["/blog-tech/2022/06/02/前端P.11 - 模組/index.html","195ecb46979fe30cb4e3d5363292736f"],["/blog-tech/2022/06/02/前端P.12 - NodeJS/index.html","f6c9711fc9afc670a74b1e437ed21f2c"],["/blog-tech/2022/06/02/前端P.13 - WebPack/index.html","c8dce83620fb6a432339e7f96a9cba8f"],["/blog-tech/2022/06/02/前端P.14 - 單元測試Mocha/index.html","da9391de8eb8eab6e9a7664f2af1c326"],["/blog-tech/2022/06/02/讀書P.01 - 人類簡史/index.html","b1bd4a81a90d3a368fb31e8a5d5e472f"],["/blog-tech/2022/06/02/通訊P.01 - 協定/index.html","417eb0627ff94d14a6e6e11aaf0d19aa"],["/blog-tech/2022/06/02/通訊P.02 - OSI七層模型/index.html","5906895c71bd8054e42b377b52d54321"],["/blog-tech/2022/06/02/通訊P.03 - 實體層、介質/index.html","c6e6509836b9ea8e417bb26162d4e249"],["/blog-tech/2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","14cd07db03478adeb4b97ce13168a8de"],["/blog-tech/2022/06/02/通訊P.05 - 資料鏈結層/index.html","30057c8f6030fd28011252060b1dffe6"],["/blog-tech/about/index.html","f19fe54bf39dcbbeca0b9559628f8767"],["/blog-tech/archives/2020/02/index.html","ec76a275c14cceaae487d7057954ad56"],["/blog-tech/archives/2020/index.html","3dc33125cfe6d1d9e876a071133aae02"],["/blog-tech/archives/2022/06/index.html","beb4a08b0b1906bbd34f294dc3c42f39"],["/blog-tech/archives/2022/06/page/2/index.html","e689d085cc0adc0728e4d7581c6aca90"],["/blog-tech/archives/2022/index.html","d336b460940271ded6311bbe4bf7e271"],["/blog-tech/archives/2022/page/2/index.html","46ca657025b08c3f522981bb11438f7c"],["/blog-tech/archives/index.html","992e2929ef7ea907fcf8e48c97c00e47"],["/blog-tech/archives/page/2/index.html","8a89d4df5f18327e9271d5f9f0600454"],["/blog-tech/archives/page/3/index.html","eb5f99fd0914d7f7fd923c874082461b"],["/blog-tech/categories/index.html","ac6fbec0823e7efe0969193cc4f333ec"],["/blog-tech/categories/前端系列/index.html","9d68fc47cd3de43b9907245ee31f5dca"],["/blog-tech/categories/前端系列/page/2/index.html","24c3583b40c153d975cc0853cdef1eed"],["/blog-tech/categories/基本文件/index.html","88428ae993eca7ebc8c4fb8ba5881292"],["/blog-tech/categories/讀書心得系列/index.html","869c5f5c4ab1b8c8b906aa84d3865043"],["/blog-tech/categories/通訊協定系列/index.html","7bb92d535581bb2a7e54caf8dd2a4dab"],["/blog-tech/css/index.css","d596cc019db5ad77d44e30d4134e0a21"],["/blog-tech/css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["/blog-tech/css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/blog-tech/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog-tech/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog-tech/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog-tech/img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["/blog-tech/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog-tech/img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["/blog-tech/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog-tech/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog-tech/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog-tech/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog-tech/img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["/blog-tech/img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["/blog-tech/img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["/blog-tech/img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["/blog-tech/img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["/blog-tech/img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["/blog-tech/img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["/blog-tech/img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["/blog-tech/index.html","58f481a999245cacf4e56e7a5c202631"],["/blog-tech/js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["/blog-tech/js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["/blog-tech/js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["/blog-tech/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog-tech/js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["/blog-tech/page/2/index.html","f64272f238308ad0eaf52095443166d2"],["/blog-tech/tags/16PSK/index.html","c6ed2250f2c6f17a595d5ae9882607f2"],["/blog-tech/tags/1G/index.html","808dfd8d1042037f1064bb54fadca510"],["/blog-tech/tags/2-4G/index.html","3130de1c70df6ccddff92fc82552f9aa"],["/blog-tech/tags/2G/index.html","9d3dc41c07b43d5cf450ae1da197e7b4"],["/blog-tech/tags/3G/index.html","1ca84070c3be6fea348e104456479f1d"],["/blog-tech/tags/4G/index.html","f9f057dbf32d2ffff1420c8e8bc4e114"],["/blog-tech/tags/5G/index.html","248777e322a2851d7c9bef91d79a94f4"],["/blog-tech/tags/AJAX/index.html","6802c8909c38c77238033634d24105ab"],["/blog-tech/tags/AM/index.html","f8f6a8673ac3082685c71ffb249e3d02"],["/blog-tech/tags/AMD/index.html","01b74b1e116fa26a65a9e3a0cb1ae064"],["/blog-tech/tags/ARP/index.html","97ccf23b545c33087647c8dd6e1caeea"],["/blog-tech/tags/ARPA/index.html","0a1820917c7c6aeb5c6f096d4b873195"],["/blog-tech/tags/ARP攻擊/index.html","5e74444830a1a88bb9799fa4906120f7"],["/blog-tech/tags/ARP緩存表/index.html","754b95d6ba550fb238bd9aba364c9f5b"],["/blog-tech/tags/ASK/index.html","53d8ac321128bd31ffe12389c0c350e5"],["/blog-tech/tags/Async/index.html","43a4dd304eee899d11766947434f465d"],["/blog-tech/tags/Await/index.html","3b480997e7e8ebe0359ffd05edc220f1"],["/blog-tech/tags/BPSK/index.html","2703b6fc99cb1f2d8892cce15b54c6df"],["/blog-tech/tags/Bable/index.html","ae75821991e3d09648f5fb4b5f661f7e"],["/blog-tech/tags/C/index.html","e17f8e8a668bdbe5fb0b880217e5272b"],["/blog-tech/tags/CCITT/index.html","f4f4918acf739535ef3988fe982b24b1"],["/blog-tech/tags/CDMA/index.html","6720f52ee7f7ce4180bae07f0ac463a9"],["/blog-tech/tags/CI-CD/index.html","952c3d42e9ca91eda912d19798e9168e"],["/blog-tech/tags/CI/index.html","b1851acccd26619d6ef1febfee02dd38"],["/blog-tech/tags/CMD/index.html","ac120f88f7e3770491310345e8fc4187"],["/blog-tech/tags/CORS/index.html","be2ff322c8e89dc2238c61b4868786a6"],["/blog-tech/tags/CRC/index.html","40fa9695bfaa2366e5ef4a44132fadc8"],["/blog-tech/tags/CSMA-CD/index.html","b94442d2c30458a75da695c981f3be20"],["/blog-tech/tags/CSMA-CS/index.html","51ba5d527487d9fabc8c0bfacd53cf1c"],["/blog-tech/tags/CSS/index.html","12a570a40bf310af05e27f6ad8378322"],["/blog-tech/tags/CallBack/index.html","34f96475e78e55a15a626fe985a3462f"],["/blog-tech/tags/CodeStyle/index.html","0a10c5c65fa950d5e7f109f4adbe86f1"],["/blog-tech/tags/CommonJS/index.html","f678519d6cb336826f5cb467c4dca684"],["/blog-tech/tags/DSAP/index.html","fa0b595470d5b246f150e60b435f5443"],["/blog-tech/tags/ECMA/index.html","a2dac6b8fb23dd2bf5e468c3a660eb22"],["/blog-tech/tags/ECMAScript/index.html","49387ff26a95dfe250a30bb9e6f44c86"],["/blog-tech/tags/ES5/index.html","ee3763b5db5914c98020b08eb95cf55e"],["/blog-tech/tags/ES6/index.html","2bac4b102bc35e810637a07cd00eb214"],["/blog-tech/tags/FDMA/index.html","fcad8cdc6931b35f9a84dcb53728e43c"],["/blog-tech/tags/FM/index.html","30da436ef6789e7426d53ee1c786947b"],["/blog-tech/tags/FSK/index.html","d0052f14d0a449960b6ddec26881f6d3"],["/blog-tech/tags/GC/index.html","d9017e39959081f217c2fac436930cd8"],["/blog-tech/tags/Google/index.html","b1c9edfda2cad602e82513f6e651de69"],["/blog-tech/tags/Hoisting/index.html","a2b4ac0e7a3aa8c91916487c31876730"],["/blog-tech/tags/Html/index.html","b0eb55771e20edcdff3fcd1da19020d1"],["/blog-tech/tags/IE/index.html","827e0668e877be67cb1cdea935ea5c21"],["/blog-tech/tags/IEEE/index.html","451a1882ef07bfa3bbde0c9da2e000c3"],["/blog-tech/tags/IEEE802-11/index.html","b39f9e41de85b207d62994a91d313c9e"],["/blog-tech/tags/IEEE802/index.html","d506cc52d355d88a7111e18759952b6b"],["/blog-tech/tags/ISM/index.html","4c021ff6cb3ba6698ba9fc1c9a4c3e81"],["/blog-tech/tags/ISO-31-1/index.html","a16c765a90816c419d14bb2f925adfdf"],["/blog-tech/tags/ISO/index.html","c407b782cf3046827ef469f56ddcf597"],["/blog-tech/tags/ITU/index.html","fc5f47dc656afbae38f6d5df0862c439"],["/blog-tech/tags/JIT/index.html","f3c45884d04f582555619c1758f5b3a2"],["/blog-tech/tags/JSONP/index.html","809c6a66fbbb183add18f52cbc553c98"],["/blog-tech/tags/JavaScript/index.html","97e814671963507c2636abcda181cb0d"],["/blog-tech/tags/LLC/index.html","ab2f1d69564f663020c0fe5d2b884789"],["/blog-tech/tags/MAC/index.html","c835448ae88ce4d8067fe446add23d34"],["/blog-tech/tags/MACAddress/index.html","1456b37a5630ba5e8f8b50d99910595e"],["/blog-tech/tags/Mocha/index.html","22306c11e70e91cfc285c24078517bca"],["/blog-tech/tags/NVM/index.html","95e882ba79784ec388c9d8dd73362a6c"],["/blog-tech/tags/Netscape/index.html","7281a98092ec8f4ce1526ad97685af52"],["/blog-tech/tags/NodeJS/index.html","4168a3005e4ad54ebb6280eaef7942a0"],["/blog-tech/tags/OFDM/index.html","907ea96622225dd71a0289b7ea1fef40"],["/blog-tech/tags/OSI/index.html","25e5c2a7a38feb33558b1e4a5e4773fc"],["/blog-tech/tags/PM/index.html","6835b295167d0e825e6137fb3a17d894"],["/blog-tech/tags/PSK/index.html","cc1205e2b70a6dd60fbf5dc602a648e5"],["/blog-tech/tags/Promise/index.html","4a8601c5f5190f83613cf98aa4e8d3e5"],["/blog-tech/tags/Proxy/index.html","d625a484a6e1bf0f4c2a4bfe7f4a6fdb"],["/blog-tech/tags/QAM/index.html","64a4d26b4a5b7124b5580815c68cccd9"],["/blog-tech/tags/QPSK/index.html","9da56b6695241d8e9aafc3b80d4fee08"],["/blog-tech/tags/RJ45/index.html","7f4351261d7ae6282e9965f583818df1"],["/blog-tech/tags/RS-232C編碼/index.html","faa89453d759c77b29f09b3f80515e38"],["/blog-tech/tags/RequireJS/index.html","15b190e566dc67362480bf0d348e25a3"],["/blog-tech/tags/SSAP/index.html","4d9e27fbdb92b3706372f606dd362461"],["/blog-tech/tags/STP/index.html","6549452ec86cea949380706e8396eda2"],["/blog-tech/tags/Scope/index.html","2767e7e6eba0e1db381ce3fc3e7c3145"],["/blog-tech/tags/ServerJS/index.html","539d137bc739c228c372ad732f220514"],["/blog-tech/tags/TCP-IP協定/index.html","e07ae2ac691ab7368a3903c65dd3c8ba"],["/blog-tech/tags/TDMA/index.html","807b71c97dd1ebb1e68545f332f579f7"],["/blog-tech/tags/TypeScript/index.html","14e06c38aaafcd43f18b58395479d1c7"],["/blog-tech/tags/UTP/index.html","6740552eb498855952c7bb5af06b7c46"],["/blog-tech/tags/Uglify/index.html","aa6f366e6974989834ea046f09fb77b4"],["/blog-tech/tags/V8/index.html","3ef1be91668beecc0e7af66088674a54"],["/blog-tech/tags/VSCode/index.html","5a3940aededeb55be97392c4acbe3f31"],["/blog-tech/tags/W3C/index.html","7ff89680958816669106e73cfc19b5b4"],["/blog-tech/tags/WebAssembly/index.html","05b65bef640ee9fcc610572c5ef74956"],["/blog-tech/tags/WebPack/index.html","09a6f20fc0ed6d6ac5ffa8969ebb42d2"],["/blog-tech/tags/WebSocket/index.html","24f500c68ffce754f46e523237729b75"],["/blog-tech/tags/WiFi/index.html","dcf17c601263680531199f5b8d885866"],["/blog-tech/tags/WiFi探針/index.html","9d8c95481e344ff3a29b385bc7a25757"],["/blog-tech/tags/XMLHttpRequest/index.html","6d97a464f393a69e2a3b11e2cc907fe4"],["/blog-tech/tags/apply/index.html","c86dda119925cb1bc241a9ffb93d5495"],["/blog-tech/tags/bind/index.html","82db0d894fc261307534cdb71bf8258a"],["/blog-tech/tags/call/index.html","8967a6d8b09f46ec1b2b66d16599b545"],["/blog-tech/tags/const/index.html","2134bb3e4768b5489460b1ddf8ec145b"],["/blog-tech/tags/export/index.html","0f9312ccde1622e992a1c70f4eef3e01"],["/blog-tech/tags/exports/index.html","e4b33c7a76bbff17f893a69c6f7c4ac7"],["/blog-tech/tags/import/index.html","6c0d2547118bf4a333948220cc6f176c"],["/blog-tech/tags/index.html","d597a9d1c33689a7a05a3de1af4b3863"],["/blog-tech/tags/jQuery/index.html","cca0a97f91e8ed385a6647eb4ba4c7c8"],["/blog-tech/tags/let/index.html","e3a9dc28ee92630010a79170df65a523"],["/blog-tech/tags/npm/index.html","652a569ad1ff605b82be7f5b5461a46a"],["/blog-tech/tags/packeage-json/index.html","bc018238a9189851c2a429d6b8a63f17"],["/blog-tech/tags/require/index.html","b028f32f40869394b3db0506dee01045"],["/blog-tech/tags/runtime/index.html","920de9b7228742abd6f5d1c560fe4890"],["/blog-tech/tags/seaJS/index.html","fbeda0d97d14730993d1bcc9be1b2cfc"],["/blog-tech/tags/this/index.html","b465c3e65bdb532cc6b1e38de08960b2"],["/blog-tech/tags/tsc/index.html","a3346e9f6c6016b8868f138a58d39a0b"],["/blog-tech/tags/tsconfig-json/index.html","135d8c604344815f18f0e34116f161bd"],["/blog-tech/tags/var/index.html","d10924f622f2e307ce1698f7f76c4f55"],["/blog-tech/tags/中頻/index.html","118b5228e1fb4c1c8502674db879a199"],["/blog-tech/tags/交流電/index.html","b6d0f868cb37b35c737ef6164bf1fb74"],["/blog-tech/tags/人流監控/index.html","aee31fbba78e6b6bb851a2ef89da5e63"],["/blog-tech/tags/人類/index.html","0d91af226a397176a8ccbf50ce11e0ef"],["/blog-tech/tags/介質/index.html","48db4501e836f381ae54389240d675d6"],["/blog-tech/tags/傳輸層/index.html","4a4d00e05d1ebb7c578976741b26d963"],["/blog-tech/tags/光纖/index.html","eb23414ba66239fb7401f1b84d302083"],["/blog-tech/tags/全雙工/index.html","766fabdb03cb30528dbe4bf2a599194f"],["/blog-tech/tags/前端歷史/index.html","e49579dfb4172a2d4a4e8191fa9f131f"],["/blog-tech/tags/半雙工/index.html","c35d0e77c9b3c9c9c3e4ebe276d5a7b6"],["/blog-tech/tags/協定/index.html","f0882d8db139074798453bde7f0f478c"],["/blog-tech/tags/厄斯特/index.html","9798e2cdd22d21880502a258bafd33fb"],["/blog-tech/tags/可見光/index.html","b19dc47901746d3cc5d554c31b3da98d"],["/blog-tech/tags/同步/index.html","33a15d012293321987dc2cd87e12a18c"],["/blog-tech/tags/同軸電纜/index.html","369112df214345d918d1f80b905940e0"],["/blog-tech/tags/單元測試/index.html","c89acd3ab05185e771c1b9649fe8e107"],["/blog-tech/tags/單工/index.html","c48731bbdd70e8f062322e67a77f8c27"],["/blog-tech/tags/嚴格模式/index.html","d372cf1ff7b45c4485a54c94cc3b3015"],["/blog-tech/tags/國際電信聯盟/index.html","b93df4395bf33c541724aa7923983ebe"],["/blog-tech/tags/基頻/index.html","6d1b817387df4b085c243c0e90ff869b"],["/blog-tech/tags/多工/index.html","e42a80e84543cdd4829e3391e937058d"],["/blog-tech/tags/大腦/index.html","2e7fa2a39b42cd7a4aa4c5cd4028b692"],["/blog-tech/tags/定位輔助/index.html","b47593141f3d58c9ad17604da619b15c"],["/blog-tech/tags/實體層/index.html","3631bdb120cbf2cec01bb1afe1eb2289"],["/blog-tech/tags/封包交換/index.html","5510375904b348a13bfbe45ad2467084"],["/blog-tech/tags/射頻/index.html","cf576638beeca8ef2567c3ffec10d04e"],["/blog-tech/tags/尼安德特人/index.html","e0f81c762cb3dbfcbe7f80669631442d"],["/blog-tech/tags/差動式曼徹斯特編碼/index.html","a5a567a99d5d11f24d95fb8ac418c156"],["/blog-tech/tags/差動式零補差編碼/index.html","31c0d76642d9263381adc53aaa32079e"],["/blog-tech/tags/廣告投射/index.html","cdfb07017b122bbc202e573206e86cbd"],["/blog-tech/tags/弱型別/index.html","4cd80325d324579dffc3018fc1afc049"],["/blog-tech/tags/強型別/index.html","590500c2c65098754f39cf5f5a008287"],["/blog-tech/tags/應用層/index.html","0800b764ec070d80d5242423b9ad51b2"],["/blog-tech/tags/抽象檔案-d-ts/index.html","63fefad65ff1790ee9d564726bf21c43"],["/blog-tech/tags/數位/index.html","eb2a2e6747851bb163cdbfb34db6de59"],["/blog-tech/tags/時間/index.html","e0a4cdb903ce01dca644dbfcf9c541e7"],["/blog-tech/tags/智人/index.html","97f7a8faf81090713dfd355193a14776"],["/blog-tech/tags/曼徹斯特編碼/index.html","c5912cba5b369ee13787c11d6454e19f"],["/blog-tech/tags/會議層/index.html","23f27aca67ece1c98ef06604b8806a79"],["/blog-tech/tags/有線通訊/index.html","68c5ef789bbb3eccababddd4b66ee380"],["/blog-tech/tags/汙染變數/index.html","5035aa31a740f3cb88dfbd00399143de"],["/blog-tech/tags/法拉第/index.html","b20499dfabe9e9ae5759e39d7982698f"],["/blog-tech/tags/瀏覽器/index.html","62af75256a3ea8a55061ee2ec7e840ce"],["/blog-tech/tags/無線通訊/index.html","0b85ce46cd03ecd1a5ab10d2f491d4fe"],["/blog-tech/tags/特斯拉/index.html","a73d5227074c13dd0ca1e2d7afa9249c"],["/blog-tech/tags/異步/index.html","3bd5ed8d82398c97091012dd8151736c"],["/blog-tech/tags/磁場/index.html","0552673e13bbea55c2ef0f1c0a4b98cb"],["/blog-tech/tags/第一次瀏覽器大戰/index.html","eeb00fe21d02e86b494c7660d970d4e7"],["/blog-tech/tags/第六代WiFi/index.html","13ae43bc90a537dcfa743dee2efa05f8"],["/blog-tech/tags/網路層/index.html","6529dc9507800d0b365e0c5b812cf2e7"],["/blog-tech/tags/線路交換/index.html","dd3b0588f0f1baf9dcc95fbee7a760c2"],["/blog-tech/tags/緩存/index.html","68a9a5ed839e052417c00116c73bec20"],["/blog-tech/tags/聲波/index.html","77719ef148dd7efb02f8143c434ba91b"],["/blog-tech/tags/能階/index.html","afaed665c13de86369ba657140af3ae0"],["/blog-tech/tags/腳本語言/index.html","755d82d3cd548e3ddcdab78bfa0c65db"],["/blog-tech/tags/行為監控/index.html","bc29d35286a8b675a68fd354747ff522"],["/blog-tech/tags/表現層/index.html","4b5ec9a84c1130f0ab87d10eb1843d51"],["/blog-tech/tags/解釋型/index.html","946217f873d0d2406c8d7285b3231135"],["/blog-tech/tags/詐騙資料/index.html","c09f75ca400903e4d72a183e4ebeac15"],["/blog-tech/tags/調變/index.html","10cfa593b4a031d5167ebef118ba312b"],["/blog-tech/tags/資安保護/index.html","a529e754757581c3eb98a14c2d49c5a5"],["/blog-tech/tags/資料鏈結層/index.html","93db5713c40761592482a372339d04c8"],["/blog-tech/tags/跨域/index.html","b77db5a31ce47f0cb70cf9b40e0367aa"],["/blog-tech/tags/身分證/index.html","8b0aca43ceffa891b8dbb9204504b559"],["/blog-tech/tags/通道訪問控制/index.html","c0d3ba3966f8d8ef3f9b7c84273c6d98"],["/blog-tech/tags/銫原子/index.html","4ab5effeee089114bb7258ba725f93a2"],["/blog-tech/tags/閉包/index.html","c7493b946fa5cccfed2c589a1f3f3bc1"],["/blog-tech/tags/雙工/index.html","5486c1d99fc5afb628a7a89396d3f654"],["/blog-tech/tags/雙絞銅線/index.html","70de71eb3f9b9e0c985729c865d1c7e5"],["/blog-tech/tags/雜訊/index.html","5beb75f000d486631a5e73b2becca334"],["/blog-tech/tags/電場/index.html","d8d45a55bf414ed8d2338295c70117ba"],["/blog-tech/tags/電磁波/index.html","ec0f50783514d5451e594bd17d64de3f"],["/blog-tech/tags/電視/index.html","d03764197422f3cf2fc34d9738e98ed4"],["/blog-tech/tags/靜態優化/index.html","8876a60ca756b7863a6230bbc0d8c51d"],["/blog-tech/tags/頻譜/index.html","502bc692d3f2b29e4ee0c661b262f0a9"],["/blog-tech/tags/類比/index.html","9668e3eeaaace27615b032a0c14beeef"],["/blog-tech/tags/馬克士威/index.html","86fa77fae13feb5b43fc03d97925b815"]];
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







