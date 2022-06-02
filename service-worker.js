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

var precacheConfig = [["2020/02/14/部落格介紹/index.html","0ef70cd852a0135a37a413c3592b2c83"],["2022/06/02/前端P.01 - 網頁三兄弟/index.html","013d787cb15fc06ed3ecb062018c70bb"],["2022/06/02/前端P.02 - ECMA組織/index.html","79022292e64e703ee9c635b62b391e03"],["2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","7825656a14a7d4e19f52f3bd1338acbd"],["2022/06/02/前端P.04 - JIT & V8/index.html","6bf0ec60056ad1432d8a4014775f024c"],["2022/06/02/前端P.05 - TypeScript/index.html","942d0e745d95d08a0961a03f0c583264"],["2022/06/02/前端P.06 - WebAssembly/index.html","522239527851c885abd9b75da8c956ac"],["2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","4f395eed58eaa97db82d15b52aa3758d"],["2022/06/02/前端P.08 - AJAX & 跨域/index.html","5ce9cb92b6de2e916eade2884f2493a6"],["2022/06/02/前端P.09 - 同步和異步/index.html","b631086d50c410301bd22a7f7c2d9846"],["2022/06/02/前端P.10 - Scope/index.html","2e86380cae975493e51dfb9a0ee14e00"],["2022/06/02/前端P.11 - 模組/index.html","cc2fa0808ebd92c760508828d8dae57a"],["2022/06/02/前端P.12 - NodeJS/index.html","b2ff894d38754d70d100afdf87b8616a"],["2022/06/02/前端P.13 - WebPack/index.html","24b3ae2243fd080853df1c30bfad9ddf"],["2022/06/02/前端P.14 - 單元測試Mocha/index.html","81ee889cd8f020489b93df6d463a96c2"],["2022/06/02/讀書P.01 - 人類簡史/index.html","c95643b9202ba99aea43a63e79b1c60d"],["2022/06/02/通訊P.01 - 協定/index.html","87899da781d894486266a95d9bd39676"],["2022/06/02/通訊P.02 - OSI七層模型/index.html","68ce49e3a69ea8a9cf011b30f22282ef"],["2022/06/02/通訊P.03 - 實體層、介質/index.html","b3e32c4953dc9b2d320067a010c008b0"],["2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","2aff752f01032cea60261223e64b9d18"],["2022/06/02/通訊P.05 - 資料鏈結層/index.html","19bc2a9a566187f1e77c00fd1ec8614e"],["about/index.html","03fdf087153c1add5cd3a4079406a22c"],["archives/2020/02/index.html","8901728564a7cc37e76805aaaa7f7c43"],["archives/2020/index.html","1c891388f13401d139123e1c7be2c93f"],["archives/2022/06/index.html","d8c18cf3dbe8bf1bb0562e6c2b2be130"],["archives/2022/06/page/2/index.html","03a3cbe16f241cf2167f6a144ddf9b2d"],["archives/2022/index.html","a83be10f896a8fa51acb70172e59ef64"],["archives/2022/page/2/index.html","bbd51698d6645c00cfc3c83c7f6d1e91"],["archives/index.html","1c490fd4cfb87364b12baf674a683b95"],["archives/page/2/index.html","becced44b3e2b2027bf456a21b72cbb2"],["archives/page/3/index.html","74efa5c36ea32b3d987dd75a3cac1bd4"],["categories/index.html","0800867bb0bf6b3e022fd81a414e21f8"],["categories/前端系列/index.html","6cd4bc5077c38555358125fed4df16b9"],["categories/前端系列/page/2/index.html","a320fd47fc23eff2f931535237c872b4"],["categories/基本文件/index.html","4206b3ed28d16d5e733aeacccfb4042f"],["categories/讀書心得系列/index.html","76f24055f93d975cc6084f3c15010123"],["categories/通訊協定系列/index.html","ce8602bf8142250b335325bcc0175a16"],["css/index.css","ffa6854e04063a25e3bb93b4de2eb146"],["css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["index.html","937676485e5f2fc2f4503e4b4629dceb"],["js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["page/2/index.html","0705598cf5eb2fcd553c185dfc551c27"],["page/3/index.html","bd45d57a34fa9381265bfbf7609e0edb"],["tags/16PSK/index.html","3b95b9002afe8a07df4585aba5563577"],["tags/1G/index.html","35b971f5ac463325755dbfab4c532def"],["tags/2-4G/index.html","7e3fafce6f76c91ff0d43885275d4b9d"],["tags/2G/index.html","034fd12f6fa098f683e6653c270e7f2a"],["tags/3G/index.html","74840efaedac5c5c1637ea4e4a588a93"],["tags/4G/index.html","7c8767982b742f2b1b98844ca50838cc"],["tags/5G/index.html","bf165a4d0eb483312c10f8819a00ccd3"],["tags/AJAX/index.html","84c5e0a7a7bbd8f6b6b9d79b6f11a608"],["tags/AM/index.html","0d19447a8b53d93aafac8fb175f7d51c"],["tags/AMD/index.html","a75ed426b383c3d0b2a174797e57e2b9"],["tags/ARP/index.html","a927cf0ca1ed1c5e266800437c2ee295"],["tags/ARPA/index.html","8fe2859385d3db639f16d56f862fdaa4"],["tags/ARP攻擊/index.html","0cfbf2e3da98af99cb8ebc958f60494d"],["tags/ARP緩存表/index.html","0fbc7e946b3c18c9063e088d22ac61a4"],["tags/ASK/index.html","8d8810f1cf5fa4a0245eb8561638aa35"],["tags/Async/index.html","d4a8dc1af4b156b8b48abdf29cecb6bb"],["tags/Await/index.html","044191a9d8fa0f820837066c0282079e"],["tags/BPSK/index.html","7deae92df73b6ef14651ff8b533ec7ee"],["tags/Bable/index.html","52d05c1f264cbc13b94de9191a57c850"],["tags/C/index.html","ad8fc0c2bdd77679f1b769aca1c5e36c"],["tags/CCITT/index.html","2d97eb2907383741f3b4aa85338d1028"],["tags/CDMA/index.html","84cf00fda2b39e6681566ed2fac52add"],["tags/CI-CD/index.html","696d02a6cd1fd9eb059daf2a3a01352f"],["tags/CI/index.html","a6cc8530dc94c1c76c8b7aba5dde8f05"],["tags/CMD/index.html","331a23d6b5034412d86b27f11757a098"],["tags/CORS/index.html","102bc0088833f021d69f866bf8c24da8"],["tags/CRC/index.html","ba16c9c8a8654e8d9276ffb0b257b057"],["tags/CSMA-CD/index.html","082d4dcbc2f8be8f017d9f1ac635241c"],["tags/CSMA-CS/index.html","1d6df0cbbf449ca87054217b299b631e"],["tags/CSS/index.html","0ce13ced1d40106258e055f19b45bbe8"],["tags/CallBack/index.html","7f572accb8606acd89d93aa21989cdcc"],["tags/CodeStyle/index.html","68eb42d27a36ba699a2cdc2672a55f6d"],["tags/CommonJS/index.html","9828f59ba042fcad66f44231d23b479e"],["tags/DSAP/index.html","15ebf198f38385f989b1fbff0704df26"],["tags/ECMA/index.html","a31d136515e98edd3c9602eb13151720"],["tags/ECMAScript/index.html","1aea9ba568e50e83dcfa349d36c98671"],["tags/ES5/index.html","ef8427c2aff975e238aed3771ba548d6"],["tags/ES6/index.html","d4dbf101a4bb8cfcf8ba096e086872af"],["tags/FDMA/index.html","aa55bdbf3489380f4241e7ce4755107b"],["tags/FM/index.html","537de57e5e45ad5a7e6a0c6f85f79fce"],["tags/FSK/index.html","97f18970f41ed1a78185da4fbefc89f5"],["tags/GC/index.html","132ff4fa2bce7c15f9483bdc5750a7d5"],["tags/Google/index.html","87d28c55948f4cd4e36b5aff7722da0e"],["tags/Hoisting/index.html","6539394ebceaa3d052076da40ea9cd0b"],["tags/Html/index.html","68bf820063ac6717c2158c995b1689d5"],["tags/IE/index.html","d6b935ff8d4c6b23684c2df67cbfc2f7"],["tags/IEEE/index.html","43dc9a53beb1ec22ecdd0465f1bad08d"],["tags/IEEE802-11/index.html","739b3b1791654248c1d436f116545eee"],["tags/IEEE802/index.html","c200b2a201bea21b27c917685c21aad3"],["tags/ISM/index.html","9f60cbd7345ea019652fd5beae818cc6"],["tags/ISO-31-1/index.html","4ec61553ce35112e935b3f57be6a1dc1"],["tags/ISO/index.html","4c20165db99392b149ccd54905ffad6a"],["tags/ITU/index.html","fd08ee7219473807b12f4b5cc2bee3fe"],["tags/JIT/index.html","8579321f5da99624a314c9ff5bc7f434"],["tags/JSONP/index.html","7c5dca4ee5dc6223f9fa982e4a916825"],["tags/JavaScript/index.html","f5b405c306490eb45361a48262ee9f9f"],["tags/LLC/index.html","97136de255f660b168f9dcbbe101056d"],["tags/MAC/index.html","3d04607f1c28d469eea923d9507bea0e"],["tags/MACAddress/index.html","d686ec940c30bb6440f2731d0d2f1abd"],["tags/Mocha/index.html","8cc8da54a416c0377c0f0822d93b2073"],["tags/NVM/index.html","f6e7bd0608896d2d37a1c921468f22a6"],["tags/Netscape/index.html","91b548b3a916e194e8b7fc505107b27c"],["tags/NodeJS/index.html","ebfc76bcea61d934592dc6c074a3284b"],["tags/OFDM/index.html","89890cad9ed5e7f4c3bc2332c983fe4a"],["tags/OSI/index.html","fe93df58c101dd26299a9584e99ac941"],["tags/PM/index.html","c5f165607c2b467467d6b8809f9b2d55"],["tags/PSK/index.html","bffe65494630683400228c6109140d96"],["tags/Promise/index.html","f1ff721d23e989deed63089ab6c4c1a5"],["tags/Proxy/index.html","b0f9d9933e874088c9e675a809c05d71"],["tags/QAM/index.html","fb85aaba7f79a5aa1cdb8b7d5acf6574"],["tags/QPSK/index.html","d70c664d9411dbf59c2bba18c9c2034e"],["tags/RJ45/index.html","76557c5fd38fca3c68deae91cfc5cbd1"],["tags/RS-232C編碼/index.html","6c52258f10465b498ac9797c8f7a1e53"],["tags/RequireJS/index.html","a45f0a6dff3ec906b7a8e5afef927f01"],["tags/SSAP/index.html","a63ba1bd69d38038efb11c74584e1d01"],["tags/STP/index.html","d40e14ea2501ffd66d3d6a144859b194"],["tags/Scope/index.html","8354d3260c0702ac69ab71c1b9a9e144"],["tags/ServerJS/index.html","dda86151fc84d2444f43e8aee6041d18"],["tags/TCP-IP協定/index.html","ea3007a7f632a78bb77d847721c5e4e7"],["tags/TDMA/index.html","57737956b65f495fded7e94ea178a5cf"],["tags/TypeScript/index.html","1794e3bc4e93aba7e9e0eb2e06281b4c"],["tags/UTP/index.html","eac645541b8c1e7aab720113665eeb57"],["tags/Uglify/index.html","6f37149e5c17e84f052f16057a9aa17f"],["tags/V8/index.html","2594cb0f07af08adc4197720728974f7"],["tags/VSCode/index.html","2f2eccfe96572b2a127bbea6df1da6a0"],["tags/W3C/index.html","6505ba5c1e3f24eee643af264c43cccf"],["tags/WebAssembly/index.html","af770d4d90be16a81035b177807a171f"],["tags/WebPack/index.html","b2bf9b4a63bc8787ebc631a552170f44"],["tags/WebSocket/index.html","d4c39be60276d02d60ae8a6f956202a8"],["tags/WiFi/index.html","993f4f1ea67ba6a69d8511f763354168"],["tags/WiFi探針/index.html","865bfe1a62784cb327e28939167687a4"],["tags/XMLHttpRequest/index.html","22c7010effe3327cbd42fa64eee4c005"],["tags/apply/index.html","6d9aa29f90f6e6552acc273de00956bb"],["tags/bind/index.html","55a12b51ce46023b3e583652a9fd17fd"],["tags/call/index.html","6fd598244e05d52ffcb05a86042517b1"],["tags/const/index.html","e95585ea38c8c6b9d75549bc2913d0a6"],["tags/export/index.html","dfe9a87d3db241116dbde7598d5a2119"],["tags/exports/index.html","2ab594310077e572d31438a03b3ec64d"],["tags/import/index.html","cd6bedbfc58f259bb9e4c7ff70acfb59"],["tags/index.html","128947a31f9c15daf123c3aeb9a03bac"],["tags/jQuery/index.html","f7d763555404799b7f8b62eedd8187e7"],["tags/let/index.html","d9ac0032f0a3cbddfc128335c3aee3e8"],["tags/npm/index.html","143a124f78ab0e88c227e13777b74e6b"],["tags/packeage-json/index.html","2f29522bd2b3fce45cb98aa39a12c617"],["tags/require/index.html","5157f60353b1f0bb1677691fb3f98da9"],["tags/runtime/index.html","6311a026d619a9362a88aebf524ef78c"],["tags/seaJS/index.html","034d66e8fd46c161e91478e3a400c748"],["tags/this/index.html","07aedfed011dc4b5583159db346182a9"],["tags/tsc/index.html","c6945d6021c1cfbef49efaaf6ce24f96"],["tags/tsconfig-json/index.html","2860582ed5503ba9a650ea49216e8911"],["tags/var/index.html","b6d931cd7b072bed567a251f36682f77"],["tags/中頻/index.html","5f0461511c8bd2744919a105bf5c531a"],["tags/交流電/index.html","ecad9b80d72ce7e458a30d40edb576a5"],["tags/人流監控/index.html","40eff85da28dd287585f15ded1a4614b"],["tags/人類/index.html","fedd99564b7a9c9dbca3791f25c01adf"],["tags/介質/index.html","033f4b44cae74a1ebb018cb8ead84c49"],["tags/傳輸層/index.html","078e9a620f32dd88bb1ca29bad697030"],["tags/光纖/index.html","9ec1ee791fb75efe9a186188324c4cc9"],["tags/全雙工/index.html","ab1b6df1c226f63777fcbd0f16ca4aee"],["tags/前端歷史/index.html","cd02142180b98ca7ce4fc2918fb53427"],["tags/半雙工/index.html","a003a5134b0deff99094f1af58f310f4"],["tags/協定/index.html","d5150e0e4049f79411c495bcc31113a5"],["tags/厄斯特/index.html","46917daeb752ae35c14486d63f6d6678"],["tags/可見光/index.html","3cf59f211833872e53a0329425e82934"],["tags/同步/index.html","4225ef93fa48b6ec38daa7be7807dfe7"],["tags/同軸電纜/index.html","9118ad8254d9bad4374c24778864d049"],["tags/單元測試/index.html","6404ac868b811ed28ef25ebabd8c0f5d"],["tags/單工/index.html","c5678fd967e1623deffe5ed4a6fa6d48"],["tags/嚴格模式/index.html","00ec9806f568fb00e0bc58e4c34933a5"],["tags/國際電信聯盟/index.html","beca935c1196fc7b6f967fa78f69fc74"],["tags/基頻/index.html","06aead64f85e1de83e5738fb24d31861"],["tags/多工/index.html","09965577358e2ba384aa2d9a4a3a7f6f"],["tags/大腦/index.html","a411fa3528a91b53e082d1540be45542"],["tags/定位輔助/index.html","44afed8d2af5c19801ce5b6b8a836919"],["tags/實體層/index.html","e778c0ceda415fb89997664a5338d972"],["tags/封包交換/index.html","5ad61d0ad80af345b77ca8661a7e45b9"],["tags/射頻/index.html","316aecec510c425a63b72d25a5b32ca2"],["tags/尼安德特人/index.html","b02e5f413529a309b5cd634ce14ef558"],["tags/差動式曼徹斯特編碼/index.html","1bbd56d4cbbdec784e7abe2a5352ab2e"],["tags/差動式零補差編碼/index.html","9de9f9157f7a8daf0ec3bc03666db2cb"],["tags/廣告投射/index.html","b9b5f37ad00641ed5c99314ca82eff8d"],["tags/弱型別/index.html","c3f73d4d46cc23403d07891bc04fded0"],["tags/強型別/index.html","2f97fc89b11d789fd3205360a963a8ff"],["tags/應用層/index.html","51d6a0ca2aef04b7aeb022269f0f2e01"],["tags/抽象檔案-d-ts/index.html","55d64dcb5bf6dff50849e051ad009eee"],["tags/數位/index.html","d61ecea1ba63e143cf063fe00e1a5a0b"],["tags/時間/index.html","67392362a76dc1e1ed427973af63e7ba"],["tags/智人/index.html","84e6134888a507f422bd681edf316dc8"],["tags/曼徹斯特編碼/index.html","e578197765ae771b2d8396f1d44b68cf"],["tags/會議層/index.html","e0e84f57aeb408284464f7b12f3caea7"],["tags/有線通訊/index.html","173031c6df194a1230cf503c1812bba2"],["tags/汙染變數/index.html","6d4a4c27794821c66e40f7f4ddf51458"],["tags/法拉第/index.html","4eca0a5f9d3dc778c2a8a20478f67b97"],["tags/瀏覽器/index.html","119e75ca391fd2de9ea3f1f25503a69d"],["tags/無線通訊/index.html","6c19991ba5629d8b738ace3324db23f0"],["tags/特斯拉/index.html","7b2945f6c2a85efb52370b7f926b7fed"],["tags/異步/index.html","c58b69fd0575445159aabb4347f0102c"],["tags/磁場/index.html","06f6afdf723a3a44fb502e079cee0d52"],["tags/第一次瀏覽器大戰/index.html","52dea9ac844eba140f28f59b887c0867"],["tags/第六代WiFi/index.html","ac1d0246c145a8c6439888a5aa7753f3"],["tags/網路層/index.html","0d71634e5eefcf5f3258e5ab58c0540b"],["tags/線路交換/index.html","f6b58d720516ca23a7b5c7a62f4928af"],["tags/緩存/index.html","3e9ca11bd17404487a0413c1f3072468"],["tags/聲波/index.html","588856cc4af926c8d810212ed61aa0c2"],["tags/能階/index.html","731896446ffa20c26137ed4a07c24151"],["tags/腳本語言/index.html","38f2c9bb9144eb4b8a06727042cd1bc4"],["tags/行為監控/index.html","4da02d92844b0774ba5811283b4e83fb"],["tags/表現層/index.html","7a6b37967e06748e802a2c43400e449c"],["tags/解釋型/index.html","c9803a30040a6beab9e8bc9eb12e158c"],["tags/詐騙資料/index.html","92034359d3686eba6c3033597325e446"],["tags/調變/index.html","28232021e265edf6939eaf3c5fb02683"],["tags/資安保護/index.html","85d40977881d490b833424a4087c14e2"],["tags/資料鏈結層/index.html","c9220321e7789f0f7d4fc00e31b89547"],["tags/跨域/index.html","75a8e35be276feada97a99e11bf71ea3"],["tags/身分證/index.html","61dfe6a9631a674c1be3a62b0c0bca7d"],["tags/通道訪問控制/index.html","f235a4d90cb79ff6e5c5f5399a24d3af"],["tags/銫原子/index.html","1dc93e70c0d61ff569913d6a41a00980"],["tags/閉包/index.html","0b190a65b11fbc50c9051bbc36df6276"],["tags/雙工/index.html","11f184c926cac7d14481226bca2e1b48"],["tags/雙絞銅線/index.html","63150475ba73aab3155656bcc261d889"],["tags/雜訊/index.html","f5f8dcccac3fdbdd7b835bcb7db592b4"],["tags/電場/index.html","c09f20629a2669a41033de0cfee16b17"],["tags/電磁波/index.html","f2bd40453f8477bec5a83b3a884dcc7d"],["tags/電視/index.html","5871b764fee9ff8026253bdbb6b25702"],["tags/靜態優化/index.html","4ffa4379ed4f92635b03b61662e044a7"],["tags/頻譜/index.html","193869264749551f0e6adbabb5dae024"],["tags/類比/index.html","56ad7564e190b9006558cb1d31cfa9ac"],["tags/馬克士威/index.html","0512761745f6766859c41e33a6b1ef5b"]];
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







