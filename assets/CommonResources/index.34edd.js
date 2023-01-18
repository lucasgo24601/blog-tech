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
  CocosDefaultAssets: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "084cat4fn5FEbYo5LUbPQiN", "CocosDefaultAssets");
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
    var CocosDefaultAssets = function(_super) {
      __extends(CocosDefaultAssets, _super);
      function CocosDefaultAssets() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.asset = [];
        return _this;
      }
      __decorate([ property([ cc.Asset ]) ], CocosDefaultAssets.prototype, "asset", void 0);
      CocosDefaultAssets = __decorate([ ccclass ], CocosDefaultAssets);
      return CocosDefaultAssets;
    }(cc.Component);
    exports.default = CocosDefaultAssets;
    cc._RF.pop();
  }, {} ],
  ColorAssembler2D: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4909eEZLTxPxIRpPMiqg0Zh", "ColorAssembler2D");
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
    exports.ColorAssembler2D = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent;
    var ColorAssembler2D = function(_super) {
      __extends(ColorAssembler2D, _super);
      function ColorAssembler2D() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._colors = [ cc.Color.RED, cc.Color.GREEN, cc.Color.BLUE, cc.Color.YELLOW ];
        return _this;
      }
      Object.defineProperty(ColorAssembler2D.prototype, "colors", {
        get: function() {
          return this._colors;
        },
        set: function(colors) {
          this._colors = colors;
          this._updateColors();
        },
        enumerable: false,
        configurable: true
      });
      ColorAssembler2D.prototype.onEnable = function() {
        cc.director.once(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
      };
      ColorAssembler2D.prototype.onDisable = function() {
        cc.director.off(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
        this.node["_renderFlag"] |= cc["RenderFlow"].FLAG_COLOR;
      };
      ColorAssembler2D.prototype._updateColors = function() {
        var cmp = this.getComponent(cc.RenderComponent);
        if (!cmp) return;
        var assembler = cmp["_assembler"];
        if (!(assembler instanceof cc["Assembler2D"])) return;
        var uint_verts = assembler._renderData.uintVDatas[0];
        if (!uint_verts) return;
        var floats_per_vert = assembler.floatsPerVert;
        var color_offset = assembler.colorOffset;
        var count = 0;
        for (var i = color_offset, l = uint_verts.length; i < l; i += floats_per_vert) uint_verts[i] = (this.colors[count++] || this.node.color)["_val"];
      };
      __decorate([ property({
        type: [ cc.Color ],
        visible: true
      }) ], ColorAssembler2D.prototype, "_colors", void 0);
      ColorAssembler2D = __decorate([ ccclass, requireComponent(cc.RenderComponent), executeInEditMode ], ColorAssembler2D);
      return ColorAssembler2D;
    }(cc.Component);
    exports.ColorAssembler2D = ColorAssembler2D;
    cc._RF.pop();
  }, {} ],
  ColorMultiplyEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f6871WKnhISql/Zb7ebMe2", "ColorMultiplyEffect");
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
    exports.CURVE_TYPE = exports.LOOP_TYPE = void 0;
    var Curve_1 = require("../Curve");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    exports.LOOP_TYPE = cc.Enum({
      LOOP: 1,
      PINGPONG: 2
    });
    exports.CURVE_TYPE = cc.Enum({
      LINE: 1,
      CUBIC_IN: 2,
      CUBIC_OUT: 3,
      CUBIC_INOUT: 4,
      QUAD_IN: 5,
      QUAD_OUT: 6,
      QUAD_INOUT: 7
    });
    var STATUS;
    (function(STATUS) {
      STATUS[STATUS["IDLE"] = 1] = "IDLE";
      STATUS[STATUS["COLOR_MULTIPLY"] = 2] = "COLOR_MULTIPLY";
      STATUS[STATUS["DELAY"] = 3] = "DELAY";
      STATUS[STATUS["END"] = 4] = "END";
    })(STATUS || (STATUS = {}));
    var ColorMultiplyEffect = function(_super) {
      __extends(ColorMultiplyEffect, _super);
      function ColorMultiplyEffect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.useTip = "Material\u9808\u639b\u4e0a ColorMultiplyMaterial";
        _this.playOnStart = true;
        _this.isLoop = true;
        _this.loopType = exports.LOOP_TYPE.LOOP;
        _this.curve = Curve_1.CurveType.Line;
        _this.duration = 1;
        _this.delayTime = 1;
        _this.addColor = new cc.Color(255, 255, 255, 0);
        _this.mSprite = null;
        _this.mMaterial = null;
        _this.tempValue = 0;
        _this.status = STATUS.IDLE;
        _this.checkCount = 5;
        return _this;
      }
      ColorMultiplyEffect.prototype.onLoad = function() {};
      ColorMultiplyEffect.prototype.start = function() {
        false;
        this.mSprite = this.getComponent(cc.Sprite);
        cc.isValid(this.mSprite) && (this.mMaterial = this.mSprite.sharedMaterials[0]);
        this.setUVoffset(this.mSprite.spriteFrame);
        var _addColor = new cc.Vec4(this.addColor.getR() / 255, this.addColor.getG() / 255, this.addColor.getB() / 255, 0);
        this.mMaterial.setProperty("addColor", _addColor);
        this.playOnStart && this.play();
      };
      ColorMultiplyEffect.prototype.setUVoffset = function(frame) {
        if (this.checkCount <= 0) return;
        this.checkCount--;
        var _rect = frame.getRect();
        var _texture = frame.getTexture();
        var _texw = _texture.width;
        var _texh = _texture.height;
        var l = 0, r = 0, b = 1, t = 1;
        l = _texw && _rect.x / _texw;
        t = _texh && _rect.y / _texh;
        if (frame.isRotated()) {
          r = _texw && (_rect.x + _rect.height) / _texw;
          b = _texh && (_rect.y + _rect.width) / _texh;
        } else {
          r = _texw && (_rect.x + _rect.width) / _texw;
          b = _texh && (_rect.y + _rect.height) / _texh;
        }
        var _UVoffset = new cc.Vec4(0, 0, 0, 0);
        _UVoffset.x = l;
        _UVoffset.y = t;
        _UVoffset.z = r;
        _UVoffset.w = b;
        var _rotated = frame.isRotated() ? 1 : 0;
        this.mMaterial.setProperty("UVoffset", _UVoffset);
        this.mMaterial.setProperty("rotated", _rotated);
      };
      ColorMultiplyEffect.prototype.update = function(dt) {
        false;
        switch (this.status) {
         case STATUS.COLOR_MULTIPLY:
          this.colorMultiplyStatus(dt);
          break;

         case STATUS.DELAY:
          this.delayStatus(dt);
          break;

         case STATUS.END:
          this.endStatus();
        }
      };
      ColorMultiplyEffect.prototype.colorMultiplyStatus = function(dt) {
        this.tempValue += dt / this.duration;
        if (this.tempValue > 1) {
          this.tempValue = 0;
          this.status = STATUS.DELAY;
          this.mMaterial.setProperty("value", 0);
          return;
        }
        var _value = 0;
        this.loopType == exports.LOOP_TYPE.LOOP ? _value = this.tempValue : this.loopType == exports.LOOP_TYPE.PINGPONG && (_value = this.tempValue > .5 ? 1 - 2 * (this.tempValue - .5) : 2 * this.tempValue);
        _value = Curve_1.default.GetValue(this.curve, _value);
        this.mMaterial.setProperty("value", _value);
      };
      ColorMultiplyEffect.prototype.delayStatus = function(dt) {
        this.tempValue += dt;
        if (this.tempValue > this.delayTime) {
          this.tempValue = 0;
          this.status = STATUS.END;
        }
      };
      ColorMultiplyEffect.prototype.endStatus = function() {
        this.isLoop ? this.status = STATUS.COLOR_MULTIPLY : this.status = STATUS.IDLE;
      };
      ColorMultiplyEffect.prototype.play = function() {
        false == cc.isValid(this.mMaterial) && this.start();
        this.tempValue = 0;
        this.status = STATUS.COLOR_MULTIPLY;
      };
      __decorate([ property({
        multiline: true,
        readonly: true
      }) ], ColorMultiplyEffect.prototype, "useTip", void 0);
      __decorate([ property({
        tooltip: "\u958b\u555f\u5f8c\u6703\u81ea\u52d5\u904b\u4f5c\u6d41\u5149\u6548\u679c",
        displayName: "\u958b\u555f\u6642\u555f\u52d5"
      }) ], ColorMultiplyEffect.prototype, "playOnStart", void 0);
      __decorate([ property({
        tooltip: "\u958b\u555f\u5f8c\u518d\u6d41\u5149\u7d50\u675f\u5f8c\u6703\u518d\u6b21\u9032\u884c",
        displayName: "\u5faa\u74b0"
      }) ], ColorMultiplyEffect.prototype, "isLoop", void 0);
      __decorate([ property({
        visible: function() {
          return !!this.isLoop;
        },
        type: exports.LOOP_TYPE,
        tooltip: "Loop\uff1a\u5f9e\u539f\u672c\u984f\u8272\u4e00\u8def\u52a0\u5230\u76ee\u6a19\u984f\u8272\n PingPong\uff1a\u5f9e\u539f\u672c\u984f\u8272\u4e00\u8def\u52a0\u5230\u76ee\u6a19\u984f\u8272\u518d\u8fd4\u56de\u539f\u672c\u984f\u8272(\u4f86\u56de\u7b97\u4e00\u6b21\u9031\u671f)",
        displayName: "\u5faa\u74b0\u65b9\u5f0f"
      }) ], ColorMultiplyEffect.prototype, "loopType", void 0);
      __decorate([ property({
        visible: function() {
          return !!this.isLoop;
        },
        type: cc.Enum(Curve_1.CurveType),
        tooltip: "\u5faa\u74b0\u66f2\u7dda",
        displayName: "\u5faa\u74b0\u53d6\u7dda"
      }) ], ColorMultiplyEffect.prototype, "curve", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u6d41\u5149\u7684\u8dd1\u5b8c\u4e00\u6b21\u7684\u6642\u9593 (\u55ae\u4f4d:\u79d2)",
        displayName: "\u9031\u671f"
      }) ], ColorMultiplyEffect.prototype, "duration", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u6d41\u5149\u7d50\u675f\u5f8c\u505c\u6b62\u6642\u9593 (\u55ae\u4f4d:\u79d2)",
        displayName: "\u505c\u6b62\u6642\u9593"
      }) ], ColorMultiplyEffect.prototype, "delayTime", void 0);
      __decorate([ property({
        tooltip: "\u6d41\u5149\u7684\u5730\u65b9\u6703\u5c07\u539f\u672c\u7684\u984f\u8272\u52a0\u4e0a\u9019\u500b\u984f\u8272",
        displayName: "\u6d41\u5149\u589e\u52a0\u7684\u984f\u8272"
      }) ], ColorMultiplyEffect.prototype, "addColor", void 0);
      ColorMultiplyEffect = __decorate([ ccclass, menu("\u81ea\u8a02\u5de5\u5177/UI/Effect/\u8272\u5f69\u589e\u503c") ], ColorMultiplyEffect);
      return ColorMultiplyEffect;
    }(cc.Component);
    exports.default = ColorMultiplyEffect;
    cc._RF.pop();
  }, {
    "../Curve": "Curve"
  } ],
  Curve: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6c992cP3UtLboTYTf/0zny6", "Curve");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CurveType = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CurveType;
    (function(CurveType) {
      CurveType[CurveType["Line"] = 0] = "Line";
      CurveType[CurveType["CubicInCurve"] = 1] = "CubicInCurve";
      CurveType[CurveType["CubicOutCurve"] = 2] = "CubicOutCurve";
      CurveType[CurveType["CubicInOutCurve"] = 3] = "CubicInOutCurve";
      CurveType[CurveType["QuadIn"] = 4] = "QuadIn";
      CurveType[CurveType["QuadOut"] = 5] = "QuadOut";
      CurveType[CurveType["QuadInOut"] = 6] = "QuadInOut";
      CurveType[CurveType["CircleIn"] = 7] = "CircleIn";
      CurveType[CurveType["CircleOut"] = 8] = "CircleOut";
      CurveType[CurveType["CircleInOut"] = 9] = "CircleInOut";
      CurveType[CurveType["BackIn"] = 10] = "BackIn";
      CurveType[CurveType["BackOut"] = 11] = "BackOut";
      CurveType[CurveType["BackInOut"] = 12] = "BackInOut";
    })(CurveType = exports.CurveType || (exports.CurveType = {}));
    var Curve = function() {
      function Curve() {}
      Curve.GetValue = function(p_type, p_value) {
        this.setSelectCurve(p_type);
        if (p_value >= 1) return this.selectCurve[this.selectCurve.length - 1];
        var _returnValue = 0;
        var _index = 0;
        while (p_value > .05) {
          _index++;
          p_value -= .05;
        }
        var _distance = this.selectCurve[_index + 1] - this.selectCurve[_index];
        _returnValue = _distance * (p_value / .05);
        _returnValue += this.selectCurve[_index];
        return _returnValue;
      };
      Curve.setSelectCurve = function(p_type) {
        switch (p_type) {
         case CurveType.Line:
          this.selectCurve = this.Line;
          break;

         case CurveType.CubicInCurve:
          this.selectCurve = this.CubicInCurve;
          break;

         case CurveType.CubicOutCurve:
          this.selectCurve = this.CubicOutCurve;
          break;

         case CurveType.CubicInOutCurve:
          this.selectCurve = this.CubicInOutCurve;
          break;

         case CurveType.QuadIn:
          this.selectCurve = this.QuadIn;
          break;

         case CurveType.QuadOut:
          this.selectCurve = this.QuadOut;
          break;

         case CurveType.QuadInOut:
          this.selectCurve = this.QuadInOut;
          break;

         case CurveType.CircleIn:
          this.selectCurve = this.CircleIn;
          break;

         case CurveType.CircleOut:
          this.selectCurve = this.CircleOut;
          break;

         case CurveType.CircleInOut:
          this.selectCurve = this.CircleInOut;
          break;

         case CurveType.BackIn:
          this.selectCurve = this.BackIn;
          break;

         case CurveType.BackOut:
          this.selectCurve = this.BackOut;
          break;

         case CurveType.BackInOut:
          this.selectCurve = this.BackInOut;
        }
      };
      Curve.Line = [ 0, .05, .1, .15, .2, .25, .3, .35, .4, .45, .5, .55, .6, .65, .7, .75, .8, .85, .9, .95, 1 ];
      Curve.CubicInCurve = [ 0, 112e-6, .009508, .003263, .007802, .015317, .026556, .042269, .063218, .09014, .123775, .164896, .21425, .27256, .34062, .41915, .508912, .610665, .725125, .853059, 1 ];
      Curve.CubicOutCurve = [ 0, .138132, .266959, .382283, .484826, .575357, .654593, .723307, .782225, .832137, .873772, .907884, .93522, .956527, .972561, .984073, .991806, .996516, .998951, .999863, 1 ];
      Curve.CubicInOutCurve = [ 0, 452e-6, .003805, .013057, .031213, .061279, .106235, .169101, .252893, .36055, .49518, .63155, .740873, .826116, .890262, .936286, .967223, .986067, .995805, .999451, 1 ];
      Curve.QuadIn = [ 0, .002336, .009671, .022008, .03934, .061683, .089015, .121364, .158705, .201033, .24837, .300731, .358052, .420395, .487742, .560084, .637452, .719784, .807121, .899502, 1 ];
      Curve.QuadOut = [ 0, .094314, .186993, .274675, .357352, .435018, .507694, .575358, .638022, .6957, .748361, .796024, .83869, .876362, .909021, .936689, .95935, .977019, .989678, .997338, 1 ];
      Curve.QuadInOut = [ 0, .00467, .019336, .04401, .078679, .123352, .178025, .242705, .317385, .402047, .496722, .592055, .67739, .75271, .81804, .873371, .918704, .954027, .979353, .994673, 1 ];
      Curve.CircleIn = [ 0, .001169, .004847, .011065, .019868, .03133, .045547, .062644, .082778, .106151, .133036, .163775, .198793, .238697, .284289, .336754, .397879, .470664, .56083, .682971, 1 ];
      Curve.CircleOut = [ 0, .307166, .432461, .524109, .597809, .659564, .712527, .758528, .798772, .834087, .865084, .89221, .915813, .936147, .953431, .96783, .979469, .988442, .994826, .998668, 1 ];
      Curve.CircleInOut = [ 0, .002342, .009766, .022513, .041024, .066043, .098768, .141335, .197833, .278737, .459755, .714563, .79783, .855477, .898789, .932075, .957558, .976462, .989568, .99733, 1 ];
      Curve.BackIn = [ 0, -.003669, -.013885, -.028621, -.045863, -.063564, -.079718, -.092283, -.099241, -.098564, -.088223, -.066195, -.030447, .021036, .090295, .179352, .290254, .424941, .585608, .774065, 1 ];
      Curve.BackOut = [ 0, .212609, .403008, .565345, .701737, .814095, .904512, .975006, 1.027588, 1.064296, 1.087165, 1.098204, 1.099452, 1.092932, 1.080664, 1.06469, 1.047023, 1.029694, 1.014731, 1.004158, 1 ];
      Curve.BackInOut = [ 0, -.010503, -.036515, -.067265, -.091971, -.099833, -.080068, -.021892, .085448, .252804, .490924, .733944, .905587, 1.016528, 1.077579, 1.099504, 1.093109, 1.069175, 1.038484, 1.011835, 1 ];
      Curve.selectCurve = [];
      return Curve;
    }();
    exports.default = Curve;
    cc._RF.pop();
  }, {} ],
  DissolveEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "251cfweoNdDA7aBu4cOSAqd", "DissolveEffect");
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
    var DissolveEffect = function(_super) {
      __extends(DissolveEffect, _super);
      function DissolveEffect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.noiseValue = 0;
        _this.mSprite = null;
        _this.mMaterial = null;
        return _this;
      }
      DissolveEffect.prototype.start = function() {
        false;
        this.mSprite = this.getComponent(cc.Sprite);
        cc.isValid(this.mSprite) && (this.mMaterial = this.mSprite.getMaterials()[0]);
      };
      DissolveEffect.prototype.update = function(dt) {
        false;
        this.mMaterial.setProperty("_noiseValue", this.noiseValue);
      };
      __decorate([ property(cc.Float) ], DissolveEffect.prototype, "noiseValue", void 0);
      DissolveEffect = __decorate([ ccclass ], DissolveEffect);
      return DissolveEffect;
    }(cc.Component);
    exports.default = DissolveEffect;
    cc._RF.pop();
  }, {} ],
  Gradient: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e1a75s16BPXLL6hrVEF6Im", "Gradient");
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
    var Gradient = function(_super) {
      __extends(Gradient, _super);
      function Gradient() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.useTip = "Material\u9808\u639b\u4e0a ColorMultiplyMaterial";
        _this._spine = null;
        _this._material = null;
        _this.tempTime = 0;
        return _this;
      }
      Gradient.prototype.start = function() {
        this._spine = this.getComponent(sp.Skeleton);
        cc.isValid(this._spine) && (this._material = this._spine.getMaterials()[0]);
      };
      Gradient.prototype.update = function(dt) {
        this.streamerStatus(dt);
      };
      Gradient.prototype.streamerStatus = function(dt) {
        this.tempTime += dt;
        this.tempTime > 1 && (this.tempTime = 0);
        var _value = 2 * this.tempTime - 1;
        this._material.setProperty("alphaValue", _value);
      };
      __decorate([ property({
        multiline: true,
        readonly: true
      }) ], Gradient.prototype, "useTip", void 0);
      Gradient = __decorate([ ccclass ], Gradient);
      return Gradient;
    }(cc.Component);
    exports.default = Gradient;
    cc._RF.pop();
  }, {} ],
  StreamerEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62c22PC4SdGo4Vv5vcAM14w", "StreamerEffect");
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
    var Curve_1 = require("../Curve");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var STREAMER_TYPE = cc.Enum({
      ADD: 1,
      MULTIPLY: 2
    });
    var STREAMER_DIRECTION = cc.Enum({
      LEFT_TO_RIGHT: 1,
      RIGHT_TO_LEFT: 2,
      UP_TO_DOWN: 3,
      DOWN_TO_UP: 4
    });
    var STATUS;
    (function(STATUS) {
      STATUS[STATUS["IDLE"] = 1] = "IDLE";
      STATUS[STATUS["STREAMER"] = 2] = "STREAMER";
      STATUS[STATUS["DELAY"] = 3] = "DELAY";
      STATUS[STATUS["END"] = 4] = "END";
    })(STATUS || (STATUS = {}));
    var StreamerEffect = function(_super) {
      __extends(StreamerEffect, _super);
      function StreamerEffect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.useTip = "Material\u9808\u639b\u4e0a StreamerMaterial";
        _this.playOnStart = true;
        _this.isLoop = true;
        _this.curve = Curve_1.CurveType.Line;
        _this.streamerDirection = STREAMER_DIRECTION.LEFT_TO_RIGHT;
        _this.streamerType = STREAMER_TYPE.ADD;
        _this.strength = 2;
        _this.addColor = new cc.Color(255, 255, 255, 0);
        _this.delayTime = 1;
        _this.lightLength = .1;
        _this.slope = .1;
        _this.duration = 1;
        _this._sprite = null;
        _this._material = null;
        _this.tempTime = 0;
        _this.status = STATUS.IDLE;
        _this.checkCount = 5;
        _this.rotate = false;
        _this.offset = 0;
        return _this;
      }
      StreamerEffect.prototype.onLoad = function() {};
      StreamerEffect.prototype.start = function() {
        false;
        this._sprite = this.getComponent(cc.Sprite);
        cc.isValid(this._sprite) && (this._material = this._sprite.getMaterials()[0]);
        this.setUVoffset(this._sprite.spriteFrame);
        this._material.setProperty("lightWidth", this.lightLength);
        this._material.setProperty("slope", this.slope);
        if (this.streamerType == STREAMER_TYPE.MULTIPLY) {
          var _addColor = new cc.Vec4(0, 0, 0, 0);
          this._material.setProperty("addColor", _addColor);
          this._material.setProperty("strength", this.strength);
        } else if (this.streamerType == STREAMER_TYPE.ADD) {
          var _addColor = new cc.Vec4(this.addColor.getR() / 255, this.addColor.getG() / 255, this.addColor.getB() / 255, 0);
          this._material.setProperty("addColor", _addColor);
          this._material.setProperty("strength", 1);
        }
        this.playOnStart && this.play();
      };
      StreamerEffect.prototype.update = function(dt) {
        false;
        if (this.status == STATUS.IDLE) return;
        this.setUVoffset(this._sprite.spriteFrame);
        switch (this.status) {
         case STATUS.STREAMER:
          this.streamerStatus(dt);
          break;

         case STATUS.DELAY:
          this.delayStatus(dt);
          break;

         case STATUS.END:
          this.endStatus();
        }
      };
      StreamerEffect.prototype.setUVoffset = function(frame) {
        if (this.checkCount <= 0) return;
        this.checkCount--;
        var _rect = frame.getRect();
        var _texture = frame.getTexture();
        var _texw = _texture.width;
        var _texh = _texture.height;
        var l = 0, r = 0, b = 1, t = 1;
        l = _texw && _rect.x / _texw;
        t = _texh && _rect.y / _texh;
        if (frame.isRotated()) {
          r = _texw && (_rect.x + _rect.height) / _texw;
          b = _texh && (_rect.y + _rect.width) / _texh;
        } else {
          r = _texw && (_rect.x + _rect.width) / _texw;
          b = _texh && (_rect.y + _rect.height) / _texh;
        }
        var _UVoffset = new cc.Vec4(0, 0, 0, 0);
        _UVoffset.x = l;
        _UVoffset.y = t;
        _UVoffset.z = r;
        _UVoffset.w = b;
        var _rotated = frame.isRotated() ? 1 : 0;
        this.rotate = frame.isRotated();
        this._material.setProperty("UVoffset", _UVoffset);
        this._material.setProperty("rotated", _rotated);
      };
      StreamerEffect.prototype.streamerStatus = function(dt) {
        this.tempTime += dt / this.duration;
        if (this.tempTime > 1 + this.offset) {
          this.tempTime = 0;
          this.status = STATUS.DELAY;
        }
        var _value = 0;
        switch (this.streamerDirection) {
         case STREAMER_DIRECTION.LEFT_TO_RIGHT:
          _value = Curve_1.default.GetValue(this.curve, this.tempTime / (1 + this.offset));
          this._material.setProperty("times", _value * (1 + this.offset));
          break;

         case STREAMER_DIRECTION.RIGHT_TO_LEFT:
          _value = Curve_1.default.GetValue(this.curve, this.tempTime / (1 + this.offset));
          _value = (1 + this.offset) / (1 + this.offset) - _value;
          this._material.setProperty("times", _value * (1 + this.offset));
          break;

         case STREAMER_DIRECTION.UP_TO_DOWN:
          if (this.rotate) {
            _value = Curve_1.default.GetValue(this.curve, this.tempTime / (1 + this.offset));
            _value = (1 + this.offset) / (1 + this.offset) - _value;
          } else _value = Curve_1.default.GetValue(this.curve, this.tempTime / (1 + this.offset));
          this._material.setProperty("times", _value * (1 + this.offset));
          this._material.setProperty("rotated", this.rotate ? 0 : 1);
          break;

         case STREAMER_DIRECTION.DOWN_TO_UP:
          if (this.rotate) _value = Curve_1.default.GetValue(this.curve, this.tempTime / (1 + this.offset)); else {
            _value = Curve_1.default.GetValue(this.curve, this.tempTime / (1 + this.offset));
            _value = (1 + this.offset) / (1 + this.offset) - _value;
          }
          this._material.setProperty("times", _value * (1 + this.offset));
          this._material.setProperty("rotated", this.rotate ? 0 : 1);
        }
      };
      StreamerEffect.prototype.delayStatus = function(dt) {
        this.tempTime += dt;
        if (this.tempTime > this.delayTime) {
          this.tempTime = 0;
          this.status = STATUS.END;
        }
      };
      StreamerEffect.prototype.endStatus = function() {
        this.isLoop ? this.status = STATUS.STREAMER : this.status = STATUS.IDLE;
      };
      StreamerEffect.prototype.play = function() {
        false == cc.isValid(this._material) && this.start();
        this.tempTime = 0;
        this.offset = this.lightLength + this.slope;
        this.status = STATUS.STREAMER;
      };
      __decorate([ property({
        multiline: true,
        readonly: true
      }) ], StreamerEffect.prototype, "useTip", void 0);
      __decorate([ property({
        tooltip: "\u958b\u555f\u5f8c\u6703\u81ea\u52d5\u904b\u4f5c\u6d41\u5149\u6548\u679c",
        displayName: "\u958b\u555f\u6642\u555f\u52d5"
      }) ], StreamerEffect.prototype, "playOnStart", void 0);
      __decorate([ property({
        tooltip: "\u958b\u555f\u5f8c\u518d\u6d41\u5149\u7d50\u675f\u5f8c\u6703\u518d\u6b21\u9032\u884c",
        displayName: "\u5faa\u74b0"
      }) ], StreamerEffect.prototype, "isLoop", void 0);
      __decorate([ property({
        visible: function() {
          return !!this.isLoop;
        },
        type: cc.Enum(Curve_1.CurveType),
        tooltip: "\u5faa\u74b0\u66f2\u7dda",
        displayName: "\u5faa\u74b0\u66f2\u7dda"
      }) ], StreamerEffect.prototype, "curve", void 0);
      __decorate([ property({
        type: STREAMER_DIRECTION,
        tooltip: "\u6d41\u5149\u7684\u984f\u8272\u8a08\u7b97\u65b9\u5f0f",
        displayName: "\u65b9\u5411"
      }) ], StreamerEffect.prototype, "streamerDirection", void 0);
      __decorate([ property({
        type: STREAMER_TYPE,
        tooltip: "\u6d41\u5149\u7684\u984f\u8272\u8a08\u7b97\u65b9\u5f0f",
        displayName: "\u985e\u578b"
      }) ], StreamerEffect.prototype, "streamerType", void 0);
      __decorate([ property({
        visible: function() {
          return this.streamerType == STREAMER_TYPE.MULTIPLY;
        },
        type: cc.Float,
        tooltip: "\u6d41\u5149\u7684\u5730\u65b9\u6703\u5c07\u539f\u672c\u7684\u984f\u8272\u5448\u4e0a\u9019\u500b\u7d20\u8cea",
        displayName: "\u6d41\u5149\u7684\u984f\u8272\u500d\u7387"
      }) ], StreamerEffect.prototype, "strength", void 0);
      __decorate([ property({
        visible: function() {
          return this.streamerType == STREAMER_TYPE.ADD;
        },
        tooltip: "\u6d41\u5149\u7684\u5730\u65b9\u6703\u5c07\u539f\u672c\u7684\u984f\u8272\u52a0\u4e0a\u9019\u500b\u984f\u8272",
        displayName: "\u6d41\u5149\u589e\u52a0\u7684\u984f\u8272"
      }) ], StreamerEffect.prototype, "addColor", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u6d41\u5149\u7d50\u675f\u5f8c\u505c\u6b62\u6642\u9593 (\u55ae\u4f4d:\u79d2)",
        displayName: "\u505c\u6b62\u6642\u9593"
      }) ], StreamerEffect.prototype, "delayTime", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u6d41\u5149\u7684\u9577\u5ea6 \n0~1(\u9019\u908a\u662f\u7528\u767e\u5206\u6bd4)",
        range: [ 0, 1 ],
        displayName: "\u9577\u5ea6"
      }) ], StreamerEffect.prototype, "lightLength", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u6d41\u5149\u7684\u9803\u659c \n(\u7d20\u8cea\uff1a-1 ~ 1) (PS:\u9019\u4e0d\u662f\u89d2\u5ea6)",
        range: [ -1, 1 ],
        displayName: "\u659c\u5ea6"
      }) ], StreamerEffect.prototype, "slope", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u6d41\u5149\u7684\u8dd1\u5b8c\u4e00\u6b21\u7684\u6642\u9593 (\u55ae\u4f4d:\u79d2)",
        displayName: "\u9031\u671f"
      }) ], StreamerEffect.prototype, "duration", void 0);
      StreamerEffect = __decorate([ ccclass, menu("\u81ea\u8a02\u5de5\u5177/UI/Effect/\u6d41\u5149") ], StreamerEffect);
      return StreamerEffect;
    }(cc.Component);
    exports.default = StreamerEffect;
    cc._RF.pop();
  }, {
    "../Curve": "Curve"
  } ],
  UVOffset3D: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34c30ulP39K35KACfmb9Ejk", "UVOffset3D");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var UVOffset3D = function(_super) {
      __extends(UVOffset3D, _super);
      function UVOffset3D() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.useTip = "\u5716\u7247\u7684 WrapMode \u5fc5\u9808\u8981\u6539\u6210 Repeat\nMaterial\u9808\u639b\u4e0aUVOffset3DMaterial";
        _this.uvOffsetSpeed = new cc.Vec2(0, 0);
        _this.uvOffset = new cc.Vec2(0, 0);
        _this.meshRenderer = null;
        _this.mMaterial = null;
        return _this;
      }
      UVOffset3D.prototype.onLoad = function() {};
      UVOffset3D.prototype.start = function() {
        false;
        this.meshRenderer = this.getComponent(cc.MeshRenderer);
        cc.isValid(this.meshRenderer) && (this.mMaterial = this.meshRenderer.getMaterials()[0]);
      };
      UVOffset3D.prototype.update = function(dt) {
        false;
        this.uvOffset.x += dt * this.uvOffsetSpeed.x;
        this.uvOffset.y += dt * this.uvOffsetSpeed.y;
        this.mMaterial.setProperty("mainOffset", [ this.uvOffset.x, this.uvOffset.y ]);
      };
      __decorate([ property({
        multiline: true,
        readonly: true
      }) ], UVOffset3D.prototype, "useTip", void 0);
      __decorate([ property({
        tooltip: "UV\u7684\u4f4d\u7f6e\u79fb\u52d5 \u5efa\u8b700~1\u4e4b\u9593",
        displayName: "UV\u504f\u79fb\u901f\u5ea6"
      }) ], UVOffset3D.prototype, "uvOffsetSpeed", void 0);
      UVOffset3D = __decorate([ ccclass, menu("\u81ea\u8a02\u5de5\u5177/3D/Effect/UV\u79fb\u52d5") ], UVOffset3D);
      return UVOffset3D;
    }(cc.Component);
    exports.default = UVOffset3D;
    cc._RF.pop();
  }, {} ],
  UVOffsetEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74257nLYGhKdKbLpaUK1XQR", "UVOffsetEffect");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var UVOffsetEffect = function(_super) {
      __extends(UVOffsetEffect, _super);
      function UVOffsetEffect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.useTip = "\u5716\u7247\u7684 WrapMode \u5fc5\u9808\u8981\u6539\u6210 Repeat\nMaterial\u9808\u639b\u4e0aUVOffsetMaterial";
        _this.uvOffsetSpeed = new cc.Vec2(0, 0);
        _this.uvOffset = new cc.Vec2(0, 0);
        _this.mSprite = null;
        _this.mMaterial = null;
        return _this;
      }
      UVOffsetEffect.prototype.onLoad = function() {};
      UVOffsetEffect.prototype.start = function() {
        false;
        this.mSprite = this.getComponent(cc.Sprite);
        cc.isValid(this.mSprite) && (this.mMaterial = this.mSprite.getMaterials()[0]);
      };
      UVOffsetEffect.prototype.update = function(dt) {
        false;
        this.uvOffset.x += dt * this.uvOffsetSpeed.x;
        this.uvOffset.y += dt * this.uvOffsetSpeed.y;
        this.uvOffset.x > 1 && (this.uvOffset.x -= 1);
        this.uvOffset.x < 0 && (this.uvOffset.x += 1);
        this.uvOffset.y > 1 && (this.uvOffset.y -= 1);
        this.uvOffset.y < 0 && (this.uvOffset.y += 1);
        this.mMaterial.setProperty("OffsetX", this.uvOffset.x);
        this.mMaterial.setProperty("OffsetY", this.uvOffset.y);
      };
      __decorate([ property({
        multiline: true,
        readonly: true
      }) ], UVOffsetEffect.prototype, "useTip", void 0);
      __decorate([ property({
        tooltip: "UV\u7684\u4f4d\u7f6e\u79fb\u52d5 \u5efa\u8b700~1\u4e4b\u9593",
        displayName: "UV\u504f\u79fb\u901f\u5ea6"
      }) ], UVOffsetEffect.prototype, "uvOffsetSpeed", void 0);
      UVOffsetEffect = __decorate([ ccclass, menu("\u81ea\u8a02\u5de5\u5177/UI/Effect/UV\u79fb\u52d5") ], UVOffsetEffect);
      return UVOffsetEffect;
    }(cc.Component);
    exports.default = UVOffsetEffect;
    cc._RF.pop();
  }, {} ],
  UVOffset_V2_Effect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46009TQOlVMpbFm2/KF+W6G", "UVOffset_V2_Effect");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var UVOffset_V2_Effect = function(_super) {
      __extends(UVOffset_V2_Effect, _super);
      function UVOffset_V2_Effect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.useTip = "\u5716\u7247\u7684 WrapMode \u5fc5\u9808\u8981\u6539\u6210 Repeat\nMaterial\u9808\u639b\u4e0aUVOffsetMaterial";
        _this.uvOffsetSpeed = new cc.Vec2(0, 0);
        _this.scaleMagnification = 1;
        _this.rotate = 1;
        _this.uvOffset = new cc.Vec2(0, 0);
        _this.mSprite = null;
        _this.mMaterial = null;
        return _this;
      }
      UVOffset_V2_Effect.prototype.onLoad = function() {};
      UVOffset_V2_Effect.prototype.start = function() {
        false;
        this.mSprite = this.getComponent(cc.Sprite);
        cc.isValid(this.mSprite) && (this.mMaterial = this.mSprite.getMaterials()[0]);
      };
      UVOffset_V2_Effect.prototype.update = function(dt) {
        false;
        this.uvOffset.x += dt * this.uvOffsetSpeed.x;
        this.uvOffset.y += dt * this.uvOffsetSpeed.y;
        this.uvOffset.x > 1 && (this.uvOffset.x -= 1);
        this.uvOffset.x < 0 && (this.uvOffset.x += 1);
        this.uvOffset.y > 1 && (this.uvOffset.y -= 1);
        this.uvOffset.y < 0 && (this.uvOffset.y += 1);
        this.mMaterial.setProperty("OffsetX", this.uvOffset.x);
        this.mMaterial.setProperty("OffsetY", this.uvOffset.y);
        this.mMaterial.setProperty("scaleMagnification", this.scaleMagnification);
        this.mMaterial.setProperty("rotate", this.rotate);
      };
      __decorate([ property({
        multiline: true,
        readonly: true
      }) ], UVOffset_V2_Effect.prototype, "useTip", void 0);
      __decorate([ property({
        tooltip: "UV\u7684\u4f4d\u7f6e\u79fb\u52d5 \u5efa\u8b700~1\u4e4b\u9593",
        displayName: "UV\u504f\u79fb\u901f\u5ea6"
      }) ], UVOffset_V2_Effect.prototype, "uvOffsetSpeed", void 0);
      __decorate([ property({
        tooltip: "\u5716\u7247\u653e\u5927\u7684\u500d\u7387\uff0c\u4e0d\u5f15\u97ffmask",
        displayName: "\u5716\u7247\u653e\u5927\u7684\u500d\u7387"
      }) ], UVOffset_V2_Effect.prototype, "scaleMagnification", void 0);
      __decorate([ property({
        tooltip: "\u5716\u7247\u7684\u65cb\u8f49\uff0c\u4e0d\u5f15\u97ffmask",
        displayName: "\u5716\u7247\u7684\u65cb\u8f49"
      }) ], UVOffset_V2_Effect.prototype, "rotate", void 0);
      UVOffset_V2_Effect = __decorate([ ccclass ], UVOffset_V2_Effect);
      return UVOffset_V2_Effect;
    }(cc.Component);
    exports.default = UVOffset_V2_Effect;
    cc._RF.pop();
  }, {} ]
}, {}, [ "CocosDefaultAssets", "ColorAssembler2D", "ColorMultiplyEffect", "Curve", "DissolveEffect", "Gradient", "StreamerEffect", "UVOffset3D", "UVOffset_V2_Effect", "UVOffsetEffect" ]);