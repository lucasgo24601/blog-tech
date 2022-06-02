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

var precacheConfig = [["/blog-tech2020/02/14/部落格介紹/index.html","468ac5c40ee3a966fc3e1a56f88e74e3"],["/blog-tech2022/06/02/前端P.01 - 網頁三兄弟/index.html","5261de763dab72bd92dcb7230ba83dc6"],["/blog-tech2022/06/02/前端P.02 - ECMA組織/index.html","bdd6eb28b4031732ed91fe6a76c827ec"],["/blog-tech2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","550dc7394fe953231b0488b68141ccff"],["/blog-tech2022/06/02/前端P.04 - JIT & V8/index.html","8ad565af0726ea9664acda42b8668932"],["/blog-tech2022/06/02/前端P.05 - TypeScript/index.html","5630baa89544450215b641f49ba4fccf"],["/blog-tech2022/06/02/前端P.06 - WebAssembly/index.html","a4e03bb0d5f15a4b4d83f85c6a556161"],["/blog-tech2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","f20a9d024917be6bb4ff90ac44b7cb93"],["/blog-tech2022/06/02/前端P.08 - AJAX & 跨域/index.html","016aef19fb07a59eeed86b1847872c2b"],["/blog-tech2022/06/02/前端P.09 - 同步和異步/index.html","d7d9d2eec64ef0fa5d5b1b4d8ff202aa"],["/blog-tech2022/06/02/前端P.10 - Scope/index.html","01fe7ff4ba847b2dcba383673d4ee729"],["/blog-tech2022/06/02/前端P.11 - 模組/index.html","8b13e4ebb8ff99a1043bceb63d4ac018"],["/blog-tech2022/06/02/前端P.12 - NodeJS/index.html","12bacc9d170389ec47489285cda8db23"],["/blog-tech2022/06/02/前端P.13 - WebPack/index.html","462cc622573398dc3985ad0e8f475c46"],["/blog-tech2022/06/02/前端P.14 - 單元測試Mocha/index.html","10c8e59e1b1506fda92157955ab51740"],["/blog-tech2022/06/02/讀書P.01 - 人類簡史/index.html","3c927d49a9f65c53061db110ba1386ab"],["/blog-tech2022/06/02/通訊P.01 - 協定/index.html","110a0fb107b2ad79671f890cc7a3dce2"],["/blog-tech2022/06/02/通訊P.02 - OSI七層模型/index.html","203e873c8136b339073dbb28d9a86865"],["/blog-tech2022/06/02/通訊P.03 - 實體層、介質/index.html","c96dffc7fa1b7e3c3d9da07b268e98c4"],["/blog-tech2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","608581d69b6733e9c55998cfb1381d5e"],["/blog-tech2022/06/02/通訊P.05 - 資料鏈結層/index.html","c17088ceb51886d1bfed26477d4ef91a"],["/blog-techabout/index.html","3ce59478c34dad2f6a77019b38aac462"],["/blog-techarchives/2020/02/index.html","2dc24335cad66828ab17b3eff59ff4d4"],["/blog-techarchives/2020/index.html","7db7f9a1e41fac19d263382c2ed21dc3"],["/blog-techarchives/2022/06/index.html","fa858ba6677ffe25dd0f8899fc329bb0"],["/blog-techarchives/2022/06/page/2/index.html","1e8335009a322fc62b0a78e3507f432f"],["/blog-techarchives/2022/index.html","cb0555b3b9210ec338e08b41992bda97"],["/blog-techarchives/2022/page/2/index.html","0af34f699ea96252768c46373de61315"],["/blog-techarchives/index.html","80ac32dc91a1aee88c51438773c8ed11"],["/blog-techarchives/page/2/index.html","92a7483d134e1a1428420d6be3dec6f5"],["/blog-techarchives/page/3/index.html","5cefc9720cf4826415b2b297cd518521"],["/blog-techcategories/index.html","b4756238dad5610e0b9cf2c8437d5589"],["/blog-techcategories/前端系列/index.html","992ffc0f78e0949b741621bd7219b97a"],["/blog-techcategories/前端系列/page/2/index.html","3ca0a57890025479d9ae7fb31bc0323e"],["/blog-techcategories/基本文件/index.html","0c4efc8d8dd157764fdcd68749335b65"],["/blog-techcategories/讀書心得系列/index.html","68a699a61417a7902c762d04110ff65c"],["/blog-techcategories/通訊協定系列/index.html","24cad3f7839a73fcc5caf3cce944a325"],["/blog-techcss/index.css","d596cc019db5ad77d44e30d4134e0a21"],["/blog-techcss/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["/blog-techcss/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/blog-techcss/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog-techimg/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog-techimg/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog-techimg/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["/blog-techimg/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog-techimg/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["/blog-techimg/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog-techimg/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog-techimg/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog-techimg/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog-techimg/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["/blog-techimg/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["/blog-techimg/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["/blog-techimg/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["/blog-techimg/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["/blog-techimg/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["/blog-techimg/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["/blog-techimg/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["/blog-techindex.html","2e3bcd92a6bc68876c791ab128384ac2"],["/blog-techjs/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["/blog-techjs/main.js","36ac5c5196d2a4ac259c49270207bf68"],["/blog-techjs/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["/blog-techjs/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog-techjs/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["/blog-techpage/2/index.html","3813faab1d4090418cc7f22911d26b43"],["/blog-techpage/3/index.html","be437e6bc6ca162a2148bee1d514856f"],["/blog-techtags/16PSK/index.html","97f12430fe63f3e69b0a6ee70f1cca2a"],["/blog-techtags/1G/index.html","350196e00b8fc200a8649471940dea35"],["/blog-techtags/2-4G/index.html","f2199dfb73b2d3ed02ab93ff302f57b1"],["/blog-techtags/2G/index.html","299e5307afe75a4297c9fc568ca0bdab"],["/blog-techtags/3G/index.html","63d38c5c91a3d32d4c54331aede7b60e"],["/blog-techtags/4G/index.html","33b48f4da27d815e281de71bd6a2858a"],["/blog-techtags/5G/index.html","2c352075b7e2a76c65b0ab8d77311e41"],["/blog-techtags/AJAX/index.html","f804a6950b8899bcadeab75f0517f1c7"],["/blog-techtags/AM/index.html","72871af7344f4b6c0c44550a404d693e"],["/blog-techtags/AMD/index.html","ce810cd4bbee9b544e998ee2f2e22619"],["/blog-techtags/ARP/index.html","5b075a4585d8ce29bb928836fa537d47"],["/blog-techtags/ARPA/index.html","c40de2cee8e9c0c743cd793a79e39668"],["/blog-techtags/ARP攻擊/index.html","34b263d9bb3008cc185cb96842684f5a"],["/blog-techtags/ARP緩存表/index.html","4be27c9d4430a164132aa1566b575977"],["/blog-techtags/ASK/index.html","2e327aef281547d71052af2744d79e9a"],["/blog-techtags/Async/index.html","f58453ee1434ace1a829974a8a663a89"],["/blog-techtags/Await/index.html","5786b9d3a596cb2ccff4139df6093995"],["/blog-techtags/BPSK/index.html","416c804cb6117108e1a776b2afc42637"],["/blog-techtags/Bable/index.html","22732555738f634cca39204e101f43b4"],["/blog-techtags/C/index.html","cea86b6f9e0c5901e95aa6879013606f"],["/blog-techtags/CCITT/index.html","7e3624997619947946966fd62c55bf8f"],["/blog-techtags/CDMA/index.html","b7f8c30147083758e90be4b3b46b943a"],["/blog-techtags/CI-CD/index.html","a24b48ab472291ec475ff3fd1547cf69"],["/blog-techtags/CI/index.html","de1b1e6a14a69d46c4f396103de96793"],["/blog-techtags/CMD/index.html","098085a9c84bf48ea7575ce237849b0e"],["/blog-techtags/CORS/index.html","2cd59fde67ddbfe4f70b5e0282d1fbf4"],["/blog-techtags/CRC/index.html","49d720b77c9c5050d6d4cd8492d4fd0f"],["/blog-techtags/CSMA-CD/index.html","123b581aefbb9b0337ff3bc0fb29f230"],["/blog-techtags/CSMA-CS/index.html","50952dfeb08fea23fc71e7e334b68777"],["/blog-techtags/CSS/index.html","13690cb44d29a37a88b1f5956989f3f9"],["/blog-techtags/CallBack/index.html","c9dbdf7f6a2af4de9150d1c8af882b81"],["/blog-techtags/CodeStyle/index.html","79a4d51f6106d0dca8683190c1f780e8"],["/blog-techtags/CommonJS/index.html","a26871997dcfb7dc0bbb011d95595641"],["/blog-techtags/DSAP/index.html","ee71a8856012fd45691688fd64c3c725"],["/blog-techtags/ECMA/index.html","7428ee42536bbc1177eda53aee30e31a"],["/blog-techtags/ECMAScript/index.html","041cf233b5e2b6d3267093db56ba93a7"],["/blog-techtags/ES5/index.html","ae0e0a0c2d880716c996f24bee6bd62e"],["/blog-techtags/ES6/index.html","c153c98a7ce621b170f7c60f5ade2e02"],["/blog-techtags/FDMA/index.html","1c2504b4c66ee79351d4f9a8b1fc3c70"],["/blog-techtags/FM/index.html","b5a3f94cd7b8f2f7f3aeb042882f612b"],["/blog-techtags/FSK/index.html","f9287558d96a1f6e96c56665bbade3b6"],["/blog-techtags/GC/index.html","260b6ea1fca70c2cf101c3711773f303"],["/blog-techtags/Google/index.html","cb07dba016858557701e1b2ae61543b6"],["/blog-techtags/Hoisting/index.html","834ddcd5b0b13bf4aa2f267090d029e2"],["/blog-techtags/Html/index.html","9d4e502ecdf8a829cc442fad1c00ab56"],["/blog-techtags/IE/index.html","5829383853205d0689ea8202bd9121c5"],["/blog-techtags/IEEE/index.html","b26eaf0c0cfe12ac60dc882c0a987cf2"],["/blog-techtags/IEEE802-11/index.html","2b07fba5ee33bbc22d219fa4b7beb7d4"],["/blog-techtags/IEEE802/index.html","b235b2390143e9797f706cb0a8884ee5"],["/blog-techtags/ISM/index.html","c558588fc757ed922da64932cbb42be0"],["/blog-techtags/ISO-31-1/index.html","54afd4125744db8aca0bcada2f6e564e"],["/blog-techtags/ISO/index.html","a64053400ea3d28e8edc246c6272e348"],["/blog-techtags/ITU/index.html","2705ec51cf43625fcf90da3de199d154"],["/blog-techtags/JIT/index.html","4e7d8cbcc78ac02ba7c9afacd014bf8c"],["/blog-techtags/JSONP/index.html","2026c65c4a2add61bda614d85d14c371"],["/blog-techtags/JavaScript/index.html","b222625a492a2b0f8a45d40a1c85cd63"],["/blog-techtags/LLC/index.html","7955ecde80ba9d75575762c4b51fd503"],["/blog-techtags/MAC/index.html","597af865d17c524fe20231adbf65abbe"],["/blog-techtags/MACAddress/index.html","92a1c093c0eef291f88a5866aaf90f33"],["/blog-techtags/Mocha/index.html","05c154cb9da59ecf03752036db59193d"],["/blog-techtags/NVM/index.html","6db0b6330c0e6ab24c0477bb436bea4f"],["/blog-techtags/Netscape/index.html","d04ecf66274aa78dddc628081b044105"],["/blog-techtags/NodeJS/index.html","f1c8f4b156a74bc8436ae215ab512a48"],["/blog-techtags/OFDM/index.html","36f3dc9779bd2acbd8e0483244be3875"],["/blog-techtags/OSI/index.html","c571e0435e8f9584579a5fca2d67d4e0"],["/blog-techtags/PM/index.html","9e73a7fabdfe41ba73510aa1581a5ef4"],["/blog-techtags/PSK/index.html","fbe97efef0145baee88746317dd06e1a"],["/blog-techtags/Promise/index.html","6900f767fd3f003a3fe25c2484fc9505"],["/blog-techtags/Proxy/index.html","3f2120fd9f5ec29808ce5f7d5ebcd7d4"],["/blog-techtags/QAM/index.html","8755c66872f42734b7738cfd656bd417"],["/blog-techtags/QPSK/index.html","6922874fe00afc0343888eff6e94377e"],["/blog-techtags/RJ45/index.html","6f974b54c4b7303f6a3e8f3cefe2c87b"],["/blog-techtags/RS-232C編碼/index.html","74198069108806bbf7659c56f2c3b418"],["/blog-techtags/RequireJS/index.html","1c38e61e22474b4cf77339fe010417ae"],["/blog-techtags/SSAP/index.html","0f2815a9306c59326e4bcaf22c24540e"],["/blog-techtags/STP/index.html","94c8cd268cc0419ac6351dacaf461a2c"],["/blog-techtags/Scope/index.html","1d746d059265aedb5d8d679fb5dce8fe"],["/blog-techtags/ServerJS/index.html","dc95f67852213924dbdf1d59c0bb7445"],["/blog-techtags/TCP-IP協定/index.html","bda9f75564aa804b65214beb1d3f56b1"],["/blog-techtags/TDMA/index.html","400ab09612cf9910797c330012ae1ffd"],["/blog-techtags/TypeScript/index.html","5d2cb996452d2e7aedb1f33b07866531"],["/blog-techtags/UTP/index.html","65ce512adc0c9accca5ddfa5843bdacb"],["/blog-techtags/Uglify/index.html","44e0656c0edce1a95276e6e40ae87b27"],["/blog-techtags/V8/index.html","f4ce7418c9b1c3f753f74da84c96f0a3"],["/blog-techtags/VSCode/index.html","84f85b9b1aecbe36c17b8f46b8442f43"],["/blog-techtags/W3C/index.html","689b6828e1657d9e19e1b6059120e5d9"],["/blog-techtags/WebAssembly/index.html","1f8dab469dd9104b659f7a8e56b55865"],["/blog-techtags/WebPack/index.html","818249564e9c41d0bbac6b6be75fd356"],["/blog-techtags/WebSocket/index.html","5c041461c8c76143a84251c61f66c66e"],["/blog-techtags/WiFi/index.html","2048b13e4064ce855259c821485f4e7c"],["/blog-techtags/WiFi探針/index.html","3fdea374a958edff0257e7138b81234c"],["/blog-techtags/XMLHttpRequest/index.html","2b56b8c06727a7313be66f856b73842d"],["/blog-techtags/apply/index.html","9a4320caa7338921540543dd67dcac25"],["/blog-techtags/bind/index.html","87519310988c5d712ffd22fccac1062c"],["/blog-techtags/call/index.html","3bdf8814a3bfe1186c45130cb2a4410f"],["/blog-techtags/const/index.html","f234811b5d7a378cf0ac3e1d018afd22"],["/blog-techtags/export/index.html","fbeb00faf2b626ac03b5566c011b3f4b"],["/blog-techtags/exports/index.html","328f6abf43e74da516174599c69ad8ac"],["/blog-techtags/import/index.html","c368f2aec7249d06aab6ab7440a9b085"],["/blog-techtags/index.html","6018e86c12e02070995a23e79139d478"],["/blog-techtags/jQuery/index.html","35fd47ca0d4ff984fd2ca62e934c33eb"],["/blog-techtags/let/index.html","f2dffe6dbfab2b97a6f7a1f6fb4df659"],["/blog-techtags/npm/index.html","5ae368fbfc38a89e1e572f5f75463f7a"],["/blog-techtags/packeage-json/index.html","b2554de1879a80c956b016a8dad47203"],["/blog-techtags/require/index.html","649451cc72d8d981683aaca8c2646d2e"],["/blog-techtags/runtime/index.html","2dc77e10594016af87114e3a8bb55be1"],["/blog-techtags/seaJS/index.html","92c3d436371a5c47dc7b97833d1f984c"],["/blog-techtags/this/index.html","0f95622ab5d049e356bb3cd5b64ae601"],["/blog-techtags/tsc/index.html","bd7996a5d41542c74858b452ab2acae0"],["/blog-techtags/tsconfig-json/index.html","7dc555f2c913c58f2a8762bab74e2bb8"],["/blog-techtags/var/index.html","900a3682f7c24ee70885cc86a181f43b"],["/blog-techtags/中頻/index.html","36c3f7d9dc65de02a0c2f13e41bba2b5"],["/blog-techtags/交流電/index.html","51cdc328750c1acc77ce1cee751ac3e0"],["/blog-techtags/人流監控/index.html","1b295e6afb49ca18ff68848f366d0926"],["/blog-techtags/人類/index.html","c10eb4299aaed9a745a50a899ddac170"],["/blog-techtags/介質/index.html","672d6f7c7c8e6f1dc432dbc06f0efdb6"],["/blog-techtags/傳輸層/index.html","fed57b9d7e6c1aeb4bbbec41ab789922"],["/blog-techtags/光纖/index.html","bb2352f7d4236f0327299521d466e10a"],["/blog-techtags/全雙工/index.html","3a0aa5f53ac764398e19b5243034e2df"],["/blog-techtags/前端歷史/index.html","62b7a66126f9fee18be3165942cba6ff"],["/blog-techtags/半雙工/index.html","13eab7d48c3f6906a1cafb75c0611929"],["/blog-techtags/協定/index.html","425e22642a07e824e951bb5d8336f854"],["/blog-techtags/厄斯特/index.html","25e82539dfc4a4ea20bae414d1a310ea"],["/blog-techtags/可見光/index.html","2b37d609038f1516cdc63c5a6a38e8dc"],["/blog-techtags/同步/index.html","a13e00da86f1a6322a08672e5b40f327"],["/blog-techtags/同軸電纜/index.html","40af99f3a4faae100cd46a025690cacc"],["/blog-techtags/單元測試/index.html","76a75f6b6a1b3001ae62e96bb5f9eaac"],["/blog-techtags/單工/index.html","c904fa3569b0c57d49e259b983cf5d7b"],["/blog-techtags/嚴格模式/index.html","0f371e66e043da88bd70bf2aee24d7cd"],["/blog-techtags/國際電信聯盟/index.html","a7d9fc12fbd1fdda7d9a741b22407cd3"],["/blog-techtags/基頻/index.html","97bc58f78e6dc075bc61b68fec782e08"],["/blog-techtags/多工/index.html","ceed574cf6670a03717c2ab24fe0edad"],["/blog-techtags/大腦/index.html","a08becfb2022c0745ac40933c77e8b4a"],["/blog-techtags/定位輔助/index.html","969e4e766960ba8cdd4a52522034ad1b"],["/blog-techtags/實體層/index.html","3fcf314063d7ca0edee29b8f92344d9f"],["/blog-techtags/封包交換/index.html","bef717df6cb66277895aea5c0fe4c212"],["/blog-techtags/射頻/index.html","aea41ad581b9517f7a41eb103cda7e63"],["/blog-techtags/尼安德特人/index.html","57a49e8bf6b5da2e701bfca7a9104834"],["/blog-techtags/差動式曼徹斯特編碼/index.html","91ef8938b5b961f76fce02369f9974c5"],["/blog-techtags/差動式零補差編碼/index.html","976b4529a43484cdcebd54745c187c61"],["/blog-techtags/廣告投射/index.html","56ce17c04483e6ffee72bdccbf822f82"],["/blog-techtags/弱型別/index.html","65aff5bac7a0bc886d1a8558dcf4dc01"],["/blog-techtags/強型別/index.html","24729c6614ca2f89c44216a9fc2f340d"],["/blog-techtags/應用層/index.html","0675dc9a2b1c8db45f2ba3b6b7198817"],["/blog-techtags/抽象檔案-d-ts/index.html","aa9312694b593fdcee6881583de72e62"],["/blog-techtags/數位/index.html","e94019629ccbe3c2249342fa305b86b7"],["/blog-techtags/時間/index.html","8faa39ea51cc11a23a33b0fe5f490a83"],["/blog-techtags/智人/index.html","b3aff4b1a2dd69ae1ca99fd36e66612b"],["/blog-techtags/曼徹斯特編碼/index.html","599038618281a5d5fd15910d3fa79baf"],["/blog-techtags/會議層/index.html","a46fb20302452a714252b9dc45088f0c"],["/blog-techtags/有線通訊/index.html","4f86a7cc87df9e66fd6f32c69ce99be5"],["/blog-techtags/汙染變數/index.html","ffdb8a214d22298f6b39f44634ad8a23"],["/blog-techtags/法拉第/index.html","b722185701ce0a38330fbfb132f6adcd"],["/blog-techtags/瀏覽器/index.html","021caa22dd376e9dcdb4a5990956ffce"],["/blog-techtags/無線通訊/index.html","a2fd057a12990b2dee148e4549c6e90e"],["/blog-techtags/特斯拉/index.html","e471701eb0e6465ea3796972a5bcc4bb"],["/blog-techtags/異步/index.html","e982f70b1acee39c4114304e977532e8"],["/blog-techtags/磁場/index.html","c121630fff84e02cd40a82f622a125a6"],["/blog-techtags/第一次瀏覽器大戰/index.html","01cddd68cedd1c7a1ee1d27941654903"],["/blog-techtags/第六代WiFi/index.html","26f6e40c0fe874ca95165791f43bb568"],["/blog-techtags/網路層/index.html","ee1bd778cc321a5f95476be34ba47a8e"],["/blog-techtags/線路交換/index.html","055ba4894178f8ef6b8c8c54e251fab3"],["/blog-techtags/緩存/index.html","b9758edbec1f459c4f9c8314d3615a82"],["/blog-techtags/聲波/index.html","0b8aac0d5c31ef5cdf8ab24c41709d9a"],["/blog-techtags/能階/index.html","e157a1942c2860e33b17c7c4b466513c"],["/blog-techtags/腳本語言/index.html","d9ff3f116fee5d87c77dae2329fc053e"],["/blog-techtags/行為監控/index.html","2bd17fafd057cf2de210cce3e379cce3"],["/blog-techtags/表現層/index.html","4f9a6c0e540ae67b379d0d430e3bb1bd"],["/blog-techtags/解釋型/index.html","ce264c0cbb7804813a5a841643e99bee"],["/blog-techtags/詐騙資料/index.html","be13dc4e6f74eb4578923a2f16902061"],["/blog-techtags/調變/index.html","99542f6f44a736f6c3e7aabfb44b000e"],["/blog-techtags/資安保護/index.html","5996d100daff375434a5ed469a006797"],["/blog-techtags/資料鏈結層/index.html","e26ebe580703a1383dcdd2732b6d074d"],["/blog-techtags/跨域/index.html","6eba6fc7e742618c546884eb05ee01cb"],["/blog-techtags/身分證/index.html","dba3cad69ffcabcf7fa0596e48eae4ed"],["/blog-techtags/通道訪問控制/index.html","f99ac279b1bf81c93c4d2c63e16ea504"],["/blog-techtags/銫原子/index.html","f5165b63431dda0d922c8020bd71357d"],["/blog-techtags/閉包/index.html","9fd66ab5138cf0eed81718c104c74cc6"],["/blog-techtags/雙工/index.html","75428052b5536ee20e943ded4d0c6262"],["/blog-techtags/雙絞銅線/index.html","75c127247f3226b6dd7b562eabc2477f"],["/blog-techtags/雜訊/index.html","59d53fa717d205c2be6ecf6783932dbb"],["/blog-techtags/電場/index.html","b6cbba96b1099f3b439e6e2bd6a70f7c"],["/blog-techtags/電磁波/index.html","b4c896c5c8d75fd11d6a69e8756e6e54"],["/blog-techtags/電視/index.html","01d15b51fd01dd772d648ccce7540603"],["/blog-techtags/靜態優化/index.html","40951d85850c8a2ae54325b708ed7cf9"],["/blog-techtags/頻譜/index.html","3650b50fa470c25c695c2e2bc217243e"],["/blog-techtags/類比/index.html","45bf8277f677e0971fd012b3bf1b3eb0"],["/blog-techtags/馬克士威/index.html","28b069aee480f4b8ac5cd8a08f9219a2"]];
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







