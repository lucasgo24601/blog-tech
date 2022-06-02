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

var precacheConfig = [["2020/02/14/部落格介紹/index.html","be322c275d7879034c1225493481c1f1"],["2022/06/02/前端P.01 - 網頁三兄弟/index.html","1c74bd01e5a28b95c95d7f1796b612ab"],["2022/06/02/前端P.02 - ECMA組織/index.html","d578f044f213b5347b441bfbd177baf8"],["2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","b2d6892d6764c7c0d53392a78c89e549"],["2022/06/02/前端P.04 - JIT & V8/index.html","bb75868ab940440935df8888ac8d32f7"],["2022/06/02/前端P.05 - TypeScript/index.html","3acd372e9b0145db3ea98103405a6a26"],["2022/06/02/前端P.06 - WebAssembly/index.html","987c4da1f49e71a84927d50f28b6d0ec"],["2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","351d1682c63d2136378d0fdd9855177e"],["2022/06/02/前端P.08 - AJAX & 跨域/index.html","2a5fe2b4e1bb863633056eb9160b2d5a"],["2022/06/02/前端P.09 - 同步和異步/index.html","561d415297510455f9d0beccda298027"],["2022/06/02/前端P.10 - Scope/index.html","e5c9d8c706ac2d62a49e4af2cbd61f7e"],["2022/06/02/前端P.11 - 模組/index.html","a5b5d2b4b5f6b835733d2ff88d8cfc12"],["2022/06/02/前端P.12 - NodeJS/index.html","dc1168319a4cbfcd14fc55c282d86cc9"],["2022/06/02/前端P.13 - WebPack/index.html","eecde536c65869232830880845675973"],["2022/06/02/前端P.14 - 單元測試Mocha/index.html","0919c1567cbbc4a84def0987ed5523c9"],["2022/06/02/讀書P.01 - 人類簡史/index.html","ee7920f59c144977ffc6c8799440011e"],["2022/06/02/通訊P.01 - 協定/index.html","6b6dd6acaebacaea6a49cd630c998064"],["2022/06/02/通訊P.02 - OSI七層模型/index.html","36f4e0a75f733c6aa8ead47576cb69c8"],["2022/06/02/通訊P.03 - 實體層、介質/index.html","5c04c11d452c6c933b6df31c9328232c"],["2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","6a1a4d8f52b1c2737f9319ddca17574c"],["2022/06/02/通訊P.05 - 資料鏈結層/index.html","8112a5100834b507dd41322b2b302070"],["about/index.html","20a69d29bba1bcb9d656ce630aae96ea"],["archives/2020/02/index.html","277606f602aa02eedebb3ffb71a78a26"],["archives/2020/index.html","b829eb72dfa1c6023042b7c41afdaff7"],["archives/2022/06/index.html","309c9a56d24d9f090e7684990900846c"],["archives/2022/06/page/2/index.html","afcc1302ff81ddea39391a4a4111f973"],["archives/2022/index.html","2ccae04d675690df9d32b5c2f951b14f"],["archives/2022/page/2/index.html","4daa473c5b5dfcf4d803145b16c3ffe3"],["archives/index.html","87685d24518e6af4be9b011ca89ee9b6"],["archives/page/2/index.html","33e8e5abecfc69f325ff3133edd9fcb7"],["archives/page/3/index.html","817274ad768279b7c5b417e68b32c709"],["categories/index.html","7cac61c9f378c279b8fedeb8483bb625"],["categories/前端系列/index.html","c5f43a5fcded2df136e95599cbf52ded"],["categories/前端系列/page/2/index.html","f4e4f2dea307f1b3bfeb731ce1e3e964"],["categories/基本文件/index.html","7cf010acd2da12daea65cf6183bfc9f0"],["categories/讀書心得系列/index.html","62d6ee7502b6bda36908814321d44810"],["categories/通訊協定系列/index.html","6fb10efa670f8fc6c5f403ba0b58042c"],["css/index.css","d596cc019db5ad77d44e30d4134e0a21"],["css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["index.html","9d2951c5db99927f67941e08fa28f80d"],["js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["page/2/index.html","77035f9aa7e1b26c2ce1b7450254c82e"],["page/3/index.html","2c2ee3b8110328331a03298c70343390"],["tags/16PSK/index.html","c4ab075632ae9c4d73deb1a81ddd784e"],["tags/1G/index.html","cec31b427539c115096a23af202cf656"],["tags/2-4G/index.html","b43ee9e6620690187a96b5f0aa084daf"],["tags/2G/index.html","fbf3977cb3871c8bce277babb80ac356"],["tags/3G/index.html","575a720d8ecd8030296b5ad592d55e82"],["tags/4G/index.html","4adeb632bc53c0260430d056c262b660"],["tags/5G/index.html","c487e493e4219f19586ef4291cd29e96"],["tags/AJAX/index.html","0099a75f4ec2b86725d7aa1e80625124"],["tags/AM/index.html","ccbe76737d35e44fe7ae9d12975fe290"],["tags/AMD/index.html","4c38d7524cbb558c1f2effc191a8ff69"],["tags/ARP/index.html","08349959e25d41e36fe51be1cbb122a2"],["tags/ARPA/index.html","159854b6db3179d691c15ec98510d401"],["tags/ARP攻擊/index.html","19a659cc5d178d2943c5dacf2c43b7dd"],["tags/ARP緩存表/index.html","94d86ad45bfaf9fe76d73f3b0052545f"],["tags/ASK/index.html","a8aa9bb873fb18e0e0c5cb22fda7920c"],["tags/Async/index.html","77b71f0b075df2264fa0adaac0fd84d8"],["tags/Await/index.html","55e3e2cb972affd7a228d42355cb03bc"],["tags/BPSK/index.html","82f55522f3fc343521e42ba704df3fc7"],["tags/Bable/index.html","5a825e1b9673af803646a5ef1f9baaff"],["tags/C/index.html","c1b177880f91dd6fda13ba83a004eeb0"],["tags/CCITT/index.html","617e86824681b3ea2c462dca9b3c3d37"],["tags/CDMA/index.html","1509e721af0c4e048783db31f0afbc82"],["tags/CI-CD/index.html","0e293edb03972bf20468840e365ec4c2"],["tags/CI/index.html","a767b116693145f0463bfc2822bcaac3"],["tags/CMD/index.html","cecf4df68ef04a022ffc2f7f92481ea2"],["tags/CORS/index.html","7b6c4c548253a5e96dbe94d08c430300"],["tags/CRC/index.html","9df98ed625379e512381cb6404d5904c"],["tags/CSMA-CD/index.html","256a64073910aec31ba9aa6e4e6b0f16"],["tags/CSMA-CS/index.html","5e4728af1aec7c63295a4fc1179816d8"],["tags/CSS/index.html","78cf0c277e4e0069eb094a8714bc65d0"],["tags/CallBack/index.html","41f74f3f8b79eb6e636c27c6281a9499"],["tags/CodeStyle/index.html","8efe588f2edc9d6882ca65ac6445ffed"],["tags/CommonJS/index.html","610f7fcd5fa9c1c82503c0fbfd66d9f7"],["tags/DSAP/index.html","d1b890a3d57ac808ffd350beb353df2c"],["tags/ECMA/index.html","103e1020d20afcfc3453d44d8f840b2b"],["tags/ECMAScript/index.html","80d47109d54f2211d8b74b0aaf18a110"],["tags/ES5/index.html","385de6277f0363e94afd753ffd3e954e"],["tags/ES6/index.html","f3752fccb393fc730822b017dc2150f2"],["tags/FDMA/index.html","2e6645a7893a5a0db5ac7d701254cf4a"],["tags/FM/index.html","55732a065f25ac9bfdee630f5c7212f3"],["tags/FSK/index.html","4ebcfaa49a264df1c0297b2e66edbe91"],["tags/GC/index.html","a04437e47ca12e5b26f9afb7461a8c7b"],["tags/Google/index.html","6f8c006422454d843e7faaf769356365"],["tags/Hoisting/index.html","e7a98c646f5c6da32a557c7d88802e0b"],["tags/Html/index.html","1aa1577766f68d2662f5ca415a596b0e"],["tags/IE/index.html","b8ac6d9bed52694ef70ed97538189aec"],["tags/IEEE/index.html","c38defdd870b8e08f371c50122bff090"],["tags/IEEE802-11/index.html","42a11a74c7c83d86fe48f9fafcac2fd6"],["tags/IEEE802/index.html","d18d572ceb4354e0f7f59d436416d73d"],["tags/ISM/index.html","26c60edf6bd502eabfbcabe303d411f9"],["tags/ISO-31-1/index.html","a7db30dd9dbf7eff3e68406707261bc9"],["tags/ISO/index.html","6f4f25601680007acad1a06e22e0d130"],["tags/ITU/index.html","d8bfb035e9a59a80d212d8b3d198eb5b"],["tags/JIT/index.html","c227086d0b5577435df77c64f9d4ab1e"],["tags/JSONP/index.html","172da9ad64c99a6b32fb6579bf19f27b"],["tags/JavaScript/index.html","ede218ec283892a313b388738752b50e"],["tags/LLC/index.html","7b1cc7b68fd8641ca9470abc630c743d"],["tags/MAC/index.html","68bcf6f8fb12f0048fe3516ecd96d7f2"],["tags/MACAddress/index.html","2cf45e49963fa441c0bf8cb224dfc00f"],["tags/Mocha/index.html","0ae7af6ed64a98c0a0ec714d88a71b12"],["tags/NVM/index.html","04e258f726f51ef6e75730f993c08266"],["tags/Netscape/index.html","885ce2f1d9598d9379db81a700259953"],["tags/NodeJS/index.html","0b5b0bc079bb36ecc0d7329c6e079575"],["tags/OFDM/index.html","5baeb9f4ec496c721c373eeb6fa7cbb5"],["tags/OSI/index.html","fbccbf1df770b74bc9e248fb069c9901"],["tags/PM/index.html","8febb38cfac92550084ed696545eb7eb"],["tags/PSK/index.html","2adec666f24f4e242d7f3d8444720fff"],["tags/Promise/index.html","6f606dfe65ac1555e89ce0a2d2134b51"],["tags/Proxy/index.html","6d08a231b864fe8f7f76f0cbc8f05365"],["tags/QAM/index.html","69b641cdca8e7ad3dc49b63d496fd9f1"],["tags/QPSK/index.html","511a41cdfb2d771ecda9b933b1aaf70c"],["tags/RJ45/index.html","529556505a5578c43dc40e767ca19363"],["tags/RS-232C編碼/index.html","b62df503552f2ebaab26b7f4f5d588bc"],["tags/RequireJS/index.html","48553444033e77f48184edf6b2766841"],["tags/SSAP/index.html","0374f4ab53130ec1875e31013509b26c"],["tags/STP/index.html","81366676fee33f26c179cc3ce9225d5b"],["tags/Scope/index.html","dd5be66f39c758a416f15130608883f1"],["tags/ServerJS/index.html","67d91fcce9d326bdf68eaa4a928addde"],["tags/TCP-IP協定/index.html","9cef33f9185c2ce7f66a07ee45531a11"],["tags/TDMA/index.html","6da2894ac96832fd7d4f0a671b5f929d"],["tags/TypeScript/index.html","3a454e9b36da31c118ed5501a8e17585"],["tags/UTP/index.html","f373484827f2844385cb11f65f148911"],["tags/Uglify/index.html","25603f5daa4c2efcfce9487a83ab8ad3"],["tags/V8/index.html","2ed2eca25eb222f9d558c17059d31b9f"],["tags/VSCode/index.html","cae265ac3bfa0666778e5a7be95b69a9"],["tags/W3C/index.html","69d95bd875ddf344459fb59b5a1aa858"],["tags/WebAssembly/index.html","fbf9243912271e9ec9edda0a4baab900"],["tags/WebPack/index.html","6738a29015b010109ab8dbd2efa6cb5b"],["tags/WebSocket/index.html","141fb5a8d6c8ea95c3adf17168d16135"],["tags/WiFi/index.html","7d451edfe626d95b26f0a026225aac4e"],["tags/WiFi探針/index.html","5dae42f985d9a748eabccc73a41511c6"],["tags/XMLHttpRequest/index.html","77d21b53da89788d013ce249469d90ef"],["tags/apply/index.html","7b8e5aab6e399ef6e59379b986596fb2"],["tags/bind/index.html","becd5bee882c210a9edc17b2dc76cfa1"],["tags/call/index.html","de22c452a461b8c13b9aaeaeedcc34a8"],["tags/const/index.html","04447f2db4a0dd9a0d19036c9b9b542e"],["tags/export/index.html","00457748af135888b59221bfd685e4d2"],["tags/exports/index.html","893fba94bd6f83c8aced3b90dc065c48"],["tags/import/index.html","7907f3024fa4b2d4f8bfa545cdad624f"],["tags/index.html","f44713a0d0884a059a4904b67b0eabb8"],["tags/jQuery/index.html","9ceaa6dd9a0e615a6d5997e182fb1b3a"],["tags/let/index.html","65bb86506607c7976761e302978a66ac"],["tags/npm/index.html","94b14a0cedd442d0740c4afe5478d5b2"],["tags/packeage-json/index.html","27615e0bf49bfbac7eeeee518da069a7"],["tags/require/index.html","52ce3e4ab916843ec8b995cc6c69c823"],["tags/runtime/index.html","7dd5f1b6116496cd5092daaf2e7b28c0"],["tags/seaJS/index.html","50ada29881af527107521b0fc1f10344"],["tags/this/index.html","a140985f5c561e930ffc9781fd37b1e8"],["tags/tsc/index.html","542c12f52100f0f1f8a403e2e0548236"],["tags/tsconfig-json/index.html","2e15acccaf0836aa9bd36ba0eb710fb2"],["tags/var/index.html","95163dcf97fb9c03af35cdd33b5c3cbe"],["tags/中頻/index.html","cdd7e5c0b61f49dbe894feda55f46777"],["tags/交流電/index.html","1d6587065a96264bd25c3857fe62e8cb"],["tags/人流監控/index.html","60f935aaa6cf6b61888a37cd35d5f5e9"],["tags/人類/index.html","0513a06e3c9a42c562f8b4fbe642397a"],["tags/介質/index.html","1789fdb136cba5d3045f7cad02c44980"],["tags/傳輸層/index.html","71d6e3d9139295e8564396bb4a374484"],["tags/光纖/index.html","17cfbcf45cc77fcd16ddd625cce2bcb5"],["tags/全雙工/index.html","43ba98b2c7b7dc62d6a2704f367ae497"],["tags/前端歷史/index.html","8738bb1a213e4c55b00a8981769561b7"],["tags/半雙工/index.html","c1f074bc7ca61edd9cdb9c8ece08c52e"],["tags/協定/index.html","3d3fd650dd5f0f16f300acf6d5e74bc5"],["tags/厄斯特/index.html","f8eaeff3599023ec2a93053a2329ad71"],["tags/可見光/index.html","249424d2b96d1b724d5a568a07aae9fa"],["tags/同步/index.html","c882fa0c5a383c8f81b1bcc0355baf20"],["tags/同軸電纜/index.html","8fa92767a01cb48bed666e6cfeba8163"],["tags/單元測試/index.html","8131a4a88aece01e13569cd72635186d"],["tags/單工/index.html","5ec92d07c3a904a4f77411f1457cdb98"],["tags/嚴格模式/index.html","afdd8bbda8a915fe354c247dbb53f37a"],["tags/國際電信聯盟/index.html","6d01551e990269d69ec191510b943fae"],["tags/基頻/index.html","7e66b1bd592da47590c1dd438e11c44e"],["tags/多工/index.html","4013f2a1c9ace0b8c64aea306434854b"],["tags/大腦/index.html","39670df7783b18956419393978807efe"],["tags/定位輔助/index.html","06e3a12571918b420a35546a3f689dd3"],["tags/實體層/index.html","7434a0befec874083b8a810e57caa0a8"],["tags/封包交換/index.html","4dadcc3eb2e46140ba5c05197f601546"],["tags/射頻/index.html","4074070ac167dd17532e16f1f938242a"],["tags/尼安德特人/index.html","00e8a80318e2405ff16aa9b8e4b0a718"],["tags/差動式曼徹斯特編碼/index.html","c2a3d2ce5b727632a82f92cc1a029140"],["tags/差動式零補差編碼/index.html","0e02340671b2a67f9e5d693c954b06a7"],["tags/廣告投射/index.html","0fff37dc4449d43df79463e96e1ec33d"],["tags/弱型別/index.html","ddfffa6be1d86bd5b6e87b0e19737b0a"],["tags/強型別/index.html","59fe4b6aa1ea14c69f10d35180a6c359"],["tags/應用層/index.html","17ff1af0178c5eb19747117075ba8938"],["tags/抽象檔案-d-ts/index.html","1635e3ca6d521e2b5c9612e029cec4ca"],["tags/數位/index.html","2a04e910d1ea78b4be0b4373bc3a09fb"],["tags/時間/index.html","7d8ec4d90f454855c1b8e3e56b425948"],["tags/智人/index.html","0d8f5541ee28ce4924a174ae0aff0fd3"],["tags/曼徹斯特編碼/index.html","88e7320da9c0c499bba7ab9b63570393"],["tags/會議層/index.html","cbb575472af3880376a9743eef6e8644"],["tags/有線通訊/index.html","f0edb3b5384f809b1a8d968215f05812"],["tags/汙染變數/index.html","f4aef5f9be4f53f4f3538dc62536e8f6"],["tags/法拉第/index.html","87b8bab926c4f1ceeec7ccc75acce367"],["tags/瀏覽器/index.html","8f5db038e3023df6042da3c694f551fe"],["tags/無線通訊/index.html","e36400e9cf9a66899cb3603e942b7d1a"],["tags/特斯拉/index.html","2939210f8354a3753fc2be6781602090"],["tags/異步/index.html","268cc56d75e2e34e7e987f593ec323c6"],["tags/磁場/index.html","211fc19118624b485c791096afdb63e6"],["tags/第一次瀏覽器大戰/index.html","19daeeff004c2a9750a41f6f9e77bcd0"],["tags/第六代WiFi/index.html","08d508189277b5c34ab5347d20b210ed"],["tags/網路層/index.html","255705830ddd9a8c8a3f2f9bd4785562"],["tags/線路交換/index.html","d70c096d9dc3359cd366b0937fd0c7f4"],["tags/緩存/index.html","56506d8896dc1780b665942f965b1d47"],["tags/聲波/index.html","b2c7ac893f6264d394e3693676122703"],["tags/能階/index.html","a12d17c6adcc791327bce60f092a274e"],["tags/腳本語言/index.html","6facaf2cc0635db45eeba7050c375517"],["tags/行為監控/index.html","45ab3b3837e0d6a6f827f45d48bb287c"],["tags/表現層/index.html","86eac81cacae54efa9c3f9502f1b09b7"],["tags/解釋型/index.html","332e7b4943a1b9ad960b593c27008169"],["tags/詐騙資料/index.html","cb54a7879b91537926c02cd75bbf1d0c"],["tags/調變/index.html","a1cdf2b1114d005ee6bf8e5d9a4af112"],["tags/資安保護/index.html","c28886a4690beca7195f2bdd0cd896ee"],["tags/資料鏈結層/index.html","602b13d46df7eb2f379c36715ce8f420"],["tags/跨域/index.html","bcbef383490b80d82990045100f101bd"],["tags/身分證/index.html","0601ec4362b6aa5dd004d23c9c733224"],["tags/通道訪問控制/index.html","b18abf00cb1f44434f0c03274aca5f78"],["tags/銫原子/index.html","af7db0cb6f65c1e476c0f3019e529115"],["tags/閉包/index.html","72ed6d339461b60a043eae4e329fbf99"],["tags/雙工/index.html","0dd9bcf3033f0d68854db6fb076cd0ee"],["tags/雙絞銅線/index.html","a66192a1ca6b6d7f0b91aceed61d2b9a"],["tags/雜訊/index.html","a15de64d31e1a5828e6c10e9e793941b"],["tags/電場/index.html","93d21176fc06a0f836976c88a923e02c"],["tags/電磁波/index.html","9f702f11448b7a8936153a00f3e5b8a6"],["tags/電視/index.html","db41808445e07e640f8a62383332a788"],["tags/靜態優化/index.html","c36a67a8ace057d643b053b613f9805f"],["tags/頻譜/index.html","c0c405e3a25aea505f4b259f3a7a17ab"],["tags/類比/index.html","27671bdcc63c1abe9e3fd6ba2307ee86"],["tags/馬克士威/index.html","905069f4e269b1a1ecdb2626993a5854"]];
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







