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

var precacheConfig = [["/blog-tech2020/02/14/部落格介紹/index.html","30972d74e7a4d5f64659602a7f0ef1c7"],["/blog-tech2022/06/02/前端P.01 - 網頁三兄弟/index.html","7b38a9dad3e7f540f209f9c8c17b924f"],["/blog-tech2022/06/02/前端P.02 - ECMA組織/index.html","7acfab0f12758ef2918de7ab650d3420"],["/blog-tech2022/06/02/前端P.03 - 分析解釋型、弱型別/index.html","640799824064e9e8d9ba98152c31eb07"],["/blog-tech2022/06/02/前端P.04 - JIT & V8/index.html","06554ee7b8aa1fb192a59899efd44c3a"],["/blog-tech2022/06/02/前端P.05 - TypeScript/index.html","106d983991d23ede2071d0bbae764cf8"],["/blog-tech2022/06/02/前端P.06 - WebAssembly/index.html","1b2afd90258234515bd43e25dec384d5"],["/blog-tech2022/06/02/前端P.07 - jQuery & AJAX歷史/index.html","c62bb7076b0b92dd0dd1595a79d645c3"],["/blog-tech2022/06/02/前端P.08 - AJAX & 跨域/index.html","9ec7287e1229e42e1dde4f484ec8d455"],["/blog-tech2022/06/02/前端P.09 - 同步和異步/index.html","9d293836cec1d64abff98d4413228d86"],["/blog-tech2022/06/02/前端P.10 - Scope/index.html","6c772121467c3ab9daaa990e642dce56"],["/blog-tech2022/06/02/前端P.11 - 模組/index.html","ee05e03ae38a2268c02ffd784b403ec6"],["/blog-tech2022/06/02/前端P.12 - NodeJS/index.html","b53ddf4742d67e886331f0740cc65231"],["/blog-tech2022/06/02/前端P.13 - WebPack/index.html","f3e841bc5353a41e2e74794ea273b961"],["/blog-tech2022/06/02/前端P.14 - 單元測試Mocha/index.html","2e4ac8258d3cc97976f715bea109736a"],["/blog-tech2022/06/02/讀書P.01 - 人類簡史/index.html","c504baa8ff0f759e77650b0c40fff32d"],["/blog-tech2022/06/02/通訊P.01 - 協定/index.html","b84bb013717f4c93c60328b596c0c031"],["/blog-tech2022/06/02/通訊P.02 - OSI七層模型/index.html","d4a396c639a438b24f5a6cd25fd4c543"],["/blog-tech2022/06/02/通訊P.03 - 實體層、介質/index.html","72cf85a341e452db3b14cd42881c3f93"],["/blog-tech2022/06/02/通訊P.04 - 實體層、傳輸技術/index.html","58b676b3d9e634c785f840e0f92abb0b"],["/blog-tech2022/06/02/通訊P.05 - 資料鏈結層/index.html","47fbc308e11bec87e6b5838516166270"],["/blog-techabout/index.html","a8563b466b46d552f445920ccbdba36b"],["/blog-techarchives/2020/02/index.html","1212314334090f8ae0501dc382e8ce71"],["/blog-techarchives/2020/index.html","ef8673b70216b25c543a7eedcd83a699"],["/blog-techarchives/2022/06/index.html","fff59bc2d874af15f2128351392fa73e"],["/blog-techarchives/2022/06/page/2/index.html","0addb3caa7fb3d8de06729c344f48a52"],["/blog-techarchives/2022/index.html","01d7892cf242183a571186adc40b52bd"],["/blog-techarchives/2022/page/2/index.html","d217da470e72d9bcd0efef85de85afce"],["/blog-techarchives/index.html","f4f73a5da82ab56fafbf9aeb6b80a8f3"],["/blog-techarchives/page/2/index.html","c2950563ab69a970e5d6b1b30f5dcda8"],["/blog-techarchives/page/3/index.html","4ba0205240deb3729e9d765d0a87a4cb"],["/blog-techcategories/index.html","db5d0719ef9ac5b091bf7146ac55b343"],["/blog-techcategories/前端系列/index.html","ac53e67b447df2be19dd07e8752e1e38"],["/blog-techcategories/前端系列/page/2/index.html","3296967a01a41f39c61e607810d8adc7"],["/blog-techcategories/基本文件/index.html","c82997aa4530d46a6da2e4867bcedfc3"],["/blog-techcategories/讀書心得系列/index.html","963ef5ba4334d7a6ae04ca4ce23221fa"],["/blog-techcategories/通訊協定系列/index.html","c1d3734ab25c41569572e2f8cbd81258"],["/blog-techcss/index.css","d596cc019db5ad77d44e30d4134e0a21"],["/blog-techcss/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["/blog-techcss/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/blog-techcss/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog-techimg/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog-techimg/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog-techimg/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["/blog-techimg/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog-techimg/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["/blog-techimg/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog-techimg/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog-techimg/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog-techimg/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog-techimg/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["/blog-techimg/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["/blog-techimg/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["/blog-techimg/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["/blog-techimg/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["/blog-techimg/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["/blog-techimg/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["/blog-techimg/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["/blog-techindex.html","e570880b4194b1c7aadc9f231fae0647"],["/blog-techjs/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["/blog-techjs/main.js","36ac5c5196d2a4ac259c49270207bf68"],["/blog-techjs/self.js","5977db2e74f6ca0fb2dd04fa31418634"],["/blog-techjs/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog-techjs/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["/blog-techpage/2/index.html","986ac19e50171d1f492d1c9f3e996e82"],["/blog-techpage/3/index.html","79d62dac3f0ecba4d1d1f732a8197745"],["/blog-techtags/16PSK/index.html","08c01067907c9c03c6006dded85ab86c"],["/blog-techtags/1G/index.html","0024dde700fedf124f70489811b4a282"],["/blog-techtags/2-4G/index.html","74b10d3a15841406d4129ee887ff0202"],["/blog-techtags/2G/index.html","9348daa095d3300f71642547e81c72f8"],["/blog-techtags/3G/index.html","0955ed78b3f17af9ab60194a88e40190"],["/blog-techtags/4G/index.html","c5cb07b7224412db15ab7806743505e8"],["/blog-techtags/5G/index.html","7bb394a860d8856feeb45d259ca36583"],["/blog-techtags/AJAX/index.html","658b06611099192c0a417fea4cf75184"],["/blog-techtags/AM/index.html","630e08c0b8214734b0f4e1305d3df61b"],["/blog-techtags/AMD/index.html","c8d91351abfeac1ae5736d19ba8dc415"],["/blog-techtags/ARP/index.html","d2e16383b96b8dc870299176cc31c2a0"],["/blog-techtags/ARPA/index.html","ed9f547d1cdadfc97772cfb25060a2f2"],["/blog-techtags/ARP攻擊/index.html","d1411f3556ca349cf5e4423442d92a36"],["/blog-techtags/ARP緩存表/index.html","10329c72d796df005bcb4ca3b412fe3f"],["/blog-techtags/ASK/index.html","21dbd0dc53cf6251fbd9e18b49374702"],["/blog-techtags/Async/index.html","1361510c17d3134cbacf865dea23741b"],["/blog-techtags/Await/index.html","082c76b4e80da83f1cae9cefa260f837"],["/blog-techtags/BPSK/index.html","fcf88c5ce19fb84262a9b0bc5fb05c04"],["/blog-techtags/Bable/index.html","4d17167d9b3bc661cf7d608dc0267a8f"],["/blog-techtags/C/index.html","ab432b31fb6f8a4b3eb3a9bc873a7ad2"],["/blog-techtags/CCITT/index.html","cd42cef956bdbe01a66af30ee567a292"],["/blog-techtags/CDMA/index.html","5d73aea6eff4f5005780a37a03bdef01"],["/blog-techtags/CI-CD/index.html","a3879d1d43a54610b29cc1b1870a6a32"],["/blog-techtags/CI/index.html","bde0d1fab1c13f19b0c02a849ed4c9a0"],["/blog-techtags/CMD/index.html","9e70df9ed74b75946788054e1b34ca4c"],["/blog-techtags/CORS/index.html","9000baaeb2b00267869c1a53ba22d0a0"],["/blog-techtags/CRC/index.html","6e1b3f68dc8bd43519c1cd65d7b97c53"],["/blog-techtags/CSMA-CD/index.html","e538f1962f8b91ae2e6d4df287864ebc"],["/blog-techtags/CSMA-CS/index.html","2d27172fd2fbe1a16166dc29bc9e46cc"],["/blog-techtags/CSS/index.html","e4406f8134190668928b00ed05a20305"],["/blog-techtags/CallBack/index.html","f12198db553c98a8d6c22f102836c2f0"],["/blog-techtags/CodeStyle/index.html","bc01405aaadf5cba62c9ae6099031068"],["/blog-techtags/CommonJS/index.html","5b758e73b0b632c43ba5aff8a206dc3a"],["/blog-techtags/DSAP/index.html","0647da807e5a8d516b76f38efede2710"],["/blog-techtags/ECMA/index.html","8ceef96b482bff1ecbde593b2c942335"],["/blog-techtags/ECMAScript/index.html","e9cc70deac46501add3dbec3509830f0"],["/blog-techtags/ES5/index.html","35d6d91388a46a597f7f22602107130b"],["/blog-techtags/ES6/index.html","bde32314753f4282a2aaa5e0bd83c955"],["/blog-techtags/FDMA/index.html","8a2f44debf2854b70c9ba3692ec4ff79"],["/blog-techtags/FM/index.html","758749522ba3a557dba78a5b75149b5f"],["/blog-techtags/FSK/index.html","2315e3de366bdaa105c191fa520e38ae"],["/blog-techtags/GC/index.html","6eb0e55bba456bcde41dd82c14ff8609"],["/blog-techtags/Google/index.html","67d73ed39d11bd5cda4b14fbe95cbd24"],["/blog-techtags/Hoisting/index.html","e582db5feebbcd9b19fa3094612e0b84"],["/blog-techtags/Html/index.html","a46d748e3341701a3979fa756ad42fe1"],["/blog-techtags/IE/index.html","1c2837ca6f64e21da9746ae357a9e861"],["/blog-techtags/IEEE/index.html","e1627ff688bff3e85f4009674db9b0e3"],["/blog-techtags/IEEE802-11/index.html","32b8077704ad56bdb6df4ff6299d1201"],["/blog-techtags/IEEE802/index.html","40ff16b70434744d9c4d7bdd3f950dac"],["/blog-techtags/ISM/index.html","3b87ca1ea79b9d6fdccf72d33191ae85"],["/blog-techtags/ISO-31-1/index.html","5e8529a0828cd1e1b801b167324a55bf"],["/blog-techtags/ISO/index.html","f4e54ca92ff7b81128dc80063d5c025f"],["/blog-techtags/ITU/index.html","2f66e08ba34241e98e0459496a9dd535"],["/blog-techtags/JIT/index.html","7e96473e26c2dcd9d49c5661877bf43d"],["/blog-techtags/JSONP/index.html","49d9343d1699f1f2fd1e166210125378"],["/blog-techtags/JavaScript/index.html","6348b21d612b00d4e0bee2a81fd3dd69"],["/blog-techtags/LLC/index.html","6f52ccfd7733f0317bfe79c439efad87"],["/blog-techtags/MAC/index.html","bbb4d3d0974d8feadbee041ebcf2d325"],["/blog-techtags/MACAddress/index.html","9f619faed8db5a68297449987cf37ca5"],["/blog-techtags/Mocha/index.html","3371fd8b534a85264b3b2271c7e77c3e"],["/blog-techtags/NVM/index.html","c84f26abb36da77e0415cc52dabfbba3"],["/blog-techtags/Netscape/index.html","30f281ecfb5293c86dcca25413ebf5f1"],["/blog-techtags/NodeJS/index.html","eb7f25d05ff429ddc31c504410389b83"],["/blog-techtags/OFDM/index.html","36c259f55aa52c821a75efde7c144e35"],["/blog-techtags/OSI/index.html","f6853b7980c0d360d70025945bc23353"],["/blog-techtags/PM/index.html","9c6cbf666e214376178de4cdacd9e024"],["/blog-techtags/PSK/index.html","850dba97add18b46d7edbfafedf2a7d7"],["/blog-techtags/Promise/index.html","9ccefab7efdf07c143ff45517640588c"],["/blog-techtags/Proxy/index.html","82c9db6e92bf21ce01f465d1a51d6bf3"],["/blog-techtags/QAM/index.html","6b0ddd32c5d0a6a3e4ebcb85261c84a6"],["/blog-techtags/QPSK/index.html","cdef9507a63a9152ab8b05ec2c547a50"],["/blog-techtags/RJ45/index.html","70d8362dba0f93ea490498a215a5753b"],["/blog-techtags/RS-232C編碼/index.html","5b05f2582dd6a98b18fc6428d705a7a5"],["/blog-techtags/RequireJS/index.html","09cd5139b67c1a8cb644f9a6841eede3"],["/blog-techtags/SSAP/index.html","c414853c4c74ec78272ba45e2a08f201"],["/blog-techtags/STP/index.html","eb03ae9c669f436a03f8d4ec6eb97a2b"],["/blog-techtags/Scope/index.html","1c6fca4126697eb093d5c97f528fe054"],["/blog-techtags/ServerJS/index.html","a821819932435aebbd7872f5b5b68fdb"],["/blog-techtags/TCP-IP協定/index.html","a124f7892cb3354b775ee2187deda7c9"],["/blog-techtags/TDMA/index.html","6d06ef2898f4f2cb0665d1f929a74ca7"],["/blog-techtags/TypeScript/index.html","15be13a1aea7f04593395726862475cb"],["/blog-techtags/UTP/index.html","8a55945c2e800f516119268e0f0a2232"],["/blog-techtags/Uglify/index.html","77650e6e23482466a4eada37ba7824a1"],["/blog-techtags/V8/index.html","295c3f9ef7dad0560f7d2d6658ae258b"],["/blog-techtags/VSCode/index.html","a6b74119eab509961bcbc912b755124d"],["/blog-techtags/W3C/index.html","53c3a9cf8f0646fd08c2edc2ca9bf188"],["/blog-techtags/WebAssembly/index.html","1da01976cc7e16314a9044efdf07f4da"],["/blog-techtags/WebPack/index.html","c77a3784eed0a3e89106c79961ce3377"],["/blog-techtags/WebSocket/index.html","e841993c5a8bc68b4bf4472fd2d4feb5"],["/blog-techtags/WiFi/index.html","bdcb4ad1f41f5402a618a32dc89ad28f"],["/blog-techtags/WiFi探針/index.html","ec04eba8b0293dab52a91083adf7c28e"],["/blog-techtags/XMLHttpRequest/index.html","2723f97ff326c9db4d4ea1ad71d810a4"],["/blog-techtags/apply/index.html","1f6fa1c5c4bd8c7c9fc512404c9cd3b0"],["/blog-techtags/bind/index.html","fef5c1db0822b7122f21483b75548368"],["/blog-techtags/call/index.html","6bf146fd77c8018ec67475c4ad617125"],["/blog-techtags/const/index.html","cf9f22b156d10aef66dd230bfb55fdc2"],["/blog-techtags/export/index.html","0bcff95a83d40f47aef92435f767476b"],["/blog-techtags/exports/index.html","4735d66e030e295e81d6bc4ef40a017d"],["/blog-techtags/import/index.html","b1a753ae2bea73f44a2285734f91a909"],["/blog-techtags/index.html","78e44fdf940d640e95c7a18541f4f6a9"],["/blog-techtags/jQuery/index.html","a3f22f22db7b0402b5685b13323180a3"],["/blog-techtags/let/index.html","41b8d05cc082dc05d94811a7028d6092"],["/blog-techtags/npm/index.html","c0ea8b68c51057c70e1fed2a52d11efc"],["/blog-techtags/packeage-json/index.html","0536aedb3e67856dc5a7e09379ef7c54"],["/blog-techtags/require/index.html","38928b187aba36fdc16a8c7950ed4134"],["/blog-techtags/runtime/index.html","4a00a0675923a54b5238f4e739fd5098"],["/blog-techtags/seaJS/index.html","86d45630729d98183602c6718e6978ef"],["/blog-techtags/this/index.html","06c14e97919ae19192600581c75ed8ff"],["/blog-techtags/tsc/index.html","4ebacae4405ac710252c787eaa30849c"],["/blog-techtags/tsconfig-json/index.html","af4df16e3a8f45a2a44005fc9387cda4"],["/blog-techtags/var/index.html","3feb3b874959a0c741a4177a604c3788"],["/blog-techtags/中頻/index.html","ecd17f04480a1cc6e3cf0896b71ce81b"],["/blog-techtags/交流電/index.html","77296cab9d31ec9f6e4c3b95c85a977e"],["/blog-techtags/人流監控/index.html","8f3edf4c4c4d1a4399482085446786dd"],["/blog-techtags/人類/index.html","b923adac02c9fd4964e6c530816451de"],["/blog-techtags/介質/index.html","9d032aa8c15bc2ec86f9bc571f8f12b3"],["/blog-techtags/傳輸層/index.html","8201ad672f531ea9b833f6ffb21e2952"],["/blog-techtags/光纖/index.html","85a0796ff630b6bd66cb3b4c3674a4d6"],["/blog-techtags/全雙工/index.html","039ed6f43eaa7aa1efe154a691f737a2"],["/blog-techtags/前端歷史/index.html","6901332bec825a59a1b98105d953492a"],["/blog-techtags/半雙工/index.html","3d7a596b53cadb539ec63247bb9a25c4"],["/blog-techtags/協定/index.html","62ea6bc0dfbfab03cf4517832086918b"],["/blog-techtags/厄斯特/index.html","950ad5eaa084302e7d37562a3d36ea36"],["/blog-techtags/可見光/index.html","4ef6da58a3ea103a07c5a3a9870829d3"],["/blog-techtags/同步/index.html","08b8c966519038a9d9b5473c78ede40d"],["/blog-techtags/同軸電纜/index.html","4f5a2056380acf0073d782eb28c92e6e"],["/blog-techtags/單元測試/index.html","d7075973e76b41f44ca18b5c1eaa94be"],["/blog-techtags/單工/index.html","48c0926ff77ee5d6b144efef480f51d2"],["/blog-techtags/嚴格模式/index.html","9d7fba79bea2034e4908a1283c65f60c"],["/blog-techtags/國際電信聯盟/index.html","f40bc1eaa72dfb936215d9d7c801407f"],["/blog-techtags/基頻/index.html","7631136cdbf941b20b5b151a5453d2c5"],["/blog-techtags/多工/index.html","a75ad73cad1bba5bf8bffcf21a82a39e"],["/blog-techtags/大腦/index.html","16f02799cb49b168b29ff44adeeacf1f"],["/blog-techtags/定位輔助/index.html","e97e5e55177cf0cf314dbe84fd5cdcd8"],["/blog-techtags/實體層/index.html","289ae41f6f7ba7d0f7c928d88d78dd0b"],["/blog-techtags/封包交換/index.html","5fde9e28ed58b61b8116d17116f5afd4"],["/blog-techtags/射頻/index.html","bdb767618b2a2a0656e177eb529ee1f0"],["/blog-techtags/尼安德特人/index.html","412d444f75f824a3e0919010ecd50735"],["/blog-techtags/差動式曼徹斯特編碼/index.html","2508acb8bfdc4106a7ab2c52724751c4"],["/blog-techtags/差動式零補差編碼/index.html","0e1cddddaaad530268e3a59621e7ef18"],["/blog-techtags/廣告投射/index.html","d7baf19ad0014bbee4b95e74cd5ca43b"],["/blog-techtags/弱型別/index.html","a1b1ab049b3115611ad97d7262a4bde4"],["/blog-techtags/強型別/index.html","fb368397a5979a0ca757311870ac1e61"],["/blog-techtags/應用層/index.html","c14ff8e4d5e94ae6306d114dc5b93822"],["/blog-techtags/抽象檔案-d-ts/index.html","83ef798f0db792d0ad0223448a972b09"],["/blog-techtags/數位/index.html","68fb11f894bcd29ec8cc6f8508769c15"],["/blog-techtags/時間/index.html","e514619599f2efa20724d95cb19651eb"],["/blog-techtags/智人/index.html","b737409ac79aa236d467849661794a2c"],["/blog-techtags/曼徹斯特編碼/index.html","26c25b24cfa2ff2ab1e0f4aac1cb42f8"],["/blog-techtags/會議層/index.html","c95ab6cab964560013be2b4594220895"],["/blog-techtags/有線通訊/index.html","a92a410ad327a03182db4c3e15a5df6b"],["/blog-techtags/汙染變數/index.html","c0b077522a870f5961de1081a5b779a3"],["/blog-techtags/法拉第/index.html","460ee371c221f7ee6aebcf5ee5bb49d8"],["/blog-techtags/瀏覽器/index.html","751b3c8c2df1b8f995d51948022709c0"],["/blog-techtags/無線通訊/index.html","d1f1420a066280809fada271108460ce"],["/blog-techtags/特斯拉/index.html","9174ea03bc9e2b34bf80f587f6c035cf"],["/blog-techtags/異步/index.html","18392c24b9fe210dde6beb8ca5ab27e3"],["/blog-techtags/磁場/index.html","be0791da0571a49ddc60ca8419d9dace"],["/blog-techtags/第一次瀏覽器大戰/index.html","56733dc2a80d9b7bcc71056c2f20e130"],["/blog-techtags/第六代WiFi/index.html","2b2656e133d67d589141ee452b1b28c0"],["/blog-techtags/網路層/index.html","47491e592b2a0b7d9cd093d5bab8d261"],["/blog-techtags/線路交換/index.html","efa2a40d29d69cc877b0e2a4fffb693a"],["/blog-techtags/緩存/index.html","d365678a75c6a743b3f7709f50c198a0"],["/blog-techtags/聲波/index.html","893c3a994fce0f71186bf039bd7ad54d"],["/blog-techtags/能階/index.html","8b032382b3edcd04fca686de15885fe6"],["/blog-techtags/腳本語言/index.html","92c5421f8f654c71170d8660ea9fba29"],["/blog-techtags/行為監控/index.html","26ffcf464d911fc6c68103f9532a87ab"],["/blog-techtags/表現層/index.html","ffe28f7c45055b0dbdb67a7c862ed1fa"],["/blog-techtags/解釋型/index.html","83ae8e1260af33c414d6daa4a906806d"],["/blog-techtags/詐騙資料/index.html","f7fcd707ee634b4b46b180f885481823"],["/blog-techtags/調變/index.html","87c3a40158cf5c54341697b2bc4f6b76"],["/blog-techtags/資安保護/index.html","73137201d2fc4a195c9ba8f007a2be7e"],["/blog-techtags/資料鏈結層/index.html","710cb23f05b0e4ca9c35612e33dce3d9"],["/blog-techtags/跨域/index.html","51392c3326f7f1bed31495e938f10745"],["/blog-techtags/身分證/index.html","a265f98a44508665bf06924860a2c31e"],["/blog-techtags/通道訪問控制/index.html","00a8ffeb695a1ffec37bd5e2e3382b61"],["/blog-techtags/銫原子/index.html","ede59d2d879d9373288548fbc1d1f233"],["/blog-techtags/閉包/index.html","fb9b0af7cda3f56130c4beb235bade82"],["/blog-techtags/雙工/index.html","8e59f718d87bfe9ca69d711405ccbc04"],["/blog-techtags/雙絞銅線/index.html","fbeec394c3b2016a40441a6c9ff68ff6"],["/blog-techtags/雜訊/index.html","7c3cba1600c8e59abc085160b8cb9ff6"],["/blog-techtags/電場/index.html","1a34320028e110e87a9725db44deda8c"],["/blog-techtags/電磁波/index.html","eb56b1334bd0f545d8c0cd2020595b64"],["/blog-techtags/電視/index.html","518487a9c7e9a21932a885c6492ad679"],["/blog-techtags/靜態優化/index.html","aedc39f7dcfc9ffe5c1d85b13f8cae44"],["/blog-techtags/頻譜/index.html","79710b7f7b3346325b7b9e26507e96a8"],["/blog-techtags/類比/index.html","fe7439ca7535ca77ada75701dee1057a"],["/blog-techtags/馬克士威/index.html","3f7c820d1835366791d8584594d9f39e"]];
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







