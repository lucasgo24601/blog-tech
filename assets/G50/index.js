window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  G50_AutoGamePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6633V2wEdPiacRemeSAJHt", "G50_AutoGamePanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Slot_AutoGamePanel_1 = require("../../../../SlotFramework/Game/Panel/Slot_AutoGamePanel");
    var G50_DataManager_1 = require("../../../Common/script/G50_DataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_AutoGamePanel = function(_super) {
      __extends(G50_AutoGamePanel, _super);
      function G50_AutoGamePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.data = null;
        return _this;
      }
      G50_AutoGamePanel.prototype.init = function() {
        this.data = G50_DataManager_1.default.getInstance();
        _super.prototype.init.call(this);
      };
      G50_AutoGamePanel = __decorate([ ccclass ], G50_AutoGamePanel);
      return G50_AutoGamePanel;
    }(Slot_AutoGamePanel_1.default);
    exports.default = G50_AutoGamePanel;
    cc._RF.pop();
  }, {
    "../../../../SlotFramework/Game/Panel/Slot_AutoGamePanel": void 0,
    "../../../Common/script/G50_DataManager": "G50_DataManager"
  } ],
  G50_CommonData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bbeb61okJZAGqTpByYWF9bJ", "G50_CommonData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SpinReqData = exports.DeatilWagersHistoryData = exports.DeatilWagersData = exports.DeatilWagersData1 = exports.DeatilWagersRes = exports.FastChoseRoomData = exports.ScatterData = exports.WinLineData = exports.EliminateData = exports.JackpotPoolData = exports.JackpotNoticeData = exports.JackpotData = exports.ResultData = exports.BaseGameSpinResponeData = exports.RoomData = exports.GetRoomListData = exports.ReelTable = exports.GetInitialReelInfoData = exports.LoginData = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoginData = function() {
      function LoginData() {
        this.nickname = "";
        this.language = "";
        this.balance = 0;
        this.timestamp = 0;
        this.themeType = 0;
        this.icon = 0;
        this.playerId = "";
        this.gameId = 0;
      }
      return LoginData;
    }();
    exports.LoginData = LoginData;
    var GetInitialReelInfoData = function() {
      function GetInitialReelInfoData() {
        this.reels = null;
        this.position = [];
      }
      return GetInitialReelInfoData;
    }();
    exports.GetInitialReelInfoData = GetInitialReelInfoData;
    var ReelTable = function() {
      function ReelTable() {
        this.BG = [];
        this.FG = [];
      }
      return ReelTable;
    }();
    exports.ReelTable = ReelTable;
    var GetRoomListData = function() {
      function GetRoomListData() {
        this.rooms = [];
      }
      return GetRoomListData;
    }();
    exports.GetRoomListData = GetRoomListData;
    var RoomData = function() {
      function RoomData() {
        this.roomId = "";
        this.status = 0;
      }
      return RoomData;
    }();
    exports.RoomData = RoomData;
    var BaseGameSpinResponeData = function() {
      function BaseGameSpinResponeData() {
        this.currentCash = 0;
        this.totalBonus = 0;
        this.totalBet = 0;
        this.resultList = [];
        this.getJackpot = null;
      }
      return BaseGameSpinResponeData;
    }();
    exports.BaseGameSpinResponeData = BaseGameSpinResponeData;
    var ResultData = function() {
      function ResultData() {
        this.randomNumList = [];
        this.totalWinBonus = 0;
        this.eliminateList = [];
        this.reels = [];
        this.jackpotBonus = null;
      }
      return ResultData;
    }();
    exports.ResultData = ResultData;
    var JackpotData = function() {
      function JackpotData() {
        this.count = null;
        this.jackpotPos = [];
        this.winBonus = null;
      }
      return JackpotData;
    }();
    exports.JackpotData = JackpotData;
    var JackpotNoticeData = function() {
      function JackpotNoticeData() {}
      return JackpotNoticeData;
    }();
    exports.JackpotNoticeData = JackpotNoticeData;
    var JackpotPoolData = function() {
      function JackpotPoolData() {}
      return JackpotPoolData;
    }();
    exports.JackpotPoolData = JackpotPoolData;
    var EliminateData = function() {
      function EliminateData() {
        this.isEliminate = false;
        this.winWayList = [];
        this.scatter = null;
        this.totalWinPos = [];
        this.eliHitPos = [];
        this.eliMutiple = 1;
        this.eliWinBonus = 0;
        this.nextReels = [];
      }
      return EliminateData;
    }();
    exports.EliminateData = EliminateData;
    var WinLineData = function() {
      function WinLineData() {
        this.lineNum = 0;
        this.singlePos = [];
        this.specialMultiple = 0;
        this.winBonus = 0;
        this.winNum = 0;
        this.x = 0;
      }
      return WinLineData;
    }();
    exports.WinLineData = WinLineData;
    var ScatterData = function() {
      function ScatterData() {
        this.count = 0;
        this.scatterPos = [];
        this.winBonus = 0;
        this.winNum = 20;
        this.getSpins = 0;
      }
      return ScatterData;
    }();
    exports.ScatterData = ScatterData;
    var FastChoseRoomData = function() {
      function FastChoseRoomData() {}
      return FastChoseRoomData;
    }();
    exports.FastChoseRoomData = FastChoseRoomData;
    var DeatilWagersRes = function() {
      function DeatilWagersRes() {}
      return DeatilWagersRes;
    }();
    exports.DeatilWagersRes = DeatilWagersRes;
    var DeatilWagersData1 = function() {
      function DeatilWagersData1() {}
      return DeatilWagersData1;
    }();
    exports.DeatilWagersData1 = DeatilWagersData1;
    var DeatilWagersData = function() {
      function DeatilWagersData() {
        this.grId = "";
        this.gameId = "";
        this.gameName = "";
        this.themeId = "";
        this.roomId = "";
        this.gameType = "";
        this.playerId = "";
        this.betAmount = "";
        this.validAmount = "";
        this.winAmount = "";
        this.balance = "";
        this.history = [];
        this.startTimestamp = 0;
        this.endTimestamp = 0;
      }
      return DeatilWagersData;
    }();
    exports.DeatilWagersData = DeatilWagersData;
    var DeatilWagersHistoryData = function() {
      function DeatilWagersHistoryData() {
        this.AllReels = [];
        this.EliminateList = [];
        this.RandomNumList = [];
        this.TotalWinBonus = 0;
      }
      return DeatilWagersHistoryData;
    }();
    exports.DeatilWagersHistoryData = DeatilWagersHistoryData;
    var SpinReqData = function() {
      function SpinReqData() {}
      return SpinReqData;
    }();
    exports.SpinReqData = SpinReqData;
    cc._RF.pop();
  }, {} ],
  G50_ConnetLineItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "de620jc4QZC9JWJ5gtBHmWL", "G50_ConnetLineItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var G50_DataManager_1 = require("../../../Common/script/G50_DataManager");
    var Slot_Symbol_1 = require("../../../../SlotFramework/Game/view/Slot_Symbol");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_ConnetLineItem = function(_super) {
      __extends(G50_ConnetLineItem, _super);
      function G50_ConnetLineItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.linNum = null;
        _this.SpecialMultiple = null;
        _this.WinBonus = null;
        _this.lineCount = null;
        return _this;
      }
      G50_ConnetLineItem.prototype.start = function() {};
      G50_ConnetLineItem.prototype.init = function(p_data) {
        var _this = this;
        cc.error("\u7269\u4ef6\u8cc7\u6599 ", p_data);
        var _spriteName = p_data.bundlePath + "/image/Symbol/" + Slot_Symbol_1.SYMBOL_NAME[p_data.winLineData.WinNum].toString();
        cc.assetManager.getBundle(p_data.bundleName).load(_spriteName, cc.SpriteFrame, function(err, assets) {
          if (err) return;
          _this.icon.spriteFrame = assets;
        });
        this.linNum.string = p_data.winLineData.LineNum.toString();
        this.SpecialMultiple.string = p_data.winLineData.SpecialMultiple.toString();
        this.WinBonus.string = G50_DataManager_1.default.getInstance().getClientMoney(p_data.winLineData.WinBonus).toString();
        this.lineCount.string = p_data.winLineData.X.toString();
      };
      __decorate([ property(cc.Sprite) ], G50_ConnetLineItem.prototype, "icon", void 0);
      __decorate([ property(cc.Label) ], G50_ConnetLineItem.prototype, "linNum", void 0);
      __decorate([ property(cc.Label) ], G50_ConnetLineItem.prototype, "SpecialMultiple", void 0);
      __decorate([ property(cc.Label) ], G50_ConnetLineItem.prototype, "WinBonus", void 0);
      __decorate([ property(cc.Label) ], G50_ConnetLineItem.prototype, "lineCount", void 0);
      G50_ConnetLineItem = __decorate([ ccclass ], G50_ConnetLineItem);
      return G50_ConnetLineItem;
    }(cc.Component);
    exports.default = G50_ConnetLineItem;
    cc._RF.pop();
  }, {
    "../../../../SlotFramework/Game/view/Slot_Symbol": void 0,
    "../../../Common/script/G50_DataManager": "G50_DataManager"
  } ],
  G50_DataManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c01667HJfpNpp+Md3ggHrAy", "G50_DataManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Slot_DataManager_1 = require("../../../SlotFramework/Slot_DataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_DataManager = function(_super) {
      __extends(G50_DataManager, _super);
      function G50_DataManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameVersion = "Dev 1.0.9";
        _this.SDKVersion = "20200812";
        _this.webApiUrl = "http://10.200.6.31:5100";
        _this.isShowDrawcall = false;
        _this.betOdds = [ 1, 2, 4, 6, 8, 10, 20, 40, 60, 100, 200, 300, 600, 1200, 1800, 3e3 ];
        _this.resultList = [];
        _this.getJackpot = null;
        _this.isWinScatter = null;
        return _this;
      }
      G50_DataManager.prototype.init = function() {
        _super.prototype.init.call(this);
        this.gameID = 50;
        this.path = "Resources";
        this.skin = "Normal";
        this.setMagnificationTable();
      };
      G50_DataManager.prototype.setMagnificationTable = function() {
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.H1] = {};
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.H1][5] = 125;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.H1][4] = 75;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.H1][3] = 35;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.H2] = {};
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.H2][5] = 100;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.H2][4] = 50;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.H2][3] = 25;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.H3] = {};
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.H3][5] = 75;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.H3][4] = 40;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.H3][3] = 20;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N1] = {};
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N1][5] = 50;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N1][4] = 25;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N1][3] = 10;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N2] = {};
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N2][5] = 50;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N2][4] = 25;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N2][3] = 10;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N3] = {};
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N3][5] = 50;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N3][4] = 25;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N3][3] = 10;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N4] = {};
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N4][5] = 25;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N4][4] = 12;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N4][3] = 5;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N5] = {};
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N5][5] = 25;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N5][4] = 12;
        this.magnificationTable[Slot_DataManager_1.SYMBOL_NAME.N5][3] = 5;
      };
      G50_DataManager.adjustMode = false;
      G50_DataManager = __decorate([ ccclass ], G50_DataManager);
      return G50_DataManager;
    }(Slot_DataManager_1.default);
    exports.default = G50_DataManager;
    cc._RF.pop();
  }, {
    "../../../SlotFramework/Slot_DataManager": void 0
  } ],
  G50_DynamicPopUpPanelManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bd08eGWAPRMo52hEMcbNGi1", "G50_DynamicPopUpPanelManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Slot_DynamicPopUpManager_1 = require("../../../SlotFramework/Common/DynamicPopUp/Slot_DynamicPopUpManager");
    var G50_DynamicPopUpPanelManager = function(_super) {
      __extends(G50_DynamicPopUpPanelManager, _super);
      function G50_DynamicPopUpPanelManager() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      G50_DynamicPopUpPanelManager.prototype.prestore = function(prefabs) {
        for (var _i = 0, prefabs_1 = prefabs; _i < prefabs_1.length; _i++) {
          var prefab = prefabs_1[_i];
          prefab.name;
          _super.prototype.prestore.call(this, [ prefab ]);
        }
      };
      return G50_DynamicPopUpPanelManager;
    }(Slot_DynamicPopUpManager_1.default);
    exports.default = G50_DynamicPopUpPanelManager;
    cc._RF.pop();
  }, {
    "../../../SlotFramework/Common/DynamicPopUp/Slot_DynamicPopUpManager": void 0
  } ],
  G50_FixPanelHeight: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4c4db1Hs1AQpVf/Be0JQ4W", "G50_FixPanelHeight");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RwdManager_1 = require("../../../Common/Tools/Rwd/RwdManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
    var G50_FixPanelHeight = function(_super) {
      __extends(G50_FixPanelHeight, _super);
      function G50_FixPanelHeight() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._callback = null;
        _this._minSize = null;
        _this._maxSize = null;
        return _this;
      }
      Object.defineProperty(G50_FixPanelHeight.prototype, "minSize", {
        get: function() {
          null == this._minSize && (this._minSize = new cc.Size(this.node.width, this.node.height));
          return this._minSize;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(G50_FixPanelHeight.prototype, "maxSize", {
        get: function() {
          null == this._maxSize && (this._maxSize = new cc.Size(this.node.width, this.node.height));
          return this._maxSize;
        },
        set: function(value) {
          this._maxSize = value;
        },
        enumerable: false,
        configurable: true
      });
      G50_FixPanelHeight.prototype.onEnable = function() {
        null == cc.view["_resizeCallback"] && cc.view.setResizeCallback(RwdManager_1.RwdManager.callback);
        false;
        this._callback = this.onResize.bind(this);
        RwdManager_1.RwdManager.callbacks.push(this._callback);
        this.onResize();
      };
      G50_FixPanelHeight.prototype.onDisable = function() {
        for (var i = 0, length = RwdManager_1.RwdManager.callbacks.length; i < length; i++) {
          var func = RwdManager_1.RwdManager.callbacks[i];
          if (func === this._callback) {
            RwdManager_1.RwdManager.callbacks.splice(i, 1);
            break;
          }
        }
        false;
      };
      G50_FixPanelHeight.prototype.onResize = function() {
        var visibleSize = cc.view.getVisibleSize();
        this.node.width = this.minSize.width + .5 * (visibleSize.width - cc.view.getDesignResolutionSize().width);
        this.node.height = this.minSize.height + .5 * (visibleSize.height - cc.view.getDesignResolutionSize().height);
        this.node.width > this.maxSize.width && (this.node.width = this.maxSize.width);
        this.node.height > this.maxSize.height && (this.node.height = this.maxSize.height);
      };
      G50_FixPanelHeight.prototype.onNodeChange = function() {
        this._minSize = new cc.Size(this.node.width, this.node.height);
      };
      __decorate([ property(cc.Size) ], G50_FixPanelHeight.prototype, "_minSize", void 0);
      __decorate([ property({
        tooltip: "\u8bbe\u8ba1\u5206\u8fa8\u7387\u6642\u7684\u986f\u793a\u5927\u5c0f",
        readonly: true
      }) ], G50_FixPanelHeight.prototype, "minSize", null);
      __decorate([ property(cc.Size) ], G50_FixPanelHeight.prototype, "_maxSize", void 0);
      __decorate([ property({
        type: cc.Size,
        tooltip: "\u8bbe\u8ba1\u5206\u8fa8\u7387\u6642\u7684\u986f\u793a\u5927\u5c0f"
      }) ], G50_FixPanelHeight.prototype, "maxSize", null);
      G50_FixPanelHeight = __decorate([ ccclass, executeInEditMode ], G50_FixPanelHeight);
      return G50_FixPanelHeight;
    }(cc.Component);
    exports.default = G50_FixPanelHeight;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/Rwd/RwdManager": void 0
  } ],
  G50_FreeGameGetScorePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97352jaPZNJNbsTKm6Zfm2+", "G50_FreeGameGetScorePanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FXController_1 = require("../../../../Common/Optional/Crosis/FXController/FXController");
    var AudioManager_1 = require("../../../../Common/Tools/AudioManager/AudioManager");
    var Slot_FreeGameGetScorePanel_1 = require("../../../../SlotFramework/Game/Panel/Slot_FreeGameGetScorePanel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_FreeGameGetScorePanel = function(_super) {
      __extends(G50_FreeGameGetScorePanel, _super);
      function G50_FreeGameGetScorePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.FX_End = null;
        _this.freeGameGetScore2 = null;
        return _this;
      }
      G50_FreeGameGetScorePanel.prototype.init = function() {
        _super.prototype.init.call(this);
      };
      G50_FreeGameGetScorePanel.prototype.start = function() {};
      G50_FreeGameGetScorePanel.prototype.open = function(p_freeGameGetScore, p_betScore) {
        _super.prototype.open.call(this, p_freeGameGetScore, p_betScore);
        this.freeGameGetScore2.string = p_freeGameGetScore.toFixed(2);
        this.showWinEffect();
        this.FX_End.play();
      };
      G50_FreeGameGetScorePanel.prototype.close = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("CloseFreeGameGetScorePanel");
        return _super.prototype.close.call(this);
      };
      G50_FreeGameGetScorePanel.prototype.showWinEffect = function() {
        cc.log("\u3010Show Win\u3011 ");
        AudioManager_1.AudioManager.instance.playAudioEvent("FreeGameGetScoreShowWinEffect");
      };
      __decorate([ property(FXController_1.default) ], G50_FreeGameGetScorePanel.prototype, "FX_End", void 0);
      __decorate([ property(cc.Label) ], G50_FreeGameGetScorePanel.prototype, "freeGameGetScore2", void 0);
      G50_FreeGameGetScorePanel = __decorate([ ccclass ], G50_FreeGameGetScorePanel);
      return G50_FreeGameGetScorePanel;
    }(Slot_FreeGameGetScorePanel_1.default);
    exports.default = G50_FreeGameGetScorePanel;
    cc._RF.pop();
  }, {
    "../../../../Common/Optional/Crosis/FXController/FXController": void 0,
    "../../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../../SlotFramework/Game/Panel/Slot_FreeGameGetScorePanel": void 0
  } ],
  G50_FreeGamePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d2aabYtJLVPB7S38MKzpZij", "G50_FreeGamePanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager_1 = require("../../../../Common/Tools/AudioManager/AudioManager");
    var Slot_FreeGamePanel_1 = require("../../../../SlotFramework/Game/Panel/Slot_FreeGamePanel");
    var FXController_1 = require("../../../../Common/Optional/Crosis/FXController/FXController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_FreeGamePanel = function(_super) {
      __extends(G50_FreeGamePanel, _super);
      function G50_FreeGamePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spine = null;
        _this.fxOpen = null;
        return _this;
      }
      G50_FreeGamePanel.prototype.init = function() {
        _super.prototype.init.call(this);
      };
      G50_FreeGamePanel.prototype.open = function(p_freeGameCount) {
        var _this = this;
        _super.prototype.open.call(this, p_freeGameCount);
        this.fxOpen.play();
        this.scheduleOnce(function() {
          AudioManager_1.AudioManager.instance.playAudioEvent("OpenFreeGamePanel");
        }, 1.2);
        return new Promise(function(res) {
          _this.spine.setCompleteListener(function() {
            _this.spine.setCompleteListener(null);
            res();
          });
        });
      };
      G50_FreeGamePanel.prototype.close = function() {
        cc.log("\u95dc\u9589\u514d\u8cbb\u904a\u6232\u9762\u677f");
        AudioManager_1.AudioManager.instance.playAudioEvent("CloseFreeGamePanel");
        return _super.prototype.close.call(this);
      };
      G50_FreeGamePanel.prototype.closeAnimation = function() {
        this.fxOpen.stop();
        return;
      };
      __decorate([ property(sp.Skeleton) ], G50_FreeGamePanel.prototype, "spine", void 0);
      __decorate([ property(FXController_1.default) ], G50_FreeGamePanel.prototype, "fxOpen", void 0);
      G50_FreeGamePanel = __decorate([ ccclass ], G50_FreeGamePanel);
      return G50_FreeGamePanel;
    }(Slot_FreeGamePanel_1.default);
    exports.default = G50_FreeGamePanel;
    cc._RF.pop();
  }, {
    "../../../../Common/Optional/Crosis/FXController/FXController": void 0,
    "../../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../../SlotFramework/Game/Panel/Slot_FreeGamePanel": void 0
  } ],
  G50_GameUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e24dD8zxZBuYkNZCzeI1jw", "G50_GameUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DURATION = void 0;
    var Slot_GameUI_1 = require("../../../../SlotFramework/Game/view/Slot_GameUI");
    var G50_RulePanel_1 = require("./G50_RulePanel");
    var G50_FreeGamePanel_1 = require("./G50_FreeGamePanel");
    var G50_FreeGameGetScorePanel_1 = require("./G50_FreeGameGetScorePanel");
    var LocalizationManager_1 = require("../../../../Common/Tools/Localization/LocalizationManager");
    var AudioManager_1 = require("../../../../Common/Tools/AudioManager/AudioManager");
    var G50_DynamicPopUpPanelManager_1 = require("../../../Common/script/G50_DynamicPopUpPanelManager");
    var G50_AutoGamePanel_1 = require("./G50_AutoGamePanel");
    var G50_MusicOptionPanel_1 = require("./G50_MusicOptionPanel");
    var G50_SymbolTipPanel_1 = require("./G50_SymbolTipPanel");
    var OrientationToolManager_1 = require("../../../../Common/Tools/OrientationTool/OrientationToolManager");
    var FXController_1 = require("../../../../Common/Optional/Crosis/FXController/FXController");
    var G50_JackpotPanel_1 = require("./G50_JackpotPanel");
    var G50_DataManager_1 = require("../../../Common/script/G50_DataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DURATION;
    (function(DURATION) {
      DURATION[DURATION["FADE"] = .5] = "FADE";
    })(DURATION = exports.DURATION || (exports.DURATION = {}));
    var G50_GameUI = function(_super) {
      __extends(G50_GameUI, _super);
      function G50_GameUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.baseGameBG = null;
        _this.freeGameBG = null;
        _this.freeGameFX = [];
        _this.tip5String = "\u4ee5\u4e0b\u70ba\u9762\u677f";
        _this.rulePanel = null;
        _this.freeGamePanel = null;
        _this.freeGameGetScorePanel = null;
        _this.autoGamePanel = null;
        _this.musicOptionPanel = null;
        _this.symbolTipPanel = null;
        _this.jackpotPanel = null;
        _this.mainGameOddsLabel = [];
        _this.fxFreegameOddsOnce = null;
        _this.freegameOddsFrame = [];
        _this.basegameOddsFrame = [];
        _this.freegameSlotUi = null;
        _this.basegameSlotUi = null;
        _this.buttonGroup_top = null;
        _this.jackpotPoolScore = [];
        _this.fxBasegameWin = null;
        _this.fxFreegameWin = null;
        _this.fxSpinOnce = [];
        _this.remainingFreeGameRoot = null;
        _this.spinMask2 = null;
        _this.isFreeGameCollctEffecting = false;
        return _this;
      }
      G50_GameUI.prototype.start = function() {};
      G50_GameUI.prototype.init = function(p_data) {
        _super.prototype.init.call(this, p_data);
        this.rulePanel.init();
        this.freeGamePanel.init();
        this.freeGameGetScorePanel.init();
        this.historyPanel.init(p_data.dataManager);
        this.autoGamePanel.init();
        this.jackpotPanel.init();
        this.setSpinArrowSpinningSpeed(Slot_GameUI_1.SPIN_ARROW_SPINNIG_TYPE.NORMAL);
        this.showSpinButtonIdleEffect();
        cc.systemEvent.on(OrientationToolManager_1.ORIENTATION_EVENT.RESIZE, this.switchCanvas, this);
      };
      G50_GameUI.prototype.switchCanvas = function() {
        if (this.baseGameBG.active) {
          if (this.menu.active) {
            cc.Tween.stopAllByTarget(this.menu);
            cc.Tween.stopAllByTarget(this);
            OrientationToolManager_1.default.orientationState === OrientationToolManager_1.ORIENTATION_TYPE.VERTICAL ? this.menu.setPosition(0, -800) : this.menu.setPosition(800, 0);
          }
          this.buttonGroupSwitch(!this.menu.active);
          this.menuButtonSwitch(!this.menu.active);
        }
      };
      G50_GameUI.prototype.changeToBaseGameBackGround = function() {
        this.baseGameBG.active = true;
        this.basegameSlotUi.active = true;
        this.basegameOddsFrame.forEach(function(node) {
          return node.active = true;
        });
        this.freegameOddsFrame.forEach(function(node) {
          return node.active = false;
        });
        this.freeGameBG.active = false;
        this.freegameSlotUi.active = false;
        this.buttonGroupSwitch(true);
        this.setBackBtnState(true);
        this.changeMainGameOddsLabel(1);
        this.changeFreeGameOddsLabel(0);
        this.hideSpinMask();
      };
      G50_GameUI.prototype.changeToFreeGameBackGround = function() {
        this.baseGameBG.active = false;
        this.basegameSlotUi.active = false;
        this.buttonGroupSwitch(false);
        this.setBackBtnState(false);
        this.freeGameBG.active = true;
        this.freegameSlotUi.active = true;
        this.freeGameBG.opacity = 125;
        cc.tween(this.freeGameBG).to(DURATION.FADE, {
          opacity: 255
        }, {
          easing: "cubicInOut"
        }).start();
      };
      G50_GameUI.prototype.showFreeGameOddsTip = function() {
        return __awaiter(this, void 0, Promise, function() {
          var fxLabels, fxAnimation, i;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.freegameOddsFrame.forEach(function(labelNode) {
                labelNode.active = false;
              });
              _super.prototype.showFreeGameOddsTip.call(this);
              fxLabels = this.fxFreegameOddsOnce.node.children[0].children;
              fxAnimation = this.fxFreegameOddsOnce.node.children[1];
              i = 0;
              _a.label = 1;

             case 1:
              if (!(i < fxLabels.length)) return [ 3, 5 ];
              fxLabels[i].active = true;
              fxAnimation.setPosition(fxLabels[i].getPosition());
              this.fxFreegameOddsOnce.play();
              AudioManager_1.AudioManager.instance.playAudioEvent("StarFreeGameCounts" + (i + 1));
              this.basegameOddsFrame[i].active = false;
              return [ 4, new Promise(function(res) {
                return _this.scheduleOnce(res, .5);
              }) ];

             case 2:
              _a.sent();
              this.freegameOddsFrame[i].active = true;
              return [ 4, new Promise(function(res) {
                return _this.scheduleOnce(res, .5);
              }) ];

             case 3:
              _a.sent();
              fxLabels[i].active = false;
              _a.label = 4;

             case 4:
              i++;
              return [ 3, 1 ];

             case 5:
              return [ 2, Promise.resolve() ];
            }
          });
        });
      };
      G50_GameUI.prototype.openFreeGamePanel = function(p_freeGameCount) {
        this.setBackBtnState(false);
        return this.freeGamePanel.open(p_freeGameCount);
      };
      G50_GameUI.prototype.closeFreeGamePanel = function() {
        return this.freeGamePanel.close();
      };
      G50_GameUI.prototype.openFreeGameGetScorePanel = function(p_freeGameGetScore, p_betScore) {
        this.freeGameGetScorePanel.open(p_freeGameGetScore, p_betScore);
      };
      G50_GameUI.prototype.closeFreeGameGetScorePanel = function() {
        return this.freeGameGetScorePanel.close();
      };
      G50_GameUI.prototype.hideSpinMask = function() {
        _super.prototype.hideSpinMask.call(this);
        this.spinMask2.active = false;
      };
      G50_GameUI.prototype.showSpinMask = function() {
        _super.prototype.showSpinMask.call(this);
        this.spinMask2.active = true;
      };
      G50_GameUI.prototype.showLackMoneyPanel = function() {
        var _message = LocalizationManager_1.default.getInstance().get("ERROR_NO_COIN");
        G50_DynamicPopUpPanelManager_1.default.getInstance().confirmSystemMsgDialogBox.show(_message);
      };
      G50_GameUI.prototype.showTotalGetScore = function(p_totalGetScore) {
        var _this = this;
        this.getScoreTip.node.active = false;
        this.totalGetScore.active = true;
        this.totalGetScoreTip.string = p_totalGetScore.toString();
        this.updateBroadEffect.on(cc.Animation.EventType.STOP, function() {
          _this.updateBroadEffect.node.active = false;
        });
        this.totalGetScoreTip.node.parent.scale = 0;
        cc.tween(this.totalGetScoreTip.node.parent).to(DURATION.FADE / 2, {
          scale: 1.5
        }, {
          easing: "sineOut"
        }).to(DURATION.FADE / 2, {
          scale: 1
        }, {
          easing: "sineIn"
        }).start();
        this.updateBroadEffect.node.active = true;
        this.updateBroadEffect.node.parent.parent.getComponent(FXController_1.default).play();
        AudioManager_1.AudioManager.instance.playAudioEvent("PlayRewardWinScore");
      };
      G50_GameUI.prototype.setSpinArrowSpinningSpeed = function(p_type) {
        this.spinArrow.stopAllActions();
        p_type == Slot_GameUI_1.SPIN_ARROW_SPINNIG_TYPE.STOP || (p_type == Slot_GameUI_1.SPIN_ARROW_SPINNIG_TYPE.NORMAL ? cc.tween(this.spinArrow).by(this.spinArrowRotateDuration_Normal, {
          angle: -360
        }).repeatForever().start() : cc.tween(this.spinArrow).by(this.spinArrowRotateDuration_Fast, {
          angle: -360
        }).repeatForever().start());
      };
      G50_GameUI.prototype.changeMainGameOddsLabel = function(p_oddsInext) {
        for (var i = 0; i < this.mainGameOddsLabel.length; i++) this.mainGameOddsLabel[i].active = false;
        if (p_oddsInext > 0) {
          p_oddsInext > this.mainGameOddsLabel.length && (p_oddsInext = this.mainGameOddsLabel.length);
          this.mainGameOddsLabel[p_oddsInext - 1].active = true;
          this.mainGameOddsLabel[p_oddsInext - 1].getComponent(FXController_1.default).play();
        }
      };
      G50_GameUI.prototype.changeFreeGameOddsLabel = function(p_oddsInext) {
        for (var i = 0; i < this.freeGameOddsLabel.length; i++) this.freeGameOddsLabel[i].active = false;
        if (p_oddsInext > 0) {
          p_oddsInext > this.freeGameOddsLabel.length && (p_oddsInext = this.freeGameOddsLabel.length);
          this.freeGameOddsLabel[p_oddsInext - 1].active = true;
          this.freeGameOddsLabel[p_oddsInext - 1].getComponent(FXController_1.default).play();
        }
      };
      G50_GameUI.prototype.openMenu = function() {
        if (OrientationToolManager_1.default.orientationState === OrientationToolManager_1.ORIENTATION_TYPE.VERTICAL) {
          this.menu.setPosition(0, -1200);
          this.menu.active = true;
          cc.tween(this.menu).to(this.menuOpenTime, {
            position: cc.v3(0, -800)
          }).start();
        } else {
          this.menu.setPosition(1200, 0);
          this.menu.active = true;
          cc.tween(this.menu).to(this.menuOpenTime, {
            position: cc.v3(800, 0)
          }).start();
        }
      };
      G50_GameUI.prototype.closeMenu = function(p_isFast) {
        var _this = this;
        if (OrientationToolManager_1.default.orientationState === OrientationToolManager_1.ORIENTATION_TYPE.VERTICAL) if (p_isFast) {
          this.menu.setPosition(0, -1200);
          this.menu.active = false;
        } else {
          this.menu.setPosition(0, -800);
          cc.tween(this.menu).to(this.menuCloseTime, {
            position: cc.v3(0, -1200)
          }).call(function() {
            _this.menu.active = false;
          }).start();
        } else if (p_isFast) {
          this.menu.setPosition(1200, 0);
          this.menu.active = false;
        } else {
          this.menu.setPosition(800, 0);
          cc.tween(this.menu).to(this.menuCloseTime, {
            position: cc.v3(1200, 0)
          }).call(function() {
            _this.menu.active = false;
          }).start();
        }
      };
      G50_GameUI.prototype.showRemainingFreeGameCount = function() {
        _super.prototype.showRemainingFreeGameCount.call(this);
        this.remainingFreeGameRoot.opacity = 0;
        this.remainingFreeGame.active = true;
        this.lastFreeGame.active = false;
        this.remainingFreeGameRoot.active = true;
        cc.tween(this.remainingFreeGameRoot).to(2, {
          opacity: 255
        }).start();
      };
      G50_GameUI.prototype.hideRemainingFreeGameCount = function() {
        this.lastFreeGame.active = false;
        this.remainingFreeGameRoot.active = false;
      };
      G50_GameUI.prototype.setRemainingFreeGameCount = function(p_count) {
        var isFinal = 0 === p_count;
        this.remainingFreeGame.active = !isFinal;
        this.remainingFreeGameCount.node.active = !isFinal;
        this.lastFreeGame.active = isFinal;
        this.remainingFreeGameCount.string = "" + p_count;
      };
      G50_GameUI.prototype.showSenceWinEffect = function(isFreegame) {
        isFreegame ? this.fxFreegameWin.play() : this.fxBasegameWin.play();
      };
      G50_GameUI.prototype.refreshJackpot = function(data) {
        var _this = this;
        data.jackpots.forEach(function(item) {
          switch (item.name) {
           case "grand":
            _this.jackpotPoolScore[0].string = G50_DataManager_1.default.getInstance().getClientMoney(item.bonus).currency();
            break;

           case "major":
            _this.jackpotPoolScore[1].string = G50_DataManager_1.default.getInstance().getClientMoney(item.bonus).currency();
            break;

           case "minor":
            _this.jackpotPoolScore[2].string = G50_DataManager_1.default.getInstance().getClientMoney(item.bonus).currency();
            break;

           case "mini":
            _this.jackpotPoolScore[3].string = G50_DataManager_1.default.getInstance().getClientMoney(item.bonus).currency();
          }
        });
      };
      G50_GameUI.prototype.openJackpotPanel = function(p_freeGameGetScore, level) {
        this.jackpotPanel.open(p_freeGameGetScore, level);
      };
      G50_GameUI.prototype.closeJackpotPanel = function() {
        this.jackpotPanel.close();
      };
      G50_GameUI.prototype.setBetScorePanel = function(active) {
        this.betScore.node.parent.active = active;
      };
      G50_GameUI.prototype.showFXBoradLoop = function() {
        this.mainGameTip.parent.active = true;
      };
      G50_GameUI.prototype.showSpinButtonClickEffect = function() {
        this.spinButtonIdleEffect.getComponent(FXController_1.default).play();
        this.fxSpinOnce.forEach(function(fx) {
          return fx.play();
        });
      };
      G50_GameUI.prototype.showSpinButtonIdleEffect = function() {
        this.spinButtonIdleEffect.active = true;
        this.spinButtonIdleEffect.getComponent(FXController_1.default).play();
      };
      G50_GameUI.prototype.buttonGroupSwitch = function(p_active) {
        this.buttonGroup.active = p_active;
        this.buttonGroup_top.active = p_active;
        p_active && this.fxSpinOnce.forEach(function(fx) {
          return fx.stop();
        });
      };
      __decorate([ property(cc.Node) ], G50_GameUI.prototype, "baseGameBG", void 0);
      __decorate([ property(cc.Node) ], G50_GameUI.prototype, "freeGameBG", void 0);
      __decorate([ property([ cc.Node ]) ], G50_GameUI.prototype, "freeGameFX", void 0);
      __decorate([ property({
        readonly: true,
        displayName: "============ \u3010 \u9762\u677f \u3011 ============"
      }) ], G50_GameUI.prototype, "tip5String", void 0);
      __decorate([ property({
        type: G50_RulePanel_1.default,
        override: true
      }) ], G50_GameUI.prototype, "rulePanel", void 0);
      __decorate([ property(G50_FreeGamePanel_1.default) ], G50_GameUI.prototype, "freeGamePanel", void 0);
      __decorate([ property(G50_FreeGameGetScorePanel_1.default) ], G50_GameUI.prototype, "freeGameGetScorePanel", void 0);
      __decorate([ property({
        type: G50_AutoGamePanel_1.default,
        override: true
      }) ], G50_GameUI.prototype, "autoGamePanel", void 0);
      __decorate([ property({
        type: G50_MusicOptionPanel_1.default,
        override: true
      }) ], G50_GameUI.prototype, "musicOptionPanel", void 0);
      __decorate([ property({
        type: G50_SymbolTipPanel_1.default,
        override: true
      }) ], G50_GameUI.prototype, "symbolTipPanel", void 0);
      __decorate([ property({
        type: G50_JackpotPanel_1.default,
        override: true
      }) ], G50_GameUI.prototype, "jackpotPanel", void 0);
      __decorate([ property([ cc.Node ]) ], G50_GameUI.prototype, "mainGameOddsLabel", void 0);
      __decorate([ property(FXController_1.default) ], G50_GameUI.prototype, "fxFreegameOddsOnce", void 0);
      __decorate([ property([ cc.Node ]) ], G50_GameUI.prototype, "freegameOddsFrame", void 0);
      __decorate([ property([ cc.Node ]) ], G50_GameUI.prototype, "basegameOddsFrame", void 0);
      __decorate([ property(cc.Node) ], G50_GameUI.prototype, "freegameSlotUi", void 0);
      __decorate([ property(cc.Node) ], G50_GameUI.prototype, "basegameSlotUi", void 0);
      __decorate([ property(cc.Node) ], G50_GameUI.prototype, "buttonGroup_top", void 0);
      __decorate([ property([ cc.Label ]) ], G50_GameUI.prototype, "jackpotPoolScore", void 0);
      __decorate([ property(FXController_1.default) ], G50_GameUI.prototype, "fxBasegameWin", void 0);
      __decorate([ property(FXController_1.default) ], G50_GameUI.prototype, "fxFreegameWin", void 0);
      __decorate([ property([ FXController_1.default ]) ], G50_GameUI.prototype, "fxSpinOnce", void 0);
      __decorate([ property(cc.Node) ], G50_GameUI.prototype, "remainingFreeGameRoot", void 0);
      __decorate([ property(cc.Node) ], G50_GameUI.prototype, "spinMask2", void 0);
      G50_GameUI = __decorate([ ccclass ], G50_GameUI);
      return G50_GameUI;
    }(Slot_GameUI_1.default);
    exports.default = G50_GameUI;
    cc._RF.pop();
  }, {
    "../../../../Common/Optional/Crosis/FXController/FXController": void 0,
    "../../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../../Common/Tools/Localization/LocalizationManager": void 0,
    "../../../../Common/Tools/OrientationTool/OrientationToolManager": void 0,
    "../../../../SlotFramework/Game/view/Slot_GameUI": void 0,
    "../../../Common/script/G50_DataManager": "G50_DataManager",
    "../../../Common/script/G50_DynamicPopUpPanelManager": "G50_DynamicPopUpPanelManager",
    "./G50_AutoGamePanel": "G50_AutoGamePanel",
    "./G50_FreeGameGetScorePanel": "G50_FreeGameGetScorePanel",
    "./G50_FreeGamePanel": "G50_FreeGamePanel",
    "./G50_JackpotPanel": "G50_JackpotPanel",
    "./G50_MusicOptionPanel": "G50_MusicOptionPanel",
    "./G50_RulePanel": "G50_RulePanel",
    "./G50_SymbolTipPanel": "G50_SymbolTipPanel"
  } ],
  G50_Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "de210qwAddFvLmMBhti/jlG", "G50_Game");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var G50_GameUI_1 = require("./view/G50_GameUI");
    var G50_DataManager_1 = require("../../Common/script/G50_DataManager");
    var AudioManager_1 = require("../../../Common/Tools/AudioManager/AudioManager");
    var G50_SocketManager_1 = require("../../Common/script/socket/G50_SocketManager");
    var Slot_GameUI_1 = require("../../../SlotFramework/Game/view/Slot_GameUI");
    var LocalizationManager_1 = require("../../../Common/Tools/Localization/LocalizationManager");
    var Slot_GameManager_1 = require("../../../SlotFramework/Game/Slot_GameManager");
    var Slot_ReelManager_ScrollData_1 = require("../../../SlotFramework/Game/Data/Slot_ReelManager_ScrollData");
    var G50_SlotReelManager_1 = require("./view/G50_SlotReelManager");
    var Slot_GameManager_InitData_1 = require("../../../SlotFramework/Game/Data/Slot_GameManager_InitData");
    var Slot_GameUI_InitData_1 = require("../../../SlotFramework/Game/Data/Slot_GameUI_InitData");
    var Slot_ReelManager_InitData_1 = require("../../../SlotFramework/Game/Data/Slot_ReelManager_InitData");
    var HtmlBg_1 = require("../../../Common/Tools/HtmlBg/HtmlBg");
    var Slot_DataManager_1 = require("../../../SlotFramework/Slot_DataManager");
    var G50_DynamicPopUpPanelManager_1 = require("../../Common/script/G50_DynamicPopUpPanelManager");
    var G50_Reel_1 = require("./view/G50_Reel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GAME_STATUS;
    (function(GAME_STATUS) {
      GAME_STATUS[GAME_STATUS["NONE"] = 0] = "NONE";
      GAME_STATUS[GAME_STATUS["IDLE"] = 1] = "IDLE";
      GAME_STATUS[GAME_STATUS["SERVER_REQUEST"] = 2] = "SERVER_REQUEST";
      GAME_STATUS[GAME_STATUS["SPIN"] = 3] = "SPIN";
      GAME_STATUS[GAME_STATUS["FREE_GAME_TIP"] = 4] = "FREE_GAME_TIP";
      GAME_STATUS[GAME_STATUS["FREE_GAME"] = 5] = "FREE_GAME";
      GAME_STATUS[GAME_STATUS["FREE_GAME_REWARD"] = 6] = "FREE_GAME_REWARD";
      GAME_STATUS[GAME_STATUS["BOUNS_GAME"] = 7] = "BOUNS_GAME";
      GAME_STATUS[GAME_STATUS["BOUNS_GAME_REWARD"] = 8] = "BOUNS_GAME_REWARD";
      GAME_STATUS[GAME_STATUS["FREE_GAME_WIN_SCORE_EFFECT"] = 9] = "FREE_GAME_WIN_SCORE_EFFECT";
      GAME_STATUS[GAME_STATUS["CHANGE_PANEL"] = 10] = "CHANGE_PANEL";
    })(GAME_STATUS || (GAME_STATUS = {}));
    var FREEGAME_WIN_SCORE_EFFECT_STATUS;
    (function(FREEGAME_WIN_SCORE_EFFECT_STATUS) {
      FREEGAME_WIN_SCORE_EFFECT_STATUS[FREEGAME_WIN_SCORE_EFFECT_STATUS["NONE"] = 0] = "NONE";
      FREEGAME_WIN_SCORE_EFFECT_STATUS[FREEGAME_WIN_SCORE_EFFECT_STATUS["WIN_SCORE_EFFECT_START"] = 1] = "WIN_SCORE_EFFECT_START";
      FREEGAME_WIN_SCORE_EFFECT_STATUS[FREEGAME_WIN_SCORE_EFFECT_STATUS["WIN_SCORE_EFFECT_ING"] = 2] = "WIN_SCORE_EFFECT_ING";
      FREEGAME_WIN_SCORE_EFFECT_STATUS[FREEGAME_WIN_SCORE_EFFECT_STATUS["WIN_SCORE_EFFECT_END"] = 3] = "WIN_SCORE_EFFECT_END";
    })(FREEGAME_WIN_SCORE_EFFECT_STATUS || (FREEGAME_WIN_SCORE_EFFECT_STATUS = {}));
    var SPIN_STATUS;
    (function(SPIN_STATUS) {
      SPIN_STATUS[SPIN_STATUS["NONE"] = 0] = "NONE";
      SPIN_STATUS[SPIN_STATUS["REEL_SCROLL_START"] = 1] = "REEL_SCROLL_START";
      SPIN_STATUS[SPIN_STATUS["REEL_SCROLL_ING"] = 2] = "REEL_SCROLL_ING";
      SPIN_STATUS[SPIN_STATUS["REEL_SCROLL_END"] = 3] = "REEL_SCROLL_END";
      SPIN_STATUS[SPIN_STATUS["CHECK_REWARD"] = 4] = "CHECK_REWARD";
      SPIN_STATUS[SPIN_STATUS["REWARD_EFFECT_START"] = 5] = "REWARD_EFFECT_START";
      SPIN_STATUS[SPIN_STATUS["REWARD_EFFECT_ING"] = 6] = "REWARD_EFFECT_ING";
      SPIN_STATUS[SPIN_STATUS["REWARD_EFFECT_END"] = 7] = "REWARD_EFFECT_END";
      SPIN_STATUS[SPIN_STATUS["SYMBOL_DISAPPEAR_START"] = 8] = "SYMBOL_DISAPPEAR_START";
      SPIN_STATUS[SPIN_STATUS["SYMBOL_DISAPPEAR_ING"] = 9] = "SYMBOL_DISAPPEAR_ING";
      SPIN_STATUS[SPIN_STATUS["SYMBOL_DISAPPEAR_END"] = 10] = "SYMBOL_DISAPPEAR_END";
      SPIN_STATUS[SPIN_STATUS["SYMBOL_DROP_START"] = 11] = "SYMBOL_DROP_START";
      SPIN_STATUS[SPIN_STATUS["SYMBOL_DROP_ING"] = 12] = "SYMBOL_DROP_ING";
      SPIN_STATUS[SPIN_STATUS["SYMBOL_DROP_END"] = 13] = "SYMBOL_DROP_END";
      SPIN_STATUS[SPIN_STATUS["JACKPOT_START"] = 14] = "JACKPOT_START";
      SPIN_STATUS[SPIN_STATUS["JACKPOT_ING"] = 15] = "JACKPOT_ING";
      SPIN_STATUS[SPIN_STATUS["WIN_SCORE_EFFECT_START"] = 16] = "WIN_SCORE_EFFECT_START";
      SPIN_STATUS[SPIN_STATUS["WIN_SCORE_EFFECT_ING"] = 17] = "WIN_SCORE_EFFECT_ING";
      SPIN_STATUS[SPIN_STATUS["WIN_SCORE_EFFECT_END"] = 18] = "WIN_SCORE_EFFECT_END";
      SPIN_STATUS[SPIN_STATUS["FINISHED_WAIT"] = 19] = "FINISHED_WAIT";
      SPIN_STATUS[SPIN_STATUS["FINISHED"] = 20] = "FINISHED";
    })(SPIN_STATUS || (SPIN_STATUS = {}));
    var G50_Game = function(_super) {
      __extends(G50_Game, _super);
      function G50_Game() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.slotReelManager = null;
        _this.ui = null;
        _this.spinCD = 1;
        _this.normalSpinFinishedStopTime = .5;
        _this.fastSpinFinishedStopTime = .2;
        _this.normalUpdateTipBroadEffectTime = .1;
        _this.autoSpinUpdateTipBroadEffectTime = .9;
        _this.normalRewardTime = 1;
        _this.autoRewardTime = 1;
        _this.scatterShowTime = 3;
        _this.showOmenScatterCount = 3;
        _this.data = null;
        _this.socket = null;
        _this.popup = null;
        _this.gameStatus = GAME_STATUS.NONE;
        _this.spinStatus = SPIN_STATUS.NONE;
        _this.freeGameWinScoreEffectStatus = FREEGAME_WIN_SCORE_EFFECT_STATUS.NONE;
        _this.eliminateListIndex = 0;
        _this.competitionStartFontSize1 = 30;
        _this.competitionStartFontColor1 = "#FFFFFF";
        _this.competitionStartFontSize2 = 30;
        _this.competitionStartFontColor2 = "#DC5050";
        _this.mainGameOddsIndex = 1;
        return _this;
      }
      G50_Game.prototype.start = function() {
        var _this = this;
        HtmlBg_1.default.setBg(G50_DataManager_1.default.getInstance().gameID, "Resources/G50_com_bg_HTML", new cc.Size(720, 1680));
        this.socket = G50_SocketManager_1.default.getInstance();
        this.data = G50_DataManager_1.default.getInstance();
        this.popup = G50_DynamicPopUpPanelManager_1.default.getInstance();
        _super.prototype.start.call(this);
        var _data = new Slot_GameManager_InitData_1.default();
        _data.bundleName = "G" + G50_DataManager_1.default.getInstance().gameID;
        _data.bundlePath = "" + G50_DataManager_1.default.getInstance().path;
        this.init(_data);
        this.socket.setOnGetInitialReelInfoEvent().then(function(p_data) {
          _this.setReelInfo(p_data);
          _this.playerLogin();
          _this.ui.loadingUIFadeOut();
          _this.gameStatus = GAME_STATUS.IDLE;
        });
      };
      G50_Game.prototype.onDisable = function() {
        _super.prototype.onDisable.call(this);
        AudioManager_1.AudioManager.instance.playAudioEvent("GameExit");
      };
      G50_Game.prototype.init = function(p_data) {
        _super.prototype.init.call(this, p_data);
        this.data = G50_DataManager_1.default.getInstance();
        this.data.init();
        var _data = new Slot_ReelManager_InitData_1.default();
        _data.bundleName = p_data.bundleName;
        _data.bundlePath = p_data.bundlePath;
        this.slotReelManager.init(_data);
        var _uiData = new Slot_GameUI_InitData_1.default();
        _uiData.bundleName = p_data.bundleName;
        _uiData.bundlePath = p_data.bundlePath;
        _uiData.dataManager = this.data;
        this.ui.init(_uiData);
        this.ui.setVersion(this.data.gameVersion);
        this.registerEvents();
        AudioManager_1.AudioManager.instance.playAudioEvent("GameInit");
      };
      G50_Game.prototype.update = function(dt) {
        if (this.toFastStopSpin && this.tempSpinCD > this.spinCD) {
          this.stopSpin();
          this.toFastStopSpin = false;
        }
        if (this.gameStatus == GAME_STATUS.SPIN || this.gameStatus == GAME_STATUS.FREE_GAME) {
          this.tempSpinCD += dt;
          switch (this.spinStatus) {
           case SPIN_STATUS.REEL_SCROLL_START:
            this.reelScrollStart();
            break;

           case SPIN_STATUS.REEL_SCROLL_ING:
            this.reelScrolling();
            break;

           case SPIN_STATUS.REEL_SCROLL_END:
            this.reelScrollEnd();
            break;

           case SPIN_STATUS.CHECK_REWARD:
            this.checkReward();
            break;

           case SPIN_STATUS.REWARD_EFFECT_START:
            this.rewardEffectStart();
            break;

           case SPIN_STATUS.REWARD_EFFECT_ING:
            this.rewardEffecting();
            break;

           case SPIN_STATUS.REWARD_EFFECT_END:
            this.rewardEffectEnd();
            break;

           case SPIN_STATUS.SYMBOL_DISAPPEAR_START:
            this.symbolDisappearStart();
            break;

           case SPIN_STATUS.SYMBOL_DISAPPEAR_ING:
            this.symbolDisappearIng();
            break;

           case SPIN_STATUS.SYMBOL_DISAPPEAR_END:
            this.symbolDisappearEnd();
            break;

           case SPIN_STATUS.SYMBOL_DROP_START:
            this.symbolDropStart();
            break;

           case SPIN_STATUS.SYMBOL_DROP_ING:
            this.symbolDropIng();
            break;

           case SPIN_STATUS.SYMBOL_DROP_END:
            this.symbolDropEnd();
            break;

           case SPIN_STATUS.JACKPOT_START:
            this.getJackpotStart();
            break;

           case SPIN_STATUS.JACKPOT_ING:
            this.getJackpotIng();
            break;

           case SPIN_STATUS.WIN_SCORE_EFFECT_START:
            this.winScoreEffectStart();
            break;

           case SPIN_STATUS.WIN_SCORE_EFFECT_ING:
            this.winScoreEffectIng();
            break;

           case SPIN_STATUS.WIN_SCORE_EFFECT_END:
            this.winScoreEffectEnd();
            break;

           case SPIN_STATUS.FINISHED_WAIT:
            this.spinFinishedWait(dt);
            break;

           case SPIN_STATUS.FINISHED:
            this.spinFinished();
          }
        } else if (this.gameStatus == GAME_STATUS.FREE_GAME_WIN_SCORE_EFFECT) switch (this.freeGameWinScoreEffectStatus) {
         case FREEGAME_WIN_SCORE_EFFECT_STATUS.WIN_SCORE_EFFECT_START:
          this.freeGameWinScoreEffectStart();
          break;

         case FREEGAME_WIN_SCORE_EFFECT_STATUS.WIN_SCORE_EFFECT_ING:
          this.freeGameWinScoreEffectIng();
          break;

         case FREEGAME_WIN_SCORE_EFFECT_STATUS.WIN_SCORE_EFFECT_END:
          this.freeGameWinScoreEffectEnd();
        } else if (this.gameStatus == GAME_STATUS.IDLE && this.isChangeMoney) {
          this.isChangeMoney = false;
          this.data.coin = this.data.getClientMoney(this.newMoney);
          this.ui.setScore(this.data.coin);
        }
      };
      G50_Game.prototype.registerEvents = function() {
        var _this = this;
        G50_SocketManager_1.default.getInstance().setBalanceModifyCallback(function(data) {
          _this.onBalanceModifyEvent(data);
        });
        cc.systemEvent.on("ON_REFRESH_JACKPOT_NOTICE", this.onRefreshJackpotNotice, this);
      };
      G50_Game.prototype.showSymbolTip = function(symbolID, position) {
        this.gameStatus == GAME_STATUS.IDLE && _super.prototype.showSymbolTip.call(this, symbolID, position);
      };
      G50_Game.prototype.baseGameSpin_Response = function(p_data) {
        this.ui.showSpinMask();
        if (this.data.isAutoSpin) {
          this.autoSpinCount++;
          this.ui.openCancelAutoSpinButton();
          var _autoSpinCount = this.data.autoGameSpinCount - this.autoSpinCount;
          -1 == this.data.autoGameSpinCount && (_autoSpinCount = -1);
          this.ui.setAutoSpinCount(_autoSpinCount);
        }
        this.tempSpinCD = 0;
        this.toFastStopSpin = false;
        this.eliminateListIndex = 0;
        this.data.isWinScatter = false;
        this.resultListIndex = 0;
        this.data.coin = this.data.getClientMoney(p_data.currentCash);
        this.data.totalBonus = this.data.getClientMoney(p_data.totalBonus);
        this.data.playerBetScore = this.data.getClientMoney(p_data.totalBet);
        this.data.resultList = p_data.resultList;
        this.data.remainingFreeGameCount = 0;
        this.data.getJackpot = p_data.getJackpot;
        var _money = this.data.getClientMoney(p_data.currentCash - p_data.totalBonus);
        this.ui.setScore(_money);
        this.ui.setWinScore(0);
        this.ui.setSpinArrowSpinningSpeed(Slot_GameUI_1.SPIN_ARROW_SPINNIG_TYPE.FAST);
        this.gameStatus = GAME_STATUS.SPIN;
        this.spinStatus = SPIN_STATUS.REEL_SCROLL_START;
        this.ui.spinButton.getComponent(cc.Button).interactable = true;
      };
      G50_Game.prototype.onRefreshJackpotNotice = function(data) {
        this.ui && this.ui.refreshJackpot(data);
      };
      G50_Game.prototype.onSpin = function() {
        var _this = this;
        cc.log("Spin");
        if (this.gameStatus == GAME_STATUS.SPIN && this.spinStatus == SPIN_STATUS.REEL_SCROLL_ING) this.toFastStopSpin = true; else if (this.gameStatus == GAME_STATUS.IDLE) {
          var _betScore = this.data.betOdds[this.data.betOddsStartIndex];
          if (false == this.hasEnoughBetScore()) {
            this.ui.showLackMoneyPanel();
            this.data.isAutoSpin && this.cancelAutoSpin();
          } else {
            false == this.data.isAutoSpin && this.ui.showSpinButtonClickEffect();
            AudioManager_1.AudioManager.instance.playAudioEvent("StartSpin");
            _super.prototype.onSpin.call(this);
            this.gameStatus = GAME_STATUS.SERVER_REQUEST;
            this.socket.setOnSpinBaseGameEvent({
              multiple: _betScore,
              ante: this.data.oneOddsScore
            }).then(function(baseGameSpinResponeData) {
              _this.baseGameSpin_Response(baseGameSpinResponeData);
            }).catch(function(error) {
              error.code == GameClient.errCode.RESPONSE_TIMED_OUT ? _this.socket.showErrorAlert(LocalizationManager_1.default.getInstance().get("ERROR_SOCKET_TIME_OUT"), null, function() {
                G50_SocketManager_1.default.getInstance().login();
              }) : error.code == GameClient.errCode.SLOT_INSUFFICIENT_BALANCE && _this.socket.showErrorAlert(LocalizationManager_1.default.getInstance().get("ERROR_NO_COIN"), null, function() {
                if (_this.data.isAutoSpin) {
                  _this.cancelAutoSpin();
                  _this.ui.hideSpinMask();
                  _this.ui.setSpinArrowSpinningSpeed(Slot_GameUI_1.SPIN_ARROW_SPINNIG_TYPE.NORMAL);
                }
              });
              _this.ui.spinButton.getComponent(cc.Button).interactable = true;
              _this.gameStatus = GAME_STATUS.IDLE;
            });
          }
        }
      };
      G50_Game.prototype.stopSpin = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("StopSpin");
        this.slotReelManager.stopAllReelScroll();
      };
      G50_Game.prototype.onCloseWinEffect = function() {
        this.ui.winScoreIsEndScore() ? this.winScoreEffectEnd() : this.ui.winScoreEffectToEndScore();
      };
      G50_Game.prototype.onStartAutoGame = function() {
        cc.error("\u958b\u59cb\u5206\u6578 " + this.data.coin + "\n \u65cb\u8f49\u6b21\u6578 " + this.data.autoGameSpinCount + "\n\u8f38\u5206\u505c\u6b62 " + this.data.autoGameScoreLessStop + "\n\u8d0f\u5206\u505c\u6b62 " + this.data.autoGameWinScoreStop);
        cc.log("\u8f38\u5206\u505c\u6b62 " + this.data.autoGameScoreLessStop);
        cc.log("\u8d0f\u5206\u505c\u6b62 " + this.data.autoGameWinScoreStop);
        AudioManager_1.AudioManager.instance.playAudioEvent("StartAutoGame");
        this.data.isAutoSpin = true;
        this.ui.autoSpinSwitch(true);
        this.autoSpinCount = 0;
        this.data.autoGameStartScore = this.data.coin;
        this.onSpin();
      };
      G50_Game.prototype.startFreeGame = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (this.gameStatus == GAME_STATUS.CHANGE_PANEL) return [ 2 ];
              cc.log("\u958b\u59cb\u514d\u8cbb\u904a\u6232");
              this.ui.changeMainGameOddsLabel(0);
              this.ui.changeToFreeGameBackGround();
              this.ui.setRemainingFreeGameCount(this.data.remainingFreeGameCount);
              this.ui.showRemainingFreeGameCount();
              return [ 4, this.ui.openFreeGamePanel(this.data.remainingFreeGameCount) ];

             case 1:
              _a.sent();
              return [ 4, this.ui.showFreeGameOddsTip() ];

             case 2:
              _a.sent();
              this.resultListIndex++;
              this.eliminateListIndex = 0;
              this.data.isWinScatter = false;
              this.freeGameOddsIndex = 1;
              this.gameStatus = GAME_STATUS.CHANGE_PANEL;
              this.saveBaseGameLastSymbol();
              this.slotReelManager.setNormalMode();
              this.slotReelManager.setReelTable(this.data.reelTable_FG);
              this.slotReelManager.allSymbolPlayIdleEffect();
              this.slotReelManager.hideMaskEffect();
              this.ui.closeFreeGamePanel();
              AudioManager_1.AudioManager.instance.playAudioEvent("StarFreeGame");
              this.gameStatus = GAME_STATUS.FREE_GAME;
              this.spinStatus = SPIN_STATUS.REEL_SCROLL_START;
              return [ 2 ];
            }
          });
        });
      };
      G50_Game.prototype.freeGameEnd = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _money, _winMoney;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (this.gameStatus == GAME_STATUS.CHANGE_PANEL) return [ 2 ];
              cc.log("\u514d\u8cbb\u904a\u6232\u7d50\u675f");
              AudioManager_1.AudioManager.instance.playAudioEvent("FreeGameEnd");
              _money = this.data.coin;
              _winMoney = this.data.totalBonus;
              this.gameStatus = GAME_STATUS.CHANGE_PANEL;
              this.ui.buttonGroupSwitch(true);
              this.ui.changeToBaseGameBackGround();
              this.slotReelManager.setReelTable(this.data.reelTable_BG);
              this.slotReelManager.setAllReelSymbol(this.baseGameLastSymbol);
              this.slotReelManager.allSymbolPlayIdleEffect();
              this.slotReelManager.hideMaskEffect();
              return [ 4, this.ui.closeFreeGameGetScorePanel() ];

             case 1:
              _a.sent();
              if (this.hasWinScoreEffect(_winMoney)) {
                this.spinStatus = SPIN_STATUS.NONE;
                this.freeGameWinScoreEffectStatus = FREEGAME_WIN_SCORE_EFFECT_STATUS.WIN_SCORE_EFFECT_START;
                this.gameStatus = GAME_STATUS.FREE_GAME_WIN_SCORE_EFFECT;
              } else {
                this.gameStatus = GAME_STATUS.IDLE;
                this.spinStatus = SPIN_STATUS.NONE;
                this.checkAutoGameContinue();
              }
              this.ui.menuButtonSwitch(true);
              this.ui.setScore(_money);
              this.ui.setWinScore(_winMoney);
              this.ui.showMainGameTip();
              this.ui.hideGetScoreTip();
              this.data.isFaseSpin && this.slotReelManager.setFastMode();
              return [ 2 ];
            }
          });
        });
      };
      G50_Game.prototype.reelScrollStart = function() {
        cc.log("\u3010\u8f2a\u5b50\u6efe\u52d5\u3011 \u958b\u59cb");
        var _targetIndex = this.data.resultList[this.resultListIndex].randomNumList;
        var _hasOmenReels = this.getHasOmenReels();
        this.data.isFaseSpin || AudioManager_1.AudioManager.instance.playAudioEvent("ReelScrollStart");
        var _scrollData = new Slot_ReelManager_ScrollData_1.default();
        _scrollData.targetSymbolIndex = _targetIndex;
        _scrollData.hasOmenReels = _hasOmenReels;
        this.data.isAutoSpin || this.gameStatus == GAME_STATUS.FREE_GAME ? _scrollData.rewardTime = this.autoRewardTime : _scrollData.rewardTime = this.normalRewardTime;
        this.ui.hideGetScoreTip();
        this.spinStatus = SPIN_STATUS.REEL_SCROLL_ING;
        if (this.gameStatus == GAME_STATUS.FREE_GAME) {
          this.data.remainingFreeGameCount--;
          this.ui.setRemainingFreeGameCount(this.data.remainingFreeGameCount);
          this.ui.showFreeGameTip();
          this.ui.changeFreeGameOddsLabel(1);
          _scrollData.isFreeGame = true;
        } else {
          this.ui.showMainGameTip();
          this.ui.changeMainGameOddsLabel(1);
        }
        G50_Reel_1.default.resetScatterSoundIdx();
        this.slotReelManager.scrollAllReels(_scrollData);
      };
      G50_Game.prototype.getHasOmenReels = function() {
        var _reelhasOmen = [];
        if (this.gameStatus == GAME_STATUS.FREE_GAME) return _reelhasOmen;
        var _symbolCount = 4;
        var _middleSymbol = Math.floor(_symbolCount / 2);
        var _targetIndex = this.data.resultList[this.resultListIndex].randomNumList;
        var _scatterCount = 0;
        for (var i = 0; i < _targetIndex.length; i++) {
          _scatterCount >= this.showOmenScatterCount - 1 ? _reelhasOmen[i] = true : _reelhasOmen[i] = false;
          for (var j = 0; j < _symbolCount; j++) {
            var _offset = _targetIndex[i] + (j - _middleSymbol);
            _offset < 0 ? _offset += this.data.reelTable_BG[i].length : _offset > this.data.reelTable_BG[i].length - 1 && (_offset -= this.data.reelTable_BG[i].length);
            this.data.reelTable_BG[i][_offset] == Slot_DataManager_1.SYMBOL_NAME.Scatter && _scatterCount++;
          }
        }
        return _reelhasOmen;
      };
      G50_Game.prototype.reelScrolling = function() {
        false == this.slotReelManager.isReelSrolling() && (this.spinStatus = SPIN_STATUS.REEL_SCROLL_END);
      };
      G50_Game.prototype.reelScrollEnd = function() {
        cc.log("\u3010\u8f2a\u5b50\u6efe\u52d5\u3011\u7d50\u675f");
        AudioManager_1.AudioManager.instance.playAudioEvent("AllReelStop");
        this.spinStatus = SPIN_STATUS.CHECK_REWARD;
      };
      G50_Game.prototype.checkReward = function() {
        cc.log("\u6aa2\u67e5\u4e2d\u734e");
        var _winBouns = this.data.getClientMoney(this.data.resultList[this.resultListIndex].totalWinBonus);
        if (this.hasEliminateData() || this.data.getJackpot) this.spinStatus = SPIN_STATUS.REWARD_EFFECT_START; else if (this.checkScatter()) if (this.gameStatus == GAME_STATUS.FREE_GAME) {
          this.spinStatus = SPIN_STATUS.REWARD_EFFECT_START;
          AudioManager_1.AudioManager.instance.playAudioEvent("FreeGameLevelUp");
        } else {
          this.spinStatus = SPIN_STATUS.REWARD_EFFECT_START;
          AudioManager_1.AudioManager.instance.playAudioEvent("GotFreeGame");
        } else this.hasWinScoreEffect(_winBouns) ? this.spinStatus = SPIN_STATUS.WIN_SCORE_EFFECT_START : this.spinStatus = SPIN_STATUS.FINISHED_WAIT;
      };
      G50_Game.prototype.hasEliminateData = function() {
        if (this.eliminateListIndex == this.data.resultList[this.resultListIndex].eliminateList.length) return false;
        if (this.data.resultList[this.resultListIndex].eliminateList[this.eliminateListIndex].winWayList.length > 0) return true;
        return false;
      };
      G50_Game.prototype.checkScatter = function() {
        if (this.data.resultList[this.resultListIndex].eliminateList[this.eliminateListIndex].scatter.count >= 3) {
          this.data.isWinScatter = true;
          this.data.remainingFreeGameCount += this.data.resultList[this.resultListIndex].eliminateList[this.eliminateListIndex].scatter.getSpins;
          return true;
        }
        return false;
      };
      G50_Game.prototype.rewardEffectStart = function() {
        cc.log("\u3010\u4e2d\u734e\u7279\u6548\u3011 \u958b\u59cb");
        var _winScore = this.data.getClientMoney(this.data.resultList[this.resultListIndex].eliminateList[this.eliminateListIndex].eliWinBonus);
        var _winPositstion = [];
        if (this.data.getJackpot) {
          _winPositstion = this.data.resultList[this.resultListIndex].jackpotBonus.jackpotPos;
          _winScore = this.data.getClientMoney(this.data.resultList[this.resultListIndex].jackpotBonus.winBonus);
        } else _winPositstion = this.data.isWinScatter ? this.data.resultList[this.resultListIndex].eliminateList[this.eliminateListIndex].scatter.scatterPos : this.data.resultList[this.resultListIndex].eliminateList[this.eliminateListIndex].totalWinPos;
        this.ui.addScore(_winScore);
        this.ui.addWinScore(_winScore);
        this.ui.showGetScoreTip(_winScore);
        this.ui.showSenceWinEffect(this.gameStatus === GAME_STATUS.FREE_GAME);
        this.ui.hideGameTip();
        this.slotReelManager.showSymbolReWardEffect(_winPositstion, false);
        this.playRewardSound();
        if (this.data.isWinScatter) {
          this.ui.hideGetScoreTip();
          this.ui.showFreeGameTip();
        }
        var hasWild = false;
        this.data.resultList[this.resultListIndex].eliminateList[this.eliminateListIndex].nextReels.forEach(function(element) {
          hasWild = element.includes(50);
          if (hasWild) {
            AudioManager_1.AudioManager.instance.playAudioEvent("WildSound");
            return;
          }
        });
        this.spinStatus = SPIN_STATUS.REWARD_EFFECT_ING;
      };
      G50_Game.prototype.playRewardSound = function() {
        var rewardAudio = this.gameStatus == GAME_STATUS.FREE_GAME ? "PlayRewardFree" : "PlayRewardMain";
        this.data.isWinScatter || AudioManager_1.AudioManager.instance.playAudioEvent(rewardAudio);
        cc.log("\u64ad\u653e\u4e2d\u734e\u97f3\u6548");
      };
      G50_Game.prototype.rewardEffecting = function() {
        false == this.slotReelManager.isRewardEffecting() && (this.spinStatus = SPIN_STATUS.REWARD_EFFECT_END);
      };
      G50_Game.prototype.rewardEffectEnd = function() {
        cc.log("\u3010\u4e2d\u734e\u7279\u6548\u3011 \u7d50\u675f");
        var _isEliminate = this.data.resultList[this.resultListIndex].eliminateList[this.eliminateListIndex].isEliminate;
        var _winBouns = this.data.getClientMoney(this.data.resultList[this.resultListIndex].totalWinBonus);
        var _isFreeGame = this.gameStatus == GAME_STATUS.FREE_GAME;
        if (this.data.getJackpot) this.spinStatus = SPIN_STATUS.JACKPOT_START; else if (_isEliminate) this.spinStatus = SPIN_STATUS.SYMBOL_DISAPPEAR_START; else {
          this.eliminateListIndex++;
          if (this.hasEliminateData()) {
            this.slotReelManager.allSymbolPlayIdleEffect();
            this.spinStatus = SPIN_STATUS.CHECK_REWARD;
          } else _isFreeGame || this.hasFreeGame() || !this.hasWinScoreEffect(_winBouns) ? _isFreeGame && this.hasWinScoreEffect(_winBouns) ? this.spinStatus = SPIN_STATUS.WIN_SCORE_EFFECT_START : this.spinStatus = SPIN_STATUS.FINISHED_WAIT : this.spinStatus = SPIN_STATUS.WIN_SCORE_EFFECT_START;
        }
      };
      G50_Game.prototype.symbolDisappearStart = function() {
        cc.log("\u3010\u7b26\u865f\u6d88\u5931\u3011 \u958b\u59cb");
        var _winPositstion = this.data.resultList[this.resultListIndex].eliminateList[this.eliminateListIndex].eliHitPos;
        var _nextReels = this.data.resultList[this.resultListIndex].eliminateList[this.eliminateListIndex].nextReels;
        if (this.hasEliminateData()) if (this.gameStatus == GAME_STATUS.FREE_GAME) {
          this.freeGameOddsIndex++;
          this.freeGameOddsIndex > 4 && (this.freeGameOddsIndex = 4);
          this.ui.changeFreeGameOddsLabel(this.freeGameOddsIndex);
        } else {
          this.mainGameOddsIndex++;
          this.mainGameOddsIndex > 4 && (this.mainGameOddsIndex = 4);
          this.ui.changeMainGameOddsLabel(this.mainGameOddsIndex);
        }
        this.slotReelManager.showSymbolDisappearEffect(_winPositstion, _nextReels);
        this.spinStatus = SPIN_STATUS.SYMBOL_DISAPPEAR_ING;
      };
      G50_Game.prototype.symbolDisappearIng = function() {
        false == this.slotReelManager.isSymbolDisappearEffecting() && (this.spinStatus = SPIN_STATUS.SYMBOL_DISAPPEAR_END);
      };
      G50_Game.prototype.symbolDisappearEnd = function() {
        cc.log("\u3010\u7b26\u865f\u6d88\u5931\u3011 \u7d50\u675f");
        this.spinStatus = SPIN_STATUS.SYMBOL_DROP_START;
      };
      G50_Game.prototype.symbolDropStart = function() {
        cc.log("\u3010\u7b26\u865f\u6389\u843d\u3011 \u958b\u59cb");
        var _winPositstion = this.data.resultList[this.resultListIndex].eliminateList[this.eliminateListIndex].eliHitPos;
        this.slotReelManager.symbolDropEffect(_winPositstion, this.getDropAudioLevel());
        this.spinStatus = SPIN_STATUS.SYMBOL_DROP_ING;
      };
      G50_Game.prototype.symbolDropIng = function() {
        false == this.slotReelManager.isSymbolDropEffecting() && (this.spinStatus = SPIN_STATUS.SYMBOL_DROP_END);
      };
      G50_Game.prototype.getDropAudioLevel = function() {
        var dropAudioLevel = this.eliminateListIndex + 1;
        dropAudioLevel > 4 && (dropAudioLevel = 4);
        this.gameStatus === GAME_STATUS.FREE_GAME && (dropAudioLevel += 4);
        return dropAudioLevel;
      };
      G50_Game.prototype.symbolDropEnd = function() {
        cc.log("\u3010\u7b26\u865f\u6389\u843d\u3011 \u7d50\u675f");
        this.eliminateListIndex++;
        this.slotReelManager.correctionSymbolOrder();
        this.spinStatus = SPIN_STATUS.CHECK_REWARD;
      };
      G50_Game.prototype.getJackpotStart = function() {
        return __awaiter(this, void 0, Promise, function() {
          var _winScore, count;
          var _this = this;
          return __generator(this, function(_a) {
            cc.log(" \u3010Get Jackpot\u3011 \u958b\u59cb");
            _winScore = this.data.getClientMoney(this.data.resultList[this.resultListIndex].jackpotBonus.winBonus);
            count = this.data.resultList[this.resultListIndex].jackpotBonus.count;
            switch (count) {
             case 1:
              AudioManager_1.AudioManager.instance.playAudioEvent("JackPotMini");
              break;

             case 2:
              AudioManager_1.AudioManager.instance.playAudioEvent("JackPotMinor");
              break;

             case 3:
              AudioManager_1.AudioManager.instance.playAudioEvent("JackPotMajor");
              break;

             case 4:
              AudioManager_1.AudioManager.instance.playAudioEvent("JackPotGrand");
            }
            this.ui.openJackpotPanel(_winScore, count);
            this.scheduleOnce(function() {
              _this.slotReelManager.hideMaskEffect();
              _this.ui.closeJackpotPanel();
            }, 5);
            this.spinStatus = SPIN_STATUS.JACKPOT_ING;
            return [ 2 ];
          });
        });
      };
      G50_Game.prototype.getJackpotIng = function() {
        if (false == this.ui.jackpotPanel.node.active) {
          AudioManager_1.AudioManager.instance.playAudioEvent("FreeGameEnd");
          this.spinStatus = SPIN_STATUS.FINISHED;
        }
      };
      G50_Game.prototype.winScoreEffectStart = function() {
        cc.log("\u3010 \u8d0f\u9322\u6548\u679c \u3011\u958b\u59cb");
        this.spinStatus = SPIN_STATUS.WIN_SCORE_EFFECT_ING;
        var _totalWinScore = this.data.getClientMoney(this.data.resultList[this.resultListIndex].totalWinBonus);
        var _betScore = this.data.playerBetScore;
        var _isFreeGame = this.gameStatus === GAME_STATUS.FREE_GAME;
        this.ui.showWinScoreEffect(_totalWinScore, _betScore, _isFreeGame);
      };
      G50_Game.prototype.winScoreEffectIng = function() {
        false == this.ui.isWinScoreEffecting() && (this.spinStatus = SPIN_STATUS.WIN_SCORE_EFFECT_END);
      };
      G50_Game.prototype.winScoreEffectEnd = function() {
        cc.log("\u3010 \u8d0f\u9322\u6548\u679c \u3011\u7d50\u675f");
        if (this.gameStatus == GAME_STATUS.FREE_GAME_WIN_SCORE_EFFECT) this.freeGameWinScoreEffectStatus = FREEGAME_WIN_SCORE_EFFECT_STATUS.WIN_SCORE_EFFECT_END; else {
          this.spinStatus = SPIN_STATUS.FINISHED_WAIT;
          this.gameStatus == GAME_STATUS.FREE_GAME ? AudioManager_1.AudioManager.instance.playAudioEvent("CloseWinScorePanelFreeGame") : AudioManager_1.AudioManager.instance.playAudioEvent("CloseWinScorePanel");
          this.ui.closeWinScoreEffect();
        }
      };
      G50_Game.prototype.spinFinishedWait = function(p_dt) {
        var _this = this;
        if (0 == this.tempWaitTime) {
          var _totalWinScore_1 = this.data.getClientMoney(this.data.resultList[this.resultListIndex].totalWinBonus);
          this.data.isFaseSpin ? this.tempSpinFinishedStopTime = this.fastSpinFinishedStopTime : this.tempSpinFinishedStopTime = this.normalSpinFinishedStopTime;
          if (_totalWinScore_1 > 0) {
            if (!this.data.isWinScatter) {
              var delaytime = 0;
              this.hasWinScoreEffect(_totalWinScore_1) && (delaytime = 1);
              this.scheduleOnce(function() {
                _this.ui.showTotalGetScore(_totalWinScore_1);
              }, delaytime);
            }
            this.data.isAutoSpin || this.gameStatus == GAME_STATUS.FREE_GAME ? this.tempSpinFinishedStopTime += this.autoSpinUpdateTipBroadEffectTime : this.tempSpinFinishedStopTime += this.normalUpdateTipBroadEffectTime;
          }
        }
        this.tempWaitTime += p_dt;
        if (this.tempWaitTime > this.tempSpinFinishedStopTime) {
          this.spinStatus = SPIN_STATUS.FINISHED;
          this.tempWaitTime = 0;
        }
      };
      G50_Game.prototype.spinFinished = function() {
        var _this = this;
        cc.log("\u3010Spin\u3011 \u7d50\u675f");
        if (this.gameStatus == GAME_STATUS.FREE_GAME) if (this.hasNextResultList()) {
          this.resultListIndex++;
          this.eliminateListIndex = 0;
          this.data.isWinScatter = false;
          this.freeGameOddsIndex = 1;
          this.ui.changeFreeGameOddsLabel(this.freeGameOddsIndex);
          this.slotReelManager.allSymbolPlayIdleEffect();
          this.spinStatus = SPIN_STATUS.REEL_SCROLL_START;
        } else {
          cc.log("\u958b\u555f\u514d\u8cbb\u904a\u6232\u7d50\u7b97\u9762\u677f");
          AudioManager_1.AudioManager.instance.playAudioEvent("OpenFreeGameGetScorePanel");
          var _freeGameWinMoney = this.data.totalBonus - this.data.getClientMoney(this.data.resultList[0].totalWinBonus);
          var _betScore = this.data.playerBetScore;
          this.ui.hideRemainingFreeGameCount();
          this.ui.openFreeGameGetScorePanel(_freeGameWinMoney, _betScore);
          this.ui.setSpinArrowSpinningSpeed(Slot_GameUI_1.SPIN_ARROW_SPINNIG_TYPE.NORMAL);
          this.gameStatus = GAME_STATUS.FREE_GAME_REWARD;
          this.spinStatus = SPIN_STATUS.NONE;
          setTimeout(function() {
            _this.gameStatus == GAME_STATUS.FREE_GAME_REWARD && _this.freeGameEnd();
          }, 5e3);
        } else {
          this.mainGameOddsIndex = 1;
          if (this.hasFreeGame()) cc.tween(this.node).call(function() {
            _this.gameStatus = GAME_STATUS.FREE_GAME_TIP;
          }).delay(this.scatterShowTime).call(function() {
            return __awaiter(_this, void 0, void 0, function() {
              var _freeGameCount;
              return __generator(this, function(_a) {
                _freeGameCount = this.data.remainingFreeGameCount;
                cc.log("\u958b\u8d77\u514d\u8cbb\u904a\u6232\u9762\u677f", _freeGameCount);
                this.startFreeGame();
                return [ 2 ];
              });
            });
          }).start(); else {
            this.gameStatus = GAME_STATUS.IDLE;
            this.spinStatus = SPIN_STATUS.NONE;
            this.ui.changeMainGameOddsLabel(this.mainGameOddsIndex);
            this.checkAutoGameContinue();
          }
        }
      };
      G50_Game.prototype.freeGameWinScoreEffectStart = function() {
        cc.log("\u3010\u514d\u8cbb\u904a\u6232 \u8d0f\u9322\u6548\u679c \u3011\u958b\u59cb");
        this.freeGameWinScoreEffectStatus = FREEGAME_WIN_SCORE_EFFECT_STATUS.WIN_SCORE_EFFECT_ING;
        var _totalWinScore = this.data.totalBonus;
        var _betScore = this.data.playerBetScore;
        var _isFreeGame = false;
        this.ui.showWinScoreEffect(_totalWinScore, _betScore, _isFreeGame);
      };
      G50_Game.prototype.freeGameWinScoreEffectIng = function() {
        false == this.ui.isWinScoreEffecting() && (this.freeGameWinScoreEffectStatus = FREEGAME_WIN_SCORE_EFFECT_STATUS.WIN_SCORE_EFFECT_END);
      };
      G50_Game.prototype.freeGameWinScoreEffectEnd = function() {
        cc.log("\u3010\u514d\u8cbb\u904a\u6232 \u8d0f\u9322\u6548\u679c \u3011\u7d50\u675f");
        this.freeGameWinScoreEffectStatus = FREEGAME_WIN_SCORE_EFFECT_STATUS.NONE;
        this.gameStatus = GAME_STATUS.IDLE;
        this.spinStatus = SPIN_STATUS.FINISHED_WAIT;
        AudioManager_1.AudioManager.instance.playAudioEvent("CloseWinScorePanel");
        this.ui.closeWinScoreEffect();
        this.checkAutoGameContinue();
      };
      G50_Game.prototype.hasNextResultList = function() {
        if (this.resultListIndex < this.data.resultList.length - 1) return true;
        return false;
      };
      G50_Game.prototype.hasFreeGame = function() {
        if (this.data.resultList.length > 1) return true;
        return false;
      };
      G50_Game.prototype.setReelInfo = function(p_data) {
        this.data.reelStartIndex = p_data.position;
        this.data.reelTable_BG = p_data.reels.BG;
        this.data.reelTable_FG = p_data.reels.FG;
        this.slotReelManager.setReelTable(this.data.reelTable_BG);
        this.slotReelManager.setReelStartIndex(this.data.reelStartIndex);
      };
      G50_Game.prototype.playerLogin = function() {
        this.data.betOddsStartIndex = this.data.getBetIndex();
        var _money = this.data.coin;
        var _betMoney = this.data.getClientMoney(this.data.betOdds[this.data.betOddsStartIndex] * this.data.oneOddsScore);
        this.ui.setScore(_money);
        this.ui.setBetScore(_betMoney);
        this.ui.setWinScore(0);
      };
      __decorate([ property({
        type: G50_SlotReelManager_1.default,
        override: true
      }) ], G50_Game.prototype, "slotReelManager", void 0);
      __decorate([ property({
        type: G50_GameUI_1.default,
        override: true
      }) ], G50_Game.prototype, "ui", void 0);
      __decorate([ property({
        type: cc.Float,
        displayName: "spin\u51b7\u537b\u6642\u9593",
        tooltip: "\u958b\u59cbSpin\u5f8c\u7684\u51b7\u537b\u6642\u9593\uff0c\u54ea\u4f86\u8b93\u6efe\u8f2a\u6703\u7a0d\u5fae\u6efe\u52d5\u5728\u505c\u6b62"
      }) ], G50_Game.prototype, "spinCD", void 0);
      __decorate([ property({
        type: cc.Float,
        displayName: "\u4e00\u822cspin\u7d50\u675f\u505c\u6b62\u6642\u9593"
      }) ], G50_Game.prototype, "normalSpinFinishedStopTime", void 0);
      __decorate([ property({
        type: cc.Float,
        displayName: "\u5feb\u901fspin\u7d50\u675f\u505c\u6b62\u6642\u9593"
      }) ], G50_Game.prototype, "fastSpinFinishedStopTime", void 0);
      __decorate([ property({
        type: cc.Float,
        displayName: "\u624b\u52d5Spin \u4e2d\u734e\u66f4\u65b0\u63d0\u793a\u9762\u677f\u7279\u6548\u6642\u9593",
        tooltip: "\u53ea\u6709\u5728\u4e2d\u734e\u7684\u6642\u5019\u624d\u6703\u5403\u9019\u500b\u53c3\u6578"
      }) ], G50_Game.prototype, "normalUpdateTipBroadEffectTime", void 0);
      __decorate([ property({
        type: cc.Float,
        displayName: "\u81ea\u52d5Spin \u4e2d\u734e\u66f4\u65b0\u63d0\u793a\u9762\u677f\u7279\u6548\u6642\u9593",
        tooltip: "\u53ea\u6709\u5728\u4e2d\u734e\u7684\u6642\u5019\u624d\u6703\u5403\u9019\u500b\u53c3\u6578"
      }) ], G50_Game.prototype, "autoSpinUpdateTipBroadEffectTime", void 0);
      __decorate([ property({
        type: cc.Float,
        displayName: "\u624b\u52d5Spin\u4e2d\u734e\u6642\u9593"
      }) ], G50_Game.prototype, "normalRewardTime", void 0);
      __decorate([ property({
        type: cc.Float,
        displayName: "\u81ea\u52d5Spin\u4e2d\u734e\u6642\u9593"
      }) ], G50_Game.prototype, "autoRewardTime", void 0);
      __decorate([ property({
        type: cc.Float,
        displayName: "scatter\u986f\u793a\u7684\u6642\u9593"
      }) ], G50_Game.prototype, "scatterShowTime", void 0);
      __decorate([ property({
        type: cc.Float,
        displayName: "\u51fa\u73fe\u9810\u5146\u7684Scatter\u6578\u91cf"
      }) ], G50_Game.prototype, "showOmenScatterCount", void 0);
      G50_Game = __decorate([ ccclass ], G50_Game);
      return G50_Game;
    }(Slot_GameManager_1.default);
    exports.default = G50_Game;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../Common/Tools/HtmlBg/HtmlBg": void 0,
    "../../../Common/Tools/Localization/LocalizationManager": void 0,
    "../../../SlotFramework/Game/Data/Slot_GameManager_InitData": void 0,
    "../../../SlotFramework/Game/Data/Slot_GameUI_InitData": void 0,
    "../../../SlotFramework/Game/Data/Slot_ReelManager_InitData": void 0,
    "../../../SlotFramework/Game/Data/Slot_ReelManager_ScrollData": void 0,
    "../../../SlotFramework/Game/Slot_GameManager": void 0,
    "../../../SlotFramework/Game/view/Slot_GameUI": void 0,
    "../../../SlotFramework/Slot_DataManager": void 0,
    "../../Common/script/G50_DataManager": "G50_DataManager",
    "../../Common/script/G50_DynamicPopUpPanelManager": "G50_DynamicPopUpPanelManager",
    "../../Common/script/socket/G50_SocketManager": "G50_SocketManager",
    "./view/G50_GameUI": "G50_GameUI",
    "./view/G50_Reel": "G50_Reel",
    "./view/G50_SlotReelManager": "G50_SlotReelManager"
  } ],
  G50_HistoryPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8180fq93HlDQoaOxlCdzepS", "G50_HistoryPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LocalizationManager_1 = require("../../../../Common/Tools/Localization/LocalizationManager");
    var WebHistoryPanel_1 = require("../../../../Common/Tools/WebHistoryPanel/WebHistoryPanel");
    var G50_DynamicPopUpPanelManager_1 = require("../../../Common/script/G50_DynamicPopUpPanelManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_HistoryPanel = function(_super) {
      __extends(G50_HistoryPanel, _super);
      function G50_HistoryPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dataManager = null;
        return _this;
      }
      Object.defineProperty(G50_HistoryPanel.prototype, "popupManager", {
        get: function() {
          return G50_DynamicPopUpPanelManager_1.default.getInstance();
        },
        enumerable: false,
        configurable: true
      });
      G50_HistoryPanel.prototype.openWebView = function() {
        return __awaiter(this, void 0, Promise, function() {
          var url, array;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.getWagerUrl() ];

             case 1:
              url = _a.sent();
              this.log("\u6ce8\u55ae\u7db2\u5740:" + url);
              if (!url || "" === url) return [ 2 ];
              if (-1 != url.indexOf("?")) {
                array = url.split("?")[1];
                if ("null" === array.split("=")[1]) {
                  console.error("socket getWagerUrl error: ");
                  this.popupManager.confirmSystemMsgDialogBox.show(LocalizationManager_1.default.getInstance().get("ERROR_SOCKET_ABNORMAL"), function() {
                    return window.location.reload();
                  });
                  return [ 2 ];
                }
              }
              this.webView.url = url;
              this.webView.enabled = true;
              return [ 2 ];
            }
          });
        });
      };
      G50_HistoryPanel = __decorate([ ccclass ], G50_HistoryPanel);
      return G50_HistoryPanel;
    }(WebHistoryPanel_1.default);
    exports.default = G50_HistoryPanel;
    cc._RF.pop();
  }, {
    "../../../../Common/Tools/Localization/LocalizationManager": void 0,
    "../../../../Common/Tools/WebHistoryPanel/WebHistoryPanel": void 0,
    "../../../Common/script/G50_DynamicPopUpPanelManager": "G50_DynamicPopUpPanelManager"
  } ],
  G50_JackpotPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d33dPDjuJF/73hXRXZ5eet", "G50_JackpotPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.JP_TIME_SCALE = exports.JP_LEVEL = void 0;
    var FXController_1 = require("../../../../Common/Optional/Crosis/FXController/FXController");
    var AudioManager_1 = require("../../../../Common/Tools/AudioManager/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var JP_LEVEL;
    (function(JP_LEVEL) {
      JP_LEVEL[JP_LEVEL["MINI"] = 1] = "MINI";
      JP_LEVEL[JP_LEVEL["MINOR"] = 2] = "MINOR";
      JP_LEVEL[JP_LEVEL["MAJOR"] = 3] = "MAJOR";
      JP_LEVEL[JP_LEVEL["GRAND"] = 4] = "GRAND";
    })(JP_LEVEL = exports.JP_LEVEL || (exports.JP_LEVEL = {}));
    var JP_TIME_SCALE;
    (function(JP_TIME_SCALE) {
      JP_TIME_SCALE[JP_TIME_SCALE["Start"] = .7] = "Start";
      JP_TIME_SCALE[JP_TIME_SCALE["Loop"] = 1] = "Loop";
    })(JP_TIME_SCALE = exports.JP_TIME_SCALE || (exports.JP_TIME_SCALE = {}));
    var G50_JackpotPanel = function(_super) {
      __extends(G50_JackpotPanel, _super);
      function G50_JackpotPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.jpScore = [];
        _this.fxJackpotLevel = [];
        _this.spJackpot = [];
        _this.fxStart = null;
        _this.score = null;
        _this.flyingCoin = [];
        _this.level = null;
        return _this;
      }
      G50_JackpotPanel.prototype.init = function() {
        this.node.active = false;
      };
      G50_JackpotPanel.prototype.open = function(p_freeGameGetScore, level) {
        this.level = level;
        this.node.setPosition(cc.Vec2.ZERO);
        this.playSpin();
        this.fxJackpotLevel.forEach(function(fxJp) {
          return fxJp.stop();
        });
        this.fxJackpotLevel[level - 1].play();
        this.fadeIn();
        var jpString = JP_LEVEL[this.level][0] + JP_LEVEL[this.level].slice(1).toLowerCase();
        AudioManager_1.AudioManager.instance.playAudioEvent("JackPot" + jpString);
        this.score.string = p_freeGameGetScore.toFixed(2);
      };
      G50_JackpotPanel.prototype.close = function() {
        this.fadeOut();
      };
      G50_JackpotPanel.prototype.fadeIn = function() {
        this.node.opacity = 0;
        this.node.active = true;
        cc.tween(this.node).to(.5, {
          opacity: 255
        }, {
          easing: "cubicInOut"
        }).start();
      };
      G50_JackpotPanel.prototype.fadeOut = function() {
        var _this = this;
        this.flyingCoin[this.level - 1].stop();
        cc.tween(this.node).to(.5, {
          opacity: 0
        }, {
          easing: "cubicInOut"
        }).call(function() {
          _this.node.active = false;
        }).start();
      };
      G50_JackpotPanel.prototype.playSpin = function() {
        var _this = this;
        var targetSpin = this.spJackpot[this.level - 1];
        targetSpin.timeScale = JP_TIME_SCALE.Start;
        targetSpin.setAnimation(0, JP_LEVEL[this.level] + "_Start", false);
        targetSpin.setCompleteListener(function() {
          targetSpin.setCompleteListener(null);
          targetSpin.timeScale = JP_TIME_SCALE.Loop;
          targetSpin.setAnimation(0, JP_LEVEL[_this.level] + "_Loop", true);
        });
      };
      __decorate([ property([ cc.Label ]) ], G50_JackpotPanel.prototype, "jpScore", void 0);
      __decorate([ property([ FXController_1.default ]) ], G50_JackpotPanel.prototype, "fxJackpotLevel", void 0);
      __decorate([ property([ sp.Skeleton ]) ], G50_JackpotPanel.prototype, "spJackpot", void 0);
      __decorate([ property(FXController_1.default) ], G50_JackpotPanel.prototype, "fxStart", void 0);
      __decorate([ property(cc.Label) ], G50_JackpotPanel.prototype, "score", void 0);
      __decorate([ property([ cc.ParticleSystem3D ]) ], G50_JackpotPanel.prototype, "flyingCoin", void 0);
      G50_JackpotPanel = __decorate([ ccclass ], G50_JackpotPanel);
      return G50_JackpotPanel;
    }(cc.Component);
    exports.default = G50_JackpotPanel;
    cc._RF.pop();
  }, {
    "../../../../Common/Optional/Crosis/FXController/FXController": void 0,
    "../../../../Common/Tools/AudioManager/AudioManager": void 0
  } ],
  G50_LoadingItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8922ZZDpBDO5pVkfFbPpoH", "G50_LoadingItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Slot_LoadingItem_1 = require("../../../SlotFramework/Common/Slot_LoadingItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_LoadingItem = function(_super) {
      __extends(G50_LoadingItem, _super);
      function G50_LoadingItem() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      G50_LoadingItem = __decorate([ ccclass ], G50_LoadingItem);
      return G50_LoadingItem;
    }(Slot_LoadingItem_1.default);
    exports.default = G50_LoadingItem;
    cc._RF.pop();
  }, {
    "../../../SlotFramework/Common/Slot_LoadingItem": void 0
  } ],
  G50_LoadingUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "256e01aI8lJhZwzFa2C64Yf", "G50_LoadingUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_LoadingUI = function(_super) {
      __extends(G50_LoadingUI, _super);
      function G50_LoadingUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      G50_LoadingUI.prototype.start = function() {
        this.init();
      };
      G50_LoadingUI.prototype.init = function() {
        this.registerEvents();
      };
      G50_LoadingUI.prototype.registerEvents = function() {};
      G50_LoadingUI.prototype.onDestroy = function() {};
      G50_LoadingUI = __decorate([ ccclass ], G50_LoadingUI);
      return G50_LoadingUI;
    }(cc.Component);
    exports.default = G50_LoadingUI;
    cc._RF.pop();
  }, {} ],
  G50_Loading_InitData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f0a8F0XZJKTYjFPx5hWF/0", "G50_Loading_InitData");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_Loading_InitData = function() {
      function G50_Loading_InitData() {}
      G50_Loading_InitData = __decorate([ ccclass ], G50_Loading_InitData);
      return G50_Loading_InitData;
    }();
    exports.default = G50_Loading_InitData;
    cc._RF.pop();
  }, {} ],
  G50_Loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a2b3cnWTQNNj5dNM/6Abbe0", "G50_Loading");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var G50_DataManager_1 = require("../../Common/script/G50_DataManager");
    var G50_SocketManager_1 = require("../../Common/script/socket/G50_SocketManager");
    var G50_DynamicPopUpPanelManager_1 = require("../../Common/script/G50_DynamicPopUpPanelManager");
    var AudioManager_1 = require("../../../Common/Tools/AudioManager/AudioManager");
    var Slot_LoadingManager_1 = require("../../../SlotFramework/Loading/Slot_LoadingManager");
    var HtmlBg_1 = require("../../../Common/Tools/HtmlBg/HtmlBg");
    var DesktopBrowserTransform_1 = require("../../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PRELOAD_RESOURCE_LIST = [ "Resources" ];
    var PRELOAD_SCENE_LIST = [ "G50_Lobby", "G50_Game" ];
    var preloadResources = [ {
      bundle: "G50",
      scene: {
        path: PRELOAD_SCENE_LIST
      },
      resource: {
        path: PRELOAD_RESOURCE_LIST
      },
      audio: {
        csvPath: "Resources/Audio/Audio - G50",
        path: [ "Resources/music", "Resources/sound" ]
      },
      loadRate: .97
    } ];
    var G50_Loading = function(_super) {
      __extends(G50_Loading, _super);
      function G50_Loading() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nowPercent = 0;
        return _this;
      }
      G50_Loading.prototype.onLoad = function() {
        DesktopBrowserTransform_1.default.needFixScreen = true;
        _super.prototype.onLoad.call(this);
        cc.game.setFrameRate(60);
        cc.view.enableAntiAlias(true);
        cc.dynamicAtlasManager.enabled = false;
        cc.macro.ENABLE_MULTI_TOUCH = false;
      };
      G50_Loading.prototype.start = function() {
        _super.prototype.start.call(this);
        this.processAsync().catch(function(err) {
          return cc.error(err);
        });
      };
      G50_Loading.prototype.processAsync = function() {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              AudioManager_1.AudioManager.delInstance();
              G50_DataManager_1.default.deleteInstance();
              return [ 4, G50_SocketManager_1.default.getInstance().connect() ];

             case 1:
              _a.sent();
              return [ 4, this.initGameConfig(G50_DataManager_1.default.getInstance()) ];

             case 2:
              _a.sent();
              HtmlBg_1.default.setBg(G50_DataManager_1.default.getInstance().gameID, "Resources/G50_com_bg_HTML", new cc.Size(720, 1680));
              return [ 4, _super.prototype.processAsync.call(this, preloadResources) ];

             case 3:
              _a.sent();
              this.processLogin(G50_SocketManager_1.default.getInstance());
              return [ 2 ];
            }
          });
        });
      };
      G50_Loading.prototype.onAssetLoadComplete = function(prefabs) {
        G50_DynamicPopUpPanelManager_1.default.getInstance().prestore(prefabs);
      };
      G50_Loading = __decorate([ ccclass ], G50_Loading);
      return G50_Loading;
    }(Slot_LoadingManager_1.default);
    exports.default = G50_Loading;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform": void 0,
    "../../../Common/Tools/HtmlBg/HtmlBg": void 0,
    "../../../SlotFramework/Loading/Slot_LoadingManager": void 0,
    "../../Common/script/G50_DataManager": "G50_DataManager",
    "../../Common/script/G50_DynamicPopUpPanelManager": "G50_DynamicPopUpPanelManager",
    "../../Common/script/socket/G50_SocketManager": "G50_SocketManager"
  } ],
  G50_LobbyUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "878f26UXdZG14w94LslwvOU", "G50_LobbyUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Slot_LobbyUI_1 = require("../../../../SlotFramework/Lobby/Slot_LobbyUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_LobbyUI = function(_super) {
      __extends(G50_LobbyUI, _super);
      function G50_LobbyUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      G50_LobbyUI.prototype.init = function(p_data) {
        _super.prototype.init.call(this, p_data);
      };
      G50_LobbyUI.prototype.setPlayerIcon = function(p_iconIndex) {};
      G50_LobbyUI = __decorate([ ccclass ], G50_LobbyUI);
      return G50_LobbyUI;
    }(Slot_LobbyUI_1.default);
    exports.default = G50_LobbyUI;
    cc._RF.pop();
  }, {
    "../../../../SlotFramework/Lobby/Slot_LobbyUI": void 0
  } ],
  G50_Lobby: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "749213q5qVHyq7TQxRv/SPT", "G50_Lobby");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Slot_LobbyManager_1 = require("../../../SlotFramework/Lobby/Slot_LobbyManager");
    var G50_LobbyUI_1 = require("./view/G50_LobbyUI");
    var G50_DataManager_1 = require("../../Common/script/G50_DataManager");
    var G50_SocketManager_1 = require("../../Common/script/socket/G50_SocketManager");
    var LocalizationManager_1 = require("../../../Common/Tools/Localization/LocalizationManager");
    var Slot_LobbyManager_InitData_1 = require("../../../SlotFramework/Lobby/Data/Slot_LobbyManager_InitData");
    var Slot_LobbyUI_InitData_1 = require("../../../SlotFramework/Lobby/Data/Slot_LobbyUI_InitData");
    var HtmlBg_1 = require("../../../Common/Tools/HtmlBg/HtmlBg");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_Lobby = function(_super) {
      __extends(G50_Lobby, _super);
      function G50_Lobby() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ui = null;
        _this.data = null;
        _this.socket = null;
        return _this;
      }
      G50_Lobby.prototype.start = function() {
        HtmlBg_1.default.setBg(G50_DataManager_1.default.getInstance().gameID, "Resources/G50_com_bg_HTML", new cc.Size(720, 1680));
        _super.prototype.start.call(this);
        this.socket = G50_SocketManager_1.default.getInstance();
        var _data = new Slot_LobbyManager_InitData_1.default();
        _data.bundleName = "G" + G50_DataManager_1.default.getInstance().gameID;
        _data.bundlePath = "" + G50_DataManager_1.default.getInstance().path;
        this.init(_data);
        this.onFastJoinGame();
      };
      G50_Lobby.prototype.onDestroy = function() {
        this.removeEvents();
      };
      G50_Lobby.prototype.init = function(p_data) {
        this.data = G50_DataManager_1.default.getInstance();
        this.data.init();
        this.registerEvents();
        _super.prototype.init.call(this, p_data);
        var _data = new Slot_LobbyUI_InitData_1.default();
        _data.bundleName = p_data.bundleName;
        _data.bundlePath = p_data.bundlePath;
        this.ui.init(_data);
      };
      G50_Lobby.prototype.registerEvents = function() {
        var _this = this;
        G50_SocketManager_1.default.getInstance().setSelfEnterEventCallback(function(data) {
          _this.onSelfEnterEvent(data);
        });
      };
      G50_Lobby.prototype.removeEvents = function() {
        G50_SocketManager_1.default.getInstance().setSelfEnterEventCallback(null);
      };
      G50_Lobby.prototype.onSelfEnterEvent = function(data) {
        G50_DataManager_1.default.getInstance().coin = G50_DataManager_1.default.getInstance().getClientMoney(data.Coin);
      };
      G50_Lobby.prototype.onBackButton = function() {
        cc.log("\u96e2\u958b");
      };
      G50_Lobby.prototype.onOpenHistoryButton = function() {
        cc.log("\u958b\u555f\u6b77\u53f2\u7d00\u9304");
      };
      G50_Lobby.prototype.onOpenMenuButton = function() {
        this.ui.openMenu();
      };
      G50_Lobby.prototype.onCloseMenuButton = function() {
        this.ui.closeMenu();
      };
      G50_Lobby.prototype.onChangeMachine = function() {
        cc.log("\u63db\u4e00\u6279");
      };
      G50_Lobby.prototype.onFastJoinGame = function() {
        var _this = this;
        cc.log("\u5feb\u901f\u52a0\u5165");
        this.socket.setOnFastChoseRoomEvent().then(function(data) {
          cc.director.loadScene("G50_Game");
        }).catch(function(error) {
          error.code == GameClient.errCode.RESPONSE_TIMED_OUT && _this.socket.showErrorAlert(LocalizationManager_1.default.getInstance().get("ERROR_SOCKET_TIME_OUT"), null, function() {
            G50_SocketManager_1.default.getInstance().login();
          });
        });
      };
      G50_Lobby.prototype.onChangePlayerHead = function() {
        cc.log("\u63db\u73a9\u5bb6\u982d\u50cf");
      };
      G50_Lobby.prototype.setPlayerInfo = function() {
        var _money = this.data.coin;
        this.ui.setPlayerInfo(this.data.nickname, this.data.avatarID, _money);
      };
      G50_Lobby.prototype.setRoomData = function() {
        cc.log("\u8a2d\u5b9a\u623f\u9593\u8cc7\u6599");
      };
      __decorate([ property(G50_LobbyUI_1.default) ], G50_Lobby.prototype, "ui", void 0);
      G50_Lobby = __decorate([ ccclass ], G50_Lobby);
      return G50_Lobby;
    }(Slot_LobbyManager_1.default);
    exports.default = G50_Lobby;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/HtmlBg/HtmlBg": void 0,
    "../../../Common/Tools/Localization/LocalizationManager": void 0,
    "../../../SlotFramework/Lobby/Data/Slot_LobbyManager_InitData": void 0,
    "../../../SlotFramework/Lobby/Data/Slot_LobbyUI_InitData": void 0,
    "../../../SlotFramework/Lobby/Slot_LobbyManager": void 0,
    "../../Common/script/G50_DataManager": "G50_DataManager",
    "../../Common/script/socket/G50_SocketManager": "G50_SocketManager",
    "./view/G50_LobbyUI": "G50_LobbyUI"
  } ],
  G50_MusicOptionPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "152f9NKCKBDyq7mhFmu3F5E", "G50_MusicOptionPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Slot_MusicOptionPanel_1 = require("../../../../SlotFramework/Game/Panel/Slot_MusicOptionPanel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_MusicOptionPanel = function(_super) {
      __extends(G50_MusicOptionPanel, _super);
      function G50_MusicOptionPanel() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      G50_MusicOptionPanel = __decorate([ ccclass ], G50_MusicOptionPanel);
      return G50_MusicOptionPanel;
    }(Slot_MusicOptionPanel_1.default);
    exports.default = G50_MusicOptionPanel;
    cc._RF.pop();
  }, {
    "../../../../SlotFramework/Game/Panel/Slot_MusicOptionPanel": void 0
  } ],
  G50_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a2c14GtaA9PdJUSOlFkT/MN", "G50_Reel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager_1 = require("../../../../Common/Tools/AudioManager/AudioManager");
    var Slot_Reel_1 = require("../../../../SlotFramework/Game/view/Slot_Reel");
    var G50_GameUI_1 = require("./G50_GameUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var STATUS;
    (function(STATUS) {
      STATUS[STATUS["IDLE"] = 0] = "IDLE";
      STATUS[STATUS["SCROLLING_UP"] = 1] = "SCROLLING_UP";
      STATUS[STATUS["SCROLLING"] = 2] = "SCROLLING";
      STATUS[STATUS["OMEN_SCROLLING"] = 3] = "OMEN_SCROLLING";
      STATUS[STATUS["REBOUND_ALIGNMENT"] = 4] = "REBOUND_ALIGNMENT";
      STATUS[STATUS["SLOWING"] = 5] = "SLOWING";
      STATUS[STATUS["SLOW_WAIT"] = 6] = "SLOW_WAIT";
      STATUS[STATUS["REBOUND"] = 7] = "REBOUND";
      STATUS[STATUS["REBOUND_WAIT"] = 8] = "REBOUND_WAIT";
      STATUS[STATUS["REWARD_EFFECTING"] = 9] = "REWARD_EFFECTING";
      STATUS[STATUS["SYMBOL_DISAPPEAR_EFFECTING"] = 10] = "SYMBOL_DISAPPEAR_EFFECTING";
      STATUS[STATUS["SYMBOL_DROP_EFFECTING"] = 11] = "SYMBOL_DROP_EFFECTING";
    })(STATUS || (STATUS = {}));
    var G50_Reel = function(_super) {
      __extends(G50_Reel, _super);
      function G50_Reel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.omenSymbolPoint = null;
        _this.fadeNode = [];
        _this.symbolsList = [];
        _this.nextReels = [];
        return _this;
      }
      G50_Reel_1 = G50_Reel;
      G50_Reel.prototype.update = function(dt) {
        switch (this.status) {
         case STATUS.SCROLLING_UP:
          this.scrollingUp(dt);
          break;

         case STATUS.SCROLLING:
          this.scrolling(dt);
          break;

         case STATUS.OMEN_SCROLLING:
          this.omenScrolling(dt);
          break;

         case STATUS.REBOUND_ALIGNMENT:
          this.reboundAlignment(dt);
          break;

         case STATUS.SLOWING:
          this.slowing();
          break;

         case STATUS.REBOUND:
          this.rebound();
          break;

         case STATUS.SYMBOL_DISAPPEAR_EFFECTING:
          this.symbolDisappearEffecting();
          break;

         case STATUS.SYMBOL_DROP_EFFECTING:
          this.symbolDropEffecting();
          break;

         case STATUS.REWARD_EFFECTING:
          this.rewardEffecting(dt);
        }
      };
      G50_Reel.prototype.init = function(p_data) {
        _super.prototype.init.call(this, p_data);
        this.omenSymbolPoint.x = -this.node.x;
      };
      G50_Reel.prototype.showOmenEffect = function() {
        var _this = this;
        _super.prototype.showOmenEffect.call(this);
        this.symbolsList.forEach(function(symbol) {
          symbol.node.setParent(_this.omenSymbolPoint);
        });
      };
      G50_Reel.prototype.closeOmenEffect = function() {
        var _this = this;
        _super.prototype.closeOmenEffect.call(this);
        this.symbolsList.forEach(function(symbol, i) {
          symbol.node.setParent(_this.node.parent);
        });
      };
      G50_Reel.prototype.omenScrolling = function(p_dt) {
        this.isShowOmenEffect || this.playOmenFade();
        _super.prototype.omenScrolling.call(this, p_dt);
      };
      G50_Reel.prototype.showSymbolDisappearEffect = function(p_winPosition, p_nextReels) {
        this.nextReels = p_nextReels;
        for (var i = 0; i < p_winPosition.length; i++) if (1 == p_winPosition[i]) for (var j = 0; j < this.symbolsList.length; j++) if (this.symbolsList[j].getOrder() - 2 == i) {
          this.symbolsList[j].playDisappearEffect(.1 * G50_Reel_1.disappearEffectDelayCount);
          G50_Reel_1.disappearEffectDelayCount += .4;
        }
        this.status = STATUS.SYMBOL_DISAPPEAR_EFFECTING;
      };
      G50_Reel.prototype.isSymbolDisappearEffecting = function() {
        return this.status == STATUS.SYMBOL_DISAPPEAR_EFFECTING;
      };
      G50_Reel.prototype.showSymbolDropEffect = function(p_winPosition) {
        var _disppearSymbolOrder = [];
        for (var i = 0; i < p_winPosition.length; i++) 1 == p_winPosition[i] && _disppearSymbolOrder.push(i + 2);
        this.undisappearDroping(_disppearSymbolOrder, p_winPosition);
        this.disppearSymbolToTop(_disppearSymbolOrder);
        this.changeDisppear(_disppearSymbolOrder);
        this.disappearDroping(_disppearSymbolOrder);
        this.status = STATUS.SYMBOL_DROP_EFFECTING;
      };
      G50_Reel.prototype.undisappearDroping = function(p_disppearSymbolOrder, p_winPosition) {
        var _symbolHeight = this.symbolsList[0].node.getContentSize().height * this.symbolsList[0].node.scaleY;
        for (var i = 2; i < this.symbolsList.length; i++) if (0 == p_winPosition[i - 2]) {
          var _symbolOrder = this.getSymbolOrder(i);
          var _targetPosition = this.getSymbolPosition(i - 1);
          var _dropCount = 0;
          for (var j = 0; j < p_disppearSymbolOrder.length; j++) if (i < p_disppearSymbolOrder[j]) {
            _targetPosition.y -= _symbolHeight + this.symbolSpacing;
            _dropCount++;
          }
          _dropCount > 0 && this.symbolsList[_symbolOrder].playDropEffect(0, _targetPosition);
        }
      };
      G50_Reel.prototype.disppearSymbolToTop = function(p_disppearSymbolOrder) {
        var _symbolHeight = this.symbolsList[0].node.getContentSize().height * this.symbolsList[0].node.scaleY;
        for (var i = 0; i < p_disppearSymbolOrder.length; i++) {
          var _targetPosition = this.getSymbolPosition(0);
          _targetPosition.y += (p_disppearSymbolOrder.length - 1 - i) * (_symbolHeight + this.symbolSpacing);
          var _symbolOrder = this.getSymbolOrder(p_disppearSymbolOrder[i]);
          this.symbolsList[_symbolOrder].node.setPosition(_targetPosition);
          this.symbolsList[_symbolOrder].node.opacity = 0;
        }
      };
      G50_Reel.prototype.changeDisppear = function(p_disppearSymbolOrder) {
        for (var i = 0; i < p_disppearSymbolOrder.length; i++) {
          var _newSymbolIndex = this.nextReels[i];
          var _symbolOrder = this.getSymbolOrder(p_disppearSymbolOrder[i]);
          var _symbolValue = _newSymbolIndex;
          this.symbolsList[_symbolOrder].setData(i, _symbolValue, this.isFreeGame);
        }
      };
      G50_Reel.prototype.disappearDroping = function(p_disppearSymbolOrder) {
        var _symbolHeight = this.symbolsList[0].node.getContentSize().height * this.symbolsList[0].node.scaleY;
        for (var i = 0; i < p_disppearSymbolOrder.length; i++) {
          var _undisppearSymbolCount = this.displaySymbolCount - p_disppearSymbolOrder.length;
          var _targetPosition = this.getSymbolPosition(this.symbolsList.length - 2);
          var _symbolOrder = this.getSymbolOrder(p_disppearSymbolOrder[i]);
          _targetPosition.y += _undisppearSymbolCount * (_symbolHeight + this.symbolSpacing);
          _targetPosition.y += (p_disppearSymbolOrder.length - 1 - i) * (_symbolHeight + this.symbolSpacing);
          this.symbolsList[_symbolOrder].playDropEffect(0, _targetPosition);
        }
      };
      G50_Reel.prototype.correctionSymbolOrder = function() {
        for (var i = 0; i < this.symbolsList.length; i++) for (var j = 0; j < this.symbolsList.length; j++) {
          var _target = this.getSymbolPosition(j).y + this.symbolPrefab.getContentSize().height * this.symbolsList[0].node.scaleY + this.symbolSpacing;
          Math.abs(this.symbolsList[i].node.position.y - _target) < 10 && this.symbolsList[i].setOrder(j);
        }
      };
      G50_Reel.prototype.isSymbolDropEffecting = function() {
        return this.status == STATUS.SYMBOL_DROP_EFFECTING;
      };
      G50_Reel.prototype.getSymbolReWardPos = function(p_winPosition) {
        var list = [];
        for (var i = 0; i < p_winPosition.length; i++) if (1 == p_winPosition[i]) for (var j = 0; j < this.symbolsList.length; j++) this.symbolsList[j].getOrder() - 2 == i && list.push(this.symbolsList[j].node.position);
        return list;
      };
      G50_Reel.prototype.hideOutRangeSymbol = function(p_isInit) {
        void 0 === p_isInit && (p_isInit = false);
      };
      G50_Reel.prototype.symbolDisappearEffecting = function() {
        for (var i = 0; i < this.symbolsList.length; i++) if (this.symbolsList[i].isDisappearEffecting()) return;
        this.status = STATUS.IDLE;
      };
      G50_Reel.prototype.symbolDropEffecting = function() {
        for (var i = 0; i < this.symbolsList.length; i++) if (this.symbolsList[i].isDropEffecting()) return;
        this.status = STATUS.IDLE;
      };
      G50_Reel.prototype.reelsSpacingY = function() {
        switch (this.status) {
         case STATUS.SCROLLING_UP:
         case STATUS.SCROLLING:
         case STATUS.OMEN_SCROLLING:
         case STATUS.REBOUND_ALIGNMENT:
          this.orientationSyncY();
          break;

         case STATUS.REBOUND_WAIT:
         case STATUS.REBOUND:
          this.rebound();
          break;

         case STATUS.SLOWING:
         case STATUS.SLOW_WAIT:
          this.slowing();
          break;

         case STATUS.SYMBOL_DROP_EFFECTING:
          this.symbolsList.forEach(function(symbol) {
            return symbol.skipDropEffect();
          });
          for (var i = 2, j = 0; i < this.symbolsList.length; i++, j++) {
            var index = this.getSymbolOrder(i);
            this.symbolsList[index].setData(index, this.nextReels[j], this.isFreeGame);
          }

         default:
          for (var i = 0; i < this.symbolsList.length; i++) {
            var _symbolCount = this.symbolsList.length;
            var _addtion = 0;
            _symbolCount % 2 == 0 && (_addtion = -this.symbolPrefab.getContentSize().height * this.symbolsList[0].node.scaleY / 2);
            var _middleOrder = Math.floor(_symbolCount / 2);
            var _times = -(this.symbolsList[i].getOrder() - _middleOrder);
            var _spacing = this.symbolPrefab.getContentSize().height * this.symbolsList[0].node.scaleY + this.symbolSpacing;
            var offset = _spacing * _times + _addtion;
            this.symbolsList[i].setSymbolY(offset + this.symbolPrefab.getContentSize().height * this.symbolsList[0].node.scaleY + this.symbolSpacing);
          }
        }
      };
      G50_Reel.resetScatterSoundIdx = function() {
        G50_Reel_1.scatterSoundIdx = 0;
      };
      G50_Reel.prototype.playScatterSound = function() {
        G50_Reel_1.scatterSoundIdx = Math.min(5, ++G50_Reel_1.scatterSoundIdx);
        AudioManager_1.AudioManager.instance.playAudioEvent("ScatterSound" + G50_Reel_1.scatterSoundIdx);
      };
      G50_Reel.prototype.scrollingUp = function(p_dt) {
        this.tempScrollTime += p_dt;
        if (this.tempScrollTime >= this.scrollStartDelayTime) {
          var _movePositionY = (this.symbolsList[0].node.height * this.symbolsList[0].node.scaleY + this.symbolSpacing) * this.scrollingUpRange * (p_dt / this.scrollingUpTime);
          for (var i = 0; i < this.symbolsList.length; i++) {
            this.symbolsList[i].node.y += _movePositionY;
            this.symbolsList[i].closeAllEffect();
          }
          this.tempScrollTime > this.scrollStartDelayTime + this.scrollingUpTime && (this.status = STATUS.SCROLLING);
        }
      };
      G50_Reel.prototype.playOmenFade = function() {
        var _this = this;
        var minOpacity = 84.15;
        var maxOpacity = 255;
        this.fadeNode.forEach(function(node) {
          node.opacity = minOpacity;
          cc.tween(node).to(G50_GameUI_1.DURATION.FADE, {
            opacity: maxOpacity
          }).delay(_this.omenScrollingTime - 2 * G50_GameUI_1.DURATION.FADE).to(G50_GameUI_1.DURATION.FADE, {
            opacity: minOpacity
          }).start();
        });
      };
      var G50_Reel_1;
      G50_Reel.disappearEffectDelayCount = 0;
      G50_Reel.scatterSoundIdx = 0;
      __decorate([ property(cc.Node) ], G50_Reel.prototype, "omenSymbolPoint", void 0);
      __decorate([ property([ cc.Node ]) ], G50_Reel.prototype, "fadeNode", void 0);
      G50_Reel = G50_Reel_1 = __decorate([ ccclass ], G50_Reel);
      return G50_Reel;
    }(Slot_Reel_1.default);
    exports.default = G50_Reel;
    cc._RF.pop();
  }, {
    "../../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../../SlotFramework/Game/view/Slot_Reel": void 0,
    "./G50_GameUI": "G50_GameUI"
  } ],
  G50_RulePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5dfb8GCjF5JoJ/9AApKo9BR", "G50_RulePanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager_1 = require("../../../../Common/Tools/AudioManager/AudioManager");
    var Slot_RulePanel_1 = require("../../../../SlotFramework/Game/Panel/Slot_RulePanel");
    var G50_DataManager_1 = require("../../../Common/script/G50_DataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_RulePanel = function(_super) {
      __extends(G50_RulePanel, _super);
      function G50_RulePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.data = null;
        return _this;
      }
      G50_RulePanel.prototype.init = function() {
        this.data = G50_DataManager_1.default.getInstance();
        _super.prototype.init.call(this);
      };
      G50_RulePanel.prototype.onNextRulePage = function() {
        if (this.status == Slot_RulePanel_1.STATUS.CHANGE_PAGE) return;
        AudioManager_1.AudioManager.instance.playAudioEvent("NextRulePage");
        _super.prototype.onNextRulePage.call(this);
      };
      G50_RulePanel.prototype.onPreRulePage = function() {
        if (this.status == Slot_RulePanel_1.STATUS.CHANGE_PAGE) return;
        AudioManager_1.AudioManager.instance.playAudioEvent("PreRulePage");
        _super.prototype.onPreRulePage.call(this);
      };
      G50_RulePanel.prototype.open = function() {
        _super.prototype.open.call(this);
      };
      G50_RulePanel.prototype.close = function() {
        _super.prototype.close.call(this);
        AudioManager_1.AudioManager.instance.playAudioEvent("CloseRule");
      };
      G50_RulePanel = __decorate([ ccclass ], G50_RulePanel);
      return G50_RulePanel;
    }(Slot_RulePanel_1.default);
    exports.default = G50_RulePanel;
    cc._RF.pop();
  }, {
    "../../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../../SlotFramework/Game/Panel/Slot_RulePanel": void 0,
    "../../../Common/script/G50_DataManager": "G50_DataManager"
  } ],
  G50_SlotReelManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2978b3e735JdKeGkm/kCK3H", "G50_SlotReelManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Slot_ReelManager_1 = require("../../../../SlotFramework/Game/view/Slot_ReelManager");
    var G50_Reel_1 = require("./G50_Reel");
    var AudioManager_1 = require("../../../../Common/Tools/AudioManager/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var STATUS;
    (function(STATUS) {
      STATUS[STATUS["IDLE"] = 0] = "IDLE";
      STATUS[STATUS["SCROLLING"] = 1] = "SCROLLING";
      STATUS[STATUS["SCROLL_END"] = 2] = "SCROLL_END";
      STATUS[STATUS["RWARD_EFFECTING"] = 3] = "RWARD_EFFECTING";
      STATUS[STATUS["RWARD_EFFECTING_END"] = 4] = "RWARD_EFFECTING_END";
      STATUS[STATUS["DISAPPEAR_EFFECTING"] = 5] = "DISAPPEAR_EFFECTING";
      STATUS[STATUS["DROP_EFFECTING"] = 6] = "DROP_EFFECTING";
    })(STATUS || (STATUS = {}));
    var SYMBOL_LIST = [ "H1", "H2", "H3", "N1", "N2", "N3", "N4", "N5", "Scatter" ];
    var G50_SlotReelManager = function(_super) {
      __extends(G50_SlotReelManager, _super);
      function G50_SlotReelManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.preloadItem = null;
        _this.reelsList = [];
        return _this;
      }
      G50_SlotReelManager.prototype.init = function(p_data) {
        this.preloadAnimationState();
        _super.prototype.init.call(this, p_data);
      };
      G50_SlotReelManager.prototype.update = function(dt) {
        switch (this.status) {
         case STATUS.SCROLLING:
          this.scrolling();
          break;

         case STATUS.SCROLL_END:
          this.scrollEnd();
          break;

         case STATUS.RWARD_EFFECTING:
          this.rewardEffecting();
          break;

         case STATUS.RWARD_EFFECTING_END:
          this.rewardEffectEnd();
          break;

         case STATUS.DISAPPEAR_EFFECTING:
          this.disappearEffecting();
          break;

         case STATUS.DROP_EFFECTING:
          this.dropEffecting();
        }
      };
      G50_SlotReelManager.prototype.showSymbolDisappearEffect = function(p_winPosition, p_nextReels) {
        G50_Reel_1.default.disappearEffectDelayCount = 0;
        this.schedule(function() {
          AudioManager_1.AudioManager.instance.playAudioEvent("SymbolDisappearEffect");
        }, .003, p_winPosition.length, 0);
        for (var i = 0; i < p_winPosition.length; i++) this.reelsList[i].showSymbolDisappearEffect(p_winPosition[i], p_nextReels[i]);
        this.status = STATUS.DISAPPEAR_EFFECTING;
      };
      G50_SlotReelManager.prototype.isSymbolDisappearEffecting = function() {
        return this.status == STATUS.DISAPPEAR_EFFECTING;
      };
      G50_SlotReelManager.prototype.symbolDropEffect = function(p_winPosition, dropAudioLevel) {
        this.hideMaskEffect();
        this.scheduleOnce(function() {
          AudioManager_1.AudioManager.instance.playAudioEvent("SymbolDropStart" + dropAudioLevel);
        }, .003);
        for (var i = 0; i < p_winPosition.length; i++) this.reelsList[i].showSymbolDropEffect(p_winPosition[i]);
        this.status = STATUS.DROP_EFFECTING;
      };
      G50_SlotReelManager.prototype.isSymbolDropEffecting = function() {
        return this.status == STATUS.DROP_EFFECTING;
      };
      G50_SlotReelManager.prototype.correctionSymbolOrder = function() {
        for (var i = 0; i < this.reelsList.length; i++) this.reelsList[i].correctionSymbolOrder();
      };
      G50_SlotReelManager.prototype.getSymbolReWardPos = function(p_winPosition) {
        var list = [];
        for (var i = 0; i < p_winPosition.length; i++) this.reelsList[i].getSymbolReWardPos(p_winPosition[i]).forEach(function(pos) {
          return list.push(pos);
        });
        return list;
      };
      G50_SlotReelManager.prototype.disappearEffecting = function() {
        for (var i = 0; i < this.reelsList.length; i++) if (this.reelsList[i].isSymbolDisappearEffecting()) return;
        this.status = STATUS.IDLE;
      };
      G50_SlotReelManager.prototype.dropEffecting = function() {
        for (var i = 0; i < this.reelsList.length; i++) if (this.reelsList[i].isSymbolDropEffecting()) return;
        this.status = STATUS.IDLE;
      };
      G50_SlotReelManager.prototype.preloadAnimationState = function() {
        return __awaiter(this, void 0, void 0, function() {
          var i;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.preloadItem.timeScale = 10;
              i = 0;
              _a.label = 1;

             case 1:
              if (!(i < SYMBOL_LIST.length)) return [ 3, 6 ];
              this.preloadItem.setAnimation(0, SYMBOL_LIST[i] + "_play_normal", false);
              return [ 4, new Promise(function(res) {
                _this.preloadItem.setCompleteListener(function() {
                  _this.preloadItem.setCompleteListener(null);
                  res(true);
                });
              }) ];

             case 2:
              _a.sent();
              this.preloadItem.setAnimation(0, SYMBOL_LIST[i] + "_stop", false);
              return [ 4, new Promise(function(res) {
                _this.preloadItem.setCompleteListener(function() {
                  _this.preloadItem.setCompleteListener(null);
                  res(true);
                });
              }) ];

             case 3:
              _a.sent();
              this.preloadItem.setAnimation(0, SYMBOL_LIST[i] + "_play_win", false);
              return [ 4, new Promise(function(res) {
                _this.preloadItem.setCompleteListener(function() {
                  _this.preloadItem.setCompleteListener(null);
                  res(true);
                });
              }) ];

             case 4:
              _a.sent();
              _a.label = 5;

             case 5:
              i++;
              return [ 3, 1 ];

             case 6:
              this.preloadItem.node.active = false;
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(sp.Skeleton) ], G50_SlotReelManager.prototype, "preloadItem", void 0);
      G50_SlotReelManager = __decorate([ ccclass ], G50_SlotReelManager);
      return G50_SlotReelManager;
    }(Slot_ReelManager_1.default);
    exports.default = G50_SlotReelManager;
    cc._RF.pop();
  }, {
    "../../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../../SlotFramework/Game/view/Slot_ReelManager": void 0,
    "./G50_Reel": "G50_Reel"
  } ],
  G50_SlotReelUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "13c21rsE2NM47Q3GqcRYT41", "G50_SlotReelUtils");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var G50_DataManager_1 = require("../../Common/script/G50_DataManager");
    var G50_SocketManager_1 = require("../../Common/script/socket/G50_SocketManager");
    var G50_SlotReelManager_1 = require("./view/G50_SlotReelManager");
    var Slot_GameManager_InitData_1 = require("../../../SlotFramework/Game/Data/Slot_GameManager_InitData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_SlotReelUtils = function(_super) {
      __extends(G50_SlotReelUtils, _super);
      function G50_SlotReelUtils() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.omenMask = null;
        _this.content = null;
        _this.menuNode = null;
        _this.slotReelManager = null;
        _this.reelScrollUpTime = null;
        _this.reelScrollUpRange = null;
        _this.reelNormalScrollTime = null;
        _this.reelFastScrollTime = null;
        _this.reelMoveSpeed = null;
        _this.reelOmenScrollTime = null;
        _this.reelOmenSpeed = null;
        _this.omenSpeedMutly = null;
        _this.omenSlowTime = null;
        _this.hasLongWildScrollTime = null;
        _this.reelStartDelayTime = null;
        _this.reelStopDelayTime = null;
        _this.reelSlowTime = null;
        _this.reelReboundTime = null;
        _this.reelReboundRange = null;
        _this.socket = null;
        return _this;
      }
      G50_SlotReelUtils.prototype.start = function() {
        if (G50_DataManager_1.default.adjustMode) {
          this.node.setPosition(cc.Vec2.ZERO);
          this.menuNode.active = false;
        } else this.node.active = false;
        this.socket = G50_SocketManager_1.default.getInstance();
      };
      G50_SlotReelUtils.prototype.showMenu = function() {
        this.menuNode.active = true;
        this.showSlotReelData();
      };
      G50_SlotReelUtils.prototype.setSlotReelData = function() {
        "" != this.reelScrollUpTime.string && Reflect.defineProperty(this.slotReelManager, "reelScrollUpTime", {
          value: Number(this.reelScrollUpTime.string)
        });
        "" != this.reelScrollUpRange.string && Reflect.defineProperty(this.slotReelManager, "reelScrollUpRange", {
          value: Number(this.reelScrollUpRange.string)
        });
        "" != this.reelNormalScrollTime.string && Reflect.defineProperty(this.slotReelManager, "reelNormalScrollTime", {
          value: Number(this.reelNormalScrollTime.string)
        });
        "" != this.reelFastScrollTime.string && Reflect.defineProperty(this.slotReelManager, "reelFastScrollTime", {
          value: Number(this.reelFastScrollTime.string)
        });
        "" != this.reelMoveSpeed.string && Reflect.defineProperty(this.slotReelManager, "reelMoveSpeed", {
          value: Number(this.reelMoveSpeed.string)
        });
        "" != this.reelOmenScrollTime.string && Reflect.defineProperty(this.slotReelManager, "reelOmenScrollTime", {
          value: Number(this.reelOmenScrollTime.string)
        });
        "" != this.reelOmenSpeed.string && Reflect.defineProperty(this.slotReelManager, "reelOmenSpeed", {
          value: Number(this.reelOmenSpeed.string)
        });
        "" != this.omenSpeedMutly.string && Reflect.defineProperty(this.slotReelManager, "omenSpeedMutly", {
          value: Number(this.omenSpeedMutly.string)
        });
        "" != this.omenSlowTime.string && Reflect.defineProperty(this.slotReelManager, "omenSlowTime", {
          value: Number(this.omenSlowTime.string)
        });
        "" != this.hasLongWildScrollTime.string && Reflect.defineProperty(this.slotReelManager, "hasLongWildScrollTime", {
          value: Number(this.hasLongWildScrollTime.string)
        });
        "" != this.reelStartDelayTime.string && Reflect.defineProperty(this.slotReelManager, "reelStartDelayTime", {
          value: Number(this.reelStartDelayTime.string)
        });
        "" != this.reelStopDelayTime.string && Reflect.defineProperty(this.slotReelManager, "reelStopDelayTime", {
          value: Number(this.reelStopDelayTime.string)
        });
        "" != this.reelSlowTime.string && Reflect.defineProperty(this.slotReelManager, "reelSlowTime", {
          value: Number(this.reelSlowTime.string)
        });
        "" != this.reelReboundTime.string && Reflect.defineProperty(this.slotReelManager, "reelReboundTime", {
          value: Number(this.reelReboundTime.string)
        });
        "" != this.reelReboundRange.string && Reflect.defineProperty(this.slotReelManager, "reelReboundRange", {
          value: Number(this.reelReboundRange.string)
        });
        this.content.removeAllChildren();
        this.omenMask.setParent(this.content);
        this.resetData();
      };
      G50_SlotReelUtils.prototype.resetData = function() {
        var _this = this;
        var p_data = new Slot_GameManager_InitData_1.default();
        p_data.bundleName = "G" + G50_DataManager_1.default.getInstance().gameID;
        p_data.bundlePath = "" + G50_DataManager_1.default.getInstance().path;
        this.slotReelManager.init(p_data);
        this.socket.setOnGetInitialReelInfoEvent().then(function(p_data) {
          _this.slotReelManager.setReelTable(p_data.reels.BG);
          _this.slotReelManager.setReelStartIndex(p_data.position);
        });
        this.closeMenu();
      };
      G50_SlotReelUtils.prototype.closeMenu = function() {
        cc.log("\u95dc\u9589\u53c3\u6578\u8abf\u6574UI");
        this.menuNode.active = false;
      };
      G50_SlotReelUtils.prototype.showSlotReelData = function() {
        var reelScrollUpTime = Reflect.getOwnPropertyDescriptor(this.slotReelManager, "reelScrollUpTime");
        this.reelScrollUpTime.string = reelScrollUpTime.value;
        var reelScrollUpRange = Reflect.getOwnPropertyDescriptor(this.slotReelManager, "reelScrollUpRange");
        this.reelScrollUpRange.string = reelScrollUpRange.value;
        var reelNormalScrollTime = Reflect.getOwnPropertyDescriptor(this.slotReelManager, "reelNormalScrollTime");
        this.reelNormalScrollTime.string = reelNormalScrollTime.value;
        var reelFastScrollTime = Reflect.getOwnPropertyDescriptor(this.slotReelManager, "reelFastScrollTime");
        this.reelFastScrollTime.string = reelFastScrollTime.value;
        var reelMoveSpeed = Reflect.getOwnPropertyDescriptor(this.slotReelManager, "reelMoveSpeed");
        this.reelMoveSpeed.string = reelMoveSpeed.value;
        var reelOmenScrollTime = Reflect.getOwnPropertyDescriptor(this.slotReelManager, "reelOmenScrollTime");
        this.reelOmenScrollTime.string = reelOmenScrollTime.value;
        var reelOmenSpeed = Reflect.getOwnPropertyDescriptor(this.slotReelManager, "reelOmenSpeed");
        this.reelOmenSpeed.string = reelOmenSpeed.value;
        var omenSpeedMutly = Reflect.getOwnPropertyDescriptor(this.slotReelManager, "omenSpeedMutly");
        this.omenSpeedMutly.string = omenSpeedMutly.value;
        var omenSlowTime = Reflect.getOwnPropertyDescriptor(this.slotReelManager, "omenSlowTime");
        this.omenSlowTime.string = omenSlowTime.value;
        var hasLongWildScrollTime = Reflect.getOwnPropertyDescriptor(this.slotReelManager, "hasLongWildScrollTime");
        this.hasLongWildScrollTime.string = hasLongWildScrollTime.value;
        var reelStartDelayTime = Reflect.getOwnPropertyDescriptor(this.slotReelManager, "reelStartDelayTime");
        this.reelStartDelayTime.string = reelStartDelayTime.value;
        var reelStopDelayTime = Reflect.getOwnPropertyDescriptor(this.slotReelManager, "reelStopDelayTime");
        this.reelStopDelayTime.string = reelStopDelayTime.value;
        var reelSlowTime = Reflect.getOwnPropertyDescriptor(this.slotReelManager, "reelSlowTime");
        this.reelSlowTime.string = reelSlowTime.value;
        var reelReboundTime = Reflect.getOwnPropertyDescriptor(this.slotReelManager, "reelReboundTime");
        this.reelReboundTime.string = reelReboundTime.value;
        var reelReboundRange = Reflect.getOwnPropertyDescriptor(this.slotReelManager, "reelReboundRange");
        this.reelReboundRange.string = reelReboundRange.value;
      };
      __decorate([ property({
        displayName: "\u9810\u5146\u7684\u906e\u7f69",
        type: cc.Node
      }) ], G50_SlotReelUtils.prototype, "omenMask", void 0);
      __decorate([ property({
        displayName: "\u8f2a\u5b50\u7684content",
        type: cc.Node
      }) ], G50_SlotReelUtils.prototype, "content", void 0);
      __decorate([ property(cc.Node) ], G50_SlotReelUtils.prototype, "menuNode", void 0);
      __decorate([ property({
        type: G50_SlotReelManager_1.default,
        override: true
      }) ], G50_SlotReelUtils.prototype, "slotReelManager", void 0);
      __decorate([ property({
        displayName: "\u6efe\u8f2a\u5f80\u4e0a\u6efe\u52d5\u6642\u9593",
        type: cc.EditBox
      }) ], G50_SlotReelUtils.prototype, "reelScrollUpTime", void 0);
      __decorate([ property({
        displayName: "\u6efe\u8f2a\u5f80\u4e0a\u6efe\u52d5\u5e45\u5ea6",
        type: cc.EditBox
      }) ], G50_SlotReelUtils.prototype, "reelScrollUpRange", void 0);
      __decorate([ property({
        displayName: "\u6efe\u8f2a\u6b63\u5e38\u6efe\u52d5\u6642\u9593",
        type: cc.EditBox
      }) ], G50_SlotReelUtils.prototype, "reelNormalScrollTime", void 0);
      __decorate([ property({
        displayName: "\u6efe\u8f2a\u9ad8\u901f\u6efe\u52d5\u6642\u9593",
        type: cc.EditBox
      }) ], G50_SlotReelUtils.prototype, "reelFastScrollTime", void 0);
      __decorate([ property({
        displayName: "\u6efe\u8f2a\u6efe\u52d5\u901f\u5ea6",
        type: cc.EditBox
      }) ], G50_SlotReelUtils.prototype, "reelMoveSpeed", void 0);
      __decorate([ property({
        displayName: "\u9810\u5146\u6efe\u52d5\u6642\u9593",
        type: cc.EditBox
      }) ], G50_SlotReelUtils.prototype, "reelOmenScrollTime", void 0);
      __decorate([ property({
        displayName: "\u9810\u5146\u6642\u6efe\u52d5\u901f\u5ea6",
        type: cc.EditBox
      }) ], G50_SlotReelUtils.prototype, "reelOmenSpeed", void 0);
      __decorate([ property({
        displayName: "\u9810\u5146\u6642\u6efe\u52d5\u901f\u5ea6\u7684\u500d\u7387",
        type: cc.EditBox
      }) ], G50_SlotReelUtils.prototype, "omenSpeedMutly", void 0);
      __decorate([ property({
        displayName: "\u9810\u5146\u6e1b\u901f\u7684\u6642\u9593",
        type: cc.EditBox
      }) ], G50_SlotReelUtils.prototype, "omenSlowTime", void 0);
      __decorate([ property({
        displayName: "\u9577Wild\u7684\u8868\u6f14\u6642\u9593",
        type: cc.EditBox
      }) ], G50_SlotReelUtils.prototype, "hasLongWildScrollTime", void 0);
      __decorate([ property({
        displayName: "\u8f2a\u5b50\u958b\u59cb\u8f49\u52d5\u9593\u9694",
        type: cc.EditBox
      }) ], G50_SlotReelUtils.prototype, "reelStartDelayTime", void 0);
      __decorate([ property({
        displayName: "\u8f2a\u5b50\u505c\u6b62\u8f49\u52d5\u9593\u9694",
        type: cc.EditBox
      }) ], G50_SlotReelUtils.prototype, "reelStopDelayTime", void 0);
      __decorate([ property({
        displayName: "\u6efe\u8f2a\u6e1b\u901f\u6642\u9593",
        type: cc.EditBox
      }) ], G50_SlotReelUtils.prototype, "reelSlowTime", void 0);
      __decorate([ property({
        displayName: "\u6efe\u8f2a\u56de\u5f48\u6642\u9593",
        type: cc.EditBox
      }) ], G50_SlotReelUtils.prototype, "reelReboundTime", void 0);
      __decorate([ property({
        displayName: "\u56de\u5f48\u5e45\u5ea6(0.01~0.9)",
        type: cc.EditBox
      }) ], G50_SlotReelUtils.prototype, "reelReboundRange", void 0);
      G50_SlotReelUtils = __decorate([ ccclass ], G50_SlotReelUtils);
      return G50_SlotReelUtils;
    }(cc.Component);
    exports.default = G50_SlotReelUtils;
    cc._RF.pop();
  }, {
    "../../../SlotFramework/Game/Data/Slot_GameManager_InitData": void 0,
    "../../Common/script/G50_DataManager": "G50_DataManager",
    "../../Common/script/socket/G50_SocketManager": "G50_SocketManager",
    "./view/G50_SlotReelManager": "G50_SlotReelManager"
  } ],
  G50_SocketConnect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1c2f0+UK0JDVpNXZMXdMycz", "G50_SocketConnect");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.G50_SocketConnect = void 0;
    var Slot_SocketConnect_1 = require("../../../../SlotFramework/Common/Socket/Slot_SocketConnect");
    var G50_DataManager_1 = require("../G50_DataManager");
    var G50_DynamicPopUpPanelManager_1 = require("../G50_DynamicPopUpPanelManager");
    var G50_SocketManager_1 = require("./G50_SocketManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_SocketConnect = function(_super) {
      __extends(G50_SocketConnect, _super);
      function G50_SocketConnect() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(G50_SocketConnect.prototype, "socketManager", {
        get: function() {
          return G50_SocketManager_1.default.getInstance();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(G50_SocketConnect.prototype, "popupManager", {
        get: function() {
          return G50_DynamicPopUpPanelManager_1.default.getInstance();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(G50_SocketConnect.prototype, "dataManager", {
        get: function() {
          return G50_DataManager_1.default.getInstance();
        },
        enumerable: false,
        configurable: true
      });
      G50_SocketConnect.prototype.init = function() {
        _super.prototype.init.call(this);
      };
      G50_SocketConnect = __decorate([ ccclass ], G50_SocketConnect);
      return G50_SocketConnect;
    }(Slot_SocketConnect_1.Slot_SocketConnect);
    exports.G50_SocketConnect = G50_SocketConnect;
    cc._RF.pop();
  }, {
    "../../../../SlotFramework/Common/Socket/Slot_SocketConnect": void 0,
    "../G50_DataManager": "G50_DataManager",
    "../G50_DynamicPopUpPanelManager": "G50_DynamicPopUpPanelManager",
    "./G50_SocketManager": "G50_SocketManager"
  } ],
  G50_SocketManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed68fExxD5JZ7/ixm2REj9w", "G50_SocketManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var G50_DataManager_1 = require("../G50_DataManager");
    var G50_TestSocket_1 = require("./G50_TestSocket");
    var G50_DynamicPopUpPanelManager_1 = require("../G50_DynamicPopUpPanelManager");
    var G50_SocketConnect_1 = require("./G50_SocketConnect");
    var Slot_SocketManager_1 = require("../../../../SlotFramework/Common/Socket/Slot_SocketManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_SocketManager = function(_super) {
      __extends(G50_SocketManager, _super);
      function G50_SocketManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.testSocket = null;
        _this.isOffline = false;
        _this.selfEnterEventCallback = null;
        _this.refreshJackpotCallback = null;
        _this.socketConnect = null;
        return _this;
      }
      G50_SocketManager.prototype.init = function() {
        this.socketConnect = new G50_SocketConnect_1.G50_SocketConnect();
        this.socketConnect.init();
        if (G50_DataManager_1.default.offLineMode) {
          this.testSocket = new G50_TestSocket_1.default();
          this.isOffline = true;
        } else {
          cc.log("Socket Init");
          this.setErrorAlertCallback(this.showErrorAlert.bind(this));
          this.initGameClient(G50_DataManager_1.default.getInstance());
          this.client && this.registerEvents();
          this.registerOnSelfEnterEvent();
          this.registerRefreshJackpotNotice();
        }
      };
      G50_SocketManager.prototype.setSelfEnterEventCallback = function(selfEnterCallback) {
        this.selfEnterEventCallback = selfEnterCallback;
      };
      G50_SocketManager.prototype.login = function() {
        var _this = this;
        if (G50_DataManager_1.default.offLineMode) {
          cc.log("\u55ae\u6a5f\u6a21\u5f0f\u767b\u5165");
          this.testSocket = new G50_TestSocket_1.default();
          this.isOffline = true;
          this.init();
          this.testSocket.login().then(function(loginRes) {
            _this.handleOnOpen(loginRes);
          });
        } else {
          cc.log("\u9023\u7dda\u6a21\u5f0f\u767b\u5165");
          _super.prototype.login.call(this);
        }
      };
      G50_SocketManager.prototype.getDeatilWagers = function(wagerToken, apiServerUrl, wager_id) {
        return GameClient.getDeatilWagers(wagerToken, apiServerUrl, wager_id);
      };
      G50_SocketManager.prototype.showErrorAlert = function(message, title, confirmCallback) {
        G50_DynamicPopUpPanelManager_1.default.getInstance().confirmSystemMsgDialogBox.show(message, function() {
          "function" === typeof confirmCallback && confirmCallback();
        });
      };
      G50_SocketManager.prototype.showErrorYesNoAlert = function(message, title, yesCallback, noCallback) {
        G50_DynamicPopUpPanelManager_1.default.getInstance().ynDialogBox.show(message, function() {
          "function" === typeof yesCallback && yesCallback();
        }, function() {
          "function" === typeof noCallback && noCallback();
        });
      };
      G50_SocketManager.prototype.setOnGetInitialReelInfoEvent = function() {
        if (this.isOffline) return this.sendTestSocket("GetInitialReelInfo", this.testSocket.setOnGetInitialReelInfoEvent.bind(this.testSocket));
        return this.request("GetInitialReelInfo", this.client.setOnGetInitialReelInfoEvent.bind(this.client), null);
      };
      G50_SocketManager.prototype.setOnGetRoomListEvent = function() {
        return this.request("GetRoomList", this.client.setOnGetInitialReelInfoEvent.bind(this.client), null);
      };
      G50_SocketManager.prototype.setOnChoseRoomEvent = function(roomId) {
        return this.request("ChoseRoom", this.client.setOnChoseRoomEvent.bind(this.client), roomId);
      };
      G50_SocketManager.prototype.setOnFastChoseRoomEvent = function() {
        if (this.isOffline) return this.sendTestSocket("FastChoseRoom", this.testSocket.setOnFastChoseRoomEvent.bind(this.testSocket));
        return this.request("FastChoseRoom", this.client.setOnFastChoseRoomEvent.bind(this.client), null);
      };
      G50_SocketManager.prototype.setOnSpinBaseGameEvent = function(spinReqData) {
        if (this.isOffline) return this.sendTestSocket("SpinBaseGame", this.testSocket.setOnSpinBaseGameEvent.bind(this.testSocket), spinReqData);
        return this.request("SpinBaseGame", this.client.setOnSpinBaseGameEvent.bind(this.client), spinReqData);
      };
      G50_SocketManager.prototype.setOnLeaveEvent = function() {
        if (this.isOffline) return this.sendTestSocket("Leave", this.testSocket.setOnLeaveEvent.bind(this.testSocket));
        return this.request("Leave", this.client.setOnLeaveEvent.bind(this.client), null);
      };
      G50_SocketManager.prototype.registerOnSelfEnterEvent = function() {
        var _this = this;
        this.client.setSelfEnterEvent(function(data) {
          _this.selfEnterEventCallback(data);
        });
      };
      G50_SocketManager.prototype.sendTestSocket = function(eventName, event, content) {
        var _this = this;
        this.showSendLog(eventName, null);
        return new Promise(function(resolve, reject) {
          event.bind(_this)(content).then(function(data) {
            _this.showResponseLog(eventName, data);
            resolve(data);
          });
        });
      };
      G50_SocketManager.prototype.registerRefreshJackpotNotice = function() {
        var _this = this;
        this.client.setOnRefreshJackpotNotice(function(data) {
          _this.receive("ON_REFRESH_JACKPOT_NOTICE", data, "setOnRefreshJackpotNotice");
        });
      };
      G50_SocketManager = __decorate([ ccclass ], G50_SocketManager);
      return G50_SocketManager;
    }(Slot_SocketManager_1.default);
    exports.default = G50_SocketManager;
    cc._RF.pop();
  }, {
    "../../../../SlotFramework/Common/Socket/Slot_SocketManager": void 0,
    "../G50_DataManager": "G50_DataManager",
    "../G50_DynamicPopUpPanelManager": "G50_DynamicPopUpPanelManager",
    "./G50_SocketConnect": "G50_SocketConnect",
    "./G50_TestSocket": "G50_TestSocket"
  } ],
  G50_SymbolTipPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "238f85Nu69DM5Env3dqMll4", "G50_SymbolTipPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Slot_SymbolTipPanel_1 = require("../../../../SlotFramework/Game/Panel/Slot_SymbolTipPanel");
    var G50_DataManager_1 = require("../../../Common/script/G50_DataManager");
    var Slot_DataManager_1 = require("../../../../SlotFramework/Slot_DataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_SymbolTipPanel = function(_super) {
      __extends(G50_SymbolTipPanel, _super);
      function G50_SymbolTipPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.data = null;
        return _this;
      }
      G50_SymbolTipPanel.prototype.init = function() {
        this.data = G50_DataManager_1.default.getInstance();
        _super.prototype.init.call(this);
      };
      G50_SymbolTipPanel.prototype.changeMagnification = function(symbolID) {
        var id = symbolID;
        id > 100 && id < 116 && (id = symbolID % 100);
        _super.prototype.changeMagnification.call(this, id);
      };
      G50_SymbolTipPanel.prototype.open = function(symbolID, position) {
        if (symbolID === Slot_DataManager_1.SYMBOL_NAME.Jackpot) return;
        _super.prototype.open.call(this, symbolID, position);
      };
      G50_SymbolTipPanel = __decorate([ ccclass ], G50_SymbolTipPanel);
      return G50_SymbolTipPanel;
    }(Slot_SymbolTipPanel_1.default);
    exports.default = G50_SymbolTipPanel;
    cc._RF.pop();
  }, {
    "../../../../SlotFramework/Game/Panel/Slot_SymbolTipPanel": void 0,
    "../../../../SlotFramework/Slot_DataManager": void 0,
    "../../../Common/script/G50_DataManager": "G50_DataManager"
  } ],
  G50_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb6d9Lt+cFD1rp3lBqoHbgO", "G50_Symbol");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Slot_Symbol_1 = require("../../../../SlotFramework/Game/view/Slot_Symbol");
    var Slot_DataManager_1 = require("../../../../SlotFramework/Slot_DataManager");
    var FXController_1 = require("../../../../Common/Optional/Crosis/FXController/FXController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EXTRA_STATUS;
    (function(EXTRA_STATUS) {
      EXTRA_STATUS[EXTRA_STATUS["IDLE"] = 0] = "IDLE";
      EXTRA_STATUS[EXTRA_STATUS["DISAPPEAR_EFFECTING"] = 1] = "DISAPPEAR_EFFECTING";
      EXTRA_STATUS[EXTRA_STATUS["DROP_EFFECTING"] = 2] = "DROP_EFFECTING";
    })(EXTRA_STATUS || (EXTRA_STATUS = {}));
    var G50_Symbol = function(_super) {
      __extends(G50_Symbol, _super);
      function G50_Symbol() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tip1String = "\u4ee5\u4e0b\u70ba Wild";
        _this.fxWildIdle = null;
        _this.tip2String = "\u4ee5\u4e0b\u70ba scatter";
        _this.fxScatterIdle = null;
        _this.fxScatterWin = null;
        _this.fxScatterWin2 = null;
        _this.tip3String = "\u4ee5\u4e0b\u70ba \u5176\u4ed6";
        _this.symbol_gold = null;
        _this.symbol_normal = null;
        _this.fx1Prompt = null;
        _this.fx1PromptBg = null;
        _this.rewardMask = null;
        _this.extraStatus = EXTRA_STATUS.IDLE;
        _this.symbolName = "";
        _this.isFreeGame = false;
        return _this;
      }
      G50_Symbol.prototype.init = function(p_data) {
        this.bundleName = p_data.bundleName;
        this.bundlePath = p_data.bundlePath;
      };
      G50_Symbol.prototype.setData = function(p_nowIndex, p_symbolValue, p_isFreeGame) {
        void 0 === p_isFreeGame && (p_isFreeGame = false);
        this.symbolID = p_symbolValue;
        this.closeAllEffect();
        if (this.isGold) {
          this.symbol_gold.node.active = true;
          this.symbol_normal.node.active = false;
          this.symbolSpine = this.symbol_gold;
          this.symbolName = Slot_DataManager_1.SYMBOL_NAME[this.symbolID % 100];
        } else {
          this.symbol_gold.node.active = false;
          this.symbol_normal.node.active = true;
          this.symbolSpine = this.symbol_normal;
          this.symbolName = Slot_DataManager_1.SYMBOL_NAME[this.symbolID];
        }
        this.nowIndex = p_nowIndex;
        this.symbolSpine.setAnimation(0, this.symbolName + "_stop", true);
        this.isFreeGame = p_isFreeGame;
      };
      G50_Symbol.prototype.playRewardOnce = function() {
        this.setData(this.nowIndex, this.symbolID);
        this.symbolSpine.setAnimation(0, this.symbolName + "_play_normal", false);
      };
      G50_Symbol.prototype.playRewardEffect = function(p_effectLoop) {
        var _this = this;
        this.closeAllEffect();
        this.symbolSpine.setAnimation(0, this.symbolName + "_play_win", false);
        if (this.symbolID !== Slot_DataManager_1.SYMBOL_NAME.Scatter) {
          this.fx1PromptBg.node.setParent(this.rewardMask);
          this.fx1PromptBg.node.setPosition(this.node.getPosition());
          this.fx1PromptBg.play();
          this.fx1Prompt.play();
        } else {
          this.fxScatterWin.node.setParent(this.rewardMask);
          this.fxScatterWin.node.setPosition(this.node.getPosition());
          this.fxScatterWin.play();
          this.fxScatterWin2.play();
          this.symbolSpine.setAnimation(0, this.symbolName + "_play_win", true);
        }
        this.isGold && this.transWild();
        this.symbolID === Slot_DataManager_1.SYMBOL_NAME.Jackpot && this.symbolSpine.setCompleteListener(function() {
          _this.symbolSpine.setCompleteListener(null);
          _this.symbolSpine.node.opacity = 0;
          cc.tween(_this.symbolSpine.node).to(.5, {
            opacity: 255
          }).start();
          _this.symbolSpine.setAnimation(0, _this.symbolName + "_stop", false);
        });
        this.symbolID === Slot_DataManager_1.SYMBOL_NAME.Wild && this.fxWildIdle.stop();
      };
      G50_Symbol.prototype.playScrollingEffect = function() {
        this.symbolSpine.setAnimation(0, this.symbolName + "_stop", true);
      };
      G50_Symbol.prototype.playIdleEffect = function() {
        this.closeAllEffect();
        this.symbolSpine.setAnimation(0, this.symbolName + "_play_normal", true);
        if (this.symbolID == Slot_DataManager_1.SYMBOL_NAME.Scatter) {
          this.fxScatterIdle.node.active = true;
          this.fxScatterIdle.play();
        } else this.symbolID == Slot_DataManager_1.SYMBOL_NAME.Wild && this.fxWildIdle.play();
      };
      G50_Symbol.prototype.closeAllEffect = function() {
        this.fxWildIdle.stop();
        this.fxScatterIdle.stop();
        this.fxScatterWin.stop();
        this.fxScatterWin2.stop();
        this.fx1Prompt.stop();
        this.fx1PromptBg.stop();
        this.fxScatterWin.node.setParent(this.fxWildIdle.node.parent);
        this.fx1PromptBg.node.setParent(this.fxWildIdle.node.parent);
      };
      G50_Symbol.prototype.playDisappearEffect = function(p_startDelay) {
        var _this = this;
        this.extraStatus = EXTRA_STATUS.DISAPPEAR_EFFECTING;
        cc.tween(this.node).delay(p_startDelay).to(.5, {
          opacity: 0
        }).call(function() {
          _this.extraStatus = EXTRA_STATUS.IDLE;
        }).start();
      };
      G50_Symbol.prototype.isDisappearEffecting = function() {
        return this.extraStatus == EXTRA_STATUS.DISAPPEAR_EFFECTING;
      };
      G50_Symbol.prototype.playDropEffect = function(p_startDelay, p_targetPosition) {
        var _this = this;
        this.setZOrder(0);
        this.extraStatus = EXTRA_STATUS.DROP_EFFECTING;
        this.node.opacity = 255;
        this.fxScatterIdle.node.active && this.fxScatterIdle.stop();
        this.fxWildIdle.node.active && this.fxWildIdle.stop();
        cc.tween(this.node).delay(p_startDelay).to(.3, {
          y: p_targetPosition.y
        }, {
          easing: "sineIn"
        }).by(.05, {
          y: 15
        }, {
          easing: "cubicOut"
        }).delay(.1).by(.05, {
          y: -15
        }, {
          easing: "cubicIn"
        }).call(function() {
          _this.extraStatus = EXTRA_STATUS.IDLE;
          _this.playIdleEffect();
        }).start();
      };
      G50_Symbol.prototype.skipDropEffect = function() {
        cc.Tween.stopAllByTarget(this.node);
        this.extraStatus = EXTRA_STATUS.IDLE;
        this.playIdleEffect();
      };
      G50_Symbol.prototype.isDropEffecting = function() {
        return this.extraStatus == EXTRA_STATUS.DROP_EFFECTING;
      };
      G50_Symbol.prototype.transWild = function() {
        var _this = this;
        this.symbolID = Slot_DataManager_1.SYMBOL_NAME.Wild;
        this.symbolName = Slot_DataManager_1.SYMBOL_NAME[this.symbolID];
        this.symbol_normal.node.active = true;
        this.symbol_normal.node.opacity = 0;
        this.symbolSpine = this.symbol_normal;
        cc.tween(this.symbol_normal.node).delay(.3).call(function() {
          _this.symbolSpine.setAnimation(0, "Wild_stop", true);
        }).to(.1, {
          opacity: 255
        }).delay(.3).call(function() {
          _this.closeAllEffect();
          _this.symbolSpine.setAnimation(0, "Wild_play_normal", true);
          _this.fxWildIdle.play();
        }).start();
        cc.tween(this.symbol_gold.node).delay(1).to(.8, {
          opacity: 0
        }).call(function() {
          _this.symbol_gold.node.active = false;
          _this.symbol_gold.node.opacity = 255;
        }).start();
      };
      G50_Symbol.prototype.showSymbolTip = function() {
        var position = this.rewardMask.parent.convertToWorldSpaceAR(this.node.position);
        cc.systemEvent.emit("ShowSymbolTipEvent", this.symbolID, position);
      };
      Object.defineProperty(G50_Symbol.prototype, "isGold", {
        get: function() {
          return this.symbolID > 100 && this.symbolID < 116;
        },
        enumerable: false,
        configurable: true
      });
      __decorate([ property({
        readonly: true,
        displayName: "============ \u3010 Wild \u3011 ============"
      }) ], G50_Symbol.prototype, "tip1String", void 0);
      __decorate([ property(FXController_1.default) ], G50_Symbol.prototype, "fxWildIdle", void 0);
      __decorate([ property({
        readonly: true,
        displayName: "============ \u3010 scatter \u3011 ============"
      }) ], G50_Symbol.prototype, "tip2String", void 0);
      __decorate([ property(FXController_1.default) ], G50_Symbol.prototype, "fxScatterIdle", void 0);
      __decorate([ property(FXController_1.default) ], G50_Symbol.prototype, "fxScatterWin", void 0);
      __decorate([ property(FXController_1.default) ], G50_Symbol.prototype, "fxScatterWin2", void 0);
      __decorate([ property({
        readonly: true,
        displayName: "============ \u3010 \u5176\u4ed6 \u3011 ============"
      }) ], G50_Symbol.prototype, "tip3String", void 0);
      __decorate([ property(sp.Skeleton) ], G50_Symbol.prototype, "symbol_gold", void 0);
      __decorate([ property(sp.Skeleton) ], G50_Symbol.prototype, "symbol_normal", void 0);
      __decorate([ property(FXController_1.default) ], G50_Symbol.prototype, "fx1Prompt", void 0);
      __decorate([ property(FXController_1.default) ], G50_Symbol.prototype, "fx1PromptBg", void 0);
      __decorate([ property(cc.Node) ], G50_Symbol.prototype, "rewardMask", void 0);
      G50_Symbol = __decorate([ ccclass ], G50_Symbol);
      return G50_Symbol;
    }(Slot_Symbol_1.default);
    exports.default = G50_Symbol;
    cc._RF.pop();
  }, {
    "../../../../Common/Optional/Crosis/FXController/FXController": void 0,
    "../../../../SlotFramework/Game/view/Slot_Symbol": void 0,
    "../../../../SlotFramework/Slot_DataManager": void 0
  } ],
  G50_TestSocket: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "566c3nBcAxFuab6I46rEhXW", "G50_TestSocket");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var G50_DataManager_1 = require("../G50_DataManager");
    var G50_CommonData_1 = require("../../../Game/script/G50_CommonData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_TestSocket = function() {
      function G50_TestSocket() {
        this.receiveCallback = null;
        this.tempSpinCount = 1;
      }
      G50_TestSocket_1 = G50_TestSocket;
      G50_TestSocket.prototype.init = function() {};
      G50_TestSocket.prototype.login = function() {
        return new Promise(function(resolve, reject) {
          var _data = new G50_CommonData_1.LoginData();
          _data.nickname = "\u533f\u540dA";
          _data.language = "zh-cn";
          _data.balance = 5e5;
          _data.timestamp = 1e9;
          _data.themeType = 0;
          _data.icon = 1;
          _data.gameId = 50;
          resolve(_data);
        });
      };
      G50_TestSocket.prototype.setOnFastChoseRoomEvent = function() {
        return new Promise(function(resolve, reject) {
          var _data = new G50_CommonData_1.FastChoseRoomData();
          _data.roomId = "\u6e2c\u8a66Room";
          resolve(_data);
        });
      };
      G50_TestSocket.prototype.setOnGetInitialReelInfoEvent = function() {
        return new Promise(function(resolve, reject) {
          var _data = new G50_CommonData_1.GetInitialReelInfoData();
          _data.position = [ 4, 2, 3, 15, 15 ];
          _data.reels = new G50_CommonData_1.ReelTable();
          var _BGTable = [];
          _BGTable[0] = [ 14, 13, 13, 14, 1, 1, 1, 20, 14, 14, 14, 14, 2, 2, 2, 11, 12, 12, 12, 13, 15, 15, 15, 12, 13, 13, 13, 3, 3, 3, 20, 14, 14, 14, 13, 1, 1, 14, 13, 13, 14, 2, 2, 13, 14, 14, 13, 15, 15, 14, 13, 13, 14, 3, 3, 13, 14, 14, 13, 11, 11, 14, 13, 13, 14, 12, 12, 3, 14, 14, 3, 20, 13, 13, 1, 14, 14, 2, 14, 14, 15, 11, 11, 3, 13, 20, 3, 14, 14, 3, 12, 12, 1, 11, 11, 2, 13, 13, 13, 13, 11, 14, 3, 3, 12, 2, 2, 14, 1, 1, 13, 15, 15, 11, 3, 20, 13, 2, 2, 11, 1, 1, 12, 3, 3, 14, 20, 15, 3, 12, 3, 3, 14, 2, 2, 13, 1, 1, 11, 15, 15, 13, 3, 3, 11, 2, 2, 12, 1, 1, 14, 20, 13, 13, 3, 14, 14, 11, 13, 13, 11, 3, 14, 14, 14, 12, 12, 14, 14, 12, 3, 12, 13, 13, 12, 20, 13, 13, 3, 13, 13, 14, 14, 11, 14, 14, 3, 14, 14, 12, 13, 13, 14, 14, 2, 13, 1, 1, 1, 1, 13, 14, 14, 13, 3, 3, 3, 20, 12, 12, 12, 13, 15, 3, 15, 12, 11, 11, 11, 14, 2, 2, 2, 11, 14, 14, 14, 1, 1, 1, 20, 13, 13, 13, 14, 3, 3, 13, 14, 14, 13, 15, 15, 14, 13, 13, 14, 2, 2, 13, 14, 14, 13, 1, 1, 14, 13, 20, 14, 14, 14, 13, 14, 14, 13, 12, 12, 2, 13, 13, 2, 20, 11, 11, 1, 12, 12, 2, 13, 13, 3, 14, 14, 3, 11, 11, 3, 12, 12, 3, 14, 14, 1, 13, 13, 2, 14, 14, 14, 14, 12, 13, 20, 15, 12, 13, 13, 13, 2, 2, 14, 3, 3, 12, 15, 3, 14, 13, 13, 12, 2, 2, 12, 3, 3, 13, 20, 3, 3, 11, 15, 15, 13, 13, 13, 14, 2, 2, 12, 3, 3, 14, 15, 15, 12, 13, 13, 12, 2, 2, 13, 20, 14, 14, 3, 13, 13, 12, 14, 14, 12, 3, 11, 13, 13, 11, 12, 13, 13, 12, 3, 11, 14, 13, 11, 20, 14, 14, 3, 14, 14, 13, 13, 12, 13, 13, 3, 13, 13, 11, 14, 14, 13, 13, 1, 14, 2, 2, 2, 2, 11, 12, 12, 11, 2, 2, 2, 20, 14, 14, 14, 11, 1, 1, 1, 14, 13, 13, 13, 12, 3, 3, 3, 13, 12, 12, 12, 15, 3, 15, 20, 11, 11, 11, 12, 2, 2, 11, 12, 12, 11, 1, 1, 12, 11, 11, 12, 3, 3, 11, 12, 12, 11, 15, 20, 12, 11, 11, 14, 14, 14, 11, 12, 12, 11, 13, 13, 3, 11, 11, 3, 20, 13, 13, 1, 11, 11, 2, 14, 14, 15, 12, 12, 3, 13, 13, 15, 11, 11, 3, 14, 14, 1, 12, 12, 2, 11, 11, 11, 11, 13, 14, 3, 3, 14, 14, 14, 14, 13, 13, 13, 15, 15, 11, 13, 20, 13, 14, 14, 11, 13, 13, 12, 15, 15, 14, 20, 15, 15, 12, 3, 3, 14, 14, 14, 13, 13, 13, 11, 15, 15, 13, 3, 3, 11, 13, 14, 12, 13, 13, 14, 20, 14, 13, 12, 12, 12, 12, 13, 13, 3, 13, 13, 14, 14, 11, 14, 14, 3, 14, 14, 12, 13, 13, 14, 14, 2, 20, 14, 14, 3, 14, 14, 13, 13, 12, 13, 13, 2, 13, 13, 11, 14, 14, 13, 13, 15, 15, 15, 15, 12, 11, 11, 12, 15, 15, 15, 20, 13, 13, 13, 14, 3, 3, 3, 13, 14, 14, 14, 11, 1, 1, 1, 13, 11, 11, 11, 2, 2, 2, 20, 12, 12, 12, 11, 15, 15, 14, 11, 11, 14, 3, 3, 11, 12, 12, 11, 1, 1, 12, 11, 11, 12, 2, 2, 13, 13, 14, 11, 13, 13, 12, 11, 11, 12, 14, 14, 1, 12, 12, 1, 20, 13, 13, 15, 11, 11, 1, 14, 14, 3, 12, 12, 3, 13, 13, 20, 11, 13, 2, 14, 14, 15, 13, 14, 3, 3, 3, 3, 1 ];
          _BGTable[1] = [ 1, 15, 20, 15, 15, 13, 1, 15, 15, 12, 3, 11, 14, 20, 11, 11, 3, 13, 13, 15, 12, 12, 1, 14, 14, 2, 11, 11, 20, 12, 13, 13, 1, 12, 12, 13, 14, 14, 13, 11, 11, 14, 13, 11, 11, 3, 3, 13, 14, 14, 13, 12, 111, 14, 13, 13, 14, 20, 15, 1, 14, 14, 13, 2, 2, 14, 13, 13, 13, 20, 3, 3, 3, 14, 14, 14, 11, 1, 1, 1, 14, 12, 12, 12, 11, 15, 15, 15, 13, 11, 11, 11, 11, 2, 2, 2, 13, 14, 14, 13, 2, 2, 2, 2, 11, 11, 12, 12, 14, 11, 11, 15, 20, 11, 13, 11, 11, 12, 103, 15, 12, 12, 11, 3, 12, 12, 11, 11, 13, 12, 12, 20, 12, 12, 14, 12, 12, 11, 11, 15, 11, 11, 13, 13, 13, 13, 11, 12, 20, 12, 11, 11, 13, 12, 11, 14, 15, 15, 11, 2, 2, 14, 11, 11, 11, 12, 12, 12, 15, 15, 13, 2, 2, 20, 12, 2, 2, 13, 11, 11, 14, 12, 12, 11, 15, 11, 14, 2, 2, 11, 11, 11, 12, 12, 12, 13, 20, 114, 12, 11, 14, 14, 14, 14, 3, 13, 13, 1, 12, 12, 15, 14, 14, 2, 11, 11, 15, 13, 13, 2, 12, 12, 15, 14, 14, 12, 11, 11, 20, 15, 14, 14, 15, 11, 11, 14, 13, 13, 14, 12, 12, 13, 14, 14, 13, 2, 2, 14, 13, 13, 14, 15, 20, 13, 14, 14, 13, 1, 1, 14, 13, 13, 14, 113, 3, 13, 14, 14, 14, 20, 2, 2, 2, 13, 13, 13, 11, 15, 15, 15, 13, 11, 11, 11, 12, 1, 12, 1, 14, 12, 12, 12, 11, 3, 15, 3, 14, 13, 13, 14, 3, 3, 3, 3, 12, 1, 11, 11, 12, 12, 14, 11, 11, 15, 11, 11, 13, 1, 11, 12, 12, 15, 12, 12, 20, 14, 11, 12, 14, 15, 13, 11, 11, 13, 14, 11, 11, 14, 15, 13, 12, 12, 13, 11, 11, 15, 12, 12, 20, 11, 3, 15, 102, 11, 11, 13, 2, 2, 12, 15, 15, 13, 3, 3, 12, 1, 11, 11, 2, 2, 14, 15, 15, 20, 11, 15, 15, 14, 15, 3, 13, 11, 11, 12, 2, 2, 13, 15, 15, 12, 3, 3, 11, 1, 11, 14, 2, 2, 11, 13, 12, 12, 12, 12, 15, 11, 11, 1, 12, 12, 15, 13, 13, 2, 14, 14, 15, 12, 12, 2, 11, 11, 3, 13, 13, 1, 14, 14, 20, 3, 11, 11, 15, 14, 14, 11, 12, 12, 11, 101, 13, 12, 11, 11, 12, 1, 1, 11, 12, 12, 11, 3, 3, 12, 11, 11, 12, 2, 2, 11, 12, 12, 11, 15, 15, 12, 11, 12, 11, 20, 12, 1, 1, 12, 12, 12, 14, 3, 3, 3, 12, 14, 14, 14, 13, 2, 2, 2, 11, 13, 13, 13, 20, 15, 15, 15, 11, 12, 12, 11, 1, 1, 1, 1, 11, 3, 12, 12, 11, 11, 13, 12, 12, 15, 12, 12, 14, 12, 12, 11, 14, 15, 11, 11, 20, 13, 11, 115, 13, 15, 14, 12, 12, 14, 13, 12, 12, 13, 15, 14, 11, 11, 14, 12, 12, 15, 11, 11, 20, 12, 1, 1, 13, 3, 3, 14, 11, 15, 11, 2, 2, 14, 1, 1, 11, 3, 3, 12, 15, 15, 13, 2, 2, 20, 12, 2, 2, 13, 1, 1, 14, 3, 3, 11, 13, 13, 14, 2, 2, 11, 1, 1, 12, 3, 3, 13, 15, 15, 12, 14, 11, 11, 11, 11, 3, 14, 14, 1, 13, 13, 15, 12, 12, 112, 11, 11, 15, 14, 14, 2, 13, 13, 3, 12, 12, 1, 11, 11, 20, 2, 12, 12, 2, 13, 13, 12, 11, 11, 12, 14, 14, 11, 12, 12, 11, 15, 15, 12, 11, 11, 12, 2, 2, 11, 12, 12, 11, 3, 3, 12, 11, 11, 12, 1, 1, 11, 12, 12, 12, 20, 15, 15, 15, 11, 1, 11, 13, 2, 2, 2, 11, 13, 13, 13, 14, 3, 3, 3, 12, 14, 14, 14, 20, 1, 1, 1, 12, 11, 11, 12 ];
          _BGTable[2] = [ 3, 15, 999, 3, 11, 11, 11, 3, 2, 2, 2, 3, 13, 13, 13, 2, 1, 1, 1, 15, 12, 12, 12, 1, 15, 11, 15, 14, 14, 14, 3, 3, 3, 3, 15, 11, 11, 3, 15, 15, 3, 13, 13, 15, 3, 3, 15, 12, 12, 3, 15, 15, 3, 14, 14, 15, 3, 3, 15, 2, 2, 3, 15, 15, 3, 1, 1, 12, 3, 3, 12, 3, 15, 15, 11, 3, 3, 13, 1, 1, 12, 2, 2, 14, 15, 15, 112, 3, 3, 14, 1, 1, 11, 2, 2, 13, 15, 15, 15, 15, 2, 3, 14, 14, 1, 13, 13, 3, 11, 11, 15, 12, 12, 2, 14, 14, 15, 13, 13, 2, 11, 11, 1, 12, 12, 3, 20, 12, 12, 1, 14, 14, 3, 13, 13, 15, 11, 11, 2, 12, 12, 15, 14, 14, 2, 13, 13, 1, 11, 11, 3, 3, 15, 15, 14, 3, 3, 2, 15, 15, 2, 14, 1, 3, 3, 1, 2, 3, 3, 2, 14, 1, 115, 15, 1, 20, 15, 15, 14, 11, 15, 3, 3, 2, 3, 3, 14, 3, 3, 1, 15, 15, 3, 3, 13, 15, 11, 11, 11, 11, 15, 3, 3, 15, 14, 14, 14, 3, 1, 1, 1, 15, 12, 12, 12, 1, 2, 2, 2, 3, 13, 13, 13, 2, 3, 3, 3, 11, 11, 11, 3, 15, 11, 15, 3, 14, 14, 15, 3, 3, 15, 12, 12, 3, 15, 15, 3, 13, 13, 15, 3, 3, 15, 11, 11, 3, 15, 15, 3, 1, 101, 15, 3, 3, 15, 2, 2, 13, 15, 15, 13, 20, 2, 2, 11, 1, 1, 13, 15, 15, 12, 3, 3, 14, 2, 2, 12, 1, 1, 14, 3, 3, 11, 15, 15, 13, 3, 3, 3, 3, 1, 15, 12, 12, 2, 15, 11, 15, 13, 13, 3, 14, 14, 1, 12, 12, 3, 15, 15, 1, 13, 13, 2, 14, 14, 15, 20, 14, 14, 2, 12, 12, 15, 15, 11, 3, 13, 13, 1, 14, 14, 3, 12, 12, 1, 15, 15, 102, 13, 13, 15, 3, 3, 3, 14, 15, 15, 1, 3, 3, 1, 14, 2, 15, 15, 2, 1, 15, 15, 1, 14, 2, 3, 15, 2, 3, 3, 3, 14, 3, 3, 15, 11, 1, 15, 15, 14, 15, 15, 2, 3, 3, 15, 15, 11, 3, 13, 13, 13, 13, 2, 1, 1, 2, 13, 13, 13, 20, 3, 3, 3, 2, 11, 11, 11, 3, 15, 15, 15, 1, 14, 14, 14, 15, 1, 1, 1, 12, 12, 12, 20, 2, 2, 2, 1, 13, 113, 2, 1, 1, 2, 11, 11, 1, 2, 2, 1, 14, 14, 2, 1, 1, 2, 12, 12, 1, 2, 2, 1, 3, 3, 2, 1, 1, 2, 15, 15, 14, 2, 2, 14, 3, 15, 15, 11, 2, 2, 13, 3, 3, 12, 1, 1, 14, 15, 15, 12, 2, 2, 14, 3, 3, 11, 1, 1, 13, 2, 2, 2, 2, 15, 3, 114, 14, 1, 3, 3, 3, 15, 15, 15, 12, 12, 2, 15, 14, 15, 3, 3, 2, 15, 15, 1, 12, 12, 3, 20, 12, 12, 1, 14, 14, 3, 3, 3, 15, 15, 15, 2, 12, 12, 15, 14, 14, 2, 15, 3, 1, 15, 15, 3, 20, 3, 15, 1, 1, 1, 1, 15, 15, 14, 15, 15, 3, 3, 2, 3, 3, 14, 3, 3, 1, 15, 15, 3, 3, 13, 3, 3, 3, 14, 103, 3, 15, 15, 1, 15, 15, 13, 15, 15, 2, 3, 3, 15, 15, 12, 12, 12, 12, 1, 2, 2, 1, 12, 12, 12, 20, 15, 15, 15, 1, 14, 14, 14, 15, 3, 3, 3, 2, 11, 11, 11, 15, 2, 2, 2, 13, 13, 13, 20, 1, 1, 1, 2, 12, 12, 1, 2, 2, 11, 14, 14, 2, 1, 1, 2, 111, 11, 1, 2, 2, 1, 13, 13, 15, 15, 1, 2, 15, 15, 1, 2, 2, 1, 3, 3, 11, 1, 1, 11, 3, 15, 15, 12, 2, 2, 11, 3, 3, 14, 1, 1, 13, 15, 15, 14, 2, 15, 13, 3, 3, 12, 15, 1, 14, 14, 14, 14, 11 ];
          _BGTable[3] = [ 12, 14, 12, 14, 1, 14, 11, 13, 3, 3, 3, 11, 114, 14, 11, 2, 14, 2, 14, 3, 13, 13, 15, 3, 12, 13, 1, 1, 1, 13, 13, 12, 14, 14, 15, 12, 13, 13, 13, 2, 112, 13, 15, 14, 11, 15, 13, 11, 15, 13, 14, 11, 13, 14, 2, 15, 12, 13, 1, 12, 14, 14, 13, 14, 12, 13, 14, 2, 11, 13, 14, 12, 3, 14, 3, 2, 12, 1, 11, 14, 15, 11, 14, 1, 14, 14, 2, 14, 2, 14, 14, 14, 11, 11, 11, 15, 15, 15, 14, 20, 2, 13, 11, 14, 14, 13, 2, 13, 13, 12, 13, 14, 11, 2, 13, 101, 14, 11, 11, 14, 2, 14, 11, 11, 13, 14, 14, 15, 2, 2, 2, 13, 3, 15, 12, 14, 14, 13, 11, 13, 12, 14, 11, 11, 15, 12, 15, 14, 11, 2, 12, 12, 12, 11, 11, 15, 14, 2, 14, 1, 13, 14, 13, 14, 3, 2, 11, 14, 13, 11, 11, 15, 1, 11, 14, 2, 11, 12, 11, 20, 13, 11, 2, 14, 15, 3, 13, 14, 11, 1, 3, 12, 2, 3, 11, 3, 13, 1, 15, 11, 12, 14, 13, 13, 1, 14, 11, 12, 3, 3, 3, 12, 13, 13, 12, 2, 14, 1, 13, 3, 13, 13, 15, 3, 12, 13, 1, 2, 1, 14, 13, 11, 14, 20, 15, 11, 13, 13, 13, 2, 12, 13, 15, 14, 11, 15, 13, 11, 15, 13, 14, 11, 13, 14, 2, 15, 12, 13, 1, 12, 14, 14, 13, 14, 13, 12, 14, 2, 11, 13, 14, 12, 3, 14, 3, 2, 13, 1, 11, 14, 15, 11, 14, 1, 13, 13, 2, 14, 2, 14, 13, 13, 11, 11, 11, 15, 15, 15, 14, 13, 1, 13, 11, 14, 14, 13, 2, 13, 11, 11, 13, 14, 11, 102, 13, 15, 14, 12, 13, 14, 2, 14, 11, 11, 13, 14, 14, 15, 2, 2, 2, 13, 103, 15, 13, 14, 14, 12, 11, 12, 12, 14, 11, 11, 15, 13, 15, 13, 11, 2, 12, 12, 12, 11, 11, 15, 13, 2, 13, 2, 13, 14, 13, 14, 15, 2, 11, 14, 13, 11, 11, 15, 1, 11, 14, 2, 11, 11, 11, 20, 13, 11, 1, 14, 15, 3, 13, 14, 11, 1, 3, 13, 2, 3, 11, 3, 13, 2, 15, 11, 13, 14, 11, 13, 115, 14, 11, 12, 3, 3, 3, 12, 13, 13, 13, 1, 14, 1, 13, 3, 12, 13, 15, 3, 12, 13, 2, 1, 1, 14, 13, 13, 14, 12, 15, 12, 13, 13, 13, 2, 12, 13, 15, 14, 11, 15, 13, 11, 15, 13, 14, 11, 13, 14, 2, 15, 12, 13, 1, 20, 14, 14, 13, 14, 12, 12, 14, 2, 13, 13, 14, 12, 3, 14, 3, 2, 12, 1, 11, 14, 15, 11, 14, 1, 13, 13, 2, 14, 2, 14, 13, 13, 11, 11, 11, 15, 15, 15, 14, 13, 1, 13, 11, 14, 14, 13, 2, 13, 12, 12, 13, 14, 13, 2, 13, 15, 14, 12, 12, 14, 2, 14, 11, 11, 13, 14, 14, 15, 2, 2, 2, 13, 3, 15, 12, 14, 14, 12, 13, 12, 12, 14, 11, 11, 15, 12, 15, 13, 11, 2, 12, 12, 12, 13, 11, 15, 13, 2, 13, 2, 12, 14, 13, 14, 15, 2, 13, 14, 13, 11, 11, 15, 1, 13, 14, 2, 11, 12, 13, 20, 13, 11, 1, 14, 15, 3, 13, 14, 13, 2, 3, 12, 2, 3, 11, 3, 13, 1, 15, 11, 12, 14, 12, 14, 1, 14, 13, 12, 3, 3, 3, 12, 14, 14, 12, 1, 14, 2, 14, 3, 12, 13, 15, 3, 12, 13, 1, 1, 2, 113, 13, 12, 14, 14, 15, 12, 13, 13, 13, 2, 12, 13, 15, 14, 11, 15, 13, 11, 15, 13, 14, 11, 12, 14, 2, 15, 12, 13, 1, 12, 14, 14, 13, 14, 12, 12, 14, 2, 11, 13, 14, 12, 3, 14, 3, 1, 12, 2, 11, 14, 15, 11, 14, 1, 14, 14, 2, 14, 2, 14, 14, 14, 111, 11, 11, 15, 15, 15, 14, 20 ];
          _BGTable[4] = [ 11, 14, 11, 13, 3, 14, 12, 11, 2, 1, 2, 11, 13, 13, 11, 15, 14, 3, 13, 1, 11, 13, 15, 2, 11, 13, 3, 3, 3, 14, 13, 11, 14, 2, 15, 11, 13, 13, 13, 13, 11, 13, 15, 14, 12, 15, 13, 13, 15, 13, 14, 12, 11, 14, 1, 15, 14, 13, 15, 2, 14, 14, 13, 14, 11, 11, 14, 1, 12, 13, 14, 11, 2, 14, 13, 3, 11, 3, 12, 14, 15, 12, 14, 3, 13, 13, 13, 14, 1, 14, 13, 13, 12, 12, 12, 15, 15, 15, 14, 20, 15, 13, 12, 14, 14, 13, 1, 13, 11, 11, 13, 14, 12, 1, 13, 15, 14, 11, 14, 14, 13, 14, 12, 12, 13, 14, 14, 15, 1, 1, 1, 13, 2, 15, 11, 14, 14, 11, 12, 2, 14, 14, 12, 12, 15, 11, 15, 13, 12, 1, 11, 11, 11, 12, 12, 15, 13, 1, 13, 3, 11, 14, 13, 14, 15, 13, 12, 14, 13, 12, 12, 15, 15, 12, 14, 1, 12, 14, 12, 20, 13, 12, 3, 14, 15, 2, 13, 14, 12, 15, 13, 11, 13, 2, 12, 2, 13, 3, 15, 12, 11, 14, 14, 13, 15, 14, 12, 11, 1, 2, 13, 11, 13, 13, 11, 3, 14, 3, 13, 2, 14, 13, 15, 1, 11, 13, 15, 15, 3, 14, 13, 11, 14, 2, 15, 14, 13, 13, 13, 1, 11, 13, 15, 14, 12, 15, 13, 12, 15, 13, 14, 12, 11, 14, 1, 15, 11, 13, 3, 13, 14, 14, 13, 14, 11, 11, 14, 1, 12, 13, 14, 11, 2, 14, 1, 3, 14, 3, 12, 14, 15, 12, 14, 15, 13, 13, 1, 14, 13, 14, 13, 13, 12, 12, 12, 15, 15, 15, 14, 20, 3, 13, 12, 14, 14, 13, 1, 13, 11, 11, 13, 14, 12, 1, 13, 15, 14, 11, 14, 14, 1, 14, 12, 12, 13, 14, 14, 15, 1, 1, 13, 13, 2, 15, 11, 14, 14, 11, 12, 2, 14, 14, 12, 12, 15, 11, 15, 13, 12, 1, 11, 11, 11, 12, 12, 15, 13, 1, 13, 3, 11, 14, 13, 14, 15, 1, 12, 14, 13, 12, 12, 15, 15, 12, 14, 1, 12, 11, 12, 20, 13, 12, 3, 14, 15, 13, 13, 14, 12, 3, 2, 14, 1, 1, 12, 2, 13, 3, 15, 12, 11, 14, 14, 13, 15, 14, 12, 11, 2, 13, 2, 11, 13, 13, 14, 3, 14, 15, 13, 2, 11, 13, 15, 1, 11, 13, 15, 3, 3, 14, 13, 11, 14, 20, 15, 14, 13, 13, 13, 1, 11, 13, 15, 14, 12, 15, 13, 12, 15, 13, 14, 12, 11, 14, 1, 15, 14, 13, 3, 2, 14, 14, 13, 14, 11, 11, 14, 1, 12, 13, 14, 11, 2, 14, 13, 3, 14, 3, 12, 14, 15, 12, 14, 3, 13, 13, 1, 14, 1, 14, 13, 13, 12, 12, 12, 15, 15, 15, 14, 2, 15, 13, 12, 14, 14, 13, 1, 13, 11, 11, 13, 14, 12, 1, 13, 15, 14, 11, 11, 14, 1, 14, 12, 13, 13, 14, 14, 15, 1, 13, 1, 13, 2, 15, 11, 14, 14, 11, 12, 1, 11, 14, 13, 12, 15, 11, 15, 13, 12, 1, 11, 11, 11, 13, 12, 15, 13, 1, 13, 3, 11, 14, 13, 14, 15, 1, 13, 14, 13, 12, 12, 15, 3, 12, 14, 1, 13, 11, 12, 20, 13, 12, 15, 14, 15, 13, 13, 14, 13, 3, 2, 11, 1, 2, 12, 2, 13, 3, 15, 13, 11, 14, 11, 13, 3, 14, 12, 11, 2, 2, 2, 11, 13, 13, 11, 3, 14, 3, 13, 1, 11, 13, 15, 2, 11, 13, 3, 3, 3, 14, 13, 11, 14, 13, 15, 11, 13, 13, 13, 1, 11, 13, 15, 14, 13, 15, 13, 12, 15, 13, 14, 12, 11, 14, 1, 15, 11, 13, 3, 2, 14, 14, 13, 14, 11, 11, 14, 1, 13, 13, 14, 11, 2, 14, 1, 3, 11, 3, 12, 14, 15, 12, 14, 3, 13, 13, 1, 14, 1, 14, 13, 13, 12, 12, 12, 15, 15, 15, 14, 20 ];
          var _FGTable = [];
          _FGTable[0] = [ 2, 13, 14, 15, 12, 11, 15, 14, 2, 11, 3, 2, 11, 15, 14, 11, 2, 14, 11, 3, 13, 11, 14, 2, 13, 20, 15, 2, 3, 12, 14, 15, 11, 15, 15, 11, 14, 1, 1, 1, 13, 3, 15, 15, 14, 11, 13, 15, 3, 14, 15, 13, 15, 20, 14, 11, 14, 13, 14, 2, 11, 14, 3, 11, 15, 15, 20, 14, 12, 11, 15, 14, 14, 15, 2, 20, 3, 15 ];
          _FGTable[1] = [ 12, 13, 12, 15, 3, 13, 15, 12, 13, 15, 12, 13, 1, 12, 1, 3, 1, 12, 13, 15, 13, 101, 12, 13, 15, 15, 13, 12, 11, 20, 1, 13, 12, 1, 111, 101, 12, 2, 12, 3, 11, 15, 14, 3, 13, 12, 115, 20, 11, 13, 2, 14, 115, 15, 12, 114, 12, 13, 1, 1, 3, 14, 11, 12, 15, 13, 11, 14, 15, 1, 13, 15, 14, 13, 12, 15, 13, 12, 15, 13 ];
          _FGTable[2] = [ 12, 3, 14, 12, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 11, 15, 102, 115, 12, 2, 11, 103, 1, 114, 14, 14, 15, 2, 13, 1, 115, 20, 14, 13, 115, 112, 2, 1, 3, 12, 102, 11, 15, 3, 14, 14, 14, 101, 13, 11, 20, 114, 15, 12, 3, 14, 15, 13, 2, 14, 3, 13, 15, 14, 2, 11, 1, 14, 3, 11, 2, 13, 11, 3, 14, 14, 14, 15, 15, 11, 15, 12, 14, 2, 11, 15, 12, 15, 3, 12, 14, 14, 14, 3, 13, 2, 14, 3 ];
          _FGTable[3] = [ 12, 14, 1, 12, 115, 115, 115, 115, 115, 13, 115, 14, 15, 13, 11, 115, 112, 102, 13, 1, 14, 102, 12, 15, 14, 112, 103, 14, 12, 2, 20, 12, 13, 15, 15, 12, 11, 3, 13, 15, 12, 20, 113, 102, 1, 12, 1, 115, 115, 115, 115, 115, 13, 12, 3, 11, 14, 15, 13, 3, 12, 14, 2, 11, 15, 1, 12, 3, 11, 12, 1, 12, 3, 14, 15, 1, 15, 15, 13, 2, 11, 3, 1, 14, 2, 20, 11, 15, 2, 1, 14, 2, 11, 15, 14, 15, 15, 3, 3, 2 ];
          _FGTable[4] = [ 11, 15, 13, 115, 115, 115, 115, 115, 115, 13, 15, 14, 15, 13, 11, 15, 12, 2, 13, 1, 14, 2, 12, 15, 14, 12, 3, 14, 12, 2, 20, 12, 13, 15, 15, 12, 11, 3, 13, 15, 12, 20, 13, 2, 1, 12, 1, 115, 115, 115, 115, 115, 13, 12, 3, 11, 14, 15, 13, 3, 12, 14, 2, 11, 15, 1, 12, 3, 11, 12, 1, 12, 3, 14, 15, 1, 15, 15, 13, 2, 11, 3 ];
          _data.reels.BG = _BGTable;
          _data.reels.FG = _FGTable;
          resolve(_data);
        });
      };
      G50_TestSocket.prototype.setOnSpinBaseGameEvent = function(_a) {
        var _this = this;
        var p_multiple = _a.multiple;
        return new Promise(function(resolve, reject) {
          p_multiple *= 5e3;
          var _data = null;
          -1 != G50_TestSocket_1.assignData && (_this.tempSpinCount = G50_TestSocket_1.assignData);
          switch (_this.tempSpinCount) {
           case 1:
            _data = _this.testSpinData_1(p_multiple);
            break;

           case 2:
            _data = _this.testSpinData_2(p_multiple);
            break;

           case 3:
            _data = _this.testSpinData_3(p_multiple);
            break;

           case 4:
            _data = _this.testSpinData_4(p_multiple);
            break;

           case 5:
            _data = _this.testSpinData_5(p_multiple);
            break;

           case 6:
            _data = _this.testSpinData_6(p_multiple);
            break;

           case 7:
            _data = _this.testSpinData_7(p_multiple);
            break;

           case 8:
            _data = _this.testSpinData_8(p_multiple);
            break;

           case 9:
            _data = _this.testSpinData_9(p_multiple);
            break;

           case 10:
            _data = _this.testSpinData_10(p_multiple);
            break;

           case 11:
            _data = _this.testSpinData_11(p_multiple);
            break;

           case 12:
            _data = _this.testSpinData_12(p_multiple);
            break;

           case 13:
            _data = _this.testSpinData_13(p_multiple);
          }
          _this.tempSpinCount++;
          _this.tempSpinCount > 7 && (_this.tempSpinCount = 1);
          resolve(_data);
        });
      };
      G50_TestSocket.prototype.testSpinData_1 = function(p_betScore) {
        var _data = new G50_CommonData_1.BaseGameSpinResponeData();
        _data.currentCash = 1e4 * G50_DataManager_1.default.getInstance().coin - p_betScore;
        _data.totalBet = p_betScore;
        _data.totalBonus = 0;
        _data.resultList[0] = new G50_CommonData_1.ResultData();
        _data.resultList[0].randomNumList = [ 5, 12, 3, 2, 2 ];
        _data.resultList[0].totalWinBonus = 0;
        _data.resultList[0].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        return _data;
      };
      G50_TestSocket.prototype.testSpinData_2 = function(p_betScore) {
        var _data = new G50_CommonData_1.BaseGameSpinResponeData();
        var _winScore = 20 * p_betScore * 1 * 1;
        _data.currentCash = 1e4 * G50_DataManager_1.default.getInstance().coin - p_betScore + _winScore;
        _data.totalBet = p_betScore;
        _data.totalBonus = _winScore;
        _data.resultList[0] = new G50_CommonData_1.ResultData();
        _data.resultList[0].randomNumList = [ 583, 161, 503, 523, 657 ];
        _data.resultList[0].totalWinBonus = _winScore;
        _data.resultList[0].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[0].eliHitPos = [ [ 1, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 1, 0 ], [ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].eliMutiple = 1;
        _data.resultList[0].eliminateList[0].eliWinBonus = 158;
        _data.resultList[0].eliminateList[0].isEliminate = true;
        _data.resultList[0].eliminateList[0].nextReels = [ [ 14, 3, 13, 13 ], [ 11, 2, 2, 11 ], [ 15, 3, 50, 1 ], [ 2, 11, 11, 13 ], [ 4, 11, 13, 3 ] ];
        _data.resultList[0].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].eliminateList[0].totalWinPos = [ [ 1, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 1, 1, 0 ], [ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].winWayList[0] = new G50_CommonData_1.WinLineData();
        _data.resultList[0].eliminateList[0].winWayList[0].lineNum = 15;
        _data.resultList[0].eliminateList[0].winWayList[0].singlePos = [ [ 1, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 1, 1, 0 ], [ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].winWayList[0].specialMultiple = 1;
        _data.resultList[0].eliminateList[0].winWayList[0].winBonus = _winScore;
        _data.resultList[0].eliminateList[0].winWayList[0].winNum = 14;
        _data.resultList[0].eliminateList[0].winWayList[0].x = 15;
        _data.resultList[0].eliminateList[1] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[1].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].reels[0] = [ 14, 14, 13, 13 ];
        _data.resultList[0].reels[1] = [ 2, 2, 14, 11 ];
        _data.resultList[0].reels[2] = [ 3, 114, 14, 1 ];
        _data.resultList[0].reels[3] = [ 14, 11, 11, 13 ];
        _data.resultList[0].reels[4] = [ 4, 11, 13, 3 ];
        return _data;
      };
      G50_TestSocket.prototype.testSpinData_3 = function(p_betScore) {
        var _data = new G50_CommonData_1.BaseGameSpinResponeData();
        var _winScore = p_betScore / 50 * 15 * 1 * 1 + p_betScore / 50 * 15 * 1 * 1;
        _data.currentCash = 1e4 * G50_DataManager_1.default.getInstance().coin - p_betScore + _winScore;
        _data.totalBet = p_betScore;
        _data.totalBonus = _winScore;
        _data.resultList[0] = new G50_CommonData_1.ResultData();
        _data.resultList[0].randomNumList = [ 607, 346, 609, 283, 60 ];
        _data.resultList[0].totalWinBonus = _winScore;
        _data.resultList[0].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[0].eliHitPos = [ [ 1, 1, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 1, 1, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].eliMutiple = 1;
        _data.resultList[0].eliminateList[0].eliWinBonus = _winScore;
        _data.resultList[0].eliminateList[0].isEliminate = true;
        _data.resultList[0].eliminateList[0].nextReels = [ [ 12, 15, 20, 13 ], [ 11, 11, 12, 12 ], [ 12, 12, 12, 20 ], [ 11, 14, 1, 13 ], [ 4, 2, 14, 14 ] ];
        _data.resultList[0].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].eliminateList[0].scatter.count = 2;
        _data.resultList[0].eliminateList[0].scatter.getSpins = 0;
        _data.resultList[0].eliminateList[0].scatter.scatterPos = [ [ 0, 0, 1, 0 ], [ 0, 0, 0, 0 ], [ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].totalWinPos = [ [ 1, 1, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 1, 1, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].winWayList[0] = new G50_CommonData_1.WinLineData();
        _data.resultList[0].eliminateList[0].winWayList[0].lineNum = 3;
        _data.resultList[0].eliminateList[0].winWayList[0].singlePos = [ [ 1, 1, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 1, 1, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].winWayList[0].specialMultiple = 1;
        _data.resultList[0].eliminateList[0].winWayList[0].winBonus = _winScore;
        _data.resultList[0].eliminateList[0].winWayList[0].winNum = 15;
        _data.resultList[0].eliminateList[0].winWayList[0].x = 6;
        _data.resultList[0].eliminateList[1] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[1].eliHitPos = [ [ 1, 0, 0, 0 ], [ 0, 0, 1, 1 ], [ 1, 1, 1, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[1].eliMutiple = 2;
        _data.resultList[0].eliminateList[1].eliWinBonus = _winScore;
        _data.resultList[0].eliminateList[1].isEliminate = true;
        _data.resultList[0].eliminateList[1].nextReels = [ [ 11, 15, 20, 13 ], [ 12, 13, 11, 11 ], [ 2, 2, 1, 20 ], [ 11, 14, 1, 13 ], [ 4, 2, 14, 14 ] ];
        _data.resultList[0].eliminateList[1].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].eliminateList[1].scatter.count = 2;
        _data.resultList[0].eliminateList[1].scatter.getSpins = 0;
        _data.resultList[0].eliminateList[1].scatter.scatterPos = [ [ 0, 0, 1, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[1].totalWinPos = [ [ 1, 0, 0, 0 ], [ 0, 0, 1, 1 ], [ 1, 1, 1, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[1].winWayList[0] = new G50_CommonData_1.WinLineData();
        _data.resultList[0].eliminateList[1].winWayList[0].lineNum = 3;
        _data.resultList[0].eliminateList[1].winWayList[0].singlePos = [ [ 1, 0, 0, 0 ], [ 0, 0, 1, 1 ], [ 1, 1, 1, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[1].winWayList[0].specialMultiple = 2;
        _data.resultList[0].eliminateList[1].winWayList[0].winBonus = _winScore;
        _data.resultList[0].eliminateList[1].winWayList[0].winNum = 12;
        _data.resultList[0].eliminateList[1].winWayList[0].x = 6;
        _data.resultList[0].eliminateList[2] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[2].eliHitPos = [];
        _data.resultList[0].eliminateList[2].eliMutiple = 3;
        _data.resultList[0].eliminateList[2].eliWinBonus = 0;
        _data.resultList[0].eliminateList[2].isEliminate = false;
        _data.resultList[0].eliminateList[2].nextReels = [];
        _data.resultList[0].eliminateList[2].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].eliminateList[2].scatter.count = 2;
        _data.resultList[0].eliminateList[2].scatter.getSpins = 0;
        _data.resultList[0].eliminateList[2].scatter.scatterPos = [ [ 0, 0, 1, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[2].winWayList = [];
        return _data;
      };
      G50_TestSocket.prototype.testSpinData_4 = function(p_betScore) {
        var _data = new G50_CommonData_1.BaseGameSpinResponeData();
        var _winScore = p_betScore / 50 * 25e4 * 1 * 1 + p_betScore / 50 * 20 * 1 * 1 + p_betScore / 50 * 15 * 1 * 1 + p_betScore / 50 * 20 * 1 * 1;
        _data.currentCash = 1e4 * G50_DataManager_1.default.getInstance().coin - p_betScore + _winScore;
        _data.totalBet = p_betScore;
        _data.totalBonus = _winScore;
        _data.resultList[0] = new G50_CommonData_1.ResultData();
        _data.resultList[0].randomNumList = [ 114, 1, 553, 597, 81 ];
        _data.resultList[0].totalWinBonus = p_betScore / 50 * 250 * 1 * 1;
        _data.resultList[0].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[0].eliHitPos = [ [ 1, 0, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ], [ 0, 1, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].eliMutiple = 1;
        _data.resultList[0].eliminateList[0].eliWinBonus = 150;
        _data.resultList[0].eliminateList[0].isEliminate = true;
        _data.resultList[0].eliminateList[0].nextReels = [ [ 115, 11, 3, 20 ], [ 13, 13, 13, 20 ], [ 3, 20, 3, 1 ], [ 11, 3, 13, 1 ], [ 12, 14, 12, 14 ] ];
        _data.resultList[0].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].eliminateList[0].scatter.count = 3;
        _data.resultList[0].eliminateList[0].scatter.getSpins = 3;
        _data.resultList[0].eliminateList[0].scatter.scatterPos = [ [ 0, 0, 0, 1 ], [ 0, 1, 0, 0 ], [ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].totalWinPos = [ [ 1, 0, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ], [ 0, 1, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].winWayList[0] = new G50_CommonData_1.WinLineData();
        _data.resultList[0].eliminateList[0].winWayList[0].lineNum = 5;
        _data.resultList[0].eliminateList[0].winWayList[0].singlePos = [ [ 1, 0, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ], [ 0, 1, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].winWayList[0].specialMultiple = 1;
        _data.resultList[0].eliminateList[0].winWayList[0].winBonus = _winScore;
        _data.resultList[0].eliminateList[0].winWayList[0].winNum = 15;
        _data.resultList[0].eliminateList[0].winWayList[0].x = 2;
        _data.resultList[0].eliminateList[1] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[1].eliHitPos = [];
        _data.resultList[0].eliminateList[1].eliMutiple = 2;
        _data.resultList[0].eliminateList[1].eliWinBonus = 0;
        _data.resultList[0].eliminateList[1].isEliminate = false;
        _data.resultList[0].eliminateList[1].nextReels = [];
        _data.resultList[0].eliminateList[1].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].eliminateList[1].scatter.count = 3;
        _data.resultList[0].eliminateList[1].scatter.getSpins = 3;
        _data.resultList[0].eliminateList[1].scatter.scatterPos = [ [ 0, 0, 0, 1 ], [ 0, 0, 0, 1 ], [ 0, 1, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[1] = new G50_CommonData_1.ResultData();
        _data.resultList[1].randomNumList = [ 5, 12, 3, 2, 2 ];
        _data.resultList[1].totalWinBonus = 0;
        _data.resultList[1].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[1].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[2] = new G50_CommonData_1.ResultData();
        _data.resultList[2].randomNumList = [ 1, 5, 3, 20, 21 ];
        _data.resultList[2].totalWinBonus = p_betScore / 50 * 2e4 * 1 * 1;
        _data.resultList[2].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[2].eliminateList[0].eliHitPos = [ [ 1, 0, 0, 0 ], [ 1, 0, 0, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[2].eliminateList[0].eliMutiple = 2;
        _data.resultList[2].eliminateList[0].eliWinBonus = 20;
        _data.resultList[2].eliminateList[0].isEliminate = true;
        _data.resultList[2].eliminateList[0].nextReels = [ [ 3, 2, 13, 14 ], [ 13, 12, 3, 13 ], [ 3, 14, 1, 50 ], [ 13, 1, 14, 2 ], [ 1, 14, 2, 14 ] ];
        _data.resultList[2].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[2].eliminateList[0].totalWinPos = [ [ 1, 0, 0, 0 ], [ 1, 0, 0, 1 ], [ 0, 0, 0, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[2].eliminateList[0].winWayList[0] = new G50_CommonData_1.WinLineData();
        _data.resultList[2].eliminateList[0].winWayList[0].lineNum = 3;
        _data.resultList[2].eliminateList[0].winWayList[0].singlePos = [ [ 1, 0, 0, 0 ], [ 1, 0, 0, 1 ], [ 0, 0, 0, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[2].eliminateList[0].winWayList[0].specialMultiple = 2;
        _data.resultList[2].eliminateList[0].winWayList[0].winBonus = _winScore;
        _data.resultList[2].eliminateList[0].winWayList[0].winNum = 15;
        _data.resultList[2].eliminateList[0].winWayList[0].x = 2;
        _data.resultList[2].eliminateList[1] = new G50_CommonData_1.EliminateData();
        _data.resultList[2].eliminateList[1].eliHitPos = [ [ 1, 0, 1, 0 ], [ 1, 0, 1, 1 ], [ 1, 0, 0, 1 ], [ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[2].eliminateList[1].eliMutiple = 15;
        _data.resultList[2].eliminateList[1].eliWinBonus = 30;
        _data.resultList[2].eliminateList[1].isEliminate = true;
        _data.resultList[2].eliminateList[1].nextReels = [ [ 2, 20, 2, 14 ], [ 104, 13, 112, 13 ], [ 3, 12, 14, 1 ], [ 102, 1, 14, 2 ], [ 1, 14, 2, 12 ] ];
        _data.resultList[2].eliminateList[1].totalWinPos = [ [ 1, 0, 1, 0 ], [ 1, 0, 1, 1 ], [ 1, 0, 0, 1 ], [ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[2].eliminateList[1].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[2].eliminateList[1].winWayList[0] = new G50_CommonData_1.WinLineData();
        _data.resultList[2].eliminateList[1].winWayList[0].lineNum = 3;
        _data.resultList[2].eliminateList[1].winWayList[0].singlePos = [ [ 1, 0, 1, 0 ], [ 1, 0, 1, 1 ], [ 1, 0, 0, 1 ], [ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[2].eliminateList[1].winWayList[0].specialMultiple = 2;
        _data.resultList[2].eliminateList[1].winWayList[0].winBonus = _winScore;
        _data.resultList[2].eliminateList[1].winWayList[0].winNum = 15;
        _data.resultList[2].eliminateList[1].winWayList[0].x = 2;
        _data.resultList[2].eliminateList[2] = new G50_CommonData_1.EliminateData();
        _data.resultList[2].eliminateList[2].eliHitPos = [];
        _data.resultList[2].eliminateList[2].eliMutiple = 0;
        _data.resultList[2].eliminateList[2].eliWinBonus = 0;
        _data.resultList[2].eliminateList[2].isEliminate = false;
        _data.resultList[2].eliminateList[2].nextReels = [];
        _data.resultList[2].eliminateList[2].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[2].eliminateList[2].winWayList = [];
        _data.resultList[3] = new G50_CommonData_1.ResultData();
        _data.resultList[3].randomNumList = [ 5, 12, 3, 2, 2 ];
        _data.resultList[3].totalWinBonus = 0;
        _data.resultList[3].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[3].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        return _data;
      };
      G50_TestSocket.prototype.testSpinData_5 = function(p_betScore) {
        var _data = new G50_CommonData_1.BaseGameSpinResponeData();
        var freegameTimes = 12;
        var freegameTimesBonus = 2;
        var _winScore = p_betScore / 50 * 2 * 1 * 1 + p_betScore / 50 * 20 * 1 * 1 + p_betScore / 50 * 15 * 1 * 1 + p_betScore / 50 * 20 * 1 * 1;
        _data.currentCash = 1e4 * G50_DataManager_1.default.getInstance().coin - p_betScore + _winScore;
        _data.totalBet = p_betScore;
        _data.totalBonus = _winScore;
        _data.resultList[0] = new G50_CommonData_1.ResultData();
        _data.resultList[0].randomNumList = [ 114, 1, 553, 597, 81 ];
        _data.resultList[0].totalWinBonus = p_betScore / 50 * 250 * 1 * 1;
        _data.resultList[0].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[0].eliHitPos = [ [ 1, 0, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ], [ 0, 1, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].eliMutiple = 1;
        _data.resultList[0].eliminateList[0].eliWinBonus = 150;
        _data.resultList[0].eliminateList[0].isEliminate = true;
        _data.resultList[0].eliminateList[0].nextReels = [ [ 115, 11, 3, 20 ], [ 13, 13, 13, 20 ], [ 3, 20, 3, 1 ], [ 11, 3, 13, 1 ], [ 12, 14, 12, 14 ] ];
        _data.resultList[0].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].eliminateList[0].scatter.count = 3;
        _data.resultList[0].eliminateList[0].scatter.getSpins = 2;
        _data.resultList[0].eliminateList[0].scatter.scatterPos = [ [ 0, 0, 0, 1 ], [ 0, 1, 0, 0 ], [ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].totalWinPos = [ [ 1, 0, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ], [ 0, 1, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].winWayList[0] = new G50_CommonData_1.WinLineData();
        _data.resultList[0].eliminateList[0].winWayList[0].lineNum = 5;
        _data.resultList[0].eliminateList[0].winWayList[0].singlePos = [ [ 1, 0, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ], [ 0, 1, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].winWayList[0].specialMultiple = 1;
        _data.resultList[0].eliminateList[0].winWayList[0].winBonus = 30;
        _data.resultList[0].eliminateList[0].winWayList[0].winNum = 15;
        _data.resultList[0].eliminateList[0].winWayList[0].x = 2;
        _data.resultList[0].eliminateList[1] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[1].eliHitPos = [];
        _data.resultList[0].eliminateList[1].eliMutiple = 2;
        _data.resultList[0].eliminateList[1].eliWinBonus = 0;
        _data.resultList[0].eliminateList[1].isEliminate = false;
        _data.resultList[0].eliminateList[1].nextReels = [];
        _data.resultList[0].eliminateList[1].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].eliminateList[1].scatter.count = 3;
        _data.resultList[0].eliminateList[1].scatter.getSpins = freegameTimes;
        _data.resultList[0].eliminateList[1].scatter.scatterPos = [ [ 0, 0, 0, 1 ], [ 0, 0, 0, 1 ], [ 0, 1, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[1] = new G50_CommonData_1.ResultData();
        _data.resultList[1].randomNumList = [ 5, 12, 3, 2, 2 ];
        _data.resultList[1].totalWinBonus = 0;
        _data.resultList[1].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[1].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[2] = new G50_CommonData_1.ResultData();
        _data.resultList[2].randomNumList = [ 10, 155, 34, 30, 29 ];
        _data.resultList[2].totalWinBonus = p_betScore / 50 * 2;
        _data.resultList[2].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[2].eliminateList[0].nextReels = [ [ 2, 11, 3, 2 ], [ 3, 13, 12, 115 ], [ 20, 14, 13, 115 ], [ 12, 2, 20, 12 ], [ 13, 15, 12, 20 ] ];
        _data.resultList[2].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[2].eliminateList[0].scatter.count = 3;
        _data.resultList[2].eliminateList[0].scatter.getSpins = freegameTimesBonus;
        _data.resultList[2].eliminateList[0].scatter.scatterPos = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 1, 0, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ];
        var max = freegameTimes + freegameTimesBonus;
        for (var i = 3; i <= max; i++) {
          _data.resultList[i] = new G50_CommonData_1.ResultData();
          _data.resultList[i].randomNumList = [ 5, 12, 3, 2, 2 ];
          _data.resultList[i].totalWinBonus = 0;
          _data.resultList[i].eliminateList[0] = new G50_CommonData_1.EliminateData();
          _data.resultList[i].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        }
        return _data;
      };
      G50_TestSocket.prototype.testSpinData_6 = function(p_betScore) {
        var _data = new G50_CommonData_1.BaseGameSpinResponeData();
        var _winScore = 0;
        _data.currentCash = 1e4 * G50_DataManager_1.default.getInstance().coin - p_betScore + _winScore;
        _data.totalBet = p_betScore;
        _data.totalBonus = _winScore;
        _data.resultList[0] = new G50_CommonData_1.ResultData();
        _data.resultList[0].randomNumList = [ 25, 29, 1, 1, 10 ];
        _data.resultList[0].totalWinBonus = 0;
        _data.resultList[0].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        return _data;
      };
      G50_TestSocket.prototype.testSpinData_7 = function(p_betScore) {
        var _data = new G50_CommonData_1.BaseGameSpinResponeData();
        var _winScore = 200 * p_betScore;
        _data.currentCash = 1e4 * G50_DataManager_1.default.getInstance().coin - p_betScore + _winScore;
        _data.totalBet = p_betScore;
        _data.totalBonus = _winScore;
        _data.resultList[0] = new G50_CommonData_1.ResultData();
        _data.resultList[0].randomNumList = [ 53, 618, 188, 1588, 277 ];
        _data.resultList[0].totalWinBonus = _winScore;
        _data.resultList[0].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[0].eliHitPos = [ [ 0, 1, 0, 0 ], [ 0, 1, 1, 0 ], [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 1, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].eliMutiple = 1;
        _data.resultList[0].eliminateList[0].eliWinBonus = 60;
        _data.resultList[0].eliminateList[0].isEliminate = true;
        _data.resultList[0].eliminateList[0].nextReels = [ [ 13, 13, 3, 3 ], [ 11, 11, 15, 2 ], [ 3, 3, 3, 1 ], [ 13, 13, 2, 2 ], [ 1, 3, 3, 12 ] ];
        _data.resultList[0].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].eliminateList[0].totalWinPos = [ [ 0, 1, 0, 0 ], [ 0, 1, 1, 0 ], [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 1, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].winWayList[0] = new G50_CommonData_1.WinLineData();
        _data.resultList[0].eliminateList[0].winWayList[0].lineNum = 5;
        _data.resultList[0].eliminateList[0].winWayList[0].singlePos = [ [ 0, 1, 0, 0 ], [ 0, 1, 1, 0 ], [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 1, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].winWayList[0].specialMultiple = 1;
        _data.resultList[0].eliminateList[0].winWayList[0].winBonus = _winScore;
        _data.resultList[0].eliminateList[0].winWayList[0].winNum = 14;
        _data.resultList[0].eliminateList[0].winWayList[0].x = 15;
        _data.resultList[0].eliminateList[1] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[1].scatter = new G50_CommonData_1.ScatterData();
        return _data;
      };
      G50_TestSocket.prototype.testSpinData_8 = function(p_betScore) {
        var _data = new G50_CommonData_1.BaseGameSpinResponeData();
        var _winScore = 200 * p_betScore;
        _data.currentCash = 1e4 * G50_DataManager_1.default.getInstance().coin - p_betScore + _winScore;
        _data.totalBet = p_betScore;
        _data.totalBonus = _winScore;
        _data.resultList[0] = new G50_CommonData_1.ResultData();
        _data.resultList[0].randomNumList = [ 486, 7, 396, 364, 1553 ];
        _data.resultList[0].totalWinBonus = _winScore;
        _data.resultList[0].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[0].eliHitPos = [ [ 1, 1, 0, 0 ], [ 1, 0, 0, 0 ], [ 0, 0, 1, 1 ], [ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].eliMutiple = 1;
        _data.resultList[0].eliminateList[0].eliWinBonus = 36;
        _data.resultList[0].eliminateList[0].isEliminate = true;
        _data.resultList[0].eliminateList[0].nextReels = [ [ 12, 3, 15, 11 ], [ 13, 20, 15, 15 ], [ 15, 15, 11, 3 ], [ 14, 14, 15, 2 ], [ 12, 11, 14, 1 ] ];
        _data.resultList[0].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].eliminateList[0].scatter.count = 1;
        _data.resultList[0].eliminateList[0].scatter.getSpins = 0;
        _data.resultList[0].eliminateList[0].scatter.scatterPos = [ [ 0, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].totalWinPos = [ [ 1, 1, 0, 0 ], [ 1, 0, 0, 0 ], [ 0, 0, 1, 1 ], [ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].winWayList[0] = new G50_CommonData_1.WinLineData();
        _data.resultList[0].eliminateList[0].winWayList[0].lineNum = 15;
        _data.resultList[0].eliminateList[0].winWayList[0].singlePos = [ [ 1, 1, 0, 0 ], [ 1, 0, 0, 0 ], [ 0, 0, 1, 1 ], [ 1, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].winWayList[0].specialMultiple = 1;
        _data.resultList[0].eliminateList[0].winWayList[0].winBonus = _winScore;
        _data.resultList[0].eliminateList[0].winWayList[0].winNum = 13;
        _data.resultList[0].eliminateList[0].winWayList[0].x = 15;
        _data.resultList[0].eliminateList[1] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[1].eliHitPos = [ [ 0, 0, 1, 0 ], [ 0, 0, 1, 1 ], [ 1, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[1].eliMutiple = 2;
        _data.resultList[0].eliminateList[1].eliWinBonus = 192;
        _data.resultList[0].eliminateList[1].isEliminate = true;
        _data.resultList[0].eliminateList[1].nextReels = [ [ 12, 12, 3, 11 ], [ 11, 13, 13, 20 ], [ 3, 3, 11, 3 ], [ 13, 14, 14, 2 ], [ 12, 11, 14, 1 ] ];
        _data.resultList[0].eliminateList[1].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].eliminateList[1].scatter.count = 1;
        _data.resultList[0].eliminateList[1].scatter.getSpins = 0;
        _data.resultList[0].eliminateList[1].scatter.scatterPos = [ [ 0, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[1].totalWinPos = [ [ 0, 0, 1, 0 ], [ 0, 0, 1, 1 ], [ 1, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[1].winWayList[0] = new G50_CommonData_1.WinLineData();
        _data.resultList[0].eliminateList[1].winWayList[0].lineNum = 15;
        _data.resultList[0].eliminateList[1].winWayList[0].singlePos = [ [ 0, 0, 1, 0 ], [ 0, 0, 1, 1 ], [ 1, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[1].winWayList[0].specialMultiple = 2;
        _data.resultList[0].eliminateList[1].winWayList[0].winBonus = _winScore;
        _data.resultList[0].eliminateList[1].winWayList[0].winNum = 15;
        _data.resultList[0].eliminateList[1].winWayList[0].x = 15;
        _data.resultList[0].eliminateList[2] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[2].eliHitPos = [ [ 0, 0, 0, 1 ], [ 1, 0, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[2].eliMutiple = 3;
        _data.resultList[0].eliminateList[2].eliWinBonus = 18;
        _data.resultList[0].eliminateList[2].isEliminate = true;
        _data.resultList[0].eliminateList[2].nextReels = [ [ 115, 12, 12, 3 ], [ 3, 13, 13, 20 ], [ 2, 3, 3, 3 ], [ 13, 14, 14, 2 ], [ 12, 11, 14, 1 ] ];
        _data.resultList[0].eliminateList[2].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].eliminateList[2].scatter.count = 1;
        _data.resultList[0].eliminateList[2].scatter.getSpins = 0;
        _data.resultList[0].eliminateList[2].scatter.scatterPos = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[2].totalWinPos = [ [ 0, 0, 0, 1 ], [ 1, 0, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[2].winWayList[0] = new G50_CommonData_1.WinLineData();
        _data.resultList[0].eliminateList[2].winWayList[0].lineNum = 15;
        _data.resultList[0].eliminateList[2].winWayList[0].singlePos = [ [ 0, 0, 0, 1 ], [ 1, 0, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[2].winWayList[0].specialMultiple = 3;
        _data.resultList[0].eliminateList[2].winWayList[0].winBonus = _winScore;
        _data.resultList[0].eliminateList[2].winWayList[0].winNum = 11;
        _data.resultList[0].eliminateList[2].winWayList[0].x = 1;
        _data.resultList[0].eliminateList[3] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[3].eliHitPos = [ [ 0, 0, 0, 1 ], [ 1, 0, 0, 0 ], [ 0, 1, 1, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[3].eliMutiple = 5;
        _data.resultList[0].eliminateList[3].eliWinBonus = 18;
        _data.resultList[0].eliminateList[3].isEliminate = true;
        _data.resultList[0].eliminateList[3].nextReels = [ [ 115, 15, 12, 12 ], [ 3, 13, 13, 20 ], [ 2, 3, 3, 2 ], [ 13, 14, 14, 2 ], [ 12, 11, 14, 1 ] ];
        _data.resultList[0].eliminateList[3].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].eliminateList[3].scatter.count = 1;
        _data.resultList[0].eliminateList[3].scatter.getSpins = 0;
        _data.resultList[0].eliminateList[3].scatter.scatterPos = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[3].totalWinPos = [ [ 0, 0, 0, 1 ], [ 1, 0, 0, 0 ], [ 0, 1, 1, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[3].winWayList[0] = new G50_CommonData_1.WinLineData();
        _data.resultList[0].eliminateList[3].winWayList[0].lineNum = 15;
        _data.resultList[0].eliminateList[3].winWayList[0].singlePos = [ [ 0, 0, 0, 1 ], [ 1, 0, 0, 0 ], [ 0, 1, 1, 1 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[3].winWayList[0].specialMultiple = 5;
        _data.resultList[0].eliminateList[3].winWayList[0].winBonus = _winScore;
        _data.resultList[0].eliminateList[3].winWayList[0].winNum = 3;
        _data.resultList[0].eliminateList[3].winWayList[0].x = 3;
        _data.resultList[0].eliminateList[4] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[4].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].reels[0] = [ 14, 14, 13, 13 ];
        _data.resultList[0].reels[1] = [ 2, 2, 14, 11 ];
        _data.resultList[0].reels[2] = [ 3, 114, 14, 1 ];
        _data.resultList[0].reels[3] = [ 14, 11, 11, 13 ];
        _data.resultList[0].reels[4] = [ 4, 11, 13, 3 ];
        return _data;
      };
      G50_TestSocket.prototype.testSpinData_9 = function(p_betScore) {
        var _data = new G50_CommonData_1.BaseGameSpinResponeData();
        _data.currentCash = 1e4 * G50_DataManager_1.default.getInstance().coin - p_betScore;
        _data.totalBet = p_betScore;
        _data.totalBonus = 0;
        _data.getJackpot = true;
        _data.resultList[0] = new G50_CommonData_1.ResultData();
        _data.resultList[0].randomNumList = [ 5, 12, 2, 2, 2 ];
        _data.resultList[0].totalWinBonus = 1e7;
        _data.resultList[0].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].jackpotBonus = {
          count: 1,
          jackpotPos: [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 0, 0, 0 ] ],
          winBonus: 1e7
        };
        return _data;
      };
      G50_TestSocket.prototype.testSpinData_10 = function(p_betScore) {
        var _data = new G50_CommonData_1.BaseGameSpinResponeData();
        _data.currentCash = 1e4 * G50_DataManager_1.default.getInstance().coin - p_betScore;
        _data.totalBet = p_betScore;
        _data.totalBonus = 0;
        _data.getJackpot = true;
        _data.resultList[0] = new G50_CommonData_1.ResultData();
        _data.resultList[0].randomNumList = [ 5, 12, 2, 2, 2 ];
        _data.resultList[0].totalWinBonus = 1e7;
        _data.resultList[0].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].jackpotBonus = {
          count: 2,
          jackpotPos: [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 0, 0, 0 ] ],
          winBonus: 1e7
        };
        return _data;
      };
      G50_TestSocket.prototype.testSpinData_11 = function(p_betScore) {
        var _data = new G50_CommonData_1.BaseGameSpinResponeData();
        _data.currentCash = 1e4 * G50_DataManager_1.default.getInstance().coin - p_betScore;
        _data.totalBet = p_betScore;
        _data.totalBonus = 0;
        _data.getJackpot = true;
        _data.resultList[0] = new G50_CommonData_1.ResultData();
        _data.resultList[0].randomNumList = [ 5, 12, 2, 2, 2 ];
        _data.resultList[0].totalWinBonus = 1e7;
        _data.resultList[0].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].jackpotBonus = {
          count: 3,
          jackpotPos: [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 0, 0, 0 ] ],
          winBonus: 1e7
        };
        return _data;
      };
      G50_TestSocket.prototype.testSpinData_12 = function(p_betScore) {
        var _data = new G50_CommonData_1.BaseGameSpinResponeData();
        _data.currentCash = 1e4 * G50_DataManager_1.default.getInstance().coin - p_betScore;
        _data.totalBet = p_betScore;
        _data.totalBonus = 0;
        _data.getJackpot = true;
        _data.resultList[0] = new G50_CommonData_1.ResultData();
        _data.resultList[0].randomNumList = [ 5, 12, 2, 2, 2 ];
        _data.resultList[0].totalWinBonus = 1e7;
        _data.resultList[0].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].jackpotBonus = {
          count: 4,
          jackpotPos: [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 0, 0, 0 ] ],
          winBonus: 1e7
        };
        return _data;
      };
      G50_TestSocket.prototype.testSpinData_13 = function(p_betScore) {
        var _data = new G50_CommonData_1.BaseGameSpinResponeData();
        var _winScore = p_betScore / 50 * 15 * 1 * 1 + p_betScore / 50 * 15 * 1 * 1;
        _data.currentCash = 1e4 * G50_DataManager_1.default.getInstance().coin - p_betScore + _winScore;
        _data.totalBet = p_betScore;
        _data.totalBonus = _winScore;
        _data.resultList[0] = new G50_CommonData_1.ResultData();
        _data.resultList[0].randomNumList = [ 620, 346, 620, 283, 60 ];
        _data.resultList[0].totalWinBonus = _winScore;
        _data.resultList[0].eliminateList[0] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[0].eliHitPos = [ [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ] ];
        _data.resultList[0].eliminateList[0].eliMutiple = 1;
        _data.resultList[0].eliminateList[0].eliWinBonus = _winScore;
        _data.resultList[0].eliminateList[0].isEliminate = true;
        _data.resultList[0].eliminateList[0].nextReels = [ [ 12, 15, 20, 13 ], [ 11, 11, 12, 12 ], [ 12, 12, 12, 20 ], [ 11, 14, 1, 13 ], [ 3, 2, 14, 14 ] ];
        _data.resultList[0].eliminateList[0].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].eliminateList[0].scatter.count = 0;
        _data.resultList[0].eliminateList[0].scatter.getSpins = 0;
        _data.resultList[0].eliminateList[0].scatter.scatterPos = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[0].totalWinPos = [ [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ] ];
        _data.resultList[0].eliminateList[0].winWayList[0] = new G50_CommonData_1.WinLineData();
        _data.resultList[0].eliminateList[0].winWayList[0].lineNum = 3;
        _data.resultList[0].eliminateList[0].winWayList[0].singlePos = [ [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ] ];
        _data.resultList[0].eliminateList[0].winWayList[0].specialMultiple = 1;
        _data.resultList[0].eliminateList[0].winWayList[0].winBonus = _winScore;
        _data.resultList[0].eliminateList[0].winWayList[0].winNum = 15;
        _data.resultList[0].eliminateList[0].winWayList[0].x = 6;
        _data.resultList[0].eliminateList[1] = new G50_CommonData_1.EliminateData();
        _data.resultList[0].eliminateList[1].eliHitPos = [];
        _data.resultList[0].eliminateList[1].eliMutiple = 3;
        _data.resultList[0].eliminateList[1].eliWinBonus = 0;
        _data.resultList[0].eliminateList[1].isEliminate = false;
        _data.resultList[0].eliminateList[1].nextReels = [];
        _data.resultList[0].eliminateList[1].scatter = new G50_CommonData_1.ScatterData();
        _data.resultList[0].eliminateList[1].scatter.count = 0;
        _data.resultList[0].eliminateList[1].scatter.getSpins = 0;
        _data.resultList[0].eliminateList[1].scatter.scatterPos = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
        _data.resultList[0].eliminateList[1].winWayList = [];
        return _data;
      };
      G50_TestSocket.prototype.setOnLeaveEvent = function() {
        return new Promise(function(resolve, reject) {
          resolve();
        });
      };
      var G50_TestSocket_1;
      G50_TestSocket.assignData = -1;
      G50_TestSocket = G50_TestSocket_1 = __decorate([ ccclass ], G50_TestSocket);
      return G50_TestSocket;
    }();
    exports.default = G50_TestSocket;
    cc._RF.pop();
  }, {
    "../../../Game/script/G50_CommonData": "G50_CommonData",
    "../G50_DataManager": "G50_DataManager"
  } ],
  G50_TestUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0b33IwDfpHWaNFMwn75p+v", "G50_TestUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var DesktopBrowserTransform_1 = require("../../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform");
    var G50_DataManager_1 = require("../../Common/script/G50_DataManager");
    var G50_TestSocket_1 = require("../../Common/script/socket/G50_TestSocket");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G50_TestUI = function(_super) {
      __extends(G50_TestUI, _super);
      function G50_TestUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.menuNode = null;
        _this.gameSpeedEditBox = null;
        return _this;
      }
      G50_TestUI.prototype.start = function() {
        if (G50_DataManager_1.default.offLineMode) {
          this.node.setPosition(cc.Vec2.ZERO);
          this.menuNode.active = false;
        } else this.node.active = false;
      };
      G50_TestUI.prototype.setTestData = function(event, customEventData) {
        cc.log("\u4f7f\u7528\u6e2c\u8a66\u8cc7\u6599 " + customEventData);
        G50_TestSocket_1.default.assignData = Number(customEventData);
        this.closeMenu();
      };
      G50_TestUI.prototype.setGameSpeed = function() {
        DesktopBrowserTransform_1.default.getInstance().setGameSpeed(Number(this.gameSpeedEditBox.string));
      };
      G50_TestUI.prototype.showMenu = function() {
        this.menuNode.active = true;
      };
      G50_TestUI.prototype.closeMenu = function() {
        cc.log("\u95dc\u9589\u6e2c\u8a66UI");
        this.menuNode.active = false;
      };
      __decorate([ property(cc.Node) ], G50_TestUI.prototype, "menuNode", void 0);
      __decorate([ property(cc.EditBox) ], G50_TestUI.prototype, "gameSpeedEditBox", void 0);
      G50_TestUI = __decorate([ ccclass ], G50_TestUI);
      return G50_TestUI;
    }(cc.Component);
    exports.default = G50_TestUI;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform": void 0,
    "../../Common/script/G50_DataManager": "G50_DataManager",
    "../../Common/script/socket/G50_TestSocket": "G50_TestSocket"
  } ],
  G50_WinScorePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "837ebGzmRRAxIHNZehEiJtG", "G50_WinScorePanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager_1 = require("../../../../Common/Tools/AudioManager/AudioManager");
    var Slot_WinScorePanel_1 = require("../../../../SlotFramework/Game/Panel/Slot_WinScorePanel");
    var FXController_1 = require("../../../../Common/Optional/Crosis/FXController/FXController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SCALE_2 = "FX_AnHighWin_scale2";
    var G50_WinScorePanel = function(_super) {
      __extends(G50_WinScorePanel, _super);
      function G50_WinScorePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.anBigWin = null;
        _this.anSuperWin = null;
        _this.anMegaWin = null;
        _this.fxBigWin = null;
        _this.fxSuperWin = null;
        _this.fxMegaWin = null;
        _this.background = null;
        _this.fxStart = null;
        _this.fxEnd = null;
        return _this;
      }
      G50_WinScorePanel.prototype.close = function() {
        var _this = this;
        this.node.stopAllActions();
        this.background.interactable = false;
        cc.tween(this.node).to(.85, {
          opacity: 0
        }).call(function() {
          _this.node.active = false;
          _this.node.opacity = 255;
          _this.runScore.resetToZero();
          _this.background.interactable = true;
        }).start();
      };
      G50_WinScorePanel.prototype.closeAllWinText = function() {
        this.fxBigWin.stop();
        this.fxSuperWin.stop();
        this.fxMegaWin.stop();
        this.fxEnd.stop();
      };
      G50_WinScorePanel.prototype.showBigWinEffect = function() {
        cc.log("\u3010Big Win\u3011");
        _super.prototype.showBigWinEffect.call(this);
        this.closeAllWinText();
        this.fxBigWin.play();
        this.fxStart.play();
        AudioManager_1.AudioManager.instance.playAudioEvent("WinScorePanelBigWinEffect");
      };
      G50_WinScorePanel.prototype.showSuperWinEffect = function() {
        cc.log("\u3010Super Win\u3011 ");
        _super.prototype.showSuperWinEffect.call(this);
        this.closeAllWinText();
        this.fxSuperWin.play();
        this.fxStart.play();
        AudioManager_1.AudioManager.instance.playAudioEvent("WinScorePanelSuperWinEffect");
      };
      G50_WinScorePanel.prototype.showMegaWinEffect = function() {
        cc.log("\u3010Mega Win\u3011");
        _super.prototype.showMegaWinEffect.call(this);
        this.closeAllWinText();
        this.fxMegaWin.play();
        this.fxStart.play();
        AudioManager_1.AudioManager.instance.playAudioEvent("WinScorePanelMegaWinEffect");
      };
      G50_WinScorePanel.prototype.runScoreEnd = function() {
        _super.prototype.runScoreEnd.call(this);
        this.fxEnd.play();
        switch (this.winScoreType) {
         case Slot_WinScorePanel_1.WIN_SCORE_TYPE.BIG_WIN:
          this.anBigWin.play(SCALE_2);
          break;

         case Slot_WinScorePanel_1.WIN_SCORE_TYPE.SUPER_WIN:
          this.anSuperWin.play(SCALE_2);
          break;

         case Slot_WinScorePanel_1.WIN_SCORE_TYPE.MEGA_WIN:
          this.anMegaWin.play(SCALE_2);
        }
      };
      __decorate([ property(cc.Animation) ], G50_WinScorePanel.prototype, "anBigWin", void 0);
      __decorate([ property(cc.Animation) ], G50_WinScorePanel.prototype, "anSuperWin", void 0);
      __decorate([ property(cc.Animation) ], G50_WinScorePanel.prototype, "anMegaWin", void 0);
      __decorate([ property(FXController_1.default) ], G50_WinScorePanel.prototype, "fxBigWin", void 0);
      __decorate([ property(FXController_1.default) ], G50_WinScorePanel.prototype, "fxSuperWin", void 0);
      __decorate([ property(FXController_1.default) ], G50_WinScorePanel.prototype, "fxMegaWin", void 0);
      __decorate([ property(cc.Button) ], G50_WinScorePanel.prototype, "background", void 0);
      __decorate([ property(FXController_1.default) ], G50_WinScorePanel.prototype, "fxStart", void 0);
      __decorate([ property(FXController_1.default) ], G50_WinScorePanel.prototype, "fxEnd", void 0);
      G50_WinScorePanel = __decorate([ ccclass ], G50_WinScorePanel);
      return G50_WinScorePanel;
    }(Slot_WinScorePanel_1.default);
    exports.default = G50_WinScorePanel;
    cc._RF.pop();
  }, {
    "../../../../Common/Optional/Crosis/FXController/FXController": void 0,
    "../../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../../SlotFramework/Game/Panel/Slot_WinScorePanel": void 0
  } ]
}, {}, [ "G50_DataManager", "G50_DynamicPopUpPanelManager", "G50_FixPanelHeight", "G50_LoadingItem", "G50_SocketConnect", "G50_SocketManager", "G50_TestSocket", "G50_CommonData", "G50_Game", "G50_SlotReelUtils", "G50_TestUI", "G50_AutoGamePanel", "G50_ConnetLineItem", "G50_FreeGameGetScorePanel", "G50_FreeGamePanel", "G50_GameUI", "G50_HistoryPanel", "G50_JackpotPanel", "G50_MusicOptionPanel", "G50_Reel", "G50_RulePanel", "G50_SlotReelManager", "G50_Symbol", "G50_SymbolTipPanel", "G50_WinScorePanel", "G50_Loading_InitData", "G50_Loading", "G50_LoadingUI", "G50_Lobby", "G50_LobbyUI" ]);