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

var precacheConfig = [["2020/02/14/部落格介紹/index.html","0da150f41b7937223cfa41c21c00beac"],["2022/06/02/前端P.01 - 網頁三兄弟/index.html","068880f99b72663902497abfb77b5bce"],["2022/06/02/前端P.02 - ECMA組織/index.html","a50b3f6330189a7d5459c27f0f79882c"],["2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","4015672aaf9cf4602c082ea1b472e245"],["2022/06/02/前端P.04 - JIT & V8/index.html","b391c1f62ebdbaef2917b9be3caceb2d"],["2022/06/02/前端P.05 - TypeScript/index.html","13937e4c98e2f8bd82921011844920b6"],["2022/06/02/前端P.06 - WebAssembly/index.html","eb2b7af0d1c71a5a96861d12ac73bc81"],["2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","5c61a3304482ca0711c4aeda89a53bf8"],["2022/06/02/前端P.08 - AJAX & 跨域/index.html","ab73e0b511ca732735dbf3e3f3bb7862"],["2022/06/02/前端P.09 - 同步和異步/index.html","16d719c51aec7ff8fa5f49a62ab7c194"],["2022/06/02/前端P.10 - Scope/index.html","f9fb3e5caf090305cafce3f35fec3822"],["2022/06/02/前端P.11 - 模組/index.html","34a4212653597a40051393963278aaf4"],["2022/06/02/前端P.12 - NodeJS/index.html","0baea946339e9dd56b33c2b9c5d1e2c8"],["2022/06/02/前端P.13 - WebPack/index.html","cda0e9abd4cc0c186954110e3072e06e"],["2022/06/02/前端P.14 - 單元測試Mocha/index.html","159bfc8b419842d365366d1b0d32bb1c"],["2022/06/02/讀書P.01 - 人類簡史/index.html","22f57a95edc784cbba1c392e53476b4b"],["2022/06/02/通訊P.01 - 協定/index.html","3614cbf8c62fcd15d1823f9089010ca3"],["2022/06/02/通訊P.02 - OSI七層模型/index.html","57ca2aa82ab22b7804a214279e6cf3fc"],["2022/06/02/通訊P.03 - 實體層、介質/index.html","de81793daa86f2143de1d47ec6082fcd"],["2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","730bd51015e800c421d2499d5e6651c6"],["2022/06/02/通訊P.05 - 資料鏈結層/index.html","56f45148bbee974cfb6375eb9d0b3e3c"],["about/index.html","efc81b0e2664be74466b0ebfc913c267"],["archives/2020/02/index.html","9e582d2298bf5877c856dcd4a7799f33"],["archives/2020/index.html","23eab5f9d8a31aa3646762466b9dc056"],["archives/2022/06/index.html","e03daac6ba3249c2c87c1c0af5c122cc"],["archives/2022/06/page/2/index.html","ed81b0320fcd84a0f0ea484f9d046e4c"],["archives/2022/index.html","daa3bcfc07e5671a7c9f7e763f53ff69"],["archives/2022/page/2/index.html","d8a907e7f00e6dc0d812eb3a94724ea9"],["archives/index.html","d99f7adeda73bc97eedb4e0389dc3089"],["archives/page/2/index.html","23a6ac56f7d7aa762b6c8d02bf0ef2d9"],["archives/page/3/index.html","bb1c0b0e9cb46c5b9934c3449dcd9ca8"],["categories/index.html","34084705cc3e302d63302baf7288b624"],["categories/前端系列/index.html","19069bb21524c8f714b0d0e5de998eba"],["categories/前端系列/page/2/index.html","b17912b6e5df8e862d4f751479449e4f"],["categories/基本文件/index.html","d2bea5594da874980f3da056a8d4af19"],["categories/讀書心得系列/index.html","16dfb26714255af589ef75dae0559535"],["categories/通訊協定系列/index.html","bddac193d3840b467efee54dff24bcb8"],["css/index.css","d596cc019db5ad77d44e30d4134e0a21"],["css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["index.html","b6b5cb74abcc5fcf2c5c0081bee794ab"],["js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["page/2/index.html","d597f2dd8b40271b918f87f80be5ef14"],["page/3/index.html","16344d5a5641dfaee3bc36f3e496595f"],["tags/16PSK/index.html","98999531f86df7b6329e8149760808a3"],["tags/1G/index.html","9da7e23a129d9df7e24256ce7d6a13ae"],["tags/2-4G/index.html","cf4fa167ccf91ae298aec5b0cc6db8cb"],["tags/2G/index.html","a0b3efb96300c8d267389df76875ccf8"],["tags/3G/index.html","94cc75123f4c497e88ded2f95a5edda2"],["tags/4G/index.html","da0c77b6b59bae15fb24e4e0cbad9ed2"],["tags/5G/index.html","17c7fe0dfe44dc260a3c514cfd778011"],["tags/AJAX/index.html","e74951616cda818a0d6ff2390e316798"],["tags/AM/index.html","9bcfe978e82d2cfe5b5f303b2aa7a499"],["tags/AMD/index.html","0e6a8096aae6886c878cae33dc014320"],["tags/ARP/index.html","924f2df525216701478b221fb9420f7c"],["tags/ARPA/index.html","cf8600c9b867276dbc41778034f7f7c1"],["tags/ARP攻擊/index.html","a488582d62b5e32377000de639515f68"],["tags/ARP緩存表/index.html","141729a1fa0b71a73fad956d660e2ee9"],["tags/ASK/index.html","1c1e742528eacac239f4e45dc1cae955"],["tags/Async/index.html","988f7a0ae6c1b5e4aba811027953f92e"],["tags/Await/index.html","35d61377155246b3624c21848cf845af"],["tags/BPSK/index.html","3a4586145f12a3286bfb40cbd3242648"],["tags/Bable/index.html","5acb3c57b99a4c47d32c13b3b8ddcc56"],["tags/C/index.html","16c355390298081c1fb7528fb5df8434"],["tags/CCITT/index.html","b4d79dca6fa92ebff7155fc5a9bb38cd"],["tags/CDMA/index.html","65c7b71e71f10526a978f36fcf391b8b"],["tags/CI-CD/index.html","6833b35d12b802df93f2c47649c96dd3"],["tags/CI/index.html","fdb12afcbb616d702c65bfa0eb647224"],["tags/CMD/index.html","15aee9e25bfeb3a87dd6253bcbd06d99"],["tags/CORS/index.html","1ab6e73b090c7d31171f3c0bccc47a92"],["tags/CRC/index.html","b5a86e07dbb21f56c22a05b40e64ae0b"],["tags/CSMA-CD/index.html","b870ad16361d6f1abe7cc636ccaf5ced"],["tags/CSMA-CS/index.html","f754d72afeb0e89d61865e5d9c186c16"],["tags/CSS/index.html","66985aec0e8db14f00bb9d910d2c96ea"],["tags/CallBack/index.html","ecb970004285d746db095ec97b9282d8"],["tags/CodeStyle/index.html","f5cdba63d822c216cd829496e6e0adf3"],["tags/CommonJS/index.html","32acee94e6161863627652929991f6cb"],["tags/DSAP/index.html","adee1e0856cad9798dcbb0d83925fa21"],["tags/ECMA/index.html","0ccca1434325d99e7601a3a311b2b151"],["tags/ECMAScript/index.html","d0eb639fc9e4b217a35480d7a6b3ca32"],["tags/ES5/index.html","7120e861a894d24b2bf3736cc88b34b2"],["tags/ES6/index.html","ece040232d37995657dca92a3af1d407"],["tags/FDMA/index.html","9f472a55531c0507ad98449952fe446e"],["tags/FM/index.html","df6c9cef1761cb7a5161d39543b17ab9"],["tags/FSK/index.html","8bc8e47db5083f8551cec516621f97c7"],["tags/GC/index.html","40c3d995f239cb9b6d1249b8722b26db"],["tags/Google/index.html","828f51108a98f30573e4da19d646f1fc"],["tags/Hoisting/index.html","996533f5dfddbd3ef421a39eec7d1d68"],["tags/Html/index.html","5f6fc332ac203987367c02000e39da57"],["tags/IE/index.html","a5c4e088148d1797bfd45dcad027ab74"],["tags/IEEE/index.html","3e7e0df76dfac43de8abaa001cce3194"],["tags/IEEE802-11/index.html","b76bbbb5284701b096b9b435a5347358"],["tags/IEEE802/index.html","41165a3f4c20e5ed450f9557dbb73e0b"],["tags/ISM/index.html","90af53b9ab82916d288786248b62683a"],["tags/ISO-31-1/index.html","c5974e47cdfc4281048b259e3682ea13"],["tags/ISO/index.html","8dfc304b36f5b381929cf35a28d64ddc"],["tags/ITU/index.html","09f2f04ecd392250642a7f5f7b3288c7"],["tags/JIT/index.html","396ed03030e7568ce69a62e208d65d87"],["tags/JSONP/index.html","e63bcd0b4467a2d2d7e147f0b3ca9c2e"],["tags/JavaScript/index.html","779de0dff0e825ff553d025237db2f6e"],["tags/LLC/index.html","840efc350b61e6f8d03e2fcc89c74547"],["tags/MAC/index.html","7e19515757b6f8e9890e4ac67f6e2f58"],["tags/MACAddress/index.html","c1446e90a61055b43c640461fd187f7e"],["tags/Mocha/index.html","af8631504dccac393387caddbb77a558"],["tags/NVM/index.html","7fed9dfa28b6629ec25e2f2726276d93"],["tags/Netscape/index.html","c57a08c1ccdc034c8b59ef6fd326fad5"],["tags/NodeJS/index.html","3d72da7734fb6b6323a00e5a5588ee03"],["tags/OFDM/index.html","171dc6609219107b392aaf3b7be8a664"],["tags/OSI/index.html","29cb046db8ce9fc91f4a38fc591868d1"],["tags/PM/index.html","03e70f2f79fe9eaaf22b3e6a6d852cc5"],["tags/PSK/index.html","5ba9d9ba2948c696b5fb593a6da7363f"],["tags/Promise/index.html","d5fcfaecd123edf6a6c1dafa731f311a"],["tags/Proxy/index.html","1179362be9daa58abdeafce1e294985f"],["tags/QAM/index.html","56cdd9c8738e7da46c1146865ba17363"],["tags/QPSK/index.html","fb1dadb1782eedae7bd744272275331c"],["tags/RJ45/index.html","88213d42edb8142d8d9e87d9db51db3a"],["tags/RS-232C編碼/index.html","4ba090c7c4d7f33f71eff4f68f7c2871"],["tags/RequireJS/index.html","438ec385380f3f9f85481d374d21e91e"],["tags/SSAP/index.html","f08f77044bebacec6acf0115ecc9c169"],["tags/STP/index.html","99f8a7c8d43fb8530190bc25f4559f42"],["tags/Scope/index.html","cb38131762220e5759d88d1983741264"],["tags/ServerJS/index.html","2663a4de99d805ee62b3911f23ae6a74"],["tags/TCP-IP協定/index.html","c9867efb332711a1a852d3d738893f88"],["tags/TDMA/index.html","7627007feaee1ed207e611b33c071cb9"],["tags/TypeScript/index.html","91fdc0ed5b2816ea2f2a415bcb77e125"],["tags/UTP/index.html","58c81045530d908510124ddf93da84ae"],["tags/Uglify/index.html","2c8ab64f965db462aef9c270d5f11145"],["tags/V8/index.html","988685f727208c0041d0939d15208ea3"],["tags/VSCode/index.html","9499b3817d87cb58357aa9bc8d632eea"],["tags/W3C/index.html","f33680ebea19c144e75e4272af13c7d2"],["tags/WebAssembly/index.html","119852323b30579ee8696e85cb07235a"],["tags/WebPack/index.html","99c441219c4e7187f8af0f6adcf4f2a9"],["tags/WebSocket/index.html","8b6bdda8e30a9b7030ebee3738292817"],["tags/WiFi/index.html","ac41884cf4094f6fe247d2e14eec555c"],["tags/WiFi探針/index.html","3d7a5e5000e73817fa96933735e58806"],["tags/XMLHttpRequest/index.html","93d2b819e29646c0de13079be66ac0d9"],["tags/apply/index.html","8de296ab62b588b6f650daa2af713efb"],["tags/bind/index.html","0af0669d499805ab0b77b6e3c99e10d0"],["tags/call/index.html","a6555ebfaa53c9c8f9e149ef031c2742"],["tags/const/index.html","36966a6f047f47edb04d55337637a32f"],["tags/export/index.html","ffc9377812e8e11b844879a5e4b8aa0f"],["tags/exports/index.html","c717d8010d2634bc0609b1d4724d3bf9"],["tags/import/index.html","582c9adb7303af92e0a6591ce1905949"],["tags/index.html","b5680d621e595ccdd0b98e8ee91de421"],["tags/jQuery/index.html","659cda594f96d6893f944f792596ae35"],["tags/let/index.html","bdff00cf6671d0356b6fb19522723d8d"],["tags/npm/index.html","d1c94eba7a621544a07b5713d7654325"],["tags/packeage-json/index.html","58485ef762c1a32e658c0403391954cb"],["tags/require/index.html","8a6ddb7a224536e5d7ca2cd67c673e6b"],["tags/runtime/index.html","bed9ceb01b1a34083589b788d511fa6f"],["tags/seaJS/index.html","786135dee1adc4c2be1f0e70955731b4"],["tags/this/index.html","f24e6ad6c01404f7dcda31ecc5ea9aa0"],["tags/tsc/index.html","298bd82806643b67977a16f8f3ed83a5"],["tags/tsconfig-json/index.html","557144c6ff431e69a991c7abfe1207e6"],["tags/var/index.html","7331e7d40d4d2a230179a77c5fa6c635"],["tags/中頻/index.html","d72d98265ea3d894b4b4010c0cdf62ce"],["tags/交流電/index.html","55c3213de2505267571d7fb67659428f"],["tags/人流監控/index.html","e55063cf11473d2db720b2048a5e86c3"],["tags/人類/index.html","ad967e79ecb4c942727eca231092e3d2"],["tags/介質/index.html","8a44ece7054d75b8a3535da00bce6164"],["tags/傳輸層/index.html","954c1afd2a830d52324abf7cceb143c3"],["tags/光纖/index.html","23fb3f30cff6d6a244e5a954928fe2f3"],["tags/全雙工/index.html","a9971e72cf7698dcb2017faed7caba30"],["tags/前端歷史/index.html","36e123d0d6ec2e334b1b855188b751e1"],["tags/半雙工/index.html","0b0c02e338c6f05b867f62c8a97b7dfd"],["tags/協定/index.html","bef37ec53f6c5098a2857097cf2aac22"],["tags/厄斯特/index.html","a4243aa2ad1c8bba7cdf6633047bd302"],["tags/可見光/index.html","5b57b14f68f97b31de8448c082005584"],["tags/同步/index.html","b9b181c9c974ad1284903fff4681113c"],["tags/同軸電纜/index.html","1516a4b042bd466330f8f0e07598a9fa"],["tags/單元測試/index.html","37d0f6c068ee46f31670fde1fc3d99e3"],["tags/單工/index.html","77dd768d5d1c999c46e657af8a0faa28"],["tags/嚴格模式/index.html","8c84b47fc1808ba54671e8c34f610767"],["tags/國際電信聯盟/index.html","c051138b484d7623522a4d90065474da"],["tags/基頻/index.html","58aeb3996e96e5f9128bed64284f7aa1"],["tags/多工/index.html","5cdd21d05921092a695684a8315a6e58"],["tags/大腦/index.html","57dc9f612583a8bf8bc58b68a1602c1d"],["tags/定位輔助/index.html","9813f6abcb2b1d873890fb760cdafa0d"],["tags/實體層/index.html","f678f8b0fd667b2adad7c253e5222c95"],["tags/封包交換/index.html","daf417bf046b5832b07c4eb135b5f74f"],["tags/射頻/index.html","77f9c47eb4a69e01db9d3d66de06465a"],["tags/尼安德特人/index.html","3439ee82c08995ef9d08ae1843e7ab7f"],["tags/差動式曼徹斯特編碼/index.html","c68ee3a509e9f1f738c3b29908847437"],["tags/差動式零補差編碼/index.html","b0a7d7f49f42a288fbb31d78f8f70113"],["tags/廣告投射/index.html","9f9bf5a2520cec22906bbb1c2baeecd0"],["tags/弱型別/index.html","53434a8ee426ca69c917fcc35173b8a8"],["tags/強型別/index.html","aa890d4bc95d64574b8c36e1e0fc1969"],["tags/應用層/index.html","0ffad89d1ab1a2732ca2749a00596245"],["tags/抽象檔案-d-ts/index.html","6fe39e9a327670b167ccf75aeb07c7f6"],["tags/數位/index.html","257ada794c4430673f2ba94867a9f85e"],["tags/時間/index.html","26ea4ebf925d837aa23a1e807c616723"],["tags/智人/index.html","57b5b3d44cc23851b28dfb7e8397ffcf"],["tags/曼徹斯特編碼/index.html","f97af576ca4c7308b2aff46268fff310"],["tags/會議層/index.html","5551a7e241a7f08a4723c9d575e26c8d"],["tags/有線通訊/index.html","ae5429bd1db6a8c0d14c5d8a30462ddd"],["tags/汙染變數/index.html","f3b31c5ffe30d0c8acf95726f7be95c1"],["tags/法拉第/index.html","af40268f6e1f2255f265536492e14320"],["tags/瀏覽器/index.html","2f83fa63e123ae86a36e841842761de7"],["tags/無線通訊/index.html","d2e8f6cb419d160f48ec011de0fddcd7"],["tags/特斯拉/index.html","a2cb7763e7bdcec97e5c1a1eff262037"],["tags/異步/index.html","19343d1b60d1efba504ea955811e2abb"],["tags/磁場/index.html","6ded76a23f2daecf64d74cc588e25be0"],["tags/第一次瀏覽器大戰/index.html","070ef5b4ba6db045e0abc2645762ec7b"],["tags/第六代WiFi/index.html","d0547b64596cecab337c0aacce845bb2"],["tags/網路層/index.html","17e5dea1605302721ee8aa40f984f75c"],["tags/線路交換/index.html","bd7237088d54049f9b5dcc29cc575cce"],["tags/緩存/index.html","9110f420968d34518fdad2c5a800c691"],["tags/聲波/index.html","76396c6aa876c01d8956951ab6da7e09"],["tags/能階/index.html","de26df92bf9881a3594e9de468ddad73"],["tags/腳本語言/index.html","a0aef47b5d78c74aa413da29816f32e4"],["tags/行為監控/index.html","0ebd189671e89f7c46c135a531910fca"],["tags/表現層/index.html","4e9b1b0094c15984957a1dd46e7e30a0"],["tags/解釋型/index.html","6927fa30ef961b2fc845bc9f962fe460"],["tags/詐騙資料/index.html","2e64c6c5f935eac162243007a2c3b9ab"],["tags/調變/index.html","ad72dd07e47d851dd9ffe89dc10110dc"],["tags/資安保護/index.html","31c34e4fcdea404da88dafe461b08281"],["tags/資料鏈結層/index.html","30ec45714269173c3c95f455ca035423"],["tags/跨域/index.html","4fdf6050cab8f37b9c3cafdad121b1c1"],["tags/身分證/index.html","e8ed6987080266669042a16ae53ba12e"],["tags/通道訪問控制/index.html","c134b953594b78c29179fdc64de4ac32"],["tags/銫原子/index.html","029af1de1f8407c8aea0f090ed3de7b7"],["tags/閉包/index.html","a17b3b4c72c8dab233a1471a2b579930"],["tags/雙工/index.html","73a5511cdc17cea801ebff3e57178e49"],["tags/雙絞銅線/index.html","24f0d238573ca0660dd2e3a64a127d5c"],["tags/雜訊/index.html","9e970eac8b87d5b5b449b5d22de384eb"],["tags/電場/index.html","3b2107d8dbee13cc8fe59a3c7cd16234"],["tags/電磁波/index.html","a92ee293d4d8eaa5d1b84503dd3f5a9c"],["tags/電視/index.html","de26420378981d9d01676497e1cf7aaa"],["tags/靜態優化/index.html","ca4de2f1d30ea59b01ae8ec379940d91"],["tags/頻譜/index.html","c4ea653f1d7ede5bf6ac541f7d556f8f"],["tags/類比/index.html","dc28252864a5550813f0ecadaa57d588"],["tags/馬克士威/index.html","ee03bc14be946c4d34c0177697f929d7"]];
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







