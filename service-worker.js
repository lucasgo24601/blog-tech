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

var precacheConfig = [["2020/02/14/部落格介紹/index.html","0ef70cd852a0135a37a413c3592b2c83"],["2022/06/02/前端P.01 - 網頁三兄弟/index.html","d5e10a738f040afc3ad3c3ff67920c1a"],["2022/06/02/前端P.02 - ECMA組織/index.html","285581a2e8654ef1474cf4ccd37e4e50"],["2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","47362cc48845f861e77611c71519bfa6"],["2022/06/02/前端P.04 - JIT & V8/index.html","216e19443896797bba8411f53cc29d89"],["2022/06/02/前端P.05 - TypeScript/index.html","aff725399ec3c721c98527fb0e2cdbf2"],["2022/06/02/前端P.06 - WebAssembly/index.html","522239527851c885abd9b75da8c956ac"],["2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","be16ef9e6e39358fecaf4b2bdf1aba2c"],["2022/06/02/前端P.08 - AJAX & 跨域/index.html","e22bbb853257d2904b93f44ac3e01c18"],["2022/06/02/前端P.09 - 同步和異步/index.html","bd0720506898f11a927010c9628b361f"],["2022/06/02/前端P.10 - Scope/index.html","a64eb30361cba8b768f103bf0b555511"],["2022/06/02/前端P.11 - 模組/index.html","f47e850e31e8f434c96bf659220b93ef"],["2022/06/02/前端P.12 - NodeJS/index.html","b2ff894d38754d70d100afdf87b8616a"],["2022/06/02/前端P.13 - WebPack/index.html","67e0a89ebffa8fd338e4dfbfca08a8f9"],["2022/06/02/前端P.14 - 單元測試Mocha/index.html","5c2771ab799f8c15f2daaad630457793"],["2022/06/02/讀書P.01 - 人類簡史/index.html","fee923cd112058f16c1d40c82e3a03db"],["2022/06/02/通訊P.01 - 協定/index.html","c79841b76689dedfa030da95d3e98fd2"],["2022/06/02/通訊P.02 - OSI七層模型/index.html","a4ebae28cce5957a7267465a4f2dd853"],["2022/06/02/通訊P.03 - 實體層、介質/index.html","8e2e4a2485f7db62f298f246df48089c"],["2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","393645e9842efd100d62784783bb4343"],["2022/06/02/通訊P.05 - 資料鏈結層/index.html","19bc2a9a566187f1e77c00fd1ec8614e"],["about/index.html","8a50d7a6830bcf740a019d455fc242a1"],["archives/2020/02/index.html","e35ddc07be1555b7eab5d508131f6c2e"],["archives/2020/index.html","c63c1f9cf4de95903529839bb13ccea1"],["archives/2022/06/index.html","2c9c6bc5c77a2b02c8c8c8bdc152dc7f"],["archives/2022/06/page/2/index.html","4da536e834e455dd2aa9069502fffee7"],["archives/2022/index.html","de484b15140a3ddd6e9f841bad5e7dac"],["archives/2022/page/2/index.html","db18e895ce38e8eeebce1f34f218e060"],["archives/index.html","fc3c42cae22d06878d5f4620093cb0c3"],["archives/page/2/index.html","174197956d77f835790df44dec9f0d99"],["archives/page/3/index.html","4db93b1173d03a31ba1f9bc26b708b52"],["categories/index.html","2878447fd44db04f2230b4cbf0105848"],["categories/前端系列/index.html","6842dc68c1544ddec600ee68c965fabe"],["categories/前端系列/page/2/index.html","eeddcb403050b126c6162f1e5da9f7f3"],["categories/基本文件/index.html","77257e35c5d2290901ad0ad6abd2c173"],["categories/讀書心得系列/index.html","c60422bf2b502a768d14ca45ce2c0d4c"],["categories/通訊協定系列/index.html","a82efd70ecc7eef811b5b66d7242af3f"],["css/index.css","ffa6854e04063a25e3bb93b4de2eb146"],["css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["index.html","7270ecc04a5ab8fef44c9ec503c1d979"],["js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["page/2/index.html","3511149c34955a05b54b8cd8a52604df"],["page/3/index.html","4a34d73e987fcc7fcad774856b845129"],["tags/16PSK/index.html","c8f0c73ac6e899be045038f8cf1389de"],["tags/1G/index.html","1f544aa4413b1193b0c7cf7e29fda6f6"],["tags/2-4G/index.html","1c1f15580bbe7bc41f87c63507ae2f82"],["tags/2G/index.html","26041b36d7e6e36a76e69bbdb2508fe1"],["tags/3G/index.html","6e8ab89ea138235eac3792d4307630df"],["tags/4G/index.html","0d0e71fe98f521e5828bfff4287ca0c5"],["tags/5G/index.html","ed790db20ea5adf6cd76592f2e7aa775"],["tags/AJAX/index.html","21c726a91481d30b3b04501e5675126b"],["tags/AM/index.html","4c39de6d7f6fc9c07e5bc1990084b6c2"],["tags/AMD/index.html","627fd3d4c1b1a3b71212c5ffd61ae9ea"],["tags/ARP/index.html","a0ac702d1a170bc17573f6cb3dedc801"],["tags/ARPA/index.html","adaf2439c236fc8a368c1856e501cd5a"],["tags/ARP攻擊/index.html","3763b597bac0941e483b7d77ff5ab457"],["tags/ARP緩存表/index.html","f1b13ee70fd1b84d0070c15f2e714e9b"],["tags/ASK/index.html","cabafe1ad0f1a0406e02eaef8f003241"],["tags/Async/index.html","61e2234fd3a3a3c9cd6f166d26c9d199"],["tags/Await/index.html","4d0d380b3b2459b616cbc68ef01ab6c6"],["tags/BPSK/index.html","558eafdcb6bc703e342701685e14447e"],["tags/Bable/index.html","98c930023a1dafa2811eb6fec5c6b37b"],["tags/C/index.html","13e7fc95a658a795c6bd65a219a1bc5f"],["tags/CCITT/index.html","cca01a5ad195a529708d9044e0ece392"],["tags/CDMA/index.html","93a6fcb30163fbdb45c3e40a042b3533"],["tags/CI-CD/index.html","84dd664dd560707744349a25f5426af7"],["tags/CI/index.html","7a1d48541f5e8923e21bd2c736c6062f"],["tags/CMD/index.html","bf27166874f0db3195d2fb7f22cc2d36"],["tags/CORS/index.html","2cf1d93783f666ffe2a2d82e1517d47e"],["tags/CRC/index.html","5acaf31c1c1ebb723c5a874938514165"],["tags/CSMA-CD/index.html","c1dd5c1d36b1ad6fa6d42555f51111cd"],["tags/CSMA-CS/index.html","6279ea7196b8ec89606a249aa3aaec84"],["tags/CSS/index.html","7345d1914649fae2998cc8e344dfdbb0"],["tags/CallBack/index.html","205e1173b7ef22a5e1bc0ceb344390b4"],["tags/CodeStyle/index.html","a6014729a7a073023570a19a367ff284"],["tags/CommonJS/index.html","577fb804c8fe04e62be60961528e596e"],["tags/DSAP/index.html","c14352b048ceddc0d3469f06b8052ffc"],["tags/ECMA/index.html","a3d41cdbe941b05ebb1fb0e1e30df25b"],["tags/ECMAScript/index.html","fd41c9336099a613dc6a4f6235f501db"],["tags/ES5/index.html","442a07d26ae88d64296db613e916f54d"],["tags/ES6/index.html","bfc3883c8ebcec327fc332bcbff2a10b"],["tags/FDMA/index.html","5f5f7ccf465b29588ebeac3c36312501"],["tags/FM/index.html","90ee036502a8e5665dfe11db7135f002"],["tags/FSK/index.html","445d4e69af72e63c0f175b649c782c70"],["tags/GC/index.html","9df40e28704f7ae27daaa31c1ec5a6a2"],["tags/Google/index.html","0ed0f22437803800c76638b7b255fa6f"],["tags/Hoisting/index.html","50f8ec3d21d4e14746c5a0a8bc3de753"],["tags/Html/index.html","0f6ed71d8e00b223299267f00a54beac"],["tags/IE/index.html","08e7a20034fce600f691f3b37982f4d7"],["tags/IEEE/index.html","03c27cc840297f08e3782cb664a7e8b3"],["tags/IEEE802-11/index.html","b35387ff94500cfcd90d77f9d5a9eed6"],["tags/IEEE802/index.html","e5836cfbc1bd37272af1276d4b682c37"],["tags/ISM/index.html","d42645328b616795024c8d47916098d7"],["tags/ISO-31-1/index.html","bbd8a98834ab238f84cf0570d29e7160"],["tags/ISO/index.html","1510efbc77cac3349b239a298175ae41"],["tags/ITU/index.html","a82c453e44303bbb964a4a804731284e"],["tags/JIT/index.html","2a4baa989d2505e2805ae3c0ba8f79a5"],["tags/JSONP/index.html","4d568b2d3966d70b36a6239eb43127c5"],["tags/JavaScript/index.html","e3a74fce8f9929d9f1cd6f6f0348e11d"],["tags/LLC/index.html","1f052ecf380b5f6e82b2ab63f27b48ce"],["tags/MAC/index.html","5c191eb95ad235a788d14504dcb6bcbf"],["tags/MACAddress/index.html","b7c8118cc0fcd8a09543fa925d8b65a7"],["tags/Mocha/index.html","43b67c14bf00df3b18b9e20e17b4c734"],["tags/NVM/index.html","8e773228eb4eea7e3fe60bed736d902f"],["tags/Netscape/index.html","97541133b170a5920683e5271182db49"],["tags/NodeJS/index.html","672c4ca98b805e8ca4574920c5bf44fd"],["tags/OFDM/index.html","0d96d851442f4cea53ec7cd86d90e2b1"],["tags/OSI/index.html","186a6a5e787addcad9aa7a2e973db77d"],["tags/PM/index.html","7272db388522ee95865f50259f2595e3"],["tags/PSK/index.html","6c12f763123a36c141c3ddb69a3aa2a8"],["tags/Promise/index.html","05d143fd74b1ce636cde41444b2501e2"],["tags/Proxy/index.html","69d23396ea5cae93b7f361400d765b83"],["tags/QAM/index.html","b5e3843d3d9fcc22f270f778c07d1f36"],["tags/QPSK/index.html","5f66d58186fbdb457843bb831a7dca09"],["tags/RJ45/index.html","d601d44835d582fde32abefb7c38aead"],["tags/RS-232C編碼/index.html","da8317059c149038f4dbf79080eda9ca"],["tags/RequireJS/index.html","70b072e43b6918df87108e9487285d5a"],["tags/SSAP/index.html","9919f141f00ac2a5c729d9f2dd33e2b4"],["tags/STP/index.html","f8c430236c2668aea9515a6e46b04a15"],["tags/Scope/index.html","404bbd6311d6820889390ced8868ad3d"],["tags/ServerJS/index.html","abad42aac965123a4d64efc69ce03c79"],["tags/TCP-IP協定/index.html","f928d285c72b416b51fc5c63cf683909"],["tags/TDMA/index.html","d6e3dd518ef2be92d628d5598c6083a7"],["tags/TypeScript/index.html","c54a928d004555aa28611066e211b6f6"],["tags/UTP/index.html","635fc528a2df3624aca2089f45e3ddf8"],["tags/Uglify/index.html","a758f3a66394477d90f3c48266853602"],["tags/V8/index.html","f50cb4fc98e79c3fe3f343ae0ece00d8"],["tags/VSCode/index.html","914c20cf2cad145f61bf65b029af7058"],["tags/W3C/index.html","b97d5d50141ca228cf83cb3b3ce30df8"],["tags/WebAssembly/index.html","236ec96309b9899bf6f636c64478ecd4"],["tags/WebPack/index.html","f98c9c91254da9db6e4328013b1f4dbb"],["tags/WebSocket/index.html","3fad2808060a5017d4b2162b25fc68ad"],["tags/WiFi/index.html","91c8977fd5956d515d129bce2f4bd43f"],["tags/WiFi探針/index.html","d94b62461a5d47cec230ae1603e39278"],["tags/XMLHttpRequest/index.html","bc42c28099bab903b02be53d6c499d12"],["tags/apply/index.html","f24f70b4c34dfdec312d77a88d16167d"],["tags/bind/index.html","7e6c70a64a2082ae774e9d13f7dceb15"],["tags/call/index.html","1e1eb8fd6afc4cf9d21c88a1086e7670"],["tags/const/index.html","3fa5ce0042c21c1363746bbe14625c28"],["tags/export/index.html","42dc3ddcd8cb4266ff4e6a1c3eca4809"],["tags/exports/index.html","ed756d3e30ab3f2b942ded883880d701"],["tags/import/index.html","b51488891429a527239b50ce67216bfa"],["tags/index.html","f12d19d2fbb7b5de41d06b924ac417eb"],["tags/jQuery/index.html","b98a4899b91acd6caa57b6cd3919ace1"],["tags/let/index.html","a894c6f8f395957a9efd51491b967cda"],["tags/npm/index.html","e5de8800ace9d1ea5b1b95ff572877f9"],["tags/packeage-json/index.html","d3191a355bc9708897fa412776f053f8"],["tags/require/index.html","d9086cbbde5053332f0273b0e352490b"],["tags/runtime/index.html","483e13e58c3a64863769bca3738a9a7d"],["tags/seaJS/index.html","19403a087455d9ef09a118a8d4848108"],["tags/this/index.html","c5cbcd53cd3db720fab5b59d8d270559"],["tags/tsc/index.html","e8f8f26b65656f287f0e24e5ab8781c0"],["tags/tsconfig-json/index.html","68b10f68732f742880f24874511a8e6d"],["tags/var/index.html","481f4eaead3f4cee1436897082427599"],["tags/中頻/index.html","7b6cd7a7f631eaa4bec317b5e0856f14"],["tags/交流電/index.html","fa1fccd363af1bb5b65172d2d2c8701b"],["tags/人流監控/index.html","6104e4646ceffe35d0feba98b1e1ba57"],["tags/人類/index.html","6fcf12bbf0b6ceadcfb6b9b0a5318f18"],["tags/介質/index.html","7a03aad7b4d441c3c09aaa56efd42a86"],["tags/傳輸層/index.html","79a36cc030da235d3ca704b28b7de3ae"],["tags/光纖/index.html","77461b21574ab09e7685855ae1cd357e"],["tags/全雙工/index.html","02897467fd771c93c68e6b4c1dc60c66"],["tags/前端歷史/index.html","e70182ef9890ef0846bfad5bca0207a9"],["tags/半雙工/index.html","c93f04c9d45ad6cd8261dd7f8bbc663b"],["tags/協定/index.html","08d7402b27223291de6de6be92f6ce2e"],["tags/厄斯特/index.html","1792f5524488c1b5aae5e80a8317e44d"],["tags/可見光/index.html","b8bc08b849b53b63ca5a112124e82dca"],["tags/同步/index.html","0f4a6af26629d5b01c2130a4b71fda9c"],["tags/同軸電纜/index.html","e6855711502af08bbb5b8390fcea58b6"],["tags/單元測試/index.html","56bc60b72398d81d1f27435d56bb525d"],["tags/單工/index.html","9b58eedd1244ad7b0f1589c5b25ba55a"],["tags/嚴格模式/index.html","4fea751a165da1b578bc7b99c82b7ed8"],["tags/國際電信聯盟/index.html","6ead424b54af4068bdf412b2e34ac502"],["tags/基頻/index.html","4cf757a025579ccd3335ad4969946c44"],["tags/多工/index.html","1578c55c6047ff2b9b16a766039a6785"],["tags/大腦/index.html","8f9b5c266ba9b29b2573ac73f570bca7"],["tags/定位輔助/index.html","fe98d0b1f1a70f34a17c88fb08b5c949"],["tags/實體層/index.html","87508ef8e3da30850f548a220bcfa07b"],["tags/封包交換/index.html","0844ea14a0ba4e9dcbd44f6b29013cb3"],["tags/射頻/index.html","48151af4a9993b4a67e26d31f8e608c5"],["tags/尼安德特人/index.html","3ee96500139fd937e9e1e0c56fda46ec"],["tags/差動式曼徹斯特編碼/index.html","fac4d8b6bcabd224335d12ccfd6bff78"],["tags/差動式零補差編碼/index.html","3eecc29f0ebe0b39c26be350acc2e47f"],["tags/廣告投射/index.html","d18600a7b7070fcd796bb88f4915133a"],["tags/弱型別/index.html","80e0dcd652d3c35fa62104154146a201"],["tags/強型別/index.html","42ec89e7cf34b901c6553feb51346e6f"],["tags/應用層/index.html","7ab1e36c506502233665f591ad88faa1"],["tags/抽象檔案-d-ts/index.html","e08cb7ef28c19cbf010f241ad0dd738f"],["tags/數位/index.html","ba0dc6150d9caf0428e6ce11fdba0a9c"],["tags/時間/index.html","1a010bda82bf46fc5c93861f4986d092"],["tags/智人/index.html","b76dbcb8029dac0d16603e172f935835"],["tags/曼徹斯特編碼/index.html","dabfd03edf495c3e00306f9b0cfc2319"],["tags/會議層/index.html","da02e8d0049f8f7bb10d231714a6bf59"],["tags/有線通訊/index.html","64826db56effea79aab31cf75c00d5fd"],["tags/汙染變數/index.html","d925febaab22e3f7af75dae09deee55a"],["tags/法拉第/index.html","fcf09e3c92aa29b46c019db674183882"],["tags/瀏覽器/index.html","ad3fdb30a245222d0f82c0cc919b4d17"],["tags/無線通訊/index.html","ddbef9372ae23fe98c3f7ed07ead4590"],["tags/特斯拉/index.html","eb34115a7f5b5c6e45d690ce18d2a1a4"],["tags/異步/index.html","b1cedd1ee70bedb6db6e1da698324b62"],["tags/磁場/index.html","256a83b18878dfcd2b7f822efdf245a7"],["tags/第一次瀏覽器大戰/index.html","4d25fb3ef0267be544a140969ec38eae"],["tags/第六代WiFi/index.html","7cd440408c02f720445255c3f1bf6226"],["tags/網路層/index.html","9dc7ab442b972442b37caab44aa194d1"],["tags/線路交換/index.html","3f276a51db4433520e62ece7771cf86f"],["tags/緩存/index.html","d308d7c6b0dd4391bf63916593bb79a5"],["tags/聲波/index.html","aea7d1ea00c717d772a9e2ee848da1b0"],["tags/能階/index.html","1cf9262291ca793071d827ba1be7e96f"],["tags/腳本語言/index.html","bab3915ba0f9037f222c48b78b8c2c0a"],["tags/行為監控/index.html","028dfc1309338ad51b0b50ae87be8e95"],["tags/表現層/index.html","d9a44faa5c8fea01065be01d6476b93d"],["tags/解釋型/index.html","42abb64ac1510706504e4e01b41a2618"],["tags/詐騙資料/index.html","bbe896dd9a0da77d41df2d6c4b8c5582"],["tags/調變/index.html","95ea6f269a7710be006240910cd44f5b"],["tags/資安保護/index.html","41e079aff142490ee0c676b2c376a960"],["tags/資料鏈結層/index.html","8f67bf61b603ed46fd905fe84a4491b1"],["tags/跨域/index.html","c23be64d002702f2117f4555bce12a6f"],["tags/身分證/index.html","dd301b37b650876e5f41217f2fe5cdb8"],["tags/通道訪問控制/index.html","97ee7a2f06b148d7bb1e3820ded95f06"],["tags/銫原子/index.html","a04dc200fe00764ad931f8e98c1247e8"],["tags/閉包/index.html","fb4ef1e69803d17165a357377c040471"],["tags/雙工/index.html","c611f65b4222309a19e49f1d4acec3dc"],["tags/雙絞銅線/index.html","23131b1c413f914522c817664ea85754"],["tags/雜訊/index.html","0c5b872101331cff138a184525f1a0b5"],["tags/電場/index.html","c306a7979214f2ffe5f253872b57178e"],["tags/電磁波/index.html","11668bf9e07e330b3360a6e022752886"],["tags/電視/index.html","6cadfa602d3ac6f2d80bab6ee0cc32d5"],["tags/靜態優化/index.html","b7aec29286f739be2c42b643e5b58649"],["tags/頻譜/index.html","693ceb4620186f9ed431701102b69168"],["tags/類比/index.html","9370ced555b36a4ae45b90b958b23c40"],["tags/馬克士威/index.html","d269feaddbd58d35242fe6c267757966"]];
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







