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

var precacheConfig = [["2020/02/14/部落格介紹/index.html","be322c275d7879034c1225493481c1f1"],["2022/06/02/前端P.01 - 網頁三兄弟/index.html","1ea4fdca8f905c12cab31d737d5d4734"],["2022/06/02/前端P.02 - ECMA組織/index.html","dd8514c8fbabc963dd644854f9affda4"],["2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","b7ad0a2935647349e8e657462a88ec00"],["2022/06/02/前端P.04 - JIT & V8/index.html","68dfd3f3efe5eea79060efe4c558ceb6"],["2022/06/02/前端P.05 - TypeScript/index.html","3acd372e9b0145db3ea98103405a6a26"],["2022/06/02/前端P.06 - WebAssembly/index.html","987c4da1f49e71a84927d50f28b6d0ec"],["2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","096a9de18a27d7362273f9e68bdf8c4f"],["2022/06/02/前端P.08 - AJAX & 跨域/index.html","da7b2ae43747d642c9e6c381a31f1f0c"],["2022/06/02/前端P.09 - 同步和異步/index.html","c30143db5f549cd8430d60791dd5f778"],["2022/06/02/前端P.10 - Scope/index.html","e5c9d8c706ac2d62a49e4af2cbd61f7e"],["2022/06/02/前端P.11 - 模組/index.html","a5b5d2b4b5f6b835733d2ff88d8cfc12"],["2022/06/02/前端P.12 - NodeJS/index.html","b1b38843e02f4011fc59079f7cc819e1"],["2022/06/02/前端P.13 - WebPack/index.html","eecde536c65869232830880845675973"],["2022/06/02/前端P.14 - 單元測試Mocha/index.html","0919c1567cbbc4a84def0987ed5523c9"],["2022/06/02/讀書P.01 - 人類簡史/index.html","ee7920f59c144977ffc6c8799440011e"],["2022/06/02/通訊P.01 - 協定/index.html","6b6dd6acaebacaea6a49cd630c998064"],["2022/06/02/通訊P.02 - OSI七層模型/index.html","36f4e0a75f733c6aa8ead47576cb69c8"],["2022/06/02/通訊P.03 - 實體層、介質/index.html","5c04c11d452c6c933b6df31c9328232c"],["2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","6a1a4d8f52b1c2737f9319ddca17574c"],["2022/06/02/通訊P.05 - 資料鏈結層/index.html","8112a5100834b507dd41322b2b302070"],["about/index.html","b2bf26ea9fc78b74ac24517c338796a5"],["archives/2020/02/index.html","a6eb06d3ddd35e5c80542a98480e450e"],["archives/2020/index.html","7a23b2c3168f6ccc6114ecc8fcdd0f9f"],["archives/2022/06/index.html","a5d06da96f42d7d747cb431749b1980a"],["archives/2022/06/page/2/index.html","ccbe9b622d391773ab231fceb0441065"],["archives/2022/index.html","d3c7df4727b5d5f0606df742ea4581e5"],["archives/2022/page/2/index.html","defd099437d82b9f3b434bdb694b591d"],["archives/index.html","062f39db4467d86f910ff5c77e1043d7"],["archives/page/2/index.html","6c66d972590d8f5d8de5b4c43e4c939f"],["archives/page/3/index.html","b8498ec169cf583383367ee811c76a62"],["categories/index.html","c9a27dcf9185ef078919defbee3dd268"],["categories/前端系列/index.html","d1d94b3be91fb40a1caa2c16935ccb1b"],["categories/前端系列/page/2/index.html","0bfabde481f73eaf39ef73f18e24f951"],["categories/基本文件/index.html","83e97a7097d688a34a88c23809731214"],["categories/讀書心得系列/index.html","b417a8933aa838c1dedcfab9664da0d2"],["categories/通訊協定系列/index.html","e3130ba3d531638f8b33e61d0dcbc96f"],["css/index.css","d596cc019db5ad77d44e30d4134e0a21"],["css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["index.html","f0fee31475a9083ffc8998d9b27f716d"],["js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["page/2/index.html","fa0c68ab938f5d500e4373aa5aea3d0b"],["page/3/index.html","edc6a92680e29749e12ef55aa7dddbc4"],["tags/16PSK/index.html","f4d82528afa9f0f3d7c5cfc6f225383e"],["tags/1G/index.html","8031cacdfdbb8c79e504bca5af18b2db"],["tags/2-4G/index.html","54163b425a83081c1a3a84e82b32345c"],["tags/2G/index.html","4debedbd4f13e72c6e8449058f7be1ec"],["tags/3G/index.html","f8eeacd804af6a1d44c550d11deb31c5"],["tags/4G/index.html","265e15b8b26ef35f774ab78647de912e"],["tags/5G/index.html","0cda8800eac3cc1e739bf68606ab75b7"],["tags/AJAX/index.html","d771d9337432698141ec69cf64759384"],["tags/AM/index.html","7d2c23c3275d5704e7facc82366702d6"],["tags/AMD/index.html","6a8c43d34ef5357994b1793c1769034e"],["tags/ARP/index.html","1ef65c98b80aec04f5a12a8f4e0d0511"],["tags/ARPA/index.html","740b010b8dc3eeff0ddb304042be686b"],["tags/ARP攻擊/index.html","efbbf8095e467aa5ed431c04550ffcda"],["tags/ARP緩存表/index.html","a55d1baf5d7688269ac944be5d074ec9"],["tags/ASK/index.html","d89e787e772ddf7104fcbbf73accfba2"],["tags/Async/index.html","3eed4a9672a67379b0738d8cbcd55e0e"],["tags/Await/index.html","63ef654d6915c7e79852eab9e7ed20b0"],["tags/BPSK/index.html","fe5217514184db38efcf116250958bd5"],["tags/Bable/index.html","49cec94ff940b2e02539417606f1dea6"],["tags/C/index.html","ef49c802941dc67b2beebaa0277d1ccf"],["tags/CCITT/index.html","47c49f75446f4a33b3a6fe37b02e4589"],["tags/CDMA/index.html","4be401558f314e21d3ab97ca8ba20540"],["tags/CI-CD/index.html","b4cc72a78fdc7b0856bd28ce3a98dc48"],["tags/CI/index.html","18a016f5dac804c8b4db0f6649f76344"],["tags/CMD/index.html","923680332669e1a1942a0a0a3a042292"],["tags/CORS/index.html","0682355a04ef590e1eb8b0515fd14724"],["tags/CRC/index.html","ca74b1767b2fdd472c0efc7168f55802"],["tags/CSMA-CD/index.html","289c83382ddec42c0aa4a742007f7a82"],["tags/CSMA-CS/index.html","956746ee21e88594726b0bfcd70bba86"],["tags/CSS/index.html","6d9614f59617e9f1084cd04c55f8ede7"],["tags/CallBack/index.html","388339b031eebccb4094d7fdf4ca14f1"],["tags/CodeStyle/index.html","132edae696e2e8e854a584eca1ade919"],["tags/CommonJS/index.html","b82911f2c8e746d432ee45ec6ce01bde"],["tags/DSAP/index.html","695364d9295373a949226b02d54504fb"],["tags/ECMA/index.html","5312ce4929378bd56c3b1567bcabb029"],["tags/ECMAScript/index.html","64b14212bbddd75cc86e69849fb86298"],["tags/ES5/index.html","3dd43a681eef99607e8fdaac02e8736c"],["tags/ES6/index.html","ab988f60075d4022cd513379b7a93f1e"],["tags/FDMA/index.html","88e23e9f5a1a0668a3631d5f6aa3d6bb"],["tags/FM/index.html","629cf76b811970b349ac44288830f89d"],["tags/FSK/index.html","ebfba8cac53d333a414f31aa7f31f85c"],["tags/GC/index.html","87d51887c3cfdf5dfde4070d8b3d200d"],["tags/Google/index.html","4dec9d7a3032cda877d8a0937f451986"],["tags/Hoisting/index.html","3bc24cf2c63917081fcbe0f0c09c35ec"],["tags/Html/index.html","aae6369a02ea6c612973546bfc2272e5"],["tags/IE/index.html","99850cfe3c70baadbd480d3548eb2d0f"],["tags/IEEE/index.html","8de1b598d48e6546a39beb3ae18cbe53"],["tags/IEEE802-11/index.html","9e538eea59b2bacb7c0d071d36fb8aa2"],["tags/IEEE802/index.html","a324bb45405d603311824e484f62a7f4"],["tags/ISM/index.html","05d9626658f41d1785c61f35b9da8afe"],["tags/ISO-31-1/index.html","476b65ae53d5b5eaa5a20d473a5bb43c"],["tags/ISO/index.html","3acf8c9fbe0a6806b272b3a339b27669"],["tags/ITU/index.html","d5f357602fd294095ef212bcc6d07eab"],["tags/JIT/index.html","19662307ab79e717767b4936ded751c2"],["tags/JSONP/index.html","05d6f41c6ad49a55b3ea11e39f3fff70"],["tags/JavaScript/index.html","572a1c2f168c21e96945e37c33ffc09f"],["tags/LLC/index.html","debf69961837292444b8aaa9abb967d8"],["tags/MAC/index.html","2aa8d180560c1bc54092a01513952e5c"],["tags/MACAddress/index.html","3f8a7175b4ae870bdf3ad2776d1da1e0"],["tags/Mocha/index.html","14011c4db651af229dc39a18e20d4f2c"],["tags/NVM/index.html","3587c57f348da76df1c3faf4ec530aab"],["tags/Netscape/index.html","4cb039a090deeb40d2c94205a97be0fa"],["tags/NodeJS/index.html","710b9634a56e9da87350d286f73aeb44"],["tags/OFDM/index.html","52c23a648808b276a18b752f4b8092a7"],["tags/OSI/index.html","2f80080fdc16ff9801034ba37d774b9b"],["tags/PM/index.html","37cb3a5b2ce7782e61599ecc407a923d"],["tags/PSK/index.html","6c2dc935ecee15dc79837797dcbc19eb"],["tags/Promise/index.html","3c54af27bb7eccd737e755c56e2502be"],["tags/Proxy/index.html","aa4ba733e21949f2c386f4b28b2da6e3"],["tags/QAM/index.html","e0d5b1a5e940722d834d1ec330f3d9b7"],["tags/QPSK/index.html","36d6eb6f624f63c80c8233662c35e95f"],["tags/RJ45/index.html","54a6132e9f8c512c4d8b74c9f15739b8"],["tags/RS-232C編碼/index.html","617b495e4a0aa4c4a37b4b6c08e132e6"],["tags/RequireJS/index.html","de7bad7957e17c5f61e23d8083f615ce"],["tags/SSAP/index.html","f919bfee39c3bf037f11ad7cc51b8a05"],["tags/STP/index.html","88df81e86d6106459292497460edf895"],["tags/Scope/index.html","6974274703a34f5691b17c3830467369"],["tags/ServerJS/index.html","fa3b31044db552c9d15f1a1ce7ac348a"],["tags/TCP-IP協定/index.html","755529f5e98955ad0997d874bb7c3fa9"],["tags/TDMA/index.html","a086a2a4295498a01419b0e35b05be18"],["tags/TypeScript/index.html","95dd1b6e6fc5f09d19e4fcf5d0fdd59d"],["tags/UTP/index.html","925f7ac963155502f84a197bc9823d2d"],["tags/Uglify/index.html","3980a96a2c5de81d36d13a90097b214b"],["tags/V8/index.html","cb7cadb5ff61724adcb8965a2eb52843"],["tags/VSCode/index.html","86445623eacbba424b694fdd74130a36"],["tags/W3C/index.html","718108334ef6d93037f78cf538f12b66"],["tags/WebAssembly/index.html","252b8d820eb45ea0a35cb8c573a8be0c"],["tags/WebPack/index.html","fffaccf9f57bec9892d7d524e7933c54"],["tags/WebSocket/index.html","62a3374e3dcdba97a9d87ab7299d6257"],["tags/WiFi/index.html","3ed572eb26c85b95e678898e380cd0aa"],["tags/WiFi探針/index.html","6706c6427d57f053ef86c241d1f6e606"],["tags/XMLHttpRequest/index.html","92b02caaa63e8acd14b9ad9628a3135d"],["tags/apply/index.html","2a6de3de3ac540278752f884322b0526"],["tags/bind/index.html","774435515bbef2b19c8421d6d8a1dddd"],["tags/call/index.html","437eecf5c1882852a5dcf17e2b3a2227"],["tags/const/index.html","3256709d8127641f5e7e8ab8ed18b77e"],["tags/export/index.html","4347a52a18301e4a353c7035276d9dea"],["tags/exports/index.html","4fda8d4ae19cec2ea735cf4ba435b070"],["tags/import/index.html","3113d70a42d449a0bbaaa93371e9c027"],["tags/index.html","e312b350ed9e18f63ce8f863f33e2d78"],["tags/jQuery/index.html","ccca4eb52dd5b31d517ee23646055532"],["tags/let/index.html","855d51e299dc06efef609e4a9703d902"],["tags/npm/index.html","ede79552deba835feac985087fb3ff24"],["tags/packeage-json/index.html","3b2576ca1dd0e11f1f021a22c7b11480"],["tags/require/index.html","39dc47a473f68a7185ae8fb90bc9c8c9"],["tags/runtime/index.html","27997417cf78a35799ddfee7bac53c5e"],["tags/seaJS/index.html","e38d8e0f605e8c224ac47b41595d1b02"],["tags/this/index.html","508d05d0ca0c246572c33f8e6df11480"],["tags/tsc/index.html","01346c890f5c4e02dfe0de93eb8b1c74"],["tags/tsconfig-json/index.html","a6c504cb582459e433acb74efaaf8dd8"],["tags/var/index.html","8663df9aef73f1c90fd5b60086b5fe70"],["tags/中頻/index.html","8b653626db555da777b0ffa2f71dc918"],["tags/交流電/index.html","e37898e48cfb1cc7cba0d1565c2c06a2"],["tags/人流監控/index.html","302f5aefb6f9dc0eb91bb6ca792a3374"],["tags/人類/index.html","fb266d17feaa91525381a27e01fa5d98"],["tags/介質/index.html","77041bf78b6aed6b3073c277638735c8"],["tags/傳輸層/index.html","6adf71c3c67a04582f626930b7a8b2e5"],["tags/光纖/index.html","c693df476dfe50364cbe204dac787bb7"],["tags/全雙工/index.html","407d451f1ac722dba22eb7c9bb7284a8"],["tags/前端歷史/index.html","1bef49e3e8e634ecc05be75de74a8831"],["tags/半雙工/index.html","0e260da9a9a355ad846429cf2486666f"],["tags/協定/index.html","a3dded84f1eb31c511c4823095362c96"],["tags/厄斯特/index.html","b4480a00dfa924b96881c507e43ddc8a"],["tags/可見光/index.html","cb4b529d7c07912f635919a8a9490324"],["tags/同步/index.html","d2a97fcd3f2b1063bb7f7cfbbc8bd28b"],["tags/同軸電纜/index.html","8173a3e87970ebc180d55db8d715d45d"],["tags/單元測試/index.html","c827e2478b44145b1c83e9e78ba104da"],["tags/單工/index.html","25b63463c0d3987109b33a704e529365"],["tags/嚴格模式/index.html","c74bcf1d07c66a8c4bd359738ab54290"],["tags/國際電信聯盟/index.html","3705ef170411d9dcc1eb8aef157f4424"],["tags/基頻/index.html","e1db10e2d6a68c4d057526148a641a49"],["tags/多工/index.html","f37d7a37abd7b3918302db12b09cfa59"],["tags/大腦/index.html","8c9c7c9980d70e3f32439509e278c2f0"],["tags/定位輔助/index.html","b73d1c353dd0d09ddfe0d4c1b5934c96"],["tags/實體層/index.html","66e3256609dda34c0ce06bc41d2448e3"],["tags/封包交換/index.html","97146ddabc2e50a12c46a357e0cc62f6"],["tags/射頻/index.html","43950fc16d83d663c7135f5a63d45abb"],["tags/尼安德特人/index.html","28bfc5fcdb216d38da5e6d95eaeab56f"],["tags/差動式曼徹斯特編碼/index.html","78ea14ced987657c09d922ef3f62d786"],["tags/差動式零補差編碼/index.html","032935b6b1d60a496fb9b07123e56585"],["tags/廣告投射/index.html","7061a271db560b26d7689f8a5b863d3b"],["tags/弱型別/index.html","f65b2db90c0ae681f72aa34e737f62d0"],["tags/強型別/index.html","585ccef25407ce79738b3714725101fb"],["tags/應用層/index.html","48ea57fd75d7f2682ca7cbdbb24bf5e2"],["tags/抽象檔案-d-ts/index.html","157b2d4a6445584033dde90e3389cc8f"],["tags/數位/index.html","689f69ac134ba8f016cbe8fd0ed46d67"],["tags/時間/index.html","cbf8c7397cb8980b0e7a0bfa44379dca"],["tags/智人/index.html","00aa0e8e48082b7298bf2bf5577540d3"],["tags/曼徹斯特編碼/index.html","73ca03ef74148fab2d1e617dd82f4647"],["tags/會議層/index.html","69ddafe72cd7af67b62ef40468f48203"],["tags/有線通訊/index.html","2385f1ae8197a8b8577e500bc1219993"],["tags/汙染變數/index.html","38b506a0489277be36ea7f891bef1a99"],["tags/法拉第/index.html","9c8b7a2c812c0a953ec5b768cfda7140"],["tags/瀏覽器/index.html","5e42d6d16e53c6a7ce96d55cfeb48c85"],["tags/無線通訊/index.html","1cfd8c26f09b88cf308d6a4ebcc0a570"],["tags/特斯拉/index.html","6f071b19aca72f2dedb13d387131aeea"],["tags/異步/index.html","eff3a92105b0e38d5e1787ae36fe0d6e"],["tags/磁場/index.html","6b190d877e0feee7c81d1d2352a16be7"],["tags/第一次瀏覽器大戰/index.html","a13a084d4c42f57e90d507f890550333"],["tags/第六代WiFi/index.html","9d126f0471f995fb4dc692bfa2ea8734"],["tags/網路層/index.html","2185380680eb0797c87651ada04aa7e0"],["tags/線路交換/index.html","a207525b8dd22ed6139689cadc96c179"],["tags/緩存/index.html","6ca9c7cf0212482f139adcbd0932c43c"],["tags/聲波/index.html","0c3c6421eb9275ec4d606a3a333db96d"],["tags/能階/index.html","3bdf6df8e072f1bfa18396561ab515c6"],["tags/腳本語言/index.html","fd5066ba5a298f3df8d1c6f9c8d4dbce"],["tags/行為監控/index.html","40acf1af70e0779905806dcfbd77cf9f"],["tags/表現層/index.html","9bae018a3afb9bc777c1006ce64ba64a"],["tags/解釋型/index.html","75ed22a2e457de407bbfe13205fb9254"],["tags/詐騙資料/index.html","a90926dc97eb3216594a80ebc8a0da1a"],["tags/調變/index.html","9c4a3f6e5330783173ee72a80c1dc604"],["tags/資安保護/index.html","351872f7b76dcccfb71b2440d57097ed"],["tags/資料鏈結層/index.html","bddfe30c23a6a817e3f311b06a1f7279"],["tags/跨域/index.html","4e354d6fd77c8d48fbb8aba70ea722b4"],["tags/身分證/index.html","81c11587b995f0701fabb960a269d572"],["tags/通道訪問控制/index.html","c7982a6104a5c084ed56831d675a4f5f"],["tags/銫原子/index.html","6af4346db821f06989bf14a0f649fc16"],["tags/閉包/index.html","e7c7cb69ce610d3854943ada1dfbd28c"],["tags/雙工/index.html","d28f5f2d5b1aa58f8ae1b868fe0b327f"],["tags/雙絞銅線/index.html","1243d0783f51d863c597105b403c1a05"],["tags/雜訊/index.html","2bd11edfa8251e2741d4d8b418f77736"],["tags/電場/index.html","7a1bacf5402e6a96c370689ca39110bf"],["tags/電磁波/index.html","2ac5d3460665c1e991df567a50d2310d"],["tags/電視/index.html","bd73071c7ee49c7c09684500734b4c83"],["tags/靜態優化/index.html","d8e3082d66440587af140481b2b4f187"],["tags/頻譜/index.html","97b6dbd2138c2fb43eeceda7d64e24c1"],["tags/類比/index.html","f7c9f6d966ded56c317c5b2e7d2429e1"],["tags/馬克士威/index.html","5b954fb82bfd607ada3281ee0aa9cf3a"]];
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







