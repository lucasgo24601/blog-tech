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

var precacheConfig = [["/blog-tech2020/02/14/部落格介紹/index.html","468ac5c40ee3a966fc3e1a56f88e74e3"],["/blog-tech2022/06/02/前端P.01 - 網頁三兄弟/index.html","5261de763dab72bd92dcb7230ba83dc6"],["/blog-tech2022/06/02/前端P.02 - ECMA組織/index.html","df03d420874e2d0041a8982e408698c4"],["/blog-tech2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","6b275005e56f57c6f759081dce1b51ba"],["/blog-tech2022/06/02/前端P.04 - JIT & V8/index.html","e8c675d9f918e305ef015610bb36ca20"],["/blog-tech2022/06/02/前端P.05 - TypeScript/index.html","da6e1ee4d25fec868ec516313d59df83"],["/blog-tech2022/06/02/前端P.06 - WebAssembly/index.html","c1a9e9dc7b999a08f4ebbf72ebf8391c"],["/blog-tech2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","f20a9d024917be6bb4ff90ac44b7cb93"],["/blog-tech2022/06/02/前端P.08 - AJAX & 跨域/index.html","532b4ef10f700ebc140284312fe72138"],["/blog-tech2022/06/02/前端P.09 - 同步和異步/index.html","62cec0139346e4e9431aac561ce63621"],["/blog-tech2022/06/02/前端P.10 - Scope/index.html","e63da83c7fa8ca6d698a55abd927d6f7"],["/blog-tech2022/06/02/前端P.11 - 模組/index.html","2c4adfb9fb69ad03f1e50d916cb6a596"],["/blog-tech2022/06/02/前端P.12 - NodeJS/index.html","12bacc9d170389ec47489285cda8db23"],["/blog-tech2022/06/02/前端P.13 - WebPack/index.html","9913576d4741c2de465959c5ad87933d"],["/blog-tech2022/06/02/前端P.14 - 單元測試Mocha/index.html","c2e79c3112d9a85b83c4d6aa81fad16f"],["/blog-tech2022/06/02/讀書P.01 - 人類簡史/index.html","019c2efa22a520b5f70f8f198d185638"],["/blog-tech2022/06/02/通訊P.01 - 協定/index.html","9df561f2983d49f72511dcf37036e650"],["/blog-tech2022/06/02/通訊P.02 - OSI七層模型/index.html","3e1e8d61d074f586ca6f782ca6a5cb8d"],["/blog-tech2022/06/02/通訊P.03 - 實體層、介質/index.html","9b013c70c2772253d789edfba770e017"],["/blog-tech2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","34e0a09e163e1477c052b88a29d1a0d6"],["/blog-tech2022/06/02/通訊P.05 - 資料鏈結層/index.html","91b51f176b704caf262345ba84a6fdf2"],["/blog-techabout/index.html","5d264285ea5e59efdcb38032d00398e1"],["/blog-techarchives/2020/02/index.html","e999b075dbc4aa0ee3f2406c4f421b85"],["/blog-techarchives/2020/index.html","a18986cb12f2841d994b5fc025a436cb"],["/blog-techarchives/2022/06/index.html","5d7f27476c9325e5aed91745eb13fb7f"],["/blog-techarchives/2022/06/page/2/index.html","775999741a040cc99852dbb8a8ad3e0c"],["/blog-techarchives/2022/index.html","9819a543ae257ecb352f74b902b8617d"],["/blog-techarchives/2022/page/2/index.html","0e76ef77328c8fa94202f3be1492d9d1"],["/blog-techarchives/index.html","082142af8b21bb111c9215001316db6f"],["/blog-techarchives/page/2/index.html","bd61b786757d309902a8e046f33439ab"],["/blog-techarchives/page/3/index.html","03db29d353dee66b77169d44e4f04f77"],["/blog-techcategories/index.html","681325490bc8a5e25605b09c1929fed5"],["/blog-techcategories/前端系列/index.html","38271dae7b1a415a25695cf29073ef22"],["/blog-techcategories/前端系列/page/2/index.html","eb660c085c57f0674b9d6295bfb9c603"],["/blog-techcategories/基本文件/index.html","b96b66b2c5bcffdbefaa7ae05bc672e7"],["/blog-techcategories/讀書心得系列/index.html","2a95890354ea58186ebf190f266d8333"],["/blog-techcategories/通訊協定系列/index.html","2e20bfdcca85d829d0b12605f93212f0"],["/blog-techcss/index.css","d596cc019db5ad77d44e30d4134e0a21"],["/blog-techcss/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["/blog-techcss/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/blog-techcss/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog-techimg/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog-techimg/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog-techimg/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["/blog-techimg/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog-techimg/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["/blog-techimg/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog-techimg/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog-techimg/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog-techimg/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog-techimg/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["/blog-techimg/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["/blog-techimg/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["/blog-techimg/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["/blog-techimg/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["/blog-techimg/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["/blog-techimg/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["/blog-techimg/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["/blog-techindex.html","16bbf4d54af461804837f2857486c910"],["/blog-techjs/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["/blog-techjs/main.js","36ac5c5196d2a4ac259c49270207bf68"],["/blog-techjs/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["/blog-techjs/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog-techjs/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["/blog-techpage/2/index.html","87e11b30b64115d8acdb0f2597d2029e"],["/blog-techpage/3/index.html","86caf6f20c420b7099bb3d99252d5149"],["/blog-techtags/16PSK/index.html","02783d4397b594e0a002c282916e7416"],["/blog-techtags/1G/index.html","a7cb91b78c1cb0d60edc93462d3e4c37"],["/blog-techtags/2-4G/index.html","8e23e924090d7a5a316d12b236dc159c"],["/blog-techtags/2G/index.html","fbd835e23eb46b92269f2a099bc23715"],["/blog-techtags/3G/index.html","7831cf78e1e3e3252462afd21e051b91"],["/blog-techtags/4G/index.html","4a599239729585dc2649a10388b0d427"],["/blog-techtags/5G/index.html","8195fb5083ef8e0aae5b8830c937758c"],["/blog-techtags/AJAX/index.html","941f2a7953e966a7db28478a3190fb6f"],["/blog-techtags/AM/index.html","715c694f868ff9aff2bee66be27effa7"],["/blog-techtags/AMD/index.html","f2e2cd0cbda203f64bf2564a96e3590c"],["/blog-techtags/ARP/index.html","b342d3904488a36720a980540df8322d"],["/blog-techtags/ARPA/index.html","753345c2203309b081db36137573d8dc"],["/blog-techtags/ARP攻擊/index.html","d6a96dcf903b86f7b3c8737848d273fc"],["/blog-techtags/ARP緩存表/index.html","f6ff2444a2f38a2a3f62d0cd23714d02"],["/blog-techtags/ASK/index.html","4a724af86a6ef0df1345631f9590040f"],["/blog-techtags/Async/index.html","fb875eed1d6704f50a2040caae0d53eb"],["/blog-techtags/Await/index.html","9de5362477549632545b2ad7a5be350e"],["/blog-techtags/BPSK/index.html","55b17b6a1c600043b5e85d2118656785"],["/blog-techtags/Bable/index.html","1d8c6d2e13848f301fd1e9e3656c20c1"],["/blog-techtags/C/index.html","f35fc318c7a49efeee4073c9b6cbc9fa"],["/blog-techtags/CCITT/index.html","ebccc082cf43e33a79fef8946ae246c1"],["/blog-techtags/CDMA/index.html","c5f6446b84bc5346a827f06affbcfe9b"],["/blog-techtags/CI-CD/index.html","cb310ee291d3b892ab203090ef3b7066"],["/blog-techtags/CI/index.html","387e870d88488a0258d58697ffad7618"],["/blog-techtags/CMD/index.html","2895cee3ca2e9a16a1a2c6b0c4f46b8b"],["/blog-techtags/CORS/index.html","97949f91cd8c2469edb11ec860c5cc2b"],["/blog-techtags/CRC/index.html","09387fb4f55dea00d3994c1cc625de9b"],["/blog-techtags/CSMA-CD/index.html","950d3c5695a385a897f9e86e84ce0cce"],["/blog-techtags/CSMA-CS/index.html","85eb4795a8bd14b856481a186c6e5201"],["/blog-techtags/CSS/index.html","4ab833dd24fd133b1d5591a88df2fcbc"],["/blog-techtags/CallBack/index.html","d550860f98940ff56ba5871e6a32356b"],["/blog-techtags/CodeStyle/index.html","020e58bd67cb9281ed2fa5d42434d851"],["/blog-techtags/CommonJS/index.html","fc0acebb648c31e12237d2699664154a"],["/blog-techtags/DSAP/index.html","24d235a29d38991a1bf880c8adfdaf48"],["/blog-techtags/ECMA/index.html","5a5c73d58b3525697edcbf4bf324f6af"],["/blog-techtags/ECMAScript/index.html","bac9cf36c8971564e9e4abe608109942"],["/blog-techtags/ES5/index.html","5cff8e9b7cef1443e21c60931decfff5"],["/blog-techtags/ES6/index.html","eb0d67ab48974448c5d83d64656de658"],["/blog-techtags/FDMA/index.html","8ad34a181d94ca7cf713b7abd504979a"],["/blog-techtags/FM/index.html","7964b3089714a13fc3119b9a01870d6f"],["/blog-techtags/FSK/index.html","bfb8de67e0fbb86fd51988b1c5277c48"],["/blog-techtags/GC/index.html","d15261f103ebc2ae7e23470b1032f0a9"],["/blog-techtags/Google/index.html","bb9a2c7bc9764915976ab1383d630a99"],["/blog-techtags/Hoisting/index.html","74417e2b984797a6c6441ffa932064c7"],["/blog-techtags/Html/index.html","c2d53e79c5f4908400419c9afc27ec1b"],["/blog-techtags/IE/index.html","c66881325945d7ecda690ceadc32998c"],["/blog-techtags/IEEE/index.html","7722af71c806263f0536cb3b7e800e63"],["/blog-techtags/IEEE802-11/index.html","3ef67ff282e5626dd5cbc058a1848dbd"],["/blog-techtags/IEEE802/index.html","4d0f1386d2470fba48d4bbbce681dc72"],["/blog-techtags/ISM/index.html","1d9ea60f744dafc0374fa88153fd6e63"],["/blog-techtags/ISO-31-1/index.html","d7fc21f7857b431fb77b829efe17128c"],["/blog-techtags/ISO/index.html","5f9da229423332e796c32927f75a4509"],["/blog-techtags/ITU/index.html","185d5badc12d3953edacb7cd42bf506a"],["/blog-techtags/JIT/index.html","5b21b9bfd576814a0fbdbca320b6ce16"],["/blog-techtags/JSONP/index.html","844a924c2fb4594bcbc9108c2ac94b06"],["/blog-techtags/JavaScript/index.html","751108044e6b5ee548bca8c32dd456d8"],["/blog-techtags/LLC/index.html","eb7ca1dd71166e5eba15c3188f8777e9"],["/blog-techtags/MAC/index.html","621ba9f36a25d9fdae16bad8e25c6572"],["/blog-techtags/MACAddress/index.html","ee9c0c35563029b2f887429ac8823346"],["/blog-techtags/Mocha/index.html","aca0a555ca8560509937f61cd1888ccc"],["/blog-techtags/NVM/index.html","4d87f775205ee6e12d65c1908a0c36e3"],["/blog-techtags/Netscape/index.html","db9e9da29224b3e31b67f3fd9a595861"],["/blog-techtags/NodeJS/index.html","1e281bfa54a1a8df5cef98b2adb1ec8a"],["/blog-techtags/OFDM/index.html","ff520cda1cb728515f2bba8d4f325f38"],["/blog-techtags/OSI/index.html","de0989dad41f2cb62e5bb0ca9e7aa7e8"],["/blog-techtags/PM/index.html","c4b1031c113798fe09ac6192e8dbfee4"],["/blog-techtags/PSK/index.html","6b63e8b8df02a93fe8e46a3495e38386"],["/blog-techtags/Promise/index.html","ab0dc7e844aa8ced09109b78f98e87c6"],["/blog-techtags/Proxy/index.html","1e6aae95e1bac888cdf4979c7ba0119c"],["/blog-techtags/QAM/index.html","35009e4a79f2ad1b2043e69a2333a228"],["/blog-techtags/QPSK/index.html","96506da3e6049c802cd5858a7cdfdfb7"],["/blog-techtags/RJ45/index.html","91a69af1eb9353f6d55061ef6fcf5b8b"],["/blog-techtags/RS-232C編碼/index.html","ebe389e4895db964eb4137b9e69664d4"],["/blog-techtags/RequireJS/index.html","df6e3169881c3e926f30f83ebc541495"],["/blog-techtags/SSAP/index.html","ac2263c5a4a107e250e1cd73585d31fd"],["/blog-techtags/STP/index.html","f6f2c971e39e9d1427346baaed487c97"],["/blog-techtags/Scope/index.html","0addb005529b0df66b55bd06049f93cc"],["/blog-techtags/ServerJS/index.html","acaabcf1275ce63ab3c61502180aab94"],["/blog-techtags/TCP-IP協定/index.html","ea23c406b297759be3b94a7a90bf947e"],["/blog-techtags/TDMA/index.html","0c9293b9f50bf8154dc25ab500563ca8"],["/blog-techtags/TypeScript/index.html","1529172b242927683a051e3f4e758122"],["/blog-techtags/UTP/index.html","81d2ef63a83a69f3008c3be4f14b4ec1"],["/blog-techtags/Uglify/index.html","b12b0563e3b4fcf96d3815e384cb9688"],["/blog-techtags/V8/index.html","8f473611f72a29f6ea22b42036c29959"],["/blog-techtags/VSCode/index.html","802ea93ba943d5add47a0613ff95cf65"],["/blog-techtags/W3C/index.html","5f690d1fd1275252d2d2d064332963db"],["/blog-techtags/WebAssembly/index.html","dc505638ed776df71f7ddceafb0a1890"],["/blog-techtags/WebPack/index.html","008455bf7ff3f5c9c282cae066dfca4e"],["/blog-techtags/WebSocket/index.html","d6ed105250e07c1c44ec6114185162b9"],["/blog-techtags/WiFi/index.html","2e58aef71bad921bfef9de7da09e0c2b"],["/blog-techtags/WiFi探針/index.html","9032018afd105aa0fc057f68ac296438"],["/blog-techtags/XMLHttpRequest/index.html","cac78b3238cced24f5249a4023febc1a"],["/blog-techtags/apply/index.html","0bcdafe3e0b1d3ee532a7d608971f802"],["/blog-techtags/bind/index.html","238e03efe2e4694f8072c2fde4ad1b8b"],["/blog-techtags/call/index.html","5c3e0ded2eee888f53473f5e4d8da7f1"],["/blog-techtags/const/index.html","93c895cdb5df663df05c042ce67b5833"],["/blog-techtags/export/index.html","6ff21e6abbc5b65293cb77efde0c0508"],["/blog-techtags/exports/index.html","21b1129afe3fde5fda3a460fc4e21280"],["/blog-techtags/import/index.html","b7ad88cf77072d78b0768b38dd994bad"],["/blog-techtags/index.html","e3c497444cf3d48cbd1a91d920809b67"],["/blog-techtags/jQuery/index.html","0be7c84ce835f5e7a32069b650bfbd6f"],["/blog-techtags/let/index.html","55a0433551f5557a0e3c9e6c67c0b790"],["/blog-techtags/npm/index.html","ce4e509c7064ec13bf499edabd6296b6"],["/blog-techtags/packeage-json/index.html","348e2ee0c730d1810c88f8eb8b7ec932"],["/blog-techtags/require/index.html","b77b1a18e2ba764a54b9afb6328739be"],["/blog-techtags/runtime/index.html","10c0a69741d1d5a2c4fc837c431ede6e"],["/blog-techtags/seaJS/index.html","7159f0ad1b45151d6d925027352dfd8d"],["/blog-techtags/this/index.html","4e6f220546aa4dba403018403c669df2"],["/blog-techtags/tsc/index.html","32472583da1edf874b2f0c90bd8d9485"],["/blog-techtags/tsconfig-json/index.html","b4d7506f16631232517f5e543c1fa8b4"],["/blog-techtags/var/index.html","3dba1b001ca91b9341799b02b03a8f05"],["/blog-techtags/中頻/index.html","c905a914b010b5bb86671bbf376daced"],["/blog-techtags/交流電/index.html","a0db6b0a405504791d9d4834ecd53eec"],["/blog-techtags/人流監控/index.html","35aae23acf6a2ef542de52f3a51cf8b7"],["/blog-techtags/人類/index.html","6eddf32cad1a34a3a9af30b9e484f02a"],["/blog-techtags/介質/index.html","a44422009ac726a75c63727a6f8c9509"],["/blog-techtags/傳輸層/index.html","b3495ad67c0f13f94ab2ab4a15868fb2"],["/blog-techtags/光纖/index.html","f745df25eda4fe5cd20c78437647295c"],["/blog-techtags/全雙工/index.html","35fbd0e6eca9c206630eb1ac88298e34"],["/blog-techtags/前端歷史/index.html","3e9fc320e2c260892ad10f708cebd239"],["/blog-techtags/半雙工/index.html","a71f2d40761720ad24076400c98e1b4e"],["/blog-techtags/協定/index.html","5354e74c2d64bcc66450611d043b8ac1"],["/blog-techtags/厄斯特/index.html","ec11f72dc6088091ebdb1c92ad92fa0b"],["/blog-techtags/可見光/index.html","485937707ef25781352629544fad4e49"],["/blog-techtags/同步/index.html","16a8501d28a6b1a76aac4c3aa1619075"],["/blog-techtags/同軸電纜/index.html","7a3595da7e826c6b6bb2d4a507faf76d"],["/blog-techtags/單元測試/index.html","d84c47a023a43a9e57b53329797060ae"],["/blog-techtags/單工/index.html","537f5a6e68e5ab7cd6a455d158e89d51"],["/blog-techtags/嚴格模式/index.html","9a0ad71b42d61990c3a00aa6eeedca2f"],["/blog-techtags/國際電信聯盟/index.html","1cba889e8c514c8139e816c69c91ae0a"],["/blog-techtags/基頻/index.html","9b9ffff507eb6bd70df083e16d7e95dc"],["/blog-techtags/多工/index.html","606e69305e4acf78ac554e1ef98c765e"],["/blog-techtags/大腦/index.html","73c6ab364fb4d075ec3af88fccc97893"],["/blog-techtags/定位輔助/index.html","080bf70c58ddb7ce8b5b36a70b0e604d"],["/blog-techtags/實體層/index.html","0af1d9fa6be845cd1fa667ff0a6fb911"],["/blog-techtags/封包交換/index.html","c3547fac6d1f4b7b02e1b63e0b06f3c5"],["/blog-techtags/射頻/index.html","1409b952cc0eb142e4580ddd724fc794"],["/blog-techtags/尼安德特人/index.html","8cf951af97b21ade7906224279e7d494"],["/blog-techtags/差動式曼徹斯特編碼/index.html","79ddb650126442d25ef4d5bc0776af23"],["/blog-techtags/差動式零補差編碼/index.html","1e28361d6db35dfa2d5a71d2b9a1cd5d"],["/blog-techtags/廣告投射/index.html","0c8b16640d84a728ba008b975a269805"],["/blog-techtags/弱型別/index.html","2049be13bb4cfcf2129b6f8e6e9e44df"],["/blog-techtags/強型別/index.html","ac05d5b417eb9058d91e2a65ef137886"],["/blog-techtags/應用層/index.html","cfd112e539589626345dd558184f5bf2"],["/blog-techtags/抽象檔案-d-ts/index.html","bc29a1467c76da2df0f6b81019320e9d"],["/blog-techtags/數位/index.html","bc9d77ef42200ef8e7a39aa82a875612"],["/blog-techtags/時間/index.html","3c112ec0be74530147cf815b7065a6c8"],["/blog-techtags/智人/index.html","443342b512f9bde2098ccb2ba675167b"],["/blog-techtags/曼徹斯特編碼/index.html","62b561df67c239eb1011bdd8c08fa831"],["/blog-techtags/會議層/index.html","662b1c6b70ad43fd701d017c9a3e51d2"],["/blog-techtags/有線通訊/index.html","b6770dbf51a70e5f547ff58a93507618"],["/blog-techtags/汙染變數/index.html","153b7cb87f4c1b966f9fd06bcfb0de47"],["/blog-techtags/法拉第/index.html","3b8eb0206f943f627047378702565023"],["/blog-techtags/瀏覽器/index.html","9e56998fe8eeee838551adf1e977d131"],["/blog-techtags/無線通訊/index.html","05633730240c5485ff711707039b9488"],["/blog-techtags/特斯拉/index.html","9a33ae9ab2962553f1c00525743b7929"],["/blog-techtags/異步/index.html","47349b2471a2d40af86a73eb3cb250d2"],["/blog-techtags/磁場/index.html","bee87c49d0b8f8e5f560734f0e0dce7b"],["/blog-techtags/第一次瀏覽器大戰/index.html","72dd17d137797ec90f98806875c98915"],["/blog-techtags/第六代WiFi/index.html","0f46b85f5fde3a751b90bdea5c60b46f"],["/blog-techtags/網路層/index.html","9da869d4176ba0174fe2c1286e786aa3"],["/blog-techtags/線路交換/index.html","6165797dfdb70796ef9238944b6b7e84"],["/blog-techtags/緩存/index.html","6a2a6e99c3cf988bf14329db715d6019"],["/blog-techtags/聲波/index.html","1049a83f2f95dc35a790cf751ff3e758"],["/blog-techtags/能階/index.html","e012c29581c174fe17964a67c8bf8730"],["/blog-techtags/腳本語言/index.html","ca561cc74cf2c27123673fed8778a597"],["/blog-techtags/行為監控/index.html","abe8c998ae3d8df35af3d28aa720fc54"],["/blog-techtags/表現層/index.html","37e67cc0233cb24fcbca17a3f55fde5d"],["/blog-techtags/解釋型/index.html","7d9697b3872a1e5ff217601651c71d11"],["/blog-techtags/詐騙資料/index.html","f21c10a8587e2ff1dd08e3a7787684d5"],["/blog-techtags/調變/index.html","636f18f08f52aab51d7e46a2ac3e3126"],["/blog-techtags/資安保護/index.html","a73f361fd100852b9a07b4597b38d92b"],["/blog-techtags/資料鏈結層/index.html","8731c67c1d04c71ffaf7106dbcfbde27"],["/blog-techtags/跨域/index.html","8682cc56e8c9ab711c407c833f39434b"],["/blog-techtags/身分證/index.html","f3ba6c6891660359b9f68770e720feb0"],["/blog-techtags/通道訪問控制/index.html","223349a24cab674ac69a1b41744939bf"],["/blog-techtags/銫原子/index.html","bf8d78b8bbe82b020284a7ba71fbea63"],["/blog-techtags/閉包/index.html","1428fbc775ef2bfebe4d3e1129d9ca6b"],["/blog-techtags/雙工/index.html","e0fcaeb0cd7e0c077b9d916de741f0d3"],["/blog-techtags/雙絞銅線/index.html","d318690f0b5e81fc70fc7693126e61e6"],["/blog-techtags/雜訊/index.html","92bbc61f3e1e2d0fc19a81d3b6cc61e8"],["/blog-techtags/電場/index.html","8124a4d937ca27d4b039e1f28a4c3ef0"],["/blog-techtags/電磁波/index.html","952f1a1944c438376843aae41ca0fafc"],["/blog-techtags/電視/index.html","43892f231f7778758bd033feee7342c9"],["/blog-techtags/靜態優化/index.html","36ac625cc70a6dd16e60836ceb8d805d"],["/blog-techtags/頻譜/index.html","07d3b779de6b5268e87c29811efd517b"],["/blog-techtags/類比/index.html","7e8d98dd8f18d9dd7277a8f31bcb9508"],["/blog-techtags/馬克士威/index.html","1e09e1011f304b1b54abb05debfce080"]];
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







