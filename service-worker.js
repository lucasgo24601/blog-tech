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

var precacheConfig = [["2020/02/14/部落格介紹/index.html","0da150f41b7937223cfa41c21c00beac"],["2022/06/02/前端P.01 - 網頁三兄弟/index.html","068880f99b72663902497abfb77b5bce"],["2022/06/02/前端P.02 - ECMA組織/index.html","c3d4b4ad1e9e58e8865ac846f1862c8d"],["2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","8a893b8f09eaa2c126e2af7364684305"],["2022/06/02/前端P.04 - JIT & V8/index.html","432dc521c7b490237d275825256fa168"],["2022/06/02/前端P.05 - TypeScript/index.html","96a6922fd4cd1e0647f87b794ff09fbe"],["2022/06/02/前端P.06 - WebAssembly/index.html","54fe3de2604e51329b1eb33c087c8b07"],["2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","b496308943b176daa32ab863d849d423"],["2022/06/02/前端P.08 - AJAX & 跨域/index.html","0b66d8159845bc5e9b22d964a7e12e5d"],["2022/06/02/前端P.09 - 同步和異步/index.html","5d498bf67c309ba05be2f7f12dc3f520"],["2022/06/02/前端P.10 - Scope/index.html","350b8fe6a1f462e2ec5416512af91e4d"],["2022/06/02/前端P.11 - 模組/index.html","7559576c0d4d7ced13b7370b5d25ebf8"],["2022/06/02/前端P.12 - NodeJS/index.html","0baea946339e9dd56b33c2b9c5d1e2c8"],["2022/06/02/前端P.13 - WebPack/index.html","685fc5d1c858c0986e5d0846333a20d7"],["2022/06/02/前端P.14 - 單元測試Mocha/index.html","0ff812689bde6f5a910b79b8b3de1e5e"],["2022/06/02/讀書P.01 - 人類簡史/index.html","56efcb5d91ddf87c342d6d55bd614ef5"],["2022/06/02/通訊P.01 - 協定/index.html","d7f8158657cd0e401379c301610d17b6"],["2022/06/02/通訊P.02 - OSI七層模型/index.html","8eb6574eb7a6961016304fdddec8e225"],["2022/06/02/通訊P.03 - 實體層、介質/index.html","58df9b7cace9341dc8b3c5d7052ac2d3"],["2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","519e779159e155a41f00db4f7e35e4c4"],["2022/06/02/通訊P.05 - 資料鏈結層/index.html","528bc79e15f638b47acd17f8094fddf8"],["about/index.html","906e34e6dee91216e69d71db6521b8f2"],["archives/2020/02/index.html","973ad72ae864c296b894f46ae7d1b4d7"],["archives/2020/index.html","b81340c15fc23c313e20e257f1177ca3"],["archives/2022/06/index.html","3b42abdb8d2a9b4b61c6c5ba341408b1"],["archives/2022/06/page/2/index.html","b0721df6a91a2237c0817466cca79621"],["archives/2022/index.html","27e96b504d0f716a4c37a56072cadceb"],["archives/2022/page/2/index.html","6d016b424b30eea32da6861956278883"],["archives/index.html","8af74132c8118271cd3dd3fa90c1af78"],["archives/page/2/index.html","31af51d6cee7503489fb495deba4f886"],["archives/page/3/index.html","8e00adeeb0055f3401f0e97efc7338e2"],["categories/index.html","3b31969fb4ec5bef7c02c2f3ddc6a3e9"],["categories/前端系列/index.html","bff68dab5a015ef60badf323b689bf73"],["categories/前端系列/page/2/index.html","3280d50c658f927e649a8af769af6153"],["categories/基本文件/index.html","245f08272cf870064c362d39e9337d5a"],["categories/讀書心得系列/index.html","7b28d3402c9fa44515c95e56a03a5255"],["categories/通訊協定系列/index.html","865b19d97fbc42baf1e8490a88dbe88c"],["css/index.css","d596cc019db5ad77d44e30d4134e0a21"],["css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["index.html","dfc6ec51a71b4042d556674aab2ac367"],["js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["page/2/index.html","6eebab6aae179f4e272826573dcb66de"],["page/3/index.html","741b99f7719676832cce54809e6e240c"],["tags/16PSK/index.html","f739b218ad0b8ee7930ddf2701a6892d"],["tags/1G/index.html","7c823dc5f1b23be0ac9908a5b223ed74"],["tags/2-4G/index.html","6128a3608a4226144fe1022e99e5d4d1"],["tags/2G/index.html","870037c86fc121d402e7747a3b36679c"],["tags/3G/index.html","9c84743706d62ba32203c4f8d034d3db"],["tags/4G/index.html","45942ae98e9af3680ea71481a86f5c81"],["tags/5G/index.html","923ae3ce8b4fd0f482c510226c4ab97e"],["tags/AJAX/index.html","390da2dabd92bdd2e3f186a6d8d98772"],["tags/AM/index.html","794bb338b1173a743b0e6dc31e4b0916"],["tags/AMD/index.html","39b0dbd14e4554946f794c452fb6694d"],["tags/ARP/index.html","a4fa87ccd50d2dc852578875d4f070c1"],["tags/ARPA/index.html","1c04ce1b43d270dfafc706f8133d77ce"],["tags/ARP攻擊/index.html","dfeb5b0fac618bc4e1d0a6cc444cf1bc"],["tags/ARP緩存表/index.html","2c527f82039ac5504b805d1e6a8502cf"],["tags/ASK/index.html","3703c21a1d6f44b116276d9652f0fe4c"],["tags/Async/index.html","14038a26335cc13144562a955ccbbff7"],["tags/Await/index.html","b4accba6d6baa29e013f92f074fb2010"],["tags/BPSK/index.html","de7c8f45997e6bd6374616012c225f7c"],["tags/Bable/index.html","aefb40d2670618bcd97bbb4fca5db9a8"],["tags/C/index.html","8b220bdccaf80195a39a5b2d58873465"],["tags/CCITT/index.html","95c0682771909f91564abc4f30ee404f"],["tags/CDMA/index.html","73c529f0dedbe51adf38062cf5fb3483"],["tags/CI-CD/index.html","e0100a857c4980ff7ca01d7f86d3abf1"],["tags/CI/index.html","4fd387413eae2175edb33f703e73a08e"],["tags/CMD/index.html","f560120742eeb69a95511b629ee0aaab"],["tags/CORS/index.html","75709f6ab449fcd086e1f76ae5d49654"],["tags/CRC/index.html","12c7152db26f8c4811d7d3200a2f69ad"],["tags/CSMA-CD/index.html","fad8dfa8fc29420fd9fcf8e00016e1eb"],["tags/CSMA-CS/index.html","56999e9f4dbf63a508f3d86370dfab0f"],["tags/CSS/index.html","c2e5cfa5dda922734dfd789a95481822"],["tags/CallBack/index.html","0c05828fe19f351cf4967308633cceef"],["tags/CodeStyle/index.html","182886bc21d5ff1187ab0262911c2f7d"],["tags/CommonJS/index.html","c8161f65e970ddbe32654b438e837cc9"],["tags/DSAP/index.html","b7ca52bbe15eba5a0b42a40a32578d32"],["tags/ECMA/index.html","a8f60adb7c724da3b67ae05fe0e96737"],["tags/ECMAScript/index.html","fb79eb900fd52a4ee103d3b788c00b39"],["tags/ES5/index.html","f042dddabfb806d264016ef278d4cfca"],["tags/ES6/index.html","bceb9504f7770ceefe329c2f720ddf10"],["tags/FDMA/index.html","b49a59d6ad35689b6c3034049eb61580"],["tags/FM/index.html","f5183bcc6cee3dbc54fca4e3b544de80"],["tags/FSK/index.html","8e44a179186290acdf62ef3e6eb7183d"],["tags/GC/index.html","30d1d9980365d788345e4647ef504e64"],["tags/Google/index.html","9be13855e23d4259b9575c22bfe17d54"],["tags/Hoisting/index.html","0cdfce267588cd931dcb9c474a6fffa1"],["tags/Html/index.html","3c38dd96f8b13d212e3f1955da6b23f7"],["tags/IE/index.html","e9ca7b4c6f047a68ff1bdc240d641069"],["tags/IEEE/index.html","e6919c99b5296fd8f8a60157b1b26a66"],["tags/IEEE802-11/index.html","1d3db270c0f9df51d21aa062f8745002"],["tags/IEEE802/index.html","b472e9ee2b88dec6568431e9f5ee9ef6"],["tags/ISM/index.html","5871ce2ebd4c6aa2565870a142b73558"],["tags/ISO-31-1/index.html","bd946f9e03cd2f205c6f4f510cb83612"],["tags/ISO/index.html","2f95da071ee0a88dc53be6c0248e5c2a"],["tags/ITU/index.html","06bf258bfd687d4df2499a76d2ae8d70"],["tags/JIT/index.html","1c602d7206861711598f68aa343fff6d"],["tags/JSONP/index.html","dd52638c274bbe66537f49d03f953a73"],["tags/JavaScript/index.html","75aa073ed24e1ecca01a571e865eb146"],["tags/LLC/index.html","f1ac9a18809be3b5deced883b2433f76"],["tags/MAC/index.html","d6041163510d402e274b84d614d289d8"],["tags/MACAddress/index.html","c9b29499acb29517bd27d80d9472afce"],["tags/Mocha/index.html","d2c32cddb542e6891ccd6049bf1590ee"],["tags/NVM/index.html","7a45dc06484dec196dc1f12c68ca07eb"],["tags/Netscape/index.html","ab5bfa4ceb79015392d22ed5623a6c12"],["tags/NodeJS/index.html","5cde88ab201b9e286146c3094ed19e5b"],["tags/OFDM/index.html","0e9b802ce8b4d79935ab2568168b74a1"],["tags/OSI/index.html","53c83c26c6a03ea974ab56c1c63acda5"],["tags/PM/index.html","eebb7a37061f52ef454f88b4bc8e023b"],["tags/PSK/index.html","64c39d500ce86559470451943650f789"],["tags/Promise/index.html","196c908571d92dbf3381da0927c6c74e"],["tags/Proxy/index.html","982ccae9e9959a885d89c8e16f5cd8d6"],["tags/QAM/index.html","feda6c9ab8e9f5af63d35002795b65c1"],["tags/QPSK/index.html","15e471d87bb2fef0e28f12ee863c2a9f"],["tags/RJ45/index.html","f44ddd7f3ebf29f850d0af30fe6d4256"],["tags/RS-232C編碼/index.html","688ab86daf6c49142e28c4bd80d48832"],["tags/RequireJS/index.html","9371d92d8786f0afbc6770164453c2ce"],["tags/SSAP/index.html","ab2713c1d26767373b83bfbb99779788"],["tags/STP/index.html","cad093592120ebb7ee87a61fd7daeb26"],["tags/Scope/index.html","f598372487ec6576826b5546c013349d"],["tags/ServerJS/index.html","a59e625355dbf54cfea4fb09661f1b7b"],["tags/TCP-IP協定/index.html","b4b8c9149b90f46ba750d243b6ce4da6"],["tags/TDMA/index.html","6c03d2dcc78c18f767a3af3020fdbee3"],["tags/TypeScript/index.html","9c708d6519dfa62c45100aa5844bfdb0"],["tags/UTP/index.html","88a0f82a80d8d16303780b10191f3c09"],["tags/Uglify/index.html","9ca6463dc3b30e3657f82ea31b9231ca"],["tags/V8/index.html","466962de5a6bf06debd86dfa66bb9146"],["tags/VSCode/index.html","283cb1354a59a8757c171194df94f7e9"],["tags/W3C/index.html","1cf3d6cbb7822f7529167f07f1df2a9f"],["tags/WebAssembly/index.html","4e4a05614bdcecabcd4b743ebbe751b5"],["tags/WebPack/index.html","5f2837e13bc172229e65448bad7e4d03"],["tags/WebSocket/index.html","5ee202d50ce6bb726321782ce1f67366"],["tags/WiFi/index.html","be37eedf01bd72e39aefa25ee1114723"],["tags/WiFi探針/index.html","770b0c06be9306743dcf5a0f38724efd"],["tags/XMLHttpRequest/index.html","7eff44259a3ced2b526538df4119ee92"],["tags/apply/index.html","cc7ca76ac1a437abb5948c4d79cb63bd"],["tags/bind/index.html","dbf25d810a252d270e7f2ce4596e58b8"],["tags/call/index.html","b6704e7f952b2663e19fa4d2236b4665"],["tags/const/index.html","df8d7c7e217bdecb28cc7171179b6ded"],["tags/export/index.html","1505ce9c3c96223ac9587eb44ff36f22"],["tags/exports/index.html","10f8883f8492864c2b9fa136471f192b"],["tags/import/index.html","8961566e81758d1725a62d370f4a4592"],["tags/index.html","751d239a0b407cf90dfa77729e3109b1"],["tags/jQuery/index.html","f0f24deb1c14272073d252d4f462d5e0"],["tags/let/index.html","ae06fa3eda376696e741d75b0cd048e9"],["tags/npm/index.html","14bffe3c1817ad5bb9cb0b255bf869b2"],["tags/packeage-json/index.html","199dc580039d61beb683d4b293c0d5c5"],["tags/require/index.html","0a63ab6b68fe9d2830997c6e045c087b"],["tags/runtime/index.html","48e60a1da6abd16af14448c0d1b9bbcb"],["tags/seaJS/index.html","8cc6a16253be9e9174117be22fe71d5c"],["tags/this/index.html","28eef5cdfd7cd37ffaaa7660161f9f5f"],["tags/tsc/index.html","56ffa04b66f22b9364e0f626c90b7c3c"],["tags/tsconfig-json/index.html","1e0d3db89d5922c6fb7902b213d5b602"],["tags/var/index.html","d0d7eb86ca4efc8ada819622a090ff21"],["tags/中頻/index.html","f42f21b35388a73f4c7f2d90568ab4e8"],["tags/交流電/index.html","b7fbd8d66e21d049ff4bd4809764039c"],["tags/人流監控/index.html","2b91d9bcce7098bcc84daa350aa888ea"],["tags/人類/index.html","1c2e7f8b6ba1ed8802d8c337e659987f"],["tags/介質/index.html","6e6170a204b9f64bedde66545c72b6c9"],["tags/傳輸層/index.html","b7edc413acfbbae735eebc910393fe05"],["tags/光纖/index.html","d87447d2194993a36fa4c0055c75c78c"],["tags/全雙工/index.html","03697d2753ec1b82703bf98c9088f5e3"],["tags/前端歷史/index.html","1c9db85f27a41a2fa7dac359f56a3185"],["tags/半雙工/index.html","9d0b23494d49f97795559392510363d4"],["tags/協定/index.html","eaa4eff3139b0d9e517bb13922ec088e"],["tags/厄斯特/index.html","bc1bcf3f86fd61f57cdb8cda979bd615"],["tags/可見光/index.html","43fc12da343affe5f2bd9086c07beda9"],["tags/同步/index.html","9a0aad18976087beca61e55d7fa8a67e"],["tags/同軸電纜/index.html","e641f5442e07379a5889e74c5a2caa29"],["tags/單元測試/index.html","903fca89a41d1b46e6efed8fda2e4a11"],["tags/單工/index.html","b4d49a064625844d04dd1adbf989913c"],["tags/嚴格模式/index.html","b3513362582db1e16e2932d0e3604c5e"],["tags/國際電信聯盟/index.html","db878db12d037b9233a28ee677276989"],["tags/基頻/index.html","5e20045c107699ce7cd11991b388f58f"],["tags/多工/index.html","a7bfc97bcd78094122484c8c01f21e28"],["tags/大腦/index.html","fa72b8a0cea51f23fb1decf9b6a75315"],["tags/定位輔助/index.html","2b5d09465985de02027be6b16653ca9d"],["tags/實體層/index.html","5aab7df7b9cdc72d91eb9858ee9db9f8"],["tags/封包交換/index.html","248d55743fc03ef7f0d9fc8d7ff03cc9"],["tags/射頻/index.html","0b49e95978f4facb245c33ac161cee46"],["tags/尼安德特人/index.html","942eb7f54ac104802d6b4d1e04bd1492"],["tags/差動式曼徹斯特編碼/index.html","e162c00500310ce60f6fb2bb5affec0a"],["tags/差動式零補差編碼/index.html","e2bbc0fd79948ff78fa77d2611b749ca"],["tags/廣告投射/index.html","319933ec9ccd768c5ae9cc2dd734372e"],["tags/弱型別/index.html","1ea11ca0ee178f0f691a7ab9c5a8d23f"],["tags/強型別/index.html","370168fc684e2696bbaa55641949ccff"],["tags/應用層/index.html","173ed70b9d4f5549c64c3a719cf1e81c"],["tags/抽象檔案-d-ts/index.html","0faddf8669ab4f68cc6d4678d2e5229d"],["tags/數位/index.html","4349f457df9dd3756f3366075ca33eb3"],["tags/時間/index.html","2ea4e5ea2977a334ee62d589cc60290d"],["tags/智人/index.html","fd38c284e8710ce0ff4bf4f636395b63"],["tags/曼徹斯特編碼/index.html","ac23d85fc804394dc8f542ff64f90343"],["tags/會議層/index.html","63d51f7cb3e7a702b32981322bc5827f"],["tags/有線通訊/index.html","31cdae33ec8810fc2c272c214a32fe8c"],["tags/汙染變數/index.html","ed328115ba6f96e49f95fe26e57aafb5"],["tags/法拉第/index.html","2acc7d949032b08220fab9ecccccf6e4"],["tags/瀏覽器/index.html","743a3bf141f485fe6751deeb0d87c007"],["tags/無線通訊/index.html","d217cb763215ab3b4fd67048b9612f35"],["tags/特斯拉/index.html","98398ed8d5dcd86790e3452729def5ee"],["tags/異步/index.html","e3d7d3d24b54566877884d86faa99a7a"],["tags/磁場/index.html","cb3dcd03b9358beab7587f8ac23dd301"],["tags/第一次瀏覽器大戰/index.html","6d08857f672aa17be6b67386c4d15f93"],["tags/第六代WiFi/index.html","94650fa541f8566bf8c1165e5f09593b"],["tags/網路層/index.html","a7b4a080d6c5456f1a73203d677a1919"],["tags/線路交換/index.html","0a095c67882423bf9e8f12e034751f99"],["tags/緩存/index.html","13e4d8dbdbc09e3108942350971a930f"],["tags/聲波/index.html","3862fb3a1783cc736f128a3d32c552ec"],["tags/能階/index.html","c640c9df90ab695919624ff757952666"],["tags/腳本語言/index.html","d259d8a9f3a0db97290e72f51ac4c9f3"],["tags/行為監控/index.html","5d1ad49fcacd701bc1888f31d52fe73c"],["tags/表現層/index.html","f2691bd2e671e49e1d1c776405089225"],["tags/解釋型/index.html","0200ea17703f2aa837ca9bc5b569a391"],["tags/詐騙資料/index.html","2d28ce7c198c14c8cd266d82d8814ba9"],["tags/調變/index.html","e8840c6d3530a05303498da2c1ed1746"],["tags/資安保護/index.html","0d3fce32306ac8f76049ef3db8bac299"],["tags/資料鏈結層/index.html","3ac2a4997eadc502d849318b574af508"],["tags/跨域/index.html","4c5b33a7de2d2b6ce70cf5e21353fc6d"],["tags/身分證/index.html","0b84834c7793b5f52df53517eecd3d13"],["tags/通道訪問控制/index.html","7be1bee2c6347281b9fee07bf9395e6f"],["tags/銫原子/index.html","ae25de793c779f6ee1e9672df3f3fdbe"],["tags/閉包/index.html","e9cfa749922f1209e0047dc9904b7f55"],["tags/雙工/index.html","22c0574f7b13636110ccd56f92da75ba"],["tags/雙絞銅線/index.html","8ac7d6f4a9aef592fa93bca4b81e64c8"],["tags/雜訊/index.html","a0c427a10b349364db394fc62ab3c1d0"],["tags/電場/index.html","70e4543ccf3a6caba6aa894929b357c2"],["tags/電磁波/index.html","6be57a53e21d3dee16d832be2e4ed991"],["tags/電視/index.html","da2c656fa123606fbb21ee0520eeaeca"],["tags/靜態優化/index.html","e8a84e2807fed2a4b65f3d484c0dbc8e"],["tags/頻譜/index.html","6af67fca488758e23362514e68966a58"],["tags/類比/index.html","0f1c12b6268496a31d0f53509159882b"],["tags/馬克士威/index.html","fadda501a294b803e3f511adca528fa5"]];
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







