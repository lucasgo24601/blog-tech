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
  BigFishSetting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4dacbUc4YxNaqyz+8KlgOon", "BigFishSetting");
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
    var Fish_Fish_1 = require("../../../FishFramework/Game/Fish_Fish");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
    var BigFishSetting = function(_super) {
      __extends(BigFishSetting, _super);
      function BigFishSetting() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.colliderCount = 0;
        return _this;
      }
      BigFishSetting.prototype.onLoad = function() {
        this.setClickEvent();
      };
      BigFishSetting.prototype.setClickEvent = function() {
        this.node.getComponent(Fish_Fish_1.Fish_Fish).boxColliders.forEach(function(item) {
          var btn = item.node.getComponent(cc.Button);
          btn.clickEvents = [ new cc.Component.EventHandler() ];
          btn.clickEvents[0].component = "G61_Game";
          btn.clickEvents[0].handler = "onClickFishLock";
          btn.clickEvents[0].target = cc.find("Canvas");
        });
      };
      BigFishSetting.prototype.rename = function() {
        var _this = this;
        this.node.getComponent(Fish_Fish_1.Fish_Fish).boxColliders.forEach(function(item) {
          return item.node.name = _this.findAnimationName(item.node);
        });
      };
      BigFishSetting.prototype.findAnimationName = function(node) {
        var name = "";
        node.name.includes("swim_w") ? name = "swim_w" : node.name.includes("swim_8") && (name = "swim_8");
        return name || this.findAnimationName(node.parent);
      };
      BigFishSetting.prototype.setCollider = function(node) {
        var _this = this;
        if (!node.getComponent(sp.Skeleton) && node.name.includes("Hit")) {
          var box = node.getComponent(cc.BoxCollider) || node.addComponent(cc.BoxCollider);
          var graphics = node.getComponent(cc.Graphics) || node.addComponent(cc.Graphics);
          box.size.width = box.size.height = 200;
          graphics.strokeColor = cc.Color.RED;
          graphics.lineWidth = 10;
          graphics.rect(-100, -100, 200, 200);
          graphics.stroke();
          node.width = node.height = 200;
        }
        node.childrenCount && node.children.forEach(function(child) {
          return _this.setCollider(child);
        });
      };
      BigFishSetting.prototype.setLockPoint = function(node) {
        var _this = this;
        if (node.getComponent(cc.BoxCollider) && (node.name.includes("Body") || node.name.includes("Head"))) {
          var fish = this.node.getComponent(Fish_Fish_1.Fish_Fish);
          fish.boxColliders.push(new Fish_Fish_1.Fish_BoxCollider());
          fish.boxColliders[fish.boxColliders.length - 1].node = node;
          fish.boxColliders[fish.boxColliders.length - 1].weighting = 0;
        }
        node.childrenCount && node.children.forEach(function(child) {
          return _this.setLockPoint(child);
        });
      };
      BigFishSetting.prototype.count = function(node) {
        var _this = this;
        node.getComponent(cc.BoxCollider) && this.colliderCount++;
        node.childrenCount && node.children.forEach(function(child) {
          return _this.count(child);
        });
      };
      BigFishSetting.prototype.clearGraphics = function(node) {
        var _this = this;
        node.getComponent(cc.Graphics) && node.removeComponent(cc.Graphics);
        node.childrenCount && node.children.forEach(function(child) {
          return _this.clearGraphics(child);
        });
      };
      BigFishSetting = __decorate([ ccclass, executeInEditMode ], BigFishSetting);
      return BigFishSetting;
    }(cc.Component);
    exports.default = BigFishSetting;
    cc._RF.pop();
  }, {
    "../../../FishFramework/Game/Fish_Fish": void 0
  } ],
  G61_AutoGamePanel_Fish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7e3e5mEiJB/4unFsYo7r40", "G61_AutoGamePanel_Fish");
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
    var Fish_AutoGamePanel_Fish_1 = require("../../../../FishFramework/Game/View/Panel/Fish_AutoGamePanel_Fish");
    var G61_DataManager_1 = require("../../../Common/G61_DataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G61_AutoGamePanel_Fish = function(_super) {
      __extends(G61_AutoGamePanel_Fish, _super);
      function G61_AutoGamePanel_Fish() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.data = null;
        return _this;
      }
      G61_AutoGamePanel_Fish.prototype.init = function(fishType, isSelect) {
        this.data = G61_DataManager_1.G61_DataManager.getInstance();
        _super.prototype.init.call(this, fishType, isSelect);
      };
      G61_AutoGamePanel_Fish.prototype.start = function() {};
      G61_AutoGamePanel_Fish = __decorate([ ccclass ], G61_AutoGamePanel_Fish);
      return G61_AutoGamePanel_Fish;
    }(Fish_AutoGamePanel_Fish_1.default);
    exports.default = G61_AutoGamePanel_Fish;
    cc._RF.pop();
  }, {
    "../../../../FishFramework/Game/View/Panel/Fish_AutoGamePanel_Fish": void 0,
    "../../../Common/G61_DataManager": "G61_DataManager"
  } ],
  G61_AutoGamePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d008vp/ElPaKyAiaDZtMhV", "G61_AutoGamePanel");
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
    var Fish_AutoGamePanel_1 = require("../../../../FishFramework/Game/View/Panel/Fish_AutoGamePanel");
    var G61_DataManager_1 = require("../../../Common/G61_DataManager");
    var G61_AutoGamePanel_Fish_1 = require("./G61_AutoGamePanel_Fish");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G61_AutoGamePanel = function(_super) {
      __extends(G61_AutoGamePanel, _super);
      function G61_AutoGamePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.fishs = [];
        _this.data = null;
        _this.fishIllustartedTypes = [ 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 201, 202, 203, 204, 205, 206, 207, 301, 302, 303, 401, 402, 403, 501, 502, 503, 504, 505, 506 ];
        return _this;
      }
      G61_AutoGamePanel.prototype.init = function(tipFunction) {
        this.data = G61_DataManager_1.G61_DataManager.getInstance();
        _super.prototype.init.call(this, tipFunction);
      };
      __decorate([ property({
        type: [ G61_AutoGamePanel_Fish_1.default ],
        override: true
      }) ], G61_AutoGamePanel.prototype, "fishs", void 0);
      G61_AutoGamePanel = __decorate([ ccclass ], G61_AutoGamePanel);
      return G61_AutoGamePanel;
    }(Fish_AutoGamePanel_1.default);
    exports.default = G61_AutoGamePanel;
    cc._RF.pop();
  }, {
    "../../../../FishFramework/Game/View/Panel/Fish_AutoGamePanel": void 0,
    "../../../Common/G61_DataManager": "G61_DataManager",
    "./G61_AutoGamePanel_Fish": "G61_AutoGamePanel_Fish"
  } ],
  G61_BossArrivePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8279qZfcFNKYYO1LlHAiqa", "G61_BossArrivePanel");
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
    var Fish_BossArrivePanel_1 = require("../../../../FishFramework/Game/View/Panel/Fish_BossArrivePanel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G61_BossArrivePanel = function(_super) {
      __extends(G61_BossArrivePanel, _super);
      function G61_BossArrivePanel() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      G61_BossArrivePanel.prototype.onEnable = function() {
        _super.prototype.onEnable.call(this);
        this.an.on("finished", this.close, this);
      };
      G61_BossArrivePanel.prototype.onDisable = function() {
        _super.prototype.onDisable.call(this);
        this.an.off("finished", this.close, this);
      };
      G61_BossArrivePanel.prototype.open = function(bossType) {
        _super.prototype.open.call(this, bossType);
        this.playAnimation(bossType);
      };
      G61_BossArrivePanel.prototype.close = function() {
        _super.prototype.close.call(this);
        this.an.node.active = false;
        this.node.active = false;
      };
      G61_BossArrivePanel.prototype.playAnimation = function(bossType) {
        this.an.node.active = true;
        this.bossOptions.forEach(function(option) {
          option.frameNode.active = option.nameNode.active = bossType === option.bossType;
        });
        this.an.play();
      };
      G61_BossArrivePanel = __decorate([ ccclass ], G61_BossArrivePanel);
      return G61_BossArrivePanel;
    }(Fish_BossArrivePanel_1.default);
    exports.default = G61_BossArrivePanel;
    cc._RF.pop();
  }, {
    "../../../../FishFramework/Game/View/Panel/Fish_BossArrivePanel": void 0
  } ],
  G61_Bullet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1df2cQ6vz9KQZ0BsVds6Dln", "G61_Bullet");
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
    var Fish_Bullet_1 = require("../../FishFramework/Game/Fish_Bullet");
    var G61_DataManager_1 = require("../Common/G61_DataManager");
    var G61_SocketManager_1 = require("../Common/Socket/G61_SocketManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var G61_Bullet = function(_super) {
      __extends(G61_Bullet, _super);
      function G61_Bullet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.data = null;
        _this.socket = null;
        _this.isDying = false;
        _this.drillTween = null;
        return _this;
      }
      G61_Bullet.prototype.init = function(data) {
        this.data = G61_DataManager_1.G61_DataManager.getInstance();
        this.socket = G61_SocketManager_1.default.getInstance();
        _super.prototype.init.call(this, data);
      };
      G61_Bullet.prototype.reset = function() {
        this.resetDyingDrill();
        _super.prototype.reset.call(this);
      };
      G61_Bullet.prototype.rotate = function(moveDirection) {
        if (this.isDying) return;
        _super.prototype.rotate.call(this, moveDirection);
      };
      G61_Bullet.prototype.checkHitWallTimes = function() {
        var _this = this;
        if (this.isDying && this.type === Fish_Bullet_1.BULLET_TYPE.DRILL) {
          this.canHitWallTimes--;
          AudioManager_1.AudioManager.instance.playAudioEvent("Drill_Rebound");
          if (-2 === this.canHitWallTimes) {
            this.scheduleOnce(function() {
              _this.canMove = false;
              _this.resetDyingDrill();
              AudioManager_1.AudioManager.instance.playAudioEvent("Drill_End");
            }, 1.5);
            this.scheduleOnce(function() {
              _this.drillSpine.setAnimation(0, "play_end", false);
              _this.drillSpine.setCompleteListener(function() {
                _this.drillSpine.setCompleteListener(null);
                _this.reset();
              });
            }, 1);
          }
        }
        if (this.canHitWallTimes < 0) return;
        this.canHitWallTimes--;
        this.type === Fish_Bullet_1.BULLET_TYPE.DRILL && AudioManager_1.AudioManager.instance.playAudioEvent("Drill_Rebound");
        if (0 === this.canHitWallTimes) if (this.type === Fish_Bullet_1.BULLET_TYPE.DRILL) {
          this.getComponent(cc.BoxCollider).enabled = false;
          this.isDying = true;
          this.drillSpine.setAnimation(0, "play_ready", false);
          this.drillTween = cc.tween(this.node).by(3, {
            rotation: -360
          }).repeatForever().start();
        } else this.type === Fish_Bullet_1.BULLET_TYPE.LASER && this.belongPlayer === this.data.selfSeatIdx ? this.sendAllHit(Fish_Bullet_1.BULLET_TYPE.LASER) : this.reset();
      };
      G61_Bullet.prototype.setType = function(type) {
        var _this = this;
        var boxCollider = this.getComponent(cc.BoxCollider);
        this.type = type;
        this.single.active = false;
        this.double.active = false;
        this.drill.active = false;
        switch (type) {
         case Fish_Bullet_1.BULLET_TYPE.SINGLE:
          this.single.active = true;
          boxCollider.size = cc.size(50, 75);
          boxCollider.offset = cc.v2(0, 35);
          break;

         case Fish_Bullet_1.BULLET_TYPE.DOUBLE:
          this.double.active = true;
          boxCollider.size = cc.size(90, 75);
          boxCollider.offset = cc.v2(0, 35);
          break;

         case Fish_Bullet_1.BULLET_TYPE.DRILL:
          this.canHitFishTimes = -1;
          this.canHitWallTimes = 7;
          this.changeSpeed = .5;
          this.drill.active = true;
          boxCollider.size = cc.size(125, 150);
          boxCollider.offset = cc.v2(0, 70);
          this.drillSpine.setAnimation(0, "play_shoot", true);
          break;

         case Fish_Bullet_1.BULLET_TYPE.LASER:
          this.canHitFishTimes = -1;
          this.canHitWallTimes = 1;
          boxCollider.size = cc.size(380, 1680);
          boxCollider.offset = cc.v2(0, 840);
          break;

         case Fish_Bullet_1.BULLET_TYPE.BLACK_HOLE:
          this.canMove = false;
          this.canHitFishTimes = -1;
          this.canHitWallTimes = -1;
          this.getComponent(cc.BoxCollider).enabled = false;
          this.getComponent(cc.CircleCollider).enabled = true;
          this.scheduleOnce(function() {
            _this.belongPlayer === _this.data.selfSeatIdx ? _this.sendAllHit(Fish_Bullet_1.BULLET_TYPE.BLACK_HOLE) : _this.reset();
          }, .1);
        }
      };
      G61_Bullet.prototype.resetDyingDrill = function() {
        var _a;
        null === (_a = this.drillTween) || void 0 === _a ? void 0 : _a.stop();
        this.drillTween = null;
        this.isDying = false;
      };
      G61_Bullet = __decorate([ ccclass ], G61_Bullet);
      return G61_Bullet;
    }(Fish_Bullet_1.default);
    exports.default = G61_Bullet;
    cc._RF.pop();
  }, {
    "../../Common/Tools/AudioManager/AudioManager": void 0,
    "../../FishFramework/Game/Fish_Bullet": void 0,
    "../Common/G61_DataManager": "G61_DataManager",
    "../Common/Socket/G61_SocketManager": "G61_SocketManager"
  } ],
  G61_DataManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "680ce8HvHlAkZPSFQ1KMJT/", "G61_DataManager");
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
    exports.G61_DataManager = void 0;
    var Fish_DataManager_1 = require("../../FishFramework/Common/Manager/Fish_DataManager");
    var G61_DataManager = function(_super) {
      __extends(G61_DataManager, _super);
      function G61_DataManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.onShowErrorLog = function(eventName, message) {
          cc.log("onShowErrorLog");
          cc.log(eventName);
          cc.log(message);
        };
        return _this;
      }
      G61_DataManager.prototype.init = function() {
        _super.prototype.init.call(this);
        this.gameID = 61;
        this.path = "G61_RichOcean";
        this.skin = "Normal";
      };
      G61_DataManager.prototype.initFishOdds = function() {
        this.fishOdds[101] = "2";
        this.fishOdds[102] = "3";
        this.fishOdds[103] = "4";
        this.fishOdds[104] = "4";
        this.fishOdds[105] = "5";
        this.fishOdds[106] = "5";
        this.fishOdds[107] = "6";
        this.fishOdds[108] = "6";
        this.fishOdds[109] = "8";
        this.fishOdds[110] = "8";
        this.fishOdds[111] = "10";
        this.fishOdds[112] = "10";
        this.fishOdds[201] = "12";
        this.fishOdds[202] = "12";
        this.fishOdds[203] = "20";
        this.fishOdds[204] = "30";
        this.fishOdds[205] = "40";
        this.fishOdds[206] = "50";
        this.fishOdds[207] = "88";
        this.fishOdds[301] = "120";
        this.fishOdds[302] = "150";
        this.fishOdds[303] = "200";
        this.fishOdds[401] = "120";
        this.fishOdds[402] = "150";
        this.fishOdds[403] = "200";
        this.fishOdds[501] = "20+";
        this.fishOdds[502] = "20+";
        this.fishOdds[503] = "20+";
        this.fishOdds[504] = "20+";
        this.fishOdds[505] = "20+";
        this.fishOdds[506] = "20+";
      };
      return G61_DataManager;
    }(Fish_DataManager_1.default);
    exports.G61_DataManager = G61_DataManager;
    cc._RF.pop();
  }, {
    "../../FishFramework/Common/Manager/Fish_DataManager": void 0
  } ],
  G61_DesignTool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9576qC2e9EJ5Zzd4yQcbiE", "G61_DesignTool");
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
    exports.G61_DesignTool = void 0;
    var G61_FishStep_1 = require("./G61_FishStep");
    var G61_FishWayDesign_1 = require("./G61_FishWayDesign");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
    var G61_DesignTool = function(_super) {
      __extends(G61_DesignTool, _super);
      function G61_DesignTool() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.currentFishTarget = null;
        _this.currentWayTarget = null;
        _this.wayNode = null;
        _this.fishNode = null;
        _this.offsetNode = null;
        _this.fishListNode = null;
        _this.wayListNode = null;
        _this.previewBtn = null;
        _this.inputData = "";
        return _this;
      }
      G61_DesignTool.prototype.onLoad = function() {
        false;
        this.initLists();
        this.previewBtn.node.on("click", this.onClickPreviewBtn, this);
        this.output();
      };
      G61_DesignTool.prototype.initLists = function() {
        var sample = this.fishListNode.getComponent(cc.ScrollView).content.children[0];
        for (var i = 0, length = this.fishNode.childrenCount; i < length; i++) {
          var fish = this.fishNode.children[i];
          fish.active = false;
          var addItem = cc.instantiate(sample);
          addItem.getComponentInChildren(cc.Label).string = fish.name;
          this.fishListNode.getComponent(cc.ScrollView).content.addChild(addItem);
          addItem.on("toggle", this.onClickFishToggle.bind(this, fish.name));
          if (!i) {
            addItem.getComponent(cc.Toggle).isChecked = true;
            this.currentFishTarget = fish.name;
            cc.log("\u9810\u8a2d\u7684\u9b5a", this.currentFishTarget);
          }
        }
        sample.destroy();
        sample = this.wayListNode.getComponent(cc.ScrollView).content.children[0];
        for (var i = 0, length = this.wayNode.childrenCount; i < length; i++) {
          var way = this.wayNode.children[i];
          way.active = false;
          way.name += "" + i;
          var addItem = cc.instantiate(sample);
          addItem.getComponentInChildren(cc.Label).string = way.name;
          this.wayListNode.getComponent(cc.ScrollView).content.addChild(addItem);
          addItem.on("toggle", this.onClickWayToggle.bind(this, way.name));
          if (!i) {
            addItem.getComponent(cc.Toggle).isChecked = true;
            this.currentWayTarget = way.name;
            cc.log("\u9810\u8a2d\u7684\u8def\u5f91", this.currentWayTarget);
          }
        }
        sample.destroy();
      };
      G61_DesignTool.prototype.onClickFishToggle = function(target) {
        cc.log("\u9b5a\u7684\u9078\u64c7\u662f", target);
        this.currentFishTarget = target;
      };
      G61_DesignTool.prototype.onClickWayToggle = function(target) {
        cc.log("\u8def\u7dda\u7684\u9078\u64c7\u662f", target);
        this.currentWayTarget = target;
      };
      G61_DesignTool.prototype.onClickPreviewBtn = function() {
        var fish = this.fishNode.getChildByName(this.currentFishTarget);
        fish.active = true;
        var way = this.wayNode.getChildByName(this.currentWayTarget);
        way.getComponent("G61_FishWayDesign").target = fish;
        way.active = true;
        this.node.active = false;
      };
      G61_DesignTool.prototype.input = function() {
        var _this = this;
        if (this.inputData) {
          var data = JSON.parse(this.inputData);
          data.forEach(function(way, index) {
            var wayNode = new cc.Node();
            wayNode.name = "way" + (index + 1);
            _this.wayNode.addChild(wayNode);
            var graphics = wayNode.addComponent(cc.Graphics);
            graphics.lineWidth = 5;
            var wayDesign = wayNode.addComponent(G61_FishWayDesign_1.G61_FishWayDesign);
            wayDesign.fishDirection = way[0].d;
            way.forEach(function(step) {
              var stepNode = new cc.Node();
              stepNode.name = "step";
              var fishStep = stepNode.addComponent(G61_FishStep_1.G61_FishStep);
              stepNode.x = step.f.x;
              stepNode.y = step.f.y;
              wayNode.addChild(stepNode);
            });
            wayNode.active = false;
          });
          this.inputData = "";
        }
      };
      G61_DesignTool.prototype.output = function() {
        var _this = this;
        var pathConfig = [];
        var timeConfig = [];
        var offsetConfig = {};
        this.wayNode.children.forEach(function(way) {
          var wayData = [];
          var timeCount = 0;
          for (var i = 0, length = way.childrenCount; i < length; i++) {
            if (i === length - 1) break;
            wayData.push({
              i: i,
              f: new cc.Vec2(way.children[i].x, way.children[i].y),
              t: new cc.Vec2(way.children[i + 1].x, way.children[i + 1].y),
              m: way.children[i].getComponent("G61_FishStep").movementTime,
              r: way.children[i].getComponent("G61_FishStep").rotateSpeed,
              d: way.getComponent("G61_FishWayDesign").fishDirection
            });
            timeCount += way.children[i].getComponent("G61_FishStep").movementTime;
          }
          pathConfig.push(wayData);
          timeConfig.push(timeCount);
          var wayMirrorData = [];
          timeCount = 0;
          for (var i = 0, length = way.childrenCount; i < length; i++) {
            if (i === length - 1) break;
            var from = _this.coordinatesTranslate([ way.children[i].x, way.children[i].y ], G61_FishWayDesign_1.MIRROR_OPTION.HORIZONTAL);
            var to = _this.coordinatesTranslate([ way.children[i + 1].x, way.children[i + 1].y ], G61_FishWayDesign_1.MIRROR_OPTION.HORIZONTAL);
            var direction = way.getComponent("G61_FishWayDesign").fishDirection ? 0 : 1;
            wayMirrorData.push({
              i: i,
              f: new cc.Vec2(from[0], from[1]),
              t: new cc.Vec2(to[0], to[1]),
              m: way.children[i].getComponent("G61_FishStep").movementTime,
              r: way.children[i].getComponent("G61_FishStep").rotateSpeed,
              d: direction
            });
            timeCount += way.children[i].getComponent("G61_FishStep").movementTime;
          }
          pathConfig.push(wayMirrorData);
          timeConfig.push(timeCount);
        });
        this.offsetNode.children.forEach(function(child) {
          var config = [];
          child.children.forEach(function(item) {
            config.push({
              offset: [ item.x, item.y ],
              fishType: +item.name
            });
          });
          offsetConfig[child.name] = config;
        });
        cc.log("\u8def\u5f91\u8a2d\u5b9a", pathConfig);
        cc.log("\u8def\u5f91\u6642\u9593", timeConfig);
        cc.log("\u504f\u79fb\u8a2d\u5b9a", offsetConfig);
      };
      G61_DesignTool.prototype.coordinatesTranslate = function(coordinates) {
        var mirrorOption = [];
        for (var _i = 1; _i < arguments.length; _i++) mirrorOption[_i - 1] = arguments[_i];
        var returnValue = [].concat(coordinates);
        var ABSOLUTE_VALUE = [ Math.abs(returnValue[0]), Math.abs(returnValue[1]) ];
        mirrorOption.forEach(function(option) {
          switch (option) {
           case G61_FishWayDesign_1.MIRROR_OPTION.VERTICAL:
            returnValue[1] = returnValue[1] <= 0 ? ABSOLUTE_VALUE[1] : -ABSOLUTE_VALUE[1];
            break;

           case G61_FishWayDesign_1.MIRROR_OPTION.HORIZONTAL:
            returnValue[0] = returnValue[0] <= 0 ? ABSOLUTE_VALUE[0] : -ABSOLUTE_VALUE[0];
            break;

           case G61_FishWayDesign_1.MIRROR_OPTION.NONE:
          }
        });
        return returnValue;
      };
      __decorate([ property(cc.Node) ], G61_DesignTool.prototype, "wayNode", void 0);
      __decorate([ property(cc.Node) ], G61_DesignTool.prototype, "fishNode", void 0);
      __decorate([ property(cc.Node) ], G61_DesignTool.prototype, "offsetNode", void 0);
      __decorate([ property(cc.Node) ], G61_DesignTool.prototype, "fishListNode", void 0);
      __decorate([ property(cc.Node) ], G61_DesignTool.prototype, "wayListNode", void 0);
      __decorate([ property(cc.Button) ], G61_DesignTool.prototype, "previewBtn", void 0);
      __decorate([ property() ], G61_DesignTool.prototype, "inputData", void 0);
      G61_DesignTool = __decorate([ ccclass, executeInEditMode ], G61_DesignTool);
      return G61_DesignTool;
    }(cc.Component);
    exports.G61_DesignTool = G61_DesignTool;
    cc._RF.pop();
  }, {
    "./G61_FishStep": "G61_FishStep",
    "./G61_FishWayDesign": "G61_FishWayDesign"
  } ],
  G61_DynamicPopUpManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79171413gtB2rtx7RXHhjXI", "G61_DynamicPopUpManager");
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
    exports.G61_DynamicPopUpManager = void 0;
    var Fish_DynamicPopUpManager_1 = require("../../FishFramework/Common/Manager/Fish_DynamicPopUpManager");
    var G61_DynamicPopUpManager = function(_super) {
      __extends(G61_DynamicPopUpManager, _super);
      function G61_DynamicPopUpManager() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return G61_DynamicPopUpManager;
    }(Fish_DynamicPopUpManager_1.Fish_DynamicPopUpManager);
    exports.G61_DynamicPopUpManager = G61_DynamicPopUpManager;
    cc._RF.pop();
  }, {
    "../../FishFramework/Common/Manager/Fish_DynamicPopUpManager": void 0
  } ],
  G61_FishConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8763fuKsh1Kcoce0P+GSoSM", "G61_FishConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.G61_FISH_CONFIG = void 0;
    exports.G61_FISH_CONFIG = {
      PATH_CONFIG: [ [ {
        i: 0,
        f: {
          x: 0,
          y: 0
        },
        t: {
          x: 0,
          y: 0
        },
        m: 36,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: 0,
          y: 0
        },
        t: {
          x: 0,
          y: 0
        },
        m: 32,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1317.527,
          y: -161.09
        },
        t: {
          x: 1277.611,
          y: -159.664
        },
        m: .499,
        r: .01,
        d: 0
      }, {
        i: 1,
        f: {
          x: 1277.611,
          y: -159.664
        },
        t: {
          x: 1206.141,
          y: -150.807
        },
        m: .9,
        r: .01,
        d: 0
      }, {
        i: 2,
        f: {
          x: 1206.141,
          y: -150.807
        },
        t: {
          x: 1131.322,
          y: -134.895
        },
        m: .956,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 1131.322,
          y: -134.895
        },
        t: {
          x: 1068.895,
          y: -114.855
        },
        m: .82,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 1068.895,
          y: -114.855
        },
        t: {
          x: 1016.042,
          y: -86.483
        },
        m: .75,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 1016.042,
          y: -86.483
        },
        t: {
          x: 969.957,
          y: -68.385
        },
        m: .619,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 969.957,
          y: -68.385
        },
        t: {
          x: 930.698,
          y: -50.653
        },
        m: .538,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 930.698,
          y: -50.653
        },
        t: {
          x: 898.336,
          y: -33.356
        },
        m: .459,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 898.336,
          y: -33.356
        },
        t: {
          x: 863.729,
          y: -2.069
        },
        m: .583,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 863.729,
          y: -2.069
        },
        t: {
          x: 833.376,
          y: 37.6
        },
        m: .624,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 833.376,
          y: 37.6
        },
        t: {
          x: 825.121,
          y: 56.214
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 825.121,
          y: 56.214
        },
        t: {
          x: 813.61,
          y: 74.607
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 813.61,
          y: 74.607
        },
        t: {
          x: 798.887,
          y: 92.705
        },
        m: .292,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 798.887,
          y: 92.705
        },
        t: {
          x: 781.012,
          y: 110.437
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 781.012,
          y: 110.437
        },
        t: {
          x: 760.055,
          y: 127.734
        },
        m: .34,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 760.055,
          y: 127.734
        },
        t: {
          x: 736.098,
          y: 144.526
        },
        m: .366,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 736.098,
          y: 144.526
        },
        t: {
          x: 709.235,
          y: 160.748
        },
        m: .392,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 709.235,
          y: 160.748
        },
        t: {
          x: 679.574,
          y: 176.336
        },
        m: .419,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 679.574,
          y: 176.336
        },
        t: {
          x: 647.231,
          y: 191.227
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 647.231,
          y: 191.227
        },
        t: {
          x: 612.334,
          y: 205.364
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 612.334,
          y: 205.364
        },
        t: {
          x: 575.02,
          y: 218.691
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 575.02,
          y: 218.691
        },
        t: {
          x: 535.436,
          y: 231.154
        },
        m: .519,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 535.436,
          y: 231.154
        },
        t: {
          x: 493.74,
          y: 242.705
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 493.74,
          y: 242.705
        },
        t: {
          x: 450.095,
          y: 253.298
        },
        m: .561,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 450.095,
          y: 253.298
        },
        t: {
          x: 404.673,
          y: 262.892
        },
        m: .58,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 404.673,
          y: 262.892
        },
        t: {
          x: 357.655,
          y: 271.448
        },
        m: .597,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 357.655,
          y: 271.448
        },
        t: {
          x: 309.225,
          y: 278.933
        },
        m: .613,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 309.225,
          y: 278.933
        },
        t: {
          x: 259.574,
          y: 285.317
        },
        m: .626,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 259.574,
          y: 285.317
        },
        t: {
          x: 208.9,
          y: 290.575
        },
        m: .637,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 208.9,
          y: 290.575
        },
        t: {
          x: 157.4,
          y: 294.686
        },
        m: .646,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 157.4,
          y: 294.686
        },
        t: {
          x: 105.28,
          y: 297.634
        },
        m: .653,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 105.28,
          y: 297.634
        },
        t: {
          x: 52.744,
          y: 299.408
        },
        m: .657,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 52.744,
          y: 299.408
        },
        t: {
          x: 0,
          y: 300
        },
        m: .659,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 0,
          y: 300
        },
        t: {
          x: -52.744,
          y: 299.408
        },
        m: .659,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: -52.744,
          y: 299.408
        },
        t: {
          x: -105.28,
          y: 297.634
        },
        m: .657,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: -105.28,
          y: 297.634
        },
        t: {
          x: -157.4,
          y: 294.686
        },
        m: .653,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: -157.4,
          y: 294.686
        },
        t: {
          x: -208.9,
          y: 290.575
        },
        m: .646,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: -208.9,
          y: 290.575
        },
        t: {
          x: -259.574,
          y: 285.317
        },
        m: .637,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: -259.574,
          y: 285.317
        },
        t: {
          x: -309.225,
          y: 278.933
        },
        m: .626,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: -309.225,
          y: 278.933
        },
        t: {
          x: -357.655,
          y: 271.448
        },
        m: .613,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: -357.655,
          y: 271.448
        },
        t: {
          x: -404.673,
          y: 262.892
        },
        m: .597,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: -404.673,
          y: 262.892
        },
        t: {
          x: -450.095,
          y: 253.298
        },
        m: .58,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: -450.095,
          y: 253.298
        },
        t: {
          x: -493.74,
          y: 242.705
        },
        m: .561,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: -493.74,
          y: 242.705
        },
        t: {
          x: -535.436,
          y: 231.154
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: -535.436,
          y: 231.154
        },
        t: {
          x: -575.02,
          y: 218.691
        },
        m: .519,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: -575.02,
          y: 218.691
        },
        t: {
          x: -612.334,
          y: 205.364
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: -612.334,
          y: 205.364
        },
        t: {
          x: -647.231,
          y: 191.227
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: -647.231,
          y: 191.227
        },
        t: {
          x: -679.574,
          y: 176.336
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: -679.574,
          y: 176.336
        },
        t: {
          x: -709.235,
          y: 160.748
        },
        m: .419,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: -709.235,
          y: 160.748
        },
        t: {
          x: -736.098,
          y: 144.526
        },
        m: .392,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: -736.098,
          y: 144.526
        },
        t: {
          x: -760.055,
          y: 127.734
        },
        m: .366,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -760.055,
          y: 127.734
        },
        t: {
          x: -781.012,
          y: 110.437
        },
        m: .34,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -781.012,
          y: 110.437
        },
        t: {
          x: -798.887,
          y: 92.705
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -798.887,
          y: 92.705
        },
        t: {
          x: -813.61,
          y: 74.607
        },
        m: .292,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -813.61,
          y: 74.607
        },
        t: {
          x: -825.121,
          y: 56.214
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -825.121,
          y: 56.214
        },
        t: {
          x: -833.376,
          y: 37.6
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -833.376,
          y: 37.6
        },
        t: {
          x: -838.342,
          y: 18.837
        },
        m: .243,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -838.342,
          y: 18.837
        },
        t: {
          x: -840,
          y: 0
        },
        m: .236,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -840,
          y: 0
        },
        t: {
          x: -1500,
          y: -8.837
        },
        m: 8.251,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1317.527,
          y: -161.09
        },
        t: {
          x: -1277.611,
          y: -159.664
        },
        m: .499,
        r: .01,
        d: 1
      }, {
        i: 1,
        f: {
          x: -1277.611,
          y: -159.664
        },
        t: {
          x: -1206.141,
          y: -150.807
        },
        m: .9,
        r: .01,
        d: 1
      }, {
        i: 2,
        f: {
          x: -1206.141,
          y: -150.807
        },
        t: {
          x: -1131.322,
          y: -134.895
        },
        m: .956,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -1131.322,
          y: -134.895
        },
        t: {
          x: -1068.895,
          y: -114.855
        },
        m: .82,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -1068.895,
          y: -114.855
        },
        t: {
          x: -1016.042,
          y: -86.483
        },
        m: .75,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -1016.042,
          y: -86.483
        },
        t: {
          x: -969.957,
          y: -68.385
        },
        m: .619,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -969.957,
          y: -68.385
        },
        t: {
          x: -930.698,
          y: -50.653
        },
        m: .538,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -930.698,
          y: -50.653
        },
        t: {
          x: -898.336,
          y: -33.356
        },
        m: .459,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -898.336,
          y: -33.356
        },
        t: {
          x: -863.729,
          y: -2.069
        },
        m: .583,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -863.729,
          y: -2.069
        },
        t: {
          x: -833.376,
          y: 37.6
        },
        m: .624,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -833.376,
          y: 37.6
        },
        t: {
          x: -825.121,
          y: 56.214
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -825.121,
          y: 56.214
        },
        t: {
          x: -813.61,
          y: 74.607
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -813.61,
          y: 74.607
        },
        t: {
          x: -798.887,
          y: 92.705
        },
        m: .292,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -798.887,
          y: 92.705
        },
        t: {
          x: -781.012,
          y: 110.437
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -781.012,
          y: 110.437
        },
        t: {
          x: -760.055,
          y: 127.734
        },
        m: .34,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -760.055,
          y: 127.734
        },
        t: {
          x: -736.098,
          y: 144.526
        },
        m: .366,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -736.098,
          y: 144.526
        },
        t: {
          x: -709.235,
          y: 160.748
        },
        m: .392,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -709.235,
          y: 160.748
        },
        t: {
          x: -679.574,
          y: 176.336
        },
        m: .419,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -679.574,
          y: 176.336
        },
        t: {
          x: -647.231,
          y: 191.227
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -647.231,
          y: 191.227
        },
        t: {
          x: -612.334,
          y: 205.364
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -612.334,
          y: 205.364
        },
        t: {
          x: -575.02,
          y: 218.691
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -575.02,
          y: 218.691
        },
        t: {
          x: -535.436,
          y: 231.154
        },
        m: .519,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -535.436,
          y: 231.154
        },
        t: {
          x: -493.74,
          y: 242.705
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -493.74,
          y: 242.705
        },
        t: {
          x: -450.095,
          y: 253.298
        },
        m: .561,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -450.095,
          y: 253.298
        },
        t: {
          x: -404.673,
          y: 262.892
        },
        m: .58,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -404.673,
          y: 262.892
        },
        t: {
          x: -357.655,
          y: 271.448
        },
        m: .597,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -357.655,
          y: 271.448
        },
        t: {
          x: -309.225,
          y: 278.933
        },
        m: .613,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -309.225,
          y: 278.933
        },
        t: {
          x: -259.574,
          y: 285.317
        },
        m: .626,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -259.574,
          y: 285.317
        },
        t: {
          x: -208.9,
          y: 290.575
        },
        m: .637,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -208.9,
          y: 290.575
        },
        t: {
          x: -157.4,
          y: 294.686
        },
        m: .646,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -157.4,
          y: 294.686
        },
        t: {
          x: -105.28,
          y: 297.634
        },
        m: .653,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -105.28,
          y: 297.634
        },
        t: {
          x: -52.744,
          y: 299.408
        },
        m: .657,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -52.744,
          y: 299.408
        },
        t: {
          x: 0,
          y: 300
        },
        m: .659,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: 0,
          y: 300
        },
        t: {
          x: 52.744,
          y: 299.408
        },
        m: .659,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: 52.744,
          y: 299.408
        },
        t: {
          x: 105.28,
          y: 297.634
        },
        m: .657,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: 105.28,
          y: 297.634
        },
        t: {
          x: 157.4,
          y: 294.686
        },
        m: .653,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: 157.4,
          y: 294.686
        },
        t: {
          x: 208.9,
          y: 290.575
        },
        m: .646,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: 208.9,
          y: 290.575
        },
        t: {
          x: 259.574,
          y: 285.317
        },
        m: .637,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: 259.574,
          y: 285.317
        },
        t: {
          x: 309.225,
          y: 278.933
        },
        m: .626,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: 309.225,
          y: 278.933
        },
        t: {
          x: 357.655,
          y: 271.448
        },
        m: .613,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: 357.655,
          y: 271.448
        },
        t: {
          x: 404.673,
          y: 262.892
        },
        m: .597,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: 404.673,
          y: 262.892
        },
        t: {
          x: 450.095,
          y: 253.298
        },
        m: .58,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: 450.095,
          y: 253.298
        },
        t: {
          x: 493.74,
          y: 242.705
        },
        m: .561,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: 493.74,
          y: 242.705
        },
        t: {
          x: 535.436,
          y: 231.154
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: 535.436,
          y: 231.154
        },
        t: {
          x: 575.02,
          y: 218.691
        },
        m: .519,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: 575.02,
          y: 218.691
        },
        t: {
          x: 612.334,
          y: 205.364
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: 612.334,
          y: 205.364
        },
        t: {
          x: 647.231,
          y: 191.227
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: 647.231,
          y: 191.227
        },
        t: {
          x: 679.574,
          y: 176.336
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: 679.574,
          y: 176.336
        },
        t: {
          x: 709.235,
          y: 160.748
        },
        m: .419,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: 709.235,
          y: 160.748
        },
        t: {
          x: 736.098,
          y: 144.526
        },
        m: .392,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 736.098,
          y: 144.526
        },
        t: {
          x: 760.055,
          y: 127.734
        },
        m: .366,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 760.055,
          y: 127.734
        },
        t: {
          x: 781.012,
          y: 110.437
        },
        m: .34,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 781.012,
          y: 110.437
        },
        t: {
          x: 798.887,
          y: 92.705
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 798.887,
          y: 92.705
        },
        t: {
          x: 813.61,
          y: 74.607
        },
        m: .292,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 813.61,
          y: 74.607
        },
        t: {
          x: 825.121,
          y: 56.214
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 825.121,
          y: 56.214
        },
        t: {
          x: 833.376,
          y: 37.6
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 833.376,
          y: 37.6
        },
        t: {
          x: 838.342,
          y: 18.837
        },
        m: .243,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 838.342,
          y: 18.837
        },
        t: {
          x: 840,
          y: 0
        },
        m: .236,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 840,
          y: 0
        },
        t: {
          x: 1500,
          y: -8.837
        },
        m: 8.251,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: -148
        },
        t: {
          x: 838.342,
          y: -129.163
        },
        m: 8.274,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 838.342,
          y: -129.163
        },
        t: {
          x: 833.376,
          y: -110.4
        },
        m: .243,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 833.376,
          y: -110.4
        },
        t: {
          x: 825.121,
          y: -91.786
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 825.121,
          y: -91.786
        },
        t: {
          x: 813.61,
          y: -73.393
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 813.61,
          y: -73.393
        },
        t: {
          x: 798.887,
          y: -55.295
        },
        m: .292,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 798.887,
          y: -55.295
        },
        t: {
          x: 781.012,
          y: -37.563
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 781.012,
          y: -37.563
        },
        t: {
          x: 760.055,
          y: -20.266
        },
        m: .34,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 760.055,
          y: -20.266
        },
        t: {
          x: 736.098,
          y: -3.474
        },
        m: .366,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 736.098,
          y: -3.474
        },
        t: {
          x: 709.235,
          y: 12.748
        },
        m: .392,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 709.235,
          y: 12.748
        },
        t: {
          x: 679.574,
          y: 28.336
        },
        m: .419,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 679.574,
          y: 28.336
        },
        t: {
          x: 647.231,
          y: 43.227
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 647.231,
          y: 43.227
        },
        t: {
          x: 612.334,
          y: 57.364
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 612.334,
          y: 57.364
        },
        t: {
          x: 575.02,
          y: 70.691
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 575.02,
          y: 70.691
        },
        t: {
          x: 535.436,
          y: 83.154
        },
        m: .519,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 535.436,
          y: 83.154
        },
        t: {
          x: 493.74,
          y: 94.705
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 493.74,
          y: 94.705
        },
        t: {
          x: 450.095,
          y: 105.298
        },
        m: .561,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 450.095,
          y: 105.298
        },
        t: {
          x: 404.673,
          y: 114.892
        },
        m: .58,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 404.673,
          y: 114.892
        },
        t: {
          x: 357.655,
          y: 123.448
        },
        m: .597,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 357.655,
          y: 123.448
        },
        t: {
          x: 309.225,
          y: 130.933
        },
        m: .613,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 309.225,
          y: 130.933
        },
        t: {
          x: 259.574,
          y: 137.317
        },
        m: .626,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 259.574,
          y: 137.317
        },
        t: {
          x: 208.9,
          y: 142.575
        },
        m: .637,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 208.9,
          y: 142.575
        },
        t: {
          x: 157.4,
          y: 146.686
        },
        m: .646,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 157.4,
          y: 146.686
        },
        t: {
          x: 105.28,
          y: 149.634
        },
        m: .653,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 105.28,
          y: 149.634
        },
        t: {
          x: 52.744,
          y: 151.408
        },
        m: .657,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 52.744,
          y: 151.408
        },
        t: {
          x: 0,
          y: 152
        },
        m: .659,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 0,
          y: 152
        },
        t: {
          x: -52.744,
          y: 151.408
        },
        m: .659,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: -52.744,
          y: 151.408
        },
        t: {
          x: -105.28,
          y: 149.634
        },
        m: .657,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: -105.28,
          y: 149.634
        },
        t: {
          x: -157.4,
          y: 146.686
        },
        m: .653,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: -157.4,
          y: 146.686
        },
        t: {
          x: -208.9,
          y: 142.575
        },
        m: .646,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: -208.9,
          y: 142.575
        },
        t: {
          x: -259.574,
          y: 137.317
        },
        m: .637,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: -259.574,
          y: 137.317
        },
        t: {
          x: -309.225,
          y: 130.933
        },
        m: .626,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: -309.225,
          y: 130.933
        },
        t: {
          x: -357.655,
          y: 123.448
        },
        m: .613,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: -357.655,
          y: 123.448
        },
        t: {
          x: -404.673,
          y: 114.892
        },
        m: .597,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: -404.673,
          y: 114.892
        },
        t: {
          x: -450.095,
          y: 105.298
        },
        m: .58,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: -450.095,
          y: 105.298
        },
        t: {
          x: -493.74,
          y: 94.705
        },
        m: .561,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: -493.74,
          y: 94.705
        },
        t: {
          x: -535.436,
          y: 83.154
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: -535.436,
          y: 83.154
        },
        t: {
          x: -575.02,
          y: 70.691
        },
        m: .519,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: -575.02,
          y: 70.691
        },
        t: {
          x: -612.334,
          y: 57.364
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: -612.334,
          y: 57.364
        },
        t: {
          x: -647.231,
          y: 43.227
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: -647.231,
          y: 43.227
        },
        t: {
          x: -679.574,
          y: 28.336
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: -679.574,
          y: 28.336
        },
        t: {
          x: -709.235,
          y: 12.748
        },
        m: .419,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: -709.235,
          y: 12.748
        },
        t: {
          x: -736.098,
          y: -3.474
        },
        m: .392,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: -736.098,
          y: -3.474
        },
        t: {
          x: -760.055,
          y: -20.266
        },
        m: .366,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: -760.055,
          y: -20.266
        },
        t: {
          x: -781.012,
          y: -37.563
        },
        m: .34,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: -781.012,
          y: -37.563
        },
        t: {
          x: -798.887,
          y: -55.295
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: -798.887,
          y: -55.295
        },
        t: {
          x: -813.61,
          y: -73.393
        },
        m: .292,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: -813.61,
          y: -73.393
        },
        t: {
          x: -825.121,
          y: -91.786
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: -825.121,
          y: -91.786
        },
        t: {
          x: -833.376,
          y: -110.4
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: -833.376,
          y: -110.4
        },
        t: {
          x: -838.342,
          y: -129.163
        },
        m: .243,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: -838.342,
          y: -129.163
        },
        t: {
          x: -840,
          y: -148
        },
        m: .236,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: -840,
          y: -148
        },
        t: {
          x: -1500,
          y: -156.837
        },
        m: 8.251,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: -148
        },
        t: {
          x: -838.342,
          y: -129.163
        },
        m: 8.274,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -838.342,
          y: -129.163
        },
        t: {
          x: -833.376,
          y: -110.4
        },
        m: .243,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -833.376,
          y: -110.4
        },
        t: {
          x: -825.121,
          y: -91.786
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -825.121,
          y: -91.786
        },
        t: {
          x: -813.61,
          y: -73.393
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -813.61,
          y: -73.393
        },
        t: {
          x: -798.887,
          y: -55.295
        },
        m: .292,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -798.887,
          y: -55.295
        },
        t: {
          x: -781.012,
          y: -37.563
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -781.012,
          y: -37.563
        },
        t: {
          x: -760.055,
          y: -20.266
        },
        m: .34,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -760.055,
          y: -20.266
        },
        t: {
          x: -736.098,
          y: -3.474
        },
        m: .366,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -736.098,
          y: -3.474
        },
        t: {
          x: -709.235,
          y: 12.748
        },
        m: .392,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -709.235,
          y: 12.748
        },
        t: {
          x: -679.574,
          y: 28.336
        },
        m: .419,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -679.574,
          y: 28.336
        },
        t: {
          x: -647.231,
          y: 43.227
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -647.231,
          y: 43.227
        },
        t: {
          x: -612.334,
          y: 57.364
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -612.334,
          y: 57.364
        },
        t: {
          x: -575.02,
          y: 70.691
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -575.02,
          y: 70.691
        },
        t: {
          x: -535.436,
          y: 83.154
        },
        m: .519,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -535.436,
          y: 83.154
        },
        t: {
          x: -493.74,
          y: 94.705
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -493.74,
          y: 94.705
        },
        t: {
          x: -450.095,
          y: 105.298
        },
        m: .561,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -450.095,
          y: 105.298
        },
        t: {
          x: -404.673,
          y: 114.892
        },
        m: .58,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -404.673,
          y: 114.892
        },
        t: {
          x: -357.655,
          y: 123.448
        },
        m: .597,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -357.655,
          y: 123.448
        },
        t: {
          x: -309.225,
          y: 130.933
        },
        m: .613,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -309.225,
          y: 130.933
        },
        t: {
          x: -259.574,
          y: 137.317
        },
        m: .626,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -259.574,
          y: 137.317
        },
        t: {
          x: -208.9,
          y: 142.575
        },
        m: .637,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -208.9,
          y: 142.575
        },
        t: {
          x: -157.4,
          y: 146.686
        },
        m: .646,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -157.4,
          y: 146.686
        },
        t: {
          x: -105.28,
          y: 149.634
        },
        m: .653,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -105.28,
          y: 149.634
        },
        t: {
          x: -52.744,
          y: 151.408
        },
        m: .657,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -52.744,
          y: 151.408
        },
        t: {
          x: 0,
          y: 152
        },
        m: .659,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: 0,
          y: 152
        },
        t: {
          x: 52.744,
          y: 151.408
        },
        m: .659,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: 52.744,
          y: 151.408
        },
        t: {
          x: 105.28,
          y: 149.634
        },
        m: .657,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: 105.28,
          y: 149.634
        },
        t: {
          x: 157.4,
          y: 146.686
        },
        m: .653,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: 157.4,
          y: 146.686
        },
        t: {
          x: 208.9,
          y: 142.575
        },
        m: .646,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: 208.9,
          y: 142.575
        },
        t: {
          x: 259.574,
          y: 137.317
        },
        m: .637,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: 259.574,
          y: 137.317
        },
        t: {
          x: 309.225,
          y: 130.933
        },
        m: .626,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: 309.225,
          y: 130.933
        },
        t: {
          x: 357.655,
          y: 123.448
        },
        m: .613,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: 357.655,
          y: 123.448
        },
        t: {
          x: 404.673,
          y: 114.892
        },
        m: .597,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: 404.673,
          y: 114.892
        },
        t: {
          x: 450.095,
          y: 105.298
        },
        m: .58,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: 450.095,
          y: 105.298
        },
        t: {
          x: 493.74,
          y: 94.705
        },
        m: .561,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: 493.74,
          y: 94.705
        },
        t: {
          x: 535.436,
          y: 83.154
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: 535.436,
          y: 83.154
        },
        t: {
          x: 575.02,
          y: 70.691
        },
        m: .519,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: 575.02,
          y: 70.691
        },
        t: {
          x: 612.334,
          y: 57.364
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: 612.334,
          y: 57.364
        },
        t: {
          x: 647.231,
          y: 43.227
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: 647.231,
          y: 43.227
        },
        t: {
          x: 679.574,
          y: 28.336
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: 679.574,
          y: 28.336
        },
        t: {
          x: 709.235,
          y: 12.748
        },
        m: .419,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: 709.235,
          y: 12.748
        },
        t: {
          x: 736.098,
          y: -3.474
        },
        m: .392,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: 736.098,
          y: -3.474
        },
        t: {
          x: 760.055,
          y: -20.266
        },
        m: .366,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: 760.055,
          y: -20.266
        },
        t: {
          x: 781.012,
          y: -37.563
        },
        m: .34,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: 781.012,
          y: -37.563
        },
        t: {
          x: 798.887,
          y: -55.295
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: 798.887,
          y: -55.295
        },
        t: {
          x: 813.61,
          y: -73.393
        },
        m: .292,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: 813.61,
          y: -73.393
        },
        t: {
          x: 825.121,
          y: -91.786
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: 825.121,
          y: -91.786
        },
        t: {
          x: 833.376,
          y: -110.4
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: 833.376,
          y: -110.4
        },
        t: {
          x: 838.342,
          y: -129.163
        },
        m: .243,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: 838.342,
          y: -129.163
        },
        t: {
          x: 840,
          y: -148
        },
        m: .236,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 840,
          y: -148
        },
        t: {
          x: 1500,
          y: -156.837
        },
        m: 8.251,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: -317.788
        },
        t: {
          x: 838.342,
          y: -298.95
        },
        m: 8.274,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 838.342,
          y: -298.95
        },
        t: {
          x: 833.376,
          y: -280.188
        },
        m: .243,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 833.376,
          y: -280.188
        },
        t: {
          x: 825.121,
          y: -261.573
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 825.121,
          y: -261.573
        },
        t: {
          x: 813.61,
          y: -243.181
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 813.61,
          y: -243.181
        },
        t: {
          x: 798.887,
          y: -225.083
        },
        m: .292,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 798.887,
          y: -225.083
        },
        t: {
          x: 781.012,
          y: -207.35
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 781.012,
          y: -207.35
        },
        t: {
          x: 760.055,
          y: -190.054
        },
        m: .34,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 760.055,
          y: -190.054
        },
        t: {
          x: 736.098,
          y: -173.262
        },
        m: .366,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 736.098,
          y: -173.262
        },
        t: {
          x: 709.235,
          y: -157.04
        },
        m: .392,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 709.235,
          y: -157.04
        },
        t: {
          x: 679.574,
          y: -141.452
        },
        m: .419,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 679.574,
          y: -141.452
        },
        t: {
          x: 647.231,
          y: -126.56
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 647.231,
          y: -126.56
        },
        t: {
          x: 612.334,
          y: -112.424
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 612.334,
          y: -112.424
        },
        t: {
          x: 575.02,
          y: -99.097
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 575.02,
          y: -99.097
        },
        t: {
          x: 535.436,
          y: -86.634
        },
        m: .519,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 535.436,
          y: -86.634
        },
        t: {
          x: 493.74,
          y: -75.083
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 493.74,
          y: -75.083
        },
        t: {
          x: 450.095,
          y: -64.489
        },
        m: .561,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 450.095,
          y: -64.489
        },
        t: {
          x: 404.673,
          y: -54.896
        },
        m: .58,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 404.673,
          y: -54.896
        },
        t: {
          x: 357.655,
          y: -46.34
        },
        m: .597,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 357.655,
          y: -46.34
        },
        t: {
          x: 309.225,
          y: -38.855
        },
        m: .613,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 309.225,
          y: -38.855
        },
        t: {
          x: 259.574,
          y: -32.471
        },
        m: .626,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 259.574,
          y: -32.471
        },
        t: {
          x: 208.9,
          y: -27.213
        },
        m: .637,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 208.9,
          y: -27.213
        },
        t: {
          x: 157.4,
          y: -23.101
        },
        m: .646,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 157.4,
          y: -23.101
        },
        t: {
          x: 105.28,
          y: -20.153
        },
        m: .653,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 105.28,
          y: -20.153
        },
        t: {
          x: 52.744,
          y: -18.38
        },
        m: .657,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 52.744,
          y: -18.38
        },
        t: {
          x: 0,
          y: -17.788
        },
        m: .659,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 0,
          y: -17.788
        },
        t: {
          x: -52.744,
          y: -18.38
        },
        m: .659,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: -52.744,
          y: -18.38
        },
        t: {
          x: -105.28,
          y: -20.153
        },
        m: .657,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: -105.28,
          y: -20.153
        },
        t: {
          x: -157.4,
          y: -23.101
        },
        m: .653,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: -157.4,
          y: -23.101
        },
        t: {
          x: -208.9,
          y: -27.213
        },
        m: .646,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: -208.9,
          y: -27.213
        },
        t: {
          x: -259.574,
          y: -32.471
        },
        m: .637,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: -259.574,
          y: -32.471
        },
        t: {
          x: -309.225,
          y: -38.855
        },
        m: .626,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: -309.225,
          y: -38.855
        },
        t: {
          x: -357.655,
          y: -46.34
        },
        m: .613,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: -357.655,
          y: -46.34
        },
        t: {
          x: -404.673,
          y: -54.896
        },
        m: .597,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: -404.673,
          y: -54.896
        },
        t: {
          x: -450.095,
          y: -64.489
        },
        m: .58,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: -450.095,
          y: -64.489
        },
        t: {
          x: -493.74,
          y: -75.083
        },
        m: .561,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: -493.74,
          y: -75.083
        },
        t: {
          x: -535.436,
          y: -86.634
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: -535.436,
          y: -86.634
        },
        t: {
          x: -575.02,
          y: -99.097
        },
        m: .519,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: -575.02,
          y: -99.097
        },
        t: {
          x: -612.334,
          y: -112.424
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: -612.334,
          y: -112.424
        },
        t: {
          x: -647.231,
          y: -126.56
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: -647.231,
          y: -126.56
        },
        t: {
          x: -679.574,
          y: -141.452
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: -679.574,
          y: -141.452
        },
        t: {
          x: -709.235,
          y: -157.04
        },
        m: .419,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: -709.235,
          y: -157.04
        },
        t: {
          x: -736.098,
          y: -173.262
        },
        m: .392,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: -736.098,
          y: -173.262
        },
        t: {
          x: -760.055,
          y: -190.054
        },
        m: .366,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: -760.055,
          y: -190.054
        },
        t: {
          x: -781.012,
          y: -207.35
        },
        m: .34,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: -781.012,
          y: -207.35
        },
        t: {
          x: -798.887,
          y: -225.083
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: -798.887,
          y: -225.083
        },
        t: {
          x: -813.61,
          y: -243.181
        },
        m: .292,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: -813.61,
          y: -243.181
        },
        t: {
          x: -825.121,
          y: -261.573
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: -825.121,
          y: -261.573
        },
        t: {
          x: -833.376,
          y: -280.188
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: -833.376,
          y: -280.188
        },
        t: {
          x: -838.342,
          y: -298.95
        },
        m: .243,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: -838.342,
          y: -298.95
        },
        t: {
          x: -840,
          y: -317.788
        },
        m: .236,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: -840,
          y: -317.788
        },
        t: {
          x: -1500,
          y: -326.625
        },
        m: 8.251,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: -317.788
        },
        t: {
          x: -838.342,
          y: -298.95
        },
        m: 8.274,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -838.342,
          y: -298.95
        },
        t: {
          x: -833.376,
          y: -280.188
        },
        m: .243,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -833.376,
          y: -280.188
        },
        t: {
          x: -825.121,
          y: -261.573
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -825.121,
          y: -261.573
        },
        t: {
          x: -813.61,
          y: -243.181
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -813.61,
          y: -243.181
        },
        t: {
          x: -798.887,
          y: -225.083
        },
        m: .292,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -798.887,
          y: -225.083
        },
        t: {
          x: -781.012,
          y: -207.35
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -781.012,
          y: -207.35
        },
        t: {
          x: -760.055,
          y: -190.054
        },
        m: .34,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -760.055,
          y: -190.054
        },
        t: {
          x: -736.098,
          y: -173.262
        },
        m: .366,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -736.098,
          y: -173.262
        },
        t: {
          x: -709.235,
          y: -157.04
        },
        m: .392,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -709.235,
          y: -157.04
        },
        t: {
          x: -679.574,
          y: -141.452
        },
        m: .419,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -679.574,
          y: -141.452
        },
        t: {
          x: -647.231,
          y: -126.56
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -647.231,
          y: -126.56
        },
        t: {
          x: -612.334,
          y: -112.424
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -612.334,
          y: -112.424
        },
        t: {
          x: -575.02,
          y: -99.097
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -575.02,
          y: -99.097
        },
        t: {
          x: -535.436,
          y: -86.634
        },
        m: .519,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -535.436,
          y: -86.634
        },
        t: {
          x: -493.74,
          y: -75.083
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -493.74,
          y: -75.083
        },
        t: {
          x: -450.095,
          y: -64.489
        },
        m: .561,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -450.095,
          y: -64.489
        },
        t: {
          x: -404.673,
          y: -54.896
        },
        m: .58,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -404.673,
          y: -54.896
        },
        t: {
          x: -357.655,
          y: -46.34
        },
        m: .597,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -357.655,
          y: -46.34
        },
        t: {
          x: -309.225,
          y: -38.855
        },
        m: .613,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -309.225,
          y: -38.855
        },
        t: {
          x: -259.574,
          y: -32.471
        },
        m: .626,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -259.574,
          y: -32.471
        },
        t: {
          x: -208.9,
          y: -27.213
        },
        m: .637,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -208.9,
          y: -27.213
        },
        t: {
          x: -157.4,
          y: -23.101
        },
        m: .646,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -157.4,
          y: -23.101
        },
        t: {
          x: -105.28,
          y: -20.153
        },
        m: .653,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -105.28,
          y: -20.153
        },
        t: {
          x: -52.744,
          y: -18.38
        },
        m: .657,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -52.744,
          y: -18.38
        },
        t: {
          x: 0,
          y: -17.788
        },
        m: .659,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: 0,
          y: -17.788
        },
        t: {
          x: 52.744,
          y: -18.38
        },
        m: .659,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: 52.744,
          y: -18.38
        },
        t: {
          x: 105.28,
          y: -20.153
        },
        m: .657,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: 105.28,
          y: -20.153
        },
        t: {
          x: 157.4,
          y: -23.101
        },
        m: .653,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: 157.4,
          y: -23.101
        },
        t: {
          x: 208.9,
          y: -27.213
        },
        m: .646,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: 208.9,
          y: -27.213
        },
        t: {
          x: 259.574,
          y: -32.471
        },
        m: .637,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: 259.574,
          y: -32.471
        },
        t: {
          x: 309.225,
          y: -38.855
        },
        m: .626,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: 309.225,
          y: -38.855
        },
        t: {
          x: 357.655,
          y: -46.34
        },
        m: .613,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: 357.655,
          y: -46.34
        },
        t: {
          x: 404.673,
          y: -54.896
        },
        m: .597,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: 404.673,
          y: -54.896
        },
        t: {
          x: 450.095,
          y: -64.489
        },
        m: .58,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: 450.095,
          y: -64.489
        },
        t: {
          x: 493.74,
          y: -75.083
        },
        m: .561,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: 493.74,
          y: -75.083
        },
        t: {
          x: 535.436,
          y: -86.634
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: 535.436,
          y: -86.634
        },
        t: {
          x: 575.02,
          y: -99.097
        },
        m: .519,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: 575.02,
          y: -99.097
        },
        t: {
          x: 612.334,
          y: -112.424
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: 612.334,
          y: -112.424
        },
        t: {
          x: 647.231,
          y: -126.56
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: 647.231,
          y: -126.56
        },
        t: {
          x: 679.574,
          y: -141.452
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: 679.574,
          y: -141.452
        },
        t: {
          x: 709.235,
          y: -157.04
        },
        m: .419,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: 709.235,
          y: -157.04
        },
        t: {
          x: 736.098,
          y: -173.262
        },
        m: .392,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: 736.098,
          y: -173.262
        },
        t: {
          x: 760.055,
          y: -190.054
        },
        m: .366,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: 760.055,
          y: -190.054
        },
        t: {
          x: 781.012,
          y: -207.35
        },
        m: .34,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: 781.012,
          y: -207.35
        },
        t: {
          x: 798.887,
          y: -225.083
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: 798.887,
          y: -225.083
        },
        t: {
          x: 813.61,
          y: -243.181
        },
        m: .292,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: 813.61,
          y: -243.181
        },
        t: {
          x: 825.121,
          y: -261.573
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: 825.121,
          y: -261.573
        },
        t: {
          x: 833.376,
          y: -280.188
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: 833.376,
          y: -280.188
        },
        t: {
          x: 838.342,
          y: -298.95
        },
        m: .243,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: 838.342,
          y: -298.95
        },
        t: {
          x: 840,
          y: -317.788
        },
        m: .236,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 840,
          y: -317.788
        },
        t: {
          x: 1500,
          y: -326.625
        },
        m: 8.251,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: -52.847
        },
        t: {
          x: -825.121,
          y: -56.214
        },
        m: 8.436,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -825.121,
          y: -56.214
        },
        t: {
          x: -813.61,
          y: -74.607
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -813.61,
          y: -74.607
        },
        t: {
          x: -798.887,
          y: -92.705
        },
        m: .292,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -798.887,
          y: -92.705
        },
        t: {
          x: -781.012,
          y: -110.437
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -781.012,
          y: -110.437
        },
        t: {
          x: -760.055,
          y: -127.734
        },
        m: .34,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -760.055,
          y: -127.734
        },
        t: {
          x: -736.098,
          y: -144.526
        },
        m: .366,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -736.098,
          y: -144.526
        },
        t: {
          x: -709.235,
          y: -160.748
        },
        m: .392,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -709.235,
          y: -160.748
        },
        t: {
          x: -679.574,
          y: -176.336
        },
        m: .419,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -679.574,
          y: -176.336
        },
        t: {
          x: -647.231,
          y: -191.227
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -647.231,
          y: -191.227
        },
        t: {
          x: -612.334,
          y: -205.364
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -612.334,
          y: -205.364
        },
        t: {
          x: -575.02,
          y: -218.691
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -575.02,
          y: -218.691
        },
        t: {
          x: -535.436,
          y: -231.154
        },
        m: .519,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -535.436,
          y: -231.154
        },
        t: {
          x: -493.74,
          y: -242.705
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -493.74,
          y: -242.705
        },
        t: {
          x: -450.095,
          y: -253.298
        },
        m: .561,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -450.095,
          y: -253.298
        },
        t: {
          x: -404.673,
          y: -262.892
        },
        m: .58,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -404.673,
          y: -262.892
        },
        t: {
          x: -357.655,
          y: -271.448
        },
        m: .597,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -357.655,
          y: -271.448
        },
        t: {
          x: -309.225,
          y: -278.933
        },
        m: .613,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -309.225,
          y: -278.933
        },
        t: {
          x: -259.574,
          y: -285.317
        },
        m: .626,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -259.574,
          y: -285.317
        },
        t: {
          x: -208.9,
          y: -290.575
        },
        m: .637,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -208.9,
          y: -290.575
        },
        t: {
          x: -157.4,
          y: -294.686
        },
        m: .646,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -157.4,
          y: -294.686
        },
        t: {
          x: -105.28,
          y: -297.634
        },
        m: .653,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -105.28,
          y: -297.634
        },
        t: {
          x: -52.744,
          y: -299.408
        },
        m: .657,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -52.744,
          y: -299.408
        },
        t: {
          x: 0,
          y: -300
        },
        m: .659,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: 0,
          y: -300
        },
        t: {
          x: 52.744,
          y: -299.408
        },
        m: .659,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: 52.744,
          y: -299.408
        },
        t: {
          x: 105.28,
          y: -297.634
        },
        m: .657,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: 105.28,
          y: -297.634
        },
        t: {
          x: 157.4,
          y: -294.686
        },
        m: .653,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: 157.4,
          y: -294.686
        },
        t: {
          x: 208.9,
          y: -290.575
        },
        m: .646,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: 208.9,
          y: -290.575
        },
        t: {
          x: 259.574,
          y: -285.317
        },
        m: .637,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: 259.574,
          y: -285.317
        },
        t: {
          x: 309.225,
          y: -278.933
        },
        m: .626,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: 309.225,
          y: -278.933
        },
        t: {
          x: 357.655,
          y: -271.448
        },
        m: .613,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: 357.655,
          y: -271.448
        },
        t: {
          x: 404.673,
          y: -262.892
        },
        m: .597,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: 404.673,
          y: -262.892
        },
        t: {
          x: 450.095,
          y: -253.298
        },
        m: .58,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: 450.095,
          y: -253.298
        },
        t: {
          x: 493.74,
          y: -242.705
        },
        m: .561,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: 493.74,
          y: -242.705
        },
        t: {
          x: 535.436,
          y: -231.154
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: 535.436,
          y: -231.154
        },
        t: {
          x: 575.02,
          y: -218.691
        },
        m: .519,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: 575.02,
          y: -218.691
        },
        t: {
          x: 612.334,
          y: -205.364
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: 612.334,
          y: -205.364
        },
        t: {
          x: 647.231,
          y: -191.227
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: 647.231,
          y: -191.227
        },
        t: {
          x: 679.574,
          y: -176.336
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: 679.574,
          y: -176.336
        },
        t: {
          x: 709.235,
          y: -160.748
        },
        m: .419,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: 709.235,
          y: -160.748
        },
        t: {
          x: 736.098,
          y: -144.526
        },
        m: .392,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: 736.098,
          y: -144.526
        },
        t: {
          x: 760.055,
          y: -127.734
        },
        m: .366,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: 760.055,
          y: -127.734
        },
        t: {
          x: 781.012,
          y: -110.437
        },
        m: .34,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: 781.012,
          y: -110.437
        },
        t: {
          x: 798.887,
          y: -92.705
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: 798.887,
          y: -92.705
        },
        t: {
          x: 813.61,
          y: -74.607
        },
        m: .292,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: 813.61,
          y: -74.607
        },
        t: {
          x: 825.121,
          y: -56.214
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: 825.121,
          y: -56.214
        },
        t: {
          x: 833.376,
          y: -37.6
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: 833.376,
          y: -37.6
        },
        t: {
          x: 1500,
          y: -32.675
        },
        m: 8.333,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: -52.847
        },
        t: {
          x: 825.121,
          y: -56.214
        },
        m: 8.436,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 825.121,
          y: -56.214
        },
        t: {
          x: 813.61,
          y: -74.607
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 813.61,
          y: -74.607
        },
        t: {
          x: 798.887,
          y: -92.705
        },
        m: .292,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 798.887,
          y: -92.705
        },
        t: {
          x: 781.012,
          y: -110.437
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 781.012,
          y: -110.437
        },
        t: {
          x: 760.055,
          y: -127.734
        },
        m: .34,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 760.055,
          y: -127.734
        },
        t: {
          x: 736.098,
          y: -144.526
        },
        m: .366,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 736.098,
          y: -144.526
        },
        t: {
          x: 709.235,
          y: -160.748
        },
        m: .392,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 709.235,
          y: -160.748
        },
        t: {
          x: 679.574,
          y: -176.336
        },
        m: .419,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 679.574,
          y: -176.336
        },
        t: {
          x: 647.231,
          y: -191.227
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 647.231,
          y: -191.227
        },
        t: {
          x: 612.334,
          y: -205.364
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 612.334,
          y: -205.364
        },
        t: {
          x: 575.02,
          y: -218.691
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 575.02,
          y: -218.691
        },
        t: {
          x: 535.436,
          y: -231.154
        },
        m: .519,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 535.436,
          y: -231.154
        },
        t: {
          x: 493.74,
          y: -242.705
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 493.74,
          y: -242.705
        },
        t: {
          x: 450.095,
          y: -253.298
        },
        m: .561,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 450.095,
          y: -253.298
        },
        t: {
          x: 404.673,
          y: -262.892
        },
        m: .58,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 404.673,
          y: -262.892
        },
        t: {
          x: 357.655,
          y: -271.448
        },
        m: .597,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 357.655,
          y: -271.448
        },
        t: {
          x: 309.225,
          y: -278.933
        },
        m: .613,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 309.225,
          y: -278.933
        },
        t: {
          x: 259.574,
          y: -285.317
        },
        m: .626,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 259.574,
          y: -285.317
        },
        t: {
          x: 208.9,
          y: -290.575
        },
        m: .637,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 208.9,
          y: -290.575
        },
        t: {
          x: 157.4,
          y: -294.686
        },
        m: .646,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 157.4,
          y: -294.686
        },
        t: {
          x: 105.28,
          y: -297.634
        },
        m: .653,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 105.28,
          y: -297.634
        },
        t: {
          x: 52.744,
          y: -299.408
        },
        m: .657,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 52.744,
          y: -299.408
        },
        t: {
          x: 0,
          y: -300
        },
        m: .659,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 0,
          y: -300
        },
        t: {
          x: -52.744,
          y: -299.408
        },
        m: .659,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: -52.744,
          y: -299.408
        },
        t: {
          x: -105.28,
          y: -297.634
        },
        m: .657,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: -105.28,
          y: -297.634
        },
        t: {
          x: -157.4,
          y: -294.686
        },
        m: .653,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: -157.4,
          y: -294.686
        },
        t: {
          x: -208.9,
          y: -290.575
        },
        m: .646,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: -208.9,
          y: -290.575
        },
        t: {
          x: -259.574,
          y: -285.317
        },
        m: .637,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: -259.574,
          y: -285.317
        },
        t: {
          x: -309.225,
          y: -278.933
        },
        m: .626,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: -309.225,
          y: -278.933
        },
        t: {
          x: -357.655,
          y: -271.448
        },
        m: .613,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: -357.655,
          y: -271.448
        },
        t: {
          x: -404.673,
          y: -262.892
        },
        m: .597,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: -404.673,
          y: -262.892
        },
        t: {
          x: -450.095,
          y: -253.298
        },
        m: .58,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: -450.095,
          y: -253.298
        },
        t: {
          x: -493.74,
          y: -242.705
        },
        m: .561,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: -493.74,
          y: -242.705
        },
        t: {
          x: -535.436,
          y: -231.154
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: -535.436,
          y: -231.154
        },
        t: {
          x: -575.02,
          y: -218.691
        },
        m: .519,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: -575.02,
          y: -218.691
        },
        t: {
          x: -612.334,
          y: -205.364
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: -612.334,
          y: -205.364
        },
        t: {
          x: -647.231,
          y: -191.227
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: -647.231,
          y: -191.227
        },
        t: {
          x: -679.574,
          y: -176.336
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: -679.574,
          y: -176.336
        },
        t: {
          x: -709.235,
          y: -160.748
        },
        m: .419,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: -709.235,
          y: -160.748
        },
        t: {
          x: -736.098,
          y: -144.526
        },
        m: .392,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: -736.098,
          y: -144.526
        },
        t: {
          x: -760.055,
          y: -127.734
        },
        m: .366,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: -760.055,
          y: -127.734
        },
        t: {
          x: -781.012,
          y: -110.437
        },
        m: .34,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: -781.012,
          y: -110.437
        },
        t: {
          x: -798.887,
          y: -92.705
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: -798.887,
          y: -92.705
        },
        t: {
          x: -813.61,
          y: -74.607
        },
        m: .292,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: -813.61,
          y: -74.607
        },
        t: {
          x: -825.121,
          y: -56.214
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: -825.121,
          y: -56.214
        },
        t: {
          x: -833.376,
          y: -37.6
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: -833.376,
          y: -37.6
        },
        t: {
          x: -1500,
          y: -32.675
        },
        m: 8.333,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: 103.211
        },
        t: {
          x: -825.121,
          y: 99.844
        },
        m: 8.436,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -825.121,
          y: 99.844
        },
        t: {
          x: -813.61,
          y: 81.451
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -813.61,
          y: 81.451
        },
        t: {
          x: -798.887,
          y: 63.353
        },
        m: .292,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -798.887,
          y: 63.353
        },
        t: {
          x: -781.012,
          y: 45.621
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -781.012,
          y: 45.621
        },
        t: {
          x: -760.055,
          y: 28.325
        },
        m: .34,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -760.055,
          y: 28.325
        },
        t: {
          x: -736.098,
          y: 11.532
        },
        m: .366,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -736.098,
          y: 11.532
        },
        t: {
          x: -709.235,
          y: -4.69
        },
        m: .392,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -709.235,
          y: -4.69
        },
        t: {
          x: -679.574,
          y: -20.277
        },
        m: .419,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -679.574,
          y: -20.277
        },
        t: {
          x: -647.231,
          y: -35.169
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -647.231,
          y: -35.169
        },
        t: {
          x: -612.334,
          y: -49.306
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -612.334,
          y: -49.306
        },
        t: {
          x: -575.02,
          y: -62.632
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -575.02,
          y: -62.632
        },
        t: {
          x: -535.436,
          y: -75.096
        },
        m: .519,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -535.436,
          y: -75.096
        },
        t: {
          x: -493.74,
          y: -86.647
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -493.74,
          y: -86.647
        },
        t: {
          x: -450.095,
          y: -97.24
        },
        m: .561,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -450.095,
          y: -97.24
        },
        t: {
          x: -404.673,
          y: -106.834
        },
        m: .58,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -404.673,
          y: -106.834
        },
        t: {
          x: -357.655,
          y: -115.39
        },
        m: .597,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -357.655,
          y: -115.39
        },
        t: {
          x: -309.225,
          y: -122.875
        },
        m: .613,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -309.225,
          y: -122.875
        },
        t: {
          x: -259.574,
          y: -129.259
        },
        m: .626,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -259.574,
          y: -129.259
        },
        t: {
          x: -208.9,
          y: -134.517
        },
        m: .637,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -208.9,
          y: -134.517
        },
        t: {
          x: -157.4,
          y: -138.628
        },
        m: .646,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -157.4,
          y: -138.628
        },
        t: {
          x: -105.28,
          y: -141.576
        },
        m: .653,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -105.28,
          y: -141.576
        },
        t: {
          x: -52.744,
          y: -143.35
        },
        m: .657,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -52.744,
          y: -143.35
        },
        t: {
          x: 0,
          y: -143.942
        },
        m: .659,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: 0,
          y: -143.942
        },
        t: {
          x: 52.744,
          y: -143.35
        },
        m: .659,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: 52.744,
          y: -143.35
        },
        t: {
          x: 105.28,
          y: -141.576
        },
        m: .657,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: 105.28,
          y: -141.576
        },
        t: {
          x: 157.4,
          y: -138.628
        },
        m: .653,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: 157.4,
          y: -138.628
        },
        t: {
          x: 208.9,
          y: -134.517
        },
        m: .646,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: 208.9,
          y: -134.517
        },
        t: {
          x: 259.574,
          y: -129.259
        },
        m: .637,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: 259.574,
          y: -129.259
        },
        t: {
          x: 309.225,
          y: -122.875
        },
        m: .626,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: 309.225,
          y: -122.875
        },
        t: {
          x: 357.655,
          y: -115.39
        },
        m: .613,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: 357.655,
          y: -115.39
        },
        t: {
          x: 404.673,
          y: -106.834
        },
        m: .597,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: 404.673,
          y: -106.834
        },
        t: {
          x: 450.095,
          y: -97.24
        },
        m: .58,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: 450.095,
          y: -97.24
        },
        t: {
          x: 493.74,
          y: -86.647
        },
        m: .561,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: 493.74,
          y: -86.647
        },
        t: {
          x: 535.436,
          y: -75.096
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: 535.436,
          y: -75.096
        },
        t: {
          x: 575.02,
          y: -62.632
        },
        m: .519,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: 575.02,
          y: -62.632
        },
        t: {
          x: 612.334,
          y: -49.306
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: 612.334,
          y: -49.306
        },
        t: {
          x: 647.231,
          y: -35.169
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: 647.231,
          y: -35.169
        },
        t: {
          x: 679.574,
          y: -20.277
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: 679.574,
          y: -20.277
        },
        t: {
          x: 709.235,
          y: -4.69
        },
        m: .419,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: 709.235,
          y: -4.69
        },
        t: {
          x: 736.098,
          y: 11.532
        },
        m: .392,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: 736.098,
          y: 11.532
        },
        t: {
          x: 760.055,
          y: 28.325
        },
        m: .366,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: 760.055,
          y: 28.325
        },
        t: {
          x: 781.012,
          y: 45.621
        },
        m: .34,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: 781.012,
          y: 45.621
        },
        t: {
          x: 798.887,
          y: 63.353
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: 798.887,
          y: 63.353
        },
        t: {
          x: 813.61,
          y: 81.451
        },
        m: .292,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: 813.61,
          y: 81.451
        },
        t: {
          x: 825.121,
          y: 99.844
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: 825.121,
          y: 99.844
        },
        t: {
          x: 833.376,
          y: 118.458
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: 833.376,
          y: 118.458
        },
        t: {
          x: 1500,
          y: 123.383
        },
        m: 8.333,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: 103.211
        },
        t: {
          x: 825.121,
          y: 99.844
        },
        m: 8.436,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 825.121,
          y: 99.844
        },
        t: {
          x: 813.61,
          y: 81.451
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 813.61,
          y: 81.451
        },
        t: {
          x: 798.887,
          y: 63.353
        },
        m: .292,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 798.887,
          y: 63.353
        },
        t: {
          x: 781.012,
          y: 45.621
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 781.012,
          y: 45.621
        },
        t: {
          x: 760.055,
          y: 28.325
        },
        m: .34,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 760.055,
          y: 28.325
        },
        t: {
          x: 736.098,
          y: 11.532
        },
        m: .366,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 736.098,
          y: 11.532
        },
        t: {
          x: 709.235,
          y: -4.69
        },
        m: .392,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 709.235,
          y: -4.69
        },
        t: {
          x: 679.574,
          y: -20.277
        },
        m: .419,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 679.574,
          y: -20.277
        },
        t: {
          x: 647.231,
          y: -35.169
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 647.231,
          y: -35.169
        },
        t: {
          x: 612.334,
          y: -49.306
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 612.334,
          y: -49.306
        },
        t: {
          x: 575.02,
          y: -62.632
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 575.02,
          y: -62.632
        },
        t: {
          x: 535.436,
          y: -75.096
        },
        m: .519,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 535.436,
          y: -75.096
        },
        t: {
          x: 493.74,
          y: -86.647
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 493.74,
          y: -86.647
        },
        t: {
          x: 450.095,
          y: -97.24
        },
        m: .561,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 450.095,
          y: -97.24
        },
        t: {
          x: 404.673,
          y: -106.834
        },
        m: .58,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 404.673,
          y: -106.834
        },
        t: {
          x: 357.655,
          y: -115.39
        },
        m: .597,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 357.655,
          y: -115.39
        },
        t: {
          x: 309.225,
          y: -122.875
        },
        m: .613,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 309.225,
          y: -122.875
        },
        t: {
          x: 259.574,
          y: -129.259
        },
        m: .626,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 259.574,
          y: -129.259
        },
        t: {
          x: 208.9,
          y: -134.517
        },
        m: .637,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 208.9,
          y: -134.517
        },
        t: {
          x: 157.4,
          y: -138.628
        },
        m: .646,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 157.4,
          y: -138.628
        },
        t: {
          x: 105.28,
          y: -141.576
        },
        m: .653,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 105.28,
          y: -141.576
        },
        t: {
          x: 52.744,
          y: -143.35
        },
        m: .657,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 52.744,
          y: -143.35
        },
        t: {
          x: 0,
          y: -143.942
        },
        m: .659,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 0,
          y: -143.942
        },
        t: {
          x: -52.744,
          y: -143.35
        },
        m: .659,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: -52.744,
          y: -143.35
        },
        t: {
          x: -105.28,
          y: -141.576
        },
        m: .657,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: -105.28,
          y: -141.576
        },
        t: {
          x: -157.4,
          y: -138.628
        },
        m: .653,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: -157.4,
          y: -138.628
        },
        t: {
          x: -208.9,
          y: -134.517
        },
        m: .646,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: -208.9,
          y: -134.517
        },
        t: {
          x: -259.574,
          y: -129.259
        },
        m: .637,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: -259.574,
          y: -129.259
        },
        t: {
          x: -309.225,
          y: -122.875
        },
        m: .626,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: -309.225,
          y: -122.875
        },
        t: {
          x: -357.655,
          y: -115.39
        },
        m: .613,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: -357.655,
          y: -115.39
        },
        t: {
          x: -404.673,
          y: -106.834
        },
        m: .597,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: -404.673,
          y: -106.834
        },
        t: {
          x: -450.095,
          y: -97.24
        },
        m: .58,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: -450.095,
          y: -97.24
        },
        t: {
          x: -493.74,
          y: -86.647
        },
        m: .561,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: -493.74,
          y: -86.647
        },
        t: {
          x: -535.436,
          y: -75.096
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: -535.436,
          y: -75.096
        },
        t: {
          x: -575.02,
          y: -62.632
        },
        m: .519,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: -575.02,
          y: -62.632
        },
        t: {
          x: -612.334,
          y: -49.306
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: -612.334,
          y: -49.306
        },
        t: {
          x: -647.231,
          y: -35.169
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: -647.231,
          y: -35.169
        },
        t: {
          x: -679.574,
          y: -20.277
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: -679.574,
          y: -20.277
        },
        t: {
          x: -709.235,
          y: -4.69
        },
        m: .419,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: -709.235,
          y: -4.69
        },
        t: {
          x: -736.098,
          y: 11.532
        },
        m: .392,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: -736.098,
          y: 11.532
        },
        t: {
          x: -760.055,
          y: 28.325
        },
        m: .366,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: -760.055,
          y: 28.325
        },
        t: {
          x: -781.012,
          y: 45.621
        },
        m: .34,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: -781.012,
          y: 45.621
        },
        t: {
          x: -798.887,
          y: 63.353
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: -798.887,
          y: 63.353
        },
        t: {
          x: -813.61,
          y: 81.451
        },
        m: .292,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: -813.61,
          y: 81.451
        },
        t: {
          x: -825.121,
          y: 99.844
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: -825.121,
          y: 99.844
        },
        t: {
          x: -833.376,
          y: 118.458
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: -833.376,
          y: 118.458
        },
        t: {
          x: -1500,
          y: 123.383
        },
        m: 8.333,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: 313.506
        },
        t: {
          x: -825.121,
          y: 310.139
        },
        m: 8.436,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -825.121,
          y: 310.139
        },
        t: {
          x: -813.61,
          y: 291.746
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -813.61,
          y: 291.746
        },
        t: {
          x: -798.887,
          y: 273.648
        },
        m: .292,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -798.887,
          y: 273.648
        },
        t: {
          x: -781.012,
          y: 255.916
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -781.012,
          y: 255.916
        },
        t: {
          x: -760.055,
          y: 238.62
        },
        m: .34,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -760.055,
          y: 238.62
        },
        t: {
          x: -736.098,
          y: 221.827
        },
        m: .366,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -736.098,
          y: 221.827
        },
        t: {
          x: -709.235,
          y: 205.605
        },
        m: .392,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -709.235,
          y: 205.605
        },
        t: {
          x: -679.574,
          y: 190.018
        },
        m: .419,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -679.574,
          y: 190.018
        },
        t: {
          x: -647.231,
          y: 175.126
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -647.231,
          y: 175.126
        },
        t: {
          x: -612.334,
          y: 160.989
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -612.334,
          y: 160.989
        },
        t: {
          x: -575.02,
          y: 147.663
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -575.02,
          y: 147.663
        },
        t: {
          x: -535.436,
          y: 135.199
        },
        m: .519,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -535.436,
          y: 135.199
        },
        t: {
          x: -493.74,
          y: 123.648
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -493.74,
          y: 123.648
        },
        t: {
          x: -450.095,
          y: 113.055
        },
        m: .561,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -450.095,
          y: 113.055
        },
        t: {
          x: -404.673,
          y: 103.461
        },
        m: .58,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -404.673,
          y: 103.461
        },
        t: {
          x: -357.655,
          y: 94.905
        },
        m: .597,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -357.655,
          y: 94.905
        },
        t: {
          x: -309.225,
          y: 87.42
        },
        m: .613,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -309.225,
          y: 87.42
        },
        t: {
          x: -259.574,
          y: 81.036
        },
        m: .626,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -259.574,
          y: 81.036
        },
        t: {
          x: -208.9,
          y: 75.778
        },
        m: .637,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -208.9,
          y: 75.778
        },
        t: {
          x: -157.4,
          y: 71.667
        },
        m: .646,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -157.4,
          y: 71.667
        },
        t: {
          x: -105.28,
          y: 68.719
        },
        m: .653,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -105.28,
          y: 68.719
        },
        t: {
          x: -52.744,
          y: 66.945
        },
        m: .657,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -52.744,
          y: 66.945
        },
        t: {
          x: 0,
          y: 66.353
        },
        m: .659,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: 0,
          y: 66.353
        },
        t: {
          x: 52.744,
          y: 66.945
        },
        m: .659,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: 52.744,
          y: 66.945
        },
        t: {
          x: 105.28,
          y: 68.719
        },
        m: .657,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: 105.28,
          y: 68.719
        },
        t: {
          x: 157.4,
          y: 71.667
        },
        m: .653,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: 157.4,
          y: 71.667
        },
        t: {
          x: 208.9,
          y: 75.778
        },
        m: .646,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: 208.9,
          y: 75.778
        },
        t: {
          x: 259.574,
          y: 81.036
        },
        m: .637,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: 259.574,
          y: 81.036
        },
        t: {
          x: 309.225,
          y: 87.42
        },
        m: .626,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: 309.225,
          y: 87.42
        },
        t: {
          x: 357.655,
          y: 94.905
        },
        m: .613,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: 357.655,
          y: 94.905
        },
        t: {
          x: 404.673,
          y: 103.461
        },
        m: .597,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: 404.673,
          y: 103.461
        },
        t: {
          x: 450.095,
          y: 113.055
        },
        m: .58,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: 450.095,
          y: 113.055
        },
        t: {
          x: 493.74,
          y: 123.648
        },
        m: .561,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: 493.74,
          y: 123.648
        },
        t: {
          x: 535.436,
          y: 135.199
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: 535.436,
          y: 135.199
        },
        t: {
          x: 575.02,
          y: 147.663
        },
        m: .519,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: 575.02,
          y: 147.663
        },
        t: {
          x: 612.334,
          y: 160.989
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: 612.334,
          y: 160.989
        },
        t: {
          x: 647.231,
          y: 175.126
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: 647.231,
          y: 175.126
        },
        t: {
          x: 679.574,
          y: 190.018
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: 679.574,
          y: 190.018
        },
        t: {
          x: 709.235,
          y: 205.605
        },
        m: .419,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: 709.235,
          y: 205.605
        },
        t: {
          x: 736.098,
          y: 221.827
        },
        m: .392,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: 736.098,
          y: 221.827
        },
        t: {
          x: 760.055,
          y: 238.62
        },
        m: .366,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: 760.055,
          y: 238.62
        },
        t: {
          x: 781.012,
          y: 255.916
        },
        m: .34,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: 781.012,
          y: 255.916
        },
        t: {
          x: 798.887,
          y: 273.648
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: 798.887,
          y: 273.648
        },
        t: {
          x: 813.61,
          y: 291.746
        },
        m: .292,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: 813.61,
          y: 291.746
        },
        t: {
          x: 825.121,
          y: 310.139
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: 825.121,
          y: 310.139
        },
        t: {
          x: 833.376,
          y: 328.753
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: 833.376,
          y: 328.753
        },
        t: {
          x: 1500,
          y: 333.678
        },
        m: 8.333,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: 313.506
        },
        t: {
          x: 825.121,
          y: 310.139
        },
        m: 8.436,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 825.121,
          y: 310.139
        },
        t: {
          x: 813.61,
          y: 291.746
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 813.61,
          y: 291.746
        },
        t: {
          x: 798.887,
          y: 273.648
        },
        m: .292,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 798.887,
          y: 273.648
        },
        t: {
          x: 781.012,
          y: 255.916
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 781.012,
          y: 255.916
        },
        t: {
          x: 760.055,
          y: 238.62
        },
        m: .34,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 760.055,
          y: 238.62
        },
        t: {
          x: 736.098,
          y: 221.827
        },
        m: .366,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 736.098,
          y: 221.827
        },
        t: {
          x: 709.235,
          y: 205.605
        },
        m: .392,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 709.235,
          y: 205.605
        },
        t: {
          x: 679.574,
          y: 190.018
        },
        m: .419,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 679.574,
          y: 190.018
        },
        t: {
          x: 647.231,
          y: 175.126
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 647.231,
          y: 175.126
        },
        t: {
          x: 612.334,
          y: 160.989
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 612.334,
          y: 160.989
        },
        t: {
          x: 575.02,
          y: 147.663
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 575.02,
          y: 147.663
        },
        t: {
          x: 535.436,
          y: 135.199
        },
        m: .519,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 535.436,
          y: 135.199
        },
        t: {
          x: 493.74,
          y: 123.648
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 493.74,
          y: 123.648
        },
        t: {
          x: 450.095,
          y: 113.055
        },
        m: .561,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 450.095,
          y: 113.055
        },
        t: {
          x: 404.673,
          y: 103.461
        },
        m: .58,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 404.673,
          y: 103.461
        },
        t: {
          x: 357.655,
          y: 94.905
        },
        m: .597,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 357.655,
          y: 94.905
        },
        t: {
          x: 309.225,
          y: 87.42
        },
        m: .613,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 309.225,
          y: 87.42
        },
        t: {
          x: 259.574,
          y: 81.036
        },
        m: .626,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 259.574,
          y: 81.036
        },
        t: {
          x: 208.9,
          y: 75.778
        },
        m: .637,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 208.9,
          y: 75.778
        },
        t: {
          x: 157.4,
          y: 71.667
        },
        m: .646,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 157.4,
          y: 71.667
        },
        t: {
          x: 105.28,
          y: 68.719
        },
        m: .653,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 105.28,
          y: 68.719
        },
        t: {
          x: 52.744,
          y: 66.945
        },
        m: .657,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 52.744,
          y: 66.945
        },
        t: {
          x: 0,
          y: 66.353
        },
        m: .659,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 0,
          y: 66.353
        },
        t: {
          x: -52.744,
          y: 66.945
        },
        m: .659,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: -52.744,
          y: 66.945
        },
        t: {
          x: -105.28,
          y: 68.719
        },
        m: .657,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: -105.28,
          y: 68.719
        },
        t: {
          x: -157.4,
          y: 71.667
        },
        m: .653,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: -157.4,
          y: 71.667
        },
        t: {
          x: -208.9,
          y: 75.778
        },
        m: .646,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: -208.9,
          y: 75.778
        },
        t: {
          x: -259.574,
          y: 81.036
        },
        m: .637,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: -259.574,
          y: 81.036
        },
        t: {
          x: -309.225,
          y: 87.42
        },
        m: .626,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: -309.225,
          y: 87.42
        },
        t: {
          x: -357.655,
          y: 94.905
        },
        m: .613,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: -357.655,
          y: 94.905
        },
        t: {
          x: -404.673,
          y: 103.461
        },
        m: .597,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: -404.673,
          y: 103.461
        },
        t: {
          x: -450.095,
          y: 113.055
        },
        m: .58,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: -450.095,
          y: 113.055
        },
        t: {
          x: -493.74,
          y: 123.648
        },
        m: .561,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: -493.74,
          y: 123.648
        },
        t: {
          x: -535.436,
          y: 135.199
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: -535.436,
          y: 135.199
        },
        t: {
          x: -575.02,
          y: 147.663
        },
        m: .519,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: -575.02,
          y: 147.663
        },
        t: {
          x: -612.334,
          y: 160.989
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: -612.334,
          y: 160.989
        },
        t: {
          x: -647.231,
          y: 175.126
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: -647.231,
          y: 175.126
        },
        t: {
          x: -679.574,
          y: 190.018
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: -679.574,
          y: 190.018
        },
        t: {
          x: -709.235,
          y: 205.605
        },
        m: .419,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: -709.235,
          y: 205.605
        },
        t: {
          x: -736.098,
          y: 221.827
        },
        m: .392,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: -736.098,
          y: 221.827
        },
        t: {
          x: -760.055,
          y: 238.62
        },
        m: .366,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: -760.055,
          y: 238.62
        },
        t: {
          x: -781.012,
          y: 255.916
        },
        m: .34,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: -781.012,
          y: 255.916
        },
        t: {
          x: -798.887,
          y: 273.648
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: -798.887,
          y: 273.648
        },
        t: {
          x: -813.61,
          y: 291.746
        },
        m: .292,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: -813.61,
          y: 291.746
        },
        t: {
          x: -825.121,
          y: 310.139
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: -825.121,
          y: 310.139
        },
        t: {
          x: -833.376,
          y: 328.753
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: -833.376,
          y: 328.753
        },
        t: {
          x: -1500,
          y: 333.678
        },
        m: 8.333,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: -380
        },
        t: {
          x: -823.2,
          y: -365.896
        },
        m: 8.462,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: -365.896
        },
        t: {
          x: -806.4,
          y: -352.046
        },
        m: .272,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: -352.046
        },
        t: {
          x: -789.6,
          y: -338.697
        },
        m: .268,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: -338.697
        },
        t: {
          x: -772.8,
          y: -326.074
        },
        m: .263,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: -326.074
        },
        t: {
          x: -756,
          y: -314.373
        },
        m: .256,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: -314.373
        },
        t: {
          x: -739.2,
          y: -303.754
        },
        m: .248,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: -303.754
        },
        t: {
          x: -722.4,
          y: -294.336
        },
        m: .241,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: -294.336
        },
        t: {
          x: -705.6,
          y: -286.189
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: -286.189
        },
        t: {
          x: -688.8,
          y: -279.332
        },
        m: .227,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: -279.332
        },
        t: {
          x: -672,
          y: -273.735
        },
        m: .221,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: -273.735
        },
        t: {
          x: -655.2,
          y: -269.318
        },
        m: .217,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: -269.318
        },
        t: {
          x: -638.4,
          y: -265.953
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: -265.953
        },
        t: {
          x: -621.6,
          y: -263.473
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: -263.473
        },
        t: {
          x: -604.8,
          y: -261.673
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: -261.673
        },
        t: {
          x: -588,
          y: -260.323
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: -260.323
        },
        t: {
          x: -571.2,
          y: -259.176
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: -259.176
        },
        t: {
          x: -554.4,
          y: -257.975
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: -257.975
        },
        t: {
          x: -537.6,
          y: -256.467
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: -256.467
        },
        t: {
          x: -520.8,
          y: -254.41
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: -254.41
        },
        t: {
          x: -504,
          y: -251.583
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: -251.583
        },
        t: {
          x: -487.2,
          y: -247.798
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: -247.798
        },
        t: {
          x: -470.4,
          y: -242.901
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: -242.901
        },
        t: {
          x: -453.6,
          y: -236.786
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: -236.786
        },
        t: {
          x: -436.8,
          y: -229.391
        },
        m: .229,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: -229.391
        },
        t: {
          x: -420,
          y: -220.708
        },
        m: .236,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: -220.708
        },
        t: {
          x: -403.2,
          y: -210.778
        },
        m: .244,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: -210.778
        },
        t: {
          x: -386.4,
          y: -199.691
        },
        m: .252,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: -199.691
        },
        t: {
          x: -369.6,
          y: -187.583
        },
        m: .259,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: -187.583
        },
        t: {
          x: -352.8,
          y: -174.631
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: -174.631
        },
        t: {
          x: -336,
          y: -161.045
        },
        m: .27,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: -161.045
        },
        t: {
          x: -319.2,
          y: -147.058
        },
        m: .273,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: -147.058
        },
        t: {
          x: -302.4,
          y: -132.923
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: -132.923
        },
        t: {
          x: -285.6,
          y: -118.894
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: -118.894
        },
        t: {
          x: -268.8,
          y: -105.225
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: -105.225
        },
        t: {
          x: -252,
          y: -92.153
        },
        m: .266,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: -92.153
        },
        t: {
          x: -235.2,
          y: -79.892
        },
        m: .26,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: -79.892
        },
        t: {
          x: -218.4,
          y: -68.626
        },
        m: .253,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: -68.626
        },
        t: {
          x: -201.6,
          y: -58.496
        },
        m: .245,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: -58.496
        },
        t: {
          x: -184.8,
          y: -49.603
        },
        m: .238,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: -49.603
        },
        t: {
          x: -168,
          y: -41.994
        },
        m: .231,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: -41.994
        },
        t: {
          x: -151.2,
          y: -35.67
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: -35.67
        },
        t: {
          x: -134.4,
          y: -30.578
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: -30.578
        },
        t: {
          x: -117.6,
          y: -26.618
        },
        m: .216,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: -26.618
        },
        t: {
          x: -100.8,
          y: -23.645
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: -23.645
        },
        t: {
          x: -84,
          y: -21.474
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: -21.474
        },
        t: {
          x: -67.2,
          y: -19.892
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: -19.892
        },
        t: {
          x: -50.4,
          y: -18.657
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: -18.657
        },
        t: {
          x: -33.6,
          y: -17.519
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: -17.519
        },
        t: {
          x: -16.8,
          y: -16.221
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: -16.221
        },
        t: {
          x: 0,
          y: -14.512
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: -14.512
        },
        t: {
          x: 16.8,
          y: -12.159
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: -12.159
        },
        t: {
          x: 33.6,
          y: -8.953
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: -8.953
        },
        t: {
          x: 50.4,
          y: -4.72
        },
        m: .217,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: -4.72
        },
        t: {
          x: 67.2,
          y: .675
        },
        m: .221,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: .675
        },
        t: {
          x: 84,
          y: 7.32
        },
        m: .226,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: 7.32
        },
        t: {
          x: 100.8,
          y: 15.254
        },
        m: .232,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: 15.254
        },
        t: {
          x: 117.6,
          y: 24.465
        },
        m: .239,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: 24.465
        },
        t: {
          x: 134.4,
          y: 34.892
        },
        m: .247,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: 34.892
        },
        t: {
          x: 151.2,
          y: 46.424
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: 46.424
        },
        t: {
          x: 168,
          y: 58.907
        },
        m: .262,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: 58.907
        },
        t: {
          x: 184.8,
          y: 72.151
        },
        m: .267,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: 72.151
        },
        t: {
          x: 201.6,
          y: 85.934
        },
        m: .272,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: 85.934
        },
        t: {
          x: 218.4,
          y: 100.014
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: 100.014
        },
        t: {
          x: 235.2,
          y: 114.136
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: 114.136
        },
        t: {
          x: 252,
          y: 128.045
        },
        m: .273,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: 128.045
        },
        t: {
          x: 268.8,
          y: 141.493
        },
        m: .269,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: 141.493
        },
        t: {
          x: 285.6,
          y: 154.251
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: 154.251
        },
        t: {
          x: 302.4,
          y: 166.116
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: 166.116
        },
        t: {
          x: 319.2,
          y: 176.923
        },
        m: .25,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: 176.923
        },
        t: {
          x: 336,
          y: 186.546
        },
        m: .242,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: 186.546
        },
        t: {
          x: 352.8,
          y: 194.907
        },
        m: .235,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: 194.907
        },
        t: {
          x: 369.6,
          y: 201.976
        },
        m: .228,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: 201.976
        },
        t: {
          x: 386.4,
          y: 207.777
        },
        m: .222,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: 207.777
        },
        t: {
          x: 403.2,
          y: 212.382
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: 212.382
        },
        t: {
          x: 420,
          y: 215.91
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: 215.91
        },
        t: {
          x: 436.8,
          y: 218.524
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: 218.524
        },
        t: {
          x: 453.6,
          y: 220.421
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: 220.421
        },
        t: {
          x: 470.4,
          y: 221.829
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: 221.829
        },
        t: {
          x: 487.2,
          y: 222.992
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: 222.992
        },
        t: {
          x: 504,
          y: 224.166
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: 224.166
        },
        t: {
          x: 520.8,
          y: 225.606
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: 225.606
        },
        t: {
          x: 537.6,
          y: 227.557
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: 227.557
        },
        t: {
          x: 554.4,
          y: 230.242
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: 230.242
        },
        t: {
          x: 571.2,
          y: 233.857
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: 233.857
        },
        t: {
          x: 588,
          y: 238.561
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: 238.561
        },
        t: {
          x: 604.8,
          y: 244.47
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: 244.47
        },
        t: {
          x: 621.6,
          y: 251.65
        },
        m: .228,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: 251.65
        },
        t: {
          x: 638.4,
          y: 260.122
        },
        m: .235,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: 260.122
        },
        t: {
          x: 655.2,
          y: 269.851
        },
        m: .243,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: 269.851
        },
        t: {
          x: 672,
          y: 280.755
        },
        m: .25,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: 280.755
        },
        t: {
          x: 688.8,
          y: 292.705
        },
        m: .258,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: 292.705
        },
        t: {
          x: 705.6,
          y: 305.53
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: 305.53
        },
        t: {
          x: 722.4,
          y: 319.028
        },
        m: .269,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: 319.028
        },
        t: {
          x: 739.2,
          y: 332.965
        },
        m: .273,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: 332.965
        },
        t: {
          x: 756,
          y: 347.093
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: 347.093
        },
        t: {
          x: 772.8,
          y: 361.157
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: 361.157
        },
        t: {
          x: 789.6,
          y: 374.903
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: 374.903
        },
        t: {
          x: 1500,
          y: 388.09
        },
        m: 8.882,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: -380
        },
        t: {
          x: 823.2,
          y: -365.896
        },
        m: 8.462,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: -365.896
        },
        t: {
          x: 806.4,
          y: -352.046
        },
        m: .272,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: -352.046
        },
        t: {
          x: 789.6,
          y: -338.697
        },
        m: .268,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: -338.697
        },
        t: {
          x: 772.8,
          y: -326.074
        },
        m: .263,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: -326.074
        },
        t: {
          x: 756,
          y: -314.373
        },
        m: .256,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: -314.373
        },
        t: {
          x: 739.2,
          y: -303.754
        },
        m: .248,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: -303.754
        },
        t: {
          x: 722.4,
          y: -294.336
        },
        m: .241,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: -294.336
        },
        t: {
          x: 705.6,
          y: -286.189
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: -286.189
        },
        t: {
          x: 688.8,
          y: -279.332
        },
        m: .227,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: -279.332
        },
        t: {
          x: 672,
          y: -273.735
        },
        m: .221,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: -273.735
        },
        t: {
          x: 655.2,
          y: -269.318
        },
        m: .217,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: -269.318
        },
        t: {
          x: 638.4,
          y: -265.953
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: -265.953
        },
        t: {
          x: 621.6,
          y: -263.473
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: -263.473
        },
        t: {
          x: 604.8,
          y: -261.673
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: -261.673
        },
        t: {
          x: 588,
          y: -260.323
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: -260.323
        },
        t: {
          x: 571.2,
          y: -259.176
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: -259.176
        },
        t: {
          x: 554.4,
          y: -257.975
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: -257.975
        },
        t: {
          x: 537.6,
          y: -256.467
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: -256.467
        },
        t: {
          x: 520.8,
          y: -254.41
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: -254.41
        },
        t: {
          x: 504,
          y: -251.583
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: -251.583
        },
        t: {
          x: 487.2,
          y: -247.798
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: -247.798
        },
        t: {
          x: 470.4,
          y: -242.901
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: -242.901
        },
        t: {
          x: 453.6,
          y: -236.786
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: -236.786
        },
        t: {
          x: 436.8,
          y: -229.391
        },
        m: .229,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: -229.391
        },
        t: {
          x: 420,
          y: -220.708
        },
        m: .236,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: -220.708
        },
        t: {
          x: 403.2,
          y: -210.778
        },
        m: .244,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: -210.778
        },
        t: {
          x: 386.4,
          y: -199.691
        },
        m: .252,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: -199.691
        },
        t: {
          x: 369.6,
          y: -187.583
        },
        m: .259,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: -187.583
        },
        t: {
          x: 352.8,
          y: -174.631
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: -174.631
        },
        t: {
          x: 336,
          y: -161.045
        },
        m: .27,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: -161.045
        },
        t: {
          x: 319.2,
          y: -147.058
        },
        m: .273,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: -147.058
        },
        t: {
          x: 302.4,
          y: -132.923
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: -132.923
        },
        t: {
          x: 285.6,
          y: -118.894
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: -118.894
        },
        t: {
          x: 268.8,
          y: -105.225
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: -105.225
        },
        t: {
          x: 252,
          y: -92.153
        },
        m: .266,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: -92.153
        },
        t: {
          x: 235.2,
          y: -79.892
        },
        m: .26,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: -79.892
        },
        t: {
          x: 218.4,
          y: -68.626
        },
        m: .253,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: -68.626
        },
        t: {
          x: 201.6,
          y: -58.496
        },
        m: .245,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: -58.496
        },
        t: {
          x: 184.8,
          y: -49.603
        },
        m: .238,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: -49.603
        },
        t: {
          x: 168,
          y: -41.994
        },
        m: .231,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: -41.994
        },
        t: {
          x: 151.2,
          y: -35.67
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: -35.67
        },
        t: {
          x: 134.4,
          y: -30.578
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: -30.578
        },
        t: {
          x: 117.6,
          y: -26.618
        },
        m: .216,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: -26.618
        },
        t: {
          x: 100.8,
          y: -23.645
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: -23.645
        },
        t: {
          x: 84,
          y: -21.474
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: -21.474
        },
        t: {
          x: 67.2,
          y: -19.892
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: -19.892
        },
        t: {
          x: 50.4,
          y: -18.657
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: -18.657
        },
        t: {
          x: 33.6,
          y: -17.519
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: -17.519
        },
        t: {
          x: 16.8,
          y: -16.221
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: -16.221
        },
        t: {
          x: 0,
          y: -14.512
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: -14.512
        },
        t: {
          x: -16.8,
          y: -12.159
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: -12.159
        },
        t: {
          x: -33.6,
          y: -8.953
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: -8.953
        },
        t: {
          x: -50.4,
          y: -4.72
        },
        m: .217,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: -4.72
        },
        t: {
          x: -67.2,
          y: .675
        },
        m: .221,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: .675
        },
        t: {
          x: -84,
          y: 7.32
        },
        m: .226,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: 7.32
        },
        t: {
          x: -100.8,
          y: 15.254
        },
        m: .232,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: 15.254
        },
        t: {
          x: -117.6,
          y: 24.465
        },
        m: .239,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: 24.465
        },
        t: {
          x: -134.4,
          y: 34.892
        },
        m: .247,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: 34.892
        },
        t: {
          x: -151.2,
          y: 46.424
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: 46.424
        },
        t: {
          x: -168,
          y: 58.907
        },
        m: .262,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: 58.907
        },
        t: {
          x: -184.8,
          y: 72.151
        },
        m: .267,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: 72.151
        },
        t: {
          x: -201.6,
          y: 85.934
        },
        m: .272,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: 85.934
        },
        t: {
          x: -218.4,
          y: 100.014
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: 100.014
        },
        t: {
          x: -235.2,
          y: 114.136
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: 114.136
        },
        t: {
          x: -252,
          y: 128.045
        },
        m: .273,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: 128.045
        },
        t: {
          x: -268.8,
          y: 141.493
        },
        m: .269,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: 141.493
        },
        t: {
          x: -285.6,
          y: 154.251
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: 154.251
        },
        t: {
          x: -302.4,
          y: 166.116
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: 166.116
        },
        t: {
          x: -319.2,
          y: 176.923
        },
        m: .25,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: 176.923
        },
        t: {
          x: -336,
          y: 186.546
        },
        m: .242,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: 186.546
        },
        t: {
          x: -352.8,
          y: 194.907
        },
        m: .235,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: 194.907
        },
        t: {
          x: -369.6,
          y: 201.976
        },
        m: .228,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: 201.976
        },
        t: {
          x: -386.4,
          y: 207.777
        },
        m: .222,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: 207.777
        },
        t: {
          x: -403.2,
          y: 212.382
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: 212.382
        },
        t: {
          x: -420,
          y: 215.91
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: 215.91
        },
        t: {
          x: -436.8,
          y: 218.524
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: 218.524
        },
        t: {
          x: -453.6,
          y: 220.421
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: 220.421
        },
        t: {
          x: -470.4,
          y: 221.829
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: 221.829
        },
        t: {
          x: -487.2,
          y: 222.992
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: 222.992
        },
        t: {
          x: -504,
          y: 224.166
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: 224.166
        },
        t: {
          x: -520.8,
          y: 225.606
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: 225.606
        },
        t: {
          x: -537.6,
          y: 227.557
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: 227.557
        },
        t: {
          x: -554.4,
          y: 230.242
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: 230.242
        },
        t: {
          x: -571.2,
          y: 233.857
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: 233.857
        },
        t: {
          x: -588,
          y: 238.561
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: 238.561
        },
        t: {
          x: -604.8,
          y: 244.47
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: 244.47
        },
        t: {
          x: -621.6,
          y: 251.65
        },
        m: .228,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: 251.65
        },
        t: {
          x: -638.4,
          y: 260.122
        },
        m: .235,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: 260.122
        },
        t: {
          x: -655.2,
          y: 269.851
        },
        m: .243,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: 269.851
        },
        t: {
          x: -672,
          y: 280.755
        },
        m: .25,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: 280.755
        },
        t: {
          x: -688.8,
          y: 292.705
        },
        m: .258,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: 292.705
        },
        t: {
          x: -705.6,
          y: 305.53
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: 305.53
        },
        t: {
          x: -722.4,
          y: 319.028
        },
        m: .269,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: 319.028
        },
        t: {
          x: -739.2,
          y: 332.965
        },
        m: .273,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: 332.965
        },
        t: {
          x: -756,
          y: 347.093
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: 347.093
        },
        t: {
          x: -772.8,
          y: 361.157
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: 361.157
        },
        t: {
          x: -789.6,
          y: 374.903
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: 374.903
        },
        t: {
          x: -1500,
          y: 388.09
        },
        m: 8.882,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: -179.156
        },
        t: {
          x: -823.2,
          y: -165.051
        },
        m: 8.462,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: -165.051
        },
        t: {
          x: -806.4,
          y: -151.202
        },
        m: .272,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: -151.202
        },
        t: {
          x: -789.6,
          y: -137.853
        },
        m: .268,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: -137.853
        },
        t: {
          x: -772.8,
          y: -125.23
        },
        m: .263,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: -125.23
        },
        t: {
          x: -756,
          y: -113.529
        },
        m: .256,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: -113.529
        },
        t: {
          x: -739.2,
          y: -102.91
        },
        m: .248,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: -102.91
        },
        t: {
          x: -722.4,
          y: -93.492
        },
        m: .241,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: -93.492
        },
        t: {
          x: -705.6,
          y: -85.345
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: -85.345
        },
        t: {
          x: -688.8,
          y: -78.488
        },
        m: .227,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: -78.488
        },
        t: {
          x: -672,
          y: -72.891
        },
        m: .221,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: -72.891
        },
        t: {
          x: -655.2,
          y: -68.474
        },
        m: .217,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: -68.474
        },
        t: {
          x: -638.4,
          y: -65.109
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: -65.109
        },
        t: {
          x: -621.6,
          y: -62.629
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: -62.629
        },
        t: {
          x: -604.8,
          y: -60.829
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: -60.829
        },
        t: {
          x: -588,
          y: -59.479
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: -59.479
        },
        t: {
          x: -571.2,
          y: -58.332
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: -58.332
        },
        t: {
          x: -554.4,
          y: -57.131
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: -57.131
        },
        t: {
          x: -537.6,
          y: -55.623
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: -55.623
        },
        t: {
          x: -520.8,
          y: -53.566
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: -53.566
        },
        t: {
          x: -504,
          y: -50.739
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: -50.739
        },
        t: {
          x: -487.2,
          y: -46.954
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: -46.954
        },
        t: {
          x: -470.4,
          y: -42.057
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: -42.057
        },
        t: {
          x: -453.6,
          y: -35.942
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: -35.942
        },
        t: {
          x: -436.8,
          y: -28.547
        },
        m: .229,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: -28.547
        },
        t: {
          x: -420,
          y: -19.864
        },
        m: .236,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: -19.864
        },
        t: {
          x: -403.2,
          y: -9.934
        },
        m: .244,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: -9.934
        },
        t: {
          x: -386.4,
          y: 1.153
        },
        m: .252,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: 1.153
        },
        t: {
          x: -369.6,
          y: 13.261
        },
        m: .259,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: 13.261
        },
        t: {
          x: -352.8,
          y: 26.213
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: 26.213
        },
        t: {
          x: -336,
          y: 39.8
        },
        m: .27,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: 39.8
        },
        t: {
          x: -319.2,
          y: 53.786
        },
        m: .273,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: 53.786
        },
        t: {
          x: -302.4,
          y: 67.921
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: 67.921
        },
        t: {
          x: -285.6,
          y: 81.95
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: 81.95
        },
        t: {
          x: -268.8,
          y: 95.619
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: 95.619
        },
        t: {
          x: -252,
          y: 108.692
        },
        m: .266,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: 108.692
        },
        t: {
          x: -235.2,
          y: 120.952
        },
        m: .26,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: 120.952
        },
        t: {
          x: -218.4,
          y: 132.219
        },
        m: .253,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: 132.219
        },
        t: {
          x: -201.6,
          y: 142.348
        },
        m: .245,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: 142.348
        },
        t: {
          x: -184.8,
          y: 151.241
        },
        m: .238,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: 151.241
        },
        t: {
          x: -168,
          y: 158.85
        },
        m: .231,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: 158.85
        },
        t: {
          x: -151.2,
          y: 165.174
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: 165.174
        },
        t: {
          x: -134.4,
          y: 170.266
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: 170.266
        },
        t: {
          x: -117.6,
          y: 174.226
        },
        m: .216,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: 174.226
        },
        t: {
          x: -100.8,
          y: 177.2
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: 177.2
        },
        t: {
          x: -84,
          y: 179.37
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: 179.37
        },
        t: {
          x: -67.2,
          y: 180.952
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: 180.952
        },
        t: {
          x: -50.4,
          y: 182.187
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: 182.187
        },
        t: {
          x: -33.6,
          y: 183.325
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: 183.325
        },
        t: {
          x: -16.8,
          y: 184.624
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: 184.624
        },
        t: {
          x: 0,
          y: 186.333
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: 186.333
        },
        t: {
          x: 16.8,
          y: 188.686
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: 188.686
        },
        t: {
          x: 33.6,
          y: 191.891
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: 191.891
        },
        t: {
          x: 50.4,
          y: 196.124
        },
        m: .217,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: 196.124
        },
        t: {
          x: 67.2,
          y: 201.519
        },
        m: .221,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: 201.519
        },
        t: {
          x: 84,
          y: 208.164
        },
        m: .226,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: 208.164
        },
        t: {
          x: 100.8,
          y: 216.098
        },
        m: .232,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: 216.098
        },
        t: {
          x: 117.6,
          y: 225.309
        },
        m: .239,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: 225.309
        },
        t: {
          x: 134.4,
          y: 235.736
        },
        m: .247,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: 235.736
        },
        t: {
          x: 151.2,
          y: 247.268
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: 247.268
        },
        t: {
          x: 168,
          y: 259.751
        },
        m: .262,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: 259.751
        },
        t: {
          x: 184.8,
          y: 272.995
        },
        m: .267,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: 272.995
        },
        t: {
          x: 201.6,
          y: 286.778
        },
        m: .272,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: 286.778
        },
        t: {
          x: 218.4,
          y: 300.858
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: 300.858
        },
        t: {
          x: 235.2,
          y: 314.98
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: 314.98
        },
        t: {
          x: 252,
          y: 328.889
        },
        m: .273,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: 328.889
        },
        t: {
          x: 268.8,
          y: 342.337
        },
        m: .269,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: 342.337
        },
        t: {
          x: 285.6,
          y: 355.095
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: 355.095
        },
        t: {
          x: 302.4,
          y: 366.961
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: 366.961
        },
        t: {
          x: 319.2,
          y: 377.767
        },
        m: .25,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: 377.767
        },
        t: {
          x: 336,
          y: 387.39
        },
        m: .242,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: 387.39
        },
        t: {
          x: 352.8,
          y: 395.751
        },
        m: .235,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: 395.751
        },
        t: {
          x: 369.6,
          y: 402.82
        },
        m: .228,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: 402.82
        },
        t: {
          x: 386.4,
          y: 408.621
        },
        m: .222,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: 408.621
        },
        t: {
          x: 403.2,
          y: 413.226
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: 413.226
        },
        t: {
          x: 420,
          y: 416.754
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: 416.754
        },
        t: {
          x: 436.8,
          y: 419.368
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: 419.368
        },
        t: {
          x: 453.6,
          y: 421.265
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: 421.265
        },
        t: {
          x: 470.4,
          y: 422.673
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: 422.673
        },
        t: {
          x: 487.2,
          y: 423.836
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: 423.836
        },
        t: {
          x: 504,
          y: 425.01
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: 425.01
        },
        t: {
          x: 520.8,
          y: 426.45
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: 426.45
        },
        t: {
          x: 537.6,
          y: 428.401
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: 428.401
        },
        t: {
          x: 554.4,
          y: 431.086
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: 431.086
        },
        t: {
          x: 571.2,
          y: 434.701
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: 434.701
        },
        t: {
          x: 588,
          y: 439.405
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: 439.405
        },
        t: {
          x: 604.8,
          y: 445.314
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: 445.314
        },
        t: {
          x: 621.6,
          y: 452.495
        },
        m: .228,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: 452.495
        },
        t: {
          x: 638.4,
          y: 460.966
        },
        m: .235,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: 460.966
        },
        t: {
          x: 655.2,
          y: 470.695
        },
        m: .243,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: 470.695
        },
        t: {
          x: 672,
          y: 481.599
        },
        m: .25,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: 481.599
        },
        t: {
          x: 688.8,
          y: 493.549
        },
        m: .258,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: 493.549
        },
        t: {
          x: 705.6,
          y: 506.375
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: 506.375
        },
        t: {
          x: 722.4,
          y: 519.872
        },
        m: .269,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: 519.872
        },
        t: {
          x: 739.2,
          y: 533.809
        },
        m: .273,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: 533.809
        },
        t: {
          x: 756,
          y: 547.937
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: 547.937
        },
        t: {
          x: 772.8,
          y: 562.001
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: 562.001
        },
        t: {
          x: 789.6,
          y: 575.747
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: 575.747
        },
        t: {
          x: 1500,
          y: 588.934
        },
        m: 8.882,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: -179.156
        },
        t: {
          x: 823.2,
          y: -165.051
        },
        m: 8.462,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: -165.051
        },
        t: {
          x: 806.4,
          y: -151.202
        },
        m: .272,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: -151.202
        },
        t: {
          x: 789.6,
          y: -137.853
        },
        m: .268,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: -137.853
        },
        t: {
          x: 772.8,
          y: -125.23
        },
        m: .263,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: -125.23
        },
        t: {
          x: 756,
          y: -113.529
        },
        m: .256,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: -113.529
        },
        t: {
          x: 739.2,
          y: -102.91
        },
        m: .248,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: -102.91
        },
        t: {
          x: 722.4,
          y: -93.492
        },
        m: .241,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: -93.492
        },
        t: {
          x: 705.6,
          y: -85.345
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: -85.345
        },
        t: {
          x: 688.8,
          y: -78.488
        },
        m: .227,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: -78.488
        },
        t: {
          x: 672,
          y: -72.891
        },
        m: .221,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: -72.891
        },
        t: {
          x: 655.2,
          y: -68.474
        },
        m: .217,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: -68.474
        },
        t: {
          x: 638.4,
          y: -65.109
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: -65.109
        },
        t: {
          x: 621.6,
          y: -62.629
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: -62.629
        },
        t: {
          x: 604.8,
          y: -60.829
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: -60.829
        },
        t: {
          x: 588,
          y: -59.479
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: -59.479
        },
        t: {
          x: 571.2,
          y: -58.332
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: -58.332
        },
        t: {
          x: 554.4,
          y: -57.131
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: -57.131
        },
        t: {
          x: 537.6,
          y: -55.623
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: -55.623
        },
        t: {
          x: 520.8,
          y: -53.566
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: -53.566
        },
        t: {
          x: 504,
          y: -50.739
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: -50.739
        },
        t: {
          x: 487.2,
          y: -46.954
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: -46.954
        },
        t: {
          x: 470.4,
          y: -42.057
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: -42.057
        },
        t: {
          x: 453.6,
          y: -35.942
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: -35.942
        },
        t: {
          x: 436.8,
          y: -28.547
        },
        m: .229,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: -28.547
        },
        t: {
          x: 420,
          y: -19.864
        },
        m: .236,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: -19.864
        },
        t: {
          x: 403.2,
          y: -9.934
        },
        m: .244,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: -9.934
        },
        t: {
          x: 386.4,
          y: 1.153
        },
        m: .252,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: 1.153
        },
        t: {
          x: 369.6,
          y: 13.261
        },
        m: .259,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: 13.261
        },
        t: {
          x: 352.8,
          y: 26.213
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: 26.213
        },
        t: {
          x: 336,
          y: 39.8
        },
        m: .27,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: 39.8
        },
        t: {
          x: 319.2,
          y: 53.786
        },
        m: .273,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: 53.786
        },
        t: {
          x: 302.4,
          y: 67.921
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: 67.921
        },
        t: {
          x: 285.6,
          y: 81.95
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: 81.95
        },
        t: {
          x: 268.8,
          y: 95.619
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: 95.619
        },
        t: {
          x: 252,
          y: 108.692
        },
        m: .266,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: 108.692
        },
        t: {
          x: 235.2,
          y: 120.952
        },
        m: .26,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: 120.952
        },
        t: {
          x: 218.4,
          y: 132.219
        },
        m: .253,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: 132.219
        },
        t: {
          x: 201.6,
          y: 142.348
        },
        m: .245,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: 142.348
        },
        t: {
          x: 184.8,
          y: 151.241
        },
        m: .238,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: 151.241
        },
        t: {
          x: 168,
          y: 158.85
        },
        m: .231,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: 158.85
        },
        t: {
          x: 151.2,
          y: 165.174
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: 165.174
        },
        t: {
          x: 134.4,
          y: 170.266
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: 170.266
        },
        t: {
          x: 117.6,
          y: 174.226
        },
        m: .216,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: 174.226
        },
        t: {
          x: 100.8,
          y: 177.2
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: 177.2
        },
        t: {
          x: 84,
          y: 179.37
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: 179.37
        },
        t: {
          x: 67.2,
          y: 180.952
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: 180.952
        },
        t: {
          x: 50.4,
          y: 182.187
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: 182.187
        },
        t: {
          x: 33.6,
          y: 183.325
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: 183.325
        },
        t: {
          x: 16.8,
          y: 184.624
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: 184.624
        },
        t: {
          x: 0,
          y: 186.333
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: 186.333
        },
        t: {
          x: -16.8,
          y: 188.686
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: 188.686
        },
        t: {
          x: -33.6,
          y: 191.891
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: 191.891
        },
        t: {
          x: -50.4,
          y: 196.124
        },
        m: .217,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: 196.124
        },
        t: {
          x: -67.2,
          y: 201.519
        },
        m: .221,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: 201.519
        },
        t: {
          x: -84,
          y: 208.164
        },
        m: .226,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: 208.164
        },
        t: {
          x: -100.8,
          y: 216.098
        },
        m: .232,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: 216.098
        },
        t: {
          x: -117.6,
          y: 225.309
        },
        m: .239,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: 225.309
        },
        t: {
          x: -134.4,
          y: 235.736
        },
        m: .247,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: 235.736
        },
        t: {
          x: -151.2,
          y: 247.268
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: 247.268
        },
        t: {
          x: -168,
          y: 259.751
        },
        m: .262,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: 259.751
        },
        t: {
          x: -184.8,
          y: 272.995
        },
        m: .267,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: 272.995
        },
        t: {
          x: -201.6,
          y: 286.778
        },
        m: .272,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: 286.778
        },
        t: {
          x: -218.4,
          y: 300.858
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: 300.858
        },
        t: {
          x: -235.2,
          y: 314.98
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: 314.98
        },
        t: {
          x: -252,
          y: 328.889
        },
        m: .273,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: 328.889
        },
        t: {
          x: -268.8,
          y: 342.337
        },
        m: .269,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: 342.337
        },
        t: {
          x: -285.6,
          y: 355.095
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: 355.095
        },
        t: {
          x: -302.4,
          y: 366.961
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: 366.961
        },
        t: {
          x: -319.2,
          y: 377.767
        },
        m: .25,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: 377.767
        },
        t: {
          x: -336,
          y: 387.39
        },
        m: .242,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: 387.39
        },
        t: {
          x: -352.8,
          y: 395.751
        },
        m: .235,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: 395.751
        },
        t: {
          x: -369.6,
          y: 402.82
        },
        m: .228,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: 402.82
        },
        t: {
          x: -386.4,
          y: 408.621
        },
        m: .222,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: 408.621
        },
        t: {
          x: -403.2,
          y: 413.226
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: 413.226
        },
        t: {
          x: -420,
          y: 416.754
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: 416.754
        },
        t: {
          x: -436.8,
          y: 419.368
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: 419.368
        },
        t: {
          x: -453.6,
          y: 421.265
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: 421.265
        },
        t: {
          x: -470.4,
          y: 422.673
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: 422.673
        },
        t: {
          x: -487.2,
          y: 423.836
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: 423.836
        },
        t: {
          x: -504,
          y: 425.01
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: 425.01
        },
        t: {
          x: -520.8,
          y: 426.45
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: 426.45
        },
        t: {
          x: -537.6,
          y: 428.401
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: 428.401
        },
        t: {
          x: -554.4,
          y: 431.086
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: 431.086
        },
        t: {
          x: -571.2,
          y: 434.701
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: 434.701
        },
        t: {
          x: -588,
          y: 439.405
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: 439.405
        },
        t: {
          x: -604.8,
          y: 445.314
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: 445.314
        },
        t: {
          x: -621.6,
          y: 452.495
        },
        m: .228,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: 452.495
        },
        t: {
          x: -638.4,
          y: 460.966
        },
        m: .235,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: 460.966
        },
        t: {
          x: -655.2,
          y: 470.695
        },
        m: .243,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: 470.695
        },
        t: {
          x: -672,
          y: 481.599
        },
        m: .25,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: 481.599
        },
        t: {
          x: -688.8,
          y: 493.549
        },
        m: .258,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: 493.549
        },
        t: {
          x: -705.6,
          y: 506.375
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: 506.375
        },
        t: {
          x: -722.4,
          y: 519.872
        },
        m: .269,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: 519.872
        },
        t: {
          x: -739.2,
          y: 533.809
        },
        m: .273,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: 533.809
        },
        t: {
          x: -756,
          y: 547.937
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: 547.937
        },
        t: {
          x: -772.8,
          y: 562.001
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: 562.001
        },
        t: {
          x: -789.6,
          y: 575.747
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: 575.747
        },
        t: {
          x: -1500,
          y: 588.934
        },
        m: 8.882,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: 50.042
        },
        t: {
          x: -823.2,
          y: 64.147
        },
        m: 8.462,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: 64.147
        },
        t: {
          x: -806.4,
          y: 77.996
        },
        m: .272,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: 77.996
        },
        t: {
          x: -789.6,
          y: 91.345
        },
        m: .268,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: 91.345
        },
        t: {
          x: -772.8,
          y: 103.968
        },
        m: .263,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: 103.968
        },
        t: {
          x: -756,
          y: 115.669
        },
        m: .256,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: 115.669
        },
        t: {
          x: -739.2,
          y: 126.288
        },
        m: .248,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: 126.288
        },
        t: {
          x: -722.4,
          y: 135.706
        },
        m: .241,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: 135.706
        },
        t: {
          x: -705.6,
          y: 143.853
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: 143.853
        },
        t: {
          x: -688.8,
          y: 150.71
        },
        m: .227,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: 150.71
        },
        t: {
          x: -672,
          y: 156.307
        },
        m: .221,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: 156.307
        },
        t: {
          x: -655.2,
          y: 160.724
        },
        m: .217,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: 160.724
        },
        t: {
          x: -638.4,
          y: 164.089
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: 164.089
        },
        t: {
          x: -621.6,
          y: 166.569
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: 166.569
        },
        t: {
          x: -604.8,
          y: 168.369
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: 168.369
        },
        t: {
          x: -588,
          y: 169.719
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: 169.719
        },
        t: {
          x: -571.2,
          y: 170.866
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: 170.866
        },
        t: {
          x: -554.4,
          y: 172.067
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: 172.067
        },
        t: {
          x: -537.6,
          y: 173.575
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: 173.575
        },
        t: {
          x: -520.8,
          y: 175.632
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: 175.632
        },
        t: {
          x: -504,
          y: 178.459
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: 178.459
        },
        t: {
          x: -487.2,
          y: 182.244
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: 182.244
        },
        t: {
          x: -470.4,
          y: 187.141
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: 187.141
        },
        t: {
          x: -453.6,
          y: 193.256
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: 193.256
        },
        t: {
          x: -436.8,
          y: 200.651
        },
        m: .229,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: 200.651
        },
        t: {
          x: -420,
          y: 209.334
        },
        m: .236,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: 209.334
        },
        t: {
          x: -403.2,
          y: 219.264
        },
        m: .244,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: 219.264
        },
        t: {
          x: -386.4,
          y: 230.351
        },
        m: .252,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: 230.351
        },
        t: {
          x: -369.6,
          y: 242.459
        },
        m: .259,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: 242.459
        },
        t: {
          x: -352.8,
          y: 255.411
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: 255.411
        },
        t: {
          x: -336,
          y: 268.998
        },
        m: .27,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: 268.998
        },
        t: {
          x: -319.2,
          y: 282.984
        },
        m: .273,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: 282.984
        },
        t: {
          x: -302.4,
          y: 297.119
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: 297.119
        },
        t: {
          x: -285.6,
          y: 311.148
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: 311.148
        },
        t: {
          x: -268.8,
          y: 324.817
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: 324.817
        },
        t: {
          x: -252,
          y: 337.89
        },
        m: .266,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: 337.89
        },
        t: {
          x: -235.2,
          y: 350.15
        },
        m: .26,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: 350.15
        },
        t: {
          x: -218.4,
          y: 361.417
        },
        m: .253,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: 361.417
        },
        t: {
          x: -201.6,
          y: 371.546
        },
        m: .245,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: 371.546
        },
        t: {
          x: -184.8,
          y: 380.439
        },
        m: .238,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: 380.439
        },
        t: {
          x: -168,
          y: 388.048
        },
        m: .231,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: 388.048
        },
        t: {
          x: -151.2,
          y: 394.372
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: 394.372
        },
        t: {
          x: -134.4,
          y: 399.464
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: 399.464
        },
        t: {
          x: -117.6,
          y: 403.424
        },
        m: .216,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: 403.424
        },
        t: {
          x: -100.8,
          y: 406.398
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: 406.398
        },
        t: {
          x: -84,
          y: 408.568
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: 408.568
        },
        t: {
          x: -67.2,
          y: 410.15
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: 410.15
        },
        t: {
          x: -50.4,
          y: 411.385
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: 411.385
        },
        t: {
          x: -33.6,
          y: 412.523
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: 412.523
        },
        t: {
          x: -16.8,
          y: 413.822
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: 413.822
        },
        t: {
          x: 0,
          y: 415.531
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: 415.531
        },
        t: {
          x: 16.8,
          y: 417.884
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: 417.884
        },
        t: {
          x: 33.6,
          y: 421.089
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: 421.089
        },
        t: {
          x: 50.4,
          y: 425.322
        },
        m: .217,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: 425.322
        },
        t: {
          x: 67.2,
          y: 430.717
        },
        m: .221,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: 430.717
        },
        t: {
          x: 84,
          y: 437.362
        },
        m: .226,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: 437.362
        },
        t: {
          x: 100.8,
          y: 445.296
        },
        m: .232,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: 445.296
        },
        t: {
          x: 117.6,
          y: 454.507
        },
        m: .239,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: 454.507
        },
        t: {
          x: 134.4,
          y: 464.934
        },
        m: .247,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: 464.934
        },
        t: {
          x: 151.2,
          y: 476.466
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: 476.466
        },
        t: {
          x: 168,
          y: 488.949
        },
        m: .262,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: 488.949
        },
        t: {
          x: 184.8,
          y: 502.193
        },
        m: .267,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: 502.193
        },
        t: {
          x: 201.6,
          y: 515.976
        },
        m: .272,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: 515.976
        },
        t: {
          x: 218.4,
          y: 530.056
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: 530.056
        },
        t: {
          x: 235.2,
          y: 544.178
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: 544.178
        },
        t: {
          x: 252,
          y: 558.087
        },
        m: .273,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: 558.087
        },
        t: {
          x: 268.8,
          y: 571.535
        },
        m: .269,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: 571.535
        },
        t: {
          x: 285.6,
          y: 584.293
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: 584.293
        },
        t: {
          x: 302.4,
          y: 596.159
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: 596.159
        },
        t: {
          x: 319.2,
          y: 606.965
        },
        m: .25,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: 606.965
        },
        t: {
          x: 336,
          y: 616.588
        },
        m: .242,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: 616.588
        },
        t: {
          x: 352.8,
          y: 624.949
        },
        m: .235,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: 624.949
        },
        t: {
          x: 369.6,
          y: 632.018
        },
        m: .228,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: 632.018
        },
        t: {
          x: 386.4,
          y: 637.819
        },
        m: .222,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: 637.819
        },
        t: {
          x: 403.2,
          y: 642.424
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: 642.424
        },
        t: {
          x: 420,
          y: 645.952
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: 645.952
        },
        t: {
          x: 436.8,
          y: 648.566
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: 648.566
        },
        t: {
          x: 453.6,
          y: 650.463
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: 650.463
        },
        t: {
          x: 470.4,
          y: 651.871
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: 651.871
        },
        t: {
          x: 487.2,
          y: 653.034
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: 653.034
        },
        t: {
          x: 504,
          y: 654.208
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: 654.208
        },
        t: {
          x: 520.8,
          y: 655.648
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: 655.648
        },
        t: {
          x: 537.6,
          y: 657.599
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: 657.599
        },
        t: {
          x: 554.4,
          y: 660.284
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: 660.284
        },
        t: {
          x: 571.2,
          y: 663.899
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: 663.899
        },
        t: {
          x: 588,
          y: 668.603
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: 668.603
        },
        t: {
          x: 604.8,
          y: 674.512
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: 674.512
        },
        t: {
          x: 621.6,
          y: 681.693
        },
        m: .228,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: 681.693
        },
        t: {
          x: 638.4,
          y: 690.164
        },
        m: .235,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: 690.164
        },
        t: {
          x: 655.2,
          y: 699.893
        },
        m: .243,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: 699.893
        },
        t: {
          x: 672,
          y: 710.797
        },
        m: .25,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: 710.797
        },
        t: {
          x: 688.8,
          y: 722.747
        },
        m: .258,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: 722.747
        },
        t: {
          x: 705.6,
          y: 735.573
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: 735.573
        },
        t: {
          x: 722.4,
          y: 749.07
        },
        m: .269,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: 749.07
        },
        t: {
          x: 739.2,
          y: 763.007
        },
        m: .273,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: 763.007
        },
        t: {
          x: 756,
          y: 777.135
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: 777.135
        },
        t: {
          x: 772.8,
          y: 791.199
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: 791.199
        },
        t: {
          x: 789.6,
          y: 804.945
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: 804.945
        },
        t: {
          x: 1500,
          y: 818.132
        },
        m: 8.882,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: 50.042
        },
        t: {
          x: 823.2,
          y: 64.147
        },
        m: 8.462,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: 64.147
        },
        t: {
          x: 806.4,
          y: 77.996
        },
        m: .272,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: 77.996
        },
        t: {
          x: 789.6,
          y: 91.345
        },
        m: .268,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: 91.345
        },
        t: {
          x: 772.8,
          y: 103.968
        },
        m: .263,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: 103.968
        },
        t: {
          x: 756,
          y: 115.669
        },
        m: .256,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: 115.669
        },
        t: {
          x: 739.2,
          y: 126.288
        },
        m: .248,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: 126.288
        },
        t: {
          x: 722.4,
          y: 135.706
        },
        m: .241,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: 135.706
        },
        t: {
          x: 705.6,
          y: 143.853
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: 143.853
        },
        t: {
          x: 688.8,
          y: 150.71
        },
        m: .227,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: 150.71
        },
        t: {
          x: 672,
          y: 156.307
        },
        m: .221,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: 156.307
        },
        t: {
          x: 655.2,
          y: 160.724
        },
        m: .217,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: 160.724
        },
        t: {
          x: 638.4,
          y: 164.089
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: 164.089
        },
        t: {
          x: 621.6,
          y: 166.569
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: 166.569
        },
        t: {
          x: 604.8,
          y: 168.369
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: 168.369
        },
        t: {
          x: 588,
          y: 169.719
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: 169.719
        },
        t: {
          x: 571.2,
          y: 170.866
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: 170.866
        },
        t: {
          x: 554.4,
          y: 172.067
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: 172.067
        },
        t: {
          x: 537.6,
          y: 173.575
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: 173.575
        },
        t: {
          x: 520.8,
          y: 175.632
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: 175.632
        },
        t: {
          x: 504,
          y: 178.459
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: 178.459
        },
        t: {
          x: 487.2,
          y: 182.244
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: 182.244
        },
        t: {
          x: 470.4,
          y: 187.141
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: 187.141
        },
        t: {
          x: 453.6,
          y: 193.256
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: 193.256
        },
        t: {
          x: 436.8,
          y: 200.651
        },
        m: .229,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: 200.651
        },
        t: {
          x: 420,
          y: 209.334
        },
        m: .236,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: 209.334
        },
        t: {
          x: 403.2,
          y: 219.264
        },
        m: .244,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: 219.264
        },
        t: {
          x: 386.4,
          y: 230.351
        },
        m: .252,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: 230.351
        },
        t: {
          x: 369.6,
          y: 242.459
        },
        m: .259,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: 242.459
        },
        t: {
          x: 352.8,
          y: 255.411
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: 255.411
        },
        t: {
          x: 336,
          y: 268.998
        },
        m: .27,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: 268.998
        },
        t: {
          x: 319.2,
          y: 282.984
        },
        m: .273,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: 282.984
        },
        t: {
          x: 302.4,
          y: 297.119
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: 297.119
        },
        t: {
          x: 285.6,
          y: 311.148
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: 311.148
        },
        t: {
          x: 268.8,
          y: 324.817
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: 324.817
        },
        t: {
          x: 252,
          y: 337.89
        },
        m: .266,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: 337.89
        },
        t: {
          x: 235.2,
          y: 350.15
        },
        m: .26,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: 350.15
        },
        t: {
          x: 218.4,
          y: 361.417
        },
        m: .253,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: 361.417
        },
        t: {
          x: 201.6,
          y: 371.546
        },
        m: .245,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: 371.546
        },
        t: {
          x: 184.8,
          y: 380.439
        },
        m: .238,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: 380.439
        },
        t: {
          x: 168,
          y: 388.048
        },
        m: .231,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: 388.048
        },
        t: {
          x: 151.2,
          y: 394.372
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: 394.372
        },
        t: {
          x: 134.4,
          y: 399.464
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: 399.464
        },
        t: {
          x: 117.6,
          y: 403.424
        },
        m: .216,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: 403.424
        },
        t: {
          x: 100.8,
          y: 406.398
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: 406.398
        },
        t: {
          x: 84,
          y: 408.568
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: 408.568
        },
        t: {
          x: 67.2,
          y: 410.15
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: 410.15
        },
        t: {
          x: 50.4,
          y: 411.385
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: 411.385
        },
        t: {
          x: 33.6,
          y: 412.523
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: 412.523
        },
        t: {
          x: 16.8,
          y: 413.822
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: 413.822
        },
        t: {
          x: 0,
          y: 415.531
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: 415.531
        },
        t: {
          x: -16.8,
          y: 417.884
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: 417.884
        },
        t: {
          x: -33.6,
          y: 421.089
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: 421.089
        },
        t: {
          x: -50.4,
          y: 425.322
        },
        m: .217,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: 425.322
        },
        t: {
          x: -67.2,
          y: 430.717
        },
        m: .221,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: 430.717
        },
        t: {
          x: -84,
          y: 437.362
        },
        m: .226,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: 437.362
        },
        t: {
          x: -100.8,
          y: 445.296
        },
        m: .232,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: 445.296
        },
        t: {
          x: -117.6,
          y: 454.507
        },
        m: .239,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: 454.507
        },
        t: {
          x: -134.4,
          y: 464.934
        },
        m: .247,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: 464.934
        },
        t: {
          x: -151.2,
          y: 476.466
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: 476.466
        },
        t: {
          x: -168,
          y: 488.949
        },
        m: .262,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: 488.949
        },
        t: {
          x: -184.8,
          y: 502.193
        },
        m: .267,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: 502.193
        },
        t: {
          x: -201.6,
          y: 515.976
        },
        m: .272,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: 515.976
        },
        t: {
          x: -218.4,
          y: 530.056
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: 530.056
        },
        t: {
          x: -235.2,
          y: 544.178
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: 544.178
        },
        t: {
          x: -252,
          y: 558.087
        },
        m: .273,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: 558.087
        },
        t: {
          x: -268.8,
          y: 571.535
        },
        m: .269,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: 571.535
        },
        t: {
          x: -285.6,
          y: 584.293
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: 584.293
        },
        t: {
          x: -302.4,
          y: 596.159
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: 596.159
        },
        t: {
          x: -319.2,
          y: 606.965
        },
        m: .25,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: 606.965
        },
        t: {
          x: -336,
          y: 616.588
        },
        m: .242,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: 616.588
        },
        t: {
          x: -352.8,
          y: 624.949
        },
        m: .235,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: 624.949
        },
        t: {
          x: -369.6,
          y: 632.018
        },
        m: .228,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: 632.018
        },
        t: {
          x: -386.4,
          y: 637.819
        },
        m: .222,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: 637.819
        },
        t: {
          x: -403.2,
          y: 642.424
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: 642.424
        },
        t: {
          x: -420,
          y: 645.952
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: 645.952
        },
        t: {
          x: -436.8,
          y: 648.566
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: 648.566
        },
        t: {
          x: -453.6,
          y: 650.463
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: 650.463
        },
        t: {
          x: -470.4,
          y: 651.871
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: 651.871
        },
        t: {
          x: -487.2,
          y: 653.034
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: 653.034
        },
        t: {
          x: -504,
          y: 654.208
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: 654.208
        },
        t: {
          x: -520.8,
          y: 655.648
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: 655.648
        },
        t: {
          x: -537.6,
          y: 657.599
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: 657.599
        },
        t: {
          x: -554.4,
          y: 660.284
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: 660.284
        },
        t: {
          x: -571.2,
          y: 663.899
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: 663.899
        },
        t: {
          x: -588,
          y: 668.603
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: 668.603
        },
        t: {
          x: -604.8,
          y: 674.512
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: 674.512
        },
        t: {
          x: -621.6,
          y: 681.693
        },
        m: .228,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: 681.693
        },
        t: {
          x: -638.4,
          y: 690.164
        },
        m: .235,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: 690.164
        },
        t: {
          x: -655.2,
          y: 699.893
        },
        m: .243,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: 699.893
        },
        t: {
          x: -672,
          y: 710.797
        },
        m: .25,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: 710.797
        },
        t: {
          x: -688.8,
          y: 722.747
        },
        m: .258,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: 722.747
        },
        t: {
          x: -705.6,
          y: 735.573
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: 735.573
        },
        t: {
          x: -722.4,
          y: 749.07
        },
        m: .269,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: 749.07
        },
        t: {
          x: -739.2,
          y: 763.007
        },
        m: .273,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: 763.007
        },
        t: {
          x: -756,
          y: 777.135
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: 777.135
        },
        t: {
          x: -772.8,
          y: 791.199
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: 791.199
        },
        t: {
          x: -789.6,
          y: 804.945
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: 804.945
        },
        t: {
          x: -1500,
          y: 818.132
        },
        m: 8.882,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -357.975,
          y: -1500
        },
        t: {
          x: -341.175,
          y: -365.896
        },
        m: 14.178,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -341.175,
          y: -365.896
        },
        t: {
          x: -324.375,
          y: -352.046
        },
        m: .272,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -324.375,
          y: -352.046
        },
        t: {
          x: -307.575,
          y: -338.697
        },
        m: .268,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -307.575,
          y: -338.697
        },
        t: {
          x: -290.775,
          y: -326.074
        },
        m: .263,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -290.775,
          y: -326.074
        },
        t: {
          x: -273.975,
          y: -314.373
        },
        m: .256,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -273.975,
          y: -314.373
        },
        t: {
          x: -257.175,
          y: -303.754
        },
        m: .248,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -257.175,
          y: -303.754
        },
        t: {
          x: -240.375,
          y: -294.336
        },
        m: .241,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -240.375,
          y: -294.336
        },
        t: {
          x: -223.575,
          y: -286.189
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -223.575,
          y: -286.189
        },
        t: {
          x: -206.775,
          y: -279.332
        },
        m: .227,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -206.775,
          y: -279.332
        },
        t: {
          x: -189.975,
          y: -273.735
        },
        m: .221,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -189.975,
          y: -273.735
        },
        t: {
          x: -173.175,
          y: -269.318
        },
        m: .217,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -173.175,
          y: -269.318
        },
        t: {
          x: -156.375,
          y: -265.953
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -156.375,
          y: -265.953
        },
        t: {
          x: -139.575,
          y: -263.473
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -139.575,
          y: -263.473
        },
        t: {
          x: -122.775,
          y: -261.673
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -122.775,
          y: -261.673
        },
        t: {
          x: -105.975,
          y: -260.323
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -105.975,
          y: -260.323
        },
        t: {
          x: -89.175,
          y: -259.176
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -89.175,
          y: -259.176
        },
        t: {
          x: -72.375,
          y: -257.975
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -72.375,
          y: -257.975
        },
        t: {
          x: -55.575,
          y: -256.467
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -55.575,
          y: -256.467
        },
        t: {
          x: -38.775,
          y: -254.41
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -38.775,
          y: -254.41
        },
        t: {
          x: -21.975,
          y: -251.583
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -21.975,
          y: -251.583
        },
        t: {
          x: -5.175,
          y: -247.798
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -5.175,
          y: -247.798
        },
        t: {
          x: 11.625,
          y: -242.901
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: 11.625,
          y: -242.901
        },
        t: {
          x: 28.425,
          y: -236.786
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: 28.425,
          y: -236.786
        },
        t: {
          x: 45.225,
          y: -229.391
        },
        m: .229,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: 45.225,
          y: -229.391
        },
        t: {
          x: 62.025,
          y: -220.708
        },
        m: .236,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: 62.025,
          y: -220.708
        },
        t: {
          x: 78.825,
          y: -210.778
        },
        m: .244,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: 78.825,
          y: -210.778
        },
        t: {
          x: 95.625,
          y: -199.691
        },
        m: .252,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: 95.625,
          y: -199.691
        },
        t: {
          x: 112.425,
          y: -187.583
        },
        m: .259,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: 112.425,
          y: -187.583
        },
        t: {
          x: 129.225,
          y: -174.631
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: 129.225,
          y: -174.631
        },
        t: {
          x: 146.025,
          y: -161.045
        },
        m: .27,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: 146.025,
          y: -161.045
        },
        t: {
          x: 162.825,
          y: -147.058
        },
        m: .273,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: 162.825,
          y: -147.058
        },
        t: {
          x: 179.625,
          y: -132.923
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: 179.625,
          y: -132.923
        },
        t: {
          x: 196.425,
          y: -118.894
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: 196.425,
          y: -118.894
        },
        t: {
          x: 213.225,
          y: -105.225
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: 213.225,
          y: -105.225
        },
        t: {
          x: 230.025,
          y: -92.153
        },
        m: .266,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: 230.025,
          y: -92.153
        },
        t: {
          x: 246.825,
          y: -79.892
        },
        m: .26,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: 246.825,
          y: -79.892
        },
        t: {
          x: 263.625,
          y: -68.626
        },
        m: .253,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: 263.625,
          y: -68.626
        },
        t: {
          x: 280.425,
          y: -58.496
        },
        m: .245,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: 280.425,
          y: -58.496
        },
        t: {
          x: 297.225,
          y: -49.603
        },
        m: .238,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: 297.225,
          y: -49.603
        },
        t: {
          x: 314.025,
          y: -41.994
        },
        m: .231,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: 314.025,
          y: -41.994
        },
        t: {
          x: 330.825,
          y: -35.67
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: 330.825,
          y: -35.67
        },
        t: {
          x: 347.625,
          y: -30.578
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: 347.625,
          y: -30.578
        },
        t: {
          x: 364.425,
          y: -26.618
        },
        m: .216,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: 364.425,
          y: -26.618
        },
        t: {
          x: 381.225,
          y: -23.645
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: 381.225,
          y: -23.645
        },
        t: {
          x: 398.025,
          y: -21.474
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: 398.025,
          y: -21.474
        },
        t: {
          x: 414.825,
          y: -19.892
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: 414.825,
          y: -19.892
        },
        t: {
          x: 431.625,
          y: -18.657
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: 431.625,
          y: -18.657
        },
        t: {
          x: 448.425,
          y: -17.519
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: 448.425,
          y: -17.519
        },
        t: {
          x: 465.225,
          y: -16.221
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: 465.225,
          y: -16.221
        },
        t: {
          x: 482.025,
          y: -14.512
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 482.025,
          y: -14.512
        },
        t: {
          x: 498.825,
          y: -12.159
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 498.825,
          y: -12.159
        },
        t: {
          x: 515.625,
          y: -8.953
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 515.625,
          y: -8.953
        },
        t: {
          x: 532.425,
          y: -4.72
        },
        m: .217,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 532.425,
          y: -4.72
        },
        t: {
          x: 549.225,
          y: .675
        },
        m: .221,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 549.225,
          y: .675
        },
        t: {
          x: 566.025,
          y: 7.32
        },
        m: .226,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 566.025,
          y: 7.32
        },
        t: {
          x: 582.825,
          y: 15.254
        },
        m: .232,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 582.825,
          y: 15.254
        },
        t: {
          x: 599.625,
          y: 24.465
        },
        m: .239,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 599.625,
          y: 24.465
        },
        t: {
          x: 616.425,
          y: 34.892
        },
        m: .247,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 616.425,
          y: 34.892
        },
        t: {
          x: 633.225,
          y: 46.424
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 633.225,
          y: 46.424
        },
        t: {
          x: 650.025,
          y: 58.907
        },
        m: .262,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 650.025,
          y: 58.907
        },
        t: {
          x: 666.825,
          y: 72.151
        },
        m: .267,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 666.825,
          y: 72.151
        },
        t: {
          x: 683.625,
          y: 85.934
        },
        m: .272,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 683.625,
          y: 85.934
        },
        t: {
          x: 700.425,
          y: 100.014
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 700.425,
          y: 100.014
        },
        t: {
          x: 717.225,
          y: 114.136
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 717.225,
          y: 114.136
        },
        t: {
          x: 734.025,
          y: 128.045
        },
        m: .273,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 734.025,
          y: 128.045
        },
        t: {
          x: 750.825,
          y: 141.493
        },
        m: .269,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 750.825,
          y: 141.493
        },
        t: {
          x: 767.625,
          y: 154.251
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 767.625,
          y: 154.251
        },
        t: {
          x: 784.425,
          y: 166.116
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 784.425,
          y: 166.116
        },
        t: {
          x: 801.225,
          y: 176.923
        },
        m: .25,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 801.225,
          y: 176.923
        },
        t: {
          x: 818.025,
          y: 186.546
        },
        m: .242,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 818.025,
          y: 186.546
        },
        t: {
          x: 834.825,
          y: 194.907
        },
        m: .235,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 834.825,
          y: 194.907
        },
        t: {
          x: 851.625,
          y: 201.976
        },
        m: .228,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 851.625,
          y: 201.976
        },
        t: {
          x: 868.425,
          y: 207.777
        },
        m: .222,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 868.425,
          y: 207.777
        },
        t: {
          x: 885.225,
          y: 212.382
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 885.225,
          y: 212.382
        },
        t: {
          x: 902.025,
          y: 215.91
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 902.025,
          y: 215.91
        },
        t: {
          x: 918.825,
          y: 218.524
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 918.825,
          y: 218.524
        },
        t: {
          x: 935.625,
          y: 220.421
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 935.625,
          y: 220.421
        },
        t: {
          x: 952.425,
          y: 221.829
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 952.425,
          y: 221.829
        },
        t: {
          x: 969.225,
          y: 222.992
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 969.225,
          y: 222.992
        },
        t: {
          x: 986.025,
          y: 224.166
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 986.025,
          y: 224.166
        },
        t: {
          x: 1002.825,
          y: 225.606
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 1002.825,
          y: 225.606
        },
        t: {
          x: 1019.625,
          y: 227.557
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 1019.625,
          y: 227.557
        },
        t: {
          x: 1036.425,
          y: 230.242
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 1036.425,
          y: 230.242
        },
        t: {
          x: 1053.225,
          y: 233.857
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 1053.225,
          y: 233.857
        },
        t: {
          x: 1070.025,
          y: 238.561
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 1070.025,
          y: 238.561
        },
        t: {
          x: 1086.825,
          y: 244.47
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 1086.825,
          y: 244.47
        },
        t: {
          x: 1103.625,
          y: 251.65
        },
        m: .228,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 1103.625,
          y: 251.65
        },
        t: {
          x: 1120.425,
          y: 260.122
        },
        m: .235,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 1120.425,
          y: 260.122
        },
        t: {
          x: 1137.225,
          y: 269.851
        },
        m: .243,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 1137.225,
          y: 269.851
        },
        t: {
          x: 1154.025,
          y: 280.755
        },
        m: .25,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 1154.025,
          y: 280.755
        },
        t: {
          x: 1170.825,
          y: 292.705
        },
        m: .258,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 1170.825,
          y: 292.705
        },
        t: {
          x: 1187.625,
          y: 305.53
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 1187.625,
          y: 305.53
        },
        t: {
          x: 1204.425,
          y: 319.028
        },
        m: .269,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 1204.425,
          y: 319.028
        },
        t: {
          x: 1221.225,
          y: 332.965
        },
        m: .273,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 1221.225,
          y: 332.965
        },
        t: {
          x: 1238.025,
          y: 347.093
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 1238.025,
          y: 347.093
        },
        t: {
          x: 1254.825,
          y: 361.157
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 1254.825,
          y: 361.157
        },
        t: {
          x: 1271.625,
          y: 374.903
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 1271.625,
          y: 374.903
        },
        t: {
          x: 1500,
          y: 388.09
        },
        m: 2.859,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 357.975,
          y: -1500
        },
        t: {
          x: 341.175,
          y: -365.896
        },
        m: 14.178,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 341.175,
          y: -365.896
        },
        t: {
          x: 324.375,
          y: -352.046
        },
        m: .272,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 324.375,
          y: -352.046
        },
        t: {
          x: 307.575,
          y: -338.697
        },
        m: .268,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 307.575,
          y: -338.697
        },
        t: {
          x: 290.775,
          y: -326.074
        },
        m: .263,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 290.775,
          y: -326.074
        },
        t: {
          x: 273.975,
          y: -314.373
        },
        m: .256,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 273.975,
          y: -314.373
        },
        t: {
          x: 257.175,
          y: -303.754
        },
        m: .248,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 257.175,
          y: -303.754
        },
        t: {
          x: 240.375,
          y: -294.336
        },
        m: .241,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 240.375,
          y: -294.336
        },
        t: {
          x: 223.575,
          y: -286.189
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 223.575,
          y: -286.189
        },
        t: {
          x: 206.775,
          y: -279.332
        },
        m: .227,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 206.775,
          y: -279.332
        },
        t: {
          x: 189.975,
          y: -273.735
        },
        m: .221,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 189.975,
          y: -273.735
        },
        t: {
          x: 173.175,
          y: -269.318
        },
        m: .217,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 173.175,
          y: -269.318
        },
        t: {
          x: 156.375,
          y: -265.953
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 156.375,
          y: -265.953
        },
        t: {
          x: 139.575,
          y: -263.473
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 139.575,
          y: -263.473
        },
        t: {
          x: 122.775,
          y: -261.673
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 122.775,
          y: -261.673
        },
        t: {
          x: 105.975,
          y: -260.323
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 105.975,
          y: -260.323
        },
        t: {
          x: 89.175,
          y: -259.176
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 89.175,
          y: -259.176
        },
        t: {
          x: 72.375,
          y: -257.975
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 72.375,
          y: -257.975
        },
        t: {
          x: 55.575,
          y: -256.467
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 55.575,
          y: -256.467
        },
        t: {
          x: 38.775,
          y: -254.41
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 38.775,
          y: -254.41
        },
        t: {
          x: 21.975,
          y: -251.583
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 21.975,
          y: -251.583
        },
        t: {
          x: 5.175,
          y: -247.798
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 5.175,
          y: -247.798
        },
        t: {
          x: -11.625,
          y: -242.901
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: -11.625,
          y: -242.901
        },
        t: {
          x: -28.425,
          y: -236.786
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: -28.425,
          y: -236.786
        },
        t: {
          x: -45.225,
          y: -229.391
        },
        m: .229,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: -45.225,
          y: -229.391
        },
        t: {
          x: -62.025,
          y: -220.708
        },
        m: .236,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: -62.025,
          y: -220.708
        },
        t: {
          x: -78.825,
          y: -210.778
        },
        m: .244,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: -78.825,
          y: -210.778
        },
        t: {
          x: -95.625,
          y: -199.691
        },
        m: .252,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: -95.625,
          y: -199.691
        },
        t: {
          x: -112.425,
          y: -187.583
        },
        m: .259,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: -112.425,
          y: -187.583
        },
        t: {
          x: -129.225,
          y: -174.631
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: -129.225,
          y: -174.631
        },
        t: {
          x: -146.025,
          y: -161.045
        },
        m: .27,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: -146.025,
          y: -161.045
        },
        t: {
          x: -162.825,
          y: -147.058
        },
        m: .273,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: -162.825,
          y: -147.058
        },
        t: {
          x: -179.625,
          y: -132.923
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: -179.625,
          y: -132.923
        },
        t: {
          x: -196.425,
          y: -118.894
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: -196.425,
          y: -118.894
        },
        t: {
          x: -213.225,
          y: -105.225
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: -213.225,
          y: -105.225
        },
        t: {
          x: -230.025,
          y: -92.153
        },
        m: .266,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: -230.025,
          y: -92.153
        },
        t: {
          x: -246.825,
          y: -79.892
        },
        m: .26,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: -246.825,
          y: -79.892
        },
        t: {
          x: -263.625,
          y: -68.626
        },
        m: .253,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: -263.625,
          y: -68.626
        },
        t: {
          x: -280.425,
          y: -58.496
        },
        m: .245,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: -280.425,
          y: -58.496
        },
        t: {
          x: -297.225,
          y: -49.603
        },
        m: .238,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: -297.225,
          y: -49.603
        },
        t: {
          x: -314.025,
          y: -41.994
        },
        m: .231,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: -314.025,
          y: -41.994
        },
        t: {
          x: -330.825,
          y: -35.67
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: -330.825,
          y: -35.67
        },
        t: {
          x: -347.625,
          y: -30.578
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: -347.625,
          y: -30.578
        },
        t: {
          x: -364.425,
          y: -26.618
        },
        m: .216,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: -364.425,
          y: -26.618
        },
        t: {
          x: -381.225,
          y: -23.645
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: -381.225,
          y: -23.645
        },
        t: {
          x: -398.025,
          y: -21.474
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: -398.025,
          y: -21.474
        },
        t: {
          x: -414.825,
          y: -19.892
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: -414.825,
          y: -19.892
        },
        t: {
          x: -431.625,
          y: -18.657
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: -431.625,
          y: -18.657
        },
        t: {
          x: -448.425,
          y: -17.519
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: -448.425,
          y: -17.519
        },
        t: {
          x: -465.225,
          y: -16.221
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: -465.225,
          y: -16.221
        },
        t: {
          x: -482.025,
          y: -14.512
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: -482.025,
          y: -14.512
        },
        t: {
          x: -498.825,
          y: -12.159
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -498.825,
          y: -12.159
        },
        t: {
          x: -515.625,
          y: -8.953
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -515.625,
          y: -8.953
        },
        t: {
          x: -532.425,
          y: -4.72
        },
        m: .217,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -532.425,
          y: -4.72
        },
        t: {
          x: -549.225,
          y: .675
        },
        m: .221,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -549.225,
          y: .675
        },
        t: {
          x: -566.025,
          y: 7.32
        },
        m: .226,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -566.025,
          y: 7.32
        },
        t: {
          x: -582.825,
          y: 15.254
        },
        m: .232,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -582.825,
          y: 15.254
        },
        t: {
          x: -599.625,
          y: 24.465
        },
        m: .239,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -599.625,
          y: 24.465
        },
        t: {
          x: -616.425,
          y: 34.892
        },
        m: .247,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -616.425,
          y: 34.892
        },
        t: {
          x: -633.225,
          y: 46.424
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -633.225,
          y: 46.424
        },
        t: {
          x: -650.025,
          y: 58.907
        },
        m: .262,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -650.025,
          y: 58.907
        },
        t: {
          x: -666.825,
          y: 72.151
        },
        m: .267,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -666.825,
          y: 72.151
        },
        t: {
          x: -683.625,
          y: 85.934
        },
        m: .272,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -683.625,
          y: 85.934
        },
        t: {
          x: -700.425,
          y: 100.014
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -700.425,
          y: 100.014
        },
        t: {
          x: -717.225,
          y: 114.136
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -717.225,
          y: 114.136
        },
        t: {
          x: -734.025,
          y: 128.045
        },
        m: .273,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -734.025,
          y: 128.045
        },
        t: {
          x: -750.825,
          y: 141.493
        },
        m: .269,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -750.825,
          y: 141.493
        },
        t: {
          x: -767.625,
          y: 154.251
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -767.625,
          y: 154.251
        },
        t: {
          x: -784.425,
          y: 166.116
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -784.425,
          y: 166.116
        },
        t: {
          x: -801.225,
          y: 176.923
        },
        m: .25,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -801.225,
          y: 176.923
        },
        t: {
          x: -818.025,
          y: 186.546
        },
        m: .242,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -818.025,
          y: 186.546
        },
        t: {
          x: -834.825,
          y: 194.907
        },
        m: .235,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -834.825,
          y: 194.907
        },
        t: {
          x: -851.625,
          y: 201.976
        },
        m: .228,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -851.625,
          y: 201.976
        },
        t: {
          x: -868.425,
          y: 207.777
        },
        m: .222,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -868.425,
          y: 207.777
        },
        t: {
          x: -885.225,
          y: 212.382
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -885.225,
          y: 212.382
        },
        t: {
          x: -902.025,
          y: 215.91
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -902.025,
          y: 215.91
        },
        t: {
          x: -918.825,
          y: 218.524
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -918.825,
          y: 218.524
        },
        t: {
          x: -935.625,
          y: 220.421
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -935.625,
          y: 220.421
        },
        t: {
          x: -952.425,
          y: 221.829
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -952.425,
          y: 221.829
        },
        t: {
          x: -969.225,
          y: 222.992
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -969.225,
          y: 222.992
        },
        t: {
          x: -986.025,
          y: 224.166
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -986.025,
          y: 224.166
        },
        t: {
          x: -1002.825,
          y: 225.606
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -1002.825,
          y: 225.606
        },
        t: {
          x: -1019.625,
          y: 227.557
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -1019.625,
          y: 227.557
        },
        t: {
          x: -1036.425,
          y: 230.242
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -1036.425,
          y: 230.242
        },
        t: {
          x: -1053.225,
          y: 233.857
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -1053.225,
          y: 233.857
        },
        t: {
          x: -1070.025,
          y: 238.561
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -1070.025,
          y: 238.561
        },
        t: {
          x: -1086.825,
          y: 244.47
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -1086.825,
          y: 244.47
        },
        t: {
          x: -1103.625,
          y: 251.65
        },
        m: .228,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -1103.625,
          y: 251.65
        },
        t: {
          x: -1120.425,
          y: 260.122
        },
        m: .235,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -1120.425,
          y: 260.122
        },
        t: {
          x: -1137.225,
          y: 269.851
        },
        m: .243,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -1137.225,
          y: 269.851
        },
        t: {
          x: -1154.025,
          y: 280.755
        },
        m: .25,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -1154.025,
          y: 280.755
        },
        t: {
          x: -1170.825,
          y: 292.705
        },
        m: .258,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -1170.825,
          y: 292.705
        },
        t: {
          x: -1187.625,
          y: 305.53
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -1187.625,
          y: 305.53
        },
        t: {
          x: -1204.425,
          y: 319.028
        },
        m: .269,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -1204.425,
          y: 319.028
        },
        t: {
          x: -1221.225,
          y: 332.965
        },
        m: .273,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -1221.225,
          y: 332.965
        },
        t: {
          x: -1238.025,
          y: 347.093
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -1238.025,
          y: 347.093
        },
        t: {
          x: -1254.825,
          y: 361.157
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -1254.825,
          y: 361.157
        },
        t: {
          x: -1271.625,
          y: 374.903
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -1271.625,
          y: 374.903
        },
        t: {
          x: -1500,
          y: 388.09
        },
        m: 2.859,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: 132.918,
          y: -1500
        },
        t: {
          x: 149.718,
          y: -365.895
        },
        m: 14.178,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: 149.718,
          y: -365.895
        },
        t: {
          x: 166.518,
          y: -352.046
        },
        m: .272,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: 166.518,
          y: -352.046
        },
        t: {
          x: 183.318,
          y: -338.697
        },
        m: .268,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: 183.318,
          y: -338.697
        },
        t: {
          x: 200.118,
          y: -326.074
        },
        m: .263,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: 200.118,
          y: -326.074
        },
        t: {
          x: 216.918,
          y: -314.373
        },
        m: .256,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: 216.918,
          y: -314.373
        },
        t: {
          x: 233.718,
          y: -303.754
        },
        m: .248,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: 233.718,
          y: -303.754
        },
        t: {
          x: 250.518,
          y: -294.336
        },
        m: .241,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: 250.518,
          y: -294.336
        },
        t: {
          x: 267.318,
          y: -286.189
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: 267.318,
          y: -286.189
        },
        t: {
          x: 284.118,
          y: -279.332
        },
        m: .227,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: 284.118,
          y: -279.332
        },
        t: {
          x: 300.918,
          y: -273.735
        },
        m: .221,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: 300.918,
          y: -273.735
        },
        t: {
          x: 317.718,
          y: -269.318
        },
        m: .217,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: 317.718,
          y: -269.318
        },
        t: {
          x: 334.518,
          y: -265.953
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: 334.518,
          y: -265.953
        },
        t: {
          x: 351.318,
          y: -263.473
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: 351.318,
          y: -263.473
        },
        t: {
          x: 368.118,
          y: -261.673
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: 368.118,
          y: -261.673
        },
        t: {
          x: 384.918,
          y: -260.323
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: 384.918,
          y: -260.323
        },
        t: {
          x: 401.718,
          y: -259.176
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: 401.718,
          y: -259.176
        },
        t: {
          x: 418.518,
          y: -257.975
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: 418.518,
          y: -257.975
        },
        t: {
          x: 435.318,
          y: -256.467
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: 435.318,
          y: -256.467
        },
        t: {
          x: 452.118,
          y: -254.41
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: 452.118,
          y: -254.41
        },
        t: {
          x: 468.918,
          y: -251.583
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: 468.918,
          y: -251.583
        },
        t: {
          x: 485.718,
          y: -247.798
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: 485.718,
          y: -247.798
        },
        t: {
          x: 502.518,
          y: -242.901
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: 502.518,
          y: -242.901
        },
        t: {
          x: 519.318,
          y: -236.786
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: 519.318,
          y: -236.786
        },
        t: {
          x: 536.118,
          y: -229.391
        },
        m: .229,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: 536.118,
          y: -229.391
        },
        t: {
          x: 552.918,
          y: -220.708
        },
        m: .236,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: 552.918,
          y: -220.708
        },
        t: {
          x: 569.718,
          y: -210.778
        },
        m: .244,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: 569.718,
          y: -210.778
        },
        t: {
          x: 586.518,
          y: -199.691
        },
        m: .252,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: 586.518,
          y: -199.691
        },
        t: {
          x: 603.318,
          y: -187.583
        },
        m: .259,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: 603.318,
          y: -187.583
        },
        t: {
          x: 620.118,
          y: -174.631
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: 620.118,
          y: -174.631
        },
        t: {
          x: 636.918,
          y: -161.044
        },
        m: .27,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: 636.918,
          y: -161.044
        },
        t: {
          x: 653.718,
          y: -147.058
        },
        m: .273,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: 653.718,
          y: -147.058
        },
        t: {
          x: 670.518,
          y: -132.923
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: 670.518,
          y: -132.923
        },
        t: {
          x: 687.318,
          y: -118.894
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: 687.318,
          y: -118.894
        },
        t: {
          x: 704.118,
          y: -105.225
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: 704.118,
          y: -105.225
        },
        t: {
          x: 720.918,
          y: -92.152
        },
        m: .266,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: 720.918,
          y: -92.152
        },
        t: {
          x: 737.718,
          y: -79.892
        },
        m: .26,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: 737.718,
          y: -79.892
        },
        t: {
          x: 754.518,
          y: -68.625
        },
        m: .253,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: 754.518,
          y: -68.625
        },
        t: {
          x: 771.318,
          y: -58.496
        },
        m: .245,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: 771.318,
          y: -58.496
        },
        t: {
          x: 788.118,
          y: -49.603
        },
        m: .238,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: 788.118,
          y: -49.603
        },
        t: {
          x: 804.918,
          y: -41.994
        },
        m: .231,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: 804.918,
          y: -41.994
        },
        t: {
          x: 821.718,
          y: -35.67
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: 821.718,
          y: -35.67
        },
        t: {
          x: 838.518,
          y: -30.578
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: 838.518,
          y: -30.578
        },
        t: {
          x: 855.318,
          y: -26.618
        },
        m: .216,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: 855.318,
          y: -26.618
        },
        t: {
          x: 872.118,
          y: -23.644
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: 872.118,
          y: -23.644
        },
        t: {
          x: 888.918,
          y: -21.474
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: 888.918,
          y: -21.474
        },
        t: {
          x: 905.718,
          y: -19.892
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: 905.718,
          y: -19.892
        },
        t: {
          x: 922.518,
          y: -18.657
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: 922.518,
          y: -18.657
        },
        t: {
          x: 939.318,
          y: -17.519
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: 939.318,
          y: -17.519
        },
        t: {
          x: 956.118,
          y: -16.22
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: 956.118,
          y: -16.22
        },
        t: {
          x: 972.918,
          y: -14.511
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 972.918,
          y: -14.511
        },
        t: {
          x: 989.718,
          y: -12.158
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 989.718,
          y: -12.158
        },
        t: {
          x: 1006.518,
          y: -8.953
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 1006.518,
          y: -8.953
        },
        t: {
          x: 1023.318,
          y: -4.72
        },
        m: .217,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 1023.318,
          y: -4.72
        },
        t: {
          x: 1040.118,
          y: .675
        },
        m: .221,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 1040.118,
          y: .675
        },
        t: {
          x: 1056.918,
          y: 7.32
        },
        m: .226,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 1056.918,
          y: 7.32
        },
        t: {
          x: 1073.718,
          y: 15.254
        },
        m: .232,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 1073.718,
          y: 15.254
        },
        t: {
          x: 1090.518,
          y: 24.465
        },
        m: .239,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 1090.518,
          y: 24.465
        },
        t: {
          x: 1107.318,
          y: 34.892
        },
        m: .247,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 1107.318,
          y: 34.892
        },
        t: {
          x: 1124.118,
          y: 46.424
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 1124.118,
          y: 46.424
        },
        t: {
          x: 1140.918,
          y: 58.907
        },
        m: .262,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 1140.918,
          y: 58.907
        },
        t: {
          x: 1157.718,
          y: 72.151
        },
        m: .267,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 1157.718,
          y: 72.151
        },
        t: {
          x: 1174.518,
          y: 85.934
        },
        m: .272,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 1174.518,
          y: 85.934
        },
        t: {
          x: 1191.318,
          y: 100.014
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 1191.318,
          y: 100.014
        },
        t: {
          x: 1208.118,
          y: 114.136
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 1208.118,
          y: 114.136
        },
        t: {
          x: 1224.918,
          y: 128.045
        },
        m: .273,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 1224.918,
          y: 128.045
        },
        t: {
          x: 1241.718,
          y: 141.493
        },
        m: .269,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 1241.718,
          y: 141.493
        },
        t: {
          x: 1258.518,
          y: 154.251
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 1258.518,
          y: 154.251
        },
        t: {
          x: 1275.318,
          y: 166.117
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 1275.318,
          y: 166.117
        },
        t: {
          x: 1292.118,
          y: 176.923
        },
        m: .25,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 1292.118,
          y: 176.923
        },
        t: {
          x: 1308.918,
          y: 186.546
        },
        m: .242,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 1308.918,
          y: 186.546
        },
        t: {
          x: 1325.718,
          y: 194.907
        },
        m: .235,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 1325.718,
          y: 194.907
        },
        t: {
          x: 1342.518,
          y: 201.976
        },
        m: .228,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 1342.518,
          y: 201.976
        },
        t: {
          x: 1359.318,
          y: 207.777
        },
        m: .222,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 1359.318,
          y: 207.777
        },
        t: {
          x: 1376.118,
          y: 212.382
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 1376.118,
          y: 212.382
        },
        t: {
          x: 1392.918,
          y: 215.91
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 1392.918,
          y: 215.91
        },
        t: {
          x: 1409.718,
          y: 218.524
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 1409.718,
          y: 218.524
        },
        t: {
          x: 1426.518,
          y: 220.421
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 1426.518,
          y: 220.421
        },
        t: {
          x: 1443.318,
          y: 221.829
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 1443.318,
          y: 221.829
        },
        t: {
          x: 1460.118,
          y: 222.992
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 1460.118,
          y: 222.992
        },
        t: {
          x: 1476.918,
          y: 224.166
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 1476.918,
          y: 224.166
        },
        t: {
          x: 1493.718,
          y: 225.606
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 1493.718,
          y: 225.606
        },
        t: {
          x: 1510.518,
          y: 227.557
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 1510.518,
          y: 227.557
        },
        t: {
          x: 1527.318,
          y: 230.242
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 1527.318,
          y: 230.242
        },
        t: {
          x: 1544.118,
          y: 233.857
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 1544.118,
          y: 233.857
        },
        t: {
          x: 1560.918,
          y: 238.561
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 1560.918,
          y: 238.561
        },
        t: {
          x: 1577.718,
          y: 244.47
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 1577.718,
          y: 244.47
        },
        t: {
          x: 1594.518,
          y: 251.651
        },
        m: .228,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 1594.518,
          y: 251.651
        },
        t: {
          x: 1611.318,
          y: 260.122
        },
        m: .235,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 1611.318,
          y: 260.122
        },
        t: {
          x: 1628.118,
          y: 269.851
        },
        m: .243,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 1628.118,
          y: 269.851
        },
        t: {
          x: 1644.918,
          y: 280.755
        },
        m: .25,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 1644.918,
          y: 280.755
        },
        t: {
          x: 1661.718,
          y: 292.705
        },
        m: .258,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 1661.718,
          y: 292.705
        },
        t: {
          x: 1678.518,
          y: 305.531
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 1678.518,
          y: 305.531
        },
        t: {
          x: 1695.318,
          y: 319.028
        },
        m: .269,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 1695.318,
          y: 319.028
        },
        t: {
          x: 1712.118,
          y: 332.965
        },
        m: .273,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 1712.118,
          y: 332.965
        },
        t: {
          x: 1728.918,
          y: 347.093
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 1728.918,
          y: 347.093
        },
        t: {
          x: 1745.718,
          y: 361.157
        },
        m: .274,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 1745.718,
          y: 361.157
        },
        t: {
          x: 1762.518,
          y: 374.903
        },
        m: .271,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 1762.518,
          y: 374.903
        },
        t: {
          x: 1779.318,
          y: 388.09
        },
        m: .267,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: -132.918,
          y: -1500
        },
        t: {
          x: -149.718,
          y: -365.895
        },
        m: 14.178,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: -149.718,
          y: -365.895
        },
        t: {
          x: -166.518,
          y: -352.046
        },
        m: .272,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: -166.518,
          y: -352.046
        },
        t: {
          x: -183.318,
          y: -338.697
        },
        m: .268,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: -183.318,
          y: -338.697
        },
        t: {
          x: -200.118,
          y: -326.074
        },
        m: .263,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: -200.118,
          y: -326.074
        },
        t: {
          x: -216.918,
          y: -314.373
        },
        m: .256,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: -216.918,
          y: -314.373
        },
        t: {
          x: -233.718,
          y: -303.754
        },
        m: .248,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: -233.718,
          y: -303.754
        },
        t: {
          x: -250.518,
          y: -294.336
        },
        m: .241,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: -250.518,
          y: -294.336
        },
        t: {
          x: -267.318,
          y: -286.189
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: -267.318,
          y: -286.189
        },
        t: {
          x: -284.118,
          y: -279.332
        },
        m: .227,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: -284.118,
          y: -279.332
        },
        t: {
          x: -300.918,
          y: -273.735
        },
        m: .221,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: -300.918,
          y: -273.735
        },
        t: {
          x: -317.718,
          y: -269.318
        },
        m: .217,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: -317.718,
          y: -269.318
        },
        t: {
          x: -334.518,
          y: -265.953
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: -334.518,
          y: -265.953
        },
        t: {
          x: -351.318,
          y: -263.473
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: -351.318,
          y: -263.473
        },
        t: {
          x: -368.118,
          y: -261.673
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: -368.118,
          y: -261.673
        },
        t: {
          x: -384.918,
          y: -260.323
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: -384.918,
          y: -260.323
        },
        t: {
          x: -401.718,
          y: -259.176
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: -401.718,
          y: -259.176
        },
        t: {
          x: -418.518,
          y: -257.975
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: -418.518,
          y: -257.975
        },
        t: {
          x: -435.318,
          y: -256.467
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: -435.318,
          y: -256.467
        },
        t: {
          x: -452.118,
          y: -254.41
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: -452.118,
          y: -254.41
        },
        t: {
          x: -468.918,
          y: -251.583
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: -468.918,
          y: -251.583
        },
        t: {
          x: -485.718,
          y: -247.798
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: -485.718,
          y: -247.798
        },
        t: {
          x: -502.518,
          y: -242.901
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: -502.518,
          y: -242.901
        },
        t: {
          x: -519.318,
          y: -236.786
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: -519.318,
          y: -236.786
        },
        t: {
          x: -536.118,
          y: -229.391
        },
        m: .229,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: -536.118,
          y: -229.391
        },
        t: {
          x: -552.918,
          y: -220.708
        },
        m: .236,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: -552.918,
          y: -220.708
        },
        t: {
          x: -569.718,
          y: -210.778
        },
        m: .244,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: -569.718,
          y: -210.778
        },
        t: {
          x: -586.518,
          y: -199.691
        },
        m: .252,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: -586.518,
          y: -199.691
        },
        t: {
          x: -603.318,
          y: -187.583
        },
        m: .259,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: -603.318,
          y: -187.583
        },
        t: {
          x: -620.118,
          y: -174.631
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: -620.118,
          y: -174.631
        },
        t: {
          x: -636.918,
          y: -161.044
        },
        m: .27,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: -636.918,
          y: -161.044
        },
        t: {
          x: -653.718,
          y: -147.058
        },
        m: .273,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: -653.718,
          y: -147.058
        },
        t: {
          x: -670.518,
          y: -132.923
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: -670.518,
          y: -132.923
        },
        t: {
          x: -687.318,
          y: -118.894
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: -687.318,
          y: -118.894
        },
        t: {
          x: -704.118,
          y: -105.225
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: -704.118,
          y: -105.225
        },
        t: {
          x: -720.918,
          y: -92.152
        },
        m: .266,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: -720.918,
          y: -92.152
        },
        t: {
          x: -737.718,
          y: -79.892
        },
        m: .26,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: -737.718,
          y: -79.892
        },
        t: {
          x: -754.518,
          y: -68.625
        },
        m: .253,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: -754.518,
          y: -68.625
        },
        t: {
          x: -771.318,
          y: -58.496
        },
        m: .245,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: -771.318,
          y: -58.496
        },
        t: {
          x: -788.118,
          y: -49.603
        },
        m: .238,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: -788.118,
          y: -49.603
        },
        t: {
          x: -804.918,
          y: -41.994
        },
        m: .231,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: -804.918,
          y: -41.994
        },
        t: {
          x: -821.718,
          y: -35.67
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: -821.718,
          y: -35.67
        },
        t: {
          x: -838.518,
          y: -30.578
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: -838.518,
          y: -30.578
        },
        t: {
          x: -855.318,
          y: -26.618
        },
        m: .216,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: -855.318,
          y: -26.618
        },
        t: {
          x: -872.118,
          y: -23.644
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: -872.118,
          y: -23.644
        },
        t: {
          x: -888.918,
          y: -21.474
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: -888.918,
          y: -21.474
        },
        t: {
          x: -905.718,
          y: -19.892
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: -905.718,
          y: -19.892
        },
        t: {
          x: -922.518,
          y: -18.657
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: -922.518,
          y: -18.657
        },
        t: {
          x: -939.318,
          y: -17.519
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: -939.318,
          y: -17.519
        },
        t: {
          x: -956.118,
          y: -16.22
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: -956.118,
          y: -16.22
        },
        t: {
          x: -972.918,
          y: -14.511
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: -972.918,
          y: -14.511
        },
        t: {
          x: -989.718,
          y: -12.158
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -989.718,
          y: -12.158
        },
        t: {
          x: -1006.518,
          y: -8.953
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -1006.518,
          y: -8.953
        },
        t: {
          x: -1023.318,
          y: -4.72
        },
        m: .217,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -1023.318,
          y: -4.72
        },
        t: {
          x: -1040.118,
          y: .675
        },
        m: .221,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -1040.118,
          y: .675
        },
        t: {
          x: -1056.918,
          y: 7.32
        },
        m: .226,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -1056.918,
          y: 7.32
        },
        t: {
          x: -1073.718,
          y: 15.254
        },
        m: .232,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -1073.718,
          y: 15.254
        },
        t: {
          x: -1090.518,
          y: 24.465
        },
        m: .239,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -1090.518,
          y: 24.465
        },
        t: {
          x: -1107.318,
          y: 34.892
        },
        m: .247,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -1107.318,
          y: 34.892
        },
        t: {
          x: -1124.118,
          y: 46.424
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -1124.118,
          y: 46.424
        },
        t: {
          x: -1140.918,
          y: 58.907
        },
        m: .262,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -1140.918,
          y: 58.907
        },
        t: {
          x: -1157.718,
          y: 72.151
        },
        m: .267,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -1157.718,
          y: 72.151
        },
        t: {
          x: -1174.518,
          y: 85.934
        },
        m: .272,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -1174.518,
          y: 85.934
        },
        t: {
          x: -1191.318,
          y: 100.014
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -1191.318,
          y: 100.014
        },
        t: {
          x: -1208.118,
          y: 114.136
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -1208.118,
          y: 114.136
        },
        t: {
          x: -1224.918,
          y: 128.045
        },
        m: .273,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -1224.918,
          y: 128.045
        },
        t: {
          x: -1241.718,
          y: 141.493
        },
        m: .269,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -1241.718,
          y: 141.493
        },
        t: {
          x: -1258.518,
          y: 154.251
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -1258.518,
          y: 154.251
        },
        t: {
          x: -1275.318,
          y: 166.117
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -1275.318,
          y: 166.117
        },
        t: {
          x: -1292.118,
          y: 176.923
        },
        m: .25,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -1292.118,
          y: 176.923
        },
        t: {
          x: -1308.918,
          y: 186.546
        },
        m: .242,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -1308.918,
          y: 186.546
        },
        t: {
          x: -1325.718,
          y: 194.907
        },
        m: .235,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -1325.718,
          y: 194.907
        },
        t: {
          x: -1342.518,
          y: 201.976
        },
        m: .228,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -1342.518,
          y: 201.976
        },
        t: {
          x: -1359.318,
          y: 207.777
        },
        m: .222,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -1359.318,
          y: 207.777
        },
        t: {
          x: -1376.118,
          y: 212.382
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -1376.118,
          y: 212.382
        },
        t: {
          x: -1392.918,
          y: 215.91
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -1392.918,
          y: 215.91
        },
        t: {
          x: -1409.718,
          y: 218.524
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -1409.718,
          y: 218.524
        },
        t: {
          x: -1426.518,
          y: 220.421
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -1426.518,
          y: 220.421
        },
        t: {
          x: -1443.318,
          y: 221.829
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -1443.318,
          y: 221.829
        },
        t: {
          x: -1460.118,
          y: 222.992
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -1460.118,
          y: 222.992
        },
        t: {
          x: -1476.918,
          y: 224.166
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -1476.918,
          y: 224.166
        },
        t: {
          x: -1493.718,
          y: 225.606
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -1493.718,
          y: 225.606
        },
        t: {
          x: -1510.518,
          y: 227.557
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -1510.518,
          y: 227.557
        },
        t: {
          x: -1527.318,
          y: 230.242
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -1527.318,
          y: 230.242
        },
        t: {
          x: -1544.118,
          y: 233.857
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -1544.118,
          y: 233.857
        },
        t: {
          x: -1560.918,
          y: 238.561
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -1560.918,
          y: 238.561
        },
        t: {
          x: -1577.718,
          y: 244.47
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -1577.718,
          y: 244.47
        },
        t: {
          x: -1594.518,
          y: 251.651
        },
        m: .228,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -1594.518,
          y: 251.651
        },
        t: {
          x: -1611.318,
          y: 260.122
        },
        m: .235,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -1611.318,
          y: 260.122
        },
        t: {
          x: -1628.118,
          y: 269.851
        },
        m: .243,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -1628.118,
          y: 269.851
        },
        t: {
          x: -1644.918,
          y: 280.755
        },
        m: .25,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -1644.918,
          y: 280.755
        },
        t: {
          x: -1661.718,
          y: 292.705
        },
        m: .258,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -1661.718,
          y: 292.705
        },
        t: {
          x: -1678.518,
          y: 305.531
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -1678.518,
          y: 305.531
        },
        t: {
          x: -1695.318,
          y: 319.028
        },
        m: .269,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -1695.318,
          y: 319.028
        },
        t: {
          x: -1712.118,
          y: 332.965
        },
        m: .273,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -1712.118,
          y: 332.965
        },
        t: {
          x: -1728.918,
          y: 347.093
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -1728.918,
          y: 347.093
        },
        t: {
          x: -1745.718,
          y: 361.157
        },
        m: .274,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -1745.718,
          y: 361.157
        },
        t: {
          x: -1762.518,
          y: 374.903
        },
        m: .271,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -1762.518,
          y: 374.903
        },
        t: {
          x: -1779.318,
          y: 388.09
        },
        m: .267,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: 327.273
        },
        t: {
          x: -823.2,
          y: 327.286
        },
        m: 8.46,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: 327.286
        },
        t: {
          x: -806.4,
          y: 314.388
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: 314.388
        },
        t: {
          x: -789.6,
          y: 289.088
        },
        m: .38,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: 289.088
        },
        t: {
          x: -772.8,
          y: 252.384
        },
        m: .505,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: 252.384
        },
        t: {
          x: -756,
          y: 205.724
        },
        m: .62,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: 205.724
        },
        t: {
          x: -739.2,
          y: 150.948
        },
        m: .716,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: 150.948
        },
        t: {
          x: -722.4,
          y: 90.218
        },
        m: .788,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: 90.218
        },
        t: {
          x: -705.6,
          y: 25.929
        },
        m: .831,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: 25.929
        },
        t: {
          x: -688.8,
          y: -39.383
        },
        m: .843,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: -39.383
        },
        t: {
          x: -672,
          y: -103.141
        },
        m: .824,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: -103.141
        },
        t: {
          x: -655.2,
          y: -162.831
        },
        m: .775,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: -162.831
        },
        t: {
          x: -638.4,
          y: -216.097
        },
        m: .698,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: -216.097
        },
        t: {
          x: -621.6,
          y: -260.839
        },
        m: .597,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: -260.839
        },
        t: {
          x: -604.8,
          y: -295.291
        },
        m: .479,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: -295.291
        },
        t: {
          x: -588,
          y: -318.094
        },
        m: .354,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: -318.094
        },
        t: {
          x: -571.2,
          y: -328.349
        },
        m: .246,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: -328.349
        },
        t: {
          x: -554.4,
          y: -325.651
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: -325.651
        },
        t: {
          x: -537.6,
          y: -310.107
        },
        m: .286,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: -310.107
        },
        t: {
          x: -520.8,
          y: -282.33
        },
        m: .406,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: -282.33
        },
        t: {
          x: -504,
          y: -243.415
        },
        m: .53,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: -243.415
        },
        t: {
          x: -487.2,
          y: -194.898
        },
        m: .642,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: -194.898
        },
        t: {
          x: -470.4,
          y: -138.692
        },
        m: .733,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: -138.692
        },
        t: {
          x: -453.6,
          y: -77.016
        },
        m: .799,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: -77.016
        },
        t: {
          x: -436.8,
          y: -12.301
        },
        m: .836,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: -12.301
        },
        t: {
          x: -420,
          y: 52.899
        },
        m: .842,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: 52.899
        },
        t: {
          x: -403.2,
          y: 116.012
        },
        m: .816,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: 116.012
        },
        t: {
          x: -386.4,
          y: 174.549
        },
        m: .761,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: 174.549
        },
        t: {
          x: -369.6,
          y: 226.2
        },
        m: .679,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: 226.2
        },
        t: {
          x: -352.8,
          y: 268.928
        },
        m: .574,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: 268.928
        },
        t: {
          x: -336,
          y: 301.047
        },
        m: .453,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: 301.047
        },
        t: {
          x: -319.2,
          y: 321.29
        },
        m: .329,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: 321.29
        },
        t: {
          x: -302.4,
          y: 328.859
        },
        m: .23,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: 328.859
        },
        t: {
          x: -285.6,
          y: 323.456
        },
        m: .221,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: 323.456
        },
        t: {
          x: -268.8,
          y: 305.292
        },
        m: .309,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: 305.292
        },
        t: {
          x: -252,
          y: 275.085
        },
        m: .432,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: 275.085
        },
        t: {
          x: -235.2,
          y: 234.027
        },
        m: .555,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: 234.027
        },
        t: {
          x: -218.4,
          y: 183.736
        },
        m: .663,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: 183.736
        },
        t: {
          x: -201.6,
          y: 126.198
        },
        m: .749,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: 126.198
        },
        t: {
          x: -184.8,
          y: 63.681
        },
        m: .809,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: 63.681
        },
        t: {
          x: -168,
          y: -1.347
        },
        m: .84,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: -1.347
        },
        t: {
          x: -151.2,
          y: -66.323
        },
        m: .839,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: -66.323
        },
        t: {
          x: -134.4,
          y: -128.682
        },
        m: .807,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: -128.682
        },
        t: {
          x: -117.6,
          y: -185.966
        },
        m: .746,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: -185.966
        },
        t: {
          x: -100.8,
          y: -235.913
        },
        m: .659,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: -235.913
        },
        t: {
          x: -84,
          y: -276.553
        },
        m: .55,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: -276.553
        },
        t: {
          x: -67.2,
          y: -306.284
        },
        m: .427,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: -306.284
        },
        t: {
          x: -50.4,
          y: -323.933
        },
        m: .305,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: -323.933
        },
        t: {
          x: -33.6,
          y: -328.803
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: -328.803
        },
        t: {
          x: -16.8,
          y: -320.703
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: -320.703
        },
        t: {
          x: 0,
          y: -299.951
        },
        m: .334,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: -299.951
        },
        t: {
          x: 16.8,
          y: -267.367
        },
        m: .458,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: -267.367
        },
        t: {
          x: 33.6,
          y: -224.236
        },
        m: .579,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: -224.236
        },
        t: {
          x: 50.4,
          y: -172.259
        },
        m: .683,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: -172.259
        },
        t: {
          x: 67.2,
          y: -113.486
        },
        m: .764,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: -113.486
        },
        t: {
          x: 84,
          y: -50.237
        },
        m: .818,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: -50.237
        },
        t: {
          x: 100.8,
          y: 14.994
        },
        m: .842,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: 14.994
        },
        t: {
          x: 117.6,
          y: 79.633
        },
        m: .835,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: 79.633
        },
        t: {
          x: 134.4,
          y: 141.131
        },
        m: .797,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: 141.131
        },
        t: {
          x: 151.2,
          y: 197.062
        },
        m: .73,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: 197.062
        },
        t: {
          x: 168,
          y: 245.219
        },
        m: .638,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: 245.219
        },
        t: {
          x: 184.8,
          y: 283.703
        },
        m: .525,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: 283.703
        },
        t: {
          x: 201.6,
          y: 310.995
        },
        m: .401,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: 310.995
        },
        t: {
          x: 218.4,
          y: 326.018
        },
        m: .282,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: 326.018
        },
        t: {
          x: 235.2,
          y: 328.181
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: 328.181
        },
        t: {
          x: 252,
          y: 317.398
        },
        m: .25,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: 317.398
        },
        t: {
          x: 268.8,
          y: 294.094
        },
        m: .359,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: 294.094
        },
        t: {
          x: 285.6,
          y: 259.188
        },
        m: .484,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: 259.188
        },
        t: {
          x: 302.4,
          y: 214.058
        },
        m: .602,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: 214.058
        },
        t: {
          x: 319.2,
          y: 160.484
        },
        m: .702,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: 160.484
        },
        t: {
          x: 336,
          y: 100.579
        },
        m: .778,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: 100.579
        },
        t: {
          x: 352.8,
          y: 36.706
        },
        m: .826,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: 36.706
        },
        t: {
          x: 369.6,
          y: -28.614
        },
        m: .843,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: -28.614
        },
        t: {
          x: 386.4,
          y: -92.806
        },
        m: .829,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: -92.806
        },
        t: {
          x: 403.2,
          y: -153.337
        },
        m: .785,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: -153.337
        },
        t: {
          x: 420,
          y: -207.819
        },
        m: .713,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: -207.819
        },
        t: {
          x: 436.8,
          y: -254.103
        },
        m: .615,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: -254.103
        },
        t: {
          x: 453.6,
          y: -290.363
        },
        m: .5,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: -290.363
        },
        t: {
          x: 470.4,
          y: -315.169
        },
        m: .374,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: -315.169
        },
        t: {
          x: 487.2,
          y: -327.542
        },
        m: .261,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: -327.542
        },
        t: {
          x: 504,
          y: -326.994
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: -326.994
        },
        t: {
          x: 520.8,
          y: -313.546
        },
        m: .269,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: -313.546
        },
        t: {
          x: 537.6,
          y: -287.73
        },
        m: .385,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: -287.73
        },
        t: {
          x: 554.4,
          y: -250.563
        },
        m: .51,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: -250.563
        },
        t: {
          x: 571.2,
          y: -203.512
        },
        m: .625,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: -203.512
        },
        t: {
          x: 588,
          y: -148.433
        },
        m: .72,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: -148.433
        },
        t: {
          x: 604.8,
          y: -87.498
        },
        m: .79,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: -87.498
        },
        t: {
          x: 621.6,
          y: -23.112
        },
        m: .832,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: -23.112
        },
        t: {
          x: 638.4,
          y: 42.186
        },
        m: .843,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: 42.186
        },
        t: {
          x: 655.2,
          y: 105.82
        },
        m: .823,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: 105.82
        },
        t: {
          x: 672,
          y: 165.279
        },
        m: .772,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: 165.279
        },
        t: {
          x: 688.8,
          y: 218.218
        },
        m: .694,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: 218.218
        },
        t: {
          x: 705.6,
          y: 262.55
        },
        m: .593,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: 262.55
        },
        t: {
          x: 722.4,
          y: 296.524
        },
        m: .474,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: 296.524
        },
        t: {
          x: 739.2,
          y: 318.8
        },
        m: .349,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: 318.8
        },
        t: {
          x: 756,
          y: 328.501
        },
        m: .242,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: 328.501
        },
        t: {
          x: 772.8,
          y: 325.243
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: 325.243
        },
        t: {
          x: 789.6,
          y: 309.154
        },
        m: .291,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: 309.154
        },
        t: {
          x: 806.4,
          y: 280.87
        },
        m: .411,
        r: .85,
        d: 1
      }, {
        i: 98,
        f: {
          x: 806.4,
          y: 280.87
        },
        t: {
          x: 821.255,
          y: 250.013
        },
        m: .428,
        r: .85,
        d: 1
      }, {
        i: 99,
        f: {
          x: 821.255,
          y: 250.013
        },
        t: {
          x: 846.219,
          y: 200.348
        },
        m: .695,
        r: .85,
        d: 1
      }, {
        i: 100,
        f: {
          x: 846.219,
          y: 200.348
        },
        t: {
          x: 869.682,
          y: 148.743
        },
        m: .709,
        r: .85,
        d: 1
      }, {
        i: 101,
        f: {
          x: 869.682,
          y: 148.743
        },
        t: {
          x: 888.467,
          y: 90.68
        },
        m: .763,
        r: .85,
        d: 1
      }, {
        i: 102,
        f: {
          x: 888.467,
          y: 90.68
        },
        t: {
          x: 1500,
          y: -146.693
        },
        m: 8.2,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: 327.273
        },
        t: {
          x: 823.2,
          y: 327.286
        },
        m: 8.46,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: 327.286
        },
        t: {
          x: 806.4,
          y: 314.388
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: 314.388
        },
        t: {
          x: 789.6,
          y: 289.088
        },
        m: .38,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: 289.088
        },
        t: {
          x: 772.8,
          y: 252.384
        },
        m: .505,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: 252.384
        },
        t: {
          x: 756,
          y: 205.724
        },
        m: .62,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: 205.724
        },
        t: {
          x: 739.2,
          y: 150.948
        },
        m: .716,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: 150.948
        },
        t: {
          x: 722.4,
          y: 90.218
        },
        m: .788,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: 90.218
        },
        t: {
          x: 705.6,
          y: 25.929
        },
        m: .831,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: 25.929
        },
        t: {
          x: 688.8,
          y: -39.383
        },
        m: .843,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: -39.383
        },
        t: {
          x: 672,
          y: -103.141
        },
        m: .824,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: -103.141
        },
        t: {
          x: 655.2,
          y: -162.831
        },
        m: .775,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: -162.831
        },
        t: {
          x: 638.4,
          y: -216.097
        },
        m: .698,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: -216.097
        },
        t: {
          x: 621.6,
          y: -260.839
        },
        m: .597,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: -260.839
        },
        t: {
          x: 604.8,
          y: -295.291
        },
        m: .479,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: -295.291
        },
        t: {
          x: 588,
          y: -318.094
        },
        m: .354,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: -318.094
        },
        t: {
          x: 571.2,
          y: -328.349
        },
        m: .246,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: -328.349
        },
        t: {
          x: 554.4,
          y: -325.651
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: -325.651
        },
        t: {
          x: 537.6,
          y: -310.107
        },
        m: .286,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: -310.107
        },
        t: {
          x: 520.8,
          y: -282.33
        },
        m: .406,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: -282.33
        },
        t: {
          x: 504,
          y: -243.415
        },
        m: .53,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: -243.415
        },
        t: {
          x: 487.2,
          y: -194.898
        },
        m: .642,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: -194.898
        },
        t: {
          x: 470.4,
          y: -138.692
        },
        m: .733,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: -138.692
        },
        t: {
          x: 453.6,
          y: -77.016
        },
        m: .799,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: -77.016
        },
        t: {
          x: 436.8,
          y: -12.301
        },
        m: .836,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: -12.301
        },
        t: {
          x: 420,
          y: 52.899
        },
        m: .842,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: 52.899
        },
        t: {
          x: 403.2,
          y: 116.012
        },
        m: .816,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: 116.012
        },
        t: {
          x: 386.4,
          y: 174.549
        },
        m: .761,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: 174.549
        },
        t: {
          x: 369.6,
          y: 226.2
        },
        m: .679,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: 226.2
        },
        t: {
          x: 352.8,
          y: 268.928
        },
        m: .574,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: 268.928
        },
        t: {
          x: 336,
          y: 301.047
        },
        m: .453,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: 301.047
        },
        t: {
          x: 319.2,
          y: 321.29
        },
        m: .329,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: 321.29
        },
        t: {
          x: 302.4,
          y: 328.859
        },
        m: .23,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: 328.859
        },
        t: {
          x: 285.6,
          y: 323.456
        },
        m: .221,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: 323.456
        },
        t: {
          x: 268.8,
          y: 305.292
        },
        m: .309,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: 305.292
        },
        t: {
          x: 252,
          y: 275.085
        },
        m: .432,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: 275.085
        },
        t: {
          x: 235.2,
          y: 234.027
        },
        m: .555,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: 234.027
        },
        t: {
          x: 218.4,
          y: 183.736
        },
        m: .663,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: 183.736
        },
        t: {
          x: 201.6,
          y: 126.198
        },
        m: .749,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: 126.198
        },
        t: {
          x: 184.8,
          y: 63.681
        },
        m: .809,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: 63.681
        },
        t: {
          x: 168,
          y: -1.347
        },
        m: .84,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: -1.347
        },
        t: {
          x: 151.2,
          y: -66.323
        },
        m: .839,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: -66.323
        },
        t: {
          x: 134.4,
          y: -128.682
        },
        m: .807,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: -128.682
        },
        t: {
          x: 117.6,
          y: -185.966
        },
        m: .746,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: -185.966
        },
        t: {
          x: 100.8,
          y: -235.913
        },
        m: .659,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: -235.913
        },
        t: {
          x: 84,
          y: -276.553
        },
        m: .55,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: -276.553
        },
        t: {
          x: 67.2,
          y: -306.284
        },
        m: .427,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: -306.284
        },
        t: {
          x: 50.4,
          y: -323.933
        },
        m: .305,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: -323.933
        },
        t: {
          x: 33.6,
          y: -328.803
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: -328.803
        },
        t: {
          x: 16.8,
          y: -320.703
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: -320.703
        },
        t: {
          x: 0,
          y: -299.951
        },
        m: .334,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: -299.951
        },
        t: {
          x: -16.8,
          y: -267.367
        },
        m: .458,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: -267.367
        },
        t: {
          x: -33.6,
          y: -224.236
        },
        m: .579,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: -224.236
        },
        t: {
          x: -50.4,
          y: -172.259
        },
        m: .683,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: -172.259
        },
        t: {
          x: -67.2,
          y: -113.486
        },
        m: .764,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: -113.486
        },
        t: {
          x: -84,
          y: -50.237
        },
        m: .818,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: -50.237
        },
        t: {
          x: -100.8,
          y: 14.994
        },
        m: .842,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: 14.994
        },
        t: {
          x: -117.6,
          y: 79.633
        },
        m: .835,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: 79.633
        },
        t: {
          x: -134.4,
          y: 141.131
        },
        m: .797,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: 141.131
        },
        t: {
          x: -151.2,
          y: 197.062
        },
        m: .73,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: 197.062
        },
        t: {
          x: -168,
          y: 245.219
        },
        m: .638,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: 245.219
        },
        t: {
          x: -184.8,
          y: 283.703
        },
        m: .525,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: 283.703
        },
        t: {
          x: -201.6,
          y: 310.995
        },
        m: .401,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: 310.995
        },
        t: {
          x: -218.4,
          y: 326.018
        },
        m: .282,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: 326.018
        },
        t: {
          x: -235.2,
          y: 328.181
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: 328.181
        },
        t: {
          x: -252,
          y: 317.398
        },
        m: .25,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: 317.398
        },
        t: {
          x: -268.8,
          y: 294.094
        },
        m: .359,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: 294.094
        },
        t: {
          x: -285.6,
          y: 259.188
        },
        m: .484,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: 259.188
        },
        t: {
          x: -302.4,
          y: 214.058
        },
        m: .602,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: 214.058
        },
        t: {
          x: -319.2,
          y: 160.484
        },
        m: .702,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: 160.484
        },
        t: {
          x: -336,
          y: 100.579
        },
        m: .778,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: 100.579
        },
        t: {
          x: -352.8,
          y: 36.706
        },
        m: .826,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: 36.706
        },
        t: {
          x: -369.6,
          y: -28.614
        },
        m: .843,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: -28.614
        },
        t: {
          x: -386.4,
          y: -92.806
        },
        m: .829,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: -92.806
        },
        t: {
          x: -403.2,
          y: -153.337
        },
        m: .785,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: -153.337
        },
        t: {
          x: -420,
          y: -207.819
        },
        m: .713,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: -207.819
        },
        t: {
          x: -436.8,
          y: -254.103
        },
        m: .615,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: -254.103
        },
        t: {
          x: -453.6,
          y: -290.363
        },
        m: .5,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: -290.363
        },
        t: {
          x: -470.4,
          y: -315.169
        },
        m: .374,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: -315.169
        },
        t: {
          x: -487.2,
          y: -327.542
        },
        m: .261,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: -327.542
        },
        t: {
          x: -504,
          y: -326.994
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: -326.994
        },
        t: {
          x: -520.8,
          y: -313.546
        },
        m: .269,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: -313.546
        },
        t: {
          x: -537.6,
          y: -287.73
        },
        m: .385,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: -287.73
        },
        t: {
          x: -554.4,
          y: -250.563
        },
        m: .51,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: -250.563
        },
        t: {
          x: -571.2,
          y: -203.512
        },
        m: .625,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: -203.512
        },
        t: {
          x: -588,
          y: -148.433
        },
        m: .72,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: -148.433
        },
        t: {
          x: -604.8,
          y: -87.498
        },
        m: .79,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: -87.498
        },
        t: {
          x: -621.6,
          y: -23.112
        },
        m: .832,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: -23.112
        },
        t: {
          x: -638.4,
          y: 42.186
        },
        m: .843,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: 42.186
        },
        t: {
          x: -655.2,
          y: 105.82
        },
        m: .823,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: 105.82
        },
        t: {
          x: -672,
          y: 165.279
        },
        m: .772,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: 165.279
        },
        t: {
          x: -688.8,
          y: 218.218
        },
        m: .694,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: 218.218
        },
        t: {
          x: -705.6,
          y: 262.55
        },
        m: .593,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: 262.55
        },
        t: {
          x: -722.4,
          y: 296.524
        },
        m: .474,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: 296.524
        },
        t: {
          x: -739.2,
          y: 318.8
        },
        m: .349,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: 318.8
        },
        t: {
          x: -756,
          y: 328.501
        },
        m: .242,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: 328.501
        },
        t: {
          x: -772.8,
          y: 325.243
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: 325.243
        },
        t: {
          x: -789.6,
          y: 309.154
        },
        m: .291,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: 309.154
        },
        t: {
          x: -806.4,
          y: 280.87
        },
        m: .411,
        r: .85,
        d: 0
      }, {
        i: 98,
        f: {
          x: -806.4,
          y: 280.87
        },
        t: {
          x: -821.255,
          y: 250.013
        },
        m: .428,
        r: .85,
        d: 0
      }, {
        i: 99,
        f: {
          x: -821.255,
          y: 250.013
        },
        t: {
          x: -846.219,
          y: 200.348
        },
        m: .695,
        r: .85,
        d: 0
      }, {
        i: 100,
        f: {
          x: -846.219,
          y: 200.348
        },
        t: {
          x: -869.682,
          y: 148.743
        },
        m: .709,
        r: .85,
        d: 0
      }, {
        i: 101,
        f: {
          x: -869.682,
          y: 148.743
        },
        t: {
          x: -888.467,
          y: 90.68
        },
        m: .763,
        r: .85,
        d: 0
      }, {
        i: 102,
        f: {
          x: -888.467,
          y: 90.68
        },
        t: {
          x: -1500,
          y: -146.693
        },
        m: 8.2,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: 6.6
        },
        t: {
          x: -823.2,
          y: 6.613
        },
        m: 8.46,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: 6.613
        },
        t: {
          x: -806.4,
          y: -6.285
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: -6.285
        },
        t: {
          x: -789.6,
          y: -31.585
        },
        m: .38,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: -31.585
        },
        t: {
          x: -772.8,
          y: -68.289
        },
        m: .505,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: -68.289
        },
        t: {
          x: -756,
          y: -114.949
        },
        m: .62,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: -114.949
        },
        t: {
          x: -739.2,
          y: -169.724
        },
        m: .716,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: -169.724
        },
        t: {
          x: -722.4,
          y: -230.454
        },
        m: .788,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: -230.454
        },
        t: {
          x: -705.6,
          y: -294.743
        },
        m: .831,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: -294.743
        },
        t: {
          x: -688.8,
          y: -360.055
        },
        m: .843,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: -360.055
        },
        t: {
          x: -672,
          y: -423.814
        },
        m: .824,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: -423.814
        },
        t: {
          x: -655.2,
          y: -483.503
        },
        m: .775,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: -483.503
        },
        t: {
          x: -638.4,
          y: -536.769
        },
        m: .698,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: -536.769
        },
        t: {
          x: -621.6,
          y: -581.511
        },
        m: .597,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: -581.511
        },
        t: {
          x: -604.8,
          y: -615.963
        },
        m: .479,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: -615.963
        },
        t: {
          x: -588,
          y: -638.766
        },
        m: .354,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: -638.766
        },
        t: {
          x: -571.2,
          y: -649.021
        },
        m: .246,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: -649.021
        },
        t: {
          x: -554.4,
          y: -646.323
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: -646.323
        },
        t: {
          x: -537.6,
          y: -630.779
        },
        m: .286,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: -630.779
        },
        t: {
          x: -520.8,
          y: -603.002
        },
        m: .406,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: -603.002
        },
        t: {
          x: -504,
          y: -564.087
        },
        m: .53,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: -564.087
        },
        t: {
          x: -487.2,
          y: -515.57
        },
        m: .642,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: -515.57
        },
        t: {
          x: -470.4,
          y: -459.365
        },
        m: .733,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: -459.365
        },
        t: {
          x: -453.6,
          y: -397.688
        },
        m: .799,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: -397.688
        },
        t: {
          x: -436.8,
          y: -332.974
        },
        m: .836,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: -332.974
        },
        t: {
          x: -420,
          y: -267.774
        },
        m: .842,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: -267.774
        },
        t: {
          x: -403.2,
          y: -204.66
        },
        m: .816,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: -204.66
        },
        t: {
          x: -386.4,
          y: -146.124
        },
        m: .761,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: -146.124
        },
        t: {
          x: -369.6,
          y: -94.473
        },
        m: .679,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: -94.473
        },
        t: {
          x: -352.8,
          y: -51.745
        },
        m: .574,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: -51.745
        },
        t: {
          x: -336,
          y: -19.625
        },
        m: .453,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: -19.625
        },
        t: {
          x: -319.2,
          y: .618
        },
        m: .329,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: .618
        },
        t: {
          x: -302.4,
          y: 8.187
        },
        m: .23,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: 8.187
        },
        t: {
          x: -285.6,
          y: 2.783
        },
        m: .221,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: 2.783
        },
        t: {
          x: -268.8,
          y: -15.38
        },
        m: .309,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: -15.38
        },
        t: {
          x: -252,
          y: -45.587
        },
        m: .432,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: -45.587
        },
        t: {
          x: -235.2,
          y: -86.645
        },
        m: .555,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: -86.645
        },
        t: {
          x: -218.4,
          y: -136.936
        },
        m: .663,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: -136.936
        },
        t: {
          x: -201.6,
          y: -194.474
        },
        m: .749,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: -194.474
        },
        t: {
          x: -184.8,
          y: -256.991
        },
        m: .809,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: -256.991
        },
        t: {
          x: -168,
          y: -322.02
        },
        m: .84,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: -322.02
        },
        t: {
          x: -151.2,
          y: -386.995
        },
        m: .839,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: -386.995
        },
        t: {
          x: -134.4,
          y: -449.355
        },
        m: .807,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: -449.355
        },
        t: {
          x: -117.6,
          y: -506.638
        },
        m: .746,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: -506.638
        },
        t: {
          x: -100.8,
          y: -556.585
        },
        m: .659,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: -556.585
        },
        t: {
          x: -84,
          y: -597.226
        },
        m: .55,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: -597.226
        },
        t: {
          x: -67.2,
          y: -626.957
        },
        m: .427,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: -626.957
        },
        t: {
          x: -50.4,
          y: -644.606
        },
        m: .305,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: -644.606
        },
        t: {
          x: -33.6,
          y: -649.476
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: -649.476
        },
        t: {
          x: -16.8,
          y: -641.375
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: -641.375
        },
        t: {
          x: 0,
          y: -620.624
        },
        m: .334,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: -620.624
        },
        t: {
          x: 16.8,
          y: -588.039
        },
        m: .458,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: -588.039
        },
        t: {
          x: 33.6,
          y: -544.908
        },
        m: .579,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: -544.908
        },
        t: {
          x: 50.4,
          y: -492.931
        },
        m: .683,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: -492.931
        },
        t: {
          x: 67.2,
          y: -434.159
        },
        m: .764,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: -434.159
        },
        t: {
          x: 84,
          y: -370.909
        },
        m: .818,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: -370.909
        },
        t: {
          x: 100.8,
          y: -305.678
        },
        m: .842,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: -305.678
        },
        t: {
          x: 117.6,
          y: -241.039
        },
        m: .835,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: -241.039
        },
        t: {
          x: 134.4,
          y: -179.541
        },
        m: .797,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: -179.541
        },
        t: {
          x: 151.2,
          y: -123.61
        },
        m: .73,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: -123.61
        },
        t: {
          x: 168,
          y: -75.453
        },
        m: .638,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: -75.453
        },
        t: {
          x: 184.8,
          y: -36.97
        },
        m: .525,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: -36.97
        },
        t: {
          x: 201.6,
          y: -9.678
        },
        m: .401,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: -9.678
        },
        t: {
          x: 218.4,
          y: 5.346
        },
        m: .282,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: 5.346
        },
        t: {
          x: 235.2,
          y: 7.509
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: 7.509
        },
        t: {
          x: 252,
          y: -3.274
        },
        m: .25,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: -3.274
        },
        t: {
          x: 268.8,
          y: -26.578
        },
        m: .359,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: -26.578
        },
        t: {
          x: 285.6,
          y: -61.484
        },
        m: .484,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: -61.484
        },
        t: {
          x: 302.4,
          y: -106.614
        },
        m: .602,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: -106.614
        },
        t: {
          x: 319.2,
          y: -160.188
        },
        m: .702,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: -160.188
        },
        t: {
          x: 336,
          y: -220.093
        },
        m: .778,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: -220.093
        },
        t: {
          x: 352.8,
          y: -283.966
        },
        m: .826,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: -283.966
        },
        t: {
          x: 369.6,
          y: -349.287
        },
        m: .843,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: -349.287
        },
        t: {
          x: 386.4,
          y: -413.479
        },
        m: .829,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: -413.479
        },
        t: {
          x: 403.2,
          y: -474.01
        },
        m: .785,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: -474.01
        },
        t: {
          x: 420,
          y: -528.492
        },
        m: .713,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: -528.492
        },
        t: {
          x: 436.8,
          y: -574.775
        },
        m: .615,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: -574.775
        },
        t: {
          x: 453.6,
          y: -611.035
        },
        m: .5,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: -611.035
        },
        t: {
          x: 470.4,
          y: -635.841
        },
        m: .374,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: -635.841
        },
        t: {
          x: 487.2,
          y: -648.214
        },
        m: .261,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: -648.214
        },
        t: {
          x: 504,
          y: -647.666
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: -647.666
        },
        t: {
          x: 520.8,
          y: -634.218
        },
        m: .269,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: -634.218
        },
        t: {
          x: 537.6,
          y: -608.402
        },
        m: .385,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: -608.402
        },
        t: {
          x: 554.4,
          y: -571.235
        },
        m: .51,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: -571.235
        },
        t: {
          x: 571.2,
          y: -524.184
        },
        m: .625,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: -524.184
        },
        t: {
          x: 588,
          y: -469.105
        },
        m: .72,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: -469.105
        },
        t: {
          x: 604.8,
          y: -408.171
        },
        m: .79,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: -408.171
        },
        t: {
          x: 621.6,
          y: -343.784
        },
        m: .832,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: -343.784
        },
        t: {
          x: 638.4,
          y: -278.487
        },
        m: .843,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: -278.487
        },
        t: {
          x: 655.2,
          y: -214.853
        },
        m: .823,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: -214.853
        },
        t: {
          x: 672,
          y: -155.393
        },
        m: .772,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: -155.393
        },
        t: {
          x: 688.8,
          y: -102.454
        },
        m: .694,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: -102.454
        },
        t: {
          x: 705.6,
          y: -58.123
        },
        m: .593,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: -58.123
        },
        t: {
          x: 722.4,
          y: -24.149
        },
        m: .474,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: -24.149
        },
        t: {
          x: 739.2,
          y: -1.872
        },
        m: .349,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: -1.872
        },
        t: {
          x: 756,
          y: 7.829
        },
        m: .242,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: 7.829
        },
        t: {
          x: 772.8,
          y: 4.57
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: 4.57
        },
        t: {
          x: 789.6,
          y: -11.518
        },
        m: .291,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: -11.518
        },
        t: {
          x: 806.4,
          y: -39.802
        },
        m: .411,
        r: .85,
        d: 1
      }, {
        i: 98,
        f: {
          x: 806.4,
          y: -39.802
        },
        t: {
          x: 821.255,
          y: -70.659
        },
        m: .428,
        r: .85,
        d: 1
      }, {
        i: 99,
        f: {
          x: 821.255,
          y: -70.659
        },
        t: {
          x: 846.219,
          y: -120.324
        },
        m: .695,
        r: .85,
        d: 1
      }, {
        i: 100,
        f: {
          x: 846.219,
          y: -120.324
        },
        t: {
          x: 869.682,
          y: -171.929
        },
        m: .709,
        r: .85,
        d: 1
      }, {
        i: 101,
        f: {
          x: 869.682,
          y: -171.929
        },
        t: {
          x: 888.467,
          y: -229.992
        },
        m: .763,
        r: .85,
        d: 1
      }, {
        i: 102,
        f: {
          x: 888.467,
          y: -229.992
        },
        t: {
          x: 1500,
          y: -467.365
        },
        m: 8.2,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: 6.6
        },
        t: {
          x: 823.2,
          y: 6.613
        },
        m: 8.46,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: 6.613
        },
        t: {
          x: 806.4,
          y: -6.285
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: -6.285
        },
        t: {
          x: 789.6,
          y: -31.585
        },
        m: .38,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: -31.585
        },
        t: {
          x: 772.8,
          y: -68.289
        },
        m: .505,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: -68.289
        },
        t: {
          x: 756,
          y: -114.949
        },
        m: .62,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: -114.949
        },
        t: {
          x: 739.2,
          y: -169.724
        },
        m: .716,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: -169.724
        },
        t: {
          x: 722.4,
          y: -230.454
        },
        m: .788,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: -230.454
        },
        t: {
          x: 705.6,
          y: -294.743
        },
        m: .831,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: -294.743
        },
        t: {
          x: 688.8,
          y: -360.055
        },
        m: .843,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: -360.055
        },
        t: {
          x: 672,
          y: -423.814
        },
        m: .824,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: -423.814
        },
        t: {
          x: 655.2,
          y: -483.503
        },
        m: .775,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: -483.503
        },
        t: {
          x: 638.4,
          y: -536.769
        },
        m: .698,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: -536.769
        },
        t: {
          x: 621.6,
          y: -581.511
        },
        m: .597,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: -581.511
        },
        t: {
          x: 604.8,
          y: -615.963
        },
        m: .479,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: -615.963
        },
        t: {
          x: 588,
          y: -638.766
        },
        m: .354,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: -638.766
        },
        t: {
          x: 571.2,
          y: -649.021
        },
        m: .246,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: -649.021
        },
        t: {
          x: 554.4,
          y: -646.323
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: -646.323
        },
        t: {
          x: 537.6,
          y: -630.779
        },
        m: .286,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: -630.779
        },
        t: {
          x: 520.8,
          y: -603.002
        },
        m: .406,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: -603.002
        },
        t: {
          x: 504,
          y: -564.087
        },
        m: .53,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: -564.087
        },
        t: {
          x: 487.2,
          y: -515.57
        },
        m: .642,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: -515.57
        },
        t: {
          x: 470.4,
          y: -459.365
        },
        m: .733,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: -459.365
        },
        t: {
          x: 453.6,
          y: -397.688
        },
        m: .799,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: -397.688
        },
        t: {
          x: 436.8,
          y: -332.974
        },
        m: .836,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: -332.974
        },
        t: {
          x: 420,
          y: -267.774
        },
        m: .842,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: -267.774
        },
        t: {
          x: 403.2,
          y: -204.66
        },
        m: .816,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: -204.66
        },
        t: {
          x: 386.4,
          y: -146.124
        },
        m: .761,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: -146.124
        },
        t: {
          x: 369.6,
          y: -94.473
        },
        m: .679,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: -94.473
        },
        t: {
          x: 352.8,
          y: -51.745
        },
        m: .574,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: -51.745
        },
        t: {
          x: 336,
          y: -19.625
        },
        m: .453,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: -19.625
        },
        t: {
          x: 319.2,
          y: .618
        },
        m: .329,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: .618
        },
        t: {
          x: 302.4,
          y: 8.187
        },
        m: .23,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: 8.187
        },
        t: {
          x: 285.6,
          y: 2.783
        },
        m: .221,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: 2.783
        },
        t: {
          x: 268.8,
          y: -15.38
        },
        m: .309,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: -15.38
        },
        t: {
          x: 252,
          y: -45.587
        },
        m: .432,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: -45.587
        },
        t: {
          x: 235.2,
          y: -86.645
        },
        m: .555,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: -86.645
        },
        t: {
          x: 218.4,
          y: -136.936
        },
        m: .663,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: -136.936
        },
        t: {
          x: 201.6,
          y: -194.474
        },
        m: .749,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: -194.474
        },
        t: {
          x: 184.8,
          y: -256.991
        },
        m: .809,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: -256.991
        },
        t: {
          x: 168,
          y: -322.02
        },
        m: .84,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: -322.02
        },
        t: {
          x: 151.2,
          y: -386.995
        },
        m: .839,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: -386.995
        },
        t: {
          x: 134.4,
          y: -449.355
        },
        m: .807,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: -449.355
        },
        t: {
          x: 117.6,
          y: -506.638
        },
        m: .746,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: -506.638
        },
        t: {
          x: 100.8,
          y: -556.585
        },
        m: .659,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: -556.585
        },
        t: {
          x: 84,
          y: -597.226
        },
        m: .55,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: -597.226
        },
        t: {
          x: 67.2,
          y: -626.957
        },
        m: .427,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: -626.957
        },
        t: {
          x: 50.4,
          y: -644.606
        },
        m: .305,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: -644.606
        },
        t: {
          x: 33.6,
          y: -649.476
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: -649.476
        },
        t: {
          x: 16.8,
          y: -641.375
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: -641.375
        },
        t: {
          x: 0,
          y: -620.624
        },
        m: .334,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: -620.624
        },
        t: {
          x: -16.8,
          y: -588.039
        },
        m: .458,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: -588.039
        },
        t: {
          x: -33.6,
          y: -544.908
        },
        m: .579,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: -544.908
        },
        t: {
          x: -50.4,
          y: -492.931
        },
        m: .683,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: -492.931
        },
        t: {
          x: -67.2,
          y: -434.159
        },
        m: .764,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: -434.159
        },
        t: {
          x: -84,
          y: -370.909
        },
        m: .818,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: -370.909
        },
        t: {
          x: -100.8,
          y: -305.678
        },
        m: .842,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: -305.678
        },
        t: {
          x: -117.6,
          y: -241.039
        },
        m: .835,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: -241.039
        },
        t: {
          x: -134.4,
          y: -179.541
        },
        m: .797,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: -179.541
        },
        t: {
          x: -151.2,
          y: -123.61
        },
        m: .73,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: -123.61
        },
        t: {
          x: -168,
          y: -75.453
        },
        m: .638,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: -75.453
        },
        t: {
          x: -184.8,
          y: -36.97
        },
        m: .525,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: -36.97
        },
        t: {
          x: -201.6,
          y: -9.678
        },
        m: .401,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: -9.678
        },
        t: {
          x: -218.4,
          y: 5.346
        },
        m: .282,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: 5.346
        },
        t: {
          x: -235.2,
          y: 7.509
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: 7.509
        },
        t: {
          x: -252,
          y: -3.274
        },
        m: .25,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: -3.274
        },
        t: {
          x: -268.8,
          y: -26.578
        },
        m: .359,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: -26.578
        },
        t: {
          x: -285.6,
          y: -61.484
        },
        m: .484,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: -61.484
        },
        t: {
          x: -302.4,
          y: -106.614
        },
        m: .602,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: -106.614
        },
        t: {
          x: -319.2,
          y: -160.188
        },
        m: .702,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: -160.188
        },
        t: {
          x: -336,
          y: -220.093
        },
        m: .778,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: -220.093
        },
        t: {
          x: -352.8,
          y: -283.966
        },
        m: .826,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: -283.966
        },
        t: {
          x: -369.6,
          y: -349.287
        },
        m: .843,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: -349.287
        },
        t: {
          x: -386.4,
          y: -413.479
        },
        m: .829,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: -413.479
        },
        t: {
          x: -403.2,
          y: -474.01
        },
        m: .785,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: -474.01
        },
        t: {
          x: -420,
          y: -528.492
        },
        m: .713,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: -528.492
        },
        t: {
          x: -436.8,
          y: -574.775
        },
        m: .615,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: -574.775
        },
        t: {
          x: -453.6,
          y: -611.035
        },
        m: .5,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: -611.035
        },
        t: {
          x: -470.4,
          y: -635.841
        },
        m: .374,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: -635.841
        },
        t: {
          x: -487.2,
          y: -648.214
        },
        m: .261,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: -648.214
        },
        t: {
          x: -504,
          y: -647.666
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: -647.666
        },
        t: {
          x: -520.8,
          y: -634.218
        },
        m: .269,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: -634.218
        },
        t: {
          x: -537.6,
          y: -608.402
        },
        m: .385,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: -608.402
        },
        t: {
          x: -554.4,
          y: -571.235
        },
        m: .51,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: -571.235
        },
        t: {
          x: -571.2,
          y: -524.184
        },
        m: .625,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: -524.184
        },
        t: {
          x: -588,
          y: -469.105
        },
        m: .72,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: -469.105
        },
        t: {
          x: -604.8,
          y: -408.171
        },
        m: .79,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: -408.171
        },
        t: {
          x: -621.6,
          y: -343.784
        },
        m: .832,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: -343.784
        },
        t: {
          x: -638.4,
          y: -278.487
        },
        m: .843,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: -278.487
        },
        t: {
          x: -655.2,
          y: -214.853
        },
        m: .823,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: -214.853
        },
        t: {
          x: -672,
          y: -155.393
        },
        m: .772,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: -155.393
        },
        t: {
          x: -688.8,
          y: -102.454
        },
        m: .694,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: -102.454
        },
        t: {
          x: -705.6,
          y: -58.123
        },
        m: .593,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: -58.123
        },
        t: {
          x: -722.4,
          y: -24.149
        },
        m: .474,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: -24.149
        },
        t: {
          x: -739.2,
          y: -1.872
        },
        m: .349,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: -1.872
        },
        t: {
          x: -756,
          y: 7.829
        },
        m: .242,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: 7.829
        },
        t: {
          x: -772.8,
          y: 4.57
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: 4.57
        },
        t: {
          x: -789.6,
          y: -11.518
        },
        m: .291,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: -11.518
        },
        t: {
          x: -806.4,
          y: -39.802
        },
        m: .411,
        r: .85,
        d: 0
      }, {
        i: 98,
        f: {
          x: -806.4,
          y: -39.802
        },
        t: {
          x: -821.255,
          y: -70.659
        },
        m: .428,
        r: .85,
        d: 0
      }, {
        i: 99,
        f: {
          x: -821.255,
          y: -70.659
        },
        t: {
          x: -846.219,
          y: -120.324
        },
        m: .695,
        r: .85,
        d: 0
      }, {
        i: 100,
        f: {
          x: -846.219,
          y: -120.324
        },
        t: {
          x: -869.682,
          y: -171.929
        },
        m: .709,
        r: .85,
        d: 0
      }, {
        i: 101,
        f: {
          x: -869.682,
          y: -171.929
        },
        t: {
          x: -888.467,
          y: -229.992
        },
        m: .763,
        r: .85,
        d: 0
      }, {
        i: 102,
        f: {
          x: -888.467,
          y: -229.992
        },
        t: {
          x: -1500,
          y: -467.365
        },
        m: 8.2,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: 632.147
        },
        t: {
          x: -823.2,
          y: 632.16
        },
        m: 8.46,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: 632.16
        },
        t: {
          x: -806.4,
          y: 619.262
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: 619.262
        },
        t: {
          x: -789.6,
          y: 593.962
        },
        m: .38,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: 593.962
        },
        t: {
          x: -772.8,
          y: 557.258
        },
        m: .505,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: 557.258
        },
        t: {
          x: -756,
          y: 510.598
        },
        m: .62,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: 510.598
        },
        t: {
          x: -739.2,
          y: 455.823
        },
        m: .716,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: 455.823
        },
        t: {
          x: -722.4,
          y: 395.093
        },
        m: .788,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: 395.093
        },
        t: {
          x: -705.6,
          y: 330.804
        },
        m: .831,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: 330.804
        },
        t: {
          x: -688.8,
          y: 265.492
        },
        m: .843,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: 265.492
        },
        t: {
          x: -672,
          y: 201.733
        },
        m: .824,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: 201.733
        },
        t: {
          x: -655.2,
          y: 142.044
        },
        m: .775,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: 142.044
        },
        t: {
          x: -638.4,
          y: 88.778
        },
        m: .698,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: 88.778
        },
        t: {
          x: -621.6,
          y: 44.036
        },
        m: .597,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: 44.036
        },
        t: {
          x: -604.8,
          y: 9.584
        },
        m: .479,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: 9.584
        },
        t: {
          x: -588,
          y: -13.219
        },
        m: .354,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: -13.219
        },
        t: {
          x: -571.2,
          y: -23.474
        },
        m: .246,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: -23.474
        },
        t: {
          x: -554.4,
          y: -20.776
        },
        m: .213,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: -20.776
        },
        t: {
          x: -537.6,
          y: -5.232
        },
        m: .286,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: -5.232
        },
        t: {
          x: -520.8,
          y: 22.545
        },
        m: .406,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: 22.545
        },
        t: {
          x: -504,
          y: 61.46
        },
        m: .53,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: 61.46
        },
        t: {
          x: -487.2,
          y: 109.977
        },
        m: .642,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: 109.977
        },
        t: {
          x: -470.4,
          y: 166.182
        },
        m: .733,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: 166.182
        },
        t: {
          x: -453.6,
          y: 227.859
        },
        m: .799,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: 227.859
        },
        t: {
          x: -436.8,
          y: 292.573
        },
        m: .836,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: 292.573
        },
        t: {
          x: -420,
          y: 357.773
        },
        m: .842,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: 357.773
        },
        t: {
          x: -403.2,
          y: 420.887
        },
        m: .816,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: 420.887
        },
        t: {
          x: -386.4,
          y: 479.423
        },
        m: .761,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: 479.423
        },
        t: {
          x: -369.6,
          y: 531.074
        },
        m: .679,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: 531.074
        },
        t: {
          x: -352.8,
          y: 573.802
        },
        m: .574,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: 573.802
        },
        t: {
          x: -336,
          y: 605.922
        },
        m: .453,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: 605.922
        },
        t: {
          x: -319.2,
          y: 626.165
        },
        m: .329,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: 626.165
        },
        t: {
          x: -302.4,
          y: 633.734
        },
        m: .23,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: 633.734
        },
        t: {
          x: -285.6,
          y: 628.33
        },
        m: .221,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: 628.33
        },
        t: {
          x: -268.8,
          y: 610.167
        },
        m: .309,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: 610.167
        },
        t: {
          x: -252,
          y: 579.96
        },
        m: .432,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: 579.96
        },
        t: {
          x: -235.2,
          y: 538.902
        },
        m: .555,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: 538.902
        },
        t: {
          x: -218.4,
          y: 488.611
        },
        m: .663,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: 488.611
        },
        t: {
          x: -201.6,
          y: 431.073
        },
        m: .749,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: 431.073
        },
        t: {
          x: -184.8,
          y: 368.556
        },
        m: .809,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: 368.556
        },
        t: {
          x: -168,
          y: 303.527
        },
        m: .84,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: 303.527
        },
        t: {
          x: -151.2,
          y: 238.552
        },
        m: .839,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: 238.552
        },
        t: {
          x: -134.4,
          y: 176.192
        },
        m: .807,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: 176.192
        },
        t: {
          x: -117.6,
          y: 118.909
        },
        m: .746,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: 118.909
        },
        t: {
          x: -100.8,
          y: 68.962
        },
        m: .659,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: 68.962
        },
        t: {
          x: -84,
          y: 28.321
        },
        m: .55,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: 28.321
        },
        t: {
          x: -67.2,
          y: -1.41
        },
        m: .427,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: -1.41
        },
        t: {
          x: -50.4,
          y: -19.059
        },
        m: .305,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: -19.059
        },
        t: {
          x: -33.6,
          y: -23.929
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: -23.929
        },
        t: {
          x: -16.8,
          y: -15.828
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: -15.828
        },
        t: {
          x: 0,
          y: 4.923
        },
        m: .334,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: 4.923
        },
        t: {
          x: 16.8,
          y: 37.508
        },
        m: .458,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: 37.508
        },
        t: {
          x: 33.6,
          y: 80.639
        },
        m: .579,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: 80.639
        },
        t: {
          x: 50.4,
          y: 132.616
        },
        m: .683,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: 132.616
        },
        t: {
          x: 67.2,
          y: 191.388
        },
        m: .764,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: 191.388
        },
        t: {
          x: 84,
          y: 254.638
        },
        m: .818,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: 254.638
        },
        t: {
          x: 100.8,
          y: 319.869
        },
        m: .842,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: 319.869
        },
        t: {
          x: 117.6,
          y: 384.508
        },
        m: .835,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: 384.508
        },
        t: {
          x: 134.4,
          y: 446.006
        },
        m: .797,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: 446.006
        },
        t: {
          x: 151.2,
          y: 501.937
        },
        m: .73,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: 501.937
        },
        t: {
          x: 168,
          y: 550.094
        },
        m: .638,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: 550.094
        },
        t: {
          x: 184.8,
          y: 588.577
        },
        m: .525,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: 588.577
        },
        t: {
          x: 201.6,
          y: 615.869
        },
        m: .401,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: 615.869
        },
        t: {
          x: 218.4,
          y: 630.893
        },
        m: .282,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: 630.893
        },
        t: {
          x: 235.2,
          y: 633.056
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: 633.056
        },
        t: {
          x: 252,
          y: 622.273
        },
        m: .25,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: 622.273
        },
        t: {
          x: 268.8,
          y: 598.969
        },
        m: .359,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: 598.969
        },
        t: {
          x: 285.6,
          y: 564.063
        },
        m: .484,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: 564.063
        },
        t: {
          x: 302.4,
          y: 518.933
        },
        m: .602,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: 518.933
        },
        t: {
          x: 319.2,
          y: 465.359
        },
        m: .702,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: 465.359
        },
        t: {
          x: 336,
          y: 405.454
        },
        m: .778,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: 405.454
        },
        t: {
          x: 352.8,
          y: 341.581
        },
        m: .826,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: 341.581
        },
        t: {
          x: 369.6,
          y: 276.26
        },
        m: .843,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: 276.26
        },
        t: {
          x: 386.4,
          y: 212.068
        },
        m: .829,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: 212.068
        },
        t: {
          x: 403.2,
          y: 151.537
        },
        m: .785,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: 151.537
        },
        t: {
          x: 420,
          y: 97.055
        },
        m: .713,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: 97.055
        },
        t: {
          x: 436.8,
          y: 50.772
        },
        m: .615,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: 50.772
        },
        t: {
          x: 453.6,
          y: 14.512
        },
        m: .5,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: 14.512
        },
        t: {
          x: 470.4,
          y: -10.294
        },
        m: .374,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: -10.294
        },
        t: {
          x: 487.2,
          y: -22.667
        },
        m: .261,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: -22.667
        },
        t: {
          x: 504,
          y: -22.119
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: -22.119
        },
        t: {
          x: 520.8,
          y: -8.671
        },
        m: .269,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: -8.671
        },
        t: {
          x: 537.6,
          y: 17.145
        },
        m: .385,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: 17.145
        },
        t: {
          x: 554.4,
          y: 54.312
        },
        m: .51,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: 54.312
        },
        t: {
          x: 571.2,
          y: 101.363
        },
        m: .625,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: 101.363
        },
        t: {
          x: 588,
          y: 156.442
        },
        m: .72,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: 156.442
        },
        t: {
          x: 604.8,
          y: 217.376
        },
        m: .79,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: 217.376
        },
        t: {
          x: 621.6,
          y: 281.763
        },
        m: .832,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: 281.763
        },
        t: {
          x: 638.4,
          y: 347.06
        },
        m: .843,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: 347.06
        },
        t: {
          x: 655.2,
          y: 410.694
        },
        m: .823,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: 410.694
        },
        t: {
          x: 672,
          y: 470.154
        },
        m: .772,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: 470.154
        },
        t: {
          x: 688.8,
          y: 523.093
        },
        m: .694,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: 523.093
        },
        t: {
          x: 705.6,
          y: 567.424
        },
        m: .593,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: 567.424
        },
        t: {
          x: 722.4,
          y: 601.398
        },
        m: .474,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: 601.398
        },
        t: {
          x: 739.2,
          y: 623.675
        },
        m: .349,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: 623.675
        },
        t: {
          x: 756,
          y: 633.376
        },
        m: .242,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: 633.376
        },
        t: {
          x: 772.8,
          y: 630.117
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: 630.117
        },
        t: {
          x: 789.6,
          y: 614.029
        },
        m: .291,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: 614.029
        },
        t: {
          x: 806.4,
          y: 585.745
        },
        m: .411,
        r: .85,
        d: 1
      }, {
        i: 98,
        f: {
          x: 806.4,
          y: 585.745
        },
        t: {
          x: 821.255,
          y: 554.888
        },
        m: .428,
        r: .85,
        d: 1
      }, {
        i: 99,
        f: {
          x: 821.255,
          y: 554.888
        },
        t: {
          x: 846.219,
          y: 505.223
        },
        m: .695,
        r: .85,
        d: 1
      }, {
        i: 100,
        f: {
          x: 846.219,
          y: 505.223
        },
        t: {
          x: 869.682,
          y: 453.618
        },
        m: .709,
        r: .85,
        d: 1
      }, {
        i: 101,
        f: {
          x: 869.682,
          y: 453.618
        },
        t: {
          x: 888.467,
          y: 395.555
        },
        m: .763,
        r: .85,
        d: 1
      }, {
        i: 102,
        f: {
          x: 888.467,
          y: 395.555
        },
        t: {
          x: 1500,
          y: 158.182
        },
        m: 8.2,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: 632.147
        },
        t: {
          x: 823.2,
          y: 632.16
        },
        m: 8.46,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: 632.16
        },
        t: {
          x: 806.4,
          y: 619.262
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: 619.262
        },
        t: {
          x: 789.6,
          y: 593.962
        },
        m: .38,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: 593.962
        },
        t: {
          x: 772.8,
          y: 557.258
        },
        m: .505,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: 557.258
        },
        t: {
          x: 756,
          y: 510.598
        },
        m: .62,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: 510.598
        },
        t: {
          x: 739.2,
          y: 455.823
        },
        m: .716,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: 455.823
        },
        t: {
          x: 722.4,
          y: 395.093
        },
        m: .788,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: 395.093
        },
        t: {
          x: 705.6,
          y: 330.804
        },
        m: .831,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: 330.804
        },
        t: {
          x: 688.8,
          y: 265.492
        },
        m: .843,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: 265.492
        },
        t: {
          x: 672,
          y: 201.733
        },
        m: .824,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: 201.733
        },
        t: {
          x: 655.2,
          y: 142.044
        },
        m: .775,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: 142.044
        },
        t: {
          x: 638.4,
          y: 88.778
        },
        m: .698,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: 88.778
        },
        t: {
          x: 621.6,
          y: 44.036
        },
        m: .597,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: 44.036
        },
        t: {
          x: 604.8,
          y: 9.584
        },
        m: .479,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: 9.584
        },
        t: {
          x: 588,
          y: -13.219
        },
        m: .354,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: -13.219
        },
        t: {
          x: 571.2,
          y: -23.474
        },
        m: .246,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: -23.474
        },
        t: {
          x: 554.4,
          y: -20.776
        },
        m: .213,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: -20.776
        },
        t: {
          x: 537.6,
          y: -5.232
        },
        m: .286,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: -5.232
        },
        t: {
          x: 520.8,
          y: 22.545
        },
        m: .406,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: 22.545
        },
        t: {
          x: 504,
          y: 61.46
        },
        m: .53,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: 61.46
        },
        t: {
          x: 487.2,
          y: 109.977
        },
        m: .642,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: 109.977
        },
        t: {
          x: 470.4,
          y: 166.182
        },
        m: .733,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: 166.182
        },
        t: {
          x: 453.6,
          y: 227.859
        },
        m: .799,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: 227.859
        },
        t: {
          x: 436.8,
          y: 292.573
        },
        m: .836,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: 292.573
        },
        t: {
          x: 420,
          y: 357.773
        },
        m: .842,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: 357.773
        },
        t: {
          x: 403.2,
          y: 420.887
        },
        m: .816,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: 420.887
        },
        t: {
          x: 386.4,
          y: 479.423
        },
        m: .761,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: 479.423
        },
        t: {
          x: 369.6,
          y: 531.074
        },
        m: .679,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: 531.074
        },
        t: {
          x: 352.8,
          y: 573.802
        },
        m: .574,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: 573.802
        },
        t: {
          x: 336,
          y: 605.922
        },
        m: .453,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: 605.922
        },
        t: {
          x: 319.2,
          y: 626.165
        },
        m: .329,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: 626.165
        },
        t: {
          x: 302.4,
          y: 633.734
        },
        m: .23,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: 633.734
        },
        t: {
          x: 285.6,
          y: 628.33
        },
        m: .221,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: 628.33
        },
        t: {
          x: 268.8,
          y: 610.167
        },
        m: .309,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: 610.167
        },
        t: {
          x: 252,
          y: 579.96
        },
        m: .432,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: 579.96
        },
        t: {
          x: 235.2,
          y: 538.902
        },
        m: .555,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: 538.902
        },
        t: {
          x: 218.4,
          y: 488.611
        },
        m: .663,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: 488.611
        },
        t: {
          x: 201.6,
          y: 431.073
        },
        m: .749,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: 431.073
        },
        t: {
          x: 184.8,
          y: 368.556
        },
        m: .809,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: 368.556
        },
        t: {
          x: 168,
          y: 303.527
        },
        m: .84,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: 303.527
        },
        t: {
          x: 151.2,
          y: 238.552
        },
        m: .839,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: 238.552
        },
        t: {
          x: 134.4,
          y: 176.192
        },
        m: .807,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: 176.192
        },
        t: {
          x: 117.6,
          y: 118.909
        },
        m: .746,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: 118.909
        },
        t: {
          x: 100.8,
          y: 68.962
        },
        m: .659,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: 68.962
        },
        t: {
          x: 84,
          y: 28.321
        },
        m: .55,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: 28.321
        },
        t: {
          x: 67.2,
          y: -1.41
        },
        m: .427,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: -1.41
        },
        t: {
          x: 50.4,
          y: -19.059
        },
        m: .305,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: -19.059
        },
        t: {
          x: 33.6,
          y: -23.929
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: -23.929
        },
        t: {
          x: 16.8,
          y: -15.828
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: -15.828
        },
        t: {
          x: 0,
          y: 4.923
        },
        m: .334,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: 4.923
        },
        t: {
          x: -16.8,
          y: 37.508
        },
        m: .458,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: 37.508
        },
        t: {
          x: -33.6,
          y: 80.639
        },
        m: .579,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: 80.639
        },
        t: {
          x: -50.4,
          y: 132.616
        },
        m: .683,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: 132.616
        },
        t: {
          x: -67.2,
          y: 191.388
        },
        m: .764,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: 191.388
        },
        t: {
          x: -84,
          y: 254.638
        },
        m: .818,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: 254.638
        },
        t: {
          x: -100.8,
          y: 319.869
        },
        m: .842,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: 319.869
        },
        t: {
          x: -117.6,
          y: 384.508
        },
        m: .835,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: 384.508
        },
        t: {
          x: -134.4,
          y: 446.006
        },
        m: .797,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: 446.006
        },
        t: {
          x: -151.2,
          y: 501.937
        },
        m: .73,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: 501.937
        },
        t: {
          x: -168,
          y: 550.094
        },
        m: .638,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: 550.094
        },
        t: {
          x: -184.8,
          y: 588.577
        },
        m: .525,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: 588.577
        },
        t: {
          x: -201.6,
          y: 615.869
        },
        m: .401,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: 615.869
        },
        t: {
          x: -218.4,
          y: 630.893
        },
        m: .282,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: 630.893
        },
        t: {
          x: -235.2,
          y: 633.056
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: 633.056
        },
        t: {
          x: -252,
          y: 622.273
        },
        m: .25,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: 622.273
        },
        t: {
          x: -268.8,
          y: 598.969
        },
        m: .359,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: 598.969
        },
        t: {
          x: -285.6,
          y: 564.063
        },
        m: .484,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: 564.063
        },
        t: {
          x: -302.4,
          y: 518.933
        },
        m: .602,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: 518.933
        },
        t: {
          x: -319.2,
          y: 465.359
        },
        m: .702,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: 465.359
        },
        t: {
          x: -336,
          y: 405.454
        },
        m: .778,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: 405.454
        },
        t: {
          x: -352.8,
          y: 341.581
        },
        m: .826,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: 341.581
        },
        t: {
          x: -369.6,
          y: 276.26
        },
        m: .843,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: 276.26
        },
        t: {
          x: -386.4,
          y: 212.068
        },
        m: .829,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: 212.068
        },
        t: {
          x: -403.2,
          y: 151.537
        },
        m: .785,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: 151.537
        },
        t: {
          x: -420,
          y: 97.055
        },
        m: .713,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: 97.055
        },
        t: {
          x: -436.8,
          y: 50.772
        },
        m: .615,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: 50.772
        },
        t: {
          x: -453.6,
          y: 14.512
        },
        m: .5,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: 14.512
        },
        t: {
          x: -470.4,
          y: -10.294
        },
        m: .374,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: -10.294
        },
        t: {
          x: -487.2,
          y: -22.667
        },
        m: .261,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: -22.667
        },
        t: {
          x: -504,
          y: -22.119
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: -22.119
        },
        t: {
          x: -520.8,
          y: -8.671
        },
        m: .269,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: -8.671
        },
        t: {
          x: -537.6,
          y: 17.145
        },
        m: .385,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: 17.145
        },
        t: {
          x: -554.4,
          y: 54.312
        },
        m: .51,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: 54.312
        },
        t: {
          x: -571.2,
          y: 101.363
        },
        m: .625,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: 101.363
        },
        t: {
          x: -588,
          y: 156.442
        },
        m: .72,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: 156.442
        },
        t: {
          x: -604.8,
          y: 217.376
        },
        m: .79,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: 217.376
        },
        t: {
          x: -621.6,
          y: 281.763
        },
        m: .832,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: 281.763
        },
        t: {
          x: -638.4,
          y: 347.06
        },
        m: .843,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: 347.06
        },
        t: {
          x: -655.2,
          y: 410.694
        },
        m: .823,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: 410.694
        },
        t: {
          x: -672,
          y: 470.154
        },
        m: .772,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: 470.154
        },
        t: {
          x: -688.8,
          y: 523.093
        },
        m: .694,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: 523.093
        },
        t: {
          x: -705.6,
          y: 567.424
        },
        m: .593,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: 567.424
        },
        t: {
          x: -722.4,
          y: 601.398
        },
        m: .474,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: 601.398
        },
        t: {
          x: -739.2,
          y: 623.675
        },
        m: .349,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: 623.675
        },
        t: {
          x: -756,
          y: 633.376
        },
        m: .242,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: 633.376
        },
        t: {
          x: -772.8,
          y: 630.117
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: 630.117
        },
        t: {
          x: -789.6,
          y: 614.029
        },
        m: .291,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: 614.029
        },
        t: {
          x: -806.4,
          y: 585.745
        },
        m: .411,
        r: .85,
        d: 0
      }, {
        i: 98,
        f: {
          x: -806.4,
          y: 585.745
        },
        t: {
          x: -821.255,
          y: 554.888
        },
        m: .428,
        r: .85,
        d: 0
      }, {
        i: 99,
        f: {
          x: -821.255,
          y: 554.888
        },
        t: {
          x: -846.219,
          y: 505.223
        },
        m: .695,
        r: .85,
        d: 0
      }, {
        i: 100,
        f: {
          x: -846.219,
          y: 505.223
        },
        t: {
          x: -869.682,
          y: 453.618
        },
        m: .709,
        r: .85,
        d: 0
      }, {
        i: 101,
        f: {
          x: -869.682,
          y: 453.618
        },
        t: {
          x: -888.467,
          y: 395.555
        },
        m: .763,
        r: .85,
        d: 0
      }, {
        i: 102,
        f: {
          x: -888.467,
          y: 395.555
        },
        t: {
          x: -1500,
          y: 158.182
        },
        m: 8.2,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: 391
        },
        t: {
          x: -823.2,
          y: 383.25
        },
        m: 8.461,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: 383.25
        },
        t: {
          x: -806.4,
          y: 368.539
        },
        m: .279,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: 368.539
        },
        t: {
          x: -789.6,
          y: 347.282
        },
        m: .339,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: 347.282
        },
        t: {
          x: -772.8,
          y: 320.152
        },
        m: .399,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: 320.152
        },
        t: {
          x: -756,
          y: 288.053
        },
        m: .453,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: 288.053
        },
        t: {
          x: -739.2,
          y: 252.086
        },
        m: .496,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: 252.086
        },
        t: {
          x: -722.4,
          y: 213.505
        },
        m: .526,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: 213.505
        },
        t: {
          x: -705.6,
          y: 173.665
        },
        m: .54,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: 173.665
        },
        t: {
          x: -688.8,
          y: 133.972
        },
        m: .539,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: 133.972
        },
        t: {
          x: -672,
          y: 95.827
        },
        m: .521,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: 95.827
        },
        t: {
          x: -655.2,
          y: 60.568
        },
        m: .488,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: 60.568
        },
        t: {
          x: -638.4,
          y: 29.421
        },
        m: .442,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: 29.421
        },
        t: {
          x: -621.6,
          y: 3.449
        },
        m: .387,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: 3.449
        },
        t: {
          x: -604.8,
          y: -16.49
        },
        m: .326,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: -16.49
        },
        t: {
          x: -588,
          y: -29.774
        },
        m: .268,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: -29.774
        },
        t: {
          x: -571.2,
          y: -36.045
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: -36.045
        },
        t: {
          x: -554.4,
          y: -35.222
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: -35.222
        },
        t: {
          x: -537.6,
          y: -27.502
        },
        m: .231,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: -27.502
        },
        t: {
          x: -520.8,
          y: -13.356
        },
        m: .275,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: -13.356
        },
        t: {
          x: -504,
          y: 6.493
        },
        m: .325,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: 6.493
        },
        t: {
          x: -487.2,
          y: 31.095
        },
        m: .372,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: 31.095
        },
        t: {
          x: -470.4,
          y: 59.315
        },
        m: .411,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: 59.315
        },
        t: {
          x: -453.6,
          y: 89.873
        },
        m: .436,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: 89.873
        },
        t: {
          x: -436.8,
          y: 121.399
        },
        m: .447,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: 121.399
        },
        t: {
          x: -420,
          y: 152.484
        },
        m: .442,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: 152.484
        },
        t: {
          x: -403.2,
          y: 181.734
        },
        m: .422,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: 181.734
        },
        t: {
          x: -386.4,
          y: 207.832
        },
        m: .388,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: 207.832
        },
        t: {
          x: -369.6,
          y: 229.581
        },
        m: .344,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: 229.581
        },
        t: {
          x: -352.8,
          y: 245.957
        },
        m: .293,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: 245.957
        },
        t: {
          x: -336,
          y: 256.15
        },
        m: .246,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: 256.15
        },
        t: {
          x: -319.2,
          y: 259.592
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: 259.592
        },
        t: {
          x: -302.4,
          y: 255.98
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: 255.98
        },
        t: {
          x: -285.6,
          y: 245.292
        },
        m: .249,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: 245.292
        },
        t: {
          x: -268.8,
          y: 227.784
        },
        m: .303,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: 227.784
        },
        t: {
          x: -252,
          y: 203.981
        },
        m: .364,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: 203.981
        },
        t: {
          x: -235.2,
          y: 174.655
        },
        m: .422,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: 174.655
        },
        t: {
          x: -218.4,
          y: 140.799
        },
        m: .472,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: 140.799
        },
        t: {
          x: -201.6,
          y: 103.582
        },
        m: .51,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: 103.582
        },
        t: {
          x: -184.8,
          y: 64.306
        },
        m: .534,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: 64.306
        },
        t: {
          x: -168,
          y: 24.356
        },
        m: .542,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: 24.356
        },
        t: {
          x: -151.2,
          y: -14.859
        },
        m: .533,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: -14.859
        },
        t: {
          x: -134.4,
          y: -51.958
        },
        m: .509,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: -51.958
        },
        t: {
          x: -117.6,
          y: -85.641
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: -85.641
        },
        t: {
          x: -100.8,
          y: -114.747
        },
        m: .42,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: -114.747
        },
        t: {
          x: -84,
          y: -138.293
        },
        m: .362,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: -138.293
        },
        t: {
          x: -67.2,
          y: -155.516
        },
        m: .301,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: -155.516
        },
        t: {
          x: -50.4,
          y: -165.902
        },
        m: .247,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: -165.902
        },
        t: {
          x: -33.6,
          y: -169.206
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: -169.206
        },
        t: {
          x: -16.8,
          y: -165.465
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: -165.465
        },
        t: {
          x: 0,
          y: -154.992
        },
        m: .247,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: -154.992
        },
        t: {
          x: 16.8,
          y: -138.365
        },
        m: .295,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: -138.365
        },
        t: {
          x: 33.6,
          y: -116.406
        },
        m: .346,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: -116.406
        },
        t: {
          x: 50.4,
          y: -90.146
        },
        m: .39,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: -90.146
        },
        t: {
          x: 67.2,
          y: -60.789
        },
        m: .423,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: -60.789
        },
        t: {
          x: 84,
          y: -29.656
        },
        m: .442,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: -29.656
        },
        t: {
          x: 100.8,
          y: 1.857
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: 1.857
        },
        t: {
          x: 117.6,
          y: 32.342
        },
        m: .435,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: 32.342
        },
        t: {
          x: 134.4,
          y: 60.432
        },
        m: .409,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: 60.432
        },
        t: {
          x: 151.2,
          y: 84.851
        },
        m: .371,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: 84.851
        },
        t: {
          x: 168,
          y: 104.471
        },
        m: .323,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: 104.471
        },
        t: {
          x: 184.8,
          y: 118.353
        },
        m: .272,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: 118.353
        },
        t: {
          x: 201.6,
          y: 125.783
        },
        m: .23,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: 125.783
        },
        t: {
          x: 218.4,
          y: 126.302
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: 126.302
        },
        t: {
          x: 235.2,
          y: 119.725
        },
        m: .226,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: 119.725
        },
        t: {
          x: 252,
          y: 106.144
        },
        m: .27,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: 106.144
        },
        t: {
          x: 268.8,
          y: 85.931
        },
        m: .329,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: 85.931
        },
        t: {
          x: 285.6,
          y: 59.716
        },
        m: .389,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: 59.716
        },
        t: {
          x: 302.4,
          y: 28.368
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: 28.368
        },
        t: {
          x: 319.2,
          y: -7.042
        },
        m: .49,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: -7.042
        },
        t: {
          x: 336,
          y: -45.282
        },
        m: .522,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: -45.282
        },
        t: {
          x: 352.8,
          y: -85.01
        },
        m: .539,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: -85.01
        },
        t: {
          x: 369.6,
          y: -124.825
        },
        m: .54,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: -124.825
        },
        t: {
          x: 386.4,
          y: -163.321
        },
        m: .525,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: -163.321
        },
        t: {
          x: 403.2,
          y: -199.146
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: -199.146
        },
        t: {
          x: 420,
          y: -231.051
        },
        m: .451,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: -231.051
        },
        t: {
          x: 436.8,
          y: -257.945
        },
        m: .396,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: -257.945
        },
        t: {
          x: 453.6,
          y: -278.931
        },
        m: .336,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: -278.931
        },
        t: {
          x: 470.4,
          y: -293.349
        },
        m: .277,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: -293.349
        },
        t: {
          x: 487.2,
          y: -300.793
        },
        m: .23,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: -300.793
        },
        t: {
          x: 504,
          y: -301.138
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: -301.138
        },
        t: {
          x: 520.8,
          y: -294.534
        },
        m: .226,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: -294.534
        },
        t: {
          x: 537.6,
          y: -281.408
        },
        m: .266,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: -281.408
        },
        t: {
          x: 554.4,
          y: -262.443
        },
        m: .317,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: -262.443
        },
        t: {
          x: 571.2,
          y: -238.553
        },
        m: .365,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: -238.553
        },
        t: {
          x: 588,
          y: -210.847
        },
        m: .405,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: -210.847
        },
        t: {
          x: 604.8,
          y: -180.582
        },
        m: .433,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: -180.582
        },
        t: {
          x: 621.6,
          y: -149.119
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: -149.119
        },
        t: {
          x: 638.4,
          y: -117.865
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: -117.865
        },
        t: {
          x: 655.2,
          y: -88.217
        },
        m: .426,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: -88.217
        },
        t: {
          x: 672,
          y: -61.512
        },
        m: .394,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: -61.512
        },
        t: {
          x: 688.8,
          y: -38.967
        },
        m: .351,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: -38.967
        },
        t: {
          x: 705.6,
          y: -21.639
        },
        m: .302,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: -21.639
        },
        t: {
          x: 722.4,
          y: -10.377
        },
        m: .253,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: -10.377
        },
        t: {
          x: 739.2,
          y: -5.79
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: -5.79
        },
        t: {
          x: 756,
          y: -8.226
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: -8.226
        },
        t: {
          x: 772.8,
          y: -17.753
        },
        m: .241,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: -17.753
        },
        t: {
          x: 789.6,
          y: -34.162
        },
        m: .294,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: -34.162
        },
        t: {
          x: 806.4,
          y: -56.971
        },
        m: .354,
        r: .85,
        d: 1
      }, {
        i: 98,
        f: {
          x: 806.4,
          y: -56.971
        },
        t: {
          x: 828.367,
          y: -92.362
        },
        m: .521,
        r: .85,
        d: 1
      }, {
        i: 99,
        f: {
          x: 828.367,
          y: -92.362
        },
        t: {
          x: 863.758,
          y: -138.737
        },
        m: .729,
        r: .85,
        d: 1
      }, {
        i: 100,
        f: {
          x: 863.758,
          y: -138.737
        },
        t: {
          x: 901.59,
          y: -196.095
        },
        m: .859,
        r: .85,
        d: 1
      }, {
        i: 101,
        f: {
          x: 901.59,
          y: -196.095
        },
        t: {
          x: 1500,
          y: -294.947
        },
        m: 7.581,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: 391
        },
        t: {
          x: 823.2,
          y: 383.25
        },
        m: 8.461,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: 383.25
        },
        t: {
          x: 806.4,
          y: 368.539
        },
        m: .279,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: 368.539
        },
        t: {
          x: 789.6,
          y: 347.282
        },
        m: .339,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: 347.282
        },
        t: {
          x: 772.8,
          y: 320.152
        },
        m: .399,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: 320.152
        },
        t: {
          x: 756,
          y: 288.053
        },
        m: .453,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: 288.053
        },
        t: {
          x: 739.2,
          y: 252.086
        },
        m: .496,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: 252.086
        },
        t: {
          x: 722.4,
          y: 213.505
        },
        m: .526,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: 213.505
        },
        t: {
          x: 705.6,
          y: 173.665
        },
        m: .54,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: 173.665
        },
        t: {
          x: 688.8,
          y: 133.972
        },
        m: .539,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: 133.972
        },
        t: {
          x: 672,
          y: 95.827
        },
        m: .521,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: 95.827
        },
        t: {
          x: 655.2,
          y: 60.568
        },
        m: .488,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: 60.568
        },
        t: {
          x: 638.4,
          y: 29.421
        },
        m: .442,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: 29.421
        },
        t: {
          x: 621.6,
          y: 3.449
        },
        m: .387,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: 3.449
        },
        t: {
          x: 604.8,
          y: -16.49
        },
        m: .326,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: -16.49
        },
        t: {
          x: 588,
          y: -29.774
        },
        m: .268,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: -29.774
        },
        t: {
          x: 571.2,
          y: -36.045
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: -36.045
        },
        t: {
          x: 554.4,
          y: -35.222
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: -35.222
        },
        t: {
          x: 537.6,
          y: -27.502
        },
        m: .231,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: -27.502
        },
        t: {
          x: 520.8,
          y: -13.356
        },
        m: .275,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: -13.356
        },
        t: {
          x: 504,
          y: 6.493
        },
        m: .325,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: 6.493
        },
        t: {
          x: 487.2,
          y: 31.095
        },
        m: .372,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: 31.095
        },
        t: {
          x: 470.4,
          y: 59.315
        },
        m: .411,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: 59.315
        },
        t: {
          x: 453.6,
          y: 89.873
        },
        m: .436,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: 89.873
        },
        t: {
          x: 436.8,
          y: 121.399
        },
        m: .447,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: 121.399
        },
        t: {
          x: 420,
          y: 152.484
        },
        m: .442,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: 152.484
        },
        t: {
          x: 403.2,
          y: 181.734
        },
        m: .422,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: 181.734
        },
        t: {
          x: 386.4,
          y: 207.832
        },
        m: .388,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: 207.832
        },
        t: {
          x: 369.6,
          y: 229.581
        },
        m: .344,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: 229.581
        },
        t: {
          x: 352.8,
          y: 245.957
        },
        m: .293,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: 245.957
        },
        t: {
          x: 336,
          y: 256.15
        },
        m: .246,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: 256.15
        },
        t: {
          x: 319.2,
          y: 259.592
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: 259.592
        },
        t: {
          x: 302.4,
          y: 255.98
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: 255.98
        },
        t: {
          x: 285.6,
          y: 245.292
        },
        m: .249,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: 245.292
        },
        t: {
          x: 268.8,
          y: 227.784
        },
        m: .303,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: 227.784
        },
        t: {
          x: 252,
          y: 203.981
        },
        m: .364,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: 203.981
        },
        t: {
          x: 235.2,
          y: 174.655
        },
        m: .422,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: 174.655
        },
        t: {
          x: 218.4,
          y: 140.799
        },
        m: .472,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: 140.799
        },
        t: {
          x: 201.6,
          y: 103.582
        },
        m: .51,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: 103.582
        },
        t: {
          x: 184.8,
          y: 64.306
        },
        m: .534,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: 64.306
        },
        t: {
          x: 168,
          y: 24.356
        },
        m: .542,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: 24.356
        },
        t: {
          x: 151.2,
          y: -14.859
        },
        m: .533,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: -14.859
        },
        t: {
          x: 134.4,
          y: -51.958
        },
        m: .509,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: -51.958
        },
        t: {
          x: 117.6,
          y: -85.641
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: -85.641
        },
        t: {
          x: 100.8,
          y: -114.747
        },
        m: .42,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: -114.747
        },
        t: {
          x: 84,
          y: -138.293
        },
        m: .362,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: -138.293
        },
        t: {
          x: 67.2,
          y: -155.516
        },
        m: .301,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: -155.516
        },
        t: {
          x: 50.4,
          y: -165.902
        },
        m: .247,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: -165.902
        },
        t: {
          x: 33.6,
          y: -169.206
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: -169.206
        },
        t: {
          x: 16.8,
          y: -165.465
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: -165.465
        },
        t: {
          x: 0,
          y: -154.992
        },
        m: .247,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: -154.992
        },
        t: {
          x: -16.8,
          y: -138.365
        },
        m: .295,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: -138.365
        },
        t: {
          x: -33.6,
          y: -116.406
        },
        m: .346,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: -116.406
        },
        t: {
          x: -50.4,
          y: -90.146
        },
        m: .39,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: -90.146
        },
        t: {
          x: -67.2,
          y: -60.789
        },
        m: .423,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: -60.789
        },
        t: {
          x: -84,
          y: -29.656
        },
        m: .442,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: -29.656
        },
        t: {
          x: -100.8,
          y: 1.857
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: 1.857
        },
        t: {
          x: -117.6,
          y: 32.342
        },
        m: .435,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: 32.342
        },
        t: {
          x: -134.4,
          y: 60.432
        },
        m: .409,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: 60.432
        },
        t: {
          x: -151.2,
          y: 84.851
        },
        m: .371,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: 84.851
        },
        t: {
          x: -168,
          y: 104.471
        },
        m: .323,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: 104.471
        },
        t: {
          x: -184.8,
          y: 118.353
        },
        m: .272,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: 118.353
        },
        t: {
          x: -201.6,
          y: 125.783
        },
        m: .23,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: 125.783
        },
        t: {
          x: -218.4,
          y: 126.302
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: 126.302
        },
        t: {
          x: -235.2,
          y: 119.725
        },
        m: .226,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: 119.725
        },
        t: {
          x: -252,
          y: 106.144
        },
        m: .27,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: 106.144
        },
        t: {
          x: -268.8,
          y: 85.931
        },
        m: .329,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: 85.931
        },
        t: {
          x: -285.6,
          y: 59.716
        },
        m: .389,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: 59.716
        },
        t: {
          x: -302.4,
          y: 28.368
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: 28.368
        },
        t: {
          x: -319.2,
          y: -7.042
        },
        m: .49,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: -7.042
        },
        t: {
          x: -336,
          y: -45.282
        },
        m: .522,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: -45.282
        },
        t: {
          x: -352.8,
          y: -85.01
        },
        m: .539,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: -85.01
        },
        t: {
          x: -369.6,
          y: -124.825
        },
        m: .54,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: -124.825
        },
        t: {
          x: -386.4,
          y: -163.321
        },
        m: .525,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: -163.321
        },
        t: {
          x: -403.2,
          y: -199.146
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: -199.146
        },
        t: {
          x: -420,
          y: -231.051
        },
        m: .451,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: -231.051
        },
        t: {
          x: -436.8,
          y: -257.945
        },
        m: .396,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: -257.945
        },
        t: {
          x: -453.6,
          y: -278.931
        },
        m: .336,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: -278.931
        },
        t: {
          x: -470.4,
          y: -293.349
        },
        m: .277,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: -293.349
        },
        t: {
          x: -487.2,
          y: -300.793
        },
        m: .23,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: -300.793
        },
        t: {
          x: -504,
          y: -301.138
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: -301.138
        },
        t: {
          x: -520.8,
          y: -294.534
        },
        m: .226,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: -294.534
        },
        t: {
          x: -537.6,
          y: -281.408
        },
        m: .266,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: -281.408
        },
        t: {
          x: -554.4,
          y: -262.443
        },
        m: .317,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: -262.443
        },
        t: {
          x: -571.2,
          y: -238.553
        },
        m: .365,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: -238.553
        },
        t: {
          x: -588,
          y: -210.847
        },
        m: .405,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: -210.847
        },
        t: {
          x: -604.8,
          y: -180.582
        },
        m: .433,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: -180.582
        },
        t: {
          x: -621.6,
          y: -149.119
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: -149.119
        },
        t: {
          x: -638.4,
          y: -117.865
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: -117.865
        },
        t: {
          x: -655.2,
          y: -88.217
        },
        m: .426,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: -88.217
        },
        t: {
          x: -672,
          y: -61.512
        },
        m: .394,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: -61.512
        },
        t: {
          x: -688.8,
          y: -38.967
        },
        m: .351,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: -38.967
        },
        t: {
          x: -705.6,
          y: -21.639
        },
        m: .302,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: -21.639
        },
        t: {
          x: -722.4,
          y: -10.377
        },
        m: .253,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: -10.377
        },
        t: {
          x: -739.2,
          y: -5.79
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: -5.79
        },
        t: {
          x: -756,
          y: -8.226
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: -8.226
        },
        t: {
          x: -772.8,
          y: -17.753
        },
        m: .241,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: -17.753
        },
        t: {
          x: -789.6,
          y: -34.162
        },
        m: .294,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: -34.162
        },
        t: {
          x: -806.4,
          y: -56.971
        },
        m: .354,
        r: .85,
        d: 0
      }, {
        i: 98,
        f: {
          x: -806.4,
          y: -56.971
        },
        t: {
          x: -828.367,
          y: -92.362
        },
        m: .521,
        r: .85,
        d: 0
      }, {
        i: 99,
        f: {
          x: -828.367,
          y: -92.362
        },
        t: {
          x: -863.758,
          y: -138.737
        },
        m: .729,
        r: .85,
        d: 0
      }, {
        i: 100,
        f: {
          x: -863.758,
          y: -138.737
        },
        t: {
          x: -901.59,
          y: -196.095
        },
        m: .859,
        r: .85,
        d: 0
      }, {
        i: 101,
        f: {
          x: -901.59,
          y: -196.095
        },
        t: {
          x: -1500,
          y: -294.947
        },
        m: 7.581,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: 76.106
        },
        t: {
          x: -823.2,
          y: 68.356
        },
        m: 8.461,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: 68.356
        },
        t: {
          x: -806.4,
          y: 53.645
        },
        m: .279,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: 53.645
        },
        t: {
          x: -789.6,
          y: 32.388
        },
        m: .339,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: 32.388
        },
        t: {
          x: -772.8,
          y: 5.258
        },
        m: .399,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: 5.258
        },
        t: {
          x: -756,
          y: -26.841
        },
        m: .453,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: -26.841
        },
        t: {
          x: -739.2,
          y: -62.807
        },
        m: .496,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: -62.807
        },
        t: {
          x: -722.4,
          y: -101.389
        },
        m: .526,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: -101.389
        },
        t: {
          x: -705.6,
          y: -141.229
        },
        m: .54,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: -141.229
        },
        t: {
          x: -688.8,
          y: -180.922
        },
        m: .539,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: -180.922
        },
        t: {
          x: -672,
          y: -219.067
        },
        m: .521,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: -219.067
        },
        t: {
          x: -655.2,
          y: -254.326
        },
        m: .488,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: -254.326
        },
        t: {
          x: -638.4,
          y: -285.473
        },
        m: .442,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: -285.473
        },
        t: {
          x: -621.6,
          y: -311.445
        },
        m: .387,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: -311.445
        },
        t: {
          x: -604.8,
          y: -331.383
        },
        m: .326,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: -331.383
        },
        t: {
          x: -588,
          y: -344.667
        },
        m: .268,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: -344.667
        },
        t: {
          x: -571.2,
          y: -350.939
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: -350.939
        },
        t: {
          x: -554.4,
          y: -350.115
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: -350.115
        },
        t: {
          x: -537.6,
          y: -342.395
        },
        m: .231,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: -342.395
        },
        t: {
          x: -520.8,
          y: -328.249
        },
        m: .275,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: -328.249
        },
        t: {
          x: -504,
          y: -308.401
        },
        m: .325,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: -308.401
        },
        t: {
          x: -487.2,
          y: -283.799
        },
        m: .372,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: -283.799
        },
        t: {
          x: -470.4,
          y: -255.579
        },
        m: .411,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: -255.579
        },
        t: {
          x: -453.6,
          y: -225.02
        },
        m: .436,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: -225.02
        },
        t: {
          x: -436.8,
          y: -193.494
        },
        m: .447,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: -193.494
        },
        t: {
          x: -420,
          y: -162.41
        },
        m: .442,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: -162.41
        },
        t: {
          x: -403.2,
          y: -133.159
        },
        m: .422,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: -133.159
        },
        t: {
          x: -386.4,
          y: -107.062
        },
        m: .388,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: -107.062
        },
        t: {
          x: -369.6,
          y: -85.313
        },
        m: .344,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: -85.313
        },
        t: {
          x: -352.8,
          y: -68.936
        },
        m: .293,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: -68.936
        },
        t: {
          x: -336,
          y: -58.743
        },
        m: .246,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: -58.743
        },
        t: {
          x: -319.2,
          y: -55.302
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: -55.302
        },
        t: {
          x: -302.4,
          y: -58.913
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: -58.913
        },
        t: {
          x: -285.6,
          y: -69.601
        },
        m: .249,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: -69.601
        },
        t: {
          x: -268.8,
          y: -87.109
        },
        m: .303,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: -87.109
        },
        t: {
          x: -252,
          y: -110.913
        },
        m: .364,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: -110.913
        },
        t: {
          x: -235.2,
          y: -140.238
        },
        m: .422,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: -140.238
        },
        t: {
          x: -218.4,
          y: -174.094
        },
        m: .472,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: -174.094
        },
        t: {
          x: -201.6,
          y: -211.312
        },
        m: .51,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: -211.312
        },
        t: {
          x: -184.8,
          y: -250.587
        },
        m: .534,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: -250.587
        },
        t: {
          x: -168,
          y: -290.538
        },
        m: .542,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: -290.538
        },
        t: {
          x: -151.2,
          y: -329.753
        },
        m: .533,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: -329.753
        },
        t: {
          x: -134.4,
          y: -366.851
        },
        m: .509,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: -366.851
        },
        t: {
          x: -117.6,
          y: -400.535
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: -400.535
        },
        t: {
          x: -100.8,
          y: -429.641
        },
        m: .42,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: -429.641
        },
        t: {
          x: -84,
          y: -453.187
        },
        m: .362,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: -453.187
        },
        t: {
          x: -67.2,
          y: -470.41
        },
        m: .301,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: -470.41
        },
        t: {
          x: -50.4,
          y: -480.795
        },
        m: .247,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: -480.795
        },
        t: {
          x: -33.6,
          y: -484.1
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: -484.1
        },
        t: {
          x: -16.8,
          y: -480.359
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: -480.359
        },
        t: {
          x: 0,
          y: -469.885
        },
        m: .247,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: -469.885
        },
        t: {
          x: 16.8,
          y: -453.258
        },
        m: .295,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: -453.258
        },
        t: {
          x: 33.6,
          y: -431.299
        },
        m: .346,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: -431.299
        },
        t: {
          x: 50.4,
          y: -405.04
        },
        m: .39,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: -405.04
        },
        t: {
          x: 67.2,
          y: -375.682
        },
        m: .423,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: -375.682
        },
        t: {
          x: 84,
          y: -344.55
        },
        m: .442,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: -344.55
        },
        t: {
          x: 100.8,
          y: -313.037
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: -313.037
        },
        t: {
          x: 117.6,
          y: -282.551
        },
        m: .435,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: -282.551
        },
        t: {
          x: 134.4,
          y: -254.462
        },
        m: .409,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: -254.462
        },
        t: {
          x: 151.2,
          y: -230.043
        },
        m: .37,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: -230.043
        },
        t: {
          x: 168,
          y: -210.422
        },
        m: .323,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: -210.422
        },
        t: {
          x: 184.8,
          y: -196.54
        },
        m: .272,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: -196.54
        },
        t: {
          x: 201.6,
          y: -189.11
        },
        m: .23,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: -189.11
        },
        t: {
          x: 218.4,
          y: -188.591
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: -188.591
        },
        t: {
          x: 235.2,
          y: -195.169
        },
        m: .226,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: -195.169
        },
        t: {
          x: 252,
          y: -208.749
        },
        m: .27,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: -208.749
        },
        t: {
          x: 268.8,
          y: -228.963
        },
        m: .329,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: -228.963
        },
        t: {
          x: 285.6,
          y: -255.178
        },
        m: .389,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: -255.178
        },
        t: {
          x: 302.4,
          y: -286.526
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: -286.526
        },
        t: {
          x: 319.2,
          y: -321.935
        },
        m: .49,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: -321.935
        },
        t: {
          x: 336,
          y: -360.176
        },
        m: .522,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: -360.176
        },
        t: {
          x: 352.8,
          y: -399.904
        },
        m: .539,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: -399.904
        },
        t: {
          x: 369.6,
          y: -439.719
        },
        m: .54,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: -439.719
        },
        t: {
          x: 386.4,
          y: -478.215
        },
        m: .525,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: -478.215
        },
        t: {
          x: 403.2,
          y: -514.039
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: -514.039
        },
        t: {
          x: 420,
          y: -545.945
        },
        m: .451,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: -545.945
        },
        t: {
          x: 436.8,
          y: -572.839
        },
        m: .396,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: -572.839
        },
        t: {
          x: 453.6,
          y: -593.825
        },
        m: .336,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: -593.825
        },
        t: {
          x: 470.4,
          y: -608.242
        },
        m: .277,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: -608.242
        },
        t: {
          x: 487.2,
          y: -615.687
        },
        m: .23,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: -615.687
        },
        t: {
          x: 504,
          y: -616.031
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: -616.031
        },
        t: {
          x: 520.8,
          y: -609.427
        },
        m: .226,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: -609.427
        },
        t: {
          x: 537.6,
          y: -596.301
        },
        m: .266,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: -596.301
        },
        t: {
          x: 554.4,
          y: -577.336
        },
        m: .317,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: -577.336
        },
        t: {
          x: 571.2,
          y: -553.447
        },
        m: .365,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: -553.447
        },
        t: {
          x: 588,
          y: -525.74
        },
        m: .405,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: -525.74
        },
        t: {
          x: 604.8,
          y: -495.476
        },
        m: .433,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: -495.476
        },
        t: {
          x: 621.6,
          y: -464.013
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: -464.013
        },
        t: {
          x: 638.4,
          y: -432.758
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: -432.758
        },
        t: {
          x: 655.2,
          y: -403.111
        },
        m: .426,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: -403.111
        },
        t: {
          x: 672,
          y: -376.405
        },
        m: .394,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: -376.405
        },
        t: {
          x: 688.8,
          y: -353.861
        },
        m: .351,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: -353.861
        },
        t: {
          x: 705.6,
          y: -336.533
        },
        m: .302,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: -336.533
        },
        t: {
          x: 722.4,
          y: -325.271
        },
        m: .253,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: -325.271
        },
        t: {
          x: 739.2,
          y: -320.684
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: -320.684
        },
        t: {
          x: 756,
          y: -323.119
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: -323.119
        },
        t: {
          x: 772.8,
          y: -332.647
        },
        m: .241,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: -332.647
        },
        t: {
          x: 789.6,
          y: -349.055
        },
        m: .294,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: -349.055
        },
        t: {
          x: 806.4,
          y: -371.864
        },
        m: .354,
        r: .85,
        d: 1
      }, {
        i: 98,
        f: {
          x: 806.4,
          y: -371.864
        },
        t: {
          x: 828.367,
          y: -407.256
        },
        m: .521,
        r: .85,
        d: 1
      }, {
        i: 99,
        f: {
          x: 828.367,
          y: -407.256
        },
        t: {
          x: 863.758,
          y: -453.631
        },
        m: .729,
        r: .85,
        d: 1
      }, {
        i: 100,
        f: {
          x: 863.758,
          y: -453.631
        },
        t: {
          x: 901.59,
          y: -510.989
        },
        m: .859,
        r: .85,
        d: 1
      }, {
        i: 101,
        f: {
          x: 901.59,
          y: -510.989
        },
        t: {
          x: 1500,
          y: -609.841
        },
        m: 7.581,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: 76.106
        },
        t: {
          x: 823.2,
          y: 68.356
        },
        m: 8.461,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: 68.356
        },
        t: {
          x: 806.4,
          y: 53.645
        },
        m: .279,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: 53.645
        },
        t: {
          x: 789.6,
          y: 32.388
        },
        m: .339,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: 32.388
        },
        t: {
          x: 772.8,
          y: 5.258
        },
        m: .399,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: 5.258
        },
        t: {
          x: 756,
          y: -26.841
        },
        m: .453,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: -26.841
        },
        t: {
          x: 739.2,
          y: -62.807
        },
        m: .496,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: -62.807
        },
        t: {
          x: 722.4,
          y: -101.389
        },
        m: .526,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: -101.389
        },
        t: {
          x: 705.6,
          y: -141.229
        },
        m: .54,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: -141.229
        },
        t: {
          x: 688.8,
          y: -180.922
        },
        m: .539,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: -180.922
        },
        t: {
          x: 672,
          y: -219.067
        },
        m: .521,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: -219.067
        },
        t: {
          x: 655.2,
          y: -254.326
        },
        m: .488,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: -254.326
        },
        t: {
          x: 638.4,
          y: -285.473
        },
        m: .442,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: -285.473
        },
        t: {
          x: 621.6,
          y: -311.445
        },
        m: .387,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: -311.445
        },
        t: {
          x: 604.8,
          y: -331.383
        },
        m: .326,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: -331.383
        },
        t: {
          x: 588,
          y: -344.667
        },
        m: .268,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: -344.667
        },
        t: {
          x: 571.2,
          y: -350.939
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: -350.939
        },
        t: {
          x: 554.4,
          y: -350.115
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: -350.115
        },
        t: {
          x: 537.6,
          y: -342.395
        },
        m: .231,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: -342.395
        },
        t: {
          x: 520.8,
          y: -328.249
        },
        m: .275,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: -328.249
        },
        t: {
          x: 504,
          y: -308.401
        },
        m: .325,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: -308.401
        },
        t: {
          x: 487.2,
          y: -283.799
        },
        m: .372,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: -283.799
        },
        t: {
          x: 470.4,
          y: -255.579
        },
        m: .411,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: -255.579
        },
        t: {
          x: 453.6,
          y: -225.02
        },
        m: .436,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: -225.02
        },
        t: {
          x: 436.8,
          y: -193.494
        },
        m: .447,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: -193.494
        },
        t: {
          x: 420,
          y: -162.41
        },
        m: .442,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: -162.41
        },
        t: {
          x: 403.2,
          y: -133.159
        },
        m: .422,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: -133.159
        },
        t: {
          x: 386.4,
          y: -107.062
        },
        m: .388,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: -107.062
        },
        t: {
          x: 369.6,
          y: -85.313
        },
        m: .344,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: -85.313
        },
        t: {
          x: 352.8,
          y: -68.936
        },
        m: .293,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: -68.936
        },
        t: {
          x: 336,
          y: -58.743
        },
        m: .246,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: -58.743
        },
        t: {
          x: 319.2,
          y: -55.302
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: -55.302
        },
        t: {
          x: 302.4,
          y: -58.913
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: -58.913
        },
        t: {
          x: 285.6,
          y: -69.601
        },
        m: .249,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: -69.601
        },
        t: {
          x: 268.8,
          y: -87.109
        },
        m: .303,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: -87.109
        },
        t: {
          x: 252,
          y: -110.913
        },
        m: .364,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: -110.913
        },
        t: {
          x: 235.2,
          y: -140.238
        },
        m: .422,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: -140.238
        },
        t: {
          x: 218.4,
          y: -174.094
        },
        m: .472,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: -174.094
        },
        t: {
          x: 201.6,
          y: -211.312
        },
        m: .51,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: -211.312
        },
        t: {
          x: 184.8,
          y: -250.587
        },
        m: .534,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: -250.587
        },
        t: {
          x: 168,
          y: -290.538
        },
        m: .542,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: -290.538
        },
        t: {
          x: 151.2,
          y: -329.753
        },
        m: .533,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: -329.753
        },
        t: {
          x: 134.4,
          y: -366.851
        },
        m: .509,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: -366.851
        },
        t: {
          x: 117.6,
          y: -400.535
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: -400.535
        },
        t: {
          x: 100.8,
          y: -429.641
        },
        m: .42,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: -429.641
        },
        t: {
          x: 84,
          y: -453.187
        },
        m: .362,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: -453.187
        },
        t: {
          x: 67.2,
          y: -470.41
        },
        m: .301,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: -470.41
        },
        t: {
          x: 50.4,
          y: -480.795
        },
        m: .247,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: -480.795
        },
        t: {
          x: 33.6,
          y: -484.1
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: -484.1
        },
        t: {
          x: 16.8,
          y: -480.359
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: -480.359
        },
        t: {
          x: 0,
          y: -469.885
        },
        m: .247,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: -469.885
        },
        t: {
          x: -16.8,
          y: -453.258
        },
        m: .295,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: -453.258
        },
        t: {
          x: -33.6,
          y: -431.299
        },
        m: .346,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: -431.299
        },
        t: {
          x: -50.4,
          y: -405.04
        },
        m: .39,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: -405.04
        },
        t: {
          x: -67.2,
          y: -375.682
        },
        m: .423,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: -375.682
        },
        t: {
          x: -84,
          y: -344.55
        },
        m: .442,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: -344.55
        },
        t: {
          x: -100.8,
          y: -313.037
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: -313.037
        },
        t: {
          x: -117.6,
          y: -282.551
        },
        m: .435,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: -282.551
        },
        t: {
          x: -134.4,
          y: -254.462
        },
        m: .409,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: -254.462
        },
        t: {
          x: -151.2,
          y: -230.043
        },
        m: .37,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: -230.043
        },
        t: {
          x: -168,
          y: -210.422
        },
        m: .323,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: -210.422
        },
        t: {
          x: -184.8,
          y: -196.54
        },
        m: .272,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: -196.54
        },
        t: {
          x: -201.6,
          y: -189.11
        },
        m: .23,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: -189.11
        },
        t: {
          x: -218.4,
          y: -188.591
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: -188.591
        },
        t: {
          x: -235.2,
          y: -195.169
        },
        m: .226,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: -195.169
        },
        t: {
          x: -252,
          y: -208.749
        },
        m: .27,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: -208.749
        },
        t: {
          x: -268.8,
          y: -228.963
        },
        m: .329,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: -228.963
        },
        t: {
          x: -285.6,
          y: -255.178
        },
        m: .389,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: -255.178
        },
        t: {
          x: -302.4,
          y: -286.526
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: -286.526
        },
        t: {
          x: -319.2,
          y: -321.935
        },
        m: .49,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: -321.935
        },
        t: {
          x: -336,
          y: -360.176
        },
        m: .522,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: -360.176
        },
        t: {
          x: -352.8,
          y: -399.904
        },
        m: .539,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: -399.904
        },
        t: {
          x: -369.6,
          y: -439.719
        },
        m: .54,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: -439.719
        },
        t: {
          x: -386.4,
          y: -478.215
        },
        m: .525,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: -478.215
        },
        t: {
          x: -403.2,
          y: -514.039
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: -514.039
        },
        t: {
          x: -420,
          y: -545.945
        },
        m: .451,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: -545.945
        },
        t: {
          x: -436.8,
          y: -572.839
        },
        m: .396,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: -572.839
        },
        t: {
          x: -453.6,
          y: -593.825
        },
        m: .336,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: -593.825
        },
        t: {
          x: -470.4,
          y: -608.242
        },
        m: .277,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: -608.242
        },
        t: {
          x: -487.2,
          y: -615.687
        },
        m: .23,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: -615.687
        },
        t: {
          x: -504,
          y: -616.031
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: -616.031
        },
        t: {
          x: -520.8,
          y: -609.427
        },
        m: .226,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: -609.427
        },
        t: {
          x: -537.6,
          y: -596.301
        },
        m: .266,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: -596.301
        },
        t: {
          x: -554.4,
          y: -577.336
        },
        m: .317,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: -577.336
        },
        t: {
          x: -571.2,
          y: -553.447
        },
        m: .365,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: -553.447
        },
        t: {
          x: -588,
          y: -525.74
        },
        m: .405,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: -525.74
        },
        t: {
          x: -604.8,
          y: -495.476
        },
        m: .433,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: -495.476
        },
        t: {
          x: -621.6,
          y: -464.013
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: -464.013
        },
        t: {
          x: -638.4,
          y: -432.758
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: -432.758
        },
        t: {
          x: -655.2,
          y: -403.111
        },
        m: .426,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: -403.111
        },
        t: {
          x: -672,
          y: -376.405
        },
        m: .394,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: -376.405
        },
        t: {
          x: -688.8,
          y: -353.861
        },
        m: .351,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: -353.861
        },
        t: {
          x: -705.6,
          y: -336.533
        },
        m: .302,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: -336.533
        },
        t: {
          x: -722.4,
          y: -325.271
        },
        m: .253,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: -325.271
        },
        t: {
          x: -739.2,
          y: -320.684
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: -320.684
        },
        t: {
          x: -756,
          y: -323.119
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: -323.119
        },
        t: {
          x: -772.8,
          y: -332.647
        },
        m: .241,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: -332.647
        },
        t: {
          x: -789.6,
          y: -349.055
        },
        m: .294,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: -349.055
        },
        t: {
          x: -806.4,
          y: -371.864
        },
        m: .354,
        r: .85,
        d: 0
      }, {
        i: 98,
        f: {
          x: -806.4,
          y: -371.864
        },
        t: {
          x: -828.367,
          y: -407.256
        },
        m: .521,
        r: .85,
        d: 0
      }, {
        i: 99,
        f: {
          x: -828.367,
          y: -407.256
        },
        t: {
          x: -863.758,
          y: -453.631
        },
        m: .729,
        r: .85,
        d: 0
      }, {
        i: 100,
        f: {
          x: -863.758,
          y: -453.631
        },
        t: {
          x: -901.59,
          y: -510.989
        },
        m: .859,
        r: .85,
        d: 0
      }, {
        i: 101,
        f: {
          x: -901.59,
          y: -510.989
        },
        t: {
          x: -1500,
          y: -609.841
        },
        m: 7.581,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -496.17,
          y: 1500
        },
        t: {
          x: -479.37,
          y: 383.25
        },
        m: 13.961,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -479.37,
          y: 383.25
        },
        t: {
          x: -462.57,
          y: 368.539
        },
        m: .279,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -462.57,
          y: 368.539
        },
        t: {
          x: -445.77,
          y: 347.282
        },
        m: .339,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -445.77,
          y: 347.282
        },
        t: {
          x: -428.97,
          y: 320.152
        },
        m: .399,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -428.97,
          y: 320.152
        },
        t: {
          x: -412.17,
          y: 288.053
        },
        m: .453,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -412.17,
          y: 288.053
        },
        t: {
          x: -395.37,
          y: 252.086
        },
        m: .496,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -395.37,
          y: 252.086
        },
        t: {
          x: -378.57,
          y: 213.505
        },
        m: .526,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -378.57,
          y: 213.505
        },
        t: {
          x: -361.77,
          y: 173.665
        },
        m: .54,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -361.77,
          y: 173.665
        },
        t: {
          x: -344.97,
          y: 133.972
        },
        m: .539,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -344.97,
          y: 133.972
        },
        t: {
          x: -328.17,
          y: 95.827
        },
        m: .521,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -328.17,
          y: 95.827
        },
        t: {
          x: -311.37,
          y: 60.568
        },
        m: .488,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -311.37,
          y: 60.568
        },
        t: {
          x: -294.57,
          y: 29.421
        },
        m: .442,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -294.57,
          y: 29.421
        },
        t: {
          x: -277.77,
          y: 3.449
        },
        m: .387,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -277.77,
          y: 3.449
        },
        t: {
          x: -260.97,
          y: -16.49
        },
        m: .326,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -260.97,
          y: -16.49
        },
        t: {
          x: -244.17,
          y: -29.774
        },
        m: .268,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -244.17,
          y: -29.774
        },
        t: {
          x: -227.37,
          y: -36.045
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -227.37,
          y: -36.045
        },
        t: {
          x: -210.57,
          y: -35.222
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -210.57,
          y: -35.222
        },
        t: {
          x: -193.77,
          y: -27.502
        },
        m: .231,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -193.77,
          y: -27.502
        },
        t: {
          x: -176.97,
          y: -13.356
        },
        m: .275,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -176.97,
          y: -13.356
        },
        t: {
          x: -160.17,
          y: 6.493
        },
        m: .325,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -160.17,
          y: 6.493
        },
        t: {
          x: -143.37,
          y: 31.095
        },
        m: .372,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -143.37,
          y: 31.095
        },
        t: {
          x: -126.57,
          y: 59.315
        },
        m: .411,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -126.57,
          y: 59.315
        },
        t: {
          x: -109.77,
          y: 89.873
        },
        m: .436,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -109.77,
          y: 89.873
        },
        t: {
          x: -92.97,
          y: 121.399
        },
        m: .447,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -92.97,
          y: 121.399
        },
        t: {
          x: -76.17,
          y: 152.484
        },
        m: .442,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -76.17,
          y: 152.484
        },
        t: {
          x: -59.37,
          y: 181.734
        },
        m: .422,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -59.37,
          y: 181.734
        },
        t: {
          x: -42.57,
          y: 207.832
        },
        m: .388,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -42.57,
          y: 207.832
        },
        t: {
          x: -25.77,
          y: 229.581
        },
        m: .344,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -25.77,
          y: 229.581
        },
        t: {
          x: -8.97,
          y: 245.957
        },
        m: .293,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -8.97,
          y: 245.957
        },
        t: {
          x: 7.83,
          y: 256.15
        },
        m: .246,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: 7.83,
          y: 256.15
        },
        t: {
          x: 24.63,
          y: 259.592
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: 24.63,
          y: 259.592
        },
        t: {
          x: 41.43,
          y: 255.98
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: 41.43,
          y: 255.98
        },
        t: {
          x: 58.23,
          y: 245.292
        },
        m: .249,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: 58.23,
          y: 245.292
        },
        t: {
          x: 75.03,
          y: 227.784
        },
        m: .303,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: 75.03,
          y: 227.784
        },
        t: {
          x: 91.83,
          y: 203.981
        },
        m: .364,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: 91.83,
          y: 203.981
        },
        t: {
          x: 108.63,
          y: 174.655
        },
        m: .422,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: 108.63,
          y: 174.655
        },
        t: {
          x: 125.43,
          y: 140.799
        },
        m: .472,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: 125.43,
          y: 140.799
        },
        t: {
          x: 142.23,
          y: 103.582
        },
        m: .51,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: 142.23,
          y: 103.582
        },
        t: {
          x: 159.03,
          y: 64.306
        },
        m: .534,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: 159.03,
          y: 64.306
        },
        t: {
          x: 175.83,
          y: 24.356
        },
        m: .542,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: 175.83,
          y: 24.356
        },
        t: {
          x: 192.63,
          y: -14.859
        },
        m: .533,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: 192.63,
          y: -14.859
        },
        t: {
          x: 209.43,
          y: -51.958
        },
        m: .509,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: 209.43,
          y: -51.958
        },
        t: {
          x: 226.23,
          y: -85.641
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: 226.23,
          y: -85.641
        },
        t: {
          x: 243.03,
          y: -114.747
        },
        m: .42,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: 243.03,
          y: -114.747
        },
        t: {
          x: 259.83,
          y: -138.293
        },
        m: .362,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: 259.83,
          y: -138.293
        },
        t: {
          x: 276.63,
          y: -155.516
        },
        m: .301,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: 276.63,
          y: -155.516
        },
        t: {
          x: 293.43,
          y: -165.902
        },
        m: .247,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: 293.43,
          y: -165.902
        },
        t: {
          x: 310.23,
          y: -169.206
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: 310.23,
          y: -169.206
        },
        t: {
          x: 327.03,
          y: -165.465
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: 327.03,
          y: -165.465
        },
        t: {
          x: 343.83,
          y: -154.992
        },
        m: .247,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 343.83,
          y: -154.992
        },
        t: {
          x: 360.63,
          y: -138.365
        },
        m: .295,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 360.63,
          y: -138.365
        },
        t: {
          x: 377.43,
          y: -116.406
        },
        m: .346,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 377.43,
          y: -116.406
        },
        t: {
          x: 394.23,
          y: -90.146
        },
        m: .39,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 394.23,
          y: -90.146
        },
        t: {
          x: 411.03,
          y: -60.789
        },
        m: .423,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 411.03,
          y: -60.789
        },
        t: {
          x: 427.83,
          y: -29.656
        },
        m: .442,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 427.83,
          y: -29.656
        },
        t: {
          x: 444.63,
          y: 1.857
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 444.63,
          y: 1.857
        },
        t: {
          x: 461.43,
          y: 32.342
        },
        m: .435,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 461.43,
          y: 32.342
        },
        t: {
          x: 478.23,
          y: 60.432
        },
        m: .409,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 478.23,
          y: 60.432
        },
        t: {
          x: 495.03,
          y: 84.851
        },
        m: .37,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 495.03,
          y: 84.851
        },
        t: {
          x: 511.83,
          y: 104.471
        },
        m: .323,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 511.83,
          y: 104.471
        },
        t: {
          x: 528.63,
          y: 118.353
        },
        m: .272,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 528.63,
          y: 118.353
        },
        t: {
          x: 545.43,
          y: 125.783
        },
        m: .23,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 545.43,
          y: 125.783
        },
        t: {
          x: 562.23,
          y: 126.302
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 562.23,
          y: 126.302
        },
        t: {
          x: 579.03,
          y: 119.725
        },
        m: .226,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 579.03,
          y: 119.725
        },
        t: {
          x: 595.83,
          y: 106.144
        },
        m: .27,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 595.83,
          y: 106.144
        },
        t: {
          x: 612.63,
          y: 85.931
        },
        m: .329,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 612.63,
          y: 85.931
        },
        t: {
          x: 629.43,
          y: 59.716
        },
        m: .389,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 629.43,
          y: 59.716
        },
        t: {
          x: 646.23,
          y: 28.368
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 646.23,
          y: 28.368
        },
        t: {
          x: 663.03,
          y: -7.042
        },
        m: .49,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 663.03,
          y: -7.042
        },
        t: {
          x: 679.83,
          y: -45.282
        },
        m: .522,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 679.83,
          y: -45.282
        },
        t: {
          x: 696.63,
          y: -85.01
        },
        m: .539,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 696.63,
          y: -85.01
        },
        t: {
          x: 713.43,
          y: -124.825
        },
        m: .54,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 713.43,
          y: -124.825
        },
        t: {
          x: 730.23,
          y: -163.321
        },
        m: .525,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 730.23,
          y: -163.321
        },
        t: {
          x: 747.03,
          y: -199.146
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 747.03,
          y: -199.146
        },
        t: {
          x: 763.83,
          y: -231.051
        },
        m: .451,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 763.83,
          y: -231.051
        },
        t: {
          x: 780.63,
          y: -257.945
        },
        m: .396,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 780.63,
          y: -257.945
        },
        t: {
          x: 797.43,
          y: -278.931
        },
        m: .336,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 797.43,
          y: -278.931
        },
        t: {
          x: 814.23,
          y: -293.349
        },
        m: .277,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 814.23,
          y: -293.349
        },
        t: {
          x: 831.03,
          y: -300.793
        },
        m: .23,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 831.03,
          y: -300.793
        },
        t: {
          x: 847.83,
          y: -301.138
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 847.83,
          y: -301.138
        },
        t: {
          x: 864.63,
          y: -294.534
        },
        m: .226,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 864.63,
          y: -294.534
        },
        t: {
          x: 881.43,
          y: -281.408
        },
        m: .266,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 881.43,
          y: -281.408
        },
        t: {
          x: 898.23,
          y: -262.443
        },
        m: .317,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 898.23,
          y: -262.443
        },
        t: {
          x: 915.03,
          y: -238.553
        },
        m: .365,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 915.03,
          y: -238.553
        },
        t: {
          x: 931.83,
          y: -210.847
        },
        m: .405,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 931.83,
          y: -210.847
        },
        t: {
          x: 948.63,
          y: -180.582
        },
        m: .433,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 948.63,
          y: -180.582
        },
        t: {
          x: 965.43,
          y: -149.119
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 965.43,
          y: -149.119
        },
        t: {
          x: 982.23,
          y: -117.865
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 982.23,
          y: -117.865
        },
        t: {
          x: 999.03,
          y: -88.217
        },
        m: .426,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 999.03,
          y: -88.217
        },
        t: {
          x: 1015.83,
          y: -61.512
        },
        m: .394,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 1015.83,
          y: -61.512
        },
        t: {
          x: 1032.63,
          y: -38.967
        },
        m: .351,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 1032.63,
          y: -38.967
        },
        t: {
          x: 1049.43,
          y: -21.639
        },
        m: .302,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 1049.43,
          y: -21.639
        },
        t: {
          x: 1066.23,
          y: -10.377
        },
        m: .253,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 1066.23,
          y: -10.377
        },
        t: {
          x: 1083.03,
          y: -5.79
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 1083.03,
          y: -5.79
        },
        t: {
          x: 1099.83,
          y: -8.226
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 1099.83,
          y: -8.226
        },
        t: {
          x: 1116.63,
          y: -17.753
        },
        m: .241,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 1116.63,
          y: -17.753
        },
        t: {
          x: 1133.43,
          y: -34.162
        },
        m: .294,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 1133.43,
          y: -34.162
        },
        t: {
          x: 1150.23,
          y: -56.971
        },
        m: .354,
        r: .85,
        d: 1
      }, {
        i: 98,
        f: {
          x: 1150.23,
          y: -56.971
        },
        t: {
          x: 1172.197,
          y: -92.362
        },
        m: .521,
        r: .85,
        d: 1
      }, {
        i: 99,
        f: {
          x: 1172.197,
          y: -92.362
        },
        t: {
          x: 1207.588,
          y: -138.737
        },
        m: .729,
        r: .85,
        d: 1
      }, {
        i: 100,
        f: {
          x: 1207.588,
          y: -138.737
        },
        t: {
          x: 1245.42,
          y: -196.095
        },
        m: .859,
        r: .85,
        d: 1
      }, {
        i: 101,
        f: {
          x: 1245.42,
          y: -196.095
        },
        t: {
          x: 1500,
          y: -294.947
        },
        m: 3.414,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 496.17,
          y: 1500
        },
        t: {
          x: 479.37,
          y: 383.25
        },
        m: 13.961,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 479.37,
          y: 383.25
        },
        t: {
          x: 462.57,
          y: 368.539
        },
        m: .279,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 462.57,
          y: 368.539
        },
        t: {
          x: 445.77,
          y: 347.282
        },
        m: .339,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 445.77,
          y: 347.282
        },
        t: {
          x: 428.97,
          y: 320.152
        },
        m: .399,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 428.97,
          y: 320.152
        },
        t: {
          x: 412.17,
          y: 288.053
        },
        m: .453,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 412.17,
          y: 288.053
        },
        t: {
          x: 395.37,
          y: 252.086
        },
        m: .496,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 395.37,
          y: 252.086
        },
        t: {
          x: 378.57,
          y: 213.505
        },
        m: .526,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 378.57,
          y: 213.505
        },
        t: {
          x: 361.77,
          y: 173.665
        },
        m: .54,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 361.77,
          y: 173.665
        },
        t: {
          x: 344.97,
          y: 133.972
        },
        m: .539,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 344.97,
          y: 133.972
        },
        t: {
          x: 328.17,
          y: 95.827
        },
        m: .521,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 328.17,
          y: 95.827
        },
        t: {
          x: 311.37,
          y: 60.568
        },
        m: .488,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 311.37,
          y: 60.568
        },
        t: {
          x: 294.57,
          y: 29.421
        },
        m: .442,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 294.57,
          y: 29.421
        },
        t: {
          x: 277.77,
          y: 3.449
        },
        m: .387,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 277.77,
          y: 3.449
        },
        t: {
          x: 260.97,
          y: -16.49
        },
        m: .326,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 260.97,
          y: -16.49
        },
        t: {
          x: 244.17,
          y: -29.774
        },
        m: .268,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 244.17,
          y: -29.774
        },
        t: {
          x: 227.37,
          y: -36.045
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 227.37,
          y: -36.045
        },
        t: {
          x: 210.57,
          y: -35.222
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 210.57,
          y: -35.222
        },
        t: {
          x: 193.77,
          y: -27.502
        },
        m: .231,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 193.77,
          y: -27.502
        },
        t: {
          x: 176.97,
          y: -13.356
        },
        m: .275,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 176.97,
          y: -13.356
        },
        t: {
          x: 160.17,
          y: 6.493
        },
        m: .325,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 160.17,
          y: 6.493
        },
        t: {
          x: 143.37,
          y: 31.095
        },
        m: .372,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 143.37,
          y: 31.095
        },
        t: {
          x: 126.57,
          y: 59.315
        },
        m: .411,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 126.57,
          y: 59.315
        },
        t: {
          x: 109.77,
          y: 89.873
        },
        m: .436,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 109.77,
          y: 89.873
        },
        t: {
          x: 92.97,
          y: 121.399
        },
        m: .447,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 92.97,
          y: 121.399
        },
        t: {
          x: 76.17,
          y: 152.484
        },
        m: .442,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 76.17,
          y: 152.484
        },
        t: {
          x: 59.37,
          y: 181.734
        },
        m: .422,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 59.37,
          y: 181.734
        },
        t: {
          x: 42.57,
          y: 207.832
        },
        m: .388,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 42.57,
          y: 207.832
        },
        t: {
          x: 25.77,
          y: 229.581
        },
        m: .344,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 25.77,
          y: 229.581
        },
        t: {
          x: 8.97,
          y: 245.957
        },
        m: .293,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 8.97,
          y: 245.957
        },
        t: {
          x: -7.83,
          y: 256.15
        },
        m: .246,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: -7.83,
          y: 256.15
        },
        t: {
          x: -24.63,
          y: 259.592
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: -24.63,
          y: 259.592
        },
        t: {
          x: -41.43,
          y: 255.98
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: -41.43,
          y: 255.98
        },
        t: {
          x: -58.23,
          y: 245.292
        },
        m: .249,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: -58.23,
          y: 245.292
        },
        t: {
          x: -75.03,
          y: 227.784
        },
        m: .303,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: -75.03,
          y: 227.784
        },
        t: {
          x: -91.83,
          y: 203.981
        },
        m: .364,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: -91.83,
          y: 203.981
        },
        t: {
          x: -108.63,
          y: 174.655
        },
        m: .422,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: -108.63,
          y: 174.655
        },
        t: {
          x: -125.43,
          y: 140.799
        },
        m: .472,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: -125.43,
          y: 140.799
        },
        t: {
          x: -142.23,
          y: 103.582
        },
        m: .51,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: -142.23,
          y: 103.582
        },
        t: {
          x: -159.03,
          y: 64.306
        },
        m: .534,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: -159.03,
          y: 64.306
        },
        t: {
          x: -175.83,
          y: 24.356
        },
        m: .542,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: -175.83,
          y: 24.356
        },
        t: {
          x: -192.63,
          y: -14.859
        },
        m: .533,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: -192.63,
          y: -14.859
        },
        t: {
          x: -209.43,
          y: -51.958
        },
        m: .509,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: -209.43,
          y: -51.958
        },
        t: {
          x: -226.23,
          y: -85.641
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: -226.23,
          y: -85.641
        },
        t: {
          x: -243.03,
          y: -114.747
        },
        m: .42,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: -243.03,
          y: -114.747
        },
        t: {
          x: -259.83,
          y: -138.293
        },
        m: .362,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: -259.83,
          y: -138.293
        },
        t: {
          x: -276.63,
          y: -155.516
        },
        m: .301,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: -276.63,
          y: -155.516
        },
        t: {
          x: -293.43,
          y: -165.902
        },
        m: .247,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: -293.43,
          y: -165.902
        },
        t: {
          x: -310.23,
          y: -169.206
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: -310.23,
          y: -169.206
        },
        t: {
          x: -327.03,
          y: -165.465
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: -327.03,
          y: -165.465
        },
        t: {
          x: -343.83,
          y: -154.992
        },
        m: .247,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: -343.83,
          y: -154.992
        },
        t: {
          x: -360.63,
          y: -138.365
        },
        m: .295,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -360.63,
          y: -138.365
        },
        t: {
          x: -377.43,
          y: -116.406
        },
        m: .346,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -377.43,
          y: -116.406
        },
        t: {
          x: -394.23,
          y: -90.146
        },
        m: .39,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -394.23,
          y: -90.146
        },
        t: {
          x: -411.03,
          y: -60.789
        },
        m: .423,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -411.03,
          y: -60.789
        },
        t: {
          x: -427.83,
          y: -29.656
        },
        m: .442,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -427.83,
          y: -29.656
        },
        t: {
          x: -444.63,
          y: 1.857
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -444.63,
          y: 1.857
        },
        t: {
          x: -461.43,
          y: 32.342
        },
        m: .435,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -461.43,
          y: 32.342
        },
        t: {
          x: -478.23,
          y: 60.432
        },
        m: .409,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -478.23,
          y: 60.432
        },
        t: {
          x: -495.03,
          y: 84.851
        },
        m: .37,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -495.03,
          y: 84.851
        },
        t: {
          x: -511.83,
          y: 104.471
        },
        m: .323,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -511.83,
          y: 104.471
        },
        t: {
          x: -528.63,
          y: 118.353
        },
        m: .272,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -528.63,
          y: 118.353
        },
        t: {
          x: -545.43,
          y: 125.783
        },
        m: .23,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -545.43,
          y: 125.783
        },
        t: {
          x: -562.23,
          y: 126.302
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -562.23,
          y: 126.302
        },
        t: {
          x: -579.03,
          y: 119.725
        },
        m: .226,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -579.03,
          y: 119.725
        },
        t: {
          x: -595.83,
          y: 106.144
        },
        m: .27,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -595.83,
          y: 106.144
        },
        t: {
          x: -612.63,
          y: 85.931
        },
        m: .329,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -612.63,
          y: 85.931
        },
        t: {
          x: -629.43,
          y: 59.716
        },
        m: .389,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -629.43,
          y: 59.716
        },
        t: {
          x: -646.23,
          y: 28.368
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -646.23,
          y: 28.368
        },
        t: {
          x: -663.03,
          y: -7.042
        },
        m: .49,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -663.03,
          y: -7.042
        },
        t: {
          x: -679.83,
          y: -45.282
        },
        m: .522,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -679.83,
          y: -45.282
        },
        t: {
          x: -696.63,
          y: -85.01
        },
        m: .539,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -696.63,
          y: -85.01
        },
        t: {
          x: -713.43,
          y: -124.825
        },
        m: .54,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -713.43,
          y: -124.825
        },
        t: {
          x: -730.23,
          y: -163.321
        },
        m: .525,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -730.23,
          y: -163.321
        },
        t: {
          x: -747.03,
          y: -199.146
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -747.03,
          y: -199.146
        },
        t: {
          x: -763.83,
          y: -231.051
        },
        m: .451,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -763.83,
          y: -231.051
        },
        t: {
          x: -780.63,
          y: -257.945
        },
        m: .396,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -780.63,
          y: -257.945
        },
        t: {
          x: -797.43,
          y: -278.931
        },
        m: .336,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -797.43,
          y: -278.931
        },
        t: {
          x: -814.23,
          y: -293.349
        },
        m: .277,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -814.23,
          y: -293.349
        },
        t: {
          x: -831.03,
          y: -300.793
        },
        m: .23,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -831.03,
          y: -300.793
        },
        t: {
          x: -847.83,
          y: -301.138
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -847.83,
          y: -301.138
        },
        t: {
          x: -864.63,
          y: -294.534
        },
        m: .226,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -864.63,
          y: -294.534
        },
        t: {
          x: -881.43,
          y: -281.408
        },
        m: .266,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -881.43,
          y: -281.408
        },
        t: {
          x: -898.23,
          y: -262.443
        },
        m: .317,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -898.23,
          y: -262.443
        },
        t: {
          x: -915.03,
          y: -238.553
        },
        m: .365,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -915.03,
          y: -238.553
        },
        t: {
          x: -931.83,
          y: -210.847
        },
        m: .405,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -931.83,
          y: -210.847
        },
        t: {
          x: -948.63,
          y: -180.582
        },
        m: .433,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -948.63,
          y: -180.582
        },
        t: {
          x: -965.43,
          y: -149.119
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -965.43,
          y: -149.119
        },
        t: {
          x: -982.23,
          y: -117.865
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -982.23,
          y: -117.865
        },
        t: {
          x: -999.03,
          y: -88.217
        },
        m: .426,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -999.03,
          y: -88.217
        },
        t: {
          x: -1015.83,
          y: -61.512
        },
        m: .394,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -1015.83,
          y: -61.512
        },
        t: {
          x: -1032.63,
          y: -38.967
        },
        m: .351,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -1032.63,
          y: -38.967
        },
        t: {
          x: -1049.43,
          y: -21.639
        },
        m: .302,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -1049.43,
          y: -21.639
        },
        t: {
          x: -1066.23,
          y: -10.377
        },
        m: .253,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -1066.23,
          y: -10.377
        },
        t: {
          x: -1083.03,
          y: -5.79
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -1083.03,
          y: -5.79
        },
        t: {
          x: -1099.83,
          y: -8.226
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -1099.83,
          y: -8.226
        },
        t: {
          x: -1116.63,
          y: -17.753
        },
        m: .241,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -1116.63,
          y: -17.753
        },
        t: {
          x: -1133.43,
          y: -34.162
        },
        m: .294,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -1133.43,
          y: -34.162
        },
        t: {
          x: -1150.23,
          y: -56.971
        },
        m: .354,
        r: .85,
        d: 0
      }, {
        i: 98,
        f: {
          x: -1150.23,
          y: -56.971
        },
        t: {
          x: -1172.197,
          y: -92.362
        },
        m: .521,
        r: .85,
        d: 0
      }, {
        i: 99,
        f: {
          x: -1172.197,
          y: -92.362
        },
        t: {
          x: -1207.588,
          y: -138.737
        },
        m: .729,
        r: .85,
        d: 0
      }, {
        i: 100,
        f: {
          x: -1207.588,
          y: -138.737
        },
        t: {
          x: -1245.42,
          y: -196.095
        },
        m: .859,
        r: .85,
        d: 0
      }, {
        i: 101,
        f: {
          x: -1245.42,
          y: -196.095
        },
        t: {
          x: -1500,
          y: -294.947
        },
        m: 3.414,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -176.17,
          y: 1500
        },
        t: {
          x: -159.37,
          y: 383.25
        },
        m: 13.961,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -159.37,
          y: 383.25
        },
        t: {
          x: -142.57,
          y: 368.539
        },
        m: .279,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -142.57,
          y: 368.539
        },
        t: {
          x: -125.77,
          y: 347.282
        },
        m: .339,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -125.77,
          y: 347.282
        },
        t: {
          x: -108.97,
          y: 320.152
        },
        m: .399,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -108.97,
          y: 320.152
        },
        t: {
          x: -92.17,
          y: 288.053
        },
        m: .453,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -92.17,
          y: 288.053
        },
        t: {
          x: -75.37,
          y: 252.086
        },
        m: .496,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -75.37,
          y: 252.086
        },
        t: {
          x: -58.57,
          y: 213.505
        },
        m: .526,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -58.57,
          y: 213.505
        },
        t: {
          x: -41.77,
          y: 173.665
        },
        m: .54,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -41.77,
          y: 173.665
        },
        t: {
          x: -24.97,
          y: 133.972
        },
        m: .539,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -24.97,
          y: 133.972
        },
        t: {
          x: -8.17,
          y: 95.827
        },
        m: .521,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -8.17,
          y: 95.827
        },
        t: {
          x: 8.63,
          y: 60.568
        },
        m: .488,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: 8.63,
          y: 60.568
        },
        t: {
          x: 25.43,
          y: 29.421
        },
        m: .442,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: 25.43,
          y: 29.421
        },
        t: {
          x: 42.23,
          y: 3.449
        },
        m: .387,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: 42.23,
          y: 3.449
        },
        t: {
          x: 59.03,
          y: -16.49
        },
        m: .326,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: 59.03,
          y: -16.49
        },
        t: {
          x: 75.83,
          y: -29.774
        },
        m: .268,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: 75.83,
          y: -29.774
        },
        t: {
          x: 92.63,
          y: -36.045
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: 92.63,
          y: -36.045
        },
        t: {
          x: 109.43,
          y: -35.222
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: 109.43,
          y: -35.222
        },
        t: {
          x: 126.23,
          y: -27.502
        },
        m: .231,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: 126.23,
          y: -27.502
        },
        t: {
          x: 143.03,
          y: -13.356
        },
        m: .275,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: 143.03,
          y: -13.356
        },
        t: {
          x: 159.83,
          y: 6.493
        },
        m: .325,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: 159.83,
          y: 6.493
        },
        t: {
          x: 176.63,
          y: 31.095
        },
        m: .372,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: 176.63,
          y: 31.095
        },
        t: {
          x: 193.43,
          y: 59.315
        },
        m: .411,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: 193.43,
          y: 59.315
        },
        t: {
          x: 210.23,
          y: 89.873
        },
        m: .436,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: 210.23,
          y: 89.873
        },
        t: {
          x: 227.03,
          y: 121.399
        },
        m: .447,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: 227.03,
          y: 121.399
        },
        t: {
          x: 243.83,
          y: 152.484
        },
        m: .442,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: 243.83,
          y: 152.484
        },
        t: {
          x: 260.63,
          y: 181.734
        },
        m: .422,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: 260.63,
          y: 181.734
        },
        t: {
          x: 277.43,
          y: 207.832
        },
        m: .388,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: 277.43,
          y: 207.832
        },
        t: {
          x: 294.23,
          y: 229.581
        },
        m: .344,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: 294.23,
          y: 229.581
        },
        t: {
          x: 311.03,
          y: 245.957
        },
        m: .293,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: 311.03,
          y: 245.957
        },
        t: {
          x: 327.83,
          y: 256.15
        },
        m: .246,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: 327.83,
          y: 256.15
        },
        t: {
          x: 344.63,
          y: 259.592
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: 344.63,
          y: 259.592
        },
        t: {
          x: 361.43,
          y: 255.98
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: 361.43,
          y: 255.98
        },
        t: {
          x: 378.23,
          y: 245.292
        },
        m: .249,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: 378.23,
          y: 245.292
        },
        t: {
          x: 395.03,
          y: 227.784
        },
        m: .303,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: 395.03,
          y: 227.784
        },
        t: {
          x: 411.83,
          y: 203.981
        },
        m: .364,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: 411.83,
          y: 203.981
        },
        t: {
          x: 428.63,
          y: 174.655
        },
        m: .422,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: 428.63,
          y: 174.655
        },
        t: {
          x: 445.43,
          y: 140.799
        },
        m: .472,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: 445.43,
          y: 140.799
        },
        t: {
          x: 462.23,
          y: 103.582
        },
        m: .51,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: 462.23,
          y: 103.582
        },
        t: {
          x: 479.03,
          y: 64.306
        },
        m: .534,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: 479.03,
          y: 64.306
        },
        t: {
          x: 495.83,
          y: 24.356
        },
        m: .542,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: 495.83,
          y: 24.356
        },
        t: {
          x: 512.63,
          y: -14.859
        },
        m: .533,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: 512.63,
          y: -14.859
        },
        t: {
          x: 529.43,
          y: -51.958
        },
        m: .509,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: 529.43,
          y: -51.958
        },
        t: {
          x: 546.23,
          y: -85.641
        },
        m: .471,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: 546.23,
          y: -85.641
        },
        t: {
          x: 563.03,
          y: -114.747
        },
        m: .42,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: 563.03,
          y: -114.747
        },
        t: {
          x: 579.83,
          y: -138.293
        },
        m: .362,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: 579.83,
          y: -138.293
        },
        t: {
          x: 596.63,
          y: -155.516
        },
        m: .301,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: 596.63,
          y: -155.516
        },
        t: {
          x: 613.43,
          y: -165.902
        },
        m: .247,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: 613.43,
          y: -165.902
        },
        t: {
          x: 630.23,
          y: -169.206
        },
        m: .214,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: 630.23,
          y: -169.206
        },
        t: {
          x: 647.03,
          y: -165.465
        },
        m: .215,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: 647.03,
          y: -165.465
        },
        t: {
          x: 663.83,
          y: -154.992
        },
        m: .247,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 663.83,
          y: -154.992
        },
        t: {
          x: 680.63,
          y: -138.365
        },
        m: .295,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 680.63,
          y: -138.365
        },
        t: {
          x: 697.43,
          y: -116.406
        },
        m: .346,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 697.43,
          y: -116.406
        },
        t: {
          x: 714.23,
          y: -90.146
        },
        m: .39,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 714.23,
          y: -90.146
        },
        t: {
          x: 731.03,
          y: -60.789
        },
        m: .423,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 731.03,
          y: -60.789
        },
        t: {
          x: 747.83,
          y: -29.656
        },
        m: .442,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 747.83,
          y: -29.656
        },
        t: {
          x: 764.63,
          y: 1.857
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 764.63,
          y: 1.857
        },
        t: {
          x: 781.43,
          y: 32.342
        },
        m: .435,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 781.43,
          y: 32.342
        },
        t: {
          x: 798.23,
          y: 60.432
        },
        m: .409,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 798.23,
          y: 60.432
        },
        t: {
          x: 815.03,
          y: 84.851
        },
        m: .37,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 815.03,
          y: 84.851
        },
        t: {
          x: 831.83,
          y: 104.471
        },
        m: .323,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 831.83,
          y: 104.471
        },
        t: {
          x: 848.63,
          y: 118.353
        },
        m: .272,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 848.63,
          y: 118.353
        },
        t: {
          x: 865.43,
          y: 125.783
        },
        m: .23,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 865.43,
          y: 125.783
        },
        t: {
          x: 882.23,
          y: 126.302
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 882.23,
          y: 126.302
        },
        t: {
          x: 899.03,
          y: 119.725
        },
        m: .226,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 899.03,
          y: 119.725
        },
        t: {
          x: 915.83,
          y: 106.144
        },
        m: .27,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 915.83,
          y: 106.144
        },
        t: {
          x: 932.63,
          y: 85.931
        },
        m: .329,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 932.63,
          y: 85.931
        },
        t: {
          x: 949.43,
          y: 59.716
        },
        m: .389,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 949.43,
          y: 59.716
        },
        t: {
          x: 966.23,
          y: 28.368
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 966.23,
          y: 28.368
        },
        t: {
          x: 983.03,
          y: -7.042
        },
        m: .49,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 983.03,
          y: -7.042
        },
        t: {
          x: 999.83,
          y: -45.282
        },
        m: .522,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 999.83,
          y: -45.282
        },
        t: {
          x: 1016.63,
          y: -85.01
        },
        m: .539,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 1016.63,
          y: -85.01
        },
        t: {
          x: 1033.43,
          y: -124.825
        },
        m: .54,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 1033.43,
          y: -124.825
        },
        t: {
          x: 1050.23,
          y: -163.321
        },
        m: .525,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 1050.23,
          y: -163.321
        },
        t: {
          x: 1067.03,
          y: -199.146
        },
        m: .495,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 1067.03,
          y: -199.146
        },
        t: {
          x: 1083.83,
          y: -231.051
        },
        m: .451,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 1083.83,
          y: -231.051
        },
        t: {
          x: 1100.63,
          y: -257.945
        },
        m: .396,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 1100.63,
          y: -257.945
        },
        t: {
          x: 1117.43,
          y: -278.931
        },
        m: .336,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 1117.43,
          y: -278.931
        },
        t: {
          x: 1134.23,
          y: -293.349
        },
        m: .277,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 1134.23,
          y: -293.349
        },
        t: {
          x: 1151.03,
          y: -300.793
        },
        m: .23,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 1151.03,
          y: -300.793
        },
        t: {
          x: 1167.83,
          y: -301.138
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 1167.83,
          y: -301.138
        },
        t: {
          x: 1184.63,
          y: -294.534
        },
        m: .226,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 1184.63,
          y: -294.534
        },
        t: {
          x: 1201.43,
          y: -281.408
        },
        m: .266,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 1201.43,
          y: -281.408
        },
        t: {
          x: 1218.23,
          y: -262.443
        },
        m: .317,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 1218.23,
          y: -262.443
        },
        t: {
          x: 1235.03,
          y: -238.553
        },
        m: .365,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 1235.03,
          y: -238.553
        },
        t: {
          x: 1251.83,
          y: -210.847
        },
        m: .405,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 1251.83,
          y: -210.847
        },
        t: {
          x: 1268.63,
          y: -180.582
        },
        m: .433,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 1268.63,
          y: -180.582
        },
        t: {
          x: 1285.43,
          y: -149.119
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 1285.43,
          y: -149.119
        },
        t: {
          x: 1302.23,
          y: -117.865
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 1302.23,
          y: -117.865
        },
        t: {
          x: 1319.03,
          y: -88.217
        },
        m: .426,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 1319.03,
          y: -88.217
        },
        t: {
          x: 1335.83,
          y: -61.512
        },
        m: .394,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 1335.83,
          y: -61.512
        },
        t: {
          x: 1352.63,
          y: -38.967
        },
        m: .351,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 1352.63,
          y: -38.967
        },
        t: {
          x: 1369.43,
          y: -21.639
        },
        m: .302,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 1369.43,
          y: -21.639
        },
        t: {
          x: 1386.23,
          y: -10.377
        },
        m: .253,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 1386.23,
          y: -10.377
        },
        t: {
          x: 1403.03,
          y: -5.79
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 1403.03,
          y: -5.79
        },
        t: {
          x: 1419.83,
          y: -8.226
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 1419.83,
          y: -8.226
        },
        t: {
          x: 1436.63,
          y: -17.753
        },
        m: .241,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 1436.63,
          y: -17.753
        },
        t: {
          x: 1453.43,
          y: -34.162
        },
        m: .294,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 1453.43,
          y: -34.162
        },
        t: {
          x: 1470.23,
          y: -56.971
        },
        m: .354,
        r: .85,
        d: 1
      }, {
        i: 98,
        f: {
          x: 1470.23,
          y: -56.971
        },
        t: {
          x: 1492.197,
          y: -92.362
        },
        m: .521,
        r: .85,
        d: 1
      }, {
        i: 99,
        f: {
          x: 1492.197,
          y: -92.362
        },
        t: {
          x: 1527.588,
          y: -138.737
        },
        m: .729,
        r: .85,
        d: 1
      }, {
        i: 100,
        f: {
          x: 1527.588,
          y: -138.737
        },
        t: {
          x: 1565.42,
          y: -196.095
        },
        m: .859,
        r: .85,
        d: 1
      }, {
        i: 101,
        f: {
          x: 1565.42,
          y: -196.095
        },
        t: {
          x: 2e3,
          y: -294.947
        },
        m: 5.571,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 176.17,
          y: 1500
        },
        t: {
          x: 159.37,
          y: 383.25
        },
        m: 13.961,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 159.37,
          y: 383.25
        },
        t: {
          x: 142.57,
          y: 368.539
        },
        m: .279,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 142.57,
          y: 368.539
        },
        t: {
          x: 125.77,
          y: 347.282
        },
        m: .339,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 125.77,
          y: 347.282
        },
        t: {
          x: 108.97,
          y: 320.152
        },
        m: .399,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 108.97,
          y: 320.152
        },
        t: {
          x: 92.17,
          y: 288.053
        },
        m: .453,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 92.17,
          y: 288.053
        },
        t: {
          x: 75.37,
          y: 252.086
        },
        m: .496,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 75.37,
          y: 252.086
        },
        t: {
          x: 58.57,
          y: 213.505
        },
        m: .526,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 58.57,
          y: 213.505
        },
        t: {
          x: 41.77,
          y: 173.665
        },
        m: .54,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 41.77,
          y: 173.665
        },
        t: {
          x: 24.97,
          y: 133.972
        },
        m: .539,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 24.97,
          y: 133.972
        },
        t: {
          x: 8.17,
          y: 95.827
        },
        m: .521,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 8.17,
          y: 95.827
        },
        t: {
          x: -8.63,
          y: 60.568
        },
        m: .488,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: -8.63,
          y: 60.568
        },
        t: {
          x: -25.43,
          y: 29.421
        },
        m: .442,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: -25.43,
          y: 29.421
        },
        t: {
          x: -42.23,
          y: 3.449
        },
        m: .387,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: -42.23,
          y: 3.449
        },
        t: {
          x: -59.03,
          y: -16.49
        },
        m: .326,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: -59.03,
          y: -16.49
        },
        t: {
          x: -75.83,
          y: -29.774
        },
        m: .268,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: -75.83,
          y: -29.774
        },
        t: {
          x: -92.63,
          y: -36.045
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: -92.63,
          y: -36.045
        },
        t: {
          x: -109.43,
          y: -35.222
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: -109.43,
          y: -35.222
        },
        t: {
          x: -126.23,
          y: -27.502
        },
        m: .231,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: -126.23,
          y: -27.502
        },
        t: {
          x: -143.03,
          y: -13.356
        },
        m: .275,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: -143.03,
          y: -13.356
        },
        t: {
          x: -159.83,
          y: 6.493
        },
        m: .325,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: -159.83,
          y: 6.493
        },
        t: {
          x: -176.63,
          y: 31.095
        },
        m: .372,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: -176.63,
          y: 31.095
        },
        t: {
          x: -193.43,
          y: 59.315
        },
        m: .411,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: -193.43,
          y: 59.315
        },
        t: {
          x: -210.23,
          y: 89.873
        },
        m: .436,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: -210.23,
          y: 89.873
        },
        t: {
          x: -227.03,
          y: 121.399
        },
        m: .447,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: -227.03,
          y: 121.399
        },
        t: {
          x: -243.83,
          y: 152.484
        },
        m: .442,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: -243.83,
          y: 152.484
        },
        t: {
          x: -260.63,
          y: 181.734
        },
        m: .422,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: -260.63,
          y: 181.734
        },
        t: {
          x: -277.43,
          y: 207.832
        },
        m: .388,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: -277.43,
          y: 207.832
        },
        t: {
          x: -294.23,
          y: 229.581
        },
        m: .344,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: -294.23,
          y: 229.581
        },
        t: {
          x: -311.03,
          y: 245.957
        },
        m: .293,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: -311.03,
          y: 245.957
        },
        t: {
          x: -327.83,
          y: 256.15
        },
        m: .246,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: -327.83,
          y: 256.15
        },
        t: {
          x: -344.63,
          y: 259.592
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: -344.63,
          y: 259.592
        },
        t: {
          x: -361.43,
          y: 255.98
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: -361.43,
          y: 255.98
        },
        t: {
          x: -378.23,
          y: 245.292
        },
        m: .249,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: -378.23,
          y: 245.292
        },
        t: {
          x: -395.03,
          y: 227.784
        },
        m: .303,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: -395.03,
          y: 227.784
        },
        t: {
          x: -411.83,
          y: 203.981
        },
        m: .364,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: -411.83,
          y: 203.981
        },
        t: {
          x: -428.63,
          y: 174.655
        },
        m: .422,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: -428.63,
          y: 174.655
        },
        t: {
          x: -445.43,
          y: 140.799
        },
        m: .472,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: -445.43,
          y: 140.799
        },
        t: {
          x: -462.23,
          y: 103.582
        },
        m: .51,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: -462.23,
          y: 103.582
        },
        t: {
          x: -479.03,
          y: 64.306
        },
        m: .534,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: -479.03,
          y: 64.306
        },
        t: {
          x: -495.83,
          y: 24.356
        },
        m: .542,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: -495.83,
          y: 24.356
        },
        t: {
          x: -512.63,
          y: -14.859
        },
        m: .533,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: -512.63,
          y: -14.859
        },
        t: {
          x: -529.43,
          y: -51.958
        },
        m: .509,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: -529.43,
          y: -51.958
        },
        t: {
          x: -546.23,
          y: -85.641
        },
        m: .471,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: -546.23,
          y: -85.641
        },
        t: {
          x: -563.03,
          y: -114.747
        },
        m: .42,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: -563.03,
          y: -114.747
        },
        t: {
          x: -579.83,
          y: -138.293
        },
        m: .362,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: -579.83,
          y: -138.293
        },
        t: {
          x: -596.63,
          y: -155.516
        },
        m: .301,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: -596.63,
          y: -155.516
        },
        t: {
          x: -613.43,
          y: -165.902
        },
        m: .247,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: -613.43,
          y: -165.902
        },
        t: {
          x: -630.23,
          y: -169.206
        },
        m: .214,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: -630.23,
          y: -169.206
        },
        t: {
          x: -647.03,
          y: -165.465
        },
        m: .215,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: -647.03,
          y: -165.465
        },
        t: {
          x: -663.83,
          y: -154.992
        },
        m: .247,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: -663.83,
          y: -154.992
        },
        t: {
          x: -680.63,
          y: -138.365
        },
        m: .295,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -680.63,
          y: -138.365
        },
        t: {
          x: -697.43,
          y: -116.406
        },
        m: .346,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -697.43,
          y: -116.406
        },
        t: {
          x: -714.23,
          y: -90.146
        },
        m: .39,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -714.23,
          y: -90.146
        },
        t: {
          x: -731.03,
          y: -60.789
        },
        m: .423,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -731.03,
          y: -60.789
        },
        t: {
          x: -747.83,
          y: -29.656
        },
        m: .442,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -747.83,
          y: -29.656
        },
        t: {
          x: -764.63,
          y: 1.857
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -764.63,
          y: 1.857
        },
        t: {
          x: -781.43,
          y: 32.342
        },
        m: .435,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -781.43,
          y: 32.342
        },
        t: {
          x: -798.23,
          y: 60.432
        },
        m: .409,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -798.23,
          y: 60.432
        },
        t: {
          x: -815.03,
          y: 84.851
        },
        m: .37,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -815.03,
          y: 84.851
        },
        t: {
          x: -831.83,
          y: 104.471
        },
        m: .323,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -831.83,
          y: 104.471
        },
        t: {
          x: -848.63,
          y: 118.353
        },
        m: .272,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -848.63,
          y: 118.353
        },
        t: {
          x: -865.43,
          y: 125.783
        },
        m: .23,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -865.43,
          y: 125.783
        },
        t: {
          x: -882.23,
          y: 126.302
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -882.23,
          y: 126.302
        },
        t: {
          x: -899.03,
          y: 119.725
        },
        m: .226,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -899.03,
          y: 119.725
        },
        t: {
          x: -915.83,
          y: 106.144
        },
        m: .27,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -915.83,
          y: 106.144
        },
        t: {
          x: -932.63,
          y: 85.931
        },
        m: .329,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -932.63,
          y: 85.931
        },
        t: {
          x: -949.43,
          y: 59.716
        },
        m: .389,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -949.43,
          y: 59.716
        },
        t: {
          x: -966.23,
          y: 28.368
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -966.23,
          y: 28.368
        },
        t: {
          x: -983.03,
          y: -7.042
        },
        m: .49,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -983.03,
          y: -7.042
        },
        t: {
          x: -999.83,
          y: -45.282
        },
        m: .522,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -999.83,
          y: -45.282
        },
        t: {
          x: -1016.63,
          y: -85.01
        },
        m: .539,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -1016.63,
          y: -85.01
        },
        t: {
          x: -1033.43,
          y: -124.825
        },
        m: .54,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -1033.43,
          y: -124.825
        },
        t: {
          x: -1050.23,
          y: -163.321
        },
        m: .525,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -1050.23,
          y: -163.321
        },
        t: {
          x: -1067.03,
          y: -199.146
        },
        m: .495,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -1067.03,
          y: -199.146
        },
        t: {
          x: -1083.83,
          y: -231.051
        },
        m: .451,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -1083.83,
          y: -231.051
        },
        t: {
          x: -1100.63,
          y: -257.945
        },
        m: .396,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -1100.63,
          y: -257.945
        },
        t: {
          x: -1117.43,
          y: -278.931
        },
        m: .336,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -1117.43,
          y: -278.931
        },
        t: {
          x: -1134.23,
          y: -293.349
        },
        m: .277,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -1134.23,
          y: -293.349
        },
        t: {
          x: -1151.03,
          y: -300.793
        },
        m: .23,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -1151.03,
          y: -300.793
        },
        t: {
          x: -1167.83,
          y: -301.138
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -1167.83,
          y: -301.138
        },
        t: {
          x: -1184.63,
          y: -294.534
        },
        m: .226,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -1184.63,
          y: -294.534
        },
        t: {
          x: -1201.43,
          y: -281.408
        },
        m: .266,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -1201.43,
          y: -281.408
        },
        t: {
          x: -1218.23,
          y: -262.443
        },
        m: .317,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -1218.23,
          y: -262.443
        },
        t: {
          x: -1235.03,
          y: -238.553
        },
        m: .365,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -1235.03,
          y: -238.553
        },
        t: {
          x: -1251.83,
          y: -210.847
        },
        m: .405,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -1251.83,
          y: -210.847
        },
        t: {
          x: -1268.63,
          y: -180.582
        },
        m: .433,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -1268.63,
          y: -180.582
        },
        t: {
          x: -1285.43,
          y: -149.119
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -1285.43,
          y: -149.119
        },
        t: {
          x: -1302.23,
          y: -117.865
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -1302.23,
          y: -117.865
        },
        t: {
          x: -1319.03,
          y: -88.217
        },
        m: .426,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -1319.03,
          y: -88.217
        },
        t: {
          x: -1335.83,
          y: -61.512
        },
        m: .394,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -1335.83,
          y: -61.512
        },
        t: {
          x: -1352.63,
          y: -38.967
        },
        m: .351,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -1352.63,
          y: -38.967
        },
        t: {
          x: -1369.43,
          y: -21.639
        },
        m: .302,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -1369.43,
          y: -21.639
        },
        t: {
          x: -1386.23,
          y: -10.377
        },
        m: .253,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -1386.23,
          y: -10.377
        },
        t: {
          x: -1403.03,
          y: -5.79
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -1403.03,
          y: -5.79
        },
        t: {
          x: -1419.83,
          y: -8.226
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -1419.83,
          y: -8.226
        },
        t: {
          x: -1436.63,
          y: -17.753
        },
        m: .241,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -1436.63,
          y: -17.753
        },
        t: {
          x: -1453.43,
          y: -34.162
        },
        m: .294,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -1453.43,
          y: -34.162
        },
        t: {
          x: -1470.23,
          y: -56.971
        },
        m: .354,
        r: .85,
        d: 0
      }, {
        i: 98,
        f: {
          x: -1470.23,
          y: -56.971
        },
        t: {
          x: -1492.197,
          y: -92.362
        },
        m: .521,
        r: .85,
        d: 0
      }, {
        i: 99,
        f: {
          x: -1492.197,
          y: -92.362
        },
        t: {
          x: -1527.588,
          y: -138.737
        },
        m: .729,
        r: .85,
        d: 0
      }, {
        i: 100,
        f: {
          x: -1527.588,
          y: -138.737
        },
        t: {
          x: -1565.42,
          y: -196.095
        },
        m: .859,
        r: .85,
        d: 0
      }, {
        i: 101,
        f: {
          x: -1565.42,
          y: -196.095
        },
        t: {
          x: -2e3,
          y: -294.947
        },
        m: 5.571,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: -29
        },
        t: {
          x: -823.2,
          y: -28.35
        },
        m: 8.46,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: -28.35
        },
        t: {
          x: -806.4,
          y: -34.661
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: -34.661
        },
        t: {
          x: -789.6,
          y: -47.518
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: -47.518
        },
        t: {
          x: -772.8,
          y: -66.248
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: -66.248
        },
        t: {
          x: -756,
          y: -89.947
        },
        m: .363,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: -89.947
        },
        t: {
          x: -739.2,
          y: -117.514
        },
        m: .404,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: -117.514
        },
        t: {
          x: -722.4,
          y: -147.695
        },
        m: .432,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: -147.695
        },
        t: {
          x: -705.6,
          y: -179.135
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: -179.135
        },
        t: {
          x: -688.8,
          y: -210.428
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: -210.428
        },
        t: {
          x: -672,
          y: -240.173
        },
        m: .427,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: -240.173
        },
        t: {
          x: -655.2,
          y: -267.032
        },
        m: .396,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: -267.032
        },
        t: {
          x: -638.4,
          y: -289.779
        },
        m: .353,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: -289.779
        },
        t: {
          x: -621.6,
          y: -307.351
        },
        m: .304,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: -307.351
        },
        t: {
          x: -604.8,
          y: -318.89
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: -318.89
        },
        t: {
          x: -588,
          y: -323.774
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: -323.774
        },
        t: {
          x: -571.2,
          y: -321.645
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: -321.645
        },
        t: {
          x: -554.4,
          y: -312.422
        },
        m: .24,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: -312.422
        },
        t: {
          x: -537.6,
          y: -296.302
        },
        m: .291,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: -296.302
        },
        t: {
          x: -520.8,
          y: -273.756
        },
        m: .351,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: -273.756
        },
        t: {
          x: -504,
          y: -245.507
        },
        m: .411,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: -245.507
        },
        t: {
          x: -487.2,
          y: -212.505
        },
        m: .463,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: -212.505
        },
        t: {
          x: -470.4,
          y: -175.885
        },
        m: .504,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: -175.885
        },
        t: {
          x: -453.6,
          y: -136.927
        },
        m: .53,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: -136.927
        },
        t: {
          x: -436.8,
          y: -97.001
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: -97.001
        },
        t: {
          x: -420,
          y: -57.516
        },
        m: .536,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: -57.516
        },
        t: {
          x: -403.2,
          y: -19.866
        },
        m: .515,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: -19.866
        },
        t: {
          x: -386.4,
          y: 14.632
        },
        m: .48,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: 14.632
        },
        t: {
          x: -369.6,
          y: 44.781
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: 44.781
        },
        t: {
          x: -352.8,
          y: 69.557
        },
        m: .374,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: 69.557
        },
        t: {
          x: -336,
          y: 88.15
        },
        m: .313,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: 88.15
        },
        t: {
          x: -319.2,
          y: 99.992
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: 99.992
        },
        t: {
          x: -302.4,
          y: 104.78
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: 104.78
        },
        t: {
          x: -285.6,
          y: 102.492
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: 102.492
        },
        t: {
          x: -268.8,
          y: 93.384
        },
        m: .239,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: 93.384
        },
        t: {
          x: -252,
          y: 77.981
        },
        m: .285,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: 77.981
        },
        t: {
          x: -235.2,
          y: 57.055
        },
        m: .335,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: 57.055
        },
        t: {
          x: -218.4,
          y: 31.599
        },
        m: .381,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: 31.599
        },
        t: {
          x: -201.6,
          y: 2.782
        },
        m: .417,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: 2.782
        },
        t: {
          x: -184.8,
          y: -28.094
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: -28.094
        },
        t: {
          x: -168,
          y: -59.644
        },
        m: .447,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: -59.644
        },
        t: {
          x: -151.2,
          y: -90.459
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: -90.459
        },
        t: {
          x: -134.4,
          y: -119.158
        },
        m: .416,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: -119.158
        },
        t: {
          x: -117.6,
          y: -144.441
        },
        m: .379,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: -144.441
        },
        t: {
          x: -100.8,
          y: -165.147
        },
        m: .333,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: -165.147
        },
        t: {
          x: -84,
          y: -180.293
        },
        m: .283,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: -180.293
        },
        t: {
          x: -67.2,
          y: -189.116
        },
        m: .237,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: -189.116
        },
        t: {
          x: -50.4,
          y: -191.102
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: -191.102
        },
        t: {
          x: -33.6,
          y: -186.006
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: -186.006
        },
        t: {
          x: -16.8,
          y: -173.865
        },
        m: .259,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: -173.865
        },
        t: {
          x: 0,
          y: -154.992
        },
        m: .316,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: -154.992
        },
        t: {
          x: 16.8,
          y: -129.965
        },
        m: .377,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: -129.965
        },
        t: {
          x: 33.6,
          y: -99.606
        },
        m: .434,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: -99.606
        },
        t: {
          x: 50.4,
          y: -64.946
        },
        m: .481,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: -64.946
        },
        t: {
          x: 67.2,
          y: -27.189
        },
        m: .517,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: -27.189
        },
        t: {
          x: 84,
          y: 12.344
        },
        m: .537,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: 12.344
        },
        t: {
          x: 100.8,
          y: 52.257
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: 52.257
        },
        t: {
          x: 117.6,
          y: 91.142
        },
        m: .529,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: 91.142
        },
        t: {
          x: 134.4,
          y: 127.632
        },
        m: .502,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: 127.632
        },
        t: {
          x: 151.2,
          y: 160.451
        },
        m: .461,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: 160.451
        },
        t: {
          x: 168,
          y: 188.471
        },
        m: .408,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: 188.471
        },
        t: {
          x: 184.8,
          y: 210.753
        },
        m: .349,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: 210.753
        },
        t: {
          x: 201.6,
          y: 226.583
        },
        m: .289,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: 226.583
        },
        t: {
          x: 218.4,
          y: 235.502
        },
        m: .238,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: 235.502
        },
        t: {
          x: 235.2,
          y: 237.325
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: 237.325
        },
        t: {
          x: 252,
          y: 232.144
        },
        m: .22,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: 232.144
        },
        t: {
          x: 268.8,
          y: 220.331
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: 220.331
        },
        t: {
          x: 285.6,
          y: 202.516
        },
        m: .306,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: 202.516
        },
        t: {
          x: 302.4,
          y: 179.568
        },
        m: .356,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: 179.568
        },
        t: {
          x: 319.2,
          y: 152.558
        },
        m: .398,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: 152.558
        },
        t: {
          x: 336,
          y: 122.718
        },
        m: .428,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: 122.718
        },
        t: {
          x: 352.8,
          y: 91.39
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: 91.39
        },
        t: {
          x: 369.6,
          y: 59.975
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: 59.975
        },
        t: {
          x: 386.4,
          y: 29.879
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: 29.879
        },
        t: {
          x: 403.2,
          y: 2.454
        },
        m: .402,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: 2.454
        },
        t: {
          x: 420,
          y: -21.051
        },
        m: .361,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: -21.051
        },
        t: {
          x: 436.8,
          y: -39.545
        },
        m: .312,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: -39.545
        },
        t: {
          x: 453.6,
          y: -52.131
        },
        m: .262,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: -52.131
        },
        t: {
          x: 470.4,
          y: -58.149
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: -58.149
        },
        t: {
          x: 487.2,
          y: -57.193
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: -57.193
        },
        t: {
          x: 504,
          y: -49.138
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: -49.138
        },
        t: {
          x: 520.8,
          y: -34.134
        },
        m: .282,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: -34.134
        },
        t: {
          x: 537.6,
          y: -12.608
        },
        m: .341,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: -12.608
        },
        t: {
          x: 554.4,
          y: 14.757
        },
        m: .401,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: 14.757
        },
        t: {
          x: 571.2,
          y: 47.047
        },
        m: .455,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: 47.047
        },
        t: {
          x: 588,
          y: 83.153
        },
        m: .498,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: 83.153
        },
        t: {
          x: 604.8,
          y: 121.818
        },
        m: .527,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: 121.818
        },
        t: {
          x: 621.6,
          y: 161.681
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: 161.681
        },
        t: {
          x: 638.4,
          y: 201.335
        },
        m: .538,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: 201.335
        },
        t: {
          x: 655.2,
          y: 239.383
        },
        m: .52,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: 239.383
        },
        t: {
          x: 672,
          y: 274.488
        },
        m: .486,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: 274.488
        },
        t: {
          x: 688.8,
          y: 305.433
        },
        m: .44,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: 305.433
        },
        t: {
          x: 705.6,
          y: 331.161
        },
        m: .384,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: 331.161
        },
        t: {
          x: 722.4,
          y: 350.823
        },
        m: .323,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: 350.823
        },
        t: {
          x: 739.2,
          y: 363.81
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: 363.81
        },
        t: {
          x: 756,
          y: 369.774
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: 369.774
        },
        t: {
          x: 772.8,
          y: 368.647
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: 368.647
        },
        t: {
          x: 789.6,
          y: 360.638
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: 360.638
        },
        t: {
          x: 806.4,
          y: 346.229
        },
        m: .277,
        r: .85,
        d: 1
      }, {
        i: 98,
        f: {
          x: 806.4,
          y: 346.229
        },
        t: {
          x: 826.826,
          y: 327.506
        },
        m: .346,
        r: .85,
        d: 1
      }, {
        i: 99,
        f: {
          x: 826.826,
          y: 327.506
        },
        t: {
          x: 852.357,
          y: 290.059
        },
        m: .567,
        r: .85,
        d: 1
      }, {
        i: 100,
        f: {
          x: 852.357,
          y: 290.059
        },
        t: {
          x: 1500,
          y: 244.102
        },
        m: 8.116,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: -29
        },
        t: {
          x: 823.2,
          y: -28.35
        },
        m: 8.46,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: -28.35
        },
        t: {
          x: 806.4,
          y: -34.661
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: -34.661
        },
        t: {
          x: 789.6,
          y: -47.518
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: -47.518
        },
        t: {
          x: 772.8,
          y: -66.248
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: -66.248
        },
        t: {
          x: 756,
          y: -89.947
        },
        m: .363,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: -89.947
        },
        t: {
          x: 739.2,
          y: -117.514
        },
        m: .404,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: -117.514
        },
        t: {
          x: 722.4,
          y: -147.695
        },
        m: .432,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: -147.695
        },
        t: {
          x: 705.6,
          y: -179.135
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: -179.135
        },
        t: {
          x: 688.8,
          y: -210.428
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: -210.428
        },
        t: {
          x: 672,
          y: -240.173
        },
        m: .427,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: -240.173
        },
        t: {
          x: 655.2,
          y: -267.032
        },
        m: .396,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: -267.032
        },
        t: {
          x: 638.4,
          y: -289.779
        },
        m: .353,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: -289.779
        },
        t: {
          x: 621.6,
          y: -307.351
        },
        m: .304,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: -307.351
        },
        t: {
          x: 604.8,
          y: -318.89
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: -318.89
        },
        t: {
          x: 588,
          y: -323.774
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: -323.774
        },
        t: {
          x: 571.2,
          y: -321.645
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: -321.645
        },
        t: {
          x: 554.4,
          y: -312.422
        },
        m: .24,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: -312.422
        },
        t: {
          x: 537.6,
          y: -296.302
        },
        m: .291,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: -296.302
        },
        t: {
          x: 520.8,
          y: -273.756
        },
        m: .351,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: -273.756
        },
        t: {
          x: 504,
          y: -245.507
        },
        m: .411,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: -245.507
        },
        t: {
          x: 487.2,
          y: -212.505
        },
        m: .463,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: -212.505
        },
        t: {
          x: 470.4,
          y: -175.885
        },
        m: .504,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: -175.885
        },
        t: {
          x: 453.6,
          y: -136.927
        },
        m: .53,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: -136.927
        },
        t: {
          x: 436.8,
          y: -97.001
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: -97.001
        },
        t: {
          x: 420,
          y: -57.516
        },
        m: .536,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: -57.516
        },
        t: {
          x: 403.2,
          y: -19.866
        },
        m: .515,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: -19.866
        },
        t: {
          x: 386.4,
          y: 14.632
        },
        m: .48,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: 14.632
        },
        t: {
          x: 369.6,
          y: 44.781
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: 44.781
        },
        t: {
          x: 352.8,
          y: 69.557
        },
        m: .374,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: 69.557
        },
        t: {
          x: 336,
          y: 88.15
        },
        m: .313,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: 88.15
        },
        t: {
          x: 319.2,
          y: 99.992
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: 99.992
        },
        t: {
          x: 302.4,
          y: 104.78
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: 104.78
        },
        t: {
          x: 285.6,
          y: 102.492
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: 102.492
        },
        t: {
          x: 268.8,
          y: 93.384
        },
        m: .239,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: 93.384
        },
        t: {
          x: 252,
          y: 77.981
        },
        m: .285,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: 77.981
        },
        t: {
          x: 235.2,
          y: 57.055
        },
        m: .335,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: 57.055
        },
        t: {
          x: 218.4,
          y: 31.599
        },
        m: .381,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: 31.599
        },
        t: {
          x: 201.6,
          y: 2.782
        },
        m: .417,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: 2.782
        },
        t: {
          x: 184.8,
          y: -28.094
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: -28.094
        },
        t: {
          x: 168,
          y: -59.644
        },
        m: .447,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: -59.644
        },
        t: {
          x: 151.2,
          y: -90.459
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: -90.459
        },
        t: {
          x: 134.4,
          y: -119.158
        },
        m: .416,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: -119.158
        },
        t: {
          x: 117.6,
          y: -144.441
        },
        m: .379,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: -144.441
        },
        t: {
          x: 100.8,
          y: -165.147
        },
        m: .333,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: -165.147
        },
        t: {
          x: 84,
          y: -180.293
        },
        m: .283,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: -180.293
        },
        t: {
          x: 67.2,
          y: -189.116
        },
        m: .237,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: -189.116
        },
        t: {
          x: 50.4,
          y: -191.102
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: -191.102
        },
        t: {
          x: 33.6,
          y: -186.006
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: -186.006
        },
        t: {
          x: 16.8,
          y: -173.865
        },
        m: .259,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: -173.865
        },
        t: {
          x: 0,
          y: -154.992
        },
        m: .316,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: -154.992
        },
        t: {
          x: -16.8,
          y: -129.965
        },
        m: .377,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: -129.965
        },
        t: {
          x: -33.6,
          y: -99.606
        },
        m: .434,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: -99.606
        },
        t: {
          x: -50.4,
          y: -64.946
        },
        m: .481,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: -64.946
        },
        t: {
          x: -67.2,
          y: -27.189
        },
        m: .517,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: -27.189
        },
        t: {
          x: -84,
          y: 12.344
        },
        m: .537,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: 12.344
        },
        t: {
          x: -100.8,
          y: 52.257
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: 52.257
        },
        t: {
          x: -117.6,
          y: 91.142
        },
        m: .529,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: 91.142
        },
        t: {
          x: -134.4,
          y: 127.632
        },
        m: .502,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: 127.632
        },
        t: {
          x: -151.2,
          y: 160.451
        },
        m: .461,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: 160.451
        },
        t: {
          x: -168,
          y: 188.471
        },
        m: .408,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: 188.471
        },
        t: {
          x: -184.8,
          y: 210.753
        },
        m: .349,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: 210.753
        },
        t: {
          x: -201.6,
          y: 226.583
        },
        m: .289,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: 226.583
        },
        t: {
          x: -218.4,
          y: 235.502
        },
        m: .238,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: 235.502
        },
        t: {
          x: -235.2,
          y: 237.325
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: 237.325
        },
        t: {
          x: -252,
          y: 232.144
        },
        m: .22,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: 232.144
        },
        t: {
          x: -268.8,
          y: 220.331
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: 220.331
        },
        t: {
          x: -285.6,
          y: 202.516
        },
        m: .306,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: 202.516
        },
        t: {
          x: -302.4,
          y: 179.568
        },
        m: .356,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: 179.568
        },
        t: {
          x: -319.2,
          y: 152.558
        },
        m: .398,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: 152.558
        },
        t: {
          x: -336,
          y: 122.718
        },
        m: .428,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: 122.718
        },
        t: {
          x: -352.8,
          y: 91.39
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: 91.39
        },
        t: {
          x: -369.6,
          y: 59.975
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: 59.975
        },
        t: {
          x: -386.4,
          y: 29.879
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: 29.879
        },
        t: {
          x: -403.2,
          y: 2.454
        },
        m: .402,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: 2.454
        },
        t: {
          x: -420,
          y: -21.051
        },
        m: .361,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: -21.051
        },
        t: {
          x: -436.8,
          y: -39.545
        },
        m: .312,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: -39.545
        },
        t: {
          x: -453.6,
          y: -52.131
        },
        m: .262,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: -52.131
        },
        t: {
          x: -470.4,
          y: -58.149
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: -58.149
        },
        t: {
          x: -487.2,
          y: -57.193
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: -57.193
        },
        t: {
          x: -504,
          y: -49.138
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: -49.138
        },
        t: {
          x: -520.8,
          y: -34.134
        },
        m: .282,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: -34.134
        },
        t: {
          x: -537.6,
          y: -12.608
        },
        m: .341,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: -12.608
        },
        t: {
          x: -554.4,
          y: 14.757
        },
        m: .401,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: 14.757
        },
        t: {
          x: -571.2,
          y: 47.047
        },
        m: .455,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: 47.047
        },
        t: {
          x: -588,
          y: 83.153
        },
        m: .498,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: 83.153
        },
        t: {
          x: -604.8,
          y: 121.818
        },
        m: .527,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: 121.818
        },
        t: {
          x: -621.6,
          y: 161.681
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: 161.681
        },
        t: {
          x: -638.4,
          y: 201.335
        },
        m: .538,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: 201.335
        },
        t: {
          x: -655.2,
          y: 239.383
        },
        m: .52,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: 239.383
        },
        t: {
          x: -672,
          y: 274.488
        },
        m: .486,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: 274.488
        },
        t: {
          x: -688.8,
          y: 305.433
        },
        m: .44,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: 305.433
        },
        t: {
          x: -705.6,
          y: 331.161
        },
        m: .384,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: 331.161
        },
        t: {
          x: -722.4,
          y: 350.823
        },
        m: .323,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: 350.823
        },
        t: {
          x: -739.2,
          y: 363.81
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: 363.81
        },
        t: {
          x: -756,
          y: 369.774
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: 369.774
        },
        t: {
          x: -772.8,
          y: 368.647
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: 368.647
        },
        t: {
          x: -789.6,
          y: 360.638
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: 360.638
        },
        t: {
          x: -806.4,
          y: 346.229
        },
        m: .277,
        r: .85,
        d: 0
      }, {
        i: 98,
        f: {
          x: -806.4,
          y: 346.229
        },
        t: {
          x: -826.826,
          y: 327.506
        },
        m: .346,
        r: .85,
        d: 0
      }, {
        i: 99,
        f: {
          x: -826.826,
          y: 327.506
        },
        t: {
          x: -852.357,
          y: 290.059
        },
        m: .567,
        r: .85,
        d: 0
      }, {
        i: 100,
        f: {
          x: -852.357,
          y: 290.059
        },
        t: {
          x: -1500,
          y: 244.102
        },
        m: 8.116,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: 246.043
        },
        t: {
          x: -823.2,
          y: 246.693
        },
        m: 8.46,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: 246.693
        },
        t: {
          x: -806.4,
          y: 240.382
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: 240.382
        },
        t: {
          x: -789.6,
          y: 227.525
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: 227.525
        },
        t: {
          x: -772.8,
          y: 208.795
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: 208.795
        },
        t: {
          x: -756,
          y: 185.096
        },
        m: .363,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: 185.096
        },
        t: {
          x: -739.2,
          y: 157.529
        },
        m: .404,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: 157.529
        },
        t: {
          x: -722.4,
          y: 127.348
        },
        m: .432,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: 127.348
        },
        t: {
          x: -705.6,
          y: 95.908
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: 95.908
        },
        t: {
          x: -688.8,
          y: 64.615
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: 64.615
        },
        t: {
          x: -672,
          y: 34.87
        },
        m: .427,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: 34.87
        },
        t: {
          x: -655.2,
          y: 8.011
        },
        m: .396,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: 8.011
        },
        t: {
          x: -638.4,
          y: -14.736
        },
        m: .353,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: -14.736
        },
        t: {
          x: -621.6,
          y: -32.308
        },
        m: .304,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: -32.308
        },
        t: {
          x: -604.8,
          y: -43.847
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: -43.847
        },
        t: {
          x: -588,
          y: -48.731
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: -48.731
        },
        t: {
          x: -571.2,
          y: -46.602
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: -46.602
        },
        t: {
          x: -554.4,
          y: -37.379
        },
        m: .24,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: -37.379
        },
        t: {
          x: -537.6,
          y: -21.259
        },
        m: .291,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: -21.259
        },
        t: {
          x: -520.8,
          y: 1.287
        },
        m: .351,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: 1.287
        },
        t: {
          x: -504,
          y: 29.536
        },
        m: .411,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: 29.536
        },
        t: {
          x: -487.2,
          y: 62.538
        },
        m: .463,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: 62.538
        },
        t: {
          x: -470.4,
          y: 99.158
        },
        m: .504,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: 99.158
        },
        t: {
          x: -453.6,
          y: 138.116
        },
        m: .53,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: 138.116
        },
        t: {
          x: -436.8,
          y: 178.042
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: 178.042
        },
        t: {
          x: -420,
          y: 217.527
        },
        m: .536,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: 217.527
        },
        t: {
          x: -403.2,
          y: 255.177
        },
        m: .515,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: 255.177
        },
        t: {
          x: -386.4,
          y: 289.675
        },
        m: .48,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: 289.675
        },
        t: {
          x: -369.6,
          y: 319.823
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: 319.823
        },
        t: {
          x: -352.8,
          y: 344.6
        },
        m: .374,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: 344.6
        },
        t: {
          x: -336,
          y: 363.193
        },
        m: .313,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: 363.193
        },
        t: {
          x: -319.2,
          y: 375.035
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: 375.035
        },
        t: {
          x: -302.4,
          y: 379.823
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: 379.823
        },
        t: {
          x: -285.6,
          y: 377.535
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: 377.535
        },
        t: {
          x: -268.8,
          y: 368.427
        },
        m: .239,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: 368.427
        },
        t: {
          x: -252,
          y: 353.024
        },
        m: .285,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: 353.024
        },
        t: {
          x: -235.2,
          y: 332.098
        },
        m: .335,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: 332.098
        },
        t: {
          x: -218.4,
          y: 306.642
        },
        m: .381,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: 306.642
        },
        t: {
          x: -201.6,
          y: 277.825
        },
        m: .417,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: 277.825
        },
        t: {
          x: -184.8,
          y: 246.949
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: 246.949
        },
        t: {
          x: -168,
          y: 215.399
        },
        m: .447,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: 215.399
        },
        t: {
          x: -151.2,
          y: 184.584
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: 184.584
        },
        t: {
          x: -134.4,
          y: 155.885
        },
        m: .416,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: 155.885
        },
        t: {
          x: -117.6,
          y: 130.602
        },
        m: .379,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: 130.602
        },
        t: {
          x: -100.8,
          y: 109.896
        },
        m: .333,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: 109.896
        },
        t: {
          x: -84,
          y: 94.75
        },
        m: .283,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: 94.75
        },
        t: {
          x: -67.2,
          y: 85.927
        },
        m: .237,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: 85.927
        },
        t: {
          x: -50.4,
          y: 83.941
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: 83.941
        },
        t: {
          x: -33.6,
          y: 89.037
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: 89.037
        },
        t: {
          x: -16.8,
          y: 101.178
        },
        m: .259,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: 101.178
        },
        t: {
          x: 0,
          y: 120.051
        },
        m: .316,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: 120.051
        },
        t: {
          x: 16.8,
          y: 145.078
        },
        m: .377,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: 145.078
        },
        t: {
          x: 33.6,
          y: 175.437
        },
        m: .434,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: 175.437
        },
        t: {
          x: 50.4,
          y: 210.097
        },
        m: .481,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: 210.097
        },
        t: {
          x: 67.2,
          y: 247.854
        },
        m: .517,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: 247.854
        },
        t: {
          x: 84,
          y: 287.387
        },
        m: .537,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: 287.387
        },
        t: {
          x: 100.8,
          y: 327.3
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: 327.3
        },
        t: {
          x: 117.6,
          y: 366.185
        },
        m: .529,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: 366.185
        },
        t: {
          x: 134.4,
          y: 402.675
        },
        m: .502,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: 402.675
        },
        t: {
          x: 151.2,
          y: 435.494
        },
        m: .461,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: 435.494
        },
        t: {
          x: 168,
          y: 463.514
        },
        m: .408,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: 463.514
        },
        t: {
          x: 184.8,
          y: 485.796
        },
        m: .349,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: 485.796
        },
        t: {
          x: 201.6,
          y: 501.626
        },
        m: .289,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: 501.626
        },
        t: {
          x: 218.4,
          y: 510.545
        },
        m: .238,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: 510.545
        },
        t: {
          x: 235.2,
          y: 512.368
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: 512.368
        },
        t: {
          x: 252,
          y: 507.187
        },
        m: .22,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: 507.187
        },
        t: {
          x: 268.8,
          y: 495.374
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: 495.374
        },
        t: {
          x: 285.6,
          y: 477.559
        },
        m: .306,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: 477.559
        },
        t: {
          x: 302.4,
          y: 454.611
        },
        m: .356,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: 454.611
        },
        t: {
          x: 319.2,
          y: 427.601
        },
        m: .398,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: 427.601
        },
        t: {
          x: 336,
          y: 397.761
        },
        m: .428,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: 397.761
        },
        t: {
          x: 352.8,
          y: 366.433
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: 366.433
        },
        t: {
          x: 369.6,
          y: 335.018
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: 335.018
        },
        t: {
          x: 386.4,
          y: 304.922
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: 304.922
        },
        t: {
          x: 403.2,
          y: 277.497
        },
        m: .402,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: 277.497
        },
        t: {
          x: 420,
          y: 253.992
        },
        m: .361,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: 253.992
        },
        t: {
          x: 436.8,
          y: 235.498
        },
        m: .312,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: 235.498
        },
        t: {
          x: 453.6,
          y: 222.911
        },
        m: .262,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: 222.911
        },
        t: {
          x: 470.4,
          y: 216.894
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: 216.894
        },
        t: {
          x: 487.2,
          y: 217.85
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: 217.85
        },
        t: {
          x: 504,
          y: 225.905
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: 225.905
        },
        t: {
          x: 520.8,
          y: 240.909
        },
        m: .282,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: 240.909
        },
        t: {
          x: 537.6,
          y: 262.435
        },
        m: .341,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: 262.435
        },
        t: {
          x: 554.4,
          y: 289.8
        },
        m: .401,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: 289.8
        },
        t: {
          x: 571.2,
          y: 322.09
        },
        m: .455,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: 322.09
        },
        t: {
          x: 588,
          y: 358.196
        },
        m: .498,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: 358.196
        },
        t: {
          x: 604.8,
          y: 396.861
        },
        m: .527,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: 396.861
        },
        t: {
          x: 621.6,
          y: 436.723
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: 436.723
        },
        t: {
          x: 638.4,
          y: 476.378
        },
        m: .538,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: 476.378
        },
        t: {
          x: 655.2,
          y: 514.426
        },
        m: .52,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: 514.426
        },
        t: {
          x: 672,
          y: 549.531
        },
        m: .486,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: 549.531
        },
        t: {
          x: 688.8,
          y: 580.476
        },
        m: .44,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: 580.476
        },
        t: {
          x: 705.6,
          y: 606.203
        },
        m: .384,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: 606.203
        },
        t: {
          x: 722.4,
          y: 625.866
        },
        m: .323,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: 625.866
        },
        t: {
          x: 739.2,
          y: 638.853
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: 638.853
        },
        t: {
          x: 756,
          y: 644.817
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: 644.817
        },
        t: {
          x: 772.8,
          y: 643.69
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: 643.69
        },
        t: {
          x: 789.6,
          y: 635.681
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: 635.681
        },
        t: {
          x: 806.4,
          y: 621.272
        },
        m: .277,
        r: .85,
        d: 1
      }, {
        i: 98,
        f: {
          x: 806.4,
          y: 621.272
        },
        t: {
          x: 826.826,
          y: 602.549
        },
        m: .346,
        r: .85,
        d: 1
      }, {
        i: 99,
        f: {
          x: 826.826,
          y: 602.549
        },
        t: {
          x: 852.357,
          y: 565.102
        },
        m: .567,
        r: .85,
        d: 1
      }, {
        i: 100,
        f: {
          x: 852.357,
          y: 565.102
        },
        t: {
          x: 1500,
          y: 519.145
        },
        m: 8.116,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: 246.043
        },
        t: {
          x: 823.2,
          y: 246.693
        },
        m: 8.46,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: 246.693
        },
        t: {
          x: 806.4,
          y: 240.382
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: 240.382
        },
        t: {
          x: 789.6,
          y: 227.525
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: 227.525
        },
        t: {
          x: 772.8,
          y: 208.795
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: 208.795
        },
        t: {
          x: 756,
          y: 185.096
        },
        m: .363,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: 185.096
        },
        t: {
          x: 739.2,
          y: 157.529
        },
        m: .404,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: 157.529
        },
        t: {
          x: 722.4,
          y: 127.348
        },
        m: .432,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: 127.348
        },
        t: {
          x: 705.6,
          y: 95.908
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: 95.908
        },
        t: {
          x: 688.8,
          y: 64.615
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: 64.615
        },
        t: {
          x: 672,
          y: 34.87
        },
        m: .427,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: 34.87
        },
        t: {
          x: 655.2,
          y: 8.011
        },
        m: .396,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: 8.011
        },
        t: {
          x: 638.4,
          y: -14.736
        },
        m: .353,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: -14.736
        },
        t: {
          x: 621.6,
          y: -32.308
        },
        m: .304,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: -32.308
        },
        t: {
          x: 604.8,
          y: -43.847
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: -43.847
        },
        t: {
          x: 588,
          y: -48.731
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: -48.731
        },
        t: {
          x: 571.2,
          y: -46.602
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: -46.602
        },
        t: {
          x: 554.4,
          y: -37.379
        },
        m: .24,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: -37.379
        },
        t: {
          x: 537.6,
          y: -21.259
        },
        m: .291,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: -21.259
        },
        t: {
          x: 520.8,
          y: 1.287
        },
        m: .351,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: 1.287
        },
        t: {
          x: 504,
          y: 29.536
        },
        m: .411,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: 29.536
        },
        t: {
          x: 487.2,
          y: 62.538
        },
        m: .463,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: 62.538
        },
        t: {
          x: 470.4,
          y: 99.158
        },
        m: .504,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: 99.158
        },
        t: {
          x: 453.6,
          y: 138.116
        },
        m: .53,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: 138.116
        },
        t: {
          x: 436.8,
          y: 178.042
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: 178.042
        },
        t: {
          x: 420,
          y: 217.527
        },
        m: .536,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: 217.527
        },
        t: {
          x: 403.2,
          y: 255.177
        },
        m: .515,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: 255.177
        },
        t: {
          x: 386.4,
          y: 289.675
        },
        m: .48,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: 289.675
        },
        t: {
          x: 369.6,
          y: 319.823
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: 319.823
        },
        t: {
          x: 352.8,
          y: 344.6
        },
        m: .374,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: 344.6
        },
        t: {
          x: 336,
          y: 363.193
        },
        m: .313,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: 363.193
        },
        t: {
          x: 319.2,
          y: 375.035
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: 375.035
        },
        t: {
          x: 302.4,
          y: 379.823
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: 379.823
        },
        t: {
          x: 285.6,
          y: 377.535
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: 377.535
        },
        t: {
          x: 268.8,
          y: 368.427
        },
        m: .239,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: 368.427
        },
        t: {
          x: 252,
          y: 353.024
        },
        m: .285,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: 353.024
        },
        t: {
          x: 235.2,
          y: 332.098
        },
        m: .335,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: 332.098
        },
        t: {
          x: 218.4,
          y: 306.642
        },
        m: .381,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: 306.642
        },
        t: {
          x: 201.6,
          y: 277.825
        },
        m: .417,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: 277.825
        },
        t: {
          x: 184.8,
          y: 246.949
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: 246.949
        },
        t: {
          x: 168,
          y: 215.399
        },
        m: .447,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: 215.399
        },
        t: {
          x: 151.2,
          y: 184.584
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: 184.584
        },
        t: {
          x: 134.4,
          y: 155.885
        },
        m: .416,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: 155.885
        },
        t: {
          x: 117.6,
          y: 130.602
        },
        m: .379,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: 130.602
        },
        t: {
          x: 100.8,
          y: 109.896
        },
        m: .333,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: 109.896
        },
        t: {
          x: 84,
          y: 94.75
        },
        m: .283,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: 94.75
        },
        t: {
          x: 67.2,
          y: 85.927
        },
        m: .237,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: 85.927
        },
        t: {
          x: 50.4,
          y: 83.941
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: 83.941
        },
        t: {
          x: 33.6,
          y: 89.037
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: 89.037
        },
        t: {
          x: 16.8,
          y: 101.178
        },
        m: .259,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: 101.178
        },
        t: {
          x: 0,
          y: 120.051
        },
        m: .316,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: 120.051
        },
        t: {
          x: -16.8,
          y: 145.078
        },
        m: .377,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: 145.078
        },
        t: {
          x: -33.6,
          y: 175.437
        },
        m: .434,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: 175.437
        },
        t: {
          x: -50.4,
          y: 210.097
        },
        m: .481,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: 210.097
        },
        t: {
          x: -67.2,
          y: 247.854
        },
        m: .517,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: 247.854
        },
        t: {
          x: -84,
          y: 287.387
        },
        m: .537,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: 287.387
        },
        t: {
          x: -100.8,
          y: 327.3
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: 327.3
        },
        t: {
          x: -117.6,
          y: 366.185
        },
        m: .529,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: 366.185
        },
        t: {
          x: -134.4,
          y: 402.675
        },
        m: .502,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: 402.675
        },
        t: {
          x: -151.2,
          y: 435.494
        },
        m: .461,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: 435.494
        },
        t: {
          x: -168,
          y: 463.514
        },
        m: .408,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: 463.514
        },
        t: {
          x: -184.8,
          y: 485.796
        },
        m: .349,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: 485.796
        },
        t: {
          x: -201.6,
          y: 501.626
        },
        m: .289,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: 501.626
        },
        t: {
          x: -218.4,
          y: 510.545
        },
        m: .238,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: 510.545
        },
        t: {
          x: -235.2,
          y: 512.368
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: 512.368
        },
        t: {
          x: -252,
          y: 507.187
        },
        m: .22,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: 507.187
        },
        t: {
          x: -268.8,
          y: 495.374
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: 495.374
        },
        t: {
          x: -285.6,
          y: 477.559
        },
        m: .306,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: 477.559
        },
        t: {
          x: -302.4,
          y: 454.611
        },
        m: .356,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: 454.611
        },
        t: {
          x: -319.2,
          y: 427.601
        },
        m: .398,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: 427.601
        },
        t: {
          x: -336,
          y: 397.761
        },
        m: .428,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: 397.761
        },
        t: {
          x: -352.8,
          y: 366.433
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: 366.433
        },
        t: {
          x: -369.6,
          y: 335.018
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: 335.018
        },
        t: {
          x: -386.4,
          y: 304.922
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: 304.922
        },
        t: {
          x: -403.2,
          y: 277.497
        },
        m: .402,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: 277.497
        },
        t: {
          x: -420,
          y: 253.992
        },
        m: .361,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: 253.992
        },
        t: {
          x: -436.8,
          y: 235.498
        },
        m: .312,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: 235.498
        },
        t: {
          x: -453.6,
          y: 222.911
        },
        m: .262,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: 222.911
        },
        t: {
          x: -470.4,
          y: 216.894
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: 216.894
        },
        t: {
          x: -487.2,
          y: 217.85
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: 217.85
        },
        t: {
          x: -504,
          y: 225.905
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: 225.905
        },
        t: {
          x: -520.8,
          y: 240.909
        },
        m: .282,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: 240.909
        },
        t: {
          x: -537.6,
          y: 262.435
        },
        m: .341,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: 262.435
        },
        t: {
          x: -554.4,
          y: 289.8
        },
        m: .401,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: 289.8
        },
        t: {
          x: -571.2,
          y: 322.09
        },
        m: .455,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: 322.09
        },
        t: {
          x: -588,
          y: 358.196
        },
        m: .498,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: 358.196
        },
        t: {
          x: -604.8,
          y: 396.861
        },
        m: .527,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: 396.861
        },
        t: {
          x: -621.6,
          y: 436.723
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: 436.723
        },
        t: {
          x: -638.4,
          y: 476.378
        },
        m: .538,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: 476.378
        },
        t: {
          x: -655.2,
          y: 514.426
        },
        m: .52,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: 514.426
        },
        t: {
          x: -672,
          y: 549.531
        },
        m: .486,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: 549.531
        },
        t: {
          x: -688.8,
          y: 580.476
        },
        m: .44,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: 580.476
        },
        t: {
          x: -705.6,
          y: 606.203
        },
        m: .384,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: 606.203
        },
        t: {
          x: -722.4,
          y: 625.866
        },
        m: .323,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: 625.866
        },
        t: {
          x: -739.2,
          y: 638.853
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: 638.853
        },
        t: {
          x: -756,
          y: 644.817
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: 644.817
        },
        t: {
          x: -772.8,
          y: 643.69
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: 643.69
        },
        t: {
          x: -789.6,
          y: 635.681
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: 635.681
        },
        t: {
          x: -806.4,
          y: 621.272
        },
        m: .277,
        r: .85,
        d: 0
      }, {
        i: 98,
        f: {
          x: -806.4,
          y: 621.272
        },
        t: {
          x: -826.826,
          y: 602.549
        },
        m: .346,
        r: .85,
        d: 0
      }, {
        i: 99,
        f: {
          x: -826.826,
          y: 602.549
        },
        t: {
          x: -852.357,
          y: 565.102
        },
        m: .567,
        r: .85,
        d: 0
      }, {
        i: 100,
        f: {
          x: -852.357,
          y: 565.102
        },
        t: {
          x: -1500,
          y: 519.145
        },
        m: 8.116,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: -333.681
        },
        t: {
          x: -823.2,
          y: -333.031
        },
        m: 8.46,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: -333.031
        },
        t: {
          x: -806.4,
          y: -339.342
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: -339.342
        },
        t: {
          x: -789.6,
          y: -352.199
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: -352.199
        },
        t: {
          x: -772.8,
          y: -370.929
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: -370.929
        },
        t: {
          x: -756,
          y: -394.628
        },
        m: .363,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: -394.628
        },
        t: {
          x: -739.2,
          y: -422.194
        },
        m: .404,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: -422.194
        },
        t: {
          x: -722.4,
          y: -452.376
        },
        m: .432,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: -452.376
        },
        t: {
          x: -705.6,
          y: -483.816
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: -483.816
        },
        t: {
          x: -688.8,
          y: -515.109
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: -515.109
        },
        t: {
          x: -672,
          y: -544.854
        },
        m: .427,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: -544.854
        },
        t: {
          x: -655.2,
          y: -571.713
        },
        m: .396,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: -571.713
        },
        t: {
          x: -638.4,
          y: -594.46
        },
        m: .353,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: -594.46
        },
        t: {
          x: -621.6,
          y: -612.032
        },
        m: .304,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: -612.032
        },
        t: {
          x: -604.8,
          y: -623.571
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: -623.571
        },
        t: {
          x: -588,
          y: -628.455
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: -628.455
        },
        t: {
          x: -571.2,
          y: -626.326
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: -626.326
        },
        t: {
          x: -554.4,
          y: -617.102
        },
        m: .24,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: -617.102
        },
        t: {
          x: -537.6,
          y: -600.983
        },
        m: .291,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: -600.983
        },
        t: {
          x: -520.8,
          y: -578.437
        },
        m: .351,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: -578.437
        },
        t: {
          x: -504,
          y: -550.188
        },
        m: .411,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: -550.188
        },
        t: {
          x: -487.2,
          y: -517.186
        },
        m: .463,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: -517.186
        },
        t: {
          x: -470.4,
          y: -480.566
        },
        m: .504,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: -480.566
        },
        t: {
          x: -453.6,
          y: -441.607
        },
        m: .53,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: -441.607
        },
        t: {
          x: -436.8,
          y: -401.681
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: -401.681
        },
        t: {
          x: -420,
          y: -362.197
        },
        m: .536,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: -362.197
        },
        t: {
          x: -403.2,
          y: -324.547
        },
        m: .515,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: -324.547
        },
        t: {
          x: -386.4,
          y: -290.049
        },
        m: .48,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: -290.049
        },
        t: {
          x: -369.6,
          y: -259.9
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: -259.9
        },
        t: {
          x: -352.8,
          y: -235.124
        },
        m: .374,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: -235.124
        },
        t: {
          x: -336,
          y: -216.531
        },
        m: .313,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: -216.531
        },
        t: {
          x: -319.2,
          y: -204.689
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: -204.689
        },
        t: {
          x: -302.4,
          y: -199.901
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: -199.901
        },
        t: {
          x: -285.6,
          y: -202.189
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: -202.189
        },
        t: {
          x: -268.8,
          y: -211.297
        },
        m: .239,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: -211.297
        },
        t: {
          x: -252,
          y: -226.7
        },
        m: .285,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: -226.7
        },
        t: {
          x: -235.2,
          y: -247.625
        },
        m: .335,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: -247.625
        },
        t: {
          x: -218.4,
          y: -273.082
        },
        m: .381,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: -273.082
        },
        t: {
          x: -201.6,
          y: -301.899
        },
        m: .417,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: -301.899
        },
        t: {
          x: -184.8,
          y: -332.775
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: -332.775
        },
        t: {
          x: -168,
          y: -364.325
        },
        m: .447,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: -364.325
        },
        t: {
          x: -151.2,
          y: -395.14
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: -395.14
        },
        t: {
          x: -134.4,
          y: -423.838
        },
        m: .416,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: -423.838
        },
        t: {
          x: -117.6,
          y: -449.122
        },
        m: .379,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: -449.122
        },
        t: {
          x: -100.8,
          y: -469.828
        },
        m: .333,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: -469.828
        },
        t: {
          x: -84,
          y: -484.974
        },
        m: .283,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: -484.974
        },
        t: {
          x: -67.2,
          y: -493.797
        },
        m: .237,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: -493.797
        },
        t: {
          x: -50.4,
          y: -495.783
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: -495.783
        },
        t: {
          x: -33.6,
          y: -490.687
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: -490.687
        },
        t: {
          x: -16.8,
          y: -478.546
        },
        m: .259,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: -478.546
        },
        t: {
          x: 0,
          y: -459.673
        },
        m: .316,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: -459.673
        },
        t: {
          x: 16.8,
          y: -434.646
        },
        m: .377,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: -434.646
        },
        t: {
          x: 33.6,
          y: -404.286
        },
        m: .434,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: -404.286
        },
        t: {
          x: 50.4,
          y: -369.627
        },
        m: .481,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: -369.627
        },
        t: {
          x: 67.2,
          y: -331.87
        },
        m: .517,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: -331.87
        },
        t: {
          x: 84,
          y: -292.337
        },
        m: .537,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: -292.337
        },
        t: {
          x: 100.8,
          y: -252.424
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: -252.424
        },
        t: {
          x: 117.6,
          y: -213.538
        },
        m: .529,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: -213.538
        },
        t: {
          x: 134.4,
          y: -177.049
        },
        m: .502,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: -177.049
        },
        t: {
          x: 151.2,
          y: -144.23
        },
        m: .461,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: -144.23
        },
        t: {
          x: 168,
          y: -116.209
        },
        m: .408,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: -116.209
        },
        t: {
          x: 184.8,
          y: -93.928
        },
        m: .349,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: -93.928
        },
        t: {
          x: 201.6,
          y: -78.098
        },
        m: .289,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: -78.098
        },
        t: {
          x: 218.4,
          y: -69.178
        },
        m: .238,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: -69.178
        },
        t: {
          x: 235.2,
          y: -67.356
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: -67.356
        },
        t: {
          x: 252,
          y: -72.537
        },
        m: .22,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: -72.537
        },
        t: {
          x: 268.8,
          y: -84.35
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: -84.35
        },
        t: {
          x: 285.6,
          y: -102.165
        },
        m: .306,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: -102.165
        },
        t: {
          x: 302.4,
          y: -125.113
        },
        m: .356,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: -125.113
        },
        t: {
          x: 319.2,
          y: -152.122
        },
        m: .398,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: -152.122
        },
        t: {
          x: 336,
          y: -181.963
        },
        m: .428,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: -181.963
        },
        t: {
          x: 352.8,
          y: -213.291
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: -213.291
        },
        t: {
          x: 369.6,
          y: -244.706
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: -244.706
        },
        t: {
          x: 386.4,
          y: -274.802
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: -274.802
        },
        t: {
          x: 403.2,
          y: -302.227
        },
        m: .402,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: -302.227
        },
        t: {
          x: 420,
          y: -325.732
        },
        m: .361,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: -325.732
        },
        t: {
          x: 436.8,
          y: -344.226
        },
        m: .312,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: -344.226
        },
        t: {
          x: 453.6,
          y: -356.812
        },
        m: .262,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: -356.812
        },
        t: {
          x: 470.4,
          y: -362.829
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: -362.829
        },
        t: {
          x: 487.2,
          y: -361.874
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: -361.874
        },
        t: {
          x: 504,
          y: -353.819
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: -353.819
        },
        t: {
          x: 520.8,
          y: -338.815
        },
        m: .282,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: -338.815
        },
        t: {
          x: 537.6,
          y: -317.288
        },
        m: .341,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: -317.288
        },
        t: {
          x: 554.4,
          y: -289.924
        },
        m: .401,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: -289.924
        },
        t: {
          x: 571.2,
          y: -257.634
        },
        m: .455,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: -257.634
        },
        t: {
          x: 588,
          y: -221.528
        },
        m: .498,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: -221.528
        },
        t: {
          x: 604.8,
          y: -182.863
        },
        m: .527,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: -182.863
        },
        t: {
          x: 621.6,
          y: -143
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: -143
        },
        t: {
          x: 638.4,
          y: -103.346
        },
        m: .538,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: -103.346
        },
        t: {
          x: 655.2,
          y: -65.298
        },
        m: .52,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: -65.298
        },
        t: {
          x: 672,
          y: -30.192
        },
        m: .486,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: -30.192
        },
        t: {
          x: 688.8,
          y: .752
        },
        m: .44,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: .752
        },
        t: {
          x: 705.6,
          y: 26.48
        },
        m: .384,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: 26.48
        },
        t: {
          x: 722.4,
          y: 46.142
        },
        m: .323,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: 46.142
        },
        t: {
          x: 739.2,
          y: 59.129
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: 59.129
        },
        t: {
          x: 756,
          y: 65.093
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: 65.093
        },
        t: {
          x: 772.8,
          y: 63.966
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: 63.966
        },
        t: {
          x: 789.6,
          y: 55.957
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: 55.957
        },
        t: {
          x: 806.4,
          y: 41.549
        },
        m: .277,
        r: .85,
        d: 1
      }, {
        i: 98,
        f: {
          x: 806.4,
          y: 41.549
        },
        t: {
          x: 826.826,
          y: 22.825
        },
        m: .346,
        r: .85,
        d: 1
      }, {
        i: 99,
        f: {
          x: 826.826,
          y: 22.825
        },
        t: {
          x: 852.357,
          y: -14.622
        },
        m: .567,
        r: .85,
        d: 1
      }, {
        i: 100,
        f: {
          x: 852.357,
          y: -14.622
        },
        t: {
          x: 1500,
          y: -60.579
        },
        m: 8.116,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: -333.681
        },
        t: {
          x: 823.2,
          y: -333.031
        },
        m: 8.46,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: -333.031
        },
        t: {
          x: 806.4,
          y: -339.342
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: -339.342
        },
        t: {
          x: 789.6,
          y: -352.199
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: -352.199
        },
        t: {
          x: 772.8,
          y: -370.929
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: -370.929
        },
        t: {
          x: 756,
          y: -394.628
        },
        m: .363,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: -394.628
        },
        t: {
          x: 739.2,
          y: -422.194
        },
        m: .404,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: -422.194
        },
        t: {
          x: 722.4,
          y: -452.376
        },
        m: .432,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: -452.376
        },
        t: {
          x: 705.6,
          y: -483.816
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: -483.816
        },
        t: {
          x: 688.8,
          y: -515.109
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: -515.109
        },
        t: {
          x: 672,
          y: -544.854
        },
        m: .427,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: -544.854
        },
        t: {
          x: 655.2,
          y: -571.713
        },
        m: .396,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: -571.713
        },
        t: {
          x: 638.4,
          y: -594.46
        },
        m: .353,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: -594.46
        },
        t: {
          x: 621.6,
          y: -612.032
        },
        m: .304,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: -612.032
        },
        t: {
          x: 604.8,
          y: -623.571
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: -623.571
        },
        t: {
          x: 588,
          y: -628.455
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: -628.455
        },
        t: {
          x: 571.2,
          y: -626.326
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: -626.326
        },
        t: {
          x: 554.4,
          y: -617.102
        },
        m: .24,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: -617.102
        },
        t: {
          x: 537.6,
          y: -600.983
        },
        m: .291,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: -600.983
        },
        t: {
          x: 520.8,
          y: -578.437
        },
        m: .351,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: -578.437
        },
        t: {
          x: 504,
          y: -550.188
        },
        m: .411,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: -550.188
        },
        t: {
          x: 487.2,
          y: -517.186
        },
        m: .463,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: -517.186
        },
        t: {
          x: 470.4,
          y: -480.566
        },
        m: .504,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: -480.566
        },
        t: {
          x: 453.6,
          y: -441.607
        },
        m: .53,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: -441.607
        },
        t: {
          x: 436.8,
          y: -401.681
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: -401.681
        },
        t: {
          x: 420,
          y: -362.197
        },
        m: .536,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: -362.197
        },
        t: {
          x: 403.2,
          y: -324.547
        },
        m: .515,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: -324.547
        },
        t: {
          x: 386.4,
          y: -290.049
        },
        m: .48,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: -290.049
        },
        t: {
          x: 369.6,
          y: -259.9
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: -259.9
        },
        t: {
          x: 352.8,
          y: -235.124
        },
        m: .374,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: -235.124
        },
        t: {
          x: 336,
          y: -216.531
        },
        m: .313,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: -216.531
        },
        t: {
          x: 319.2,
          y: -204.689
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: -204.689
        },
        t: {
          x: 302.4,
          y: -199.901
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: -199.901
        },
        t: {
          x: 285.6,
          y: -202.189
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: -202.189
        },
        t: {
          x: 268.8,
          y: -211.297
        },
        m: .239,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: -211.297
        },
        t: {
          x: 252,
          y: -226.7
        },
        m: .285,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: -226.7
        },
        t: {
          x: 235.2,
          y: -247.625
        },
        m: .335,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: -247.625
        },
        t: {
          x: 218.4,
          y: -273.082
        },
        m: .381,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: -273.082
        },
        t: {
          x: 201.6,
          y: -301.899
        },
        m: .417,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: -301.899
        },
        t: {
          x: 184.8,
          y: -332.775
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: -332.775
        },
        t: {
          x: 168,
          y: -364.325
        },
        m: .447,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: -364.325
        },
        t: {
          x: 151.2,
          y: -395.14
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: -395.14
        },
        t: {
          x: 134.4,
          y: -423.838
        },
        m: .416,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: -423.838
        },
        t: {
          x: 117.6,
          y: -449.122
        },
        m: .379,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: -449.122
        },
        t: {
          x: 100.8,
          y: -469.828
        },
        m: .333,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: -469.828
        },
        t: {
          x: 84,
          y: -484.974
        },
        m: .283,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: -484.974
        },
        t: {
          x: 67.2,
          y: -493.797
        },
        m: .237,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: -493.797
        },
        t: {
          x: 50.4,
          y: -495.783
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: -495.783
        },
        t: {
          x: 33.6,
          y: -490.687
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: -490.687
        },
        t: {
          x: 16.8,
          y: -478.546
        },
        m: .259,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: -478.546
        },
        t: {
          x: 0,
          y: -459.673
        },
        m: .316,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: -459.673
        },
        t: {
          x: -16.8,
          y: -434.646
        },
        m: .377,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: -434.646
        },
        t: {
          x: -33.6,
          y: -404.286
        },
        m: .434,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: -404.286
        },
        t: {
          x: -50.4,
          y: -369.627
        },
        m: .481,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: -369.627
        },
        t: {
          x: -67.2,
          y: -331.87
        },
        m: .517,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: -331.87
        },
        t: {
          x: -84,
          y: -292.337
        },
        m: .537,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: -292.337
        },
        t: {
          x: -100.8,
          y: -252.424
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: -252.424
        },
        t: {
          x: -117.6,
          y: -213.538
        },
        m: .529,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: -213.538
        },
        t: {
          x: -134.4,
          y: -177.049
        },
        m: .502,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: -177.049
        },
        t: {
          x: -151.2,
          y: -144.23
        },
        m: .461,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: -144.23
        },
        t: {
          x: -168,
          y: -116.209
        },
        m: .408,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: -116.209
        },
        t: {
          x: -184.8,
          y: -93.928
        },
        m: .349,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: -93.928
        },
        t: {
          x: -201.6,
          y: -78.098
        },
        m: .289,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: -78.098
        },
        t: {
          x: -218.4,
          y: -69.178
        },
        m: .238,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: -69.178
        },
        t: {
          x: -235.2,
          y: -67.356
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: -67.356
        },
        t: {
          x: -252,
          y: -72.537
        },
        m: .22,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: -72.537
        },
        t: {
          x: -268.8,
          y: -84.35
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: -84.35
        },
        t: {
          x: -285.6,
          y: -102.165
        },
        m: .306,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: -102.165
        },
        t: {
          x: -302.4,
          y: -125.113
        },
        m: .356,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: -125.113
        },
        t: {
          x: -319.2,
          y: -152.122
        },
        m: .398,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: -152.122
        },
        t: {
          x: -336,
          y: -181.963
        },
        m: .428,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: -181.963
        },
        t: {
          x: -352.8,
          y: -213.291
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: -213.291
        },
        t: {
          x: -369.6,
          y: -244.706
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: -244.706
        },
        t: {
          x: -386.4,
          y: -274.802
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: -274.802
        },
        t: {
          x: -403.2,
          y: -302.227
        },
        m: .402,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: -302.227
        },
        t: {
          x: -420,
          y: -325.732
        },
        m: .361,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: -325.732
        },
        t: {
          x: -436.8,
          y: -344.226
        },
        m: .312,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: -344.226
        },
        t: {
          x: -453.6,
          y: -356.812
        },
        m: .262,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: -356.812
        },
        t: {
          x: -470.4,
          y: -362.829
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: -362.829
        },
        t: {
          x: -487.2,
          y: -361.874
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: -361.874
        },
        t: {
          x: -504,
          y: -353.819
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: -353.819
        },
        t: {
          x: -520.8,
          y: -338.815
        },
        m: .282,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: -338.815
        },
        t: {
          x: -537.6,
          y: -317.288
        },
        m: .341,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: -317.288
        },
        t: {
          x: -554.4,
          y: -289.924
        },
        m: .401,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: -289.924
        },
        t: {
          x: -571.2,
          y: -257.634
        },
        m: .455,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: -257.634
        },
        t: {
          x: -588,
          y: -221.528
        },
        m: .498,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: -221.528
        },
        t: {
          x: -604.8,
          y: -182.863
        },
        m: .527,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: -182.863
        },
        t: {
          x: -621.6,
          y: -143
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: -143
        },
        t: {
          x: -638.4,
          y: -103.346
        },
        m: .538,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: -103.346
        },
        t: {
          x: -655.2,
          y: -65.298
        },
        m: .52,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: -65.298
        },
        t: {
          x: -672,
          y: -30.192
        },
        m: .486,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: -30.192
        },
        t: {
          x: -688.8,
          y: .752
        },
        m: .44,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: .752
        },
        t: {
          x: -705.6,
          y: 26.48
        },
        m: .384,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: 26.48
        },
        t: {
          x: -722.4,
          y: 46.142
        },
        m: .323,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: 46.142
        },
        t: {
          x: -739.2,
          y: 59.129
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: 59.129
        },
        t: {
          x: -756,
          y: 65.093
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: 65.093
        },
        t: {
          x: -772.8,
          y: 63.966
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: 63.966
        },
        t: {
          x: -789.6,
          y: 55.957
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: 55.957
        },
        t: {
          x: -806.4,
          y: 41.549
        },
        m: .277,
        r: .85,
        d: 0
      }, {
        i: 98,
        f: {
          x: -806.4,
          y: 41.549
        },
        t: {
          x: -826.826,
          y: 22.825
        },
        m: .346,
        r: .85,
        d: 0
      }, {
        i: 99,
        f: {
          x: -826.826,
          y: 22.825
        },
        t: {
          x: -852.357,
          y: -14.622
        },
        m: .567,
        r: .85,
        d: 0
      }, {
        i: 100,
        f: {
          x: -852.357,
          y: -14.622
        },
        t: {
          x: -1500,
          y: -60.579
        },
        m: 8.116,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: -29
        },
        t: {
          x: 823.2,
          y: -28.35
        },
        m: 8.46,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: -28.35
        },
        t: {
          x: 806.4,
          y: -34.661
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: -34.661
        },
        t: {
          x: 789.6,
          y: -47.518
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: -47.518
        },
        t: {
          x: 772.8,
          y: -66.248
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: -66.248
        },
        t: {
          x: 756,
          y: -89.947
        },
        m: .363,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: -89.947
        },
        t: {
          x: 739.2,
          y: -117.514
        },
        m: .404,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: -117.514
        },
        t: {
          x: 722.4,
          y: -147.695
        },
        m: .432,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: -147.695
        },
        t: {
          x: 705.6,
          y: -179.135
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: -179.135
        },
        t: {
          x: 688.8,
          y: -210.428
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: -210.428
        },
        t: {
          x: 672,
          y: -240.173
        },
        m: .427,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: -240.173
        },
        t: {
          x: 655.2,
          y: -267.032
        },
        m: .396,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: -267.032
        },
        t: {
          x: 638.4,
          y: -289.779
        },
        m: .353,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: -289.779
        },
        t: {
          x: 621.6,
          y: -307.351
        },
        m: .304,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: -307.351
        },
        t: {
          x: 604.8,
          y: -318.89
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: -318.89
        },
        t: {
          x: 588,
          y: -323.774
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: -323.774
        },
        t: {
          x: 571.2,
          y: -321.645
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: -321.645
        },
        t: {
          x: 554.4,
          y: -312.422
        },
        m: .24,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: -312.422
        },
        t: {
          x: 537.6,
          y: -296.302
        },
        m: .291,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: -296.302
        },
        t: {
          x: 520.8,
          y: -273.756
        },
        m: .351,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: -273.756
        },
        t: {
          x: 504,
          y: -245.507
        },
        m: .411,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: -245.507
        },
        t: {
          x: 487.2,
          y: -212.505
        },
        m: .463,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: -212.505
        },
        t: {
          x: 470.4,
          y: -175.885
        },
        m: .504,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: -175.885
        },
        t: {
          x: 453.6,
          y: -136.927
        },
        m: .53,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: -136.927
        },
        t: {
          x: 436.8,
          y: -97.001
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: -97.001
        },
        t: {
          x: 420,
          y: -57.516
        },
        m: .536,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: -57.516
        },
        t: {
          x: 403.2,
          y: -19.866
        },
        m: .515,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: -19.866
        },
        t: {
          x: 386.4,
          y: 14.632
        },
        m: .48,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: 14.632
        },
        t: {
          x: 369.6,
          y: 44.781
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: 44.781
        },
        t: {
          x: 352.8,
          y: 69.557
        },
        m: .374,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: 69.557
        },
        t: {
          x: 336,
          y: 88.15
        },
        m: .313,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: 88.15
        },
        t: {
          x: 319.2,
          y: 99.992
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: 99.992
        },
        t: {
          x: 302.4,
          y: 104.78
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: 104.78
        },
        t: {
          x: 285.6,
          y: 102.492
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: 102.492
        },
        t: {
          x: 268.8,
          y: 93.384
        },
        m: .239,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: 93.384
        },
        t: {
          x: 252,
          y: 77.981
        },
        m: .285,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: 77.981
        },
        t: {
          x: 235.2,
          y: 57.055
        },
        m: .335,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: 57.055
        },
        t: {
          x: 218.4,
          y: 31.599
        },
        m: .381,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: 31.599
        },
        t: {
          x: 201.6,
          y: 2.782
        },
        m: .417,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: 2.782
        },
        t: {
          x: 184.8,
          y: -28.094
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: -28.094
        },
        t: {
          x: 168,
          y: -59.644
        },
        m: .447,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: -59.644
        },
        t: {
          x: 151.2,
          y: -90.459
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: -90.459
        },
        t: {
          x: 134.4,
          y: -119.158
        },
        m: .416,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: -119.158
        },
        t: {
          x: 117.6,
          y: -144.441
        },
        m: .379,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: -144.441
        },
        t: {
          x: 100.8,
          y: -165.147
        },
        m: .333,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: -165.147
        },
        t: {
          x: 84,
          y: -180.293
        },
        m: .283,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: -180.293
        },
        t: {
          x: 67.2,
          y: -189.116
        },
        m: .237,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: -189.116
        },
        t: {
          x: 50.4,
          y: -191.102
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: -191.102
        },
        t: {
          x: 33.6,
          y: -186.006
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: -186.006
        },
        t: {
          x: 16.8,
          y: -173.865
        },
        m: .259,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: -173.865
        },
        t: {
          x: 0,
          y: -154.992
        },
        m: .316,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: -154.992
        },
        t: {
          x: -16.8,
          y: -129.965
        },
        m: .377,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: -129.965
        },
        t: {
          x: -33.6,
          y: -99.606
        },
        m: .434,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: -99.606
        },
        t: {
          x: -50.4,
          y: -64.946
        },
        m: .481,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: -64.946
        },
        t: {
          x: -67.2,
          y: -27.189
        },
        m: .517,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: -27.189
        },
        t: {
          x: -84,
          y: 12.344
        },
        m: .537,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: 12.344
        },
        t: {
          x: -100.8,
          y: 52.257
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: 52.257
        },
        t: {
          x: -117.6,
          y: 91.142
        },
        m: .529,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: 91.142
        },
        t: {
          x: -134.4,
          y: 127.632
        },
        m: .502,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: 127.632
        },
        t: {
          x: -151.2,
          y: 160.451
        },
        m: .461,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: 160.451
        },
        t: {
          x: -168,
          y: 188.471
        },
        m: .408,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: 188.471
        },
        t: {
          x: -184.8,
          y: 210.753
        },
        m: .349,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: 210.753
        },
        t: {
          x: -201.6,
          y: 226.583
        },
        m: .289,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: 226.583
        },
        t: {
          x: -218.4,
          y: 235.502
        },
        m: .238,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: 235.502
        },
        t: {
          x: -235.2,
          y: 237.325
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: 237.325
        },
        t: {
          x: -252,
          y: 232.144
        },
        m: .22,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: 232.144
        },
        t: {
          x: -268.8,
          y: 220.331
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: 220.331
        },
        t: {
          x: -285.6,
          y: 202.516
        },
        m: .306,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: 202.516
        },
        t: {
          x: -302.4,
          y: 179.568
        },
        m: .356,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: 179.568
        },
        t: {
          x: -319.2,
          y: 152.558
        },
        m: .398,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: 152.558
        },
        t: {
          x: -336,
          y: 122.718
        },
        m: .428,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: 122.718
        },
        t: {
          x: -352.8,
          y: 91.39
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: 91.39
        },
        t: {
          x: -369.6,
          y: 59.975
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: 59.975
        },
        t: {
          x: -386.4,
          y: 29.879
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: 29.879
        },
        t: {
          x: -403.2,
          y: 2.454
        },
        m: .402,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: 2.454
        },
        t: {
          x: -420,
          y: -21.051
        },
        m: .361,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: -21.051
        },
        t: {
          x: -436.8,
          y: -39.545
        },
        m: .312,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: -39.545
        },
        t: {
          x: -453.6,
          y: -52.131
        },
        m: .262,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: -52.131
        },
        t: {
          x: -470.4,
          y: -58.149
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: -58.149
        },
        t: {
          x: -487.2,
          y: -57.193
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: -57.193
        },
        t: {
          x: -504,
          y: -49.138
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: -49.138
        },
        t: {
          x: -520.8,
          y: -34.134
        },
        m: .282,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: -34.134
        },
        t: {
          x: -537.6,
          y: -12.608
        },
        m: .341,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: -12.608
        },
        t: {
          x: -554.4,
          y: 14.757
        },
        m: .401,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: 14.757
        },
        t: {
          x: -571.2,
          y: 47.047
        },
        m: .455,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: 47.047
        },
        t: {
          x: -588,
          y: 83.153
        },
        m: .498,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: 83.153
        },
        t: {
          x: -604.8,
          y: 121.818
        },
        m: .527,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: 121.818
        },
        t: {
          x: -621.6,
          y: 161.681
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: 161.681
        },
        t: {
          x: -638.4,
          y: 201.335
        },
        m: .538,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: 201.335
        },
        t: {
          x: -655.2,
          y: 239.383
        },
        m: .52,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: 239.383
        },
        t: {
          x: -672,
          y: 274.488
        },
        m: .486,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: 274.488
        },
        t: {
          x: -688.8,
          y: 305.433
        },
        m: .44,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: 305.433
        },
        t: {
          x: -705.6,
          y: 331.161
        },
        m: .384,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: 331.161
        },
        t: {
          x: -722.4,
          y: 350.823
        },
        m: .323,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: 350.823
        },
        t: {
          x: -739.2,
          y: 363.81
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: 363.81
        },
        t: {
          x: -756,
          y: 369.774
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: 369.774
        },
        t: {
          x: -772.8,
          y: 368.647
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: 368.647
        },
        t: {
          x: -789.6,
          y: 360.638
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: 360.638
        },
        t: {
          x: -806.4,
          y: 346.229
        },
        m: .277,
        r: .85,
        d: 0
      }, {
        i: 98,
        f: {
          x: -806.4,
          y: 346.229
        },
        t: {
          x: -819.824,
          y: 326.703
        },
        m: .296,
        r: .85,
        d: 0
      }, {
        i: 99,
        f: {
          x: -819.824,
          y: 326.703
        },
        t: {
          x: -843.012,
          y: 301.075
        },
        m: .432,
        r: .85,
        d: 0
      }, {
        i: 100,
        f: {
          x: -843.012,
          y: 301.075
        },
        t: {
          x: -872.301,
          y: 271.786
        },
        m: .518,
        r: .85,
        d: 0
      }, {
        i: 101,
        f: {
          x: -872.301,
          y: 271.786
        },
        t: {
          x: -900.37,
          y: 246.158
        },
        m: .475,
        r: .85,
        d: 0
      }, {
        i: 102,
        f: {
          x: -900.37,
          y: 246.158
        },
        t: {
          x: -940.643,
          y: 216.868
        },
        m: .622,
        r: .85,
        d: 0
      }, {
        i: 103,
        f: {
          x: -940.643,
          y: 216.868
        },
        t: {
          x: -1500,
          y: 181.477
        },
        m: 7.006,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: -29
        },
        t: {
          x: -823.2,
          y: -28.35
        },
        m: 8.46,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: -28.35
        },
        t: {
          x: -806.4,
          y: -34.661
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: -34.661
        },
        t: {
          x: -789.6,
          y: -47.518
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: -47.518
        },
        t: {
          x: -772.8,
          y: -66.248
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: -66.248
        },
        t: {
          x: -756,
          y: -89.947
        },
        m: .363,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: -89.947
        },
        t: {
          x: -739.2,
          y: -117.514
        },
        m: .404,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: -117.514
        },
        t: {
          x: -722.4,
          y: -147.695
        },
        m: .432,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: -147.695
        },
        t: {
          x: -705.6,
          y: -179.135
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: -179.135
        },
        t: {
          x: -688.8,
          y: -210.428
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: -210.428
        },
        t: {
          x: -672,
          y: -240.173
        },
        m: .427,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: -240.173
        },
        t: {
          x: -655.2,
          y: -267.032
        },
        m: .396,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: -267.032
        },
        t: {
          x: -638.4,
          y: -289.779
        },
        m: .353,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: -289.779
        },
        t: {
          x: -621.6,
          y: -307.351
        },
        m: .304,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: -307.351
        },
        t: {
          x: -604.8,
          y: -318.89
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: -318.89
        },
        t: {
          x: -588,
          y: -323.774
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: -323.774
        },
        t: {
          x: -571.2,
          y: -321.645
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: -321.645
        },
        t: {
          x: -554.4,
          y: -312.422
        },
        m: .24,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: -312.422
        },
        t: {
          x: -537.6,
          y: -296.302
        },
        m: .291,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: -296.302
        },
        t: {
          x: -520.8,
          y: -273.756
        },
        m: .351,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: -273.756
        },
        t: {
          x: -504,
          y: -245.507
        },
        m: .411,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: -245.507
        },
        t: {
          x: -487.2,
          y: -212.505
        },
        m: .463,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: -212.505
        },
        t: {
          x: -470.4,
          y: -175.885
        },
        m: .504,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: -175.885
        },
        t: {
          x: -453.6,
          y: -136.927
        },
        m: .53,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: -136.927
        },
        t: {
          x: -436.8,
          y: -97.001
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: -97.001
        },
        t: {
          x: -420,
          y: -57.516
        },
        m: .536,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: -57.516
        },
        t: {
          x: -403.2,
          y: -19.866
        },
        m: .515,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: -19.866
        },
        t: {
          x: -386.4,
          y: 14.632
        },
        m: .48,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: 14.632
        },
        t: {
          x: -369.6,
          y: 44.781
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: 44.781
        },
        t: {
          x: -352.8,
          y: 69.557
        },
        m: .374,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: 69.557
        },
        t: {
          x: -336,
          y: 88.15
        },
        m: .313,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: 88.15
        },
        t: {
          x: -319.2,
          y: 99.992
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: 99.992
        },
        t: {
          x: -302.4,
          y: 104.78
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: 104.78
        },
        t: {
          x: -285.6,
          y: 102.492
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: 102.492
        },
        t: {
          x: -268.8,
          y: 93.384
        },
        m: .239,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: 93.384
        },
        t: {
          x: -252,
          y: 77.981
        },
        m: .285,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: 77.981
        },
        t: {
          x: -235.2,
          y: 57.055
        },
        m: .335,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: 57.055
        },
        t: {
          x: -218.4,
          y: 31.599
        },
        m: .381,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: 31.599
        },
        t: {
          x: -201.6,
          y: 2.782
        },
        m: .417,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: 2.782
        },
        t: {
          x: -184.8,
          y: -28.094
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: -28.094
        },
        t: {
          x: -168,
          y: -59.644
        },
        m: .447,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: -59.644
        },
        t: {
          x: -151.2,
          y: -90.459
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: -90.459
        },
        t: {
          x: -134.4,
          y: -119.158
        },
        m: .416,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: -119.158
        },
        t: {
          x: -117.6,
          y: -144.441
        },
        m: .379,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: -144.441
        },
        t: {
          x: -100.8,
          y: -165.147
        },
        m: .333,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: -165.147
        },
        t: {
          x: -84,
          y: -180.293
        },
        m: .283,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: -180.293
        },
        t: {
          x: -67.2,
          y: -189.116
        },
        m: .237,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: -189.116
        },
        t: {
          x: -50.4,
          y: -191.102
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: -191.102
        },
        t: {
          x: -33.6,
          y: -186.006
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: -186.006
        },
        t: {
          x: -16.8,
          y: -173.865
        },
        m: .259,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: -173.865
        },
        t: {
          x: 0,
          y: -154.992
        },
        m: .316,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: -154.992
        },
        t: {
          x: 16.8,
          y: -129.965
        },
        m: .377,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: -129.965
        },
        t: {
          x: 33.6,
          y: -99.606
        },
        m: .434,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: -99.606
        },
        t: {
          x: 50.4,
          y: -64.946
        },
        m: .481,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: -64.946
        },
        t: {
          x: 67.2,
          y: -27.189
        },
        m: .517,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: -27.189
        },
        t: {
          x: 84,
          y: 12.344
        },
        m: .537,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: 12.344
        },
        t: {
          x: 100.8,
          y: 52.257
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: 52.257
        },
        t: {
          x: 117.6,
          y: 91.142
        },
        m: .529,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: 91.142
        },
        t: {
          x: 134.4,
          y: 127.632
        },
        m: .502,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: 127.632
        },
        t: {
          x: 151.2,
          y: 160.451
        },
        m: .461,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: 160.451
        },
        t: {
          x: 168,
          y: 188.471
        },
        m: .408,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: 188.471
        },
        t: {
          x: 184.8,
          y: 210.753
        },
        m: .349,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: 210.753
        },
        t: {
          x: 201.6,
          y: 226.583
        },
        m: .289,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: 226.583
        },
        t: {
          x: 218.4,
          y: 235.502
        },
        m: .238,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: 235.502
        },
        t: {
          x: 235.2,
          y: 237.325
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: 237.325
        },
        t: {
          x: 252,
          y: 232.144
        },
        m: .22,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: 232.144
        },
        t: {
          x: 268.8,
          y: 220.331
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: 220.331
        },
        t: {
          x: 285.6,
          y: 202.516
        },
        m: .306,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: 202.516
        },
        t: {
          x: 302.4,
          y: 179.568
        },
        m: .356,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: 179.568
        },
        t: {
          x: 319.2,
          y: 152.558
        },
        m: .398,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: 152.558
        },
        t: {
          x: 336,
          y: 122.718
        },
        m: .428,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: 122.718
        },
        t: {
          x: 352.8,
          y: 91.39
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: 91.39
        },
        t: {
          x: 369.6,
          y: 59.975
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: 59.975
        },
        t: {
          x: 386.4,
          y: 29.879
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: 29.879
        },
        t: {
          x: 403.2,
          y: 2.454
        },
        m: .402,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: 2.454
        },
        t: {
          x: 420,
          y: -21.051
        },
        m: .361,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: -21.051
        },
        t: {
          x: 436.8,
          y: -39.545
        },
        m: .312,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: -39.545
        },
        t: {
          x: 453.6,
          y: -52.131
        },
        m: .262,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: -52.131
        },
        t: {
          x: 470.4,
          y: -58.149
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: -58.149
        },
        t: {
          x: 487.2,
          y: -57.193
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: -57.193
        },
        t: {
          x: 504,
          y: -49.138
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: -49.138
        },
        t: {
          x: 520.8,
          y: -34.134
        },
        m: .282,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: -34.134
        },
        t: {
          x: 537.6,
          y: -12.608
        },
        m: .341,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: -12.608
        },
        t: {
          x: 554.4,
          y: 14.757
        },
        m: .401,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: 14.757
        },
        t: {
          x: 571.2,
          y: 47.047
        },
        m: .455,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: 47.047
        },
        t: {
          x: 588,
          y: 83.153
        },
        m: .498,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: 83.153
        },
        t: {
          x: 604.8,
          y: 121.818
        },
        m: .527,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: 121.818
        },
        t: {
          x: 621.6,
          y: 161.681
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: 161.681
        },
        t: {
          x: 638.4,
          y: 201.335
        },
        m: .538,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: 201.335
        },
        t: {
          x: 655.2,
          y: 239.383
        },
        m: .52,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: 239.383
        },
        t: {
          x: 672,
          y: 274.488
        },
        m: .486,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: 274.488
        },
        t: {
          x: 688.8,
          y: 305.433
        },
        m: .44,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: 305.433
        },
        t: {
          x: 705.6,
          y: 331.161
        },
        m: .384,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: 331.161
        },
        t: {
          x: 722.4,
          y: 350.823
        },
        m: .323,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: 350.823
        },
        t: {
          x: 739.2,
          y: 363.81
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: 363.81
        },
        t: {
          x: 756,
          y: 369.774
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: 369.774
        },
        t: {
          x: 772.8,
          y: 368.647
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: 368.647
        },
        t: {
          x: 789.6,
          y: 360.638
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: 360.638
        },
        t: {
          x: 806.4,
          y: 346.229
        },
        m: .277,
        r: .85,
        d: 1
      }, {
        i: 98,
        f: {
          x: 806.4,
          y: 346.229
        },
        t: {
          x: 819.824,
          y: 326.703
        },
        m: .296,
        r: .85,
        d: 1
      }, {
        i: 99,
        f: {
          x: 819.824,
          y: 326.703
        },
        t: {
          x: 843.012,
          y: 301.075
        },
        m: .432,
        r: .85,
        d: 1
      }, {
        i: 100,
        f: {
          x: 843.012,
          y: 301.075
        },
        t: {
          x: 872.301,
          y: 271.786
        },
        m: .518,
        r: .85,
        d: 1
      }, {
        i: 101,
        f: {
          x: 872.301,
          y: 271.786
        },
        t: {
          x: 900.37,
          y: 246.158
        },
        m: .475,
        r: .85,
        d: 1
      }, {
        i: 102,
        f: {
          x: 900.37,
          y: 246.158
        },
        t: {
          x: 940.643,
          y: 216.868
        },
        m: .622,
        r: .85,
        d: 1
      }, {
        i: 103,
        f: {
          x: 940.643,
          y: 216.868
        },
        t: {
          x: 1500,
          y: 181.477
        },
        m: 7.006,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: 192.277
        },
        t: {
          x: 823.2,
          y: 192.926
        },
        m: 8.46,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: 192.926
        },
        t: {
          x: 806.4,
          y: 186.615
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: 186.615
        },
        t: {
          x: 789.6,
          y: 173.758
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: 173.758
        },
        t: {
          x: 772.8,
          y: 155.028
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: 155.028
        },
        t: {
          x: 756,
          y: 131.33
        },
        m: .363,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: 131.33
        },
        t: {
          x: 739.2,
          y: 103.763
        },
        m: .404,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: 103.763
        },
        t: {
          x: 722.4,
          y: 73.581
        },
        m: .432,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: 73.581
        },
        t: {
          x: 705.6,
          y: 42.141
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: 42.141
        },
        t: {
          x: 688.8,
          y: 10.849
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: 10.849
        },
        t: {
          x: 672,
          y: -18.897
        },
        m: .427,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: -18.897
        },
        t: {
          x: 655.2,
          y: -45.756
        },
        m: .396,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: -45.756
        },
        t: {
          x: 638.4,
          y: -68.502
        },
        m: .353,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: -68.502
        },
        t: {
          x: 621.6,
          y: -86.075
        },
        m: .304,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: -86.075
        },
        t: {
          x: 604.8,
          y: -97.613
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: -97.613
        },
        t: {
          x: 588,
          y: -102.497
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: -102.497
        },
        t: {
          x: 571.2,
          y: -100.368
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: -100.368
        },
        t: {
          x: 554.4,
          y: -91.145
        },
        m: .24,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: -91.145
        },
        t: {
          x: 537.6,
          y: -75.025
        },
        m: .291,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: -75.025
        },
        t: {
          x: 520.8,
          y: -52.479
        },
        m: .351,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: -52.479
        },
        t: {
          x: 504,
          y: -24.231
        },
        m: .411,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: -24.231
        },
        t: {
          x: 487.2,
          y: 8.772
        },
        m: .463,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: 8.772
        },
        t: {
          x: 470.4,
          y: 45.391
        },
        m: .504,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: 45.391
        },
        t: {
          x: 453.6,
          y: 84.35
        },
        m: .53,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: 84.35
        },
        t: {
          x: 436.8,
          y: 124.276
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: 124.276
        },
        t: {
          x: 420,
          y: 163.76
        },
        m: .536,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: 163.76
        },
        t: {
          x: 403.2,
          y: 201.411
        },
        m: .515,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: 201.411
        },
        t: {
          x: 386.4,
          y: 235.908
        },
        m: .48,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: 235.908
        },
        t: {
          x: 369.6,
          y: 266.057
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: 266.057
        },
        t: {
          x: 352.8,
          y: 290.834
        },
        m: .374,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: 290.834
        },
        t: {
          x: 336,
          y: 309.427
        },
        m: .313,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: 309.427
        },
        t: {
          x: 319.2,
          y: 321.268
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: 321.268
        },
        t: {
          x: 302.4,
          y: 326.057
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: 326.057
        },
        t: {
          x: 285.6,
          y: 323.769
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: 323.769
        },
        t: {
          x: 268.8,
          y: 314.661
        },
        m: .239,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: 314.661
        },
        t: {
          x: 252,
          y: 299.257
        },
        m: .285,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: 299.257
        },
        t: {
          x: 235.2,
          y: 278.332
        },
        m: .335,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: 278.332
        },
        t: {
          x: 218.4,
          y: 252.876
        },
        m: .381,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: 252.876
        },
        t: {
          x: 201.6,
          y: 224.059
        },
        m: .417,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: 224.059
        },
        t: {
          x: 184.8,
          y: 193.183
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: 193.183
        },
        t: {
          x: 168,
          y: 161.632
        },
        m: .447,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: 161.632
        },
        t: {
          x: 151.2,
          y: 130.817
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: 130.817
        },
        t: {
          x: 134.4,
          y: 102.119
        },
        m: .416,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: 102.119
        },
        t: {
          x: 117.6,
          y: 76.835
        },
        m: .379,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: 76.835
        },
        t: {
          x: 100.8,
          y: 56.129
        },
        m: .333,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: 56.129
        },
        t: {
          x: 84,
          y: 40.983
        },
        m: .283,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: 40.983
        },
        t: {
          x: 67.2,
          y: 32.161
        },
        m: .237,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: 32.161
        },
        t: {
          x: 50.4,
          y: 30.175
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: 30.175
        },
        t: {
          x: 33.6,
          y: 35.27
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: 35.27
        },
        t: {
          x: 16.8,
          y: 47.411
        },
        m: .259,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: 47.411
        },
        t: {
          x: 0,
          y: 66.285
        },
        m: .316,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: 66.285
        },
        t: {
          x: -16.8,
          y: 91.312
        },
        m: .377,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: 91.312
        },
        t: {
          x: -33.6,
          y: 121.671
        },
        m: .434,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: 121.671
        },
        t: {
          x: -50.4,
          y: 156.33
        },
        m: .481,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: 156.33
        },
        t: {
          x: -67.2,
          y: 194.088
        },
        m: .517,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: 194.088
        },
        t: {
          x: -84,
          y: 233.62
        },
        m: .537,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: 233.62
        },
        t: {
          x: -100.8,
          y: 273.534
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: 273.534
        },
        t: {
          x: -117.6,
          y: 312.419
        },
        m: .529,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: 312.419
        },
        t: {
          x: -134.4,
          y: 348.908
        },
        m: .502,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: 348.908
        },
        t: {
          x: -151.2,
          y: 381.728
        },
        m: .461,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: 381.728
        },
        t: {
          x: -168,
          y: 409.748
        },
        m: .408,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: 409.748
        },
        t: {
          x: -184.8,
          y: 432.03
        },
        m: .349,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: 432.03
        },
        t: {
          x: -201.6,
          y: 447.86
        },
        m: .289,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: 447.86
        },
        t: {
          x: -218.4,
          y: 456.779
        },
        m: .238,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: 456.779
        },
        t: {
          x: -235.2,
          y: 458.602
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: 458.602
        },
        t: {
          x: -252,
          y: 453.421
        },
        m: .22,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: 453.421
        },
        t: {
          x: -268.8,
          y: 441.607
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: 441.607
        },
        t: {
          x: -285.6,
          y: 423.792
        },
        m: .306,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: 423.792
        },
        t: {
          x: -302.4,
          y: 400.845
        },
        m: .355,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: 400.845
        },
        t: {
          x: -319.2,
          y: 373.835
        },
        m: .398,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: 373.835
        },
        t: {
          x: -336,
          y: 343.995
        },
        m: .428,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: 343.995
        },
        t: {
          x: -352.8,
          y: 312.666
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: 312.666
        },
        t: {
          x: -369.6,
          y: 281.252
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: 281.252
        },
        t: {
          x: -386.4,
          y: 251.156
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: 251.156
        },
        t: {
          x: -403.2,
          y: 223.731
        },
        m: .402,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: 223.731
        },
        t: {
          x: -420,
          y: 200.225
        },
        m: .361,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: 200.225
        },
        t: {
          x: -436.8,
          y: 181.732
        },
        m: .312,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: 181.732
        },
        t: {
          x: -453.6,
          y: 169.145
        },
        m: .262,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: 169.145
        },
        t: {
          x: -470.4,
          y: 163.128
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: 163.128
        },
        t: {
          x: -487.2,
          y: 164.083
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: 164.083
        },
        t: {
          x: -504,
          y: 172.139
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: 172.139
        },
        t: {
          x: -520.8,
          y: 187.143
        },
        m: .282,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: 187.143
        },
        t: {
          x: -537.6,
          y: 208.669
        },
        m: .341,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: 208.669
        },
        t: {
          x: -554.4,
          y: 236.034
        },
        m: .401,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: 236.034
        },
        t: {
          x: -571.2,
          y: 268.323
        },
        m: .455,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: 268.323
        },
        t: {
          x: -588,
          y: 304.43
        },
        m: .498,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: 304.43
        },
        t: {
          x: -604.8,
          y: 343.094
        },
        m: .527,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: 343.094
        },
        t: {
          x: -621.6,
          y: 382.957
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: 382.957
        },
        t: {
          x: -638.4,
          y: 422.612
        },
        m: .538,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: 422.612
        },
        t: {
          x: -655.2,
          y: 460.659
        },
        m: .52,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: 460.659
        },
        t: {
          x: -672,
          y: 495.765
        },
        m: .486,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: 495.765
        },
        t: {
          x: -688.8,
          y: 526.709
        },
        m: .44,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: 526.709
        },
        t: {
          x: -705.6,
          y: 552.437
        },
        m: .384,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: 552.437
        },
        t: {
          x: -722.4,
          y: 572.099
        },
        m: .323,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: 572.099
        },
        t: {
          x: -739.2,
          y: 585.086
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: 585.086
        },
        t: {
          x: -756,
          y: 591.051
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: 591.051
        },
        t: {
          x: -772.8,
          y: 589.924
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: 589.924
        },
        t: {
          x: -789.6,
          y: 581.915
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: 581.915
        },
        t: {
          x: -806.4,
          y: 567.506
        },
        m: .277,
        r: .85,
        d: 0
      }, {
        i: 98,
        f: {
          x: -806.4,
          y: 567.506
        },
        t: {
          x: -819.824,
          y: 547.98
        },
        m: .296,
        r: .85,
        d: 0
      }, {
        i: 99,
        f: {
          x: -819.824,
          y: 547.98
        },
        t: {
          x: -843.012,
          y: 522.352
        },
        m: .432,
        r: .85,
        d: 0
      }, {
        i: 100,
        f: {
          x: -843.012,
          y: 522.352
        },
        t: {
          x: -872.301,
          y: 493.063
        },
        m: .518,
        r: .85,
        d: 0
      }, {
        i: 101,
        f: {
          x: -872.301,
          y: 493.063
        },
        t: {
          x: -900.37,
          y: 467.435
        },
        m: .475,
        r: .85,
        d: 0
      }, {
        i: 102,
        f: {
          x: -900.37,
          y: 467.435
        },
        t: {
          x: -940.643,
          y: 438.145
        },
        m: .622,
        r: .85,
        d: 0
      }, {
        i: 103,
        f: {
          x: -940.643,
          y: 438.145
        },
        t: {
          x: -1500,
          y: 402.754
        },
        m: 7.006,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: 192.277
        },
        t: {
          x: -823.2,
          y: 192.926
        },
        m: 8.46,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: 192.926
        },
        t: {
          x: -806.4,
          y: 186.615
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: 186.615
        },
        t: {
          x: -789.6,
          y: 173.758
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: 173.758
        },
        t: {
          x: -772.8,
          y: 155.028
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: 155.028
        },
        t: {
          x: -756,
          y: 131.33
        },
        m: .363,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: 131.33
        },
        t: {
          x: -739.2,
          y: 103.763
        },
        m: .404,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: 103.763
        },
        t: {
          x: -722.4,
          y: 73.581
        },
        m: .432,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: 73.581
        },
        t: {
          x: -705.6,
          y: 42.141
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: 42.141
        },
        t: {
          x: -688.8,
          y: 10.849
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: 10.849
        },
        t: {
          x: -672,
          y: -18.897
        },
        m: .427,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: -18.897
        },
        t: {
          x: -655.2,
          y: -45.756
        },
        m: .396,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: -45.756
        },
        t: {
          x: -638.4,
          y: -68.502
        },
        m: .353,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: -68.502
        },
        t: {
          x: -621.6,
          y: -86.075
        },
        m: .304,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: -86.075
        },
        t: {
          x: -604.8,
          y: -97.613
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: -97.613
        },
        t: {
          x: -588,
          y: -102.497
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: -102.497
        },
        t: {
          x: -571.2,
          y: -100.368
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: -100.368
        },
        t: {
          x: -554.4,
          y: -91.145
        },
        m: .24,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: -91.145
        },
        t: {
          x: -537.6,
          y: -75.025
        },
        m: .291,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: -75.025
        },
        t: {
          x: -520.8,
          y: -52.479
        },
        m: .351,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: -52.479
        },
        t: {
          x: -504,
          y: -24.231
        },
        m: .411,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: -24.231
        },
        t: {
          x: -487.2,
          y: 8.772
        },
        m: .463,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: 8.772
        },
        t: {
          x: -470.4,
          y: 45.391
        },
        m: .504,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: 45.391
        },
        t: {
          x: -453.6,
          y: 84.35
        },
        m: .53,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: 84.35
        },
        t: {
          x: -436.8,
          y: 124.276
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: 124.276
        },
        t: {
          x: -420,
          y: 163.76
        },
        m: .536,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: 163.76
        },
        t: {
          x: -403.2,
          y: 201.411
        },
        m: .515,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: 201.411
        },
        t: {
          x: -386.4,
          y: 235.908
        },
        m: .48,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: 235.908
        },
        t: {
          x: -369.6,
          y: 266.057
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: 266.057
        },
        t: {
          x: -352.8,
          y: 290.834
        },
        m: .374,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: 290.834
        },
        t: {
          x: -336,
          y: 309.427
        },
        m: .313,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: 309.427
        },
        t: {
          x: -319.2,
          y: 321.268
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: 321.268
        },
        t: {
          x: -302.4,
          y: 326.057
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: 326.057
        },
        t: {
          x: -285.6,
          y: 323.769
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: 323.769
        },
        t: {
          x: -268.8,
          y: 314.661
        },
        m: .239,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: 314.661
        },
        t: {
          x: -252,
          y: 299.257
        },
        m: .285,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: 299.257
        },
        t: {
          x: -235.2,
          y: 278.332
        },
        m: .335,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: 278.332
        },
        t: {
          x: -218.4,
          y: 252.876
        },
        m: .381,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: 252.876
        },
        t: {
          x: -201.6,
          y: 224.059
        },
        m: .417,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: 224.059
        },
        t: {
          x: -184.8,
          y: 193.183
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: 193.183
        },
        t: {
          x: -168,
          y: 161.632
        },
        m: .447,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: 161.632
        },
        t: {
          x: -151.2,
          y: 130.817
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: 130.817
        },
        t: {
          x: -134.4,
          y: 102.119
        },
        m: .416,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: 102.119
        },
        t: {
          x: -117.6,
          y: 76.835
        },
        m: .379,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: 76.835
        },
        t: {
          x: -100.8,
          y: 56.129
        },
        m: .333,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: 56.129
        },
        t: {
          x: -84,
          y: 40.983
        },
        m: .283,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: 40.983
        },
        t: {
          x: -67.2,
          y: 32.161
        },
        m: .237,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: 32.161
        },
        t: {
          x: -50.4,
          y: 30.175
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: 30.175
        },
        t: {
          x: -33.6,
          y: 35.27
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: 35.27
        },
        t: {
          x: -16.8,
          y: 47.411
        },
        m: .259,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: 47.411
        },
        t: {
          x: 0,
          y: 66.285
        },
        m: .316,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: 66.285
        },
        t: {
          x: 16.8,
          y: 91.312
        },
        m: .377,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: 91.312
        },
        t: {
          x: 33.6,
          y: 121.671
        },
        m: .434,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: 121.671
        },
        t: {
          x: 50.4,
          y: 156.33
        },
        m: .481,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: 156.33
        },
        t: {
          x: 67.2,
          y: 194.088
        },
        m: .517,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: 194.088
        },
        t: {
          x: 84,
          y: 233.62
        },
        m: .537,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: 233.62
        },
        t: {
          x: 100.8,
          y: 273.534
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: 273.534
        },
        t: {
          x: 117.6,
          y: 312.419
        },
        m: .529,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: 312.419
        },
        t: {
          x: 134.4,
          y: 348.908
        },
        m: .502,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: 348.908
        },
        t: {
          x: 151.2,
          y: 381.728
        },
        m: .461,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: 381.728
        },
        t: {
          x: 168,
          y: 409.748
        },
        m: .408,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: 409.748
        },
        t: {
          x: 184.8,
          y: 432.03
        },
        m: .349,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: 432.03
        },
        t: {
          x: 201.6,
          y: 447.86
        },
        m: .289,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: 447.86
        },
        t: {
          x: 218.4,
          y: 456.779
        },
        m: .238,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: 456.779
        },
        t: {
          x: 235.2,
          y: 458.602
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: 458.602
        },
        t: {
          x: 252,
          y: 453.421
        },
        m: .22,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: 453.421
        },
        t: {
          x: 268.8,
          y: 441.607
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: 441.607
        },
        t: {
          x: 285.6,
          y: 423.792
        },
        m: .306,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: 423.792
        },
        t: {
          x: 302.4,
          y: 400.845
        },
        m: .355,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: 400.845
        },
        t: {
          x: 319.2,
          y: 373.835
        },
        m: .398,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: 373.835
        },
        t: {
          x: 336,
          y: 343.995
        },
        m: .428,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: 343.995
        },
        t: {
          x: 352.8,
          y: 312.666
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: 312.666
        },
        t: {
          x: 369.6,
          y: 281.252
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: 281.252
        },
        t: {
          x: 386.4,
          y: 251.156
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: 251.156
        },
        t: {
          x: 403.2,
          y: 223.731
        },
        m: .402,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: 223.731
        },
        t: {
          x: 420,
          y: 200.225
        },
        m: .361,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: 200.225
        },
        t: {
          x: 436.8,
          y: 181.732
        },
        m: .312,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: 181.732
        },
        t: {
          x: 453.6,
          y: 169.145
        },
        m: .262,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: 169.145
        },
        t: {
          x: 470.4,
          y: 163.128
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: 163.128
        },
        t: {
          x: 487.2,
          y: 164.083
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: 164.083
        },
        t: {
          x: 504,
          y: 172.139
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: 172.139
        },
        t: {
          x: 520.8,
          y: 187.143
        },
        m: .282,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: 187.143
        },
        t: {
          x: 537.6,
          y: 208.669
        },
        m: .341,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: 208.669
        },
        t: {
          x: 554.4,
          y: 236.034
        },
        m: .401,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: 236.034
        },
        t: {
          x: 571.2,
          y: 268.323
        },
        m: .455,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: 268.323
        },
        t: {
          x: 588,
          y: 304.43
        },
        m: .498,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: 304.43
        },
        t: {
          x: 604.8,
          y: 343.094
        },
        m: .527,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: 343.094
        },
        t: {
          x: 621.6,
          y: 382.957
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: 382.957
        },
        t: {
          x: 638.4,
          y: 422.612
        },
        m: .538,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: 422.612
        },
        t: {
          x: 655.2,
          y: 460.659
        },
        m: .52,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: 460.659
        },
        t: {
          x: 672,
          y: 495.765
        },
        m: .486,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: 495.765
        },
        t: {
          x: 688.8,
          y: 526.709
        },
        m: .44,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: 526.709
        },
        t: {
          x: 705.6,
          y: 552.437
        },
        m: .384,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: 552.437
        },
        t: {
          x: 722.4,
          y: 572.099
        },
        m: .323,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: 572.099
        },
        t: {
          x: 739.2,
          y: 585.086
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: 585.086
        },
        t: {
          x: 756,
          y: 591.051
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: 591.051
        },
        t: {
          x: 772.8,
          y: 589.924
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: 589.924
        },
        t: {
          x: 789.6,
          y: 581.915
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: 581.915
        },
        t: {
          x: 806.4,
          y: 567.506
        },
        m: .277,
        r: .85,
        d: 1
      }, {
        i: 98,
        f: {
          x: 806.4,
          y: 567.506
        },
        t: {
          x: 819.824,
          y: 547.98
        },
        m: .296,
        r: .85,
        d: 1
      }, {
        i: 99,
        f: {
          x: 819.824,
          y: 547.98
        },
        t: {
          x: 843.012,
          y: 522.352
        },
        m: .432,
        r: .85,
        d: 1
      }, {
        i: 100,
        f: {
          x: 843.012,
          y: 522.352
        },
        t: {
          x: 872.301,
          y: 493.063
        },
        m: .518,
        r: .85,
        d: 1
      }, {
        i: 101,
        f: {
          x: 872.301,
          y: 493.063
        },
        t: {
          x: 900.37,
          y: 467.435
        },
        m: .475,
        r: .85,
        d: 1
      }, {
        i: 102,
        f: {
          x: 900.37,
          y: 467.435
        },
        t: {
          x: 940.643,
          y: 438.145
        },
        m: .622,
        r: .85,
        d: 1
      }, {
        i: 103,
        f: {
          x: 940.643,
          y: 438.145
        },
        t: {
          x: 1500,
          y: 402.754
        },
        m: 7.006,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: -245.17
        },
        t: {
          x: 823.2,
          y: -244.521
        },
        m: 8.46,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: -244.521
        },
        t: {
          x: 806.4,
          y: -250.832
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: -250.832
        },
        t: {
          x: 789.6,
          y: -263.688
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: -263.688
        },
        t: {
          x: 772.8,
          y: -282.419
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: -282.419
        },
        t: {
          x: 756,
          y: -306.117
        },
        m: .363,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: -306.117
        },
        t: {
          x: 739.2,
          y: -333.684
        },
        m: .404,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: -333.684
        },
        t: {
          x: 722.4,
          y: -363.865
        },
        m: .432,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: -363.865
        },
        t: {
          x: 705.6,
          y: -395.306
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: -395.306
        },
        t: {
          x: 688.8,
          y: -426.598
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: -426.598
        },
        t: {
          x: 672,
          y: -456.344
        },
        m: .427,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: -456.344
        },
        t: {
          x: 655.2,
          y: -483.202
        },
        m: .396,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: -483.202
        },
        t: {
          x: 638.4,
          y: -505.949
        },
        m: .353,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: -505.949
        },
        t: {
          x: 621.6,
          y: -523.521
        },
        m: .304,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: -523.521
        },
        t: {
          x: 604.8,
          y: -535.06
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: -535.06
        },
        t: {
          x: 588,
          y: -539.944
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: -539.944
        },
        t: {
          x: 571.2,
          y: -537.815
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: -537.815
        },
        t: {
          x: 554.4,
          y: -528.592
        },
        m: .24,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: -528.592
        },
        t: {
          x: 537.6,
          y: -512.472
        },
        m: .291,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: -512.472
        },
        t: {
          x: 520.8,
          y: -489.926
        },
        m: .351,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: -489.926
        },
        t: {
          x: 504,
          y: -461.678
        },
        m: .411,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: -461.678
        },
        t: {
          x: 487.2,
          y: -428.675
        },
        m: .463,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: -428.675
        },
        t: {
          x: 470.4,
          y: -392.055
        },
        m: .504,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: -392.055
        },
        t: {
          x: 453.6,
          y: -353.097
        },
        m: .53,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: -353.097
        },
        t: {
          x: 436.8,
          y: -313.171
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: -313.171
        },
        t: {
          x: 420,
          y: -273.686
        },
        m: .536,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: -273.686
        },
        t: {
          x: 403.2,
          y: -236.036
        },
        m: .515,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: -236.036
        },
        t: {
          x: 386.4,
          y: -201.539
        },
        m: .48,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: -201.539
        },
        t: {
          x: 369.6,
          y: -171.39
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: -171.39
        },
        t: {
          x: 352.8,
          y: -146.613
        },
        m: .374,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: -146.613
        },
        t: {
          x: 336,
          y: -128.02
        },
        m: .313,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: -128.02
        },
        t: {
          x: 319.2,
          y: -116.178
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: -116.178
        },
        t: {
          x: 302.4,
          y: -111.39
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: -111.39
        },
        t: {
          x: 285.6,
          y: -113.678
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: -113.678
        },
        t: {
          x: 268.8,
          y: -122.786
        },
        m: .239,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: -122.786
        },
        t: {
          x: 252,
          y: -138.189
        },
        m: .285,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: -138.189
        },
        t: {
          x: 235.2,
          y: -159.115
        },
        m: .335,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: -159.115
        },
        t: {
          x: 218.4,
          y: -184.571
        },
        m: .381,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: -184.571
        },
        t: {
          x: 201.6,
          y: -213.388
        },
        m: .417,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: -213.388
        },
        t: {
          x: 184.8,
          y: -244.264
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: -244.264
        },
        t: {
          x: 168,
          y: -275.815
        },
        m: .447,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: -275.815
        },
        t: {
          x: 151.2,
          y: -306.63
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: -306.63
        },
        t: {
          x: 134.4,
          y: -335.328
        },
        m: .416,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: -335.328
        },
        t: {
          x: 117.6,
          y: -360.612
        },
        m: .379,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: -360.612
        },
        t: {
          x: 100.8,
          y: -381.318
        },
        m: .333,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: -381.318
        },
        t: {
          x: 84,
          y: -396.464
        },
        m: .283,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: -396.464
        },
        t: {
          x: 67.2,
          y: -405.286
        },
        m: .237,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: -405.286
        },
        t: {
          x: 50.4,
          y: -407.272
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: -407.272
        },
        t: {
          x: 33.6,
          y: -402.177
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: -402.177
        },
        t: {
          x: 16.8,
          y: -390.036
        },
        m: .259,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: -390.036
        },
        t: {
          x: 0,
          y: -371.162
        },
        m: .316,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: -371.162
        },
        t: {
          x: -16.8,
          y: -346.135
        },
        m: .377,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: -346.135
        },
        t: {
          x: -33.6,
          y: -315.776
        },
        m: .434,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: -315.776
        },
        t: {
          x: -50.4,
          y: -281.117
        },
        m: .481,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: -281.117
        },
        t: {
          x: -67.2,
          y: -243.359
        },
        m: .517,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: -243.359
        },
        t: {
          x: -84,
          y: -203.827
        },
        m: .537,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: -203.827
        },
        t: {
          x: -100.8,
          y: -163.913
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: -163.913
        },
        t: {
          x: -117.6,
          y: -125.028
        },
        m: .529,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: -125.028
        },
        t: {
          x: -134.4,
          y: -88.538
        },
        m: .502,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: -88.538
        },
        t: {
          x: -151.2,
          y: -55.719
        },
        m: .461,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: -55.719
        },
        t: {
          x: -168,
          y: -27.699
        },
        m: .408,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: -27.699
        },
        t: {
          x: -184.8,
          y: -5.417
        },
        m: .349,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: -5.417
        },
        t: {
          x: -201.6,
          y: 10.413
        },
        m: .289,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: 10.413
        },
        t: {
          x: -218.4,
          y: 19.332
        },
        m: .238,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: 19.332
        },
        t: {
          x: -235.2,
          y: 21.155
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: 21.155
        },
        t: {
          x: -252,
          y: 15.974
        },
        m: .22,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: 15.974
        },
        t: {
          x: -268.8,
          y: 4.16
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: 4.16
        },
        t: {
          x: -285.6,
          y: -13.654
        },
        m: .306,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: -13.654
        },
        t: {
          x: -302.4,
          y: -36.602
        },
        m: .356,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: -36.602
        },
        t: {
          x: -319.2,
          y: -63.612
        },
        m: .398,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: -63.612
        },
        t: {
          x: -336,
          y: -93.452
        },
        m: .428,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: -93.452
        },
        t: {
          x: -352.8,
          y: -124.78
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: -124.78
        },
        t: {
          x: -369.6,
          y: -156.195
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: -156.195
        },
        t: {
          x: -386.4,
          y: -186.291
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: -186.291
        },
        t: {
          x: -403.2,
          y: -213.716
        },
        m: .402,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: -213.716
        },
        t: {
          x: -420,
          y: -237.222
        },
        m: .361,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: -237.222
        },
        t: {
          x: -436.8,
          y: -255.715
        },
        m: .312,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: -255.715
        },
        t: {
          x: -453.6,
          y: -268.302
        },
        m: .262,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: -268.302
        },
        t: {
          x: -470.4,
          y: -274.319
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: -274.319
        },
        t: {
          x: -487.2,
          y: -273.364
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: -273.364
        },
        t: {
          x: -504,
          y: -265.308
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: -265.308
        },
        t: {
          x: -520.8,
          y: -250.304
        },
        m: .282,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: -250.304
        },
        t: {
          x: -537.6,
          y: -228.778
        },
        m: .341,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: -228.778
        },
        t: {
          x: -554.4,
          y: -201.413
        },
        m: .401,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: -201.413
        },
        t: {
          x: -571.2,
          y: -169.123
        },
        m: .455,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: -169.123
        },
        t: {
          x: -588,
          y: -133.017
        },
        m: .498,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: -133.017
        },
        t: {
          x: -604.8,
          y: -94.353
        },
        m: .527,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: -94.353
        },
        t: {
          x: -621.6,
          y: -54.49
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: -54.49
        },
        t: {
          x: -638.4,
          y: -14.835
        },
        m: .538,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: -14.835
        },
        t: {
          x: -655.2,
          y: 23.213
        },
        m: .52,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: 23.213
        },
        t: {
          x: -672,
          y: 58.318
        },
        m: .486,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: 58.318
        },
        t: {
          x: -688.8,
          y: 89.262
        },
        m: .44,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: 89.262
        },
        t: {
          x: -705.6,
          y: 114.99
        },
        m: .384,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: 114.99
        },
        t: {
          x: -722.4,
          y: 134.653
        },
        m: .323,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: 134.653
        },
        t: {
          x: -739.2,
          y: 147.639
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: 147.639
        },
        t: {
          x: -756,
          y: 153.604
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: 153.604
        },
        t: {
          x: -772.8,
          y: 152.477
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: 152.477
        },
        t: {
          x: -789.6,
          y: 144.468
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: 144.468
        },
        t: {
          x: -806.4,
          y: 130.059
        },
        m: .277,
        r: .85,
        d: 0
      }, {
        i: 98,
        f: {
          x: -806.4,
          y: 130.059
        },
        t: {
          x: -819.824,
          y: 110.533
        },
        m: .296,
        r: .85,
        d: 0
      }, {
        i: 99,
        f: {
          x: -819.824,
          y: 110.533
        },
        t: {
          x: -843.012,
          y: 84.905
        },
        m: .432,
        r: .85,
        d: 0
      }, {
        i: 100,
        f: {
          x: -843.012,
          y: 84.905
        },
        t: {
          x: -872.301,
          y: 55.616
        },
        m: .518,
        r: .85,
        d: 0
      }, {
        i: 101,
        f: {
          x: -872.301,
          y: 55.616
        },
        t: {
          x: -900.37,
          y: 29.988
        },
        m: .475,
        r: .85,
        d: 0
      }, {
        i: 102,
        f: {
          x: -900.37,
          y: 29.988
        },
        t: {
          x: -940.643,
          y: .698
        },
        m: .622,
        r: .85,
        d: 0
      }, {
        i: 103,
        f: {
          x: -940.643,
          y: .698
        },
        t: {
          x: -1500,
          y: -34.693
        },
        m: 7.006,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: -245.17
        },
        t: {
          x: -823.2,
          y: -244.521
        },
        m: 8.46,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: -244.521
        },
        t: {
          x: -806.4,
          y: -250.832
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: -250.832
        },
        t: {
          x: -789.6,
          y: -263.688
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: -263.688
        },
        t: {
          x: -772.8,
          y: -282.419
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: -282.419
        },
        t: {
          x: -756,
          y: -306.117
        },
        m: .363,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: -306.117
        },
        t: {
          x: -739.2,
          y: -333.684
        },
        m: .404,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: -333.684
        },
        t: {
          x: -722.4,
          y: -363.865
        },
        m: .432,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: -363.865
        },
        t: {
          x: -705.6,
          y: -395.306
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: -395.306
        },
        t: {
          x: -688.8,
          y: -426.598
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: -426.598
        },
        t: {
          x: -672,
          y: -456.344
        },
        m: .427,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: -456.344
        },
        t: {
          x: -655.2,
          y: -483.202
        },
        m: .396,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: -483.202
        },
        t: {
          x: -638.4,
          y: -505.949
        },
        m: .353,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: -505.949
        },
        t: {
          x: -621.6,
          y: -523.521
        },
        m: .304,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: -523.521
        },
        t: {
          x: -604.8,
          y: -535.06
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: -535.06
        },
        t: {
          x: -588,
          y: -539.944
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: -539.944
        },
        t: {
          x: -571.2,
          y: -537.815
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: -537.815
        },
        t: {
          x: -554.4,
          y: -528.592
        },
        m: .24,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: -528.592
        },
        t: {
          x: -537.6,
          y: -512.472
        },
        m: .291,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: -512.472
        },
        t: {
          x: -520.8,
          y: -489.926
        },
        m: .351,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: -489.926
        },
        t: {
          x: -504,
          y: -461.678
        },
        m: .411,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: -461.678
        },
        t: {
          x: -487.2,
          y: -428.675
        },
        m: .463,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: -428.675
        },
        t: {
          x: -470.4,
          y: -392.055
        },
        m: .504,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: -392.055
        },
        t: {
          x: -453.6,
          y: -353.097
        },
        m: .53,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: -353.097
        },
        t: {
          x: -436.8,
          y: -313.171
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: -313.171
        },
        t: {
          x: -420,
          y: -273.686
        },
        m: .536,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: -273.686
        },
        t: {
          x: -403.2,
          y: -236.036
        },
        m: .515,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: -236.036
        },
        t: {
          x: -386.4,
          y: -201.539
        },
        m: .48,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: -201.539
        },
        t: {
          x: -369.6,
          y: -171.39
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: -171.39
        },
        t: {
          x: -352.8,
          y: -146.613
        },
        m: .374,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: -146.613
        },
        t: {
          x: -336,
          y: -128.02
        },
        m: .313,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: -128.02
        },
        t: {
          x: -319.2,
          y: -116.178
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: -116.178
        },
        t: {
          x: -302.4,
          y: -111.39
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: -111.39
        },
        t: {
          x: -285.6,
          y: -113.678
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: -113.678
        },
        t: {
          x: -268.8,
          y: -122.786
        },
        m: .239,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: -122.786
        },
        t: {
          x: -252,
          y: -138.189
        },
        m: .285,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: -138.189
        },
        t: {
          x: -235.2,
          y: -159.115
        },
        m: .335,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: -159.115
        },
        t: {
          x: -218.4,
          y: -184.571
        },
        m: .381,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: -184.571
        },
        t: {
          x: -201.6,
          y: -213.388
        },
        m: .417,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: -213.388
        },
        t: {
          x: -184.8,
          y: -244.264
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: -244.264
        },
        t: {
          x: -168,
          y: -275.815
        },
        m: .447,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: -275.815
        },
        t: {
          x: -151.2,
          y: -306.63
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: -306.63
        },
        t: {
          x: -134.4,
          y: -335.328
        },
        m: .416,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: -335.328
        },
        t: {
          x: -117.6,
          y: -360.612
        },
        m: .379,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: -360.612
        },
        t: {
          x: -100.8,
          y: -381.318
        },
        m: .333,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: -381.318
        },
        t: {
          x: -84,
          y: -396.464
        },
        m: .283,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: -396.464
        },
        t: {
          x: -67.2,
          y: -405.286
        },
        m: .237,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: -405.286
        },
        t: {
          x: -50.4,
          y: -407.272
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: -407.272
        },
        t: {
          x: -33.6,
          y: -402.177
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: -402.177
        },
        t: {
          x: -16.8,
          y: -390.036
        },
        m: .259,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: -390.036
        },
        t: {
          x: 0,
          y: -371.162
        },
        m: .316,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: -371.162
        },
        t: {
          x: 16.8,
          y: -346.135
        },
        m: .377,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: -346.135
        },
        t: {
          x: 33.6,
          y: -315.776
        },
        m: .434,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: -315.776
        },
        t: {
          x: 50.4,
          y: -281.117
        },
        m: .481,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: -281.117
        },
        t: {
          x: 67.2,
          y: -243.359
        },
        m: .517,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: -243.359
        },
        t: {
          x: 84,
          y: -203.827
        },
        m: .537,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: -203.827
        },
        t: {
          x: 100.8,
          y: -163.913
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: -163.913
        },
        t: {
          x: 117.6,
          y: -125.028
        },
        m: .529,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: -125.028
        },
        t: {
          x: 134.4,
          y: -88.538
        },
        m: .502,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: -88.538
        },
        t: {
          x: 151.2,
          y: -55.719
        },
        m: .461,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: -55.719
        },
        t: {
          x: 168,
          y: -27.699
        },
        m: .408,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: -27.699
        },
        t: {
          x: 184.8,
          y: -5.417
        },
        m: .349,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: -5.417
        },
        t: {
          x: 201.6,
          y: 10.413
        },
        m: .289,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: 10.413
        },
        t: {
          x: 218.4,
          y: 19.332
        },
        m: .238,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: 19.332
        },
        t: {
          x: 235.2,
          y: 21.155
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: 21.155
        },
        t: {
          x: 252,
          y: 15.974
        },
        m: .22,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: 15.974
        },
        t: {
          x: 268.8,
          y: 4.16
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: 4.16
        },
        t: {
          x: 285.6,
          y: -13.654
        },
        m: .306,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: -13.654
        },
        t: {
          x: 302.4,
          y: -36.602
        },
        m: .356,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: -36.602
        },
        t: {
          x: 319.2,
          y: -63.612
        },
        m: .398,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: -63.612
        },
        t: {
          x: 336,
          y: -93.452
        },
        m: .428,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: -93.452
        },
        t: {
          x: 352.8,
          y: -124.78
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: -124.78
        },
        t: {
          x: 369.6,
          y: -156.195
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: -156.195
        },
        t: {
          x: 386.4,
          y: -186.291
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: -186.291
        },
        t: {
          x: 403.2,
          y: -213.716
        },
        m: .402,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: -213.716
        },
        t: {
          x: 420,
          y: -237.222
        },
        m: .361,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: -237.222
        },
        t: {
          x: 436.8,
          y: -255.715
        },
        m: .312,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: -255.715
        },
        t: {
          x: 453.6,
          y: -268.302
        },
        m: .262,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: -268.302
        },
        t: {
          x: 470.4,
          y: -274.319
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: -274.319
        },
        t: {
          x: 487.2,
          y: -273.364
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: -273.364
        },
        t: {
          x: 504,
          y: -265.308
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: -265.308
        },
        t: {
          x: 520.8,
          y: -250.304
        },
        m: .282,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: -250.304
        },
        t: {
          x: 537.6,
          y: -228.778
        },
        m: .341,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: -228.778
        },
        t: {
          x: 554.4,
          y: -201.413
        },
        m: .401,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: -201.413
        },
        t: {
          x: 571.2,
          y: -169.123
        },
        m: .455,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: -169.123
        },
        t: {
          x: 588,
          y: -133.017
        },
        m: .498,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: -133.017
        },
        t: {
          x: 604.8,
          y: -94.353
        },
        m: .527,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: -94.353
        },
        t: {
          x: 621.6,
          y: -54.49
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: -54.49
        },
        t: {
          x: 638.4,
          y: -14.835
        },
        m: .538,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: -14.835
        },
        t: {
          x: 655.2,
          y: 23.213
        },
        m: .52,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: 23.213
        },
        t: {
          x: 672,
          y: 58.318
        },
        m: .486,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: 58.318
        },
        t: {
          x: 688.8,
          y: 89.262
        },
        m: .44,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: 89.262
        },
        t: {
          x: 705.6,
          y: 114.99
        },
        m: .384,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: 114.99
        },
        t: {
          x: 722.4,
          y: 134.653
        },
        m: .323,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: 134.653
        },
        t: {
          x: 739.2,
          y: 147.639
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: 147.639
        },
        t: {
          x: 756,
          y: 153.604
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: 153.604
        },
        t: {
          x: 772.8,
          y: 152.477
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: 152.477
        },
        t: {
          x: 789.6,
          y: 144.468
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: 144.468
        },
        t: {
          x: 806.4,
          y: 130.059
        },
        m: .277,
        r: .85,
        d: 1
      }, {
        i: 98,
        f: {
          x: 806.4,
          y: 130.059
        },
        t: {
          x: 819.824,
          y: 110.533
        },
        m: .296,
        r: .85,
        d: 1
      }, {
        i: 99,
        f: {
          x: 819.824,
          y: 110.533
        },
        t: {
          x: 843.012,
          y: 84.905
        },
        m: .432,
        r: .85,
        d: 1
      }, {
        i: 100,
        f: {
          x: 843.012,
          y: 84.905
        },
        t: {
          x: 872.301,
          y: 55.616
        },
        m: .518,
        r: .85,
        d: 1
      }, {
        i: 101,
        f: {
          x: 872.301,
          y: 55.616
        },
        t: {
          x: 900.37,
          y: 29.988
        },
        m: .475,
        r: .85,
        d: 1
      }, {
        i: 102,
        f: {
          x: 900.37,
          y: 29.988
        },
        t: {
          x: 940.643,
          y: .698
        },
        m: .622,
        r: .85,
        d: 1
      }, {
        i: 103,
        f: {
          x: 940.643,
          y: .698
        },
        t: {
          x: 1500,
          y: -34.693
        },
        m: 7.006,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: -29
        },
        t: {
          x: -823.2,
          y: -28.35
        },
        m: 8.46,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: -28.35
        },
        t: {
          x: -806.4,
          y: -34.661
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: -34.661
        },
        t: {
          x: -789.6,
          y: -47.518
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: -47.518
        },
        t: {
          x: -772.8,
          y: -66.248
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: -66.248
        },
        t: {
          x: -756,
          y: -89.947
        },
        m: .363,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: -89.947
        },
        t: {
          x: -739.2,
          y: -117.514
        },
        m: .404,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: -117.514
        },
        t: {
          x: -722.4,
          y: -147.695
        },
        m: .432,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: -147.695
        },
        t: {
          x: -705.6,
          y: -179.135
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: -179.135
        },
        t: {
          x: -688.8,
          y: -210.428
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: -210.428
        },
        t: {
          x: -672,
          y: -240.173
        },
        m: .427,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: -240.173
        },
        t: {
          x: -655.2,
          y: -267.032
        },
        m: .396,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: -267.032
        },
        t: {
          x: -638.4,
          y: -289.779
        },
        m: .353,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: -289.779
        },
        t: {
          x: -621.6,
          y: -307.351
        },
        m: .304,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: -307.351
        },
        t: {
          x: -604.8,
          y: -318.89
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: -318.89
        },
        t: {
          x: -588,
          y: -323.774
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: -323.774
        },
        t: {
          x: -571.2,
          y: -321.645
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: -321.645
        },
        t: {
          x: -554.4,
          y: -312.422
        },
        m: .24,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: -312.422
        },
        t: {
          x: -537.6,
          y: -296.302
        },
        m: .291,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: -296.302
        },
        t: {
          x: -520.8,
          y: -273.756
        },
        m: .351,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: -273.756
        },
        t: {
          x: -504,
          y: -245.507
        },
        m: .411,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: -245.507
        },
        t: {
          x: -487.2,
          y: -212.505
        },
        m: .463,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: -212.505
        },
        t: {
          x: -470.4,
          y: -175.885
        },
        m: .504,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: -175.885
        },
        t: {
          x: -453.6,
          y: -136.927
        },
        m: .53,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: -136.927
        },
        t: {
          x: -436.8,
          y: -97.001
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: -97.001
        },
        t: {
          x: -420,
          y: -57.516
        },
        m: .536,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: -57.516
        },
        t: {
          x: -403.2,
          y: -19.866
        },
        m: .515,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: -19.866
        },
        t: {
          x: -386.4,
          y: 14.632
        },
        m: .48,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: 14.632
        },
        t: {
          x: -369.6,
          y: 44.781
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: 44.781
        },
        t: {
          x: -352.8,
          y: 69.557
        },
        m: .374,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: 69.557
        },
        t: {
          x: -336,
          y: 88.15
        },
        m: .313,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: 88.15
        },
        t: {
          x: -319.2,
          y: 99.992
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: 99.992
        },
        t: {
          x: -302.4,
          y: 104.78
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: 104.78
        },
        t: {
          x: -285.6,
          y: 102.492
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: 102.492
        },
        t: {
          x: -268.8,
          y: 93.384
        },
        m: .239,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: 93.384
        },
        t: {
          x: -252,
          y: 77.981
        },
        m: .285,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: 77.981
        },
        t: {
          x: -235.2,
          y: 57.055
        },
        m: .335,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: 57.055
        },
        t: {
          x: -218.4,
          y: 31.599
        },
        m: .381,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: 31.599
        },
        t: {
          x: -201.6,
          y: 2.782
        },
        m: .417,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: 2.782
        },
        t: {
          x: -184.8,
          y: -28.094
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: -28.094
        },
        t: {
          x: -168,
          y: -59.644
        },
        m: .447,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: -59.644
        },
        t: {
          x: -151.2,
          y: -90.459
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: -90.459
        },
        t: {
          x: -134.4,
          y: -119.158
        },
        m: .416,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: -119.158
        },
        t: {
          x: -117.6,
          y: -144.441
        },
        m: .379,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: -144.441
        },
        t: {
          x: -100.8,
          y: -165.147
        },
        m: .333,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: -165.147
        },
        t: {
          x: -84,
          y: -180.293
        },
        m: .283,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: -180.293
        },
        t: {
          x: -67.2,
          y: -189.116
        },
        m: .237,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: -189.116
        },
        t: {
          x: -50.4,
          y: -191.102
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: -191.102
        },
        t: {
          x: -33.6,
          y: -186.006
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: -186.006
        },
        t: {
          x: -16.8,
          y: -173.865
        },
        m: .259,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: -173.865
        },
        t: {
          x: 0,
          y: -154.992
        },
        m: .316,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: -154.992
        },
        t: {
          x: 16.8,
          y: -129.965
        },
        m: .377,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: -129.965
        },
        t: {
          x: 33.6,
          y: -99.606
        },
        m: .434,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: -99.606
        },
        t: {
          x: 50.4,
          y: -64.946
        },
        m: .481,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: -64.946
        },
        t: {
          x: 67.2,
          y: -27.189
        },
        m: .517,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: -27.189
        },
        t: {
          x: 84,
          y: 12.344
        },
        m: .537,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: 12.344
        },
        t: {
          x: 100.8,
          y: 52.257
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: 52.257
        },
        t: {
          x: 117.6,
          y: 91.142
        },
        m: .529,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: 91.142
        },
        t: {
          x: 134.4,
          y: 127.632
        },
        m: .502,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: 127.632
        },
        t: {
          x: 151.2,
          y: 160.451
        },
        m: .461,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: 160.451
        },
        t: {
          x: 168,
          y: 188.471
        },
        m: .408,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: 188.471
        },
        t: {
          x: 184.8,
          y: 210.753
        },
        m: .349,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: 210.753
        },
        t: {
          x: 201.6,
          y: 226.583
        },
        m: .289,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: 226.583
        },
        t: {
          x: 218.4,
          y: 235.502
        },
        m: .238,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: 235.502
        },
        t: {
          x: 235.2,
          y: 237.325
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: 237.325
        },
        t: {
          x: 252,
          y: 232.144
        },
        m: .22,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: 232.144
        },
        t: {
          x: 268.8,
          y: 220.331
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: 220.331
        },
        t: {
          x: 285.6,
          y: 202.516
        },
        m: .306,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: 202.516
        },
        t: {
          x: 302.4,
          y: 179.568
        },
        m: .356,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: 179.568
        },
        t: {
          x: 319.2,
          y: 152.558
        },
        m: .398,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: 152.558
        },
        t: {
          x: 336,
          y: 122.718
        },
        m: .428,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: 122.718
        },
        t: {
          x: 352.8,
          y: 91.39
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: 91.39
        },
        t: {
          x: 369.6,
          y: 59.975
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: 59.975
        },
        t: {
          x: 386.4,
          y: 29.879
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: 29.879
        },
        t: {
          x: 403.2,
          y: 2.454
        },
        m: .402,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: 2.454
        },
        t: {
          x: 420,
          y: -21.051
        },
        m: .361,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: -21.051
        },
        t: {
          x: 436.8,
          y: -39.545
        },
        m: .312,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: -39.545
        },
        t: {
          x: 453.6,
          y: -52.131
        },
        m: .262,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: -52.131
        },
        t: {
          x: 470.4,
          y: -58.149
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: -58.149
        },
        t: {
          x: 487.2,
          y: -57.193
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: -57.193
        },
        t: {
          x: 504,
          y: -49.138
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: -49.138
        },
        t: {
          x: 520.8,
          y: -34.134
        },
        m: .282,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: -34.134
        },
        t: {
          x: 537.6,
          y: -12.608
        },
        m: .341,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: -12.608
        },
        t: {
          x: 554.4,
          y: 14.757
        },
        m: .401,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: 14.757
        },
        t: {
          x: 571.2,
          y: 47.047
        },
        m: .455,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: 47.047
        },
        t: {
          x: 588,
          y: 83.153
        },
        m: .498,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: 83.153
        },
        t: {
          x: 604.8,
          y: 121.818
        },
        m: .527,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: 121.818
        },
        t: {
          x: 621.6,
          y: 161.681
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: 161.681
        },
        t: {
          x: 638.4,
          y: 201.335
        },
        m: .538,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: 201.335
        },
        t: {
          x: 655.2,
          y: 239.383
        },
        m: .52,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: 239.383
        },
        t: {
          x: 672,
          y: 274.488
        },
        m: .486,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: 274.488
        },
        t: {
          x: 688.8,
          y: 305.433
        },
        m: .44,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: 305.433
        },
        t: {
          x: 705.6,
          y: 331.161
        },
        m: .384,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: 331.161
        },
        t: {
          x: 722.4,
          y: 350.823
        },
        m: .323,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: 350.823
        },
        t: {
          x: 739.2,
          y: 363.81
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: 363.81
        },
        t: {
          x: 756,
          y: 369.774
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: 369.774
        },
        t: {
          x: 772.8,
          y: 368.647
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: 368.647
        },
        t: {
          x: 789.6,
          y: 360.638
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: 360.638
        },
        t: {
          x: 806.4,
          y: 346.229
        },
        m: .277,
        r: .85,
        d: 1
      }, {
        i: 98,
        f: {
          x: 806.4,
          y: 346.229
        },
        t: {
          x: 824.492,
          y: 322.107
        },
        m: .377,
        r: .85,
        d: 1
      }, {
        i: 99,
        f: {
          x: 824.492,
          y: 322.107
        },
        t: {
          x: 844.594,
          y: 291.954
        },
        m: .453,
        r: .85,
        d: 1
      }, {
        i: 100,
        f: {
          x: 844.594,
          y: 291.954
        },
        t: {
          x: 872.737,
          y: 265.821
        },
        m: .48,
        r: .85,
        d: 1
      }, {
        i: 101,
        f: {
          x: 872.737,
          y: 265.821
        },
        t: {
          x: 908.92,
          y: 227.628
        },
        m: .658,
        r: .85,
        d: 1
      }, {
        i: 102,
        f: {
          x: 908.92,
          y: 227.628
        },
        t: {
          x: 1500,
          y: 187.424
        },
        m: 7.406,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: -29
        },
        t: {
          x: 823.2,
          y: -28.35
        },
        m: 8.46,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: -28.35
        },
        t: {
          x: 806.4,
          y: -34.661
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: -34.661
        },
        t: {
          x: 789.6,
          y: -47.518
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: -47.518
        },
        t: {
          x: 772.8,
          y: -66.248
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: -66.248
        },
        t: {
          x: 756,
          y: -89.947
        },
        m: .363,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: -89.947
        },
        t: {
          x: 739.2,
          y: -117.514
        },
        m: .404,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: -117.514
        },
        t: {
          x: 722.4,
          y: -147.695
        },
        m: .432,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: -147.695
        },
        t: {
          x: 705.6,
          y: -179.135
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: -179.135
        },
        t: {
          x: 688.8,
          y: -210.428
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: -210.428
        },
        t: {
          x: 672,
          y: -240.173
        },
        m: .427,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: -240.173
        },
        t: {
          x: 655.2,
          y: -267.032
        },
        m: .396,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: -267.032
        },
        t: {
          x: 638.4,
          y: -289.779
        },
        m: .353,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: -289.779
        },
        t: {
          x: 621.6,
          y: -307.351
        },
        m: .304,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: -307.351
        },
        t: {
          x: 604.8,
          y: -318.89
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: -318.89
        },
        t: {
          x: 588,
          y: -323.774
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: -323.774
        },
        t: {
          x: 571.2,
          y: -321.645
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: -321.645
        },
        t: {
          x: 554.4,
          y: -312.422
        },
        m: .24,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: -312.422
        },
        t: {
          x: 537.6,
          y: -296.302
        },
        m: .291,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: -296.302
        },
        t: {
          x: 520.8,
          y: -273.756
        },
        m: .351,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: -273.756
        },
        t: {
          x: 504,
          y: -245.507
        },
        m: .411,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: -245.507
        },
        t: {
          x: 487.2,
          y: -212.505
        },
        m: .463,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: -212.505
        },
        t: {
          x: 470.4,
          y: -175.885
        },
        m: .504,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: -175.885
        },
        t: {
          x: 453.6,
          y: -136.927
        },
        m: .53,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: -136.927
        },
        t: {
          x: 436.8,
          y: -97.001
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: -97.001
        },
        t: {
          x: 420,
          y: -57.516
        },
        m: .536,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: -57.516
        },
        t: {
          x: 403.2,
          y: -19.866
        },
        m: .515,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: -19.866
        },
        t: {
          x: 386.4,
          y: 14.632
        },
        m: .48,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: 14.632
        },
        t: {
          x: 369.6,
          y: 44.781
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: 44.781
        },
        t: {
          x: 352.8,
          y: 69.557
        },
        m: .374,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: 69.557
        },
        t: {
          x: 336,
          y: 88.15
        },
        m: .313,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: 88.15
        },
        t: {
          x: 319.2,
          y: 99.992
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: 99.992
        },
        t: {
          x: 302.4,
          y: 104.78
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: 104.78
        },
        t: {
          x: 285.6,
          y: 102.492
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: 102.492
        },
        t: {
          x: 268.8,
          y: 93.384
        },
        m: .239,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: 93.384
        },
        t: {
          x: 252,
          y: 77.981
        },
        m: .285,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: 77.981
        },
        t: {
          x: 235.2,
          y: 57.055
        },
        m: .335,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: 57.055
        },
        t: {
          x: 218.4,
          y: 31.599
        },
        m: .381,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: 31.599
        },
        t: {
          x: 201.6,
          y: 2.782
        },
        m: .417,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: 2.782
        },
        t: {
          x: 184.8,
          y: -28.094
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: -28.094
        },
        t: {
          x: 168,
          y: -59.644
        },
        m: .447,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: -59.644
        },
        t: {
          x: 151.2,
          y: -90.459
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: -90.459
        },
        t: {
          x: 134.4,
          y: -119.158
        },
        m: .416,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: -119.158
        },
        t: {
          x: 117.6,
          y: -144.441
        },
        m: .379,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: -144.441
        },
        t: {
          x: 100.8,
          y: -165.147
        },
        m: .333,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: -165.147
        },
        t: {
          x: 84,
          y: -180.293
        },
        m: .283,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: -180.293
        },
        t: {
          x: 67.2,
          y: -189.116
        },
        m: .237,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: -189.116
        },
        t: {
          x: 50.4,
          y: -191.102
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: -191.102
        },
        t: {
          x: 33.6,
          y: -186.006
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: -186.006
        },
        t: {
          x: 16.8,
          y: -173.865
        },
        m: .259,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: -173.865
        },
        t: {
          x: 0,
          y: -154.992
        },
        m: .316,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: -154.992
        },
        t: {
          x: -16.8,
          y: -129.965
        },
        m: .377,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: -129.965
        },
        t: {
          x: -33.6,
          y: -99.606
        },
        m: .434,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: -99.606
        },
        t: {
          x: -50.4,
          y: -64.946
        },
        m: .481,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: -64.946
        },
        t: {
          x: -67.2,
          y: -27.189
        },
        m: .517,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: -27.189
        },
        t: {
          x: -84,
          y: 12.344
        },
        m: .537,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: 12.344
        },
        t: {
          x: -100.8,
          y: 52.257
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: 52.257
        },
        t: {
          x: -117.6,
          y: 91.142
        },
        m: .529,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: 91.142
        },
        t: {
          x: -134.4,
          y: 127.632
        },
        m: .502,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: 127.632
        },
        t: {
          x: -151.2,
          y: 160.451
        },
        m: .461,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: 160.451
        },
        t: {
          x: -168,
          y: 188.471
        },
        m: .408,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: 188.471
        },
        t: {
          x: -184.8,
          y: 210.753
        },
        m: .349,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: 210.753
        },
        t: {
          x: -201.6,
          y: 226.583
        },
        m: .289,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: 226.583
        },
        t: {
          x: -218.4,
          y: 235.502
        },
        m: .238,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: 235.502
        },
        t: {
          x: -235.2,
          y: 237.325
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: 237.325
        },
        t: {
          x: -252,
          y: 232.144
        },
        m: .22,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: 232.144
        },
        t: {
          x: -268.8,
          y: 220.331
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: 220.331
        },
        t: {
          x: -285.6,
          y: 202.516
        },
        m: .306,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: 202.516
        },
        t: {
          x: -302.4,
          y: 179.568
        },
        m: .356,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: 179.568
        },
        t: {
          x: -319.2,
          y: 152.558
        },
        m: .398,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: 152.558
        },
        t: {
          x: -336,
          y: 122.718
        },
        m: .428,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: 122.718
        },
        t: {
          x: -352.8,
          y: 91.39
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: 91.39
        },
        t: {
          x: -369.6,
          y: 59.975
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: 59.975
        },
        t: {
          x: -386.4,
          y: 29.879
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: 29.879
        },
        t: {
          x: -403.2,
          y: 2.454
        },
        m: .402,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: 2.454
        },
        t: {
          x: -420,
          y: -21.051
        },
        m: .361,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: -21.051
        },
        t: {
          x: -436.8,
          y: -39.545
        },
        m: .312,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: -39.545
        },
        t: {
          x: -453.6,
          y: -52.131
        },
        m: .262,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: -52.131
        },
        t: {
          x: -470.4,
          y: -58.149
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: -58.149
        },
        t: {
          x: -487.2,
          y: -57.193
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: -57.193
        },
        t: {
          x: -504,
          y: -49.138
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: -49.138
        },
        t: {
          x: -520.8,
          y: -34.134
        },
        m: .282,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: -34.134
        },
        t: {
          x: -537.6,
          y: -12.608
        },
        m: .341,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: -12.608
        },
        t: {
          x: -554.4,
          y: 14.757
        },
        m: .401,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: 14.757
        },
        t: {
          x: -571.2,
          y: 47.047
        },
        m: .455,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: 47.047
        },
        t: {
          x: -588,
          y: 83.153
        },
        m: .498,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: 83.153
        },
        t: {
          x: -604.8,
          y: 121.818
        },
        m: .527,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: 121.818
        },
        t: {
          x: -621.6,
          y: 161.681
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: 161.681
        },
        t: {
          x: -638.4,
          y: 201.335
        },
        m: .538,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: 201.335
        },
        t: {
          x: -655.2,
          y: 239.383
        },
        m: .52,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: 239.383
        },
        t: {
          x: -672,
          y: 274.488
        },
        m: .486,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: 274.488
        },
        t: {
          x: -688.8,
          y: 305.433
        },
        m: .44,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: 305.433
        },
        t: {
          x: -705.6,
          y: 331.161
        },
        m: .384,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: 331.161
        },
        t: {
          x: -722.4,
          y: 350.823
        },
        m: .323,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: 350.823
        },
        t: {
          x: -739.2,
          y: 363.81
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: 363.81
        },
        t: {
          x: -756,
          y: 369.774
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: 369.774
        },
        t: {
          x: -772.8,
          y: 368.647
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: 368.647
        },
        t: {
          x: -789.6,
          y: 360.638
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: 360.638
        },
        t: {
          x: -806.4,
          y: 346.229
        },
        m: .277,
        r: .85,
        d: 0
      }, {
        i: 98,
        f: {
          x: -806.4,
          y: 346.229
        },
        t: {
          x: -824.492,
          y: 322.107
        },
        m: .377,
        r: .85,
        d: 0
      }, {
        i: 99,
        f: {
          x: -824.492,
          y: 322.107
        },
        t: {
          x: -844.594,
          y: 291.954
        },
        m: .453,
        r: .85,
        d: 0
      }, {
        i: 100,
        f: {
          x: -844.594,
          y: 291.954
        },
        t: {
          x: -872.737,
          y: 265.821
        },
        m: .48,
        r: .85,
        d: 0
      }, {
        i: 101,
        f: {
          x: -872.737,
          y: 265.821
        },
        t: {
          x: -908.92,
          y: 227.628
        },
        m: .658,
        r: .85,
        d: 0
      }, {
        i: 102,
        f: {
          x: -908.92,
          y: 227.628
        },
        t: {
          x: -1500,
          y: 187.424
        },
        m: 7.406,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: 259.244
        },
        t: {
          x: -823.2,
          y: 259.893
        },
        m: 8.46,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: 259.893
        },
        t: {
          x: -806.4,
          y: 253.582
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: 253.582
        },
        t: {
          x: -789.6,
          y: 240.725
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: 240.725
        },
        t: {
          x: -772.8,
          y: 221.995
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: 221.995
        },
        t: {
          x: -756,
          y: 198.297
        },
        m: .363,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: 198.297
        },
        t: {
          x: -739.2,
          y: 170.73
        },
        m: .404,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: 170.73
        },
        t: {
          x: -722.4,
          y: 140.548
        },
        m: .432,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: 140.548
        },
        t: {
          x: -705.6,
          y: 109.108
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: 109.108
        },
        t: {
          x: -688.8,
          y: 77.816
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: 77.816
        },
        t: {
          x: -672,
          y: 48.07
        },
        m: .427,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: 48.07
        },
        t: {
          x: -655.2,
          y: 21.212
        },
        m: .396,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: 21.212
        },
        t: {
          x: -638.4,
          y: -1.535
        },
        m: .353,
        r: .85,
        d: 1
      }, {
        i: 12,
        f: {
          x: -638.4,
          y: -1.535
        },
        t: {
          x: -621.6,
          y: -19.108
        },
        m: .304,
        r: .85,
        d: 1
      }, {
        i: 13,
        f: {
          x: -621.6,
          y: -19.108
        },
        t: {
          x: -604.8,
          y: -30.646
        },
        m: .255,
        r: .85,
        d: 1
      }, {
        i: 14,
        f: {
          x: -604.8,
          y: -30.646
        },
        t: {
          x: -588,
          y: -35.53
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 15,
        f: {
          x: -588,
          y: -35.53
        },
        t: {
          x: -571.2,
          y: -33.401
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 16,
        f: {
          x: -571.2,
          y: -33.401
        },
        t: {
          x: -554.4,
          y: -24.178
        },
        m: .24,
        r: .85,
        d: 1
      }, {
        i: 17,
        f: {
          x: -554.4,
          y: -24.178
        },
        t: {
          x: -537.6,
          y: -8.058
        },
        m: .291,
        r: .85,
        d: 1
      }, {
        i: 18,
        f: {
          x: -537.6,
          y: -8.058
        },
        t: {
          x: -520.8,
          y: 14.488
        },
        m: .351,
        r: .85,
        d: 1
      }, {
        i: 19,
        f: {
          x: -520.8,
          y: 14.488
        },
        t: {
          x: -504,
          y: 42.736
        },
        m: .411,
        r: .85,
        d: 1
      }, {
        i: 20,
        f: {
          x: -504,
          y: 42.736
        },
        t: {
          x: -487.2,
          y: 75.739
        },
        m: .463,
        r: .85,
        d: 1
      }, {
        i: 21,
        f: {
          x: -487.2,
          y: 75.739
        },
        t: {
          x: -470.4,
          y: 112.358
        },
        m: .504,
        r: .85,
        d: 1
      }, {
        i: 22,
        f: {
          x: -470.4,
          y: 112.358
        },
        t: {
          x: -453.6,
          y: 151.317
        },
        m: .53,
        r: .85,
        d: 1
      }, {
        i: 23,
        f: {
          x: -453.6,
          y: 151.317
        },
        t: {
          x: -436.8,
          y: 191.243
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 24,
        f: {
          x: -436.8,
          y: 191.243
        },
        t: {
          x: -420,
          y: 230.727
        },
        m: .536,
        r: .85,
        d: 1
      }, {
        i: 25,
        f: {
          x: -420,
          y: 230.727
        },
        t: {
          x: -403.2,
          y: 268.378
        },
        m: .515,
        r: .85,
        d: 1
      }, {
        i: 26,
        f: {
          x: -403.2,
          y: 268.378
        },
        t: {
          x: -386.4,
          y: 302.875
        },
        m: .48,
        r: .85,
        d: 1
      }, {
        i: 27,
        f: {
          x: -386.4,
          y: 302.875
        },
        t: {
          x: -369.6,
          y: 333.024
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 28,
        f: {
          x: -369.6,
          y: 333.024
        },
        t: {
          x: -352.8,
          y: 357.801
        },
        m: .374,
        r: .85,
        d: 1
      }, {
        i: 29,
        f: {
          x: -352.8,
          y: 357.801
        },
        t: {
          x: -336,
          y: 376.394
        },
        m: .313,
        r: .85,
        d: 1
      }, {
        i: 30,
        f: {
          x: -336,
          y: 376.394
        },
        t: {
          x: -319.2,
          y: 388.235
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 31,
        f: {
          x: -319.2,
          y: 388.235
        },
        t: {
          x: -302.4,
          y: 393.024
        },
        m: .218,
        r: .85,
        d: 1
      }, {
        i: 32,
        f: {
          x: -302.4,
          y: 393.024
        },
        t: {
          x: -285.6,
          y: 390.736
        },
        m: .212,
        r: .85,
        d: 1
      }, {
        i: 33,
        f: {
          x: -285.6,
          y: 390.736
        },
        t: {
          x: -268.8,
          y: 381.628
        },
        m: .239,
        r: .85,
        d: 1
      }, {
        i: 34,
        f: {
          x: -268.8,
          y: 381.628
        },
        t: {
          x: -252,
          y: 366.224
        },
        m: .285,
        r: .85,
        d: 1
      }, {
        i: 35,
        f: {
          x: -252,
          y: 366.224
        },
        t: {
          x: -235.2,
          y: 345.299
        },
        m: .335,
        r: .85,
        d: 1
      }, {
        i: 36,
        f: {
          x: -235.2,
          y: 345.299
        },
        t: {
          x: -218.4,
          y: 319.843
        },
        m: .381,
        r: .85,
        d: 1
      }, {
        i: 37,
        f: {
          x: -218.4,
          y: 319.843
        },
        t: {
          x: -201.6,
          y: 291.026
        },
        m: .417,
        r: .85,
        d: 1
      }, {
        i: 38,
        f: {
          x: -201.6,
          y: 291.026
        },
        t: {
          x: -184.8,
          y: 260.15
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 39,
        f: {
          x: -184.8,
          y: 260.15
        },
        t: {
          x: -168,
          y: 228.599
        },
        m: .447,
        r: .85,
        d: 1
      }, {
        i: 40,
        f: {
          x: -168,
          y: 228.599
        },
        t: {
          x: -151.2,
          y: 197.784
        },
        m: .439,
        r: .85,
        d: 1
      }, {
        i: 41,
        f: {
          x: -151.2,
          y: 197.784
        },
        t: {
          x: -134.4,
          y: 169.086
        },
        m: .416,
        r: .85,
        d: 1
      }, {
        i: 42,
        f: {
          x: -134.4,
          y: 169.086
        },
        t: {
          x: -117.6,
          y: 143.802
        },
        m: .379,
        r: .85,
        d: 1
      }, {
        i: 43,
        f: {
          x: -117.6,
          y: 143.802
        },
        t: {
          x: -100.8,
          y: 123.096
        },
        m: .333,
        r: .85,
        d: 1
      }, {
        i: 44,
        f: {
          x: -100.8,
          y: 123.096
        },
        t: {
          x: -84,
          y: 107.95
        },
        m: .283,
        r: .85,
        d: 1
      }, {
        i: 45,
        f: {
          x: -84,
          y: 107.95
        },
        t: {
          x: -67.2,
          y: 99.128
        },
        m: .237,
        r: .85,
        d: 1
      }, {
        i: 46,
        f: {
          x: -67.2,
          y: 99.128
        },
        t: {
          x: -50.4,
          y: 97.142
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 47,
        f: {
          x: -50.4,
          y: 97.142
        },
        t: {
          x: -33.6,
          y: 102.237
        },
        m: .219,
        r: .85,
        d: 1
      }, {
        i: 48,
        f: {
          x: -33.6,
          y: 102.237
        },
        t: {
          x: -16.8,
          y: 114.378
        },
        m: .259,
        r: .85,
        d: 1
      }, {
        i: 49,
        f: {
          x: -16.8,
          y: 114.378
        },
        t: {
          x: 0,
          y: 133.252
        },
        m: .316,
        r: .85,
        d: 1
      }, {
        i: 50,
        f: {
          x: 0,
          y: 133.252
        },
        t: {
          x: 16.8,
          y: 158.279
        },
        m: .377,
        r: .85,
        d: 1
      }, {
        i: 51,
        f: {
          x: 16.8,
          y: 158.279
        },
        t: {
          x: 33.6,
          y: 188.638
        },
        m: .434,
        r: .85,
        d: 1
      }, {
        i: 52,
        f: {
          x: 33.6,
          y: 188.638
        },
        t: {
          x: 50.4,
          y: 223.297
        },
        m: .481,
        r: .85,
        d: 1
      }, {
        i: 53,
        f: {
          x: 50.4,
          y: 223.297
        },
        t: {
          x: 67.2,
          y: 261.055
        },
        m: .517,
        r: .85,
        d: 1
      }, {
        i: 54,
        f: {
          x: 67.2,
          y: 261.055
        },
        t: {
          x: 84,
          y: 300.587
        },
        m: .537,
        r: .85,
        d: 1
      }, {
        i: 55,
        f: {
          x: 84,
          y: 300.587
        },
        t: {
          x: 100.8,
          y: 340.501
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 56,
        f: {
          x: 100.8,
          y: 340.501
        },
        t: {
          x: 117.6,
          y: 379.386
        },
        m: .529,
        r: .85,
        d: 1
      }, {
        i: 57,
        f: {
          x: 117.6,
          y: 379.386
        },
        t: {
          x: 134.4,
          y: 415.875
        },
        m: .502,
        r: .85,
        d: 1
      }, {
        i: 58,
        f: {
          x: 134.4,
          y: 415.875
        },
        t: {
          x: 151.2,
          y: 448.695
        },
        m: .461,
        r: .85,
        d: 1
      }, {
        i: 59,
        f: {
          x: 151.2,
          y: 448.695
        },
        t: {
          x: 168,
          y: 476.715
        },
        m: .408,
        r: .85,
        d: 1
      }, {
        i: 60,
        f: {
          x: 168,
          y: 476.715
        },
        t: {
          x: 184.8,
          y: 498.997
        },
        m: .349,
        r: .85,
        d: 1
      }, {
        i: 61,
        f: {
          x: 184.8,
          y: 498.997
        },
        t: {
          x: 201.6,
          y: 514.827
        },
        m: .289,
        r: .85,
        d: 1
      }, {
        i: 62,
        f: {
          x: 201.6,
          y: 514.827
        },
        t: {
          x: 218.4,
          y: 523.746
        },
        m: .238,
        r: .85,
        d: 1
      }, {
        i: 63,
        f: {
          x: 218.4,
          y: 523.746
        },
        t: {
          x: 235.2,
          y: 525.569
        },
        m: .211,
        r: .85,
        d: 1
      }, {
        i: 64,
        f: {
          x: 235.2,
          y: 525.569
        },
        t: {
          x: 252,
          y: 520.388
        },
        m: .22,
        r: .85,
        d: 1
      }, {
        i: 65,
        f: {
          x: 252,
          y: 520.388
        },
        t: {
          x: 268.8,
          y: 508.574
        },
        m: .257,
        r: .85,
        d: 1
      }, {
        i: 66,
        f: {
          x: 268.8,
          y: 508.574
        },
        t: {
          x: 285.6,
          y: 490.759
        },
        m: .306,
        r: .85,
        d: 1
      }, {
        i: 67,
        f: {
          x: 285.6,
          y: 490.759
        },
        t: {
          x: 302.4,
          y: 467.812
        },
        m: .355,
        r: .85,
        d: 1
      }, {
        i: 68,
        f: {
          x: 302.4,
          y: 467.812
        },
        t: {
          x: 319.2,
          y: 440.802
        },
        m: .398,
        r: .85,
        d: 1
      }, {
        i: 69,
        f: {
          x: 319.2,
          y: 440.802
        },
        t: {
          x: 336,
          y: 410.962
        },
        m: .428,
        r: .85,
        d: 1
      }, {
        i: 70,
        f: {
          x: 336,
          y: 410.962
        },
        t: {
          x: 352.8,
          y: 379.633
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 71,
        f: {
          x: 352.8,
          y: 379.633
        },
        t: {
          x: 369.6,
          y: 348.219
        },
        m: .445,
        r: .85,
        d: 1
      }, {
        i: 72,
        f: {
          x: 369.6,
          y: 348.219
        },
        t: {
          x: 386.4,
          y: 318.123
        },
        m: .431,
        r: .85,
        d: 1
      }, {
        i: 73,
        f: {
          x: 386.4,
          y: 318.123
        },
        t: {
          x: 403.2,
          y: 290.698
        },
        m: .402,
        r: .85,
        d: 1
      }, {
        i: 74,
        f: {
          x: 403.2,
          y: 290.698
        },
        t: {
          x: 420,
          y: 267.192
        },
        m: .361,
        r: .85,
        d: 1
      }, {
        i: 75,
        f: {
          x: 420,
          y: 267.192
        },
        t: {
          x: 436.8,
          y: 248.699
        },
        m: .312,
        r: .85,
        d: 1
      }, {
        i: 76,
        f: {
          x: 436.8,
          y: 248.699
        },
        t: {
          x: 453.6,
          y: 236.112
        },
        m: .262,
        r: .85,
        d: 1
      }, {
        i: 77,
        f: {
          x: 453.6,
          y: 236.112
        },
        t: {
          x: 470.4,
          y: 230.095
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 78,
        f: {
          x: 470.4,
          y: 230.095
        },
        t: {
          x: 487.2,
          y: 231.05
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 79,
        f: {
          x: 487.2,
          y: 231.05
        },
        t: {
          x: 504,
          y: 239.106
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 80,
        f: {
          x: 504,
          y: 239.106
        },
        t: {
          x: 520.8,
          y: 254.11
        },
        m: .282,
        r: .85,
        d: 1
      }, {
        i: 81,
        f: {
          x: 520.8,
          y: 254.11
        },
        t: {
          x: 537.6,
          y: 275.636
        },
        m: .341,
        r: .85,
        d: 1
      }, {
        i: 82,
        f: {
          x: 537.6,
          y: 275.636
        },
        t: {
          x: 554.4,
          y: 303.001
        },
        m: .401,
        r: .85,
        d: 1
      }, {
        i: 83,
        f: {
          x: 554.4,
          y: 303.001
        },
        t: {
          x: 571.2,
          y: 335.29
        },
        m: .455,
        r: .85,
        d: 1
      }, {
        i: 84,
        f: {
          x: 571.2,
          y: 335.29
        },
        t: {
          x: 588,
          y: 371.397
        },
        m: .498,
        r: .85,
        d: 1
      }, {
        i: 85,
        f: {
          x: 588,
          y: 371.397
        },
        t: {
          x: 604.8,
          y: 410.061
        },
        m: .527,
        r: .85,
        d: 1
      }, {
        i: 86,
        f: {
          x: 604.8,
          y: 410.061
        },
        t: {
          x: 621.6,
          y: 449.924
        },
        m: .541,
        r: .85,
        d: 1
      }, {
        i: 87,
        f: {
          x: 621.6,
          y: 449.924
        },
        t: {
          x: 638.4,
          y: 489.579
        },
        m: .538,
        r: .85,
        d: 1
      }, {
        i: 88,
        f: {
          x: 638.4,
          y: 489.579
        },
        t: {
          x: 655.2,
          y: 527.627
        },
        m: .52,
        r: .85,
        d: 1
      }, {
        i: 89,
        f: {
          x: 655.2,
          y: 527.627
        },
        t: {
          x: 672,
          y: 562.732
        },
        m: .486,
        r: .85,
        d: 1
      }, {
        i: 90,
        f: {
          x: 672,
          y: 562.732
        },
        t: {
          x: 688.8,
          y: 593.676
        },
        m: .44,
        r: .85,
        d: 1
      }, {
        i: 91,
        f: {
          x: 688.8,
          y: 593.676
        },
        t: {
          x: 705.6,
          y: 619.404
        },
        m: .384,
        r: .85,
        d: 1
      }, {
        i: 92,
        f: {
          x: 705.6,
          y: 619.404
        },
        t: {
          x: 722.4,
          y: 639.067
        },
        m: .323,
        r: .85,
        d: 1
      }, {
        i: 93,
        f: {
          x: 722.4,
          y: 639.067
        },
        t: {
          x: 739.2,
          y: 652.053
        },
        m: .265,
        r: .85,
        d: 1
      }, {
        i: 94,
        f: {
          x: 739.2,
          y: 652.053
        },
        t: {
          x: 756,
          y: 658.018
        },
        m: .223,
        r: .85,
        d: 1
      }, {
        i: 95,
        f: {
          x: 756,
          y: 658.018
        },
        t: {
          x: 772.8,
          y: 656.891
        },
        m: .21,
        r: .85,
        d: 1
      }, {
        i: 96,
        f: {
          x: 772.8,
          y: 656.891
        },
        t: {
          x: 789.6,
          y: 648.882
        },
        m: .233,
        r: .85,
        d: 1
      }, {
        i: 97,
        f: {
          x: 789.6,
          y: 648.882
        },
        t: {
          x: 806.4,
          y: 634.473
        },
        m: .277,
        r: .85,
        d: 1
      }, {
        i: 98,
        f: {
          x: 806.4,
          y: 634.473
        },
        t: {
          x: 824.492,
          y: 610.351
        },
        m: .377,
        r: .85,
        d: 1
      }, {
        i: 99,
        f: {
          x: 824.492,
          y: 610.351
        },
        t: {
          x: 844.594,
          y: 580.198
        },
        m: .453,
        r: .85,
        d: 1
      }, {
        i: 100,
        f: {
          x: 844.594,
          y: 580.198
        },
        t: {
          x: 872.737,
          y: 554.065
        },
        m: .48,
        r: .85,
        d: 1
      }, {
        i: 101,
        f: {
          x: 872.737,
          y: 554.065
        },
        t: {
          x: 908.92,
          y: 515.872
        },
        m: .658,
        r: .85,
        d: 1
      }, {
        i: 102,
        f: {
          x: 908.92,
          y: 515.872
        },
        t: {
          x: 1500,
          y: 475.668
        },
        m: 7.406,
        r: .85,
        d: 1
      } ], [ {
        i: 0,
        f: {
          x: 1500,
          y: 259.244
        },
        t: {
          x: 823.2,
          y: 259.893
        },
        m: 8.46,
        r: .85,
        d: 0
      }, {
        i: 1,
        f: {
          x: 823.2,
          y: 259.893
        },
        t: {
          x: 806.4,
          y: 253.582
        },
        m: .224,
        r: .85,
        d: 0
      }, {
        i: 2,
        f: {
          x: 806.4,
          y: 253.582
        },
        t: {
          x: 789.6,
          y: 240.725
        },
        m: .264,
        r: .85,
        d: 0
      }, {
        i: 3,
        f: {
          x: 789.6,
          y: 240.725
        },
        t: {
          x: 772.8,
          y: 221.995
        },
        m: .315,
        r: .85,
        d: 0
      }, {
        i: 4,
        f: {
          x: 772.8,
          y: 221.995
        },
        t: {
          x: 756,
          y: 198.297
        },
        m: .363,
        r: .85,
        d: 0
      }, {
        i: 5,
        f: {
          x: 756,
          y: 198.297
        },
        t: {
          x: 739.2,
          y: 170.73
        },
        m: .404,
        r: .85,
        d: 0
      }, {
        i: 6,
        f: {
          x: 739.2,
          y: 170.73
        },
        t: {
          x: 722.4,
          y: 140.548
        },
        m: .432,
        r: .85,
        d: 0
      }, {
        i: 7,
        f: {
          x: 722.4,
          y: 140.548
        },
        t: {
          x: 705.6,
          y: 109.108
        },
        m: .446,
        r: .85,
        d: 0
      }, {
        i: 8,
        f: {
          x: 705.6,
          y: 109.108
        },
        t: {
          x: 688.8,
          y: 77.816
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 9,
        f: {
          x: 688.8,
          y: 77.816
        },
        t: {
          x: 672,
          y: 48.07
        },
        m: .427,
        r: .85,
        d: 0
      }, {
        i: 10,
        f: {
          x: 672,
          y: 48.07
        },
        t: {
          x: 655.2,
          y: 21.212
        },
        m: .396,
        r: .85,
        d: 0
      }, {
        i: 11,
        f: {
          x: 655.2,
          y: 21.212
        },
        t: {
          x: 638.4,
          y: -1.535
        },
        m: .353,
        r: .85,
        d: 0
      }, {
        i: 12,
        f: {
          x: 638.4,
          y: -1.535
        },
        t: {
          x: 621.6,
          y: -19.108
        },
        m: .304,
        r: .85,
        d: 0
      }, {
        i: 13,
        f: {
          x: 621.6,
          y: -19.108
        },
        t: {
          x: 604.8,
          y: -30.646
        },
        m: .255,
        r: .85,
        d: 0
      }, {
        i: 14,
        f: {
          x: 604.8,
          y: -30.646
        },
        t: {
          x: 588,
          y: -35.53
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 15,
        f: {
          x: 588,
          y: -35.53
        },
        t: {
          x: 571.2,
          y: -33.401
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 16,
        f: {
          x: 571.2,
          y: -33.401
        },
        t: {
          x: 554.4,
          y: -24.178
        },
        m: .24,
        r: .85,
        d: 0
      }, {
        i: 17,
        f: {
          x: 554.4,
          y: -24.178
        },
        t: {
          x: 537.6,
          y: -8.058
        },
        m: .291,
        r: .85,
        d: 0
      }, {
        i: 18,
        f: {
          x: 537.6,
          y: -8.058
        },
        t: {
          x: 520.8,
          y: 14.488
        },
        m: .351,
        r: .85,
        d: 0
      }, {
        i: 19,
        f: {
          x: 520.8,
          y: 14.488
        },
        t: {
          x: 504,
          y: 42.736
        },
        m: .411,
        r: .85,
        d: 0
      }, {
        i: 20,
        f: {
          x: 504,
          y: 42.736
        },
        t: {
          x: 487.2,
          y: 75.739
        },
        m: .463,
        r: .85,
        d: 0
      }, {
        i: 21,
        f: {
          x: 487.2,
          y: 75.739
        },
        t: {
          x: 470.4,
          y: 112.358
        },
        m: .504,
        r: .85,
        d: 0
      }, {
        i: 22,
        f: {
          x: 470.4,
          y: 112.358
        },
        t: {
          x: 453.6,
          y: 151.317
        },
        m: .53,
        r: .85,
        d: 0
      }, {
        i: 23,
        f: {
          x: 453.6,
          y: 151.317
        },
        t: {
          x: 436.8,
          y: 191.243
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 24,
        f: {
          x: 436.8,
          y: 191.243
        },
        t: {
          x: 420,
          y: 230.727
        },
        m: .536,
        r: .85,
        d: 0
      }, {
        i: 25,
        f: {
          x: 420,
          y: 230.727
        },
        t: {
          x: 403.2,
          y: 268.378
        },
        m: .515,
        r: .85,
        d: 0
      }, {
        i: 26,
        f: {
          x: 403.2,
          y: 268.378
        },
        t: {
          x: 386.4,
          y: 302.875
        },
        m: .48,
        r: .85,
        d: 0
      }, {
        i: 27,
        f: {
          x: 386.4,
          y: 302.875
        },
        t: {
          x: 369.6,
          y: 333.024
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 28,
        f: {
          x: 369.6,
          y: 333.024
        },
        t: {
          x: 352.8,
          y: 357.801
        },
        m: .374,
        r: .85,
        d: 0
      }, {
        i: 29,
        f: {
          x: 352.8,
          y: 357.801
        },
        t: {
          x: 336,
          y: 376.394
        },
        m: .313,
        r: .85,
        d: 0
      }, {
        i: 30,
        f: {
          x: 336,
          y: 376.394
        },
        t: {
          x: 319.2,
          y: 388.235
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 31,
        f: {
          x: 319.2,
          y: 388.235
        },
        t: {
          x: 302.4,
          y: 393.024
        },
        m: .218,
        r: .85,
        d: 0
      }, {
        i: 32,
        f: {
          x: 302.4,
          y: 393.024
        },
        t: {
          x: 285.6,
          y: 390.736
        },
        m: .212,
        r: .85,
        d: 0
      }, {
        i: 33,
        f: {
          x: 285.6,
          y: 390.736
        },
        t: {
          x: 268.8,
          y: 381.628
        },
        m: .239,
        r: .85,
        d: 0
      }, {
        i: 34,
        f: {
          x: 268.8,
          y: 381.628
        },
        t: {
          x: 252,
          y: 366.224
        },
        m: .285,
        r: .85,
        d: 0
      }, {
        i: 35,
        f: {
          x: 252,
          y: 366.224
        },
        t: {
          x: 235.2,
          y: 345.299
        },
        m: .335,
        r: .85,
        d: 0
      }, {
        i: 36,
        f: {
          x: 235.2,
          y: 345.299
        },
        t: {
          x: 218.4,
          y: 319.843
        },
        m: .381,
        r: .85,
        d: 0
      }, {
        i: 37,
        f: {
          x: 218.4,
          y: 319.843
        },
        t: {
          x: 201.6,
          y: 291.026
        },
        m: .417,
        r: .85,
        d: 0
      }, {
        i: 38,
        f: {
          x: 201.6,
          y: 291.026
        },
        t: {
          x: 184.8,
          y: 260.15
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 39,
        f: {
          x: 184.8,
          y: 260.15
        },
        t: {
          x: 168,
          y: 228.599
        },
        m: .447,
        r: .85,
        d: 0
      }, {
        i: 40,
        f: {
          x: 168,
          y: 228.599
        },
        t: {
          x: 151.2,
          y: 197.784
        },
        m: .439,
        r: .85,
        d: 0
      }, {
        i: 41,
        f: {
          x: 151.2,
          y: 197.784
        },
        t: {
          x: 134.4,
          y: 169.086
        },
        m: .416,
        r: .85,
        d: 0
      }, {
        i: 42,
        f: {
          x: 134.4,
          y: 169.086
        },
        t: {
          x: 117.6,
          y: 143.802
        },
        m: .379,
        r: .85,
        d: 0
      }, {
        i: 43,
        f: {
          x: 117.6,
          y: 143.802
        },
        t: {
          x: 100.8,
          y: 123.096
        },
        m: .333,
        r: .85,
        d: 0
      }, {
        i: 44,
        f: {
          x: 100.8,
          y: 123.096
        },
        t: {
          x: 84,
          y: 107.95
        },
        m: .283,
        r: .85,
        d: 0
      }, {
        i: 45,
        f: {
          x: 84,
          y: 107.95
        },
        t: {
          x: 67.2,
          y: 99.128
        },
        m: .237,
        r: .85,
        d: 0
      }, {
        i: 46,
        f: {
          x: 67.2,
          y: 99.128
        },
        t: {
          x: 50.4,
          y: 97.142
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 47,
        f: {
          x: 50.4,
          y: 97.142
        },
        t: {
          x: 33.6,
          y: 102.237
        },
        m: .219,
        r: .85,
        d: 0
      }, {
        i: 48,
        f: {
          x: 33.6,
          y: 102.237
        },
        t: {
          x: 16.8,
          y: 114.378
        },
        m: .259,
        r: .85,
        d: 0
      }, {
        i: 49,
        f: {
          x: 16.8,
          y: 114.378
        },
        t: {
          x: 0,
          y: 133.252
        },
        m: .316,
        r: .85,
        d: 0
      }, {
        i: 50,
        f: {
          x: 0,
          y: 133.252
        },
        t: {
          x: -16.8,
          y: 158.279
        },
        m: .377,
        r: .85,
        d: 0
      }, {
        i: 51,
        f: {
          x: -16.8,
          y: 158.279
        },
        t: {
          x: -33.6,
          y: 188.638
        },
        m: .434,
        r: .85,
        d: 0
      }, {
        i: 52,
        f: {
          x: -33.6,
          y: 188.638
        },
        t: {
          x: -50.4,
          y: 223.297
        },
        m: .481,
        r: .85,
        d: 0
      }, {
        i: 53,
        f: {
          x: -50.4,
          y: 223.297
        },
        t: {
          x: -67.2,
          y: 261.055
        },
        m: .517,
        r: .85,
        d: 0
      }, {
        i: 54,
        f: {
          x: -67.2,
          y: 261.055
        },
        t: {
          x: -84,
          y: 300.587
        },
        m: .537,
        r: .85,
        d: 0
      }, {
        i: 55,
        f: {
          x: -84,
          y: 300.587
        },
        t: {
          x: -100.8,
          y: 340.501
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 56,
        f: {
          x: -100.8,
          y: 340.501
        },
        t: {
          x: -117.6,
          y: 379.386
        },
        m: .529,
        r: .85,
        d: 0
      }, {
        i: 57,
        f: {
          x: -117.6,
          y: 379.386
        },
        t: {
          x: -134.4,
          y: 415.875
        },
        m: .502,
        r: .85,
        d: 0
      }, {
        i: 58,
        f: {
          x: -134.4,
          y: 415.875
        },
        t: {
          x: -151.2,
          y: 448.695
        },
        m: .461,
        r: .85,
        d: 0
      }, {
        i: 59,
        f: {
          x: -151.2,
          y: 448.695
        },
        t: {
          x: -168,
          y: 476.715
        },
        m: .408,
        r: .85,
        d: 0
      }, {
        i: 60,
        f: {
          x: -168,
          y: 476.715
        },
        t: {
          x: -184.8,
          y: 498.997
        },
        m: .349,
        r: .85,
        d: 0
      }, {
        i: 61,
        f: {
          x: -184.8,
          y: 498.997
        },
        t: {
          x: -201.6,
          y: 514.827
        },
        m: .289,
        r: .85,
        d: 0
      }, {
        i: 62,
        f: {
          x: -201.6,
          y: 514.827
        },
        t: {
          x: -218.4,
          y: 523.746
        },
        m: .238,
        r: .85,
        d: 0
      }, {
        i: 63,
        f: {
          x: -218.4,
          y: 523.746
        },
        t: {
          x: -235.2,
          y: 525.569
        },
        m: .211,
        r: .85,
        d: 0
      }, {
        i: 64,
        f: {
          x: -235.2,
          y: 525.569
        },
        t: {
          x: -252,
          y: 520.388
        },
        m: .22,
        r: .85,
        d: 0
      }, {
        i: 65,
        f: {
          x: -252,
          y: 520.388
        },
        t: {
          x: -268.8,
          y: 508.574
        },
        m: .257,
        r: .85,
        d: 0
      }, {
        i: 66,
        f: {
          x: -268.8,
          y: 508.574
        },
        t: {
          x: -285.6,
          y: 490.759
        },
        m: .306,
        r: .85,
        d: 0
      }, {
        i: 67,
        f: {
          x: -285.6,
          y: 490.759
        },
        t: {
          x: -302.4,
          y: 467.812
        },
        m: .355,
        r: .85,
        d: 0
      }, {
        i: 68,
        f: {
          x: -302.4,
          y: 467.812
        },
        t: {
          x: -319.2,
          y: 440.802
        },
        m: .398,
        r: .85,
        d: 0
      }, {
        i: 69,
        f: {
          x: -319.2,
          y: 440.802
        },
        t: {
          x: -336,
          y: 410.962
        },
        m: .428,
        r: .85,
        d: 0
      }, {
        i: 70,
        f: {
          x: -336,
          y: 410.962
        },
        t: {
          x: -352.8,
          y: 379.633
        },
        m: .444,
        r: .85,
        d: 0
      }, {
        i: 71,
        f: {
          x: -352.8,
          y: 379.633
        },
        t: {
          x: -369.6,
          y: 348.219
        },
        m: .445,
        r: .85,
        d: 0
      }, {
        i: 72,
        f: {
          x: -369.6,
          y: 348.219
        },
        t: {
          x: -386.4,
          y: 318.123
        },
        m: .431,
        r: .85,
        d: 0
      }, {
        i: 73,
        f: {
          x: -386.4,
          y: 318.123
        },
        t: {
          x: -403.2,
          y: 290.698
        },
        m: .402,
        r: .85,
        d: 0
      }, {
        i: 74,
        f: {
          x: -403.2,
          y: 290.698
        },
        t: {
          x: -420,
          y: 267.192
        },
        m: .361,
        r: .85,
        d: 0
      }, {
        i: 75,
        f: {
          x: -420,
          y: 267.192
        },
        t: {
          x: -436.8,
          y: 248.699
        },
        m: .312,
        r: .85,
        d: 0
      }, {
        i: 76,
        f: {
          x: -436.8,
          y: 248.699
        },
        t: {
          x: -453.6,
          y: 236.112
        },
        m: .262,
        r: .85,
        d: 0
      }, {
        i: 77,
        f: {
          x: -453.6,
          y: 236.112
        },
        t: {
          x: -470.4,
          y: 230.095
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 78,
        f: {
          x: -470.4,
          y: 230.095
        },
        t: {
          x: -487.2,
          y: 231.05
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 79,
        f: {
          x: -487.2,
          y: 231.05
        },
        t: {
          x: -504,
          y: 239.106
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 80,
        f: {
          x: -504,
          y: 239.106
        },
        t: {
          x: -520.8,
          y: 254.11
        },
        m: .282,
        r: .85,
        d: 0
      }, {
        i: 81,
        f: {
          x: -520.8,
          y: 254.11
        },
        t: {
          x: -537.6,
          y: 275.636
        },
        m: .341,
        r: .85,
        d: 0
      }, {
        i: 82,
        f: {
          x: -537.6,
          y: 275.636
        },
        t: {
          x: -554.4,
          y: 303.001
        },
        m: .401,
        r: .85,
        d: 0
      }, {
        i: 83,
        f: {
          x: -554.4,
          y: 303.001
        },
        t: {
          x: -571.2,
          y: 335.29
        },
        m: .455,
        r: .85,
        d: 0
      }, {
        i: 84,
        f: {
          x: -571.2,
          y: 335.29
        },
        t: {
          x: -588,
          y: 371.397
        },
        m: .498,
        r: .85,
        d: 0
      }, {
        i: 85,
        f: {
          x: -588,
          y: 371.397
        },
        t: {
          x: -604.8,
          y: 410.061
        },
        m: .527,
        r: .85,
        d: 0
      }, {
        i: 86,
        f: {
          x: -604.8,
          y: 410.061
        },
        t: {
          x: -621.6,
          y: 449.924
        },
        m: .541,
        r: .85,
        d: 0
      }, {
        i: 87,
        f: {
          x: -621.6,
          y: 449.924
        },
        t: {
          x: -638.4,
          y: 489.579
        },
        m: .538,
        r: .85,
        d: 0
      }, {
        i: 88,
        f: {
          x: -638.4,
          y: 489.579
        },
        t: {
          x: -655.2,
          y: 527.627
        },
        m: .52,
        r: .85,
        d: 0
      }, {
        i: 89,
        f: {
          x: -655.2,
          y: 527.627
        },
        t: {
          x: -672,
          y: 562.732
        },
        m: .486,
        r: .85,
        d: 0
      }, {
        i: 90,
        f: {
          x: -672,
          y: 562.732
        },
        t: {
          x: -688.8,
          y: 593.676
        },
        m: .44,
        r: .85,
        d: 0
      }, {
        i: 91,
        f: {
          x: -688.8,
          y: 593.676
        },
        t: {
          x: -705.6,
          y: 619.404
        },
        m: .384,
        r: .85,
        d: 0
      }, {
        i: 92,
        f: {
          x: -705.6,
          y: 619.404
        },
        t: {
          x: -722.4,
          y: 639.067
        },
        m: .323,
        r: .85,
        d: 0
      }, {
        i: 93,
        f: {
          x: -722.4,
          y: 639.067
        },
        t: {
          x: -739.2,
          y: 652.053
        },
        m: .265,
        r: .85,
        d: 0
      }, {
        i: 94,
        f: {
          x: -739.2,
          y: 652.053
        },
        t: {
          x: -756,
          y: 658.018
        },
        m: .223,
        r: .85,
        d: 0
      }, {
        i: 95,
        f: {
          x: -756,
          y: 658.018
        },
        t: {
          x: -772.8,
          y: 656.891
        },
        m: .21,
        r: .85,
        d: 0
      }, {
        i: 96,
        f: {
          x: -772.8,
          y: 656.891
        },
        t: {
          x: -789.6,
          y: 648.882
        },
        m: .233,
        r: .85,
        d: 0
      }, {
        i: 97,
        f: {
          x: -789.6,
          y: 648.882
        },
        t: {
          x: -806.4,
          y: 634.473
        },
        m: .277,
        r: .85,
        d: 0
      }, {
        i: 98,
        f: {
          x: -806.4,
          y: 634.473
        },
        t: {
          x: -824.492,
          y: 610.351
        },
        m: .377,
        r: .85,
        d: 0
      }, {
        i: 99,
        f: {
          x: -824.492,
          y: 610.351
        },
        t: {
          x: -844.594,
          y: 580.198
        },
        m: .453,
        r: .85,
        d: 0
      }, {
        i: 100,
        f: {
          x: -844.594,
          y: 580.198
        },
        t: {
          x: -872.737,
          y: 554.065
        },
        m: .48,
        r: .85,
        d: 0
      }, {
        i: 101,
        f: {
          x: -872.737,
          y: 554.065
        },
        t: {
          x: -908.92,
          y: 515.872
        },
        m: .658,
        r: .85,
        d: 0
      }, {
        i: 102,
        f: {
          x: -908.92,
          y: 515.872
        },
        t: {
          x: -1500,
          y: 475.668
        },
        m: 7.406,
        r: .85,
        d: 0
      } ], [ {
        i: 0,
        f: {
          x: -1500,
          y: -353.061
        },
        t: {
          x: -823.2,
          y: -352.411
        },
        m: 8.46,
        r: .85,
        d: 1
      }, {
        i: 1,
        f: {
          x: -823.2,
          y: -352.411
        },
        t: {
          x: -806.4,
          y: -358.722
        },
        m: .224,
        r: .85,
        d: 1
      }, {
        i: 2,
        f: {
          x: -806.4,
          y: -358.722
        },
        t: {
          x: -789.6,
          y: -371.579
        },
        m: .264,
        r: .85,
        d: 1
      }, {
        i: 3,
        f: {
          x: -789.6,
          y: -371.579
        },
        t: {
          x: -772.8,
          y: -390.309
        },
        m: .315,
        r: .85,
        d: 1
      }, {
        i: 4,
        f: {
          x: -772.8,
          y: -390.309
        },
        t: {
          x: -756,
          y: -414.008
        },
        m: .363,
        r: .85,
        d: 1
      }, {
        i: 5,
        f: {
          x: -756,
          y: -414.008
        },
        t: {
          x: -739.2,
          y: -441.575
        },
        m: .404,
        r: .85,
        d: 1
      }, {
        i: 6,
        f: {
          x: -739.2,
          y: -441.575
        },
        t: {
          x: -722.4,
          y: -471.756
        },
        m: .432,
        r: .85,
        d: 1
      }, {
        i: 7,
        f: {
          x: -722.4,
          y: -471.756
        },
        t: {
          x: -705.6,
          y: -503.196
        },
        m: .446,
        r: .85,
        d: 1
      }, {
        i: 8,
        f: {
          x: -705.6,
          y: -503.196
        },
        t: {
          x: -688.8,
          y: -534.489
        },
        m: .444,
        r: .85,
        d: 1
      }, {
        i: 9,
        f: {
          x: -688.8,
          y: -534.489
        },
        t: {
          x: -672,
          y: -564.234
        },
        m: .427,
        r: .85,
        d: 1
      }, {
        i: 10,
        f: {
          x: -672,
          y: -564.234
        },
        t: {
          x: -655.2,
          y: -591.093
        },
        m: .396,
        r: .85,
        d: 1
      }, {
        i: 11,
        f: {
          x: -655.2,
          y: -591.093
        },
        t: {
          x: -638.4,
          y: -613.84
        },
        m: .353,
      }, {