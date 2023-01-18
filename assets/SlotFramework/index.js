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
  BasePopupManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19881ROiM9MZp6MJA6nfpOY", "BasePopupManager");
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
    exports.BasePopupManager = void 0;
    var Singleton_1 = require("../../../Common/Tools/Base/Singleton");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BasePopupManager = function(_super) {
      __extends(BasePopupManager, _super);
      function BasePopupManager() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BasePopupManager = __decorate([ ccclass ], BasePopupManager);
      return BasePopupManager;
    }(Singleton_1.default);
    exports.BasePopupManager = BasePopupManager;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/Base/Singleton": void 0
  } ],
  ConfirmDialogBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4c9c33ipG1KMZ8CzfUFMxc5", "ConfirmDialogBox");
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
    exports.ConfirmDialogBox = void 0;
    var BaseConfirmDialogBox_1 = require("../../../../Common/Tools/DynamicPopUp/DialogBox/BaseConfirmDialogBox");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var ConfirmDialogBox = function(_super) {
      __extends(ConfirmDialogBox, _super);
      function ConfirmDialogBox() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.popup = null;
        _this.confirmApply = null;
        return _this;
      }
      ConfirmDialogBox_1 = ConfirmDialogBox;
      ConfirmDialogBox.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
      };
      ConfirmDialogBox.prototype.onDestroy = function() {};
      ConfirmDialogBox.prototype.showBlockLayer = function() {
        this.updatePopUp();
        _super.prototype.showBlockLayer.call(this);
      };
      ConfirmDialogBox.prototype.show = function(msg, callback, align) {
        void 0 === callback && (callback = null);
        this.popup && cc.audioEngine.playEffect(this.popup, false);
        _super.prototype.show.call(this, msg, callback, align);
        ConfirmDialogBox_1.isShow = true;
      };
      ConfirmDialogBox.prototype.hide = function() {
        _super.prototype.hide.call(this);
        ConfirmDialogBox_1.isShow = false;
      };
      ConfirmDialogBox.prototype.onClickConfirmBtn = function() {
        this.confirmApply && cc.audioEngine.playEffect(this.confirmApply, false);
        _super.prototype.onClickConfirmBtn.call(this);
      };
      var ConfirmDialogBox_1;
      ConfirmDialogBox.isShow = false;
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "ef_popup"
      }) ], ConfirmDialogBox.prototype, "popup", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "ef_confirm_apply"
      }) ], ConfirmDialogBox.prototype, "confirmApply", void 0);
      ConfirmDialogBox = ConfirmDialogBox_1 = __decorate([ ccclass, menu("\u81ea\u8a02\u5de5\u5177/SlotFramework/DialogBox/ConfirmDialogBox") ], ConfirmDialogBox);
      return ConfirmDialogBox;
    }(BaseConfirmDialogBox_1.default);
    exports.ConfirmDialogBox = ConfirmDialogBox;
    cc._RF.pop();
  }, {
    "../../../../Common/Tools/DynamicPopUp/DialogBox/BaseConfirmDialogBox": void 0
  } ],
  Slot_AutoGamePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a3c3V0YtdFBZUbkxaJHFzv", "Slot_AutoGamePanel");
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
    exports.SPIN_ARRAY = exports.SPIN_COUNT = void 0;
    var AudioManager_1 = require("../../../Common/Tools/AudioManager/AudioManager");
    var LocalizationManager_1 = require("../../../Common/Tools/Localization/LocalizationManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SPIN_COUNT;
    (function(SPIN_COUNT) {
      SPIN_COUNT[SPIN_COUNT["TEN"] = 10] = "TEN";
      SPIN_COUNT[SPIN_COUNT["TWENTY"] = 20] = "TWENTY";
      SPIN_COUNT[SPIN_COUNT["FIFTY"] = 50] = "FIFTY";
      SPIN_COUNT[SPIN_COUNT["ONE_HUNDRED"] = 100] = "ONE_HUNDRED";
      SPIN_COUNT[SPIN_COUNT["UNLIMITED"] = -1] = "UNLIMITED";
    })(SPIN_COUNT = exports.SPIN_COUNT || (exports.SPIN_COUNT = {}));
    var SPIN_ARRAY;
    (function(SPIN_ARRAY) {
      SPIN_ARRAY[SPIN_ARRAY["TEN"] = 0] = "TEN";
      SPIN_ARRAY[SPIN_ARRAY["TWENTY"] = 1] = "TWENTY";
      SPIN_ARRAY[SPIN_ARRAY["FIFTY"] = 2] = "FIFTY";
      SPIN_ARRAY[SPIN_ARRAY["ONE_HUNDRED"] = 3] = "ONE_HUNDRED";
      SPIN_ARRAY[SPIN_ARRAY["UNLIMITED"] = 4] = "UNLIMITED";
    })(SPIN_ARRAY = exports.SPIN_ARRAY || (exports.SPIN_ARRAY = {}));
    var Slot_AutoGamePanel = function(_super) {
      __extends(Slot_AutoGamePanel, _super);
      function Slot_AutoGamePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.hasScore = null;
        _this.betScore = null;
        _this.scoreLessStopLabel = null;
        _this.scoreLessStopSlider = null;
        _this.scoreLessStopProgressBar = null;
        _this.winScoreStopLabel = null;
        _this.winScoreStopSlider = null;
        _this.winScoreStopProgressBar = null;
        _this.spinCountToggles = [];
        _this.spinCountLocks = [];
        _this.notEnoughMoneyTip = null;
        _this.data = null;
        _this.moneyLessStopSpacing = [];
        _this.winMoneyStopSpacing = [];
        return _this;
      }
      Slot_AutoGamePanel.prototype.init = function() {
        this.setWinMoneyStopSpacing();
        this.setMoneyLessStopSpacing();
        this.notEnoughMoneyTip && (this.notEnoughMoneyTip.active = false);
        this.node.active = false;
      };
      Slot_AutoGamePanel.prototype.changeScoreLessStopProgressBar = function(slider, customEventData) {
        this.scoreLessStopProgressBar.progress = slider.progress;
      };
      Slot_AutoGamePanel.prototype.changeWinScoreStopProgressBar = function(slider, customEventData) {
        this.winScoreStopProgressBar.progress = slider.progress;
      };
      Slot_AutoGamePanel.prototype.changeScoreLessStopLabel = function(slider, customEventData) {
        var _index = Math.round(51 * slider.progress);
        var _value = 0;
        if (0 == _index) this.scoreLessStopLabel.string = LocalizationManager_1.default.getInstance().get("TEXT_NO"); else {
          if (this.spinCountToggles[SPIN_ARRAY.UNLIMITED].isChecked) {
            var _hasMoney = this.data.coin;
            _index = Math.round(50 * slider.progress);
            _value = _hasMoney * (this.moneyLessStopSpacing[_index] + 1) / 50;
          } else {
            var _betMoney = this.data.getClientMoney(this.data.betOdds[this.data.betOddsStartIndex] * this.data.oneOddsScore);
            var _min = _betMoney * this.data.autoGameSpinCount / 2;
            _value = _min + this.data.autoGameSpinCount * _betMoney * this.moneyLessStopSpacing[_index] * .01;
          }
          _value = Number(_value.toFixed(2));
          this.scoreLessStopLabel.string = _value.toString();
        }
        this.data.autoGameScoreLessStop = _value;
      };
      Slot_AutoGamePanel.prototype.changeWinScoreStopLabel = function(slider, customEventData) {
        var _index = Math.round(50 * slider.progress);
        var _betMoney = this.data.getClientMoney(this.data.betOdds[this.data.betOddsStartIndex] * this.data.oneOddsScore);
        _betMoney *= this.winMoneyStopSpacing[_index];
        this.winScoreStopLabel.string = 0 == _index ? LocalizationManager_1.default.getInstance().get("TEXT_NO") : _betMoney.toString();
        this.data.autoGameWinScoreStop = _betMoney;
      };
      Slot_AutoGamePanel.prototype.onChangeSpinCountBtn = function(toogle, customEventData) {
        AudioManager_1.AudioManager.instance.playAudioEvent("ChangeSpinCountClick");
        this.changeSpinCount(customEventData);
      };
      Slot_AutoGamePanel.prototype.setWinMoneyStopSpacing = function() {
        var _count = 0;
        this.winMoneyStopSpacing[_count++] = 0;
        for (var i = 10; i <= 500; i += 10) this.winMoneyStopSpacing[_count++] = i;
      };
      Slot_AutoGamePanel.prototype.setMoneyLessStopSpacing = function() {
        for (var i = 0; i <= 51; i++) this.moneyLessStopSpacing[i] = i - 1;
      };
      Slot_AutoGamePanel.prototype.getCanSpinCount = function() {
        var _hasMoney = this.data.coin;
        var _betMoney = this.data.getClientMoney(this.data.betOdds[this.data.betOddsStartIndex] * this.data.oneOddsScore);
        var _canSpinCount = _hasMoney / _betMoney;
        return Math.floor(_canSpinCount);
      };
      Slot_AutoGamePanel.prototype.setSpinCountLock = function() {
        for (var i = 0; i < this.spinCountLocks.length; i++) {
          var _canSpinCount = this.getCanSpinCount();
          var _spinCount = SPIN_COUNT[SPIN_ARRAY[i]];
          this.spinCountLocks[i].active = _canSpinCount < _spinCount;
        }
      };
      Slot_AutoGamePanel.prototype.initSpinCountToogle = function() {
        if (this.getCanSpinCount() >= 10) {
          this.spinCountToggles[SPIN_ARRAY.TEN].isChecked = true;
          this.changeSpinCount(10);
        } else {
          this.spinCountToggles[SPIN_ARRAY.UNLIMITED].isChecked = true;
          this.changeSpinCount(-1);
        }
      };
      Slot_AutoGamePanel.prototype.setHasMoney = function() {
        this.hasScore.string = this.data.coin.toString();
      };
      Slot_AutoGamePanel.prototype.setBetMoney = function() {
        var _betMoney = this.data.getClientMoney(this.data.betOdds[this.data.betOddsStartIndex] * this.data.oneOddsScore);
        this.betScore.string = _betMoney.toString();
      };
      Slot_AutoGamePanel.prototype.resetSlider = function() {
        this.winScoreStopSlider.progress = 0;
        this.scoreLessStopSlider.progress = 0;
        this.scoreLessStopSlider.slideEvents[0].emit([ this.scoreLessStopSlider ]);
        this.scoreLessStopSlider.slideEvents[1].emit([ this.scoreLessStopSlider ]);
        this.winScoreStopSlider.slideEvents[0].emit([ this.winScoreStopSlider ]);
        this.winScoreStopSlider.slideEvents[1].emit([ this.winScoreStopSlider ]);
      };
      Slot_AutoGamePanel.prototype.changeSpinCount = function(p_count) {
        this.data.autoGameSpinCount = p_count;
        this.scoreLessStopSlider.slideEvents[0].emit([ this.scoreLessStopSlider ]);
        this.scoreLessStopSlider.slideEvents[1].emit([ this.scoreLessStopSlider ]);
        this.winScoreStopSlider.slideEvents[0].emit([ this.winScoreStopSlider ]);
        this.winScoreStopSlider.slideEvents[1].emit([ this.winScoreStopSlider ]);
      };
      Slot_AutoGamePanel.prototype.open = function() {
        this.node.active = true;
        this.node.position = cc.Vec3.ZERO;
        this.initSpinCountToogle();
        this.setSpinCountLock();
        this.setHasMoney();
        this.setBetMoney();
        this.resetSlider();
      };
      Slot_AutoGamePanel.prototype.close = function() {
        cc.log("\u958b\u555f\u81ea\u52d5\u904a\u6232\u9762\u677f");
        AudioManager_1.AudioManager.instance.playAudioEvent("CloseMenu");
        this.node.active = false;
      };
      Slot_AutoGamePanel.prototype.isToggleUnlimited = function() {
        return this.spinCountToggles[SPIN_ARRAY.UNLIMITED].isChecked;
      };
      __decorate([ property(cc.Label) ], Slot_AutoGamePanel.prototype, "hasScore", void 0);
      __decorate([ property(cc.Label) ], Slot_AutoGamePanel.prototype, "betScore", void 0);
      __decorate([ property(cc.Label) ], Slot_AutoGamePanel.prototype, "scoreLessStopLabel", void 0);
      __decorate([ property(cc.Slider) ], Slot_AutoGamePanel.prototype, "scoreLessStopSlider", void 0);
      __decorate([ property(cc.ProgressBar) ], Slot_AutoGamePanel.prototype, "scoreLessStopProgressBar", void 0);
      __decorate([ property(cc.Label) ], Slot_AutoGamePanel.prototype, "winScoreStopLabel", void 0);
      __decorate([ property(cc.Slider) ], Slot_AutoGamePanel.prototype, "winScoreStopSlider", void 0);
      __decorate([ property(cc.ProgressBar) ], Slot_AutoGamePanel.prototype, "winScoreStopProgressBar", void 0);
      __decorate([ property([ cc.Toggle ]) ], Slot_AutoGamePanel.prototype, "spinCountToggles", void 0);
      __decorate([ property([ cc.Node ]) ], Slot_AutoGamePanel.prototype, "spinCountLocks", void 0);
      __decorate([ property(cc.Node) ], Slot_AutoGamePanel.prototype, "notEnoughMoneyTip", void 0);
      Slot_AutoGamePanel = __decorate([ ccclass ], Slot_AutoGamePanel);
      return Slot_AutoGamePanel;
    }(cc.Component);
    exports.default = Slot_AutoGamePanel;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../Common/Tools/Localization/LocalizationManager": void 0
  } ],
  Slot_DataManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5535TFMxRKX4M9PdgegrCX", "Slot_DataManager");
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
    exports.SYMBOL_NAME = void 0;
    var AudioManager_1 = require("../Common/Tools/AudioManager/AudioManager");
    var BaseDataManager_1 = require("../Common/Tools/Base/BaseDataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SYMBOL_NAME;
    (function(SYMBOL_NAME) {
      SYMBOL_NAME[SYMBOL_NAME["H1"] = 1] = "H1";
      SYMBOL_NAME[SYMBOL_NAME["H2"] = 2] = "H2";
      SYMBOL_NAME[SYMBOL_NAME["H3"] = 3] = "H3";
      SYMBOL_NAME[SYMBOL_NAME["H4"] = 4] = "H4";
      SYMBOL_NAME[SYMBOL_NAME["H5"] = 5] = "H5";
      SYMBOL_NAME[SYMBOL_NAME["H6"] = 6] = "H6";
      SYMBOL_NAME[SYMBOL_NAME["N1"] = 11] = "N1";
      SYMBOL_NAME[SYMBOL_NAME["N2"] = 12] = "N2";
      SYMBOL_NAME[SYMBOL_NAME["N3"] = 13] = "N3";
      SYMBOL_NAME[SYMBOL_NAME["N4"] = 14] = "N4";
      SYMBOL_NAME[SYMBOL_NAME["N5"] = 15] = "N5";
      SYMBOL_NAME[SYMBOL_NAME["N6"] = 16] = "N6";
      SYMBOL_NAME[SYMBOL_NAME["Scatter"] = 20] = "Scatter";
      SYMBOL_NAME[SYMBOL_NAME["Empty"] = 21] = "Empty";
      SYMBOL_NAME[SYMBOL_NAME["COLLECT"] = 30] = "COLLECT";
      SYMBOL_NAME[SYMBOL_NAME["Bonus"] = 31] = "Bonus";
      SYMBOL_NAME[SYMBOL_NAME["RandomSign"] = 32] = "RandomSign";
      SYMBOL_NAME[SYMBOL_NAME["Wild"] = 50] = "Wild";
      SYMBOL_NAME[SYMBOL_NAME["Wild2x"] = 52] = "Wild2x";
      SYMBOL_NAME[SYMBOL_NAME["Wild3x"] = 53] = "Wild3x";
      SYMBOL_NAME[SYMBOL_NAME["Wild5x"] = 55] = "Wild5x";
      SYMBOL_NAME[SYMBOL_NAME["LongWild"] = 100] = "LongWild";
      SYMBOL_NAME[SYMBOL_NAME["BAR"] = 109] = "BAR";
      SYMBOL_NAME[SYMBOL_NAME["FRUIT"] = 119] = "FRUIT";
      SYMBOL_NAME[SYMBOL_NAME["Jackpot_Mini"] = 991] = "Jackpot_Mini";
      SYMBOL_NAME[SYMBOL_NAME["Jackpot_Minor"] = 992] = "Jackpot_Minor";
      SYMBOL_NAME[SYMBOL_NAME["Jackpot_Major"] = 993] = "Jackpot_Major";
      SYMBOL_NAME[SYMBOL_NAME["Jackpot_Grand"] = 994] = "Jackpot_Grand";
      SYMBOL_NAME[SYMBOL_NAME["Jackpot"] = 999] = "Jackpot";
    })(SYMBOL_NAME = exports.SYMBOL_NAME || (exports.SYMBOL_NAME = {}));
    var Slot_DataManager = function(_super) {
      __extends(Slot_DataManager, _super);
      function Slot_DataManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isFaseSpin = false;
        _this.isAutoSpin = false;
        _this.betOddsStartIndex = 0;
        _this.betOdds = [];
        _this.oneOddsScore = 5e3;
        _this.remainingFreeGameCount = 0;
        _this.autoGameSpinCount = 0;
        _this.autoGameWinScoreStop = 0;
        _this.autoGameScoreLessStop = 0;
        _this.autoGameStartScore = 0;
        _this.camera = null;
        _this.texture = null;
        _this._canvas = null;
        _this.playerBetScore = 0;
        _this.totalBonus = 0;
        _this.reelStartIndex = [];
        _this.reelTable_BG = [];
        _this.reelTable_BBG = [];
        _this.reelTable_FG = [];
        _this.magnificationTable = {};
        return _this;
      }
      Slot_DataManager_1 = Slot_DataManager;
      Slot_DataManager.prototype.init = function() {
        _super.prototype.init.call(this);
        this.isAutoSpin = false;
        this.isFaseSpin = false;
        AudioManager_1.AudioManager.instance.init();
      };
      Slot_DataManager.prototype.screenshotInit = function(node) {
        var texture = new cc.RenderTexture();
        var gl = cc.game._renderContext;
        texture.initWithSize(node.width, node.height, gl.STENCIL_INDEX8);
        this.camera = node.addComponent(cc.Camera);
        this.camera.targetTexture = texture;
        this.texture = texture;
      };
      Slot_DataManager.prototype.saveBetIndex = function(p_betIndex) {
        var _key = this.nickname + this.gameID.toString();
        cc.sys.localStorage.setItem(_key, p_betIndex);
      };
      Slot_DataManager.prototype.getBetIndex = function() {
        var _key = this.nickname + this.gameID.toString();
        var _betIndex = cc.sys.localStorage.getItem(_key);
        false == cc.isValid(_betIndex) && (_betIndex = 3);
        return _betIndex;
      };
      Slot_DataManager.prototype.initImage = function() {
        var dataURL = this._canvas.toDataURL("image/png");
        var img = document.createElement("img");
        img.src = dataURL;
        return img;
      };
      Slot_DataManager.prototype.createSprite = function() {
        var width = this.texture.width;
        var height = this.texture.height;
        if (this._canvas) this.clearCanvas(); else {
          this._canvas = document.createElement("canvas");
          this._canvas.width = width;
          this._canvas.height = height;
        }
        var ctx = this._canvas.getContext("2d");
        this.camera.render();
        var data = this.texture.readPixels();
        var rowBytes = 4 * width;
        for (var row = 0; row < height; row++) {
          var srow = height - 1 - row;
          var imageData = ctx.createImageData(width, 1);
          var start = srow * width * 4;
          for (var i = 0; i < rowBytes; i++) imageData.data[i] = data[start + i];
          ctx.putImageData(imageData, 0, row);
        }
        return this._canvas;
      };
      Slot_DataManager.prototype.downloadImg = function() {
        this.createSprite();
        var img = this.initImage();
        Slot_DataManager_1.screenshotImg = img;
      };
      Slot_DataManager.prototype.showSprite = function(targetNode) {
        var texture = new cc.Texture2D();
        texture.initWithElement(Slot_DataManager_1.screenshotImg);
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        var node = new cc.Node();
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
        node.parent = targetNode;
      };
      Slot_DataManager.prototype.clearCanvas = function() {
        var ctx = this._canvas.getContext("2d");
        ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
      };
      Slot_DataManager.prototype.setLoginData = function(data) {
        _super.prototype.setLoginData.call(this, data);
        this.coin = this.getClientMoney(data.balance);
      };
      var Slot_DataManager_1;
      Slot_DataManager.screenshotImg = null;
      Slot_DataManager.LOADING_UI_NODE = null;
      Slot_DataManager = Slot_DataManager_1 = __decorate([ ccclass ], Slot_DataManager);
      return Slot_DataManager;
    }(BaseDataManager_1.default);
    exports.default = Slot_DataManager;
    cc._RF.pop();
  }, {
    "../Common/Tools/AudioManager/AudioManager": void 0,
    "../Common/Tools/Base/BaseDataManager": void 0
  } ],
  Slot_DynamicPopUpManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4daadt2W71AE6BJQoI5FeXg", "Slot_DynamicPopUpManager");
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
    var BaseDynamicPopUpManager_1 = require("../../../Common/Tools/Base/BaseDynamicPopUpManager");
    var Slot_DynamicPopUpManager = function(_super) {
      __extends(Slot_DynamicPopUpManager, _super);
      function Slot_DynamicPopUpManager() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Slot_DynamicPopUpManager.prototype.prestore = function(prefabs) {
        for (var _i = 0, prefabs_1 = prefabs; _i < prefabs_1.length; _i++) {
          var prefab = prefabs_1[_i];
          prefab.name;
          _super.prototype.prestore.call(this, [ prefab ]);
        }
      };
      return Slot_DynamicPopUpManager;
    }(BaseDynamicPopUpManager_1.default);
    exports.default = Slot_DynamicPopUpManager;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/Base/BaseDynamicPopUpManager": void 0
  } ],
  Slot_FreeGameGetScorePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca760pRr6NMeaUsyidWOQsr", "Slot_FreeGameGetScorePanel");
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
    var BaseDataManager_1 = require("../../../Common/Tools/Base/BaseDataManager");
    var DesktopBrowserTransform_1 = require("../../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot_FreeGameGetScorePanel = function(_super) {
      __extends(Slot_FreeGameGetScorePanel, _super);
      function Slot_FreeGameGetScorePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.freeGameGetScore = null;
        return _this;
      }
      Slot_FreeGameGetScorePanel.prototype.init = function() {
        this.node.active = false;
      };
      Slot_FreeGameGetScorePanel.prototype.start = function() {};
      Slot_FreeGameGetScorePanel.prototype.onEnable = function() {
        BaseDataManager_1.default.fastMode && DesktopBrowserTransform_1.default.getInstance().setGameSpeed(1);
      };
      Slot_FreeGameGetScorePanel.prototype.onDisable = function() {
        BaseDataManager_1.default.fastMode && DesktopBrowserTransform_1.default.getInstance().setGameSpeed(BaseDataManager_1.default.magnification);
      };
      Slot_FreeGameGetScorePanel.prototype.open = function(p_freeGameGetScore, p_betScore) {
        this.fadeIn();
        this.node.setPosition(cc.Vec2.ZERO);
        this.freeGameGetScore.string = p_freeGameGetScore.toFixed(2);
      };
      Slot_FreeGameGetScorePanel.prototype.close = function() {
        return this.fadeOut();
      };
      Slot_FreeGameGetScorePanel.prototype.fadeIn = function() {
        this.node.active = true;
        this.node.opacity = 255;
      };
      Slot_FreeGameGetScorePanel.prototype.fadeOut = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          cc.tween(_this.node).to(.5, {
            opacity: 0
          }, {
            easing: "cubicInOut"
          }).call(function() {
            _this.node.active = false;
            resolve();
          }).start();
        });
      };
      __decorate([ property(cc.Label) ], Slot_FreeGameGetScorePanel.prototype, "freeGameGetScore", void 0);
      Slot_FreeGameGetScorePanel = __decorate([ ccclass ], Slot_FreeGameGetScorePanel);
      return Slot_FreeGameGetScorePanel;
    }(cc.Component);
    exports.default = Slot_FreeGameGetScorePanel;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/Base/BaseDataManager": void 0,
    "../../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform": void 0
  } ],
  Slot_FreeGamePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41a9e0Y7hBPSLZIPaFdMXpa", "Slot_FreeGamePanel");
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
    var BaseDataManager_1 = require("../../../Common/Tools/Base/BaseDataManager");
    var DesktopBrowserTransform_1 = require("../../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot_FreeGamePanel = function(_super) {
      __extends(Slot_FreeGamePanel, _super);
      function Slot_FreeGamePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.freeGameCount = null;
        return _this;
      }
      Slot_FreeGamePanel.prototype.init = function() {
        this.node.active = false;
      };
      Slot_FreeGamePanel.prototype.start = function() {};
      Slot_FreeGamePanel.prototype.onEnable = function() {
        BaseDataManager_1.default.fastMode && DesktopBrowserTransform_1.default.getInstance().setGameSpeed(1);
      };
      Slot_FreeGamePanel.prototype.onDisable = function() {
        BaseDataManager_1.default.fastMode && DesktopBrowserTransform_1.default.getInstance().setGameSpeed(BaseDataManager_1.default.magnification);
      };
      Slot_FreeGamePanel.prototype.open = function(p_freeGameCount) {
        this.openAnimation();
        this.node.setPosition(cc.Vec2.ZERO);
        cc.isValid(this.freeGameCount) && (this.freeGameCount.string = p_freeGameCount.toString());
      };
      Slot_FreeGamePanel.prototype.close = function() {
        return this.closeAnimation();
      };
      Slot_FreeGamePanel.prototype.openAnimation = function() {
        this.node.active = true;
        this.node.opacity = 255;
      };
      Slot_FreeGamePanel.prototype.closeAnimation = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          cc.tween(_this.node).to(.5, {
            opacity: 0
          }, {
            easing: "cubicInOut"
          }).call(function() {
            _this.node.active = false;
            resolve();
          }).start();
        });
      };
      __decorate([ property(cc.Label) ], Slot_FreeGamePanel.prototype, "freeGameCount", void 0);
      Slot_FreeGamePanel = __decorate([ ccclass ], Slot_FreeGamePanel);
      return Slot_FreeGamePanel;
    }(cc.Component);
    exports.default = Slot_FreeGamePanel;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/Base/BaseDataManager": void 0,
    "../../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform": void 0
  } ],
  Slot_GameManager_InitData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f44cgy6hxIlZv/cUPlRl90", "Slot_GameManager_InitData");
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
    var Slot_GameManager_InitData = function() {
      function Slot_GameManager_InitData() {
        this.bundlePath = "";
      }
      Slot_GameManager_InitData = __decorate([ ccclass ], Slot_GameManager_InitData);
      return Slot_GameManager_InitData;
    }();
    exports.default = Slot_GameManager_InitData;
    cc._RF.pop();
  }, {} ],
  Slot_GameManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "823920RsGhDS5VxHIGOO767", "Slot_GameManager");
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
    var ErudaLog_1 = require("../../Common/Tools/ErudaLog/ErudaLog");
    var Slot_ReelManager_1 = require("./view/Slot_ReelManager");
    var WebEx_1 = require("../../Common/Optional/Jacky/Ex/WebEx");
    var Slot_GameUI_1 = require("./view/Slot_GameUI");
    var Slot_DataManager_1 = require("../Slot_DataManager");
    var AudioManager_1 = require("../../Common/Tools/AudioManager/AudioManager");
    var Slot_AutoGamePanel_1 = require("./Panel/Slot_AutoGamePanel");
    var ConfirmDialogBox_1 = require("../Common/DynamicPopUp/DialogBox/ConfirmDialogBox");
    var LocalizationManager_1 = require("../../Common/Tools/Localization/LocalizationManager");
    var BaseDataManager_1 = require("../../Common/Tools/Base/BaseDataManager");
    var SceneManager_1 = require("../../Common/Tools/SceneManager/SceneManager");
    var OnlineListManager_1 = require("../../Common/Tools/MultipleGame/OnlineListManager");
    var MarqueeSystemManager_1 = require("../../Common/Tools/MarqueeSystem/MarqueeSystemManager");
    var DesktopBrowserTransform_1 = require("../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform");
    var CommonTool_1 = require("../../Common/Tools/CommonTool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot_GameManager = function(_super) {
      __extends(Slot_GameManager, _super);
      function Slot_GameManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ui = null;
        _this.slotReelManager = null;
        _this.winEffectOdds = 50;
        _this.data = null;
        _this.socket = null;
        _this.popup = null;
        _this.autoSpinCount = 0;
        _this.resultListIndex = 0;
        _this.freeGameOddsIndex = 0;
        _this.tempWaitTime = 0;
        _this.bubbleSound = null;
        _this.reelScrollingStartSound = [];
        _this.tempSpinFinishedStopTime = 0;
        _this.tempSpinCD = 0;
        _this.toFastStopSpin = false;
        _this.baseGameLastSymbol = [];
        _this.newMoney = 0;
        _this.isChangeMoney = false;
        _this.isNextSkipDropOut = false;
        _this.competitionStartFontSize1 = 25;
        _this.competitionStartFontColor1 = "#FFFFFF";
        _this.competitionStartFontSize2 = 30;
        _this.competitionStartFontColor2 = "FFC000";
        _this.competitionFontLineHeight = 30;
        _this.lobbyGameId = 10001;
        _this.backBtnActive = true;
        _this.backBtnBoolean = false;
        _this.magnification = 1.5;
        return _this;
      }
      Slot_GameManager.prototype.start = function() {
        var _this = this;
        this.closeLoadingItem();
        this.disableBlockInputEvents();
        this.ui.setBackBtnState(this.backBtnActive);
        this.setBetBase();
        MarqueeSystemManager_1.default.addMarquee("SlotFramework", "Resources/pl_3", this.node, cc.v3(0, 0)).then(function(node) {
          node.setSiblingIndex(_this.node.getChildByName("PanelsGroup").getSiblingIndex());
        });
        DesktopBrowserTransform_1.default.getInstance().setGameSpeed(1);
        this.backBtnBoolean = false;
      };
      Slot_GameManager.prototype.onEnable = function() {
        cc.systemEvent.on("ShowSymbolTipEvent", this.showSymbolTip, this);
        cc.systemEvent.on("HideSymbolTipEvent", this.hideSymbolTip, this);
        cc.systemEvent.on("ON_START_GAME_COMPETITION", this.onStartGameCompetition, this);
        cc.systemEvent.on("ON_FORCE_CLOSE_COMPEITION", this.onForceCloseCompetition, this);
      };
      Slot_GameManager.prototype.onDisable = function() {
        cc.systemEvent.off("ShowSymbolTipEvent", this.showSymbolTip, this);
        cc.systemEvent.off("HideSymbolTipEvent", this.hideSymbolTip, this);
        cc.systemEvent.off("ON_START_GAME_COMPETITION", this.onStartGameCompetition, this);
        cc.systemEvent.off("ON_FORCE_CLOSE_COMPEITION", this.onForceCloseCompetition, this);
      };
      Slot_GameManager.prototype.init = function(p_data) {};
      Slot_GameManager.prototype.OnCopyVersion = function() {
        WebEx_1.WebEx.copyToClipboard(this.ui.getVersion());
      };
      Slot_GameManager.prototype.showSymbolTip = function(symbolID, position) {
        this.ui.showSymbolTip(symbolID, position);
      };
      Slot_GameManager.prototype.hideSymbolTip = function() {
        this.ui.hideSymbolTip();
      };
      Slot_GameManager.prototype.onOpenMenu = function() {
        cc.log("\u9078\u55ae\u958b\u555f");
        AudioManager_1.AudioManager.instance.playAudioEvent("OpenMenu");
        this.ui.menuButtonSwitch(false);
        this.ui.buttonGroupSwitch(false);
        this.ui.openMenu();
      };
      Slot_GameManager.prototype.onCloseMenu = function() {
        var _this = this;
        cc.log("\u9078\u55ae\u95dc\u9589");
        AudioManager_1.AudioManager.instance.playAudioEvent("CloseMenu");
        cc.tween(this.ui).call(function() {
          _this.ui.closeMenu(false);
        }).delay(.25).call(function() {
          _this.ui.buttonGroupSwitch(true);
          _this.ui.menuButtonSwitch(true);
        }).start();
      };
      Slot_GameManager.prototype.onCloseHistory = function() {
        cc.log("\u95dc\u9589\u6b77\u53f2\u7d00\u9304");
        this.ui.closeHistoryPanel();
      };
      Slot_GameManager.prototype.onOpenHistory = function() {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            cc.log("\u958b\u555f\u6b77\u53f2\u7d00\u9304");
            AudioManager_1.AudioManager.instance.playAudioEvent("OpenHistory");
            this.ui.openHistoryPanel();
            return [ 2 ];
          });
        });
      };
      Slot_GameManager.prototype.onOpenRule = function() {
        cc.log("\u958b\u555f\u898f\u5247");
        AudioManager_1.AudioManager.instance.playAudioEvent("OpenRule");
        this.ui.openRule();
      };
      Slot_GameManager.prototype.onOpenAutoGamePanel = function() {
        if (false == this.hasEnoughBetScore()) {
          this.ui.showLackMoneyPanel();
          return;
        }
        cc.log("\u958b\u555f\u81ea\u52d5\u904a\u6232\u9762\u677f");
        AudioManager_1.AudioManager.instance.playAudioEvent("OpenAutoGamePanel");
        this.ui.openAutoGamePanel();
      };
      Slot_GameManager.prototype.closeLoadingItem = function() {
        Slot_DataManager_1.default.LOADING_UI_NODE.node && cc.tween(Slot_DataManager_1.default.LOADING_UI_NODE.node).call(function() {
          Slot_DataManager_1.default.LOADING_UI_NODE.setLoadingBar(1);
        }).delay(.1).call(function() {
          Slot_DataManager_1.default.LOADING_UI_NODE.hide();
        }).start();
      };
      Slot_GameManager.prototype.disableBlockInputEvents = function() {
        Slot_DataManager_1.default.LOADING_UI_NODE.DisableBlockInputEvents();
      };
      Slot_GameManager.prototype.showResponseLog = function(eventName, message) {
        true;
        message = message || {};
        var time = GameClient.convertTimestamp(CommonTool_1.CommonTool.getServerTime());
        var data = JSON.parse(JSON.stringify(message));
        cc.log("%s %c %s", time, "background: Green; color: White;", "\u56de\u61c9 " + eventName + " ", data);
      };
      Slot_GameManager.prototype.onSpin = function() {
        this.ui.spinButton.getComponent(cc.Button).interactable = false;
        this.ui.hideSymbolTip();
      };
      Slot_GameManager.prototype.onBalanceModifyEvent = function(data) {
        var _this = this;
        cc.log("\u91d1\u984d\u4fee\u6539 : " + data.balance);
        setTimeout(function() {
          _this.isChangeMoney = true;
          _this.newMoney = data.balance;
        }, 100);
      };
      Slot_GameManager.prototype.onAddScroe = function() {
        cc.log("\u4e0b\u6ce8 \u589e\u52a0");
        if (this.data.betOddsStartIndex >= this.data.betOdds.length - 1) {
          AudioManager_1.AudioManager.instance.playAudioEvent("AddScoreEnd");
          return;
        }
        AudioManager_1.AudioManager.instance.playAudioEvent("AddScore");
        this.data.betOddsStartIndex++;
        var _money = this.data.getClientMoney(this.data.betOdds[this.data.betOddsStartIndex] * this.data.oneOddsScore);
        this.ui.setBetScore(_money);
        this.data.saveBetIndex(this.data.betOddsStartIndex);
      };
      Slot_GameManager.prototype.onReduceScore = function() {
        cc.log("\u4e0b\u6ce8 \u6e1b\u5c11");
        if (0 == this.data.betOddsStartIndex) {
          AudioManager_1.AudioManager.instance.playAudioEvent("ReduceScoreEnd");
          return;
        }
        AudioManager_1.AudioManager.instance.playAudioEvent("ReduceScore");
        this.data.betOddsStartIndex--;
        var _money = this.data.getClientMoney(this.data.betOdds[this.data.betOddsStartIndex] * this.data.oneOddsScore);
        this.ui.setBetScore(_money);
        this.data.saveBetIndex(this.data.betOddsStartIndex);
      };
      Slot_GameManager.prototype.onExitGame = function() {
        var _this = this;
        AudioManager_1.AudioManager.instance.playAudioEvent("ExitGame");
        cc.log("\u8fd4\u56de\u5927\u5ef3");
        if (!this.backBtnBoolean) {
          this.backBtnBoolean = true;
          this.popup && this.popup.connectWaitingDialogBox.show();
          this.socket.launchGame({
            username: this.data.nickname,
            gameId: this.lobbyGameId
          }).then(function(response) {
            _this.socket.close(true);
            SceneManager_1.SceneManager.changeURLsToken("?" + response.url.split("?")[1]);
            SceneManager_1.SceneManager.changeScene("L" + _this.lobbyGameId, SceneManager_1.SCENE_TYPE.LOADING);
          });
        }
      };
      Slot_GameManager.prototype.onOpenMusicOptionPanel = function() {
        cc.log("\u958b\u555f\u97f3\u6a02\u8a2d\u5b9a\u9762\u677f");
        this.ui.openMusicOptionPanel();
      };
      Slot_GameManager.prototype.onCancelAutoSpinButton = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("CancelAutoSpinClick");
        this.cancelAutoSpin();
      };
      Slot_GameManager.prototype.onFastSpinOn = function() {
        cc.log("\u958b\u555f\u5feb\u901fspin");
        AudioManager_1.AudioManager.instance.playAudioEvent("FastSpinOn");
        this.data.isFaseSpin = true;
        this.ui.fastSpinSwitch(true);
        this.slotReelManager.setFastMode();
        BaseDataManager_1.default.fastMode = true;
        DesktopBrowserTransform_1.default.getInstance().setGameSpeed(BaseDataManager_1.default.magnification);
      };
      Slot_GameManager.prototype.onFastSpinOff = function() {
        cc.log("\u95dc\u9589\u5feb\u901fspin");
        AudioManager_1.AudioManager.instance.playAudioEvent("FastSpinOff");
        this.data.isFaseSpin = false;
        this.ui.fastSpinSwitch(false);
        this.slotReelManager.setNormalMode();
        BaseDataManager_1.default.fastMode = false;
        DesktopBrowserTransform_1.default.getInstance().setGameSpeed(1);
      };
      Slot_GameManager.prototype.onStartFreeGame = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("StartFreeGameClick");
        this.startFreeGame();
      };
      Slot_GameManager.prototype.onFreeGameEnd = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("FreeGameEndClick");
        this.freeGameEnd();
      };
      Slot_GameManager.prototype.startFreeGame = function() {};
      Slot_GameManager.prototype.freeGameEnd = function() {};
      Slot_GameManager.prototype.isWinScoreToStop = function() {
        if (0 != this.data.autoGameWinScoreStop && this.data.totalBonus >= this.data.autoGameWinScoreStop) return true;
        return false;
      };
      Slot_GameManager.prototype.isScoreLessToStop = function() {
        var _difScore = this.data.coin - this.data.autoGameStartScore;
        if (0 != this.data.autoGameScoreLessStop && _difScore <= -this.data.autoGameScoreLessStop) return true;
        return false;
      };
      Slot_GameManager.prototype.isOverAutoGameSpinCount = function() {
        if (this.data.autoGameSpinCount != Slot_AutoGamePanel_1.SPIN_COUNT.UNLIMITED && this.autoSpinCount >= this.data.autoGameSpinCount) return true;
        return false;
      };
      Slot_GameManager.prototype.saveBaseGameLastSymbol = function() {
        this.baseGameLastSymbol = this.slotReelManager.getAllSymbolID();
      };
      Slot_GameManager.prototype.hasEnoughBetScore = function() {
        var _betScore = this.data.betOdds[this.data.betOddsStartIndex];
        if (this.data.coin < this.data.getClientMoney(_betScore * this.data.oneOddsScore)) return false;
        return true;
      };
      Slot_GameManager.prototype.hasWinScoreEffect = function(p_score) {
        if (p_score >= this.data.playerBetScore * this.winEffectOdds) return true;
        return false;
      };
      Slot_GameManager.prototype.checkAutoGameContinue = function() {
        var _autoSpin = false;
        if (this.data.isAutoSpin) {
          _autoSpin = true;
          if (this.isScoreLessToStop() || this.isWinScoreToStop() || this.isOverAutoGameSpinCount() || ConfirmDialogBox_1.ConfirmDialogBox.isShow || this.backBtnBoolean) {
            _autoSpin = false;
            this.data.isAutoSpin = false;
            this.cancelAutoSpin();
          }
        }
        if (_autoSpin) {
          if (false == this.hasEnoughBetScore()) {
            this.cancelAutoSpin();
            this.ui.hideSpinMask();
            this.ui.showSpinButtonIdleEffect();
            this.ui.setSpinArrowSpinningSpeed(Slot_GameUI_1.SPIN_ARROW_SPINNIG_TYPE.NORMAL);
          }
          this.onSpin();
        } else {
          this.ui.hideSpinMask();
          this.ui.showSpinButtonIdleEffect();
          this.ui.setSpinArrowSpinningSpeed(Slot_GameUI_1.SPIN_ARROW_SPINNIG_TYPE.NORMAL);
        }
      };
      Slot_GameManager.prototype.cancelAutoSpin = function() {
        cc.log("\u95dc\u9589\u81ea\u52d5spin");
        this.data.isAutoSpin = false;
        this.ui.autoSpinSwitch(false);
        this.ui.closeCancelAutoSpinButton();
      };
      Slot_GameManager.prototype.onStartGameCompetition = function(data) {
        var _this = this;
        if (!this.popup) return;
        var messgage = LocalizationManager_1.default.getInstance().get("TEXT_COMPETITION_GAME_START", LocalizationManager_1.default.getInstance().get("GAME_NAME_" + BaseDataManager_1.GAME_ID[data.gameId]) + " " + data.competitionName, "" + this.competitionStartFontSize1, "" + this.competitionStartFontColor1, "" + this.competitionStartFontSize2, "" + this.competitionStartFontColor2);
        this.popup.ynDialogBox.setLineHeight(this.competitionFontLineHeight);
        this.popup.ynDialogBox.show("<b>" + messgage + "<\b>", function() {
          _this.getPlayerOnlineList(function() {
            _this.checkPlayerOnlineList();
            var validTopicName = Object.keys(BaseDataManager_1.default.onlineList).some(function() {
              return BaseDataManager_1.default.onlineList[data.topicName];
            });
            if (validTopicName) {
              _this.popup.connectWaitingDialogBox.show();
              BaseDataManager_1.default.currentCompetitionId = data.competitionTopicName;
              BaseDataManager_1.default.currentTopicName = data.topicName;
              _this.toOtherGame(data.gameId);
            } else Object.keys(BaseDataManager_1.default.onlineList).length ? _this.popup.confirmSystemMsgDialogBox.show(LocalizationManager_1.default.getInstance().get("TEXT_COMPETITION_HAS_STARTED")) : _this.popup.confirmSystemMsgDialogBox.show(LocalizationManager_1.default.getInstance().get("TEXT_COMPETITION_IS_OVER"));
          });
        }, function() {
          _this.getPlayerOnlineList(_this.checkPlayerOnlineList.bind(_this));
        });
      };
      Slot_GameManager.prototype.onForceCloseCompetition = function(data) {
        if (!this.popup) return;
        this.popup.confirmSystemMsgDialogBox.show(LocalizationManager_1.default.getInstance().get("MESSAGE_COMPETITION_FORCE_CLOSED"));
      };
      Slot_GameManager.prototype.getPlayerOnlineList = function(successfulCallback, failedCallback) {
        this.socket.getPlayerOnlineList().then(function(data) {
          BaseDataManager_1.default.onlineListProcess(data);
          successfulCallback && successfulCallback();
        }).catch(function(error) {
          cc.error(error);
          failedCallback && failedCallback();
        });
      };
      Slot_GameManager.prototype.checkPlayerOnlineList = function() {};
      Slot_GameManager.prototype.restore = function(gameId) {
        var _this = this;
        gameId === this.data.gameID || this.popup.ynDialogBox.show(LocalizationManager_1.default.getInstance().get("MESSAGE_RESTORE", LocalizationManager_1.default.getInstance().get("GAME_NAME_" + BaseDataManager_1.GAME_ID[gameId]), "dc5050"), function() {
          _this.toOtherGame(gameId);
        }, function() {
          BaseDataManager_1.default.currentTopicName = null;
          BaseDataManager_1.default.currentRecordId = null;
          cc.systemEvent.emit(OnlineListManager_1.ONLINE_LIST_EVENT.SET_LOADING_ACTIVE, false);
        });
      };
      Slot_GameManager.prototype.toOtherGame = function(gameId) {
        var _this = this;
        this.popup.connectWaitingDialogBox.show();
        3 === BaseDataManager_1.default.onlineList[BaseDataManager_1.default.currentTopicName].ManagerData.Status ? this.socket.launchGame({
          username: this.data.nickname,
          gameId: gameId
        }).then(function(response) {
          BaseDataManager_1.default.isReproduce = true;
          _this.socket.close(true);
          SceneManager_1.SceneManager.changeURLsToken("?" + response.url.split("?")[1]);
          SceneManager_1.SceneManager.changeScene("G" + gameId, SceneManager_1.SCENE_TYPE.LOADING);
        }).catch(function() {
          _this.popup.connectWaitingDialogBox.hide();
          cc.systemEvent.emit(OnlineListManager_1.ONLINE_LIST_EVENT.SET_LOADING_ACTIVE, false);
          BaseDataManager_1.default.currentTopicName = null;
        }) : this.socket.restore(BaseDataManager_1.default.currentTopicName).then(function(data) {
          _this.socket.close(true);
          var newToken = data.url.split("?")[1];
          SceneManager_1.SceneManager.changeURLsToken("?" + newToken);
          SceneManager_1.SceneManager.changeScene("G" + gameId, SceneManager_1.SCENE_TYPE.LOADING);
        }).catch(function(error) {
          _this.popup.connectWaitingDialogBox.hide();
          cc.error("\u8f09\u5165\u724c\u5c40\u6642\u767c\u751f\u932f\u8aa4", error);
          BaseDataManager_1.default.currentTopicName = null;
          cc.systemEvent.emit(OnlineListManager_1.ONLINE_LIST_EVENT.SET_LOADING_ACTIVE, false);
        });
      };
      Slot_GameManager.prototype.setBetBase = function() {
        var _this = this;
        Slot_DataManager_1.default.offLineMode ? this.data.oneOddsScore = 5e3 : this.socket.themeDataList().then(function(_a) {
          var themeDataList = _a.themeDataList;
          _this.data.oneOddsScore = themeDataList[0].betBase;
        });
      };
      __decorate([ property({
        type: Slot_GameUI_1.default,
        override: true
      }) ], Slot_GameManager.prototype, "ui", void 0);
      __decorate([ property({
        type: Slot_ReelManager_1.default,
        override: true
      }) ], Slot_GameManager.prototype, "slotReelManager", void 0);
      __decorate([ property({
        type: cc.Float,
        displayName: "\u8d0f\u9322\u6548\u679c\u986f\u793a\u500d\u7387"
      }) ], Slot_GameManager.prototype, "winEffectOdds", void 0);
      Slot_GameManager = __decorate([ ccclass ], Slot_GameManager);
      return Slot_GameManager;
    }(cc.Component);
    exports.default = Slot_GameManager;
    cc._RF.pop();
  }, {
    "../../Common/Optional/Jacky/Ex/WebEx": void 0,
    "../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../Common/Tools/Base/BaseDataManager": void 0,
    "../../Common/Tools/CommonTool": void 0,
    "../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform": void 0,
    "../../Common/Tools/ErudaLog/ErudaLog": void 0,
    "../../Common/Tools/Localization/LocalizationManager": void 0,
    "../../Common/Tools/MarqueeSystem/MarqueeSystemManager": void 0,
    "../../Common/Tools/MultipleGame/OnlineListManager": void 0,
    "../../Common/Tools/SceneManager/SceneManager": void 0,
    "../Common/DynamicPopUp/DialogBox/ConfirmDialogBox": "ConfirmDialogBox",
    "../Slot_DataManager": "Slot_DataManager",
    "./Panel/Slot_AutoGamePanel": "Slot_AutoGamePanel",
    "./view/Slot_GameUI": "Slot_GameUI",
    "./view/Slot_ReelManager": "Slot_ReelManager"
  } ],
  Slot_GameUI_InitData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7991bGN+htARL2n2TDJiWTr", "Slot_GameUI_InitData");
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
    var Slot_GameUI_InitData = function() {
      function Slot_GameUI_InitData() {
        this.bundlePath = "";
        this.dataManager = null;
      }
      Slot_GameUI_InitData = __decorate([ ccclass ], Slot_GameUI_InitData);
      return Slot_GameUI_InitData;
    }();
    exports.default = Slot_GameUI_InitData;
    cc._RF.pop();
  }, {} ],
  Slot_GameUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f573hjmLhJzqiWY1Ax2eiC", "Slot_GameUI");
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
    exports.SPIN_ARROW_SPINNIG_TYPE = void 0;
    var RunScore_1 = require("../../../Common/Optional/Crosis/RunScore/RunScore");
    var BaseDataManager_1 = require("../../../Common/Tools/Base/BaseDataManager");
    var LocalizationManager_1 = require("../../../Common/Tools/Localization/LocalizationManager");
    var OrientationToolManager_1 = require("../../../Common/Tools/OrientationTool/OrientationToolManager");
    var WebHistoryPanel_1 = require("../../../Common/Tools/WebHistoryPanel/WebHistoryPanel");
    var Slot_AutoGamePanel_1 = require("../Panel/Slot_AutoGamePanel");
    var Slot_MusicOptionPanel_1 = require("../Panel/Slot_MusicOptionPanel");
    var Slot_RulePanel_1 = require("../Panel/Slot_RulePanel");
    var Slot_SymbolTipPanel_1 = require("../Panel/Slot_SymbolTipPanel");
    var Slot_WinScorePanel_1 = require("../Panel/Slot_WinScorePanel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SPIN_ARROW_SPINNIG_TYPE;
    (function(SPIN_ARROW_SPINNIG_TYPE) {
      SPIN_ARROW_SPINNIG_TYPE[SPIN_ARROW_SPINNIG_TYPE["FAST"] = 0] = "FAST";
      SPIN_ARROW_SPINNIG_TYPE[SPIN_ARROW_SPINNIG_TYPE["NORMAL"] = 1] = "NORMAL";
      SPIN_ARROW_SPINNIG_TYPE[SPIN_ARROW_SPINNIG_TYPE["STOP"] = 2] = "STOP";
    })(SPIN_ARROW_SPINNIG_TYPE = exports.SPIN_ARROW_SPINNIG_TYPE || (exports.SPIN_ARROW_SPINNIG_TYPE = {}));
    var Slot_GameUI = function(_super) {
      __extends(Slot_GameUI, _super);
      function Slot_GameUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.loadingNode = null;
        _this.tip1String = "\u4ee5\u4e0b\u70ba\u53c3\u6578";
        _this.menuOpenTime = .25;
        _this.menuCloseTime = .25;
        _this.spinArrowRotateDuration_Normal = 2;
        _this.spinArrowRotateDuration_Fast = .5;
        _this.tip2String = "\u4ee5\u4e0b\u70ba\u6309\u9215";
        _this.menuButton = null;
        _this.spinButton = null;
        _this.spinArrow = null;
        _this.spinButtonIdleEffect = null;
        _this.spinButtonClickEffect = null;
        _this.cancelAutoSpinButton = null;
        _this.fastSpinOn = null;
        _this.fastSpinOff = null;
        _this.autoSpinOn = null;
        _this.autoSpinOff = null;
        _this.AddScoreButton = null;
        _this.ReduceScoreButton = null;
        _this.tip3String = "\u4ee5\u4e0b\u70ba \u6587\u5b57";
        _this.score = null;
        _this.winScore = null;
        _this.betScore = null;
        _this.autoSpinCount = null;
        _this.remainingFreeGameCount = null;
        _this.getScoreTip = null;
        _this.totalGetScore = null;
        _this.totalGetScoreTip = null;
        _this.tip4String = "\u4ee5\u4e0b\u70ba \u5176\u4ed6";
        _this.menu = null;
        _this.versionLabel = null;
        _this.buttonGroup = null;
        _this.backButton = null;
        _this.freeGameOddsTip = null;
        _this.mainGameTip = null;
        _this.freeGameTip = null;
        _this.mainGameTipList = [];
        _this.freeGameTipList = [];
        _this.freeGameOddsLabel = [];
        _this.remainingFreeGame = null;
        _this.lastFreeGame = null;
        _this.spinMask = null;
        _this.longWildFX = [];
        _this.updateBroadEffect = null;
        _this.historyPanel = null;
        _this.rulePanel = null;
        _this.autoGamePanel = null;
        _this.musicOptionPanel = null;
        _this.symbolTipPanel = null;
        _this.winScorePanel = null;
        _this.mainGameTipIndex = 0;
        _this.freeGameTipIndex = 0;
        _this.GAMETIP_DELAYTIME = 1;
        _this.GAMETIP_PLAYTIME = 3;
        _this.GAMETIP_MOVESPEED = 50;
        return _this;
      }
      Slot_GameUI.prototype.init = function(p_data) {
        var _this = this;
        this.setVersion("");
        this.closeMenu(true);
        this.buttonGroupSwitch(true);
        this.hideFreeGameOddsTip();
        this.hideSpinMask();
        this.closeCancelAutoSpinButton();
        this.hideGetScoreTip();
        this.hideRemainingFreeGameCount();
        if (BaseDataManager_1.localizeGame.includes(p_data.bundleName)) {
          LocalizationManager_1.default.getInstance().updateCurrentLangImage(this.mainGameTipList[0]).then(function() {
            _this.initMainGameTip();
          });
          LocalizationManager_1.default.getInstance().updateCurrentLangImage(this.freeGameTipList[0]).then(function() {
            _this.initFreeGameTip();
          });
        } else {
          this.initMainGameTip();
          this.initFreeGameTip();
        }
        this.rulePanel.init();
        this.autoGamePanel.init();
        this.musicOptionPanel.init();
        this.symbolTipPanel.init();
        this.winScorePanel.init();
        this.menu.active = false;
        this.spinButtonClickEffect.active = false;
        this.spinButtonIdleEffect.active = true;
        this.updateBroadEffect.node.active = false;
        if (OrientationToolManager_1.default.orientationState !== OrientationToolManager_1.ORIENTATION_TYPE.NONE) {
          cc.systemEvent.on(OrientationToolManager_1.ORIENTATION_EVENT.RESIZE, this.orientationAddandReduceSetParent, this);
          this.orientationAddandReduceSetParent();
        }
      };
      Slot_GameUI.prototype.setVersion = function(p_version) {
        this.versionLabel.string = "Version\uff1a" + p_version;
      };
      Slot_GameUI.prototype.getVersion = function() {
        return this.versionLabel.string;
      };
      Slot_GameUI.prototype.onDisable = function() {
        OrientationToolManager_1.default.orientationState !== OrientationToolManager_1.ORIENTATION_TYPE.NONE && cc.systemEvent.off(OrientationToolManager_1.ORIENTATION_EVENT.RESIZE, this.orientationAddandReduceSetParent, this);
      };
      Slot_GameUI.prototype.closeMenu = function(p_isFast) {
        var _this = this;
        if (p_isFast) {
          this.menu.setPosition(0, -1200);
          this.menu.active = false;
        } else {
          this.menu.setPosition(0, -773);
          cc.tween(this.menu).to(this.menuCloseTime, {
            position: cc.v3(0, -1200)
          }).call(function() {
            _this.menu.active = false;
          }).start();
        }
      };
      Slot_GameUI.prototype.openMenu = function() {
        this.menu.setPosition(0, -1200);
        this.menu.active = true;
        cc.tween(this.menu).to(this.menuOpenTime, {
          position: cc.v3(0, -773)
        }).start();
      };
      Slot_GameUI.prototype.scoreCtrl = function(isOpen) {
        this.AddScoreButton.active = isOpen;
        this.ReduceScoreButton.active = isOpen;
      };
      Slot_GameUI.prototype.orientationAddandReduceSetParent = function() {
        if (OrientationToolManager_1.default.orientationState == OrientationToolManager_1.ORIENTATION_TYPE.HORIZONTAL) {
          true == this.spinMask.active && this.scoreCtrl(false);
          this.AddScoreButton.parent.setParent(this.betScore.node.parent.parent);
          this.ReduceScoreButton.parent.setParent(this.betScore.node.parent.parent);
        } else {
          this.scoreCtrl(true);
          this.AddScoreButton.parent.setParent(this.buttonGroup);
          this.ReduceScoreButton.parent.setParent(this.buttonGroup);
          this.AddScoreButton.parent.setSiblingIndex(0);
          this.ReduceScoreButton.parent.setSiblingIndex(0);
        }
      };
      Slot_GameUI.prototype.openRule = function() {
        this.rulePanel.open();
      };
      Slot_GameUI.prototype.openHistoryPanel = function() {
        this.historyPanel.show();
      };
      Slot_GameUI.prototype.closeHistoryPanel = function() {
        this.historyPanel.hide();
      };
      Slot_GameUI.prototype.openAutoGamePanel = function() {
        this.autoGamePanel.open();
      };
      Slot_GameUI.prototype.closeAutoGamePanel = function() {
        this.autoGamePanel.close();
      };
      Slot_GameUI.prototype.openMusicOptionPanel = function() {
        this.musicOptionPanel.open();
      };
      Slot_GameUI.prototype.setBackBtnState = function(p_active) {
        this.backButton && (this.backButton.active = p_active);
      };
      Slot_GameUI.prototype.fastSpinSwitch = function(p_active) {
        this.fastSpinOn.active = p_active;
        this.fastSpinOff.active = !p_active;
      };
      Slot_GameUI.prototype.autoSpinSwitch = function(p_active) {
        this.autoSpinOn.active = p_active;
        this.autoSpinOff.active = !p_active;
      };
      Slot_GameUI.prototype.buttonGroupSwitch = function(p_active) {
        this.buttonGroup.active = p_active;
      };
      Slot_GameUI.prototype.menuButtonSwitch = function(p_active) {
        this.menuButton.active = p_active;
      };
      Slot_GameUI.prototype.setScore = function(p_score) {
        this.score.getComponent(RunScore_1.default).setRunScoreLabel(p_score);
        this.score.string = Number(p_score.toString()).toFixed(2);
      };
      Slot_GameUI.prototype.addScore = function(p_score) {
        var _newScore = Number((Number(this.score.string) + p_score).toFixed(2));
        this.score.string = _newScore.toString();
      };
      Slot_GameUI.prototype.setBetScore = function(p_score) {
        var score = p_score.toString();
        p_score >= 1e4 && (score = p_score / 1e3 + "K");
        this.betScore.string = score;
      };
      Slot_GameUI.prototype.setWinScore = function(p_score) {
        this.winScore.getComponent(RunScore_1.default).setRunScoreLabel(p_score);
        this.winScore.string = p_score.toString();
      };
      Slot_GameUI.prototype.addWinScore = function(p_score) {
        var _newScore = Number((Number(this.winScore.string) + p_score).toFixed(2));
        this.winScore.string = _newScore.toString();
      };
      Slot_GameUI.prototype.showFreeGameOddsTip = function() {
        this.freeGameOddsTip.active = true;
      };
      Slot_GameUI.prototype.hideFreeGameOddsTip = function() {
        this.freeGameOddsTip.active = false;
      };
      Slot_GameUI.prototype.showSpinMask = function() {
        this.spinMask.active = true;
        OrientationToolManager_1.default.orientationState == OrientationToolManager_1.ORIENTATION_TYPE.HORIZONTAL && this.scoreCtrl(false);
      };
      Slot_GameUI.prototype.hideSpinMask = function() {
        this.spinMask.active = false;
        OrientationToolManager_1.default.orientationState !== OrientationToolManager_1.ORIENTATION_TYPE.NONE && this.scoreCtrl(true);
      };
      Slot_GameUI.prototype.openCancelAutoSpinButton = function() {
        this.spinButton.active = false;
        this.cancelAutoSpinButton.active = true;
      };
      Slot_GameUI.prototype.closeCancelAutoSpinButton = function() {
        this.spinButton.active = true;
        this.cancelAutoSpinButton.active = false;
      };
      Slot_GameUI.prototype.showMainGameTip = function() {
        this.mainGameTip.active = true;
        this.freeGameTip.active = false;
      };
      Slot_GameUI.prototype.showFreeGameTip = function() {
        this.freeGameTip.active = true;
        this.mainGameTip.active = false;
      };
      Slot_GameUI.prototype.hideGameTip = function() {
        this.mainGameTip.active = false;
        this.freeGameTip.active = false;
      };
      Slot_GameUI.prototype.closeFreeGameOddsLabel = function() {
        for (var i = 0; i < this.freeGameOddsLabel.length; i++) this.freeGameOddsLabel[i].active = false;
      };
      Slot_GameUI.prototype.changeFreeGameOddsLabel = function(p_oddsInext) {
        for (var i = 0; i < this.freeGameOddsLabel.length; i++) this.freeGameOddsLabel[i].active = false;
        if (p_oddsInext > 0) {
          p_oddsInext > this.freeGameOddsLabel.length && (p_oddsInext = this.freeGameOddsLabel.length);
          this.freeGameOddsLabel[p_oddsInext - 1].active = true;
        }
      };
      Slot_GameUI.prototype.setRemainingFreeGameCount = function(p_count) {
        var target = this.remainingFreeGameCount.node;
        this.remainingFreeGameCount.node.parent.getComponent(cc.Layout) && (target = target.parent);
        if (p_count > 0) {
          target.active = true;
          this.lastFreeGame.active = false;
          this.remainingFreeGameCount.string = p_count.toString();
        } else {
          target.active = false;
          this.lastFreeGame.active = true;
          this.remainingFreeGameCount.string = p_count.toString();
        }
      };
      Slot_GameUI.prototype.showRemainingFreeGameCount = function() {
        this.remainingFreeGame.active = true;
        this.changeGameTip(false);
      };
      Slot_GameUI.prototype.hideRemainingFreeGameCount = function() {
        this.remainingFreeGame.active = false;
      };
      Slot_GameUI.prototype.showTotalGetScore = function(p_totalGetScore) {
        this.updateBroadEffect.node.active = true;
        this.updateBroadEffect.play();
        this.getScoreTip.node.active = false;
        this.totalGetScore.active = true;
        this.totalGetScoreTip.string = p_totalGetScore.toString();
      };
      Slot_GameUI.prototype.showGetScoreTip = function(p_getScore) {
        this.getScoreTip.node.active = true;
        this.getScoreTip.getComponent(RunScore_1.default).resetToZero();
        this.getScoreTip.string = p_getScore.toString();
      };
      Slot_GameUI.prototype.hideGetScoreTip = function() {
        this.getScoreTip.getComponent(RunScore_1.default).resetToZero();
        this.getScoreTip.node.active = false;
        this.updateBroadEffect.stop();
        this.totalGetScore.active = false;
      };
      Slot_GameUI.prototype.showSpinButtonClickEffect = function() {
        var _this = this;
        cc.tween(this.node).call(function() {
          _this.spinButtonClickEffect.active = true;
          _this.spinButtonIdleEffect.active = false;
        }).delay(1).call(function() {
          _this.spinButtonClickEffect.active = false;
        }).start();
      };
      Slot_GameUI.prototype.showSpinButtonIdleEffect = function() {
        this.spinButtonIdleEffect.active = true;
      };
      Slot_GameUI.prototype.showLongWildEffect = function(p_longWildIndex, p_isfast) {
        var _this = this;
        if (p_isfast) {
          this.longWildFX[p_longWildIndex].node.stopAllActions();
          this.longWildFX[p_longWildIndex].node.active = true;
          this.longWildFX[p_longWildIndex].play();
          this.longWildFX[p_longWildIndex].setCurrentTime(this.longWildFX[p_longWildIndex].defaultClip.duration);
        } else cc.tween(this.longWildFX[p_longWildIndex].node).delay(2).call(function() {
          _this.playLongWildSound();
          _this.longWildFX[p_longWildIndex].node.active = true;
          _this.longWildFX[p_longWildIndex].play();
        }).start();
      };
      Slot_GameUI.prototype.hideAllLongWilfEffect = function() {
        for (var i = 0; i < this.longWildFX.length; i++) this.longWildFX[i].node.active = false;
      };
      Slot_GameUI.prototype.setAutoSpinCount = function(p_autoSpinCount) {
        this.autoSpinCount.string = -1 == p_autoSpinCount ? "=" : p_autoSpinCount.toString();
      };
      Slot_GameUI.prototype.setSpinArrowSpinningSpeed = function(p_type) {
        this.spinArrow.stopAllActions();
        p_type == SPIN_ARROW_SPINNIG_TYPE.STOP || (p_type == SPIN_ARROW_SPINNIG_TYPE.NORMAL ? cc.tween(this.spinArrow).by(this.spinArrowRotateDuration_Normal, {
          angle: 360
        }).repeatForever().start() : cc.tween(this.spinArrow).by(this.spinArrowRotateDuration_Fast, {
          angle: 360
        }).repeatForever().start());
      };
      Slot_GameUI.prototype.getLoadingNode = function() {
        return this.loadingNode;
      };
      Slot_GameUI.prototype.showLoadingUI = function() {
        this.loadingNode.active = true;
      };
      Slot_GameUI.prototype.loadingUIFadeOut = function() {
        var _this = this;
        cc.tween(this.loadingNode).to(1, {
          opacity: 0
        }, {
          easing: "cubicInOut"
        }).call(function() {
          _this.loadingNode.active = false;
        }).start();
      };
      Slot_GameUI.prototype.showLackMoneyPanel = function() {
        cc.error("\u986f\u793a\u91d1\u984d\u4e0d\u8db3\u5f48\u7a97");
      };
      Slot_GameUI.prototype.playLongWildSound = function() {
        cc.error("\u9019\u908a\u81ea\u5df1\u7e7c\u627f\u8986\u5beb \u6c92\u4eba\u77e5\u9053\u4f60\u7684\u9577Wild\u7684\u8072\u97f3\u4f4d\u7f6e\u5728\u54ea");
      };
      Slot_GameUI.prototype.initMainGameTip = function() {
        this.mainGameTipList.length > 0 && this.resetGameTipPos(this.mainGameTipList[0], 0);
        if (this.mainGameTipList.length > 1) for (var i = 1; i < this.mainGameTipList.length; i++) this.resetGameTipPos(this.mainGameTipList[i], -150); else if (1 == this.mainGameTipList.length) {
          var tipNode = cc.instantiate(this.mainGameTipList[0]);
          this.mainGameTip.addChild(tipNode);
          this.resetGameTipPos(tipNode, -150);
          this.mainGameTipList.push(tipNode);
        }
        this.showMainGameTip();
        this.changeGameTip(true);
      };
      Slot_GameUI.prototype.initFreeGameTip = function() {
        this.freeGameTipList.length > 0 && this.resetGameTipPos(this.freeGameTipList[0], 0);
        if (this.freeGameTipList.length > 1) for (var i = 1; i < this.freeGameTipList.length; i++) this.resetGameTipPos(this.freeGameTipList[i], -150); else if (1 == this.freeGameTipList.length) {
          var tipNode = cc.instantiate(this.freeGameTipList[0]);
          this.freeGameTip.addChild(tipNode);
          this.resetGameTipPos(tipNode, -150);
          this.freeGameTipList.push(tipNode);
        }
      };
      Slot_GameUI.prototype.playGameTip = function(target, main) {
        var _this = this;
        var maskWidth = this.mainGameTip.width;
        var tipdx = target.width * target.scaleX - maskWidth;
        if (tipdx > 0) {
          var executetime = tipdx / this.GAMETIP_MOVESPEED;
          cc.tween(target).delay(this.GAMETIP_DELAYTIME).by(executetime, {
            x: -tipdx
          }).delay(this.GAMETIP_DELAYTIME).call(function() {
            _this.changeGameTip(main);
          }).start();
        } else cc.tween(target).delay(this.GAMETIP_PLAYTIME).call(function() {
          _this.changeGameTip(main);
        }).start();
      };
      Slot_GameUI.prototype.resetGameTipPos = function(target, posY) {
        var maskWidth = this.mainGameTip.width;
        var tipdx = target.width * target.scaleX - maskWidth;
        if (tipdx > 0) {
          target.anchorX = 0;
          target.setPosition(new cc.Vec2(-maskWidth / 2, posY));
        } else {
          target.anchorX = .5;
          target.setPosition(new cc.Vec2(0, posY));
        }
      };
      Slot_GameUI.prototype.changeGameTip = function(main) {
        var gameTipList = [];
        var nowGameTipIndex = 0;
        var newGameTipIndex = 0;
        if (main) {
          gameTipList = this.mainGameTipList;
          nowGameTipIndex = this.mainGameTipIndex;
          newGameTipIndex = nowGameTipIndex + 1 >= gameTipList.length ? 0 : nowGameTipIndex + 1;
          this.mainGameTipIndex = newGameTipIndex;
        } else {
          gameTipList = this.freeGameTipList;
          nowGameTipIndex = this.freeGameTipIndex;
          newGameTipIndex = nowGameTipIndex + 1 >= gameTipList.length ? 0 : nowGameTipIndex + 1;
          this.freeGameTipIndex = newGameTipIndex;
        }
        this.playChangeGameTipEff(gameTipList[newGameTipIndex], gameTipList[nowGameTipIndex], main);
      };
      Slot_GameUI.prototype.playChangeGameTipEff = function(newGameTip, nowGameTip, main) {
        var _this = this;
        newGameTip.stopAllActions();
        nowGameTip.stopAllActions();
        this.resetGameTipPos(newGameTip, -150);
        cc.tween(newGameTip).to(1, {
          y: 0
        }).call(function() {
          _this.playGameTip(newGameTip, main);
        }).start();
        cc.tween(nowGameTip).to(1, {
          y: 150
        }).start();
      };
      Slot_GameUI.prototype.showSymbolTip = function(symbolID, position) {
        this.symbolTipPanel.open(symbolID, position);
      };
      Slot_GameUI.prototype.hideSymbolTip = function() {
        this.symbolTipPanel.close();
      };
      Slot_GameUI.prototype.showWinScoreEffect = function(p_totalWinScore, p_betScore, p_isFreeGame) {
        void 0 === p_isFreeGame && (p_isFreeGame = false);
        this.winScorePanel.open(p_totalWinScore, p_betScore, p_isFreeGame);
      };
      Slot_GameUI.prototype.closeWinScoreEffect = function() {
        this.winScorePanel.close();
      };
      Slot_GameUI.prototype.winScoreEffectToEndScore = function() {
        this.winScorePanel.showEndScore();
      };
      Slot_GameUI.prototype.isWinScoreEffecting = function() {
        return this.winScorePanel.isWinScoreEffecting();
      };
      Slot_GameUI.prototype.winScoreIsEndScore = function() {
        return this.winScorePanel.isEndScore();
      };
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "loadingNode", void 0);
      __decorate([ property({
        readonly: true,
        displayName: "============ \u3010 \u53c3\u6578 \u3011 ============"
      }) ], Slot_GameUI.prototype, "tip1String", void 0);
      __decorate([ property(cc.Integer) ], Slot_GameUI.prototype, "menuOpenTime", void 0);
      __decorate([ property(cc.Integer) ], Slot_GameUI.prototype, "menuCloseTime", void 0);
      __decorate([ property(cc.Float) ], Slot_GameUI.prototype, "spinArrowRotateDuration_Normal", void 0);
      __decorate([ property(cc.Float) ], Slot_GameUI.prototype, "spinArrowRotateDuration_Fast", void 0);
      __decorate([ property({
        readonly: true,
        displayName: "============ \u3010 \u6309\u9215 \u3011 ============"
      }) ], Slot_GameUI.prototype, "tip2String", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "menuButton", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "spinButton", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "spinArrow", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "spinButtonIdleEffect", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "spinButtonClickEffect", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "cancelAutoSpinButton", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "fastSpinOn", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "fastSpinOff", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "autoSpinOn", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "autoSpinOff", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "AddScoreButton", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "ReduceScoreButton", void 0);
      __decorate([ property({
        readonly: true,
        displayName: "============ \u3010 \u6587\u5b57 \u3011 ============"
      }) ], Slot_GameUI.prototype, "tip3String", void 0);
      __decorate([ property(cc.Label) ], Slot_GameUI.prototype, "score", void 0);
      __decorate([ property(cc.Label) ], Slot_GameUI.prototype, "winScore", void 0);
      __decorate([ property(cc.Label) ], Slot_GameUI.prototype, "betScore", void 0);
      __decorate([ property(cc.Label) ], Slot_GameUI.prototype, "autoSpinCount", void 0);
      __decorate([ property(cc.Label) ], Slot_GameUI.prototype, "remainingFreeGameCount", void 0);
      __decorate([ property(cc.Label) ], Slot_GameUI.prototype, "getScoreTip", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "totalGetScore", void 0);
      __decorate([ property(cc.Label) ], Slot_GameUI.prototype, "totalGetScoreTip", void 0);
      __decorate([ property({
        readonly: true,
        displayName: "============ \u3010 \u5176\u4ed6 \u3011 ============"
      }) ], Slot_GameUI.prototype, "tip4String", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "menu", void 0);
      __decorate([ property(cc.Label) ], Slot_GameUI.prototype, "versionLabel", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "buttonGroup", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "backButton", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "freeGameOddsTip", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "mainGameTip", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "freeGameTip", void 0);
      __decorate([ property([ cc.Node ]) ], Slot_GameUI.prototype, "mainGameTipList", void 0);
      __decorate([ property([ cc.Node ]) ], Slot_GameUI.prototype, "freeGameTipList", void 0);
      __decorate([ property([ cc.Node ]) ], Slot_GameUI.prototype, "freeGameOddsLabel", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "remainingFreeGame", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "lastFreeGame", void 0);
      __decorate([ property(cc.Node) ], Slot_GameUI.prototype, "spinMask", void 0);
      __decorate([ property([ cc.Animation ]) ], Slot_GameUI.prototype, "longWildFX", void 0);
      __decorate([ property(cc.Animation) ], Slot_GameUI.prototype, "updateBroadEffect", void 0);
      __decorate([ property(WebHistoryPanel_1.default) ], Slot_GameUI.prototype, "historyPanel", void 0);
      __decorate([ property(Slot_RulePanel_1.default) ], Slot_GameUI.prototype, "rulePanel", void 0);
      __decorate([ property(Slot_AutoGamePanel_1.default) ], Slot_GameUI.prototype, "autoGamePanel", void 0);
      __decorate([ property(Slot_MusicOptionPanel_1.default) ], Slot_GameUI.prototype, "musicOptionPanel", void 0);
      __decorate([ property(Slot_SymbolTipPanel_1.default) ], Slot_GameUI.prototype, "symbolTipPanel", void 0);
      __decorate([ property(Slot_WinScorePanel_1.default) ], Slot_GameUI.prototype, "winScorePanel", void 0);
      Slot_GameUI = __decorate([ ccclass ], Slot_GameUI);
      return Slot_GameUI;
    }(cc.Component);
    exports.default = Slot_GameUI;
    cc._RF.pop();
  }, {
    "../../../Common/Optional/Crosis/RunScore/RunScore": void 0,
    "../../../Common/Tools/Base/BaseDataManager": void 0,
    "../../../Common/Tools/Localization/LocalizationManager": void 0,
    "../../../Common/Tools/OrientationTool/OrientationToolManager": void 0,
    "../../../Common/Tools/WebHistoryPanel/WebHistoryPanel": void 0,
    "../Panel/Slot_AutoGamePanel": "Slot_AutoGamePanel",
    "../Panel/Slot_MusicOptionPanel": "Slot_MusicOptionPanel",
    "../Panel/Slot_RulePanel": "Slot_RulePanel",
    "../Panel/Slot_SymbolTipPanel": "Slot_SymbolTipPanel",
    "../Panel/Slot_WinScorePanel": "Slot_WinScorePanel"
  } ],
  Slot_HistoryPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c360bbln5lP+KX3xZB9tnKK", "Slot_HistoryPanel");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
    var Slot_HistoryPanel = function(_super) {
      __extends(Slot_HistoryPanel, _super);
      function Slot_HistoryPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.url = "";
        _this.isAdaptation = false;
        _this.webView = null;
        return _this;
      }
      Slot_HistoryPanel.prototype.init = function() {
        this.webView = this.node.getComponent(cc.WebView);
        this.node.active = false;
      };
      Slot_HistoryPanel.prototype.start = function() {
        var _this = this;
        false;
        if (this.isAdaptation) {
          this.onDesignResolutionChanged();
          cc.view.on("design-resolution-changed", function() {
            _this.onDesignResolutionChanged();
          });
        }
      };
      Slot_HistoryPanel.prototype.open = function(url) {
        var _this = this;
        this.node.setPosition(cc.Vec2.ZERO);
        this.node.active = true;
        this.webView.url = url;
        this.webView.enabled = true;
        window["closeWebView"] = function() {
          _this.node.active = false;
        };
        window.addEventListener("message", function(event) {
          "closeWebView" === event.data && (_this.node.active = false);
        });
      };
      Slot_HistoryPanel.prototype.close = function() {
        this.node.active = false;
      };
      Slot_HistoryPanel.prototype.setWebResolution = function() {
        this.node.setContentSize(432, 768);
        this.node.setScale(1.6666, 1.6666);
      };
      Slot_HistoryPanel.prototype.onDesignResolutionChanged = function() {
        var minRatio = 768 / 432;
        var maxRatio = 1680 / 720;
        var width = window.innerWidth;
        var height = window.innerHeight;
        var ratio = height / width;
        if (width > height) {
          if (!cc.view._isRotated) {
            this.node.setContentSize(432, 432 * minRatio);
            return;
          }
          ratio = width / height;
        }
        ratio < minRatio ? this.node.setContentSize(432, 432 * minRatio) : ratio > maxRatio ? this.node.setContentSize(432, 432 * maxRatio) : this.node.setContentSize(432, 432 * ratio);
      };
      __decorate([ property(cc.String) ], Slot_HistoryPanel.prototype, "url", void 0);
      Slot_HistoryPanel = __decorate([ ccclass, executeInEditMode ], Slot_HistoryPanel);
      return Slot_HistoryPanel;
    }(cc.Component);
    exports.default = Slot_HistoryPanel;
    cc._RF.pop();
  }, {} ],
  Slot_LineData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e72e014TdDzb5EAUlvjb7Y", "Slot_LineData");
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
    var Slot_LineData = function() {
      function Slot_LineData() {
        this.position = [];
        this.score = "";
      }
      Slot_LineData = __decorate([ ccclass ], Slot_LineData);
      return Slot_LineData;
    }();
    exports.default = Slot_LineData;
    cc._RF.pop();
  }, {} ],
  Slot_LineManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c769bpVx8FD0r5wytxeBkZU", "Slot_LineManager");
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
    exports.LineTipSide = void 0;
    var Slot_LineData_1 = require("../Data/Slot_LineData");
    var Slot_Line_1 = require("./Slot_Line");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LineTipSide;
    (function(LineTipSide) {
      LineTipSide[LineTipSide["NONE"] = -1] = "NONE";
      LineTipSide[LineTipSide["LEFT"] = 0] = "LEFT";
      LineTipSide[LineTipSide["RIGHT"] = 1] = "RIGHT";
    })(LineTipSide = exports.LineTipSide || (exports.LineTipSide = {}));
    var Slot_LineManager = function(_super) {
      __extends(Slot_LineManager, _super);
      function Slot_LineManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.linePrefab = null;
        _this.lineContent = null;
        _this.tipContent = null;
        _this.lineTipOrders = [ 5, 0, 14, 0, 14, 1, 13, 5, 6, 3, 13, 6, 7, 4, 0, 8, 7, 2, 10, 2, 12, 3, 11, 8, 9, 4, 11, 9, 12, 1 ];
        _this.lineList = [];
        _this.linePosition = [];
        _this.lineTipSide = [];
        return _this;
      }
      Slot_LineManager.prototype.init = function(p_lineTable, p_linePositionjson) {
        this.setLinePosition(p_lineTable, p_linePositionjson);
      };
      Slot_LineManager.prototype.showLine = function(p_lineIndex, p_score) {
        cc.log("\u986f\u793a\u7684\u9023\u7dda", p_lineIndex);
        for (var i = 0; i < p_lineIndex.length; i++) {
          false == cc.isValid(this.lineList[i]) && this.createLine(i);
          var _lineData = new Slot_LineData_1.default();
          _lineData.position = this.linePosition[p_lineIndex[i]];
          _lineData.score = p_score[i];
          _lineData.lineIndex = p_lineIndex[i];
          _lineData.lineTipSide = this.lineTipSide[p_lineIndex[i]];
          _lineData.lineTipZOrder = this.lineTipOrders[p_lineIndex[i]];
          this.lineList[i].node.active = true;
          this.lineList[i].setData(_lineData);
          this.lineList[i].show();
        }
      };
      Slot_LineManager.prototype.hideLine = function() {
        cc.log("\u96b1\u85cf\u9023\u7dda");
        for (var i = 0; i < this.lineList.length; i++) this.lineList[i].hide();
      };
      Slot_LineManager.prototype.showLinePosition = function(p_lineIndex, p_score) {
        cc.log("\u986f\u793a\u7684\u9023\u7dda", p_lineIndex);
        for (var i = 0; i < p_lineIndex.length; i++) {
          false == cc.isValid(this.lineList[i]) && this.createLine(i);
          var _lineData = new Slot_LineData_1.default();
          _lineData.position = this.linePosition[p_lineIndex[i]];
          _lineData.score = p_score[i];
          _lineData.lineIndex = p_lineIndex[i];
          _lineData.lineTipSide = this.lineTipSide[p_lineIndex[i]];
          _lineData.lineTipZOrder = this.lineTipOrders[p_lineIndex[i]];
          this.lineList[i].node.active = true;
          this.lineList[i].setData(_lineData);
        }
      };
      Slot_LineManager.prototype.createLine = function(p_index) {
        this.lineList[p_index] = cc.instantiate(this.linePrefab).getComponent(Slot_Line_1.default);
        this.lineList[p_index].init(this.tipContent);
        this.lineList[p_index].node.setParent(this.lineContent);
      };
      Slot_LineManager.prototype.setLinePosition = function(p_lineTable, p_linePositionjson) {
        cc.error("\u8acb\u81ea\u5df1\u8907\u5beb \u9023\u7dda\u7684\u4f4d\u7f6e \u4e0d\u77e5\u9053\u8acb\u53c3\u8003G10");
      };
      __decorate([ property(cc.Node) ], Slot_LineManager.prototype, "linePrefab", void 0);
      __decorate([ property(cc.Node) ], Slot_LineManager.prototype, "lineContent", void 0);
      __decorate([ property(cc.Node) ], Slot_LineManager.prototype, "tipContent", void 0);
      __decorate([ property([ cc.Float ]) ], Slot_LineManager.prototype, "lineTipOrders", void 0);
      Slot_LineManager = __decorate([ ccclass ], Slot_LineManager);
      return Slot_LineManager;
    }(cc.Component);
    exports.default = Slot_LineManager;
    cc._RF.pop();
  }, {
    "../Data/Slot_LineData": "Slot_LineData",
    "./Slot_Line": "Slot_Line"
  } ],
  Slot_Line: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d07f47LbptG6pe9+UcvRf5z", "Slot_Line");
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
    var Slot_LineManager_1 = require("./Slot_LineManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TipNumber = function() {
      function TipNumber() {
        this.node = null;
        this.tipNumber = null;
        this.tipFrame = null;
      }
      __decorate([ property(cc.Node) ], TipNumber.prototype, "node", void 0);
      __decorate([ property(cc.Label) ], TipNumber.prototype, "tipNumber", void 0);
      __decorate([ property(cc.Sprite) ], TipNumber.prototype, "tipFrame", void 0);
      TipNumber = __decorate([ ccclass("TipFrame") ], TipNumber);
      return TipNumber;
    }();
    var Slot_Line = function(_super) {
      __extends(Slot_Line, _super);
      function Slot_Line() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lineSpine = null;
        _this.tipNumbers = [];
        _this.scoreNode = null;
        _this.scoreLabel = null;
        _this.boneLength = 0;
        return _this;
      }
      Slot_Line.prototype.init = function(p_tipParent) {
        this.tipNumbers[0].node.setParent(p_tipParent);
        this.tipNumbers[1].node.setParent(p_tipParent);
        this.closeAllTipNumber();
      };
      Slot_Line.prototype.setData = function(p_data) {
        this.setLinePosition(p_data.position);
        this.setScore(p_data.score);
        this.setTipSide(p_data.lineIndex, p_data.lineTipSide);
        this.setTipZOrder(p_data.lineTipZOrder);
      };
      Slot_Line.prototype.show = function() {
        this.lineSpine.setAnimation(0, this.lineSpine.defaultAnimation, true);
      };
      Slot_Line.prototype.hide = function() {
        this.closeAllTipNumber();
        this.node.active = false;
      };
      Slot_Line.prototype.setLinePosition = function(p_position) {
        for (var i = 0; i < p_position.length; i++) {
          var _bone = this.lineSpine.findBone("controlBone" + (i + 1));
          _bone.x = p_position[i].x;
          _bone.y = p_position[i].y;
        }
        this.boneLength = p_position.length;
      };
      Slot_Line.prototype.setScore = function(p_score) {
        var _bone = this.lineSpine.findBone("controlBone4");
        this.scoreNode.active = "" != p_score;
        this.scoreNode.setPosition(new cc.Vec2(_bone.x, _bone.y));
        this.scoreLabel.string = Number(p_score).toFixed(2);
      };
      Slot_Line.prototype.setTipSide = function(p_lineIndex, p_side) {
        this.tipNumbers[p_side].node.active = true;
        if (p_side == Slot_LineManager_1.LineTipSide.NONE) return;
        var _bone = null;
        p_side == Slot_LineManager_1.LineTipSide.RIGHT ? _bone = this.lineSpine.findBone("controlBone" + this.boneLength) : p_side == Slot_LineManager_1.LineTipSide.LEFT && (_bone = this.lineSpine.findBone("controlBone1"));
        this.closeAllTipNumber();
        this.tipNumbers[p_side].node.active = true;
        this.tipNumbers[p_side].node.setPosition(new cc.Vec2(_bone.x, _bone.y));
        this.tipNumbers[p_side].tipNumber.string = (p_lineIndex + 1).toString();
      };
      Slot_Line.prototype.closeAllTipNumber = function() {
        for (var i = 0; i < this.tipNumbers.length; i++) this.tipNumbers[i].node.active = false;
      };
      Slot_Line.prototype.setTipZOrder = function(p_lineIndex) {
        for (var i = 0; i < this.tipNumbers.length; i++) this.tipNumbers[i].node.zIndex = p_lineIndex;
      };
      __decorate([ property(sp.Skeleton) ], Slot_Line.prototype, "lineSpine", void 0);
      __decorate([ property([ TipNumber ]) ], Slot_Line.prototype, "tipNumbers", void 0);
      __decorate([ property(cc.Node) ], Slot_Line.prototype, "scoreNode", void 0);
      __decorate([ property(cc.Label) ], Slot_Line.prototype, "scoreLabel", void 0);
      Slot_Line = __decorate([ ccclass ], Slot_Line);
      return Slot_Line;
    }(cc.Component);
    exports.default = Slot_Line;
    cc._RF.pop();
  }, {
    "./Slot_LineManager": "Slot_LineManager"
  } ],
  Slot_LoadingItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea0f4JCN8VPvJrkxlaQ4klk", "Slot_LoadingItem");
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
    var LabelWave_1 = require("../../Common/Optional/Crosis/LabelWave/LabelWave");
    var LocalizationManager_1 = require("../../Common/Tools/Localization/LocalizationManager");
    var OrientationToolManager_1 = require("../../Common/Tools/OrientationTool/OrientationToolManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot_LoadingItem = function(_super) {
      __extends(Slot_LoadingItem, _super);
      function Slot_LoadingItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.loadingBar = null;
        _this.loadingNumber = null;
        _this.loadingWavaWord = null;
        _this.blockInputEvents = null;
        return _this;
      }
      Slot_LoadingItem.prototype.onEnable = function() {
        cc.systemEvent.on(OrientationToolManager_1.ORIENTATION_EVENT.RESIZE, this.switchCanvas, this);
      };
      Slot_LoadingItem.prototype.onDisable = function() {
        cc.systemEvent.off(OrientationToolManager_1.ORIENTATION_EVENT.RESIZE, this.switchCanvas, this);
      };
      Slot_LoadingItem.prototype.init = function() {
        this.blockInputEvents = this.node.addComponent(cc.BlockInputEvents);
        this.setLoadingBar(0);
        this.updateLoadingLabelWave();
      };
      Slot_LoadingItem.prototype.setLoadingBar = function(p_percent) {
        this.loadingBar.progress = p_percent;
        this.loadingNumber && (this.loadingNumber.string = Math.floor(100 * p_percent) + "%");
      };
      Slot_LoadingItem.prototype.show = function() {
        this.node.opacity = 255;
      };
      Slot_LoadingItem.prototype.hide = function() {
        var _this = this;
        cc.tween(this.node).to(1, {
          opacity: 0
        }).call(function() {
          _this.node.active = false;
        }).start();
      };
      Slot_LoadingItem.prototype.updateLoadingLabelWave = function() {
        if (this.loadingWavaWord) {
          this.loadingWavaWord.string = LocalizationManager_1.default.getInstance().get("TEXT_SLOT_LOADING");
          "hi-in" !== LocalizationManager_1.default.language && this.loadingWavaWord.node.addComponent(LabelWave_1.default);
        }
      };
      Slot_LoadingItem.prototype.DisableBlockInputEvents = function() {
        this.blockInputEvents.enabled = false;
      };
      Slot_LoadingItem.prototype.switchCanvas = function() {
        OrientationToolManager_1.default.orientationState !== OrientationToolManager_1.ORIENTATION_TYPE.NONE && (this.node.position = cc.Canvas.instance.node.position);
      };
      __decorate([ property(cc.ProgressBar) ], Slot_LoadingItem.prototype, "loadingBar", void 0);
      __decorate([ property(cc.Label) ], Slot_LoadingItem.prototype, "loadingNumber", void 0);
      __decorate([ property(cc.Label) ], Slot_LoadingItem.prototype, "loadingWavaWord", void 0);
      __decorate([ property(cc.BlockInputEvents) ], Slot_LoadingItem.prototype, "blockInputEvents", void 0);
      Slot_LoadingItem = __decorate([ ccclass ], Slot_LoadingItem);
      return Slot_LoadingItem;
    }(cc.Component);
    exports.default = Slot_LoadingItem;
    cc._RF.pop();
  }, {
    "../../Common/Optional/Crosis/LabelWave/LabelWave": void 0,
    "../../Common/Tools/Localization/LocalizationManager": void 0,
    "../../Common/Tools/OrientationTool/OrientationToolManager": void 0
  } ],
  Slot_LoadingManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a62d4SoCltDVLOv18e63SME", "Slot_LoadingManager");
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
    var BaseLoading_1 = require("../../Common/Tools/Base/BaseLoading");
    var DesktopBrowserTransform_1 = require("../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform");
    var SceneManager_1 = require("../../Common/Tools/SceneManager/SceneManager");
    var Slot_LoadingItem_1 = require("../Common/Slot_LoadingItem");
    var Slot_DataManager_1 = require("../Slot_DataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot_LoadingManager = function(_super) {
      __extends(Slot_LoadingManager, _super);
      function Slot_LoadingManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dataManagerInstance = null;
        _this.loadingItem = null;
        return _this;
      }
      Slot_LoadingManager.prototype.start = function() {
        this.loadingItem.node.setParent(null);
        Slot_DataManager_1.default.LOADING_UI_NODE = this.loadingItem;
        cc.game.addPersistRootNode(this.loadingItem.node);
        SceneManager_1.SceneManager.registerPersistentRootNode(this.loadingItem.node);
        this.loadingItem.init();
        DesktopBrowserTransform_1.default.getInstance().setGameSpeed(1);
      };
      Slot_LoadingManager.prototype.initGameConfig = function(dataManagerInstance) {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.dataManagerInstance = dataManagerInstance;
              return [ 4, _super.prototype.initGameConfig.call(this, dataManagerInstance) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      Slot_LoadingManager.prototype.processAsync = function(preloadResource) {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.asyncPreloadWithArray(preloadResource) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      Slot_LoadingManager.prototype.onSetLoadingProgress = function(value) {
        this.loadingItem.setLoadingBar(value);
      };
      Slot_LoadingManager.prototype.loadAudioClips = function(bundle, path) {
        return new Promise(function(resolve) {
          cc.assetManager.getBundle(bundle).loadDir(path, cc.AudioClip, function(err, clipList) {
            if (cc.isValid(err)) {
              cc.error("loadAudioClips err ", err);
              return resolve([]);
            }
            resolve(clipList);
          });
        });
      };
      __decorate([ property(Slot_LoadingItem_1.default) ], Slot_LoadingManager.prototype, "loadingItem", void 0);
      Slot_LoadingManager = __decorate([ ccclass ], Slot_LoadingManager);
      return Slot_LoadingManager;
    }(BaseLoading_1.default);
    exports.default = Slot_LoadingManager;
    cc._RF.pop();
  }, {
    "../../Common/Tools/Base/BaseLoading": void 0,
    "../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform": void 0,
    "../../Common/Tools/SceneManager/SceneManager": void 0,
    "../Common/Slot_LoadingItem": "Slot_LoadingItem",
    "../Slot_DataManager": "Slot_DataManager"
  } ],
  Slot_LobbyManager_InitData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8dd0c0Ex9GkIu4GCCicI7B", "Slot_LobbyManager_InitData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Slot_LobbyManager_InitData = function() {
      function Slot_LobbyManager_InitData() {}
      return Slot_LobbyManager_InitData;
    }();
    exports.default = Slot_LobbyManager_InitData;
    cc._RF.pop();
  }, {} ],
  Slot_LobbyManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3267eZ591tMba0jm/+9z6Qq", "Slot_LobbyManager");
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
    var CommonTool_1 = require("../../Common/Tools/CommonTool");
    var DesktopBrowserTransform_1 = require("../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform");
    var ErudaLog_1 = require("../../Common/Tools/ErudaLog/ErudaLog");
    var Slot_DataManager_1 = require("../Slot_DataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot_LobbyManager = function(_super) {
      __extends(Slot_LobbyManager, _super);
      function Slot_LobbyManager() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Slot_LobbyManager.prototype.start = function() {
        Slot_DataManager_1.default.LOADING_UI_NODE.show();
        DesktopBrowserTransform_1.default.getInstance().setGameSpeed(1);
      };
      Slot_LobbyManager.prototype.init = function(p_data) {};
      Slot_LobbyManager.prototype.showResponseLog = function(eventName, message) {
        true;
        message = message || {};
        var time = GameClient.convertTimestamp(CommonTool_1.CommonTool.getServerTime());
        var data = JSON.parse(JSON.stringify(message));
        cc.log("%s %c %s", time, "background: Green; color: White;", "\u56de\u61c9 " + eventName + " ", data);
      };
      Slot_LobbyManager = __decorate([ ccclass ], Slot_LobbyManager);
      return Slot_LobbyManager;
    }(cc.Component);
    exports.default = Slot_LobbyManager;
    cc._RF.pop();
  }, {
    "../../Common/Tools/CommonTool": void 0,
    "../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform": void 0,
    "../../Common/Tools/ErudaLog/ErudaLog": void 0,
    "../Slot_DataManager": "Slot_DataManager"
  } ],
  Slot_LobbyUI_InitData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d1dbO+eqlPi4zym1xQ87Yr", "Slot_LobbyUI_InitData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Slot_LobbyUI_InitData = function() {
      function Slot_LobbyUI_InitData() {}
      return Slot_LobbyUI_InitData;
    }();
    exports.default = Slot_LobbyUI_InitData;
    cc._RF.pop();
  }, {} ],
  Slot_LobbyUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4859bSy569GmYxumwm3r0tU", "Slot_LobbyUI");
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
    var MENU_STATUS;
    (function(MENU_STATUS) {
      MENU_STATUS[MENU_STATUS["IDLE"] = 0] = "IDLE";
      MENU_STATUS[MENU_STATUS["WORK"] = 1] = "WORK";
    })(MENU_STATUS || (MENU_STATUS = {}));
    var MENU = {
      ROOM_IN_TIME: .2
    };
    var Slot_LobbyUI = function(_super) {
      __extends(Slot_LobbyUI, _super);
      function Slot_LobbyUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerName = null;
        _this.playerIcon = null;
        _this.playerScore = null;
        _this.menu = null;
        _this.menuStatus = MENU_STATUS.IDLE;
        return _this;
      }
      Slot_LobbyUI.prototype.init = function(p_data) {
        this.bundleName = p_data.bundleName;
        this.bundlePath = p_data.bundlePath;
        this.menu.getComponent(cc.Widget).updateAlignment();
        this.menu.active = false;
      };
      Slot_LobbyUI.prototype.setPlayerInfo = function(p_name, p_iconIndex, p_score) {
        this.setPlayerName(p_name);
        this.setPlayerScore(p_score);
        this.setPlayerIcon(p_iconIndex);
      };
      Slot_LobbyUI.prototype.openMenu = function() {
        var _this = this;
        if (this.menuStatus == MENU_STATUS.WORK) return;
        this.menuStatus = MENU_STATUS.WORK;
        this.menu.active = true;
        var targetPos = this.menu.getPosition();
        cc.error(targetPos);
        this.menu.stopAllActions();
        cc.tween(this.menu).to(MENU.ROOM_IN_TIME, {
          position: cc.v3(targetPos.x - 130, targetPos.y, 0)
        }, {
          easing: cc.easing.sineOut
        }).call(function() {
          _this.menuStatus = MENU_STATUS.IDLE;
        }).start();
      };
      Slot_LobbyUI.prototype.closeMenu = function() {
        var _this = this;
        if (this.menuStatus == MENU_STATUS.WORK) return;
        this.menuStatus = MENU_STATUS.WORK;
        this.menu.active = true;
        var _targetPos = this.menu.getPosition();
        this.menu.stopAllActions();
        cc.tween(this.menu).to(MENU.ROOM_IN_TIME, {
          position: cc.v3(_targetPos.x + 130, _targetPos.y, 0)
        }, {
          easing: cc.easing.sineOut
        }).call(function() {
          _this.menuStatus = MENU_STATUS.IDLE;
          _this.menu.active = false;
        }).start();
      };
      Slot_LobbyUI.prototype.setPlayerName = function(p_name) {
        this.playerName.string = p_name;
      };
      Slot_LobbyUI.prototype.setPlayerIcon = function(p_iconIndex) {
        cc.error("\u9019\u908a\u81ea\u5df1\u7e7c\u627f\u8986\u5beb \u6c92\u4eba\u77e5\u9053\u4f60\u7684\u982d\u50cf\u5716\u7247\u7684\u4f4d\u7f6e\u5728\u54ea");
      };
      Slot_LobbyUI.prototype.setPlayerScore = function(p_score) {
        this.playerScore.string = p_score.toString();
      };
      __decorate([ property(cc.Label) ], Slot_LobbyUI.prototype, "playerName", void 0);
      __decorate([ property(cc.Sprite) ], Slot_LobbyUI.prototype, "playerIcon", void 0);
      __decorate([ property(cc.Label) ], Slot_LobbyUI.prototype, "playerScore", void 0);
      __decorate([ property(cc.Node) ], Slot_LobbyUI.prototype, "menu", void 0);
      Slot_LobbyUI = __decorate([ ccclass ], Slot_LobbyUI);
      return Slot_LobbyUI;
    }(cc.Component);
    exports.default = Slot_LobbyUI;
    cc._RF.pop();
  }, {} ],
  Slot_MusicOptionPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "27f04EbwUFGt4qUrCrivMTv", "Slot_MusicOptionPanel");
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
    var AudioManager_1 = require("../../../Common/Tools/AudioManager/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot_MusicOptionPanel = function(_super) {
      __extends(Slot_MusicOptionPanel, _super);
      function Slot_MusicOptionPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.musicToggle = null;
        _this.musicSlider = null;
        _this.musicFill = null;
        _this.soundToggle = null;
        _this.soundSlider = null;
        _this.soundFill = null;
        _this.soundFillSize = null;
        _this.musicFillSize = null;
        return _this;
      }
      Slot_MusicOptionPanel.prototype.start = function() {};
      Slot_MusicOptionPanel.prototype.init = function() {
        this.soundFillSize = this.soundFill.node.getContentSize();
        this.musicFillSize = this.musicFill.node.getContentSize();
        var musicVolume = AudioManager_1.AudioManager.instance.musicVolume;
        this.musicFill.node.setContentSize(new cc.Size(this.musicFillSize.width * musicVolume, this.musicFillSize.height));
        this.musicToggle.isChecked = 0 != musicVolume;
        this.musicSlider.progress = musicVolume;
        var soundVolume = AudioManager_1.AudioManager.instance.soundVolume;
        this.soundFill.node.setContentSize(new cc.Size(this.soundFillSize.width * soundVolume, this.soundFillSize.height));
        this.soundToggle.isChecked = 0 != soundVolume;
        this.soundSlider.progress = soundVolume;
        this.node.active = false;
      };
      Slot_MusicOptionPanel.prototype.onMusicToggle = function(tg) {
        if (tg.isChecked) {
          this.musicSlider.progress = 1;
          this.musicFill.fillRange = 1;
          this.musicFill.node.setContentSize(new cc.Size(this.musicFillSize.width, this.musicFillSize.height));
          AudioManager_1.AudioManager.instance.musicVolume = 1;
          AudioManager_1.AudioManager.instance.playAudioEvent("MusicOptionPanel_OpenMusic");
        } else {
          this.musicSlider.progress = 0;
          this.musicFill.fillRange = 0;
          this.musicFill.node.setContentSize(new cc.Size(0, this.musicFillSize.height));
          AudioManager_1.AudioManager.instance.musicVolume = 0;
          AudioManager_1.AudioManager.instance.playAudioEvent("MusicOptionPanel_CloseMusic");
        }
      };
      Slot_MusicOptionPanel.prototype.onChangeMusicSlider = function(slider) {
        this.musicFill.node.setContentSize(new cc.Size(this.musicFillSize.width * slider.progress, this.musicFillSize.height));
        0 != slider.progress ? this.musicToggle.isChecked = true : this.musicToggle.isChecked = false;
        AudioManager_1.AudioManager.instance.musicVolume = slider.progress;
      };
      Slot_MusicOptionPanel.prototype.onSoundToggle = function(tg) {
        if (tg.isChecked) {
          this.soundSlider.progress = 1;
          this.soundFill.fillRange = 1;
          this.soundFill.node.setContentSize(new cc.Size(this.soundFillSize.width, this.soundFillSize.height));
          AudioManager_1.AudioManager.instance.soundVolume = 1;
          AudioManager_1.AudioManager.instance.playAudioEvent("MusicOptionPanel_OpenSound");
        } else {
          this.soundSlider.progress = 0;
          this.soundFill.fillRange = 0;
          this.soundFill.node.setContentSize(new cc.Size(0, this.soundFillSize.height));
          AudioManager_1.AudioManager.instance.soundVolume = 0;
          AudioManager_1.AudioManager.instance.playAudioEvent("MusicOptionPanel_CloseSound");
        }
      };
      Slot_MusicOptionPanel.prototype.onChangeSoundSlider = function(slider) {
        this.soundFill.node.setContentSize(new cc.Size(this.soundFillSize.width * slider.progress, this.soundFillSize.height));
        0 != slider.progress ? this.soundToggle.isChecked = true : this.soundToggle.isChecked = false;
        AudioManager_1.AudioManager.instance.soundVolume = slider.progress;
      };
      Slot_MusicOptionPanel.prototype.open = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("OpenMusicOptionePanel");
        this.node.setPosition(new cc.Vec2(0, 0));
        this.node.active = true;
      };
      Slot_MusicOptionPanel.prototype.close = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("CloseMusicOptionePanel");
        this.node.active = false;
      };
      __decorate([ property(cc.Toggle) ], Slot_MusicOptionPanel.prototype, "musicToggle", void 0);
      __decorate([ property(cc.Slider) ], Slot_MusicOptionPanel.prototype, "musicSlider", void 0);
      __decorate([ property(cc.Sprite) ], Slot_MusicOptionPanel.prototype, "musicFill", void 0);
      __decorate([ property(cc.Toggle) ], Slot_MusicOptionPanel.prototype, "soundToggle", void 0);
      __decorate([ property(cc.Slider) ], Slot_MusicOptionPanel.prototype, "soundSlider", void 0);
      __decorate([ property(cc.Sprite) ], Slot_MusicOptionPanel.prototype, "soundFill", void 0);
      Slot_MusicOptionPanel = __decorate([ ccclass ], Slot_MusicOptionPanel);
      return Slot_MusicOptionPanel;
    }(cc.Component);
    exports.default = Slot_MusicOptionPanel;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/AudioManager/AudioManager": void 0
  } ],
  Slot_ReelManager_InitData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a346QGroNCAYuRxxNsrxEI", "Slot_ReelManager_InitData");
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
    var Slot_ReelManager_InitData = function() {
      function Slot_ReelManager_InitData() {
        this.bundlePath = "";
      }
      Slot_ReelManager_InitData = __decorate([ ccclass ], Slot_ReelManager_InitData);
      return Slot_ReelManager_InitData;
    }();
    exports.default = Slot_ReelManager_InitData;
    cc._RF.pop();
  }, {} ],
  Slot_ReelManager_ScrollData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5805dHXmQRHgJlxu7AYrZwC", "Slot_ReelManager_ScrollData");
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
    var Slot_ReelManager_ScrollData = function() {
      function Slot_ReelManager_ScrollData() {
        this.targetSymbolIndex = [];
        this.hasLongWild = false;
        this.hasOmenReels = [];
        this.hasLongWilds = [];
        this.rewardTime = 0;
        this.hasGotFreeGame = false;
        this.reels = [];
        this.isFreeGame = false;
        this.isSkipDropOut = false;
        this.scatterBonus = [];
        this.reels_Above = [];
      }
      Slot_ReelManager_ScrollData = __decorate([ ccclass ], Slot_ReelManager_ScrollData);
      return Slot_ReelManager_ScrollData;
    }();
    exports.default = Slot_ReelManager_ScrollData;
    cc._RF.pop();
  }, {} ],
  Slot_ReelManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0fbbev0eURG841zFA/g2qEf", "Slot_ReelManager");
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
    var Slot_Reel_ScrollData_1 = require("../Data/Slot_Reel_ScrollData");
    var Slot_Reel_1 = require("./Slot_Reel");
    var Slot_Reel_InitData_1 = require("../Data/Slot_Reel_InitData");
    var OrientationToolManager_1 = require("../../../Common/Tools/OrientationTool/OrientationToolManager");
    var STATUS;
    (function(STATUS) {
      STATUS[STATUS["IDLE"] = 0] = "IDLE";
      STATUS[STATUS["SCROLL_ING"] = 1] = "SCROLL_ING";
      STATUS[STATUS["SCROLL_END"] = 2] = "SCROLL_END";
      STATUS[STATUS["RWARD_EFFECTING_ING"] = 3] = "RWARD_EFFECTING_ING";
      STATUS[STATUS["RWARD_EFFECTING_END"] = 4] = "RWARD_EFFECTING_END";
    })(STATUS || (STATUS = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot_ReelManager = function(_super) {
      __extends(Slot_ReelManager, _super);
      function Slot_ReelManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.omenMask = null;
        _this.reelPrefab = null;
        _this.content = null;
        _this.tip1String = "\u4ee5\u4e0b\u70ba\u8f2a\u5b50\u8a2d\u5b9a";
        _this.reelMode = Slot_Reel_InitData_1.ReelMode.SCROLL;
        _this.reelCount = 5;
        _this.reelSpacing = 2.5;
        _this.reelSpacingV = 2.5;
        _this.reelSpacingH = 2.5;
        _this.reelsOffset = [];
        _this.tip2String = "\u4ee5\u4e0b\u70ba\u7b26\u865f\u8a2d\u5b9a";
        _this.symbolCount = 3;
        _this.symbolSpacing = 17;
        _this.symbolSpacingV = 17;
        _this.symbolSpacingH = 17;
        _this.symbolScaleV = cc.v2(1, 1);
        _this.symbolScaleH = cc.v2(1, 1);
        _this.omenScaleV = cc.v2(1, 1);
        _this.omenScaleH = cc.v2(1, 1);
        _this.tip3String = "\u4ee5\u4e0b\u70baspin\u52d5\u756b";
        _this.tip4String = "\u7e3d\u6642\u9593 \uff1d \u9577Wild\u7684\u8868\u6f14\u6642\u9593 + \u6efe\u8f2a\u6b63\u5e38\u6efe\u52d5\u6642\u9593 + \u8f2a\u5b50\u958b\u59cb\u8f49\u52d5\u9593\u9694 + \u8f2a\u5b50\u505c\u6b62\u8f49\u52d5\u9593\u9694 + \u9810\u5146\u6efe\u8f2a\u6642\u9593 + \u6efe\u8f2a\u6e1b\u901f\u6642\u9593 + \u6efe\u8f2a\u56de\u5f48\u6642\u9593";
        _this.reelScrollUpTime = .15;
        _this.reelScrollUpRange = .35;
        _this.reelNormalScrollTime = 1;
        _this.reelFastScrollTime = .35;
        _this.reelMoveSpeed = 4e3;
        _this.reelOmenScrollTime = 3;
        _this.reelOmenSpeed = 2500;
        _this.omenSpeedMutly = 1.5;
        _this.omenSlowTime = .5;
        _this.hasLongWildScrollTime = 3;
        _this.reelStartDelayTime = .08;
        _this.reelStopDelayTime = .2;
        _this.reelSlowTime = .2;
        _this.reelReboundTime = .05;
        _this.reelReboundRange = .135;
        _this.dropOutTime = .4;
        _this.dropOutEasing = "expoIn";
        _this.dropOutDelayTime = .1;
        _this.dropOutStartIntervalTime = .1;
        _this.dropInTime = .4;
        _this.dropInEasing = "sineIn";
        _this.dropInDelayTime = .1;
        _this.dropInStartIntervalTime = .1;
        _this.dropInReboundHeight = .05;
        _this.dropInReboundTime = .05;
        _this.dropInReboundEasingOut = "cubicOut";
        _this.dropInReboundEasingIn = "cubicIn";
        _this.dropInReboundAngle = 5;
        _this.dropInReboundAngleTime = .05;
        _this.reelsList = [];
        _this.isFastMode = false;
        _this.status = STATUS.IDLE;
        _this.bundlePath = "";
        _this.omenMaskOpacity = 0;
        return _this;
      }
      Slot_ReelManager.prototype.init = function(p_data) {
        this.bundleName = p_data.bundleName;
        this.bundlePath = p_data.bundlePath;
        this.omenMask.active = false;
        this.omenMask.zIndex = 1;
        this.omenMaskOpacity = this.omenMask.opacity;
        this.createReels();
        this.initSymbolPos();
      };
      Slot_ReelManager.prototype.addEvent = function() {
        cc.systemEvent.on(OrientationToolManager_1.ORIENTATION_EVENT.RESIZE, this.spacingVH, this);
      };
      Slot_ReelManager.prototype.onDestroy = function() {
        cc.systemEvent.off(OrientationToolManager_1.ORIENTATION_EVENT.RESIZE, this.spacingVH, this);
      };
      Slot_ReelManager.prototype.isHorizontal = function() {
        return OrientationToolManager_1.default.orientationState === OrientationToolManager_1.ORIENTATION_TYPE.HORIZONTAL;
      };
      Slot_ReelManager.prototype.spacingVH = function() {
        for (var i = 0; i < this.reelsList.length; i++) {
          var spacing = this.isHorizontal() ? this.reelSpacingH : this.reelSpacingV;
          var _symbolPosition = this.getReelPosition(i, this.reelCount, spacing);
          this.reelsList[i].node.setPosition(_symbolPosition);
          var scale = this.isHorizontal() ? this.symbolScaleH : this.symbolScaleV;
          this.reelsList[i].reelsScale(scale);
          var omenScale = this.isHorizontal() ? this.omenScaleH : this.omenScaleV;
          this.reelsList[i].omenScale(omenScale);
          this.reelsList[i].updateOmenX(i);
          this.reelsList[i].updateSymbolX();
          var offset_Y = this.isHorizontal() ? this.symbolSpacingH : this.symbolSpacingV;
          var vec = this.isHorizontal() ? -1 : 1;
          var dy = this.reelsList[i].getSymbolHeight() * (this.symbolScaleV.y - this.symbolScaleH.y) + (this.symbolSpacingV - this.symbolSpacingH);
          var orientationYOffset = dy * vec;
          this.reelsList[i].setSymbolSpacing(offset_Y, orientationYOffset);
          this.reelsList[i].reelsSpacingY();
        }
        cc.systemEvent.emit("HideSymbolTipEvent");
      };
      Slot_ReelManager.prototype.getOffsetX = function(reelIndex) {
        return reelIndex - (this.reelCount / 2 - .5);
      };
      Slot_ReelManager.prototype.update = function(dt) {
        switch (this.status) {
         case STATUS.SCROLL_ING:
          this.scrolling();
          break;

         case STATUS.SCROLL_END:
          this.scrollEnd();
          break;

         case STATUS.RWARD_EFFECTING_ING:
          this.rewardEffecting();
          break;

         case STATUS.RWARD_EFFECTING_END:
          this.rewardEffectEnd();
        }
      };
      Slot_ReelManager.prototype.setReelTable = function(p_reelTable) {
        for (var i = 0; i < this.reelCount; i++) this.reelsList[i].setReelTable(p_reelTable[i]);
      };
      Slot_ReelManager.prototype.setReelStartIndex = function(p_reelStartIndexList) {
        for (var i = 0; i < this.reelCount; i++) {
          this.reelsList[i].setReelStartIndex(p_reelStartIndexList[i]);
          this.reelsList[i].allSymbolPlayIdleEffect();
          this.reelsList[i].hideOutRangeSymbol();
        }
        OrientationToolManager_1.default.orientationState !== OrientationToolManager_1.ORIENTATION_TYPE.NONE && this.addEvent();
      };
      Slot_ReelManager.prototype.setAllReelSymbol = function(p_symbolID) {
        for (var i = 0; i < this.reelCount; i++) this.reelsList[i].setAllSymbol(p_symbolID[i]);
      };
      Slot_ReelManager.prototype.scrollAllReels = function(p_data) {
        var _omenCount = 0;
        this.showAllReelSymbol();
        for (var i = 0; i < this.reelsList.length; i++) {
          this.reelsList[i].SetAllSymbolZOrder(0);
          var _omenScrollingTime = 0;
          var _startDelayTime = this.reelStartDelayTime * i;
          var _scrollingTime = 0;
          var _dropOutStartDelayTime = i * this.dropOutStartIntervalTime;
          var _dropInStartDelayTime = (6 - i) * this.dropOutStartIntervalTime + i * this.dropInStartIntervalTime;
          p_data.hasLongWild && (_scrollingTime = this.hasLongWildScrollTime);
          if (this.isFastMode) {
            _scrollingTime += this.reelFastScrollTime;
            _startDelayTime = 0;
          } else {
            _scrollingTime += this.reelNormalScrollTime + this.reelStopDelayTime * i;
            if (p_data.hasOmenReels[i]) {
              _omenCount++;
              _omenScrollingTime = this.reelOmenScrollTime;
            }
            _omenCount > 0 && (_scrollingTime += this.reelOmenScrollTime * _omenCount);
          }
          true === p_data.isSkipDropOut && (_dropInStartDelayTime = i * this.dropInStartIntervalTime);
          var _data = new Slot_Reel_ScrollData_1.default();
          _data.tagetSymbolIndex = p_data.targetSymbolIndex[i];
          _data.scrollStartDelayTime = _startDelayTime;
          _data.scrollingTime = _scrollingTime;
          _data.omenScrollingTime = _omenScrollingTime;
          _data.rewardTime = p_data.rewardTime;
          _data.dropOutTime = this.dropOutTime;
          _data.dropOutEasing = this.dropOutEasing;
          _data.dropOutDelayTime = this.dropOutDelayTime;
          _data.dropOutStartDelayTime = _dropOutStartDelayTime;
          _data.dropInTime = this.dropInTime;
          _data.dropInEasing = this.dropInEasing;
          _data.dropInDelayTime = this.dropInDelayTime;
          _data.dropInStartDelayTime = _dropInStartDelayTime;
          _data.dropInReboundHeight = this.dropInReboundHeight;
          _data.dropInReboundTime = this.dropInReboundTime;
          _data.dropInReboundEasingOut = this.dropInReboundEasingOut;
          _data.dropInReboundEasingIn = this.dropInReboundEasingIn;
          _data.dropInReboundAngle = this.dropInReboundAngle;
          _data.dropInReboundAngleTime = this.dropInReboundAngleTime;
          _data.scatterBonus = p_data.scatterBonus[i];
          _data.reels_Above = p_data.reels_Above[i];
          i < p_data.reels.length && (_data.reel = p_data.reels[i]);
          _data.isFreeGame = p_data.isFreeGame;
          _data.isSkipDropOut = p_data.isSkipDropOut;
          this.reelsList[i].scroll(_data);
        }
        this.hideMaskEffect();
        this.status = STATUS.SCROLL_ING;
      };
      Slot_ReelManager.prototype.setFastMode = function() {
        this.isFastMode = true;
      };
      Slot_ReelManager.prototype.setNormalMode = function() {
        this.isFastMode = false;
      };
      Slot_ReelManager.prototype.stopAllReelScroll = function() {
        for (var i = 0; i < this.reelsList.length; i++) this.reelsList[i].stopScroll();
      };
      Slot_ReelManager.prototype.isReelSrolling = function() {
        return this.status == STATUS.SCROLL_ING || this.status == STATUS.SCROLL_END;
      };
      Slot_ReelManager.prototype.isRewardEffecting = function() {
        return this.status == STATUS.RWARD_EFFECTING_ING || this.status == STATUS.RWARD_EFFECTING_END;
      };
      Slot_ReelManager.prototype.showSymbolReWardEffect = function(p_winPosition, p_effectLoop) {
        for (var i = 0; i < p_winPosition.length; i++) {
          this.reelsList[i].SetAllSymbolZOrder(0);
          this.reelsList[i].showSymbolReWardEffect(p_winPosition[i], p_effectLoop);
        }
        this.status = STATUS.RWARD_EFFECTING_ING;
        this.showMaskEffect();
      };
      Slot_ReelManager.prototype.allSymbolPlayIdleEffect = function() {
        for (var i = 0; i < this.reelsList.length; i++) this.reelsList[i].allSymbolPlayIdleEffect();
        this.status = STATUS.IDLE;
      };
      Slot_ReelManager.prototype.SetAllSymbolZOrder = function(p_zorder) {
        for (var i = 0; i < this.reelsList.length; i++) this.reelsList[i].SetAllSymbolZOrder(p_zorder);
      };
      Slot_ReelManager.prototype.getAllSymbolID = function() {
        var _allSymbolID = [];
        for (var i = 0; i < this.reelsList.length; i++) _allSymbolID[i] = this.reelsList[i].getAllSymbolID();
        return _allSymbolID;
      };
      Slot_ReelManager.prototype.hideReelSymbol = function(p_index) {
        this.reelsList[p_index].hideAllSymbol();
      };
      Slot_ReelManager.prototype.hideAllReelSymbol = function() {
        this.reelsList.forEach(function(item) {
          item.hideAllSymbol();
        });
      };
      Slot_ReelManager.prototype.showAllReelSymbol = function() {
        this.reelsList.forEach(function(item) {
          item.showAllSymbol();
        });
      };
      Slot_ReelManager.prototype.showMaskEffect = function() {
        this.omenMask.active = true;
        this.omenMask.stopAllActions();
        cc.tween(this.omenMask).to(.1, {
          opacity: this.omenMaskOpacity
        }, {
          easing: "cubicIn"
        }).start();
      };
      Slot_ReelManager.prototype.hideMaskEffect = function() {
        var _this = this;
        this.omenMask.stopAllActions();
        cc.tween(this.omenMask).to(.1, {
          opacity: 0
        }, {
          easing: "cubicIn"
        }).call(function() {
          _this.omenMask.active = false;
        }).start();
      };
      Slot_ReelManager.prototype.setDisplaySymbolCount = function(p_symbolLen) {
        this.reelsList.forEach(function(item, index) {
          item.setDisplaySymbolCount(p_symbolLen[index]);
        });
      };
      Slot_ReelManager.prototype.setSymbolSiblingIndex = function(p_isDescending) {
        this.reelsList.forEach(function(item) {
          item.setSymbolSiblingIndex(p_isDescending);
        });
      };
      Slot_ReelManager.prototype.setReelParent = function(index, reelNode) {
        reelNode.setParent(this.content);
      };
      Slot_ReelManager.prototype.createReels = function() {
        this.reelsList = [];
        for (var i = 0; i < this.reelCount; i++) {
          var _reelNode = cc.instantiate(this.reelPrefab);
          var _reel = _reelNode.getComponent(Slot_Reel_1.default);
          this.setReelParent(i, _reelNode);
          var spacing = this.reelSpacing;
          OrientationToolManager_1.default.orientationState !== OrientationToolManager_1.ORIENTATION_TYPE.NONE && (spacing = this.isHorizontal() ? this.reelSpacingH : this.reelSpacingV);
          var _reelPosition = this.getReelPosition(i, this.reelCount, spacing);
          _reelNode.setPosition(_reelPosition);
          var _data = new Slot_Reel_InitData_1.default();
          _data.symbolCount = this.symbolCount;
          if (OrientationToolManager_1.default.orientationState === OrientationToolManager_1.ORIENTATION_TYPE.NONE) {
            _data.symbolSpacing = this.symbolSpacing;
            _data.symbolScale = new cc.Vec2(1, 1);
            _data.omenScale = this.omenScaleV;
          } else {
            _data.symbolSpacing = this.isHorizontal() ? this.symbolSpacingH : this.symbolSpacingV;
            _data.symbolScale = this.isHorizontal() ? this.symbolScaleH : this.symbolScaleV;
            _data.omenScale = this.isHorizontal() ? this.omenScaleH : this.omenScaleV;
          }
          _data.moveSpeed = this.reelMoveSpeed;
          _data.omenMoveSpeed = this.reelOmenSpeed;
          _data.omenSpeedMutly = this.omenSpeedMutly;
          _data.omenSlowTime = this.omenSlowTime;
          _data.reelSlowTime = this.reelSlowTime;
          _data.reboundTime = this.reelReboundTime;
          _data.reelReboundRange = this.reelReboundRange;
          _data.scrollingUpTime = this.reelScrollUpTime;
          _data.scrollingUpRange = this.reelScrollUpRange;
          _data.bundleName = this.bundleName;
          _data.bundlePath = this.bundlePath;
          _data.reelIndex = i;
          false == cc.isValid(this.reelsOffset[i]) && (this.reelsOffset[i] = cc.Vec2.ZERO);
          _data.reelOffset = this.reelsOffset[i];
          _data.reelMode = this.reelMode;
          _reel.init(_data);
          this.reelsList.push(_reel);
        }
      };
      Slot_ReelManager.prototype.getReelPosition = function(p_Index, p_reelCount, p_reelSpacing) {
        var _addtion = 0;
        p_reelCount % 2 == 0 && (_addtion = this.reelPrefab.getContentSize().width / 2);
        var _middleIndex = Math.floor(p_reelCount / 2);
        var _times = p_Index - _middleIndex;
        var _spacing = this.reelPrefab.getContentSize().width + p_reelSpacing;
        var _vec2 = new cc.Vec2(_spacing * _times + _addtion, 0);
        return _vec2;
      };
      Slot_ReelManager.prototype.scrolling = function() {
        if (false == this.omenMask.active) for (var i = 0; i < this.reelsList.length; i++) if (this.reelsList[i].isOmening()) {
          for (var j = 0; j < i; j++) this.reelsList[j].SetScatterSymbolZOrder(10);
          this.showMaskEffect();
        }
        for (var i = 0; i < this.reelsList.length; i++) if (this.reelsList[i].isScrolling()) return;
        this.status = STATUS.SCROLL_END;
      };
      Slot_ReelManager.prototype.scrollEnd = function() {
        this.status = STATUS.IDLE;
        this.hideMaskEffect();
      };
      Slot_ReelManager.prototype.rewardEffecting = function() {
        for (var i = 0; i < this.reelsList.length; i++) if (this.reelsList[i].isRewardEffecting()) return;
        this.status = STATUS.RWARD_EFFECTING_END;
      };
      Slot_ReelManager.prototype.rewardEffectEnd = function() {
        this.status = STATUS.IDLE;
      };
      Slot_ReelManager.prototype.initSymbolPos = function() {
        for (var i = 0; i < this.reelsList.length; i++) this.reelsList[i].initSymbolPos();
      };
      Slot_ReelManager.prototype.setSmbolToTop = function(p_symbolPos) {
        for (var i = 0; i < p_symbolPos.length; i++) this.reelsList[i].setSmbolToTop(p_symbolPos[i]);
      };
      Slot_ReelManager.prototype.setReelOffset = function(p_index, p_offset) {
        this.reelsList[p_index].updateReelOffset(p_offset);
      };
      __decorate([ property({
        displayName: "\u9810\u5146\u7684\u906e\u7f69",
        type: cc.Node
      }) ], Slot_ReelManager.prototype, "omenMask", void 0);
      __decorate([ property({
        displayName: "\u8f2a\u5b50\u7684\u9810\u88fd\u7269",
        type: cc.Node
      }) ], Slot_ReelManager.prototype, "reelPrefab", void 0);
      __decorate([ property({
        displayName: "\u8f2a\u5b50\u7684content",
        type: cc.Node
      }) ], Slot_ReelManager.prototype, "content", void 0);
      __decorate([ property({
        readonly: true,
        displayName: "============ \u3010 \u4ee5\u4e0b\u70ba\u8f2a\u5b50\u8a2d\u5b9a \u3011 ============"
      }) ], Slot_ReelManager.prototype, "tip1String", void 0);
      __decorate([ property({
        type: Slot_Reel_InitData_1.ReelMode,
        displayName: "\u8f2a\u5b50\u7684\u6a21\u5f0f"
      }) ], Slot_ReelManager.prototype, "reelMode", void 0);
      __decorate([ property({
        displayName: "\u8f2a\u5b50\u7684\u6578\u91cf",
        type: cc.Integer
      }) ], Slot_ReelManager.prototype, "reelCount", void 0);
      __decorate([ property({
        displayName: "\u8f2a\u5b50\u7684\u9593\u8ddd(\u6c92\u6709\u76f4\u6a6b\u7248\u7684\u8a71\u4f7f\u7528\u9019\u500b)",
        visible: function() {
          return OrientationToolManager_1.default.orientationState === OrientationToolManager_1.ORIENTATION_TYPE.NONE;
        }
      }) ], Slot_ReelManager.prototype, "reelSpacing", void 0);
      __decorate([ property({
        displayName: "\u76f4\u7248\u8f2a\u5b50\u7684\u9593\u8ddd"
      }) ], Slot_ReelManager.prototype, "reelSpacingV", void 0);
      __decorate([ property({
        displayName: "\u6a6b\u7248\u8f2a\u5b50\u7684\u9593\u8ddd"
      }) ], Slot_ReelManager.prototype, "reelSpacingH", void 0);
      __decorate([ property({
        displayName: "\u6bcf\u4e00\u8f2a\u7684\u504f\u79fb",
        type: [ cc.Vec2 ]
      }) ], Slot_ReelManager.prototype, "reelsOffset", void 0);
      __decorate([ property({
        readonly: true,
        displayName: "============ \u3010 \u4ee5\u4e0b\u70ba\u7b26\u865f\u8a2d\u5b9a \u3011 ============="
      }) ], Slot_ReelManager.prototype, "tip2String", void 0);
      __decorate([ property({
        displayName: "\u7b26\u865f\u7684\u6578\u91cf",
        type: cc.Integer
      }) ], Slot_ReelManager.prototype, "symbolCount", void 0);
      __decorate([ property({
        displayName: "\u7b26\u865f\u7684\u9593\u8ddd(\u6c92\u6709\u76f4\u6a6b\u7248\u7684\u8a71\u4f7f\u7528\u9019\u500b)",
        visible: function() {
          return OrientationToolManager_1.default.orientationState === OrientationToolManager_1.ORIENTATION_TYPE.NONE;
        }
      }) ], Slot_ReelManager.prototype, "symbolSpacing", void 0);
      __decorate([ property({
        displayName: "\u76f4\u7248\u7b26\u865f\u7684\u9593\u8ddd"
      }) ], Slot_ReelManager.prototype, "symbolSpacingV", void 0);
      __decorate([ property({
        displayName: "\u6a6b\u7248\u7b26\u865f\u7684\u9593\u8ddd"
      }) ], Slot_ReelManager.prototype, "symbolSpacingH", void 0);
      __decorate([ property({
        displayName: "\u76f4\u7248\u7b26\u865f\u7684\u5927\u5c0f"
      }) ], Slot_ReelManager.prototype, "symbolScaleV", void 0);
      __decorate([ property({
        displayName: "\u6a6b\u7248\u7b26\u865f\u7684\u5927\u5c0f"
      }) ], Slot_ReelManager.prototype, "symbolScaleH", void 0);
      __decorate([ property({
        displayName: "\u76f4\u7248\u9810\u5146\u7684\u5927\u5c0f"
      }) ], Slot_ReelManager.prototype, "omenScaleV", void 0);
      __decorate([ property({
        displayName: "\u6a6b\u7248\u9810\u5146\u7684\u5927\u5c0f"
      }) ], Slot_ReelManager.prototype, "omenScaleH", void 0);
      __decorate([ property({
        readonly: true,
        displayName: "============ \u3010 \u4ee5\u4e0b\u70baspin\u52d5\u756b \u3011 ============="
      }) ], Slot_ReelManager.prototype, "tip3String", void 0);
      __decorate([ property({
        readonly: true,
        displayName: "\u3010 \u6642\u9593\u8aaa\u660e \u3011",
        multiline: true,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "tip4String", void 0);
      __decorate([ property({
        displayName: "\u6efe\u8f2a\u5f80\u4e0a\u6efe\u52d5\u6642\u9593",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "reelScrollUpTime", void 0);
      __decorate([ property({
        displayName: "\u6efe\u8f2a\u5f80\u4e0a\u6efe\u52d5\u5e45\u5ea6",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "reelScrollUpRange", void 0);
      __decorate([ property({
        displayName: "\u6efe\u8f2a\u6b63\u5e38\u6efe\u52d5\u6642\u9593",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "reelNormalScrollTime", void 0);
      __decorate([ property({
        displayName: "\u6efe\u8f2a\u9ad8\u901f\u6efe\u52d5\u6642\u9593",
        type: cc.Float,
        tooltip: "\u7e3d\u6642\u9593 \uff1d \u9577Wild\u7684\u8868\u6f14\u6642\u9593 + \u6efe\u8f2a\u9ad8\u901f\u6efe\u52d5\u6642\u9593 + \u6efe\u8f2a\u6e1b\u901f\u6642\u9593 + \u6efe\u8f2a\u56de\u5f48\u6642\u9593 \nPS\uff1a\u4e0d\u6703\u6709\u9810\u5146\u6548\u679c",
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "reelFastScrollTime", void 0);
      __decorate([ property({
        displayName: "\u6efe\u8f2a\u6efe\u52d5\u901f\u5ea6",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "reelMoveSpeed", void 0);
      __decorate([ property({
        displayName: "\u9810\u5146\u6efe\u52d5\u6642\u9593",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "reelOmenScrollTime", void 0);
      __decorate([ property({
        displayName: "\u9810\u5146\u6642\u6efe\u52d5\u901f\u5ea6",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "reelOmenSpeed", void 0);
      __decorate([ property({
        displayName: "\u9810\u5146\u6642\u6efe\u52d5\u901f\u5ea6\u7684\u500d\u7387",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "omenSpeedMutly", void 0);
      __decorate([ property({
        displayName: "\u9810\u5146\u6e1b\u901f\u7684\u6642\u9593",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "omenSlowTime", void 0);
      __decorate([ property({
        displayName: "\u9577Wild\u7684\u8868\u6f14\u6642\u9593",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "hasLongWildScrollTime", void 0);
      __decorate([ property({
        displayName: "\u8f2a\u5b50\u958b\u59cb\u8f49\u52d5\u9593\u9694",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "reelStartDelayTime", void 0);
      __decorate([ property({
        displayName: "\u8f2a\u5b50\u505c\u6b62\u8f49\u52d5\u9593\u9694",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "reelStopDelayTime", void 0);
      __decorate([ property({
        displayName: "\u6efe\u8f2a\u6e1b\u901f\u6642\u9593",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "reelSlowTime", void 0);
      __decorate([ property({
        displayName: "\u6efe\u8f2a\u56de\u5f48\u6642\u9593",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "reelReboundTime", void 0);
      __decorate([ property({
        displayName: "\u56de\u5f48\u5e45\u5ea6(0.01~0.9)",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL;
        }
      }) ], Slot_ReelManager.prototype, "reelReboundRange", void 0);
      __decorate([ property({
        displayName: "\u6bcf\u8f2a\u6389\u843d\u6642\u9593",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.DROP;
        }
      }) ], Slot_ReelManager.prototype, "dropOutTime", void 0);
      __decorate([ property({
        displayName: "\u6bcf\u8f2a\u6389\u843d\u6642\u9593\u66f2\u7dda",
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.DROP;
        }
      }) ], Slot_ReelManager.prototype, "dropOutEasing", void 0);
      __decorate([ property({
        displayName: "\u6bcf\u500b\u7b26\u865f\u6389\u843d\u9593\u9694\u6642\u9593",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.DROP;
        }
      }) ], Slot_ReelManager.prototype, "dropOutDelayTime", void 0);
      __decorate([ property({
        displayName: "\u6bcf\u8f2a\u6389\u843d\u9593\u9694\u6642\u9593",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.DROP;
        }
      }) ], Slot_ReelManager.prototype, "dropOutStartIntervalTime", void 0);
      __decorate([ property({
        displayName: "\u6bcf\u8f2a\u843d\u4e0b\u6642\u9593",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.DROP;
        }
      }) ], Slot_ReelManager.prototype, "dropInTime", void 0);
      __decorate([ property({
        displayName: "\u6bcf\u8f2a\u843d\u4e0b\u6642\u9593\u66f2\u7dda",
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.DROP;
        }
      }) ], Slot_ReelManager.prototype, "dropInEasing", void 0);
      __decorate([ property({
        displayName: "\u6bcf\u500b\u7b26\u865f\u843d\u4e0b\u9593\u9694\u6642\u9593",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.DROP;
        }
      }) ], Slot_ReelManager.prototype, "dropInDelayTime", void 0);
      __decorate([ property({
        displayName: "\u6bcf\u8f2a\u843d\u4e0b\u9593\u9694\u6642\u9593",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.DROP;
        }
      }) ], Slot_ReelManager.prototype, "dropInStartIntervalTime", void 0);
      __decorate([ property({
        displayName: "\u843d\u4e0b\u5f8c\u56de\u5f48\u9ad8\u5ea6",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.DROP;
        }
      }) ], Slot_ReelManager.prototype, "dropInReboundHeight", void 0);
      __decorate([ property({
        displayName: "\u843d\u4e0b\u5f8c\u56de\u5f48\u6642\u9593",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.DROP;
        }
      }) ], Slot_ReelManager.prototype, "dropInReboundTime", void 0);
      __decorate([ property({
        displayName: "\u843d\u4e0b\u5f8c\u56de\u5f48\u66f2\u7dda(\u51fa)",
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.DROP;
        }
      }) ], Slot_ReelManager.prototype, "dropInReboundEasingOut", void 0);
      __decorate([ property({
        displayName: "\u843d\u4e0b\u5f8c\u56de\u5f48\u66f2\u7dda(\u5165)",
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.DROP;
        }
      }) ], Slot_ReelManager.prototype, "dropInReboundEasingIn", void 0);
      __decorate([ property({
        displayName: "\u843d\u4e0b\u5f8c\u56de\u5f48\u6643\u52d5\u89d2\u5ea6",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.DROP;
        }
      }) ], Slot_ReelManager.prototype, "dropInReboundAngle", void 0);
      __decorate([ property({
        displayName: "\u843d\u4e0b\u5f8c\u56de\u5f48\u6416\u6643\u6642\u9593",
        type: cc.Float,
        visible: function() {
          return this.reelMode === Slot_Reel_InitData_1.ReelMode.DROP;
        }
      }) ], Slot_ReelManager.prototype, "dropInReboundAngleTime", void 0);
      Slot_ReelManager = __decorate([ ccclass ], Slot_ReelManager);
      return Slot_ReelManager;
    }(cc.Component);
    exports.default = Slot_ReelManager;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/OrientationTool/OrientationToolManager": void 0,
    "../Data/Slot_Reel_InitData": "Slot_Reel_InitData",
    "../Data/Slot_Reel_ScrollData": "Slot_Reel_ScrollData",
    "./Slot_Reel": "Slot_Reel"
  } ],
  Slot_Reel_InitData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1bfdwQfTFPqZFf5Y6et1RQ", "Slot_Reel_InitData");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Easing = exports.ReelMode = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    exports.ReelMode = cc.Enum({
      SCROLL: 0,
      DROP: 1
    });
    exports.Easing = cc.Enum({});
    var Slot_Reel_InitData = function() {
      function Slot_Reel_InitData() {
        this.bundlePath = "";
        this.reelMode = exports.ReelMode.SCROLL;
        this.symbolScale = new cc.Vec2(1, 1);
        this.omenScale = new cc.Vec2(1, 1);
      }
      Slot_Reel_InitData = __decorate([ ccclass ], Slot_Reel_InitData);
      return Slot_Reel_InitData;
    }();
    exports.default = Slot_Reel_InitData;
    cc._RF.pop();
  }, {} ],
  Slot_Reel_ScrollData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c1b3+E2ftF1612Sxw18vDR", "Slot_Reel_ScrollData");
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
    var Slot_Reel_ScrollData = function() {
      function Slot_Reel_ScrollData() {
        this.tagetSymbolIndex = 0;
        this.scrollStartDelayTime = 0;
        this.scrollingTime = 0;
        this.omenScrollingTime = 0;
        this.rewardTime = 0;
        this.reel = [];
        this.dropOutTime = 0;
        this.dropOutEasing = "expoIn";
        this.dropOutDelayTime = 0;
        this.dropOutStartDelayTime = 0;
        this.dropInTime = 0;
        this.dropInEasing = "sineIn";
        this.dropInDelayTime = 0;
        this.dropInStartDelayTime = 0;
        this.dropInReboundHeight = 0;
        this.dropInReboundTime = 0;
        this.dropInReboundEasingOut = "cubicOut";
        this.dropInReboundEasingIn = "cubicIn";
        this.dropInReboundAngle = 0;
        this.dropInReboundAngleTime = 0;
        this.isFreeGame = false;
        this.isSkipDropOut = false;
        this.scatterBonus = [];
        this.reels_Above = 0;
      }
      Slot_Reel_ScrollData = __decorate([ ccclass ], Slot_Reel_ScrollData);
      return Slot_Reel_ScrollData;
    }();
    exports.default = Slot_Reel_ScrollData;
    cc._RF.pop();
  }, {} ],
  Slot_Reel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e7af9meQnROtLCfLRD4aqXC", "Slot_Reel");
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
    var Slot_Symbol_1 = require("./Slot_Symbol");
    var Slot_Reel_InitData_1 = require("../Data/Slot_Reel_InitData");
    var Slot_Symbol_InitData_1 = require("../Data/Slot_Symbol_InitData");
    var AudioManager_1 = require("../../../Common/Tools/AudioManager/AudioManager");
    var Slot_DataManager_1 = require("../../Slot_DataManager");
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
      STATUS[STATUS["DROP_OUT_START"] = 10] = "DROP_OUT_START";
      STATUS[STATUS["DROP_OUT_WAIT"] = 11] = "DROP_OUT_WAIT";
      STATUS[STATUS["DROP_IN_START"] = 12] = "DROP_IN_START";
      STATUS[STATUS["DROP_IN_WAIT"] = 13] = "DROP_IN_WAIT";
    })(STATUS || (STATUS = {}));
    var Slot_Reel = function(_super) {
      __extends(Slot_Reel, _super);
      function Slot_Reel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.symbolPrefab = null;
        _this.omenBackground = null;
        _this.omenEffect = null;
        _this.omenEffectParent = null;
        _this.slowEasing = "cubicOut";
        _this.rewardEffectTime = 0;
        _this.reelIndex = 0;
        _this.symbolsList = [];
        _this.reelTable = [];
        _this.status = STATUS.IDLE;
        _this.moveSpeed = 0;
        _this.omenMoveSpeed = 0;
        _this.scrollStartDelayTime = 0;
        _this.scrollingUpTime = 0;
        _this.scrollingUpRange = 0;
        _this.scrollingTime = 0;
        _this.omenScrollingTime = 0;
        _this.reboundTime = 0;
        _this.reelSlowTime = 0;
        _this.reelReboundRange = 0;
        _this.omenReboundAlignmentTime = 0;
        _this.omenSpeedMutly = 0;
        _this.omenSlowTime = 0;
        _this.symbolSpacing = 0;
        _this.alignmentDataCount = 0;
        _this.tempScrollUpTime = 0;
        _this.tempScrollTime = 0;
        _this.tempAlignmentDataCount = 0;
        _this.tagetSymbolIndex = 0;
        _this.nowTopSymbolOrderList = [];
        _this.isShowOmenEffect = false;
        _this.omenSound = null;
        _this.displaySymbolCount = 0;
        _this.tempOmenMoveTime = 0;
        _this.tempOmenReboundAlignmentTime = 0;
        _this.temprewardEffectTime = 0;
        _this.reelOffset = cc.Vec2.ZERO;
        _this.reel = [];
        _this.isFreeGame = false;
        _this.reelMode = Slot_Reel_InitData_1.ReelMode.SCROLL;
        _this.isSkipDropOut = false;
        _this.tempDropOutTime = 0;
        _this.tempDropInTime = 0;
        _this.dropOutTime = 0;
        _this.dropOutEasing = "expoIn";
        _this.dropOutDelayTime = 0;
        _this.dropOutStartDelayTime = 0;
        _this.dropInTime = 0;
        _this.dropInEasing = "sineIn";
        _this.dropInDelayTime = 0;
        _this.dropInStartDelayTime = 0;
        _this.dropInReboundHeight = 0;
        _this.dropInReboundTime = 0;
        _this.dropInReboundEasingOut = "cubicOut";
        _this.dropInReboundEasingIn = "cubicIn";
        _this.dropInReboundAngle = 0;
        _this.dropInReboundAngleTime = 0;
        _this.orientationYOffset = 0;
        _this.reelAbove = 0;
        return _this;
      }
      Slot_Reel_1 = Slot_Reel;
      Slot_Reel.prototype.init = function(p_data) {
        var _symbolCount = p_data.symbolCount + 2;
        this.reelSlowTime = p_data.reelSlowTime;
        this.moveSpeed = p_data.moveSpeed;
        this.omenMoveSpeed = p_data.omenMoveSpeed;
        this.omenSpeedMutly = p_data.omenSpeedMutly;
        this.omenSlowTime = p_data.omenSlowTime;
        this.reboundTime = p_data.reboundTime;
        this.reelReboundRange = p_data.reelReboundRange;
        this.symbolSpacing = p_data.symbolSpacing;
        this.alignmentDataCount = _symbolCount - 1;
        this.scrollingUpTime = p_data.scrollingUpTime;
        this.scrollingUpRange = p_data.scrollingUpRange;
        this.reelOffset = p_data.reelOffset;
        this.displaySymbolCount = p_data.symbolCount;
        this.reelMode = p_data.reelMode;
        this.reelIndex = p_data.reelIndex;
        for (var i = 0; i < _symbolCount; i++) {
          var _symbolNode = cc.instantiate(this.symbolPrefab);
          var _symbol = _symbolNode.getComponent(Slot_Symbol_1.default);
          var _data = new Slot_Symbol_InitData_1.default();
          _data.bundleName = p_data.bundleName;
          _data.bundlePath = p_data.bundlePath;
          _data.reelIndex = p_data.reelIndex;
          _symbol.init(_data);
          this.symbolsList.push(_symbol);
        }
        for (var i = 0; i < this.symbolsList.length; i++) {
          this.symbolsList[i].node.setScale(p_data.symbolScale);
          var _symbolPosition = this.getSymbolPosition(i);
          this.symbolsList[i].node.setParent(this.node.parent);
          this.symbolsList[i].node.setSiblingIndex(0);
          this.symbolsList[i].node.setPosition(_symbolPosition);
        }
        this.setOmenEffectParent();
        this.closeOmenEffect();
        this.initOmenBackground();
        this.omenScale(p_data.omenScale);
      };
      Slot_Reel.prototype.update = function(dt) {
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

         case STATUS.REWARD_EFFECTING:
          this.rewardEffecting(dt);
          break;

         case STATUS.DROP_OUT_START:
          this.dropOutStart(dt);
          break;

         case STATUS.DROP_IN_START:
          this.dropInStart(dt);
        }
      };
      Slot_Reel.prototype.scroll = function(p_data) {
        this.tagetSymbolIndex = p_data.tagetSymbolIndex;
        this.scrollStartDelayTime = p_data.scrollStartDelayTime;
        this.scrollingTime = p_data.scrollingTime;
        this.omenScrollingTime = p_data.omenScrollingTime;
        this.rewardEffectTime = p_data.rewardTime;
        this.reel = p_data.reel;
        this.isFreeGame = p_data.isFreeGame;
        this.reelAbove = p_data.reels_Above;
        if (this.omenScrollingTime > 0) {
          var _symbolHeight = this.symbolsList[0].node.getContentSize().height + this.symbolSpacing;
          this.omenReboundAlignmentTime = _symbolHeight * this.alignmentDataCount / (_symbolHeight / this.omenSlowTime / .5);
        }
        this.temprewardEffectTime = 0;
        this.tempScrollTime = 0;
        this.tempAlignmentDataCount = 0;
        this.tempOmenMoveTime = 0;
        this.tempOmenReboundAlignmentTime = 0;
        this.isSkipDropOut = p_data.isSkipDropOut;
        this.tempDropOutTime = 0;
        this.tempDropInTime = 0;
        this.dropOutTime = p_data.dropOutTime;
        this.dropOutEasing = p_data.dropOutEasing;
        this.dropOutDelayTime = p_data.dropOutDelayTime;
        this.dropOutStartDelayTime = p_data.dropOutStartDelayTime;
        this.dropInTime = p_data.dropInTime;
        this.dropInEasing = p_data.dropInEasing;
        this.dropInDelayTime = p_data.dropInDelayTime;
        this.dropInStartDelayTime = p_data.dropInStartDelayTime;
        this.dropInReboundHeight = p_data.dropInReboundHeight;
        this.dropInReboundTime = p_data.dropInReboundTime;
        this.dropInReboundEasingOut = p_data.dropInReboundEasingOut;
        this.dropInReboundEasingIn = p_data.dropInReboundEasingIn;
        this.dropInReboundAngle = p_data.dropInReboundAngle;
        this.dropInReboundAngleTime = p_data.dropInReboundAngleTime;
        if (this.reelMode === Slot_Reel_InitData_1.ReelMode.SCROLL) this.status = STATUS.SCROLLING_UP; else if (this.reelMode === Slot_Reel_InitData_1.ReelMode.DROP) if (this.isSkipDropOut) {
          this.status = STATUS.DROP_IN_START;
          this.hideAllSymbol();
        } else this.status = STATUS.DROP_OUT_START;
        this.allSymbolPlayScrollingEffect();
      };
      Slot_Reel.prototype.setReelTable = function(p_reelTable) {
        this.reelTable = p_reelTable;
      };
      Slot_Reel.prototype.setReelStartIndex = function(p_symbolIndex) {
        for (var i = 0; i < this.symbolsList.length; i++) {
          var _middle = Math.floor(this.symbolsList.length / 2);
          this.reelMode !== Slot_Reel_InitData_1.ReelMode.DROP && this.reelMode !== Slot_Reel_InitData_1.ReelMode.SCROLL || (_middle += 1);
          var _symbolIndex = p_symbolIndex + i - _middle;
          _symbolIndex = this.CorrectionSymbolIndex(_symbolIndex);
          var _symbolVaule = this.reelTable[_symbolIndex];
          this.symbolsList[i].setOrder(i);
          this.symbolsList[i].setData(_symbolIndex, _symbolVaule);
        }
      };
      Slot_Reel.prototype.setAllSymbol = function(p_symbolID, p_isFreeGame) {
        void 0 === p_isFreeGame && (p_isFreeGame = false);
        for (var i = 0; i < this.symbolsList.length; i++) for (var j = 0; j < this.symbolsList.length; j++) if (this.symbolsList[j].getOrder() == i) {
          var _symbolIndex = this.symbolsList[j].getNowIndex();
          this.symbolsList[j].setData(_symbolIndex, p_symbolID[i], p_isFreeGame);
        }
      };
      Slot_Reel.prototype.isScrolling = function() {
        return this.status != STATUS.IDLE;
      };
      Slot_Reel.prototype.isOmening = function() {
        return this.status == STATUS.OMEN_SCROLLING;
      };
      Slot_Reel.prototype.isRewardEffecting = function() {
        return this.status == STATUS.REWARD_EFFECTING;
      };
      Slot_Reel.prototype.stopScroll = function() {
        if (this.status == STATUS.IDLE) return;
        this.tempAlignmentDataCount = 0;
        for (var i = this.symbolsList.length - 1; i >= 0; i--) {
          var _symbolHeight = this.symbolsList[i].node.getContentSize().height * this.symbolsList[i].node.scaleY;
          var _targetPosition = this.getSymbolPosition(i);
          _targetPosition.y += _symbolHeight + this.symbolSpacing;
          this.symbolsList[i].node.stopAllActions();
          this.symbolsList[i].node.setPosition(_targetPosition);
          this.tempAlignmentDataCount++;
          this.symbolsList[i].setOrder(i);
          this.changeSymbol(i, true, this.reel, this.isFreeGame);
        }
        this.isShowOmenEffect && this.closeOmenEffect();
        this.playSound();
        this.hideOutRangeSymbol();
        this.allSymbolPlayIdleEffect(true);
        this.status = STATUS.IDLE;
      };
      Slot_Reel.prototype.showSymbolReWardEffect = function(p_winPosition, p_effectLoop) {
        for (var i = 0; i < p_winPosition.length; i++) if (1 == p_winPosition[i]) for (var j = 0; j < this.symbolsList.length; j++) if (this.symbolsList[j].getOrder() - 2 == i) {
          this.symbolsList[j].setZOrder(10);
          this.symbolsList[j].playRewardEffect(p_effectLoop);
        }
        this.status = STATUS.REWARD_EFFECTING;
      };
      Slot_Reel.prototype.allSymbolPlayIdleEffect = function(p_isStop) {
        void 0 === p_isStop && (p_isStop = false);
        for (var i = 0; i < this.symbolsList.length; i++) {
          p_isStop ? this.symbolsList[i].stopScrollSetZOrder() : this.symbolsList[i].setZOrder(0);
          this.symbolsList[i].playIdleEffect();
        }
      };
      Slot_Reel.prototype.SetAllSymbolZOrder = function(p_zorder) {
        for (var i = 0; i < this.symbolsList.length; i++) this.symbolsList[i].setZOrder(p_zorder);
      };
      Slot_Reel.prototype.SetScatterSymbolZOrder = function(p_zorder) {
        for (var i = 0; i < this.symbolsList.length; i++) this.symbolsList[i].getSymbolID() == Slot_DataManager_1.SYMBOL_NAME.Scatter && this.symbolsList[i].setZOrder(p_zorder);
      };
      Slot_Reel.prototype.getAllSymbolID = function() {
        var _allSymbolID = [];
        for (var i = 0; i < this.symbolsList.length; i++) for (var j = 0; j < this.symbolsList.length; j++) this.symbolsList[j].getOrder() == i && (_allSymbolID[i] = this.symbolsList[j].getSymbolID());
        return _allSymbolID;
      };
      Slot_Reel.prototype.hideAllSymbol = function() {
        this.symbolsList.forEach(function(item) {
          item.node.opacity = 0;
        });
      };
      Slot_Reel.prototype.showAllSymbol = function() {
        this.symbolsList.forEach(function(item) {
          item.node.opacity = 255;
        });
      };
      Slot_Reel.prototype.hideOutRangeSymbol = function(p_isInit) {
        var _this = this;
        void 0 === p_isInit && (p_isInit = false);
        this.symbolsList.forEach(function(item) {
          p_isInit ? item.getOrder() < Math.ceil((_this.symbolsList.length - _this.displaySymbolCount) / 2) ? item.node.opacity = 0 : item.getOrder() >= _this.symbolsList.length - Math.floor((_this.symbolsList.length - _this.displaySymbolCount) / 2) && (item.node.opacity = 0) : item.getOrder() < _this.symbolsList.length - _this.displaySymbolCount && (item.node.opacity = 0);
        });
      };
      Slot_Reel.prototype.setDisplaySymbolCount = function(p_count) {
        this.displaySymbolCount = p_count;
      };
      Slot_Reel.prototype.setSymbolSiblingIndex = function(p_isDescending) {
        var _this = this;
        this.symbolsList.forEach(function(item) {
          p_isDescending ? item.node.setSiblingIndex(item.getOrder()) : item.node.setSiblingIndex(_this.symbolsList.length - item.getOrder());
        });
      };
      Slot_Reel.prototype.initOmenBackground = function() {
        this.omenBackground.setParent(this.node.parent);
        this.omenBackground.setPosition(new cc.Vec2(this.node.position.x, this.node.position.y));
        this.omenBackground.active = false;
        this.omenBackground.zIndex = 2;
      };
      Slot_Reel.prototype.moveSymbol = function(p_symbolsOrder, p_dt) {
        this.symbolsList[p_symbolsOrder].node.y -= this.moveSpeed * p_dt;
      };
      Slot_Reel.prototype.omenMoveSymbol = function(p_symbolsOrder, p_dt) {
        var _symbolHeight = this.symbolsList[0].node.getContentSize().height * this.symbolsList[0].node.scaleY + this.symbolSpacing;
        var _baseSlowSpeed = _symbolHeight / this.omenSlowTime;
        var _baseTime = this.omenScrollingTime - this.omenReboundAlignmentTime - this.omenSlowTime;
        var _DownY = this.omenSpeedMutly * this.omenMoveSpeed * p_dt * Math.abs(_baseTime - this.tempOmenMoveTime) / _baseTime + 1 * _baseSlowSpeed * p_dt * (1 - this.tempOmenReboundAlignmentTime / this.omenReboundAlignmentTime) + _baseSlowSpeed * p_dt;
        this.symbolsList[p_symbolsOrder].node.y -= _DownY;
      };
      Slot_Reel.prototype.hasWild = function() {
        var _top = this.getSymbolPosition(1).y;
        for (var i = 0; i < this.symbolsList.length; i++) if (this.symbolsList[i].node.y <= _top && this.symbolsList[i].getSymbolID() == Slot_DataManager_1.SYMBOL_NAME.Wild) return true;
        return false;
      };
      Slot_Reel.prototype.hasScatter = function() {
        var _top = this.getSymbolPosition(1).y;
        for (var i = 0; i < this.symbolsList.length; i++) if (this.symbolsList[i].node.y <= _top && this.symbolsList[i].getSymbolID() == Slot_DataManager_1.SYMBOL_NAME.Scatter) return true;
        return false;
      };
      Slot_Reel.prototype.isSymbolOverButtom = function(p_symbolOrder) {
        var _reelHeight = this.node.getContentSize().height * this.node.scaleY;
        var _symbolHeight = this.symbolsList[p_symbolOrder].node.getContentSize().height * this.symbolsList[p_symbolOrder].node.scaleY;
        var _buttomPosition = -_reelHeight / 2 - (_symbolHeight + this.symbolSpacing) / 2;
        _buttomPosition += this.reelOffset.y;
        if (this.symbolsList[p_symbolOrder].node.y < _buttomPosition) return true;
        return false;
      };
      Slot_Reel.prototype.symbolToTopPosition = function(p_symbolOrder) {
        var _symbolHeight = this.symbolsList[p_symbolOrder].node.getContentSize().height * this.symbolsList[p_symbolOrder].node.scaleY;
        var _movePositionY = (_symbolHeight + this.symbolSpacing) * this.symbolsList.length;
        this.symbolsList[p_symbolOrder].node.y += _movePositionY;
      };
      Slot_Reel.prototype.changeSymbol = function(p_symbolOrder, p_Alignment, p_reel, p_isFreeGame) {
        void 0 === p_reel && (p_reel = []);
        void 0 === p_isFreeGame && (p_isFreeGame = false);
        var _newSymbolIndex = 0;
        if (p_reel.length > 0) {
          var _reel = p_reel;
          this.reelMode !== Slot_Reel_InitData_1.ReelMode.DROP && this.reelMode !== Slot_Reel_InitData_1.ReelMode.SCROLL || (_reel = [ 1, 1 ].concat(p_reel));
          for (var j = 0; j < this.symbolsList.length; j++) if (this.symbolsList[j].getOrder() == p_symbolOrder) {
            var _symbolIndex = this.symbolsList[j].getNowIndex();
            this.symbolsList[j].setData(_symbolIndex, _reel[p_symbolOrder], p_isFreeGame);
          }
          return;
        }
        if (p_Alignment) {
          var _middle = Math.floor(this.alignmentDataCount / 2);
          _newSymbolIndex = this.tagetSymbolIndex + _middle - this.tempAlignmentDataCount;
          _newSymbolIndex = this.CorrectionSymbolIndex(_newSymbolIndex);
        } else {
          var _topSymbolOrder = p_symbolOrder - (this.symbolsList.length - 1);
          _topSymbolOrder < 0 && (_topSymbolOrder += this.symbolsList.length);
          _newSymbolIndex = this.symbolsList[_topSymbolOrder].getNowIndex() - 1;
          _newSymbolIndex = this.CorrectionSymbolIndex(_newSymbolIndex);
        }
        var _symbolVaule = this.reelTable[_newSymbolIndex];
        this.symbolsList[p_symbolOrder].setData(_newSymbolIndex, _symbolVaule, this.isFreeGame);
      };
      Slot_Reel.prototype.CorrectionSymbolIndex = function(p_symbolIndex) {
        var _symbolIndex = p_symbolIndex;
        while (_symbolIndex < 0) _symbolIndex += this.reelTable.length;
        while (_symbolIndex >= this.reelTable.length) _symbolIndex -= this.reelTable.length;
        return _symbolIndex;
      };
      Slot_Reel.prototype.showOmenEffect = function() {
        this.isShowOmenEffect = true;
        this.omenEffect.active = true;
        this.omenBackground.active = true;
        for (var i = 0; i < this.symbolsList.length; i++) this.symbolsList[i].setZOrder(10);
      };
      Slot_Reel.prototype.closeOmenEffect = function() {
        this.stopOmenScrollingSound();
        this.isShowOmenEffect = false;
        this.omenEffect.active = false;
        this.omenBackground.active = false;
      };
      Slot_Reel.prototype.allSymbolPlayScrollingEffect = function() {
        for (var i = 0; i < this.symbolsList.length; i++) this.symbolsList[i].playScrollingEffect();
      };
      Slot_Reel.prototype.setOmenEffectParent = function() {
        var _newPosisiton = this.omenEffect.convertToWorldSpaceAR(this.omenEffect.position);
        _newPosisiton = this.omenEffectParent.convertToNodeSpaceAR(_newPosisiton);
        this.omenEffect.setParent(this.omenEffectParent);
        this.omenEffect.setPosition(_newPosisiton);
      };
      Slot_Reel.prototype.playSound = function() {
        if (false == Slot_Reel_1.isReelStopSoundCD) {
          Slot_Reel_1.isReelStopSoundCD = true;
          this.playReelStopSound();
          cc.tween(this.node).delay(.1).call(function() {
            Slot_Reel_1.isReelStopSoundCD = false;
          }).start();
        }
        if (this.hasWild() && false == Slot_Reel_1.isWildSoundCD) {
          Slot_Reel_1.isWildSoundCD = true;
          this.playWildSound();
          cc.tween(this.node).delay(.1).call(function() {
            Slot_Reel_1.isWildSoundCD = false;
          }).start();
        }
        if (this.hasScatter() && false == Slot_Reel_1.isScatterSoundCD) {
          Slot_Reel_1.isScatterSoundCD = true;
          this.playScatterSound();
          cc.tween(this.node).delay(.1).call(function() {
            Slot_Reel_1.isScatterSoundCD = false;
          }).start();
        }
      };
      Slot_Reel.prototype.scrollingUp = function(p_dt) {
        this.tempScrollTime += p_dt;
        if (this.tempScrollTime >= this.scrollStartDelayTime) {
          var _movePositionY = (this.symbolsList[0].node.height * this.symbolsList[0].node.scaleY + this.symbolSpacing) * this.scrollingUpRange * (p_dt / this.scrollingUpTime);
          for (var i = 0; i < this.symbolsList.length; i++) this.symbolsList[i].node.y += _movePositionY;
          this.tempScrollTime > this.scrollStartDelayTime + this.scrollingUpTime && (this.status = STATUS.SCROLLING);
        }
      };
      Slot_Reel.prototype.scrolling = function(p_dt) {
        this.tempScrollTime += p_dt;
        if (this.tempScrollTime >= this.scrollStartDelayTime) {
          for (var i = 0; i < this.symbolsList.length; i++) {
            this.moveSymbol(i, p_dt);
            if (this.isSymbolOverButtom(i)) {
              this.symbolToTopPosition(i);
              this.changeSymbol(i, false);
            }
          }
          if (this.tempScrollTime > this.scrollingTime - this.omenScrollingTime) if (this.omenScrollingTime > 0) {
            this.playOmenScrollingSound();
            this.status = STATUS.OMEN_SCROLLING;
          } else this.status = STATUS.REBOUND_ALIGNMENT;
        }
      };
      Slot_Reel.prototype.omenScrolling = function(p_dt) {
        this.tempScrollTime += p_dt;
        this.tempOmenMoveTime += p_dt;
        false == this.isShowOmenEffect && this.showOmenEffect();
        if (this.tempScrollTime >= this.scrollStartDelayTime) {
          for (var i = 0; i < this.symbolsList.length; i++) {
            this.omenMoveSymbol(i, p_dt);
            if (this.isSymbolOverButtom(i)) {
              this.symbolToTopPosition(i);
              this.changeSymbol(i, false);
            }
          }
          this.tempScrollTime > this.scrollingTime - (this.omenReboundAlignmentTime + this.omenSlowTime) && (this.status = STATUS.REBOUND_ALIGNMENT);
        }
      };
      Slot_Reel.prototype.reboundAlignment = function(p_dt) {
        if (this.tempAlignmentDataCount < this.alignmentDataCount) {
          this.tempScrollTime += p_dt;
          var _orderList = [];
          var _positionList = [];
          for (var i = 0; i < this.symbolsList.length; i++) {
            if (this.omenScrollingTime > 0) {
              if (0 == i) {
                this.tempOmenReboundAlignmentTime += p_dt;
                this.tempOmenReboundAlignmentTime > this.omenReboundAlignmentTime && (this.tempOmenReboundAlignmentTime = this.omenReboundAlignmentTime);
              }
              this.omenMoveSymbol(i, p_dt);
            } else this.moveSymbol(i, p_dt);
            if (this.isSymbolOverButtom(i)) {
              _orderList.push(i);
              _positionList.push(this.symbolsList[i].node.y);
            }
          }
          for (var i = 0; i < _positionList.length - 1; i++) for (var j = i + 1; j < _positionList.length; j++) if (_positionList[i] > _positionList[j]) {
            var _temp = _positionList[i];
            _positionList[i] = _positionList[j];
            _positionList[j] = _temp;
            _temp = _orderList[i];
            _orderList[i] = _orderList[j];
            _orderList[j] = _temp;
          }
          for (var i = 0; i < _orderList.length; i++) if (this.tempAlignmentDataCount < this.alignmentDataCount) {
            this.nowTopSymbolOrderList[this.tempAlignmentDataCount] = _orderList[i];
            this.tempAlignmentDataCount++;
            this.symbolToTopPosition(_orderList[i]);
            this.changeSymbol(_orderList[i], true);
          }
        } else {
          this.status = STATUS.SLOWING;
          this.slowing();
        }
      };
      Slot_Reel.prototype.slowing = function() {
        var _this = this;
        this.status = STATUS.SLOW_WAIT;
        var _slowTime = 0;
        var _easing = "";
        for (var i = 0; i < this.nowTopSymbolOrderList.length; i++) {
          var _symbolOrder = this.nowTopSymbolOrderList[i];
          var _targetPosition_1 = this.getSymbolPosition(this.nowTopSymbolOrderList.length - i - 1);
          this.symbolsList[_symbolOrder].setOrder(this.nowTopSymbolOrderList.length - i);
          if (this.omenScrollingTime > 0) {
            _easing = "linear";
            var _symbolHeight_1 = this.symbolsList[0].node.getContentSize().height * this.symbolsList[0].node.scaleY + this.symbolSpacing;
            var _distance = Math.abs(_targetPosition_1.y - this.symbolsList[_symbolOrder].node.y);
            var _magnification = _distance / _symbolHeight_1;
            _slowTime = this.omenSlowTime * _magnification;
          } else {
            _easing = this.slowEasing;
            _targetPosition_1.y -= (this.symbolsList[0].node.height * this.symbolsList[0].node.scaleY + this.symbolSpacing) * this.reelReboundRange;
            _slowTime = this.reelSlowTime;
          }
          cc.Tween.stopAllByTarget(this.symbolsList[_symbolOrder].node);
          cc.tween(this.symbolsList[_symbolOrder].node).to(_slowTime, {
            y: _targetPosition_1.y
          }, {
            easing: _easing
          }).call(function() {
            _this.status = STATUS.REBOUND;
          }).start();
        }
        var _otherSymbolOrder = -1;
        for (var i = 0; i < this.symbolsList.length; i++) {
          var _hasValue = false;
          for (var j = 0; j < this.nowTopSymbolOrderList.length; j++) i == this.nowTopSymbolOrderList[j] && (_hasValue = true);
          false == _hasValue && (_otherSymbolOrder = i);
        }
        var _symbolHeight = this.symbolsList[0].node.getContentSize().height * this.symbolsList[0].node.scaleY;
        var _targetPosition = this.getSymbolPosition(0);
        _targetPosition.y += _symbolHeight + this.symbolSpacing;
        var _buttomPosition = this.getSymbolPosition(this.symbolsList.length - 1);
        cc.Tween.stopAllByTarget(this.symbolsList[_otherSymbolOrder].node);
        cc.tween(this.symbolsList[_otherSymbolOrder].node).to(_slowTime, {
          position: cc.v3(_buttomPosition)
        }, {
          easing: _easing
        }).call(function() {
          _this.symbolsList[_otherSymbolOrder].node.setPosition(_targetPosition);
          _this.symbolsList[_otherSymbolOrder].setOrder(0);
          _this.changeSymbol(_otherSymbolOrder, false);
        }).start();
      };
      Slot_Reel.prototype.rebound = function() {
        var _this = this;
        this.status = STATUS.REBOUND_WAIT;
        for (var i = 0; i < this.nowTopSymbolOrderList.length; i++) {
          var _symbolOrder = this.nowTopSymbolOrderList[i];
          var _targetPosition = this.getSymbolPosition(this.nowTopSymbolOrderList.length - i - 1);
          if (this.omenScrollingTime > 0) {
            this.closeOmenEffect();
            this.status = STATUS.IDLE;
            this.allSymbolPlayIdleEffect(true);
            this.hideOutRangeSymbol();
            this.playSound();
            this.symbolsList[_symbolOrder].node.y = _targetPosition.y;
          } else {
            cc.Tween.stopAllByTarget(this.symbolsList[_symbolOrder].node);
            cc.tween(this.symbolsList[_symbolOrder].node).call(function() {
              _this.playSound();
            }).to(this.reboundTime, {
              y: _targetPosition.y
            }, {
              easing: "sineIn"
            }).call(function() {
              _this.status = STATUS.IDLE;
              _this.allSymbolPlayIdleEffect(true);
              _this.hideOutRangeSymbol();
            }).start();
          }
        }
      };
      Slot_Reel.prototype.rewardEffecting = function(p_dt) {
        this.temprewardEffectTime += p_dt;
        if (this.temprewardEffectTime > this.rewardEffectTime) {
          this.status = STATUS.IDLE;
          this.temprewardEffectTime = 0;
        }
      };
      Slot_Reel.prototype.getSymbolOrder = function(p_order) {
        for (var i = 0; i < this.symbolsList.length; i++) if (this.symbolsList[i].getOrder() == p_order) return i;
        cc.error("\u53d6\u7b26\u865f\u9806\u5e8f\u6709\u554f\u984c \u9019\u4e0d\u61c9\u8a72\u51fa\u73fe " + p_order);
        return -1;
      };
      Slot_Reel.prototype.getSymbolPosition = function(p_order) {
        var _addtion = 0;
        var _symbolCount = this.symbolsList.length;
        _symbolCount % 2 == 0 && (_addtion = -this.symbolPrefab.getContentSize().height * this.symbolsList[0].node.scaleY / 2);
        var _middleOrder = Math.floor(_symbolCount / 2);
        var _times = -(p_order - _middleOrder);
        var _spacing = this.symbolPrefab.getContentSize().height * this.symbolsList[0].node.scaleY + this.symbolSpacing;
        var _vec2 = new cc.Vec2(0, _spacing * _times + _addtion);
        _vec2 = _vec2.add(new cc.Vec2(this.node.position.x, this.node.position.y));
        _vec2 = _vec2.add(new cc.Vec2(this.reelOffset.x, this.reelOffset.y));
        return _vec2;
      };
      Slot_Reel.prototype.playReelStopSound = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("ReelStop");
      };
      Slot_Reel.prototype.playOmenScrollingSound = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("ScrollingOmen");
      };
      Slot_Reel.prototype.playWildSound = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("WildSound");
      };
      Slot_Reel.prototype.playScatterSound = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("ScatterSound");
      };
      Slot_Reel.prototype.stopOmenScrollingSound = function() {
        cc.isValid(this.omenSound) && cc.audioEngine.stop(this.omenSound);
        if (false == this.isShowOmenEffect) return;
        AudioManager_1.AudioManager.instance.playAudioEvent("StopScrollingOmen");
      };
      Slot_Reel.prototype.setSmbolToTop = function(p_symbolPos) {
        this.SetAllSymbolZOrder(0);
        for (var i = 0; i < p_symbolPos.length; i++) if (1 == p_symbolPos[i]) for (var j = 0; j < this.symbolsList.length; j++) this.symbolsList[j].getOrder() - 2 == i && this.symbolsList[j].setZOrder(10);
      };
      Slot_Reel.prototype.initSymbolPos = function() {
        for (var i = this.symbolsList.length - 1; i >= 0; i--) {
          var _symbolHeight = this.symbolsList[i].node.getContentSize().height * this.symbolsList[i].node.scaleY;
          this.symbolsList[i].node.y += _symbolHeight + this.symbolSpacing;
        }
      };
      Slot_Reel.prototype.initSymbolScale = function(scale) {
        this.symbolsList.forEach(function(symbol) {
          return symbol.node.setScale(scale);
        });
      };
      Slot_Reel.prototype.updateSymbolX = function() {
        var _this = this;
        this.symbolsList.forEach(function(symbol) {
          return symbol.node.x = _this.node.x;
        });
      };
      Slot_Reel.prototype.dropOutStart = function(p_dt) {
        var _this = this;
        this.tempDropOutTime += p_dt;
        if (this.tempDropOutTime < this.dropOutStartDelayTime) return;
        this.status = STATUS.DROP_OUT_WAIT;
        var _loop_1 = function(i) {
          var _symbolHeight = this_1.symbolsList[i].node.getContentSize().height * this_1.symbolsList[i].node.scaleY;
          var _movePositionY = (_symbolHeight + this_1.symbolSpacing) * this_1.symbolsList.length;
          var _targetPosition = this_1.getSymbolPosition(i);
          _targetPosition.y -= _movePositionY;
          this_1.symbolsList[i].getOrder() >= 2 && cc.tween(this_1.symbolsList[i].node).delay((this_1.symbolsList.length - this_1.symbolsList[i].getOrder()) * this_1.dropOutDelayTime).to(this_1.dropOutTime, {
            position: cc.v3(_targetPosition)
          }, {
            easing: this_1.dropOutEasing
          }).call(function() {
            2 == _this.symbolsList[i].getOrder() && (_this.status = STATUS.DROP_IN_START);
          }).start();
        };
        var this_1 = this;
        for (var i = 0; i < this.symbolsList.length; i++) _loop_1(i);
      };
      Slot_Reel.prototype.dropInStart = function(p_dt) {
        var _this = this;
        this.tempDropInTime += p_dt;
        if (this.tempDropInTime < this.dropInStartDelayTime) return;
        this.status = STATUS.DROP_IN_WAIT;
        this.tempAlignmentDataCount = 0;
        var _loop_2 = function(i) {
          var _symbolHeight = this_2.symbolsList[i].node.getContentSize().height;
          var _targetPosition = this_2.getSymbolPosition(i);
          var _movePositionY = (_symbolHeight + this_2.symbolSpacing) * this_2.symbolsList.length;
          var _shakeAngle = Math.random() > .5 ? this_2.dropInReboundAngle : -this_2.dropInReboundAngle;
          var _reboundTime = .5 * this_2.dropInReboundTime;
          var _reboundByPosOut = cc.v3(0, -this_2.dropInReboundHeight);
          var _reboundByPosIn = cc.v3(0, +this_2.dropInReboundHeight);
          var _reboundAngleTime = .5 * this_2.dropInReboundAngleTime;
          _targetPosition.y += _symbolHeight + this_2.symbolSpacing;
          this_2.symbolsList[i].node.stopAllActions();
          this_2.symbolsList[i].node.setPosition(_targetPosition.x, _targetPosition.y + _movePositionY);
          this_2.symbolsList[i].node.opacity = 255;
          this_2.tempAlignmentDataCount++;
          this_2.symbolsList[i].setOrder(i);
          this_2.changeSymbol(i, true, this_2.reel, this_2.isFreeGame);
          this_2.allSymbolPlayIdleEffect(true);
          cc.tween(this_2.symbolsList[i].node).delay((this_2.symbolsList.length - i) * this_2.dropInDelayTime).to(this_2.dropInTime, {
            position: cc.v3(_targetPosition.x, _targetPosition.y)
          }, {
            easing: this_2.dropInEasing
          }).parallel(cc.tween().sequence(cc.tween().by(_reboundTime, {
            position: _reboundByPosOut
          }, {
            easing: this_2.dropInReboundEasingOut
          }), cc.tween().by(_reboundTime, {
            position: _reboundByPosIn
          }, {
            easing: this_2.dropInReboundEasingIn
          })), cc.tween().sequence(cc.tween().by(_reboundAngleTime, {
            angle: _shakeAngle
          }, {
            easing: this_2.dropInReboundEasingOut
          }), cc.tween().by(_reboundAngleTime, {
            angle: -_shakeAngle
          }, {
            easing: this_2.dropInReboundEasingIn
          }))).call(function() {
            if (2 == i) {
              _this.status = STATUS.IDLE;
              _this.hideOutRangeSymbol();
            }
          }).start();
        };
        var this_2 = this;
        for (var i = this.symbolsList.length - 1; i >= 0; i--) _loop_2(i);
      };
      Slot_Reel.prototype.updateReelOffset = function(p_offset) {
        this.reelOffset = p_offset;
      };
      Slot_Reel.prototype.reelsSpacingX = function(spacingX) {
        for (var i = 0; i < this.symbolsList.length; i++) this.symbolsList[i].setSymbolX(this.node.x + spacingX);
      };
      Slot_Reel.prototype.reelsScale = function(spacingX) {
        for (var i = 0; i < this.symbolsList.length; i++) this.symbolsList[i].setScale(spacingX);
      };
      Slot_Reel.prototype.omenScale = function(scale) {
        this.omenBackground.setScale(scale);
        this.omenEffect.setScale(scale);
      };
      Slot_Reel.prototype.setSymbolSpacing = function(spacingY, orientationYOffset) {
        this.orientationYOffset = orientationYOffset;
        this.symbolSpacing = spacingY;
      };
      Slot_Reel.prototype.reelsSpacingY = function() {
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
      Slot_Reel.prototype.orientationSyncY = function() {
        var _this = this;
        var symbolList = this.symbolsList.concat();
        symbolList.sort(function(a, b) {
          return b.node.y - a.node.y;
        });
        if (symbolList.length % 2) {
          var middleIndex_1 = Math.floor(symbolList.length / 2);
          symbolList.forEach(function(symbol, index) {
            var times = -(index - middleIndex_1);
            symbol.node.y += times * _this.orientationYOffset;
          });
        } else {
          var centerBottomIndex_1 = symbolList.length / 2;
          symbolList.forEach(function(symbol, index) {
            if (index === centerBottomIndex_1 || index === centerBottomIndex_1 - 1) symbol.node.y += _this.orientationYOffset / 2 * (index === centerBottomIndex_1 ? -1 : 1); else {
              var step = void 0;
              step = index < centerBottomIndex_1 ? centerBottomIndex_1 - index - 1 : index - centerBottomIndex_1;
              symbol.node.y += _this.orientationYOffset * (step + .5) * (index > centerBottomIndex_1 ? -1 : 1);
            }
          });
        }
      };
      Slot_Reel.prototype.updateOmenX = function(index) {
        this.omenEffectParent.children[index].x = this.node.x;
        this.omenBackground.x = this.node.x;
      };
      Slot_Reel.prototype.getSymbolHeight = function() {
        return this.symbolsList[0].node.height;
      };
      var Slot_Reel_1;
      Slot_Reel.isReelStopSoundCD = false;
      Slot_Reel.isWildSoundCD = false;
      Slot_Reel.isScatterSoundCD = false;
      __decorate([ property(cc.Node) ], Slot_Reel.prototype, "symbolPrefab", void 0);
      __decorate([ property(cc.Node) ], Slot_Reel.prototype, "omenBackground", void 0);
      __decorate([ property(cc.Node) ], Slot_Reel.prototype, "omenEffect", void 0);
      __decorate([ property(cc.Node) ], Slot_Reel.prototype, "omenEffectParent", void 0);
      __decorate([ property(cc.String) ], Slot_Reel.prototype, "slowEasing", void 0);
      Slot_Reel = Slot_Reel_1 = __decorate([ ccclass ], Slot_Reel);
      return Slot_Reel;
    }(cc.Component);
    exports.default = Slot_Reel;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../Slot_DataManager": "Slot_DataManager",
    "../Data/Slot_Reel_InitData": "Slot_Reel_InitData",
    "../Data/Slot_Symbol_InitData": "Slot_Symbol_InitData",
    "./Slot_Symbol": "Slot_Symbol"
  } ],
  Slot_RulePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71494p0t+VKQLMqff4NrIXG", "Slot_RulePanel");
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
    exports.STATUS = void 0;
    var OrientationToolManager_1 = require("../../../Common/Tools/OrientationTool/OrientationToolManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PAGE = {
      CHANGE_TIME: .25
    };
    var STATUS;
    (function(STATUS) {
      STATUS[STATUS["IDLE"] = 0] = "IDLE";
      STATUS[STATUS["CHANGE_PAGE"] = 1] = "CHANGE_PAGE";
      STATUS[STATUS["SLIDING"] = 2] = "SLIDING";
    })(STATUS = exports.STATUS || (exports.STATUS = {}));
    var Slot_RulePanel = function(_super) {
      __extends(Slot_RulePanel, _super);
      function Slot_RulePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nextPageButton = null;
        _this.prePageButton = null;
        _this.rulePages = [];
        _this.oddsLabelGroup = [];
        _this.oddsTitleLabelGroup = [];
        _this.nowPageIndex = 0;
        _this.startPosX = 0;
        _this.endPosX = 0;
        _this.lowestDis = 144;
        _this.status = STATUS.IDLE;
        _this.data = null;
        return _this;
      }
      Slot_RulePanel.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      };
      Slot_RulePanel.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      };
      Slot_RulePanel.prototype.init = function() {
        for (var i = 0; i < this.rulePages.length; i++) this.rulePages[i].active = false;
        this.rulePages[0].active = true;
        this.setNextPageButtonSwitch();
        this.setPrePageButtonSwitch();
        this.node.active = false;
        this.initMagnification();
        cc.systemEvent.on(OrientationToolManager_1.ORIENTATION_EVENT.RESIZE, this.switchCanvas, this);
      };
      Slot_RulePanel.prototype.start = function() {};
      Slot_RulePanel.prototype.switchCanvas = function() {
        OrientationToolManager_1.default.orientationState !== OrientationToolManager_1.ORIENTATION_TYPE.NONE && (OrientationToolManager_1.default.orientationState === OrientationToolManager_1.ORIENTATION_TYPE.HORIZONTAL ? this.node.setContentSize(1680, 720) : this.node.setContentSize(720, 1680));
      };
      Slot_RulePanel.prototype.open = function() {
        this.switchCanvas();
        this.node.setPosition(new cc.Vec2(0, 0));
        this.node.active = true;
      };
      Slot_RulePanel.prototype.close = function() {
        this.node.active = false;
      };
      Slot_RulePanel.prototype.onNextRulePage = function() {
        var _this = this;
        if (this.status == STATUS.CHANGE_PAGE) return;
        this.status = STATUS.CHANGE_PAGE;
        this.nowPageIndex++;
        this.rulePages[this.nowPageIndex - 1].setPosition(0, 0);
        this.rulePages[this.nowPageIndex].setPosition(this.node.getContentSize().width, 0);
        this.rulePages[this.nowPageIndex - 1].active = true;
        this.rulePages[this.nowPageIndex].active = true;
        cc.tween(this.rulePages[this.nowPageIndex - 1]).to(PAGE.CHANGE_TIME, {
          x: -this.node.getContentSize().width
        }).start();
        cc.tween(this.rulePages[this.nowPageIndex]).to(PAGE.CHANGE_TIME, {
          x: 0
        }).call(function() {
          for (var i = 0; i < _this.rulePages.length; i++) _this.rulePages[i].active = false;
          _this.rulePages[_this.nowPageIndex].active = true;
          _this.setNextPageButtonSwitch();
          _this.setPrePageButtonSwitch();
          _this.status = STATUS.IDLE;
        }).start();
      };
      Slot_RulePanel.prototype.onPreRulePage = function() {
        var _this = this;
        if (this.status == STATUS.CHANGE_PAGE) return;
        this.status = STATUS.CHANGE_PAGE;
        this.nowPageIndex--;
        this.rulePages[this.nowPageIndex + 1].setPosition(0, 0);
        this.rulePages[this.nowPageIndex].setPosition(-this.node.getContentSize().width, 0);
        this.rulePages[this.nowPageIndex + 1].active = true;
        this.rulePages[this.nowPageIndex].active = true;
        cc.tween(this.rulePages[this.nowPageIndex + 1]).to(PAGE.CHANGE_TIME, {
          x: this.node.getContentSize().width
        }).start();
        cc.tween(this.rulePages[this.nowPageIndex]).to(PAGE.CHANGE_TIME, {
          x: 0
        }).call(function() {
          for (var i = 0; i < _this.rulePages.length; i++) _this.rulePages[i].active = false;
          _this.rulePages[_this.nowPageIndex].active = true;
          _this.setNextPageButtonSwitch();
          _this.setPrePageButtonSwitch();
          _this.status = STATUS.IDLE;
        }).start();
      };
      Slot_RulePanel.prototype.setPrePageButtonSwitch = function() {
        0 == this.nowPageIndex ? this.prePageButton.active = false : this.prePageButton.active = true;
      };
      Slot_RulePanel.prototype.setNextPageButtonSwitch = function() {
        this.nowPageIndex == this.rulePages.length - 1 ? this.nextPageButton.active = false : this.nextPageButton.active = true;
      };
      Slot_RulePanel.prototype.initMagnification = function() {
        for (var i = 0; i < this.oddsLabelGroup.length; i++) {
          var oddsLabel = this.oddsLabelGroup[i];
          var symbolID = parseInt(oddsLabel.node.name.split("_")[1]);
          this.changeMagnification(symbolID, i);
        }
      };
      Slot_RulePanel.prototype.changeMagnification = function(symbolID, labelIndex) {
        var keys = Object.keys(this.data.magnificationTable[symbolID]).sort(function(a, b) {
          return Number(b) - Number(a);
        });
        var combotStr = "";
        var scoreStr = "";
        for (var i = 0; i < keys.length; i++) {
          combotStr = combotStr + "" + keys[i];
          scoreStr = scoreStr + "" + this.data.magnificationTable[symbolID][keys[i]];
          if (i < keys.length - 1) {
            combotStr += "\n";
            scoreStr += "\n";
          }
        }
        null != this.oddsTitleLabelGroup[labelIndex] && (this.oddsTitleLabelGroup[labelIndex].string = combotStr);
        null != this.oddsLabelGroup[labelIndex] && (this.oddsLabelGroup[labelIndex].string = scoreStr);
      };
      Slot_RulePanel.prototype.onTouchStart = function(touch) {
        if (this.status == STATUS.CHANGE_PAGE) return;
        this.status = STATUS.SLIDING;
        this.startPosX = this.node.convertToNodeSpaceAR(touch.getLocation()).x;
      };
      Slot_RulePanel.prototype.onTouchEnd = function(touch) {
        if (this.status != STATUS.SLIDING) return;
        this.endPosX = this.node.convertToNodeSpaceAR(touch.getLocation()).x;
        var distance = this.endPosX - this.startPosX;
        distance < -this.lowestDis && this.nowPageIndex < this.rulePages.length - 1 ? this.onNextRulePage() : distance > this.lowestDis && this.nowPageIndex > 0 ? this.onPreRulePage() : this.status = STATUS.IDLE;
      };
      Slot_RulePanel.prototype.onTouchCancel = function(touch) {
        this.onTouchEnd(touch);
      };
      __decorate([ property(cc.Node) ], Slot_RulePanel.prototype, "nextPageButton", void 0);
      __decorate([ property(cc.Node) ], Slot_RulePanel.prototype, "prePageButton", void 0);
      __decorate([ property([ cc.Node ]) ], Slot_RulePanel.prototype, "rulePages", void 0);
      __decorate([ property([ cc.Label ]) ], Slot_RulePanel.prototype, "oddsLabelGroup", void 0);
      __decorate([ property([ cc.Label ]) ], Slot_RulePanel.prototype, "oddsTitleLabelGroup", void 0);
      Slot_RulePanel = __decorate([ ccclass ], Slot_RulePanel);
      return Slot_RulePanel;
    }(cc.Component);
    exports.default = Slot_RulePanel;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/OrientationTool/OrientationToolManager": void 0
  } ],
  Slot_SocketConnect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "762dfgMvj5KFJ5Ft+5ILR8I", "Slot_SocketConnect");
    "use strict";
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
    exports.Slot_SocketConnect = void 0;
    var LocalizationManager_1 = require("../../../Common/Tools/Localization/LocalizationManager");
    var SceneManager_1 = require("../../../Common/Tools/SceneManager/SceneManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot_SocketConnect = function() {
      function Slot_SocketConnect() {
        var _this = this;
        this.offlineEvent = function() {
          _this.showErrorMessage();
        };
        this.reconnectEvent = function(response) {};
        this.disconnectEvent = function() {
          _this.popupManager.ynDialogBox.hide();
          _this.showErrorMessage();
        };
        this.idelDisconnectEvent = function() {
          _this.showErrorMessage();
        };
        this.responseTimeEvent = function(dt) {};
        this.errorGetNewToken = function() {
          return __awaiter(_this, void 0, Promise, function() {
            var newUrl;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                return [ 4, this.socketManager.getNowGameUrl().catch(function(error) {
                  cc.log("get new token fail", error);
                  _this.popupManager.confirmSystemMsgDialogBox.show(LocalizationManager_1.default.getInstance().get("ERROR_CONNECTION"), function() {
                    return window.location.reload();
                  });
                }) ];

               case 1:
                newUrl = _a.sent();
                SceneManager_1.SceneManager.changeURLsToken("?" + newUrl.url.split("?")[1]);
                window.location.reload();
                return [ 2 ];
              }
            });
          });
        };
        this.connectEvent = function(response) {
          _this.dataManager.setLoginData(response);
          cc.log("GameClient.LoginRes", response);
          cc.director.loadScene("G" + _this.dataManager.gameID + "_Lobby");
        };
        this.errorBackToLobbyEvent = function() {
          cc.log("BackToLobby");
          cc.director.preloadScene("G" + _this.dataManager.gameID + "_Lobby", function() {
            cc.director.loadScene("G" + _this.dataManager.gameID + "_Lobby");
          });
        };
      }
      Slot_SocketConnect.prototype.init = function() {
        this.socketManager.setOfflineCallback(this.offlineEvent);
        this.socketManager.setReconnectCallback(this.reconnectEvent);
        this.socketManager.setDisconnectCallback(this.disconnectEvent);
        this.socketManager.setIdelDisconnectCallback(this.idelDisconnectEvent);
        this.socketManager.setResponseTimeCallback(this.responseTimeEvent);
        this.socketManager.setErrorGetNewToken(this.errorGetNewToken);
        this.socketManager.setConnectCallback(this.connectEvent);
        this.socketManager.setErrorBackToLobby(this.errorBackToLobbyEvent);
      };
      Slot_SocketConnect.prototype.showErrorMessage = function() {
        var _this = this;
        var _message = LocalizationManager_1.default.getInstance().get("ERROR_SOCKET_TIME_OUT");
        this.popupManager.confirmSystemMsgDialogBox.show(_message, function() {
          _this.socketManager.login();
        });
      };
      Slot_SocketConnect = __decorate([ ccclass ], Slot_SocketConnect);
      return Slot_SocketConnect;
    }();
    exports.Slot_SocketConnect = Slot_SocketConnect;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/Localization/LocalizationManager": void 0,
    "../../../Common/Tools/SceneManager/SceneManager": void 0
  } ],
  Slot_SocketManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c1f3gO9bVBxbv8vz+jQxYU", "Slot_SocketManager");
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
    var BaseSocketManager_1 = require("../../../Common/Tools/Base/BaseSocketManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot_SocketManager = function(_super) {
      __extends(Slot_SocketManager, _super);
      function Slot_SocketManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._client = null;
        return _this;
      }
      Slot_SocketManager.prototype.init = function() {};
      Slot_SocketManager.prototype.themeDataList = function() {
        return this.request("themeDataList", this._client.themeDataList.bind(this.client), null);
      };
      Slot_SocketManager = __decorate([ ccclass ], Slot_SocketManager);
      return Slot_SocketManager;
    }(BaseSocketManager_1.default);
    exports.default = Slot_SocketManager;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/Base/BaseSocketManager": void 0
  } ],
  Slot_SymbolTipPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2794aCjHyVJJIeHzH2LbxLy", "Slot_SymbolTipPanel");
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
    exports.SymbolTipType = void 0;
    var AudioManager_1 = require("../../../Common/Tools/AudioManager/AudioManager");
    var Slot_DataManager_1 = require("../../Slot_DataManager");
    var Slot_Symbol_InitData_1 = require("../Data/Slot_Symbol_InitData");
    var Slot_Symbol_1 = require("../view/Slot_Symbol");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SymbolTipType = function() {
      function SymbolTipType() {
        this.tipNode = null;
        this.tipFrameNode = null;
        this.tipLabelNode = null;
      }
      __decorate([ property(cc.Node) ], SymbolTipType.prototype, "tipNode", void 0);
      __decorate([ property(cc.Node) ], SymbolTipType.prototype, "tipFrameNode", void 0);
      __decorate([ property(cc.Node) ], SymbolTipType.prototype, "tipLabelNode", void 0);
      SymbolTipType = __decorate([ ccclass("SymbolTipType") ], SymbolTipType);
      return SymbolTipType;
    }();
    exports.SymbolTipType = SymbolTipType;
    var Slot_SymbolTipPanel = function(_super) {
      __extends(Slot_SymbolTipPanel, _super);
      function Slot_SymbolTipPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.longWildTip = new SymbolTipType();
        _this.wildTip = new SymbolTipType();
        _this.scatterTip = new SymbolTipType();
        _this.bonusTip = new SymbolTipType();
        _this.defaultTip = new SymbolTipType();
        _this.defaulTipLabel = null;
        _this.defaulTipCombotLabel = null;
        _this.defaulTipSymbol = null;
        _this.wildSymbol = null;
        _this.scatterSymbol = null;
        _this.bonusSymbol = null;
        _this.data = null;
        return _this;
      }
      Slot_SymbolTipPanel.prototype.start = function() {};
      Slot_SymbolTipPanel.prototype.init = function() {
        this.closeAllTip();
        var _data = new Slot_Symbol_InitData_1.default();
        _data.bundleName = "G" + this.data.gameID;
        _data.bundlePath = "" + this.data.path;
        this.defaulTipSymbol.init(_data);
        this.wildSymbol.init(_data);
        this.scatterSymbol.init(_data);
        this.node.active = false;
      };
      Slot_SymbolTipPanel.prototype.open = function(symbolID, position) {
        this.closeAllTip();
        this.node.active = true;
        this.node.setPosition(cc.Vec2.ZERO);
        var symbolTip = this.getSymbolTip(symbolID);
        position = this.node.convertToNodeSpaceAR(position);
        this.showTip(symbolTip, position);
        symbolTip == this.defaultTip && this.changeMagnification(symbolID);
        symbolTip != this.longWildTip && this.changeSymbolSpite(symbolID);
        AudioManager_1.AudioManager.instance.playAudioEvent("OpenSymbolTip");
      };
      Slot_SymbolTipPanel.prototype.close = function() {
        this.closeAllTip();
        this.node.active = false;
      };
      Slot_SymbolTipPanel.prototype.showTip = function(tip, position) {
        var isLeft = position.x > -50;
        tip.tipNode.active = true;
        tip.tipNode.position = position;
        var tipLabelPosition = tip.tipLabelNode.position;
        var tipFramePosition = tip.tipFrameNode.position;
        if (isLeft) {
          tip.tipLabelNode.position = new cc.Vec3(-Math.abs(tipLabelPosition.x), tipLabelPosition.y, tipLabelPosition.z);
          tip.tipFrameNode.position = new cc.Vec3(-Math.abs(tipFramePosition.x), tipFramePosition.y, tipFramePosition.z);
        } else {
          tip.tipLabelNode.position = new cc.Vec3(Math.abs(tipLabelPosition.x), tipLabelPosition.y, tipLabelPosition.z);
          tip.tipFrameNode.position = new cc.Vec3(Math.abs(tipFramePosition.x), tipFramePosition.y, tipFramePosition.z);
        }
      };
      Slot_SymbolTipPanel.prototype.getSymbolTip = function(symbolID) {
        var symbolTip = null;
        symbolTip = symbolID == Slot_DataManager_1.SYMBOL_NAME.LongWild ? this.longWildTip : symbolID == Slot_DataManager_1.SYMBOL_NAME.Wild ? this.wildTip : symbolID == Slot_DataManager_1.SYMBOL_NAME.Scatter ? this.scatterTip : symbolID == Slot_DataManager_1.SYMBOL_NAME.Bonus ? this.bonusTip : this.defaultTip;
        return symbolTip;
      };
      Slot_SymbolTipPanel.prototype.changeMagnification = function(symbolID) {
        var keys = Object.keys(this.data.magnificationTable[symbolID]).sort(function(a, b) {
          return Number(b) - Number(a);
        });
        var combotStr = "";
        var scoreStr = "";
        for (var i = 0; i < keys.length; i++) {
          combotStr = combotStr + "" + keys[i];
          scoreStr = scoreStr + "" + this.data.magnificationTable[symbolID][keys[i]];
          if (i < keys.length - 1) {
            combotStr += "\n";
            scoreStr += "\n";
          }
        }
        null != this.defaulTipCombotLabel && (this.defaulTipCombotLabel.string = combotStr);
        this.defaulTipLabel.string = scoreStr;
      };
      Slot_SymbolTipPanel.prototype.changeSymbolSpite = function(symbolID) {
        var target = null;
        target = symbolID == Slot_DataManager_1.SYMBOL_NAME.Wild ? this.wildSymbol : symbolID == Slot_DataManager_1.SYMBOL_NAME.Scatter ? this.scatterSymbol : symbolID == Slot_DataManager_1.SYMBOL_NAME.Bonus ? this.bonusSymbol : this.defaulTipSymbol;
        target.node.active = false;
        target.setData(0, symbolID);
        setTimeout(function() {
          target.node.active = true;
          target.playRewardOnce();
        }, 20);
      };
      Slot_SymbolTipPanel.prototype.closeAllTip = function() {
        cc.isValid(this.longWildTip.tipNode) && (this.longWildTip.tipNode.active = false);
        cc.isValid(this.wildTip.tipNode) && (this.wildTip.tipNode.active = false);
        cc.isValid(this.scatterTip.tipNode) && (this.scatterTip.tipNode.active = false);
        cc.isValid(this.bonusTip.tipNode) && (this.bonusTip.tipNode.active = false);
        cc.isValid(this.defaultTip.tipNode) && (this.defaultTip.tipNode.active = false);
      };
      __decorate([ property(SymbolTipType) ], Slot_SymbolTipPanel.prototype, "longWildTip", void 0);
      __decorate([ property(SymbolTipType) ], Slot_SymbolTipPanel.prototype, "wildTip", void 0);
      __decorate([ property(SymbolTipType) ], Slot_SymbolTipPanel.prototype, "scatterTip", void 0);
      __decorate([ property(SymbolTipType) ], Slot_SymbolTipPanel.prototype, "bonusTip", void 0);
      __decorate([ property(SymbolTipType) ], Slot_SymbolTipPanel.prototype, "defaultTip", void 0);
      __decorate([ property(cc.Label) ], Slot_SymbolTipPanel.prototype, "defaulTipLabel", void 0);
      __decorate([ property(cc.Label) ], Slot_SymbolTipPanel.prototype, "defaulTipCombotLabel", void 0);
      __decorate([ property(Slot_Symbol_1.default) ], Slot_SymbolTipPanel.prototype, "defaulTipSymbol", void 0);
      __decorate([ property(Slot_Symbol_1.default) ], Slot_SymbolTipPanel.prototype, "wildSymbol", void 0);
      __decorate([ property(Slot_Symbol_1.default) ], Slot_SymbolTipPanel.prototype, "scatterSymbol", void 0);
      __decorate([ property(Slot_Symbol_1.default) ], Slot_SymbolTipPanel.prototype, "bonusSymbol", void 0);
      Slot_SymbolTipPanel = __decorate([ ccclass ], Slot_SymbolTipPanel);
      return Slot_SymbolTipPanel;
    }(cc.Component);
    exports.default = Slot_SymbolTipPanel;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../Slot_DataManager": "Slot_DataManager",
    "../Data/Slot_Symbol_InitData": "Slot_Symbol_InitData",
    "../view/Slot_Symbol": "Slot_Symbol"
  } ],
  Slot_Symbol_InitData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d4e5fXrkd1AS4AGAZSSpDYb", "Slot_Symbol_InitData");
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
    var Slot_Symbol_InitData = function() {
      function Slot_Symbol_InitData() {
        this.bundlePath = "";
      }
      Slot_Symbol_InitData = __decorate([ ccclass ], Slot_Symbol_InitData);
      return Slot_Symbol_InitData;
    }();
    exports.default = Slot_Symbol_InitData;
    cc._RF.pop();
  }, {} ],
  Slot_Symbol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5666dibNiZK85irbt6HUFOx", "Slot_Symbol");
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
    var Slot_DataManager_1 = require("../../Slot_DataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot_Symbol = function(_super) {
      __extends(Slot_Symbol, _super);
      function Slot_Symbol() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.symbolSpine = null;
        _this.nowIndex = 0;
        _this.order = 0;
        _this.symbolID = -1;
        _this.spineAnimationName = "";
        _this.bundleName = "";
        _this.bundlePath = "";
        return _this;
      }
      Slot_Symbol.prototype.showSymbolTip = function() {
        var position = this.node.parent.parent.parent.convertToWorldSpaceAR(this.node.position);
        cc.systemEvent.emit("ShowSymbolTipEvent", this.symbolID, position);
      };
      Slot_Symbol.prototype.init = function(p_data) {
        this.bundleName = p_data.bundleName;
        this.bundlePath = p_data.bundlePath;
        this.setSymbolSpineMix();
      };
      Slot_Symbol.prototype.setSize = function(p_Size) {
        this.node.setContentSize(p_Size.x, p_Size.y);
      };
      Slot_Symbol.prototype.setScale = function(p_Size) {
        this.node.setScale(p_Size);
      };
      Slot_Symbol.prototype.setData = function(p_nowIndex, p_symbolID, p_isFreeGame) {
        var _this = this;
        void 0 === p_isFreeGame && (p_isFreeGame = false);
        var _symbolSpritePath = this.getSymbolSpinePath(p_symbolID);
        this.nowIndex = p_nowIndex;
        this.symbolID = p_symbolID;
        this.spineAnimationName = "stop";
        cc.assetManager.getBundle(this.bundleName).load(_symbolSpritePath, sp.SkeletonData, function(err, assets) {
          if (err) return;
          _this.symbolSpine.skeletonData = assets;
          _this.symbolSpine.setAnimation(0, _this.spineAnimationName, true);
          _this.setSymbolSize();
        });
      };
      Slot_Symbol.prototype.setSymbolSize = function() {};
      Slot_Symbol.prototype.getNowIndex = function() {
        return this.nowIndex;
      };
      Slot_Symbol.prototype.playRewardOnce = function() {};
      Slot_Symbol.prototype.playScrollingEffect = function() {
        cc.log("\u8868\u6f14\u6efe\u52d5\u4e2d\u6548\u679c");
      };
      Slot_Symbol.prototype.playRewardEffect = function(p_effectLoop) {
        cc.log("\u8868\u6f14\u4e2d\u734e\u6548\u679c");
      };
      Slot_Symbol.prototype.playIdleEffect = function() {
        cc.log("\u8868\u6f14\u5f85\u6a5f\u6548\u679c");
      };
      Slot_Symbol.prototype.stopScrollSetZOrder = function() {
        this.symbolID == Slot_DataManager_1.SYMBOL_NAME.Scatter ? this.setZOrder(10) : this.setZOrder(0);
      };
      Slot_Symbol.prototype.setOrder = function(p_order) {
        this.order = p_order;
      };
      Slot_Symbol.prototype.getOrder = function() {
        return this.order;
      };
      Slot_Symbol.prototype.setZOrder = function(p_zOrder) {
        this.node.zIndex = p_zOrder;
      };
      Slot_Symbol.prototype.getSymbolID = function() {
        return this.symbolID;
      };
      Slot_Symbol.prototype.setSymbolX = function(p_spacingX) {
        this.node.x = p_spacingX;
      };
      Slot_Symbol.prototype.setSymbolY = function(p_spacingY) {
        this.node.y = p_spacingY;
      };
      Slot_Symbol.prototype.getSymbolY = function() {
        return this.node.y;
      };
      Slot_Symbol.prototype.getSymbolSpinePath = function(p_symbolID) {
        var _spriteName = "";
        cc.error("\u9019\u908a\u81ea\u5df1\u7e7c\u627f\u8986\u5beb \u6c92\u4eba\u77e5\u9053\u4f60\u7684Spine\u4f4d\u7f6e\u5728\u54ea");
        return _spriteName;
      };
      Slot_Symbol.prototype.setSymbolSpineMix = function() {
        var symbolData = Object.keys(this.symbolSpine.skeletonData.skeletonJson["animations"]);
        for (var i = 0; i < symbolData.length; i++) {
          var aniName = symbolData[i].split("_");
          if (2 == aniName.length) {
            var symbolName = aniName[0];
            this.symbolSpine.setMix(symbolName + "_play_normal", symbolName + "_play_normal", .5);
            this.symbolSpine.setMix(symbolName + "_play_normal", symbolName + "_stop", .5);
            this.symbolSpine.setMix(symbolName + "_play_win", symbolName + "_play_normal", .5);
          }
        }
      };
      __decorate([ property(sp.Skeleton) ], Slot_Symbol.prototype, "symbolSpine", void 0);
      Slot_Symbol = __decorate([ ccclass ], Slot_Symbol);
      return Slot_Symbol;
    }(cc.Component);
    exports.default = Slot_Symbol;
    cc._RF.pop();
  }, {
    "../../Slot_DataManager": "Slot_DataManager"
  } ],
  Slot_WaitingDialogBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70d34DZymlNwKcQfFIqU9Mm", "Slot_WaitingDialogBox");
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
    exports.Slot_WaitingDialogBox = void 0;
    var BaseWaitingDialogBox_1 = require("../../../../Common/Tools/DynamicPopUp/DialogBox/BaseWaitingDialogBox");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slot_WaitingDialogBox = function(_super) {
      __extends(Slot_WaitingDialogBox, _super);
      function Slot_WaitingDialogBox() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Slot_WaitingDialogBox.prototype.show = function() {
        _super.prototype.show.call(this);
        this.updatePopUp();
      };
      Slot_WaitingDialogBox = __decorate([ ccclass ], Slot_WaitingDialogBox);
      return Slot_WaitingDialogBox;
    }(BaseWaitingDialogBox_1.default);
    exports.Slot_WaitingDialogBox = Slot_WaitingDialogBox;
    cc._RF.pop();
  }, {
    "../../../../Common/Tools/DynamicPopUp/DialogBox/BaseWaitingDialogBox": void 0
  } ],
  Slot_WinScorePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9c0ezeT8tG2ZeuJhc6utpj", "Slot_WinScorePanel");
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
    exports.WIN_SCORE_TYPE = void 0;
    var RunScore_1 = require("../../../Common/Optional/Crosis/RunScore/RunScore");
    var AudioManager_1 = require("../../../Common/Tools/AudioManager/AudioManager");
    var BaseDataManager_1 = require("../../../Common/Tools/Base/BaseDataManager");
    var DesktopBrowserTransform_1 = require("../../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WIN_SCORE_TYPE;
    (function(WIN_SCORE_TYPE) {
      WIN_SCORE_TYPE[WIN_SCORE_TYPE["IDLE"] = 0] = "IDLE";
      WIN_SCORE_TYPE[WIN_SCORE_TYPE["WIN"] = 1] = "WIN";
      WIN_SCORE_TYPE[WIN_SCORE_TYPE["BIG_WIN"] = 2] = "BIG_WIN";
      WIN_SCORE_TYPE[WIN_SCORE_TYPE["SUPER_WIN"] = 3] = "SUPER_WIN";
      WIN_SCORE_TYPE[WIN_SCORE_TYPE["MEGA_WIN"] = 4] = "MEGA_WIN";
    })(WIN_SCORE_TYPE = exports.WIN_SCORE_TYPE || (exports.WIN_SCORE_TYPE = {}));
    var Slot_WinScorePanel = function(_super) {
      __extends(Slot_WinScorePanel, _super);
      function Slot_WinScorePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bigWinOdds = 30;
        _this.superWinOdds = 60;
        _this.megaWinOdds = 120;
        _this.idleTime = 3;
        _this.startDelayTime = 0;
        _this.winScore = null;
        _this.bigWinScore = 0;
        _this.superWinScore = 0;
        _this.megaWinScore = 0;
        _this.winScoreType = WIN_SCORE_TYPE.IDLE;
        _this.runScore = null;
        _this.tempTime = 0;
        _this.runScoreAudio = -1;
        _this.audioNumber = 0;
        _this.betScore = 0;
        return _this;
      }
      Slot_WinScorePanel.prototype.init = function() {
        this.runScore = this.winScore.node.getComponent(RunScore_1.default);
        this.node.active = false;
      };
      Slot_WinScorePanel.prototype.start = function() {};
      Slot_WinScorePanel.prototype.update = function(dt) {
        if (this.winScoreType != WIN_SCORE_TYPE.IDLE) {
          var _nowScore = this.runScore.getNowScore();
          if (this.winScoreType == WIN_SCORE_TYPE.BIG_WIN && _nowScore >= this.superWinScore) {
            this.showSuperWinEffect();
            this.winScoreType = WIN_SCORE_TYPE.SUPER_WIN;
          } else if (this.winScoreType == WIN_SCORE_TYPE.SUPER_WIN && _nowScore >= this.megaWinScore) {
            this.showMegaWinEffect();
            this.winScoreType = WIN_SCORE_TYPE.MEGA_WIN;
          }
          if (_nowScore.toString() == this.winScore.string) {
            0 == this.tempTime && this.runScoreEnd();
            this.tempTime += dt;
            this.tempTime > this.idleTime && (this.winScoreType = WIN_SCORE_TYPE.IDLE);
          }
        }
      };
      Slot_WinScorePanel.prototype.onEnable = function() {
        BaseDataManager_1.default.fastMode && DesktopBrowserTransform_1.default.getInstance().setGameSpeed(1);
      };
      Slot_WinScorePanel.prototype.onDisable = function() {
        BaseDataManager_1.default.fastMode && DesktopBrowserTransform_1.default.getInstance().setGameSpeed(BaseDataManager_1.default.magnification);
      };
      Slot_WinScorePanel.prototype.open = function(p_totalWinScore, p_betScore, p_isFreeGame) {
        var _this = this;
        void 0 === p_isFreeGame && (p_isFreeGame = false);
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).call(function() {
          true;
          console.time("\u3010 \u958b\u555f\u5927\u8d0f\u5206\u9762\u677f \u3011 " + (p_isFreeGame ? "FreeGame" : "MainGame"));
          _this.winScoreType = WIN_SCORE_TYPE.BIG_WIN;
        }).delay(this.startDelayTime).call(function() {
          true;
          console.timeEnd("\u3010 \u958b\u555f\u5927\u8d0f\u5206\u9762\u677f \u3011 " + (p_isFreeGame ? "FreeGame" : "MainGame"));
          true === p_isFreeGame ? AudioManager_1.AudioManager.instance.playAudioEvent("OpenWinScorePanelFreeGame") : AudioManager_1.AudioManager.instance.playAudioEvent("OpenWinScorePanel");
          _this.node.active = true;
          _this.node.setPosition(cc.Vec2.ZERO);
          _this.betScore = p_betScore;
          _this.setWinTypeScore(p_betScore);
          _this.runScore.resetToZero();
          _this.tempTime = 0;
          _this.winScore.string = p_totalWinScore.toString();
          _this.showBigWinEffect();
        }).start();
      };
      Slot_WinScorePanel.prototype.close = function() {
        this.runScore.resetToZero();
        this.node.active = false;
      };
      Slot_WinScorePanel.prototype.isWinScoreEffecting = function() {
        if (this.winScoreType != WIN_SCORE_TYPE.IDLE) return true;
        return false;
      };
      Slot_WinScorePanel.prototype.isEndScore = function() {
        var _nowScore = this.runScore.getNowScore().toString();
        if (_nowScore == this.winScore.string) return true;
        return false;
      };
      Slot_WinScorePanel.prototype.showEndScore = function() {
        if (this.winScoreType != WIN_SCORE_TYPE.IDLE) {
          AudioManager_1.AudioManager.instance.playAudioEvent("WinScorePanelShowEndScore");
          var _nowScore = Number(this.winScore.string);
          if (_nowScore >= this.megaWinScore) {
            this.showMegaWinEffect();
            this.winScoreType = WIN_SCORE_TYPE.MEGA_WIN;
          } else if (_nowScore >= this.superWinScore) {
            this.showSuperWinEffect();
            this.winScoreType = WIN_SCORE_TYPE.SUPER_WIN;
          } else this.showBigWinEffect();
          this.runScore.setRunSpeed(Number.MAX_SAFE_INTEGER);
        }
      };
      Slot_WinScorePanel.prototype.setWinTypeScore = function(p_betScore) {
        this.bigWinScore = p_betScore * this.bigWinOdds;
        this.superWinScore = p_betScore * this.superWinOdds;
        this.megaWinScore = p_betScore * this.megaWinOdds;
      };
      Slot_WinScorePanel.prototype.showBigWinEffect = function() {
        var _speed = this.superWinOdds * this.betScore / 10;
        this.runScore.setRunSpeed(_speed);
      };
      Slot_WinScorePanel.prototype.showSuperWinEffect = function() {
        var _speed = (this.megaWinOdds * this.betScore - this.superWinOdds * this.betScore) / 5;
        this.runScore.setRunSpeed(_speed);
      };
      Slot_WinScorePanel.prototype.showMegaWinEffect = function() {
        var _preSpeed = (this.megaWinOdds * this.betScore - this.superWinOdds * this.betScore) / 5;
        var _speed = Math.max(_preSpeed, (Number(this.winScore.string) - this.megaWinOdds * this.betScore) / 5);
        this.runScore.setRunSpeed(_speed);
      };
      Slot_WinScorePanel.prototype.runScoreEnd = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("WinScorePanelRunScoreEnd");
      };
      __decorate([ property({
        type: cc.Float,
        displayName: "\u63db\u6210bigWin\u500d\u7387"
      }) ], Slot_WinScorePanel.prototype, "bigWinOdds", void 0);
      __decorate([ property({
        type: cc.Float,
        displayName: "\u63db\u6210superWin\u500d\u7387"
      }) ], Slot_WinScorePanel.prototype, "superWinOdds", void 0);
      __decorate([ property({
        type: cc.Float,
        displayName: "\u63db\u6210megaWin\u500d\u7387"
      }) ], Slot_WinScorePanel.prototype, "megaWinOdds", void 0);
      __decorate([ property(cc.Float) ], Slot_WinScorePanel.prototype, "idleTime", void 0);
      __decorate([ property(cc.Float) ], Slot_WinScorePanel.prototype, "startDelayTime", void 0);
      __decorate([ property(cc.Label) ], Slot_WinScorePanel.prototype, "winScore", void 0);
      Slot_WinScorePanel = __decorate([ ccclass ], Slot_WinScorePanel);
      return Slot_WinScorePanel;
    }(cc.Component);
    exports.default = Slot_WinScorePanel;
    cc._RF.pop();
  }, {
    "../../../Common/Optional/Crosis/RunScore/RunScore": void 0,
    "../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../Common/Tools/Base/BaseDataManager": void 0,
    "../../../Common/Tools/DesktopBrowserTransform/DesktopBrowserTransform": void 0
  } ],
  YNDialogBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46699bo6DFIkaGn8/d8MVMa", "YNDialogBox");
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
    exports.YNDialogBox = void 0;
    var BaseYNDialogBox_1 = require("../../../../Common/Tools/DynamicPopUp/DialogBox/BaseYNDialogBox");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var YNDialogBox = function(_super) {
      __extends(YNDialogBox, _super);
      function YNDialogBox() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.popup = null;
        _this.confirmApply = null;
        _this.cancel = null;
        return _this;
      }
      YNDialogBox.prototype.showBlockLayer = function() {
        this.updatePopUp();
        _super.prototype.showBlockLayer.call(this);
      };
      YNDialogBox.prototype.show = function(msg, yesCallback, noCallback, align) {
        void 0 === noCallback && (noCallback = null);
        this.popup && cc.audioEngine.playEffect(this.popup, false);
        _super.prototype.show.call(this, msg, yesCallback, noCallback, align);
      };
      YNDialogBox.prototype.onClickYesBtn = function() {
        this.confirmApply && cc.audioEngine.playEffect(this.confirmApply, false);
        _super.prototype.onClickYesBtn.call(this);
      };
      YNDialogBox.prototype.onClickNoBtn = function() {
        this.cancel && cc.audioEngine.playEffect(this.cancel, false);
        _super.prototype.onClickNoBtn.call(this);
      };
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "ef_popup"
      }) ], YNDialogBox.prototype, "popup", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "ef_confirm_apply"
      }) ], YNDialogBox.prototype, "confirmApply", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "ef_cancel"
      }) ], YNDialogBox.prototype, "cancel", void 0);
      YNDialogBox = __decorate([ ccclass, menu("\u81ea\u8a02\u5de5\u5177/SlotFramework/DialogBox/YNDialogBox") ], YNDialogBox);
      return YNDialogBox;
    }(BaseYNDialogBox_1.default);
    exports.YNDialogBox = YNDialogBox;
    cc._RF.pop();
  }, {
    "../../../../Common/Tools/DynamicPopUp/DialogBox/BaseYNDialogBox": void 0
  } ]
}, {}, [ "BasePopupManager", "ConfirmDialogBox", "Slot_WaitingDialogBox", "YNDialogBox", "Slot_DynamicPopUpManager", "Slot_LoadingItem", "Slot_SocketConnect", "Slot_SocketManager", "Slot_GameManager_InitData", "Slot_GameUI_InitData", "Slot_LineData", "Slot_ReelManager_InitData", "Slot_ReelManager_ScrollData", "Slot_Reel_InitData", "Slot_Reel_ScrollData", "Slot_Symbol_InitData", "Slot_AutoGamePanel", "Slot_FreeGameGetScorePanel", "Slot_FreeGamePanel", "Slot_HistoryPanel", "Slot_MusicOptionPanel", "Slot_RulePanel", "Slot_SymbolTipPanel", "Slot_WinScorePanel", "Slot_GameManager", "Slot_GameUI", "Slot_Line", "Slot_LineManager", "Slot_Reel", "Slot_ReelManager", "Slot_Symbol", "Slot_LoadingManager", "Slot_LobbyManager_InitData", "Slot_LobbyUI_InitData", "Slot_LobbyManager", "Slot_LobbyUI", "Slot_DataManager" ]);