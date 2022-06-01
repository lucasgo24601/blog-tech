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

var precacheConfig = [["2020/02/14/部落格介紹/index.html","11d507769c6c363786eb8d0b99982e24"],["2022/06/02/前端P.01 - 網頁三兄弟/index.html","786a42f7e9a3cb473ed4ba2a33afb513"],["2022/06/02/前端P.02 - ECMA組織/index.html","9d9d22e40831e0305aa47593eec681e8"],["2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","56b7bc7625023f602ada4efed1cac282"],["2022/06/02/前端P.04 - JIT & V8/index.html","30ccf01d94110101002595d3a71726e8"],["2022/06/02/前端P.05 - TypeScript/index.html","3e00a0279e300546c936c19e55302bba"],["2022/06/02/前端P.06 - WebAssembly/index.html","9f4dc9025127604c78f6810ceb105b3e"],["2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","74d71361987d1e3660803bdba568b09f"],["2022/06/02/前端P.08 - AJAX & 跨域/index.html","43bb3ae925a238c211f3754a4dc4d3e2"],["2022/06/02/前端P.09 - 同步和異步/index.html","fc1e1484ac38f26d7dfe565964782379"],["2022/06/02/前端P.10 - Scope/index.html","61e1352d9ea3d6ccc95f9e3fe460137a"],["2022/06/02/前端P.11 - 模組/index.html","e84a4d34dedd7f20505a865d18f72a85"],["2022/06/02/前端P.12 - NodeJS/index.html","29548461660eae8e29f0240dd04a8035"],["2022/06/02/前端P.13 - WebPack/index.html","426bcd260e3814ba4848f44a1447639a"],["2022/06/02/前端P.14 - 單元測試Mocha/index.html","ed71b067ea98a3a50f9aab67afad8818"],["2022/06/02/讀書P.01 - 人類簡史/index.html","e979afbbcc9128d7c5bdd88180a1e4d7"],["2022/06/02/通訊P.01 - 協定/index.html","aecb5914ebf88d0e614bd5865f169294"],["2022/06/02/通訊P.02 - OSI七層模型/index.html","e2c6d03f6b34366967e94c9854e1e65b"],["2022/06/02/通訊P.03 - 實體層、介質/index.html","1020380d3e5c829f197335cff2879a79"],["2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","af1d49aebf63cd1533d68ab373b003b1"],["2022/06/02/通訊P.05 - 資料鏈結層/index.html","79fc505f1d64f856b6719f793ab78bbe"],["about/index.html","c7380c7db5917f847c9f4449786a9b8b"],["archives/2020/02/index.html","39cf0ec5ff34e9d5ad1a1c32f1806660"],["archives/2020/index.html","a51e501a0c965a12c23a60fa13cdc8d9"],["archives/2022/06/index.html","8d25e5a8a2a9722bc01459e12bfd7355"],["archives/2022/06/page/2/index.html","7da750459bf62dc41efa8fad70c48d8a"],["archives/2022/index.html","08f2b7fd185a813cba48df4b34cf1908"],["archives/2022/page/2/index.html","597949751e093e8c0a9d3bbaa6385eba"],["archives/index.html","f47de871f409ff85817e33e64a7cf6a5"],["archives/page/2/index.html","984dbe060789e4078a8f4a5661f00432"],["archives/page/3/index.html","d684abb22cb43302a473572cb92a877f"],["categories/index.html","f40d0035c6f52369f6faa8a1e8ff902b"],["categories/前端系列/index.html","6a25f7e908c5c68197edb59d91f27aad"],["categories/前端系列/page/2/index.html","4c40ebd117bbec2eb05b7768b18051c8"],["categories/基本文件/index.html","9ab51e3397c9c1a66e1f5c885cd42fff"],["categories/讀書心得系列/index.html","fc1b9041116a47377285ac945b7ddc3b"],["categories/通訊協定系列/index.html","b1767de3e1f63f4815bbf970f4fea436"],["css/index.css","ffa6854e04063a25e3bb93b4de2eb146"],["css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["index.html","40d7a82c5da220b933abcf386e4540a5"],["js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["page/2/index.html","0d49251bd5187e06088059d71974a017"],["page/3/index.html","da99d0b654e4c4935ddbca9f56580972"],["tags/16PSK/index.html","c62bc552beb4027a66644aea6318b8cf"],["tags/1G/index.html","ff0a1c225ffa43a67399752cd655e8b1"],["tags/2-4G/index.html","c838af6cc08d164b586c79e01cd505ad"],["tags/2G/index.html","b7a24da3abb993d1c23c0575e390aab3"],["tags/3G/index.html","3f3d456e3967a13604143c3a84a699dc"],["tags/4G/index.html","79ebb251304e17ade4d9e6c5a3d406e1"],["tags/5G/index.html","2e5b2ca47148a6ac04a88454d87709b7"],["tags/AJAX/index.html","4be34648e4a7b92ef81a77a94ed05599"],["tags/AM/index.html","cb7126039bc8cb504b8eb175a4d95b7b"],["tags/AMD/index.html","15e0e4766f622dfdb771742625a05e07"],["tags/ARP/index.html","2e895b9549b2ccd77dbc7940499b23c2"],["tags/ARPA/index.html","46f8e149767ef742b19f860538a96572"],["tags/ARP攻擊/index.html","50fabb1ded1a0340444cee4c0ece4494"],["tags/ARP緩存表/index.html","1e6d688b3f32946509062088e86f017a"],["tags/ASK/index.html","762ef6b45bc7f8385fd23a2d2ebc7ae0"],["tags/Async/index.html","188f658823343021f84d14c96075b5f5"],["tags/Await/index.html","1d2a77e97fc75ca2282c7b566425b630"],["tags/BPSK/index.html","562ea1084a3903664cb462b8cc4f1992"],["tags/Bable/index.html","6beed06dd23196520fae5d7773ab7069"],["tags/C/index.html","454650f682fc559294ca51c80eb0bdb5"],["tags/CCITT/index.html","1b1774b5043f1150050572ce317bf222"],["tags/CDMA/index.html","cd0856a9ec4f8849760c5ed53c3c8b31"],["tags/CI-CD/index.html","6d12f3fc015344d6a48beab6a16ce263"],["tags/CI/index.html","ba59269e4013b4cafe19365639d64105"],["tags/CMD/index.html","7333c27e048113195ba34af5c55794a2"],["tags/CORS/index.html","40a709d5e91c06fb4bf15a53d2138910"],["tags/CRC/index.html","80dd195c2570bc0fd055245ca1d9260d"],["tags/CSMA-CD/index.html","2c25feb2e2007dfb66cf607ddcfb2874"],["tags/CSMA-CS/index.html","35ac1d90c71ac79c176b49fbeabb6f87"],["tags/CSS/index.html","fb48e8ebeba8a8d5449d473820737494"],["tags/CallBack/index.html","f423c8bea10e987dbc1929c3abaf6988"],["tags/CodeStyle/index.html","9e70001edcfd75b8aeec2d3a7c56c7d0"],["tags/CommonJS/index.html","8115200f2963457b156bf682c9ca80ea"],["tags/DSAP/index.html","2067647ebf62ec8cb4e7a5b28558756d"],["tags/ECMA/index.html","5b76bb99fdd103ff4b7684e9706e9bb1"],["tags/ECMAScript/index.html","ded10b6e00c8e19bb68e8b2dd4b268cf"],["tags/ES5/index.html","02ddac4d5b74b743b10869d57865a8e9"],["tags/ES6/index.html","1f526ce927545fe0f178dda9739557cf"],["tags/FDMA/index.html","28b5a2c5411894d69734205a22f46adf"],["tags/FM/index.html","8e66756538ff85cdb72ad5baccb3704d"],["tags/FSK/index.html","0a550be6f162c2c2271bbec947e1d7b7"],["tags/GC/index.html","262c299e7ee0d664bd578db41608ef35"],["tags/Google/index.html","fd463f1ed73f6178fc426d0cc03a1685"],["tags/HTML/index.html","16e000bc4fc615dd7f90abe1a3d5b96f"],["tags/Hoisting/index.html","237a9ce68a0257bb6dac10ba6946ee03"],["tags/IE/index.html","36a12e34a42aa5dbe5a3dbfee1a00c94"],["tags/IEEE/index.html","8c0e90056d8c195a7e622a7fbbb720ab"],["tags/IEEE802-11/index.html","aac3bf0820b234a51ab3e0fd89233de8"],["tags/IEEE802/index.html","3430b32cdce62536888441e17628e00d"],["tags/ISM/index.html","430c9f54cfb6366fb8f526449c7851f7"],["tags/ISO-31-1/index.html","69b18125d08fb91402fc10bebcad9312"],["tags/ISO/index.html","06c245f55ac088a17cf65b332277da8a"],["tags/ITU/index.html","7916f75dc52f0f5aa634a105b8d57d4a"],["tags/JIT/index.html","0257cd134b09ae78b57ef9f0cde82838"],["tags/JSONP/index.html","0e32c2d1727a17f4ac6650ce67ff9e7a"],["tags/JavaScript/index.html","6e9177f36a396b02bc4d60e4f0071bc6"],["tags/LLC/index.html","761588ac81e6815b214ca5698d12832b"],["tags/MAC/index.html","74fb2c6d5e51cc9ff9c0e49a7cb65da2"],["tags/MACAddress/index.html","60d5b6e9533b2d4a3f93cfeea07dc8e4"],["tags/Mocha/index.html","99642eec7b3589d9dd38db74f92445ab"],["tags/NVM/index.html","4d2421f9b66eb6be04684969e8bfe480"],["tags/Netscape/index.html","3b73648f900c49fa26e9c70f032afd55"],["tags/NodeJS/index.html","1d8a2d0cfc69857d760b9b417cc14521"],["tags/OFDM/index.html","1dc15a9caf2fcab2487b81c128c76149"],["tags/OSI/index.html","f6cf50df386fd60f57e5ba90f4447b0c"],["tags/PM/index.html","286711fe946eebc6e0eac9691879bca1"],["tags/PSK/index.html","f79590a5d174ad4d8629bce4fe6104c1"],["tags/Promise/index.html","36793186516d01ef60a08bab91a46080"],["tags/Proxy/index.html","6451b37008809d6ab989cf8d78c5ce40"],["tags/QAM/index.html","4c7ae023adf0b20afd40bdc36f4e4530"],["tags/QPSK/index.html","31a87cab5037d97ebf58a7883357441a"],["tags/RJ45/index.html","a66de39b749aee892680b30e3652718f"],["tags/RS-232C編碼/index.html","8bf931fa8dbef9272d4814486474a06d"],["tags/RequireJS/index.html","6cb362d0ff7c4f6f5847ac96d5fb367a"],["tags/SSAP/index.html","88a0be951973f3046bd934fff0fd13ac"],["tags/STP/index.html","de7facbba76e772df87c2acd9a229d65"],["tags/Scope/index.html","7fe7ff7feba3f02e38ee442b3e9ccae0"],["tags/ServerJS/index.html","a4db6d0555a6e210222586288e2ac39c"],["tags/TCP-IP協定/index.html","9e70bb8a135646bb59fff10f3ff7614c"],["tags/TDMA/index.html","adfb21b46de6090e09aefcd378d8824e"],["tags/TypeScript/index.html","1aa655b7606e06c5935be8234caefe3b"],["tags/UTP/index.html","a1fa88663bc267fe47b14419fec8ebb6"],["tags/Uglify/index.html","56c0120241147e0c1cbb33c7c546707c"],["tags/V8/index.html","554a26ba551d08ed00175a272a39b27a"],["tags/VSCode/index.html","d983f644bc635e1f840ec616684196b3"],["tags/W3C/index.html","c72c871214723f393ca0814a3ca74484"],["tags/WebAssembly/index.html","d63563dac7b25b4b7845903dc7e42cdd"],["tags/WebPack/index.html","d90f5d6f05ae4129d40118bddf3476c9"],["tags/WebSocket/index.html","c37f37fc7506a4e7006c62c515b49511"],["tags/WiFi/index.html","c837f5f74b218d60b65b574707da2194"],["tags/WiFi探針/index.html","fe0cb89137705c677c4c5ab830adfd7b"],["tags/XMLHttpRequest/index.html","880a08812a48ada2dce8a41bbbe08be7"],["tags/apply/index.html","aaab9b14219d5bd031d9d87994e6e0d2"],["tags/bind/index.html","00b466e2679352776918fc86cfd26013"],["tags/call/index.html","3508642c7c2ed19ebefee84157ce11f5"],["tags/const/index.html","4f3906b6fc9f6a17010120249162f01e"],["tags/export/index.html","c9aa8263a11047701961692041783a03"],["tags/exports/index.html","b1da2f85da2e0d659b096bc420f2fcc3"],["tags/import/index.html","3868c1264c0ab3eb99ca14e93ad84c79"],["tags/index.html","181d0cdc37984a4e8f827fe42012f5cd"],["tags/jQuery/index.html","bdafd2a8e60fe6c08f1ead4073d4f3c2"],["tags/let/index.html","6a07920e96bebac9a4e4e8cd75897a79"],["tags/npm/index.html","2a1301db2fb16f06c43cb6d5ec9e3f3a"],["tags/packeage-json/index.html","910354cead75b0f0317da4a107ea0b50"],["tags/require/index.html","9b5de03e28f2763c2c31dcc9b38f3da7"],["tags/runtime/index.html","a8c18031eef10f1bd9767aac9ca99fc3"],["tags/seaJS/index.html","e070c8a1df702ae8008f4663b1499210"],["tags/this/index.html","42f1aed64ba6f65863181b28374319ee"],["tags/tsc/index.html","6bbf240db737d7a7e409b3726dbc100a"],["tags/tsconfig-json/index.html","b2ed568cbb84f3052f085863c5f30b56"],["tags/var/index.html","4dcdaeaaec7463194fc2f27e6f41a600"],["tags/中頻/index.html","0b005361315f32cdf76105249ddc44e8"],["tags/交流電/index.html","59134316d45e4a0a7b60a10fd974ef3f"],["tags/人流監控/index.html","4d00df221cd278a4de3e3f870d495d95"],["tags/人類/index.html","ddfab192d2b7087e41d861ef25961c0c"],["tags/介質/index.html","f1c141e29a85dbd7703ca99b17fd5fb0"],["tags/傳輸層/index.html","0cbfe217e1478235b8ee7d34eb8a9332"],["tags/光纖/index.html","732b15fb0255c250cd2bfe99c80f3703"],["tags/全雙工/index.html","6db422b362b04e08c5c9df7943d53bc6"],["tags/前端歷史/index.html","104b4eb52f631634f0e9414a3cfcd039"],["tags/半雙工/index.html","589265d935f737e96a0a6b9a4684269c"],["tags/協定/index.html","d142cb7ce752d7e9f7d0c8d4dbc4f906"],["tags/厄斯特/index.html","7e8f112f54fcb3322a309815ce5d04a9"],["tags/可見光/index.html","69e6dc91784785c982606e043fdac061"],["tags/同步/index.html","c159d4a579fa8aadf56c1d38daa449c7"],["tags/同軸電纜/index.html","4f306a7f6a48501dca41d0a8182927ac"],["tags/單元測試/index.html","7e1c74e26e14078f22b885ba5130aa78"],["tags/單工/index.html","f1339b8c8c92395b34a090e3c5a8776f"],["tags/嚴格模式/index.html","08a33687e859aaa9d6bb9a88963c8fd4"],["tags/國際電信聯盟/index.html","1c0d06517ffe337042b84d047ca0493f"],["tags/基頻/index.html","a92955740f095c01c0fd5fb06d501304"],["tags/多工/index.html","f1c7f838a9acfba2832c279549a77349"],["tags/大腦/index.html","6bf067ac35d3282a49b537ed35e5137b"],["tags/定位輔助/index.html","fd14f2a7cce230d562acc16220304b6b"],["tags/實體層/index.html","883746d1dd90ac464a38324fb9da7c29"],["tags/封包交換/index.html","d0f2a9f714178e87a2fc804ba93b964b"],["tags/射頻/index.html","0d9b1050d3ee3af4c8d1b1b55126c8a6"],["tags/尼安德特人/index.html","4799292f8cc4441e10903914e3e78efc"],["tags/差動式曼徹斯特編碼/index.html","86b9846c18d550b4bb86c41186de1553"],["tags/差動式零補差編碼/index.html","5100e8e50e18852868960225380ead5b"],["tags/廣告投射/index.html","15d7f92730f77ca71668c18fbddf299c"],["tags/弱型別/index.html","d1aaa20845268aa08bad71a537175ee0"],["tags/強型別/index.html","50b871192a84b0316cdd4361b2b8278d"],["tags/應用層/index.html","701e8b09304d84c892002d73e86e450f"],["tags/抽象檔案-d-ts/index.html","441f72f27ac226d4c5300030dd70b5b1"],["tags/數位/index.html","2517ad8e7e76887715dc53738ac75294"],["tags/時間/index.html","b296babd3b8088c8e8ab1ba1025e03fe"],["tags/智人/index.html","1f0c84f86af0722366442c888930737c"],["tags/曼徹斯特編碼/index.html","bb3de4e0e0748657fe7351a2b3c304ad"],["tags/會議層/index.html","2efa412c87fbd8fe106abfc5da0c44d6"],["tags/有線通訊/index.html","5c5c45802f54439a368a62566fd232c0"],["tags/汙染變數/index.html","905a391bfb5c6af75dc6d1a9bca6267f"],["tags/法拉第/index.html","d03986600380548de3a854fe409d3aab"],["tags/瀏覽器/index.html","88c7728cc2d78599ce5e26723ec905fc"],["tags/無線通訊/index.html","1414207269a3d8f88b6859d8bdbd7b8a"],["tags/特斯拉/index.html","cc758e3d0c8dbe7eb4256dd82526ba20"],["tags/異步/index.html","c9f0f5cd1043e7e335e3e5bd1830818a"],["tags/磁場/index.html","0e124a8d189578fee7c7f95ee98528e9"],["tags/第一次瀏覽器大戰/index.html","6aedfb24c9dc48b27ed0e79d5c3b9e08"],["tags/第六代WiFi/index.html","6846339be20b32b3329a5149d2c740d1"],["tags/網路層/index.html","1da0ea02a8bbc0963232b9ec662e8131"],["tags/線路交換/index.html","6deff996b6f52a559fc2d7b075d3ed76"],["tags/緩存/index.html","e2474d151989468005d0c6ce29da8306"],["tags/聲波/index.html","812fee2ebf9d0187a44a292f5ed0feba"],["tags/能階/index.html","1d5ec71ac1258dff83fcd85dc2d7299e"],["tags/腳本語言/index.html","cfb39f42a30eadf4d51de5df3a06d1ad"],["tags/行為監控/index.html","556e4dc5e3d6d6235597470e94b0f5bf"],["tags/表現層/index.html","b4d04d21ee5d5315006059f913ddd427"],["tags/解釋型/index.html","e0f0402a9849789f89707f4f89f984a1"],["tags/詐騙資料/index.html","ada0d42fe2bc560a382c252e06af7546"],["tags/調變/index.html","1291415c2fce0fe8368cd81ce6f95565"],["tags/資安保護/index.html","d47bbfa0e43a5bba0d17e04390227a1f"],["tags/資料鏈結層/index.html","b4409de1e70efe2ef6202bd4f55f5a60"],["tags/跨域/index.html","6b7123165fc1a3f610163a367e84b48b"],["tags/身分證/index.html","35aadb553cd931f8be619d5b3873097a"],["tags/通道訪問控制/index.html","99adcd64abb997009e1d3f27901d7247"],["tags/銫原子/index.html","a5759d13d4854f5770b4aefed39668f3"],["tags/閉包/index.html","f1eee8b1fee458df9a0a62b259e042cf"],["tags/雙工/index.html","ab7b8129d3cc9f86ef71e4e4664f8622"],["tags/雙絞銅線/index.html","57373581d09d238c3ad8f748a8308ff9"],["tags/雜訊/index.html","cd4e62e65741a026afae3098edfc8c3b"],["tags/電場/index.html","a3045da1b48ca7ced9c81eb6e65d99d8"],["tags/電磁波/index.html","06f5d33c569cce9269ac2086377f065d"],["tags/電視/index.html","0da5344a15ee8bf8d19d1fd08078961e"],["tags/靜態優化/index.html","cd7fd5d120865df8238149ad5ea1d16c"],["tags/頻譜/index.html","f30468fc6145b1eaa8f4d718b5c87344"],["tags/類比/index.html","ac7753257b920f9a7e3091a759725115"],["tags/馬克士威/index.html","93673054b78c7ee8574a7bf42371226f"]];
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







