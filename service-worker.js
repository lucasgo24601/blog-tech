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

var precacheConfig = [["/blog-tech/2020/01/11/部落格介紹/index.html","33fa3acd2332574a4ebe36deb2251777"],["/blog-tech/2020/02/11/前端P.01 - 網頁三兄弟/index.html","961e79079db113a173895357a6d3146e"],["/blog-tech/2020/02/12/前端P.02 - ECMA組織/index.html","a6bb0b0d7a4f9599770cf2506386018d"],["/blog-tech/2020/02/13/前端P.03 - 分析解釋型、弱型別/index.html","ab1aa49c9f460908babc53ab99bd5c55"],["/blog-tech/2020/02/14/前端P.04 - JIT & V8/index.html","1199c720f334236a27acb750dba527de"],["/blog-tech/2020/02/15/前端P.05 - TypeScript/index.html","0e8bc5f2b82b71850dd8e615f4fb4b5e"],["/blog-tech/2020/02/16/前端P.06 - WebAssembly/index.html","e6a8d5a9b8d0f0e5208f6f73fc88f733"],["/blog-tech/2020/02/17/前端P.07 - jQuery & AJAX歷史/index.html","7ea5093b3c4faf14dcdaaf9c4177abdb"],["/blog-tech/2020/02/18/前端P.08 - AJAX & 跨域/index.html","92f4cdeb47312f27d9910b9b6320165a"],["/blog-tech/2020/02/19/前端P.09 - 同步和異步/index.html","2065a840f9705a731d5c1a82a7233e34"],["/blog-tech/2020/02/20/前端P.10 - Scope/index.html","e1856a40b0123d6c2631956b57322f5c"],["/blog-tech/2020/02/21/前端P.11 - 模組/index.html","7ffb96a6ad45bd52a193f4e1dc7b1b3d"],["/blog-tech/2020/02/22/前端P.12 - NodeJS/index.html","7f2b278e61a7f2e7576bf5de0fe8ee50"],["/blog-tech/2020/02/23/前端P.13 - WebPack/index.html","4aef491fcacc228feed8f84bfe722dd3"],["/blog-tech/2020/02/24/前端P.14 - 單元測試Mocha/index.html","2713a6ea220e3ca6a9cf330faaa7f8aa"],["/blog-tech/2020/02/25/通訊P.01 - 協定/index.html","64c9db6d50f2438b56d477c518d2df39"],["/blog-tech/2020/03/02/通訊P.02 - OSI七層模型/index.html","755ca9a132fe58ff6b9d6dae69458754"],["/blog-tech/2020/03/03/通訊P.03 - 實體層、介質/index.html","85b22d13a0e401f8f09b7000c58e3723"],["/blog-tech/2020/03/04/通訊P.04 - 實體層、傳輸技術/index.html","49dcb7aa272bb1a010585490fec31ecd"],["/blog-tech/2020/03/05/通訊P.05 - 資料鏈結層/index.html","465c5cbcab7ff8a037c95fb351e22419"],["/blog-tech/2020/03/06/讀書P.01 - 人類簡史/index.html","1ac78ff46338e7c4c9ff17e11f4423ce"],["/blog-tech/about/index.html","3c53bc2be9b21d1fdf746bca25539762"],["/blog-tech/archives/2020/01/index.html","cd208d4149951cfe43fe3cf536512693"],["/blog-tech/archives/2020/02/index.html","e4f341323dde97eab7bbf13eb91af101"],["/blog-tech/archives/2020/02/page/2/index.html","06369513a46f6259b688b189ab984904"],["/blog-tech/archives/2020/03/index.html","b2b94d8afe448446589a31e20906505a"],["/blog-tech/archives/2020/index.html","459023e01ce3c971160287b62c4e3fe3"],["/blog-tech/archives/2020/page/2/index.html","fc80ec635f7c238467ec5e2c1ad9e457"],["/blog-tech/archives/2020/page/3/index.html","2d443a4980f381a05a6c983bce4a4e27"],["/blog-tech/archives/index.html","ae8bcb251c760812aaa31cef950614cb"],["/blog-tech/archives/page/2/index.html","9a161d60d9e5b634e439b5a320ba0892"],["/blog-tech/archives/page/3/index.html","68270580775d8afeb309aa1c3c37f4f7"],["/blog-tech/categories/index.html","80d2810dbe1377678ba938ba4ccac2a1"],["/blog-tech/categories/前端系列/index.html","2da2ba0eddaf876ab027f3ea480797dc"],["/blog-tech/categories/前端系列/page/2/index.html","2a69272b2ea617fb76b6a68fdf88f6cf"],["/blog-tech/categories/基本文件/index.html","b4d1b50022a14c09865810413283b036"],["/blog-tech/categories/讀書心得系列/index.html","3b220fd7de8324b760d4fabca2203b8f"],["/blog-tech/categories/通訊協定系列/index.html","1eb712142be3fe13ebe429102f25a277"],["/blog-tech/css/index.css","d596cc019db5ad77d44e30d4134e0a21"],["/blog-tech/css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["/blog-tech/css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/blog-tech/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog-tech/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog-tech/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog-tech/img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["/blog-tech/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog-tech/img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["/blog-tech/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog-tech/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog-tech/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog-tech/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog-tech/img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["/blog-tech/img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["/blog-tech/img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["/blog-tech/img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["/blog-tech/img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["/blog-tech/img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["/blog-tech/img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["/blog-tech/img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["/blog-tech/index.html","e76ec74fe46b12644675a0c85d98d5ca"],["/blog-tech/js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["/blog-tech/js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["/blog-tech/js/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["/blog-tech/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog-tech/js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["/blog-tech/page/2/index.html","400688f3bd1cb8a8170ec02ca39049a6"],["/blog-tech/page/3/index.html","92118db81ddaea4f533f22432f3cfeff"],["/blog-tech/tags/16PSK/index.html","21d3159147c2373ddd3e3edb0eb4fe1e"],["/blog-tech/tags/1G/index.html","0c817dee541a661c2b07fe242495803b"],["/blog-tech/tags/2-4G/index.html","b498dd2e2d6ab43603075d64911517ba"],["/blog-tech/tags/2G/index.html","46971e87921d195b96f47c97a12cc902"],["/blog-tech/tags/3G/index.html","e0892ce34ea18a4ecf1e355ca2783d79"],["/blog-tech/tags/4G/index.html","9c3b496f0c6b6a06f4fc8993d19c1521"],["/blog-tech/tags/5G/index.html","12b81e98ce28c86530c35c4697957a4c"],["/blog-tech/tags/AJAX/index.html","c0667ee7739d474bb2fe00a7c3214ccf"],["/blog-tech/tags/AM/index.html","95681cd810830db19071a4a8bbdfc965"],["/blog-tech/tags/AMD/index.html","3ca5856b866ade3a732593aea695fda7"],["/blog-tech/tags/ARP/index.html","9a788ab9887bd289d8ad26695cbd13d8"],["/blog-tech/tags/ARPA/index.html","ce342b818216a9bf1b60c2d9ef4980cd"],["/blog-tech/tags/ARP攻擊/index.html","c9362c28b034bfcfa113155af0aeb2b0"],["/blog-tech/tags/ARP緩存表/index.html","871c203213893007e9d90d2daf5bbded"],["/blog-tech/tags/ASK/index.html","044d320f160b2d6984afa40346883cea"],["/blog-tech/tags/Async/index.html","214529b89e4d9b8b78b3dabc4f661e31"],["/blog-tech/tags/Await/index.html","0731a819f23605c987adb3559969a15f"],["/blog-tech/tags/BPSK/index.html","b1f2c32d55968e82ff0562e9aabe6ec1"],["/blog-tech/tags/Bable/index.html","730e61ff5ab3665f37af9df6f512dc9c"],["/blog-tech/tags/C/index.html","089b2775d6e4f71ee6518855b660f58d"],["/blog-tech/tags/CCITT/index.html","20c28588504af511e7413336509810f0"],["/blog-tech/tags/CDMA/index.html","380d19e5e1a24e206617a1edeb427cfc"],["/blog-tech/tags/CI-CD/index.html","db2de3f1fb394864a4bde13f2b289eb8"],["/blog-tech/tags/CI/index.html","55b45e509b7db6a7f86f13d452844e99"],["/blog-tech/tags/CMD/index.html","84dbc4159fe4105cc504f7f1fb2d3c38"],["/blog-tech/tags/CORS/index.html","a9f505a150ee850a50fdb44fb71540a9"],["/blog-tech/tags/CRC/index.html","237899f61c889ae17fb672d209c85e2e"],["/blog-tech/tags/CSMA-CD/index.html","4829671ef49e2e1745da36e10a28c256"],["/blog-tech/tags/CSMA-CS/index.html","c5b2e2535717ed2d7a8b787c6358c032"],["/blog-tech/tags/CSS/index.html","b412a071b977cc04d3a11753dcb6a4a7"],["/blog-tech/tags/CallBack/index.html","c36ec1e651183571c26a4c0d98066c65"],["/blog-tech/tags/CodeStyle/index.html","fafb8df5f7cf1fc056a2809b0c923409"],["/blog-tech/tags/CommonJS/index.html","10cfcf05bd73e2691ac90d0fc3cda17c"],["/blog-tech/tags/DSAP/index.html","e1b03afcc86a3480a1e00521a5e088e9"],["/blog-tech/tags/ECMA/index.html","12671db6e58f9ebbd480761a10d47260"],["/blog-tech/tags/ECMAScript/index.html","9e92269d2ed8ab66bbb0ebdf8dedae19"],["/blog-tech/tags/ES5/index.html","4334f9558fb4ae4c74ab864e6cc33416"],["/blog-tech/tags/ES6/index.html","8a2f6b81d53bd69dd4b609b0a99f3fe5"],["/blog-tech/tags/FDMA/index.html","3ccf5532b076b4c3cd9ca13e2abcb600"],["/blog-tech/tags/FM/index.html","1647842c52aaa57e6006206eca97a00e"],["/blog-tech/tags/FSK/index.html","1710c11f439d8eab48401a00951e0fd2"],["/blog-tech/tags/GC/index.html","f99de1ae2163ea3d4821e06fd4009e3f"],["/blog-tech/tags/Google/index.html","9af5bcccddaef167ac38025bd5dd978f"],["/blog-tech/tags/Hoisting/index.html","30cbe053a4a87a232220100e6870b4e3"],["/blog-tech/tags/Html/index.html","3525f6f3055169250bb9244811e8aa53"],["/blog-tech/tags/IE/index.html","b9e554f92ddba32944831edf49df26df"],["/blog-tech/tags/IEEE/index.html","b85d67ca427e5bc9071bdea0dbf0da2a"],["/blog-tech/tags/IEEE802-11/index.html","5d14216392409b865d654aa6b1588b24"],["/blog-tech/tags/IEEE802/index.html","8f272ea79cbd6b6229b12aac4ce58173"],["/blog-tech/tags/ISM/index.html","2e48e20da6e23aaa856db17ddd277454"],["/blog-tech/tags/ISO-31-1/index.html","9595036a5864ad1d119b4e1d0af7df5c"],["/blog-tech/tags/ISO/index.html","d90fe50ebe925ea8ecfb31afa4418a3c"],["/blog-tech/tags/ITU/index.html","9dd933b64409065ade68dee986f39f43"],["/blog-tech/tags/JIT/index.html","481129f000634256ba64d17928137dce"],["/blog-tech/tags/JSONP/index.html","5fe0f6283b5822dcd7022c0d3799d133"],["/blog-tech/tags/JavaScript/index.html","744506cc6f76e53d3f0fbc1353bbc9d3"],["/blog-tech/tags/LLC/index.html","47d425848bb1a74685183aa7b79ab7ef"],["/blog-tech/tags/MAC/index.html","fff8ae103b09af03025fee81a22a4f47"],["/blog-tech/tags/MACAddress/index.html","6ea2be70de5abc6e62960613eaadd633"],["/blog-tech/tags/Mocha/index.html","2bf0e000ee30cb4db931f274fa10b082"],["/blog-tech/tags/NVM/index.html","1d402da6da2b3290c842cba240f7c15d"],["/blog-tech/tags/Netscape/index.html","97b718246641c0c1f1619b9b04b54278"],["/blog-tech/tags/NodeJS/index.html","6f19aac32137ded0ad6b78a9fb28d7fe"],["/blog-tech/tags/OFDM/index.html","bbbb3e79df4ed5ee4f325eb5d791e42b"],["/blog-tech/tags/OSI/index.html","cf0a555c84406eaa8687277118ab9814"],["/blog-tech/tags/PM/index.html","8ac2d50976f9825f0510dd60c8f2127f"],["/blog-tech/tags/PSK/index.html","ce97d653039dcca9dff95d9fb5dc57c1"],["/blog-tech/tags/Promise/index.html","a779eb4331a9f72d19b689c663be5bd1"],["/blog-tech/tags/Proxy/index.html","620af5ada333a70eba41b4fb64576dff"],["/blog-tech/tags/QAM/index.html","5084b0053dd76a6bec51d92b33a12fb2"],["/blog-tech/tags/QPSK/index.html","af1407200e53d4ffde84826ca297dc54"],["/blog-tech/tags/RJ45/index.html","f2abd0513791cfaf60704fd8ef8c3df0"],["/blog-tech/tags/RS-232C編碼/index.html","56686d1f19df38e78296b1f0001174d2"],["/blog-tech/tags/RequireJS/index.html","29102cbd57aab95cc1511391d632437b"],["/blog-tech/tags/SSAP/index.html","0b5ab7627de619de44ed90adb7bc9cff"],["/blog-tech/tags/STP/index.html","e0d4c28fa188a51f49831f26712a5c15"],["/blog-tech/tags/Scope/index.html","44455d4f5a551e4fafd93b9736ef76e8"],["/blog-tech/tags/ServerJS/index.html","36e2e70bcbf82f3c8022919e81e40aee"],["/blog-tech/tags/TCP-IP協定/index.html","547320cac112322de47215f584979769"],["/blog-tech/tags/TDMA/index.html","7738a25633bcd6399512baf303bf6147"],["/blog-tech/tags/TypeScript/index.html","e336bf3279d6970f8ee7189dd026cb83"],["/blog-tech/tags/UTP/index.html","4271415c0878412acf9a2facb5c263cc"],["/blog-tech/tags/Uglify/index.html","536c0c47a991c328f57551c69904f666"],["/blog-tech/tags/V8/index.html","3feb23987a454cd1d299660a1577e841"],["/blog-tech/tags/VSCode/index.html","03a243f3becb17776bc37cadd3efe2d1"],["/blog-tech/tags/W3C/index.html","fd07f5ed31222e87d3acaa0736d66aea"],["/blog-tech/tags/WebAssembly/index.html","a162c841739391006dc445815c5b6026"],["/blog-tech/tags/WebPack/index.html","b21a4548f9fcdfb293c9591619a26ee4"],["/blog-tech/tags/WebSocket/index.html","4dfad355530e748360d45110462e6139"],["/blog-tech/tags/WiFi/index.html","a9b28be990db1f38e2b52e58fee133a5"],["/blog-tech/tags/WiFi探針/index.html","9af117a3d70427dede414d1b483bbcf3"],["/blog-tech/tags/XMLHttpRequest/index.html","62dcd463326b189020f11823ef8ad029"],["/blog-tech/tags/apply/index.html","512fe464c26b7a280f0f13ceb506fd02"],["/blog-tech/tags/bind/index.html","a8110bee0049d63cb961fea92ae4c126"],["/blog-tech/tags/call/index.html","089da76966c39a715d6f257fb81a636f"],["/blog-tech/tags/const/index.html","aff83311fa714c01b91ece747a7d8b20"],["/blog-tech/tags/export/index.html","d39f5d62a17879bb927cc1a511c8906f"],["/blog-tech/tags/exports/index.html","d4d34c8935a6d150a8a2b0da02d70a1a"],["/blog-tech/tags/import/index.html","16b803ba14bdfdc1a7be127d80259e49"],["/blog-tech/tags/index.html","3ab2e4a8b2bcfabb1e1d4f003b09e7cb"],["/blog-tech/tags/jQuery/index.html","1ff608c2fb5cf1365c30c9705d6e622f"],["/blog-tech/tags/let/index.html","4ab9c68f330ba7c47450ea9a238051b2"],["/blog-tech/tags/npm/index.html","a95d96f4869f3399ff92348baae3c030"],["/blog-tech/tags/packeage-json/index.html","0e438d613610349616d17f03e6df37e7"],["/blog-tech/tags/require/index.html","e0331af3e06ea7cdccb37b6ebe9e2c04"],["/blog-tech/tags/runtime/index.html","5af8e7804b6f2f0aeecd0dc2f0ac7464"],["/blog-tech/tags/seaJS/index.html","992185df76c6ec576ab0adb9ed5137f5"],["/blog-tech/tags/this/index.html","196ab133052a887aaf52c29e7b315ca4"],["/blog-tech/tags/tsc/index.html","9450d06c9657a358c902784671548cc6"],["/blog-tech/tags/tsconfig-json/index.html","3bbaad02e948cdab2b493e78c6e32e37"],["/blog-tech/tags/var/index.html","c597e54c6d350fddd655545339b0c5b2"],["/blog-tech/tags/中頻/index.html","d2d5ed94b09e4d6d661d62ce375244d2"],["/blog-tech/tags/交流電/index.html","98b6845f47d541ea4c18c5b3a7056368"],["/blog-tech/tags/人流監控/index.html","2e1693eb9a4be2a8a8ae3bc3cb95c4de"],["/blog-tech/tags/人類/index.html","4753e60fd43d686b19f4a778ea94dfd2"],["/blog-tech/tags/介質/index.html","80c547a93ba765317f634f7a393611f0"],["/blog-tech/tags/傳輸層/index.html","bc621b2b68b0e505f4b41d51b93fa363"],["/blog-tech/tags/光纖/index.html","871f84449fc591ee69863298c563889c"],["/blog-tech/tags/全雙工/index.html","ab2bd0c5bfd75f2a95143de84e5b7891"],["/blog-tech/tags/前端歷史/index.html","32b1077b1f2494bab9395695e0bc8918"],["/blog-tech/tags/半雙工/index.html","3486393699f335cd1c52b9a2d87c9e42"],["/blog-tech/tags/協定/index.html","f3bb5520785629712e15e93c88ac1506"],["/blog-tech/tags/厄斯特/index.html","bbc4421a16fd30b1f5a68c0bc94f914b"],["/blog-tech/tags/可見光/index.html","42fa32d8e73994d81d923a0fddcaf66d"],["/blog-tech/tags/同步/index.html","2be2a2a726b636c1a3614da1024a2991"],["/blog-tech/tags/同軸電纜/index.html","10364cb79eafcfbd55bc49163bb942ed"],["/blog-tech/tags/單元測試/index.html","919d10b24dd30d331fa7ac97357e0f4c"],["/blog-tech/tags/單工/index.html","623ddd0a6a4bfb4d5ed53257fa5c1258"],["/blog-tech/tags/嚴格模式/index.html","4f8fd62e5f1871f1d80761ba05a56c18"],["/blog-tech/tags/國際電信聯盟/index.html","6216f79f310b388b5475c315cf56e324"],["/blog-tech/tags/基頻/index.html","404fc9ad96c1d3a32a1026c54a3c00f7"],["/blog-tech/tags/多工/index.html","8b58c6343811e5c06155cf5c55d15b88"],["/blog-tech/tags/大腦/index.html","22b8097adef5062093829f8363c3af8a"],["/blog-tech/tags/定位輔助/index.html","3b1bbe5006004b0572e6b7c145aa7441"],["/blog-tech/tags/實體層/index.html","ee195f1a1d6d240bd0a36efc6bd3b3dc"],["/blog-tech/tags/封包交換/index.html","e806d050e7780888e112cdce67329e7b"],["/blog-tech/tags/射頻/index.html","5c1c3f46c3b926d63aa0a4b62ba4dc57"],["/blog-tech/tags/尼安德特人/index.html","a67c8356f8a2fd6aab1cf41d048df615"],["/blog-tech/tags/差動式曼徹斯特編碼/index.html","3c5c6155f79d48ab12307bb5f24b98fd"],["/blog-tech/tags/差動式零補差編碼/index.html","6f9ca1d92449914c706ed9d4ce385c16"],["/blog-tech/tags/廣告投射/index.html","0bbda6c3de623e84d431880ff6e59724"],["/blog-tech/tags/弱型別/index.html","cc1700aa4e67b050550f5c812071eefa"],["/blog-tech/tags/強型別/index.html","8680d9dcef936f02ca6b07c52546e986"],["/blog-tech/tags/應用層/index.html","e166b36b0c9fb7c74acd60fd0603f858"],["/blog-tech/tags/抽象檔案-d-ts/index.html","d54967675665e20dc5a7d48b43f48442"],["/blog-tech/tags/數位/index.html","0fd2965252b3f059e8c8e04ae74d427e"],["/blog-tech/tags/時間/index.html","019edeb9689f8327425ec49572f405b5"],["/blog-tech/tags/智人/index.html","b16646cc429742ebbcdf53e6fdb4a3b7"],["/blog-tech/tags/曼徹斯特編碼/index.html","a1f6c89e378fedc79f1ffa742701bce4"],["/blog-tech/tags/會議層/index.html","e8dc08fb7ca0a707ceaaef4bfde88bb4"],["/blog-tech/tags/有線通訊/index.html","c825c112e819fed7e3dfa53e9b7e473e"],["/blog-tech/tags/汙染變數/index.html","40bcb45181430bf462dbd74d8ebd24f3"],["/blog-tech/tags/法拉第/index.html","6d9c32656c0f441bf87130bfd9a33bac"],["/blog-tech/tags/瀏覽器/index.html","4ce82dcddaf60bd7c3316f1686efb33b"],["/blog-tech/tags/無線通訊/index.html","4ac1740c750fe0b80b5bcc28c2458ba9"],["/blog-tech/tags/特斯拉/index.html","3c9d965c3eeda44685b9c138aa677376"],["/blog-tech/tags/異步/index.html","cfd4dd865c494b62546ab9c5dd22f172"],["/blog-tech/tags/磁場/index.html","6d084b4bc5c2abeabdbe857520e8e051"],["/blog-tech/tags/第一次瀏覽器大戰/index.html","ddaa911888f777ccafe1f11b085fba24"],["/blog-tech/tags/第六代WiFi/index.html","2adc34157bcbbc41d124c04d61039037"],["/blog-tech/tags/網路層/index.html","9ed5467dc56fed1437046227e04b4b99"],["/blog-tech/tags/線路交換/index.html","f178402f7030a17c51ea4b9e62e91c24"],["/blog-tech/tags/緩存/index.html","d89d13ec720410441977ed319ee86fca"],["/blog-tech/tags/聲波/index.html","7b212cbec252eaf44cbba5da6b4c3d2d"],["/blog-tech/tags/能階/index.html","4bd5add0dde24e83d9181a31ea3ed701"],["/blog-tech/tags/腳本語言/index.html","7cc42ad3945c3a63a739ea549d91f00d"],["/blog-tech/tags/行為監控/index.html","1a7378d7f71be4c876018f539908b947"],["/blog-tech/tags/表現層/index.html","0d0e720ea8e7cc18e0a63e6c6f3fd3b5"],["/blog-tech/tags/解釋型/index.html","83e94a1571880a872bb64f56fa692e0c"],["/blog-tech/tags/詐騙資料/index.html","aa60b753ab88027514e1d587fc9d6b17"],["/blog-tech/tags/調變/index.html","0f06ff7351b2379237e713d958abed2d"],["/blog-tech/tags/資安保護/index.html","d604e7a33fd3b09883c63556ab919d02"],["/blog-tech/tags/資料鏈結層/index.html","a2c685b9a833715723569e392eb46e37"],["/blog-tech/tags/跨域/index.html","4265ad61a0a2ccaee6b8c807cab6a43c"],["/blog-tech/tags/身分證/index.html","883853ae18b44750af8fa1ef675cbd21"],["/blog-tech/tags/通道訪問控制/index.html","05511a03438e6fccf280d6c307c91e9d"],["/blog-tech/tags/銫原子/index.html","49755d02e32b00079628623180908b63"],["/blog-tech/tags/閉包/index.html","fc772c22f05a3d360f36a387ddd15491"],["/blog-tech/tags/雙工/index.html","b706cbcf868ef1262276f41e522f8a36"],["/blog-tech/tags/雙絞銅線/index.html","020331ab13eb041ccdbad0a90a4641e3"],["/blog-tech/tags/雜訊/index.html","16c1109178b8f9f5a98635db6e386155"],["/blog-tech/tags/電場/index.html","6e99c339f8fb539209f09d3113104265"],["/blog-tech/tags/電磁波/index.html","fe9ad5294bd85de0187164a4eb464be0"],["/blog-tech/tags/電視/index.html","d71e07eaad8f7141e9bdb5829aa69719"],["/blog-tech/tags/靜態優化/index.html","a97d540bcb228b3e0d6e03ec3eaf2520"],["/blog-tech/tags/頻譜/index.html","24c48b06ec5d63385995814c7cd2134f"],["/blog-tech/tags/類比/index.html","aa553d4645a19fb61c9b24f8e3a26541"],["/blog-tech/tags/馬克士威/index.html","5f29d1235f1d71afed86e19ba8650c16"]];
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







