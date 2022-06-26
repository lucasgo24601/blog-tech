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

var precacheConfig = [["/blog-tech/2020/01/11/部落格介紹/index.html","e7787b3751d05d6208d5dca8270f38b6"],["/blog-tech/2020/02/11/前端P.01 - 網頁三兄弟/index.html","15596bebb1e0258ebc3674a7d195791b"],["/blog-tech/2020/02/12/前端P.02 - ECMA組織/index.html","ba036fc1f113db6c1d8370959b870ce5"],["/blog-tech/2020/02/13/前端P.03 - 分析解釋型、弱型別/index.html","27006b033e8bd8b219dee25c2e1ecaf4"],["/blog-tech/2020/02/14/前端P.04 - JIT & V8/index.html","9be3c08437bcb1f5e9d755562bbe0388"],["/blog-tech/2020/02/15/前端P.05 - TypeScript/index.html","4dcc02d187c924088748c16515cbb1f6"],["/blog-tech/2020/02/16/前端P.06 - WebAssembly/index.html","26201e29c6b94120e4517c3470996f58"],["/blog-tech/2020/02/17/前端P.07 - jQuery & AJAX歷史/index.html","0dfb0052e3379b5a5ba0b7073ec70ba6"],["/blog-tech/2020/02/18/前端P.08 - AJAX & 跨域/index.html","706b604014e4147a935a8ddcb94e30b3"],["/blog-tech/2020/02/19/前端P.09 - 同步和異步/index.html","a26b2abe9b79d5d469dbd569965eda0c"],["/blog-tech/2020/02/20/前端P.10 - Scope/index.html","d29ad0fbbd2b1d708c1ef8f6bf93f59f"],["/blog-tech/2020/02/21/前端P.11 - 模組/index.html","aa783a837c83d7e19e94e2f7b34a3486"],["/blog-tech/2020/02/22/前端P.12 - NodeJS/index.html","addf7fe9e86b0457ad2e8f715a735f9b"],["/blog-tech/2020/02/23/前端P.13 - WebPack/index.html","8ae3294044b92bcf2950c5fa0d5e8afe"],["/blog-tech/2020/02/24/前端P.14 - 單元測試Mocha/index.html","cab22aa631253a20ee75c22ee11cc72c"],["/blog-tech/2020/03/01/通訊P.01 - 協定/index.html","c6561688f6b5449c79c4580b4d5c2ded"],["/blog-tech/2020/03/02/通訊P.02 - OSI七層模型/index.html","a38a3d0246b2969f84c954de3a557654"],["/blog-tech/2020/03/03/通訊P.03 - 實體層、介質/index.html","b27854163785f377ccb49e795d4213c1"],["/blog-tech/2020/03/04/通訊P.04 - 實體層、傳輸技術/index.html","19d0c6ba9919199183a93db02668f20d"],["/blog-tech/2020/03/05/通訊P.05 - 資料鏈結層/index.html","e807933cfc59b6533e2ecacf18e8f30e"],["/blog-tech/2020/03/06/讀書P.01 - 人類簡史/index.html","22358e756e7e089e9a48ff4384752b3a"],["/blog-tech/about/index.html","bd991ed0faa110cad967bcba8eaae3d6"],["/blog-tech/archives/2020/01/index.html","bfd85daca68f3a76dfac4c8d505ff561"],["/blog-tech/archives/2020/02/index.html","e6f10f037b5ef716b6eb3f2c5f44af90"],["/blog-tech/archives/2020/02/page/2/index.html","d9adb254554292caff2891df87b5e2a5"],["/blog-tech/archives/2020/03/index.html","460c91674d40aaf3688e522c98c1f14a"],["/blog-tech/archives/2020/index.html","ae7439cde4a31dec8704cb1ebf503951"],["/blog-tech/archives/2020/page/2/index.html","c27a6558d64f054db734574b352d2a7f"],["/blog-tech/archives/2020/page/3/index.html","94fff26abb73cb98e35331532ebee010"],["/blog-tech/archives/index.html","80a5bd483b442358d5d63e7b31f929f4"],["/blog-tech/archives/page/2/index.html","32102b111beb9f99b453ca0186ca1ad6"],["/blog-tech/archives/page/3/index.html","bff9fc144e0ba5bd5b14e5567083e09d"],["/blog-tech/categories/index.html","f62cc47c2b95624256c0bd62e75e8b93"],["/blog-tech/categories/前端系列/index.html","f96decb76e82703f4b730b8df59b09a2"],["/blog-tech/categories/前端系列/page/2/index.html","bb09170652eeee00eac3f2667918c5b5"],["/blog-tech/categories/基本文件/index.html","d52b47c02ba707194fd00973eac2f81f"],["/blog-tech/categories/讀書心得系列/index.html","ff436876abf98e362721d5f93b712467"],["/blog-tech/categories/通訊協定系列/index.html","4e89734c8e2c25ef8dc52e672c387337"],["/blog-tech/css/index.css","616d6112f77ab4bfc6ec208056e9b104"],["/blog-tech/css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["/blog-tech/css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/blog-tech/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog-tech/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog-tech/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog-tech/img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["/blog-tech/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog-tech/img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["/blog-tech/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog-tech/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog-tech/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog-tech/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog-tech/img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["/blog-tech/img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["/blog-tech/img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["/blog-tech/img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["/blog-tech/img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["/blog-tech/img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["/blog-tech/img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["/blog-tech/img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["/blog-tech/index.html","a40ccab8d5d70312b05f97d466acd564"],["/blog-tech/js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["/blog-tech/js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["/blog-tech/js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["/blog-tech/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog-tech/js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["/blog-tech/newsletter/index.html","de64181f42b7226014bb3f8c395c2870"],["/blog-tech/page/2/index.html","a86cea44c78e5e461b4fd088353f652c"],["/blog-tech/page/3/index.html","6f564f22eb742cbf70433c8f2333a600"],["/blog-tech/tags/16PSK/index.html","d88706f096a932b94bd9250aed05873c"],["/blog-tech/tags/1G/index.html","863f2442fdfb38aad4c33a689abad48f"],["/blog-tech/tags/2-4G/index.html","8e8cd4d83598e464fa7ffe57f7dd6cc2"],["/blog-tech/tags/2G/index.html","c3d77388e1b51ec460270aaa82f7f128"],["/blog-tech/tags/3G/index.html","d72a126b8064d1c3421b921406156cf8"],["/blog-tech/tags/4G/index.html","9f0f36336f085acbe2bd65d84b17ad80"],["/blog-tech/tags/5G/index.html","54c7c11562b53110758cd438a80f9bad"],["/blog-tech/tags/AJAX/index.html","69a9af06a46fa3c19c5dc19d33a2ff8e"],["/blog-tech/tags/AM/index.html","ec28df7b2466e32509b24b706c9670ed"],["/blog-tech/tags/AMD/index.html","eaca555ecfd94b8291dd53ac3b1c3c9b"],["/blog-tech/tags/ARP/index.html","699b96c4554910bf006cf1ca840c8a05"],["/blog-tech/tags/ARPA/index.html","215f938504569f8a5c9f0ae0787d64b3"],["/blog-tech/tags/ARP攻擊/index.html","aa7c2cdda5bd44cda92b6a572f9f4813"],["/blog-tech/tags/ARP緩存表/index.html","b40c5af4a94a0a9770ff19504cb1770c"],["/blog-tech/tags/ASK/index.html","db25c12e3e3a263852d7f77f101b45bb"],["/blog-tech/tags/Async/index.html","8b37d3512a1bfa470c4635388e5773dd"],["/blog-tech/tags/Await/index.html","4134a507078edf4efe5a95976bc95bd9"],["/blog-tech/tags/BPSK/index.html","63f7fdda9de10db1edeeeacadfb3d0e1"],["/blog-tech/tags/Bable/index.html","4796bcf45ab7784d19d9889864b88b2d"],["/blog-tech/tags/C/index.html","35134e80c3213acd62cfdef533e97e03"],["/blog-tech/tags/CCITT/index.html","7a63f5f95b9b21cc3ad3cf51275ee9b2"],["/blog-tech/tags/CDMA/index.html","d22db7e30215a82309abcd0754ea0907"],["/blog-tech/tags/CI-CD/index.html","ace037ae05cef6a8a07a9b29ce7cfb3d"],["/blog-tech/tags/CI/index.html","834f21dcb66086d265ff694e507de582"],["/blog-tech/tags/CMD/index.html","b260c940b5761c41a5b23706338c0f84"],["/blog-tech/tags/CORS/index.html","b374cdf1e6f8b672bbcc865fc3908cca"],["/blog-tech/tags/CRC/index.html","cee95f186383cc4e23d1835775a8bb47"],["/blog-tech/tags/CSMA-CD/index.html","bc47ec9dbd4cd51bf9830aff4c2e34a9"],["/blog-tech/tags/CSMA-CS/index.html","a2e9357ef026727283c2a18c93ad952b"],["/blog-tech/tags/CSS/index.html","d755ae7ea54e0992c922263912451c42"],["/blog-tech/tags/CallBack/index.html","97624acd4ef30360aa4940adf4139417"],["/blog-tech/tags/CodeStyle/index.html","0fc1500f815b5a1a81d3eadae78b2c42"],["/blog-tech/tags/CommonJS/index.html","deb3f0476936d24a0000498c6cedec5e"],["/blog-tech/tags/DSAP/index.html","277991bce82ae2cbee437051c3910238"],["/blog-tech/tags/ECMA/index.html","e68e04ee8e607df581c519344374a80c"],["/blog-tech/tags/ECMAScript/index.html","8d519aa733bb5be1956c00414fb1de11"],["/blog-tech/tags/ES5/index.html","6eae96d7cc69ef7a543b99a75d8935d2"],["/blog-tech/tags/ES6/index.html","55608ee8215848d7bcfa4ae0b1dffbd5"],["/blog-tech/tags/FDMA/index.html","e4b09cf6906a5c4b960a1d7a2ea88fb0"],["/blog-tech/tags/FM/index.html","db3ed1c1d7172126f7a39d4765af94d4"],["/blog-tech/tags/FSK/index.html","d1f97df43c8be6a7187672eb3226d13f"],["/blog-tech/tags/GC/index.html","75f00bfc6beaec71913cb8f4244eeb7e"],["/blog-tech/tags/Google/index.html","6707646459d81b17cbd65393bd622188"],["/blog-tech/tags/Hoisting/index.html","ba6d352c640b735eb7c97d5495bc3fab"],["/blog-tech/tags/Html/index.html","93c0d6d6044681e17b3530350e5dbd76"],["/blog-tech/tags/IE/index.html","23729746fdf0da03e514f16c54df8324"],["/blog-tech/tags/IEEE/index.html","42017e7a32c45ec0ac50cebb58036ce8"],["/blog-tech/tags/IEEE802-11/index.html","5dd86642d6183b6a1993349a612fd696"],["/blog-tech/tags/IEEE802/index.html","eec73903679cc57782d6b0e4e50c55ea"],["/blog-tech/tags/ISM/index.html","d9c3236e4a2bffc9b128b830eb753d8b"],["/blog-tech/tags/ISO-31-1/index.html","8f2f87125d3fbf80defb8090e6505149"],["/blog-tech/tags/ISO/index.html","fd5a8a32f36125d12fd6a194ee59d7f1"],["/blog-tech/tags/ITU/index.html","2458df7f8cb468b14fc695409eb4730d"],["/blog-tech/tags/JIT/index.html","6fd0ac063e576ca62c5a92dba85c8bc9"],["/blog-tech/tags/JSONP/index.html","cf292d8d8ca9748b1e1e04d3d04bc5f7"],["/blog-tech/tags/JavaScript/index.html","175c5ed4a0d177783233540b8f20f870"],["/blog-tech/tags/LLC/index.html","69b2de0c84f29f756122cba559afedd8"],["/blog-tech/tags/MAC/index.html","efa4b17f337e4776ae3c7a523a8ca236"],["/blog-tech/tags/MACAddress/index.html","82ef1d8883e5d1e6b9db6574bed9f377"],["/blog-tech/tags/Mocha/index.html","eadb105ad874d1a5eb00881843652591"],["/blog-tech/tags/NVM/index.html","48f743d92692e33f49ffccfdc95bb582"],["/blog-tech/tags/Netscape/index.html","2b25fa21811dc293db8278f9e04370a7"],["/blog-tech/tags/NodeJS/index.html","bdd9cd9f04a3d14c812e79030ca62ff7"],["/blog-tech/tags/OFDM/index.html","924a66d238c5b4ef4140c6b1158206d2"],["/blog-tech/tags/OSI/index.html","b3dcc6701debaa1596c1e3b15f6ae85b"],["/blog-tech/tags/PM/index.html","b8865dacf4eb7d2dabf741c9d47c1a54"],["/blog-tech/tags/PSK/index.html","98358b2af38cb123f4115ad9f706569c"],["/blog-tech/tags/Promise/index.html","930bb2fcd4a6b4e94de491ea13af906f"],["/blog-tech/tags/Proxy/index.html","e3b1c5c32d9bfee7f9fdbd59719e7656"],["/blog-tech/tags/QAM/index.html","92f6311537969f6c33a888ca84eedef5"],["/blog-tech/tags/QPSK/index.html","917d421794197cfd001dbaa6e98ecc46"],["/blog-tech/tags/RJ45/index.html","31c8c69ad6826b8356cfc8e12aaa7db7"],["/blog-tech/tags/RS-232C編碼/index.html","8ea2923c8438fc73a0cb82b6643884c0"],["/blog-tech/tags/RequireJS/index.html","98a3f3d66fb75e46bb41aa985bc02d08"],["/blog-tech/tags/SSAP/index.html","f99dc79494ee47438ce9a06c599957b5"],["/blog-tech/tags/STP/index.html","6c8d7774a64dcc9f931e75ff977f239e"],["/blog-tech/tags/Scope/index.html","8bdf3d5651f1002ab3aba0fc12b85514"],["/blog-tech/tags/ServerJS/index.html","533b10b5606edc73274d9d9e3572cd38"],["/blog-tech/tags/TCP-IP協定/index.html","5b6bef314617b92dfd4660671b6fde17"],["/blog-tech/tags/TDMA/index.html","4f363112dce5adee677f517993f23575"],["/blog-tech/tags/TypeScript/index.html","b6903e53350c38b7db52c88f91f559eb"],["/blog-tech/tags/UTP/index.html","12b8196f16efb565e0acbfae0bba3a7d"],["/blog-tech/tags/Uglify/index.html","101638991341dcdfe06c85b3c97af234"],["/blog-tech/tags/V8/index.html","a866b87d89c4367c8fdf97ae9621104b"],["/blog-tech/tags/VSCode/index.html","a7533e3eda7294a8e1498df93157660b"],["/blog-tech/tags/W3C/index.html","0b6008fbddc37977933ef07b8d242849"],["/blog-tech/tags/WebAssembly/index.html","e2faefa3cf985a39ec2a9fe80185249d"],["/blog-tech/tags/WebPack/index.html","a9c58238a9cede060360301c9f5432e7"],["/blog-tech/tags/WebSocket/index.html","64ec3bfa6b26ff4c0e5e1fc231a1a19e"],["/blog-tech/tags/WiFi/index.html","f6fb691314ee42bf3af2e56f334bca7c"],["/blog-tech/tags/WiFi探針/index.html","8c1ed3a6138e5bfc735a5d1927b60f7a"],["/blog-tech/tags/XMLHttpRequest/index.html","b836b0357d9f604e234c0a38ac3d17e4"],["/blog-tech/tags/apply/index.html","164e8017a2af0a38852dfc5e46660cd1"],["/blog-tech/tags/bind/index.html","f147e8a3cbf1ef7fb035908a8f059026"],["/blog-tech/tags/call/index.html","f0f21a6980927c858d042051d8edf8de"],["/blog-tech/tags/const/index.html","a5faa030868171b4dc413317ea990647"],["/blog-tech/tags/export/index.html","5678b3a883adf6ce7055bdf0a8999422"],["/blog-tech/tags/exports/index.html","1eb32e06ff1e2b9010d1daeef91246e0"],["/blog-tech/tags/import/index.html","5d4d0e9a967b67c4dba3981d56a27a3d"],["/blog-tech/tags/index.html","714bc28b1ef4ba3a573cb178f0427fdd"],["/blog-tech/tags/jQuery/index.html","66c08cb0800afb4b2724ebdd8f5e738e"],["/blog-tech/tags/let/index.html","e1ae6545a1bd985161185446ccabc0a5"],["/blog-tech/tags/npm/index.html","efc08e694fc13902710b1545a23c7123"],["/blog-tech/tags/packeage-json/index.html","08895deab1679920ee90f0736bdc0931"],["/blog-tech/tags/require/index.html","aba90e43bb99068950418061be616daa"],["/blog-tech/tags/runtime/index.html","0561f32fabaae27eee6ceceafa9819bd"],["/blog-tech/tags/seaJS/index.html","53ebecce917504d5a2667a03d55b446a"],["/blog-tech/tags/this/index.html","1058a71ddc5d8e3e560df45a21f7c755"],["/blog-tech/tags/tsc/index.html","7900da8e74c114ad16a3051683d05052"],["/blog-tech/tags/tsconfig-json/index.html","b507721fad9970ef6ec23781696f95ec"],["/blog-tech/tags/var/index.html","701b72d217e25150b09c64ae7cfc828e"],["/blog-tech/tags/中頻/index.html","ee17a3d403b9174543123de86dc88df2"],["/blog-tech/tags/交流電/index.html","0d218f2d541189d54a9a387211e6351e"],["/blog-tech/tags/人流監控/index.html","32fd9dfe49e319177cc8f2a8a499e7e9"],["/blog-tech/tags/人類/index.html","075470c489505719df22f9a3ded8aced"],["/blog-tech/tags/介質/index.html","9c59d988d8e5908ddd282057bab3d2bb"],["/blog-tech/tags/傳輸層/index.html","7eff24b1d896ef3f40c45257c8f1b192"],["/blog-tech/tags/光纖/index.html","58621f080743b77e7edbc63fc9a87f0f"],["/blog-tech/tags/全雙工/index.html","b8f2600c08e69cc1e80ae2dea7b826c4"],["/blog-tech/tags/前端歷史/index.html","7e3a09e5b3a6a84f84988e95d6c9786e"],["/blog-tech/tags/半雙工/index.html","78ab94aa85b6a10c7bd2801e62910c27"],["/blog-tech/tags/協定/index.html","8ec252381bc85a6af809f7a8bd11767c"],["/blog-tech/tags/厄斯特/index.html","e72dd97ea6a27ae47aca199cad25068f"],["/blog-tech/tags/可見光/index.html","57e32842d1119b0a5f3ec7f4decaf957"],["/blog-tech/tags/同步/index.html","9cc7e7a495bc239e7a967e4984bbfce0"],["/blog-tech/tags/同軸電纜/index.html","669d6f26fefbc648c2da2a85b61f5339"],["/blog-tech/tags/單元測試/index.html","f17af6b771231ce38a4b3c49b04fa1df"],["/blog-tech/tags/單工/index.html","1f87ce428840e450e757d21da96e879e"],["/blog-tech/tags/嚴格模式/index.html","9e1bb137e266d962bc793ab75ab0e883"],["/blog-tech/tags/國際電信聯盟/index.html","61be205f67f2b428b02499ebf1d45ecb"],["/blog-tech/tags/基頻/index.html","cbb306f2b14e7736ddd416d0390bee7e"],["/blog-tech/tags/多工/index.html","203518607d165bb2415ee263cc5c6203"],["/blog-tech/tags/大腦/index.html","d22057b00847e653c42be8cc82a4c428"],["/blog-tech/tags/定位輔助/index.html","f35fa7fb0c4ee3a165af4ca325f5d967"],["/blog-tech/tags/實體層/index.html","b8b521b5e5403fe210d713a57438716e"],["/blog-tech/tags/封包交換/index.html","4ac56f4971144f222d54eaf4a942005b"],["/blog-tech/tags/射頻/index.html","a77736cd3b3da9d7269494d4567a1c88"],["/blog-tech/tags/尼安德特人/index.html","f5d6f65e84316019186b007262295862"],["/blog-tech/tags/差動式曼徹斯特編碼/index.html","0363d31960c836b84f9bc65dae7f0216"],["/blog-tech/tags/差動式零補差編碼/index.html","3725db15b79810a35ecc18e0ce7e3b8c"],["/blog-tech/tags/廣告投射/index.html","0f949e45aa0542afade171540c1d3ee7"],["/blog-tech/tags/弱型別/index.html","10bac53b2128d8898287f2271b5608a2"],["/blog-tech/tags/強型別/index.html","39fd6238e22fb904c8dafc8742d55f73"],["/blog-tech/tags/應用層/index.html","414d99a5cbb49dcd527612989be6d661"],["/blog-tech/tags/抽象檔案-d-ts/index.html","f4e52448b7dc447e6853694e374dace8"],["/blog-tech/tags/數位/index.html","ce6d097e372ce714342040eb9e4d310a"],["/blog-tech/tags/時間/index.html","720bafd114b1dd7b03a4159ea1d60598"],["/blog-tech/tags/智人/index.html","1d110387fbc62ceb6b6cf3404c944d17"],["/blog-tech/tags/曼徹斯特編碼/index.html","01fbf08c1d6fbd91d07e59dd96b08814"],["/blog-tech/tags/會議層/index.html","243f515481731109053a2c1fbc5559f7"],["/blog-tech/tags/有線通訊/index.html","689fce9012a1667f3c2f8de579f80867"],["/blog-tech/tags/汙染變數/index.html","a876c3c40ab5427087f56ab3f3eec8ba"],["/blog-tech/tags/法拉第/index.html","786902e16d519f8fd5e0be5c40b89079"],["/blog-tech/tags/瀏覽器/index.html","850d2d24ba2bf4f2c9b659be50ab595b"],["/blog-tech/tags/無線通訊/index.html","863248b2ff584c46344134ea19a54059"],["/blog-tech/tags/特斯拉/index.html","241a1ae422a1c3d11edd6c36441bead5"],["/blog-tech/tags/異步/index.html","7b648eaf170abb89ae67b78254fa70ec"],["/blog-tech/tags/磁場/index.html","19aba0249d8d293958058b3693b5f03c"],["/blog-tech/tags/第一次瀏覽器大戰/index.html","e3e26bb77c98fedd7556b7afad97a3f2"],["/blog-tech/tags/第六代WiFi/index.html","ee232da5b145fbe7513742f29fa25603"],["/blog-tech/tags/網路層/index.html","f6111e335f7f2d52f5e7b22a9690f95b"],["/blog-tech/tags/線路交換/index.html","458289a2226e4fc47331f76ebcddd920"],["/blog-tech/tags/緩存/index.html","f3969e9f8180f02ff922a23ab995acdf"],["/blog-tech/tags/聲波/index.html","28d8e8b2af8e0e97977a1afc9593d2a8"],["/blog-tech/tags/能階/index.html","9e1e2b5b3a04222e1d31cd2c6662a99a"],["/blog-tech/tags/腳本語言/index.html","08087a4784515da935e16d2538af5e27"],["/blog-tech/tags/行為監控/index.html","8e1252bd38aaad7aa8b5cf8900974d2a"],["/blog-tech/tags/表現層/index.html","dd9a5db70a6203eeabc414671fcdc0b7"],["/blog-tech/tags/解釋型/index.html","56c54ba9fccea1d3be890c01729d1671"],["/blog-tech/tags/詐騙資料/index.html","819f76520cdb694bbf9a76cfc396e767"],["/blog-tech/tags/調變/index.html","5d6e71d206b90aa18f13600cb0591b9c"],["/blog-tech/tags/資安保護/index.html","e8ed40862006743b6654dd1412bbf0ae"],["/blog-tech/tags/資料鏈結層/index.html","cc68256c7dd0273b248c138a6020b22c"],["/blog-tech/tags/跨域/index.html","17f246722e3589344320b622644246b3"],["/blog-tech/tags/身分證/index.html","9b330aeca7476c1da5b77d0e394073e3"],["/blog-tech/tags/通道訪問控制/index.html","b7bac6d1ab2c0bdd2d81185d4f6e8bcc"],["/blog-tech/tags/銫原子/index.html","ff19e548da6ca39eb697197c2b64db6b"],["/blog-tech/tags/閉包/index.html","ac2f1b47b8abc80ae149b2a767970e1c"],["/blog-tech/tags/雙工/index.html","1b91c1e02de9e4ba8cb8440cea6709c1"],["/blog-tech/tags/雙絞銅線/index.html","da836309ca9c3123629a142d81858a94"],["/blog-tech/tags/雜訊/index.html","5e04182aeebd0c7d068e6a6d3191d430"],["/blog-tech/tags/電場/index.html","b829154e99edf41201cdf01de0d104a3"],["/blog-tech/tags/電磁波/index.html","4ebee1aebcfcaa07a695063ac7a21fc0"],["/blog-tech/tags/電視/index.html","bad2f8be173e79421cce273dcea92d41"],["/blog-tech/tags/靜態優化/index.html","ff4ab55ba93782ce7fcf8df3806ef4a7"],["/blog-tech/tags/頻譜/index.html","71f737e55269dcce43fbdfd4d91208bb"],["/blog-tech/tags/類比/index.html","0aac1832faaede3a15746a9a5c313d9b"],["/blog-tech/tags/馬克士威/index.html","409e535906e9bd8404c1c65965368c85"]];
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







