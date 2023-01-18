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
  FIsh_GameManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4f987GS2wdOD6C6WZWO0nu8", "FIsh_GameManager");
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
    exports.FISH_SCENE_TYPE = void 0;
    var AudioManager_1 = require("../../Common/Tools/AudioManager/AudioManager");
    var BaseDataManager_1 = require("../../Common/Tools/Base/BaseDataManager");
    var CarryMoneyManager_1 = require("../../Common/Tools/CarryMoney/CarryMoneyManager");
    var CommonTool_1 = require("../../Common/Tools/CommonTool");
    var FriendSystemManager_1 = require("../../Common/Tools/FriendSystemManager/FriendSystemManager");
    var LocalizationManager_1 = require("../../Common/Tools/Localization/LocalizationManager");
    var SceneManager_1 = require("../../Common/Tools/SceneManager/SceneManager");
    var StageCycleManager_1 = require("../../Common/Tools/StageCycleManager/StageCycleManager");
    var Fish_DataManager_1 = require("../Common/Manager/Fish_DataManager");
    var Fish_BulletPool_1 = require("../Common/Pool/Fish_BulletPool");
    var Fish_FishPool_1 = require("../Common/Pool/Fish_FishPool");
    var Fish_Protocol_1 = require("../Common/Socket/SDK/Fish_Protocol");
    var Fish_Bullet_1 = require("./Fish_Bullet");
    var Fish_Fish_1 = require("./Fish_Fish");
    var FIsh_Player_1 = require("./FIsh_Player");
    var Fish_GameUI_1 = require("./View/Fish_GameUI");
    var Fish_AutoGamePanel_1 = require("./View/Panel/Fish_AutoGamePanel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FISH_SCENE_TYPE;
    (function(FISH_SCENE_TYPE) {
      FISH_SCENE_TYPE[FISH_SCENE_TYPE["NORMAL_1"] = 1] = "NORMAL_1";
      FISH_SCENE_TYPE[FISH_SCENE_TYPE["NORMAL_2"] = 2] = "NORMAL_2";
      FISH_SCENE_TYPE[FISH_SCENE_TYPE["CLUSTER_1"] = 11] = "CLUSTER_1";
    })(FISH_SCENE_TYPE = exports.FISH_SCENE_TYPE || (exports.FISH_SCENE_TYPE = {}));
    var Fish_GameManager = function(_super) {
      __extends(Fish_GameManager, _super);
      function Fish_GameManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameUI = null;
        _this.playerPrefab = null;
        _this.fishParent = null;
        _this.bulletParent = null;
        _this.playerGroup = null;
        _this.clickGroup = null;
        _this.touchArea = null;
        _this.bulletPools = [];
        _this.fishPools = [];
        _this.data = null;
        _this.socket = null;
        _this.popup = null;
        _this.players = [];
        _this.isFire = false;
        _this.touchPosition = cc.v2(0, 0);
        _this.fireTime = 0;
        _this.fishQueue = [];
        _this.fishBornCountPerFrame = 1;
        _this.lockFish = null;
        _this.isBlur = false;
        _this.isFireSkillAni = false;
        _this.isGettingItem = false;
        _this.isChangeScene = false;
        _this.isWaitingShoot = false;
        _this.drillBullet = [];
        _this.electricOffset = [ 110, 120, 125, 135, 145, 150 ];
        _this.gettingItemTime = null;
        _this.bossSkillRoundToken = null;
        return _this;
      }
      Fish_GameManager.prototype.start = function() {
        var _this = this;
        this.hideLoading();
        this.init();
        this.scheduleOnce(function() {
          cc.director.preloadScene("G" + _this.data.gameID + "_Lobby");
        });
      };
      Fish_GameManager.prototype.init = function() {
        this.data.fishMapping = {};
        this.data.lockingBulletMapping = {};
        this.data.blackHolePositionMapping = {};
        this.data.lockFishTipMapping = {};
        this.registerEvent();
        this.initPools();
        this.initPlayer();
        this.initCarryMoney();
        this.gameUI.init();
        this.gameUI.setVersion(this.data.gameVersion);
        this.checkTutorial();
        AudioManager_1.AudioManager.instance.playAudioEvent("Game_GameInit");
        if (!CommonTool_1.CommonTool.checkIOSVersion("15.4", false)) {
          cc.find("Canvas/Shadow").active = true;
          cc.find("Canvas/Shadow Camera").active = true;
        }
      };
      Fish_GameManager.prototype.onDisable = function() {
        this.unregisterEvent();
      };
      Fish_GameManager.prototype.onDestroy = function() {
        this.data.isAutoGame = false;
        this.data.autoFire = false;
        this.data.isLock = false;
        this.data.lockFishID = "";
        this.data.skillID = "";
        this.data.playersData = [];
        AudioManager_1.AudioManager.instance.playAudioEvent("Game_GameExit");
      };
      Fish_GameManager.prototype.registerEvent = function() {
        this.touchArea.on(cc.Node.EventType.TOUCH_START, this.onTouchDown, this);
        this.touchArea.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchArea.on(cc.Node.EventType.TOUCH_END, this.onTouchUp, this);
        StageCycleManager_1.StageCycleManager.getInstance().on("toBack", this.onStageBlur, this);
        StageCycleManager_1.StageCycleManager.getInstance().on("toFront", this.onStageFocus, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_SELF_JOIN, this.onSelfJoinEvent, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_JOIN_NOTICE, this.onPlayerJoinEvent, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_LEAVE_NOTICE, this.onPlayerLeaveEvent, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_DISCONNECT_NOTICE, this.onPlayerLeaveEvent, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_FISH_BORN, this.onFishBornEvent, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_HIT_NOTICE, this.onHitEvent, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_FIRE_NOTICE, this.onOtherFireEvent, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_TURRET_UPDATE_NOTICE, this.onPlayerUpdateTurret, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_CHANGE_SCENE, this.onChangeSceneEvent, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_BOSS_COMING, this.onBossComingEvent, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_ADDITION_CARRY_AMOUNT, this.onOtherAdditionCarryAmountEvent, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_JACKPOT_REFRESH, this.onJpRefresh, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_JACKPOT_WINNING, this.onJpWinning, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_PLAYER_IDLE_WARN, this.onIdleWarn, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_FINAL_SKILL, this.onFinalSkill, this);
        cc.systemEvent.on(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_CHECK_BALANCE, CarryMoneyManager_1.CarryMoneyManager.carryMoneyCheckBalance);
        cc.systemEvent.on(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_SET_AMOUNT, CarryMoneyManager_1.CarryMoneyManager.carryMoneySetAmount);
        cc.systemEvent.on(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_INFO, CarryMoneyManager_1.CarryMoneyManager.showCarryMoneyInfo, this);
        cc.systemEvent.on(CarryMoneyManager_1.CARRY_MONEY_EVENT.TRANSFER_ALL_OF_THE_MAIN_WALLET, CarryMoneyManager_1.CarryMoneyManager.transferAllOfTheMainWallet);
        cc.systemEvent.on(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_TRANSFER, CarryMoneyManager_1.CarryMoneyManager.carryMoneyTransfer, this);
        cc.systemEvent.on(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_RETRY, CarryMoneyManager_1.CarryMoneyManager.enterRoomProcess, this);
        cc.systemEvent.on(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_ENTER_GAME, this.carryMoneyKKWalletToGame, this);
        cc.systemEvent.on("bulletHit", this.onBulletHit, this);
        cc.systemEvent.on("ON_INVITE_FRIEND", this.onInviteFriend, this);
        cc.systemEvent.on("ON_START_GAME_COMPETITION", this.onStartGameCompetition, this);
        cc.systemEvent.on("ON_FORCE_CLOSE_COMPEITION", this.onForceCloseCompetition, this);
        cc.systemEvent.on("FISH_SHOW_RATIO", this.showRatio, this);
        cc.systemEvent.on("FISH_HIDE_RATIO", this.hideRatio, this);
      };
      Fish_GameManager.prototype.unregisterEvent = function() {
        this.touchArea.off(cc.Node.EventType.TOUCH_START, this.onTouchDown, this);
        this.touchArea.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchArea.off(cc.Node.EventType.TOUCH_END, this.onTouchUp, this);
        StageCycleManager_1.StageCycleManager.getInstance().off("toBack", this.onStageBlur, this);
        StageCycleManager_1.StageCycleManager.getInstance().off("toFront", this.onStageFocus, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_SELF_JOIN, this.onSelfJoinEvent, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_JOIN_NOTICE, this.onPlayerJoinEvent, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_LEAVE_NOTICE, this.onPlayerLeaveEvent, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_DISCONNECT_NOTICE, this.onPlayerLeaveEvent, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_FISH_BORN, this.onFishBornEvent, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_HIT_NOTICE, this.onHitEvent, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_FIRE_NOTICE, this.onOtherFireEvent, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_TURRET_UPDATE_NOTICE, this.onPlayerUpdateTurret, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_CHANGE_SCENE, this.onChangeSceneEvent, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_BOSS_COMING, this.onBossComingEvent, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_ADDITION_CARRY_AMOUNT, this.onOtherAdditionCarryAmountEvent, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_JACKPOT_REFRESH, this.onJpRefresh, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_JACKPOT_WINNING, this.onJpWinning, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_PLAYER_IDLE_WARN, this.onIdleWarn, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_FINAL_SKILL, this.onFinalSkill, this);
        cc.systemEvent.off(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_CHECK_BALANCE, CarryMoneyManager_1.CarryMoneyManager.carryMoneyCheckBalance);
        cc.systemEvent.off(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_SET_AMOUNT, CarryMoneyManager_1.CarryMoneyManager.carryMoneySetAmount);
        cc.systemEvent.off(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_INFO, CarryMoneyManager_1.CarryMoneyManager.showCarryMoneyInfo, this);
        cc.systemEvent.off(CarryMoneyManager_1.CARRY_MONEY_EVENT.TRANSFER_ALL_OF_THE_MAIN_WALLET, CarryMoneyManager_1.CarryMoneyManager.transferAllOfTheMainWallet);
        cc.systemEvent.off(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_TRANSFER, CarryMoneyManager_1.CarryMoneyManager.carryMoneyTransfer, this);
        cc.systemEvent.off(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_RETRY, CarryMoneyManager_1.CarryMoneyManager.enterRoomProcess, this);
        cc.systemEvent.off(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_ENTER_GAME, this.carryMoneyKKWalletToGame, this);
        cc.systemEvent.off("bulletHit", this.onBulletHit, this);
        cc.systemEvent.off("ON_INVITE_FRIEND", this.onInviteFriend, this);
        cc.systemEvent.off("ON_START_GAME_COMPETITION", this.onStartGameCompetition, this);
        cc.systemEvent.off("ON_FORCE_CLOSE_COMPEITION", this.onForceCloseCompetition, this);
        cc.systemEvent.off("FISH_SHOW_RATIO", this.showRatio, this);
        cc.systemEvent.off("FISH_HIDE_RATIO", this.hideRatio, this);
      };
      Fish_GameManager.prototype.update = function(dt) {
        if (this.data.isDisconnected || this.data.isLeaving) return;
        this.data.nowTime && !this.isBlur && (this.data.nowTime += dt);
        this.fireTime += dt;
        if (this.isBlur) return;
        this.checkAniStateStage();
        this.lockFishStage();
        this.FireStage();
        this.updateLockTipStage(dt);
        this.CreateFishStage();
      };
      Fish_GameManager.prototype.lockFishStage = function() {
        var _a, _b;
        if (this.data.autoFire && this.data.isLock || this.data.isAutoGame) {
          if (null == this.lockFish || this.lockFish && (!this.lockFish.isAlive() || !this.lockFish.isInLockingArea())) {
            this.lockFish && this.clearLockFish();
            this.lockFish = this.getLockFish();
            if (cc.isValid(this.lockFish)) {
              this.data.lockFishID = this.lockFish.getID();
              this.gameUI.closeLockFishTip(this.data.selfSeatIdx);
              cc.log("\u9396\u5b9a\u65b0\u7684\u9b5a", this.lockFish);
            } else {
              null === (_a = this.lockFish) || void 0 === _a ? void 0 : _a.hideRatio();
              this.clearLockFish();
            }
          }
        } else if (this.data.isLock && this.lockFish) if (this.lockFish.isAlive() && this.lockFish.isInLockingArea()) this.gameUI.closeLockFishTip(this.data.selfSeatIdx); else {
          null === (_b = this.lockFish) || void 0 === _b ? void 0 : _b.hideRatio();
          this.clearLockFish();
        }
        this.lockFish && (this.lockFish.isLocking = true);
      };
      Fish_GameManager.prototype.FireStage = function() {
        var _a;
        var turretType = null === (_a = this.data.playersData[this.data.selfSeatIdx]) || void 0 === _a ? void 0 : _a.turretType;
        if (this.gameUI.checknQuitPanelState()) return;
        if (this.isWaitingShoot) {
          this.isFire && this.calCannonAngle();
          return;
        }
        if (this.isFireSkillAni || this.isGettingItem || this.isChangeScene) return;
        this.isFire || this.data.autoFire ? this.fireTime > this.data.fireCD[turretType - 1] && this.selfFire(this.data.selfSeatIdx, this.lockFish) : this.data.isAutoGame ? null != this.lockFish && this.fireTime > this.data.fireCD[turretType - 1] && this.selfFire(this.data.selfSeatIdx, this.lockFish) : this.data.isLock && this.lockFish && this.fireTime > this.data.fireCD[turretType - 1] && this.selfFire(this.data.selfSeatIdx, this.lockFish);
      };
      Fish_GameManager.prototype.updateLockTipStage = function(dt) {
        var _this = this;
        if (null != this.lockFish) if (this.lockFish.isInLockingArea()) {
          var position = this.lockFish.getLockingPosition();
          null != position && this.gameUI.setLockFishTip(position, this.data.selfSeatIdx, true);
        } else {
          cc.log("\u9396\u5b9a\u7684\u9b5a\u6e38\u51fa\u7bc4\u570d");
          this.clearLockFish();
        }
        Object.keys(this.data.lockFishTipMapping).forEach(function(seatIdx) {
          var lockingData = _this.data.lockFishTipMapping[seatIdx];
          lockingData.sleepingTime += dt;
          if (lockingData.sleepingTime > 1) {
            _this.gameUI.clearLockTip(+seatIdx);
            delete _this.data.lockFishTipMapping[seatIdx];
          } else {
            var position = lockingData.fish.getLockingPosition(true);
            _this.gameUI.setLockFishTip(position, +seatIdx, false);
          }
        });
      };
      Fish_GameManager.prototype.CreateFishStage = function() {
        if (this.fishQueue.length) for (var i = 0; i < this.fishBornCountPerFrame; i++) {
          if (!this.fishQueue.length) break;
          var fishData = this.fishQueue.shift();
          this.fishBorn(fishData);
        }
      };
      Fish_GameManager.prototype.onInviteFriend = function(inviteData) {
        var _this = this;
        this.popup.ynDialogBox.show(LocalizationManager_1.default.getInstance().get("MESSAGE_BE_INVITED", CommonTool_1.CommonTool.playerNameEncryption(inviteData.nickname), LocalizationManager_1.default.getInstance().get("GAME_NAME_" + BaseDataManager_1.GAME_ID[inviteData.gameId])), function() {
          FriendSystemManager_1.FriendSystemManager.inviteData = inviteData;
          _this.onClickQuitBtn();
        });
      };
      Fish_GameManager.prototype.onClickQuitBtn = function() {
        var _this = this;
        AudioManager_1.AudioManager.instance.playAudioEvent("BackToLobby");
        this.popup.connectWaitingDialogBox.show();
        this.socket.launchGame({
          username: this.data.nickname,
          gameId: 10001
        }).then(function(response) {
          _this.socket.close(true);
          SceneManager_1.SceneManager.changeURLsToken("?" + response.url.split("?")[1]);
          SceneManager_1.SceneManager.changeScene("L10001", SceneManager_1.SCENE_TYPE.LOADING);
        });
      };
      Fish_GameManager.prototype.onStartGameCompetition = function(data) {};
      Fish_GameManager.prototype.onForceCloseCompetition = function(data) {
        this.popup.confirmSystemMsgDialogBox.show(LocalizationManager_1.default.getInstance().get("MESSAGE_COMPETITION_FORCE_CLOSED"));
      };
      Fish_GameManager.prototype.showRatio = function(fish, ratio) {
        this.gameUI.showRatio(fish, ratio);
      };
      Fish_GameManager.prototype.hideRatio = function(fish, ratio) {
        this.gameUI.hideRatio(fish, ratio);
      };
      Fish_GameManager.prototype.onTouchDown = function(event) {
        this.isBlur && this.onStageFocus();
        !this.data.autoFire && this.data.isLock && this.clearLockFish();
        this.isFire = true;
        this.setTouchPosition(event);
      };
      Fish_GameManager.prototype.onTouchMove = function(event) {
        this.isFire && this.setTouchPosition(event);
      };
      Fish_GameManager.prototype.onTouchUp = function(event) {
        this.isFire = false;
      };
      Fish_GameManager.prototype.onLockToggle = function(toggle, customEventData) {
        if (this.data.isAutoGame) {
          toggle.isChecked = !toggle.isChecked;
          this.gameUI.showHint(LocalizationManager_1.default.getInstance().get("TEXT_ON_AUTOGAME"));
          return;
        }
        if ("" != this.data.skillID || this.data.playersData[this.data.selfSeatIdx].turretType === FIsh_Player_1.CANNOS_TYPE.ELECTRIC) {
          toggle.isChecked = !toggle.isChecked;
          this.gameUI.showHint(LocalizationManager_1.default.getInstance().get("TEXT_ELECTRIC_HINT"));
          return;
        }
        toggle.isChecked ? AudioManager_1.AudioManager.instance.playAudioEvent("LockFish_BtnClick_On") : AudioManager_1.AudioManager.instance.playAudioEvent("LockFish_BtnClick_Off");
        this.setLock(toggle.isChecked);
      };
      Fish_GameManager.prototype.setLock = function(isChecked) {
        this.data.isLock = isChecked;
        this.switchZindexOfClickArea(isChecked);
        this.data.isLock || this.clearLockFish();
      };
      Fish_GameManager.prototype.onAutoFireToggle = function(toggle, customEventData) {
        if (this.data.isAutoGame) {
          toggle.isChecked = !toggle.isChecked;
          this.gameUI.showHint(LocalizationManager_1.default.getInstance().get("TEXT_ON_AUTOGAME"));
          return;
        }
        this.data.autoFire = toggle.isChecked;
        this.data.autoFire ? AudioManager_1.AudioManager.instance.playAudioEvent("AutoFire_BtnClick_On") : AudioManager_1.AudioManager.instance.playAudioEvent("AutoFire_BtnClick_Off");
        this.data.autoFire || this.clearLockFish();
      };
      Fish_GameManager.prototype.onChangeBulletButton = function() {
        cc.log("\u63db\u7832");
        if ("" != this.data.skillID) return;
        AudioManager_1.AudioManager.instance.playAudioEvent("ChangeBullet_BtnClick");
        var playerData = this.data.playersData[this.data.selfSeatIdx];
        var beforeType = playerData.turretType;
        playerData.turretType++;
        playerData.turretType > 3 && (playerData.turretType = 1);
        if (playerData.turretType === FIsh_Player_1.CANNOS_TYPE.ELECTRIC) {
          this.gameUI.showHint(LocalizationManager_1.default.getInstance().get("TEXT_ELECTRIC_HINT"));
          this.gameUI.setLockToggle(false);
          this.setLock(true);
        } else if (beforeType === FIsh_Player_1.CANNOS_TYPE.ELECTRIC) {
          this.gameUI.setLockToggle(false);
          this.setLock(false);
        }
        this.players[this.data.selfSeatIdx].setCannonsSprite(playerData.turretType, playerData.anteType);
        this.updateTurret({
          turretType: playerData.turretType,
          anteType: playerData.anteType,
          roundToken: playerData.roundToken
        });
      };
      Fish_GameManager.prototype.onAutoGameButton = function() {
        cc.log("\u958b\u555f\u81ea\u52d5\u904a\u6232\u9801\u9762");
        AudioManager_1.AudioManager.instance.playAudioEvent("AutoGame_BtnClick");
        this.data.isAutoGame && this.clearLockFish();
        this.gameUI.openAutoGamePanel();
      };
      Fish_GameManager.prototype.onOpenMenuList = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("OpenMenu_BtnClick");
        this.gameUI.openMenuList();
      };
      Fish_GameManager.prototype.onCloseMenuList = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("CloseMenu_BtnClick");
        this.gameUI.closeMenuList();
      };
      Fish_GameManager.prototype.onOpenSettingButton = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("OpenSetting_BtnClick");
        this.gameUI.openSettingPanel();
      };
      Fish_GameManager.prototype.onOpenILLustratedBookButton = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("IllustratedBook_BtnClick");
        this.gameUI.openILLustratedBookPanel();
      };
      Fish_GameManager.prototype.onOpenHistoryButton = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("History_Btn_Click");
        this.gameUI.openHistoryPanel(this.data.webApiUrl);
      };
      Fish_GameManager.prototype.onOpenRuleButton = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("Rule_Btn_Click");
        this.gameUI.openRulePanel();
      };
      Fish_GameManager.prototype.onOpenQuitButton = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("Quit_Btn_Click");
        var isShowEffect = this.data.playersData[this.data.selfSeatIdx].totalProfit >= 0;
        this.gameUI.openQuitPanel(isShowEffect);
        this.data.coin = this.data.playersData[this.data.selfSeatIdx].balance;
      };
      Fish_GameManager.prototype.onStartAutoGame = function() {
        this.data.autoGameHitFishType = this.gameUI.getAutoGameHitFish();
        if (0 == this.data.autoGameHitFishType.length) cc.log("\u986f\u793a \u81f3\u5c11\u9078\u64c7\u4e00\u500b"); else {
          AudioManager_1.AudioManager.instance.playAudioEvent("AutoGamePanel_StartAutoGame");
          var _key = Fish_AutoGamePanel_1.AUTO_SELECT_TYPE + this.data.nickname + this.data.gameID.toString();
          cc.sys.localStorage.setItem(_key, JSON.stringify(this.data.autoGameHitFishType));
          this.data.isAutoGame = true;
          this.data.autoFire = false;
          this.gameUI.setAutoToggle(false);
          this.gameUI.setLockToggle(false);
          this.setLock(true);
          this.gameUI.autoGameButtonActive(this.data.isAutoGame);
          this.gameUI.closeAutoGamePanel();
        }
      };
      Fish_GameManager.prototype.onStopAutoGame = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("AutoGamePanel_StopAutoGame");
        this.data.isAutoGame = false;
        this.data.playersData[this.data.selfSeatIdx].turretType !== FIsh_Player_1.CANNOS_TYPE.ELECTRIC && this.setLock(false);
        this.clearLockFish();
        this.gameUI.autoGameButtonActive(this.data.isAutoGame);
        this.gameUI.autoGamePanelCloseStopButton();
      };
      Fish_GameManager.prototype.onAddBet = function(event, seat) {
        if ("" != this.data.skillID) return;
        var playerData = this.data.playersData[this.data.selfSeatIdx];
        if (playerData.anteType === this.data.roomAntes.length) {
          AudioManager_1.AudioManager.instance.playAudioEvent("AddBet_Btn_Click_End");
          return;
        }
        playerData.anteType++;
        AudioManager_1.AudioManager.instance.playAudioEvent("AddBet_Btn_Click_TurretType_" + playerData.turretType);
        this.players[seat].setBet(playerData.anteType);
        this.players[seat].setCannonsSprite(playerData.turretType, playerData.anteType);
        this.updateTurret({
          turretType: playerData.turretType,
          anteType: playerData.anteType,
          roundToken: playerData.roundToken
        });
      };
      Fish_GameManager.prototype.onReduceBet = function(event, seat) {
        if ("" != this.data.skillID) return;
        var playerData = this.data.playersData[this.data.selfSeatIdx];
        if (1 === playerData.anteType) {
          AudioManager_1.AudioManager.instance.playAudioEvent("ReduceBet_Btn_Click_End");
          return;
        }
        playerData.anteType--;
        AudioManager_1.AudioManager.instance.playAudioEvent("ReduceBet_Btn_Click_TurretType_" + playerData.turretType);
        this.players[seat].setBet(playerData.anteType);
        this.players[seat].setCannonsSprite(playerData.turretType, playerData.anteType);
        this.updateTurret({
          turretType: playerData.turretType,
          anteType: playerData.anteType,
          roundToken: playerData.roundToken
        });
      };
      Fish_GameManager.prototype.onSkillFire = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("SkillFire_Btn_Click");
        this.closeSkill();
        this.selfFire(this.data.selfSeatIdx, this.lockFish);
      };
      Fish_GameManager.prototype.checkTutorial = function() {
        if (Fish_DataManager_1.default.offLineMode) return;
        var result = this.socket.tutorialCheck();
        result || this.gameUI.openTutorialPanel(this.socket);
      };
      Fish_GameManager.prototype.clearLockFish = function() {
        if (this.lockFish) {
          this.bulletCancelLock(this.lockFish);
          this.lockFish.isLocking = false;
          this.lockFish.hideRatio();
          this.lockFish = null;
        }
        this.data.lockFishID = "";
        this.gameUI.closeLockFishTip(this.data.selfSeatIdx);
      };
      Fish_GameManager.prototype.hideLoading = function() {
        Fish_DataManager_1.default.LOADING_UI_NODE.node && cc.tween(Fish_DataManager_1.default.LOADING_UI_NODE.node).call(function() {
          Fish_DataManager_1.default.LOADING_UI_NODE.setLoadingBar(1);
        }).delay(.1).call(function() {
          Fish_DataManager_1.default.LOADING_UI_NODE.hide();
        }).start();
      };
      Fish_GameManager.prototype.screenFlip = function() {
        this.data.flipMode = this.data.selfSeatIdx;
        this.flipPlayer();
        this.flipFish();
      };
      Fish_GameManager.prototype.flipPlayer = function() {
        var _this = this;
        if (this.data.flipMode == Fish_DataManager_1.FlipMode.UpDown_LeftRight) {
          this.playerGroup.scaleX = -1;
          this.playerGroup.scaleY = -1;
        } else if (this.data.flipMode == Fish_DataManager_1.FlipMode.LeftRight) {
          this.playerGroup.scaleX = -1;
          this.playerGroup.scaleY = 1;
        } else if (this.data.flipMode == Fish_DataManager_1.FlipMode.UpDown) {
          this.playerGroup.scaleX = 1;
          this.playerGroup.scaleY = -1;
        } else if (this.data.flipMode == Fish_DataManager_1.FlipMode.None) {
          this.playerGroup.scaleX = 1;
          this.playerGroup.scaleY = 1;
        }
        this.players.forEach(function(item) {
          item.emptyInfo.scaleX *= _this.playerGroup.scaleX;
          item.emptyInfo.scaleY *= _this.playerGroup.scaleY;
          item.cannonInfo.scaleX *= _this.playerGroup.scaleX;
          item.cannonInfo.scaleY *= _this.playerGroup.scaleY;
          item.cannonInfoTop.scaleX *= _this.playerGroup.scaleX;
          item.cannonInfoTop.scaleY *= _this.playerGroup.scaleY;
          item.setUpAngle(item.cannonsBase.scaleY);
        });
        if (1 === this.playerGroup.scaleY) {
          this.players[2].cannonInfo.y = this.players[2].bottomBg.getContentSize().height * this.players[2].cannonInfo.scaleY;
          this.players[3].cannonInfo.y = this.players[3].bottomBg.getContentSize().height * this.players[3].cannonInfo.scaleY;
          this.players[0].profitWord.y *= -1;
          this.players[1].profitWord.y *= -1;
          this.players[0].flatterSpine.node.y *= -1;
          this.players[1].flatterSpine.node.y *= -1;
          this.players[0].skillSpine.node.y *= -1;
          this.players[1].skillSpine.node.y *= -1;
          this.players[2].bottomBg.active = true;
          this.players[3].bottomBg.active = true;
        } else {
          this.players[0].cannonInfo.y = this.players[0].bottomBg.getContentSize().height * this.players[0].cannonInfo.scaleY;
          this.players[1].cannonInfo.y = this.players[1].bottomBg.getContentSize().height * this.players[1].cannonInfo.scaleY;
          this.players[2].profitWord.y *= -1;
          this.players[3].profitWord.y *= -1;
          this.players[2].flatterSpine.node.y *= -1;
          this.players[3].flatterSpine.node.y *= -1;
          this.players[2].skillSpine.node.y *= -1;
          this.players[3].skillSpine.node.y *= -1;
          this.players[0].bottomBg.active = true;
          this.players[1].bottomBg.active = true;
        }
      };
      Fish_GameManager.prototype.flipFish = function() {
        this.fishParent.scaleX = Math.abs(this.fishParent.scaleX);
        this.fishParent.scaleY = Math.abs(this.fishParent.scaleY);
        switch (this.data.flipMode) {
         case Fish_DataManager_1.FlipMode.LeftRight:
          this.fishParent.scaleX = -this.fishParent.scaleX;
          break;

         case Fish_DataManager_1.FlipMode.UpDown:
          this.fishParent.scaleY = -this.fishParent.scaleY;
          break;

         case Fish_DataManager_1.FlipMode.UpDown_LeftRight:
          this.fishParent.scaleX = -this.fishParent.scaleX;
          this.fishParent.scaleY = -this.fishParent.scaleY;
        }
      };
      Fish_GameManager.prototype.fishBorn = function(data) {
        var pool = this.fishPools.find(function(pool) {
          return +pool.node.name === data.fishType;
        });
        var fish = pool.reUseFish(data.fishType).getComponent(Fish_Fish_1.Fish_Fish);
        var parent = this.fishParent.getChildByName("Fish_" + fish.node.name);
        fish.node.setParent(parent);
        fish.init(data.fishId, data.odds);
        fish.setPool(pool);
        fish.startMoving(data.bornTime, data.route, data.offset);
        data.isBubble && fish.showBubble();
        this.data.fishMapping[data.fishId] = fish.node;
      };
      Fish_GameManager.prototype.findFish = function(id) {
        return this.data.fishMapping[id];
      };
      Fish_GameManager.prototype.fishGetOut = function() {
        this.fishParent.children.forEach(function(child) {
          child.children.forEach(function(fish) {
            fish.getComponent(Fish_Fish_1.Fish_Fish).getOut();
          });
        });
      };
      Fish_GameManager.prototype.getAllFish = function() {
        return;
      };
      Fish_GameManager.prototype.initPools = function() {
        for (var i = 0; i < this.bulletPools.length; i++) this.bulletPools[i].init();
        for (var i = 0; i < this.fishPools.length; i++) this.fishPools[i].init();
      };
      Fish_GameManager.prototype.initPlayer = function() {
        for (var i = 0; i < this.data.cannonsPosition.length; i++) {
          var playerNode = cc.instantiate(this.playerPrefab);
          playerNode.position = cc.v3(this.data.cannonsPosition[i]);
          this.playerGroup.addChild(playerNode);
          var player = playerNode.getComponent(FIsh_Player_1.default);
          this.players.push(player);
          player.init(i);
        }
        this.playerPrefab.active = false;
        this.initPlayerPos();
      };
      Fish_GameManager.prototype.initPlayerPos = function() {
        this.players[0].cannonsBase.scaleY = -1;
        this.players[1].cannonsBase.scaleY = -1;
        this.players[0].emptyInfo.y *= -1;
        this.players[1].emptyInfo.y *= -1;
        this.players[0].bottomBg.scaleY = -1;
        this.players[1].bottomBg.scaleY = -1;
        this.players[0].bottomBg.y *= -1;
        this.players[1].bottomBg.y *= -1;
      };
      Fish_GameManager.prototype.selfFire = function(player, lockFish) {
        var _this = this;
        if (!this.checkBalanceEnough()) return;
        if (this.checkGameBulletOverCount()) return;
        var lockFishID = null == lockFish ? "" : lockFish.getID();
        var moveDirection = this.touchPositionToFireDirection(this.touchPosition, player);
        var createPosition = this.data.cannonsPosition[this.getFirePlayerSeat(player)];
        var playerData = this.data.playersData.find(function(item) {
          return (null === item || void 0 === item ? void 0 : item.seatIdx) === _this.data.selfSeatIdx;
        });
        var anteType = playerData.anteType;
        var fish = lockFish;
        var payload = "";
        if ("" != lockFishID && 0 === this.data.playersData[player].skillType) {
          var direction = new cc.Vec2(0, 0);
          var firePlayerSeat = this.getFirePlayerSeat(player);
          this.touchPosition = new cc.Vec2(lockFish.getLockingPosition().x, lockFish.getLockingPosition().y);
          direction.x = lockFish.getLockingPosition().x - this.data.cannonsPosition[firePlayerSeat].x;
          direction.y = lockFish.getLockingPosition().y - this.data.cannonsPosition[firePlayerSeat].y;
          direction = direction.normalizeSelf();
          moveDirection = direction;
        } else {
          fish = null;
          lockFishID = "";
        }
        if (0 !== this.data.playersData[player].skillType || this.data.playersData[player].turretType !== FIsh_Player_1.CANNOS_TYPE.ELECTRIC) {
          var bulletData = {
            belongPlayer: player,
            moveDirection: moveDirection,
            lockFishID: lockFishID,
            produceTime: null,
            createPosition: createPosition,
            fish: fish,
            type: this.data.playersData[player].turretType,
            anteType: this.data.playersData[player].anteType,
            skillID: ""
          };
          if (0 !== this.data.playersData[player].skillType) {
            bulletData.type = this.data.playersData[player].skillType;
            bulletData.skillID = this.data.skillID;
            bulletData.anteType = this.data.skillAnteType;
          }
          var bulletIndex = 0;
          player != this.data.selfSeatIdx && (bulletIndex = 1);
          var bullet = this.bulletPools[bulletIndex].reUse().getComponent(Fish_Bullet_1.default);
          bullet.node.setParent(this.bulletParent);
          bullet.node.opacity = 255;
          bullet.pool = this.bulletPools[bulletIndex];
          bullet.init(bulletData);
          if (this.data.playersData[player].skillType === Fish_Fish_1.FISH_TYPE.CRAZY_DRILL) {
            this.drillBullet[player] = bullet;
            this.isFireSkillAni = true;
            var drillParam = {
              screenSizeX: this.data.designResolution.width,
              screenSizeY: this.data.designResolution.height,
              firerX: bulletData.createPosition.x,
              firerY: bulletData.createPosition.y,
              directionX: moveDirection.x,
              directionY: moveDirection.y,
              velocity: .5 * this.data.bulletSpeed
            };
            payload = JSON.stringify(drillParam);
            AudioManager_1.AudioManager.instance.playAudioEvent("Drill_Fire");
          } else if (this.data.playersData[player].skillType === Fish_Fish_1.FISH_TYPE.PARTICLE_LASER) {
            this.gameUI.setFxLaser(player, bulletData.createPosition.add(bulletData.moveDirection.mul(70)), bulletData.moveDirection);
            this.isFireSkillAni = true;
          }
        } else {
          if ("" == lockFishID) return;
          var offset = this.electricOffset[this.data.playersData[player].anteType - 1];
          var playerIndex = player - this.data.selfSeatIdx < 0 ? player - this.data.selfSeatIdx + this.players.length : player - this.data.selfSeatIdx;
          var isSelf = player == this.data.selfSeatIdx;
          this.gameUI.setFxElectric(playerIndex, isSelf, createPosition.add(moveDirection.mul(offset)), lockFish.getLockingPosition());
        }
        this.fireTime = 0;
        var position = this.moveDirectionTranspose(moveDirection);
        var xy = [ position.x, position.y ];
        this.players[player].setCannonAngle(position);
        this.players[player].setCannonShootingEffect(true);
        if (0 === this.data.playersData[this.data.selfSeatIdx].skillType) {
          var cost = this.data.roomAntes[anteType - 1];
          playerData.balance -= cost;
          playerData.totalProfit -= cost;
          playerData.totalBetAmount += cost;
          this.players[player].setShootingCost(playerData.totalBetAmount);
          this.players[player].setPlayerCoin(playerData.balance);
          this.players[player].setShootingGet(playerData.totalProfit);
          this.gameUI.updateQuitPanel(playerData.balance, playerData.totalProfit);
        } else anteType = this.data.skillAnteType;
        var data = {
          angle: xy,
          anteType: anteType,
          lockFishId: lockFishID,
          seatIdx: this.data.selfSeatIdx,
          skillId: this.data.skillID,
          skillType: this.data.playersData[this.data.selfSeatIdx].skillType,
          payload: payload,
          roundToken: this.data.playersData[this.data.selfSeatIdx].roundToken
        };
        this.fire(data);
        0 === this.data.playersData[player].skillType && this.data.playersData[player].turretType === FIsh_Player_1.CANNOS_TYPE.ELECTRIC && this.skillHit(player, this.data.skillID, this.data.playersData[this.data.selfSeatIdx].skillType, [ lockFish.node ], this.data.playersData[player].anteType);
      };
      Fish_GameManager.prototype.otherPlayerFire = function(player, anteType, direction, lockFishID, skillType) {};
      Fish_GameManager.prototype.moveDirectionTranspose = function(moveDirection, isDragon) {
        void 0 === isDragon && (isDragon = false);
        var newMoveDirction = new cc.Vec2(moveDirection.x, moveDirection.y);
        if (this.data.flipMode == Fish_DataManager_1.FlipMode.LeftRight) newMoveDirction.x = -moveDirection.x; else if (this.data.flipMode == Fish_DataManager_1.FlipMode.UpDown) isDragon || (newMoveDirction.y = -moveDirection.y); else if (this.data.flipMode == Fish_DataManager_1.FlipMode.UpDown_LeftRight) {
          newMoveDirction.x = -moveDirection.x;
          isDragon || (newMoveDirction.y = -moveDirection.y);
        }
        return newMoveDirction;
      };
      Fish_GameManager.prototype.getLockFish = function() {
        var fish = null;
        var canLockFishType = [];
        if (this.data.isAutoGame) canLockFishType = this.data.autoGameHitFishType; else for (var key in this.data.fishOdds) canLockFishType.unshift(Number(key));
        var idList = Object.keys(this.data.fishMapping).sort(function(a, b) {
          return 2 * Math.random() % 2 ? 1 : -1;
        });
        for (var i = 0, length = idList.length; i < length; i++) {
          var id = idList[i];
          var target = this.data.fishMapping[id];
          var component = target.getComponent(Fish_Fish_1.Fish_Fish);
          if (canLockFishType.includes(component.getFishType()) && component.isInLockingArea() && component.isAlive()) {
            fish = component;
            break;
          }
        }
        return fish;
      };
      Fish_GameManager.prototype.bulletCancelLock = function(fish) {
        var _a;
        fish && (null === (_a = this.data.lockingBulletMapping[fish.id]) || void 0 === _a ? void 0 : _a.getComponent(Fish_Bullet_1.default).cancelLock());
      };
      Fish_GameManager.prototype.screenToGamePos = function(pos) {
        return cc.Canvas.instance.node.convertToNodeSpaceAR(pos);
      };
      Fish_GameManager.prototype.setTouchPosition = function(event) {
        this.touchPosition = this.screenToGamePos(event.getLocation());
      };
      Fish_GameManager.prototype.touchPositionToFireDirection = function(touchPosition, belongPlayer) {
        var direction = new cc.Vec2(0, 0);
        var firePlayerSeat = this.getFirePlayerSeat(belongPlayer);
        direction.x = touchPosition.x - this.data.cannonsPosition[firePlayerSeat].x;
        direction.y = touchPosition.y - this.data.cannonsPosition[firePlayerSeat].y;
        var tempDir = direction.normalizeSelf();
        if (tempDir.y < 0) {
          tempDir.x = tempDir.x > 0 ? 1 : -1;
          tempDir.y = 0;
        }
        return tempDir;
      };
      Fish_GameManager.prototype.getFirePlayerSeat = function(player) {
        var firePlayer = 0;
        this.data.flipMode == Fish_DataManager_1.FlipMode.UpDown_LeftRight ? 0 == player ? firePlayer = 3 : 1 == player ? firePlayer = 2 : 2 == player ? firePlayer = 1 : 3 == player && (firePlayer = 0) : this.data.flipMode == Fish_DataManager_1.FlipMode.LeftRight ? 0 == player ? firePlayer = 1 : 1 == player ? firePlayer = 0 : 2 == player ? firePlayer = 3 : 3 == player && (firePlayer = 2) : this.data.flipMode == Fish_DataManager_1.FlipMode.UpDown ? 0 == player ? firePlayer = 2 : 1 == player ? firePlayer = 3 : 2 == player ? firePlayer = 0 : 3 == player && (firePlayer = 1) : this.data.flipMode == Fish_DataManager_1.FlipMode.None && (firePlayer = player);
        return firePlayer;
      };
      Fish_GameManager.prototype.setPlayerData = function(playerDatas) {
        var _this = this;
        playerDatas.forEach(function(item) {
          _this.players[item.seatIdx].initPlayerData(item);
          _this.players[item.seatIdx].setExist();
          _this.players[item.seatIdx].setBetButton(false);
          item.seatIdx === _this.data.selfSeatIdx && _this.players[item.seatIdx].setBetButton(true);
        });
      };
      Fish_GameManager.prototype.calCannonAngle = function() {
        var direction = new cc.Vec2(0, 0);
        var firePlayerSeat = this.getFirePlayerSeat(this.data.selfSeatIdx);
        direction.x = this.touchPosition.x - this.data.cannonsPosition[firePlayerSeat].x;
        direction.y = this.touchPosition.y - this.data.cannonsPosition[firePlayerSeat].y;
        direction = this.moveDirectionTranspose(direction);
        this.players[this.data.selfSeatIdx].setCannonAngle(direction.normalizeSelf());
        this.gameUI.setLaserPreviewAngle(this.touchPositionToFireDirection(this.touchPosition, this.data.selfSeatIdx), this.data.cannonsPosition[firePlayerSeat]);
      };
      Fish_GameManager.prototype.setScene = function(sceneType) {};
      Fish_GameManager.prototype.switchZindexOfClickArea = function(isLocking) {
        this.clickGroup.getChildByName("FishGroup").setSiblingIndex(isLocking ? 1 : 0);
        this.clickGroup.getChildByName("TouchArea").setSiblingIndex(isLocking ? 0 : 1);
      };
      Fish_GameManager.prototype.onStageBlur = function() {};
      Fish_GameManager.prototype.onStageFocus = function() {};
      Fish_GameManager.prototype.plus = function() {
        var _this = this;
        if (Fish_DataManager_1.default.offLineMode) {
          this.data.currentThemeType = 1;
          CarryMoneyManager_1.CarryMoneyManager.balance = this.data.coin;
          this.gameUI.setQuitPanel(this.data.coin);
        }
        return this.socket.plus({
          themeType: this.data.currentThemeType + 1,
          carryAmount: CarryMoneyManager_1.CarryMoneyManager.balance
        }).then(function() {
          _this.gameUI.setQuitPanel(_this.data.coin);
          var jackpot = _this.data.themeData.fishThemeList.find(function(item) {
            return item.themeId === _this.data.currentThemeType + 1;
          }).jackpot;
          cc.log("\u9032\u5165jackpot", jackpot);
          _this.gameUI.initJackpotIdle();
          _this.gameUI.showJackpotIdle(jackpot);
        });
      };
      Fish_GameManager.prototype.leave = function() {
        var _this = this;
        if (this.data.isLeaving) return;
        this.popup.connectWaitingDialogBox.show();
        this.data.isLeaving = true;
        return this.socket.leave().then(function(response) {
          cc.log("\u9000\u623f\u6210\u529f");
          AudioManager_1.AudioManager.instance.playAudioEvent("Game_GameExit");
          cc.director.loadScene("G" + _this.data.gameID + "_Lobby");
        }).catch(function(err) {
          _this.data.isLeaving = false;
          _this.popup.connectWaitingDialogBox.hide();
        });
      };
      Fish_GameManager.prototype.fire = function(data) {
        var _this = this;
        return this.socket.fire(data).catch(function(err) {
          cc.error("\u958b\u706b\u5931\u6557", err);
          if (0 === data.skillType) {
            var seatData = _this.data.playersData.find(function(player) {
              return (null === player || void 0 === player ? void 0 : player.seatIdx) === data.seatIdx;
            });
            var anteType = data.anteType;
            cc.log("\u958b\u706b\u56de\u6b63\u91d1\u984d", _this.data.roomAntes[anteType - 1]);
            seatData.balance += _this.data.roomAntes[anteType - 1];
            seatData.totalProfit += _this.data.roomAntes[anteType - 1];
            seatData.totalBetAmount -= _this.data.roomAntes[anteType - 1];
            _this.players[data.seatIdx].setShootingCost(seatData.totalBetAmount);
            _this.players[data.seatIdx].setShootingGet(seatData.totalProfit);
            _this.players[data.seatIdx].setPlayerCoin(seatData.balance);
            _this.gameUI.updateQuitPanel(seatData.balance, seatData.totalProfit);
          }
          _this.isFire = false;
          _this.data.autoFire = false;
          _this.gameUI.setAutoToggle(false);
          _this.data.isAutoGame = false;
          _this.gameUI.autoGameButtonActive(_this.data.isAutoGame);
        });
      };
      Fish_GameManager.prototype.updateTurret = function(data) {
        return this.socket.turretUpdate(data).catch(function(err) {
          cc.error("\u66f4\u63db\u7832\u53f0\u5931\u6557", err);
        });
      };
      Fish_GameManager.prototype.additionCarryAmount = function(data) {
        var _this = this;
        this.popup.connectWaitingDialogBox.show();
        return this.socket.additionCarryAmount(data).then(function() {
          _this.popup.connectWaitingDialogBox.hide();
          _this.data.playersData[_this.data.selfSeatIdx].balance += data.amount;
          _this.players[_this.data.selfSeatIdx].setPlayerCoin(_this.data.playersData[_this.data.selfSeatIdx].balance);
          _this.gameUI.updateQuitPanel(_this.data.getClientMoney(data.amount));
        }).catch(function(err) {
          cc.error("\u8ffd\u52a0\u91d1\u984d\u5931\u6557", err);
          _this.popup.connectWaitingDialogBox.hide();
          CarryMoneyManager_1.CarryMoneyManager.enterRoomProcess();
        });
      };
      Fish_GameManager.prototype.onSelfJoinEvent = function(data) {
        var _this = this;
        cc.log("\u9032\u5165\u904a\u6232");
        data.playerDatas.forEach(function(playerdata) {
          _this.data.playersData[playerdata.seatIdx] = playerdata;
        });
        this.data.selfSeatIdx = data.seatIdx;
        this.data.nowTime = data.serverTime / 1e3;
        this.setScene(data.scenesType);
        this.onFishBornEvent({
          fishInfos: data.fishInfos
        });
        this.screenFlip();
        this.setPlayerData(data.playerDatas);
        this.gameUI.transfreInGame();
        this.setJackpotPos();
        this.playInitBGM(data);
      };
      Fish_GameManager.prototype.playInitBGM = function(data) {
        var hasBoss = false;
        data.fishInfos.forEach(function(fish) {
          fish.fishType > 400 && fish.fishType < 500 && (hasBoss = true);
        });
        if (hasBoss) AudioManager_1.AudioManager.instance.playAudioEvent("Game_InitBG_Boss"); else {
          var index = -1;
          switch (data.scenesType) {
           case FISH_SCENE_TYPE.NORMAL_1:
            index = 0;
            break;

           case FISH_SCENE_TYPE.NORMAL_2:
            index = 1;
            break;

           case FISH_SCENE_TYPE.CLUSTER_1:
            index = 2;
          }
          AudioManager_1.AudioManager.instance.playAudioEvent("Game_InitBG_" + index);
        }
      };
      Fish_GameManager.prototype.onPlayerJoinEvent = function(data) {
        this.setPlayerData([ data.playerData ]);
        this.data.playersData[data.playerData.seatIdx] = data.playerData;
        this.setJackpotPos();
      };
      Fish_GameManager.prototype.onPlayerLeaveEvent = function(data) {
        var index = this.data.playersData.findIndex(function(item) {
          return (null === item || void 0 === item ? void 0 : item.seatIdx) === data.seatIdx;
        });
        if (-1 !== index) {
          if (this.data.playersData[index].roundToken !== data.roundToken) {
            cc.warn("wrong player is leaving", data.roundToken);
            return;
          }
          if (this.bossSkillRoundToken === data.roundToken) {
            this.gameUI.forceHideBossSkill();
            this.bossSkillRoundToken = null;
          }
          this.data.playersData[index] = null;
          this.players[data.seatIdx].setEmpty();
        } else cc.error("\u73a9\u5bb6\u96e2\u958b\u672c\u5730\u537b\u6c92\u6709\u73a9\u5bb6\u8cc7\u6599");
        this.setJackpotPos();
      };
      Fish_GameManager.prototype.onFishBornEvent = function(data) {
        this.fishQueue = this.fishQueue.concat(data.fishInfos);
      };
      Fish_GameManager.prototype.onHitEvent = function(data) {
        return __awaiter(this, void 0, Promise, function() {
          var playerData;
          return __generator(this, function(_a) {
            playerData = this.data.playersData[data.seatIdx];
            if (playerData.roundToken !== data.roundToken) {
              cc.warn("wrong player is hitting", data.roundToken);
              return [ 2 ];
            }
            data.skillType === Fish_Fish_1.FISH_TYPE.POWER_OF_THOR && data.seatIdx !== this.data.selfSeatIdx && this.showOtherHammer(data);
            data.isBubble ? this.bubbleHit(data) : this.normalHit(data);
            return [ 2 ];
          });
        });
      };
      Fish_GameManager.prototype.normalHit = function(data) {
        return __awaiter(this, void 0, Promise, function() {
          var eventTime, seatData, _loop_1, this_1, i, length;
          var _this = this;
          return __generator(this, function(_a) {
            eventTime = CommonTool_1.CommonTool.getServerTime();
            seatData = this.data.playersData.find(function(player) {
              return (null === player || void 0 === player ? void 0 : player.seatIdx) === data.seatIdx;
            });
            _loop_1 = function(i, length) {
              var deadFish = data.deadFishes[i];
              var fishNode = this_1.findFish(deadFish.fishId);
              Object.keys(this_1.data.lockFishTipMapping).forEach(function(seatIdx) {
                if (_this.data.lockFishTipMapping[seatIdx].fish.id === deadFish.fishId) {
                  _this.gameUI.clearLockTip(+seatIdx);
                  delete _this.data.lockFishTipMapping[seatIdx];
                }
              });
              if (fishNode) {
                var fish = fishNode.getComponent(Fish_Fish_1.Fish_Fish);
                var position_1;
                if (deadFish.position && deadFish.position.length) {
                  var transPos = this_1.moveDirectionTranspose(new cc.Vec2(deadFish.position[0], deadFish.position[1]), fish.isDragon());
                  position_1 = [ transPos.x, transPos.y ];
                } else {
                  var pos = fish.getLockingPosition(true);
                  pos && (position_1 = [ pos.x, pos.y ]);
                }
                this_1.scheduleOnce(function() {
                  return __awaiter(_this, void 0, void 0, function() {
                    var seatPosition, isSelf, _a, pos, node, score;
                    var _this = this;
                    return __generator(this, function(_b) {
                      switch (_b.label) {
                       case 0:
                        if (!(data.skillType === FIsh_Player_1.SKILL_TYPE.BLACK_HOLE)) return [ 3, 2 ];
                        return [ 4, null === fishNode || void 0 === fishNode ? void 0 : fishNode.getComponent(Fish_Fish_1.Fish_Fish).deadInBlackHole(data.skillId, deadFish, position_1) ];

                       case 1:
                        position_1 = _b.sent();
                        return [ 3, 3 ];

                       case 2:
                        null === fishNode || void 0 === fishNode ? void 0 : fishNode.getComponent(Fish_Fish_1.Fish_Fish).dead(data.skillType, deadFish);
                        _b.label = 3;

                       case 3:
                        deadFish.fishType > 200 && deadFish.fishType < 500 && this.gameUI.setFishBGShack();
                        seatPosition = this.playerGroup.convertToWorldSpaceAR(this.data.cannonsPosition[data.seatIdx]);
                        seatPosition = cc.Canvas.instance.node.convertToNodeSpaceAR(seatPosition);
                        deadFish.fishType >= Fish_Fish_1.FISH_TYPE.B1 && deadFish.fishType <= Fish_Fish_1.FISH_TYPE.B3 && this.gameUI.dropBossSkill(position_1);
                        isSelf = this.data.selfSeatIdx === data.seatIdx;
                        _a = deadFish.fishType;
                        switch (_a) {
                         case Fish_Fish_1.FISH_TYPE.CRAZY_DRILL:
                          return [ 3, 4 ];

                         case Fish_Fish_1.FISH_TYPE.PARTICLE_LASER:
                          return [ 3, 5 ];

                         case Fish_Fish_1.FISH_TYPE.BLACK_HOLE:
                          return [ 3, 6 ];

                         case Fish_Fish_1.FISH_TYPE.POWER_OF_THOR:
                          return [ 3, 7 ];

                         case Fish_Fish_1.FISH_TYPE.SUPER_BOMB:
                          return [ 3, 8 ];

                         case Fish_Fish_1.FISH_TYPE.LUCKY_REEL:
                          return [ 3, 9 ];
                        }
                        return [ 3, 11 ];

                       case 4:
                        if (!this.isBlur && eventTime >= this.data.focusTime) if (position_1) {
                          if (isSelf) {
                            this.isGettingItem = true;
                            this.gettingItemTime = CommonTool_1.CommonTool.getServerTime();
                            this.data.skillID = deadFish.skillId;
                            this.data.skillAnteType = data.anteType;
                          }
                          seatData.skillType = deadFish.skillType;
                          this.gameUI.dropDrill(position_1, [ seatPosition.x, seatPosition.y ]);
                          this.gameUI.deadEffect(deadFish.fishType, position_1, isSelf);
                          this.gameUI.drillPool.scheduleOnce(function() {
                            if (isSelf) {
                              _this.isWaitingShoot = true;
                              _this.isGettingItem = false;
                              _this.waitingShoot(10);
                            }
                            _this.players[data.seatIdx].setCannonsSprite(FIsh_Player_1.CANNOS_TYPE.DRILL, seatData.anteType);
                          }, 2);
                        } else {
                          isSelf && (this.data.skillID = deadFish.skillId);
                          seatData.skillType = deadFish.skillType;
                          this.players[data.seatIdx].setCannonsSprite(FIsh_Player_1.CANNOS_TYPE.DRILL, seatData.anteType);
                        }
                        return [ 3, 15 ];

                       case 5:
                        if (!this.isBlur && eventTime >= this.data.focusTime) if (position_1) {
                          if (isSelf) {
                            this.isGettingItem = true;
                            this.gettingItemTime = CommonTool_1.CommonTool.getServerTime();
                            this.data.skillID = deadFish.skillId;
                            this.data.skillAnteType = data.anteType;
                          }
                          seatData.skillType = deadFish.skillType;
                          this.gameUI.dropLaser(position_1, [ seatPosition.x, seatPosition.y ]);
                          this.gameUI.deadEffect(deadFish.fishType, position_1, isSelf);
                          this.gameUI.laserPool.scheduleOnce(function() {
                            if (isSelf) {
                              _this.isWaitingShoot = true;
                              _this.isGettingItem = false;
                              _this.gameUI.setLaserPreview(true);
                              _this.calCannonAngle();
                              _this.waitingShoot(10);
                            }
                            _this.players[data.seatIdx].setCannonsSprite(FIsh_Player_1.CANNOS_TYPE.LASER, seatData.anteType);
                          }, 2);
                        } else {
                          isSelf && (this.data.skillID = deadFish.skillId);
                          seatData.skillType = deadFish.skillType;
                          this.players[data.seatIdx].setCannonsSprite(FIsh_Player_1.CANNOS_TYPE.LASER, seatData.anteType);
                        }
                        return [ 3, 15 ];

                       case 6:
                        isSelf && (this.data.skillAnteType = data.anteType);
                        this.data.blackHolePositionMapping[deadFish.skillId] = position_1;
                        if (!this.isBlur) {
                          pos = new cc.Vec2(position_1[0], position_1[1]);
                          node = this.gameUI.setFxBlackHole(pos);
                          this.setBlackHole(node, data.seatIdx, deadFish.skillId, deadFish.fishType);
                          position_1 && this.gameUI.deadEffect(deadFish.fishType, position_1, isSelf);
                        }
                        return [ 3, 15 ];

                       case 7:
                        if (!this.isBlur) {
                          this.gameUI.setFxHammer();
                          if (isSelf) {
                            this.data.skillAnteType = data.anteType;
                            this.setHammer(data.seatIdx, deadFish.skillId, deadFish.fishType);
                          }
                          position_1 && this.gameUI.deadEffect(deadFish.fishType, position_1, isSelf);
                        }
                        return [ 3, 15 ];

                       case 8:
                        this.isBlur || position_1 && this.gameUI.deadEffect(deadFish.fishType, position_1, isSelf);
                        return [ 3, 15 ];

                       case 9:
                        if (!(isSelf && deadFish.luckyReelIdxs && deadFish.luckyReelIdxs.length)) return [ 3, 11 ];
                        score = deadFish.luckyMultiples[0] * deadFish.luckyMultiples[1] * deadFish.luckyMultiples[2];
                        this.isFireSkillAni = true;
                        return [ 4, this.gameUI.openRoulettePanel(deadFish.luckyReelIdxs, score) ];

                       case 10:
                        _b.sent();
                        this.isFireSkillAni = false;
                        _b.label = 11;

                       case 11:
                        if (!position_1) return [ 3, 13 ];
                        this.gameUI.payout(deadFish.pay, position_1, isSelf);
                        this.gameUI.deadEffect(deadFish.fishType, position_1, isSelf);
                        return [ 4, this.gameUI.coinEffect(deadFish.odds, position_1, [ seatPosition.x, seatPosition.y ], isSelf) ];

                       case 12:
                        _b.sent();
                        return [ 3, 14 ];

                       case 13:
                        cc.warn("\u9b5a\u96bb\u6b7b\u4ea1\u4e0d\u5728\u756b\u9762\u7372\u53d6\u4e0d\u5230\u5ea7\u6a19", deadFish);
                        _b.label = 14;

                       case 14:
                        seatData.balance += deadFish.pay;
                        seatData.totalProfit += deadFish.pay;
                        this.players[data.seatIdx].setPlayerCoin(seatData.balance);
                        this.players[data.seatIdx].setShootingGet(seatData.totalProfit);
                        return [ 3, 15 ];

                       case 15:
                        deadFish.fishType > 200 && deadFish.fishType < 500 && this.players[data.seatIdx].setFlatter();
                        isSelf && this.gameUI.updateQuitPanel(seatData.balance, seatData.totalProfit);
                        return [ 2 ];
                      }
                    });
                  });
                });
              } else {
                cc.log("onHitEvent \u9b5a\u4e0d\u5b58\u5728", deadFish);
                seatData.balance += deadFish.pay;
                seatData.totalProfit += deadFish.pay;
                this_1.players[data.seatIdx].setPlayerCoin(seatData.balance);
                this_1.players[data.seatIdx].setShootingGet(seatData.totalProfit);
                data.seatIdx == this_1.data.selfSeatIdx && this_1.gameUI.updateQuitPanel(seatData.balance, seatData.totalProfit);
                var index = this_1.fishQueue.findIndex(function(item) {
                  return item.fishId === deadFish.fishId;
                });
                if (-1 !== index) {
                  cc.log("\u751f\u9b5a\u968a\u5217\u7684\u9b5a\u6b7b\u4e86", deadFish.fishId);
                  this_1.fishQueue.splice(index, 1);
                }
              }
              cc.isValid(this_1.lockFish) && this_1.lockFish.id == deadFish.fishId && this_1.clearLockFish();
            };
            this_1 = this;
            for (i = 0, length = data.deadFishes.length; i < length; i++) _loop_1(i, length);
            data.fixAnteType && this.fixAnte(data);
            return [ 2 ];
          });
        });
      };
      Fish_GameManager.prototype.bubbleHit = function(data) {
        var _this = this;
        var seatData = this.data.playersData.find(function(player) {
          return (null === player || void 0 === player ? void 0 : player.seatIdx) === data.seatIdx;
        });
        var bubblePosition;
        var _loop_2 = function(i, length) {
          var deadFish = data.deadFishes[i];
          var fishNode = this_2.findFish(deadFish.fishId);
          Object.keys(this_2.data.lockFishTipMapping).forEach(function(seatIdx) {
            if (_this.data.lockFishTipMapping[seatIdx].fish.id === deadFish.fishId) {
              _this.gameUI.clearLockTip(+seatIdx);
              delete _this.data.lockFishTipMapping[seatIdx];
            }
          });
          if (fishNode) {
            var fish = fishNode.getComponent(Fish_Fish_1.Fish_Fish);
            var position_2;
            if (deadFish.position && deadFish.position.length) {
              var transPos = this_2.moveDirectionTranspose(new cc.Vec2(deadFish.position[0], deadFish.position[1]), fish.isDragon());
              position_2 = [ transPos.x, transPos.y ];
            } else {
              var pos = fish.getLockingPosition(true);
              pos && (position_2 = [ pos.x, pos.y ]);
            }
            this_2.scheduleOnce(function() {
              return __awaiter(_this, void 0, void 0, function() {
                var endPos, bubbleKillEffect_1, seatPosition, isSelf;
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    if (0 === i) bubblePosition = position_2; else {
                      endPos = fishNode.getComponent(Fish_Fish_1.Fish_Fish).getLockingPosition(true);
                      if (bubblePosition && position_2 && endPos) {
                        bubbleKillEffect_1 = this.gameUI.bubbleKillEffect(new cc.Vec2(bubblePosition[0], bubblePosition[1]), new cc.Vec2(endPos.x, endPos.y));
                        bubbleKillEffect_1 && this.scheduleOnce(function() {
                          bubbleKillEffect_1.removeFromParent();
                          _this.gameUI.bubbleKillEffectPool.recovery(bubbleKillEffect_1);
                        }, 1);
                      }
                    }
                    fishNode.getComponent(Fish_Fish_1.Fish_Fish).showBubble();
                    fishNode.getComponent(Fish_Fish_1.Fish_Fish).pause();
                    this.scheduleOnce(function() {
                      fishNode.getComponent(Fish_Fish_1.Fish_Fish).bubblePop();
                      fishNode.getComponent(Fish_Fish_1.Fish_Fish).dead(data.skillType, deadFish);
                    }, .6);
                    seatPosition = this.playerGroup.convertToWorldSpaceAR(this.data.cannonsPosition[data.seatIdx]);
                    seatPosition = cc.Canvas.instance.node.convertToNodeSpaceAR(seatPosition);
                    isSelf = this.data.nickname === seatData.nickname;
                    if (!position_2) return [ 3, 2 ];
                    this.gameUI.payout(deadFish.pay, position_2, isSelf);
                    this.gameUI.deadEffect(deadFish.fishType, position_2, isSelf);
                    return [ 4, this.gameUI.coinEffect(deadFish.odds, position_2, [ seatPosition.x, seatPosition.y ], isSelf) ];

                   case 1:
                    _a.sent();
                    return [ 3, 3 ];

                   case 2:
                    cc.warn("\u9b5a\u96bb\u6b7b\u4ea1\u4e0d\u5728\u756b\u9762\u7372\u53d6\u4e0d\u5230\u5ea7\u6a19", deadFish);
                    _a.label = 3;

                   case 3:
                    seatData.balance += deadFish.pay;
                    seatData.totalProfit += deadFish.pay;
                    this.players[data.seatIdx].setPlayerCoin(seatData.balance);
                    this.players[data.seatIdx].setShootingGet(seatData.totalProfit);
                    data.seatIdx == this.data.selfSeatIdx && this.gameUI.updateQuitPanel(seatData.balance, seatData.totalProfit);
                    return [ 2 ];
                  }
                });
              });
            });
          } else {
            cc.log("onHitEvent \u9b5a\u4e0d\u5b58\u5728", deadFish);
            seatData.balance += deadFish.pay;
            seatData.totalProfit += deadFish.pay;
            this_2.players[data.seatIdx].setPlayerCoin(seatData.balance);
            this_2.players[data.seatIdx].setShootingGet(seatData.totalProfit);
            data.seatIdx == this_2.data.selfSeatIdx && this_2.gameUI.updateQuitPanel(seatData.balance, seatData.totalProfit);
            var index = this_2.fishQueue.findIndex(function(item) {
              return item.fishId === deadFish.fishId;
            });
            if (-1 !== index) {
              cc.log("\u751f\u9b5a\u968a\u5217\u7684\u9b5a\u6b7b\u4e86", deadFish.fishId);
              this_2.fishQueue.splice(index, 1);
            }
          }
          cc.isValid(this_2.lockFish) && this_2.lockFish.id == deadFish.fishId && this_2.clearLockFish();
        };
        var this_2 = this;
        for (var i = 0, length = data.deadFishes.length; i < length; i++) _loop_2(i, length);
        data.fixAnteType && this.fixAnte(data);
      };
      Fish_GameManager.prototype.fixAnte = function(data) {
        var seatData = this.data.playersData.find(function(player) {
          return (null === player || void 0 === player ? void 0 : player.seatIdx) === data.seatIdx;
        });
        cc.log("\u78b0\u649e\u56de\u6b63\u91d1\u984d", this.data.roomAntes[data.fixAnteType - 1]);
        seatData.balance += this.data.roomAntes[data.fixAnteType - 1];
        seatData.totalProfit += this.data.roomAntes[data.fixAnteType - 1];
        seatData.totalBetAmount -= this.data.roomAntes[data.fixAnteType - 1];
        this.players[data.seatIdx].setShootingCost(seatData.totalBetAmount);
        this.players[data.seatIdx].setShootingGet(seatData.totalProfit);
        this.players[data.seatIdx].setPlayerCoin(seatData.balance);
        data.seatIdx == this.data.selfSeatIdx && this.gameUI.updateQuitPanel(seatData.balance);
      };
      Fish_GameManager.prototype.onOtherFireEvent = function(data) {
        var _this = this;
        var _a;
        var playerData = this.data.playersData[data.seatIdx];
        if (playerData.roundToken !== data.roundToken) {
          cc.warn("wrong player is firing", data.roundToken);
          return;
        }
        if (data.skillType === Fish_Fish_1.FISH_TYPE.CRAZY_DRILL || data.skillType === Fish_Fish_1.FISH_TYPE.PARTICLE_LASER) {
          if (data.angle.toString() === [ 0, 0 ].toString()) {
            this.closeSkill();
            data.angle = [ 0, Math.sin((this.players[data.seatIdx].getCannonUpAngle() + 90) * Math.PI / 180) ];
          }
          this.isBlur && this.resetCannon(data.seatIdx);
        }
        if (data.skillType === Fish_Fish_1.FISH_TYPE.BLACK_HOLE || data.skillType === Fish_Fish_1.FISH_TYPE.POWER_OF_THOR) return;
        if (data.skillType === Fish_Fish_1.FISH_TYPE.B1 || data.skillType === Fish_Fish_1.FISH_TYPE.B2 || data.skillType === Fish_Fish_1.FISH_TYPE.B3) {
          data.isFinalSkill ? this.bossSkillRoundToken = null : this.bossSkillRoundToken = data.roundToken;
          if (!this.isBlur) {
            this.gameUI.bossSkillFX(this.isBlur, data.isFinalSkill);
            this.scheduleOnce(function() {
              _this.skillHitAllFish(data.seatIdx);
            }, .8);
          }
        } else if (data.skillType === Fish_Fish_1.FISH_TYPE.SUPER_BOMB) {
          if (!this.isBlur) {
            this.gameUI.setFxMissile();
            this.gameUI.fxMissile.scheduleOnce(function() {
              _this.skillHitAllFish(data.seatIdx);
            }, .5);
          }
        } else {
          var direction = new cc.Vec2(data.angle[0], data.angle[1]);
          this.players[data.seatIdx].setBet(data.anteType);
          this.otherPlayerFire(data.seatIdx, data.anteType, direction, data.lockFishId, data.skillType);
          if (data.lockFishId && this.data.fishMapping[data.lockFishId]) {
            var fish = null === (_a = this.data.fishMapping[data.lockFishId]) || void 0 === _a ? void 0 : _a.getComponent(Fish_Fish_1.Fish_Fish);
            var position = fish.getLockingPosition();
            position || (position = fish.getLockingPosition(true));
            var lockTip = this.gameUI.setLockFishTip(position, data.seatIdx, false);
            this.data.lockFishTipMapping[data.seatIdx] = {
              lockTip: lockTip,
              fish: fish,
              sleepingTime: 0
            };
          }
        }
      };
      Fish_GameManager.prototype.onPlayerUpdateTurret = function(data) {
        if (data.seatIdx !== this.data.selfSeatIdx) {
          var playerData = this.data.playersData[data.seatIdx];
          if (playerData.roundToken !== data.roundToken) {
            cc.warn("wrong player is changing turret", data.roundToken);
            return;
          }
          this.data.playersData[data.seatIdx].turretType = data.turretType;
          this.data.playersData[data.seatIdx].anteType = data.anteType;
          this.players[data.seatIdx].setBet(data.anteType);
          this.players[data.seatIdx].setCannonsSprite(data.turretType, data.anteType);
        }
      };
      Fish_GameManager.prototype.onChangeSceneEvent = function(data) {};
      Fish_GameManager.prototype.onBossComingEvent = function(data) {
        this.isBlur || this.gameUI.openBossArrivePanel(data.bossType);
      };
      Fish_GameManager.prototype.onOtherAdditionCarryAmountEvent = function(data) {
        var playerData = this.data.playersData[data.seatIdx];
        if (playerData.roundToken !== data.roundToken) {
          cc.warn("wrong player is getting more money", data.roundToken);
          return;
        }
        this.players[data.seatIdx].setPlayerCoin(this.data.getClientMoney(data.amount));
      };
      Fish_GameManager.prototype.onJpRefresh = function(data) {
        var _this = this;
        data.themeJackpotList.forEach(function(item) {
          var themeListData = _this.data.themeData.fishThemeList.find(function(data) {
            return data.themeId === +item.themeId;
          });
          themeListData.jackpot = item.jackpotBonus;
          +item.themeId === _this.data.currentThemeType + 1 && _this.gameUI.updateJackpotIdle(item.jackpotBonus);
        });
      };
      Fish_GameManager.prototype.onJpWinning = function(data) {
        var jackpot = this.gameUI.jackpot;
        jackpot.queue.push(data);
        jackpot.selfPlayerId = this.data.playerID;
        1 !== jackpot.queue.length || jackpot.isPlaying || this.gameUI.playJackpotWinning();
      };
      Fish_GameManager.prototype.onIdleWarn = function(data) {
        if (data.isKickout) {
          this.data.isKickedOut = true;
          cc.director.loadScene("G" + this.data.gameID + "_Lobby");
        } else this.popup.confirmSystemMsgDialogBox.show(LocalizationManager_1.default.getInstance().get("ERROR_IDLE_1"));
      };
      Fish_GameManager.prototype.onFinalSkill = function(data) {
        var playerData = this.data.playersData[data.seatIdx];
        if (playerData.roundToken !== data.roundToken) {
          cc.warn("wrong player's final skill", data.roundToken);
          return;
        }
        this.players[data.seatIdx].setFinalSkill(data.skillType, data.boastTotalPay);
      };
      Fish_GameManager.prototype.onClickFishLock = function(touchEvent) {
        cc.log("\u9078\u64c7\u7784\u6e96\u76ee\u6a19");
        if (!this.data.isLock) return;
        var fish = this.findFishNode(touchEvent.target).getComponent(Fish_Fish_1.Fish_Fish);
        if (fish.isAlive()) {
          if (this.lockFish) {
            this.lockFish.isLocking = false;
            this.lockFish.hideRatio();
          }
          this.lockFish = fish;
          this.data.lockFishID = fish.id;
        }
      };
      Fish_GameManager.prototype.onBulletHit = function(pos, isDouble, isSelf) {
        this.gameUI.setBulletHit(pos, isDouble, isSelf);
      };
      Fish_GameManager.prototype.findFishNode = function(node) {
        return node.getComponent(Fish_Fish_1.Fish_Fish) ? node : this.findFishNode(node.parent);
      };
      Fish_GameManager.prototype.initCarryMoney = function() {
        CarryMoneyManager_1.CarryMoneyManager.enterPanelInstance = this.gameUI.carryMoneyEnterPanel;
        CarryMoneyManager_1.CarryMoneyManager.infoPanelInstance = this.gameUI.carryMoneyInfoPanel;
        CarryMoneyManager_1.CarryMoneyManager.confirmDialogBox = this.popup.confirmSystemMsgDialogBox;
        CarryMoneyManager_1.CarryMoneyManager.connectingDialogBox = this.popup.connectWaitingDialogBox;
        CarryMoneyManager_1.CarryMoneyManager.initCarryMoneyInGame();
      };
      Fish_GameManager.prototype.showCarryMonerEnter = function() {
        CarryMoneyManager_1.CarryMoneyManager.connectingDialogBox.show();
        CarryMoneyManager_1.CarryMoneyManager.carryMoneyCheckBalance(function() {
          CarryMoneyManager_1.CarryMoneyManager.enterPanelInstance.show();
        });
      };
      Fish_GameManager.prototype.carryMoneyKKWalletToGame = function() {
        this.additionCarryAmount({
          amount: CarryMoneyManager_1.CarryMoneyManager.walletInfo.kk,
          roundToken: this.data.playersData[this.data.selfSeatIdx].roundToken
        });
      };
      Fish_GameManager.prototype.checkAniStateStage = function() {
        var _this = this;
        this.drillBullet.forEach(function(item, index) {
          if (item && !item.node.active) {
            _this.drillBullet[index] = null;
            item.reset();
            _this.resetCannon(index);
          }
        });
        this.gameUI.isFxLaserStart.forEach(function(item, index) {
          if (item && !_this.gameUI.fxLaser[index].active) {
            _this.gameUI.isFxLaserStart[index] = false;
            _this.resetCannon(index);
          }
        });
      };
      Fish_GameManager.prototype.resetCannon = function(player) {
        if (this.data.playersData[player]) {
          this.data.playersData[player].skillType = 0;
          this.players[player].setCannonsSprite(this.data.playersData[player].turretType, this.data.playersData[player].anteType);
          if (player === this.data.selfSeatIdx) {
            this.data.skillID = "";
            this.isFireSkillAni = false;
            this.switchZindexOfClickArea(this.data.isLock);
          }
        }
      };
      Fish_GameManager.prototype.skillFire = function(player, skillID, skillType) {
        var data = {
          angle: [ 0, 0 ],
          anteType: this.data.skillAnteType,
          lockFishId: "",
          seatIdx: player,
          skillId: skillID,
          skillType: skillType,
          payload: "",
          roundToken: this.data.playersData[player].roundToken
        };
        this.fire(data);
      };
      Fish_GameManager.prototype.skillHit = function(player, skillID, skillType, hitFish, anteType) {
        var _this = this;
        var hitFishID = [];
        var hitFishPos = [];
        var pos = null;
        var fish = null;
        hitFish.forEach(function(item) {
          fish = item.getComponent(Fish_Fish_1.Fish_Fish);
          fish.onHit();
          if (fish.getLockingPosition()) pos = fish.getLockingPosition(); else {
            var worldPosition = item.parent.convertToWorldSpaceAR(item.position);
            pos = cc.Canvas.instance.node.convertToNodeSpaceAR(worldPosition);
          }
          var originalPosition = _this.moveDirectionTranspose(new cc.Vec2(pos.x, pos.y), fish.isDragon());
          hitFishPos.push([ originalPosition.x, originalPosition.y ]);
          hitFishID.push(fish.id);
          _this.onBulletHit(new cc.Vec2(pos.x, pos.y), false, player === _this.data.selfSeatIdx);
        });
        var requestData = {
          anteType: anteType,
          fishIds: hitFishID,
          skillId: skillID,
          skillType: skillType,
          positions: hitFishPos,
          payload: "",
          roundToken: this.data.playersData[player].roundToken
        };
        this.socket.hit(requestData);
      };
      Fish_GameManager.prototype.skillHitAllFish = function(seatIndex) {
        var _this = this;
        var allFishNode = this.getAllFish();
        allFishNode.forEach(function(item) {
          item.getComponent(Fish_Fish_1.Fish_Fish).onHit();
          var worldPosition = item.parent.convertToWorldSpaceAR(item.position);
          var canvasPosition = cc.Canvas.instance.node.convertToNodeSpaceAR(worldPosition);
          var originalPosition = new cc.Vec2(canvasPosition.x, canvasPosition.y);
          _this.onBulletHit(originalPosition, false, seatIndex === _this.data.selfSeatIdx);
        });
      };
      Fish_GameManager.prototype.setBlackHole = function(node, player, skillID, skillType) {
        var _this = this;
        var bulletData = {
          belongPlayer: player,
          moveDirection: cc.v2(0, 0),
          lockFishID: "",
          produceTime: null,
          createPosition: node.getPosition(),
          fish: null,
          type: skillType,
          anteType: this.data.skillAnteType,
          skillID: skillID
        };
        cc.tween(node).call(function() {
          _this.gameUI.fxBlackHolePool.schedule(function() {
            if (player == _this.data.selfSeatIdx) {
              _this.skillFire(player, skillID, skillType);
              var bullet = _this.bulletPools[0].reUse().getComponent(Fish_Bullet_1.default);
              bullet.node.setParent(_this.bulletParent);
              bullet.node.opacity = 255;
              bullet.pool = _this.bulletPools[0];
              bullet.init(bulletData);
            }
          }, 2, 4);
        }).delay(11).to(.5, {
          scale: 0
        }, {
          easing: "sineIn"
        }).call(function() {
          _this.gameUI.fxBlackHolePool.recovery(node);
        }).start();
      };
      Fish_GameManager.prototype.stopBlackHole = function() {};
      Fish_GameManager.prototype.setHammer = function(player, skillID, skillType) {};
      Fish_GameManager.prototype.stopHammer = function() {
        this.gameUI.fxHammerFadein.stop();
        this.gameUI.fxHammerFadeout.stop();
        this.gameUI.fxHammerPlay.stop();
        this.gameUI.fxHammerPlay.node.parent.stopAllActions();
        this.gameUI.fxHammerPlay.node.stopAllActions();
        this.gameUI.fxHammerPlay.unscheduleAllCallbacks();
      };
      Fish_GameManager.prototype.showOtherHammer = function(data) {
        var _this = this;
        this.isBlur || data.fishIds.forEach(function(item, index) {
          var node = _this.findFish(item);
          var pos = null;
          if (node && node.getComponent(Fish_Fish_1.Fish_Fish).getLockingPosition(true)) {
            node.getComponent(Fish_Fish_1.Fish_Fish).onHit();
            var result = node.getComponent(Fish_Fish_1.Fish_Fish).getLockingPosition(true);
            pos = new cc.Vec2(result.x, result.y);
          } else pos = _this.moveDirectionTranspose(new cc.Vec2(data.positions[index][0], data.positions[index][1]));
          _this.gameUI.setBulletHit(pos, false, false);
        });
      };
      Fish_GameManager.prototype.toOtherGame = function(gameId) {
        var _this = this;
        3 === BaseDataManager_1.default.onlineList[BaseDataManager_1.default.currentTopicName].ManagerData.Status ? this.socket.launchGame({
          username: this.data.nickname,
          gameId: gameId
        }).then(function(response) {
          BaseDataManager_1.default.isReproduce = true;
          _this.socket.close(true);
          SceneManager_1.SceneManager.changeURLsToken("?" + response.url.split("?")[1]);
          SceneManager_1.SceneManager.changeScene("G" + gameId, SceneManager_1.SCENE_TYPE.LOADING);
        }).catch(function() {
          BaseDataManager_1.default.currentTopicName = null;
        }) : this.socket.restore(BaseDataManager_1.default.currentTopicName).then(function(data) {
          _this.socket.close(true);
          var newToken = data.url.split("?")[1];
          SceneManager_1.SceneManager.changeURLsToken("?" + newToken);
          SceneManager_1.SceneManager.changeScene("G" + gameId, SceneManager_1.SCENE_TYPE.LOADING);
        }).catch(function(error) {
          cc.error("\u8f09\u5165\u724c\u5c40\u6642\u767c\u751f\u932f\u8aa4", error);
          BaseDataManager_1.default.currentTopicName = null;
        });
      };
      Fish_GameManager.prototype.getPlayerOnlineList = function(successfulCallback, failedCallback) {
        this.socket.getPlayerOnlineList().then(function(data) {
          BaseDataManager_1.default.onlineListProcess(data);
          successfulCallback && successfulCallback();
        }).catch(function(error) {
          cc.error(error);
          failedCallback && failedCallback();
        });
      };
      Fish_GameManager.prototype.checkBalanceEnough = function() {
        var selfData = this.data.playersData[this.data.selfSeatIdx];
        if (0 !== selfData.skillType) return true;
        if (selfData.balance - this.data.roomAntes[selfData.anteType - 1] < 0) {
          this.isFire = false;
          this.data.isAutoGame = false;
          this.gameUI.autoGameButtonActive(this.data.isAutoGame);
          this.data.autoFire = false;
          this.lockFish = null;
          this.popup.confirmSystemMsgDialogBox.show(LocalizationManager_1.default.getInstance().get("MESSAGE_BALANCE_REQUIRE"), this.showCarryMonerEnter);
          return false;
        }
        return true;
      };
      Fish_GameManager.prototype.checkGameBulletOverCount = function() {
        var count = 0;
        for (var i = 0; i < this.bulletParent.childrenCount; i++) {
          var bullet = this.bulletParent.children[i].getComponent(Fish_Bullet_1.default);
          bullet.belongPlayer == this.data.selfSeatIdx && count++;
        }
        if (count >= this.data.bulletMaxCount) {
          this.gameUI.showHint(LocalizationManager_1.default.getInstance().get("TEXT_BULLET_OVER_LIMIT"));
          this.data.autoFire = false;
          this.gameUI.setAutoToggle(false);
          return true;
        }
        return false;
      };
      Fish_GameManager.prototype.waitingShoot = function(count) {};
      Fish_GameManager.prototype.closeEffect = function() {};
      Fish_GameManager.prototype.stopMissile = function() {};
      Fish_GameManager.prototype.stopDrill = function() {};
      Fish_GameManager.prototype.stopLaser = function() {};
      Fish_GameManager.prototype.closeSkill = function() {};
      Fish_GameManager.prototype.setJackpotPos = function() {};
      __decorate([ property(Fish_GameUI_1.default) ], Fish_GameManager.prototype, "gameUI", void 0);
      __decorate([ property(cc.Node) ], Fish_GameManager.prototype, "playerPrefab", void 0);
      __decorate([ property(cc.Node) ], Fish_GameManager.prototype, "fishParent", void 0);
      __decorate([ property(cc.Node) ], Fish_GameManager.prototype, "bulletParent", void 0);
      __decorate([ property(cc.Node) ], Fish_GameManager.prototype, "playerGroup", void 0);
      __decorate([ property(cc.Node) ], Fish_GameManager.prototype, "clickGroup", void 0);
      __decorate([ property(cc.Node) ], Fish_GameManager.prototype, "touchArea", void 0);
      __decorate([ property([ Fish_BulletPool_1.default ]) ], Fish_GameManager.prototype, "bulletPools", void 0);
      __decorate([ property([ Fish_FishPool_1.Fish_FishPool ]) ], Fish_GameManager.prototype, "fishPools", void 0);
      Fish_GameManager = __decorate([ ccclass ], Fish_GameManager);
      return Fish_GameManager;
    }(cc.Component);
    exports.default = Fish_GameManager;
    cc._RF.pop();
  }, {
    "../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../Common/Tools/Base/BaseDataManager": void 0,
    "../../Common/Tools/CarryMoney/CarryMoneyManager": void 0,
    "../../Common/Tools/CommonTool": void 0,
    "../../Common/Tools/FriendSystemManager/FriendSystemManager": void 0,
    "../../Common/Tools/Localization/LocalizationManager": void 0,
    "../../Common/Tools/SceneManager/SceneManager": void 0,
    "../../Common/Tools/StageCycleManager/StageCycleManager": void 0,
    "../Common/Manager/Fish_DataManager": "Fish_DataManager",
    "../Common/Pool/Fish_BulletPool": "Fish_BulletPool",
    "../Common/Pool/Fish_FishPool": "Fish_FishPool",
    "../Common/Socket/SDK/Fish_Protocol": "Fish_Protocol",
    "./FIsh_Player": "FIsh_Player",
    "./Fish_Bullet": "Fish_Bullet",
    "./Fish_Fish": "Fish_Fish",
    "./View/Fish_GameUI": "Fish_GameUI",
    "./View/Panel/Fish_AutoGamePanel": "Fish_AutoGamePanel"
  } ],
  FIsh_Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f4eacmPNoxF7IGALJq4MW2N", "FIsh_Player");
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
    exports.SKILL_TYPE = exports.CANNOS_TYPE = void 0;
    var FXController_1 = require("../../Common/Optional/Crosis/FXController/FXController");
    var RunScore_1 = require("../../Common/Optional/Crosis/RunScore/RunScore");
    var CommonTool_1 = require("../../Common/Tools/CommonTool");
    var Fish_AddCoinPool_1 = require("../Common/Pool/Fish_AddCoinPool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CANNOS_TYPE;
    (function(CANNOS_TYPE) {
      CANNOS_TYPE[CANNOS_TYPE["SINGLE"] = 1] = "SINGLE";
      CANNOS_TYPE[CANNOS_TYPE["DOUBLE"] = 2] = "DOUBLE";
      CANNOS_TYPE[CANNOS_TYPE["ELECTRIC"] = 3] = "ELECTRIC";
      CANNOS_TYPE[CANNOS_TYPE["DRILL"] = 501] = "DRILL";
      CANNOS_TYPE[CANNOS_TYPE["LASER"] = 502] = "LASER";
    })(CANNOS_TYPE = exports.CANNOS_TYPE || (exports.CANNOS_TYPE = {}));
    var SKILL_TYPE;
    (function(SKILL_TYPE) {
      SKILL_TYPE[SKILL_TYPE["NORMAL"] = 0] = "NORMAL";
      SKILL_TYPE[SKILL_TYPE["BOSS_401"] = 401] = "BOSS_401";
      SKILL_TYPE[SKILL_TYPE["BOSS_402"] = 402] = "BOSS_402";
      SKILL_TYPE[SKILL_TYPE["BOSS_403"] = 403] = "BOSS_403";
      SKILL_TYPE[SKILL_TYPE["CRAZY_DRILL"] = 501] = "CRAZY_DRILL";
      SKILL_TYPE[SKILL_TYPE["PARTICLE_LASER"] = 502] = "PARTICLE_LASER";
      SKILL_TYPE[SKILL_TYPE["SUPER_BOMB"] = 503] = "SUPER_BOMB";
      SKILL_TYPE[SKILL_TYPE["BLACK_HOLE"] = 504] = "BLACK_HOLE";
      SKILL_TYPE[SKILL_TYPE["POWER_OF_THOR"] = 505] = "POWER_OF_THOR";
      SKILL_TYPE[SKILL_TYPE["LUCKY_REEL"] = 506] = "LUCKY_REEL";
      SKILL_TYPE[SKILL_TYPE["BUBBLE"] = 601] = "BUBBLE";
    })(SKILL_TYPE = exports.SKILL_TYPE || (exports.SKILL_TYPE = {}));
    var Fish_Player = function(_super) {
      __extends(Fish_Player, _super);
      function Fish_Player() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerNode = null;
        _this.empty = null;
        _this.exist = null;
        _this.bottomBg = null;
        _this.cannonsBase = null;
        _this.emptyInfo = null;
        _this.cannonsRoot = null;
        _this.cannonsSpine = null;
        _this.cannonInfo = null;
        _this.cannonInfoTop = null;
        _this.shootingCost = null;
        _this.shootingGetWin = null;
        _this.shootingGetLose = null;
        _this.playerName = null;
        _this.playerCoin = null;
        _this.playerAddCoin = null;
        _this.playerBet = null;
        _this.addBetButton = null;
        _this.reduceBetButton = null;
        _this.profitWord = null;
        _this.leftInfoFrame = null;
        _this.righrInfoFrame = null;
        _this.flatterSpine = null;
        _this.skillSpine = null;
        _this.skillTotalPay = null;
        _this.fxFortChange = null;
        _this.fxFortLightSinglePlayer = null;
        _this.fxFortLightSingleOther = null;
        _this.fxFortLightDoublePlayer = null;
        _this.fxFortLightDoubleOther = null;
        _this.drillBullet = null;
        _this.data = null;
        _this.prefixStr = "";
        _this.surfixStr = "";
        _this.type = 0;
        _this.upAngle = null;
        return _this;
      }
      Fish_Player.prototype.init = function(index) {
        this.playerNode.setPosition(0, -200);
        this.playerAddCoin.init();
        this.flatterSpine.node.active = false;
        this.skillSpine.node.active = false;
        this.setEmpty();
        this.addBetButton.clickEvents[0].customEventData = index.toString();
        this.reduceBetButton.clickEvents[0].customEventData = index.toString();
      };
      Fish_Player.prototype.setEmpty = function() {};
      Fish_Player.prototype.setExist = function() {};
      Fish_Player.prototype.initPlayerData = function(playerData) {
        var type = 0 !== playerData.skillType ? playerData.skillType : playerData.turretType;
        this.setPlayerName(playerData.nickname);
        this.setPlayerCoin(playerData.balance, false);
        this.setShootingCost(playerData.totalBetAmount);
        this.setShootingGet(playerData.totalProfit, false);
        this.setBet(playerData.anteType);
        this.initCannonAngle();
        this.setCannonsSprite(type, playerData.anteType);
      };
      Fish_Player.prototype.setCannonAngle = function(direction) {
        var x = direction.x;
        var y = direction.y;
        var angle = Math.atan2(y, x) / Math.PI * 180 - 90;
        Math.abs(angle - this.upAngle) > 180 && (angle = angle < 0 ? angle + 360 : angle - 360);
        this.cannonsRoot.angle = CommonTool_1.CommonTool.clamp(angle, this.upAngle - this.data.cannonsAngleRange, this.upAngle + this.data.cannonsAngleRange);
      };
      Fish_Player.prototype.setUpAngle = function(scaleY) {
        this.upAngle = Math.atan2(1 * scaleY, 0) / Math.PI * 180 - 90;
      };
      Fish_Player.prototype.setPlayerName = function(name) {
        this.playerName.string = CommonTool_1.CommonTool.playerNameEncryption(name);
      };
      Fish_Player.prototype.setPlayerCoin = function(coin, isRunScore) {
        void 0 === isRunScore && (isRunScore = true);
        coin = CommonTool_1.CommonTool.getClientMoney(coin);
        if (isRunScore) {
          if (coin > +this.playerCoin.string) {
            var coinNode = this.playerAddCoin.reUse();
            coinNode.setParent(this.playerAddCoin.node);
            coinNode.getComponent(cc.Label).string = "+" + (coin - +this.playerCoin.string).toFixed(1);
            this.addCoinEffect(coinNode);
          }
        } else this.playerCoin.node.getComponent(RunScore_1.default).setRunScoreLabel(coin);
        this.playerCoin.string = coin.toString();
      };
      Fish_Player.prototype.setShootingCost = function(shootingCost) {
        this.shootingCost.string = CommonTool_1.CommonTool.getClientMoney(shootingCost).toString();
      };
      Fish_Player.prototype.setShootingGet = function(shootingGet, isRunScore) {
        void 0 === isRunScore && (isRunScore = true);
        shootingGet = CommonTool_1.CommonTool.getClientMoney(shootingGet);
        if (shootingGet < 0) {
          this.profitWord.active = false;
          this.shootingGetLose.node.active = true;
          this.shootingGetWin.node.active = false;
          this.shootingGetWin.node.getComponent(RunScore_1.default).setRunScoreLabel(0);
          isRunScore || this.shootingGetLose.node.getComponent(RunScore_1.default).setRunScoreLabel(shootingGet);
          this.shootingGetLose.string = "" + shootingGet.toString();
        } else {
          this.profitWord.active = shootingGet > 0;
          this.shootingGetWin.node.active = true;
          this.shootingGetLose.node.active = false;
          this.shootingGetLose.node.getComponent(RunScore_1.default).setRunScoreLabel(0);
          isRunScore || this.shootingGetWin.node.getComponent(RunScore_1.default).setRunScoreLabel(shootingGet);
          this.shootingGetWin.string = "+" + shootingGet.toString();
        }
      };
      Fish_Player.prototype.setBet = function(bet) {
        this.playerBet.string = CommonTool_1.CommonTool.getClientMoney(this.data.roomAntes[bet - 1]).toString();
        this.reduceBetButton.interactable = bet > 1;
        this.reduceBetButton.interactable || (this.reduceBetButton.node.getComponent(cc.Sprite).spriteFrame = this.reduceBetButton.normalSprite);
        this.addBetButton.interactable = bet < this.data.roomAntes.length;
        this.addBetButton.interactable || (this.addBetButton.node.getComponent(cc.Sprite).spriteFrame = this.addBetButton.normalSprite);
      };
      Fish_Player.prototype.setBetButton = function(isShow) {};
      Fish_Player.prototype.setCannonsSprite = function(type, bet) {
        this.type = type;
        this.fxFortChange.play();
      };
      Fish_Player.prototype.setFlatter = function() {};
      Fish_Player.prototype.setCannonShootingEffect = function(isSelf) {};
      Fish_Player.prototype.initCannonAngle = function() {
        this.cannonsRoot.angle = this.upAngle;
      };
      Fish_Player.prototype.getCannonUpAngle = function() {
        return this.upAngle;
      };
      Fish_Player.prototype.getCannonAngle = function() {
        return this.cannonsRoot.angle;
      };
      Fish_Player.prototype.setFinalSkill = function(skiliType, totalPay) {};
      Fish_Player.prototype.addCoinEffect = function(coin) {};
      __decorate([ property(cc.Node) ], Fish_Player.prototype, "playerNode", void 0);
      __decorate([ property(cc.Node) ], Fish_Player.prototype, "empty", void 0);
      __decorate([ property(cc.Node) ], Fish_Player.prototype, "exist", void 0);
      __decorate([ property(cc.Node) ], Fish_Player.prototype, "bottomBg", void 0);
      __decorate([ property(cc.Node) ], Fish_Player.prototype, "cannonsBase", void 0);
      __decorate([ property(cc.Node) ], Fish_Player.prototype, "emptyInfo", void 0);
      __decorate([ property(cc.Node) ], Fish_Player.prototype, "cannonsRoot", void 0);
      __decorate([ property(sp.Skeleton) ], Fish_Player.prototype, "cannonsSpine", void 0);
      __decorate([ property(cc.Node) ], Fish_Player.prototype, "cannonInfo", void 0);
      __decorate([ property(cc.Node) ], Fish_Player.prototype, "cannonInfoTop", void 0);
      __decorate([ property(cc.Label) ], Fish_Player.prototype, "shootingCost", void 0);
      __decorate([ property(cc.Label) ], Fish_Player.prototype, "shootingGetWin", void 0);
      __decorate([ property(cc.Label) ], Fish_Player.prototype, "shootingGetLose", void 0);
      __decorate([ property(cc.Label) ], Fish_Player.prototype, "playerName", void 0);
      __decorate([ property(cc.Label) ], Fish_Player.prototype, "playerCoin", void 0);
      __decorate([ property(Fish_AddCoinPool_1.default) ], Fish_Player.prototype, "playerAddCoin", void 0);
      __decorate([ property(cc.Label) ], Fish_Player.prototype, "playerBet", void 0);
      __decorate([ property(cc.Button) ], Fish_Player.prototype, "addBetButton", void 0);
      __decorate([ property(cc.Button) ], Fish_Player.prototype, "reduceBetButton", void 0);
      __decorate([ property(cc.Node) ], Fish_Player.prototype, "profitWord", void 0);
      __decorate([ property(cc.Node) ], Fish_Player.prototype, "leftInfoFrame", void 0);
      __decorate([ property(cc.Node) ], Fish_Player.prototype, "righrInfoFrame", void 0);
      __decorate([ property(sp.Skeleton) ], Fish_Player.prototype, "flatterSpine", void 0);
      __decorate([ property(sp.Skeleton) ], Fish_Player.prototype, "skillSpine", void 0);
      __decorate([ property(cc.Label) ], Fish_Player.prototype, "skillTotalPay", void 0);
      __decorate([ property(FXController_1.default) ], Fish_Player.prototype, "fxFortChange", void 0);
      __decorate([ property(FXController_1.default) ], Fish_Player.prototype, "fxFortLightSinglePlayer", void 0);
      __decorate([ property(FXController_1.default) ], Fish_Player.prototype, "fxFortLightSingleOther", void 0);
      __decorate([ property(FXController_1.default) ], Fish_Player.prototype, "fxFortLightDoublePlayer", void 0);
      __decorate([ property(FXController_1.default) ], Fish_Player.prototype, "fxFortLightDoubleOther", void 0);
      __decorate([ property(sp.Skeleton) ], Fish_Player.prototype, "drillBullet", void 0);
      Fish_Player = __decorate([ ccclass ], Fish_Player);
      return Fish_Player;
    }(cc.Component);
    exports.default = Fish_Player;
    cc._RF.pop();
  }, {
    "../../Common/Optional/Crosis/FXController/FXController": void 0,
    "../../Common/Optional/Crosis/RunScore/RunScore": void 0,
    "../../Common/Tools/CommonTool": void 0,
    "../Common/Pool/Fish_AddCoinPool": "Fish_AddCoinPool"
  } ],
  Fish_AddCoinPool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fca45TVCv9BepRnNPnSe6rA", "Fish_AddCoinPool");
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
    var Fish_BasePool_1 = require("./Fish_BasePool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_AddCoinPoolPool = function(_super) {
      __extends(Fish_AddCoinPoolPool, _super);
      function Fish_AddCoinPoolPool() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_AddCoinPoolPool = __decorate([ ccclass ], Fish_AddCoinPoolPool);
      return Fish_AddCoinPoolPool;
    }(Fish_BasePool_1.Fish_BasePool);
    exports.default = Fish_AddCoinPoolPool;
    cc._RF.pop();
  }, {
    "./Fish_BasePool": "Fish_BasePool"
  } ],
  Fish_AutoGamePanel_Fish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73d3dGDwjhDRqdqis5zJD+Z", "Fish_AutoGamePanel_Fish");
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
    var LocalizationManager_1 = require("../../../../Common/Tools/Localization/LocalizationManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_AutoGamePanel_Fish = function(_super) {
      __extends(Fish_AutoGamePanel_Fish, _super);
      function Fish_AutoGamePanel_Fish() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.fishName = null;
        _this.fishOdds = null;
        _this.toggle = null;
        _this.data = null;
        _this.fishType = 0;
        return _this;
      }
      Fish_AutoGamePanel_Fish.prototype.init = function(fishType, isSelect) {
        this.fishType = fishType;
        this.toggle.isChecked = isSelect;
        this.fishName.string = LocalizationManager_1.default.getInstance().get("TEXT_FISHNAME_" + fishType);
        this.fishOdds.string = LocalizationManager_1.default.getInstance().get("TEXT_ODDS") + this.data.fishOdds[fishType];
      };
      Fish_AutoGamePanel_Fish.prototype.setIsChecked = function(active) {
        this.toggle.isChecked = active;
      };
      Fish_AutoGamePanel_Fish.prototype.clickSound = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("AutoGame_FishClick");
      };
      Fish_AutoGamePanel_Fish.prototype.isSelect = function() {
        return this.toggle.isChecked;
      };
      Fish_AutoGamePanel_Fish.prototype.getFishType = function() {
        return this.fishType;
      };
      __decorate([ property(cc.Label) ], Fish_AutoGamePanel_Fish.prototype, "fishName", void 0);
      __decorate([ property(cc.Label) ], Fish_AutoGamePanel_Fish.prototype, "fishOdds", void 0);
      __decorate([ property(cc.Toggle) ], Fish_AutoGamePanel_Fish.prototype, "toggle", void 0);
      Fish_AutoGamePanel_Fish = __decorate([ ccclass ], Fish_AutoGamePanel_Fish);
      return Fish_AutoGamePanel_Fish;
    }(cc.Component);
    exports.default = Fish_AutoGamePanel_Fish;
    cc._RF.pop();
  }, {
    "../../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../../Common/Tools/Localization/LocalizationManager": void 0
  } ],
  Fish_AutoGamePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0289bLNbSFKqr7PSwdfyQ99", "Fish_AutoGamePanel");
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
    exports.AUTO_SELECT_TYPE = void 0;
    var List_optimize_1 = require("../../../../Common/Optional/Crosis/List_optimize/List_optimize");
    var BaseZoomPopup_1 = require("../../../../Common/Optional/Songlin/Popup/BaseZoomPopup");
    var AudioManager_1 = require("../../../../Common/Tools/AudioManager/AudioManager");
    var LocalizationManager_1 = require("../../../../Common/Tools/Localization/LocalizationManager");
    var Fish_AutoGamePanel_Fish_1 = require("./Fish_AutoGamePanel_Fish");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    exports.AUTO_SELECT_TYPE = "AUTO_SELECT_TYPE";
    var Fish_AutoGamePanel = function(_super) {
      __extends(Fish_AutoGamePanel, _super);
      function Fish_AutoGamePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.fishs = [];
        _this.startButton = null;
        _this.stopButton = null;
        _this.scrollView = null;
        _this.data = null;
        _this.tipFunction = null;
        _this.isChanged = false;
        return _this;
      }
      Fish_AutoGamePanel.prototype.init = function(tipFunction) {
        var _key = exports.AUTO_SELECT_TYPE + this.data.nickname + this.data.gameID.toString();
        this.data.autoGameHitFishType = cc.sys.localStorage.getItem(_key) ? JSON.parse(cc.sys.localStorage.getItem(_key)) : [];
        for (var i = 0; i < this.fishs.length; i++) this.data.autoGameHitFishType.includes(this.fishIllustartedTypes[i]) ? this.fishs[i].init(this.fishIllustartedTypes[i], true) : this.fishs[i].init(this.fishIllustartedTypes[i], false);
        this.node.active = false;
        this.stopButton.active = false;
        this.tipFunction = tipFunction;
      };
      Fish_AutoGamePanel.prototype.open = function() {
        var _a;
        _super.prototype.showPopup.call(this);
        AudioManager_1.AudioManager.instance.playAudioEvent("AutoGamePanel_Open");
        this.node.position = cc.Vec3.ZERO;
        this.stopButton.active = this.data.isAutoGame;
        this.startButton.active = !this.data.isAutoGame;
        this.data.isAutoGame = false;
        this.resetFishSelect();
        this.isChanged = false;
        null === (_a = this.scrollView.getComponent(List_optimize_1.default)) || void 0 === _a ? void 0 : _a.setUpdateOpacity(true);
      };
      Fish_AutoGamePanel.prototype.close = function() {
        _super.prototype.closePopup.call(this);
        AudioManager_1.AudioManager.instance.playAudioEvent("AutoGamePanel_Close");
      };
      Fish_AutoGamePanel.prototype.cancel = function() {
        this.close();
        this.data.isAutoGame = this.stopButton.active;
        this.isChanged && this.data.isAutoGame && this.tipFunction(LocalizationManager_1.default.getInstance().get("TEXT_AUTOGAME_DIDNT_SAVE"));
      };
      Fish_AutoGamePanel.prototype.selectAll = function() {
        cc.log("\u3010\u639b\u6a5f\u3011 \u9078\u64c7\u5168\u90e8");
        for (var i = 0; i < this.fishs.length; i++) this.fishs[i].setIsChecked(true);
        AudioManager_1.AudioManager.instance.playAudioEvent("AutoGamePanel_SelectAll");
      };
      Fish_AutoGamePanel.prototype.cancelAll = function() {
        cc.log("\u3010\u639b\u6a5f\u3011 \u53d6\u6d88\u5168\u90e8");
        for (var i = 0; i < this.fishs.length; i++) this.fishs[i].setIsChecked(false);
        AudioManager_1.AudioManager.instance.playAudioEvent("AutoGamePanel_CancelAll");
      };
      Fish_AutoGamePanel.prototype.onChangeEdit = function() {
        this.isChanged = true;
      };
      Fish_AutoGamePanel.prototype.closeStopButton = function() {
        this.stopButton.active = false;
        this.startButton.active = true;
      };
      Fish_AutoGamePanel.prototype.getAutoGameHitFish = function() {
        var hitFish = [];
        for (var i = 0; i < this.fishs.length; i++) this.fishs[i].isSelect() && hitFish.unshift(this.fishs[i].getFishType());
        cc.log("\u81ea\u52d5\u653b\u64ca\u7684\u9b5a ", hitFish);
        return hitFish;
      };
      Fish_AutoGamePanel.prototype.resetFishSelect = function() {
        var hitFishType = this.data.autoGameHitFishType;
        for (var i = 0; i < this.fishs.length; i++) {
          var fishType = this.fishs[i].getFishType();
          hitFishType.contains(fishType) ? this.fishs[i].setIsChecked(true) : this.fishs[i].setIsChecked(false);
        }
      };
      __decorate([ property([ Fish_AutoGamePanel_Fish_1.default ]) ], Fish_AutoGamePanel.prototype, "fishs", void 0);
      __decorate([ property(cc.Node) ], Fish_AutoGamePanel.prototype, "startButton", void 0);
      __decorate([ property(cc.Node) ], Fish_AutoGamePanel.prototype, "stopButton", void 0);
      __decorate([ property(cc.Node) ], Fish_AutoGamePanel.prototype, "scrollView", void 0);
      Fish_AutoGamePanel = __decorate([ ccclass ], Fish_AutoGamePanel);
      return Fish_AutoGamePanel;
    }(BaseZoomPopup_1.default);
    exports.default = Fish_AutoGamePanel;
    cc._RF.pop();
  }, {
    "../../../../Common/Optional/Crosis/List_optimize/List_optimize": void 0,
    "../../../../Common/Optional/Songlin/Popup/BaseZoomPopup": void 0,
    "../../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../../Common/Tools/Localization/LocalizationManager": void 0,
    "./Fish_AutoGamePanel_Fish": "Fish_AutoGamePanel_Fish"
  } ],
  Fish_BasePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a78dagJ5xtHKI4g7tyy5O/r", "Fish_BasePool");
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
    exports.Fish_BasePool = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_BasePool = function(_super) {
      __extends(Fish_BasePool, _super);
      function Fish_BasePool() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.prefab = null;
        _this.size = 0;
        _this.pool = null;
        return _this;
      }
      Fish_BasePool.prototype.init = function() {
        this.pool = new cc.NodePool();
        for (var i = 0; i < this.size; ++i) {
          var obj = cc.instantiate(this.prefab);
          this.pool.put(obj);
        }
      };
      Fish_BasePool.prototype.reUse = function() {
        var obj = null;
        if (this.pool.size() <= 0) {
          obj = cc.instantiate(this.prefab);
          this.pool.put(obj);
        }
        obj = this.pool.get();
        obj.active = true;
        return obj;
      };
      Fish_BasePool.prototype.recovery = function(obj) {
        obj.stopAllActions();
        obj.active = false;
        this.pool.put(obj);
      };
      __decorate([ property(cc.Node) ], Fish_BasePool.prototype, "prefab", void 0);
      __decorate([ property({
        type: cc.Integer
      }) ], Fish_BasePool.prototype, "size", void 0);
      Fish_BasePool = __decorate([ ccclass ], Fish_BasePool);
      return Fish_BasePool;
    }(cc.Component);
    exports.Fish_BasePool = Fish_BasePool;
    cc._RF.pop();
  }, {} ],
  Fish_BossArrivePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75c10PI7EpAxYV0N7ZgSU23", "Fish_BossArrivePanel");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BossOption = function() {
      function BossOption() {
        this.frameNode = null;
        this.nameNode = null;
        this.bossType = 0;
      }
      __decorate([ property(cc.Node) ], BossOption.prototype, "frameNode", void 0);
      __decorate([ property(cc.Node) ], BossOption.prototype, "nameNode", void 0);
      __decorate([ property() ], BossOption.prototype, "bossType", void 0);
      BossOption = __decorate([ ccclass("BossOption") ], BossOption);
      return BossOption;
    }();
    var Fish_BossArrivePanel = function(_super) {
      __extends(Fish_BossArrivePanel, _super);
      function Fish_BossArrivePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.an = null;
        _this.bossOptions = [];
        return _this;
      }
      Fish_BossArrivePanel.prototype.init = function() {
        this.node.active = false;
      };
      Fish_BossArrivePanel.prototype.onEnable = function() {};
      Fish_BossArrivePanel.prototype.onDisable = function() {};
      Fish_BossArrivePanel.prototype.open = function(bossType) {
        AudioManager_1.AudioManager.instance.playAudioEvent("BossArrivePanel_Open");
        AudioManager_1.AudioManager.instance.playAudioEvent("BossArrivePanel_" + bossType);
        this.node.position = cc.Vec3.ZERO;
        this.node.active = true;
      };
      Fish_BossArrivePanel.prototype.close = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("BossArrivePanel_Close");
      };
      Fish_BossArrivePanel.prototype.playAnimation = function(bossType) {};
      __decorate([ property(cc.Animation) ], Fish_BossArrivePanel.prototype, "an", void 0);
      __decorate([ property([ BossOption ]) ], Fish_BossArrivePanel.prototype, "bossOptions", void 0);
      Fish_BossArrivePanel = __decorate([ ccclass ], Fish_BossArrivePanel);
      return Fish_BossArrivePanel;
    }(cc.Component);
    exports.default = Fish_BossArrivePanel;
    cc._RF.pop();
  }, {
    "../../../../Common/Tools/AudioManager/AudioManager": void 0
  } ],
  Fish_BubbleKillEffectPool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0049JJezFBG6J/Fim65dp5", "Fish_BubbleKillEffectPool");
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
    var Fish_BasePool_1 = require("./Fish_BasePool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_BubbleKillEffectPool = function(_super) {
      __extends(Fish_BubbleKillEffectPool, _super);
      function Fish_BubbleKillEffectPool() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_BubbleKillEffectPool = __decorate([ ccclass ], Fish_BubbleKillEffectPool);
      return Fish_BubbleKillEffectPool;
    }(Fish_BasePool_1.Fish_BasePool);
    exports.default = Fish_BubbleKillEffectPool;
    cc._RF.pop();
  }, {
    "./Fish_BasePool": "Fish_BasePool"
  } ],
  Fish_BulletHitPool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bcbca7k43pBUaZY8l9PZlI3", "Fish_BulletHitPool");
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
    var Fish_BasePool_1 = require("./Fish_BasePool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_BulletHitPool = function(_super) {
      __extends(Fish_BulletHitPool, _super);
      function Fish_BulletHitPool() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_BulletHitPool = __decorate([ ccclass ], Fish_BulletHitPool);
      return Fish_BulletHitPool;
    }(Fish_BasePool_1.Fish_BasePool);
    exports.default = Fish_BulletHitPool;
    cc._RF.pop();
  }, {
    "./Fish_BasePool": "Fish_BasePool"
  } ],
  Fish_BulletPool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cdeccKDwOJB7YNqALq+i+up", "Fish_BulletPool");
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
    var Fish_BasePool_1 = require("./Fish_BasePool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_BulletPool = function(_super) {
      __extends(Fish_BulletPool, _super);
      function Fish_BulletPool() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_BulletPool = __decorate([ ccclass ], Fish_BulletPool);
      return Fish_BulletPool;
    }(Fish_BasePool_1.Fish_BasePool);
    exports.default = Fish_BulletPool;
    cc._RF.pop();
  }, {
    "./Fish_BasePool": "Fish_BasePool"
  } ],
  Fish_Bullet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90fc1Sd7DBF6bNP5fTdp4AW", "Fish_Bullet");
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
    exports.BULLET_TYPE = void 0;
    var AudioManager_1 = require("../../Common/Tools/AudioManager/AudioManager");
    var Fish_DataManager_1 = require("../Common/Manager/Fish_DataManager");
    var Fish_Fish_1 = require("./Fish_Fish");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BULLET_TYPE;
    (function(BULLET_TYPE) {
      BULLET_TYPE[BULLET_TYPE["SINGLE"] = 1] = "SINGLE";
      BULLET_TYPE[BULLET_TYPE["DOUBLE"] = 2] = "DOUBLE";
      BULLET_TYPE[BULLET_TYPE["ELECTRIC"] = 3] = "ELECTRIC";
      BULLET_TYPE[BULLET_TYPE["DRILL"] = 501] = "DRILL";
      BULLET_TYPE[BULLET_TYPE["LASER"] = 502] = "LASER";
      BULLET_TYPE[BULLET_TYPE["BLACK_HOLE"] = 504] = "BLACK_HOLE";
    })(BULLET_TYPE = exports.BULLET_TYPE || (exports.BULLET_TYPE = {}));
    var Fish_Bullet = function(_super) {
      __extends(Fish_Bullet, _super);
      function Fish_Bullet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.single = null;
        _this.double = null;
        _this.drill = null;
        _this.drillSpine = null;
        _this.pool = null;
        _this.onHitFishID = [];
        _this.hitFishID = [];
        _this.hitFishPos = [];
        _this.canMove = false;
        _this.data = null;
        _this.socket = null;
        _this.lockFish = null;
        _this.type = null;
        _this.skillID = "";
        _this.canHitWallTimes = -1;
        _this.canHitFishTimes = 1;
        _this.changeSpeed = 1;
        return _this;
      }
      Fish_Bullet.prototype.init = function(data) {
        this.canMove = true;
        this.canHitWallTimes = -1;
        this.canHitFishTimes = 1;
        this.changeSpeed = 1;
        this.belongPlayer = data.belongPlayer;
        this.moveDirection = data.moveDirection;
        this.lockFish = data.fish;
        this.lockFish && (this.data.lockingBulletMapping[data.fish.id] = this.node);
        this.produceTime = data.produceTime;
        this.createPosition = data.createPosition;
        this.skillID = data.skillID;
        this.anteType = data.anteType;
        this.rotate(this.moveDirection);
        this.node.setPosition(this.createPosition.add(this.moveDirection.mul(130)));
        this.getComponent(cc.BoxCollider).enabled = true;
        this.setType(data.type);
        this.onHitFishID = [];
        this.hitFishID = [];
        this.hitFishPos = [];
        this.type < 500 && (this.belongPlayer === this.data.selfSeatIdx ? AudioManager_1.AudioManager.instance.playAudioEvent("Self_BulletFire_" + this.type) : AudioManager_1.AudioManager.instance.playAudioEvent("Other_BulletFire_" + this.type));
      };
      Fish_Bullet.prototype.update = function(dt) {
        this.canMove && (this.hasLockFish() ? this.moveToLockFish(dt) : this.move(dt));
      };
      Fish_Bullet.prototype.reset = function() {
        this.canMove = false;
        this.cancelLock();
        this.getComponent(cc.BoxCollider).enabled = false;
        this.getComponent(cc.CircleCollider).enabled = false;
        this.node.active = false;
        this.pool.recovery(this.node);
      };
      Fish_Bullet.prototype.hasLockFish = function() {
        return null != this.lockFish;
      };
      Fish_Bullet.prototype.moveToLockFish = function(dt) {
        if (false == cc.isValid(this.lockFish) || this.lockFish.isDying) {
          this.cancelLock();
          return;
        }
        if (null == this.lockFish.getLockingPosition()) {
          this.cancelLock();
          return;
        }
        var _diffPosition = this.lockFish.getLockingPosition().sub(this.node.position);
        var c = Math.sqrt(Math.pow(this.moveDirection.x, 2) + Math.pow(this.moveDirection.y, 2));
        var d = Math.sqrt(Math.pow(_diffPosition.x, 2) + Math.pow(_diffPosition.y, 2));
        var mm = c / d;
        this.moveDirection = new cc.Vec2(mm * _diffPosition.x, mm * _diffPosition.y);
        var direction = new cc.Vec3(this.moveDirection.x * dt, this.moveDirection.y * dt, 0);
        direction = direction.mul(this.data.bulletSpeed * this.changeSpeed);
        var newPosition = this.node.position.add(direction);
        this.node.position = newPosition;
        this.rotate(this.moveDirection);
      };
      Fish_Bullet.prototype.move = function(dt) {
        var _moveTimeDifference = dt;
        var direction = new cc.Vec3(this.moveDirection.x * _moveTimeDifference, this.moveDirection.y * _moveTimeDifference, 0);
        direction = direction.mul(this.data.bulletSpeed * this.changeSpeed);
        var newPosition = this.node.position.add(direction);
        this.node.position = newPosition;
        if (this.isOutBound()) {
          this.turnDirection();
          this.bulletOffset();
          this.checkHitWallTimes();
        }
      };
      Fish_Bullet.prototype.isOutBound = function() {
        var width = this.data.designResolution.width;
        var hiegh = this.data.designResolution.height;
        if (this.node.position.x > width / 2 || this.node.position.y > hiegh / 2 || this.node.position.x < -width / 2 || this.node.position.y < -hiegh / 2) return true;
        return false;
      };
      Fish_Bullet.prototype.bulletOffset = function() {
        var width = this.data.designResolution.width;
        var hiegh = this.data.designResolution.height;
        var newPositionX = this.node.position.x;
        var newPositionY = this.node.position.y;
        this.node.position.x > width / 2 && (newPositionX = width / 2 - (this.node.position.x - width / 2));
        this.node.position.x < -width / 2 && (newPositionX = -width / 2 - (this.node.position.x + width / 2));
        this.node.position.y > hiegh / 2 && (newPositionY = hiegh / 2 - (this.node.position.y - hiegh / 2));
        this.node.position.y < -hiegh / 2 && (newPositionY = -hiegh / 2 - (this.node.position.y + hiegh / 2));
        this.node.setPosition(new cc.Vec2(newPositionX, newPositionY));
      };
      Fish_Bullet.prototype.turnDirection = function() {
        var width = this.data.designResolution.width;
        var hiegh = this.data.designResolution.height;
        var newDirection = new cc.Vec2(this.moveDirection.x, this.moveDirection.y);
        (this.node.position.x > width / 2 || this.node.position.x < -width / 2) && (newDirection.x = -this.moveDirection.x);
        (this.node.position.y > hiegh / 2 || this.node.position.y < -hiegh / 2) && (newDirection.y = -this.moveDirection.y);
        var newMoveDirection = newDirection;
        this.moveDirection = newMoveDirection;
        this.rotate(this.moveDirection);
      };
      Fish_Bullet.prototype.checkHitWallTimes = function() {};
      Fish_Bullet.prototype.rotate = function(moveDirection) {
        var x = moveDirection.x;
        var y = moveDirection.y;
        var angel = Math.atan2(x, y) / Math.PI * 180;
        this.node.angle = -angel;
      };
      Fish_Bullet.prototype.explosion = function() {
        if (-1 === this.canHitFishTimes) return;
        this.canHitFishTimes--;
        0 === this.canHitFishTimes && this.reset();
      };
      Fish_Bullet.prototype.onCollisionEnter = function(other, self) {
        if (false === this.node.active) return;
        if (this.data.isDisconnected || this.data.isLeaving) return;
        var fishNode = this.findFishNode(other.node);
        if (this.hasLockFish() && fishNode.uuid !== this.lockFish.node.uuid) return;
        var fish = fishNode.getComponent(Fish_Fish_1.Fish_Fish);
        if (this.onHitFishID.includes(fish.id)) return;
        if (fish.isDying) return;
        this.onHitFishID.push(fish.id);
        this.hitFishID.push(fish.id);
        fish.onHit();
        var lockPosition = fish.getLockingPosition(true);
        var requestPosition = this.colliderPositionTranspose(new cc.Vec2(lockPosition.x, lockPosition.y), fish.isDragon());
        this.hitFishPos.push([ requestPosition.x, requestPosition.y ]);
        var worldPosition = other.node.parent.convertToWorldSpaceAR(other.node.position);
        var canvasPosition = cc.Canvas.instance.node.convertToNodeSpaceAR(worldPosition);
        cc.systemEvent.emit("bulletHit", new cc.Vec2(canvasPosition.x, canvasPosition.y), this.type === BULLET_TYPE.DOUBLE, this.belongPlayer === this.data.selfSeatIdx);
        this.explosion();
        if (this.belongPlayer === this.data.selfSeatIdx && this.type !== BULLET_TYPE.LASER && this.type !== BULLET_TYPE.BLACK_HOLE) {
          var requestData = {
            anteType: this.anteType,
            fishIds: this.hitFishID,
            skillId: this.skillID,
            skillType: this.type < BULLET_TYPE.DRILL ? 0 : this.type,
            positions: this.hitFishPos,
            payload: "",
            roundToken: this.data.playersData[this.data.selfSeatIdx].roundToken
          };
          this.hit(requestData);
          this.hitFishID = [];
          this.hitFishPos = [];
        }
        AudioManager_1.AudioManager.instance.playAudioEvent("BulletHit");
      };
      Fish_Bullet.prototype.onCollisionExit = function(other, self) {
        var fish = this.findFishNode(other.node).getComponent(Fish_Fish_1.Fish_Fish);
        this.onHitFishID = this.onHitFishID.filter(function(item) {
          return item != fish.id;
        });
      };
      Fish_Bullet.prototype.findFishNode = function(node) {
        return node.getComponent(Fish_Fish_1.Fish_Fish) ? node : this.findFishNode(node.parent);
      };
      Fish_Bullet.prototype.hit = function(data) {
        this.belongPlayer === this.data.selfSeatIdx ? AudioManager_1.AudioManager.instance.playAudioEvent("Self_BulletHit_" + this.type) : AudioManager_1.AudioManager.instance.playAudioEvent("Other_BulletHit_" + this.type);
        this.socket.hit(data);
      };
      Fish_Bullet.prototype.cancelLock = function() {
        this.lockFish && this.data.lockingBulletMapping[this.lockFish.id] && delete this.data.lockingBulletMapping[this.lockFish.id];
        this.lockFish = null;
      };
      Fish_Bullet.prototype.colliderPositionTranspose = function(position, isDragon) {
        void 0 === isDragon && (isDragon = false);
        var newPosition = new cc.Vec2(position.x, position.y);
        if (this.data.flipMode == Fish_DataManager_1.FlipMode.LeftRight) newPosition.x = -position.x; else if (this.data.flipMode == Fish_DataManager_1.FlipMode.UpDown) isDragon || (newPosition.y = -position.y); else if (this.data.flipMode == Fish_DataManager_1.FlipMode.UpDown_LeftRight) {
          newPosition.x = -position.x;
          isDragon || (newPosition.y = -position.y);
        }
        return newPosition;
      };
      Fish_Bullet.prototype.setType = function(type) {};
      Fish_Bullet.prototype.sendAllHit = function(type) {
        var requestData = {
          anteType: this.anteType,
          fishIds: this.hitFishID,
          skillId: this.skillID,
          skillType: type,
          positions: this.hitFishPos,
          payload: "",
          roundToken: this.data.playersData[this.data.selfSeatIdx].roundToken
        };
        this.hit(requestData);
        this.reset();
      };
      __decorate([ property(cc.Node) ], Fish_Bullet.prototype, "single", void 0);
      __decorate([ property(cc.Node) ], Fish_Bullet.prototype, "double", void 0);
      __decorate([ property(cc.Node) ], Fish_Bullet.prototype, "drill", void 0);
      __decorate([ property(sp.Skeleton) ], Fish_Bullet.prototype, "drillSpine", void 0);
      Fish_Bullet = __decorate([ ccclass ], Fish_Bullet);
      return Fish_Bullet;
    }(cc.Component);
    exports.default = Fish_Bullet;
    cc._RF.pop();
  }, {
    "../../Common/Tools/AudioManager/AudioManager": void 0,
    "../Common/Manager/Fish_DataManager": "Fish_DataManager",
    "./Fish_Fish": "Fish_Fish"
  } ],
  Fish_CarryMoneyEnterPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87888eLsixKio2qq501TJ8V", "Fish_CarryMoneyEnterPanel");
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
    exports.Fish_CarryMoneyEnterPanel = void 0;
    var CarryMoneyEnterPanel_1 = require("../../../Common/Tools/CarryMoney/CarryMoneyEnterPanel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_CarryMoneyEnterPanel = function(_super) {
      __extends(Fish_CarryMoneyEnterPanel, _super);
      function Fish_CarryMoneyEnterPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.enoughNode = null;
        _this.notEnoughNode = null;
        return _this;
      }
      Fish_CarryMoneyEnterPanel.prototype.onEnable = function() {
        _super.prototype.onEnable.call(this);
        this.useDefaultToggle.isChecked = true;
      };
      Fish_CarryMoneyEnterPanel.prototype.showWalletTotalLowerThanRequire = function() {
        _super.prototype.showWalletTotalLowerThanRequire.call(this);
        this.enoughNode.active = false;
        this.notEnoughNode.active = true;
      };
      Fish_CarryMoneyEnterPanel.prototype.showEnough = function() {
        _super.prototype.showEnough.call(this);
        this.enoughNode.active = true;
        this.notEnoughNode.active = false;
      };
      __decorate([ property(cc.Node) ], Fish_CarryMoneyEnterPanel.prototype, "enoughNode", void 0);
      __decorate([ property(cc.Node) ], Fish_CarryMoneyEnterPanel.prototype, "notEnoughNode", void 0);
      Fish_CarryMoneyEnterPanel = __decorate([ ccclass ], Fish_CarryMoneyEnterPanel);
      return Fish_CarryMoneyEnterPanel;
    }(CarryMoneyEnterPanel_1.CarryMoneyEnterPanel);
    exports.Fish_CarryMoneyEnterPanel = Fish_CarryMoneyEnterPanel;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/CarryMoney/CarryMoneyEnterPanel": void 0
  } ],
  Fish_CarryMoneyInfoPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8cbdfMN28lGwIyS/yqGH6OM", "Fish_CarryMoneyInfoPanel");
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
    exports.Fish_CarryMoneyInfoPanel = void 0;
    var CarryMoneyInfoPanel_1 = require("../../../Common/Tools/CarryMoney/CarryMoneyInfoPanel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_CarryMoneyInfoPanel = function(_super) {
      __extends(Fish_CarryMoneyInfoPanel, _super);
      function Fish_CarryMoneyInfoPanel() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_CarryMoneyInfoPanel = __decorate([ ccclass ], Fish_CarryMoneyInfoPanel);
      return Fish_CarryMoneyInfoPanel;
    }(CarryMoneyInfoPanel_1.CarryMoneyInfoPanel);
    exports.Fish_CarryMoneyInfoPanel = Fish_CarryMoneyInfoPanel;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/CarryMoney/CarryMoneyInfoPanel": void 0
  } ],
  Fish_CoinPool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "44a1aCa5aNK47zLLrm8Y6qj", "Fish_CoinPool");
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
    exports.Fish_CoinPool = void 0;
    var Fish_BasePool_1 = require("./Fish_BasePool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_CoinPool = function(_super) {
      __extends(Fish_CoinPool, _super);
      function Fish_CoinPool() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_CoinPool = __decorate([ ccclass ], Fish_CoinPool);
      return Fish_CoinPool;
    }(Fish_BasePool_1.Fish_BasePool);
    exports.Fish_CoinPool = Fish_CoinPool;
    cc._RF.pop();
  }, {
    "./Fish_BasePool": "Fish_BasePool"
  } ],
  Fish_ConfirmDialogBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a19261tAhMkpw/5ZJQ/6Lm", "Fish_ConfirmDialogBox");
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
    exports.Fish_ConfirmDialogBox = void 0;
    var BaseConfirmDialogBox_1 = require("../../../Common/Tools/DynamicPopUp/DialogBox/BaseConfirmDialogBox");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_ConfirmDialogBox = function(_super) {
      __extends(Fish_ConfirmDialogBox, _super);
      function Fish_ConfirmDialogBox() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_ConfirmDialogBox.prototype.show = function(msg, callback, align) {
        void 0 === callback && (callback = null);
        void 0 === align && (align = cc.macro.TextAlignment.CENTER);
        if (this.msgRichTxt.string === msg && this.node.active) return;
        _super.prototype.show.call(this, msg, callback, align);
      };
      Fish_ConfirmDialogBox = __decorate([ ccclass ], Fish_ConfirmDialogBox);
      return Fish_ConfirmDialogBox;
    }(BaseConfirmDialogBox_1.default);
    exports.Fish_ConfirmDialogBox = Fish_ConfirmDialogBox;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/DynamicPopUp/DialogBox/BaseConfirmDialogBox": void 0
  } ],
  Fish_DataManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "340bcFZFftANb8fVuYrNr80", "Fish_DataManager");
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
    exports.FlipMode = void 0;
    var BaseDataManager_1 = require("../../../Common/Tools/Base/BaseDataManager");
    var FlipMode;
    (function(FlipMode) {
      FlipMode[FlipMode["UpDown_LeftRight"] = 0] = "UpDown_LeftRight";
      FlipMode[FlipMode["UpDown"] = 1] = "UpDown";
      FlipMode[FlipMode["LeftRight"] = 2] = "LeftRight";
      FlipMode[FlipMode["None"] = 3] = "None";
    })(FlipMode = exports.FlipMode || (exports.FlipMode = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_DataManager = function(_super) {
      __extends(Fish_DataManager, _super);
      function Fish_DataManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bulletSpeed = 2500;
        _this.bulletMaxCount = 20;
        _this.autoGameHitFishType = [];
        _this.fireCD = [ .2, .2, .1 ];
        _this.flipMode = FlipMode.None;
        _this.autoFire = false;
        _this.isLock = false;
        _this.isAutoGame = false;
        _this.lockFishID = "";
        _this.selfSeatIdx = 1;
        _this.roundId = null;
        _this.playersData = [];
        _this.cannonsAngleRange = 90;
        _this.cannonsPosition = [ new cc.Vec2(-320, 320), new cc.Vec2(320, 320), new cc.Vec2(-320, -320), new cc.Vec2(320, -320) ];
        _this.lockAreaOffset = new cc.Vec2(0, 0);
        _this.nowBG = 0;
        _this._designResolution = new cc.Vec2(1280, 720);
        _this.blurTime = null;
        _this.focusTime = null;
        _this.fishConfig = null;
        _this.fishOdds = {};
        _this.roomAntes = [];
        _this.isDisconnected = false;
        _this.isLeaving = false;
        _this.skillID = "";
        _this.isKickedOut = false;
        _this.fishMapping = {};
        _this.lockingBulletMapping = {};
        _this.blackHolePositionMapping = {};
        _this.lockFishTipMapping = {};
        _this.skillAnteType = 0;
        return _this;
      }
      Object.defineProperty(Fish_DataManager.prototype, "designResolution", {
        get: function() {
          var visibleSize = cc.view.getVisibleSize();
          visibleSize.width > 1680 && (visibleSize.width = 1680);
          visibleSize.height > 720 && (visibleSize.height = 720);
          return visibleSize;
        },
        enumerable: false,
        configurable: true
      });
      Fish_DataManager.prototype.init = function() {
        _super.prototype.init.call(this);
        this.initFishOdds();
      };
      Fish_DataManager.prototype.initFishOdds = function() {
        cc.error("\u8acb\u8907\u5beb\u81ea\u5df1\u9b5a\u7684\u500d\u7387\uff0c\u53c3\u8003G61");
      };
      Fish_DataManager.LOADING_UI_NODE = null;
      Fish_DataManager = __decorate([ ccclass ], Fish_DataManager);
      return Fish_DataManager;
    }(BaseDataManager_1.default);
    exports.default = Fish_DataManager;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/Base/BaseDataManager": void 0
  } ],
  Fish_DeadEffectPool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68505lYy0xJ/bc+siy+kqgt", "Fish_DeadEffectPool");
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
    exports.Fish_DeadEffectPool = void 0;
    var Fish_BasePool_1 = require("./Fish_BasePool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_DeadEffectPool = function(_super) {
      __extends(Fish_DeadEffectPool, _super);
      function Fish_DeadEffectPool() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_DeadEffectPool.prototype.reUse = function() {
        var _this = this;
        var obj = null;
        if (this.pool.size() <= 0) {
          obj = cc.instantiate(this.prefab);
          obj.children.forEach(function(child) {
            var animation = child.getComponent(cc.Animation);
            null === animation || void 0 === animation ? void 0 : animation.on("finished", function() {
              obj.removeFromParent();
              _this.recovery(obj);
            }, _this);
          });
          this.pool.put(obj);
        }
        obj = this.pool.get();
        obj.active = true;
        return obj;
      };
      Fish_DeadEffectPool = __decorate([ ccclass ], Fish_DeadEffectPool);
      return Fish_DeadEffectPool;
    }(Fish_BasePool_1.Fish_BasePool);
    exports.Fish_DeadEffectPool = Fish_DeadEffectPool;
    cc._RF.pop();
  }, {
    "./Fish_BasePool": "Fish_BasePool"
  } ],
  Fish_DynamicPopUpManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f59e7XwLLpNfbK3117KZZ9s", "Fish_DynamicPopUpManager");
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
    exports.Fish_DynamicPopUpManager = void 0;
    var BaseDynamicPopUpManager_1 = require("../../../Common/Tools/Base/BaseDynamicPopUpManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_DynamicPopUpManager = function(_super) {
      __extends(Fish_DynamicPopUpManager, _super);
      function Fish_DynamicPopUpManager() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_DynamicPopUpManager = __decorate([ ccclass ], Fish_DynamicPopUpManager);
      return Fish_DynamicPopUpManager;
    }(BaseDynamicPopUpManager_1.default);
    exports.Fish_DynamicPopUpManager = Fish_DynamicPopUpManager;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/Base/BaseDynamicPopUpManager": void 0
  } ],
  Fish_FishEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10d06X9kQBHho+Mek0dDrfE", "Fish_FishEffect");
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
    var STATUS;
    (function(STATUS) {
      STATUS[STATUS["IDLE"] = 0] = "IDLE";
      STATUS[STATUS["FADEOUT"] = 1] = "FADEOUT";
      STATUS[STATUS["BEINGHIT"] = 2] = "BEINGHIT";
    })(STATUS || (STATUS = {}));
    var Fish_FishEffect = function(_super) {
      __extends(Fish_FishEffect, _super);
      function Fish_FishEffect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.useMaterial = null;
        _this.material = null;
        _this.status = STATUS.IDLE;
        _this.fadeoutTime = 1;
        _this.tempfadeoutTime = 0;
        _this.beingHitTime = .125;
        _this.intensity = 5;
        _this.halfBeingHitTime = 0;
        _this.tempbeingHitTime = 0;
        _this.testMode = false;
        _this.testTempValue = 0;
        return _this;
      }
      Fish_FishEffect.prototype.start = function() {
        this.getComponent(sp.Skeleton) ? this.material = this.getComponent(sp.Skeleton).setMaterial(0, this.useMaterial) : this.getComponent(cc.Sprite) && (this.material = this.getComponent(cc.Sprite).setMaterial(0, this.useMaterial));
        this.halfBeingHitTime = this.beingHitTime / 2;
      };
      Fish_FishEffect.prototype.update = function(dt) {
        if (this.testMode) {
          this.testTempValue += dt;
          if (this.testTempValue >= this.beingHitTime + .1) {
            this.testTempValue = 0;
            this.playBeingHit();
          }
        }
        if (this.status == STATUS.IDLE) return;
        if (this.status == STATUS.BEINGHIT) {
          this.tempbeingHitTime += dt;
          this.tempbeingHitTime > this.beingHitTime ? this.reset() : this.beingHit();
        } else if (this.status == STATUS.FADEOUT) {
          this.tempfadeoutTime += dt;
          this.tempfadeoutTime > this.fadeoutTime ? this.reset() : this.fadeOut();
        }
      };
      Fish_FishEffect.prototype.beingHit = function() {
        var _offsetValue = 0;
        _offsetValue = this.tempbeingHitTime < this.halfBeingHitTime ? this.tempbeingHitTime / this.halfBeingHitTime : 1 - (this.tempbeingHitTime - this.halfBeingHitTime) / this.halfBeingHitTime;
        var _value = 1 + _offsetValue * this.intensity;
        this.material.setProperty("intensity", _value);
      };
      Fish_FishEffect.prototype.fadeOut = function() {
        var _value = 1 - this.tempfadeoutTime / this.fadeoutTime;
        this.material.setProperty("intensity", _value);
      };
      Fish_FishEffect.prototype.playBeingHit = function() {
        this.status = STATUS.BEINGHIT;
        this.tempbeingHitTime = 0;
      };
      Fish_FishEffect.prototype.playFadeOut = function(duration) {
        this.status = STATUS.FADEOUT;
        this.fadeoutTime = duration;
        this.tempfadeoutTime = 0;
      };
      Fish_FishEffect.prototype.effectStop = function() {
        cc.isValid(this.material) && this.material.setProperty("intensity", 1);
      };
      Fish_FishEffect.prototype.reset = function() {
        this.status = STATUS.IDLE;
        this.effectStop();
      };
      __decorate([ property(cc.Material) ], Fish_FishEffect.prototype, "useMaterial", void 0);
      Fish_FishEffect = __decorate([ ccclass ], Fish_FishEffect);
      return Fish_FishEffect;
    }(cc.Component);
    exports.default = Fish_FishEffect;
    cc._RF.pop();
  }, {} ],
  Fish_FishPool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "09a43l0CVVFj67qxT2+i6Fc", "Fish_FishPool");
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
    exports.Fish_FishPool = void 0;
    var Fish_Fish_1 = require("../../Game/Fish_Fish");
    var Fish_BasePool_1 = require("./Fish_BasePool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_FishPool = function(_super) {
      __extends(Fish_FishPool, _super);
      function Fish_FishPool() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_FishPool.prototype.reUseFish = function(fishType) {
        var obj = null;
        if (this.pool.size() <= 0) {
          obj = cc.instantiate(this.prefab);
          this.pool.put(obj);
        }
        obj = this.pool.get();
        this.setFishType(obj, fishType);
        return obj;
      };
      Fish_FishPool.prototype.setFishType = function(obj, fishType) {
        obj.getComponent(Fish_Fish_1.Fish_Fish).fishType = fishType;
      };
      Fish_FishPool = __decorate([ ccclass ], Fish_FishPool);
      return Fish_FishPool;
    }(Fish_BasePool_1.Fish_BasePool);
    exports.Fish_FishPool = Fish_FishPool;
    cc._RF.pop();
  }, {
    "../../Game/Fish_Fish": "Fish_Fish",
    "./Fish_BasePool": "Fish_BasePool"
  } ],
  Fish_Fish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2c413pNrS9Oj7UiS1a7SfRl", "Fish_Fish");
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
    exports.Fish_Fish = exports.Fish_BoxCollider = exports.FISH_TYPE = void 0;
    var FXController_1 = require("../../Common/Optional/Crosis/FXController/FXController");
    var AudioManager_1 = require("../../Common/Tools/AudioManager/AudioManager");
    var CommonTool_1 = require("../../Common/Tools/CommonTool");
    var LocalizationManager_1 = require("../../Common/Tools/Localization/LocalizationManager");
    var Fish_DataManager_1 = require("../Common/Manager/Fish_DataManager");
    var Fish_FishEffect_1 = require("./Fish_FishEffect");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
    var FISH_TYPE;
    (function(FISH_TYPE) {
      FISH_TYPE[FISH_TYPE["S1"] = 101] = "S1";
      FISH_TYPE[FISH_TYPE["S2"] = 102] = "S2";
      FISH_TYPE[FISH_TYPE["S3"] = 103] = "S3";
      FISH_TYPE[FISH_TYPE["S4"] = 104] = "S4";
      FISH_TYPE[FISH_TYPE["S5"] = 105] = "S5";
      FISH_TYPE[FISH_TYPE["S6"] = 106] = "S6";
      FISH_TYPE[FISH_TYPE["S7"] = 107] = "S7";
      FISH_TYPE[FISH_TYPE["S8"] = 108] = "S8";
      FISH_TYPE[FISH_TYPE["S9"] = 109] = "S9";
      FISH_TYPE[FISH_TYPE["S10"] = 110] = "S10";
      FISH_TYPE[FISH_TYPE["S11"] = 111] = "S11";
      FISH_TYPE[FISH_TYPE["S12"] = 112] = "S12";
      FISH_TYPE[FISH_TYPE["M1"] = 201] = "M1";
      FISH_TYPE[FISH_TYPE["M2"] = 202] = "M2";
      FISH_TYPE[FISH_TYPE["M3"] = 203] = "M3";
      FISH_TYPE[FISH_TYPE["M4"] = 204] = "M4";
      FISH_TYPE[FISH_TYPE["M5"] = 205] = "M5";
      FISH_TYPE[FISH_TYPE["M6"] = 206] = "M6";
      FISH_TYPE[FISH_TYPE["M7"] = 207] = "M7";
      FISH_TYPE[FISH_TYPE["L1"] = 301] = "L1";
      FISH_TYPE[FISH_TYPE["L2"] = 302] = "L2";
      FISH_TYPE[FISH_TYPE["L3"] = 303] = "L3";
      FISH_TYPE[FISH_TYPE["B1"] = 401] = "B1";
      FISH_TYPE[FISH_TYPE["B2"] = 402] = "B2";
      FISH_TYPE[FISH_TYPE["B3"] = 403] = "B3";
      FISH_TYPE[FISH_TYPE["CRAZY_DRILL"] = 501] = "CRAZY_DRILL";
      FISH_TYPE[FISH_TYPE["PARTICLE_LASER"] = 502] = "PARTICLE_LASER";
      FISH_TYPE[FISH_TYPE["SUPER_BOMB"] = 503] = "SUPER_BOMB";
      FISH_TYPE[FISH_TYPE["BLACK_HOLE"] = 504] = "BLACK_HOLE";
      FISH_TYPE[FISH_TYPE["POWER_OF_THOR"] = 505] = "POWER_OF_THOR";
      FISH_TYPE[FISH_TYPE["LUCKY_REEL"] = 506] = "LUCKY_REEL";
      FISH_TYPE[FISH_TYPE["JACKPOT"] = 666] = "JACKPOT";
    })(FISH_TYPE = exports.FISH_TYPE || (exports.FISH_TYPE = {}));
    var Fish_BoxCollider = function() {
      function Fish_BoxCollider() {
        this.node = null;
        this.weighting = 0;
      }
      __decorate([ property(cc.Node) ], Fish_BoxCollider.prototype, "node", void 0);
      __decorate([ property() ], Fish_BoxCollider.prototype, "weighting", void 0);
      Fish_BoxCollider = __decorate([ ccclass("Fish_BoxCollider") ], Fish_BoxCollider);
      return Fish_BoxCollider;
    }();
    exports.Fish_BoxCollider = Fish_BoxCollider;
    var Fish_Fish = function(_super) {
      __extends(Fish_Fish, _super);
      function Fish_Fish() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.fishType = null;
        _this.id = null;
        _this.ratio = null;
        _this.offset = [ 0, 0 ];
        _this.bornTime = null;
        _this.defaultScale = .5;
        _this.pathScenario = null;
        _this.isInitialed = false;
        _this.isMoving = false;
        _this.isDying = false;
        _this.isGettingOut = false;
        _this.isLocking = false;
        _this.isOut = false;
        _this.isPending = false;
        _this.isPausing = false;
        _this.currentTime = null;
        _this.currentPath = null;
        _this.currentMovementData = null;
        _this.pool = null;
        _this.overTime = null;
        _this.data = null;
        _this.ratioObj = null;
        _this.swimFX = null;
        _this.playingTimeScale = 1;
        _this.currentAnimationName = null;
        _this.boxColliders = [];
        _this.bubbleEffect = null;
        _this.bonesFXNode = [];
        return _this;
      }
      Fish_Fish.prototype.onLoad = function() {
        this.initBubble();
      };
      Fish_Fish.prototype.onEnable = function() {
        this.registerEvent();
      };
      Fish_Fish.prototype.onDisable = function() {
        this.unregisterEvent();
      };
      Fish_Fish.prototype.update = function(dt) {
        this.overTime = null;
        if (this.isPausing) return;
        if (this.isInitialed && this.isMoving) {
          this.rotate(dt);
          this.move(dt);
        }
        this.isLocking && this.showRatio();
      };
      Fish_Fish.prototype.registerEvent = function() {
        var _this = this;
        this.boxColliders.forEach(function(boxCollider) {
          var _a;
          null === (_a = boxCollider.node) || void 0 === _a ? void 0 : _a.on(cc.Node.EventType.MOUSE_ENTER, _this.showRatio, _this);
        });
      };
      Fish_Fish.prototype.unregisterEvent = function() {
        var _this = this;
        this.boxColliders.forEach(function(boxCollider) {
          var _a;
          null === (_a = boxCollider.node) || void 0 === _a ? void 0 : _a.off(cc.Node.EventType.MOUSE_ENTER, _this.showRatio, _this);
        });
      };
      Fish_Fish.prototype.initBubble = function() {};
      Fish_Fish.prototype.setPool = function(pool) {
        this.pool = pool;
      };
      Fish_Fish.prototype.init = function(id, ratio) {
        this.id = id;
        this.ratio = ratio;
        this.isInitialed = true;
      };
      Fish_Fish.prototype.reset = function() {
        this.id = null;
        this.ratio = null;
        this.bornTime = null;
        this.pathScenario = null;
        this.currentPath = null;
        this.isInitialed = false;
        this.isMoving = false;
        this.isPending = false;
        this.isPausing = false;
        this.isDying = false;
        this.isGettingOut = false;
        this.isLocking = false;
        this.isOut = false;
        this.currentTime = null;
        this.currentAnimationName = null;
        this.currentMovementData = null;
        this.node.opacity = 255;
        this.playingTimeScale = 1;
        this.node.scaleX = this.node.scaleY = this.defaultScale;
        this.node.active = false;
        if (this.swimFX) {
          var fxController = this.swimFX.getComponent(FXController_1.default);
          fxController.stop();
          this.swimFX = null;
        }
        this.data.fishMapping[this.id] && delete this.data.fishMapping[this.id];
        this.bubbleEffect && (this.bubbleEffect.active = false);
        this.ratioObj && this.hideRatio();
        this.node.getComponent(Fish_FishEffect_1.default).reset();
        this.pool.recovery(this.node);
      };
      Fish_Fish.prototype.startMoving = function(timeStamp, pathIndex, offset) {
        void 0 === timeStamp && (timeStamp = this.bornTime);
        void 0 === pathIndex && (pathIndex = this.currentPath);
        void 0 === offset && (offset = this.offset);
        this.node.active = true;
        this.offset = offset;
        if (this.isOut) {
          this.reset();
          return;
        }
        this.currentPath = pathIndex;
        this.bornTime = timeStamp;
        this.findData(timeStamp, pathIndex);
        if (!this.currentMovementData) {
          this.reset();
          return;
        }
        this.resume();
        this.syncSpineFrame(timeStamp, pathIndex);
        this.syncSwimFX(timeStamp);
        this.isMoving = true;
      };
      Fish_Fish.prototype.findData = function(timeStamp, pathIndex) {
        var _this = this;
        var goneTime = this.data.nowTime - timeStamp / 1e3;
        var path = this.pathScenario[pathIndex];
        var timeCount = 0;
        var gotTheTarget = false;
        var xy = [ 0, 0 ];
        var onFocus = !!this.currentMovementData;
        this.currentMovementData = null;
        this.currentTime = 0;
        var angle = 0;
        for (var i = 0, length = path.length; i < length; i++) {
          var item = path[i];
          if (gotTheTarget) {
            this.currentMovementData = JSON.parse(JSON.stringify(item));
            this.setOffset();
            this.currentTime = 0;
            break;
          }
          var radian = this.getRadian(item.d, item.f, item.t);
          var tempAngle = 180 / Math.PI * radian * item.r;
          angle = tempAngle || angle;
          if (timeCount + item.m < goneTime) timeCount += item.m; else if (timeCount + item.m === goneTime) {
            gotTheTarget = true;
            xy = [ item.t.x + this.offset[0], item.t.y + this.offset[1] ];
            this.node.setPosition(xy[0], xy[1]);
            this.node.angle = angle;
          } else if (timeCount + item.m > goneTime) {
            xy = [ item.f.x + this.offset[0], item.f.y + this.offset[1] ];
            this.currentMovementData = JSON.parse(JSON.stringify(item));
            this.setOffset();
            var movement_x = (this.currentMovementData.t.x - this.currentMovementData.f.x) / this.currentMovementData.m * (goneTime - timeCount);
            var movement_y = (this.currentMovementData.t.y - this.currentMovementData.f.y) / this.currentMovementData.m * (goneTime - timeCount);
            xy = [ xy[0] + movement_x, xy[1] + movement_y ];
            this.currentTime = goneTime - timeCount;
            this.node.setPosition(xy[0], xy[1]);
            this.node.angle = angle;
            break;
          }
        }
        if (this.currentMovementData && this.fishType > 300 && this.fishType < 500 && !onFocus) {
          var position_1 = this.node.position;
          this.bonesFXNode.forEach(function(node) {
            return node.active = false;
          });
          this.isDragon() && (this.node.x = 5e3);
          this.scheduleOnce(function() {
            _this.bonesFXNode.forEach(function(node) {
              return node.active = true;
            });
            _this.isDragon() && _this.node.setPosition(position_1);
          }, 2);
        }
      };
      Fish_Fish.prototype.setOffset = function() {
        this.currentMovementData.t.x += this.offset[0];
        this.currentMovementData.f.x += this.offset[0];
        this.currentMovementData.t.y += this.offset[1];
        this.currentMovementData.f.y += this.offset[1];
      };
      Fish_Fish.prototype.syncSpineFrame = function(timeStamp, path) {};
      Fish_Fish.prototype.setSpineAnimation = function(spine, animation, timeStamp, path) {};
      Fish_Fish.prototype.syncSwimFX = function(timeStamp) {};
      Fish_Fish.prototype.isDragon = function() {
        return this.fishType === FISH_TYPE.L3 || this.fishType === FISH_TYPE.B3;
      };
      Fish_Fish.prototype.move = function(dt) {
        if (!this.currentMovementData) return;
        this.checkTheDirection(this.currentMovementData.d) ? this.node.scaleX = Math.abs(this.node.scaleX) : this.node.scaleX = -Math.abs(this.node.scaleX);
        this.data.flipMode === Fish_DataManager_1.FlipMode.UpDown || this.data.flipMode === Fish_DataManager_1.FlipMode.UpDown_LeftRight ? this.node.scaleY = -Math.abs(this.node.scaleY) : this.node.scaleY = Math.abs(this.node.scaleY);
        if (this.checkThePoint() && this.changeData()) return;
        this.calcuteTime(dt);
        this.changePosition(dt);
        this.ratioObj && this.showRatio();
        this.overTime && this.update(this.overTime);
      };
      Fish_Fish.prototype.changeData = function() {
        if (this.currentMovementData.i === this.pathScenario[this.currentPath].length - 1 || this.isOut) {
          this.stop();
          return true;
        }
        this.currentTime = 0;
        this.isPending = false;
        this.currentMovementData = JSON.parse(JSON.stringify(this.pathScenario[this.currentPath][this.currentMovementData.i + 1]));
        this.setOffset();
      };
      Fish_Fish.prototype.calcuteTime = function(dt) {
        this.currentTime += dt;
        if (this.currentTime > this.currentMovementData.m) {
          this.overTime = this.currentTime - this.currentMovementData.m;
          this.currentTime = this.currentMovementData.m;
        }
      };
      Fish_Fish.prototype.changePosition = function(dt) {
        var movement_x = (this.currentMovementData.t.x - this.currentMovementData.f.x) / this.currentMovementData.m * dt;
        var movement_y = (this.currentMovementData.t.y - this.currentMovementData.f.y) / this.currentMovementData.m * dt;
        if (this.isGettingOut && !this.isOut) {
          if (this.isDragon()) this.reset(); else {
            this.getOutProcess(movement_x, movement_y, dt);
            this.changePosition(dt);
          }
          return;
        }
        if (!movement_x && !movement_y) {
          this.isPending = true;
          return;
        }
        var target_x = this.node.x + movement_x;
        var target_y = this.node.y + movement_y;
        movement_x < 0 ? target_x < this.currentMovementData.t.x && (target_x = this.currentMovementData.t.x) : target_x > this.currentMovementData.t.x && (target_x = this.currentMovementData.t.x);
        movement_y < 0 ? target_y < this.currentMovementData.t.y && (target_y = this.currentMovementData.t.y) : target_y > this.currentMovementData.t.y && (target_y = this.currentMovementData.t.y);
        this.node.setPosition(target_x, target_y);
      };
      Fish_Fish.prototype.getOutProcess = function(xOffset, yOffset, dt) {};
      Fish_Fish.prototype.checkThePoint = function() {
        return this.currentTime === this.currentMovementData.m;
      };
      Fish_Fish.prototype.checkTheDirection = function(direction) {
        return !direction;
      };
      Fish_Fish.prototype.rotate = function(dt) {
        if (this.isPending || !this.currentMovementData) return;
        var radian = this.getRadian(this.currentMovementData.d, this.currentMovementData.f, this.currentMovementData.t);
        var angle = 180 / Math.PI * radian - this.node.angle % 360;
        Math.abs(angle) > 180 && (angle = angle > 0 ? -(360 - Math.abs(angle)) : 360 - Math.abs(angle));
        var movement_angle = angle / this.currentMovementData.m * dt * this.currentMovementData.r;
        this.node.angle += movement_angle;
      };
      Fish_Fish.prototype.getRadian = function(direction, from, to) {
        var retVal;
        retVal = direction ? Math.atan2(to.y - from.y, to.x - from.x) : Math.atan2(from.y - to.y, from.x - to.x);
        return retVal;
      };
      Fish_Fish.prototype.stop = function() {
        this.fishType > 400 && this.fishType < 500 && AudioManager_1.AudioManager.instance.playAudioEvent("Boss_Leave_" + this.data.nowBG);
        this.reset();
      };
      Fish_Fish.prototype.pause = function() {};
      Fish_Fish.prototype.resume = function() {};
      Fish_Fish.prototype.dead = function(skillType, data) {
        var _this = this;
        this.playDeadAudio(skillType);
        this.isDying = true;
        this.ratioObj && this.hideRatio();
        this.pause();
        if (this.fishType > 300 && this.fishType < 500) {
          this.fadeOut(1);
          this.swimFX && (this.swimFX.active = false);
          this.scheduleOnce(this.reset, .9);
        } else {
          var scaleX = this.node.scaleX;
          var scaleY = this.node.scaleY;
          cc.tween(this.node).to(.1, {
            scaleX: 1.4 * scaleX,
            scaleY: 1.4 * scaleY
          }).by(.05, {
            angle: -7,
            scaleX: .1 * -scaleX,
            scaleY: .1 * -scaleY
          }).by(.1, {
            angle: 14,
            scaleX: .2 * -scaleX,
            scaleY: .2 * -scaleY
          }).by(.1, {
            angle: -14,
            scaleX: .2 * -scaleX,
            scaleY: .2 * -scaleY
          }).by(.1, {
            angle: 14,
            scaleX: .2 * -scaleX,
            scaleY: .2 * -scaleY
          }).by(.05, {
            angle: -7,
            scaleX: .1 * -scaleX,
            scaleY: .1 * -scaleY
          }).call(function() {
            return _this.reset();
          }).start();
        }
      };
      Fish_Fish.prototype.playDeadAudio = function(skillType) {
        var audioEventName = "";
        this.fishType < 200 ? audioEventName = "SmallFish_Dead" : this.fishType < 300 ? audioEventName = "MidFish_Dead" : this.fishType < 400 ? audioEventName = "BigFish_Dead" : this.fishType < 500 ? audioEventName = "BossFish_Dead" : this.fishType < 600 && (audioEventName = "SpecialFish_Dead");
        0 != skillType && (audioEventName += "_Special");
        AudioManager_1.AudioManager.instance.playAudioEvent(audioEventName);
      };
      Fish_Fish.prototype.deadInBlackHole = function(blackHoleSkillId, data, position) {
        return;
      };
      Fish_Fish.prototype.fadeOut = function(duration) {};
      Fish_Fish.prototype.onHit = function() {
        this.node.getComponent(Fish_FishEffect_1.default).playBeingHit();
      };
      Fish_Fish.prototype.isAlive = function() {
        return !this.isDying && this.node.active;
      };
      Fish_Fish.prototype.getOut = function() {
        this.isGettingOut = true;
        this.isDying = true;
      };
      Fish_Fish.prototype.isNodePositionInScreen = function(node) {
        if (!node.parent) return false;
        var worldPosition = node.parent.convertToWorldSpaceAR(node.position);
        var canvasPosition = cc.Canvas.instance.node.convertToNodeSpaceAR(worldPosition);
        var width = this.data.designResolution.width;
        var height = this.data.designResolution.height;
        return Math.abs(canvasPosition.x) < width / 2 && Math.abs(canvasPosition.y) < height / 2;
      };
      Fish_Fish.prototype.getLockingPosition = function(fullStage) {
        var _this = this;
        void 0 === fullStage && (fullStage = false);
        if (!this.node.parent) return null;
        var target = new Fish_BoxCollider();
        var highestWeighting = -1;
        this.boxColliders.forEach(function(boxCollider) {
          if (!boxCollider.node) return;
          if (fullStage) {
            if (_this.isDragon()) {
              if (boxCollider.weighting > highestWeighting && boxCollider.node.name === _this.currentAnimationName) {
                target = boxCollider;
                highestWeighting = boxCollider.weighting;
              }
            } else if (boxCollider.weighting > highestWeighting) {
              target = boxCollider;
              highestWeighting = boxCollider.weighting;
            }
          } else {
            var isInScreen = _this.isNodePositionInScreen(boxCollider.node);
            if (isInScreen) if (_this.isDragon()) {
              if (boxCollider.weighting > highestWeighting && boxCollider.node.name === _this.currentAnimationName) {
                target = boxCollider;
                highestWeighting = boxCollider.weighting;
              }
            } else if (boxCollider.weighting > highestWeighting) {
              target = boxCollider;
              highestWeighting = boxCollider.weighting;
            }
          }
        });
        if (target.node) {
          var worldPosition = target.node.parent.convertToWorldSpaceAR(target.node.position);
          var canvasPosition = cc.Canvas.instance.node.convertToNodeSpaceAR(worldPosition);
          return canvasPosition;
        }
        return null;
      };
      Fish_Fish.prototype.isInLockingArea = function() {
        var _this = this;
        var hasNodeInLockingArea = false;
        if (this.isDying) return false;
        this.boxColliders.forEach(function(boxCollider) {
          if (!boxCollider.node) return;
          _this.isDragon() ? boxCollider.node.name === _this.currentAnimationName && _this.isNodePositionInScreen(boxCollider.node) && (hasNodeInLockingArea = true) : _this.isNodePositionInScreen(boxCollider.node) && (hasNodeInLockingArea = true);
        });
        return hasNodeInLockingArea;
      };
      Fish_Fish.prototype.getID = function() {
        return this.id || "";
      };
      Fish_Fish.prototype.getFishType = function() {
        return this.fishType;
      };
      Fish_Fish.prototype.getRatio = function() {
        var _this = this;
        if (this.fishType < 500) {
          var seatData = this.data.playersData.find(function(player) {
            return (null === player || void 0 === player ? void 0 : player.seatIdx) === _this.data.selfSeatIdx;
          });
          return CommonTool_1.CommonTool.getClientMoneyFmt(this.ratio * this.data.roomAntes[seatData.anteType - 1]).split("+")[1];
        }
        return LocalizationManager_1.default.getInstance().get("TEXT_FISHNAME_" + this.fishType);
      };
      Fish_Fish.prototype.showRatio = function() {
        cc.systemEvent.emit("FISH_SHOW_RATIO", this, this.ratioObj);
      };
      Fish_Fish.prototype.hideRatio = function() {
        cc.systemEvent.emit("FISH_HIDE_RATIO", this, this.ratioObj);
      };
      Fish_Fish.prototype.showBubble = function() {};
      Fish_Fish.prototype.bubblePop = function() {};
      __decorate([ property([ Fish_BoxCollider ]) ], Fish_Fish.prototype, "boxColliders", void 0);
      __decorate([ property(cc.Node) ], Fish_Fish.prototype, "bubbleEffect", void 0);
      __decorate([ property([ cc.Node ]) ], Fish_Fish.prototype, "bonesFXNode", void 0);
      Fish_Fish = __decorate([ ccclass ], Fish_Fish);
      return Fish_Fish;
    }(cc.Component);
    exports.Fish_Fish = Fish_Fish;
    cc._RF.pop();
  }, {
    "../../Common/Optional/Crosis/FXController/FXController": void 0,
    "../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../Common/Tools/CommonTool": void 0,
    "../../Common/Tools/Localization/LocalizationManager": void 0,
    "../Common/Manager/Fish_DataManager": "Fish_DataManager",
    "./Fish_FishEffect": "Fish_FishEffect"
  } ],
  Fish_FxBlackHolePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2ecc06/4lLSa4TsfvAc79E", "Fish_FxBlackHolePool");
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
    var Fish_BasePool_1 = require("./Fish_BasePool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_FxBlackHolePool = function(_super) {
      __extends(Fish_FxBlackHolePool, _super);
      function Fish_FxBlackHolePool() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_FxBlackHolePool = __decorate([ ccclass ], Fish_FxBlackHolePool);
      return Fish_FxBlackHolePool;
    }(Fish_BasePool_1.Fish_BasePool);
    exports.default = Fish_FxBlackHolePool;
    cc._RF.pop();
  }, {
    "./Fish_BasePool": "Fish_BasePool"
  } ],
  Fish_GameUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b225rHgb1MF66LAm1+5Zrx", "Fish_GameUI");
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
    var FXController_1 = require("../../../Common/Optional/Crosis/FXController/FXController");
    var AudioManager_1 = require("../../../Common/Tools/AudioManager/AudioManager");
    var CommonTool_1 = require("../../../Common/Tools/CommonTool");
    var MarqueeSystemManager_1 = require("../../../Common/Tools/MarqueeSystem/MarqueeSystemManager");
    var Fish_CarryMoneyEnterPanel_1 = require("../../Common/CarryMoney/Fish_CarryMoneyEnterPanel");
    var Fish_CarryMoneyInfoPanel_1 = require("../../Common/CarryMoney/Fish_CarryMoneyInfoPanel");
    var Fish_BubbleKillEffectPool_1 = require("../../Common/Pool/Fish_BubbleKillEffectPool");
    var Fish_BulletHitPool_1 = require("../../Common/Pool/Fish_BulletHitPool");
    var Fish_CoinPool_1 = require("../../Common/Pool/Fish_CoinPool");
    var Fish_DeadEffectPool_1 = require("../../Common/Pool/Fish_DeadEffectPool");
    var Fish_FxBlackHolePool_1 = require("../../Common/Pool/Fish_FxBlackHolePool");
    var Fish_ItemPool_1 = require("../../Common/Pool/Fish_ItemPool");
    var Fish_PayoutPool_1 = require("../../Common/Pool/Fish_PayoutPool");
    var Fish_RatioPool_1 = require("../../Common/Pool/Fish_RatioPool");
    var Fish_AutoGamePanel_1 = require("./Panel/Fish_AutoGamePanel");
    var Fish_BossArrivePanel_1 = require("./Panel/Fish_BossArrivePanel");
    var Fish_HistoryPanel_1 = require("./Panel/Fish_HistoryPanel");
    var Fish_IllustratedBookPanel_1 = require("./Panel/Fish_IllustratedBookPanel");
    var Fish_LuckyRoulettePanel_1 = require("./Panel/Fish_LuckyRoulettePanel");
    var Fish_QuitPanel_1 = require("./Panel/Fish_QuitPanel");
    var Fish_RulePanel_1 = require("./Panel/Fish_RulePanel");
    var Fish_SettingPanel_1 = require("./Panel/Fish_SettingPanel");
    var Fish_TutorialPanel_1 = require("./Panel/Fish_TutorialPanel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FxElectric = function() {
      function FxElectric() {
        this.electricNode = null;
        this.electricStart = null;
        this.electricEnd = null;
        this.electricSpine = null;
      }
      __decorate([ property(cc.Node) ], FxElectric.prototype, "electricNode", void 0);
      __decorate([ property(cc.Node) ], FxElectric.prototype, "electricStart", void 0);
      __decorate([ property(cc.Node) ], FxElectric.prototype, "electricEnd", void 0);
      __decorate([ property(sp.Skeleton) ], FxElectric.prototype, "electricSpine", void 0);
      FxElectric = __decorate([ ccclass("FxElectric") ], FxElectric);
      return FxElectric;
    }();
    var Jackpot = function() {
      function Jackpot() {
        this.queue = [];
        this.isPlaying = false;
        this.selfPlayerId = null;
        this.jackpotIdleNode = null;
        this.jackpotWinnerNode = null;
        this.jackpotPayoutNode = null;
        this.jackpotIdleText = null;
        this.jackpotWinnerText = null;
        this.jackpotWinnerPayoutText = null;
        this.jackpotPayoutText = null;
      }
      __decorate([ property(cc.Node) ], Jackpot.prototype, "jackpotIdleNode", void 0);
      __decorate([ property(cc.Node) ], Jackpot.prototype, "jackpotWinnerNode", void 0);
      __decorate([ property(cc.Node) ], Jackpot.prototype, "jackpotPayoutNode", void 0);
      __decorate([ property(cc.Label) ], Jackpot.prototype, "jackpotIdleText", void 0);
      __decorate([ property(cc.Label) ], Jackpot.prototype, "jackpotWinnerText", void 0);
      __decorate([ property(cc.Label) ], Jackpot.prototype, "jackpotWinnerPayoutText", void 0);
      __decorate([ property(cc.Label) ], Jackpot.prototype, "jackpotPayoutText", void 0);
      Jackpot = __decorate([ ccclass("Jackpot") ], Jackpot);
      return Jackpot;
    }();
    var Fish_GameUI = function(_super) {
      __extends(Fish_GameUI, _super);
      function Fish_GameUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tip1String = "\u4ee5\u4e0b\u70ba\u9801\u9762";
        _this.autoGamePanel = null;
        _this.hisotryPanel = null;
        _this.IllustartedBookPanel = null;
        _this.luckyRoulettePanel = null;
        _this.quitPanel = null;
        _this.rulePanel = null;
        _this.settingPanel = null;
        _this.tutorialPanel = null;
        _this.bossArrivePanel = null;
        _this.carryMoneyEnterPanel = null;
        _this.carryMoneyInfoPanel = null;
        _this.coinPools = [];
        _this.deadEffectPools = [];
        _this.payoutPools = [];
        _this.ratioPool = null;
        _this.bubbleKillEffectPool = null;
        _this.fxBlackHolePool = null;
        _this.bulletHitPool = null;
        _this.drillPool = null;
        _this.laserPool = null;
        _this.coinParent = null;
        _this.deadEffectParent = null;
        _this.payoutParent = null;
        _this.bubbleKillEffectParent = null;
        _this.ratioParent = null;
        _this.itemParent = null;
        _this.lockFishTipGroup = null;
        _this.menuList = null;
        _this.activeAutoGameButton = null;
        _this.unactiveAutoGameButton = null;
        _this.arrBgSpine = [];
        _this.wave = null;
        _this.backgroundMask = null;
        _this.lockToggle = null;
        _this.autoToggle = null;
        _this.bossSkill = null;
        _this.hintNode = null;
        _this.hintText = null;
        _this.selfTip = null;
        _this.laserPreview = null;
        _this.shootButton = null;
        _this.fxElectric = [];
        _this.fxLaser = [];
        _this.fxBlackHole = null;
        _this.fxHammerFadein = null;
        _this.fxHammerPlay = null;
        _this.fxHammerFadeout = null;
        _this.fxMissile = null;
        _this.fxBulletHit = null;
        _this.jackpotGroup = null;
        _this.jackpot = null;
        _this.bgSpineNewIndex = null;
        _this.bgSpineIndex = null;
        _this.isFxLaserStart = [];
        _this.bossHitCount = 0;
        return _this;
      }
      Fish_GameUI.prototype.start = function() {
        MarqueeSystemManager_1.default.addMarquee("FishFramework", "Resources/pl_3", this.menuList.parent, cc.v3(0, 200));
      };
      Fish_GameUI.prototype.init = function() {
        this.initPools();
        this.initPanel();
        this.closeMenuList();
        this.hintNode.active = false;
        this.selfTip.active = false;
        this.shootButton.active = false;
        this.laserPreview.active = false;
      };
      Fish_GameUI.prototype.changeScene = function(index, dontPlayAnim) {};
      Fish_GameUI.prototype.deadEffect = function(fishType, position, isSelf) {
        void 0 === position && (position = [ 0, 0 ]);
      };
      Fish_GameUI.prototype.coinEffect = function(odds, position, seatPosition, isSelf) {
        void 0 === position && (position = [ 0, 0 ]);
        void 0 === seatPosition && (seatPosition = [ 0, 0 ]);
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            return [ 2 ];
          });
        });
      };
      Fish_GameUI.prototype.payout = function(pay, position, isSelf) {};
      Fish_GameUI.prototype.dropDrill = function(position, seatPosition) {
        void 0 === position && (position = [ 0, 0 ]);
        void 0 === seatPosition && (seatPosition = [ 0, 0 ]);
      };
      Fish_GameUI.prototype.dropLaser = function(position, seatPosition) {
        void 0 === position && (position = [ 0, 0 ]);
        void 0 === seatPosition && (seatPosition = [ 0, 0 ]);
      };
      Fish_GameUI.prototype.showRatio = function(fish, ratio) {};
      Fish_GameUI.prototype.setRatioOffset = function(fish, ratio) {};
      Fish_GameUI.prototype.hideRatio = function(fish, ratio) {
        if (!ratio) return;
        ratio.removeFromParent();
        this.ratioPool.recovery(ratio);
        fish.ratioObj = null;
      };
      Fish_GameUI.prototype.openRoulettePanel = function(data, score) {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            return [ 2, this.luckyRoulettePanel.open(data, score) ];
          });
        });
      };
      Fish_GameUI.prototype.closeLockFishTip = function(seatIndex) {
        this.lockFishTipGroup.getChildByName("" + seatIndex).active = false;
        this.lockFishTipGroup.getChildByName("" + seatIndex).setPosition(new cc.Vec3(-1e4, 0));
      };
      Fish_GameUI.prototype.setLockFishTip = function(position, seatIdx, isSelf) {
        void 0 === isSelf && (isSelf = false);
        return;
      };
      Fish_GameUI.prototype.dropBossSkill = function(position) {};
      Fish_GameUI.prototype.bossSkillFX = function(isBlur, isFinalSkill) {
        void 0 === isBlur && (isBlur = false);
      };
      Fish_GameUI.prototype.forceHideBossSkill = function() {
        this.bossSkill.active = false;
      };
      Fish_GameUI.prototype.openMenuList = function() {
        cc.log("\u958b\u555f\u9078\u55ae\u5217\u8868");
        this.menuList.active = true;
      };
      Fish_GameUI.prototype.closeMenuList = function() {
        cc.log("\u95dc\u9589\u9078\u55ae\u5217\u8868");
        this.menuList.active = false;
      };
      Fish_GameUI.prototype.openAutoGamePanel = function() {
        cc.log("\u958b\u555f\u9078\u55ae\u5217\u8868");
        this.autoGamePanel.open();
      };
      Fish_GameUI.prototype.openSettingPanel = function() {
        cc.log("\u958b\u555f\u8a2d\u5b9a\u9801\u9762");
        this.settingPanel.open();
      };
      Fish_GameUI.prototype.openILLustratedBookPanel = function() {
        cc.log("\u958b\u555f\u5716\u9451\u9801\u9762");
        this.IllustartedBookPanel.open();
      };
      Fish_GameUI.prototype.openHistoryPanel = function(webApiUrl) {
        cc.log("\u958b\u555f\u7d00\u9304\u9801\u9762");
        this.hisotryPanel.open(webApiUrl);
      };
      Fish_GameUI.prototype.openRulePanel = function() {
        cc.log("\u958b\u555f\u898f\u5247\u9801\u9762");
        this.rulePanel.open();
      };
      Fish_GameUI.prototype.openQuitPanel = function(isShowEffect) {
        cc.log("\u958b\u555f\u96e2\u958b\u9801\u9762");
        this.quitPanel.open(isShowEffect);
      };
      Fish_GameUI.prototype.checknQuitPanelState = function() {
        return this.quitPanel.node.active;
      };
      Fish_GameUI.prototype.openBossArrivePanel = function(bossType) {
        cc.log("\u958b\u555f Boss \u51fa\u73fe\u901a\u77e5", bossType);
        this.bossArrivePanel.open(bossType);
      };
      Fish_GameUI.prototype.openTutorialPanel = function(socket) {
        cc.log("\u958b\u555f\u65b0\u624b\u5f15\u5c0e");
        this.tutorialPanel.show(socket);
      };
      Fish_GameUI.prototype.getAutoGameHitFish = function() {
        return this.autoGamePanel.getAutoGameHitFish();
      };
      Fish_GameUI.prototype.closeAutoGamePanel = function() {
        this.autoGamePanel.close();
      };
      Fish_GameUI.prototype.autoGamePanelCloseStopButton = function() {
        this.autoGamePanel.closeStopButton();
      };
      Fish_GameUI.prototype.setBgSpine = function(index) {
        this.bgSpineIndex = index;
        this.arrBgSpine.forEach(function(item) {
          item.node.active = false;
        });
        this.arrBgSpine[index].node.active = true;
      };
      Fish_GameUI.prototype.autoGameButtonActive = function(active) {
        this.unactiveAutoGameButton.active = !active;
        this.activeAutoGameButton.active = active;
      };
      Fish_GameUI.prototype.transfreInGame = function() {};
      Fish_GameUI.prototype.updateQuitPanel = function(nowBalance, profit) {
        void 0 === profit && (profit = null);
        this.quitPanel.updateNowBalance(nowBalance);
        null != profit && this.quitPanel.updateProfix(profit);
      };
      Fish_GameUI.prototype.setQuitPanel = function(originalBalance) {
        this.quitPanel.updateOriginalBalance(originalBalance);
        this.quitPanel.updateNowBalance(originalBalance);
        this.quitPanel.updateProfix(0);
      };
      Fish_GameUI.prototype.setLockToggle = function(state) {
        this.lockToggle.isChecked = state;
      };
      Fish_GameUI.prototype.setAutoToggle = function(state) {
        this.autoToggle.isChecked = state;
      };
      Fish_GameUI.prototype.setFxElectric = function(index, isSelf, startPos, endPos) {};
      Fish_GameUI.prototype.bubbleKillEffect = function(startPos, endPos) {
        return;
      };
      Fish_GameUI.prototype.setFxLaser = function(index, startPos, angle) {};
      Fish_GameUI.prototype.setFxBlackHole = function(startPos) {
        return;
      };
      Fish_GameUI.prototype.setFxHammer = function() {};
      Fish_GameUI.prototype.setFxMissile = function() {};
      Fish_GameUI.prototype.setFxMissileBGShack = function() {};
      Fish_GameUI.prototype.setBulletHit = function(pos, isDouble, isSelf) {};
      Fish_GameUI.prototype.setVersion = function(version) {
        this.settingPanel.setVersion(version);
      };
      Fish_GameUI.prototype.showHint = function(str) {
        cc.Tween.stopAllByTarget(this.hintNode);
        this.hintNode.active = true;
        this.hintNode.opacity = 255;
        this.hintText.string = str;
        cc.tween(this.hintNode).delay(2).to(1, {
          opacity: 0
        }).start();
      };
      Fish_GameUI.prototype.selfTipEffect = function() {};
      Fish_GameUI.prototype.setShack = function(node, val, times, freq, delay, startDelay) {};
      Fish_GameUI.prototype.setFishBGShack = function() {
        this.setShack(this.arrBgSpine[this.bgSpineIndex].node.parent, 40, 1, .05, 0, 0);
      };
      Fish_GameUI.prototype.setShootButton = function(isShow, time) {
        if (isShow) {
          this.shootButton.active = true;
          this.shootButton.getComponentInChildren(cc.Label).string = time.toString();
          time > 0 && time < 10 && AudioManager_1.AudioManager.instance.playAudioEvent("SpecialWeaponCountDown");
        } else this.shootButton.active = false;
      };
      Fish_GameUI.prototype.setLaserPreview = function(isShow) {
        this.laserPreview.active = isShow;
      };
      Fish_GameUI.prototype.setLaserPreviewAngle = function(dir, cannonPos) {
        var x = dir.x;
        var y = dir.y;
        var angle = Math.atan2(x, y) / Math.PI * 180;
        this.laserPreview.angle = -angle;
        this.laserPreview.setPosition(cannonPos.add(dir.mul(80)));
      };
      Fish_GameUI.prototype.clearLockTip = function(seatIdx) {
        this.lockFishTipGroup.getChildByName("" + seatIdx).active = false;
      };
      Fish_GameUI.prototype.initJackpotIdle = function() {
        this.jackpot.jackpotIdleText.string = "0";
        this.jackpot.jackpotIdleNode.active = false;
        this.jackpot.jackpotPayoutNode.active = false;
        this.jackpot.jackpotWinnerNode.active = false;
      };
      Fish_GameUI.prototype.playJackpotWinning = function() {
        this.jackpot.isPlaying = false;
        if (this.jackpot.queue.length) {
          this.jackpot.isPlaying = true;
          var data = this.jackpot.queue.shift();
          data.playerId === this.jackpot.selfPlayerId ? this.selfWinJackpot(data.winBonus) : this.showOtherWinJackpot(data.nickname, data.winBonus);
        }
      };
      Fish_GameUI.prototype.showJackpotIdle = function(value) {
        var _this = this;
        this.jackpot.jackpotIdleNode.y = 50;
        this.jackpot.jackpotIdleNode.active = true;
        cc.tween(this.jackpot.jackpotIdleNode).to(.5, {
          y: -180
        }).call(function() {
          _this.updateJackpotIdle(value);
        }).start();
      };
      Fish_GameUI.prototype.hideJackpotIdle = function() {
        var _this = this;
        cc.tween(this.jackpot.jackpotIdleNode).to(.5, {
          y: 50
        }).call(function() {
          _this.jackpot.jackpotIdleNode.active = false;
        }).start();
      };
      Fish_GameUI.prototype.updateJackpotIdle = function(value) {
        value && (this.jackpot.jackpotIdleText.string = "" + CommonTool_1.CommonTool.getClientMoney(value, 2));
      };
      Fish_GameUI.prototype.showOtherWinJackpot = function(winner, value) {};
      Fish_GameUI.prototype.hideOtherWinJackpot = function() {
        var _this = this;
        cc.tween(this.jackpot.jackpotWinnerNode).to(1, {
          y: 180
        }).call(function() {
          _this.jackpot.jackpotWinnerNode.active = false;
          _this.showJackpotIdle();
        }).start();
      };
      Fish_GameUI.prototype.selfWinJackpot = function(value) {};
      Fish_GameUI.prototype.setJackpotPos = function(isDown) {};
      Fish_GameUI.prototype.initPools = function() {
        for (var i = 0; i < this.deadEffectPools.length; i++) this.deadEffectPools[i].init();
        for (var i = 0; i < this.coinPools.length; i++) this.coinPools[i].init();
        for (var i = 0; i < this.payoutPools.length; i++) this.payoutPools[i].init();
        this.ratioPool.init();
        this.bubbleKillEffectPool.init();
        this.fxBlackHolePool.init();
        this.bulletHitPool.init();
        this.drillPool.init();
        this.laserPool.init();
      };
      Fish_GameUI.prototype.initPanel = function() {
        this.autoGamePanel.init(this.showHint.bind(this));
        this.hisotryPanel.init();
        this.IllustartedBookPanel.init();
        this.luckyRoulettePanel.init();
        this.quitPanel.init();
        this.rulePanel.init();
        this.settingPanel.init();
        this.tutorialPanel.init();
        this.bossArrivePanel.init();
      };
      __decorate([ property({
        readonly: true,
        displayName: "============ \u3010 \u9801\u9762 \u3011 ============"
      }) ], Fish_GameUI.prototype, "tip1String", void 0);
      __decorate([ property(Fish_AutoGamePanel_1.default) ], Fish_GameUI.prototype, "autoGamePanel", void 0);
      __decorate([ property(Fish_HistoryPanel_1.default) ], Fish_GameUI.prototype, "hisotryPanel", void 0);
      __decorate([ property(Fish_IllustratedBookPanel_1.default) ], Fish_GameUI.prototype, "IllustartedBookPanel", void 0);
      __decorate([ property(Fish_LuckyRoulettePanel_1.default) ], Fish_GameUI.prototype, "luckyRoulettePanel", void 0);
      __decorate([ property(Fish_QuitPanel_1.default) ], Fish_GameUI.prototype, "quitPanel", void 0);
      __decorate([ property(Fish_RulePanel_1.default) ], Fish_GameUI.prototype, "rulePanel", void 0);
      __decorate([ property(Fish_SettingPanel_1.default) ], Fish_GameUI.prototype, "settingPanel", void 0);
      __decorate([ property(Fish_TutorialPanel_1.default) ], Fish_GameUI.prototype, "tutorialPanel", void 0);
      __decorate([ property(Fish_BossArrivePanel_1.default) ], Fish_GameUI.prototype, "bossArrivePanel", void 0);
      __decorate([ property(Fish_CarryMoneyEnterPanel_1.Fish_CarryMoneyEnterPanel) ], Fish_GameUI.prototype, "carryMoneyEnterPanel", void 0);
      __decorate([ property(Fish_CarryMoneyInfoPanel_1.Fish_CarryMoneyInfoPanel) ], Fish_GameUI.prototype, "carryMoneyInfoPanel", void 0);
      __decorate([ property([ Fish_CoinPool_1.Fish_CoinPool ]) ], Fish_GameUI.prototype, "coinPools", void 0);
      __decorate([ property([ Fish_DeadEffectPool_1.Fish_DeadEffectPool ]) ], Fish_GameUI.prototype, "deadEffectPools", void 0);
      __decorate([ property([ Fish_PayoutPool_1.Fish_PayoutPool ]) ], Fish_GameUI.prototype, "payoutPools", void 0);
      __decorate([ property(Fish_RatioPool_1.default) ], Fish_GameUI.prototype, "ratioPool", void 0);
      __decorate([ property(Fish_BubbleKillEffectPool_1.default) ], Fish_GameUI.prototype, "bubbleKillEffectPool", void 0);
      __decorate([ property(Fish_FxBlackHolePool_1.default) ], Fish_GameUI.prototype, "fxBlackHolePool", void 0);
      __decorate([ property(Fish_BulletHitPool_1.default) ], Fish_GameUI.prototype, "bulletHitPool", void 0);
      __decorate([ property(Fish_ItemPool_1.default) ], Fish_GameUI.prototype, "drillPool", void 0);
      __decorate([ property(Fish_ItemPool_1.default) ], Fish_GameUI.prototype, "laserPool", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "coinParent", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "deadEffectParent", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "payoutParent", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "bubbleKillEffectParent", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "ratioParent", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "itemParent", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "lockFishTipGroup", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "menuList", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "activeAutoGameButton", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "unactiveAutoGameButton", void 0);
      __decorate([ property([ sp.Skeleton ]) ], Fish_GameUI.prototype, "arrBgSpine", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "wave", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "backgroundMask", void 0);
      __decorate([ property(cc.Toggle) ], Fish_GameUI.prototype, "lockToggle", void 0);
      __decorate([ property(cc.Toggle) ], Fish_GameUI.prototype, "autoToggle", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "bossSkill", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "hintNode", void 0);
      __decorate([ property(cc.Label) ], Fish_GameUI.prototype, "hintText", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "selfTip", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "laserPreview", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "shootButton", void 0);
      __decorate([ property([ FxElectric ]) ], Fish_GameUI.prototype, "fxElectric", void 0);
      __decorate([ property([ cc.Node ]) ], Fish_GameUI.prototype, "fxLaser", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "fxBlackHole", void 0);
      __decorate([ property(FXController_1.default) ], Fish_GameUI.prototype, "fxHammerFadein", void 0);
      __decorate([ property(FXController_1.default) ], Fish_GameUI.prototype, "fxHammerPlay", void 0);
      __decorate([ property(FXController_1.default) ], Fish_GameUI.prototype, "fxHammerFadeout", void 0);
      __decorate([ property(FXController_1.default) ], Fish_GameUI.prototype, "fxMissile", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "fxBulletHit", void 0);
      __decorate([ property(cc.Node) ], Fish_GameUI.prototype, "jackpotGroup", void 0);
      __decorate([ property(Jackpot) ], Fish_GameUI.prototype, "jackpot", void 0);
      Fish_GameUI = __decorate([ ccclass ], Fish_GameUI);
      return Fish_GameUI;
    }(cc.Component);
    exports.default = Fish_GameUI;
    cc._RF.pop();
  }, {
    "../../../Common/Optional/Crosis/FXController/FXController": void 0,
    "../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../Common/Tools/CommonTool": void 0,
    "../../../Common/Tools/MarqueeSystem/MarqueeSystemManager": void 0,
    "../../Common/CarryMoney/Fish_CarryMoneyEnterPanel": "Fish_CarryMoneyEnterPanel",
    "../../Common/CarryMoney/Fish_CarryMoneyInfoPanel": "Fish_CarryMoneyInfoPanel",
    "../../Common/Pool/Fish_BubbleKillEffectPool": "Fish_BubbleKillEffectPool",
    "../../Common/Pool/Fish_BulletHitPool": "Fish_BulletHitPool",
    "../../Common/Pool/Fish_CoinPool": "Fish_CoinPool",
    "../../Common/Pool/Fish_DeadEffectPool": "Fish_DeadEffectPool",
    "../../Common/Pool/Fish_FxBlackHolePool": "Fish_FxBlackHolePool",
    "../../Common/Pool/Fish_ItemPool": "Fish_ItemPool",
    "../../Common/Pool/Fish_PayoutPool": "Fish_PayoutPool",
    "../../Common/Pool/Fish_RatioPool": "Fish_RatioPool",
    "./Panel/Fish_AutoGamePanel": "Fish_AutoGamePanel",
    "./Panel/Fish_BossArrivePanel": "Fish_BossArrivePanel",
    "./Panel/Fish_HistoryPanel": "Fish_HistoryPanel",
    "./Panel/Fish_IllustratedBookPanel": "Fish_IllustratedBookPanel",
    "./Panel/Fish_LuckyRoulettePanel": "Fish_LuckyRoulettePanel",
    "./Panel/Fish_QuitPanel": "Fish_QuitPanel",
    "./Panel/Fish_RulePanel": "Fish_RulePanel",
    "./Panel/Fish_SettingPanel": "Fish_SettingPanel",
    "./Panel/Fish_TutorialPanel": "Fish_TutorialPanel"
  } ],
  Fish_HistoryDetailItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "14013z1ZcFKTI6PICKMI3W3", "Fish_HistoryDetailItem");
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
    var CommonTool_1 = require("../../../../../Common/Tools/CommonTool");
    var LocalizationManager_1 = require("../../../../../Common/Tools/Localization/LocalizationManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_HistoryDetailItem = function(_super) {
      __extends(Fish_HistoryDetailItem, _super);
      function Fish_HistoryDetailItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.fishType = null;
        _this.betAmount = null;
        _this.count = null;
        _this.payout = null;
        _this.gameNumber = null;
        return _this;
      }
      Fish_HistoryDetailItem.prototype.setItem = function(gameRecordId, data) {
        this.fishType.string = LocalizationManager_1.default.getInstance().get("TEXT_FISHNAME_" + data.fishType);
        this.betAmount.string = "" + CommonTool_1.CommonTool.getClientMoney(data.ante, 4);
        this.count.string = "x" + data.count;
        this.payout.string = (data.pay >= 0 ? "+" : "") + CommonTool_1.CommonTool.getClientMoney(data.pay, 4);
        this.gameNumber.string = gameRecordId;
      };
      __decorate([ property(cc.Label) ], Fish_HistoryDetailItem.prototype, "fishType", void 0);
      __decorate([ property(cc.Label) ], Fish_HistoryDetailItem.prototype, "betAmount", void 0);
      __decorate([ property(cc.Label) ], Fish_HistoryDetailItem.prototype, "count", void 0);
      __decorate([ property(cc.Label) ], Fish_HistoryDetailItem.prototype, "payout", void 0);
      __decorate([ property(cc.Label) ], Fish_HistoryDetailItem.prototype, "gameNumber", void 0);
      Fish_HistoryDetailItem = __decorate([ ccclass ], Fish_HistoryDetailItem);
      return Fish_HistoryDetailItem;
    }(cc.Component);
    exports.default = Fish_HistoryDetailItem;
    cc._RF.pop();
  }, {
    "../../../../../Common/Tools/CommonTool": void 0,
    "../../../../../Common/Tools/Localization/LocalizationManager": void 0
  } ],
  Fish_HistoryItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea494woTmFGmY8z43Y47Ufs", "Fish_HistoryItem");
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
    var LocalizationManager_1 = require("../../../../../Common/Tools/Localization/LocalizationManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_HistoryItem = function(_super) {
      __extends(Fish_HistoryItem, _super);
      function Fish_HistoryItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameNumber = null;
        _this.roomName = null;
        _this.betAmount = null;
        _this.payout = null;
        _this.time = null;
        _this.detailBtn = null;
        _this.grId = null;
        _this.summary = null;
        return _this;
      }
      Fish_HistoryItem.prototype.setItem = function(data) {
        this.gameNumber.string = data.grId;
        this.roomName.string = LocalizationManager_1.default.getInstance().get("TEXT_ROOM_LEVEL_" + data.themeId);
        this.betAmount.string = "" + data.memberOutcome;
        this.payout.string = (data.profit >= 0 ? "+" : "") + data.profit;
        this.payout.node.color = new cc.Color().fromHEX(data.profit >= 0 ? "#28d228" : "#ff8c8c");
        this.time.string = GameClient.convertTimestamp(data.endTimestamp).split(" ").join("\n");
        this.grId = data.grId;
        this.summary = data.summary;
      };
      __decorate([ property(cc.Label) ], Fish_HistoryItem.prototype, "gameNumber", void 0);
      __decorate([ property(cc.Label) ], Fish_HistoryItem.prototype, "roomName", void 0);
      __decorate([ property(cc.Label) ], Fish_HistoryItem.prototype, "betAmount", void 0);
      __decorate([ property(cc.Label) ], Fish_HistoryItem.prototype, "payout", void 0);
      __decorate([ property(cc.Label) ], Fish_HistoryItem.prototype, "time", void 0);
      __decorate([ property(cc.Button) ], Fish_HistoryItem.prototype, "detailBtn", void 0);
      Fish_HistoryItem = __decorate([ ccclass ], Fish_HistoryItem);
      return Fish_HistoryItem;
    }(cc.Component);
    exports.default = Fish_HistoryItem;
    cc._RF.pop();
  }, {
    "../../../../../Common/Tools/Localization/LocalizationManager": void 0
  } ],
  Fish_HistoryPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12b6arUs8FLAbtVpOSXLGNu", "Fish_HistoryPanel");
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
    var List_optimize_1 = require("../../../../Common/Optional/Crosis/List_optimize/List_optimize");
    var BaseZoomPopup_1 = require("../../../../Common/Optional/Songlin/Popup/BaseZoomPopup");
    var AudioManager_1 = require("../../../../Common/Tools/AudioManager/AudioManager");
    var CommonTool_1 = require("../../../../Common/Tools/CommonTool");
    var Query_1 = require("../../../../Common/Tools/Query/Query");
    var Fish_HistoryDetailItem_1 = require("./HistoryItems/Fish_HistoryDetailItem");
    var Fish_HistoryItem_1 = require("./HistoryItems/Fish_HistoryItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_HistoryPanel = function(_super) {
      __extends(Fish_HistoryPanel, _super);
      function Fish_HistoryPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.returnBtn = null;
        _this.loading = null;
        _this.loadingImg = null;
        _this.loadingTxt = null;
        _this.noDataTxt = null;
        _this.errorTxt = null;
        _this.historyPage = null;
        _this.detailPage = null;
        _this.historyItemPrefab = null;
        _this.detailItemPrefab = null;
        _this.historyScrollView = null;
        _this.detailScrollView = null;
        _this.wagerToken = null;
        _this.webApiUrl = null;
        _this.requestTick = null;
        _this.loadingTween = null;
        return _this;
      }
      Fish_HistoryPanel.prototype.init = function() {
        this.node.active = false;
        this.historyPage.active = false;
        this.detailPage.active = false;
      };
      Fish_HistoryPanel.prototype.open = function(webApiUrl) {
        _super.prototype.showPopup.call(this);
        this.node.position = cc.Vec3.ZERO;
        this.webApiUrl = webApiUrl;
        this.setLoading(true);
        this.requestHistroy(webApiUrl);
      };
      Fish_HistoryPanel.prototype.close = function() {
        var _this = this;
        _super.prototype.closePopup.call(this, function() {
          _this.loading.active = false;
          _this.noDataTxt.active = false;
          _this.errorTxt.active = false;
          _this.historyPage.active = false;
          _this.detailPage.active = false;
          _this.historyScrollView.content.destroyAllChildren();
          _this.detailScrollView.content.destroyAllChildren();
        });
      };
      Fish_HistoryPanel.prototype.getWagerToken = function(webApiUrl) {
        var originToken = Query_1.default.getQuery("token");
        var tokenString = window.Buffer.from(decodeURIComponent(originToken), "base64").toString();
        var token = Query_1.default.getQuery("token", tokenString) || "";
        var time = CommonTool_1.CommonTool.getServerTime().toString();
        return GameClient.getPlayerWagerToken(token, "", time, webApiUrl);
      };
      Fish_HistoryPanel.prototype.requestHistroy = function(webApiUrl) {
        return __awaiter(this, void 0, Promise, function() {
          var wagerTokenResponse, requestTick;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!!this.wagerToken) return [ 3, 2 ];
              return [ 4, this.getWagerToken(webApiUrl) ];

             case 1:
              wagerTokenResponse = _a.sent();
              this.wagerToken = null === wagerTokenResponse || void 0 === wagerTokenResponse ? void 0 : wagerTokenResponse.data.token;
              _a.label = 2;

             case 2:
              if (!this.wagerToken) {
                cc.error("\u53d6\u5f97\u7d00\u9304\u7684\u64cd\u4f5c\u62ff\u4e0d\u5230 wager token");
                this.errorTxt.active = true;
                this.historyPage.active = false;
                return [ 2 ];
              }
              requestTick = CommonTool_1.CommonTool.getServerTime();
              this.requestTick = requestTick;
              GameClient.getFishMergedRecordList(this.wagerToken, webApiUrl, 1, 10).then(function(response) {
                cc.log("get history data", response);
                if (_this.checkRequestStatus(requestTick)) {
                  _this.historyPage.active = true;
                  if (response.data.totalCounts) {
                    response.data.data.sort(function(a, b) {
                      return b.endTimestamp - a.endTimestamp;
                    });
                    response.data.data.forEach(function(item) {
                      var node = cc.instantiate(_this.historyItemPrefab);
                      _this.historyScrollView.content.addChild(node);
                      node.getComponent(Fish_HistoryItem_1.default).setItem(item);
                    });
                  } else _this.noDataTxt.active = true;
                  _this.setLoading(false);
                  _this.scheduleOnce(function() {
                    var _a;
                    _this.historyScrollView.stopAutoScroll();
                    _this.historyScrollView.scrollToTop();
                    null === (_a = _this.historyScrollView.getComponent(List_optimize_1.default)) || void 0 === _a ? void 0 : _a.setUpdateOpacity(true);
                  });
                }
              }).catch(function(error) {
                cc.error("get history data failure", error);
                if (_this.checkRequestStatus(requestTick)) {
                  _this.errorTxt.active = true;
                  _this.setLoading(false);
                }
              });
              return [ 2 ];
            }
          });
        });
      };
      Fish_HistoryPanel.prototype.setLoading = function(swh) {
        if (swh) {
          this.loading.active = true;
          this.loadingTween = cc.tween(this.loadingImg).by(2, {
            angle: -360
          }).repeatForever().start();
        } else {
          if (this.loadingTween) {
            this.loadingTween.stop();
            this.loadingTween = null;
          }
          this.loading.active = false;
        }
      };
      Fish_HistoryPanel.prototype.checkRequestStatus = function(requestTick) {
        var retVal = requestTick === this.requestTick;
        this.requestTick = null;
        return retVal;
      };
      Fish_HistoryPanel.prototype.onClickDetailBtn = function(event) {
        return __awaiter(this, void 0, Promise, function() {
          var itemNode, historyItem;
          var _this = this;
          return __generator(this, function(_a) {
            AudioManager_1.AudioManager.instance.playAudioEvent("History_Detail");
            this.detailScrollView.content.destroyAllChildren();
            itemNode = event.target.parent;
            historyItem = itemNode.getComponent(Fish_HistoryItem_1.default);
            this.historyPage.active = false;
            this.detailPage.active = true;
            if (historyItem.summary.data.length) {
              historyItem.summary.data.forEach(function(item) {
                var node = cc.instantiate(_this.detailItemPrefab);
                _this.detailScrollView.content.addChild(node);
                node.getComponent(Fish_HistoryDetailItem_1.default).setItem(historyItem.grId, item);
              });
              this.scheduleOnce(function() {
                var _a;
                _this.detailScrollView.stopAutoScroll();
                _this.detailScrollView.scrollToTop();
                null === (_a = _this.detailScrollView.getComponent(List_optimize_1.default)) || void 0 === _a ? void 0 : _a.setUpdateOpacity(true);
              });
            } else this.noDataTxt.active = true;
            return [ 2 ];
          });
        });
      };
      Fish_HistoryPanel.prototype.onClickReturnBtn = function() {
        var _this = this;
        AudioManager_1.AudioManager.instance.playAudioEvent("History_Return");
        this.detailPage.active = false;
        this.errorTxt.active = false;
        this.noDataTxt.active = false;
        this.historyPage.active = true;
        this.scheduleOnce(function() {
          _this.historyScrollView.stopAutoScroll();
          _this.historyScrollView.scrollToTop();
        });
      };
      __decorate([ property(cc.Button) ], Fish_HistoryPanel.prototype, "closeBtn", void 0);
      __decorate([ property(cc.Button) ], Fish_HistoryPanel.prototype, "returnBtn", void 0);
      __decorate([ property(cc.Node) ], Fish_HistoryPanel.prototype, "loading", void 0);
      __decorate([ property(cc.Node) ], Fish_HistoryPanel.prototype, "loadingImg", void 0);
      __decorate([ property(cc.Label) ], Fish_HistoryPanel.prototype, "loadingTxt", void 0);
      __decorate([ property(cc.Node) ], Fish_HistoryPanel.prototype, "noDataTxt", void 0);
      __decorate([ property(cc.Node) ], Fish_HistoryPanel.prototype, "errorTxt", void 0);
      __decorate([ property(cc.Node) ], Fish_HistoryPanel.prototype, "historyPage", void 0);
      __decorate([ property(cc.Node) ], Fish_HistoryPanel.prototype, "detailPage", void 0);
      __decorate([ property(cc.Node) ], Fish_HistoryPanel.prototype, "historyItemPrefab", void 0);
      __decorate([ property(cc.Node) ], Fish_HistoryPanel.prototype, "detailItemPrefab", void 0);
      __decorate([ property(cc.ScrollView) ], Fish_HistoryPanel.prototype, "historyScrollView", void 0);
      __decorate([ property(cc.ScrollView) ], Fish_HistoryPanel.prototype, "detailScrollView", void 0);
      Fish_HistoryPanel = __decorate([ ccclass ], Fish_HistoryPanel);
      return Fish_HistoryPanel;
    }(BaseZoomPopup_1.default);
    exports.default = Fish_HistoryPanel;
    cc._RF.pop();
  }, {
    "../../../../Common/Optional/Crosis/List_optimize/List_optimize": void 0,
    "../../../../Common/Optional/Songlin/Popup/BaseZoomPopup": void 0,
    "../../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../../Common/Tools/CommonTool": void 0,
    "../../../../Common/Tools/Query/Query": void 0,
    "./HistoryItems/Fish_HistoryDetailItem": "Fish_HistoryDetailItem",
    "./HistoryItems/Fish_HistoryItem": "Fish_HistoryItem"
  } ],
  Fish_IllustratedBookPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f07b8cuh8pA86cuu/cirl/x", "Fish_IllustratedBookPanel");
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
    var List_optimize_1 = require("../../../../Common/Optional/Crosis/List_optimize/List_optimize");
    var BaseZoomPopup_1 = require("../../../../Common/Optional/Songlin/Popup/BaseZoomPopup");
    var AudioManager_1 = require("../../../../Common/Tools/AudioManager/AudioManager");
    var Fish_IllustratedBook_Fish_1 = require("./Fish_IllustratedBook_Fish");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_IllustartedBookPanel = function(_super) {
      __extends(Fish_IllustartedBookPanel, _super);
      function Fish_IllustartedBookPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.fishs = [];
        _this.scrollView = null;
        _this.fishIllustartedTypes = [ 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 201, 202, 203, 204, 205, 206, 207, 301, 302, 303, 401, 402, 403, 501, 502, 503, 504, 505, 506 ];
        return _this;
      }
      Fish_IllustartedBookPanel.prototype.init = function() {
        for (var i = 0; i < this.fishs.length; i++) this.fishs[i].init(this.fishIllustartedTypes[i]);
        this.node.active = false;
      };
      Fish_IllustartedBookPanel.prototype.start = function() {};
      Fish_IllustartedBookPanel.prototype.open = function() {
        var _a;
        _super.prototype.showPopup.call(this);
        AudioManager_1.AudioManager.instance.playAudioEvent("IllustratedBookPanel_Open");
        this.node.position = cc.Vec3.ZERO;
        null === (_a = this.scrollView.getComponent(List_optimize_1.default)) || void 0 === _a ? void 0 : _a.setUpdateOpacity(true);
      };
      Fish_IllustartedBookPanel.prototype.close = function() {
        _super.prototype.closePopup.call(this);
        AudioManager_1.AudioManager.instance.playAudioEvent("IllustratedBookPanel_Close");
      };
      __decorate([ property([ Fish_IllustratedBook_Fish_1.default ]) ], Fish_IllustartedBookPanel.prototype, "fishs", void 0);
      __decorate([ property(cc.Node) ], Fish_IllustartedBookPanel.prototype, "scrollView", void 0);
      Fish_IllustartedBookPanel = __decorate([ ccclass ], Fish_IllustartedBookPanel);
      return Fish_IllustartedBookPanel;
    }(BaseZoomPopup_1.default);
    exports.default = Fish_IllustartedBookPanel;
    cc._RF.pop();
  }, {
    "../../../../Common/Optional/Crosis/List_optimize/List_optimize": void 0,
    "../../../../Common/Optional/Songlin/Popup/BaseZoomPopup": void 0,
    "../../../../Common/Tools/AudioManager/AudioManager": void 0,
    "./Fish_IllustratedBook_Fish": "Fish_IllustratedBook_Fish"
  } ],
  Fish_IllustratedBook_Fish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e4914QjWtZBvIlebvbd2ThJ", "Fish_IllustratedBook_Fish");
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
    var LocalizationManager_1 = require("../../../../Common/Tools/Localization/LocalizationManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_IllustartedBook_Fish = function(_super) {
      __extends(Fish_IllustartedBook_Fish, _super);
      function Fish_IllustartedBook_Fish() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.fishSprite = null;
        _this.fishName = null;
        _this.fishOdds = null;
        _this.data = null;
        return _this;
      }
      Fish_IllustartedBook_Fish.prototype.init = function(fishType) {
        this.fishName.string = LocalizationManager_1.default.getInstance().get("TEXT_FISHNAME_" + fishType);
        this.fishOdds.string = LocalizationManager_1.default.getInstance().get("TEXT_ODDS") + this.data.fishOdds[fishType];
      };
      Fish_IllustartedBook_Fish.prototype.start = function() {};
      __decorate([ property(cc.Node) ], Fish_IllustartedBook_Fish.prototype, "fishSprite", void 0);
      __decorate([ property(cc.Label) ], Fish_IllustartedBook_Fish.prototype, "fishName", void 0);
      __decorate([ property(cc.Label) ], Fish_IllustartedBook_Fish.prototype, "fishOdds", void 0);
      Fish_IllustartedBook_Fish = __decorate([ ccclass ], Fish_IllustartedBook_Fish);
      return Fish_IllustartedBook_Fish;
    }(cc.Component);
    exports.default = Fish_IllustartedBook_Fish;
    cc._RF.pop();
  }, {
    "../../../../Common/Tools/Localization/LocalizationManager": void 0
  } ],
  Fish_Interface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d590fgSdwhKd72q0k7So5Ud", "Fish_Interface");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  Fish_ItemPool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "476aa7ro39FnJiw5eynVSeZ", "Fish_ItemPool");
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
    var Fish_BasePool_1 = require("./Fish_BasePool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_ItemPool = function(_super) {
      __extends(Fish_ItemPool, _super);
      function Fish_ItemPool() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_ItemPool = __decorate([ ccclass ], Fish_ItemPool);
      return Fish_ItemPool;
    }(Fish_BasePool_1.Fish_BasePool);
    exports.default = Fish_ItemPool;
    cc._RF.pop();
  }, {
    "./Fish_BasePool": "Fish_BasePool"
  } ],
  Fish_LoadingItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d22d8X7K51O3qnsWcJ0AQ6/", "Fish_LoadingItem");
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
    exports.Fish_LoadingItem = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_LoadingItem = function(_super) {
      __extends(Fish_LoadingItem, _super);
      function Fish_LoadingItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.loadingBar = null;
        return _this;
      }
      Fish_LoadingItem.prototype.setLoadingBar = function(p_percent) {};
      Fish_LoadingItem.prototype.show = function() {
        this.node.active = true;
        this.node.opacity = 255;
      };
      Fish_LoadingItem.prototype.hide = function() {
        var _this = this;
        cc.tween(this.node).to(1, {
          opacity: 0
        }).call(function() {
          _this.node.active = false;
        }).start();
      };
      __decorate([ property(cc.ProgressBar) ], Fish_LoadingItem.prototype, "loadingBar", void 0);
      Fish_LoadingItem = __decorate([ ccclass ], Fish_LoadingItem);
      return Fish_LoadingItem;
    }(cc.Component);
    exports.Fish_LoadingItem = Fish_LoadingItem;
    cc._RF.pop();
  }, {} ],
  Fish_LoadingManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "520c8ANdQJD7JWCDn3jNmcm", "Fish_LoadingManager");
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
    var SceneManager_1 = require("../../Common/Tools/SceneManager/SceneManager");
    var Fish_DataManager_1 = require("../Common/Manager/Fish_DataManager");
    var Fish_LoadingItem_1 = require("./Fish_LoadingItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_LoadingManager = function(_super) {
      __extends(Fish_LoadingManager, _super);
      function Fish_LoadingManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dataManagerInstance = null;
        _this.loadingItem = null;
        return _this;
      }
      Fish_LoadingManager.prototype.start = function() {
        this.loadingItem.node.setParent(null);
        Fish_DataManager_1.default.LOADING_UI_NODE = this.loadingItem;
        cc.game.addPersistRootNode(this.loadingItem.node);
        SceneManager_1.SceneManager.registerPersistentRootNode(this.loadingItem.node);
      };
      Fish_LoadingManager.prototype.initGameConfig = function(dataManagerInstance) {
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
      Fish_LoadingManager.prototype.processAsync = function(resource) {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.asyncPreloadWithArray(resource) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      Fish_LoadingManager.prototype.onSetLoadingProgress = function(value) {
        this.loadingItem.setLoadingBar(value);
      };
      Fish_LoadingManager.prototype.loadAudioClips = function(bundle, path) {
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
      __decorate([ property(Fish_LoadingItem_1.Fish_LoadingItem) ], Fish_LoadingManager.prototype, "loadingItem", void 0);
      return Fish_LoadingManager;
    }(BaseLoading_1.default);
    exports.default = Fish_LoadingManager;
    cc._RF.pop();
  }, {
    "../../Common/Tools/Base/BaseLoading": void 0,
    "../../Common/Tools/SceneManager/SceneManager": void 0,
    "../Common/Manager/Fish_DataManager": "Fish_DataManager",
    "./Fish_LoadingItem": "Fish_LoadingItem"
  } ],
  Fish_LobbyManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cfd25v228dOxodOx1EJDkbK", "Fish_LobbyManager");
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
    var AudioManager_1 = require("../../Common/Tools/AudioManager/AudioManager");
    var BaseDataManager_1 = require("../../Common/Tools/Base/BaseDataManager");
    var FriendSystemManager_1 = require("../../Common/Tools/FriendSystemManager/FriendSystemManager");
    var SceneManager_1 = require("../../Common/Tools/SceneManager/SceneManager");
    var CarryMoneyManager_1 = require("../../Common/Tools/CarryMoney/CarryMoneyManager");
    var CommonTool_1 = require("../../Common/Tools/CommonTool");
    var LocalizationManager_1 = require("../../Common/Tools/Localization/LocalizationManager");
    var Fish_LobbyUI_1 = require("./Fish_LobbyUI");
    var Fish_DataManager_1 = require("../Common/Manager/Fish_DataManager");
    var Fish_Protocol_1 = require("../Common/Socket/SDK/Fish_Protocol");
    var MarqueeSystemManager_1 = require("../../Common/Tools/MarqueeSystem/MarqueeSystemManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_LobbyManager = function(_super) {
      __extends(Fish_LobbyManager, _super);
      function Fish_LobbyManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ui = null;
        _this.contentNode = null;
        _this.data = null;
        _this.socket = null;
        _this.popup = null;
        return _this;
      }
      Fish_LobbyManager.prototype.onLoad = function() {};
      Fish_LobbyManager.prototype.start = function() {
        var _this = this;
        this.init();
        this.scheduleOnce(function() {
          cc.director.preloadScene("G" + _this.data.gameID + "_Game");
        });
        this.data.isLeaving = false;
        MarqueeSystemManager_1.default.addMarquee("FishFramework", "Resources/pl_3", this.contentNode, cc.v3(0, 200));
      };
      Fish_LobbyManager.prototype.init = function() {
        this.registerEvent();
        this.initCarryMoney();
        this.hideLoading();
        this.getThemeData();
        this.ui.setVersion(this.data.gameVersion);
        this.kickedOutPrompt();
        AudioManager_1.AudioManager.instance.playAudioEvent("Game_LobbyInit");
      };
      Fish_LobbyManager.prototype.onDisable = function() {
        this.unregisterEvent();
      };
      Fish_LobbyManager.prototype.registerEvent = function() {
        cc.systemEvent.on("balanceModifyEvent", this.updateBalance, this);
        cc.systemEvent.on("ON_INVITE_FRIEND", this.onInviteFriend, this);
        cc.systemEvent.on("ON_START_GAME_COMPETITION", this.onStartGameCompetition, this);
        cc.systemEvent.on("ON_FORCE_CLOSE_COMPEITION", this.onForceCloseCompetition, this);
        cc.systemEvent.on(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_JACKPOT_REFRESH, this.jackpotRefresh, this);
        cc.systemEvent.on(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_CHECK_BALANCE, CarryMoneyManager_1.CarryMoneyManager.carryMoneyCheckBalance);
        cc.systemEvent.on(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_SET_AMOUNT, CarryMoneyManager_1.CarryMoneyManager.carryMoneySetAmount);
        cc.systemEvent.on(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_INFO, CarryMoneyManager_1.CarryMoneyManager.showCarryMoneyInfo, this);
        cc.systemEvent.on(CarryMoneyManager_1.CARRY_MONEY_EVENT.TRANSFER_ALL_OF_THE_MAIN_WALLET, CarryMoneyManager_1.CarryMoneyManager.transferAllOfTheMainWallet);
        cc.systemEvent.on(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_TRANSFER, CarryMoneyManager_1.CarryMoneyManager.carryMoneyTransfer, this);
        cc.systemEvent.on(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_RETRY, CarryMoneyManager_1.CarryMoneyManager.enterRoomProcess, this);
        cc.systemEvent.on(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_ENTER_GAME, this.runEnterRoom, this);
        cc.systemEvent.on(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_ENTER_ROOM, this.runEnterRoom, this);
      };
      Fish_LobbyManager.prototype.unregisterEvent = function() {
        cc.systemEvent.off("balanceModifyEvent", this.updateBalance, this);
        cc.systemEvent.off("ON_INVITE_FRIEND", this.onInviteFriend, this);
        cc.systemEvent.off("ON_START_GAME_COMPETITION", this.onStartGameCompetition, this);
        cc.systemEvent.off("ON_FORCE_CLOSE_COMPEITION", this.onForceCloseCompetition, this);
        cc.systemEvent.off(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_JACKPOT_REFRESH, this.jackpotRefresh, this);
        cc.systemEvent.off(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_CHECK_BALANCE, CarryMoneyManager_1.CarryMoneyManager.carryMoneyCheckBalance);
        cc.systemEvent.off(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_SET_AMOUNT, CarryMoneyManager_1.CarryMoneyManager.carryMoneySetAmount);
        cc.systemEvent.off(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_INFO, CarryMoneyManager_1.CarryMoneyManager.showCarryMoneyInfo, this);
        cc.systemEvent.off(CarryMoneyManager_1.CARRY_MONEY_EVENT.TRANSFER_ALL_OF_THE_MAIN_WALLET, CarryMoneyManager_1.CarryMoneyManager.transferAllOfTheMainWallet);
        cc.systemEvent.off(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_TRANSFER, CarryMoneyManager_1.CarryMoneyManager.carryMoneyTransfer, this);
        cc.systemEvent.off(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_RETRY, CarryMoneyManager_1.CarryMoneyManager.enterRoomProcess, this);
        cc.systemEvent.off(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_ENTER_GAME, this.runEnterRoom, this);
        cc.systemEvent.off(CarryMoneyManager_1.CARRY_MONEY_EVENT.CARRY_MONEY_ENTER_ROOM, this.runEnterRoom, this);
      };
      Fish_LobbyManager.prototype.onClickJoinRoom = function(event, themeType) {
        cc.log("\u52a0\u5165\u623f\u9593\u7a2e\u985e = ", themeType);
        CarryMoneyManager_1.CarryMoneyManager.currentSelectedLevelIdx = +themeType - 1;
        if (Fish_DataManager_1.default.offLineMode) {
          this.runEnterRoom();
          return;
        }
        CarryMoneyManager_1.CarryMoneyManager.enterRoomProcess();
        AudioManager_1.AudioManager.instance.playAudioEvent("LobbySelect");
      };
      Fish_LobbyManager.prototype.kickedOutPrompt = function() {
        var _this = this;
        this.data.isKickedOut && this.popup.confirmSystemMsgDialogBox.show(LocalizationManager_1.default.getInstance().get("ERROR_IDLE_2"), function() {
          _this.data.isKickedOut = false;
        });
      };
      Fish_LobbyManager.prototype.hideLoading = function() {
        Fish_DataManager_1.default.LOADING_UI_NODE.node && cc.tween(Fish_DataManager_1.default.LOADING_UI_NODE.node).call(function() {
          Fish_DataManager_1.default.LOADING_UI_NODE.setLoadingBar(1);
        }).delay(.1).call(function() {
          Fish_DataManager_1.default.LOADING_UI_NODE.hide();
        }).start();
      };
      Fish_LobbyManager.prototype.updateBalance = function(balance) {
        this.ui.setPlayerCoin(CommonTool_1.CommonTool.getClientMoney(balance).toString());
      };
      Fish_LobbyManager.prototype.initCarryMoney = function() {
        CarryMoneyManager_1.CarryMoneyManager.socketManager = this.socket;
        CarryMoneyManager_1.CarryMoneyManager.dataManager = this.data;
        CarryMoneyManager_1.CarryMoneyManager.confirmDialogBox = this.popup.confirmSystemMsgDialogBox;
        CarryMoneyManager_1.CarryMoneyManager.connectingDialogBox = this.popup.connectWaitingDialogBox;
        CarryMoneyManager_1.CarryMoneyManager.enterPanelInstance = this.ui.carryMoneyEnterPanel;
        CarryMoneyManager_1.CarryMoneyManager.infoPanelInstance = this.ui.carryMoneyInfoPanel;
        CarryMoneyManager_1.CarryMoneyManager.initCarryMoneyInLobby();
      };
      Fish_LobbyManager.prototype.onInviteFriend = function(inviteData) {
        var _this = this;
        this.popup.ynDialogBox.show(LocalizationManager_1.default.getInstance().get("MESSAGE_BE_INVITED", CommonTool_1.CommonTool.playerNameEncryption(inviteData.nickname), LocalizationManager_1.default.getInstance().get("GAME_NAME_" + BaseDataManager_1.GAME_ID[inviteData.gameId])), function() {
          FriendSystemManager_1.FriendSystemManager.inviteData = inviteData;
          _this.onClickQuitBtn();
        });
      };
      Fish_LobbyManager.prototype.onForceCloseCompetition = function(data) {
        this.popup.confirmSystemMsgDialogBox.show(LocalizationManager_1.default.getInstance().get("MESSAGE_COMPETITION_FORCE_CLOSED"));
      };
      Fish_LobbyManager.prototype.onStartGameCompetition = function(data) {
        var _this = this;
        var messgage = LocalizationManager_1.default.getInstance().get("TEXT_COMPETITION_GAME_START", LocalizationManager_1.default.getInstance().get("GAME_NAME_" + BaseDataManager_1.GAME_ID[data.gameId]) + " " + data.competitionName, 25, "#CACACA", 30, "#FFC000");
        this.popup.ynDialogBox.setLineHeight(30);
        this.popup.ynDialogBox.setTitle(LocalizationManager_1.default.getInstance().get("TEXT_START_GAME"));
        this.popup.ynDialogBox.show(messgage, function() {
          _this.getPlayerOnlineList(function() {
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
          _this.getPlayerOnlineList();
        });
      };
      Fish_LobbyManager.prototype.toOtherGame = function(gameId) {
        var _this = this;
        3 === BaseDataManager_1.default.onlineList[BaseDataManager_1.default.currentTopicName].ManagerData.Status ? this.socket.launchGame({
          username: this.data.nickname,
          gameId: gameId
        }).then(function(response) {
          BaseDataManager_1.default.isReproduce = true;
          _this.socket.close(true);
          SceneManager_1.SceneManager.changeURLsToken("?" + response.url.split("?")[1]);
          SceneManager_1.SceneManager.changeScene("G" + gameId, SceneManager_1.SCENE_TYPE.LOADING);
        }).catch(function() {
          BaseDataManager_1.default.currentTopicName = null;
        }) : this.socket.restore(BaseDataManager_1.default.currentTopicName).then(function(data) {
          _this.socket.close(true);
          var newToken = data.url.split("?")[1];
          SceneManager_1.SceneManager.changeURLsToken("?" + newToken);
          SceneManager_1.SceneManager.changeScene("G" + gameId, SceneManager_1.SCENE_TYPE.LOADING);
        }).catch(function(error) {
          cc.error("\u8f09\u5165\u724c\u5c40\u6642\u767c\u751f\u932f\u8aa4", error);
          BaseDataManager_1.default.currentTopicName = null;
        });
      };
      Fish_LobbyManager.prototype.getPlayerOnlineList = function(successfulCallback, failedCallback) {
        this.socket.getPlayerOnlineList().then(function(data) {
          BaseDataManager_1.default.onlineListProcess(data);
          successfulCallback && successfulCallback();
        }).catch(function(error) {
          cc.error(error);
          failedCallback && failedCallback();
        });
      };
      Fish_LobbyManager.prototype.onClickQuitBtn = function() {
        var _this = this;
        AudioManager_1.AudioManager.instance.playAudioEvent("BackToLobby");
        this.popup.connectWaitingDialogBox.show();
        this.socket.launchGame({
          username: this.data.nickname,
          gameId: 10001
        }).then(function(response) {
          _this.socket.close(true);
          SceneManager_1.SceneManager.changeURLsToken("?" + response.url.split("?")[1]);
          SceneManager_1.SceneManager.changeScene("L10001", SceneManager_1.SCENE_TYPE.LOADING);
        });
      };
      Fish_LobbyManager.prototype.getThemeData = function() {
        var _this = this;
        this.socket.themeDataList().then(function(data) {
          _this.data.themeData = data;
          data.fishThemeList.sort(function(a, b) {
            return a.themeId - b.themeId;
          });
          var themeDataList = [];
          data.fishThemeList.forEach(function(item) {
            var themeData = {
              type: item.themeId,
              betBase: item.antes[0],
              coinMin: item.minCoin,
              totalUser: 0
            };
            themeDataList.push(themeData);
          });
          CarryMoneyManager_1.CarryMoneyManager.inputThemeData(themeDataList);
          data.fishThemeList.forEach(function(item) {
            _this.ui.updateRoomInfo(item);
          });
        }).catch(function(error) {
          cc.error("\u5ef3\u623f\u5217\u8868\u8cc7\u8a0a\u53d6\u5f97\u5931\u6557", error);
          _this.popup.confirmSystemMsgDialogBox.show(LocalizationManager_1.default.getInstance().get("ERROR_CONNECTION_UNSTABLE"), function() {
            window.location.reload();
          });
        });
      };
      Fish_LobbyManager.prototype.runEnterRoom = function() {};
      Fish_LobbyManager.prototype.jackpotRefresh = function(data) {
        var _this = this;
        if (!this.data.themeData) return;
        data.themeJackpotList.forEach(function(item) {
          var themeListData = _this.data.themeData.fishThemeList.find(function(data) {
            return data.themeId === +item.themeId;
          });
          themeListData.jackpot = item.jackpotBonus;
          _this.ui.updateRoomJP(item);
        });
      };
      __decorate([ property({
        type: Fish_LobbyUI_1.default,
        override: true
      }) ], Fish_LobbyManager.prototype, "ui", void 0);
      __decorate([ property(cc.Node) ], Fish_LobbyManager.prototype, "contentNode", void 0);
      Fish_LobbyManager = __decorate([ ccclass ], Fish_LobbyManager);
      return Fish_LobbyManager;
    }(cc.Component);
    exports.default = Fish_LobbyManager;
    cc._RF.pop();
  }, {
    "../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../Common/Tools/Base/BaseDataManager": void 0,
    "../../Common/Tools/CarryMoney/CarryMoneyManager": void 0,
    "../../Common/Tools/CommonTool": void 0,
    "../../Common/Tools/FriendSystemManager/FriendSystemManager": void 0,
    "../../Common/Tools/Localization/LocalizationManager": void 0,
    "../../Common/Tools/MarqueeSystem/MarqueeSystemManager": void 0,
    "../../Common/Tools/SceneManager/SceneManager": void 0,
    "../Common/Manager/Fish_DataManager": "Fish_DataManager",
    "../Common/Socket/SDK/Fish_Protocol": "Fish_Protocol",
    "./Fish_LobbyUI": "Fish_LobbyUI"
  } ],
  Fish_LobbyUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30ab6F32jJO7IiOkSde3/pF", "Fish_LobbyUI");
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
    exports.RoomInfo = void 0;
    var AudioManager_1 = require("../../Common/Tools/AudioManager/AudioManager");
    var AvatarTool_1 = require("../../Common/Tools/Avatar/AvatarTool");
    var CommonTool_1 = require("../../Common/Tools/CommonTool");
    var LocalizationManager_1 = require("../../Common/Tools/Localization/LocalizationManager");
    var Fish_CarryMoneyEnterPanel_1 = require("../Common/CarryMoney/Fish_CarryMoneyEnterPanel");
    var Fish_CarryMoneyInfoPanel_1 = require("../Common/CarryMoney/Fish_CarryMoneyInfoPanel");
    var Fish_HistoryPanel_1 = require("../Game/View/Panel/Fish_HistoryPanel");
    var Fish_IllustratedBookPanel_1 = require("../Game/View/Panel/Fish_IllustratedBookPanel");
    var Fish_RulePanel_1 = require("../Game/View/Panel/Fish_RulePanel");
    var Fish_SettingPanel_1 = require("../Game/View/Panel/Fish_SettingPanel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RoomInfo = function() {
      function RoomInfo() {
        this.node = null;
        this.highLight = null;
        this.JP = null;
        this.minCoinStandard = null;
        this.magnification = null;
      }
      __decorate([ property(cc.Node) ], RoomInfo.prototype, "node", void 0);
      __decorate([ property(cc.Node) ], RoomInfo.prototype, "highLight", void 0);
      __decorate([ property(cc.Label) ], RoomInfo.prototype, "JP", void 0);
      __decorate([ property(cc.Label) ], RoomInfo.prototype, "minCoinStandard", void 0);
      __decorate([ property(cc.Label) ], RoomInfo.prototype, "magnification", void 0);
      RoomInfo = __decorate([ ccclass("RoomInfo") ], RoomInfo);
      return RoomInfo;
    }();
    exports.RoomInfo = RoomInfo;
    var Fish_LobbyUI = function(_super) {
      __extends(Fish_LobbyUI, _super);
      function Fish_LobbyUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tip0String = "\u4ee5\u4e0b\u70ba \u9801\u9762 ";
        _this.hisotryPanel = null;
        _this.IllustartedBookPanel = null;
        _this.rulePanel = null;
        _this.settingPanel = null;
        _this.carryMoneyEnterPanel = null;
        _this.carryMoneyInfoPanel = null;
        _this.tip1String = "\u4ee5\u4e0b\u70ba \u73a9\u5bb6\u8cc7\u8a0a ";
        _this.playerID = null;
        _this.playerCoin = null;
        _this.playerAvatar = null;
        _this.playerFrame = null;
        _this.tip2String = "\u4ee5\u4e0b\u70ba \u5ef3\u623f\u8cc7\u8a0a ";
        _this.room = [];
        return _this;
      }
      Fish_LobbyUI.prototype.init = function() {
        this.initPanel();
      };
      Fish_LobbyUI.prototype.initPanel = function() {
        this.IllustartedBookPanel.init();
        this.rulePanel.init();
        this.settingPanel.init();
        this.hisotryPanel.init();
      };
      Fish_LobbyUI.prototype.start = function() {};
      Fish_LobbyUI.prototype.openSettingPanel = function() {
        this.settingPanel.open();
      };
      Fish_LobbyUI.prototype.openHistoryPanel = function(webApiUrl) {
        AudioManager_1.AudioManager.instance.playAudioEvent("History_Btn_Click");
        this.hisotryPanel.open(webApiUrl);
      };
      Fish_LobbyUI.prototype.openRulePanel = function() {
        this.rulePanel.open();
      };
      Fish_LobbyUI.prototype.openIllustratedBookPanel = function() {
        this.IllustartedBookPanel.open();
      };
      Fish_LobbyUI.prototype.setPlayerName = function(name) {
        this.playerID.string = name;
      };
      Fish_LobbyUI.prototype.setPlayerCoin = function(coin) {
        this.playerCoin.string = coin;
      };
      Fish_LobbyUI.prototype.setPlayerAvatar = function(icon) {
        this.playerAvatar.spriteFrame = AvatarTool_1.default.getAvatarInstanceById(icon).spriteAvatar;
      };
      Fish_LobbyUI.prototype.setPlayerFrame = function(frameId) {
        return __awaiter(this, void 0, Promise, function() {
          var prefab, obj;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, AvatarTool_1.default.getFramePrefab(frameId) ];

             case 1:
              prefab = _a.sent();
              if (prefab) {
                obj = cc.instantiate(prefab);
                this.playerFrame.removeAllChildren();
                this.playerFrame.addChild(obj);
              }
              return [ 2 ];
            }
          });
        });
      };
      Fish_LobbyUI.prototype.updateRoomInfo = function(themeData) {
        this.setRoomInfo(this.room[themeData.themeId - 1], themeData);
      };
      Fish_LobbyUI.prototype.updateRoomJP = function(data) {
        this.room[+data.themeId - 1].JP.string = CommonTool_1.CommonTool.getClientMoney(data.jackpotBonus).toFixed(2);
      };
      Fish_LobbyUI.prototype.setShack = function(node, val, times, freq, delay) {
        cc.tween(node).repeat(times, cc.tween().by(freq, {
          position: new cc.Vec3(val, 0)
        }).by(freq, {
          position: new cc.Vec3(-val, 0)
        }).by(freq, {
          position: new cc.Vec3(-val, 0)
        }).by(freq, {
          position: new cc.Vec3(val, 0)
        }).delay(delay)).start();
      };
      Fish_LobbyUI.prototype.setVersion = function(version) {
        this.settingPanel.setVersion(version);
      };
      Fish_LobbyUI.prototype.setRoomInfo = function(room, data) {
        room.minCoinStandard.string = LocalizationManager_1.default.getInstance().get("TEXT_LOBBY_MINCOINSTAND", CommonTool_1.CommonTool.getClientMoney(data.minCoin).toString());
        room.magnification.string = LocalizationManager_1.default.getInstance().get("TEXT_LOBBY_MAGNIFICATION", CommonTool_1.CommonTool.getClientMoney(data.antes[0]) + "~" + CommonTool_1.CommonTool.getClientMoney(data.antes[data.antes.length - 1]));
        room.JP.string = CommonTool_1.CommonTool.getClientMoney(data.jackpot).toFixed(2);
      };
      __decorate([ property({
        readonly: true,
        displayName: "========================"
      }) ], Fish_LobbyUI.prototype, "tip0String", void 0);
      __decorate([ property(Fish_HistoryPanel_1.default) ], Fish_LobbyUI.prototype, "hisotryPanel", void 0);
      __decorate([ property(Fish_IllustratedBookPanel_1.default) ], Fish_LobbyUI.prototype, "IllustartedBookPanel", void 0);
      __decorate([ property(Fish_RulePanel_1.default) ], Fish_LobbyUI.prototype, "rulePanel", void 0);
      __decorate([ property(Fish_SettingPanel_1.default) ], Fish_LobbyUI.prototype, "settingPanel", void 0);
      __decorate([ property(Fish_CarryMoneyEnterPanel_1.Fish_CarryMoneyEnterPanel) ], Fish_LobbyUI.prototype, "carryMoneyEnterPanel", void 0);
      __decorate([ property(Fish_CarryMoneyInfoPanel_1.Fish_CarryMoneyInfoPanel) ], Fish_LobbyUI.prototype, "carryMoneyInfoPanel", void 0);
      __decorate([ property({
        readonly: true,
        displayName: "========================"
      }) ], Fish_LobbyUI.prototype, "tip1String", void 0);
      __decorate([ property(cc.Label) ], Fish_LobbyUI.prototype, "playerID", void 0);
      __decorate([ property(cc.Label) ], Fish_LobbyUI.prototype, "playerCoin", void 0);
      __decorate([ property(cc.Sprite) ], Fish_LobbyUI.prototype, "playerAvatar", void 0);
      __decorate([ property(cc.Node) ], Fish_LobbyUI.prototype, "playerFrame", void 0);
      __decorate([ property({
        readonly: true,
        displayName: "========================"
      }) ], Fish_LobbyUI.prototype, "tip2String", void 0);
      __decorate([ property([ RoomInfo ]) ], Fish_LobbyUI.prototype, "room", void 0);
      Fish_LobbyUI = __decorate([ ccclass ], Fish_LobbyUI);
      return Fish_LobbyUI;
    }(cc.Component);
    exports.default = Fish_LobbyUI;
    cc._RF.pop();
  }, {
    "../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../Common/Tools/Avatar/AvatarTool": void 0,
    "../../Common/Tools/CommonTool": void 0,
    "../../Common/Tools/Localization/LocalizationManager": void 0,
    "../Common/CarryMoney/Fish_CarryMoneyEnterPanel": "Fish_CarryMoneyEnterPanel",
    "../Common/CarryMoney/Fish_CarryMoneyInfoPanel": "Fish_CarryMoneyInfoPanel",
    "../Game/View/Panel/Fish_HistoryPanel": "Fish_HistoryPanel",
    "../Game/View/Panel/Fish_IllustratedBookPanel": "Fish_IllustratedBookPanel",
    "../Game/View/Panel/Fish_RulePanel": "Fish_RulePanel",
    "../Game/View/Panel/Fish_SettingPanel": "Fish_SettingPanel"
  } ],
  Fish_LuckyRoulettePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2327alpSPBEV7TzHvHfD8bX", "Fish_LuckyRoulettePanel");
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
    exports.LUCKY_REEL_INDEX = void 0;
    var AudioManager_1 = require("../../../../Common/Tools/AudioManager/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LUCKY_REEL_INDEX;
    (function(LUCKY_REEL_INDEX) {
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_Out_1"] = 11] = "LuckyReelIdx_Out_1";
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_Out_2"] = 12] = "LuckyReelIdx_Out_2";
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_Out_4"] = 13] = "LuckyReelIdx_Out_4";
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_Out_6"] = 14] = "LuckyReelIdx_Out_6";
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_Out_8"] = 15] = "LuckyReelIdx_Out_8";
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_Out_10"] = 16] = "LuckyReelIdx_Out_10";
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_Out_12"] = 17] = "LuckyReelIdx_Out_12";
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_Out_14"] = 18] = "LuckyReelIdx_Out_14";
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_Mid_1"] = 21] = "LuckyReelIdx_Mid_1";
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_Mid_20"] = 22] = "LuckyReelIdx_Mid_20";
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_Mid_30"] = 23] = "LuckyReelIdx_Mid_30";
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_Mid_40"] = 24] = "LuckyReelIdx_Mid_40";
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_Mid_50"] = 25] = "LuckyReelIdx_Mid_50";
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_In_1"] = 31] = "LuckyReelIdx_In_1";
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_In_100"] = 32] = "LuckyReelIdx_In_100";
      LUCKY_REEL_INDEX[LUCKY_REEL_INDEX["LuckyReelIdx_In_200"] = 33] = "LuckyReelIdx_In_200";
    })(LUCKY_REEL_INDEX = exports.LUCKY_REEL_INDEX || (exports.LUCKY_REEL_INDEX = {}));
    var Fish_LuckyRoulettePanel = function(_super) {
      __extends(Fish_LuckyRoulettePanel, _super);
      function Fish_LuckyRoulettePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.popup = null;
        _this.outerNode = null;
        _this.middleNode = null;
        _this.innerNode = null;
        _this.scoreLabel = null;
        _this.rouletteStopFX = null;
        _this.rouletteEndingFX = null;
        _this.isInitialed = false;
        _this.optionList = null;
        _this.isScoring = false;
        _this.isRotating = [ false, false, false ];
        _this.rotateAngles = [];
        _this.rotateGettingSlowConfig = [];
        _this.score = 0;
        return _this;
      }
      Fish_LuckyRoulettePanel.prototype.init = function() {
        this.popup.scaleX = this.popup.scaleY = 0;
        this.initAnimation();
        this.node.active = false;
        this.isInitialed = true;
      };
      Fish_LuckyRoulettePanel.prototype.update = function(dt) {};
      Fish_LuckyRoulettePanel.prototype.open = function(data, score) {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            AudioManager_1.AudioManager.instance.playAudioEvent("LuckyPanel_Open");
            if (!this.checkInitialed) {
              cc.error("\u8acb\u5148\u521d\u59cb\u5316\u8f2a\u76e4");
              return [ 2 ];
            }
            return [ 2 ];
          });
        });
      };
      Fish_LuckyRoulettePanel.prototype.close = function() {
        AudioManager_1.AudioManager.instance.playAudioEvent("LuckyPanel_Close");
        this.node.active = false;
      };
      Fish_LuckyRoulettePanel.prototype.resetData = function() {};
      Fish_LuckyRoulettePanel.prototype.checkInitialed = function() {
        return this.isInitialed;
      };
      Fish_LuckyRoulettePanel.prototype.initRotation = function() {};
      Fish_LuckyRoulettePanel.prototype.showRoulette = function(data) {};
      Fish_LuckyRoulettePanel.prototype.scoring = function() {};
      Fish_LuckyRoulettePanel.prototype.setScore = function() {};
      Fish_LuckyRoulettePanel.prototype.startRotate = function(data) {};
      Fish_LuckyRoulettePanel.prototype.rotate = function(dt, index) {};
      Fish_LuckyRoulettePanel.prototype.initAnimation = function() {};
      __decorate([ property(cc.Node) ], Fish_LuckyRoulettePanel.prototype, "popup", void 0);
      __decorate([ property(cc.Node) ], Fish_LuckyRoulettePanel.prototype, "outerNode", void 0);
      __decorate([ property(cc.Node) ], Fish_LuckyRoulettePanel.prototype, "middleNode", void 0);
      __decorate([ property(cc.Node) ], Fish_LuckyRoulettePanel.prototype, "innerNode", void 0);
      __decorate([ property(cc.Label) ], Fish_LuckyRoulettePanel.prototype, "scoreLabel", void 0);
      __decorate([ property(cc.Node) ], Fish_LuckyRoulettePanel.prototype, "rouletteStopFX", void 0);
      __decorate([ property(cc.Node) ], Fish_LuckyRoulettePanel.prototype, "rouletteEndingFX", void 0);
      Fish_LuckyRoulettePanel = __decorate([ ccclass ], Fish_LuckyRoulettePanel);
      return Fish_LuckyRoulettePanel;
    }(cc.Component);
    exports.default = Fish_LuckyRoulettePanel;
    cc._RF.pop();
  }, {
    "../../../../Common/Tools/AudioManager/AudioManager": void 0
  } ],
  Fish_PayoutPool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2bb3eK8p+JFbaaMl0WoZmjC", "Fish_PayoutPool");
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
    exports.Fish_PayoutPool = void 0;
    var Fish_BasePool_1 = require("./Fish_BasePool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_PayoutPool = function(_super) {
      __extends(Fish_PayoutPool, _super);
      function Fish_PayoutPool() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_PayoutPool = __decorate([ ccclass ], Fish_PayoutPool);
      return Fish_PayoutPool;
    }(Fish_BasePool_1.Fish_BasePool);
    exports.Fish_PayoutPool = Fish_PayoutPool;
    cc._RF.pop();
  }, {
    "./Fish_BasePool": "Fish_BasePool"
  } ],
  Fish_Protocol: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3f31YYL2dPvJ5QUt8ybOMl", "Fish_Protocol");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SERVER_TO_USER_PROTOCOL = void 0;
    var SERVER_TO_USER_PROTOCOL;
    (function(SERVER_TO_USER_PROTOCOL) {
      SERVER_TO_USER_PROTOCOL["ON_SELF_JOIN"] = "ON_SELF_JOIN";
      SERVER_TO_USER_PROTOCOL["ON_OTHER_JOIN_NOTICE"] = "ON_OTHER_JOIN_NOTICE";
      SERVER_TO_USER_PROTOCOL["ON_OTHER_LEAVE_NOTICE"] = "ON_OTHER_LEAVE_NOTICE";
      SERVER_TO_USER_PROTOCOL["ON_OTHER_DISCONNECT_NOTICE"] = "ON_OTHER_DISCONNECT_NOTICE";
      SERVER_TO_USER_PROTOCOL["ON_OTHER_TURRET_UPDATE_NOTICE"] = "ON_OTHER_TURRET_UPDATE_NOTICE";
      SERVER_TO_USER_PROTOCOL["ON_OTHER_FIRE_NOTICE"] = "ON_OTHER_FIRE_NOTICE";
      SERVER_TO_USER_PROTOCOL["ON_HIT_NOTICE"] = "ON_HIT_NOTICE";
      SERVER_TO_USER_PROTOCOL["ON_OTHER_ADDITION_CARRY_AMOUNT"] = "ON_OTHER_ADDITION_CARRY_AMOUNT";
      SERVER_TO_USER_PROTOCOL["ON_CHANGE_SCENE"] = "ON_CHANGE_SCENE";
      SERVER_TO_USER_PROTOCOL["ON_FISH_BORN"] = "ON_FISH_BORN";
      SERVER_TO_USER_PROTOCOL["ON_BOSS_COMING"] = "ON_BOSS_COMING";
      SERVER_TO_USER_PROTOCOL["ON_JACKPOT_REFRESH"] = "ON_JACKPOT_REFRESH";
      SERVER_TO_USER_PROTOCOL["ON_JACKPOT_WINNING"] = "ON_JACKPOT_WINNING";
      SERVER_TO_USER_PROTOCOL["ON_PLAYER_IDLE_WARN"] = "ON_PLAYER_IDLE_WARN";
      SERVER_TO_USER_PROTOCOL["ON_FINAL_SKILL"] = "ON_FINAL_SKILL";
    })(SERVER_TO_USER_PROTOCOL = exports.SERVER_TO_USER_PROTOCOL || (exports.SERVER_TO_USER_PROTOCOL = {}));
    cc._RF.pop();
  }, {} ],
  Fish_QuitPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8e7170lmvRHIoAwNDBDHD6v", "Fish_QuitPanel");
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
    var BaseZoomPopup_1 = require("../../../../Common/Optional/Songlin/Popup/BaseZoomPopup");
    var AudioManager_1 = require("../../../../Common/Tools/AudioManager/AudioManager");
    var CommonTool_1 = require("../../../../Common/Tools/CommonTool");
    var LocalizationManager_1 = require("../../../../Common/Tools/Localization/LocalizationManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_QuitPanel = function(_super) {
      __extends(Fish_QuitPanel, _super);
      function Fish_QuitPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.originalBalance = null;
        _this.nowBalance = null;
        _this.plusProfix = null;
        _this.minusProfix = null;
        _this.contiuneLabel = null;
        _this.autoContiuneTime = 10;
        return _this;
      }
      Fish_QuitPanel.prototype.init = function() {
        this.node.active = false;
      };
      Fish_QuitPanel.prototype.update = function(dt) {
        this.autoContiuneTime -= dt;
        var time = Math.floor(this.autoContiuneTime);
        this.contiuneLabel.string = LocalizationManager_1.default.getInstance().get("TEXT_GAME_CONTIUNE", time + 1);
        this.autoContiuneTime < 0 && this.close();
      };
      Fish_QuitPanel.prototype.open = function(isShowEffect) {
        _super.prototype.showPopup.call(this);
        AudioManager_1.AudioManager.instance.playAudioEvent("QuitPanel_Open");
        this.node.position = cc.Vec3.ZERO;
        this.autoContiuneTime = 10;
      };
      Fish_QuitPanel.prototype.close = function() {
        _super.prototype.closePopup.call(this);
        AudioManager_1.AudioManager.instance.playAudioEvent("QuitPanel_Close");
      };
      Fish_QuitPanel.prototype.continueGame = function() {
        _super.prototype.closePopup.call(this);
        AudioManager_1.AudioManager.instance.playAudioEvent("QuitPanel_ContinueGame");
      };
      Fish_QuitPanel.prototype.updateNowBalance = function(balance) {
        this.nowBalance.string = CommonTool_1.CommonTool.getClientMoney(balance).toString();
      };
      Fish_QuitPanel.prototype.updateProfix = function(profix) {
        var uselabel = null;
        if (profix < 0) {
          this.minusProfix.node.active = true;
          this.plusProfix.node.active = false;
          uselabel = this.minusProfix;
        } else {
          this.minusProfix.node.active = false;
          this.plusProfix.node.active = true;
          uselabel = this.plusProfix;
        }
        uselabel.string = CommonTool_1.CommonTool.getClientMoney(profix).toString();
      };
      Fish_QuitPanel.prototype.updateOriginalBalance = function(originalBalance) {
        this.originalBalance.string = CommonTool_1.CommonTool.getClientMoney(originalBalance).toString();
      };
      __decorate([ property(cc.Label) ], Fish_QuitPanel.prototype, "originalBalance", void 0);
      __decorate([ property(cc.Label) ], Fish_QuitPanel.prototype, "nowBalance", void 0);
      __decorate([ property(cc.Label) ], Fish_QuitPanel.prototype, "plusProfix", void 0);
      __decorate([ property(cc.Label) ], Fish_QuitPanel.prototype, "minusProfix", void 0);
      __decorate([ property(cc.Label) ], Fish_QuitPanel.prototype, "contiuneLabel", void 0);
      Fish_QuitPanel = __decorate([ ccclass ], Fish_QuitPanel);
      return Fish_QuitPanel;
    }(BaseZoomPopup_1.default);
    exports.default = Fish_QuitPanel;
    cc._RF.pop();
  }, {
    "../../../../Common/Optional/Songlin/Popup/BaseZoomPopup": void 0,
    "../../../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../../../Common/Tools/CommonTool": void 0,
    "../../../../Common/Tools/Localization/LocalizationManager": void 0
  } ],
  Fish_RatioPool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57c35K9Kp5LxJfUmD+bIFfH", "Fish_RatioPool");
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
    var Fish_BasePool_1 = require("./Fish_BasePool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_RatioPool = function(_super) {
      __extends(Fish_RatioPool, _super);
      function Fish_RatioPool() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_RatioPool = __decorate([ ccclass ], Fish_RatioPool);
      return Fish_RatioPool;
    }(Fish_BasePool_1.Fish_BasePool);
    exports.default = Fish_RatioPool;
    cc._RF.pop();
  }, {
    "./Fish_BasePool": "Fish_BasePool"
  } ],
  Fish_RulePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8d5aOJnmtHxbkrUyMIug2b", "Fish_RulePanel");
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
    var BaseZoomPopup_1 = require("../../../../Common/Optional/Songlin/Popup/BaseZoomPopup");
    var AudioManager_1 = require("../../../../Common/Tools/AudioManager/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_RulePanel = function(_super) {
      __extends(Fish_RulePanel, _super);
      function Fish_RulePanel() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_RulePanel.prototype.init = function() {
        this.node.active = false;
      };
      Fish_RulePanel.prototype.open = function() {
        _super.prototype.showPopup.call(this);
        AudioManager_1.AudioManager.instance.playAudioEvent("RulePanel_Open");
        this.node.position = cc.Vec3.ZERO;
      };
      Fish_RulePanel.prototype.close = function() {
        _super.prototype.closePopup.call(this);
        AudioManager_1.AudioManager.instance.playAudioEvent("RulePanel_Close");
      };
      Fish_RulePanel = __decorate([ ccclass ], Fish_RulePanel);
      return Fish_RulePanel;
    }(BaseZoomPopup_1.default);
    exports.default = Fish_RulePanel;
    cc._RF.pop();
  }, {
    "../../../../Common/Optional/Songlin/Popup/BaseZoomPopup": void 0,
    "../../../../Common/Tools/AudioManager/AudioManager": void 0
  } ],
  Fish_SettingPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6a3dwBJ45Ibr0ta4XR9lTE", "Fish_SettingPanel");
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
    var WebEx_1 = require("../../../../Common/Optional/Jacky/Ex/WebEx");
    var BaseZoomPopup_1 = require("../../../../Common/Optional/Songlin/Popup/BaseZoomPopup");
    var AudioManager_1 = require("../../../../Common/Tools/AudioManager/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_SettingPanel = function(_super) {
      __extends(Fish_SettingPanel, _super);
      function Fish_SettingPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.musicToggle = null;
        _this.musicSlider = null;
        _this.musicFill = null;
        _this.soundToggle = null;
        _this.soundSlider = null;
        _this.soundFill = null;
        _this.versionLabel = null;
        _this.soundFillSize = null;
        _this.musicFillSize = null;
        return _this;
      }
      Fish_SettingPanel.prototype.init = function() {
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
      Fish_SettingPanel.prototype.onMusicToggle = function(tg) {
        if (tg.isChecked) {
          this.musicSlider.progress = 1;
          this.musicFill.fillRange = 1;
          this.musicFill.node.setContentSize(new cc.Size(this.musicFillSize.width, this.musicFillSize.height));
          AudioManager_1.AudioManager.instance.musicVolume = 1;
          AudioManager_1.AudioManager.instance.playAudioEvent("SettingPanel_OpenMusic");
        } else {
          this.musicSlider.progress = 0;
          this.musicFill.fillRange = 0;
          this.musicFill.node.setContentSize(new cc.Size(0, this.musicFillSize.height));
          AudioManager_1.AudioManager.instance.musicVolume = 0;
          AudioManager_1.AudioManager.instance.playAudioEvent("SettingPanel_CloseMusic");
        }
      };
      Fish_SettingPanel.prototype.onChangeMusicSlider = function(slider) {
        this.musicFill.node.setContentSize(new cc.Size(this.musicFillSize.width * slider.progress, this.musicFillSize.height));
        0 != slider.progress ? this.musicToggle.isChecked = true : this.musicToggle.isChecked = false;
        AudioManager_1.AudioManager.instance.musicVolume = slider.progress;
      };
      Fish_SettingPanel.prototype.onSoundToggle = function(tg) {
        if (tg.isChecked) {
          this.soundSlider.progress = 1;
          this.soundFill.fillRange = 1;
          this.soundFill.node.setContentSize(new cc.Size(this.soundFillSize.width, this.soundFillSize.height));
          AudioManager_1.AudioManager.instance.soundVolume = 1;
          AudioManager_1.AudioManager.instance.playAudioEvent("SettingPanel_OpenSound");
        } else {
          this.soundSlider.progress = 0;
          this.soundFill.fillRange = 0;
          this.soundFill.node.setContentSize(new cc.Size(0, this.soundFillSize.height));
          AudioManager_1.AudioManager.instance.soundVolume = 0;
          AudioManager_1.AudioManager.instance.playAudioEvent("SettingPanel_CloseSound");
        }
      };
      Fish_SettingPanel.prototype.onChangeSoundSlider = function(slider) {
        this.soundFill.node.setContentSize(new cc.Size(this.soundFillSize.width * slider.progress, this.soundFillSize.height));
        0 != slider.progress ? this.soundToggle.isChecked = true : this.soundToggle.isChecked = false;
        AudioManager_1.AudioManager.instance.soundVolume = slider.progress;
      };
      Fish_SettingPanel.prototype.OnCopyVersion = function() {
        WebEx_1.WebEx.copyToClipboard(this.versionLabel.string);
      };
      Fish_SettingPanel.prototype.open = function() {
        _super.prototype.showPopup.call(this);
        AudioManager_1.AudioManager.instance.playAudioEvent("SettingPanel_Open");
        this.node.setPosition(new cc.Vec2(0, 0));
      };
      Fish_SettingPanel.prototype.close = function() {
        _super.prototype.closePopup.call(this);
        AudioManager_1.AudioManager.instance.playAudioEvent("SettingPanel_Close");
      };
      Fish_SettingPanel.prototype.setVersion = function(version) {
        this.versionLabel.string = "Version\uff1a" + version;
      };
      __decorate([ property(cc.Toggle) ], Fish_SettingPanel.prototype, "musicToggle", void 0);
      __decorate([ property(cc.Slider) ], Fish_SettingPanel.prototype, "musicSlider", void 0);
      __decorate([ property(cc.Sprite) ], Fish_SettingPanel.prototype, "musicFill", void 0);
      __decorate([ property(cc.Toggle) ], Fish_SettingPanel.prototype, "soundToggle", void 0);
      __decorate([ property(cc.Slider) ], Fish_SettingPanel.prototype, "soundSlider", void 0);
      __decorate([ property(cc.Sprite) ], Fish_SettingPanel.prototype, "soundFill", void 0);
      __decorate([ property(cc.Label) ], Fish_SettingPanel.prototype, "versionLabel", void 0);
      Fish_SettingPanel = __decorate([ ccclass ], Fish_SettingPanel);
      return Fish_SettingPanel;
    }(BaseZoomPopup_1.default);
    exports.default = Fish_SettingPanel;
    cc._RF.pop();
  }, {
    "../../../../Common/Optional/Jacky/Ex/WebEx": void 0,
    "../../../../Common/Optional/Songlin/Popup/BaseZoomPopup": void 0,
    "../../../../Common/Tools/AudioManager/AudioManager": void 0
  } ],
  Fish_ShadowProjector: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c3b77L3ypBm5CPQKk7lCeu", "Fish_ShadowProjector");
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
    exports.Fish_ShadowProjector = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_ShadowProjector = function(_super) {
      __extends(Fish_ShadowProjector, _super);
      function Fish_ShadowProjector() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.renderTexture = null;
        _this.projectorCamera = null;
        _this.projectorTarget = null;
        return _this;
      }
      Fish_ShadowProjector.prototype.start = function() {
        this.renderTexture = new cc.RenderTexture();
        this.renderTexture.initWithSize(1680, 720);
        this.projectorCamera.targetTexture = this.renderTexture;
        this.projectorTarget.spriteFrame = new cc.SpriteFrame(this.renderTexture);
        var mat = this.projectorTarget.getMaterial(0);
        mat.setProperty("diffuseTexture", this.renderTexture, 0);
      };
      Fish_ShadowProjector.prototype.onDestroy = function() {
        var _a;
        null === (_a = this.renderTexture) || void 0 === _a ? void 0 : _a.destroy();
      };
      __decorate([ property(cc.Camera) ], Fish_ShadowProjector.prototype, "projectorCamera", void 0);
      __decorate([ property(cc.Sprite) ], Fish_ShadowProjector.prototype, "projectorTarget", void 0);
      Fish_ShadowProjector = __decorate([ ccclass ], Fish_ShadowProjector);
      return Fish_ShadowProjector;
    }(cc.Component);
    exports.Fish_ShadowProjector = Fish_ShadowProjector;
    cc._RF.pop();
  }, {} ],
  Fish_SocketManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba88eo46AtHLo5RIrWrBao4", "Fish_SocketManager");
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
    exports.Fish_SocketManager = void 0;
    var BaseSocketManager_1 = require("../../../Common/Tools/Base/BaseSocketManager");
    var LocalizationManager_1 = require("../../../Common/Tools/Localization/LocalizationManager");
    var Fish_DataManager_1 = require("../Manager/Fish_DataManager");
    var Fish_Protocol_1 = require("./SDK/Fish_Protocol");
    var Fish_SocketManager = function(_super) {
      __extends(Fish_SocketManager, _super);
      function Fish_SocketManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.testSocket = null;
        _this.isOffline = false;
        return _this;
      }
      Fish_SocketManager.prototype.init = function() {};
      Fish_SocketManager.prototype.registerEvents = function() {
        _super.prototype.registerEvents.call(this);
        this.registerOnSelfJJoinEvent();
        this.registerOnOtherJoinNoticeEvent();
        this.registerOnOtherLeaveNoticeEvent();
        this.registerOnOtherDisconnectNoticeEvent();
        this.registerOnOtherTurretUpdateNoticeEvent();
        this.registerOnOtherFireNoticeEvent();
        this.registerOnHitNoticeEvent();
        this.registerOnOtherAdditionCarryAmountEvent();
        this.registerOnChangeSceneEvent();
        this.registerOnFishBornEvent();
        this.registerOnBossComingEvent();
        this.registerOnJackpotRefreshEvent();
        this.registerOnJackpotWinningEvent();
        this.registerOnPlayerIdleWarnEvent();
        this.registerOnFinalSkillEvent();
        this.registerOnInviteFriendEvent();
        window["fireCount"] = 0;
        window["hitCount"] = 0;
      };
      Fish_SocketManager.prototype.offLineReceive = function(event, message, eventName) {
        this.receive(event, message, eventName);
      };
      Fish_SocketManager.prototype.login = function() {
        _super.prototype.login.call(this);
      };
      Fish_SocketManager.prototype.themeDataList = function() {
        return Fish_DataManager_1.default.offLineMode ? this.testSocket.themeDataList() : this.request("themeDataList", this.client.themeDataList.bind(this.client), null);
      };
      Fish_SocketManager.prototype.plus = function(param) {
        var _this = this;
        return this.isOffline ? this.testSocket.plus() : new Promise(function(resolve, reject) {
          _this.request("plus", _this.client.plus.bind(_this.client), param).then(function() {
            resolve();
          }).catch(function(error) {
            if (2001 == error.code) {
              error.code = GameClient.errCode.JOIN_ROOM_FAIL;
              _this.socketError.errorMessage(error, LocalizationManager_1.default.getInstance().get("ERROR_JOIN_ROOM_FAIL"));
            }
            reject();
          });
        });
      };
      Fish_SocketManager.prototype.leave = function() {
        if (this.isOffline) return Promise.resolve();
        return this.request("leave", this.client.leave.bind(this.client), null);
      };
      Fish_SocketManager.prototype.turretUpdate = function(param) {
        if (this.isOffline) return Promise.resolve();
        return this.request("turretUpdate", this.client.turretUpdate.bind(this.client), param);
      };
      Fish_SocketManager.prototype.hit = function(param) {
        if (this.isOffline) return this.testSocket.hit(param);
        return this.request("hit", this.client.hit.bind(this.client), param);
      };
      Fish_SocketManager.prototype.additionCarryAmount = function(param) {
        if (this.isOffline) return;
        return this.request("additionCarryAmount", this.client.additionCarryAmount.bind(this.client), param);
      };
      Fish_SocketManager.prototype.fire = function(param) {
        if (this.isOffline) return Promise.resolve();
        return this.request("fire", this.client.fire.bind(this.client), param);
      };
      Fish_SocketManager.prototype.registerOnSelfJJoinEvent = function() {
        var _this = this;
        this.client.setOnSelfJoin(function(data) {
          _this.receive(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_SELF_JOIN, data, "selfJoin");
        });
      };
      Fish_SocketManager.prototype.registerOnOtherJoinNoticeEvent = function() {
        var _this = this;
        this.client.setOnOtherJoinNotice(function(data) {
          _this.receive(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_JOIN_NOTICE, data, "otherJoinNotice");
        });
      };
      Fish_SocketManager.prototype.registerOnOtherLeaveNoticeEvent = function() {
        var _this = this;
        this.client.setOnOtherLeaveNotice(function(data) {
          _this.receive(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_LEAVE_NOTICE, data, "otherLeaveNotice");
        });
      };
      Fish_SocketManager.prototype.registerOnOtherDisconnectNoticeEvent = function() {
        var _this = this;
        this.client.setOnOtherDisconnectNotice(function(data) {
          _this.receive(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_DISCONNECT_NOTICE, data, "otherDisconnectNotice");
        });
      };
      Fish_SocketManager.prototype.registerOnOtherTurretUpdateNoticeEvent = function() {
        var _this = this;
        this.client.setOnOtherTurretUpdateNotice(function(data) {
          _this.receive(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_TURRET_UPDATE_NOTICE, data, "otherTurretUpdateNotice");
        });
      };
      Fish_SocketManager.prototype.registerOnOtherFireNoticeEvent = function() {
        var _this = this;
        this.client.setOnOtherFireNotice(function(data) {
          _this.receive(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_FIRE_NOTICE, data, "otherFireNotice");
        });
      };
      Fish_SocketManager.prototype.registerOnHitNoticeEvent = function() {
        var _this = this;
        this.client.setOnHitNotice(function(data) {
          _this.receive(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_HIT_NOTICE, data, "hitNotice");
        });
      };
      Fish_SocketManager.prototype.registerOnOtherAdditionCarryAmountEvent = function() {
        var _this = this;
        this.client.setOnOtherAdditionCarryAmount(function(data) {
          _this.receive(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_OTHER_ADDITION_CARRY_AMOUNT, data, "otherAdditionCarryAmount");
        });
      };
      Fish_SocketManager.prototype.registerOnChangeSceneEvent = function() {
        var _this = this;
        this.client.setOnChangeScene(function(data) {
          _this.receive(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_CHANGE_SCENE, data, "changeScene");
        });
      };
      Fish_SocketManager.prototype.registerOnFishBornEvent = function() {
        var _this = this;
        this.client.setOnFishBorn(function(data) {
          _this.receive(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_FISH_BORN, data, "fishBorn");
        });
      };
      Fish_SocketManager.prototype.registerOnBossComingEvent = function() {
        var _this = this;
        this.client.setOnBossComming(function(data) {
          _this.receive(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_BOSS_COMING, data, "bossComing");
        });
      };
      Fish_SocketManager.prototype.registerOnJackpotRefreshEvent = function() {
        var _this = this;
        this.client.setJackpotRefresh(function(data) {
          _this.receive(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_JACKPOT_REFRESH, data, "jackpotRefresh");
        });
      };
      Fish_SocketManager.prototype.registerOnJackpotWinningEvent = function() {
        var _this = this;
        this.client.setJackpotWinning(function(data) {
          _this.receive(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_JACKPOT_WINNING, data, "jackpotWinning");
        });
      };
      Fish_SocketManager.prototype.registerOnPlayerIdleWarnEvent = function() {
        var _this = this;
        this.client.setPlayerIdleWarn(function(data) {
          _this.receive(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_PLAYER_IDLE_WARN, data, "playerIdleWarn");
        });
      };
      Fish_SocketManager.prototype.registerOnFinalSkillEvent = function() {
        var _this = this;
        this.client.setFinalSkillNotice(function(data) {
          _this.receive(Fish_Protocol_1.SERVER_TO_USER_PROTOCOL.ON_FINAL_SKILL, data, "finalSkill");
        });
      };
      Fish_SocketManager.prototype.testBornFish = function() {
        this.testSocket.testBornFish();
      };
      return Fish_SocketManager;
    }(BaseSocketManager_1.default);
    exports.Fish_SocketManager = Fish_SocketManager;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/Base/BaseSocketManager": void 0,
    "../../../Common/Tools/Localization/LocalizationManager": void 0,
    "../Manager/Fish_DataManager": "Fish_DataManager",
    "./SDK/Fish_Protocol": "Fish_Protocol"
  } ],
  Fish_TestSocket: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b444bqtFhIo4Q7VkdOwKKI", "Fish_TestSocket");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Fish_TestSocket = void 0;
    var Fish_TestSocket = function() {
      function Fish_TestSocket() {}
      Fish_TestSocket.prototype.login = function() {
        return;
      };
      Fish_TestSocket.prototype.themeDataList = function() {
        return;
      };
      Fish_TestSocket.prototype.plus = function() {
        return;
      };
      Fish_TestSocket.prototype.hit = function(data) {
        return;
      };
      Fish_TestSocket.prototype.testBornFish = function() {};
      return Fish_TestSocket;
    }();
    exports.Fish_TestSocket = Fish_TestSocket;
    cc._RF.pop();
  }, {} ],
  Fish_TutorialPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8a351tbRW9M4r14eCZHDK7M", "Fish_TutorialPanel");
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
    var Fish_TutorialPanel = function(_super) {
      __extends(Fish_TutorialPanel, _super);
      function Fish_TutorialPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.touchArea = null;
        _this.tipItems = [];
        _this.selfTip = null;
        _this.index = 0;
        _this.currentTip = null;
        _this.selfTipTween = null;
        _this.socket = null;
        return _this;
      }
      Fish_TutorialPanel.prototype.init = function() {
        this.node.active = false;
        this.node.position = cc.Vec3.ZERO;
      };
      Fish_TutorialPanel.prototype.onEnable = function() {
        this.selfTipEffect(true);
        this.play();
      };
      Fish_TutorialPanel.prototype.onDisable = function() {
        this.selfTipEffect(false);
      };
      Fish_TutorialPanel.prototype.show = function(socket) {
        this.node.active = true;
        this.socket = socket;
      };
      Fish_TutorialPanel.prototype.hide = function() {
        this.node.active = false;
      };
      Fish_TutorialPanel.prototype.play = function() {
        this.index = 0;
        this.tipItems.forEach(function(item) {
          return item.active = false;
        });
        this.tipItems[0].active = true;
        this.currentTip = this.tipItems[0];
        this.selfTip.active = true;
      };
      Fish_TutorialPanel.prototype.next = function() {
        cc.log("click");
        this.index++;
        if (this.index === this.tipItems.length) {
          this.hide();
          this.socket.tutorialFinish();
          return;
        }
        this.currentTip.active = false;
        this.tipItems[this.index].active = true;
        this.currentTip = this.tipItems[this.index];
      };
      Fish_TutorialPanel.prototype.selfTipEffect = function(swh) {};
      __decorate([ property(cc.Node) ], Fish_TutorialPanel.prototype, "touchArea", void 0);
      __decorate([ property([ cc.Node ]) ], Fish_TutorialPanel.prototype, "tipItems", void 0);
      __decorate([ property(cc.Node) ], Fish_TutorialPanel.prototype, "selfTip", void 0);
      Fish_TutorialPanel = __decorate([ ccclass ], Fish_TutorialPanel);
      return Fish_TutorialPanel;
    }(cc.Component);
    exports.default = Fish_TutorialPanel;
    cc._RF.pop();
  }, {} ],
  Fish_WaitingDialogBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cda7eDYYtpF7LAVvuRMBdpG", "Fish_WaitingDialogBox");
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
    var BaseWaitingDialogBox_1 = require("../../../Common/Tools/DynamicPopUp/DialogBox/BaseWaitingDialogBox");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_WaitingDialogBox = function(_super) {
      __extends(Fish_WaitingDialogBox, _super);
      function Fish_WaitingDialogBox() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.innerCircle = null;
        _this.outerCircle = null;
        _this.loadingWord = null;
        return _this;
      }
      Fish_WaitingDialogBox.prototype.onLoad = function() {
        cc.tween(this.innerCircle).by(2, {
          angle: 360
        }).repeatForever().start();
        cc.tween(this.outerCircle).by(2, {
          angle: -360
        }).repeatForever().start();
        cc.tween(this.loadingWord).repeatForever(cc.tween().to(1, {
          opacity: 0
        }).to(1, {
          opacity: 255
        })).start();
      };
      __decorate([ property(cc.Node) ], Fish_WaitingDialogBox.prototype, "innerCircle", void 0);
      __decorate([ property(cc.Node) ], Fish_WaitingDialogBox.prototype, "outerCircle", void 0);
      __decorate([ property(cc.Node) ], Fish_WaitingDialogBox.prototype, "loadingWord", void 0);
      Fish_WaitingDialogBox = __decorate([ ccclass ], Fish_WaitingDialogBox);
      return Fish_WaitingDialogBox;
    }(BaseWaitingDialogBox_1.default);
    exports.default = Fish_WaitingDialogBox;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/DynamicPopUp/DialogBox/BaseWaitingDialogBox": void 0
  } ],
  Fish_YNDialogBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72221eWWQ1Np7gmyRlpan1z", "Fish_YNDialogBox");
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
    var BaseYNDialogBox_1 = require("../../../Common/Tools/DynamicPopUp/DialogBox/BaseYNDialogBox");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Fish_YNDialogBox = function(_super) {
      __extends(Fish_YNDialogBox, _super);
      function Fish_YNDialogBox() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Fish_YNDialogBox = __decorate([ ccclass ], Fish_YNDialogBox);
      return Fish_YNDialogBox;
    }(BaseYNDialogBox_1.default);
    exports.default = Fish_YNDialogBox;
    cc._RF.pop();
  }, {
    "../../../Common/Tools/DynamicPopUp/DialogBox/BaseYNDialogBox": void 0
  } ]
}, {}, [ "Fish_CarryMoneyEnterPanel", "Fish_CarryMoneyInfoPanel", "Fish_ConfirmDialogBox", "Fish_WaitingDialogBox", "Fish_YNDialogBox", "Fish_DataManager", "Fish_DynamicPopUpManager", "Fish_AddCoinPool", "Fish_BasePool", "Fish_BubbleKillEffectPool", "Fish_BulletHitPool", "Fish_BulletPool", "Fish_CoinPool", "Fish_DeadEffectPool", "Fish_FishPool", "Fish_FxBlackHolePool", "Fish_ItemPool", "Fish_PayoutPool", "Fish_RatioPool", "Fish_SocketManager", "Fish_TestSocket", "Fish_Protocol", "FIsh_GameManager", "FIsh_Player", "Fish_Bullet", "Fish_Fish", "Fish_FishEffect", "Fish_ShadowProjector", "Fish_GameUI", "Fish_AutoGamePanel", "Fish_AutoGamePanel_Fish", "Fish_BossArrivePanel", "Fish_HistoryPanel", "Fish_IllustratedBookPanel", "Fish_IllustratedBook_Fish", "Fish_LuckyRoulettePanel", "Fish_QuitPanel", "Fish_RulePanel", "Fish_SettingPanel", "Fish_TutorialPanel", "Fish_HistoryDetailItem", "Fish_HistoryItem", "Fish_Interface", "Fish_LoadingItem", "Fish_LoadingManager", "Fish_LobbyManager", "Fish_LobbyUI" ]);