import {
  CommonModule,
  NgIf,
  NgStyle
} from "./chunk-XHO5ULT3.js";
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  __commonJS,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵtemplate
} from "./chunk-7OP35DZS.js";

// node_modules/@canvasjs/charts/canvasjs.min.js
var require_canvasjs_min = __commonJS({
  "node_modules/@canvasjs/charts/canvasjs.min.js"(exports, module) {
    (function() {
      function qa(f, x) {
        f.prototype = fb(x.prototype);
        f.prototype.constructor = f;
        f.base = x.prototype;
      }
      function fb(f) {
        function x() {
        }
        x.prototype = f;
        return new x();
      }
      function Za(f, x, l2) {
        "millisecond" === l2 ? f.setMilliseconds(f.getMilliseconds() + 1 * x) : "second" === l2 ? f.setSeconds(f.getSeconds() + 1 * x) : "minute" === l2 ? f.setMinutes(f.getMinutes() + 1 * x) : "hour" === l2 ? f.setHours(f.getHours() + 1 * x) : "day" === l2 ? f.setDate(f.getDate() + 1 * x) : "week" === l2 ? f.setDate(f.getDate() + 7 * x) : "month" === l2 ? f.setMonth(f.getMonth() + 1 * x) : "year" === l2 && f.setFullYear(f.getFullYear() + 1 * x);
        return f;
      }
      function aa(f, x) {
        var l2 = false;
        0 > f && (l2 = true, f *= -1);
        f = "" + f;
        for (x = x ? x : 1; f.length < x; ) f = "0" + f;
        return l2 ? "-" + f : f;
      }
      function Ia(f) {
        if (!f) return f;
        f = f.replace(/^\s\s*/, "");
        for (var x = /\s/, l2 = f.length; x.test(f.charAt(--l2)); ) ;
        return f.slice(0, l2 + 1);
      }
      function Aa(f) {
        f.roundRect = function(f2, l2, r2, U, pa, B, t2, A2) {
          t2 && (this.fillStyle = t2);
          A2 && (this.strokeStyle = A2);
          "undefined" === typeof pa && (pa = 5);
          pa = Math.min(pa, Math.min(r2, U) / 2);
          this.lineWidth = B;
          this.beginPath();
          this.moveTo(f2 + pa, l2);
          this.lineTo(f2 + r2 - pa, l2);
          this.quadraticCurveTo(f2 + r2, l2, f2 + r2, l2 + pa);
          this.lineTo(f2 + r2, l2 + U - pa);
          this.quadraticCurveTo(f2 + r2, l2 + U, f2 + r2 - pa, l2 + U);
          this.lineTo(f2 + pa, l2 + U);
          this.quadraticCurveTo(f2, l2 + U, f2, l2 + U - pa);
          this.lineTo(f2, l2 + pa);
          this.quadraticCurveTo(f2, l2, f2 + pa, l2);
          this.closePath();
          t2 && this.fill();
          A2 && 0 < B && this.stroke();
        };
      }
      function Ta(f, x) {
        return f - x;
      }
      function V(f) {
        var x = ((f & 16711680) >> 16).toString(16), l2 = ((f & 65280) >> 8).toString(16);
        f = ((f & 255) >> 0).toString(16);
        x = 2 > x.length ? "0" + x : x;
        l2 = 2 > l2.length ? "0" + l2 : l2;
        f = 2 > f.length ? "0" + f : f;
        return "#" + x + l2 + f;
      }
      function gb(f, x) {
        var l2 = this.length >>> 0, r2 = Number(x) || 0, r2 = 0 > r2 ? Math.ceil(r2) : Math.floor(r2);
        for (0 > r2 && (r2 += l2); r2 < l2; r2++) if (r2 in this && this[r2] === f) return r2;
        return -1;
      }
      function l(f) {
        return null === f || "undefined" === typeof f;
      }
      function Fa(f) {
        f.indexOf || (f.indexOf = gb);
        return f;
      }
      function hb(f) {
        if (va.fSDec) f[ja("`eeDwdouMhrudods")](ja("e`u`@ohl`uhnoHuds`uhnoDoe"), function() {
          va._fTWm && va._fTWm(f);
        });
      }
      function $a(f, x, l2) {
        l2 = l2 || "normal";
        var r2 = f + "_" + x + "_" + l2, U = ab[r2];
        if (isNaN(U)) {
          try {
            if (!xa) {
              var pa = document.body;
              xa = document.createElement("span");
              xa.innerHTML = "";
              var B = document.createTextNode("Mpgyi");
              xa.appendChild(B);
              pa.appendChild(xa);
            }
            xa.style.display = "";
            K(xa, {
              position: "absolute",
              left: "0px",
              top: "-20000px",
              padding: "0px",
              margin: "0px",
              border: "none",
              whiteSpace: "pre",
              lineHeight: "normal",
              fontFamily: f,
              fontSize: x + "px",
              fontWeight: l2
            });
            U = Math.round(xa.offsetHeight);
            xa.style.display = "none";
          } catch (t2) {
            U = Math.ceil(1.1 * x);
          }
          U = Math.max(U, x);
          ab[r2] = U;
        }
        return U;
      }
      function I(f, x) {
        var l2 = [];
        if (l2 = {
          solid: [],
          shortDash: [3, 1],
          shortDot: [1, 1],
          shortDashDot: [3, 1, 1, 1],
          shortDashDotDot: [3, 1, 1, 1, 1, 1],
          dot: [1, 2],
          dash: [4, 2],
          dashDot: [4, 2, 1, 2],
          longDash: [8, 2],
          longDashDot: [8, 2, 1, 2],
          longDashDotDot: [8, 2, 1, 2, 1, 2]
        }[f || "solid"]) for (var r2 = 0; r2 < l2.length; r2++) l2[r2] *= x;
        else l2 = [];
        return l2;
      }
      function F(f, x, ya, r2, U) {
        r2 = r2 || [];
        U = l(U) ? ib ? {
          passive: false,
          capture: false
        } : false : U;
        r2.push([f, x, ya, U]);
        return f.addEventListener ? (f.addEventListener(x, ya, U), ya) : f.attachEvent ? (r2 = function(x2) {
          x2 = x2 || window.event;
          x2.preventDefault = x2.preventDefault || function() {
            x2.returnValue = false;
          };
          x2.stopPropagation = x2.stopPropagation || function() {
            x2.cancelBubble = true;
          };
          ya.call(f, x2);
        }, f.attachEvent("on" + x, r2), r2) : false;
      }
      function jb(f) {
        if (f._menuButton) f.exportEnabled ? (K(f._menuButton, {
          backgroundColor: f.toolbar.itemBackgroundColor,
          color: f.toolbar.fontColor
        }), Na(f._menuButton), ta(f, f._menuButton, "menu"), 0 >= navigator.userAgent.search("MSIE") && f._menuButton.childNodes[0] && K(f._menuButton.childNodes[0], {
          WebkitFilter: "invert(0%)",
          filter: "invert(0%)"
        })) : wa(f._menuButton);
        else if (f.exportEnabled && r) {
          var x = false;
          f._menuButton = document.createElement("button");
          ta(f, f._menuButton, "menu");
          f._toolBar.appendChild(f._menuButton);
          F(f._menuButton, "touchstart", function(f2) {
            x = true;
          }, f.allDOMEventHandlers);
          F(f._menuButton, "click", function() {
            "none" !== f._dropdownMenu.style.display || f._dropDownCloseTime && 500 >= (/* @__PURE__ */ new Date()).getTime() - f._dropDownCloseTime.getTime() || (f._dropdownMenu.style.display = "block", f._menuButton.blur(), f._dropdownMenu.focus());
          }, f.allDOMEventHandlers, true);
          F(f._menuButton, "mousemove", function() {
            x || (K(f._menuButton, {
              backgroundColor: f.toolbar.itemBackgroundColorOnHover,
              color: f.toolbar.fontColorOnHover
            }), 0 >= navigator.userAgent.search("MSIE") && K(f._menuButton.childNodes[0], {
              WebkitFilter: "invert(100%)",
              filter: "invert(100%)"
            }));
          }, f.allDOMEventHandlers, true);
          F(f._menuButton, "mouseout", function() {
            x || (K(f._menuButton, {
              backgroundColor: f.toolbar.itemBackgroundColor,
              color: f.toolbar.fontColor
            }), 0 >= navigator.userAgent.search("MSIE") && K(f._menuButton.childNodes[0], {
              WebkitFilter: "invert(0%)",
              filter: "invert(0%)"
            }));
          }, f.allDOMEventHandlers, true);
        }
        if (f.exportEnabled && f._dropdownMenu) {
          var l2 = f.theme && -1 !== f.theme.indexOf("dark") ? "black" : "#888888";
          K(f._dropdownMenu, {
            backgroundColor: f.toolbar.itemBackgroundColor,
            color: f.toolbar.fontColor,
            boxShadow: "2px 2px 10px " + l2
          });
          for (var l2 = f._dropdownMenu.childNodes, N = [f._cultureInfo.printText, f._cultureInfo.saveJPGText, f._cultureInfo.savePNGText], U = 0; U < N.length; U++) K(l2[U], {
            backgroundColor: f.toolbar.itemBackgroundColor,
            color: f.toolbar.fontColor
          }), l2[U].innerHTML = N[U];
        } else !f._dropdownMenu && f.exportEnabled && r && (x = false, f._dropdownMenu = document.createElement("div"), f._dropdownMenu.setAttribute("tabindex", -1), l2 = f.theme && -1 !== f.theme.indexOf("dark") ? "black" : "#888888", K(f._dropdownMenu, {
          position: "absolute",
          zIndex: 1,
          userSelect: "none",
          MozUserSeelct: "none",
          WebkitUserSelect: "none",
          msUserSelect: "none",
          cursor: "pointer",
          right: "0px",
          top: "25px",
          minWidth: "120px",
          outline: 0,
          fontSize: "14px",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "5px 0px 5px 0px",
          textAlign: "left",
          lineHeight: "10px",
          backgroundColor: f.toolbar.itemBackgroundColor,
          boxShadow: "2px 2px 10px " + l2
        }), f._dropdownMenu.style.display = "none", f._toolBar.appendChild(f._dropdownMenu), F(f._dropdownMenu, "blur", function() {
          wa(f._dropdownMenu);
          f._dropDownCloseTime = /* @__PURE__ */ new Date();
        }, f.allDOMEventHandlers, true), l2 = document.createElement("div"), K(l2, {
          padding: "12px 8px 12px 8px"
        }), l2.innerHTML = f._cultureInfo.printText, l2.style.backgroundColor = f.toolbar.itemBackgroundColor, l2.style.color = f.toolbar.fontColor, f._dropdownMenu.appendChild(l2), F(l2, "touchstart", function(f2) {
          x = true;
        }, f.allDOMEventHandlers), F(l2, "mousemove", function() {
          x || (this.style.backgroundColor = f.toolbar.itemBackgroundColorOnHover, this.style.color = f.toolbar.fontColorOnHover);
        }, f.allDOMEventHandlers, true), F(l2, "mouseout", function() {
          x || (this.style.backgroundColor = f.toolbar.itemBackgroundColor, this.style.color = f.toolbar.fontColor);
        }, f.allDOMEventHandlers, true), F(l2, "click", function() {
          f.print();
          wa(f._dropdownMenu);
        }, f.allDOMEventHandlers, true), l2 = document.createElement("div"), K(l2, {
          padding: "12px 8px 12px 8px"
        }), l2.innerHTML = f._cultureInfo.saveJPGText, l2.style.backgroundColor = f.toolbar.itemBackgroundColor, l2.style.color = f.toolbar.fontColor, f._dropdownMenu.appendChild(l2), F(l2, "touchstart", function(f2) {
          x = true;
        }, f.allDOMEventHandlers), F(l2, "mousemove", function() {
          x || (this.style.backgroundColor = f.toolbar.itemBackgroundColorOnHover, this.style.color = f.toolbar.fontColorOnHover);
        }, f.allDOMEventHandlers, true), F(l2, "mouseout", function() {
          x || (this.style.backgroundColor = f.toolbar.itemBackgroundColor, this.style.color = f.toolbar.fontColor);
        }, f.allDOMEventHandlers, true), F(l2, "click", function() {
          f.exportChart({
            format: "jpeg",
            fileName: f.exportFileName
          });
          wa(f._dropdownMenu);
        }, f.allDOMEventHandlers, true), l2 = document.createElement("div"), K(l2, {
          padding: "12px 8px 12px 8px"
        }), l2.innerHTML = f._cultureInfo.savePNGText, l2.style.backgroundColor = f.toolbar.itemBackgroundColor, l2.style.color = f.toolbar.fontColor, f._dropdownMenu.appendChild(l2), F(l2, "touchstart", function(f2) {
          x = true;
        }, f.allDOMEventHandlers), F(l2, "mousemove", function() {
          x || (this.style.backgroundColor = f.toolbar.itemBackgroundColorOnHover, this.style.color = f.toolbar.fontColorOnHover);
        }, f.allDOMEventHandlers, true), F(l2, "mouseout", function() {
          x || (this.style.backgroundColor = f.toolbar.itemBackgroundColor, this.style.color = f.toolbar.fontColor);
        }, f.allDOMEventHandlers, true), F(l2, "click", function() {
          f.exportChart({
            format: "png",
            fileName: f.exportFileName
          });
          wa(f._dropdownMenu);
        }, f.allDOMEventHandlers, true));
      }
      function bb(f, x, l2) {
        f *= na;
        x *= na;
        f = l2.getImageData(f, x, 2, 2).data;
        x = true;
        for (l2 = 0; 4 > l2; l2++) if (f[l2] !== f[l2 + 4] | f[l2] !== f[l2 + 8] | f[l2] !== f[l2 + 12]) {
          x = false;
          break;
        }
        return x ? f[0] << 16 | f[1] << 8 | f[2] : 0;
      }
      function ka(f, x, l2) {
        return f in x ? x[f] : l2[f];
      }
      function Oa(f, x, ya, N) {
        r && cb ? (N = !l(N) && N ? f.getContext("2d", {
          willReadFrequently: true
        }) : f.getContext("2d"), Pa = N.webkitBackingStorePixelRatio || N.mozBackingStorePixelRatio || N.msBackingStorePixelRatio || N.oBackingStorePixelRatio || N.backingStorePixelRatio || 1, na = Ua / Pa, f.width = x * na, f.height = ya * na, Ua !== Pa && (f.style.width = x + "px", f.style.height = ya + "px", N.scale(na, na))) : (f.width = x, f.height = ya);
      }
      function kb(f) {
        if (!lb) {
          var x = false, l2 = false;
          "undefined" === typeof ra.Chart.creditHref ? (f.creditHref = ja("iuuqr;..b`ow`rkr/bnl."), f.creditText = ja("B`ow`rKR/bnl")) : (x = f.updateOption("creditText"), l2 = f.updateOption("creditHref"));
          if (f.creditHref && f.creditText) {
            f._creditLink || (f._creditLink = document.createElement("a"), f._creditLink.setAttribute("class", "canvasjs-chart-credit"), f._creditLink.setAttribute("title", "JavaScript Charts"), K(f._creditLink, {
              outline: "none",
              margin: "0px",
              position: "absolute",
              right: "2px",
              top: f.height - 14 + "px",
              color: "dimgrey",
              textDecoration: "none",
              fontSize: "11px",
              fontFamily: "Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"
            }), f._creditLink.setAttribute("tabIndex", -1), f._creditLink.setAttribute("target", "_blank"));
            if (0 === f.renderCount || x || l2) f._creditLink.setAttribute("href", f.creditHref), f._creditLink.innerHTML = f.creditText;
            f._creditLink && f.creditHref && f.creditText ? (f._creditLink.parentElement || f._canvasJSContainer.appendChild(f._creditLink), f._creditLink.style.top = f.height - 14 + "px") : f._creditLink.parentElement && f._canvasJSContainer.removeChild(f._creditLink);
          }
        }
      }
      function ua(f, x, l2) {
        Ja && (this.canvasCount |= 0, window.console.log(++this.canvasCount));
        var N = document.createElement("canvas");
        N.setAttribute("class", "canvasjs-chart-canvas");
        Oa(N, f, x, l2);
        r || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(N);
        return N;
      }
      function K(f, x) {
        for (var l2 in x) f.style[l2] = x[l2];
      }
      function db(f) {
        return f.currentStyle ? f.currentStyle : window && window.getComputedStyle ? window.getComputedStyle(f, null) : f.style;
      }
      function ta(f, x, l2) {
        x.getAttribute("state") || (x.style.backgroundColor = f.toolbar.itemBackgroundColor, x.style.color = f.toolbar.fontColor, x.style.border = "none", K(x, {
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none"
        }));
        x.getAttribute("state") !== l2 && (x.setAttribute("state", l2), x.setAttribute("type", "button"), K(x, {
          padding: "5px 12px",
          cursor: "pointer",
          "float": "left",
          width: "40px",
          height: "25px",
          outline: "0px",
          verticalAlign: "baseline",
          lineHeight: "0"
        }), x.innerHTML = "<img src='" + mb[l2].image + "' alt='" + f._cultureInfo[l2 + "Text"] + "' />", K(x.childNodes[0], {
          height: "95%",
          pointerEvents: "none"
        }));
        x.setAttribute("title", f._cultureInfo[l2 + "Text"]);
      }
      function Na() {
        for (var f = null, x = 0; x < arguments.length; x++) f = arguments[x], f.style && (f.style.display = "inline");
      }
      function wa() {
        for (var f = null, x = 0; x < arguments.length; x++) (f = arguments[x]) && f.style && (f.style.display = "none");
      }
      function Va(f, x, l2, r2, U) {
        if (null === f || "undefined" === typeof f) return "undefined" === typeof l2 ? x : l2;
        f = parseFloat(f.toString()) * (0 <= f.toString().indexOf("%") ? x / 100 : 1);
        "undefined" !== typeof r2 && (f = Math.min(r2, f), "undefined" !== typeof U && (f = Math.max(U, f)));
        return !isNaN(f) && f <= x && 0 <= f ? f : "undefined" === typeof l2 ? x : l2;
      }
      function Y(f, x, r2, N, U) {
        this._defaultsKey = f;
        this._themeOptionsKey = x;
        this._index = N;
        this.parent = U;
        this._eventListeners = [];
        f = {};
        this.theme && l(this.parent) && l(x) && l(N) ? f = l(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && this.parent.themeOptions && this.parent.themeOptions[x] && (null === N ? f = this.parent.themeOptions[x] : 0 < this.parent.themeOptions[x].length && (N = Math.min(this.parent.themeOptions[x].length - 1, N), f = this.parent.themeOptions[x][N]));
        this.themeOptions = f;
        this.options = r2 ? r2 : {
          _isPlaceholder: true
        };
        this.setOptions(this.options, f);
      }
      function Ga(f, x, l2, r2, U) {
        "undefined" === typeof U && (U = 0);
        this._padding = U;
        this._x1 = f;
        this._y1 = x;
        this._x2 = l2;
        this._y2 = r2;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
      }
      function la(f, x) {
        la.base.constructor.call(this, "TextBlock", null, x, null, null);
        this.ctx = f;
        this._isDirty = true;
        this._wrappedText = null;
        this._initialize();
      }
      function Wa(f, x) {
        Wa.base.constructor.call(this, "Toolbar", "toolbar", x, null, f);
        this.chart = f;
        this.canvas = f.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "toolbar";
      }
      function Ba(f, x) {
        Ba.base.constructor.call(this, "Title", "title", x, null, f);
        this.chart = f;
        this.canvas = f.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (l(this.options.margin) && f.options.subtitles) {
          for (var r2 = f.options.subtitles, N = 0; N < r2.length; N++) if ((l(r2[N].horizontalAlign) && "center" === this.horizontalAlign || r2[N].horizontalAlign === this.horizontalAlign) && (l(r2[N].verticalAlign) && "top" === this.verticalAlign || r2[N].verticalAlign === this.verticalAlign) && !r2[N].dockInsidePlotArea === !this.dockInsidePlotArea) {
            this.margin = 0;
            break;
          }
        }
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
          x1: null,
          y1: null,
          x2: null,
          y2: null
        };
      }
      function Ka(f, x, l2) {
        Ka.base.constructor.call(this, "Subtitle", "subtitles", x, l2, f);
        this.chart = f;
        this.canvas = f.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = true;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
          x1: null,
          y1: null,
          x2: null,
          y2: null
        };
      }
      function Xa() {
        this.pool = [];
      }
      function La(f) {
        var x;
        f && Ma[f] && (x = Ma[f]);
        La.base.constructor.call(this, "CultureInfo", null, x, null, null);
      }
      var Ja = false, va = {}, r = !!document.createElement("canvas").getContext, ra = {
        Chart: {
          width: 500,
          height: 400,
          zoomEnabled: false,
          zoomType: "x",
          backgroundColor: "white",
          theme: "light1",
          animationEnabled: false,
          animationDuration: 1200,
          dataPointWidth: null,
          dataPointMinWidth: null,
          dataPointMaxWidth: null,
          colorSet: "colorSet1",
          culture: "en",
          creditText: "CanvasJS",
          interactivityEnabled: true,
          exportEnabled: false,
          exportFileName: "Chart",
          rangeChanging: null,
          rangeChanged: null,
          publicProperties: {
            title: "readWrite",
            subtitles: "readWrite",
            toolbar: "readWrite",
            toolTip: "readWrite",
            legend: "readWrite",
            axisX: "readWrite",
            axisY: "readWrite",
            axisX2: "readWrite",
            axisY2: "readWrite",
            data: "readWrite",
            options: "readWrite",
            bounds: "readOnly",
            container: "readOnly",
            selectedColorSet: "readOnly"
          }
        },
        Title: {
          padding: 0,
          text: null,
          verticalAlign: "top",
          horizontalAlign: "center",
          fontSize: 20,
          fontFamily: "Calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          borderThickness: 0,
          borderColor: "black",
          cornerRadius: 0,
          backgroundColor: r ? "transparent" : null,
          margin: 5,
          wrap: true,
          maxWidth: null,
          textAlign: "center",
          dockInsidePlotArea: false,
          publicProperties: {
            options: "readWrite",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        Subtitle: {
          padding: 0,
          text: null,
          verticalAlign: "top",
          horizontalAlign: "center",
          fontSize: 14,
          fontFamily: "Calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          borderThickness: 0,
          borderColor: "black",
          cornerRadius: 0,
          backgroundColor: null,
          margin: 2,
          wrap: true,
          maxWidth: null,
          textAlign: "center",
          dockInsidePlotArea: false,
          publicProperties: {
            options: "readWrite",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        Toolbar: {
          itemBackgroundColor: "white",
          itemBackgroundColorOnHover: "#2196f3",
          buttonBorderColor: "#2196f3",
          buttonBorderThickness: 1,
          fontColor: "black",
          fontColorOnHover: "white",
          publicProperties: {
            options: "readWrite",
            chart: "readOnly"
          }
        },
        Legend: {
          name: null,
          verticalAlign: "center",
          horizontalAlign: "right",
          fontSize: 14,
          fontFamily: "calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          cursor: null,
          itemmouseover: null,
          itemmouseout: null,
          itemmousemove: null,
          itemclick: null,
          dockInsidePlotArea: false,
          reversed: false,
          backgroundColor: r ? "transparent" : null,
          borderColor: r ? "transparent" : null,
          borderThickness: 0,
          cornerRadius: 0,
          maxWidth: null,
          maxHeight: null,
          markerMargin: null,
          itemMaxWidth: null,
          itemWidth: null,
          itemWrap: true,
          itemTextFormatter: null,
          publicProperties: {
            options: "readWrite",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        ToolTip: {
          enabled: true,
          shared: false,
          animationEnabled: true,
          content: null,
          contentFormatter: null,
          reversed: false,
          backgroundColor: r ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
          borderColor: null,
          borderThickness: 2,
          cornerRadius: 5,
          fontSize: 14,
          fontColor: "black",
          fontFamily: "Calibri, Arial, Georgia, serif;",
          fontWeight: "normal",
          fontStyle: "italic",
          updated: null,
          hidden: null,
          publicProperties: {
            options: "readWrite",
            chart: "readOnly"
          }
        },
        Axis: {
          minimum: null,
          maximum: null,
          viewportMinimum: null,
          viewportMaximum: null,
          interval: null,
          intervalType: null,
          reversed: false,
          logarithmic: false,
          logarithmBase: 10,
          title: null,
          titleFontColor: "black",
          titleFontSize: 20,
          titleFontFamily: "arial",
          titleFontWeight: "normal",
          titleFontStyle: "normal",
          titleWrap: true,
          titleMaxWidth: null,
          titleBackgroundColor: r ? "transparent" : null,
          titleBorderColor: r ? "transparent" : null,
          titleBorderThickness: 0,
          titleCornerRadius: 0,
          titleTextAlign: "left",
          titlePadding: 0,
          labelAngle: 0,
          labelFontFamily: "arial",
          labelFontColor: "black",
          labelFontSize: 12,
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelAutoFit: true,
          labelWrap: true,
          labelMaxWidth: null,
          labelFormatter: null,
          labelBackgroundColor: r ? "transparent" : null,
          labelBorderColor: r ? "transparent" : null,
          labelBorderThickness: 0,
          labelPadding: 0,
          labelCornerRadius: 0,
          labelPlacement: "outside",
          labelTextAlign: "left",
          prefix: "",
          suffix: "",
          includeZero: false,
          tickLength: 5,
          tickColor: "black",
          tickThickness: 1,
          tickPlacement: "outside",
          lineColor: "black",
          lineThickness: 1,
          lineDashType: "solid",
          gridColor: "#A0A0A0",
          gridThickness: 0,
          gridDashType: "solid",
          interlacedColor: r ? "transparent" : null,
          valueFormatString: null,
          margin: 2,
          publicProperties: {
            options: "readWrite",
            stripLines: "readWrite",
            scaleBreaks: "readWrite",
            crosshair: "readWrite",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        StripLine: {
          value: null,
          startValue: null,
          endValue: null,
          color: "orange",
          opacity: null,
          thickness: 2,
          lineDashType: "solid",
          label: "",
          labelPlacement: "inside",
          labelAlign: "far",
          labelWrap: true,
          labelMaxWidth: null,
          labelBackgroundColor: null,
          labelBorderColor: r ? "transparent" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelFontFamily: "arial",
          labelFontColor: "orange",
          labelFontSize: 12,
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelFormatter: null,
          labelTextAlign: "left",
          labelPadding: 0,
          showOnTop: false,
          publicProperties: {
            options: "readWrite",
            axis: "readOnly",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        ScaleBreaks: {
          autoCalculate: false,
          collapsibleThreshold: "25%",
          maxNumberOfAutoBreaks: 2,
          spacing: 8,
          type: "straight",
          color: "#FFFFFF",
          fillOpacity: 0.9,
          lineThickness: 2,
          lineColor: "#E16E6E",
          lineDashType: "solid",
          publicProperties: {
            options: "readWrite",
            customBreaks: "readWrite",
            axis: "readOnly",
            autoBreaks: "readOnly",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        Break: {
          startValue: null,
          endValue: null,
          spacing: 8,
          type: "straight",
          color: "#FFFFFF",
          fillOpacity: 0.9,
          lineThickness: 2,
          lineColor: "#E16E6E",
          lineDashType: "solid",
          publicProperties: {
            options: "readWrite",
            scaleBreaks: "readOnly",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        Crosshair: {
          enabled: false,
          snapToDataPoint: false,
          color: "grey",
          opacity: null,
          thickness: 2,
          lineDashType: "solid",
          label: "",
          labelWrap: true,
          labelMaxWidth: null,
          labelTextAlign: "left",
          labelBackgroundColor: r ? "grey" : null,
          labelBorderColor: r ? "grey" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelFontFamily: r ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
          labelFontSize: 12,
          labelPadding: 0,
          labelFontColor: "#fff",
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelFormatter: null,
          valueFormatString: null,
          updated: null,
          hidden: null,
          publicProperties: {
            options: "readWrite",
            axis: "readOnly",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        DataSeries: {
          name: null,
          dataPoints: null,
          label: "",
          bevelEnabled: false,
          highlightEnabled: true,
          cursor: "default",
          indexLabel: "",
          indexLabelPlacement: "auto",
          indexLabelOrientation: "horizontal",
          indexLabelTextAlign: "left",
          indexLabelFontColor: "black",
          indexLabelFontSize: 12,
          indexLabelFontStyle: "normal",
          indexLabelFontFamily: "Arial",
          indexLabelFontWeight: "normal",
          indexLabelPadding: 0,
          indexLabelBackgroundColor: null,
          indexLabelBorderColor: null,
          indexLabelBorderThickness: 0,
          indexLabelLineColor: "gray",
          indexLabelLineThickness: 1,
          indexLabelLineDashType: "solid",
          indexLabelMaxWidth: null,
          indexLabelWrap: true,
          indexLabelFormatter: null,
          lineThickness: 2,
          lineDashType: "solid",
          connectNullData: false,
          nullDataLineDashType: "dash",
          color: null,
          lineColor: null,
          risingColor: "white",
          fallingColor: "red",
          fillOpacity: null,
          startAngle: 0,
          radius: null,
          innerRadius: null,
          explodeOnClick: true,
          neckHeight: null,
          neckWidth: null,
          reversed: false,
          valueRepresents: null,
          linkedDataSeriesIndex: null,
          whiskerThickness: 2,
          whiskerDashType: "solid",
          whiskerColor: null,
          whiskerLength: null,
          stemThickness: 2,
          stemColor: null,
          stemDashType: "solid",
          upperBoxColor: "white",
          lowerBoxColor: "white",
          type: "column",
          xValueType: "number",
          axisXType: "primary",
          axisYType: "primary",
          axisXIndex: 0,
          axisYIndex: 0,
          xValueFormatString: null,
          yValueFormatString: null,
          zValueFormatString: null,
          percentFormatString: null,
          showInLegend: false,
          legendMarkerType: null,
          legendMarkerColor: null,
          legendText: null,
          legendMarkerBorderColor: r ? "transparent" : null,
          legendMarkerBorderThickness: 0,
          markerType: "circle",
          markerColor: null,
          markerSize: null,
          markerBorderColor: r ? "transparent" : null,
          markerBorderThickness: 0,
          mouseover: null,
          mouseout: null,
          mousemove: null,
          click: null,
          toolTipContent: null,
          visible: true,
          publicProperties: {
            options: "readWrite",
            axisX: "readWrite",
            axisY: "readWrite",
            chart: "readOnly"
          }
        },
        TextBlock: {
          x: 0,
          y: 0,
          width: null,
          height: null,
          maxWidth: null,
          maxHeight: null,
          padding: 0,
          angle: 0,
          text: "",
          horizontalAlign: "center",
          textAlign: "left",
          fontSize: 12,
          fontFamily: "calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          borderThickness: 0,
          borderColor: "black",
          cornerRadius: 0,
          backgroundColor: null,
          textBaseline: "top"
        },
        CultureInfo: {
          decimalSeparator: ".",
          digitGroupSeparator: ",",
          zoomText: "Zoom",
          panText: "Pan",
          resetText: "Reset",
          menuText: "More Options",
          saveJPGText: "Save as JPEG",
          savePNGText: "Save as PNG",
          printText: "Print",
          days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
          months: "January February March April May June July August September October November December".split(" "),
          shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
        }
      }, Ma = {
        en: {}
      }, t = r ? "Trebuchet MS, Helvetica, sans-serif" : "Arial", Ha = r ? "Impact, Charcoal, sans-serif" : "Arial", Ca = {
        colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
        colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
        colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
      }, Q, $, W, ha, X;
      $ = "#333333";
      W = "#000000";
      Q = "#666666";
      X = ha = "#000000";
      var ga = 20, A = 14, Ya = {
        colorSet: "colorSet1",
        backgroundColor: "#FFFFFF",
        title: {
          fontFamily: Ha,
          fontSize: 32,
          fontColor: $,
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5
        },
        subtitles: [{
          fontFamily: Ha,
          fontSize: A,
          fontColor: $,
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5
        }],
        data: [{
          indexLabelFontFamily: t,
          indexLabelFontSize: A,
          indexLabelFontColor: $,
          indexLabelFontWeight: "normal",
          indexLabelLineThickness: 1
        }],
        axisX: [{
          titleFontFamily: t,
          titleFontSize: ga,
          titleFontColor: $,
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: A,
          labelFontColor: W,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: Q,
          tickThickness: 1,
          tickColor: Q,
          gridThickness: 0,
          gridColor: Q,
          stripLines: [{
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: X,
            color: ha,
            thickness: 1,
            lineDashType: "dash"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        axisX2: [{
          titleFontFamily: t,
          titleFontSize: ga,
          titleFontColor: $,
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: A,
          labelFontColor: W,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: Q,
          tickThickness: 1,
          tickColor: Q,
          gridThickness: 0,
          gridColor: Q,
          stripLines: [{
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: X,
            color: ha,
            thickness: 1,
            lineDashType: "dash"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        axisY: [{
          titleFontFamily: t,
          titleFontSize: ga,
          titleFontColor: $,
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: A,
          labelFontColor: W,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: Q,
          tickThickness: 1,
          tickColor: Q,
          gridThickness: 1,
          gridColor: Q,
          stripLines: [{
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: X,
            color: ha,
            thickness: 1,
            lineDashType: "dash"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        axisY2: [{
          titleFontFamily: t,
          titleFontSize: ga,
          titleFontColor: $,
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: A,
          labelFontColor: W,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: Q,
          tickThickness: 1,
          tickColor: Q,
          gridThickness: 1,
          gridColor: Q,
          stripLines: [{
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: X,
            color: ha,
            thickness: 1,
            lineDashType: "dash"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        legend: {
          fontFamily: t,
          fontSize: 14,
          fontColor: $,
          fontWeight: "bold",
          verticalAlign: "bottom",
          horizontalAlign: "center"
        },
        toolTip: {
          fontFamily: t,
          fontSize: 14,
          fontStyle: "normal",
          cornerRadius: 0,
          borderThickness: 1
        },
        toolbar: {
          itemBackgroundColor: "white",
          itemBackgroundColorOnHover: "#2196f3",
          buttonBorderColor: "#2196f3",
          buttonBorderThickness: 1,
          fontColor: "black",
          fontColorOnHover: "white"
        }
      };
      W = $ = "#F5F5F5";
      Q = "#FFFFFF";
      ha = "#40BAF1";
      X = "#F5F5F5";
      var ga = 20, A = 14, eb = {
        colorSet: "colorSet2",
        title: {
          fontFamily: t,
          fontSize: 33,
          fontColor: "#3A3A3A",
          fontWeight: "bold",
          verticalAlign: "top",
          margin: 5
        },
        subtitles: [{
          fontFamily: t,
          fontSize: A,
          fontColor: "#3A3A3A",
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5
        }],
        data: [{
          indexLabelFontFamily: t,
          indexLabelFontSize: A,
          indexLabelFontColor: "#666666",
          indexLabelFontWeight: "normal",
          indexLabelLineThickness: 1
        }],
        axisX: [{
          titleFontFamily: t,
          titleFontSize: ga,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: A,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: "#BBBBBB",
          tickThickness: 1,
          tickColor: "#BBBBBB",
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [{
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#FFA500",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FFA500",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        axisX2: [{
          titleFontFamily: t,
          titleFontSize: ga,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: A,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: "#BBBBBB",
          tickColor: "#BBBBBB",
          tickThickness: 1,
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [{
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#FFA500",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FFA500",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        axisY: [{
          titleFontFamily: t,
          titleFontSize: ga,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: A,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 0,
          lineColor: "#BBBBBB",
          tickColor: "#BBBBBB",
          tickThickness: 1,
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [{
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#FFA500",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FFA500",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        axisY2: [{
          titleFontFamily: t,
          titleFontSize: ga,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: A,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 0,
          lineColor: "#BBBBBB",
          tickColor: "#BBBBBB",
          tickThickness: 1,
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [{
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#FFA500",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FFA500",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        legend: {
          fontFamily: t,
          fontSize: 14,
          fontColor: "#3A3A3A",
          fontWeight: "bold",
          verticalAlign: "bottom",
          horizontalAlign: "center"
        },
        toolTip: {
          fontFamily: t,
          fontSize: 14,
          fontStyle: "normal",
          cornerRadius: 0,
          borderThickness: 1
        },
        toolbar: {
          itemBackgroundColor: "white",
          itemBackgroundColorOnHover: "#2196f3",
          buttonBorderColor: "#2196f3",
          buttonBorderThickness: 1,
          fontColor: "black",
          fontColorOnHover: "white"
        }
      };
      W = $ = "#F5F5F5";
      Q = "#FFFFFF";
      ha = "#40BAF1";
      X = "#F5F5F5";
      ga = 20;
      A = 14;
      Ha = {
        colorSet: "colorSet1",
        backgroundColor: "#2A2A2A",
        title: {
          fontFamily: Ha,
          fontSize: 32,
          fontColor: $,
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5
        },
        subtitles: [{
          fontFamily: Ha,
          fontSize: A,
          fontColor: $,
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5
        }],
        toolbar: {
          itemBackgroundColor: "#666666",
          itemBackgroundColorOnHover: "#FF7372",
          buttonBorderColor: "#FF7372",
          buttonBorderThickness: 1,
          fontColor: "#F5F5F5",
          fontColorOnHover: "#F5F5F5"
        },
        data: [{
          indexLabelFontFamily: t,
          indexLabelFontSize: A,
          indexLabelFontColor: W,
          indexLabelFontWeight: "normal",
          indexLabelLineThickness: 1
        }],
        axisX: [{
          titleFontFamily: t,
          titleFontSize: ga,
          titleFontColor: W,
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: A,
          labelFontColor: W,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: Q,
          tickThickness: 1,
          tickColor: Q,
          gridThickness: 0,
          gridColor: Q,
          stripLines: [{
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#000000",
            labelFontWeight: "normal",
            labelBackgroundColor: X,
            color: ha,
            thickness: 1,
            lineDashType: "dash"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#777777",
            lineThickness: 1,
            lineDashType: "solid",
            color: "#111111"
          }
        }],
        axisX2: [{
          titleFontFamily: t,
          titleFontSize: ga,
          titleFontColor: W,
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: A,
          labelFontColor: W,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: Q,
          tickThickness: 1,
          tickColor: Q,
          gridThickness: 0,
          gridColor: Q,
          stripLines: [{
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#000000",
            labelFontWeight: "normal",
            labelBackgroundColor: X,
            color: ha,
            thickness: 1,
            lineDashType: "dash"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#777777",
            lineThickness: 1,
            lineDashType: "solid",
            color: "#111111"
          }
        }],
        axisY: [{
          titleFontFamily: t,
          titleFontSize: ga,
          titleFontColor: W,
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: A,
          labelFontColor: W,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: Q,
          tickThickness: 1,
          tickColor: Q,
          gridThickness: 1,
          gridColor: Q,
          stripLines: [{
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#000000",
            labelFontWeight: "normal",
            labelBackgroundColor: X,
            color: ha,
            thickness: 1,
            lineDashType: "dash"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#777777",
            lineThickness: 1,
            lineDashType: "solid",
            color: "#111111"
          }
        }],
        axisY2: [{
          titleFontFamily: t,
          titleFontSize: ga,
          titleFontColor: W,
          titleFontWeight: "normal",
          labelFontFamily: t,
          labelFontSize: A,
          labelFontColor: W,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: Q,
          tickThickness: 1,
          tickColor: Q,
          gridThickness: 1,
          gridColor: Q,
          stripLines: [{
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: "#000000",
            labelFontWeight: "normal",
            labelBackgroundColor: X,
            color: ha,
            thickness: 1,
            lineDashType: "dash"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#777777",
            lineThickness: 1,
            lineDashType: "solid",
            color: "#111111"
          }
        }],
        legend: {
          fontFamily: t,
          fontSize: 14,
          fontColor: $,
          fontWeight: "bold",
          verticalAlign: "bottom",
          horizontalAlign: "center"
        },
        toolTip: {
          fontFamily: t,
          fontSize: 14,
          fontStyle: "normal",
          cornerRadius: 0,
          borderThickness: 1,
          fontColor: W,
          backgroundColor: "rgba(0, 0, 0, .7)"
        }
      };
      Q = "#FFFFFF";
      W = $ = "#FAFAFA";
      ha = "#40BAF1";
      X = "#F5F5F5";
      var ga = 20, A = 14, Qa = {
        light1: Ya,
        light2: eb,
        dark1: Ha,
        dark2: {
          colorSet: "colorSet2",
          backgroundColor: "#32373A",
          title: {
            fontFamily: t,
            fontSize: 32,
            fontColor: $,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
          },
          subtitles: [{
            fontFamily: t,
            fontSize: A,
            fontColor: $,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
          }],
          toolbar: {
            itemBackgroundColor: "#666666",
            itemBackgroundColorOnHover: "#FF7372",
            buttonBorderColor: "#FF7372",
            buttonBorderThickness: 1,
            fontColor: "#F5F5F5",
            fontColorOnHover: "#F5F5F5"
          },
          data: [{
            indexLabelFontFamily: t,
            indexLabelFontSize: A,
            indexLabelFontColor: W,
            indexLabelFontWeight: "normal",
            indexLabelLineThickness: 1
          }],
          axisX: [{
            titleFontFamily: t,
            titleFontSize: ga,
            titleFontColor: W,
            titleFontWeight: "normal",
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: W,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: Q,
            tickThickness: 1,
            tickColor: Q,
            gridThickness: 0,
            gridColor: Q,
            stripLines: [{
              labelFontFamily: t,
              labelFontSize: A,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1
            }],
            crosshair: {
              labelFontFamily: t,
              labelFontSize: A,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: X,
              color: ha,
              thickness: 1,
              lineDashType: "dash"
            },
            scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111"
            }
          }],
          axisX2: [{
            titleFontFamily: t,
            titleFontSize: ga,
            titleFontColor: W,
            titleFontWeight: "normal",
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: W,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: Q,
            tickThickness: 1,
            tickColor: Q,
            gridThickness: 0,
            gridColor: Q,
            stripLines: [{
              labelFontFamily: t,
              labelFontSize: A,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1
            }],
            crosshair: {
              labelFontFamily: t,
              labelFontSize: A,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: X,
              color: ha,
              thickness: 1,
              lineDashType: "dash"
            },
            scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111"
            }
          }],
          axisY: [{
            titleFontFamily: t,
            titleFontSize: ga,
            titleFontColor: W,
            titleFontWeight: "normal",
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: W,
            labelFontWeight: "normal",
            lineThickness: 0,
            lineColor: Q,
            tickThickness: 1,
            tickColor: Q,
            gridThickness: 1,
            gridColor: Q,
            stripLines: [{
              labelFontFamily: t,
              labelFontSize: A,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1
            }],
            crosshair: {
              labelFontFamily: t,
              labelFontSize: A,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: X,
              color: ha,
              thickness: 1,
              lineDashType: "dash"
            },
            scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111"
            }
          }],
          axisY2: [{
            titleFontFamily: t,
            titleFontSize: ga,
            titleFontColor: W,
            titleFontWeight: "normal",
            labelFontFamily: t,
            labelFontSize: A,
            labelFontColor: W,
            labelFontWeight: "normal",
            lineThickness: 0,
            lineColor: Q,
            tickThickness: 1,
            tickColor: Q,
            gridThickness: 1,
            gridColor: Q,
            stripLines: [{
              labelFontFamily: t,
              labelFontSize: A,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1
            }],
            crosshair: {
              labelFontFamily: t,
              labelFontSize: A,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: X,
              color: ha,
              thickness: 1,
              lineDashType: "dash"
            },
            scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111"
            }
          }],
          legend: {
            fontFamily: t,
            fontSize: 14,
            fontColor: $,
            fontWeight: "bold",
            verticalAlign: "bottom",
            horizontalAlign: "center"
          },
          toolTip: {
            fontFamily: t,
            fontSize: 14,
            fontStyle: "normal",
            cornerRadius: 0,
            borderThickness: 1,
            fontColor: W,
            backgroundColor: "rgba(0, 0, 0, .7)"
          }
        },
        theme1: Ya,
        theme2: eb,
        theme3: Ya
      }, S = {
        numberDuration: 1,
        yearDuration: 314496e5,
        monthDuration: 2592e6,
        weekDuration: 6048e5,
        dayDuration: 864e5,
        hourDuration: 36e5,
        minuteDuration: 6e4,
        secondDuration: 1e3,
        millisecondDuration: 1,
        dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
      };
      (function() {
        va.fSDec = function(f) {
          for (var x = "", l2 = 0; l2 < f.length; l2++) x += String.fromCharCode(Math.ceil(f.length / 57 / 5) ^ f.charCodeAt(l2));
          return x;
        };
        delete ra[va.fSDec("Bi`su")][va.fSDec("bsdehuIsdg")];
        va.pro = {
          sCH: ra[va.fSDec("Bi`su")][va.fSDec("bsdehuIsdg")]
        };
      })();
      var ib = function() {
        var f = false;
        try {
          var x = Object.defineProperty && Object.defineProperty({}, "passive", {
            get: function() {
              f = true;
              return false;
            }
          });
          window.addEventListener && (window.addEventListener("test", null, x), window.removeEventListener("test", null, x));
        } catch (l2) {
          f = false;
        }
        return f;
      }(), ab = {}, xa = null, nb = function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height));
      }, za = function(f) {
        f.width = 1;
        f.height = 1;
        f.getContext("2d") && f.getContext("2d").clearRect(0, 0, 1, 1);
      }, ob = function(f, x, l2) {
        x = Math.min(this.width, this.height);
        return Math.max("theme4" === this.theme ? 0 : 300 <= x ? 12 : 11, Math.round(x * (f / 400)));
      }, Da = function() {
        var f = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g, x = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), l2 = "Sun Mon Tue Wed Thu Fri Sat".split(" "), r2 = "January February March April May June July August September October November December".split(" "), U = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), t2 = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, B = /[^-+\dA-Z]/g;
        return function(A2, I2, O) {
          var Q2 = O ? O.days : x, V2 = O ? O.months : r2, F2 = O ? O.shortDays : l2, S2 = O ? O.shortMonths : U;
          O = "";
          var K2 = false;
          A2 = A2 && A2.getTime ? A2 : A2 ? new Date(A2) : /* @__PURE__ */ new Date();
          if (isNaN(A2)) throw SyntaxError("invalid date");
          "UTC:" === I2.slice(0, 4) && (I2 = I2.slice(4), K2 = true);
          O = K2 ? "getUTC" : "get";
          var Y2 = A2[O + "Date"](), R = A2[O + "Day"](), ba = A2[O + "Month"](), a = A2[O + "FullYear"](), e = A2[O + "Hours"](), c = A2[O + "Minutes"](), b = A2[O + "Seconds"](), d = A2[O + "Milliseconds"](), h = K2 ? 0 : A2.getTimezoneOffset();
          return O = I2.replace(f, function(q) {
            switch (q) {
              case "D":
                return Y2;
              case "DD":
                return aa(Y2, 2);
              case "DDD":
                return F2[R];
              case "DDDD":
                return Q2[R];
              case "M":
                return ba + 1;
              case "MM":
                return aa(ba + 1, 2);
              case "MMM":
                return S2[ba];
              case "MMMM":
                return V2[ba];
              case "Y":
                return parseInt(String(a).slice(-2));
              case "YY":
                return aa(String(a).slice(-2), 2);
              case "YYY":
                return aa(String(a).slice(-3), 3);
              case "YYYY":
                return aa(a, 4);
              case "h":
                return e % 12 || 12;
              case "hh":
                return aa(e % 12 || 12, 2);
              case "H":
                return e;
              case "HH":
                return aa(e, 2);
              case "m":
                return c;
              case "mm":
                return aa(c, 2);
              case "s":
                return b;
              case "ss":
                return aa(b, 2);
              case "f":
                return aa(String(d), 3).slice(0, 1);
              case "ff":
                return aa(String(d), 3).slice(0, 2);
              case "fff":
                return aa(String(d), 3).slice(0, 3);
              case "t":
                return 12 > e ? "a" : "p";
              case "tt":
                return 12 > e ? "am" : "pm";
              case "T":
                return 12 > e ? "A" : "P";
              case "TT":
                return 12 > e ? "AM" : "PM";
              case "K":
                return K2 ? "UTC" : (String(A2).match(t2) || [""]).pop().replace(B, "");
              case "z":
                return (0 < h ? "-" : "+") + Math.floor(Math.abs(h) / 60);
              case "zz":
                return (0 < h ? "-" : "+") + aa(Math.floor(Math.abs(h) / 60), 2);
              case "zzz":
                return (0 < h ? "-" : "+") + aa(Math.floor(Math.abs(h) / 60), 2) + aa(Math.abs(h) % 60, 2);
              default:
                return q.slice(1, q.length - 1);
            }
          });
        };
      }(), pb = function(f) {
        var x = 0 > f;
        if (1 > Math.abs(f)) {
          var l2 = parseInt(f.toString().split("e-")[1]);
          l2 && (f = (x ? -1 * f : f) * Math.pow(10, l2 - 1), f = "0." + Array(l2).join("0") + f.toString().substring(2), f = x ? "-" + f : f);
        } else l2 = parseInt(f.toString().split("+")[1]), 20 < l2 && (l2 -= 20, f /= Math.pow(10, l2), f = f.toString() + Array(l2 + 1).join("0"));
        return String(f);
      }, ia = function(f, l2, r2) {
        if (null === f) return "";
        if (!isFinite(f)) return f;
        f = Number(f);
        var N = 0 > f ? true : false;
        N && (f *= -1);
        var U = r2 ? r2.decimalSeparator : ".", t2 = r2 ? r2.digitGroupSeparator : ",", B = "";
        l2 = String(l2);
        var B = 1, A2 = r2 = "", I2 = -1, O = [], Q2 = [], V2 = 0, K2 = 0, F2 = 0, S2 = false, Y2 = 0, A2 = l2.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
        l2 = null;
        for (var R = 0; A2 && R < A2.length; R++) if (l2 = A2[R], "." === l2 && 0 > I2) I2 = R;
        else {
          if ("%" === l2) B *= 100;
          else if ("‰" === l2) {
            B *= 1e3;
            continue;
          } else if ("," === l2[0] && "." === l2[l2.length - 1]) {
            B /= Math.pow(1e3, l2.length - 1);
            I2 = R + l2.length - 1;
            continue;
          } else "E" !== l2[0] && "e" !== l2[0] || "0" !== l2[l2.length - 1] || (S2 = true);
          0 > I2 ? (O.push(l2), "#" === l2 || "0" === l2 ? V2++ : "," === l2 && F2++) : (Q2.push(l2), "#" !== l2 && "0" !== l2 || K2++);
        }
        S2 && (l2 = Math.floor(f), A2 = -Math.floor(Math.log(f) / Math.LN10 + 1), Y2 = 0 === f ? 0 : 0 === l2 ? -(V2 + A2) : pb(l2).length - V2, B /= Math.pow(10, Y2));
        0 > I2 && (I2 = R);
        B = (f * B).toFixed(K2);
        l2 = B.split(".");
        B = (l2[0] + "").split("");
        f = (l2[1] + "").split("");
        B && "0" === B[0] && B.shift();
        for (S2 = A2 = R = K2 = I2 = 0; 0 < O.length; ) if (l2 = O.pop(), "#" === l2 || "0" === l2) {
          if (I2++, I2 === V2) {
            var ba = B, B = [];
            if ("0" === l2) for (l2 = V2 - K2 - (ba ? ba.length : 0); 0 < l2; ) ba.unshift("0"), l2--;
            for (; 0 < ba.length; ) r2 = ba.pop() + r2, S2++, 0 === S2 % A2 && R === F2 && 0 < ba.length && (r2 = t2 + r2);
          } else 0 < B.length ? (r2 = B.pop() + r2, K2++, S2++) : "0" === l2 && (r2 = "0" + r2, K2++, S2++), 0 === S2 % A2 && R === F2 && 0 < B.length && (r2 = t2 + r2);
        } else "E" !== l2[0] && "e" !== l2[0] || "0" !== l2[l2.length - 1] || !/[eE][+-]*[0]+/.test(l2) ? "," === l2 ? (R++, A2 = S2, S2 = 0, 0 < B.length && (r2 = t2 + r2)) : r2 = 1 < l2.length && ('"' === l2[0] && '"' === l2[l2.length - 1] || "'" === l2[0] && "'" === l2[l2.length - 1]) ? l2.slice(1, l2.length - 1) + r2 : l2 + r2 : (l2 = 0 > Y2 ? l2.replace("+", "").replace("-", "") : l2.replace("-", ""), r2 += l2.replace(/[0]+/, function(a) {
          return aa(Y2, a.length);
        }));
        t2 = "";
        for (O = false; 0 < Q2.length; ) l2 = Q2.shift(), "#" === l2 || "0" === l2 ? 0 < f.length && 0 !== Number(f.join("")) ? (t2 += f.shift(), O = true) : "0" === l2 && (t2 += "0", O = true) : 1 < l2.length && ('"' === l2[0] && '"' === l2[l2.length - 1] || "'" === l2[0] && "'" === l2[l2.length - 1]) ? t2 += l2.slice(1, l2.length - 1) : "E" !== l2[0] && "e" !== l2[0] || "0" !== l2[l2.length - 1] || !/[eE][+-]*[0]+/.test(l2) ? t2 += l2 : (l2 = 0 > Y2 ? l2.replace("+", "").replace("-", "") : l2.replace("-", ""), t2 += l2.replace(/[0]+/, function(a) {
          return aa(Y2, a.length);
        }));
        r2 += (O ? U : "") + t2;
        return N ? "-" + r2 : r2;
      }, Ra = function(f) {
        var l2 = 0, r2 = 0;
        f = f || window.event;
        f.offsetX || 0 === f.offsetX ? (l2 = f.offsetX, r2 = f.offsetY) : f.layerX || 0 == f.layerX ? (l2 = f.layerX, r2 = f.layerY) : (l2 = f.pageX - f.target.offsetLeft, r2 = f.pageY - f.target.offsetTop);
        return {
          x: l2,
          y: r2
        };
      }, cb = true, Ua = window.devicePixelRatio || 1, Pa = 1, na = cb ? Ua / Pa : 1, ea = function(f, l2, r2, N, t2, A2, B, I2, S2, O, V2, Q2, K2) {
        "undefined" === typeof K2 && (K2 = 1);
        B = B || 0;
        I2 = I2 || "black";
        var F2 = 15 < N - l2 && 15 < t2 - r2 ? 8 : 0.35 * Math.min(N - l2, t2 - r2);
        f.beginPath();
        f.moveTo(l2, r2);
        f.save();
        f.fillStyle = A2;
        f.globalAlpha = K2;
        f.fillRect(l2, r2, N - l2, t2 - r2);
        f.globalAlpha = 1;
        0 < B && (K2 = 0 === B % 2 ? 0 : 0.5, f.beginPath(), f.lineWidth = B, f.strokeStyle = I2, f.moveTo(l2, r2), f.rect(l2 - K2, r2 - K2, N - l2 + 2 * K2, t2 - r2 + 2 * K2), f.stroke());
        f.restore();
        true === S2 && (f.save(), f.beginPath(), f.moveTo(l2, r2), f.lineTo(l2 + F2, r2 + F2), f.lineTo(N - F2, r2 + F2), f.lineTo(N, r2), f.closePath(), B = f.createLinearGradient((N + l2) / 2, r2 + F2, (N + l2) / 2, r2), B.addColorStop(0, A2), B.addColorStop(1, "rgba(255, 255, 255, .4)"), f.fillStyle = B, f.fill(), f.restore());
        true === O && (f.save(), f.beginPath(), f.moveTo(l2, t2), f.lineTo(l2 + F2, t2 - F2), f.lineTo(N - F2, t2 - F2), f.lineTo(N, t2), f.closePath(), B = f.createLinearGradient((N + l2) / 2, t2 - F2, (N + l2) / 2, t2), B.addColorStop(0, A2), B.addColorStop(1, "rgba(255, 255, 255, .4)"), f.fillStyle = B, f.fill(), f.restore());
        true === V2 && (f.save(), f.beginPath(), f.moveTo(l2, r2), f.lineTo(l2 + F2, r2 + F2), f.lineTo(l2 + F2, t2 - F2), f.lineTo(l2, t2), f.closePath(), B = f.createLinearGradient(l2 + F2, (t2 + r2) / 2, l2, (t2 + r2) / 2), B.addColorStop(0, A2), B.addColorStop(1, "rgba(255, 255, 255, 0.1)"), f.fillStyle = B, f.fill(), f.restore());
        true === Q2 && (f.save(), f.beginPath(), f.moveTo(N, r2), f.lineTo(N - F2, r2 + F2), f.lineTo(N - F2, t2 - F2), f.lineTo(N, t2), B = f.createLinearGradient(N - F2, (t2 + r2) / 2, N, (t2 + r2) / 2), B.addColorStop(0, A2), B.addColorStop(1, "rgba(255, 255, 255, 0.1)"), f.fillStyle = B, B.addColorStop(0, A2), B.addColorStop(1, "rgba(255, 255, 255, 0.1)"), f.fillStyle = B, f.fill(), f.closePath(), f.restore());
      }, ja = function(f) {
        for (var l2 = "", r2 = 0; r2 < f.length; r2++) l2 += String.fromCharCode(Math.ceil(f.length / 57 / 5) ^ f.charCodeAt(r2));
        return l2;
      }, lb = window && window[ja("mnb`uhno")] && window[ja("mnb`uhno")].href && window[ja("mnb`uhno")].href.indexOf && (-1 !== window[ja("mnb`uhno")].href.indexOf(ja("b`ow`rkr/bnl")) || -1 !== window[ja("mnb`uhno")].href.indexOf(ja("gdonqhy/bnl")) || -1 !== window[ja("mnb`uhno")].href.indexOf(ja("gheemd"))) && -1 === window[ja("mnb`uhno")].href.indexOf(ja("gheemd")), mb = {
        reset: {
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg=="
        },
        pan: {
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC"
        },
        zoom: {
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII="
        },
        menu: {
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC"
        }
      };
      Y.prototype.setOptions = function(f, l2) {
        if (ra[this._defaultsKey]) {
          var r2 = ra[this._defaultsKey], t2;
          for (t2 in r2) "publicProperties" !== t2 && r2.hasOwnProperty(t2) && (this[t2] = f && t2 in f ? f[t2] : l2 && t2 in l2 ? l2[t2] : r2[t2]);
        } else Ja && window.console && console.log("defaults not set");
      };
      Y.prototype.get = function(f) {
        var l2 = ra[this._defaultsKey];
        if ("options" === f) return this.options && this.options._isPlaceholder ? null : this.options;
        if (l2.hasOwnProperty(f) || l2.publicProperties && l2.publicProperties.hasOwnProperty(f)) return this[f];
        window.console && window.console.log('Property "' + f + `" doesn't exist. Please check for typo.`);
      };
      Y.prototype.set = function(f, l2, r2) {
        r2 = "undefined" === typeof r2 ? true : r2;
        var t2 = ra[this._defaultsKey];
        if ("options" === f) this.createUserOptions(l2);
        else if (t2.hasOwnProperty(f) || t2.publicProperties && t2.publicProperties.hasOwnProperty(f) && "readWrite" === t2.publicProperties[f]) this.options._isPlaceholder && this.createUserOptions(), this.options[f] = l2;
        else {
          window.console && (t2.publicProperties && t2.publicProperties.hasOwnProperty(f) && "readOnly" === t2.publicProperties[f] ? window.console.log('Property "' + f + '" is read-only.') : window.console.log('Property "' + f + `" doesn't exist. Please check for typo.`));
          return;
        }
        r2 && (this.stockChart || this.chart || this).render();
      };
      Y.prototype.addTo = function(f, l2, r2, t2) {
        t2 = "undefined" === typeof t2 ? true : t2;
        var A2 = ra[this._defaultsKey];
        A2.hasOwnProperty(f) || A2.publicProperties && A2.publicProperties.hasOwnProperty(f) && "readWrite" === A2.publicProperties[f] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[f] && (this.options[f] = []), f = this.options[f], r2 = "undefined" === typeof r2 || null === r2 ? f.length : r2, f.splice(r2, 0, l2), t2 && (this.stockChart || this.chart || this).render()) : window.console && (A2.publicProperties && A2.publicProperties.hasOwnProperty(f) && "readOnly" === A2.publicProperties[f] ? window.console.log('Property "' + f + '" is read-only.') : window.console.log('Property "' + f + `" doesn't exist. Please check for typo.`));
      };
      Y.prototype.createUserOptions = function(f) {
        if ("undefined" !== typeof f || this.options._isPlaceholder) if (this.parent && this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray) {
          this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
          var l2 = this.parent.options[this.optionsName], r2 = l2.length;
          this.options._isPlaceholder || (Fa(l2), r2 = l2.indexOf(this.options));
          this.options = "undefined" === typeof f ? {} : f;
          l2[r2] = this.options;
        } else this.options = "undefined" === typeof f ? {} : f, this.parent && (f = this.parent.options, this.optionsName ? l2 = this.optionsName : (l2 = this._defaultsKey) && 0 !== l2.length ? (r2 = l2.charAt(0).toLowerCase(), 1 < l2.length && (r2 = r2.concat(l2.slice(1))), l2 = r2) : l2 = void 0, f[l2] = this.options);
      };
      Y.prototype.remove = function(f) {
        f = "undefined" === typeof f ? true : f;
        if (this.isOptionsInArray) {
          var l2 = this.parent.options[this.optionsName];
          Fa(l2);
          var r2 = l2.indexOf(this.options);
          0 <= r2 && l2.splice(r2, 1);
        } else delete this.parent.options[this.optionsName];
        f && (this.stockChart || this.chart || this).render();
      };
      Y.prototype.updateOption = function(f) {
        !ra[this._defaultsKey] && Ja && window.console && console.log("defaults not set");
        var r2 = ra[this._defaultsKey], t2 = {}, A2 = this[f], U = this._themeOptionsKey, I2 = this._index;
        this.theme && l(this.parent) && l(U) && l(I2) ? t2 = l(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && this.parent.themeOptions && (this.options.theme ? "Chart" === this._defaultsKey && Qa[this.options.theme] ? t2 = Qa[this.options.theme] : stockThemes[this.options.theme] && (t2 = stockThemes[this.options.theme][U]) : this.parent.themeOptions[U] && (null === I2 ? t2 = this.parent.themeOptions[U] : 0 < this.parent.themeOptions[U].length && (t2 = Math.min(this.parent.themeOptions[U].length - 1, I2), t2 = this.parent.themeOptions[U][t2])));
        this.themeOptions = t2;
        f in r2 && (A2 = f in this.options ? this.options[f] : t2 && f in t2 ? t2[f] : r2[f]);
        if (A2 === this[f]) return false;
        this[f] = A2;
        return true;
      };
      Y.prototype.trackChanges = function(f) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        this.sessionVariables[f] = this.options[f];
      };
      Y.prototype.isBeingTracked = function(f) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[f] ? true : false;
      };
      Y.prototype.hasOptionChanged = function(f) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        return this.sessionVariables[f] !== this.options[f];
      };
      Y.prototype.addEventListener = function(f, l2, r2) {
        f && l2 && (this._eventListeners[f] = this._eventListeners[f] || [], this._eventListeners[f].push({
          context: r2 || this,
          eventHandler: l2
        }));
      };
      Y.prototype.removeEventListener = function(f, l2) {
        if (f && l2 && this._eventListeners[f]) {
          for (var r2 = this._eventListeners[f], t2 = 0; t2 < r2.length; t2++) if (r2[t2].eventHandler === l2) {
            r2[t2].splice(t2, 1);
            break;
          }
        }
      };
      Y.prototype.removeAllEventListeners = function() {
        this._eventListeners = [];
      };
      Y.prototype.dispatchEvent = function(f, l2, r2) {
        if (f && this._eventListeners[f]) {
          l2 = l2 || {};
          for (var t2 = this._eventListeners[f], A2 = 0; A2 < t2.length; A2++) t2[A2].eventHandler.call(t2[A2].context, l2);
        }
        "function" === typeof this[f] && this[f].call(r2 || this.chart, l2);
      };
      Ga.prototype.registerSpace = function(l2, r2) {
        "top" === l2 ? this._topOccupied += r2.height : "bottom" === l2 ? this._bottomOccupied += r2.height : "left" === l2 ? this._leftOccupied += r2.width : "right" === l2 && (this._rightOccupied += r2.width);
      };
      Ga.prototype.unRegisterSpace = function(l2, r2) {
        "top" === l2 ? this._topOccupied -= r2.height : "bottom" === l2 ? this._bottomOccupied -= r2.height : "left" === l2 ? this._leftOccupied -= r2.width : "right" === l2 && (this._rightOccupied -= r2.width);
      };
      Ga.prototype.getFreeSpace = function() {
        return {
          x1: this._x1 + this._leftOccupied,
          y1: this._y1 + this._topOccupied,
          x2: this._x2 - this._rightOccupied,
          y2: this._y2 - this._bottomOccupied,
          width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
          height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
        };
      };
      Ga.prototype.reset = function() {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
      };
      qa(la, Y);
      la.prototype._initialize = function() {
        l(this.padding) || "object" !== typeof this.padding ? this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = l(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = l(this.padding.right) ? 0 : Number(this.padding.right) | 0, this.bottomPadding = l(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = l(this.padding.left) ? 0 : Number(this.padding.left) | 0);
      };
      la.prototype.render = function(l2) {
        if (0 !== this.fontSize) {
          l2 && this.ctx.save();
          var r2 = this.ctx.font;
          this.ctx.textBaseline = this.textBaseline;
          var t2 = 0;
          this._isDirty && this.measureText(this.ctx);
          this.ctx.translate(this.x, this.y + t2);
          "middle" === this.textBaseline && (t2 = -this._lineHeight / 2);
          this.ctx.font = this._getFontString();
          this.ctx.rotate(Math.PI / 180 * this.angle);
          var A2 = 0, U = this.topPadding, I2 = null;
          this.ctx.roundRect || Aa(this.ctx);
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, t2, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
          this.ctx.fillStyle = this.fontColor;
          for (t2 = 0; t2 < this._wrappedText.lines.length; t2++) I2 = this._wrappedText.lines[t2], "right" === this.textAlign ? A2 = this.width - I2.width - this.rightPadding : "left" === this.textAlign ? A2 = this.leftPadding : "center" === this.textAlign && (A2 = (this.width - (this.leftPadding + this.rightPadding)) / 2 - I2.width / 2 + this.leftPadding), this.ctx.fillText(I2.text, A2, U), U += I2.height;
          this.ctx.font = r2;
          l2 && this.ctx.restore();
        }
      };
      la.prototype.setText = function(l2) {
        this.text = l2;
        this._isDirty = true;
        this._wrappedText = null;
      };
      la.prototype.measureText = function() {
        this._lineHeight = $a(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = false;
        return {
          width: this.width,
          height: this.height
        };
      };
      la.prototype._getLineWithWidth = function(l2, r2, t2) {
        l2 = String(l2);
        if (!l2) return {
          text: "",
          width: 0
        };
        var A2 = t2 = 0, I2 = l2.length - 1, F2 = Infinity;
        for (this.ctx.font = this._getFontString(); A2 <= I2; ) {
          var F2 = Math.floor((A2 + I2) / 2), B = l2.substr(0, F2 + 1);
          t2 = this.ctx.measureText(B).width;
          if (t2 < r2) A2 = F2 + 1;
          else if (t2 > r2) I2 = F2 - 1;
          else break;
        }
        t2 > r2 && 1 < B.length && (B = B.substr(0, B.length - 1), t2 = this.ctx.measureText(B).width);
        r2 = true;
        if (B.length === l2.length || " " === l2[B.length]) r2 = false;
        r2 && (l2 = B.split(" "), 1 < l2.length && l2.pop(), B = l2.join(" "), t2 = this.ctx.measureText(B).width);
        return {
          text: B,
          width: t2
        };
      };
      la.prototype._wrapText = function() {
        var l2 = new String(Ia(String(this.text))), r2 = [], t2 = this.ctx.font, A2 = 0, I2 = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize) I2 = A2 = 0;
        else for (; 0 < l2.length; ) {
          var F2 = this.maxHeight - (this.topPadding + this.bottomPadding), B = this._getLineWithWidth(l2, this.maxWidth - (this.leftPadding + this.rightPadding), false);
          B.height = this._lineHeight;
          r2.push(B);
          var K2 = I2, I2 = Math.max(I2, B.width), A2 = A2 + B.height, l2 = Ia(l2.slice(B.text.length, l2.length));
          F2 && A2 > F2 && (B = r2.pop(), A2 -= B.height, I2 = K2);
        }
        this._wrappedText = {
          lines: r2,
          width: I2,
          height: A2
        };
        this.width = I2 + (this.leftPadding + this.rightPadding);
        this.height = A2 + (this.topPadding + this.bottomPadding);
        this.ctx.font = t2;
      };
      la.prototype._getFontString = function() {
        var l2;
        l2 = this.fontStyle ? this.fontStyle + " " : "";
        l2 += this.fontWeight ? this.fontWeight + " " : "";
        l2 += this.fontSize ? this.fontSize + "px " : "";
        var x = this.fontFamily ? this.fontFamily + "" : "";
        !r && x && (x = x.split(",")[0], "'" !== x[0] && '"' !== x[0] && (x = "'" + x + "'"));
        return l2 += x;
      };
      qa(Wa, Y);
      qa(Ba, Y);
      Ba.prototype.setLayout = function() {
        if (this.text) {
          var f = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, r2 = f.layoutManager.getFreeSpace(), t2 = r2.x1, A2 = r2.y1, I2 = 0, F2 = 0, B = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 40 : 0, K2, S2;
          this.textAlign = l(this.options.textAlign) ? this.horizontalAlign : this.textAlign;
          "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = r2.width - 4 - B * ("center" === this.horizontalAlign ? 2 : 1)), F2 = 0.5 * r2.height - this.margin - 2, I2 = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = r2.height - 4), F2 = 0.5 * r2.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = r2.width - 4), F2 = 0.5 * r2.height - 4));
          var O;
          l(this.padding) || "number" !== typeof this.padding ? l(this.padding) || "object" !== typeof this.padding || (O = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, O += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : O = 2 * this.padding;
          this.wrap || (F2 = Math.min(F2, 1.5 * this.fontSize + O));
          F2 = new la(this.ctx, {
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            fontColor: this.fontColor,
            fontStyle: this.fontStyle,
            fontWeight: this.fontWeight,
            textAlign: this.textAlign,
            verticalAlign: this.verticalAlign,
            borderColor: this.borderColor,
            borderThickness: this.borderThickness,
            backgroundColor: this.backgroundColor,
            maxWidth: this.maxWidth,
            maxHeight: F2,
            cornerRadius: this.cornerRadius,
            text: this.text,
            padding: this.padding,
            textBaseline: "middle"
          });
          O = F2.measureText();
          "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (A2 = r2.y1 + 2 + this.fontSize / 2 + 4, S2 = "top") : "bottom" === this.verticalAlign && (A2 = r2.y2 - 2 - O.height + this.fontSize / 2 + 4, S2 = "bottom"), "left" === this.horizontalAlign ? t2 = r2.x1 + 2 : "center" === this.horizontalAlign ? t2 = r2.x1 + r2.width / 2 - O.width / 2 : "right" === this.horizontalAlign && (t2 = r2.x2 - 2 - O.width - B), K2 = this.horizontalAlign, this.width = O.width, this.height = O.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (t2 = r2.x1 + 2 + (this.fontSize / 2 + 4), A2 = r2.y2 - 2 - (this.maxWidth / 2 - O.width / 2), I2 = -90, S2 = "left", this.width = O.height, this.height = O.width) : "right" === this.horizontalAlign ? (t2 = r2.x2 - 2 - (this.fontSize / 2 + 4), A2 = r2.y1 + 2 + (this.maxWidth / 2 - O.width / 2), I2 = 90, S2 = "right", this.width = O.height, this.height = O.width) : "center" === this.horizontalAlign && (A2 = f.y1 + (f.height / 2 - O.height / 2) + this.fontSize / 2 + 4, t2 = f.x1 + (f.width / 2 - O.width / 2), S2 = "center", this.width = O.width, this.height = O.height), K2 = "center");
          F2.x = t2;
          F2.y = A2;
          F2.angle = I2;
          F2.horizontalAlign = K2;
          this._textBlock = F2;
          f.layoutManager.registerSpace(S2, {
            width: this.width + ("left" === S2 || "right" === S2 ? this.margin + 2 : 0),
            height: this.height + ("top" === S2 || "bottom" === S2 ? this.margin + 2 : 0)
          });
          this.bounds = {
            x1: t2,
            y1: A2,
            x2: t2 + this.width,
            y2: A2 + this.height
          };
          this.ctx.textBaseline = "top";
        }
      };
      Ba.prototype.render = function() {
        this._textBlock && this._textBlock.render(true);
      };
      qa(Ka, Y);
      Ka.prototype.setLayout = Ba.prototype.setLayout;
      Ka.prototype.render = Ba.prototype.render;
      Xa.prototype.get = function(l2, r2) {
        var t2 = null;
        0 < this.pool.length ? (t2 = this.pool.pop(), Oa(t2, l2, r2)) : t2 = ua(l2, r2);
        return t2;
      };
      Xa.prototype.release = function(l2) {
        this.pool.push(l2);
      };
      qa(La, Y);
      var Sa = {
        addTheme: function(l2, r2) {
          Qa[l2] = r2;
        },
        addColorSet: function(l2, r2) {
          Ca[l2] = r2;
        },
        addCultureInfo: function(l2, r2) {
          Ma[l2] = r2;
        },
        formatNumber: function(l2, r2, t2) {
          t2 = t2 || "en";
          if (Ma[t2]) return ia(l2, r2 || "#,##0.##", new La(t2));
          throw "Unknown Culture Name";
        },
        formatDate: function(l2, r2, t2) {
          t2 = t2 || "en";
          if (Ma[t2]) return Da(l2, r2 || "DD MMM YYYY", new La(t2));
          throw "Unknown Culture Name";
        }
      };
      "undefined" !== typeof module && "undefined" !== typeof module.exports ? module.exports = Sa : "function" === typeof define && define.amd ? define([], function() {
        return Sa;
      }) : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), window.CanvasJS = window.CanvasJS ? window.CanvasJS : Sa);
      t = Sa.Chart = function() {
        function f(a, e) {
          return a.x - e.x;
        }
        function x(a, e, c) {
          e = e || {};
          l(c) ? (this.predefinedThemes = Qa, this.optionsName = this.parent = this.index = null) : (this.parent = c.parent, this.index = c.index, this.predefinedThemes = c.predefinedThemes, this.optionsName = c.optionsName, this.stockChart = c.stockChart, this.panel = a, this.isOptionsInArray = c.isOptionsInArray);
          this.theme = l(e.theme) || l(this.predefinedThemes[e.theme]) ? "light1" : e.theme;
          x.base.constructor.call(this, "Chart", this.optionsName, e, this.index, this.parent);
          var b = this;
          this._containerId = a;
          this._objectsInitialized = false;
          this.overlaidCanvasCtx = this.ctx = null;
          this._indexLabels = [];
          this._panTimerId = 0;
          this._lastTouchEventType = "";
          this._lastTouchData = null;
          this.isAnimating = false;
          this.renderCount = 0;
          this.disableToolTip = this.animatedRender = false;
          this.canvasPool = new Xa();
          this.allDOMEventHandlers = [];
          this.panEnabled = false;
          this._defaultCursor = "default";
          this.plotArea = {
            canvas: null,
            ctx: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            width: 0,
            height: 0
          };
          this._dataInRenderedOrder = [];
          (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", e = a = 0, e = db(this.container), a = this.options.width ? this.width : 0 < this.container.clientWidth - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight) ? this.container.clientWidth - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight) : this.width, e = c && c.height ? c.height : this.options.height ? this.height : 0 < this.container.clientHeight - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom) ? this.container.clientHeight - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom) : this.height, this.width = a, this.height = e, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this.selectedColorSet = "undefined" !== typeof Ca[this.colorSet] ? Ca[this.colorSet] : Ca.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", r || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = ua(a, e), this._preRenderCanvas = ua(a, e), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Aa(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", Aa(this._preRenderCtx), r ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ua(a, e), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = ua(a, e), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", Aa(this.overlaidCanvasCtx)), this._eventManager = new ha2(this), this.windowResizeHandler = F(window, "resize", function() {
            b._updateSize() && (b.render(), b.isNavigator && b.stockChart && b.stockChart.navigator && b.stockChart.navigator.enabled && b.stockChart.navigator._updateSlider(b.stockChart._axisXMin, b.stockChart._axisXMax));
          }, this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), K(this._toolBar, {
            position: "absolute",
            right: "1px",
            top: "1px"
          }), this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
            x1: 0,
            y1: 0,
            x2: this.width,
            y2: this.height
          }, F(this.overlaidCanvas, "click", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), F(this.overlaidCanvas, "mousemove", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), F(this.overlaidCanvas, "mouseup", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), F(this.overlaidCanvas, "mousedown", function(a2) {
            b._mouseEventHandler(a2);
            wa(b._dropdownMenu);
          }, this.allDOMEventHandlers), F(this.overlaidCanvas, "mouseout", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), F(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), F(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), F(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), F(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), this.toolTip = new aa2(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = {
            axisX: [],
            axisX2: [],
            axisY: [],
            axisY2: []
          })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found');
        }
        function t2(a, e) {
          for (var c = [], b, d = 0; d < a.length; d++) if (0 == d) c.push(a[0]);
          else {
            var h, q, u;
            u = d - 1;
            h = 0 === u ? 0 : u - 1;
            q = u === a.length - 1 ? u : u + 1;
            b = Math.abs((a[q].x - a[h].x) / (0 === a[q].x - a[u].x ? 0.01 : a[q].x - a[u].x)) * (e - 1) / 2 + 1;
            var E = (a[q].x - a[h].x) / b;
            b = (a[q].y - a[h].y) / b;
            c[c.length] = a[u].x > a[h].x && 0 < E || a[u].x < a[h].x && 0 > E ? {
              x: a[u].x + E / 3,
              y: a[u].y + b / 3
            } : {
              x: a[u].x,
              y: a[u].y + (1 === c.length ? 0 : b / 9)
            };
            u = d;
            h = 0 === u ? 0 : u - 1;
            q = u === a.length - 1 ? u : u + 1;
            b = Math.abs((a[q].x - a[h].x) / (0 === a[u].x - a[h].x ? 0.01 : a[u].x - a[h].x)) * (e - 1) / 2 + 1;
            E = (a[q].x - a[h].x) / b;
            b = (a[q].y - a[h].y) / b;
            c[c.length] = a[u].x > a[h].x && 0 < E || a[u].x < a[h].x && 0 > E ? {
              x: a[u].x - E / 3,
              y: a[u].y - b / 3
            } : {
              x: a[u].x,
              y: a[u].y - b / 9
            };
            c[c.length] = a[d];
          }
          return c;
        }
        function A2(a, e, c, b, d, h, q, u, E, k) {
          var m = 0;
          k ? (q.color = h, u.color = h) : k = 1;
          m = E ? Math.abs(d - c) : Math.abs(b - e);
          m = 0 < q.trimLength ? Math.abs(m * q.trimLength / 100) : Math.abs(m - q.length);
          E ? (c += m / 2, d -= m / 2) : (e += m / 2, b -= m / 2);
          var m = 1 === Math.round(q.thickness) % 2 ? 0.5 : 0, n = 1 === Math.round(u.thickness) % 2 ? 0.5 : 0;
          a.save();
          a.globalAlpha = k;
          a.strokeStyle = u.color || h;
          a.lineWidth = u.thickness || 2;
          a.setLineDash && a.setLineDash(I(u.dashType, u.thickness));
          a.beginPath();
          E && 0 < u.thickness ? (a.moveTo(b - q.thickness / 2, Math.round((c + d) / 2) - n), a.lineTo(e + q.thickness / 2, Math.round((c + d) / 2) - n)) : 0 < u.thickness && (a.moveTo(Math.round((e + b) / 2) - n, c + q.thickness / 2), a.lineTo(Math.round((e + b) / 2) - n, d - q.thickness / 2));
          a.stroke();
          a.strokeStyle = q.color || h;
          a.lineWidth = q.thickness || 2;
          a.setLineDash && a.setLineDash(I(q.dashType, q.thickness));
          a.beginPath();
          E && 0 < q.thickness ? (a.moveTo(b - m, c), a.lineTo(b - m, d), a.moveTo(e + m, c), a.lineTo(e + m, d)) : 0 < q.thickness && (a.moveTo(e, c + m), a.lineTo(b, c + m), a.moveTo(e, d - m), a.lineTo(b, d - m));
          a.stroke();
          a.restore();
        }
        function U(a, e) {
          U.base.constructor.call(this, "Legend", "legend", e, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.ghostCtx = this.chart._eventManager.ghostCtx;
          this.items = [];
          this.optionsName = "legend";
          this.height = this.width = 0;
          this.orientation = null;
          this.dataSeries = [];
          this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
          };
          "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
          this.lineHeight = $a(this.fontFamily, this.fontSize, this.fontWeight);
          this.horizontalSpacing = this.fontSize;
        }
        function Q2(a, e, c, b) {
          Q2.base.constructor.call(this, "DataSeries", "data", e, c, a);
          this.chart = a;
          this.canvas = a.canvas;
          this._ctx = a.canvas.ctx;
          this.index = c;
          this.noDataPointsInPlotArea = 0;
          this.id = b;
          this.chart._eventManager.objectMap[b] = {
            id: b,
            objectType: "dataSeries",
            dataSeriesIndex: c
          };
          a = e.dataPoints ? e.dataPoints.length : 0;
          this.dataPointEOs = [];
          for (e = 0; e < a; e++) this.dataPointEOs[e] = {};
          this.dataPointIds = [];
          this.plotUnit = [];
          this.axisY = this.axisX = null;
          this.optionsName = "data";
          this.isOptionsInArray = true;
          null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
          this.axisPlacement = this.getDefaultAxisPlacement();
          "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize));
        }
        function B(a, e, c, b, d, h) {
          B.base.constructor.call(this, "Axis", e, c, b, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = a.ctx;
          this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
          this.labels = [];
          this.dataSeries = [];
          this._stripLineLabels = this._ticks = this._labels = null;
          this.dataInfo = {
            min: Infinity,
            max: -Infinity,
            viewPortMin: Infinity,
            viewPortMax: -Infinity,
            minDiff: Infinity
          };
          this.isOptionsInArray = true;
          "axisX" === d ? ("left" === h || "bottom" === h ? (this.optionsName = "axisX", l(this.chart.sessionVariables.axisX[b]) && (this.chart.sessionVariables.axisX[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[b]) : (this.optionsName = "axisX2", l(this.chart.sessionVariables.axisX2[b]) && (this.chart.sessionVariables.axisX2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[b]), this.options.interval || (this.intervalType = null)) : "left" === h || "bottom" === h ? (this.optionsName = "axisY", l(this.chart.sessionVariables.axisY[b]) && (this.chart.sessionVariables.axisY[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[b]) : (this.optionsName = "axisY2", l(this.chart.sessionVariables.axisY2[b]) && (this.chart.sessionVariables.axisY2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[b]);
          "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
          "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
          this.type = d;
          "axisX" !== d || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
          this._position = h;
          this.lineCoordinates = {
            x1: null,
            y1: null,
            x2: null,
            y2: null,
            width: null
          };
          this.labelAngle = (this.labelAngle % 360 + 360) % 360;
          90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
          this.options.scaleBreaks && (this.scaleBreaks = new W2(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId, this));
          this.stripLines = [];
          if (this.options.stripLines && 0 < this.options.stripLines.length) for (a = 0; a < this.options.stripLines.length; a++) this.stripLines.push(new O(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
          this.options.crosshair && (this.crosshair = new $2(this.chart, this.options.crosshair, this), this.crosshair._updatedValue = l(this.sessionVariables.crosshairValue) ? null : this.sessionVariables.crosshairValue);
          this._titleTextBlock = null;
          this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
          this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
          this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
          this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
          null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
          null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
          this.trackChanges("viewportMinimum");
          this.trackChanges("viewportMaximum");
        }
        function W2(a, e, c, b) {
          W2.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", e, null, b);
          this.id = c;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = b;
          this.optionsName = "scaleBreaks";
          this.isOptionsInArray = false;
          this._appliedBreaks = [];
          this.customBreaks = [];
          this.autoBreaks = [];
          "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
          this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
          if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
            for (a = 0; a < this.options.customBreaks.length; a++) this.customBreaks.push(new ga2(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId, this)), "number" === typeof this.customBreaks[a].startValue && "number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue && this._appliedBreaks.push(this.customBreaks[a]);
            this._appliedBreaks.sort(function(a2, b2) {
              return a2.startValue - b2.startValue;
            });
            for (a = 0; a < this._appliedBreaks.length - 1; a++) this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue), window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(a, 2), a--);
          }
        }
        function ga2(a, e, c, b, d, h) {
          ga2.base.constructor.call(this, "Break", e, c, b, h);
          this.id = d;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.scaleBreaks = h;
          this.optionsName = e;
          this.isOptionsInArray = true;
          this.type = c.type ? this.type : h.type;
          this.fillOpacity = l(c.fillOpacity) ? h.fillOpacity : this.fillOpacity;
          this.lineThickness = l(c.lineThickness) ? h.lineThickness : this.lineThickness;
          this.color = c.color ? this.color : h.color;
          this.lineColor = c.lineColor ? this.lineColor : h.lineColor;
          this.lineDashType = c.lineDashType ? this.lineDashType : h.lineDashType;
          !l(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
          !l(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime());
          "number" === typeof this.startValue && "number" === typeof this.endValue && this.endValue < this.startValue && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
          this.spacing = "undefined" === typeof c.spacing ? h.spacing : c.spacing;
          "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = h.spacing);
          this.size = h.parent.logarithmic ? 1 : 0;
        }
        function O(a, e, c, b, d) {
          O.base.constructor.call(this, "StripLine", "stripLines", e, c, d);
          this.id = b;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.label = this.label;
          this.axis = d;
          this.optionsName = "stripLines";
          this.isOptionsInArray = true;
          this._thicknessType = "pixel";
          null !== this.startValue && null !== this.endValue && (this.value = d.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null);
        }
        function $2(a, e, c) {
          $2.base.constructor.call(this, "Crosshair", "crosshair", e, null, c);
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = c;
          this.optionsName = "crosshair";
          this._thicknessType = "pixel";
        }
        function aa2(a, e) {
          aa2.base.constructor.call(this, "ToolTip", "toolTip", e, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.currentDataPointIndex = this.currentSeriesIndex = -1;
          this._prevY = this._prevX = NaN;
          this.containerTransitionDuration = 0.1;
          this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
          this.optionsName = "toolTip";
          this._initialize();
        }
        function ha2(a) {
          this.chart = a;
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.ghostCanvas = ua(this.chart.width, this.chart.height, true);
          this.ghostCtx = this.ghostCanvas.getContext("2d");
          this.mouseoveredObjectMaps = [];
        }
        function X2(a) {
          this.chart = a;
          this.ctx = this.chart.plotArea.ctx;
          this.animations = [];
          this.animationRequestId = null;
        }
        qa(x, Y);
        x.prototype.destroy = function() {
          var a = this.allDOMEventHandlers;
          this._animator && this._animator.cancelAllAnimations();
          this._panTimerId && clearTimeout(this._panTimerId);
          for (var e = 0; e < a.length; e++) {
            var c = a[e][0], b = a[e][1], d = a[e][2], h = a[e][3], h = h || false;
            c.removeEventListener ? c.removeEventListener(b, d, h) : c.detachEvent && c.detachEvent("on" + b, d);
          }
          this.allDOMEventHandlers = [];
          for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes(); ) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
          for (; this.container && this.container.hasChildNodes(); ) this.container.removeChild(this.container.lastChild);
          for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes(); ) this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
          this.container = this._canvasJSContainer = null;
          this.toolTip.container = null;
          this.canvas && za(this.canvas);
          this.overlaidCanvas && za(this.overlaidCanvas);
          this._preRenderCanvas && za(this._preRenderCanvas);
          this._breaksCanvas && za(this._breaksCanvas);
          this._eventManager && this._eventManager.ghostCanvas && za(this._eventManager.ghostCanvas);
          this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = null;
        };
        x.prototype._updateOptions = function() {
          var a = this;
          this.updateOption("width");
          this.updateOption("height");
          this.updateOption("dataPointWidth");
          this.updateOption("dataPointMinWidth");
          this.updateOption("dataPointMaxWidth");
          this.updateOption("interactivityEnabled");
          this.updateOption("theme");
          this.stockChart && this.stockChart.options && "undefined" !== typeof this.stockChart.options.theme && l(this.options.theme) ? this.theme = this.stockChart.theme : l(this.stockChart) && l(this.theme) && (this.theme = "light1");
          this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof Ca[this.colorSet] ? Ca[this.colorSet] : Ca.colorSet1);
          this.updateOption("backgroundColor");
          this.stockChart && this.stockChart.options && "undefined" !== typeof this.stockChart.options.backgroundColor && l(this.options.backgroundColor) && (this.backgroundColor = this.stockChart.backgroundColor);
          this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
          this.updateOption("culture");
          this.stockChart && l(this.options.culture) && (this.culture = this.stockChart.culture);
          this._cultureInfo = new La(this.culture);
          this.updateOption("animationEnabled");
          this.animationEnabled = this.animationEnabled && r;
          this.updateOption("animationDuration");
          this.updateOption("rangeChanging");
          this.updateOption("rangeChanged");
          this.updateOption("exportEnabled");
          this.updateOption("exportFileName");
          this.updateOption("zoomType");
          this.toolbar = new Wa(this, this.options.toolbar);
          if (this.stockChart && this.stockChart.options && this.stockChart.options.toolbar && !this.options.toolbar) for (var e in this.stockChart.options.toolbar) this.toolbar[e] = this.stockChart.options.toolbar[e];
          if (this.options.zoomEnabled || this.panEnabled) {
            if (this._zoomButton) K(this._zoomButton, {
              borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor,
              backgroundColor: a.toolbar.itemBackgroundColor,
              color: a.toolbar.fontColor
            }), 0 >= navigator.userAgent.search("MSIE") && this._zoomButton.childNodes[0] && K(this._zoomButton.childNodes[0], {
              WebkitFilter: "invert(0%)",
              filter: "invert(0%)"
            });
            else {
              var c = false;
              wa(this._zoomButton = document.createElement("button"));
              ta(this, this._zoomButton, "pan");
              this._toolBar.appendChild(this._zoomButton);
              this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor;
              F(this._zoomButton, "touchstart", function(a2) {
                c = true;
              }, this.allDOMEventHandlers);
              F(this._zoomButton, "click", function() {
                a.zoomEnabled ? (a.zoomEnabled = false, a.panEnabled = true, ta(a, a._zoomButton, "zoom")) : (a.zoomEnabled = true, a.panEnabled = false, ta(a, a._zoomButton, "pan"));
                a.render();
              }, this.allDOMEventHandlers);
              F(this._zoomButton, "mousemove", function() {
                c ? c = false : (K(a._zoomButton, {
                  backgroundColor: a.toolbar.itemBackgroundColorOnHover,
                  color: a.toolbar.fontColorOnHover,
                  transition: "0.4s",
                  WebkitTransition: "0.4s"
                }), 0 >= navigator.userAgent.search("MSIE") && K(a._zoomButton.childNodes[0], {
                  WebkitFilter: "invert(100%)",
                  filter: "invert(100%)"
                }));
              }, this.allDOMEventHandlers);
              F(this._zoomButton, "mouseout", function() {
                c || (K(a._zoomButton, {
                  backgroundColor: a.toolbar.itemBackgroundColor,
                  color: a.toolbar.fontColor,
                  transition: "0.4s",
                  WebkitTransition: "0.4s"
                }), 0 >= navigator.userAgent.search("MSIE") && K(a._zoomButton.childNodes[0], {
                  WebkitFilter: "invert(0%)",
                  filter: "invert(0%)"
                }));
              }, this.allDOMEventHandlers);
            }
            this._resetButton ? (K(this._resetButton, {
              borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor,
              backgroundColor: a.toolbar.itemBackgroundColor,
              color: a.toolbar.fontColor
            }), 0 >= navigator.userAgent.search("MSIE") && this._resetButton.childNodes[0] && K(this._resetButton.childNodes[0], {
              WebkitFilter: "invert(0%)",
              filter: "invert(0%)"
            }), this._resetButton.title = this._cultureInfo.resetText) : (c = false, wa(this._resetButton = document.createElement("button")), ta(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor, this._toolBar.appendChild(this._resetButton), F(this._resetButton, "touchstart", function(a2) {
              c = true;
            }, this.allDOMEventHandlers), F(this._resetButton, "click", function() {
              a.toolTip.hide();
              a.toolTip && a.toolTip.enabled && a.toolTip.dispatchEvent("hidden", {
                chart: a,
                toolTip: a.toolTip
              }, a.toolTip);
              a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = true, a.panEnabled = false, ta(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = false, a.panEnabled = false);
              if (a.sessionVariables.axisX) for (var b = 0; b < a.sessionVariables.axisX.length; b++) a.sessionVariables.axisX[b].newViewportMinimum = null, a.sessionVariables.axisX[b].newViewportMaximum = null;
              if (a.sessionVariables.axisX2) for (b = 0; b < a.sessionVariables.axisX2.length; b++) a.sessionVariables.axisX2[b].newViewportMinimum = null, a.sessionVariables.axisX2[b].newViewportMaximum = null;
              if (a.sessionVariables.axisY) for (b = 0; b < a.sessionVariables.axisY.length; b++) a.sessionVariables.axisY[b].newViewportMinimum = null, a.sessionVariables.axisY[b].newViewportMaximum = null;
              if (a.sessionVariables.axisY2) for (b = 0; b < a.sessionVariables.axisY2.length; b++) a.sessionVariables.axisY2[b].newViewportMinimum = null, a.sessionVariables.axisY2[b].newViewportMaximum = null;
              a.resetOverlayedCanvas();
              0 >= navigator.userAgent.search("MSIE") && K(a._resetButton.childNodes[0], {
                WebkitFilter: "invert(0%)",
                filter: "invert(0%)"
              });
              wa(a._zoomButton, a._resetButton);
              a.stockChart && (a.stockChart._rangeEventParameter = {
                stockChart: a.stockChart,
                source: "chart",
                index: a.stockChart.charts.indexOf(a),
                minimum: null,
                maximum: null
              });
              a._dispatchRangeEvent("rangeChanging", "reset");
              a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging", a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
              a.render();
              a.syncCharts && a.stockChart && (a.stockChart.rangeUpdatedBy = !a.stockChart.navigator.slider || l(a.stockChart.navigator.slider.options.minimum) && l(a.stockChart.navigator.slider.options.maximum) ? !a.stockChart.rangeSelector.enabled || !a.stockChart.rangeSelector.inputFields.enabled || l(a.stockChart.rangeSelector.inputFields.options.startValue) && l(a.stockChart.rangeSelector.inputFields.options.endValue) ? null : "inputFields" : "navigator", l(a.stockChart._selectedRangeButtonIndex) || (a.stockChart.rangeUpdatedBy = "rangeButton"), a.syncCharts(null, null), "rangeButton" === a.stockChart.rangeUpdatedBy && a.stockChart.rangeSelector.selectedRangeButtonIndex < a.stockChart.rangeSelector.buttons.length && (b = a.stockChart.rangeSelector.buttons[a.stockChart._selectedRangeButtonIndex], b.enabled && (b.state = "on", b.textBlock.fontWeight = "bold", b.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover, b.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnSelect, a.stockChart.rangeSelector.sessionVariables._clickedRangeButtonIndex = null, b.render())));
              a._dispatchRangeEvent("rangeChanged", "reset");
              a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent("rangeChanged", a.stockChart._rangeEventParameter, a.stockChart));
            }, this.allDOMEventHandlers), F(this._resetButton, "mousemove", function() {
              c || (K(a._resetButton, {
                backgroundColor: a.toolbar.itemBackgroundColorOnHover,
                color: a.toolbar.fontColorOnHover,
                transition: "0.4s",
                WebkitTransition: "0.4s"
              }), 0 >= navigator.userAgent.search("MSIE") && K(a._resetButton.childNodes[0], {
                WebkitFilter: "invert(100%)",
                filter: "invert(100%)"
              }));
            }, this.allDOMEventHandlers), F(this._resetButton, "mouseout", function() {
              c || (K(a._resetButton, {
                backgroundColor: a.toolbar.itemBackgroundColor,
                color: a.toolbar.fontColor,
                transition: "0.4s",
                WebkitTransition: "0.4s"
              }), 0 >= navigator.userAgent.search("MSIE") && K(a._resetButton.childNodes[0], {
                WebkitFilter: "invert(0%)",
                filter: "invert(0%)"
              }));
            }, this.allDOMEventHandlers), this.overlaidCanvas.style.cursor = a._defaultCursor);
            this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = true, this.zoomEnabled = false) : (this.zoomEnabled = true, this.panEnabled = false), Na(a._zoomButton, a._resetButton)) : (this.zoomEnabled = true, this.panEnabled = false));
          } else this.panEnabled = this.zoomEnabled = false;
          jb(this);
          "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? ta(a, a._zoomButton, "zoom") : ta(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && ta(a, a._resetButton, "reset"));
          this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
          for (e in this.toolTip.options) this.toolTip.options.hasOwnProperty(e) && this.toolTip.updateOption(e);
        };
        x.prototype._updateSize = function() {
          var a;
          a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
          var e = 0, c = 0, b = db(this.container);
          this.options.width ? e = this.width : this.width = e = 0 < this.container.clientWidth - parseFloat(b.paddingLeft) - parseFloat(b.paddingRight) ? this.container.clientWidth - parseFloat(b.paddingLeft) - parseFloat(b.paddingRight) : this.width;
          l(this.stockChart) || l(this.index) ? this.options.height ? c = this.height : this.height = c = 0 < this.container.clientHeight - parseFloat(b.paddingTop) - parseFloat(b.paddingBottom) ? this.container.clientHeight - parseFloat(b.paddingTop) - parseFloat(b.paddingBottom) : this.height : c = this.height = this.stockChart._chartsHeight[this.index];
          if (this.canvas.width !== e * na || this.canvas.height !== c * na) {
            for (b = 0; b < a.length; b++) Oa(a[b], e, c);
            this.bounds = {
              x1: 0,
              y1: 0,
              x2: this.width,
              y2: this.height,
              width: this.width,
              height: this.height
            };
            a = true;
          } else a = false;
          return a;
        };
        x.prototype._initialize = function() {
          this.isNavigator = l(this.parent) || l(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? false : true;
          this._animator ? this._animator.cancelAllAnimations() : this._animator = new X2(this);
          this.removeAllEventListeners();
          this.disableToolTip = false;
          this._axes = [];
          this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
          this._updateOptions();
          this.animatedRender = r && this.animationEnabled && 0 === this.renderCount;
          this._updateSize();
          this.clearCanvas();
          this.ctx.beginPath();
          this.axisX = [];
          this.axisX2 = [];
          this.axisY = [];
          this.axisY2 = [];
          this._indexLabels = [];
          this._dataInRenderedOrder = [];
          this._events = [];
          this._eventManager && this._eventManager.reset();
          this.plotInfo = {
            axisPlacement: null,
            plotTypes: []
          };
          this.layoutManager = new Ga(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
          this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
          this.data = [];
          this.title = null;
          this.subtitles = [];
          var a = 0, e = null;
          if (this.options.data) {
            for (var c = 0; c < this.options.data.length; c++) if (a++, !this.options.data[c].type || 0 <= x._supportedChartTypes.indexOf(this.options.data[c].type)) {
              var b = new Q2(this, this.options.data[c], a - 1, ++this._eventManager.lastObjectId);
              if (!l(b) && b.dataPoints) {
                for (var d = 0; d < b.dataPoints.length; d++) if (b.dataPoints[d].x && b.dataPoints[d].x.getTime) {
                  b.xValueType = "dateTime";
                  break;
                }
              }
              "error" === b.type && (b.linkedDataSeriesIndex = l(this.options.data[c].linkedDataSeriesIndex) ? c - 1 : this.options.data[c].linkedDataSeriesIndex, 0 > b.linkedDataSeriesIndex || b.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof b.linkedDataSeriesIndex || "error" === this.options.data[b.linkedDataSeriesIndex].type) && (b.linkedDataSeriesIndex = null);
              null === b.name && (b.name = "DataSeries " + a);
              null === b.color ? 1 < this.options.data.length ? (b._colorSet = [this.selectedColorSet[b.index % this.selectedColorSet.length]], b.color = this.selectedColorSet[b.index % this.selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type || "waterfall" === b.type || "boxAndWhisker" === b.type ? [this.selectedColorSet[0]] : this.selectedColorSet : b._colorSet = [b.color];
              null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
              "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a2) {
                return a2.x;
              }) && b.dataPoints.sort(f) : b.dataPoints.sort(f));
              this.data.push(b);
              var d = b.axisPlacement, e = e || d, h;
              "normal" === d ? "xySwapped" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === d ? "normal" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === d ? "normal" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === d && "none" === this.plotInfo.axisPlacement && (h = 'You cannot combine "' + b.type + '" with pie chart');
              if (h && window.console) {
                window.console.log(h);
                return;
              }
            }
            for (c = 0; c < this.data.length; c++) {
              if ("none" == e && "error" === this.data[c].type && window.console) {
                window.console.log('You cannot combine "' + b.type + '" with error chart');
                return;
              }
              "error" === this.data[c].type && (this.data[c].axisPlacement = this.plotInfo.axisPlacement = e || "normal", this.data[c]._linkedSeries = null === this.data[c].linkedDataSeriesIndex ? null : this.data[this.data[c].linkedDataSeriesIndex]);
            }
          }
          this._objectsInitialized = true;
          this._plotAreaElements = [];
        };
        x._supportedChartTypes = Fa("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
        x.prototype.setLayout = function() {
          for (var a = this._plotAreaElements, e = 0; e < this.data.length; e++) if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
            if (!this.data[e].axisYType || "primary" === this.data[e].axisYType) if (this.options.axisY && 0 < this.options.axisY.length) {
              if (!this.axisY.length) for (var c = 0; c < this.options.axisY.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[c] = new B(this, "axisY", this.options.axisY[c], c, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[c] = new B(this, "axisY", this.options.axisY[c], c, "axisY", "bottom"));
              this.data[e].axisY = this.axisY[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex < this.axisY.length ? this.data[e].axisYIndex : 0];
              this.axisY[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex < this.axisY.length ? this.data[e].axisYIndex : 0].dataSeries.push(this.data[e]);
            } else this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new B(this, "axisY", this.options.axisY, 0, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new B(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[e].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[e]);
            if ("secondary" === this.data[e].axisYType) if (this.options.axisY2 && 0 < this.options.axisY2.length) {
              if (!this.axisY2.length) for (c = 0; c < this.options.axisY2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[c] = new B(this, "axisY2", this.options.axisY2[c], c, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[c] = new B(this, "axisY2", this.options.axisY2[c], c, "axisY", "top"));
              this.data[e].axisY = this.axisY2[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex < this.axisY2.length ? this.data[e].axisYIndex : 0];
              this.axisY2[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex < this.axisY2.length ? this.data[e].axisYIndex : 0].dataSeries.push(this.data[e]);
            } else this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new B(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new B(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[e].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[e]);
            if (!this.data[e].axisXType || "primary" === this.data[e].axisXType) if (this.options.axisX && 0 < this.options.axisX.length) {
              if (!this.axisX.length) for (c = 0; c < this.options.axisX.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[c] = new B(this, "axisX", this.options.axisX[c], c, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[c] = new B(this, "axisX", this.options.axisX[c], c, "axisX", "left"));
              this.data[e].axisX = this.axisX[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX.length ? this.data[e].axisXIndex : 0];
              this.axisX[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX.length ? this.data[e].axisXIndex : 0].dataSeries.push(this.data[e]);
            } else this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new B(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new B(this, "axisX", this.options.axisX, 0, "axisX", "left"))), this.data[e].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[e]);
            if ("secondary" === this.data[e].axisXType) if (this.options.axisX2 && 0 < this.options.axisX2.length) {
              if (!this.axisX2.length) for (c = 0; c < this.options.axisX2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[c] = new B(this, "axisX2", this.options.axisX2[c], c, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[c] = new B(this, "axisX2", this.options.axisX2[c], c, "axisX", "right"));
              this.data[e].axisX = this.axisX2[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX2.length ? this.data[e].axisXIndex : 0];
              this.axisX2[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX2.length ? this.data[e].axisXIndex : 0].dataSeries.push(this.data[e]);
            } else this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new B(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new B(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[e].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[e]);
          }
          if (this.axisY) {
            for (c = 1; c < this.axisY.length; c++) "undefined" === typeof this.axisY[c].options.gridThickness && (this.axisY[c].gridThickness = 0);
            for (c = 0; c < this.axisY.length - 1; c++) "undefined" === typeof this.axisY[c].options.margin && (this.axisY[c].margin = 10);
          }
          if (this.axisY2) {
            for (c = 1; c < this.axisY2.length; c++) "undefined" === typeof this.axisY2[c].options.gridThickness && (this.axisY2[c].gridThickness = 0);
            for (c = 0; c < this.axisY2.length - 1; c++) "undefined" === typeof this.axisY2[c].options.margin && (this.axisY2[c].margin = 10);
          }
          this.axisY && 0 < this.axisY.length && this.axisY2 && 0 < this.axisY2.length && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness = 0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
          if (this.axisX) for (c = 0; c < this.axisX.length; c++) "undefined" === typeof this.axisX[c].options.gridThickness && (this.axisX[c].gridThickness = 0);
          if (this.axisX2) for (c = 0; c < this.axisX2.length; c++) "undefined" === typeof this.axisX2[c].options.gridThickness && (this.axisX2[c].gridThickness = 0);
          this.axisX && 0 < this.axisX.length && this.axisX2 && 0 < this.axisX2.length && (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
          c = false;
          if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled)) {
            for (e = 0; e < this._axes.length; e++) if (!l(this._axes[e].viewportMinimum) || !l(this._axes[e].viewportMaximum)) {
              c = true;
              break;
            }
          }
          c ? (Na(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor) : (wa(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = true, this.panEnabled = false));
          hb(this);
          this._processData();
          this.options.title && (this.title = new Ba(this, this.options.title), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
          if (this.options.subtitles) for (e = 0; e < this.options.subtitles.length; e++) c = new Ka(this, this.options.subtitles[e], e), this.subtitles.push(c), c.dockInsidePlotArea ? a.push(c) : c.setLayout();
          this.legend = new U(this, this.options.legend);
          for (e = 0; e < this.data.length; e++) (this.data[e].showInLegend || "pie" === this.data[e].type || "doughnut" === this.data[e].type || "funnel" === this.data[e].type || "pyramid" === this.data[e].type) && this.legend.dataSeries.push(this.data[e]);
          this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
          for (e = 0; e < this._axes.length; e++) if (this._axes[e].scaleBreaks && this._axes[e].scaleBreaks._appliedBreaks.length) {
            r ? (this._breaksCanvas = ua(this.width, this.height, true), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
            break;
          }
          this._preRenderCanvas = ua(this.width, this.height);
          this._preRenderCtx = this._preRenderCanvas.getContext("2d");
          "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || B.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        };
        x.prototype.renderElements = function() {
          if (this.height && this.width) {
            var a = this._plotAreaElements;
            this.title && !this.title.dockInsidePlotArea && this.title.render();
            for (var e = 0; e < this.subtitles.length; e++) this.subtitles[e].dockInsidePlotArea || this.subtitles[e].render();
            this.legend.dockInsidePlotArea || this.legend.render();
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) B.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
            else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
            else return;
            for (e = 0; e < a.length; e++) a[e].setLayout(), a[e].render();
            var c = [];
            if (this.animatedRender) {
              var b = ua(this.width, this.height);
              b.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height);
            }
            kb(this);
            var a = this.ctx.miterLimit, d;
            this.ctx.miterLimit = 3;
            r && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
            for (e = 0; e < this.plotInfo.plotTypes.length; e++) for (var h = this.plotInfo.plotTypes[e], q = 0; q < h.plotUnits.length; q++) {
              var u = h.plotUnits[q], E = null;
              u.targetCanvas && za(u.targetCanvas);
              u.targetCanvas = null;
              this.animatedRender && (u.targetCanvas = ua(this.width, this.height), u.targetCanvasCtx = u.targetCanvas.getContext("2d"), d = u.targetCanvasCtx.miterLimit, u.targetCanvasCtx.miterLimit = 3);
              "line" === u.type ? E = this.renderLine(u) : "stepLine" === u.type ? E = this.renderStepLine(u) : "spline" === u.type ? E = this.renderSpline(u) : "column" === u.type ? E = this.renderColumn(u) : "bar" === u.type ? E = this.renderBar(u) : "area" === u.type ? E = this.renderArea(u) : "stepArea" === u.type ? E = this.renderStepArea(u) : "splineArea" === u.type ? E = this.renderSplineArea(u) : "stackedColumn" === u.type ? E = this.renderStackedColumn(u) : "stackedColumn100" === u.type ? E = this.renderStackedColumn100(u) : "stackedBar" === u.type ? E = this.renderStackedBar(u) : "stackedBar100" === u.type ? E = this.renderStackedBar100(u) : "stackedArea" === u.type ? E = this.renderStackedArea(u) : "stackedArea100" === u.type ? E = this.renderStackedArea100(u) : "bubble" === u.type ? E = E = this.renderBubble(u) : "scatter" === u.type ? E = this.renderScatter(u) : "pie" === u.type ? this.renderPie(u) : "doughnut" === u.type ? this.renderPie(u) : "funnel" === u.type ? E = this.renderFunnel(u) : "pyramid" === u.type ? E = this.renderFunnel(u) : "candlestick" === u.type ? E = this.renderCandlestick(u) : "ohlc" === u.type ? E = this.renderCandlestick(u) : "rangeColumn" === u.type ? E = this.renderRangeColumn(u) : "error" === u.type ? E = this.renderError(u) : "rangeBar" === u.type ? E = this.renderRangeBar(u) : "rangeArea" === u.type ? E = this.renderRangeArea(u) : "rangeSplineArea" === u.type ? E = this.renderRangeSplineArea(u) : "waterfall" === u.type ? E = this.renderWaterfall(u) : "boxAndWhisker" === u.type && (E = this.renderBoxAndWhisker(u));
              for (var k = 0; k < u.dataSeriesIndexes.length; k++) this._dataInRenderedOrder.push(this.data[u.dataSeriesIndexes[k]]);
              this.animatedRender && (u.targetCanvasCtx.miterLimit = d, E && c.push(E));
            }
            this.ctx.miterLimit = a;
            this.animatedRender && this._breaksCanvasCtx && c.push({
              source: this._breaksCanvasCtx,
              dest: this.plotArea.ctx,
              animationCallback: R.fadeInAnimation,
              easingFunction: R.easing.easeInQuad,
              animationBase: 0,
              startTimePercent: 0.7
            });
            this.animatedRender && 0 < this._indexLabels.length && (d = ua(this.width, this.height).getContext("2d"), Aa(d), c.push(this.renderIndexLabels(d)));
            var m = this;
            if (0 < c.length) m.disableToolTip = true, m._animator.animate(200, m.animationDuration, function(a2) {
              m.ctx.clearRect(0, 0, m.width, m.height);
              m.ctx.drawImage(b, 0, 0, Math.floor(m.width * na), Math.floor(m.height * na), 0, 0, m.width, m.height);
              for (var d2 = 0; d2 < c.length; d2++) E = c[d2], 1 > a2 && "undefined" !== typeof E.startTimePercent ? a2 >= E.startTimePercent && E.animationCallback(E.easingFunction(a2 - E.startTimePercent, 0, 1, 1 - E.startTimePercent), E) : E.animationCallback(E.easingFunction(a2, 0, 1, 1), E);
              m.dispatchEvent("dataAnimationIterationEnd", {
                chart: m
              });
            }, function() {
              c = [];
              for (var a2 = 0; a2 < m.plotInfo.plotTypes.length; a2++) for (var d2 = m.plotInfo.plotTypes[a2], g = 0; g < d2.plotUnits.length; g++) {
                var e2 = d2.plotUnits[g];
                e2.targetCanvas && za(e2.targetCanvas);
                e2.targetCanvas = null;
              }
              b = null;
              m.disableToolTip = false;
              m.dispatchEvent("dataAnimationEnd", {
                chart: m
              });
            });
            else {
              if (m._breaksCanvas) if (r) m.plotArea.ctx.drawImage(m._breaksCanvas, 0, 0, this.width, this.height);
              else for (k = 0; k < m._axes.length; k++) m._axes[k].createMask();
              0 < m._indexLabels.length && m.renderIndexLabels();
              m.dispatchEvent("dataAnimationIterationEnd", {
                chart: m
              });
              m.dispatchEvent("dataAnimationEnd", {
                chart: m
              });
            }
            this.attachPlotAreaEventHandlers();
            this.zoomEnabled || this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display || wa(this._zoomButton, this._resetButton);
            l(this.toolTip._xValue) || l(this.toolTip._dataSeriesIndex) || this.toolTip.showAtX(this.toolTip._xValue, this.toolTip._dataSeriesIndex);
            this.toolTip._updateToolTip();
            this.renderCount++;
            Ja && (m = this, setTimeout(function() {
              var a2 = document.getElementById("ghostCanvasCopy");
              a2 && (Oa(a2, m.width, m.height), a2.getContext("2d").drawImage(m._eventManager.ghostCanvas, 0, 0));
            }, 2e3));
            this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
            for (k = 0; k < this._axes.length; k++) this._axes[k].maskCanvas && (delete this._axes[k].maskCanvas, delete this._axes[k].maskCtx);
          }
        };
        x.prototype.render = function(a) {
          a && (this.options = a);
          this._initialize();
          this.setLayout();
          this.renderElements();
          this._preRenderCanvas && za(this._preRenderCanvas);
        };
        x.prototype.attachPlotAreaEventHandlers = function() {
          this.attachEvent({
            context: this,
            chart: this,
            mousedown: this._plotAreaMouseDown,
            mouseup: this._plotAreaMouseUp,
            mousemove: this._plotAreaMouseMove,
            cursor: this.panEnabled ? "move" : "default",
            capture: true,
            bounds: this.plotArea
          });
        };
        x.prototype.categoriseDataSeries = function() {
          for (var a = "", e = 0; e < this.data.length; e++) if (a = this.data[e], a.dataPoints && 0 !== a.dataPoints.length && a.visible && 0 <= x._supportedChartTypes.indexOf(a.type)) {
            for (var c = null, b = false, d = null, h = false, q = 0; q < this.plotInfo.plotTypes.length; q++) if (this.plotInfo.plotTypes[q].type === a.type) {
              b = true;
              c = this.plotInfo.plotTypes[q];
              break;
            }
            b || (c = {
              type: a.type,
              totalDataSeries: 0,
              plotUnits: []
            }, this.plotInfo.plotTypes.push(c));
            for (q = 0; q < c.plotUnits.length; q++) if (c.plotUnits[q].axisYType === a.axisYType && c.plotUnits[q].axisXType === a.axisXType && c.plotUnits[q].axisYIndex === a.axisYIndex && c.plotUnits[q].axisXIndex === a.axisXIndex) {
              h = true;
              d = c.plotUnits[q];
              break;
            }
            h || (d = {
              type: a.type,
              previousDataSeriesCount: 0,
              index: c.plotUnits.length,
              plotType: c,
              axisXType: a.axisXType,
              axisYType: a.axisYType,
              axisYIndex: a.axisYIndex,
              axisXIndex: a.axisXIndex,
              axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
              axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
              dataSeriesIndexes: [],
              yTotals: [],
              yAbsTotals: []
            }, c.plotUnits.push(d));
            c.totalDataSeries++;
            d.dataSeriesIndexes.push(e);
            a.plotUnit = d;
          }
          for (e = 0; e < this.plotInfo.plotTypes.length; e++) for (c = this.plotInfo.plotTypes[e], q = a = 0; q < c.plotUnits.length; q++) c.plotUnits[q].previousDataSeriesCount = a, a += c.plotUnits[q].dataSeriesIndexes.length;
        };
        x.prototype.assignIdToDataPoints = function() {
          for (var a = 0; a < this.data.length; a++) {
            var e = this.data[a];
            if (e.dataPoints) for (var c = e.dataPoints.length, b = 0; b < c; b++) e.dataPointIds[b] = ++this._eventManager.lastObjectId;
          }
        };
        x.prototype._processData = function() {
          this.assignIdToDataPoints();
          this.categoriseDataSeries();
          for (var a = 0; a < this.plotInfo.plotTypes.length; a++) for (var e = this.plotInfo.plotTypes[a], c = 0; c < e.plotUnits.length; c++) {
            var b = e.plotUnits[c];
            "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type ? this._processMultiseriesPlotUnit(b) : "stackedColumn" === b.type || "stackedBar" === b.type || "stackedArea" === b.type ? this._processStackedPlotUnit(b) : "stackedColumn100" === b.type || "stackedBar100" === b.type || "stackedArea100" === b.type ? this._processStacked100PlotUnit(b) : "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? this._processMultiYPlotUnit(b) : "waterfall" === b.type && this._processSpecificPlotUnit(b);
          }
          this.calculateAutoBreaks();
        };
        x.prototype._processMultiseriesPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) for (var e = a.axisY.dataInfo, c = a.axisX.dataInfo, b, d, h = false, q = 0; q < a.dataSeriesIndexes.length; q++) {
            var u = this.data[a.dataSeriesIndexes[q]], E = 0, k = false, m = false, n;
            if ("normal" === u.axisPlacement || "xySwapped" === u.axisPlacement) var p = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, g = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
            if (u.dataPoints[E].x && u.dataPoints[E].x.getTime || "dateTime" === u.xValueType) h = true;
            for (E = 0; E < u.dataPoints.length; E++) {
              "undefined" === typeof u.dataPoints[E].x && (u.dataPoints[E].x = E + (a.axisX.logarithmic ? 1 : 0));
              u.dataPoints[E].x.getTime ? (h = true, b = u.dataPoints[E].x.getTime()) : b = u.dataPoints[E].x;
              d = u.dataPoints[E].y;
              b < c.min && (c.min = b);
              b > c.max && (c.max = b);
              d < e.min && "number" === typeof d && (e.min = d);
              d > e.max && "number" === typeof d && (e.max = d);
              if (0 < E) {
                if (a.axisX.logarithmic) {
                  var l2 = b / u.dataPoints[E - 1].x;
                  1 > l2 && (l2 = 1 / l2);
                  c.minDiff > l2 && 1 !== l2 && (c.minDiff = l2);
                } else l2 = b - u.dataPoints[E - 1].x, 0 > l2 && (l2 *= -1), c.minDiff > l2 && 0 !== l2 && (c.minDiff = l2);
                null !== d && null !== u.dataPoints[E - 1].y && (a.axisY.logarithmic ? (l2 = d / u.dataPoints[E - 1].y, 1 > l2 && (l2 = 1 / l2), e.minDiff > l2 && 1 !== l2 && (e.minDiff = l2)) : (l2 = d - u.dataPoints[E - 1].y, 0 > l2 && (l2 *= -1), e.minDiff > l2 && 0 !== l2 && (e.minDiff = l2)));
              }
              if (b < p && !k) null !== d && (n = b);
              else {
                if (!k && (k = true, 0 < E)) {
                  E -= 2;
                  continue;
                }
                if (b > g && !m) m = true;
                else if (b > g && m) continue;
                u.dataPoints[E].label && (a.axisX.labels[b] = u.dataPoints[E].label);
                b < c.viewPortMin && (c.viewPortMin = b);
                b > c.viewPortMax && (c.viewPortMax = b);
                null === d ? c.viewPortMin === b && n < b && (c.viewPortMin = n) : (d < e.viewPortMin && "number" === typeof d && (e.viewPortMin = d), d > e.viewPortMax && "number" === typeof d && (e.viewPortMax = d));
              }
            }
            u.axisX.valueType = u.xValueType = h ? "dateTime" : "number";
          }
        };
        x.prototype._processStackedPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var e = a.axisY.dataInfo, c = a.axisX.dataInfo, b, d, h = false, q = [], u = [], E = Infinity, k = -Infinity, m = {}, n = 0; n < a.dataSeriesIndexes.length; n++) {
              var p = this.data[a.dataSeriesIndexes[n]], g = 0, f2 = false, w = false, y;
              if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement) var s = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, r2 = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (p.dataPoints[g].x && p.dataPoints[g].x.getTime || "dateTime" === p.xValueType) h = true;
              for (g = 0; g < p.dataPoints.length; g++) {
                "undefined" === typeof p.dataPoints[g].x && (p.dataPoints[g].x = g + (a.axisX.logarithmic ? 1 : 0));
                p.dataPoints[g].x.getTime ? (h = true, b = p.dataPoints[g].x.getTime()) : b = p.dataPoints[g].x;
                d = l(p.dataPoints[g].y) ? 0 : p.dataPoints[g].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                if (0 < g) {
                  if (a.axisX.logarithmic) {
                    var v = b / p.dataPoints[g - 1].x;
                    1 > v && (v = 1 / v);
                    c.minDiff > v && 1 !== v && (c.minDiff = v);
                  } else v = b - p.dataPoints[g - 1].x, 0 > v && (v *= -1), c.minDiff > v && 0 !== v && (c.minDiff = v);
                  null !== d && null !== p.dataPoints[g - 1].y && (a.axisY.logarithmic ? 0 < d && (v = d / p.dataPoints[g - 1].y, 1 > v && (v = 1 / v), e.minDiff > v && 1 !== v && (e.minDiff = v)) : (v = d - p.dataPoints[g - 1].y, 0 > v && (v *= -1), e.minDiff > v && 0 !== v && (e.minDiff = v)));
                }
                if (b < s && !f2) null !== p.dataPoints[g].y && (y = b);
                else {
                  if (!f2 && (f2 = true, 0 < g)) {
                    g -= 2;
                    continue;
                  }
                  if (b > r2 && !w) w = true;
                  else if (b > r2 && w) continue;
                  p.dataPoints[g].label && (a.axisX.labels[b] = p.dataPoints[g].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === p.dataPoints[g].y ? c.viewPortMin === b && y < b && (c.viewPortMin = y) : (m[b] = (m[b] || 0) + p.dataPoints[g].y, p.dataPointEOs[g].cumulativeY = m[b], a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + d, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(d), 0 <= d ? q[b] ? q[b] += d : (q[b] = d, E = Math.min(d, E)) : u[b] ? u[b] += d : (u[b] = d, k = Math.max(d, k)));
                }
              }
              a.axisY.scaleBreaks && a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks && (e.dataPointYPositiveSums ? (e.dataPointYPositiveSums.push.apply(e.dataPointYPositiveSums, q), e.dataPointYNegativeSums.push.apply(e.dataPointYPositiveSums, u)) : (e.dataPointYPositiveSums = q, e.dataPointYNegativeSums = u));
              p.axisX.valueType = p.xValueType = h ? "dateTime" : "number";
            }
            for (g in q) q.hasOwnProperty(g) && !isNaN(g) && (a = q[g], a < e.min && (e.min = Math.min(a, E)), a > e.max && (e.max = a), g < c.viewPortMin || g > c.viewPortMax || (a < e.viewPortMin && (e.viewPortMin = Math.min(a, E)), a > e.viewPortMax && (e.viewPortMax = a)));
            for (g in u) u.hasOwnProperty(g) && !isNaN(g) && (a = u[g], a < e.min && (e.min = a), a > e.max && (e.max = Math.max(a, k)), g < c.viewPortMin || g > c.viewPortMax || (a < e.viewPortMin && (e.viewPortMin = a), a > e.viewPortMax && (e.viewPortMax = Math.max(a, k))));
          }
        };
        x.prototype._processStacked100PlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var e = a.axisY.dataInfo, c = a.axisX.dataInfo, b, d, h = false, q = false, u = false, E = {}, k = [], m = 0; m < a.dataSeriesIndexes.length; m++) {
              var n = this.data[a.dataSeriesIndexes[m]], p = 0, g = false, f2 = false, w;
              if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement) var y = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, s = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (n.dataPoints[p].x && n.dataPoints[p].x.getTime || "dateTime" === n.xValueType) h = true;
              for (p = 0; p < n.dataPoints.length; p++) {
                "undefined" === typeof n.dataPoints[p].x && (n.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
                n.dataPoints[p].x.getTime ? (h = true, b = n.dataPoints[p].x.getTime()) : b = n.dataPoints[p].x;
                d = l(n.dataPoints[p].y) ? null : n.dataPoints[p].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                if (0 < p) {
                  if (a.axisX.logarithmic) {
                    var r2 = b / n.dataPoints[p - 1].x;
                    1 > r2 && (r2 = 1 / r2);
                    c.minDiff > r2 && 1 !== r2 && (c.minDiff = r2);
                  } else r2 = b - n.dataPoints[p - 1].x, 0 > r2 && (r2 *= -1), c.minDiff > r2 && 0 !== r2 && (c.minDiff = r2);
                  l(d) || null === n.dataPoints[p - 1].y || (a.axisY.logarithmic ? 0 < d && (r2 = d / n.dataPoints[p - 1].y, 1 > r2 && (r2 = 1 / r2), e.minDiff > r2 && 1 !== r2 && (e.minDiff = r2)) : (r2 = d - n.dataPoints[p - 1].y, 0 > r2 && (r2 *= -1), e.minDiff > r2 && 0 !== r2 && (e.minDiff = r2)));
                }
                if (b < y && !g) null !== d && (w = b);
                else {
                  if (!g && (g = true, 0 < p)) {
                    p -= 2;
                    continue;
                  }
                  if (b > s && !f2) f2 = true;
                  else if (b > s && f2) continue;
                  n.dataPoints[p].label && (a.axisX.labels[b] = n.dataPoints[p].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === d ? c.viewPortMin === b && w < b && (c.viewPortMin = w) : (E[b] = (E[b] || 0) + n.dataPoints[p].y, n.dataPointEOs[p].cumulativeY = E[b], a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + d, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(d), 0 <= d ? q = true : 0 > d && (u = true), k[b] = k[b] ? k[b] + Math.abs(d) : Math.abs(d));
                }
              }
              n.axisX.valueType = n.xValueType = h ? "dateTime" : "number";
            }
            a.axisY.logarithmic ? (e.max = l(e.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(e.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), e.min = l(e.viewPortMin) ? 1 : Math.min(e.viewPortMin, 1)) : q && !u ? (e.max = l(e.viewPortMax) ? 99 : Math.max(e.viewPortMax, 99), e.min = l(e.viewPortMin) ? 1 : Math.min(e.viewPortMin, 1)) : q && u ? (e.max = l(e.viewPortMax) ? 99 : Math.max(e.viewPortMax, 99), e.min = l(e.viewPortMin) ? -99 : Math.min(e.viewPortMin, -99)) : !q && u && (e.max = l(e.viewPortMax) ? -1 : Math.max(e.viewPortMax, -1), e.min = l(e.viewPortMin) ? -99 : Math.min(e.viewPortMin, -99));
            e.viewPortMin = e.min;
            e.viewPortMax = e.max;
            a.dataPointYSums = k;
          }
        };
        x.prototype._processMultiYPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) for (var e = a.axisY.dataInfo, c = a.axisX.dataInfo, b, d, h, q, u = false, l2 = 0; l2 < a.dataSeriesIndexes.length; l2++) {
            var k = this.data[a.dataSeriesIndexes[l2]], m = 0, n = false, p = false, g, f2, w;
            if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement) var r2 = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, s = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
            if (k.dataPoints[m].x && k.dataPoints[m].x.getTime || "dateTime" === k.xValueType) u = true;
            for (m = 0; m < k.dataPoints.length; m++) {
              "undefined" === typeof k.dataPoints[m].x && (k.dataPoints[m].x = m + (a.axisX.logarithmic ? 1 : 0));
              k.dataPoints[m].x.getTime ? (u = true, b = k.dataPoints[m].x.getTime()) : b = k.dataPoints[m].x;
              if ((d = k.dataPoints[m].y) && d.length) {
                h = Math.min.apply(null, d);
                q = Math.max.apply(null, d);
                f2 = true;
                for (var z = 0; z < d.length; z++) null === d.k && (f2 = false);
                f2 && (n || (w = g), g = b);
              }
              b < c.min && (c.min = b);
              b > c.max && (c.max = b);
              h < e.min && (e.min = h);
              q > e.max && (e.max = q);
              0 < m && (a.axisX.logarithmic ? (f2 = b / k.dataPoints[m - 1].x, 1 > f2 && (f2 = 1 / f2), c.minDiff > f2 && 1 !== f2 && (c.minDiff = f2)) : (f2 = b - k.dataPoints[m - 1].x, 0 > f2 && (f2 *= -1), c.minDiff > f2 && 0 !== f2 && (c.minDiff = f2)), d && null !== d[0] && k.dataPoints[m - 1].y && null !== k.dataPoints[m - 1].y[0] && (a.axisY.logarithmic ? (f2 = d[0] / k.dataPoints[m - 1].y[0], 1 > f2 && (f2 = 1 / f2), e.minDiff > f2 && 1 !== f2 && (e.minDiff = f2)) : (f2 = d[0] - k.dataPoints[m - 1].y[0], 0 > f2 && (f2 *= -1), e.minDiff > f2 && 0 !== f2 && (e.minDiff = f2))));
              if (!(b < r2) || n) {
                if (!n && (n = true, 0 < m)) {
                  m -= 2;
                  g = w;
                  continue;
                }
                if (b > s && !p) p = true;
                else if (b > s && p) continue;
                k.dataPoints[m].label && (a.axisX.labels[b] = k.dataPoints[m].label);
                b < c.viewPortMin && (c.viewPortMin = b);
                b > c.viewPortMax && (c.viewPortMax = b);
                if (c.viewPortMin === b && d) {
                  for (z = 0; z < d.length; z++) if (null === d[z] && g < b) {
                    c.viewPortMin = g;
                    break;
                  }
                }
                null === d ? c.viewPortMin === b && g < b && (c.viewPortMin = g) : (h < e.viewPortMin && (e.viewPortMin = h), q > e.viewPortMax && (e.viewPortMax = q));
              }
            }
            k.axisX.valueType = k.xValueType = u ? "dateTime" : "number";
          }
        };
        x.prototype._processSpecificPlotUnit = function(a) {
          if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) for (var e = a.axisY.dataInfo, c = a.axisX.dataInfo, b, d, h = false, q = 0; q < a.dataSeriesIndexes.length; q++) {
            var u = this.data[a.dataSeriesIndexes[q]], l2 = 0, k = false, m = false, n = b = 0;
            if ("normal" === u.axisPlacement || "xySwapped" === u.axisPlacement) var p = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, g = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
            if (u.dataPoints[l2].x && u.dataPoints[l2].x.getTime || "dateTime" === u.xValueType) h = true;
            for (l2 = 0; l2 < u.dataPoints.length; l2++) "undefined" !== typeof u.dataPoints[l2].isCumulativeSum && true === u.dataPoints[l2].isCumulativeSum ? (u.dataPointEOs[l2].cumulativeSumYStartValue = 0, u.dataPointEOs[l2].cumulativeSum = 0 === l2 ? 0 : u.dataPointEOs[l2 - 1].cumulativeSum, u.dataPoints[l2].y = 0 === l2 ? 0 : u.dataPointEOs[l2 - 1].cumulativeSum) : "undefined" !== typeof u.dataPoints[l2].isIntermediateSum && true === u.dataPoints[l2].isIntermediateSum ? (u.dataPointEOs[l2].cumulativeSumYStartValue = n, u.dataPointEOs[l2].cumulativeSum = 0 === l2 ? 0 : u.dataPointEOs[l2 - 1].cumulativeSum, u.dataPoints[l2].y = 0 === l2 ? 0 : b, n = 0 === l2 ? 0 : u.dataPointEOs[l2 - 1].cumulativeSum, b = 0) : (d = "number" !== typeof u.dataPoints[l2].y ? 0 : u.dataPoints[l2].y, u.dataPointEOs[l2].cumulativeSumYStartValue = 0 === l2 ? 0 : u.dataPointEOs[l2 - 1].cumulativeSum, u.dataPointEOs[l2].cumulativeSum = 0 === l2 ? d : u.dataPointEOs[l2 - 1].cumulativeSum + d, b += d);
            for (l2 = 0; l2 < u.dataPoints.length; l2++) if ("undefined" === typeof u.dataPoints[l2].x && (u.dataPoints[l2].x = l2 + (a.axisX.logarithmic ? 1 : 0)), u.dataPoints[l2].x.getTime ? (h = true, b = u.dataPoints[l2].x.getTime()) : b = u.dataPoints[l2].x, d = u.dataPoints[l2].y, b < c.min && (c.min = b), b > c.max && (c.max = b), u.dataPointEOs[l2].cumulativeSum < e.min && (e.min = u.dataPointEOs[l2].cumulativeSum), u.dataPointEOs[l2].cumulativeSum > e.max && (e.max = u.dataPointEOs[l2].cumulativeSum), 0 < l2 && (a.axisX.logarithmic ? (n = b / u.dataPoints[l2 - 1].x, 1 > n && (n = 1 / n), c.minDiff > n && 1 !== n && (c.minDiff = n)) : (n = b - u.dataPoints[l2 - 1].x, 0 > n && (n *= -1), c.minDiff > n && 0 !== n && (c.minDiff = n)), null !== d && null !== u.dataPoints[l2 - 1].y && (a.axisY.logarithmic ? (d = u.dataPointEOs[l2].cumulativeSum / u.dataPointEOs[l2 - 1].cumulativeSum, 1 > d && (d = 1 / d), e.minDiff > d && 1 !== d && (e.minDiff = d)) : (d = u.dataPointEOs[l2].cumulativeSum - u.dataPointEOs[l2 - 1].cumulativeSum, 0 > d && (d *= -1), e.minDiff > d && 0 !== d && (e.minDiff = d)))), !(b < p) || k) {
              if (!k && (k = true, 0 < l2)) {
                l2 -= 2;
                continue;
              }
              if (b > g && !m) m = true;
              else if (b > g && m) continue;
              u.dataPoints[l2].label && (a.axisX.labels[b] = u.dataPoints[l2].label);
              b < c.viewPortMin && (c.viewPortMin = b);
              b > c.viewPortMax && (c.viewPortMax = b);
              0 < l2 && (u.dataPointEOs[l2 - 1].cumulativeSum < e.viewPortMin && (e.viewPortMin = u.dataPointEOs[l2 - 1].cumulativeSum), u.dataPointEOs[l2 - 1].cumulativeSum > e.viewPortMax && (e.viewPortMax = u.dataPointEOs[l2 - 1].cumulativeSum));
              u.dataPointEOs[l2].cumulativeSum < e.viewPortMin && (e.viewPortMin = u.dataPointEOs[l2].cumulativeSum);
              u.dataPointEOs[l2].cumulativeSum > e.viewPortMax && (e.viewPortMax = u.dataPointEOs[l2].cumulativeSum);
            }
            u.axisX.valueType = u.xValueType = h ? "dateTime" : "number";
          }
        };
        x.prototype.calculateAutoBreaks = function() {
          function a(a2, b2, c2, d2) {
            if (d2) return c2 = Math.pow(Math.min(c2 * a2 / b2, b2 / a2), 0.2), 1 >= c2 && (c2 = Math.pow(1 > a2 ? 1 / a2 : Math.min(b2 / a2, a2), 0.25)), {
              startValue: a2 * c2,
              endValue: b2 / c2
            };
            c2 = 0.2 * Math.min(c2 - b2 + a2, b2 - a2);
            0 >= c2 && (c2 = 0.25 * Math.min(b2 - a2, Math.abs(a2)));
            return {
              startValue: a2 + c2,
              endValue: b2 - c2
            };
          }
          function e(a2) {
            if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length)) {
              var b2 = a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks, c2 = a2.axisY.scaleBreaks && a2.axisY.scaleBreaks.autoCalculate && 1 <= a2.axisY.scaleBreaks.maxNumberOfAutoBreaks;
              if (b2 || c2) for (var g2 = a2.axisY.dataInfo, e2 = a2.axisX.dataInfo, h2, q2 = e2.min, k2 = e2.max, m2 = g2.min, n2 = g2.max, e2 = e2._dataRanges, g2 = g2._dataRanges, p2, u2 = 0, E2 = 0; E2 < a2.dataSeriesIndexes.length; E2++) {
                var f2 = d.data[a2.dataSeriesIndexes[E2]];
                if (!(4 > f2.dataPoints.length)) {
                  for (u2 = 0; u2 < f2.dataPoints.length; u2++) if (b2 && (p2 = (k2 + 1 - q2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, h2 = f2.dataPoints[u2].x.getTime ? f2.dataPoints[u2].x.getTime() : f2.dataPoints[u2].x, p2 = Math.floor((h2 - q2) / p2), h2 < e2[p2].min && (e2[p2].min = h2), h2 > e2[p2].max && (e2[p2].max = h2)), c2) {
                    var r2 = (n2 + 1 - m2) * Math.max(parseFloat(a2.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                    if ((h2 = "waterfall" === a2.type ? f2.dataPointEOs[u2].cumulativeSum : f2.dataPoints[u2].y) && h2.length) for (var fa = 0; fa < h2.length; fa++) p2 = Math.floor((h2[fa] - m2) / r2), h2[fa] < g2[p2].min && (g2[p2].min = h2[fa]), h2[fa] > g2[p2].max && (g2[p2].max = h2[fa]);
                    else l(h2) || (p2 = Math.floor((h2 - m2) / r2), h2 < g2[p2].min && (g2[p2].min = h2), h2 > g2[p2].max && (g2[p2].max = h2));
                  }
                }
              }
            }
          }
          function c(a2) {
            if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length) && a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks) for (var b2 = a2.axisX.dataInfo, c2 = b2.min, g2 = b2.max, e2 = b2._dataRanges, h2, q2 = 0, k2 = 0; k2 < a2.dataSeriesIndexes.length; k2++) {
              var m2 = d.data[a2.dataSeriesIndexes[k2]];
              if (!(4 > m2.dataPoints.length)) for (q2 = 0; q2 < m2.dataPoints.length; q2++) h2 = (g2 + 1 - c2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, b2 = m2.dataPoints[q2].x.getTime ? m2.dataPoints[q2].x.getTime() : m2.dataPoints[q2].x, h2 = Math.floor((b2 - c2) / h2), b2 < e2[h2].min && (e2[h2].min = b2), b2 > e2[h2].max && (e2[h2].max = b2);
            }
          }
          for (var b, d = this, h = false, q = 0; q < this._axes.length; q++) if (this._axes[q].scaleBreaks && this._axes[q].scaleBreaks.autoCalculate && 1 <= this._axes[q].scaleBreaks.maxNumberOfAutoBreaks) {
            h = true;
            this._axes[q].dataInfo._dataRanges = [];
            for (var u = 0; u < 100 / Math.max(parseFloat(this._axes[q].scaleBreaks.collapsibleThreshold) || 10, 10); u++) this._axes[q].dataInfo._dataRanges.push({
              min: Infinity,
              max: -Infinity
            });
          }
          if (h) {
            for (q = 0; q < this.plotInfo.plotTypes.length; q++) for (h = this.plotInfo.plotTypes[q], u = 0; u < h.plotUnits.length; u++) b = h.plotUnits[u], "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type || "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "waterfall" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? e(b) : 0 <= b.type.indexOf("stacked") && c(b);
            for (q = 0; q < this._axes.length; q++) if (this._axes[q].dataInfo._dataRanges) {
              var E = this._axes[q].dataInfo.min;
              b = (this._axes[q].dataInfo.max + 1 - E) * Math.max(parseFloat(this._axes[q].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
              var k = this._axes[q].dataInfo._dataRanges, m, n, h = [];
              if (this._axes[q].dataInfo.dataPointYPositiveSums) {
                var p = this._axes[q].dataInfo.dataPointYPositiveSums;
                m = k;
                for (u in p) if (p.hasOwnProperty(u) && !isNaN(u) && (n = p[u], !l(n))) {
                  var g = Math.floor((n - E) / b);
                  n < m[g].min && (m[g].min = n);
                  n > m[g].max && (m[g].max = n);
                }
                delete this._axes[q].dataInfo.dataPointYPositiveSums;
              }
              if (this._axes[q].dataInfo.dataPointYNegativeSums) {
                p = this._axes[q].dataInfo.dataPointYNegativeSums;
                m = k;
                for (u in p) p.hasOwnProperty(u) && !isNaN(u) && (n = -1 * p[u], l(n) || (g = Math.floor((n - E) / b), n < m[g].min && (m[g].min = n), n > m[g].max && (m[g].max = n)));
                delete this._axes[q].dataInfo.dataPointYNegativeSums;
              }
              for (u = 0; u < k.length - 1; u++) if (m = k[u].max, isFinite(m)) for (; u < k.length - 1; ) if (E = k[u + 1].min, isFinite(E)) {
                n = E - m;
                n > b && h.push({
                  diff: n,
                  start: m,
                  end: E
                });
                break;
              } else u++;
              if (this._axes[q].scaleBreaks.customBreaks) {
                for (u = 0; u < this._axes[q].scaleBreaks.customBreaks.length; u++) for (b = 0; b < h.length; b++) if (this._axes[q].scaleBreaks.customBreaks[u].startValue <= h[b].start && h[b].start <= this._axes[q].scaleBreaks.customBreaks[u].endValue || this._axes[q].scaleBreaks.customBreaks[u].startValue <= h[b].start && h[b].start <= this._axes[q].scaleBreaks.customBreaks[u].endValue || h[b].start <= this._axes[q].scaleBreaks.customBreaks[u].startValue && this._axes[q].scaleBreaks.customBreaks[u].startValue <= h[b].end || h[b].start <= this._axes[q].scaleBreaks.customBreaks[u].endValue && this._axes[q].scaleBreaks.customBreaks[u].endValue <= h[b].end) h.splice(b, 1), b--;
              }
              h.sort(function(a2, b2) {
                return b2.diff - a2.diff;
              });
              for (u = 0; u < Math.min(h.length, this._axes[q].scaleBreaks.maxNumberOfAutoBreaks); u++) b = a(h[u].start, h[u].end, this._axes[q].logarithmic ? this._axes[q].dataInfo.max / this._axes[q].dataInfo.min : this._axes[q].dataInfo.max - this._axes[q].dataInfo.min, this._axes[q].logarithmic), this._axes[q].scaleBreaks.autoBreaks.push(new ga2(this, "autoBreaks", b, u, ++this._eventManager.lastObjectId, this._axes[q].scaleBreaks)), this._axes[q].scaleBreaks._appliedBreaks.push(this._axes[q].scaleBreaks.autoBreaks[this._axes[q].scaleBreaks.autoBreaks.length - 1]);
              this._axes[q].scaleBreaks._appliedBreaks.sort(function(a2, b2) {
                return a2.startValue - b2.startValue;
              });
            }
          }
        };
        x.prototype.renderCrosshairs = function(a, e) {
          for (var c = 0; c < this.axisX.length; c++) this.axisX[c] != a && this.axisX[c].crosshair && this.axisX[c].crosshair.enabled && !this.axisX[c].crosshair._hidden && (e && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisX[c].crosshair.render(null, this.sessionVariables.mouseY, this.axisX[c].convertPixelToValue(this.sessionVariables.mouseY)) : this.axisX[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisX[c].convertPixelToValue(this.sessionVariables.mouseX)) : e || this.axisX[c].showCrosshair(this.axisX[c].crosshair._updatedValue));
          for (c = 0; c < this.axisX2.length; c++) this.axisX2[c] != a && this.axisX2[c].crosshair && this.axisX2[c].crosshair.enabled && !this.axisX2[c].crosshair._hidden && (e && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisX2[c].crosshair.render(null, this.sessionVariables.mouseY, this.axisX2[c].convertPixelToValue(this.sessionVariables.mouseY)) : this.axisX2[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisX2[c].convertPixelToValue(this.sessionVariables.mouseX)) : e || this.axisX2[c].showCrosshair(this.axisX2[c].crosshair._updatedValue));
          for (c = 0; c < this.axisY.length; c++) this.axisY[c] != a && this.axisY[c].crosshair && this.axisY[c].crosshair.enabled && !this.axisY[c].crosshair._hidden && (e && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisY[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisY[c].convertPixelToValue(this.sessionVariables.mouseX)) : this.axisY[c].crosshair.render(null, this.sessionVariables.mouseY, this.axisY[c].convertPixelToValue(this.sessionVariables.mouseY)) : e || this.axisY[c].showCrosshair(this.axisY[c].crosshair._updatedValue));
          for (c = 0; c < this.axisY2.length; c++) this.axisY2[c] != a && this.axisY2[c].crosshair && this.axisY2[c].crosshair.enabled && !this.axisY2[c].crosshair._hidden && (e && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisY2[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisY2[c].convertPixelToValue(this.sessionVariables.mouseX)) : this.axisY2[c].crosshair.render(null, this.sessionVariables.mouseY, this.axisY2[c].convertPixelToValue(this.sessionVariables.mouseY)) : e || this.axisY2[c].showCrosshair(this.axisY2[c].crosshair._updatedValue));
        };
        x.prototype.getDataPointAtXY = function(a, e, c) {
          c = c || false;
          for (var b = [], d = this._dataInRenderedOrder.length - 1; 0 <= d; d--) {
            var h = null;
            (h = this._dataInRenderedOrder[d].getDataPointAtXY(a, e, c)) && b.push(h);
          }
          a = null;
          e = false;
          for (c = 0; c < b.length; c++) if ("line" === b[c].dataSeries.type || "stepLine" === b[c].dataSeries.type || "area" === b[c].dataSeries.type || "stepArea" === b[c].dataSeries.type) {
            if (d = ka("markerSize", b[c].dataPoint, b[c].dataSeries) || 8, b[c].distance <= d / 2) {
              e = true;
              break;
            }
          }
          for (c = 0; c < b.length; c++) e && "line" !== b[c].dataSeries.type && "stepLine" !== b[c].dataSeries.type && "area" !== b[c].dataSeries.type && "stepArea" !== b[c].dataSeries.type || (a ? b[c].distance <= a.distance && (a = b[c]) : a = b[c]);
          return a;
        };
        x.prototype.getObjectAtXY = function(a, e, c) {
          var b = null;
          if (c = this.getDataPointAtXY(a, e, c || false)) b = c.dataSeries.dataPointIds[c.dataPointIndex];
          else if (r) b = bb(a, e, this._eventManager.ghostCtx);
          else for (c = 0; c < this.legend.items.length; c++) {
            var d = this.legend.items[c];
            a >= d.x1 && a <= d.x2 && e >= d.y1 && e <= d.y2 && (b = d.id);
          }
          return b;
        };
        x.prototype.getAutoFontSize = ob;
        x.prototype.resetOverlayedCanvas = function() {
          this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
        };
        x.prototype.clearCanvas = nb;
        x.prototype.attachEvent = function(a) {
          this._events.push(a);
        };
        x.prototype._touchEventHandler = function(a) {
          if (a.changedTouches && this.interactivityEnabled) {
            var e = [], c = a.changedTouches, b = c ? c[0] : a, d = null;
            switch (a.type) {
              case "touchstart":
              case "MSPointerDown":
                e = ["mousemove", "mousedown"];
                this._lastTouchData = Ra(b);
                this._lastTouchData.time = /* @__PURE__ */ new Date();
                break;
              case "touchmove":
              case "MSPointerMove":
                e = ["mousemove"];
                break;
              case "touchend":
              case "MSPointerUp":
                var h = this._lastTouchData && this._lastTouchData.time ? /* @__PURE__ */ new Date() - this._lastTouchData.time : 0, e = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > h ? ["mouseup", "click"] : ["mouseup"];
                break;
              default:
                return;
            }
            if (!(c && 1 < c.length)) {
              d = Ra(b);
              d.time = /* @__PURE__ */ new Date();
              try {
                var q = d.y - this._lastTouchData.y, h = d.time - this._lastTouchData.time;
                if (1 < Math.abs(q) && this._lastTouchData.scroll || 5 < Math.abs(q) && 250 > h) this._lastTouchData.scroll = true, this.stockChart && (this.stockChart._chartScroll = true);
              } catch (u) {
              }
              this._lastTouchEventType = a.type;
              if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = false;
              else for (c = 0; c < e.length; c++) if (d = e[c], q = document.createEvent("MouseEvent"), q.initMouseEvent(d, true, true, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, false, false, false, false, 0, null), b.target.dispatchEvent(q), !l(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < h || "click" === d) a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault(), this.stockChart && (this.stockChart._chartScroll = null);
            }
          }
        };
        x.prototype._dispatchRangeEvent = function(a, e) {
          var c = {
            chart: this
          };
          c.type = a;
          c.trigger = e;
          var b = [];
          this.axisX && 0 < this.axisX.length && b.push("axisX");
          this.axisX2 && 0 < this.axisX2.length && b.push("axisX2");
          this.axisY && 0 < this.axisY.length && b.push("axisY");
          this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
          for (var d = 0; d < b.length; d++) if (l(c[b[d]]) && (c[b[d]] = []), "axisY" === b[d]) for (var h = 0; h < this.axisY.length; h++) c[b[d]].push({
            viewportMinimum: this[b[d]][h].sessionVariables.newViewportMinimum,
            viewportMaximum: this[b[d]][h].sessionVariables.newViewportMaximum
          });
          else if ("axisY2" === b[d]) for (h = 0; h < this.axisY2.length; h++) c[b[d]].push({
            viewportMinimum: this[b[d]][h].sessionVariables.newViewportMinimum,
            viewportMaximum: this[b[d]][h].sessionVariables.newViewportMaximum
          });
          else if ("axisX" === b[d]) for (h = 0; h < this.axisX.length; h++) c[b[d]].push({
            viewportMinimum: this[b[d]][h].sessionVariables.newViewportMinimum,
            viewportMaximum: this[b[d]][h].sessionVariables.newViewportMaximum
          });
          else if ("axisX2" === b[d]) for (h = 0; h < this.axisX2.length; h++) c[b[d]].push({
            viewportMinimum: this[b[d]][h].sessionVariables.newViewportMinimum,
            viewportMaximum: this[b[d]][h].sessionVariables.newViewportMaximum
          });
          this.dispatchEvent(a, c, this);
        };
        x.prototype._mouseEventHandler = function(a) {
          function e() {
            x.capturedEventParam && (d = x.capturedEventParam, q = d.bounds, "mouseup" === b && (x.capturedEventParam = null, d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", d.chart._mouseEventHandler, false)), d.hasOwnProperty(b) && ("mouseup" !== b || d.chart.overlaidCanvas.releaseCapture ? a.target !== d.chart.overlaidCanvas && r || d[b].call(d.context, c.x, c.y) : a.target !== d.chart.overlaidCanvas && (d.chart.isDrag = false)));
          }
          "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
          var c = Ra(a), b = a.type, d, h;
          a.which ? h = 3 == a.which : a.button && (h = 2 == a.button);
          if (this._ignoreNextEvent) e(), this._ignoreNextEvent = false;
          else if (e(), this.interactivityEnabled) {
            a.preventManipulation && a.preventManipulation();
            a.preventDefault && a.preventDefault();
            var q;
            Ja && window.console && (window.console.log(b + " --> x: " + c.x + "; y:" + c.y), h && window.console.log(a.which), "mouseup" === b && window.console.log("mouseup"));
            if (!h) {
              if (!x.capturedEventParam && this._events) {
                for (h = 0; h < this._events.length; h++) if (this._events[h].hasOwnProperty(b)) if (d = this._events[h], q = d.bounds, c.x >= q.x1 && c.x <= q.x2 && c.y >= q.y1 && c.y <= q.y2) {
                  d[b].call(d.context, c.x, c.y);
                  "mousedown" === b && true === d.capture ? (x.capturedEventParam = d, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, false)) : "mouseup" === b && (d.chart.overlaidCanvas.releaseCapture ? d.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, false));
                  break;
                } else d = null;
                a.target.style.cursor = d && d.cursor ? d.cursor : this._defaultCursor;
              }
              h = this.plotArea;
              if (c.x < h.x1 || c.x > h.x2 || c.y < h.y1 || c.y > h.y2) {
                this.toolTip && this.toolTip.enabled ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", {
                  chart: this,
                  toolTip: this.toolTip
                }, this.toolTip)) : this.resetOverlayedCanvas();
                for (h = 0; h < this.axisX.length; h++) this.axisX[h].crosshair && this.axisX[h].crosshair.enabled && (this.axisX[h].crosshair.hide(), this.axisX[h].crosshair.dispatchEvent("hidden", {
                  chart: this,
                  axis: this.axisX[h].options
                }, this.axisX[h].crosshair));
                for (h = 0; h < this.axisX2.length; h++) this.axisX2[h].crosshair && this.axisX2[h].crosshair.enabled && (this.axisX2[h].crosshair.hide(), this.axisX2[h].crosshair.dispatchEvent("hidden", {
                  chart: this,
                  axis: this.axisX2[h].options
                }, this.axisX2[h].crosshair));
                for (h = 0; h < this.axisY.length; h++) this.axisY[h].crosshair && this.axisY[h].crosshair.enabled && (this.axisY[h].crosshair.hide(), this.axisY[h].crosshair.dispatchEvent("hidden", {
                  chart: this,
                  axis: this.axisY[h].options
                }, this.axisY[h].crosshair));
                for (h = 0; h < this.axisY2.length; h++) this.axisY2[h].crosshair && this.axisY2[h].crosshair.enabled && (this.axisY2[h].crosshair.hide(), this.axisY2[h].crosshair.dispatchEvent("hidden", {
                  chart: this,
                  axis: this.axisY2[h].options
                }, this.axisY2[h].crosshair));
              }
              this.sessionVariables.mouseX = c.x;
              this.sessionVariables.mouseY = c.y;
              this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a);
            }
          }
        };
        x.prototype._plotAreaMouseDown = function(a, e) {
          this.isDrag = true;
          this.dragStartPoint = {
            x: a,
            y: e
          };
        };
        x.prototype._plotAreaMouseUp = function(a, e) {
          if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
            var c = e - this.dragStartPoint.y, b = a - this.dragStartPoint.x, d = 0 <= this.zoomType.indexOf("x"), h = 0 <= this.zoomType.indexOf("y"), q = false;
            this.resetOverlayedCanvas();
            if ("xySwapped" === this.plotInfo.axisPlacement) var u = h, h = d, d = u;
            if (this.panEnabled || this.zoomEnabled) {
              if (this.panEnabled) for (d = h = 0; d < this._axes.length; d++) c = this._axes[d], c.logarithmic ? c.viewportMinimum < c.minimum ? (h = c.minimum / c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum * h, c.sessionVariables.newViewportMaximum = c.viewportMaximum * h, q = true) : c.viewportMaximum > c.maximum && (h = c.viewportMaximum / c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum / h, c.sessionVariables.newViewportMaximum = c.viewportMaximum / h, q = true) : c.viewportMinimum < c.minimum ? (h = c.minimum - c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum + h, c.sessionVariables.newViewportMaximum = c.viewportMaximum + h, q = true) : c.viewportMaximum > c.maximum && (h = c.viewportMaximum - c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum - h, c.sessionVariables.newViewportMaximum = c.viewportMaximum - h, q = true);
              else if ((!d || 2 < Math.abs(b)) && (!h || 2 < Math.abs(c)) && this.zoomEnabled) {
                if (!this.dragStartPoint) return;
                c = d ? this.dragStartPoint.x : this.plotArea.x1;
                b = h ? this.dragStartPoint.y : this.plotArea.y1;
                d = d ? a : this.plotArea.x2;
                h = h ? e : this.plotArea.y2;
                2 < Math.abs(c - d) && 2 < Math.abs(b - h) && this._zoomPanToSelectedRegion(c, b, d, h) && (q = true);
              }
              q && (this._ignoreNextEvent = true, this._dispatchRangeEvent("rangeChanging", "zoom"), this.stockChart && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = {
                stockChart: this.stockChart,
                source: "chart",
                index: this.stockChart.charts.indexOf(this),
                minimum: this.stockChart.sessionVariables._axisXMin,
                maximum: this.stockChart.sessionVariables._axisXMax
              }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && (this.stockChart.rangeUpdatedBy = "chart", this.stockChart._rangeEventParameter.type = "rangeChanged", this.stockChart.dispatchEvent("rangeChanged", this.stockChart._rangeEventParameter, this.stockChart)), q && this.zoomEnabled && "none" === this._zoomButton.style.display && (Na(this._zoomButton, this._resetButton), ta(this, this._zoomButton, "pan"), ta(this, this._resetButton, "reset")));
            }
          }
          this.isDrag = false;
          if ("none" !== this.plotInfo.axisPlacement) {
            this.resetOverlayedCanvas();
            if (this.axisX && 0 < this.axisX.length) for (q = 0; q < this.axisX.length; q++) this.axisX[q].crosshair && this.axisX[q].crosshair.enabled && this.axisX[q].renderCrosshair(a, e);
            if (this.axisX2 && 0 < this.axisX2.length) for (q = 0; q < this.axisX2.length; q++) this.axisX2[q].crosshair && this.axisX2[q].crosshair.enabled && this.axisX2[q].renderCrosshair(a, e);
            if (this.axisY && 0 < this.axisY.length) for (q = 0; q < this.axisY.length; q++) this.axisY[q].crosshair && this.axisY[q].crosshair.enabled && this.axisY[q].renderCrosshair(a, e);
            if (this.axisY2 && 0 < this.axisY2.length) for (q = 0; q < this.axisY2.length; q++) this.axisY2[q].crosshair && this.axisY2[q].crosshair.enabled && this.axisY2[q].renderCrosshair(a, e);
            if (this.axisX && 0 < this.axisX.length) for (q = 0; q < this.axisX.length; q++) this.axisX[q].crosshair && this.axisX[q].crosshair.enabled && this.axisX[q].crosshair.renderLabel();
            if (this.axisX2 && 0 < this.axisX2.length) for (q = 0; q < this.axisX2.length; q++) this.axisX2[q].crosshair && this.axisX2[q].crosshair.enabled && this.axisX2[q].crosshair.renderLabel();
            if (this.axisY && 0 < this.axisY.length) for (q = 0; q < this.axisY.length; q++) this.axisY[q].crosshair && this.axisY[q].crosshair.enabled && this.axisY[q].crosshair.renderLabel();
            if (this.axisY2 && 0 < this.axisY2.length) for (q = 0; q < this.axisY2.length; q++) this.axisY2[q].crosshair && this.axisY2[q].crosshair.enabled && this.axisY2[q].crosshair.renderLabel();
          }
        };
        x.prototype._plotAreaMouseMove = function(a, e) {
          if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var c = 0, b = 0, d = c = null, d = 0 <= this.zoomType.indexOf("x"), h = 0 <= this.zoomType.indexOf("y"), q = this;
            "xySwapped" === this.plotInfo.axisPlacement && (c = h, h = d, d = c);
            c = this.dragStartPoint.x - a;
            b = this.dragStartPoint.y - e;
            if (2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled)) {
              this.toolTip.hide();
              this.toolTip && this.toolTip.enabled && this.toolTip.dispatchEvent("hidden", {
                chart: this,
                toolTip: this.toolTip
              }, this.toolTip);
              for (var u = 0; u < this.axisX.length; u++) this.axisX[u].crosshair && this.axisX[u].crosshair.enabled && (this.axisX[u].crosshair.hide(), this.axisX[u].crosshair.dispatchEvent("hidden", {
                chart: this,
                axis: this.axisX[u].options
              }, this.axisX[u].crosshair));
              for (u = 0; u < this.axisX2.length; u++) this.axisX2[u].crosshair && this.axisX2[u].crosshair.enabled && (this.axisX2[u].crosshair.hide(), this.axisX2[u].crosshair.dispatchEvent("hidden", {
                chart: this,
                axis: this.axisX2[u].options
              }, this.axisX2[u].crosshair));
              for (u = 0; u < this.axisY.length; u++) this.axisY[u].crosshair && this.axisY[u].crosshair.enabled && (this.axisY[u].crosshair.hide(), this.axisY[u].crosshair.dispatchEvent("hidden", {
                chart: this,
                axis: this.axisY[u].options
              }, this.axisY[u].crosshair));
              for (u = 0; u < this.axisY2.length; u++) this.axisY2[u].crosshair && this.axisY2[u].crosshair.enabled && (this.axisY2[u].crosshair.hide(), this.axisY2[u].crosshair.dispatchEvent("hidden", {
                chart: this,
                axis: this.axisY2[u].options
              }, this.axisY2[u].crosshair));
            } else this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, e);
            if ((!d || 2 < Math.abs(c) || !h || 2 < Math.abs(b)) && (this.panEnabled || this.zoomEnabled)) {
              if (this.panEnabled) d = {
                x1: d ? this.plotArea.x1 + c : this.plotArea.x1,
                y1: h ? this.plotArea.y1 + b : this.plotArea.y1,
                x2: d ? this.plotArea.x2 + c : this.plotArea.x2,
                y2: h ? this.plotArea.y2 + b : this.plotArea.y2
              }, clearTimeout(q._panTimerId), q._panTimerId = setTimeout(/* @__PURE__ */ function(b2, c2, d2, g) {
                return function() {
                  q._zoomPanToSelectedRegion(b2, c2, d2, g, true) && (q._dispatchRangeEvent("rangeChanging", "pan"), q.stockChart && (q.stockChart._rangeEventParameter.type = "rangeChanging", q.stockChart.dispatchEvent("rangeChanging", q.stockChart._rangeEventParameter, q.stockChart)), q.render(), q._dispatchRangeEvent("rangeChanged", "pan"), q.stockChart && (q.stockChart._rangeEventParameter.type = "rangeChanged", q.stockChart.dispatchEvent("rangeChanged", q.stockChart._rangeEventParameter, q.stockChart)), q.dragStartPoint.x = a, q.dragStartPoint.y = e);
                };
              }(d.x1, d.y1, d.x2, d.y2), 0);
              else if (this.zoomEnabled) {
                this.resetOverlayedCanvas();
                c = this.overlaidCanvasCtx.globalAlpha;
                this.overlaidCanvasCtx.fillStyle = "#A89896";
                var b = d ? this.dragStartPoint.x : this.plotArea.x1, u = h ? this.dragStartPoint.y : this.plotArea.y1, l2 = d ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1, k = h ? e - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                this.validateRegion(b, u, d ? a : this.plotArea.x2 - this.plotArea.x1, h ? e : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                this.overlaidCanvasCtx.globalAlpha = 0.7;
                this.overlaidCanvasCtx.fillRect(b, u, l2, k);
                this.overlaidCanvasCtx.globalAlpha = c;
              }
            }
          } else if (this.toolTip.mouseMoveHandler(a, e), "none" !== this.plotInfo.axisPlacement) {
            this.sessionVariables.crosshairShownByPixel = true;
            if (this.axisX && 0 < this.axisX.length) for (d = 0; d < this.axisX.length; d++) this.axisX[d].crosshair && this.axisX[d].crosshair.enabled && this.axisX[d].renderCrosshair(a, e);
            if (this.axisX2 && 0 < this.axisX2.length) for (d = 0; d < this.axisX2.length; d++) this.axisX2[d].crosshair && this.axisX2[d].crosshair.enabled && this.axisX2[d].renderCrosshair(a, e);
            if (this.axisY && 0 < this.axisY.length) for (d = 0; d < this.axisY.length; d++) this.axisY[d].crosshair && this.axisY[d].crosshair.enabled && this.axisY[d].renderCrosshair(a, e);
            if (this.axisY2 && 0 < this.axisY2.length) for (d = 0; d < this.axisY2.length; d++) this.axisY2[d].crosshair && this.axisY2[d].crosshair.enabled && this.axisY2[d].renderCrosshair(a, e);
            if (this.axisX && 0 < this.axisX.length) for (d = 0; d < this.axisX.length; d++) this.axisX[d].crosshair && this.axisX[d].crosshair.enabled && this.axisX[d].crosshair.renderLabel();
            if (this.axisX2 && 0 < this.axisX2.length) for (d = 0; d < this.axisX2.length; d++) this.axisX2[d].crosshair && this.axisX2[d].crosshair.enabled && this.axisX2[d].crosshair.renderLabel();
            if (this.axisY && 0 < this.axisY.length) for (d = 0; d < this.axisY.length; d++) this.axisY[d].crosshair && this.axisY[d].crosshair.enabled && this.axisY[d].crosshair.renderLabel();
            if (this.axisY2 && 0 < this.axisY2.length) for (d = 0; d < this.axisY2.length; d++) this.axisY2[d].crosshair && this.axisY2[d].crosshair.enabled && this.axisY2[d].crosshair.renderLabel();
          }
        };
        x.prototype._zoomPanToSelectedRegion = function(a, e, c, b, d) {
          a = this.validateRegion(a, e, c, b, d);
          e = a.axesWithValidRange;
          c = a.axesRanges;
          if (a.isValid) for (b = 0; b < e.length; b++) d = c[b], e[b].setViewPortRange(d.val1, d.val2), this.syncCharts && "y" != this.zoomType && this.syncCharts(d.val1, d.val2), this.stockChart && (this.stockChart._rangeEventParameter = {
            stockChart: this.stockChart,
            source: "chart",
            index: this.stockChart.charts.indexOf(this),
            minimum: d.val1,
            maximum: d.val2
          });
          return a.isValid;
        };
        x.prototype.validateRegion = function(a, e, c, b, d) {
          d = d || false;
          for (var h = 0 <= this.zoomType.indexOf("x"), q = 0 <= this.zoomType.indexOf("y"), u = false, l2 = [], k = [], m = [], n = 0; n < this._axes.length; n++) ("axisX" === this._axes[n].type && h || "axisY" === this._axes[n].type && q) && k.push(this._axes[n]);
          for (q = 0; q < k.length; q++) {
            var n = k[q], h = false, p = n.convertPixelToValue({
              x: a,
              y: e
            }), g = n.convertPixelToValue({
              x: c,
              y: b
            });
            if (p > g) var f2 = g, g = p, p = f2;
            if (n.scaleBreaks) for (f2 = 0; !h && f2 < n.scaleBreaks._appliedBreaks.length; f2++) h = n.scaleBreaks._appliedBreaks[f2].startValue <= p && n.scaleBreaks._appliedBreaks[f2].endValue >= g;
            if (isFinite(n.dataInfo.minDiff)) {
              if (f2 = n.getApparentDifference(p, g, null, true), !(h || !(this.panEnabled && n.scaleBreaks && n.scaleBreaks._appliedBreaks.length) && (n.logarithmic && f2 < Math.pow(n.dataInfo.minDiff, 3) || !n.logarithmic && f2 < 3 * Math.abs(n.dataInfo.minDiff)) || p < n.minimum || g > n.maximum)) l2.push(n), m.push({
                val1: p,
                val2: g
              }), u = true;
              else if (!d) {
                u = false;
                break;
              }
            }
          }
          return {
            isValid: u,
            axesWithValidRange: l2,
            axesRanges: m
          };
        };
        x.prototype.preparePlotArea = function() {
          var a = this.plotArea;
          !r && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
          if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
            var e = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
            if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
              var c = this.axisY[0];
              a.x1 = e.x1 < e.x2 ? e.x1 : c.lineCoordinates.x1;
              a.y1 = e.y1 < c.lineCoordinates.y1 ? e.y1 : c.lineCoordinates.y1;
              a.x2 = e.x2 > c.lineCoordinates.x2 ? e.x2 : c.lineCoordinates.x2;
              a.y2 = e.y1 > c.lineCoordinates.y2 ? e.y1 : c.lineCoordinates.y2;
              a.width = a.x2 - a.x1;
              a.height = a.y2 - a.y1;
            }
            this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (c = this.axisY2[0], a.x1 = e.x1 < e.x2 ? e.x1 : c.lineCoordinates.x1, a.y1 = e.y1 < c.lineCoordinates.y1 ? e.y1 : c.lineCoordinates.y1, a.x2 = e.x2 > c.lineCoordinates.x2 ? e.x2 : c.lineCoordinates.x2, a.y2 = e.y2 > c.lineCoordinates.y2 ? e.y2 : c.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1);
          } else e = this.layoutManager.getFreeSpace(), a.x1 = e.x1, a.x2 = e.x2, a.y1 = e.y1, a.y2 = e.y2, a.width = e.width, a.height = e.height;
          r || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
          a.layoutManager = new Ga(a.x1, a.y1, a.x2, a.y2, 2);
        };
        x.prototype.renderIndexLabels = function(a) {
          var e = a || this.plotArea.ctx, c = this.plotArea, b = 0, d = 0, h = 0, q = d = h = 0, u = 0, f2 = b = 0, k = 0;
          for (a = 0; a < this._indexLabels.length; a++) {
            var m = this._indexLabels[a], n = m.chartType.toLowerCase(), p, g, u = ka("indexLabelFontColor", m.dataPoint, m.dataSeries), C = ka("indexLabelFontSize", m.dataPoint, m.dataSeries), f2 = ka("indexLabelFontFamily", m.dataPoint, m.dataSeries), k = ka("indexLabelFontStyle", m.dataPoint, m.dataSeries);
            p = ka("indexLabelFontWeight", m.dataPoint, m.dataSeries);
            var w = ka("indexLabelBackgroundColor", m.dataPoint, m.dataSeries);
            g = ka("indexLabelBorderColor", m.dataPoint, m.dataSeries);
            var h = ka("indexLabelBorderThickness", m.dataPoint, m.dataSeries), d = ka("indexLabelMaxWidth", m.dataPoint, m.dataSeries), q = ka("indexLabelWrap", m.dataPoint, m.dataSeries), y = ka("indexLabelLineDashType", m.dataPoint, m.dataSeries), s = ka("indexLabelLineColor", m.dataPoint, m.dataSeries), z = l(m.dataPoint.indexLabelLineThickness) ? l(m.dataSeries.options.indexLabelLineThickness) ? 0 : m.dataSeries.options.indexLabelLineThickness : m.dataPoint.indexLabelLineThickness, b = 0 < z ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0, v = ka("indexLabelPadding", m.dataPoint, m.dataSeries), J = {
              percent: null,
              total: null
            }, G = null;
            if (0 <= m.dataSeries.type.indexOf("stacked") || "pie" === m.dataSeries.type || "doughnut" === m.dataSeries.type) J = this.getPercentAndTotal(m.dataSeries, m.dataPoint);
            if (m.dataSeries.indexLabelFormatter || m.dataPoint.indexLabelFormatter) G = {
              chart: this,
              dataSeries: m.dataSeries,
              dataPoint: m.dataPoint,
              index: m.indexKeyword,
              total: J.total,
              percent: J.percent
            };
            var Z = m.dataPoint.indexLabelFormatter ? m.dataPoint.indexLabelFormatter(G) : m.dataPoint.indexLabel ? this.replaceKeywordsWithValue(m.dataPoint.indexLabel, m.dataPoint, m.dataSeries, null, m.indexKeyword) : m.dataSeries.indexLabelFormatter ? m.dataSeries.indexLabelFormatter(G) : m.dataSeries.indexLabel ? this.replaceKeywordsWithValue(m.dataSeries.indexLabel, m.dataPoint, m.dataSeries, null, m.indexKeyword) : null;
            if (null !== Z && "" !== Z) {
              var J = ka("indexLabelPlacement", m.dataPoint, m.dataSeries), G = ka("indexLabelOrientation", m.dataPoint, m.dataSeries), x2 = ka("indexLabelTextAlign", m.dataPoint, m.dataSeries), t3 = m.direction, L = m.dataSeries.axisX, M = m.dataSeries.axisY, ca = false, w = new la(e, {
                x: 0,
                y: 0,
                maxWidth: d ? d : 0.5 * this.width,
                maxHeight: q ? 5 * C : 1.5 * C,
                angle: "horizontal" === G ? 0 : -90,
                text: Z,
                padding: v,
                backgroundColor: w,
                borderColor: g,
                borderThickness: h,
                textAlign: x2,
                fontSize: C,
                fontFamily: f2,
                fontWeight: p,
                fontColor: u,
                fontStyle: k,
                textBaseline: "middle"
              });
              w.measureText();
              m.dataSeries.indexLabelMaxWidth = w.maxWidth;
              if ("stackedarea100" === n) {
                if (m.point.x < c.x1 || m.point.x > c.x2 || m.point.y < c.y1 - 1 || m.point.y > c.y2 + 1) continue;
              } else if ("rangearea" === n || "rangesplinearea" === n) {
                if (m.dataPoint.x < L.viewportMinimum || m.dataPoint.x > L.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < M.viewportMinimum || Math.min.apply(null, m.dataPoint.y) > M.viewportMaximum) continue;
              } else if (0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("bubble") || 0 <= n.indexOf("scatter")) {
                if (m.dataPoint.x < L.viewportMinimum || m.dataPoint.x > L.viewportMaximum || m.dataPoint.y < M.viewportMinimum || m.dataPoint.y > M.viewportMaximum) continue;
              } else if (0 <= n.indexOf("column")) {
                if (m.dataPoint.x < L.viewportMinimum || m.dataPoint.x > L.viewportMaximum || (0 < m.dataPoint.y.length ? Math.max.apply(null, m.dataPoint.y) : m.dataPoint.y) < M.viewportMinimum || (0 < m.dataPoint.y.length ? Math.max.apply(null, m.dataPoint.y) : m.dataPoint.y) > M.viewportMaximum) continue;
              } else if ("waterfall" === n || "error" === n && !m.axisSwapped) {
                if (m.dataPoint.x < L.viewportMinimum || m.dataPoint.x > L.viewportMaximum || m.bounds.y1 > c.y2 || m.bounds.y2 < c.y1) continue;
              } else if (0 <= n.indexOf("bar") || "error" === n) {
                if (m.dataPoint.x < L.viewportMinimum || m.dataPoint.x > L.viewportMaximum || m.bounds.x1 > c.x2 || m.bounds.x2 < c.x1) continue;
              } else if ("candlestick" === n || "ohlc" === n) {
                if (m.dataPoint.x < L.viewportMinimum || m.dataPoint.x > L.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < M.viewportMinimum || Math.min.apply(null, m.dataPoint.y) > M.viewportMaximum) continue;
              } else if (m.dataPoint.x < L.viewportMinimum || m.dataPoint.x > L.viewportMaximum) continue;
              q = u = 2;
              "horizontal" === G ? (f2 = w.width, k = w.height) : (k = w.width, f2 = w.height);
              if ("normal" === this.plotInfo.axisPlacement) {
                if (0 <= n.indexOf("line") || 0 <= n.indexOf("area")) J = "auto", u = 4;
                else if (0 <= n.indexOf("stacked")) "auto" === J && (J = "inside");
                else if ("bubble" === n || "scatter" === n) J = "inside";
                p = m.point.x - f2 / 2 + ("horizontal" === G ? 0 : w._lineHeight / 2);
                if ("inside" !== J) d = c.y1, h = c.y2, 0 < t3 ? (g = m.point.y + w._lineHeight / 2 - k - u - b, g < d && (g = "auto" === J ? Math.max(m.point.y, d) + w._lineHeight / 2 + u + b : d + w._lineHeight / 2 + u + b, ca = g + ("horizontal" === G ? k - w._lineHeight / 2 : 0) > m.point.y, !ca || 0 <= n.indexOf("line") || 0 <= n.indexOf("area") || (g -= b))) : (g = m.point.y + w._lineHeight / 2 + u + b, g > h - k + w._lineHeight / 2 - u && (g = "auto" === J ? Math.min(m.point.y, h) + w._lineHeight / 2 - k - u - b : h + w._lineHeight / 2 - k - u - b, ca = g - ("horizontal" === G ? w._lineHeight / 2 : k) < m.point.y, !ca || 0 <= n.indexOf("line") || 0 <= n.indexOf("area") || (g += b)));
                else {
                  Math.max(m.bounds.y1, c.y1);
                  h = Math.min(m.bounds.y2, c.y2) - k + w._lineHeight / 2;
                  b = 0 <= n.indexOf("range") || "error" === n ? 0 < t3 ? Math.max(m.bounds.y1, c.y1) + w._lineHeight / 2 + u : Math.min(m.bounds.y2, c.y2) + w._lineHeight / 2 - k - u : (Math.max(m.bounds.y1, c.y1) + Math.min(m.bounds.y2, c.y2)) / 2 - k / 2 + w._lineHeight / 2;
                  if (0 < t3) {
                    if (g = b, "bubble" === n || "scatter" === n) g = m.point.y - k / 2 + w._lineHeight / 2, k > m.bounds.y2 - m.bounds.y1 && (g -= k / 2 + u), 0 > g - w._lineHeight / 2 && (g += Math.abs(g - w._lineHeight / 2) <= (m.bounds.y2 - m.bounds.y1) / 2 + u ? Math.abs(g - w._lineHeight / 2) : (m.bounds.y2 - m.bounds.y1) / 2 + u);
                  } else g = Math.min(m.point.y, b), g > h - k - u && ("bubble" === n || "scatter" === n) && (g = Math.min(m.point.y + u, c.y2 - k - u));
                  g = Math.min(g, h);
                }
              } else 0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("scatter") ? (J = "auto", q = 4) : 0 <= n.indexOf("stacked") ? "auto" === J && (J = "inside") : "bubble" === n && (J = "inside"), g = m.point.y + w._lineHeight / 2 - k / 2, "inside" !== J ? (h = c.x1, d = c.x2, 0 > t3 ? (p = m.point.x - f2 + ("horizontal" === G ? 0 : w._lineHeight / 2) - q - b, ("horizontal" === G ? p : p - w._lineHeight / 2) < h && (p = "auto" === J ? Math.max(m.point.x, h) + ("horizontal" === G ? 0 : w._lineHeight / 2) + u + b : h + ("horizontal" === G ? 0 : w._lineHeight / 2) + q, (ca = p + f2 - ("horizontal" === G ? 0 : w._lineHeight / 2) > m.point.x) && (p -= b))) : (p = m.point.x + ("horizontal" === G ? 0 : w._lineHeight / 2) + q + b, ("horizontal" === G ? p : p - w._lineHeight / 2) > d - f2 - q - b && (p = "auto" === J ? Math.min(m.point.x, d) - ("horizontal" === G ? f2 : f2 - w._lineHeight / 2) - q - b : d - f2 - q + ("horizontal" === G ? 0 : w._lineHeight / 2), (ca = p - ("horizontal" === G ? 0 : w._lineHeight / 2) < m.point.x) && (p += b)))) : (h = Math.max(m.bounds.x1, c.x1), Math.min(m.bounds.x2, c.x2), b = 0 <= n.indexOf("range") || "error" === n ? 0 > t3 ? Math.max(m.bounds.x1, c.x1) : Math.min(m.bounds.x2, c.x2) - f2 - q + ("horizontal" === G ? 0 : w._lineHeight / 2) : (Math.max(m.bounds.x1, c.x1) + Math.min(m.bounds.x2, c.x2)) / 2 - f2 / 2 + ("horizontal" === G ? 0 : w._lineHeight / 2), p = 0 > t3 ? b : Math.min(m.point.x, b), p = Math.max(p, h + ("horizontal" === G ? 0 : w._lineHeight / 2 + u)));
              "vertical" === G && (g += k - w._lineHeight / 2, 0 <= "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(n) && (ca = 0 < t3 ? g + ("horizontal" === G ? k - w._lineHeight / 2 : 0) > m.point.y : g - ("horizontal" === G ? w._lineHeight / 2 : k) < m.point.y), "bubble" === n || "scatter" === n) && (p += w._lineHeight / 2 - C / 2);
              w.x = p;
              w.y = g;
              w.render(true);
              z && "inside" !== J && (0 > n.indexOf("bar") && ("error" !== n || !m.axisSwapped) && m.point.x > c.x1 && m.point.x < c.x2 || !ca) && (-1 === "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(n) && ("error" !== n || m.axisSwapped) && m.point.y > c.y1 && m.point.y < c.y2 || !ca) && (e.lineWidth = z, e.strokeStyle = s ? s : "gray", e.setLineDash && e.setLineDash(I(y, z)), e.beginPath(), e.moveTo(m.point.x, m.point.y), 0 <= n.indexOf("bar") || "error" === n && m.axisSwapped ? e.lineTo(p + (0 < m.direction ? 0 : f2) + ("vertical" === G ? -w._lineHeight / 2 : 0), g + ("vertical" === G ? -k / 2 : k / 2 - w._lineHeight / 2)) : 0 <= n.indexOf("column") || "error" === n && !m.axisSwapped ? e.lineTo(p + f2 / 2 - ("horizontal" === G ? 0 : w._lineHeight / 2), g + ("vertical" === G ? g - k < m.point.y ? 0 : -k : (g - w._lineHeight / 2 < m.point.y ? k : 0) - w._lineHeight / 2)) : 0 <= n.indexOf("waterfall") ? e.lineTo(p + f2 / 2 - ("horizontal" === G ? 0 : w._lineHeight / 2), "vertical" === G ? 0 < t3 && g < m.point.y ? g : 0 > t3 && g - k > m.point.y ? g - k : m.point.y : 0 < t3 && g + k - w._lineHeight / 2 < m.point.y ? g + k - w._lineHeight / 2 : 0 > t3 && g - w._lineHeight / 2 > m.point.y ? g - w._lineHeight / 2 : m.point.y) : e.lineTo(p + f2 / 2 - ("horizontal" === G ? 0 : w._lineHeight / 2), g + ("vertical" === G ? g - k < m.point.y ? 0 : -k : (g + k - w._lineHeight / 2 < m.point.y ? k : 0) - w._lineHeight / 2)), e.stroke());
            }
          }
          e = {
            source: e,
            dest: this.plotArea.ctx,
            animationCallback: R.fadeInAnimation,
            easingFunction: R.easing.easeInQuad,
            animationBase: 0,
            startTimePercent: 0.7
          };
          for (a = 0; a < this._indexLabels.length; a++) m = this._indexLabels[a], w = ka("indexLabelBackgroundColor", m.dataPoint, m.dataSeries), m.dataSeries.indexLabelBackgroundColor = l(w) ? r ? "transparent" : null : w;
          return e;
        };
        x.prototype.renderLine = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var d = this.plotArea;
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            for (var h = [], q, u = 0; u < a.dataSeriesIndexes.length; u++) {
              var l2 = a.dataSeriesIndexes[u], k = this.data[l2];
              c.lineWidth = k.lineThickness;
              var m = k.dataPoints, n = "solid";
              if (c.setLineDash) {
                var p = I(k.nullDataLineDashType, k.lineThickness), n = k.lineDashType, g = I(n, k.lineThickness);
                c.setLineDash(g);
              }
              var f2 = k.id;
              this._eventManager.objectMap[f2] = {
                objectType: "dataSeries",
                dataSeriesIndex: l2
              };
              f2 = V(f2);
              b.strokeStyle = f2;
              b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var f2 = k._colorSet, w = f2 = k.lineColor = k.options.lineColor ? k.options.lineColor : f2[0];
              c.strokeStyle = f2;
              var y = true, s = 0, z, v;
              c.beginPath();
              if (0 < m.length) {
                for (var J = false, s = 0; s < m.length; s++) if (z = m[s].x.getTime ? m[s].x.getTime() : m[s].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !J))) if ("number" !== typeof m[s].y) 0 < s && !(k.connectNullData || J || y) && (c.stroke(), r && b.stroke()), J = true;
                else {
                  z = a.axisX.convertValueToPixel(z);
                  v = a.axisY.convertValueToPixel(m[s].y);
                  var G = k.dataPointIds[s];
                  this._eventManager.objectMap[G] = {
                    id: G,
                    objectType: "dataPoint",
                    dataSeriesIndex: l2,
                    dataPointIndex: s,
                    x1: z,
                    y1: v
                  };
                  y || J ? (!y && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || n === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(q.x, q.y), n = k.nullDataLineDashType, c.setLineDash(p)), c.lineTo(z, v), r && b.lineTo(z, v)) : (c.beginPath(), c.moveTo(z, v), r && (b.beginPath(), b.moveTo(z, v))), J = y = false) : (c.lineTo(z, v), r && b.lineTo(z, v), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(z, v), r && (b.stroke(), b.beginPath(), b.moveTo(z, v))));
                  q = {
                    x: z,
                    y: v
                  };
                  s < m.length - 1 && (w !== (m[s].lineColor || f2) || n !== (m[s].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(z, v), w = m[s].lineColor || f2, c.strokeStyle = w, c.setLineDash && (m[s].lineDashType ? (n = m[s].lineDashType, c.setLineDash(I(n, k.lineThickness))) : (n = k.lineDashType, c.setLineDash(g))));
                  if (0 !== m[s].markerSize && (0 < m[s].markerSize || 0 < k.markerSize)) {
                    var Z = k.getMarkerProperties(s, z, v, c);
                    h.push(Z);
                    G = V(G);
                    r && h.push({
                      x: z,
                      y: v,
                      ctx: b,
                      type: Z.type,
                      size: Z.size,
                      color: G,
                      borderColor: G,
                      borderThickness: Z.borderThickness
                    });
                  }
                  (m[s].indexLabel || k.indexLabel || m[s].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "line",
                    dataPoint: m[s],
                    dataSeries: k,
                    point: {
                      x: z,
                      y: v
                    },
                    direction: 0 > m[s].y === a.axisY.reversed ? 1 : -1,
                    color: f2
                  });
                }
                c.stroke();
                r && b.stroke();
              }
            }
            ba.drawMarkers(h);
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), b.beginPath());
            c.restore();
            c.beginPath();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.xClipAnimation,
              easingFunction: R.easing.linear,
              animationBase: 0
            };
          }
        };
        x.prototype.renderStepLine = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var d = this.plotArea;
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            for (var h = [], q, u = 0; u < a.dataSeriesIndexes.length; u++) {
              var l2 = a.dataSeriesIndexes[u], k = this.data[l2];
              c.lineWidth = k.lineThickness;
              var m = k.dataPoints, n = "solid";
              if (c.setLineDash) {
                var p = I(k.nullDataLineDashType, k.lineThickness), n = k.lineDashType, g = I(n, k.lineThickness);
                c.setLineDash(g);
              }
              var f2 = k.id;
              this._eventManager.objectMap[f2] = {
                objectType: "dataSeries",
                dataSeriesIndex: l2
              };
              f2 = V(f2);
              b.strokeStyle = f2;
              b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var f2 = k._colorSet, w = f2 = k.lineColor = k.options.lineColor ? k.options.lineColor : f2[0];
              c.strokeStyle = f2;
              var y = true, s = 0, z, v;
              c.beginPath();
              if (0 < m.length) {
                for (var J = false, s = 0; s < m.length; s++) if (z = m[s].getTime ? m[s].x.getTime() : m[s].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !J))) if ("number" !== typeof m[s].y) 0 < s && !(k.connectNullData || J || y) && (c.stroke(), r && b.stroke()), J = true;
                else {
                  var G = v;
                  z = a.axisX.convertValueToPixel(z);
                  v = a.axisY.convertValueToPixel(m[s].y);
                  var Z = k.dataPointIds[s];
                  this._eventManager.objectMap[Z] = {
                    id: Z,
                    objectType: "dataPoint",
                    dataSeriesIndex: l2,
                    dataPointIndex: s,
                    x1: z,
                    y1: v
                  };
                  y || J ? (!y && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || n === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(q.x, q.y), n = k.nullDataLineDashType, c.setLineDash(p)), c.lineTo(z, G), c.lineTo(z, v), r && (b.lineTo(z, G), b.lineTo(z, v))) : (c.beginPath(), c.moveTo(z, v), r && (b.beginPath(), b.moveTo(z, v))), J = y = false) : (c.lineTo(z, G), r && b.lineTo(z, G), c.lineTo(z, v), r && b.lineTo(z, v), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(z, v), r && (b.stroke(), b.beginPath(), b.moveTo(z, v))));
                  q = {
                    x: z,
                    y: v
                  };
                  s < m.length - 1 && (w !== (m[s].lineColor || f2) || n !== (m[s].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(z, v), w = m[s].lineColor || f2, c.strokeStyle = w, c.setLineDash && (m[s].lineDashType ? (n = m[s].lineDashType, c.setLineDash(I(n, k.lineThickness))) : (n = k.lineDashType, c.setLineDash(g))));
                  0 !== m[s].markerSize && (0 < m[s].markerSize || 0 < k.markerSize) && (G = k.getMarkerProperties(s, z, v, c), h.push(G), Z = V(Z), r && h.push({
                    x: z,
                    y: v,
                    ctx: b,
                    type: G.type,
                    size: G.size,
                    color: Z,
                    borderColor: Z,
                    borderThickness: G.borderThickness
                  }));
                  (m[s].indexLabel || k.indexLabel || m[s].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "stepLine",
                    dataPoint: m[s],
                    dataSeries: k,
                    point: {
                      x: z,
                      y: v
                    },
                    direction: 0 > m[s].y === a.axisY.reversed ? 1 : -1,
                    color: f2
                  });
                }
                c.stroke();
                r && b.stroke();
              }
            }
            ba.drawMarkers(h);
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), b.beginPath());
            c.restore();
            c.beginPath();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.xClipAnimation,
              easingFunction: R.easing.linear,
              animationBase: 0
            };
          }
        };
        x.prototype.renderSpline = function(a) {
          function e(a2) {
            a2 = t2(a2, 2);
            if (0 < a2.length) {
              b.beginPath();
              r && d.beginPath();
              b.moveTo(a2[0].x, a2[0].y);
              a2[0].newStrokeStyle && (b.strokeStyle = a2[0].newStrokeStyle);
              a2[0].newLineDashArray && b.setLineDash(a2[0].newLineDashArray);
              r && d.moveTo(a2[0].x, a2[0].y);
              for (var c2 = 0; c2 < a2.length - 3; c2 += 3) if (b.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), r && d.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), 0 < c2 && 0 === c2 % 3e3 || a2[c2 + 3].newStrokeStyle || a2[c2 + 3].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(a2[c2 + 3].x, a2[c2 + 3].y), a2[c2 + 3].newStrokeStyle && (b.strokeStyle = a2[c2 + 3].newStrokeStyle), a2[c2 + 3].newLineDashArray && b.setLineDash(a2[c2 + 3].newLineDashArray), r && (d.stroke(), d.beginPath(), d.moveTo(a2[c2 + 3].x, a2[c2 + 3].y));
              b.stroke();
              r && d.stroke();
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = r ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx;
            b.save();
            var h = this.plotArea;
            b.beginPath();
            b.rect(h.x1, h.y1, h.width, h.height);
            b.clip();
            for (var q = [], u = 0; u < a.dataSeriesIndexes.length; u++) {
              var l2 = a.dataSeriesIndexes[u], k = this.data[l2];
              b.lineWidth = k.lineThickness;
              var m = k.dataPoints, n = "solid";
              if (b.setLineDash) {
                var p = I(k.nullDataLineDashType, k.lineThickness), n = k.lineDashType, g = I(n, k.lineThickness);
                b.setLineDash(g);
              }
              var f2 = k.id;
              this._eventManager.objectMap[f2] = {
                objectType: "dataSeries",
                dataSeriesIndex: l2
              };
              f2 = V(f2);
              d.strokeStyle = f2;
              d.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var f2 = k._colorSet, w = f2 = k.lineColor = k.options.lineColor ? k.options.lineColor : f2[0];
              b.strokeStyle = f2;
              var y = 0, s, z, v = [];
              b.beginPath();
              if (0 < m.length) {
                for (z = false, y = 0; y < m.length; y++) if (s = m[y].getTime ? m[y].x.getTime() : m[y].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !z))) if ("number" !== typeof m[y].y) 0 < y && !z && (k.connectNullData ? b.setLineDash && 0 < v.length && (k.options.nullDataLineDashType || !m[y - 1].lineDashType) && (v[v.length - 1].newLineDashArray = p, n = k.nullDataLineDashType) : (e(v), v = [])), z = true;
                else {
                  s = a.axisX.convertValueToPixel(s);
                  z = a.axisY.convertValueToPixel(m[y].y);
                  var J = k.dataPointIds[y];
                  this._eventManager.objectMap[J] = {
                    id: J,
                    objectType: "dataPoint",
                    dataSeriesIndex: l2,
                    dataPointIndex: y,
                    x1: s,
                    y1: z
                  };
                  v[v.length] = {
                    x: s,
                    y: z
                  };
                  y < m.length - 1 && (w !== (m[y].lineColor || f2) || n !== (m[y].lineDashType || k.lineDashType)) && (w = m[y].lineColor || f2, v[v.length - 1].newStrokeStyle = w, b.setLineDash && (m[y].lineDashType ? (n = m[y].lineDashType, v[v.length - 1].newLineDashArray = I(n, k.lineThickness)) : (n = k.lineDashType, v[v.length - 1].newLineDashArray = g)));
                  if (0 !== m[y].markerSize && (0 < m[y].markerSize || 0 < k.markerSize)) {
                    var G = k.getMarkerProperties(y, s, z, b);
                    q.push(G);
                    J = V(J);
                    r && q.push({
                      x: s,
                      y: z,
                      ctx: d,
                      type: G.type,
                      size: G.size,
                      color: J,
                      borderColor: J,
                      borderThickness: G.borderThickness
                    });
                  }
                  (m[y].indexLabel || k.indexLabel || m[y].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "spline",
                    dataPoint: m[y],
                    dataSeries: k,
                    point: {
                      x: s,
                      y: z
                    },
                    direction: 0 > m[y].y === a.axisY.reversed ? 1 : -1,
                    color: f2
                  });
                  z = false;
                }
              }
              e(v);
            }
            ba.drawMarkers(q);
            r && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), d.beginPath());
            b.restore();
            b.beginPath();
            return {
              source: c,
              dest: this.plotArea.ctx,
              animationCallback: R.xClipAnimation,
              easingFunction: R.easing.linear,
              animationBase: 0
            };
          }
        };
        x.prototype.renderColumn = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, h = 0, q, u, l2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0, n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
            n = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > m && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
            !this.dataPointMaxWidth && this.dataPointMinWidth && m < h && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            n < h && (n = h);
            n > m && (n = m);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (m = 0; m < a.dataSeriesIndexes.length; m++) {
              var p = a.dataSeriesIndexes[m], g = this.data[p], f2 = g.dataPoints;
              if (0 < f2.length) {
                for (var w = 5 < n && g.bevelEnabled ? true : false, h = 0; h < f2.length; h++) if (f2[h].getTime ? l2 = f2[h].x.getTime() : l2 = f2[h].x, !(l2 < a.axisX.dataInfo.viewPortMin || l2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof f2[h].y) {
                  q = a.axisX.convertValueToPixel(l2);
                  u = a.axisY.convertValueToPixel(f2[h].y);
                  q = a.axisX.reversed ? q + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + m) * n << 0 : q - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + m) * n << 0;
                  var y = a.axisX.reversed ? q - n << 0 : q + n << 0, s;
                  0 <= f2[h].y ? s = k : (s = u, u = k);
                  u > s && (b = u, u = s, s = b);
                  b = f2[h].color ? f2[h].color : g._colorSet[h % g._colorSet.length];
                  ea(c, a.axisX.reversed ? y : q, u, a.axisX.reversed ? q : y, s, b, 0, null, w && (a.axisY.reversed ? 0 > f2[h].y : 0 <= f2[h].y), (a.axisY.reversed ? 0 <= f2[h].y : 0 > f2[h].y) && w, false, false, g.fillOpacity);
                  b = g.dataPointIds[h];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: p,
                    dataPointIndex: h,
                    x1: q,
                    y1: u,
                    x2: y,
                    y2: s
                  };
                  b = V(b);
                  r && ea(this._eventManager.ghostCtx, a.axisX.reversed ? y : q, u, a.axisX.reversed ? q : y, s, b, 0, null, false, false, false, false);
                  (f2[h].indexLabel || g.indexLabel || f2[h].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "column",
                    dataPoint: f2[h],
                    dataSeries: g,
                    point: {
                      x: q + (y - q) / 2,
                      y: 0 > f2[h].y === a.axisY.reversed ? u : s
                    },
                    direction: 0 > f2[h].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: q,
                      y1: Math.min(u, s),
                      x2: y,
                      y2: Math.max(u, s)
                    },
                    color: b
                  });
                }
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.yScaleAnimation,
              easingFunction: R.easing.easeOutQuart,
              animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k
            };
          }
        };
        x.prototype.renderStackedColumn = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, h = [], q = [], u = [], l2 = [], k = 0, m, n, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, g = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, f2 = a.axisX.dataInfo.minDiff;
            isFinite(f2) || (f2 = 0.3 * Math.abs(a.axisX.range));
            f2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(f2) / Math.log(a.axisX.range) : Math.abs(f2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > g && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g));
            !this.dataPointMaxWidth && this.dataPointMinWidth && g < k && (g = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            f2 < k && (f2 = k);
            f2 > g && (f2 = g);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (g = 0; g < a.dataSeriesIndexes.length; g++) {
              var w = a.dataSeriesIndexes[g], y = this.data[w], s = y.dataPoints;
              if (0 < s.length) {
                var z = 5 < f2 && y.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++) if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                  m = a.axisX.convertValueToPixel(b);
                  m = m - a.plotType.plotUnits.length * f2 / 2 + a.index * f2 << 0;
                  var v = m + f2 << 0, J;
                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) u[b] = s[k].y + (u[b] ? u[b] : 0), 0 < u[b] && (n = a.axisY.convertValueToPixel(u[b]), J = "undefined" !== typeof h[b] ? h[b] : p, h[b] = n);
                  else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y) l2[b] = s[k].y + (l2[b] ? l2[b] : 0), J = a.axisY.convertValueToPixel(l2[b]), n = "undefined" !== typeof q[b] ? q[b] : p, q[b] = J;
                  else if (n = a.axisY.convertValueToPixel(s[k].y), 0 <= s[k].y) {
                    var G = "undefined" !== typeof h[b] ? h[b] : 0;
                    n -= G;
                    J = p - G;
                    h[b] = G + (J - n);
                  } else G = q[b] ? q[b] : 0, J = n + G, n = p + G, q[b] = G + (J - n);
                  b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                  ea(c, m, a.axisY.reversed ? J : n, v, a.axisY.reversed ? n : J, b, 0, null, z && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y), (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && z, false, false, y.fillOpacity);
                  b = y.dataPointIds[k];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: w,
                    dataPointIndex: k,
                    x1: m,
                    y1: n,
                    x2: v,
                    y2: J
                  };
                  b = V(b);
                  r && ea(this._eventManager.ghostCtx, m, n, v, J, b, 0, null, false, false, false, false);
                  (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "stackedColumn",
                    dataPoint: s[k],
                    dataSeries: y,
                    point: {
                      x: m + (v - m) / 2,
                      y: 0 <= s[k].y ? n : J
                    },
                    direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: m,
                      y1: Math.min(n, J),
                      x2: v,
                      y2: Math.max(n, J)
                    },
                    color: b
                  });
                }
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.yScaleAnimation,
              easingFunction: R.easing.easeOutQuart,
              animationBase: p < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : p > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : p
            };
          }
        };
        x.prototype.renderStackedColumn100 = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, h = [], q = [], u = [], l2 = [], k = 0, m, n, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, g = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, f2 = a.axisX.dataInfo.minDiff;
            isFinite(f2) || (f2 = 0.3 * Math.abs(a.axisX.range));
            f2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(f2) / Math.log(a.axisX.range) : Math.abs(f2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > g && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g));
            !this.dataPointMaxWidth && this.dataPointMinWidth && g < k && (g = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            f2 < k && (f2 = k);
            f2 > g && (f2 = g);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (g = 0; g < a.dataSeriesIndexes.length; g++) {
              var w = a.dataSeriesIndexes[g], y = this.data[w], s = y.dataPoints;
              if (0 < s.length) {
                for (var z = 5 < f2 && y.bevelEnabled ? true : false, k = 0; k < s.length; k++) if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                  m = a.axisX.convertValueToPixel(b);
                  n = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                  m = m - a.plotType.plotUnits.length * f2 / 2 + a.index * f2 << 0;
                  var v = m + f2 << 0, J;
                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) {
                    u[b] = n + ("undefined" !== typeof u[b] ? u[b] : 0);
                    if (0 >= u[b]) continue;
                    n = a.axisY.convertValueToPixel(u[b]);
                    J = h[b] ? h[b] : p;
                    h[b] = n;
                  } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y) l2[b] = n + ("undefined" !== typeof l2[b] ? l2[b] : 0), J = a.axisY.convertValueToPixel(l2[b]), n = q[b] ? q[b] : p, q[b] = J;
                  else if (n = a.axisY.convertValueToPixel(n), 0 <= s[k].y) {
                    var G = "undefined" !== typeof h[b] ? h[b] : 0;
                    n -= G;
                    J = p - G;
                    a.dataSeriesIndexes.length - 1 === g && 1 >= Math.abs(d.y1 - n) && (n = d.y1);
                    h[b] = G + (J - n);
                  } else G = "undefined" !== typeof q[b] ? q[b] : 0, J = n + G, n = p + G, a.dataSeriesIndexes.length - 1 === g && 1 >= Math.abs(d.y2 - J) && (J = d.y2), q[b] = G + (J - n);
                  b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                  ea(c, m, a.axisY.reversed ? J : n, v, a.axisY.reversed ? n : J, b, 0, null, z && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y), (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && z, false, false, y.fillOpacity);
                  b = y.dataPointIds[k];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: w,
                    dataPointIndex: k,
                    x1: m,
                    y1: n,
                    x2: v,
                    y2: J
                  };
                  b = V(b);
                  r && ea(this._eventManager.ghostCtx, m, n, v, J, b, 0, null, false, false, false, false);
                  (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "stackedColumn100",
                    dataPoint: s[k],
                    dataSeries: y,
                    point: {
                      x: m + (v - m) / 2,
                      y: 0 <= s[k].y ? n : J
                    },
                    direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: m,
                      y1: Math.min(n, J),
                      x2: v,
                      y2: Math.max(n, J)
                    },
                    color: b
                  });
                }
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.yScaleAnimation,
              easingFunction: R.easing.easeOutQuart,
              animationBase: p < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : p > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : p
            };
          }
        };
        x.prototype.renderBar = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, h = 0, q, u, l2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0, n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
            n = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > m && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
            !this.dataPointMaxWidth && this.dataPointMinWidth && m < h && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            n < h && (n = h);
            n > m && (n = m);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (m = 0; m < a.dataSeriesIndexes.length; m++) {
              var p = a.dataSeriesIndexes[m], g = this.data[p], f2 = g.dataPoints;
              if (0 < f2.length) {
                var w = 5 < n && g.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (h = 0; h < f2.length; h++) if (f2[h].getTime ? l2 = f2[h].x.getTime() : l2 = f2[h].x, !(l2 < a.axisX.dataInfo.viewPortMin || l2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof f2[h].y) {
                  u = a.axisX.convertValueToPixel(l2);
                  q = a.axisY.convertValueToPixel(f2[h].y);
                  u = a.axisX.reversed ? u + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + m) * n << 0 : u - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + m) * n << 0;
                  var y = a.axisX.reversed ? u - n << 0 : u + n << 0, s;
                  0 <= f2[h].y ? s = k : (s = q, q = k);
                  b = f2[h].color ? f2[h].color : g._colorSet[h % g._colorSet.length];
                  ea(c, a.axisY.reversed ? q : s, a.axisX.reversed ? y : u, a.axisY.reversed ? s : q, a.axisX.reversed ? u : y, b, 0, null, w, false, false, false, g.fillOpacity);
                  b = g.dataPointIds[h];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: p,
                    dataPointIndex: h,
                    x1: s,
                    y1: u,
                    x2: q,
                    y2: y
                  };
                  b = V(b);
                  r && ea(this._eventManager.ghostCtx, s, a.axisX.reversed ? y : u, q, a.axisX.reversed ? u : y, b, 0, null, false, false, false, false);
                  (f2[h].indexLabel || g.indexLabel || f2[h].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "bar",
                    dataPoint: f2[h],
                    dataSeries: g,
                    point: {
                      x: 0 <= f2[h].y ? q : s,
                      y: u + (y - u) / 2
                    },
                    direction: 0 > f2[h].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: Math.min(s, q),
                      y1: u,
                      x2: Math.max(s, q),
                      y2: y
                    },
                    color: b
                  });
                }
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.xScaleAnimation,
              easingFunction: R.easing.easeOutQuart,
              animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k
            };
          }
        };
        x.prototype.renderStackedBar = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, h = [], q = [], l2 = [], f2 = [], k = 0, m, n, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, g = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, C = a.axisX.dataInfo.minDiff;
            isFinite(C) || (C = 0.3 * Math.abs(a.axisX.range));
            C = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(C) / Math.log(a.axisX.range) : Math.abs(C) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > g && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g));
            !this.dataPointMaxWidth && this.dataPointMinWidth && g < k && (g = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            C < k && (C = k);
            C > g && (C = g);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (g = 0; g < a.dataSeriesIndexes.length; g++) {
              var w = a.dataSeriesIndexes[g], y = this.data[w], s = y.dataPoints;
              if (0 < s.length) {
                var z = 5 < C && y.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++) if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                  n = a.axisX.convertValueToPixel(b);
                  n = n - a.plotType.plotUnits.length * C / 2 + a.index * C << 0;
                  var v = n + C << 0, J;
                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) l2[b] = s[k].y + (l2[b] ? l2[b] : 0), 0 < l2[b] && (J = h[b] ? h[b] : p, h[b] = m = a.axisY.convertValueToPixel(l2[b]));
                  else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y) f2[b] = s[k].y + (f2[b] ? f2[b] : 0), m = q[b] ? q[b] : p, q[b] = J = a.axisY.convertValueToPixel(f2[b]);
                  else if (m = a.axisY.convertValueToPixel(s[k].y), 0 <= s[k].y) {
                    var G = h[b] ? h[b] : 0;
                    J = p + G;
                    m += G;
                    h[b] = G + (m - J);
                  } else G = q[b] ? q[b] : 0, J = m - G, m = p - G, q[b] = G + (m - J);
                  b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                  ea(c, a.axisY.reversed ? m : J, n, a.axisY.reversed ? J : m, v, b, 0, null, z, false, false, false, y.fillOpacity);
                  b = y.dataPointIds[k];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: w,
                    dataPointIndex: k,
                    x1: J,
                    y1: n,
                    x2: m,
                    y2: v
                  };
                  b = V(b);
                  r && ea(this._eventManager.ghostCtx, J, n, m, v, b, 0, null, false, false, false, false);
                  (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "stackedBar",
                    dataPoint: s[k],
                    dataSeries: y,
                    point: {
                      x: 0 <= s[k].y ? m : J,
                      y: n + (v - n) / 2
                    },
                    direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: Math.min(J, m),
                      y1: n,
                      x2: Math.max(J, m),
                      y2: v
                    },
                    color: b
                  });
                }
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.xScaleAnimation,
              easingFunction: R.easing.easeOutQuart,
              animationBase: p < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : p > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : p
            };
          }
        };
        x.prototype.renderStackedBar100 = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, h = [], q = [], l2 = [], f2 = [], k = 0, m, n, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, g = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, C = a.axisX.dataInfo.minDiff;
            isFinite(C) || (C = 0.3 * Math.abs(a.axisX.range));
            C = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(C) / Math.log(a.axisX.range) : Math.abs(C) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > g && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g));
            !this.dataPointMaxWidth && this.dataPointMinWidth && g < k && (g = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            C < k && (C = k);
            C > g && (C = g);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (g = 0; g < a.dataSeriesIndexes.length; g++) {
              var w = a.dataSeriesIndexes[g], y = this.data[w], s = y.dataPoints;
              if (0 < s.length) {
                var z = 5 < C && y.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++) if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                  n = a.axisX.convertValueToPixel(b);
                  var v;
                  v = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                  n = n - a.plotType.plotUnits.length * C / 2 + a.index * C << 0;
                  var J = n + C << 0;
                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) {
                    l2[b] = v + (l2[b] ? l2[b] : 0);
                    if (0 >= l2[b]) continue;
                    v = h[b] ? h[b] : p;
                    h[b] = m = a.axisY.convertValueToPixel(l2[b]);
                  } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y) f2[b] = v + (f2[b] ? f2[b] : 0), m = q[b] ? q[b] : p, q[b] = v = a.axisY.convertValueToPixel(f2[b]);
                  else if (m = a.axisY.convertValueToPixel(v), 0 <= s[k].y) {
                    var G = h[b] ? h[b] : 0;
                    v = p + G;
                    m += G;
                    a.dataSeriesIndexes.length - 1 === g && 1 >= Math.abs(d.x2 - m) && (m = d.x2);
                    h[b] = G + (m - v);
                  } else G = q[b] ? q[b] : 0, v = m - G, m = p - G, a.dataSeriesIndexes.length - 1 === g && 1 >= Math.abs(d.x1 - v) && (v = d.x1), q[b] = G + (m - v);
                  b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                  ea(c, a.axisY.reversed ? m : v, n, a.axisY.reversed ? v : m, J, b, 0, null, z, false, false, false, y.fillOpacity);
                  b = y.dataPointIds[k];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: w,
                    dataPointIndex: k,
                    x1: v,
                    y1: n,
                    x2: m,
                    y2: J
                  };
                  b = V(b);
                  r && ea(this._eventManager.ghostCtx, v, n, m, J, b, 0, null, false, false, false, false);
                  (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "stackedBar100",
                    dataPoint: s[k],
                    dataSeries: y,
                    point: {
                      x: 0 <= s[k].y ? m : v,
                      y: n + (J - n) / 2
                    },
                    direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: Math.min(v, m),
                      y1: n,
                      x2: Math.max(v, m),
                      y2: J
                    },
                    color: b
                  });
                }
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.xScaleAnimation,
              easingFunction: R.easing.easeOutQuart,
              animationBase: p < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : p > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : p
            };
          }
        };
        x.prototype.renderArea = function(a) {
          var e, c;
          function b() {
            G && (0 < g.lineThickness && h.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? J = v : 0 > a.axisY.viewportMaximum ? J = l2.y1 : 0 < a.axisY.viewportMinimum && (J = v), h.lineTo(y, J), h.lineTo(G.x, J), h.closePath(), h.globalAlpha = g.fillOpacity, h.fill(), h.globalAlpha = 1, r && (q.lineTo(y, J), q.lineTo(G.x, J), q.closePath(), q.fill()), h.beginPath(), h.moveTo(y, s), q.beginPath(), q.moveTo(y, s), G = {
              x: y,
              y: s
            });
          }
          var d = a.targetCanvasCtx || this.plotArea.ctx, h = r ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var q = this._eventManager.ghostCtx, l2 = a.axisY.lineCoordinates, f2 = [], k = this.plotArea, m;
            h.save();
            r && q.save();
            h.beginPath();
            h.rect(k.x1, k.y1, k.width, k.height);
            h.clip();
            r && (q.beginPath(), q.rect(k.x1, k.y1, k.width, k.height), q.clip());
            for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
              var p = a.dataSeriesIndexes[n], g = this.data[p], C = g.dataPoints, f2 = g.id;
              this._eventManager.objectMap[f2] = {
                objectType: "dataSeries",
                dataSeriesIndex: p
              };
              f2 = V(f2);
              q.fillStyle = f2;
              f2 = [];
              e = true;
              var w = 0, y, s, z, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), J, G = null;
              if (0 < C.length) {
                var x2 = g._colorSet[w % g._colorSet.length], t3 = g.lineColor = g.options.lineColor || x2, A3 = t3;
                h.fillStyle = x2;
                h.strokeStyle = t3;
                h.lineWidth = g.lineThickness;
                c = "solid";
                if (h.setLineDash) {
                  var L = I(g.nullDataLineDashType, g.lineThickness);
                  c = g.lineDashType;
                  var M = I(c, g.lineThickness);
                  h.setLineDash(M);
                }
                for (var ca = true; w < C.length; w++) if (z = C[w].x.getTime ? C[w].x.getTime() : C[w].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !ca))) if ("number" !== typeof C[w].y) g.connectNullData || ca || e || b(), ca = true;
                else {
                  y = a.axisX.convertValueToPixel(z);
                  s = a.axisY.convertValueToPixel(C[w].y);
                  e || ca ? (!e && g.connectNullData ? (h.setLineDash && (g.options.nullDataLineDashType || c === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (e = y, c = s, y = m.x, s = m.y, b(), h.moveTo(m.x, m.y), y = e, s = c, G = m, c = g.nullDataLineDashType, h.setLineDash(L)), h.lineTo(y, s), r && q.lineTo(y, s)) : (h.beginPath(), h.moveTo(y, s), r && (q.beginPath(), q.moveTo(y, s)), G = {
                    x: y,
                    y: s
                  }), ca = e = false) : (h.lineTo(y, s), r && q.lineTo(y, s), 0 == w % 250 && b());
                  m = {
                    x: y,
                    y: s
                  };
                  w < C.length - 1 && (A3 !== (C[w].lineColor || t3) || c !== (C[w].lineDashType || g.lineDashType)) && (b(), A3 = C[w].lineColor || t3, h.strokeStyle = A3, h.setLineDash && (C[w].lineDashType ? (c = C[w].lineDashType, h.setLineDash(I(c, g.lineThickness))) : (c = g.lineDashType, h.setLineDash(M))));
                  var da = g.dataPointIds[w];
                  this._eventManager.objectMap[da] = {
                    id: da,
                    objectType: "dataPoint",
                    dataSeriesIndex: p,
                    dataPointIndex: w,
                    x1: y,
                    y1: s
                  };
                  0 !== C[w].markerSize && (0 < C[w].markerSize || 0 < g.markerSize) && (z = g.getMarkerProperties(w, y, s, h), f2.push(z), da = V(da), r && f2.push({
                    x: y,
                    y: s,
                    ctx: q,
                    type: z.type,
                    size: z.size,
                    color: da,
                    borderColor: da,
                    borderThickness: z.borderThickness
                  }));
                  (C[w].indexLabel || g.indexLabel || C[w].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "area",
                    dataPoint: C[w],
                    dataSeries: g,
                    point: {
                      x: y,
                      y: s
                    },
                    direction: 0 > C[w].y === a.axisY.reversed ? 1 : -1,
                    color: x2
                  });
                }
                b();
                ba.drawMarkers(f2);
              }
            }
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
            h.restore();
            return {
              source: d,
              dest: this.plotArea.ctx,
              animationCallback: R.xClipAnimation,
              easingFunction: R.easing.linear,
              animationBase: 0
            };
          }
        };
        x.prototype.renderSplineArea = function(a) {
          function e() {
            var c2 = t2(z, 2);
            if (0 < c2.length) {
              if (0 < m.lineThickness) {
                b.beginPath();
                b.moveTo(c2[0].x, c2[0].y);
                c2[0].newStrokeStyle && (b.strokeStyle = c2[0].newStrokeStyle);
                c2[0].newLineDashArray && b.setLineDash(c2[0].newLineDashArray);
                for (var g2 = 0; g2 < c2.length - 3; g2 += 3) if (b.bezierCurveTo(c2[g2 + 1].x, c2[g2 + 1].y, c2[g2 + 2].x, c2[g2 + 2].y, c2[g2 + 3].x, c2[g2 + 3].y), r && d.bezierCurveTo(c2[g2 + 1].x, c2[g2 + 1].y, c2[g2 + 2].x, c2[g2 + 2].y, c2[g2 + 3].x, c2[g2 + 3].y), c2[g2 + 3].newStrokeStyle || c2[g2 + 3].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(c2[g2 + 3].x, c2[g2 + 3].y), c2[g2 + 3].newStrokeStyle && (b.strokeStyle = c2[g2 + 3].newStrokeStyle), c2[g2 + 3].newLineDashArray && b.setLineDash(c2[g2 + 3].newLineDashArray);
                b.stroke();
              }
              b.beginPath();
              b.moveTo(c2[0].x, c2[0].y);
              r && (d.beginPath(), d.moveTo(c2[0].x, c2[0].y));
              for (g2 = 0; g2 < c2.length - 3; g2 += 3) b.bezierCurveTo(c2[g2 + 1].x, c2[g2 + 1].y, c2[g2 + 2].x, c2[g2 + 2].y, c2[g2 + 3].x, c2[g2 + 3].y), r && d.bezierCurveTo(c2[g2 + 1].x, c2[g2 + 1].y, c2[g2 + 2].x, c2[g2 + 2].y, c2[g2 + 3].x, c2[g2 + 3].y);
              a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? y = w : 0 > a.axisY.viewportMaximum ? y = h.y1 : 0 < a.axisY.viewportMinimum && (y = w);
              s = {
                x: c2[0].x,
                y: c2[0].y
              };
              b.lineTo(c2[c2.length - 1].x, y);
              b.lineTo(s.x, y);
              b.closePath();
              b.globalAlpha = m.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              r && (d.lineTo(c2[c2.length - 1].x, y), d.lineTo(s.x, y), d.closePath(), d.fill());
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = r ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx, h = a.axisY.lineCoordinates, q = [], l2 = this.plotArea;
            b.save();
            r && d.save();
            b.beginPath();
            b.rect(l2.x1, l2.y1, l2.width, l2.height);
            b.clip();
            r && (d.beginPath(), d.rect(l2.x1, l2.y1, l2.width, l2.height), d.clip());
            for (var f2 = 0; f2 < a.dataSeriesIndexes.length; f2++) {
              var k = a.dataSeriesIndexes[f2], m = this.data[k], n = m.dataPoints, q = m.id;
              this._eventManager.objectMap[q] = {
                objectType: "dataSeries",
                dataSeriesIndex: k
              };
              q = V(q);
              d.fillStyle = q;
              var q = [], p = 0, g, C, w = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), y, s = null, z = [];
              if (0 < n.length) {
                var v = m._colorSet[p % m._colorSet.length], J = m.lineColor = m.options.lineColor || v, G = J;
                b.fillStyle = v;
                b.strokeStyle = J;
                b.lineWidth = m.lineThickness;
                var x2 = "solid";
                if (b.setLineDash) {
                  var A3 = I(m.nullDataLineDashType, m.lineThickness), x2 = m.lineDashType, B2 = I(x2, m.lineThickness);
                  b.setLineDash(B2);
                }
                for (C = false; p < n.length; p++) if (g = n[p].x.getTime ? n[p].x.getTime() : n[p].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !C))) if ("number" !== typeof n[p].y) 0 < p && !C && (m.connectNullData ? b.setLineDash && 0 < z.length && (m.options.nullDataLineDashType || !n[p - 1].lineDashType) && (z[z.length - 1].newLineDashArray = A3, x2 = m.nullDataLineDashType) : (e(), z = [])), C = true;
                else {
                  g = a.axisX.convertValueToPixel(g);
                  C = a.axisY.convertValueToPixel(n[p].y);
                  var L = m.dataPointIds[p];
                  this._eventManager.objectMap[L] = {
                    id: L,
                    objectType: "dataPoint",
                    dataSeriesIndex: k,
                    dataPointIndex: p,
                    x1: g,
                    y1: C
                  };
                  z[z.length] = {
                    x: g,
                    y: C
                  };
                  p < n.length - 1 && (G !== (n[p].lineColor || J) || x2 !== (n[p].lineDashType || m.lineDashType)) && (G = n[p].lineColor || J, z[z.length - 1].newStrokeStyle = G, b.setLineDash && (n[p].lineDashType ? (x2 = n[p].lineDashType, z[z.length - 1].newLineDashArray = I(x2, m.lineThickness)) : (x2 = m.lineDashType, z[z.length - 1].newLineDashArray = B2)));
                  if (0 !== n[p].markerSize && (0 < n[p].markerSize || 0 < m.markerSize)) {
                    var M = m.getMarkerProperties(p, g, C, b);
                    q.push(M);
                    L = V(L);
                    r && q.push({
                      x: g,
                      y: C,
                      ctx: d,
                      type: M.type,
                      size: M.size,
                      color: L,
                      borderColor: L,
                      borderThickness: M.borderThickness
                    });
                  }
                  (n[p].indexLabel || m.indexLabel || n[p].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "splineArea",
                    dataPoint: n[p],
                    dataSeries: m,
                    point: {
                      x: g,
                      y: C
                    },
                    direction: 0 > n[p].y === a.axisY.reversed ? 1 : -1,
                    color: v
                  });
                  C = false;
                }
                e();
                ba.drawMarkers(q);
              }
            }
            r && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(l2.x1, l2.y1, l2.width, l2.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return {
              source: c,
              dest: this.plotArea.ctx,
              animationCallback: R.xClipAnimation,
              easingFunction: R.easing.linear,
              animationBase: 0
            };
          }
        };
        x.prototype.renderStepArea = function(a) {
          var e, c;
          function b() {
            G && (0 < g.lineThickness && h.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? x2 = v : 0 > a.axisY.viewportMaximum ? x2 = l2.y1 : 0 < a.axisY.viewportMinimum && (x2 = v), h.lineTo(y, x2), h.lineTo(G.x, x2), h.closePath(), h.globalAlpha = g.fillOpacity, h.fill(), h.globalAlpha = 1, r && (q.lineTo(y, x2), q.lineTo(G.x, x2), q.closePath(), q.fill()), h.beginPath(), h.moveTo(y, s), q.beginPath(), q.moveTo(y, s), G = {
              x: y,
              y: s
            });
          }
          var d = a.targetCanvasCtx || this.plotArea.ctx, h = r ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var q = this._eventManager.ghostCtx, l2 = a.axisY.lineCoordinates, f2 = [], k = this.plotArea, m;
            h.save();
            r && q.save();
            h.beginPath();
            h.rect(k.x1, k.y1, k.width, k.height);
            h.clip();
            r && (q.beginPath(), q.rect(k.x1, k.y1, k.width, k.height), q.clip());
            for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
              var p = a.dataSeriesIndexes[n], g = this.data[p], C = g.dataPoints, f2 = g.id;
              this._eventManager.objectMap[f2] = {
                objectType: "dataSeries",
                dataSeriesIndex: p
              };
              f2 = V(f2);
              q.fillStyle = f2;
              f2 = [];
              e = true;
              var w = 0, y, s, z, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), x2, G = null;
              c = false;
              if (0 < C.length) {
                var t3 = g._colorSet[w % g._colorSet.length], A3 = g.lineColor = g.options.lineColor || t3, B2 = A3;
                h.fillStyle = t3;
                h.strokeStyle = A3;
                h.lineWidth = g.lineThickness;
                var L = "solid";
                if (h.setLineDash) {
                  var M = I(g.nullDataLineDashType, g.lineThickness), L = g.lineDashType, ca = I(L, g.lineThickness);
                  h.setLineDash(ca);
                }
                for (; w < C.length; w++) if (z = C[w].x.getTime ? C[w].x.getTime() : C[w].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !c))) {
                  var da = s;
                  "number" !== typeof C[w].y ? (g.connectNullData || c || e || b(), c = true) : (y = a.axisX.convertValueToPixel(z), s = a.axisY.convertValueToPixel(C[w].y), e || c ? (!e && g.connectNullData ? (h.setLineDash && (g.options.nullDataLineDashType || L === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (e = y, c = s, y = m.x, s = m.y, b(), h.moveTo(m.x, m.y), y = e, s = c, G = m, L = g.nullDataLineDashType, h.setLineDash(M)), h.lineTo(y, da), h.lineTo(y, s), r && (q.lineTo(y, da), q.lineTo(y, s))) : (h.beginPath(), h.moveTo(y, s), r && (q.beginPath(), q.moveTo(y, s)), G = {
                    x: y,
                    y: s
                  }), c = e = false) : (h.lineTo(y, da), r && q.lineTo(y, da), h.lineTo(y, s), r && q.lineTo(y, s), 0 == w % 250 && b()), m = {
                    x: y,
                    y: s
                  }, w < C.length - 1 && (B2 !== (C[w].lineColor || A3) || L !== (C[w].lineDashType || g.lineDashType)) && (b(), B2 = C[w].lineColor || A3, h.strokeStyle = B2, h.setLineDash && (C[w].lineDashType ? (L = C[w].lineDashType, h.setLineDash(I(L, g.lineThickness))) : (L = g.lineDashType, h.setLineDash(ca)))), z = g.dataPointIds[w], this._eventManager.objectMap[z] = {
                    id: z,
                    objectType: "dataPoint",
                    dataSeriesIndex: p,
                    dataPointIndex: w,
                    x1: y,
                    y1: s
                  }, 0 !== C[w].markerSize && (0 < C[w].markerSize || 0 < g.markerSize) && (da = g.getMarkerProperties(w, y, s, h), f2.push(da), z = V(z), r && f2.push({
                    x: y,
                    y: s,
                    ctx: q,
                    type: da.type,
                    size: da.size,
                    color: z,
                    borderColor: z,
                    borderThickness: da.borderThickness
                  })), (C[w].indexLabel || g.indexLabel || C[w].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "stepArea",
                    dataPoint: C[w],
                    dataSeries: g,
                    point: {
                      x: y,
                      y: s
                    },
                    direction: 0 > C[w].y === a.axisY.reversed ? 1 : -1,
                    color: t3
                  }));
                }
                b();
                ba.drawMarkers(f2);
              }
            }
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
            h.restore();
            return {
              source: d,
              dest: this.plotArea.ctx,
              animationCallback: R.xClipAnimation,
              easingFunction: R.easing.linear,
              animationBase: 0
            };
          }
        };
        x.prototype.renderStackedArea = function(a) {
          function e() {
            if (!(1 > k.length)) {
              for (0 < t3.lineThickness && b.stroke(); 0 < k.length; ) {
                var a2 = k.pop();
                b.lineTo(a2.x, a2.y);
                r && y.lineTo(a2.x, a2.y);
              }
              b.closePath();
              b.globalAlpha = t3.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              b.beginPath();
              r && (y.closePath(), y.fill(), y.beginPath());
              k = [];
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = r ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null, h = null, q = [], l2 = this.plotArea, f2 = [], k = [], m = [], n = [], p = 0, g, C, w = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), y = this._eventManager.ghostCtx, s, z, v;
            r && y.beginPath();
            b.save();
            r && y.save();
            b.beginPath();
            b.rect(l2.x1, l2.y1, l2.width, l2.height);
            b.clip();
            r && (y.beginPath(), y.rect(l2.x1, l2.y1, l2.width, l2.height), y.clip());
            for (var d = [], x2 = 0; x2 < a.dataSeriesIndexes.length; x2++) {
              var G = a.dataSeriesIndexes[x2], t3 = this.data[G], A3 = t3.dataPoints;
              t3.dataPointIndexes = [];
              for (p = 0; p < A3.length; p++) G = A3[p].x.getTime ? A3[p].x.getTime() : A3[p].x, t3.dataPointIndexes[G] = p, d[G] || (m.push(G), d[G] = true);
              m.sort(Ta);
            }
            for (x2 = 0; x2 < a.dataSeriesIndexes.length; x2++) {
              G = a.dataSeriesIndexes[x2];
              t3 = this.data[G];
              A3 = t3.dataPoints;
              z = true;
              k = [];
              p = t3.id;
              this._eventManager.objectMap[p] = {
                objectType: "dataSeries",
                dataSeriesIndex: G
              };
              p = V(p);
              y.fillStyle = p;
              if (0 < m.length) {
                var d = t3._colorSet[0], B2 = t3.lineColor = t3.options.lineColor || d, L = B2;
                b.fillStyle = d;
                b.strokeStyle = B2;
                b.lineWidth = t3.lineThickness;
                v = "solid";
                if (b.setLineDash) {
                  var M = I(t3.nullDataLineDashType, t3.lineThickness);
                  v = t3.lineDashType;
                  var ca = I(v, t3.lineThickness);
                  b.setLineDash(ca);
                }
                for (var da = true, p = 0; p < m.length; p++) {
                  var h = m[p], fa = null, fa = 0 <= t3.dataPointIndexes[h] ? A3[t3.dataPointIndexes[h]] : {
                    x: h,
                    y: null
                  };
                  if (!(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax && (!t3.connectNullData || !da))) if ("number" !== typeof fa.y) t3.connectNullData || da || z || e(), da = true;
                  else {
                    g = a.axisX.convertValueToPixel(h);
                    var oa = f2[h] ? f2[h] : 0;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                      n[h] = fa.y + (n[h] ? n[h] : 0);
                      if (0 >= n[h] && a.axisY.logarithmic) continue;
                      C = a.axisY.convertValueToPixel(n[h]);
                    } else C = a.axisY.convertValueToPixel(fa.y), C -= oa;
                    k.push({
                      x: g,
                      y: w - oa
                    });
                    f2[h] = w - C;
                    z || da ? (!z && t3.connectNullData ? (b.setLineDash && (t3.options.nullDataLineDashType || v === t3.lineDashType && t3.lineDashType !== t3.nullDataLineDashType) && (z = k.pop(), v = k[k.length - 1], e(), b.moveTo(s.x, s.y), k.push(v), k.push(z), v = t3.nullDataLineDashType, b.setLineDash(M)), b.lineTo(g, C), r && y.lineTo(g, C)) : (b.beginPath(), b.moveTo(g, C), r && (y.beginPath(), y.moveTo(g, C))), da = z = false) : (b.lineTo(g, C), r && y.lineTo(g, C), 0 == p % 250 && (e(), b.moveTo(g, C), r && y.moveTo(g, C), k.push({
                      x: g,
                      y: w - oa
                    })));
                    s = {
                      x: g,
                      y: C
                    };
                    p < A3.length - 1 && (L !== (A3[p].lineColor || B2) || v !== (A3[p].lineDashType || t3.lineDashType)) && (e(), b.beginPath(), b.moveTo(g, C), k.push({
                      x: g,
                      y: w - oa
                    }), L = A3[p].lineColor || B2, b.strokeStyle = L, b.setLineDash && (A3[p].lineDashType ? (v = A3[p].lineDashType, b.setLineDash(I(v, t3.lineThickness))) : (v = t3.lineDashType, b.setLineDash(ca))));
                    if (0 <= t3.dataPointIndexes[h]) {
                      var ma = t3.dataPointIds[t3.dataPointIndexes[h]];
                      this._eventManager.objectMap[ma] = {
                        id: ma,
                        objectType: "dataPoint",
                        dataSeriesIndex: G,
                        dataPointIndex: t3.dataPointIndexes[h],
                        x1: g,
                        y1: C
                      };
                    }
                    0 <= t3.dataPointIndexes[h] && 0 !== fa.markerSize && (0 < fa.markerSize || 0 < t3.markerSize) && (oa = t3.getMarkerProperties(t3.dataPointIndexes[h], g, C, b), q.push(oa), h = V(ma), r && q.push({
                      x: g,
                      y: C,
                      ctx: y,
                      type: oa.type,
                      size: oa.size,
                      color: h,
                      borderColor: h,
                      borderThickness: oa.borderThickness
                    }));
                    (fa.indexLabel || t3.indexLabel || fa.indexLabelFormatter || t3.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "stackedArea",
                      dataPoint: fa,
                      dataSeries: t3,
                      point: {
                        x: g,
                        y: C
                      },
                      direction: 0 > fa.y === a.axisY.reversed ? 1 : -1,
                      color: d
                    });
                  }
                }
                e();
                b.moveTo(g, C);
                r && y.moveTo(g, C);
              }
              delete t3.dataPointIndexes;
            }
            ba.drawMarkers(q);
            r && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(l2.x1, l2.y1, l2.width, l2.height), y.restore());
            b.restore();
            return {
              source: c,
              dest: this.plotArea.ctx,
              animationCallback: R.xClipAnimation,
              easingFunction: R.easing.linear,
              animationBase: 0
            };
          }
        };
        x.prototype.renderStackedArea100 = function(a) {
          function e() {
            for (0 < Z.lineThickness && b.stroke(); 0 < k.length; ) {
              var a2 = k.pop();
              b.lineTo(a2.x, a2.y);
              r && v.lineTo(a2.x, a2.y);
            }
            b.closePath();
            b.globalAlpha = Z.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            b.beginPath();
            r && (v.closePath(), v.fill(), v.beginPath());
            k = [];
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = r ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null, h = null, q = this.plotArea, l2 = [], f2 = [], k = [], m = [], n = [], p = 0, g, C, w, y, s, z = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), v = this._eventManager.ghostCtx;
            b.save();
            r && v.save();
            b.beginPath();
            b.rect(q.x1, q.y1, q.width, q.height);
            b.clip();
            r && (v.beginPath(), v.rect(q.x1, q.y1, q.width, q.height), v.clip());
            for (var d = [], t3 = 0; t3 < a.dataSeriesIndexes.length; t3++) {
              var x2 = a.dataSeriesIndexes[t3], Z = this.data[x2], A3 = Z.dataPoints;
              Z.dataPointIndexes = [];
              for (p = 0; p < A3.length; p++) x2 = A3[p].x.getTime ? A3[p].x.getTime() : A3[p].x, Z.dataPointIndexes[x2] = p, d[x2] || (m.push(x2), d[x2] = true);
              m.sort(Ta);
            }
            for (t3 = 0; t3 < a.dataSeriesIndexes.length; t3++) {
              x2 = a.dataSeriesIndexes[t3];
              Z = this.data[x2];
              A3 = Z.dataPoints;
              y = true;
              d = Z.id;
              this._eventManager.objectMap[d] = {
                objectType: "dataSeries",
                dataSeriesIndex: x2
              };
              d = V(d);
              v.fillStyle = d;
              k = [];
              if (0 < m.length) {
                var d = Z._colorSet[p % Z._colorSet.length], B2 = Z.lineColor = Z.options.lineColor || d, L = B2;
                b.fillStyle = d;
                b.strokeStyle = B2;
                b.lineWidth = Z.lineThickness;
                s = "solid";
                if (b.setLineDash) {
                  var M = I(Z.nullDataLineDashType, Z.lineThickness);
                  s = Z.lineDashType;
                  var ca = I(s, Z.lineThickness);
                  b.setLineDash(ca);
                }
                for (var da = true, p = 0; p < m.length; p++) {
                  var h = m[p], fa = null, fa = 0 <= Z.dataPointIndexes[h] ? A3[Z.dataPointIndexes[h]] : {
                    x: h,
                    y: null
                  };
                  if (!(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax && (!Z.connectNullData || !da))) if ("number" !== typeof fa.y) Z.connectNullData || da || y || e(), da = true;
                  else {
                    var oa;
                    oa = 0 !== a.dataPointYSums[h] ? 100 * (fa.y / a.dataPointYSums[h]) : 0;
                    g = a.axisX.convertValueToPixel(h);
                    var ma = f2[h] ? f2[h] : 0;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                      n[h] = oa + (n[h] ? n[h] : 0);
                      if (0 >= n[h] && a.axisY.logarithmic) continue;
                      C = a.axisY.convertValueToPixel(n[h]);
                    } else C = a.axisY.convertValueToPixel(oa), C -= ma;
                    k.push({
                      x: g,
                      y: z - ma
                    });
                    f2[h] = z - C;
                    y || da ? (!y && Z.connectNullData ? (b.setLineDash && (Z.options.nullDataLineDashType || s === Z.lineDashType && Z.lineDashType !== Z.nullDataLineDashType) && (y = k.pop(), s = k[k.length - 1], e(), b.moveTo(w.x, w.y), k.push(s), k.push(y), s = Z.nullDataLineDashType, b.setLineDash(M)), b.lineTo(g, C), r && v.lineTo(g, C)) : (b.beginPath(), b.moveTo(g, C), r && (v.beginPath(), v.moveTo(g, C))), da = y = false) : (b.lineTo(g, C), r && v.lineTo(g, C), 0 == p % 250 && (e(), b.moveTo(g, C), r && v.moveTo(g, C), k.push({
                      x: g,
                      y: z - ma
                    })));
                    w = {
                      x: g,
                      y: C
                    };
                    p < A3.length - 1 && (L !== (A3[p].lineColor || B2) || s !== (A3[p].lineDashType || Z.lineDashType)) && (e(), b.beginPath(), b.moveTo(g, C), k.push({
                      x: g,
                      y: z - ma
                    }), L = A3[p].lineColor || B2, b.strokeStyle = L, b.setLineDash && (A3[p].lineDashType ? (s = A3[p].lineDashType, b.setLineDash(I(s, Z.lineThickness))) : (s = Z.lineDashType, b.setLineDash(ca))));
                    if (0 <= Z.dataPointIndexes[h]) {
                      var D = Z.dataPointIds[Z.dataPointIndexes[h]];
                      this._eventManager.objectMap[D] = {
                        id: D,
                        objectType: "dataPoint",
                        dataSeriesIndex: x2,
                        dataPointIndex: Z.dataPointIndexes[h],
                        x1: g,
                        y1: C
                      };
                    }
                    0 <= Z.dataPointIndexes[h] && 0 !== fa.markerSize && (0 < fa.markerSize || 0 < Z.markerSize) && (ma = Z.getMarkerProperties(Z.dataPointIndexes[h], g, C, b), l2.push(ma), h = V(D), r && l2.push({
                      x: g,
                      y: C,
                      ctx: v,
                      type: ma.type,
                      size: ma.size,
                      color: h,
                      borderColor: h,
                      borderThickness: ma.borderThickness
                    }));
                    (fa.indexLabel || Z.indexLabel || fa.indexLabelFormatter || Z.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "stackedArea100",
                      dataPoint: fa,
                      dataSeries: Z,
                      point: {
                        x: g,
                        y: C
                      },
                      direction: 0 > fa.y === a.axisY.reversed ? 1 : -1,
                      color: d
                    });
                  }
                }
                e();
                b.moveTo(g, C);
                r && v.moveTo(g, C);
              }
              delete Z.dataPointIndexes;
            }
            ba.drawMarkers(l2);
            r && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(q.x1, q.y1, q.width, q.height), v.restore());
            b.restore();
            return {
              source: c,
              dest: this.plotArea.ctx,
              animationCallback: R.xClipAnimation,
              easingFunction: R.easing.linear,
              animationBase: 0
            };
          }
        };
        x.prototype.renderBubble = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea, d = 0, h, q;
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var l2 = -Infinity, f2 = Infinity, k = 0; k < a.dataSeriesIndexes.length; k++) for (var m = a.dataSeriesIndexes[k], n = this.data[m], p = n.dataPoints, g = 0, d = 0; d < p.length; d++) h = p[d].getTime ? h = p[d].x.getTime() : h = p[d].x, h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax || "undefined" === typeof p[d].z || (g = p[d].z, g > l2 && (l2 = g), g < f2 && (f2 = g));
            for (var C = 25 * Math.PI, w = Math.max(Math.pow(0.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI, C), k = 0; k < a.dataSeriesIndexes.length; k++) if (m = a.dataSeriesIndexes[k], n = this.data[m], p = n.dataPoints, 0 < p.length) {
              for (c.strokeStyle = "#4572A7 ", d = 0; d < p.length; d++) if (h = p[d].getTime ? h = p[d].x.getTime() : h = p[d].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof p[d].y) {
                h = a.axisX.convertValueToPixel(h);
                q = a.axisY.convertValueToPixel(p[d].y);
                var g = p[d].z, y = 2 * Math.max(Math.sqrt((l2 === f2 ? w / 2 : C + (w - C) / (l2 - f2) * (g - f2)) / Math.PI) << 0, 1), g = n.getMarkerProperties(d, c);
                g.size = y;
                c.globalAlpha = n.fillOpacity;
                ba.drawMarker(h, q, c, g.type, g.size, g.color, g.borderColor, g.borderThickness);
                c.globalAlpha = 1;
                var s = n.dataPointIds[d];
                this._eventManager.objectMap[s] = {
                  id: s,
                  objectType: "dataPoint",
                  dataSeriesIndex: m,
                  dataPointIndex: d,
                  x1: h,
                  y1: q,
                  size: y
                };
                y = V(s);
                r && ba.drawMarker(h, q, this._eventManager.ghostCtx, g.type, g.size, y, y, g.borderThickness);
                (p[d].indexLabel || n.indexLabel || p[d].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                  chartType: "bubble",
                  dataPoint: p[d],
                  dataSeries: n,
                  point: {
                    x: h,
                    y: q
                  },
                  direction: 1,
                  bounds: {
                    x1: h - g.size / 2,
                    y1: q - g.size / 2,
                    x2: h + g.size / 2,
                    y2: q + g.size / 2
                  },
                  color: null
                });
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.fadeInAnimation,
              easingFunction: R.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        x.prototype.renderScatter = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea, d = 0, h, q;
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var l2 = 0; l2 < a.dataSeriesIndexes.length; l2++) {
              var f2 = a.dataSeriesIndexes[l2], k = this.data[f2], m = k.dataPoints;
              if (0 < m.length) {
                c.strokeStyle = "#4572A7 ";
                Math.pow(0.3 * Math.min(b.height, b.width) / 2, 2);
                for (var n = 0, p = 0, d = 0; d < m.length; d++) if (h = m[d].getTime ? h = m[d].x.getTime() : h = m[d].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[d].y) {
                  h = a.axisX.convertValueToPixel(h);
                  q = a.axisY.convertValueToPixel(m[d].y);
                  var g = k.getMarkerProperties(d, h, q, c);
                  c.globalAlpha = k.fillOpacity;
                  ba.drawMarker(g.x, g.y, g.ctx, g.type, g.size, g.color, g.borderColor, g.borderThickness);
                  c.globalAlpha = 1;
                  Math.sqrt((n - h) * (n - h) + (p - q) * (p - q)) < Math.min(g.size, 5) && m.length > Math.min(this.plotArea.width, this.plotArea.height) || (n = k.dataPointIds[d], this._eventManager.objectMap[n] = {
                    id: n,
                    objectType: "dataPoint",
                    dataSeriesIndex: f2,
                    dataPointIndex: d,
                    x1: h,
                    y1: q
                  }, n = V(n), r && ba.drawMarker(g.x, g.y, this._eventManager.ghostCtx, g.type, g.size, n, n, g.borderThickness), (m[d].indexLabel || k.indexLabel || m[d].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "scatter",
                    dataPoint: m[d],
                    dataSeries: k,
                    point: {
                      x: h,
                      y: q
                    },
                    direction: 1,
                    bounds: {
                      x1: h - g.size / 2,
                      y1: q - g.size / 2,
                      x2: h + g.size / 2,
                      y2: q + g.size / 2
                    },
                    color: null
                  }), n = h, p = q);
                }
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.fadeInAnimation,
              easingFunction: R.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        x.prototype.renderCandlestick = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e, b = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null, h = null, q = this.plotArea, f2 = 0, E, k, m, n, p, g, d = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, h = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, C = a.axisX.dataInfo.minDiff;
            isFinite(C) || (C = 0.3 * Math.abs(a.axisX.range));
            C = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * q.width * (a.axisX.logarithmic ? Math.log(C) / Math.log(a.axisX.range) : Math.abs(C) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && d > h && (d = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, h));
            !this.dataPointMaxWidth && this.dataPointMinWidth && h < d && (h = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, d));
            C < d && (C = d);
            C > h && (C = h);
            c.save();
            r && b.save();
            c.beginPath();
            c.rect(q.x1, q.y1, q.width, q.height);
            c.clip();
            r && (b.beginPath(), b.rect(q.x1, q.y1, q.width, q.height), b.clip());
            for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
              var y = a.dataSeriesIndexes[w], s = this.data[y], z = s.dataPoints;
              if (0 < z.length) {
                for (var v = 5 < C && s.bevelEnabled ? true : false, f2 = 0; f2 < z.length; f2++) if (z[f2].getTime ? g = z[f2].x.getTime() : g = z[f2].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && !l(z[f2].y) && z[f2].y.length && "number" === typeof z[f2].y[0] && "number" === typeof z[f2].y[1] && "number" === typeof z[f2].y[2] && "number" === typeof z[f2].y[3]) {
                  E = a.axisX.convertValueToPixel(g);
                  k = a.axisY.convertValueToPixel(z[f2].y[0]);
                  m = a.axisY.convertValueToPixel(z[f2].y[1]);
                  n = a.axisY.convertValueToPixel(z[f2].y[2]);
                  p = a.axisY.convertValueToPixel(z[f2].y[3]);
                  var t3 = E - C / 2 << 0, x2 = t3 + C << 0, h = s.options.fallingColor ? s.fallingColor : s._colorSet[0], d = z[f2].color ? z[f2].color : s._colorSet[0], A3 = Math.round(Math.max(1, 0.15 * C)), B2 = 0 === A3 % 2 ? 0 : 0.5, I2 = s.dataPointIds[f2];
                  this._eventManager.objectMap[I2] = {
                    id: I2,
                    objectType: "dataPoint",
                    dataSeriesIndex: y,
                    dataPointIndex: f2,
                    x1: t3,
                    y1: k,
                    x2,
                    y2: m,
                    x3: E,
                    y3: n,
                    x4: E,
                    y4: p,
                    borderThickness: A3,
                    color: d
                  };
                  c.strokeStyle = d;
                  c.beginPath();
                  c.lineWidth = A3;
                  b.lineWidth = Math.max(A3, 4);
                  "candlestick" === s.type ? (c.moveTo(E - B2, m), c.lineTo(E - B2, Math.min(k, p)), c.stroke(), c.moveTo(E - B2, Math.max(k, p)), c.lineTo(E - B2, n), c.stroke(), ea(c, t3, Math.min(k, p), x2, Math.max(k, p), z[f2].y[0] <= z[f2].y[3] ? s.risingColor : h, A3, d, v, v, false, false, s.fillOpacity), r && (d = V(I2), b.strokeStyle = d, b.moveTo(E - B2, m), b.lineTo(E - B2, Math.min(k, p)), b.stroke(), b.moveTo(E - B2, Math.max(k, p)), b.lineTo(E - B2, n), b.stroke(), ea(b, t3, Math.min(k, p), x2, Math.max(k, p), d, 0, null, false, false, false, false))) : "ohlc" === s.type && (c.moveTo(E - B2, m), c.lineTo(E - B2, n), c.stroke(), c.beginPath(), c.moveTo(E, k), c.lineTo(t3, k), c.stroke(), c.beginPath(), c.moveTo(E, p), c.lineTo(x2, p), c.stroke(), r && (d = V(I2), b.strokeStyle = d, b.moveTo(E - B2, m), b.lineTo(E - B2, n), b.stroke(), b.beginPath(), b.moveTo(E, k), b.lineTo(t3, k), b.stroke(), b.beginPath(), b.moveTo(E, p), b.lineTo(x2, p), b.stroke()));
                  (z[f2].indexLabel || s.indexLabel || z[f2].indexLabelFormatter || s.indexLabelFormatter) && this._indexLabels.push({
                    chartType: s.type,
                    dataPoint: z[f2],
                    dataSeries: s,
                    point: {
                      x: t3 + (x2 - t3) / 2,
                      y: a.axisY.reversed ? n : m
                    },
                    direction: 1,
                    bounds: {
                      x1: t3,
                      y1: Math.min(m, n),
                      x2,
                      y2: Math.max(m, n)
                    },
                    color: d
                  });
                }
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(q.x1, q.y1, q.width, q.height), b.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.fadeInAnimation,
              easingFunction: R.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        x.prototype.renderBoxAndWhisker = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e, b = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null, h = this.plotArea, q = 0, f2, E, k, m, n, p, g, d = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, q = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, C = a.axisX.dataInfo.minDiff;
            isFinite(C) || (C = 0.3 * Math.abs(a.axisX.range));
            C = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * h.width * (a.axisX.logarithmic ? Math.log(C) / Math.log(a.axisX.range) : Math.abs(C) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && d > q && (d = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, q));
            !this.dataPointMaxWidth && this.dataPointMinWidth && q < d && (q = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, d));
            C < d && (C = d);
            C > q && (C = q);
            c.save();
            r && b.save();
            c.beginPath();
            c.rect(h.x1, h.y1, h.width, h.height);
            c.clip();
            r && (b.beginPath(), b.rect(h.x1, h.y1, h.width, h.height), b.clip());
            for (var w = false, w = !!a.axisY.reversed, y = 0; y < a.dataSeriesIndexes.length; y++) {
              var s = a.dataSeriesIndexes[y], z = this.data[s], v = z.dataPoints;
              if (0 < v.length) {
                for (var t3 = 5 < C && z.bevelEnabled ? true : false, q = 0; q < v.length; q++) if (v[q].getTime ? g = v[q].x.getTime() : g = v[q].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && !l(v[q].y) && v[q].y.length && "number" === typeof v[q].y[0] && "number" === typeof v[q].y[1] && "number" === typeof v[q].y[2] && "number" === typeof v[q].y[3] && "number" === typeof v[q].y[4] && 5 === v[q].y.length) {
                  f2 = a.axisX.convertValueToPixel(g);
                  E = a.axisY.convertValueToPixel(v[q].y[0]);
                  k = a.axisY.convertValueToPixel(v[q].y[1]);
                  m = a.axisY.convertValueToPixel(v[q].y[2]);
                  n = a.axisY.convertValueToPixel(v[q].y[3]);
                  p = a.axisY.convertValueToPixel(v[q].y[4]);
                  var x2 = f2 - C / 2 << 0, A3 = f2 + C / 2 << 0, d = v[q].color ? v[q].color : z._colorSet[0], B2 = Math.round(Math.max(1, 0.15 * C)), F2 = 0 === B2 % 2 ? 0 : 0.5, L = v[q].whiskerColor ? v[q].whiskerColor : v[q].color ? z.whiskerColor ? z.whiskerColor : v[q].color : z.whiskerColor ? z.whiskerColor : d, M = "number" === typeof v[q].whiskerThickness ? v[q].whiskerThickness : "number" === typeof z.options.whiskerThickness ? z.whiskerThickness : B2, ca = v[q].whiskerDashType ? v[q].whiskerDashType : z.whiskerDashType, da = l(v[q].whiskerLength) ? l(z.options.whiskerLength) ? C : z.whiskerLength : v[q].whiskerLength, da = "number" === typeof da ? 0 >= da ? 0 : da >= C ? C : da : "string" === typeof da ? parseInt(da) * C / 100 > C ? C : parseInt(da) * C / 100 : C, fa = 1 === Math.round(M) % 2 ? 0.5 : 0, oa = v[q].stemColor ? v[q].stemColor : v[q].color ? z.stemColor ? z.stemColor : v[q].color : z.stemColor ? z.stemColor : d, ma = "number" === typeof v[q].stemThickness ? v[q].stemThickness : "number" === typeof z.options.stemThickness ? z.stemThickness : B2, D = 1 === Math.round(ma) % 2 ? 0.5 : 0, S2 = v[q].stemDashType ? v[q].stemDashType : z.stemDashType, Q3 = v[q].lineColor ? v[q].lineColor : v[q].color ? z.lineColor ? z.lineColor : v[q].color : z.lineColor ? z.lineColor : d, K2 = "number" === typeof v[q].lineThickness ? v[q].lineThickness : "number" === typeof z.options.lineThickness ? z.lineThickness : B2, U2 = v[q].lineDashType ? v[q].lineDashType : z.lineDashType, T = 1 === Math.round(K2) % 2 ? 0.5 : 0, O2 = z.upperBoxColor, N = z.lowerBoxColor, sa = l(z.options.fillOpacity) ? 1 : z.fillOpacity, P = z.dataPointIds[q];
                  this._eventManager.objectMap[P] = {
                    id: P,
                    objectType: "dataPoint",
                    dataSeriesIndex: s,
                    dataPointIndex: q,
                    x1: x2,
                    y1: E,
                    x2: A3,
                    y2: k,
                    x3: f2,
                    y3: m,
                    x4: f2,
                    y4: n,
                    y5: p,
                    borderThickness: B2,
                    color: d,
                    stemThickness: ma,
                    stemColor: oa,
                    whiskerThickness: M,
                    whiskerLength: da,
                    whiskerColor: L,
                    lineThickness: K2,
                    lineColor: Q3
                  };
                  c.save();
                  0 < ma && (c.beginPath(), c.strokeStyle = oa, c.lineWidth = ma, c.setLineDash && c.setLineDash(I(S2, ma)), c.moveTo(f2 - D, k), c.lineTo(f2 - D, E), c.stroke(), c.moveTo(f2 - D, n), c.lineTo(f2 - D, m), c.stroke());
                  c.restore();
                  b.lineWidth = Math.max(B2, 4);
                  c.beginPath();
                  ea(c, x2, Math.min(p, k), A3, Math.max(k, p), N, 0, d, w ? t3 : false, w ? false : t3, false, false, sa);
                  c.beginPath();
                  ea(c, x2, Math.min(m, p), A3, Math.max(p, m), O2, 0, d, w ? false : t3, w ? t3 : false, false, false, sa);
                  c.beginPath();
                  c.lineWidth = B2;
                  c.strokeStyle = d;
                  c.rect(x2 - F2, Math.min(k, m) - F2, A3 - x2 + 2 * F2, Math.max(k, m) - Math.min(k, m) + 2 * F2);
                  c.stroke();
                  c.save();
                  0 < K2 && (c.beginPath(), c.globalAlpha = 1, c.setLineDash && c.setLineDash(I(U2, K2)), c.strokeStyle = Q3, c.lineWidth = K2, c.moveTo(x2, p - T), c.lineTo(A3, p - T), c.stroke());
                  c.restore();
                  c.save();
                  0 < M && (c.beginPath(), c.setLineDash && c.setLineDash(I(ca, M)), c.strokeStyle = L, c.lineWidth = M, c.moveTo(f2 - da / 2 << 0, n - fa), c.lineTo(f2 + da / 2 << 0, n - fa), c.stroke(), c.moveTo(f2 - da / 2 << 0, E + fa), c.lineTo(f2 + da / 2 << 0, E + fa), c.stroke());
                  c.restore();
                  r && (d = V(P), b.strokeStyle = d, b.lineWidth = ma, 0 < ma && (b.moveTo(f2 - F2 - D, k), b.lineTo(f2 - F2 - D, Math.max(E, n)), b.stroke(), b.moveTo(f2 - F2 - D, Math.min(E, n)), b.lineTo(f2 - F2 - D, m), b.stroke()), ea(b, x2, Math.max(k, m), A3, Math.min(k, m), d, 0, null, false, false, false, false), 0 < M && (b.beginPath(), b.lineWidth = M, b.moveTo(f2 + da / 2, n - fa), b.lineTo(f2 - da / 2, n - fa), b.stroke(), b.moveTo(f2 + da / 2, E + fa), b.lineTo(f2 - da / 2, E + fa), b.stroke()));
                  (v[q].indexLabel || z.indexLabel || v[q].indexLabelFormatter || z.indexLabelFormatter) && this._indexLabels.push({
                    chartType: z.type,
                    dataPoint: v[q],
                    dataSeries: z,
                    point: {
                      x: x2 + (A3 - x2) / 2,
                      y: a.axisY.reversed ? E : n
                    },
                    direction: 1,
                    bounds: {
                      x1: x2,
                      y1: Math.min(E, n),
                      x2: A3,
                      y2: Math.max(E, n)
                    },
                    color: d
                  });
                }
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(h.x1, h.y1, h.width, h.height), b.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.fadeInAnimation,
              easingFunction: R.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        x.prototype.renderRangeColumn = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, h = 0, q, f2, E, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            q = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
            var k = a.axisX.dataInfo.minDiff;
            isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
            k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > q && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, q));
            !this.dataPointMaxWidth && this.dataPointMinWidth && q < h && (q = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            k < h && (k = h);
            k > q && (k = q);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
              var n = a.dataSeriesIndexes[m], p = this.data[n], g = p.dataPoints;
              if (0 < g.length) {
                for (var C = 5 < k && p.bevelEnabled ? true : false, h = 0; h < g.length; h++) if (g[h].getTime ? E = g[h].x.getTime() : E = g[h].x, !(E < a.axisX.dataInfo.viewPortMin || E > a.axisX.dataInfo.viewPortMax) && !l(g[h].y) && g[h].y.length && "number" === typeof g[h].y[0] && "number" === typeof g[h].y[1]) {
                  b = a.axisX.convertValueToPixel(E);
                  q = a.axisY.convertValueToPixel(g[h].y[0]);
                  f2 = a.axisY.convertValueToPixel(g[h].y[1]);
                  var w = a.axisX.reversed ? b + a.plotType.totalDataSeries * k / 2 - (a.previousDataSeriesCount + m) * k << 0 : b - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + m) * k << 0, y = a.axisX.reversed ? w - k << 0 : w + k << 0, b = g[h].color ? g[h].color : p._colorSet[h % p._colorSet.length];
                  if (q > f2) {
                    var s = q;
                    q = f2;
                    f2 = s;
                  }
                  s = p.dataPointIds[h];
                  this._eventManager.objectMap[s] = {
                    id: s,
                    objectType: "dataPoint",
                    dataSeriesIndex: n,
                    dataPointIndex: h,
                    x1: w,
                    y1: q,
                    x2: y,
                    y2: f2
                  };
                  ea(c, a.axisX.reversed ? y : w, q, a.axisX.reversed ? w : y, f2, b, 0, b, C, C, false, false, p.fillOpacity);
                  b = V(s);
                  r && ea(this._eventManager.ghostCtx, a.axisX.reversed ? y : w, q, a.axisX.reversed ? w : y, f2, b, 0, null, false, false, false, false);
                  if (g[h].indexLabel || p.indexLabel || g[h].indexLabelFormatter || p.indexLabelFormatter) this._indexLabels.push({
                    chartType: "rangeColumn",
                    dataPoint: g[h],
                    dataSeries: p,
                    indexKeyword: 0,
                    point: {
                      x: w + (y - w) / 2,
                      y: g[h].y[1] >= g[h].y[0] ? f2 : q
                    },
                    direction: g[h].y[1] >= g[h].y[0] ? -1 : 1,
                    bounds: {
                      x1: w,
                      y1: Math.min(q, f2),
                      x2: y,
                      y2: Math.max(q, f2)
                    },
                    color: b
                  }), this._indexLabels.push({
                    chartType: "rangeColumn",
                    dataPoint: g[h],
                    dataSeries: p,
                    indexKeyword: 1,
                    point: {
                      x: w + (y - w) / 2,
                      y: g[h].y[1] >= g[h].y[0] ? q : f2
                    },
                    direction: g[h].y[1] >= g[h].y[0] ? 1 : -1,
                    bounds: {
                      x1: w,
                      y1: Math.min(q, f2),
                      x2: y,
                      y2: Math.max(q, f2)
                    },
                    color: b
                  });
                }
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.fadeInAnimation,
              easingFunction: R.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        x.prototype.renderError = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e, b = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? false : true : false;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = null, h = false, q = this.plotArea, f2 = 0, E, k, m, n, p, g, C, w = a.axisX.dataInfo.minDiff;
            isFinite(w) || (w = 0.3 * Math.abs(a.axisX.range));
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(q.x1, q.y1, q.width, q.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(q.x1, q.y1, q.width, q.height), this._eventManager.ghostCtx.clip());
            for (var y = 0, s = 0; s < this.data.length; s++) !this.data[s].type.match(/(bar|column)/ig) || !this.data[s].visible || this.data[s].type.match(/(stacked)/ig) && y || y++;
            for (var z = 0; z < a.dataSeriesIndexes.length; z++) {
              var v = a.dataSeriesIndexes[z], t3 = this.data[v], x2 = t3.dataPoints, B2 = l(t3._linkedSeries) ? false : t3._linkedSeries.type.match(/(bar|column)/ig) && t3._linkedSeries.visible ? true : false, I2 = 0;
              if (B2) for (d = t3._linkedSeries.id, s = 0; s < d; s++) !this.data[s].type.match(/(bar|column)/ig) || !this.data[s].visible || this.data[s].type.match(/(stacked)/ig) && I2 || (this.data[s].type.match(/(range)/ig) && (h = true), I2++);
              d = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
              f2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (B2 ? y : 1))) << 0 : 0.3 * this.width;
              h && (f2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (B2 ? y : 1))) << 0 : 0.03 * this.width);
              s = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((b ? q.height : q.width) * (a.axisX.logarithmic ? Math.log(w) / Math.log(a.axisX.range) : Math.abs(w) / Math.abs(a.axisX.range)) / (B2 ? y : 1)) << 0;
              this.dataPointMaxWidth && d > f2 && (d = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f2));
              !this.dataPointMaxWidth && this.dataPointMinWidth && f2 < d && (f2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, d));
              s < d && (s = d);
              s > f2 && (s = f2);
              if (0 < x2.length) for (var F2 = t3._colorSet, f2 = 0; f2 < x2.length; f2++) {
                var d = t3.lineColor = t3.options.color ? t3.options.color : F2[0], L = {
                  color: x2[f2].whiskerColor ? x2[f2].whiskerColor : x2[f2].color ? t3.whiskerColor ? t3.whiskerColor : x2[f2].color : t3.whiskerColor ? t3.whiskerColor : d,
                  thickness: l(x2[f2].whiskerThickness) ? t3.whiskerThickness : x2[f2].whiskerThickness,
                  dashType: x2[f2].whiskerDashType ? x2[f2].whiskerDashType : t3.whiskerDashType,
                  length: l(x2[f2].whiskerLength) ? l(t3.options.whiskerLength) ? s : t3.options.whiskerLength : x2[f2].whiskerLength,
                  trimLength: l(x2[f2].whiskerLength) ? l(t3.options.whiskerLength) ? 50 : 0 : 0
                };
                L.length = "number" === typeof L.length ? 0 >= L.length ? 0 : L.length >= s ? s : L.length : "string" === typeof L.length ? parseInt(L.length) * s / 100 > s ? s : parseInt(L.length) * s / 100 > s : s;
                L.thickness = "number" === typeof L.thickness ? 0 > L.thickness ? 0 : Math.round(L.thickness) : 2;
                var M = {
                  color: x2[f2].stemColor ? x2[f2].stemColor : x2[f2].color ? t3.stemColor ? t3.stemColor : x2[f2].color : t3.stemColor ? t3.stemColor : d,
                  thickness: x2[f2].stemThickness ? x2[f2].stemThickness : t3.stemThickness,
                  dashType: x2[f2].stemDashType ? x2[f2].stemDashType : t3.stemDashType
                };
                M.thickness = "number" === typeof M.thickness ? 0 > M.thickness ? 0 : Math.round(M.thickness) : 2;
                x2[f2].getTime ? C = x2[f2].x.getTime() : C = x2[f2].x;
                if (!(C < a.axisX.dataInfo.viewPortMin || C > a.axisX.dataInfo.viewPortMax) && !l(x2[f2].y) && x2[f2].y.length && "number" === typeof x2[f2].y[0] && "number" === typeof x2[f2].y[1]) {
                  var ca = a.axisX.convertValueToPixel(C);
                  b ? k = ca : E = ca;
                  ca = a.axisY.convertValueToPixel(x2[f2].y[0]);
                  b ? m = ca : p = ca;
                  ca = a.axisY.convertValueToPixel(x2[f2].y[1]);
                  b ? n = ca : g = ca;
                  b ? (p = a.axisX.reversed ? k + (B2 ? y : 1) * s / 2 - (B2 ? I2 - 1 : 0) * s << 0 : k - (B2 ? y : 1) * s / 2 + (B2 ? I2 - 1 : 0) * s << 0, g = a.axisX.reversed ? p - s << 0 : p + s << 0) : (m = a.axisX.reversed ? E + (B2 ? y : 1) * s / 2 - (B2 ? I2 - 1 : 0) * s << 0 : E - (B2 ? y : 1) * s / 2 + (B2 ? I2 - 1 : 0) * s << 0, n = a.axisX.reversed ? m - s << 0 : m + s << 0);
                  !b && p > g && (ca = p, p = g, g = ca);
                  b && m > n && (ca = m, m = n, n = ca);
                  ca = t3.dataPointIds[f2];
                  this._eventManager.objectMap[ca] = {
                    id: ca,
                    objectType: "dataPoint",
                    dataSeriesIndex: v,
                    dataPointIndex: f2,
                    x1: Math.min(m, n),
                    y1: Math.min(p, g),
                    x2: Math.max(n, m),
                    y2: Math.max(g, p),
                    isXYSwapped: b,
                    stemProperties: M,
                    whiskerProperties: L
                  };
                  A2(c, Math.min(m, n), Math.min(p, g), Math.max(n, m), Math.max(g, p), d, L, M, b);
                  r && A2(this._eventManager.ghostCtx, m, p, n, g, d, L, M, b);
                  if (x2[f2].indexLabel || t3.indexLabel || x2[f2].indexLabelFormatter || t3.indexLabelFormatter) this._indexLabels.push({
                    chartType: "error",
                    dataPoint: x2[f2],
                    dataSeries: t3,
                    indexKeyword: 0,
                    point: {
                      x: b ? x2[f2].y[1] >= x2[f2].y[0] ? m : n : m + (n - m) / 2,
                      y: b ? p + (g - p) / 2 : x2[f2].y[1] >= x2[f2].y[0] ? g : p
                    },
                    direction: x2[f2].y[1] >= x2[f2].y[0] ? -1 : 1,
                    bounds: {
                      x1: b ? Math.min(m, n) : m,
                      y1: b ? p : Math.min(p, g),
                      x2: b ? Math.max(m, n) : n,
                      y2: b ? g : Math.max(p, g)
                    },
                    color: d,
                    axisSwapped: b
                  }), this._indexLabels.push({
                    chartType: "error",
                    dataPoint: x2[f2],
                    dataSeries: t3,
                    indexKeyword: 1,
                    point: {
                      x: b ? x2[f2].y[1] >= x2[f2].y[0] ? n : m : m + (n - m) / 2,
                      y: b ? p + (g - p) / 2 : x2[f2].y[1] >= x2[f2].y[0] ? p : g
                    },
                    direction: x2[f2].y[1] >= x2[f2].y[0] ? 1 : -1,
                    bounds: {
                      x1: b ? Math.min(m, n) : m,
                      y1: b ? p : Math.min(p, g),
                      x2: b ? Math.max(m, n) : n,
                      y2: b ? g : Math.max(p, g)
                    },
                    color: d,
                    axisSwapped: b
                  });
                }
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(q.x1, q.y1, q.width, q.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.fadeInAnimation,
              easingFunction: R.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        x.prototype.renderRangeBar = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, d = this.plotArea, h = 0, q, f2, E, k, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            q = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
            var m = a.axisX.dataInfo.minDiff;
            isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
            m = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (d.height * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > q && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, q));
            !this.dataPointMaxWidth && this.dataPointMinWidth && q < h && (q = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            m < h && (m = h);
            m > q && (m = q);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
              var p = a.dataSeriesIndexes[n], g = this.data[p], C = g.dataPoints;
              if (0 < C.length) {
                var w = 5 < m && g.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (h = 0; h < C.length; h++) if (C[h].getTime ? k = C[h].x.getTime() : k = C[h].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !l(C[h].y) && C[h].y.length && "number" === typeof C[h].y[0] && "number" === typeof C[h].y[1]) {
                  q = a.axisY.convertValueToPixel(C[h].y[0]);
                  f2 = a.axisY.convertValueToPixel(C[h].y[1]);
                  E = a.axisX.convertValueToPixel(k);
                  E = a.axisX.reversed ? E + a.plotType.totalDataSeries * m / 2 - (a.previousDataSeriesCount + n) * m << 0 : E - a.plotType.totalDataSeries * m / 2 + (a.previousDataSeriesCount + n) * m << 0;
                  var y = a.axisX.reversed ? E - m << 0 : E + m << 0;
                  q > f2 && (b = q, q = f2, f2 = b);
                  b = C[h].color ? C[h].color : g._colorSet[h % g._colorSet.length];
                  ea(c, q, a.axisX.reversed ? y : E, f2, a.axisX.reversed ? E : y, b, 0, null, w, false, false, false, g.fillOpacity);
                  b = g.dataPointIds[h];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: p,
                    dataPointIndex: h,
                    x1: q,
                    y1: E,
                    x2: f2,
                    y2: y
                  };
                  b = V(b);
                  r && ea(this._eventManager.ghostCtx, q, a.axisX.reversed ? y : E, f2, a.axisX.reversed ? E : y, b, 0, null, false, false, false, false);
                  if (C[h].indexLabel || g.indexLabel || C[h].indexLabelFormatter || g.indexLabelFormatter) this._indexLabels.push({
                    chartType: "rangeBar",
                    dataPoint: C[h],
                    dataSeries: g,
                    indexKeyword: 0,
                    point: {
                      x: C[h].y[1] >= C[h].y[0] ? q : f2,
                      y: E + (y - E) / 2
                    },
                    direction: C[h].y[1] >= C[h].y[0] ? -1 : 1,
                    bounds: {
                      x1: Math.min(q, f2),
                      y1: E,
                      x2: Math.max(q, f2),
                      y2: y
                    },
                    color: b
                  }), this._indexLabels.push({
                    chartType: "rangeBar",
                    dataPoint: C[h],
                    dataSeries: g,
                    indexKeyword: 1,
                    point: {
                      x: C[h].y[1] >= C[h].y[0] ? f2 : q,
                      y: E + (y - E) / 2
                    },
                    direction: C[h].y[1] >= C[h].y[0] ? 1 : -1,
                    bounds: {
                      x1: Math.min(q, f2),
                      y1: E,
                      x2: Math.max(q, f2),
                      y2: y
                    },
                    color: b
                  });
                }
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.fadeInAnimation,
              easingFunction: R.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        x.prototype.renderRangeArea = function(a) {
          function e() {
            if (z) {
              for (var a2 = null, c2 = l2.length - 1; 0 <= c2; c2--) a2 = l2[c2], b.lineTo(a2.x, a2.y2), d.lineTo(a2.x, a2.y2);
              b.closePath();
              b.globalAlpha = m.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              d.fill();
              if (0 < m.lineThickness) {
                b.beginPath();
                b.moveTo(a2.x, a2.y2);
                for (c2 = 0; c2 < l2.length; c2++) a2 = l2[c2], b.lineTo(a2.x, a2.y2);
                b.moveTo(l2[0].x, l2[0].y1);
                for (c2 = 0; c2 < l2.length; c2++) a2 = l2[c2], b.lineTo(a2.x, a2.y1);
                b.stroke();
              }
              b.beginPath();
              b.moveTo(C, w);
              d.beginPath();
              d.moveTo(C, w);
              z = {
                x: C,
                y: w
              };
              l2 = [];
              l2.push({
                x: C,
                y1: w,
                y2: y
              });
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = r ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx, h = [], q = this.plotArea;
            b.save();
            r && d.save();
            b.beginPath();
            b.rect(q.x1, q.y1, q.width, q.height);
            b.clip();
            r && (d.beginPath(), d.rect(q.x1, q.y1, q.width, q.height), d.clip());
            for (var f2 = 0; f2 < a.dataSeriesIndexes.length; f2++) {
              var l2 = [], k = a.dataSeriesIndexes[f2], m = this.data[k], n = m.dataPoints, h = m.id;
              this._eventManager.objectMap[h] = {
                objectType: "dataSeries",
                dataSeriesIndex: k
              };
              h = V(h);
              d.fillStyle = h;
              var h = [], p = true, g = 0, C, w, y, s, z = null;
              if (0 < n.length) {
                var v = m._colorSet[g % m._colorSet.length], x2 = m.lineColor = m.options.lineColor || v, t3 = x2;
                b.fillStyle = v;
                b.strokeStyle = x2;
                b.lineWidth = m.lineThickness;
                var A3 = "solid";
                if (b.setLineDash) {
                  var B2 = I(m.nullDataLineDashType, m.lineThickness), A3 = m.lineDashType, F2 = I(A3, m.lineThickness);
                  b.setLineDash(F2);
                }
                for (var L = true; g < n.length; g++) if (s = n[g].x.getTime ? n[g].x.getTime() : n[g].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !L))) if (null !== n[g].y && n[g].y.length && "number" === typeof n[g].y[0] && "number" === typeof n[g].y[1]) {
                  C = a.axisX.convertValueToPixel(s);
                  w = a.axisY.convertValueToPixel(n[g].y[0]);
                  y = a.axisY.convertValueToPixel(n[g].y[1]);
                  p || L ? (m.connectNullData && !p ? (b.setLineDash && (m.options.nullDataLineDashType || A3 === m.lineDashType && m.lineDashType !== m.nullDataLineDashType) && (l2[l2.length - 1].newLineDashArray = F2, A3 = m.nullDataLineDashType, b.setLineDash(B2)), b.lineTo(C, w), r && d.lineTo(C, w), l2.push({
                    x: C,
                    y1: w,
                    y2: y
                  })) : (b.beginPath(), b.moveTo(C, w), z = {
                    x: C,
                    y: w
                  }, l2 = [], l2.push({
                    x: C,
                    y1: w,
                    y2: y
                  }), r && (d.beginPath(), d.moveTo(C, w))), L = p = false) : (b.lineTo(C, w), l2.push({
                    x: C,
                    y1: w,
                    y2: y
                  }), r && d.lineTo(C, w), 0 == g % 250 && e());
                  s = m.dataPointIds[g];
                  this._eventManager.objectMap[s] = {
                    id: s,
                    objectType: "dataPoint",
                    dataSeriesIndex: k,
                    dataPointIndex: g,
                    x1: C,
                    y1: w,
                    y2: y
                  };
                  g < n.length - 1 && (t3 !== (n[g].lineColor || x2) || A3 !== (n[g].lineDashType || m.lineDashType)) && (e(), t3 = n[g].lineColor || x2, l2[l2.length - 1].newStrokeStyle = t3, b.strokeStyle = t3, b.setLineDash && (n[g].lineDashType ? (A3 = n[g].lineDashType, l2[l2.length - 1].newLineDashArray = I(A3, m.lineThickness), b.setLineDash(l2[l2.length - 1].newLineDashArray)) : (A3 = m.lineDashType, l2[l2.length - 1].newLineDashArray = F2, b.setLineDash(F2))));
                  if (0 !== n[g].markerSize && (0 < n[g].markerSize || 0 < m.markerSize)) {
                    var M = m.getMarkerProperties(g, C, y, b);
                    h.push(M);
                    var ca = V(s);
                    r && h.push({
                      x: C,
                      y,
                      ctx: d,
                      type: M.type,
                      size: M.size,
                      color: ca,
                      borderColor: ca,
                      borderThickness: M.borderThickness
                    });
                    M = m.getMarkerProperties(g, C, w, b);
                    h.push(M);
                    ca = V(s);
                    r && h.push({
                      x: C,
                      y: w,
                      ctx: d,
                      type: M.type,
                      size: M.size,
                      color: ca,
                      borderColor: ca,
                      borderThickness: M.borderThickness
                    });
                  }
                  if (n[g].indexLabel || m.indexLabel || n[g].indexLabelFormatter || m.indexLabelFormatter) this._indexLabels.push({
                    chartType: "rangeArea",
                    dataPoint: n[g],
                    dataSeries: m,
                    indexKeyword: 0,
                    point: {
                      x: C,
                      y: w
                    },
                    direction: n[g].y[0] > n[g].y[1] === a.axisY.reversed ? -1 : 1,
                    color: v
                  }), this._indexLabels.push({
                    chartType: "rangeArea",
                    dataPoint: n[g],
                    dataSeries: m,
                    indexKeyword: 1,
                    point: {
                      x: C,
                      y
                    },
                    direction: n[g].y[0] > n[g].y[1] === a.axisY.reversed ? 1 : -1,
                    color: v
                  });
                } else L || p || e(), L = true;
                e();
                ba.drawMarkers(h);
              }
            }
            r && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(q.x1, q.y1, q.width, q.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return {
              source: c,
              dest: this.plotArea.ctx,
              animationCallback: R.xClipAnimation,
              easingFunction: R.easing.linear,
              animationBase: 0
            };
          }
        };
        x.prototype.renderRangeSplineArea = function(a) {
          function e(a2, c2) {
            var g2 = t2(w, 2);
            if (0 < g2.length) {
              if (0 < k.lineThickness) {
                b.strokeStyle = c2;
                b.setLineDash && b.setLineDash(a2);
                b.beginPath();
                b.moveTo(g2[0].x, g2[0].y);
                for (var e2 = 0; e2 < g2.length - 3; e2 += 3) {
                  if (g2[e2].newStrokeStyle || g2[e2].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(g2[e2].x, g2[e2].y), g2[e2].newStrokeStyle && (b.strokeStyle = g2[e2].newStrokeStyle), g2[e2].newLineDashArray && b.setLineDash(g2[e2].newLineDashArray);
                  b.bezierCurveTo(g2[e2 + 1].x, g2[e2 + 1].y, g2[e2 + 2].x, g2[e2 + 2].y, g2[e2 + 3].x, g2[e2 + 3].y);
                }
              }
              b.beginPath();
              b.moveTo(g2[0].x, g2[0].y);
              r && (d.beginPath(), d.moveTo(g2[0].x, g2[0].y));
              for (e2 = 0; e2 < g2.length - 3; e2 += 3) b.bezierCurveTo(g2[e2 + 1].x, g2[e2 + 1].y, g2[e2 + 2].x, g2[e2 + 2].y, g2[e2 + 3].x, g2[e2 + 3].y), r && d.bezierCurveTo(g2[e2 + 1].x, g2[e2 + 1].y, g2[e2 + 2].x, g2[e2 + 2].y, g2[e2 + 3].x, g2[e2 + 3].y);
              g2 = t2(y, 2);
              b.lineTo(y[y.length - 1].x, y[y.length - 1].y);
              for (e2 = g2.length - 1; 2 < e2; e2 -= 3) b.bezierCurveTo(g2[e2 - 1].x, g2[e2 - 1].y, g2[e2 - 2].x, g2[e2 - 2].y, g2[e2 - 3].x, g2[e2 - 3].y), r && d.bezierCurveTo(g2[e2 - 1].x, g2[e2 - 1].y, g2[e2 - 2].x, g2[e2 - 2].y, g2[e2 - 3].x, g2[e2 - 3].y);
              b.closePath();
              b.globalAlpha = k.fillOpacity;
              b.fill();
              r && (d.closePath(), d.fill());
              b.globalAlpha = 1;
              if (0 < k.lineThickness) {
                b.strokeStyle = c2;
                b.setLineDash && b.setLineDash(a2);
                b.beginPath();
                b.moveTo(g2[0].x, g2[0].y);
                for (var h2 = e2 = 0; e2 < g2.length - 3; e2 += 3, h2++) {
                  if (w[h2].newStrokeStyle || w[h2].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(g2[e2].x, g2[e2].y), w[h2].newStrokeStyle && (b.strokeStyle = w[h2].newStrokeStyle), w[h2].newLineDashArray && b.setLineDash(w[h2].newLineDashArray);
                  b.bezierCurveTo(g2[e2 + 1].x, g2[e2 + 1].y, g2[e2 + 2].x, g2[e2 + 2].y, g2[e2 + 3].x, g2[e2 + 3].y);
                }
                g2 = t2(w, 2);
                b.moveTo(g2[0].x, g2[0].y);
                for (h2 = e2 = 0; e2 < g2.length - 3; e2 += 3, h2++) {
                  if (w[h2].newStrokeStyle || w[h2].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(g2[e2].x, g2[e2].y), w[h2].newStrokeStyle && (b.strokeStyle = w[h2].newStrokeStyle), w[h2].newLineDashArray && b.setLineDash(w[h2].newLineDashArray);
                  b.bezierCurveTo(g2[e2 + 1].x, g2[e2 + 1].y, g2[e2 + 2].x, g2[e2 + 2].y, g2[e2 + 3].x, g2[e2 + 3].y);
                }
                b.stroke();
              }
              b.beginPath();
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = r ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var d = this._eventManager.ghostCtx, h = [], q = this.plotArea;
            b.save();
            r && d.save();
            b.beginPath();
            b.rect(q.x1, q.y1, q.width, q.height);
            b.clip();
            r && (d.beginPath(), d.rect(q.x1, q.y1, q.width, q.height), d.clip());
            for (var f2 = 0; f2 < a.dataSeriesIndexes.length; f2++) {
              var l2 = a.dataSeriesIndexes[f2], k = this.data[l2], m = k.dataPoints, h = k.id;
              this._eventManager.objectMap[h] = {
                objectType: "dataSeries",
                dataSeriesIndex: l2
              };
              h = V(h);
              d.fillStyle = h;
              var h = [], n = 0, p, g, C, w = [], y = [];
              if (0 < m.length) {
                var s = k._colorSet[n % k._colorSet.length], z = k.lineColor = k.options.lineColor || s, v = z;
                b.fillStyle = s;
                b.lineWidth = k.lineThickness;
                var x2 = "solid", A3;
                if (b.setLineDash) {
                  var B2 = I(k.nullDataLineDashType, k.lineThickness), x2 = k.lineDashType;
                  A3 = I(x2, k.lineThickness);
                }
                for (g = false; n < m.length; n++) if (p = m[n].x.getTime ? m[n].x.getTime() : m[n].x, !(p < a.axisX.dataInfo.viewPortMin || p > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !g))) if (null !== m[n].y && m[n].y.length && "number" === typeof m[n].y[0] && "number" === typeof m[n].y[1]) {
                  p = a.axisX.convertValueToPixel(p);
                  g = a.axisY.convertValueToPixel(m[n].y[0]);
                  C = a.axisY.convertValueToPixel(m[n].y[1]);
                  var F2 = k.dataPointIds[n];
                  this._eventManager.objectMap[F2] = {
                    id: F2,
                    objectType: "dataPoint",
                    dataSeriesIndex: l2,
                    dataPointIndex: n,
                    x1: p,
                    y1: g,
                    y2: C
                  };
                  w[w.length] = {
                    x: p,
                    y: g
                  };
                  y[y.length] = {
                    x: p,
                    y: C
                  };
                  n < m.length - 1 && (v !== (m[n].lineColor || z) || x2 !== (m[n].lineDashType || k.lineDashType)) && (v = m[n].lineColor || z, w[w.length - 1].newStrokeStyle = v, b.setLineDash && (m[n].lineDashType ? (x2 = m[n].lineDashType, w[w.length - 1].newLineDashArray = I(x2, k.lineThickness)) : (x2 = k.lineDashType, w[w.length - 1].newLineDashArray = A3)));
                  if (0 !== m[n].markerSize && (0 < m[n].markerSize || 0 < k.markerSize)) {
                    var K2 = k.getMarkerProperties(n, p, g, b);
                    h.push(K2);
                    var L = V(F2);
                    r && h.push({
                      x: p,
                      y: g,
                      ctx: d,
                      type: K2.type,
                      size: K2.size,
                      color: L,
                      borderColor: L,
                      borderThickness: K2.borderThickness
                    });
                    K2 = k.getMarkerProperties(n, p, C, b);
                    h.push(K2);
                    L = V(F2);
                    r && h.push({
                      x: p,
                      y: C,
                      ctx: d,
                      type: K2.type,
                      size: K2.size,
                      color: L,
                      borderColor: L,
                      borderThickness: K2.borderThickness
                    });
                  }
                  if (m[n].indexLabel || k.indexLabel || m[n].indexLabelFormatter || k.indexLabelFormatter) this._indexLabels.push({
                    chartType: "rangeSplineArea",
                    dataPoint: m[n],
                    dataSeries: k,
                    indexKeyword: 0,
                    point: {
                      x: p,
                      y: g
                    },
                    direction: m[n].y[0] <= m[n].y[1] ? -1 : 1,
                    color: s
                  }), this._indexLabels.push({
                    chartType: "rangeSplineArea",
                    dataPoint: m[n],
                    dataSeries: k,
                    indexKeyword: 1,
                    point: {
                      x: p,
                      y: C
                    },
                    direction: m[n].y[0] <= m[n].y[1] ? 1 : -1,
                    color: s
                  });
                  g = false;
                } else 0 < n && !g && (k.connectNullData ? b.setLineDash && 0 < w.length && (k.options.nullDataLineDashType || !m[n - 1].lineDashType) && (w[w.length - 1].newLineDashArray = B2, x2 = k.nullDataLineDashType) : (e(A3, z), w = [], y = [])), g = true;
                e(A3, z);
                ba.drawMarkers(h);
              }
            }
            r && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(q.x1, q.y1, q.width, q.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return {
              source: c,
              dest: this.plotArea.ctx,
              animationCallback: R.xClipAnimation,
              easingFunction: R.easing.linear,
              animationBase: 0
            };
          }
        };
        x.prototype.renderWaterfall = function(a) {
          var e = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx, d = null, h = this.plotArea, q = 0, f2, l2, k, m, n = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), q = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            l2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
            var p = a.axisX.dataInfo.minDiff;
            isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
            p = this.options.dataPointWidth ? this.dataPointWidth : 0.6 * (h.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && q > l2 && (q = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l2));
            !this.dataPointMaxWidth && this.dataPointMinWidth && l2 < q && (l2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, q));
            p < q && (p = q);
            p > l2 && (p = l2);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(h.x1, h.y1, h.width, h.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
            for (var g = 0; g < a.dataSeriesIndexes.length; g++) {
              var C = a.dataSeriesIndexes[g], w = this.data[C], y = w.dataPoints, d = w._colorSet[0];
              w.risingColor = w.options.risingColor ? w.options.risingColor : d;
              w.fallingColor = w.options.fallingColor ? w.options.fallingColor : "#e40a0a";
              var s = "number" === typeof w.options.lineThickness ? Math.round(w.lineThickness) : 1, z = 1 === Math.round(s) % 2 ? -0.5 : 0;
              if (0 < y.length) for (var v = 5 < p && w.bevelEnabled ? true : false, x2 = false, t3 = null, A3 = null, q = 0; q < y.length; q++) if (y[q].getTime ? m = y[q].x.getTime() : m = y[q].x, "number" !== typeof y[q].y) {
                if (0 < q && !x2 && w.connectNullData) var B2 = w.options.nullDataLineDashType || !y[q - 1].lineDashType ? w.nullDataLineDashType : y[q - 1].lineDashType;
                x2 = true;
              } else {
                f2 = a.axisX.convertValueToPixel(m);
                l2 = 0 === w.dataPointEOs[q].cumulativeSum ? n : a.axisY.convertValueToPixel(w.dataPointEOs[q].cumulativeSum);
                k = 0 === w.dataPointEOs[q].cumulativeSumYStartValue ? n : a.axisY.convertValueToPixel(w.dataPointEOs[q].cumulativeSumYStartValue);
                f2 = a.axisX.reversed ? f2 + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + g) * p << 0 : f2 - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + g) * p << 0;
                var F2 = a.axisX.reversed ? f2 - p << 0 : f2 + p << 0;
                l2 > k && (d = l2, l2 = k, k = d);
                a.axisY.reversed && (d = l2, l2 = k, k = d);
                d = w.dataPointIds[q];
                this._eventManager.objectMap[d] = {
                  id: d,
                  objectType: "dataPoint",
                  dataSeriesIndex: C,
                  dataPointIndex: q,
                  x1: f2,
                  y1: l2,
                  x2: F2,
                  y2: k
                };
                var L = y[q].color ? y[q].color : 0 < y[q].y ? w.risingColor : w.fallingColor;
                ea(c, a.axisX.reversed ? F2 : f2, a.axisY.reversed ? k : l2, a.axisX.reversed ? f2 : F2, a.axisY.reversed ? l2 : k, L, 0, L, v, v, false, false, w.fillOpacity);
                d = V(d);
                r && ea(this._eventManager.ghostCtx, a.axisX.reversed ? F2 : f2, l2, a.axisX.reversed ? f2 : F2, k, d, 0, null, false, false, false, false);
                var M, L = f2;
                M = "undefined" !== typeof y[q].isIntermediateSum && true === y[q].isIntermediateSum || "undefined" !== typeof y[q].isCumulativeSum && true === y[q].isCumulativeSum ? 0 < y[q].y ? l2 : k : 0 < y[q].y ? k : l2;
                0 < q && t3 && (!x2 || w.connectNullData) && (x2 && c.setLineDash && c.setLineDash(I(B2, s)), c.beginPath(), c.moveTo(t3, A3 - z), c.lineTo(L, M - z), 0 < s && c.stroke(), r && (b.beginPath(), b.moveTo(t3, A3 - z), b.lineTo(L, M - z), 0 < s && b.stroke()));
                x2 = false;
                t3 = F2;
                A3 = 0 < y[q].y ? l2 : k;
                L = y[q].lineDashType ? y[q].lineDashType : w.options.lineDashType ? w.options.lineDashType : "shortDash";
                c.strokeStyle = y[q].lineColor ? y[q].lineColor : w.options.lineColor ? w.options.lineColor : "#9e9e9e";
                c.lineWidth = s;
                c.setLineDash && (L = I(L, s), c.setLineDash(L));
                (y[q].indexLabel || w.indexLabel || y[q].indexLabelFormatter || w.indexLabelFormatter) && this._indexLabels.push({
                  chartType: "waterfall",
                  dataPoint: y[q],
                  dataSeries: w,
                  point: {
                    x: f2 + (F2 - f2) / 2,
                    y: 0 <= y[q].y ? l2 : k
                  },
                  direction: 0 > y[q].y === a.axisY.reversed ? 1 : -1,
                  bounds: {
                    x1: f2,
                    y1: Math.min(l2, k),
                    x2: F2,
                    y2: Math.max(l2, k)
                  },
                  color: d
                });
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.fadeInAnimation,
              easingFunction: R.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        var ja2 = function(a, e, c, b, d, h, q, f2, l2) {
          if (!(0 > c)) {
            "undefined" === typeof f2 && (f2 = 1);
            if (!r) {
              var k = Number((q % (2 * Math.PI)).toFixed(8));
              Number((h % (2 * Math.PI)).toFixed(8)) === k && (q -= 1e-4);
            }
            a.save();
            a.globalAlpha = f2;
            "pie" === d ? (a.beginPath(), a.moveTo(e.x, e.y), a.arc(e.x, e.y, c, h, q, false), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === d && (a.beginPath(), a.arc(e.x, e.y, c, h, q, false), 0 <= l2 && a.arc(e.x, e.y, l2 * c, q, h, true), a.closePath(), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
            a.globalAlpha = 1;
            a.restore();
          }
        };
        x.prototype.renderPie = function(a) {
          function e() {
            if (k && m) {
              var a2 = 0, b2 = 0, c2 = 0, d2 = 0;
              l(k.options.indexLabelMaxWidth) && (k.indexLabelMaxWidth = 0.33 * p.width);
              for (var e2 = 0; e2 < m.length; e2++) {
                var h2 = m[e2], q2 = k.dataPointIds[e2];
                g[e2].id = q2;
                g[e2].objectType = "dataPoint";
                g[e2].dataPointIndex = e2;
                g[e2].dataSeriesIndex = 0;
                var f3 = g[e2], n2 = {
                  percent: null,
                  total: null
                }, u = null, n2 = r2.getPercentAndTotal(k, h2);
                if (k.indexLabelFormatter || h2.indexLabelFormatter) u = {
                  chart: r2.options,
                  dataSeries: k,
                  dataPoint: h2,
                  total: n2.total,
                  percent: n2.percent
                };
                n2 = h2.indexLabelFormatter ? h2.indexLabelFormatter(u) : h2.indexLabel ? r2.replaceKeywordsWithValue(h2.indexLabel, h2, k, e2) : k.indexLabelFormatter ? k.indexLabelFormatter(u) : k.indexLabel ? r2.replaceKeywordsWithValue(k.indexLabel, h2, k, e2) : h2.label ? h2.label : "";
                r2._eventManager.objectMap[q2] = f3;
                f3.center = {
                  x: v.x,
                  y: v.y
                };
                f3.y = h2.y;
                f3.radius = B2;
                f3.percentInnerRadius = K2;
                f3.indexLabelText = n2;
                f3.indexLabelPlacement = k.indexLabelPlacement;
                f3.indexLabelLineColor = h2.indexLabelLineColor ? h2.indexLabelLineColor : k.options.indexLabelLineColor ? k.options.indexLabelLineColor : h2.color ? h2.color : k._colorSet[e2 % k._colorSet.length];
                f3.indexLabelLineThickness = l(h2.indexLabelLineThickness) ? k.indexLabelLineThickness : h2.indexLabelLineThickness;
                f3.indexLabelLineDashType = h2.indexLabelLineDashType ? h2.indexLabelLineDashType : k.indexLabelLineDashType;
                f3.indexLabelFontColor = h2.indexLabelFontColor ? h2.indexLabelFontColor : k.indexLabelFontColor;
                f3.indexLabelFontStyle = h2.indexLabelFontStyle ? h2.indexLabelFontStyle : k.indexLabelFontStyle;
                f3.indexLabelFontWeight = h2.indexLabelFontWeight ? h2.indexLabelFontWeight : k.indexLabelFontWeight;
                f3.indexLabelFontSize = l(h2.indexLabelFontSize) ? k.indexLabelFontSize : h2.indexLabelFontSize;
                f3.indexLabelFontFamily = h2.indexLabelFontFamily ? h2.indexLabelFontFamily : k.indexLabelFontFamily;
                f3.indexLabelBackgroundColor = h2.indexLabelBackgroundColor ? h2.indexLabelBackgroundColor : k.options.indexLabelBackgroundColor ? k.options.indexLabelBackgroundColor : k.indexLabelBackgroundColor;
                f3.indexLabelBorderColor = h2.indexLabelBorderColor ? h2.indexLabelBorderColor : k.options.indexLabelBorderColor ? k.options.indexLabelBorderColor : k.indexLabelBorderColor;
                f3.indexLabelBorderThickness = h2.indexLabelBorderThickness ? h2.indexLabelBorderThickness : k.options.indexLabelBorderThickness ? k.options.indexLabelBorderThickness : k.indexLabelBorderThickness;
                f3.indexLabelPadding = h2.indexLabelPadding ? h2.indexLabelPadding : k.options.indexLabelPadding ? k.options.indexLabelPadding : k.indexLabelPadding;
                f3.indexLabelMaxWidth = h2.indexLabelMaxWidth ? h2.indexLabelMaxWidth : k.indexLabelMaxWidth;
                f3.indexLabelWrap = "undefined" !== typeof h2.indexLabelWrap ? h2.indexLabelWrap : k.indexLabelWrap;
                f3.indexLabelTextAlign = h2.indexLabelTextAlign ? h2.indexLabelTextAlign : k.indexLabelTextAlign ? k.indexLabelTextAlign : "left";
                f3.startAngle = 0 === e2 ? k.startAngle ? k.startAngle / 180 * Math.PI : 0 : g[e2 - 1].endAngle;
                f3.startAngle = (f3.startAngle + 2 * Math.PI) % (2 * Math.PI);
                f3.endAngle = f3.startAngle + 2 * Math.PI / t3 * Math.abs(h2.y);
                h2 = (f3.endAngle + f3.startAngle) / 2;
                h2 = (h2 + 2 * Math.PI) % (2 * Math.PI);
                f3.midAngle = h2;
                if (f3.midAngle > Math.PI / 2 - s && f3.midAngle < Math.PI / 2 + s) {
                  if (0 === a2 || g[c2].midAngle > f3.midAngle) c2 = e2;
                  a2++;
                } else if (f3.midAngle > 3 * Math.PI / 2 - s && f3.midAngle < 3 * Math.PI / 2 + s) {
                  if (0 === b2 || g[d2].midAngle > f3.midAngle) d2 = e2;
                  b2++;
                }
                f3.hemisphere = h2 > Math.PI / 2 && h2 <= 3 * Math.PI / 2 ? "left" : "right";
                f3.indexLabelTextBlock = new la(r2.plotArea.ctx, {
                  fontSize: f3.indexLabelFontSize,
                  fontFamily: f3.indexLabelFontFamily,
                  fontColor: f3.indexLabelFontColor,
                  fontStyle: f3.indexLabelFontStyle,
                  fontWeight: f3.indexLabelFontWeight,
                  textAlign: f3.indexLabelTextAlign,
                  backgroundColor: f3.indexLabelBackgroundColor,
                  borderColor: f3.indexLabelBorderColor,
                  borderThickness: f3.indexLabelBorderThickness,
                  maxWidth: f3.indexLabelMaxWidth,
                  maxHeight: f3.indexLabelWrap ? 5 * f3.indexLabelFontSize : 1.5 * f3.indexLabelFontSize,
                  text: f3.indexLabelText,
                  padding: f3.indexLabelPadding,
                  textBaseline: "middle"
                });
                f3.indexLabelTextBlock.measureText();
              }
              q2 = h2 = 0;
              n2 = false;
              for (e2 = 0; e2 < m.length; e2++) f3 = g[(c2 + e2) % m.length], 1 < a2 && f3.midAngle > Math.PI / 2 - s && f3.midAngle < Math.PI / 2 + s && (h2 <= a2 / 2 && !n2 ? (f3.hemisphere = "right", h2++) : (f3.hemisphere = "left", n2 = true));
              n2 = false;
              for (e2 = 0; e2 < m.length; e2++) f3 = g[(d2 + e2) % m.length], 1 < b2 && f3.midAngle > 3 * Math.PI / 2 - s && f3.midAngle < 3 * Math.PI / 2 + s && (q2 <= b2 / 2 && !n2 ? (f3.hemisphere = "left", q2++) : (f3.hemisphere = "right", n2 = true));
            }
          }
          function c(a2, b2) {
            var c2 = r2.plotArea.ctx;
            c2.clearRect(p.x1, p.y1, p.width, p.height);
            c2.fillStyle = r2.backgroundColor;
            c2.fillRect(p.x1, p.y1, p.width, p.height);
            for (c2 = 0; c2 < m.length; c2++) {
              var e2 = g[c2].startAngle, d2 = g[c2].endAngle;
              if (d2 > e2) {
                var h2 = 0.07 * B2 * Math.cos(g[c2].midAngle), q2 = 0.07 * B2 * Math.sin(g[c2].midAngle), f3 = false;
                if (m[c2].exploded) {
                  if (1e-9 < Math.abs(g[c2].center.x - (v.x + h2)) || 1e-9 < Math.abs(g[c2].center.y - (v.y + q2))) g[c2].center.x = v.x + h2 * a2, g[c2].center.y = v.y + q2 * a2, f3 = true;
                } else if (0 < Math.abs(g[c2].center.x - v.x) || 0 < Math.abs(g[c2].center.y - v.y)) g[c2].center.x = v.x + h2 * (1 - a2), g[c2].center.y = v.y + q2 * (1 - a2), f3 = true;
                f3 && b2 && (h2 = {}, h2.dataSeries = k, h2.dataPoint = k.dataPoints[c2], h2.index = c2, r2.toolTip.highlightObjects([h2]));
                ja2(r2.plotArea.ctx, g[c2].center, g[c2].radius, m[c2].color ? m[c2].color : k._colorSet[c2 % k._colorSet.length], k.type, e2, d2, k.fillOpacity, g[c2].percentInnerRadius);
              }
            }
            c2 = r2.plotArea.ctx;
            c2.save();
            c2.fillStyle = "black";
            c2.strokeStyle = "grey";
            c2.textBaseline = "middle";
            c2.lineJoin = "round";
            for (e2 = e2 = 0; e2 < m.length; e2++) d2 = g[e2], d2.indexLabelText && (d2.indexLabelTextBlock.y -= d2.indexLabelTextBlock.height / 2 - d2.indexLabelTextBlock.fontSize / 2, h2 = 0, h2 = "left" === d2.hemisphere ? "inside" !== k.indexLabelPlacement ? -(d2.indexLabelTextBlock.width + n) : -d2.indexLabelTextBlock.width / 2 : "inside" !== k.indexLabelPlacement ? n : -d2.indexLabelTextBlock.width / 2, d2.indexLabelTextBlock.x += h2, d2.indexLabelTextBlock.render(true), d2.indexLabelTextBlock.x -= h2, d2.indexLabelTextBlock.y += d2.indexLabelTextBlock.height / 2 - d2.indexLabelTextBlock.fontSize / 2, "inside" !== d2.indexLabelPlacement && 0 < d2.indexLabelLineThickness && (h2 = d2.center.x + B2 * Math.cos(d2.midAngle), q2 = d2.center.y + B2 * Math.sin(d2.midAngle), c2.strokeStyle = d2.indexLabelLineColor, c2.lineWidth = d2.indexLabelLineThickness, c2.setLineDash && c2.setLineDash(I(d2.indexLabelLineDashType, d2.indexLabelLineThickness)), c2.beginPath(), c2.moveTo(h2, q2), c2.lineTo(d2.indexLabelTextBlock.x, d2.indexLabelTextBlock.y), c2.lineTo(d2.indexLabelTextBlock.x + ("left" === d2.hemisphere ? -n : n), d2.indexLabelTextBlock.y), c2.stroke()), c2.lineJoin = "miter");
            c2.save();
          }
          function b(a2, b2) {
            var c2 = 0, c2 = a2.indexLabelTextBlock.y - a2.indexLabelTextBlock.height / 2, g2 = a2.indexLabelTextBlock.y + a2.indexLabelTextBlock.height / 2, d2 = b2.indexLabelTextBlock.y - b2.indexLabelTextBlock.height / 2, e2 = b2.indexLabelTextBlock.y + b2.indexLabelTextBlock.height / 2;
            return c2 = b2.indexLabelTextBlock.y > a2.indexLabelTextBlock.y ? d2 - g2 : c2 - e2;
          }
          function d(a2) {
            for (var c2 = null, d2 = 1; d2 < m.length; d2++) if (c2 = (a2 + d2 + g.length) % g.length, g[c2].hemisphere !== g[a2].hemisphere) {
              c2 = null;
              break;
            } else if (g[c2].indexLabelText && c2 !== a2 && (0 > b(g[c2], g[a2]) || ("right" === g[a2].hemisphere ? g[c2].indexLabelTextBlock.y >= g[a2].indexLabelTextBlock.y : g[c2].indexLabelTextBlock.y <= g[a2].indexLabelTextBlock.y))) break;
            else c2 = null;
            return c2;
          }
          function h(a2, c2, e2) {
            e2 = (e2 || 0) + 1;
            if (1e3 < e2) return 0;
            c2 = c2 || 0;
            var q2 = 0, k2 = v.y - 1 * w, f3 = v.y + 1 * w;
            if (0 <= a2 && a2 < m.length) {
              var l2 = g[a2];
              if (0 > c2 && l2.indexLabelTextBlock.y < k2 || 0 < c2 && l2.indexLabelTextBlock.y > f3) return 0;
              var n2 = 0, p2 = 0, p2 = n2 = n2 = 0;
              0 > c2 ? l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2 > k2 && l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2 + c2 < k2 && (c2 = -(k2 - (l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2 + c2))) : l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2 < k2 && l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2 + c2 > f3 && (c2 = l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2 + c2 - f3);
              c2 = l2.indexLabelTextBlock.y + c2;
              k2 = 0;
              k2 = "right" === l2.hemisphere ? v.x + Math.sqrt(Math.pow(w, 2) - Math.pow(c2 - v.y, 2)) : v.x - Math.sqrt(Math.pow(w, 2) - Math.pow(c2 - v.y, 2));
              p2 = v.x + B2 * Math.cos(l2.midAngle);
              n2 = v.y + B2 * Math.sin(l2.midAngle);
              n2 = Math.sqrt(Math.pow(k2 - p2, 2) + Math.pow(c2 - n2, 2));
              p2 = Math.acos(B2 / w);
              n2 = Math.acos((w * w + B2 * B2 - n2 * n2) / (2 * B2 * w));
              c2 = n2 < p2 ? c2 - l2.indexLabelTextBlock.y : 0;
              k2 = null;
              for (f3 = 1; f3 < m.length; f3++) if (k2 = (a2 - f3 + g.length) % g.length, g[k2].hemisphere !== g[a2].hemisphere) {
                k2 = null;
                break;
              } else if (g[k2].indexLabelText && g[k2].hemisphere === g[a2].hemisphere && k2 !== a2 && (0 > b(g[k2], g[a2]) || ("right" === g[a2].hemisphere ? g[k2].indexLabelTextBlock.y <= g[a2].indexLabelTextBlock.y : g[k2].indexLabelTextBlock.y >= g[a2].indexLabelTextBlock.y))) break;
              else k2 = null;
              p2 = k2;
              n2 = d(a2);
              f3 = k2 = 0;
              0 > c2 ? (f3 = "right" === l2.hemisphere ? p2 : n2, q2 = c2, null !== f3 && (p2 = -c2, c2 = l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2 - (g[f3].indexLabelTextBlock.y + g[f3].indexLabelTextBlock.height / 2), c2 - p2 < x2 && (k2 = -p2, f3 = h(f3, k2, e2 + 1), +f3.toFixed(z) > +k2.toFixed(z) && (q2 = c2 > x2 ? -(c2 - x2) : -(p2 - (f3 - k2)))))) : 0 < c2 && (f3 = "right" === l2.hemisphere ? n2 : p2, q2 = c2, null !== f3 && (p2 = c2, c2 = g[f3].indexLabelTextBlock.y - g[f3].indexLabelTextBlock.height / 2 - (l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2), c2 - p2 < x2 && (k2 = p2, f3 = h(f3, k2, e2 + 1), +f3.toFixed(z) < +k2.toFixed(z) && (q2 = c2 > x2 ? c2 - x2 : p2 - (k2 - f3)))));
              q2 && (e2 = l2.indexLabelTextBlock.y + q2, c2 = 0, c2 = "right" === l2.hemisphere ? v.x + Math.sqrt(Math.pow(w, 2) - Math.pow(e2 - v.y, 2)) : v.x - Math.sqrt(Math.pow(w, 2) - Math.pow(e2 - v.y, 2)), l2.midAngle > Math.PI / 2 - s && l2.midAngle < Math.PI / 2 + s ? (k2 = (a2 - 1 + g.length) % g.length, k2 = g[k2], a2 = g[(a2 + 1 + g.length) % g.length], "left" === l2.hemisphere && "right" === k2.hemisphere && c2 > k2.indexLabelTextBlock.x ? c2 = k2.indexLabelTextBlock.x - 15 : "right" === l2.hemisphere && "left" === a2.hemisphere && c2 < a2.indexLabelTextBlock.x && (c2 = a2.indexLabelTextBlock.x + 15)) : l2.midAngle > 3 * Math.PI / 2 - s && l2.midAngle < 3 * Math.PI / 2 + s && (k2 = (a2 - 1 + g.length) % g.length, k2 = g[k2], a2 = g[(a2 + 1 + g.length) % g.length], "right" === l2.hemisphere && "left" === k2.hemisphere && c2 < k2.indexLabelTextBlock.x ? c2 = k2.indexLabelTextBlock.x + 15 : "left" === l2.hemisphere && "right" === a2.hemisphere && c2 > a2.indexLabelTextBlock.x && (c2 = a2.indexLabelTextBlock.x - 15)), l2.indexLabelTextBlock.y = e2, l2.indexLabelTextBlock.x = c2, l2.indexLabelAngle = Math.atan2(l2.indexLabelTextBlock.y - v.y, l2.indexLabelTextBlock.x - v.x));
            }
            return q2;
          }
          function q() {
            var a2 = r2.plotArea.ctx;
            a2.fillStyle = "grey";
            a2.strokeStyle = "grey";
            a2.font = "16px Arial";
            a2.textBaseline = "middle";
            for (var c2 = a2 = 0, e2 = 0, q2 = true, c2 = 0; 10 > c2 && (1 > c2 || 0 < e2); c2++) {
              if (k.radius || !k.radius && "undefined" !== typeof k.innerRadius && null !== k.innerRadius && B2 - e2 <= F2) q2 = false;
              q2 && (B2 -= e2);
              e2 = 0;
              if ("inside" !== k.indexLabelPlacement) {
                w = B2 * y;
                for (a2 = 0; a2 < m.length; a2++) {
                  var f3 = g[a2];
                  f3.indexLabelTextBlock.x = v.x + w * Math.cos(f3.midAngle);
                  f3.indexLabelTextBlock.y = v.y + w * Math.sin(f3.midAngle);
                  f3.indexLabelAngle = f3.midAngle;
                  f3.radius = B2;
                  f3.percentInnerRadius = K2;
                }
                for (var l2, s2, a2 = 0; a2 < m.length; a2++) {
                  var f3 = g[a2], u = d(a2);
                  if (null !== u) {
                    l2 = g[a2];
                    s2 = g[u];
                    var t4 = 0, t4 = b(l2, s2) - x2;
                    if (0 > t4) {
                      for (var A4 = s2 = 0, G = 0; G < m.length; G++) G !== a2 && g[G].hemisphere === f3.hemisphere && (g[G].indexLabelTextBlock.y < f3.indexLabelTextBlock.y ? s2++ : A4++);
                      s2 = t4 / (s2 + A4 || 1) * A4;
                      var A4 = -1 * (t4 - s2), J = G = 0;
                      "right" === f3.hemisphere ? (G = h(a2, s2), A4 = -1 * (t4 - G), J = h(u, A4), +J.toFixed(z) < +A4.toFixed(z) && +G.toFixed(z) <= +s2.toFixed(z) && h(a2, -(A4 - J))) : (G = h(u, s2), A4 = -1 * (t4 - G), J = h(a2, A4), +J.toFixed(z) < +A4.toFixed(z) && +G.toFixed(z) <= +s2.toFixed(z) && h(u, -(A4 - J)));
                    }
                  }
                }
              } else for (a2 = 0; a2 < m.length; a2++) f3 = g[a2], w = "pie" === k.type ? 0.7 * B2 : 0.85 * B2, u = v.x + w * Math.cos(f3.midAngle), s2 = v.y + w * Math.sin(f3.midAngle), f3.indexLabelTextBlock.x = u, f3.indexLabelTextBlock.y = s2;
              for (a2 = 0; a2 < m.length; a2++) if (f3 = g[a2], u = f3.indexLabelTextBlock.measureText(), 0 !== u.height && 0 !== u.width) u = u = 0, "right" === f3.hemisphere ? (u = p.x2 - (f3.indexLabelTextBlock.x + f3.indexLabelTextBlock.width + n), u *= -1) : u = p.x1 - (f3.indexLabelTextBlock.x - f3.indexLabelTextBlock.width - n), 0 < u && (!q2 && f3.indexLabelText && (s2 = "right" === f3.hemisphere ? p.x2 - f3.indexLabelTextBlock.x : f3.indexLabelTextBlock.x - p.x1, 0.3 * f3.indexLabelTextBlock.maxWidth > s2 ? f3.indexLabelText = "" : f3.indexLabelTextBlock.maxWidth = 0.85 * s2, 0.3 * f3.indexLabelTextBlock.maxWidth < s2 && (f3.indexLabelTextBlock.x -= "right" === f3.hemisphere ? 2 : -2)), Math.abs(f3.indexLabelTextBlock.y - f3.indexLabelTextBlock.height / 2 - v.y) < B2 || Math.abs(f3.indexLabelTextBlock.y + f3.indexLabelTextBlock.height / 2 - v.y) < B2) && (u /= Math.abs(Math.cos(f3.indexLabelAngle)), 9 < u && (u *= 0.3), u > e2 && (e2 = u)), u = u = 0, 0 < f3.indexLabelAngle && f3.indexLabelAngle < Math.PI ? (u = p.y2 - (f3.indexLabelTextBlock.y + f3.indexLabelTextBlock.height / 2 + 5), u *= -1) : u = p.y1 - (f3.indexLabelTextBlock.y - f3.indexLabelTextBlock.height / 2 - 5), 0 < u && (!q2 && f3.indexLabelText && (s2 = 0 < f3.indexLabelAngle && f3.indexLabelAngle < Math.PI ? -1 : 1, 0 === h(a2, u * s2) && h(a2, 2 * s2)), Math.abs(f3.indexLabelTextBlock.x - v.x) < B2 && (u /= Math.abs(Math.sin(f3.indexLabelAngle)), 9 < u && (u *= 0.3), u > e2 && (e2 = u)));
              var I2 = function(a3, b2, c3) {
                for (var d2 = [], e3 = 0; d2.push(g[b2]), b2 !== c3; b2 = (b2 + 1 + m.length) % m.length) ;
                d2.sort(function(a4, b3) {
                  return a4.y - b3.y;
                });
                for (b2 = 0; b2 < d2.length; b2++) if (c3 = d2[b2], e3 < 0.7 * a3) e3 += c3.indexLabelTextBlock.height, c3.indexLabelTextBlock.text = "", c3.indexLabelText = "", c3.indexLabelTextBlock.measureText();
                else break;
              };
              (function() {
                for (var a3 = -1, c3 = -1, e3 = 0, h2 = false, f4 = 0; f4 < m.length; f4++) if (h2 = false, l2 = g[f4], l2.indexLabelText) {
                  var q3 = d(f4);
                  if (null !== q3) {
                    var k2 = g[q3];
                    t4 = 0;
                    t4 = b(l2, k2);
                    var p2;
                    if (p2 = 0 > t4) {
                      p2 = l2.indexLabelTextBlock.x;
                      var u2 = l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2, s3 = l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2, r3 = k2.indexLabelTextBlock.y - k2.indexLabelTextBlock.height / 2, v2 = k2.indexLabelTextBlock.x + k2.indexLabelTextBlock.width, w2 = k2.indexLabelTextBlock.y + k2.indexLabelTextBlock.height / 2;
                      p2 = l2.indexLabelTextBlock.x + l2.indexLabelTextBlock.width < k2.indexLabelTextBlock.x - n || p2 > v2 + n || u2 > w2 + n || s3 < r3 - n ? false : true;
                    }
                    p2 ? (0 > a3 && (a3 = f4), q3 !== a3 && (c3 = q3, e3 += -t4), 0 === f4 % Math.max(m.length / 10, 3) && (h2 = true)) : h2 = true;
                    h2 && 0 < e3 && 0 <= a3 && 0 <= c3 && (I2(e3, a3, c3), c3 = a3 = -1, e3 = 0);
                  }
                }
                0 < e3 && I2(e3, a3, c3);
              })();
            }
          }
          function f2() {
            r2.plotArea.layoutManager.reset();
            r2.title && (r2.title.dockInsidePlotArea || "center" === r2.title.horizontalAlign && "center" === r2.title.verticalAlign) && r2.title.render();
            if (r2.subtitles) for (var a2 = 0; a2 < r2.subtitles.length; a2++) {
              var b2 = r2.subtitles[a2];
              (b2.dockInsidePlotArea || "center" === b2.horizontalAlign && "center" === b2.verticalAlign) && b2.render();
            }
            r2.legend && (r2.legend.dockInsidePlotArea || "center" === r2.legend.horizontalAlign && "center" === r2.legend.verticalAlign) && (r2.legend.setLayout(), r2.legend.render());
          }
          var r2 = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var k = this.data[a.dataSeriesIndexes[0]], m = k.dataPoints, n = 10, p = this.plotArea, g = k.dataPointEOs, x2 = 2, w, y = 1.3, s = 20 / 180 * Math.PI, z = 6, v = {
              x: (p.x2 + p.x1) / 2,
              y: (p.y2 + p.y1) / 2
            }, t3 = 0;
            a = false;
            for (var A3 = 0; A3 < m.length; A3++) t3 += Math.abs(m[A3].y), !a && "undefined" !== typeof m[A3].indexLabel && null !== m[A3].indexLabel && 0 < m[A3].indexLabel.toString().length && (a = true), !a && "undefined" !== typeof m[A3].label && null !== m[A3].label && 0 < m[A3].label.toString().length && (a = true);
            if (0 !== t3) {
              a = a || "undefined" !== typeof k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length;
              var B2 = "inside" !== k.indexLabelPlacement && a ? 0.75 * Math.min(p.width, p.height) / 2 : 0.92 * Math.min(p.width, p.height) / 2;
              k.radius && (B2 = Va(k.radius, B2));
              var F2 = "undefined" !== typeof k.innerRadius && null !== k.innerRadius ? Va(k.innerRadius, B2) : 0.7 * B2, K2 = Math.min(F2 / B2, (B2 - 1) / B2);
              this.pieDoughnutClickHandler = function(a2) {
                r2.isAnimating || !l(this.explodeOnClick) && !this.explodeOnClick || (a2 = a2.dataPoint, a2.exploded = a2.exploded ? false : true, 1 < this.dataPoints.length && r2._animator.animate(0, 500, function(a3) {
                  c(a3, true);
                  f2();
                  r2.dispatchEvent("dataAnimationIterationEnd", {
                    chart: r2
                  });
                  r2.dispatchEvent("dataAnimationEnd", {
                    chart: r2
                  });
                }));
              };
              e();
              q();
              q();
              q();
              q();
              this.disableToolTip = true;
              this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a2) {
                var b2 = r2.plotArea.ctx;
                b2.clearRect(p.x1, p.y1, p.width, p.height);
                b2.fillStyle = r2.backgroundColor;
                b2.fillRect(p.x1, p.y1, p.width, p.height);
                for (var b2 = g[0].startAngle + 2 * Math.PI * a2, c2 = 0; c2 < m.length; c2++) {
                  var d2 = 0 === c2 ? g[c2].startAngle : e2, e2 = d2 + (g[c2].endAngle - g[c2].startAngle), h2 = false;
                  e2 > b2 && (e2 = b2, h2 = true);
                  var q2 = m[c2].color ? m[c2].color : k._colorSet[c2 % k._colorSet.length];
                  e2 > d2 && ja2(r2.plotArea.ctx, g[c2].center, g[c2].radius, q2, k.type, d2, e2, k.fillOpacity, g[c2].percentInnerRadius);
                  if (h2) break;
                }
                f2();
                r2.dispatchEvent("dataAnimationIterationEnd", {
                  chart: r2
                });
                1 <= a2 && r2.dispatchEvent("dataAnimationEnd", {
                  chart: r2
                });
              }, function() {
                r2.disableToolTip = false;
                r2._animator.animate(0, r2.animatedRender ? 500 : 0, function(a2) {
                  c(a2, false);
                  f2();
                  r2.dispatchEvent("dataAnimationIterationEnd", {
                    chart: r2
                  });
                });
                r2.dispatchEvent("dataAnimationEnd", {
                  chart: r2
                });
              });
              k.radius = B2;
              "doughnut" === k.type && (k.innerRadius = F2);
            }
          }
        };
        var ra2 = function(a, e, c, b) {
          "undefined" === typeof c && (c = 1);
          0 >= Math.round(e.y4 - e.y1) || (a.save(), a.globalAlpha = c, a.beginPath(), a.moveTo(Math.round(e.x1), Math.round(e.y1)), a.lineTo(Math.round(e.x2), Math.round(e.y2)), a.lineTo(Math.round(e.x3), Math.round(e.y3)), a.lineTo(Math.round(e.x4), Math.round(e.y4)), "undefined" !== e.x5 && (a.lineTo(Math.round(e.x5), Math.round(e.y5)), a.lineTo(Math.round(e.x6), Math.round(e.y6))), a.closePath(), a.fillStyle = b ? b : e.color, a.fill(), a.globalAplha = 1, a.restore());
        };
        x.prototype.renderFunnel = function(a) {
          function e() {
            for (var a2 = 0, b2 = [], c2 = 0; c2 < z.length; c2++) {
              if ("undefined" === typeof z[c2].y) return -1;
              z[c2].y = "number" === typeof z[c2].y ? z[c2].y : 0;
              a2 += Math.abs(z[c2].y);
            }
            if (0 === a2) return -1;
            for (c2 = b2[0] = 0; c2 < z.length; c2++) b2.push(Math.abs(z[c2].y) * F2 / a2);
            return b2;
          }
          function c() {
            var a2 = Y2, b2 = aa3, c2 = T, d2 = ba2, e2, g2;
            e2 = S2;
            g2 = U2 - N;
            d2 = Math.abs((g2 - e2) * (b2 - a2 + (d2 - c2)) / 2);
            c2 = ba2 - T;
            e2 = g2 - e2;
            g2 = c2 * (g2 - U2);
            g2 = Math.abs(g2);
            g2 = d2 + g2;
            for (var d2 = [], h2 = 0, f3 = 0; f3 < z.length; f3++) {
              if ("undefined" === typeof z[f3].y) return -1;
              z[f3].y = "number" === typeof z[f3].y ? z[f3].y : 0;
              h2 += Math.abs(z[f3].y);
            }
            if (0 === h2) return -1;
            for (var q = d2[0] = 0, k2 = 0, l2, m2, b2 = b2 - a2, q = false, f3 = 0; f3 < z.length; f3++) a2 = Math.abs(z[f3].y) * g2 / h2, q ? l2 = 0 == Number(c2.toFixed(3)) ? 0 : a2 / c2 : (m2 = ea2 * ea2 * b2 * b2 - 4 * Math.abs(ea2) * a2, 0 > m2 ? (m2 = c2, q = (b2 + m2) * (e2 - k2) / 2, a2 -= q, l2 = e2 - k2, k2 += e2 - k2, l2 += 0 == m2 ? 0 : a2 / m2, k2 += a2 / m2, q = true) : (l2 = (Math.abs(ea2) * b2 - Math.sqrt(m2)) / 2, m2 = b2 - 2 * l2 / Math.abs(ea2), k2 += l2, k2 > e2 && (k2 -= l2, m2 = c2, q = (b2 + m2) * (e2 - k2) / 2, a2 -= q, l2 = e2 - k2, k2 += e2 - k2, l2 += a2 / m2, k2 += a2 / m2, q = true), b2 = m2)), d2.push(l2);
            return d2;
          }
          function b() {
            if (s && z) {
              for (var a2, b2, c2, e2, d2, h2, f3, k2, q, m2, n2, p2, u2, v2, w2, E2, t4, x3, C = [], A4 = [], B3 = {
                percent: null,
                total: null
              }, G = null, D2 = 0; D2 < z.length; D2++) x3 = P[D2], x3 = "undefined" !== typeof x3.x5 ? (x3.y2 + x3.y4) / 2 : (x3.y2 + x3.y3) / 2, x3 = g(x3).x2 + 1, C[D2] = Q3 - (isNaN(x3) ? 0 : x3) - V2;
              x3 = 0.5 * V2;
              for (var D2 = 0, J = z.length - 1; D2 < z.length || 0 <= J; D2++, J--) {
                b2 = s.reversed ? z[J] : z[D2];
                a2 = b2.color ? b2.color : s.reversed ? s._colorSet[(z.length - 1 - D2) % s._colorSet.length] : s._colorSet[D2 % s._colorSet.length];
                c2 = b2.indexLabelPlacement || s.indexLabelPlacement || "outside";
                t4 = b2.indexLabelTextAlign || s.indexLabelTextAlign || "left";
                e2 = b2.indexLabelBackgroundColor || s.indexLabelBackgroundColor || (r ? "transparent" : null);
                d2 = b2.indexLabelBorderColor || s.indexLabelBorderColor || (r ? "transparent" : null);
                h2 = l(b2.indexLabelBorderThickness) ? s.indexLabelBorderThickness : b2.indexLabelBorderThickness;
                f3 = l(b2.indexLabelPadding) ? s.indexLabelPadding ? s.indexLabelPadding : ha3 : b2.indexLabelPadding;
                k2 = b2.indexLabelFontColor || s.indexLabelFontColor || "#979797";
                q = l(b2.indexLabelFontSize) ? s.indexLabelFontSize : b2.indexLabelFontSize;
                m2 = b2.indexLabelFontStyle || s.indexLabelFontStyle || "normal";
                n2 = b2.indexLabelFontFamily || s.indexLabelFontFamily || "arial";
                p2 = b2.indexLabelFontWeight || s.indexLabelFontWeight || "normal";
                a2 = b2.indexLabelLineColor || s.options.indexLabelLineColor || a2;
                u2 = "number" === typeof b2.indexLabelLineThickness ? b2.indexLabelLineThickness : "number" === typeof s.indexLabelLineThickness ? s.indexLabelLineThickness : 2;
                v2 = b2.indexLabelLineDashType || s.indexLabelLineDashType || "solid";
                w2 = "undefined" !== typeof b2.indexLabelWrap ? b2.indexLabelWrap : "undefined" !== typeof s.indexLabelWrap ? s.indexLabelWrap : true;
                E2 = s.dataPointIds[D2];
                y._eventManager.objectMap[E2] = {
                  id: E2,
                  objectType: "dataPoint",
                  dataPointIndex: D2,
                  dataSeriesIndex: 0,
                  funnelSection: P[s.reversed ? z.length - 1 - D2 : D2]
                };
                "inside" === s.indexLabelPlacement && (C[D2] = D2 !== ga3 ? s.reversed ? P[D2].x2 - P[D2].x1 : P[D2].x3 - P[D2].x4 : P[D2].x3 - P[D2].x6, 20 > C[D2] && (C[D2] = D2 !== ga3 ? s.reversed ? P[D2].x3 - P[D2].x4 : P[D2].x2 - P[D2].x1 : P[D2].x2 - P[D2].x1, C[D2] /= 2));
                E2 = b2.indexLabelMaxWidth ? b2.indexLabelMaxWidth : s.options.indexLabelMaxWidth ? s.indexLabelMaxWidth : C[D2];
                if (E2 > C[D2] || 0 > E2) E2 = C[D2];
                A4[D2] = "inside" === s.indexLabelPlacement ? w2 ? Math.max(P[D2].height, q) : 1.5 * q : false;
                B3 = y.getPercentAndTotal(s, b2);
                if (s.indexLabelFormatter || b2.indexLabelFormatter) G = {
                  chart: y.options,
                  dataSeries: s,
                  dataPoint: b2,
                  total: B3.total,
                  percent: B3.percent
                };
                b2 = b2.indexLabelFormatter ? b2.indexLabelFormatter(G) : b2.indexLabel ? y.replaceKeywordsWithValue(b2.indexLabel, b2, s, D2) : s.indexLabelFormatter ? s.indexLabelFormatter(G) : s.indexLabel ? y.replaceKeywordsWithValue(s.indexLabel, b2, s, D2) : b2.label ? b2.label : "";
                0 >= u2 && (u2 = 0);
                1e3 > E2 && 1e3 - E2 < x3 && (E2 += 1e3 - E2);
                l(s.options.indexLabelMaxWidth) && (s.indexLabelMaxWidth = l(s.indexLabelMaxWidth) ? E2 : Math.max(E2, s.indexLabelMaxWidth));
                O2.roundRect || Aa(O2);
                c2 = new la(O2, {
                  fontSize: q,
                  fontFamily: n2,
                  fontColor: k2,
                  fontStyle: m2,
                  fontWeight: p2,
                  horizontalAlign: c2,
                  textAlign: t4,
                  backgroundColor: e2,
                  borderColor: d2,
                  borderThickness: h2,
                  maxWidth: E2,
                  maxHeight: false === A4[D2] ? w2 ? 4.28571429 * q : 1.5 * q : A4[D2],
                  text: b2,
                  padding: f3,
                  textBaseline: "middle"
                });
                c2.measureText();
                c2.height = c2.height === 2 * c2.padding ? 0 : c2.height;
                c2.width = c2.width === 2 * c2.padding ? 0 : c2.width;
                H.push({
                  textBlock: c2,
                  id: s.reversed ? J : D2,
                  isDirty: false,
                  lineColor: a2,
                  lineThickness: u2,
                  lineDashType: v2,
                  height: c2.height < c2.maxHeight ? c2.height : c2.maxHeight,
                  width: c2.width < c2.maxWidth ? c2.width : c2.maxWidth
                });
              }
            }
          }
          function d() {
            var a2, b2, c2, e2, d2, g2 = [];
            d2 = false;
            c2 = 0;
            for (var h2, f3 = Q3 - aa3 - V2 / 2, f3 = s.options.indexLabelMaxWidth ? s.indexLabelMaxWidth > f3 ? f3 : s.indexLabelMaxWidth : f3, q = H.length - 1; 0 <= q; q--) {
              h2 = z[H[q].id];
              c2 = H[q];
              e2 = c2.textBlock;
              b2 = (a2 = p(q) < P.length ? H[p(q)] : null) ? a2.textBlock : null;
              c2 = c2.height;
              a2 && e2.y + c2 + ha3 > b2.y && (d2 = true);
              c2 = h2.indexLabelMaxWidth || f3;
              if (c2 > f3 || 0 > c2) c2 = f3;
              g2.push(c2);
            }
            if (d2) for (q = H.length - 1; 0 <= q; q--) a2 = P[q], H[q].textBlock.maxWidth = g2[g2.length - (q + 1)], H[q].textBlock.measureText(), H[q].textBlock.height = H[q].textBlock.height === 2 * H[q].textBlock.padding ? 0 : H[q].textBlock.height, H[q].textBlock.width = H[q].textBlock.width === 2 * H[q].textBlock.padding ? 0 : H[q].textBlock.width, H[q].textBlock.x = Q3 - f3, c2 = H[q].textBlock.height < H[q].textBlock.maxHeight ? H[q].textBlock.height : H[q].textBlock.maxHeight, d2 = H[q].textBlock.width < H[q].textBlock.maxWidth ? H[q].textBlock.width : H[q].textBlock.maxWidth, H[q].height = c2, H[q].width = d2, c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, H[q].textBlock.y = c2 - H[q].height / 2, s.reversed ? (H[q].textBlock.y + H[q].height > W3 + t3 && (H[q].textBlock.y = W3 + t3 - H[q].height), H[q].textBlock.y < sa - t3 && (H[q].textBlock.y = sa - t3)) : (H[q].textBlock.y < W3 - t3 && (H[q].textBlock.y = W3 - t3), H[q].textBlock.y + H[q].height > sa + t3 && (H[q].textBlock.y = sa + t3 - H[q].height));
          }
          function h() {
            var a2, b2, c2, e2;
            if ("inside" !== s.indexLabelPlacement) for (var d2 = 0; d2 < P.length; d2++) 0 == H[d2].textBlock.text.length ? H[d2].isDirty = true : (a2 = P[d2], c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, b2 = s.reversed ? "undefined" !== typeof a2.x5 ? c2 > Ea ? g(c2).x2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : "undefined" !== typeof a2.x5 ? c2 < Ea ? g(c2).x2 + 1 : (a2.x4 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1, H[d2].textBlock.x = b2 + V2, H[d2].textBlock.y = c2 - H[d2].height / 2, s.reversed ? (H[d2].textBlock.y + H[d2].height > W3 + t3 && (H[d2].textBlock.y = W3 + t3 - H[d2].height), H[d2].textBlock.y < sa - t3 && (H[d2].textBlock.y = sa - t3)) : (H[d2].textBlock.y < W3 - t3 && (H[d2].textBlock.y = W3 - t3), H[d2].textBlock.y + H[d2].height > sa + t3 && (H[d2].textBlock.y = sa + t3 - H[d2].height)));
            else for (d2 = 0; d2 < P.length; d2++) 0 == H[d2].textBlock.text.length ? H[d2].isDirty = true : (a2 = P[d2], b2 = a2.height, c2 = H[d2].height, e2 = H[d2].width, b2 >= c2 ? (b2 = d2 != ga3 ? (a2.x4 + a2.x3) / 2 - e2 / 2 : (a2.x5 + a2.x4) / 2 - e2 / 2, c2 = d2 != ga3 ? (a2.y1 + a2.y3) / 2 - c2 / 2 : (a2.y1 + a2.y4) / 2 - c2 / 2, H[d2].textBlock.x = b2, H[d2].textBlock.y = c2) : H[d2].isDirty = true);
          }
          function f2() {
            function a2(b3, c3) {
              var d3;
              if (0 > b3 || b3 >= H.length) return 0;
              var e3, g3 = H[b3].textBlock;
              if (0 > c3) {
                c3 *= -1;
                e3 = n(b3);
                d3 = u(e3, b3);
                if (d3 >= c3) return g3.y -= c3, c3;
                if (0 == b3) return 0 < d3 && (g3.y -= d3), d3;
                d3 += a2(e3, -(c3 - d3));
                0 < d3 && (g3.y -= d3);
                return d3;
              }
              e3 = p(b3);
              d3 = u(b3, e3);
              if (d3 >= c3) return g3.y += c3, c3;
              if (b3 == P.length - 1) return 0 < d3 && (g3.y += d3), d3;
              d3 += a2(e3, c3 - d3);
              0 < d3 && (g3.y += d3);
              return d3;
            }
            function b2() {
              var a3, d3, e3, g3, h3 = 0, q2;
              g3 = (U2 - S2 + 2 * t3) / l2;
              q2 = l2;
              for (var f3, k3 = 1; k3 < q2; k3++) {
                e3 = k3 * g3;
                for (var m3 = H.length - 1; 0 <= m3; m3--) !H[m3].isDirty && H[m3].textBlock.y < e3 && H[m3].textBlock.y + H[m3].height > e3 && (f3 = p(m3), !(f3 >= H.length - 1) && H[m3].textBlock.y + H[m3].height + ha3 > H[f3].textBlock.y && (H[m3].textBlock.y = H[m3].textBlock.y + H[m3].height - e3 > e3 - H[m3].textBlock.y ? e3 + 1 : e3 - H[m3].height - 1));
              }
              for (f3 = P.length - 1; 0 < f3; f3--) if (!H[f3].isDirty) {
                e3 = n(f3);
                if (0 > e3 && (e3 = 0, H[e3].isDirty)) break;
                if (H[f3].textBlock.y < H[e3].textBlock.y + H[e3].height) {
                  d3 = d3 || f3;
                  g3 = f3;
                  for (q2 = 0; H[g3].textBlock.y < H[e3].textBlock.y + H[e3].height + ha3; ) {
                    a3 = a3 || H[g3].textBlock.y + H[g3].height;
                    q2 += H[g3].height;
                    q2 += ha3;
                    g3 = e3;
                    if (0 >= g3) {
                      g3 = 0;
                      q2 += H[g3].height;
                      break;
                    }
                    e3 = n(g3);
                    if (0 > e3) {
                      g3 = 0;
                      q2 += H[g3].height;
                      break;
                    }
                  }
                  if (g3 != f3) {
                    h3 = H[g3].textBlock.y;
                    a3 -= h3;
                    a3 = q2 - a3;
                    h3 = c2(a3, d3, g3);
                    break;
                  }
                }
              }
              return h3;
            }
            function c2(a3, b3, d3) {
              var e3 = [], g3 = 0, h3 = 0;
              for (a3 = Math.abs(a3); d3 <= b3; d3++) e3.push(P[d3]);
              e3.sort(function(a4, b4) {
                return a4.height - b4.height;
              });
              for (d3 = 0; d3 < e3.length; d3++) if (b3 = e3[d3], g3 < a3) h3++, g3 += H[b3.id].height + ha3, H[b3.id].textBlock.text = "", H[b3.id].indexLabelText = "", H[b3.id].isDirty = true, H[b3.id].textBlock.measureText();
              else break;
              return h3;
            }
            for (var d2, e2, g2, h2, q, k2, l2 = 1, m2 = 0; m2 < 2 * l2; m2++) {
              for (var s2 = H.length - 1; 0 <= s2 && !(0 <= n(s2) && n(s2), g2 = H[s2], h2 = g2.textBlock, k2 = (q = p(s2) < P.length ? H[p(s2)] : null) ? q.textBlock : null, d2 = +g2.height.toFixed(6), e2 = +h2.y.toFixed(6), !g2.isDirty && q && e2 + d2 + ha3 > +k2.y.toFixed(6) && (d2 = h2.y + d2 + ha3 - k2.y, e2 = a2(s2, -d2), e2 < d2 && (0 < e2 && (d2 -= e2), e2 = a2(p(s2), d2), e2 != d2))); s2--) ;
              b2();
            }
          }
          function u(a2, b2) {
            return (b2 < P.length ? H[b2].textBlock.y : s.reversed ? W3 + t3 : sa + t3) - (0 > a2 ? s.reversed ? sa - t3 : W3 - t3 : H[a2].textBlock.y + H[a2].height + ha3);
          }
          function E(a2, b2, c2) {
            var d2, e2, g2, q = [], f3 = t3, l2 = [];
            -1 !== b2 && (0 <= X3.indexOf(b2) ? (e2 = X3.indexOf(b2), X3.splice(e2, 1)) : (X3.push(b2), X3 = X3.sort(function(a3, b3) {
              return a3 - b3;
            })));
            if (0 === X3.length) q = ja3;
            else {
              e2 = t3 * (1 != X3.length || 0 != X3[0] && X3[0] != P.length - 1 ? 2 : 1) / k();
              for (var n2 = 0; n2 < P.length; n2++) {
                if (1 == X3.length && 0 == X3[0]) {
                  if (0 === n2) {
                    q.push(ja3[n2]);
                    d2 = f3;
                    continue;
                  }
                } else 0 === n2 && (d2 = -1 * f3);
                q.push(ja3[n2] + d2);
                if (0 <= X3.indexOf(n2) || n2 < P.length && 0 <= X3.indexOf(n2 + 1)) d2 += e2;
              }
            }
            g2 = function() {
              for (var a3 = [], b3 = 0; b3 < P.length; b3++) a3.push(q[b3] - P[b3].y1);
              return a3;
            }();
            var p2 = {
              startTime: (/* @__PURE__ */ new Date()).getTime(),
              duration: c2 || 500,
              easingFunction: function(a3, b3, c3, d3) {
                return R.easing.easeOutQuart(a3, b3, c3, d3);
              },
              changeSection: function(a3) {
                for (var b3, c3, d3 = 0; d3 < P.length; d3++) b3 = g2[d3], c3 = P[d3], b3 *= a3, "undefined" === typeof l2[d3] && (l2[d3] = 0), 0 > l2 && (l2 *= -1), c3.y1 += b3 - l2[d3], c3.y2 += b3 - l2[d3], c3.y3 += b3 - l2[d3], c3.y4 += b3 - l2[d3], c3.y5 && (c3.y5 += b3 - l2[d3], c3.y6 += b3 - l2[d3]), l2[d3] = b3;
              }
            };
            a2._animator.animate(0, c2, function(c3) {
              var d3 = a2.plotArea.ctx || a2.ctx;
              ka2 = true;
              d3.clearRect(v.x1, v.y1, v.x2 - v.x1, v.y2 - v.y1);
              d3.fillStyle = a2.backgroundColor;
              d3.fillRect(v.x1, v.y1, v.width, v.height);
              p2.changeSection(c3, b2);
              var e3 = {};
              e3.dataSeries = s;
              e3.dataPoint = s.reversed ? s.dataPoints[z.length - 1 - b2] : s.dataPoints[b2];
              e3.index = s.reversed ? z.length - 1 - b2 : b2;
              a2.toolTip.highlightObjects([e3]);
              for (e3 = 0; e3 < P.length; e3++) ra2(d3, P[e3], s.fillOpacity);
              w(d3);
              L && ("inside" !== s.indexLabelPlacement ? m(d3) : h(), x2(d3));
              1 <= c3 && (ka2 = false);
            }, null, R.easing.easeOutQuart);
          }
          function k() {
            for (var a2 = 0, b2 = 0; b2 < P.length - 1; b2++) (0 <= X3.indexOf(b2) || 0 <= X3.indexOf(b2 + 1)) && a2++;
            return a2;
          }
          function m(a2) {
            for (var b2, c2, d2, e2, h2 = 0; h2 < P.length; h2++) e2 = 1 === H[h2].lineThickness % 2 ? 0.5 : 0, c2 = ((P[h2].y2 + P[h2].y4) / 2 << 0) + e2, b2 = g(c2).x2 - 1, isNaN(b2) && Math.round(P[h2].x1) === Math.round(P[h2].x4) && Math.round(P[h2].x2) === Math.round(P[h2].x3) && (b2 = P[h2].x2), d2 = H[h2].textBlock.x, e2 = (H[h2].textBlock.y + H[h2].height / 2 << 0) + e2, H[h2].isDirty || 0 == H[h2].lineThickness || (a2.strokeStyle = H[h2].lineColor, a2.lineWidth = H[h2].lineThickness, a2.setLineDash && a2.setLineDash(I(H[h2].lineDashType, H[h2].lineThickness)), a2.beginPath(), a2.moveTo(b2, c2), a2.lineTo(d2, e2), a2.stroke());
          }
          function n(a2) {
            for (a2 -= 1; -1 <= a2 && -1 != a2 && H[a2].isDirty; a2--) ;
            return a2;
          }
          function p(a2) {
            for (a2 += 1; a2 <= P.length && a2 != P.length && H[a2].isDirty; a2++) ;
            return a2;
          }
          function g(a2) {
            for (var b2, c2 = 0; c2 < z.length; c2++) if (P[c2].y1 < a2 && P[c2].y4 > a2) {
              b2 = P[c2];
              break;
            }
            return b2 ? (a2 = b2.y6 ? a2 > b2.y6 ? b2.x3 + (b2.x4 - b2.x3) / (b2.y4 - b2.y3) * (a2 - b2.y3) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2), {
              x1: a2,
              x2: a2
            }) : -1;
          }
          function x2(a2) {
            for (var b2 = 0; b2 < P.length; b2++) H[b2].isDirty || (a2 && (H[b2].textBlock.ctx = a2), H[b2].textBlock.y += H[b2].textBlock._lineHeight / 2, H[b2].textBlock.render(true), H[b2].textBlock.y -= H[b2].textBlock._lineHeight / 2);
          }
          function w(a2) {
            y.plotArea.layoutManager.reset();
            a2.roundRect || Aa(a2);
            y.title && (y.title.dockInsidePlotArea || "center" === y.title.horizontalAlign && "center" === y.title.verticalAlign) && (y.title.ctx = a2, y.title.render());
            if (y.subtitles) for (var b2 = 0; b2 < y.subtitles.length; b2++) {
              var c2 = y.subtitles[b2];
              if (c2.dockInsidePlotArea || "center" === c2.horizontalAlign && "center" === c2.verticalAlign) y.subtitles.ctx = a2, c2.render();
            }
            y.legend && (y.legend.dockInsidePlotArea || "center" === y.legend.horizontalAlign && "center" === y.legend.verticalAlign) && (y.legend.ctx = a2, y.legend.setLayout(), y.legend.render());
            va.fNg && va.fNg(y);
          }
          var y = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            for (var s = this.data[a.dataSeriesIndexes[0]], z = s.dataPoints, v = this.plotArea, t3 = 0.025 * v.width, A3 = 0.01 * v.width, B2 = 0, F2 = v.height - 2 * t3 - 4, K2 = Math.min(v.width - 2 * A3, 2.8 * v.height), L = false, M = 0; M < z.length; M++) if (!L && "undefined" !== typeof z[M].indexLabel && null !== z[M].indexLabel && 0 < z[M].indexLabel.toString().length && (L = true), !L && "undefined" !== typeof z[M].label && null !== z[M].label && 0 < z[M].label.toString().length && (L = true), !L && "function" === typeof s.indexLabelFormatter || "function" === typeof z[M].indexLabelFormatter) L = true;
            L = L || "undefined" !== typeof s.indexLabel && null !== s.indexLabel && 0 < s.indexLabel.toString().length;
            "inside" !== s.indexLabelPlacement && L || (A3 = (v.width - 0.75 * K2) / 2);
            var M = v.x1 + A3, Q3 = v.x2 - A3, S2 = v.y1 + t3 + 2, U2 = v.y2 - t3 - 2, O2 = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
            if (0 != s.length && s.dataPoints && s.visible && 0 !== z.length) {
              var N, D;
              a = 75 * K2 / 100;
              var V2 = 30 * (Q3 - a) / 100;
              "funnel" === s.type ? (N = l(s.options.neckHeight) ? 0.35 * F2 : s.neckHeight, D = l(s.options.neckWidth) ? 0.25 * a : s.neckWidth, "string" === typeof N && N.match(/%$/) ? (N = parseInt(N), N = N * F2 / 100) : N = parseInt(N), "string" === typeof D && D.match(/%$/) ? (D = parseInt(D), D = D * a / 100) : D = parseInt(D), N > F2 ? N = F2 : 0 >= N && (N = 0), D > a ? D = a - 0.5 : 0 >= D && (D = 0)) : "pyramid" === s.type && (D = N = 0, s.reversed = s.reversed ? false : true);
              var A3 = M + a / 2, Y2 = M, aa3 = M + a, W3 = s.reversed ? U2 : S2, T = A3 - D / 2, ba2 = A3 + D / 2, Ea = s.reversed ? S2 + N : U2 - N, sa = s.reversed ? S2 : U2;
              D = s.valueRepresents = s.valueRepresents ? s.valueRepresents : "height";
              M = [];
              a = [];
              var P = [], A3 = [], $3 = S2, ga3, ea2 = (Ea - W3) / (T - Y2), ia2 = -ea2, K2 = "area" === D ? c() : e();
              if (-1 !== K2) {
                if (s.reversed) for (A3.push($3), D = K2.length - 1; 0 < D; D--) $3 += K2[D], A3.push(Math.round($3));
                else for (D = 0; D < K2.length; D++) $3 += K2[D], A3.push(Math.round($3));
                if (s.reversed) for (D = 0; D < K2.length; D++) A3[D] < Ea ? (M.push(T), a.push(ba2), ga3 = D) : (M.push((A3[D] - W3 + ea2 * Y2) / ea2), a.push((A3[D] - W3 + ia2 * aa3) / ia2));
                else for (D = 0; D < K2.length; D++) A3[D] < Ea ? (M.push((A3[D] - W3 + ea2 * Y2) / ea2), a.push((A3[D] - W3 + ia2 * aa3) / ia2), ga3 = D) : (M.push(T), a.push(ba2));
                for (D = 0; D < K2.length - 1; D++) $3 = s.reversed ? z[z.length - 1 - D].color ? z[z.length - 1 - D].color : s._colorSet[(z.length - 1 - D) % s._colorSet.length] : z[D].color ? z[D].color : s._colorSet[D % s._colorSet.length], D === ga3 ? P.push({
                  x1: M[D],
                  y1: A3[D],
                  x2: a[D],
                  y2: A3[D],
                  x3: ba2,
                  y3: Ea,
                  x4: a[D + 1],
                  y4: A3[D + 1],
                  x5: M[D + 1],
                  y5: A3[D + 1],
                  x6: T,
                  y6: Ea,
                  id: D,
                  height: A3[D + 1] - A3[D],
                  color: $3
                }) : P.push({
                  x1: M[D],
                  y1: A3[D],
                  x2: a[D],
                  y2: A3[D],
                  x3: a[D + 1],
                  y3: A3[D + 1],
                  x4: M[D + 1],
                  y4: A3[D + 1],
                  id: D,
                  height: A3[D + 1] - A3[D],
                  color: $3
                }), s.dataPointEOs[D] && P[D] && (s.dataPointEOs[D].sectionsofFunnel = P[D]);
                var ha3 = 2, H = [], ka2 = false, X3 = [], ja3 = [], M = false;
                a = a = 0;
                Fa(X3);
                for (D = 0; D < z.length; D++) z[D].exploded && (M = true, s.reversed ? X3.push(z.length - 1 - D) : X3.push(D));
                O2.clearRect(v.x1, v.y1, v.width, v.height);
                O2.fillStyle = y.backgroundColor;
                O2.fillRect(v.x1, v.y1, v.width, v.height);
                if (L && s.visible && (b(), h(), "inside" !== s.indexLabelPlacement)) {
                  d();
                  f2();
                  for (D = 0; D < z.length; D++) H[D].isDirty || (a = H[D].textBlock.x + H[D].width, a = (Q3 - a) / 2, 0 == D && (B2 = a), B2 > a && (B2 = a));
                  for (D = 0; D < P.length; D++) P[D].x1 += B2, P[D].x2 += B2, P[D].x3 += B2, P[D].x4 += B2, P[D].x5 && (P[D].x5 += B2, P[D].x6 += B2), H[D].textBlock.x += B2;
                }
                for (D = 0; D < P.length; D++) B2 = P[D], ra2(O2, B2, s.fillOpacity), ja3.push(B2.y1);
                w(O2);
                L && s.visible && ("inside" === s.indexLabelPlacement || y.animationEnabled || m(O2), y.animationEnabled || x2());
                if (!L) for (D = 0; D < z.length; D++) B2 = s.dataPointIds[D], a = {
                  id: B2,
                  objectType: "dataPoint",
                  dataPointIndex: D,
                  dataSeriesIndex: 0,
                  funnelSection: P[s.reversed ? z.length - 1 - D : D]
                }, y._eventManager.objectMap[B2] = a;
                !y.animationEnabled && M ? E(y, -1, 0) : y.animationEnabled && !y.animatedRender && E(y, -1, 0);
                this.funnelPyramidClickHandler = function(a2) {
                  var b2 = -1;
                  if (!ka2 && !y.isAnimating && (l(a2.dataSeries.explodeOnClick) || a2.dataSeries.explodeOnClick) && (b2 = s.reversed ? z.length - 1 - a2.dataPointIndex : a2.dataPointIndex, 0 <= b2)) {
                    a2 = b2;
                    if ("funnel" === s.type || "pyramid" === s.type) s.reversed ? z[z.length - 1 - a2].exploded = z[z.length - 1 - a2].exploded ? false : true : z[a2].exploded = z[a2].exploded ? false : true;
                    E(y, b2, 500);
                  }
                };
                return {
                  source: O2,
                  dest: this.plotArea.ctx,
                  animationCallback: function(a2, b2) {
                    R.fadeInAnimation(a2, b2);
                    1 <= a2 && (E(y, -1, 500), w(y.plotArea.ctx || y.ctx));
                  },
                  easingFunction: R.easing.easeInQuad,
                  animationBase: 0
                };
              }
            }
          }
        };
        x.prototype.requestAnimFrame = function() {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1e3 / 60);
          };
        }();
        x.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        x.prototype.set = function(a, e, c) {
          c = "undefined" === typeof c ? true : c;
          "options" === a ? (this.options = e, c && this.render()) : x.base.set.call(this, a, e, c);
        };
        x.prototype.exportChart = function(a) {
          a = "undefined" === typeof a ? {} : a;
          var e = a.format ? a.format : "png", c = a.fileName ? a.fileName : this.exportFileName;
          if (a.toDataURL) return this.canvas.toDataURL("image/" + e);
          var b = this.canvas;
          if (b && e && c) {
            c = c + "." + e;
            a = "image/" + e;
            var b = b.toDataURL(a), d = false, h = document.createElement("a");
            h.download = c;
            h.href = b;
            if ("undefined" !== typeof Blob && new Blob()) {
              for (var q = b.replace(/^data:[a-z\/]*;base64,/, ""), q = atob(q), f2 = new ArrayBuffer(q.length), f2 = new Uint8Array(f2), l2 = 0; l2 < q.length; l2++) f2[l2] = q.charCodeAt(l2);
              e = new Blob([f2.buffer], {
                type: "image/" + e
              });
              try {
                window.navigator.msSaveBlob(e, c), d = true;
              } catch (k) {
                h.dataset.downloadurl = [a, h.download, h.href].join(":"), h.href = window.URL.createObjectURL(e);
              }
            }
            if (!d) try {
              event = document.createEvent("MouseEvents"), event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null), h.dispatchEvent ? h.dispatchEvent(event) : h.fireEvent && h.fireEvent("onclick");
            } catch (m) {
              e = window.open(), e.document.write("<img src='" + b + "'></img><div>Please right click on the image and save it to your device</div>"), e.document.close();
            }
          }
        };
        x.prototype.print = function() {
          var a = this.exportChart({
            toDataURL: true
          }), e = document.createElement("iframe");
          e.setAttribute("class", "canvasjs-chart-print-frame");
          K(e, {
            position: "absolute",
            width: "100%",
            border: "0px",
            margin: "0px 0px 0px 0px",
            padding: "0px 0px 0px 0px"
          });
          e.style.height = this.height + "px";
          this._canvasJSContainer.appendChild(e);
          var c = this, b = e.contentWindow || e.contentDocument.document || e.contentDocument;
          b.document.open();
          b.document.write('<!DOCTYPE HTML>\n<html><body><img src="' + a + '"/><body/></html>');
          b.document.body && b.document.body.style && (b.document.body.style.margin = "0px 0px 0px 0px", b.document.body.style.padding = "0px 0px 0px 0px");
          b.document.close();
          setTimeout(function() {
            b.focus();
            b.print();
            setTimeout(function() {
              c._canvasJSContainer.removeChild(e);
            }, 1e3);
          }, 500);
        };
        x.prototype.getPercentAndTotal = function(a, e) {
          var c = null, b = null, d = c = null;
          if (0 <= a.type.indexOf("stacked")) b = 0, c = e.x.getTime ? e.x.getTime() : e.x, c in a.plotUnit.yTotals && (b = a.plotUnit.yTotals[c], c = a.plotUnit.yAbsTotals[c], d = isNaN(e.y) ? 0 : 0 === c ? 0 : 100 * (e.y / c));
          else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
            for (c = b = 0; c < a.dataPoints.length; c++) isNaN(a.dataPoints[c].y) || (b += a.dataPoints[c].y);
            d = isNaN(e.y) ? 0 : 100 * (e.y / b);
          }
          return {
            percent: d,
            total: b
          };
        };
        x.prototype.replaceKeywordsWithValue = function(a, e, c, b, d) {
          var h = this;
          d = "undefined" === typeof d ? 0 : d;
          if ((0 <= c.type.indexOf("stacked") || "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
            var q = "#percent", f2 = "#total", l2 = this.getPercentAndTotal(c, e), f2 = isNaN(l2.total) ? f2 : l2.total, q = isNaN(l2.percent) ? q : l2.percent;
            do {
              l2 = "";
              if (c.percentFormatString) l2 = c.percentFormatString;
              else {
                var l2 = "#,##0.", k = Math.max(Math.ceil(Math.log(1 / Math.abs(q)) / Math.LN10), 2);
                if (isNaN(k) || !isFinite(k)) k = 2;
                for (var m = 0; m < k; m++) l2 += "#";
                c.percentFormatString = l2;
              }
              a = a.replace("#percent", ia(q, l2, h._cultureInfo));
              a = a.replace("#total", ia(f2, c.yValueFormatString ? c.yValueFormatString : "#,##0.########", h._cultureInfo));
            } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"));
          }
          return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a2) {
            if ('"' === a2[0] && '"' === a2[a2.length - 1] || "'" === a2[0] && "'" === a2[a2.length - 1]) return a2.slice(1, a2.length - 1);
            a2 = Ia(a2.slice(1, a2.length - 1));
            a2 = a2.replace("#index", d);
            var q2 = null;
            try {
              var g = a2.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
              g && 0 < g.length && (q2 = Ia(g[2]), a2 = Ia(g[1]));
            } catch (f3) {
            }
            g = null;
            if ("color" === a2) return "waterfall" === c.type ? e.color ? e.color : 0 < e.y ? c.risingColor : c.fallingColor : "error" === c.type ? c.color ? c.color : c._colorSet[q2 % c._colorSet.length] : e.color ? e.color : c.color ? c.color : c._colorSet[b % c._colorSet.length];
            if (e.hasOwnProperty(a2)) g = e;
            else if (c.hasOwnProperty(a2)) g = c;
            else return "";
            g = g[a2];
            null !== q2 && (g = g[q2]);
            return "x" === a2 ? (c.axisX && "dateTime" === c.axisX.valueType || "dateTime" === c.xValueType || e.x && e.x.getTime) && !c.axisX.logarithmic ? Da(g, e.xValueFormatString ? e.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = h.axisX && h.axisX.autoValueFormatString ? h.axisX.autoValueFormatString : "DD MMM YY", h._cultureInfo) : ia(g, e.xValueFormatString ? e.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = "#,##0.########", h._cultureInfo) : "y" === a2 ? ia(g, e.yValueFormatString ? e.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : c.yValueFormatString = "#,##0.########", h._cultureInfo) : "z" === a2 ? ia(g, e.zValueFormatString ? e.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : c.zValueFormatString = "#,##0.########", h._cultureInfo) : g;
          });
        };
        qa(U, Y);
        U.prototype.setLayout = function() {
          var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, e = a.layoutManager.getFreeSpace(), c = null, b = 0, d = 0, h = 0, q = 0, f2 = this.markerMargin = this.chart.options.legend && !l(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
          this.height = 0;
          var r2 = [], k = [];
          if ("top" === this.verticalAlign || "bottom" === this.verticalAlign) this.orientation = "horizontal", c = this.verticalAlign, h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : e.width, q = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * e.height;
          else if ("center" === this.verticalAlign) {
            this.orientation = "vertical";
            if ("left" === this.horizontalAlign || "center" === this.horizontalAlign || "right" === this.horizontalAlign) c = this.horizontalAlign;
            h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * e.width;
            q = this.maxHeight = null !== this.maxHeight ? this.maxHeight : e.height;
          }
          this.errorMarkerColor = [];
          for (var m = 0; m < this.dataSeries.length; m++) {
            var n = this.dataSeries[m];
            if (n.dataPoints && n.dataPoints.length) {
              if ("pie" !== n.type && "doughnut" !== n.type && "funnel" !== n.type && "pyramid" !== n.type) {
                var p = n.legendMarkerType = n.legendMarkerType ? n.legendMarkerType : "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type && "scatter" !== n.type && "bubble" !== n.type || !n.markerType ? "error" === n.type && n._linkedSeries ? n._linkedSeries.legendMarkerType ? n._linkedSeries.legendMarkerType : Q2.getDefaultLegendMarker(n._linkedSeries.type) : Q2.getDefaultLegendMarker(n.type) : n.markerType, g = n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                  chart: this.chart,
                  legend: this.options,
                  dataSeries: n,
                  dataPoint: null
                }) : n.name, t3 = n.legendMarkerColor = n.legendMarkerColor ? n.legendMarkerColor : n.markerColor ? n.markerColor : "error" === n.type ? l(n.whiskerColor) ? n._colorSet[0] : n.whiskerColor : n._colorSet[0], w = n.markerSize || "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type ? 0.75 * this.lineHeight : 0, y = n.legendMarkerBorderColor ? n.legendMarkerBorderColor : n.markerBorderColor, s = n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness : n.markerBorderThickness ? Math.max(1, Math.round(0.2 * w)) : 0;
                "error" === n.type && this.errorMarkerColor.push(t3);
                g = n.legendText = this.chart.replaceKeywordsWithValue(g, n.dataPoints[0], n, m);
                p = {
                  markerType: p,
                  markerColor: t3,
                  text: g,
                  textBlock: null,
                  chartType: n.type,
                  markerSize: w,
                  lineColor: n._colorSet[0],
                  dataSeriesIndex: n.index,
                  dataPointIndex: null,
                  markerBorderColor: y,
                  markerBorderThickness: s
                };
                r2.push(p);
              } else for (var x2 = 0; x2 < n.dataPoints.length; x2++) {
                var v = n.dataPoints[x2], p = v.legendMarkerType ? v.legendMarkerType : n.legendMarkerType ? n.legendMarkerType : Q2.getDefaultLegendMarker(n.type), g = v.legendText ? v.legendText : n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                  chart: this.chart,
                  legend: this.options,
                  dataSeries: n,
                  dataPoint: v
                }) : v.name ? v.name : "DataPoint: " + (x2 + 1), t3 = v.legendMarkerColor ? v.legendMarkerColor : n.legendMarkerColor ? n.legendMarkerColor : v.color ? v.color : n.color ? n.color : n._colorSet[x2 % n._colorSet.length], w = 0.75 * this.lineHeight, y = v.legendMarkerBorderColor ? v.legendMarkerBorderColor : n.legendMarkerBorderColor ? n.legendMarkerBorderColor : v.markerBorderColor ? v.markerBorderColor : n.markerBorderColor, s = v.legendMarkerBorderThickness ? v.legendMarkerBorderThickness : n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness : v.markerBorderThickness || n.markerBorderThickness ? Math.max(1, Math.round(0.2 * w)) : 0, g = this.chart.replaceKeywordsWithValue(g, v, n, x2), p = {
                  markerType: p,
                  markerColor: t3,
                  text: g,
                  textBlock: null,
                  chartType: n.type,
                  markerSize: w,
                  dataSeriesIndex: m,
                  dataPointIndex: x2,
                  markerBorderColor: y,
                  markerBorderThickness: s
                };
                (v.showInLegend || n.showInLegend && false !== v.showInLegend) && r2.push(p);
              }
              l(n.legendText) && (n.legendText = n.name);
            }
          }
          true === this.reversed && r2.reverse();
          if (0 < r2.length) {
            n = null;
            g = v = x2 = 0;
            v = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, h) : this.itemMaxWidth = Math.min(this.itemWidth, h) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, h) : this.itemMaxWidth = h;
            w = 0 === w ? 0.75 * this.lineHeight : w;
            v = (this.itemMaxWidth ? this.itemMaxWidth : v) - (w + f2);
            for (m = 0; m < r2.length; m++) {
              p = r2[m];
              t3 = v;
              if ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType) t3 -= 2 * 0.1 * this.lineHeight;
              if (!(0 >= q || "undefined" === typeof q || 0 >= t3 || "undefined" === typeof t3)) if ("horizontal" === this.orientation) {
                p.textBlock = new la(this.ctx, {
                  x: 0,
                  y: 0,
                  maxWidth: t3,
                  maxHeight: this.itemWrap ? q : this.lineHeight,
                  angle: 0,
                  text: p.text,
                  textAlign: "left",
                  fontSize: this.fontSize,
                  fontFamily: this.fontFamily,
                  fontWeight: this.fontWeight,
                  fontColor: this.fontColor,
                  fontStyle: this.fontStyle,
                  textBaseline: "middle"
                });
                p.textBlock.measureText();
                null !== this.itemWidth && (p.textBlock.width = this.itemWidth - (w + f2 + ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                if (!n || n.width + Math.round(p.textBlock.width + w + f2 + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType ? 2 * 0.1 * this.lineHeight : 0)) > h) n = {
                  items: [],
                  width: 0
                }, k.push(n), this.height += g, g = 0;
                g = Math.max(g, p.textBlock.height ? p.textBlock.height : this.lineHeight);
                p.textBlock.x = n.width;
                p.textBlock.y = 0;
                n.width += Math.round(p.textBlock.width + w + f2 + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType ? 2 * 0.1 * this.lineHeight : 0));
                n.items.push(p);
                this.width = Math.max(n.width, this.width);
              } else p.textBlock = new la(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: v,
                maxHeight: true === this.itemWrap ? q : 1.5 * this.fontSize,
                angle: 0,
                text: p.text,
                textAlign: "left",
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                textBaseline: "middle"
              }), p.textBlock.measureText(), null !== this.itemWidth && (p.textBlock.width = this.itemWidth - (w + f2 + ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < q - this.lineHeight ? (n = {
                items: [],
                width: 0
              }, k.push(n)) : (n = k[x2], x2 = (x2 + 1) % k.length), n && (this.height += p.textBlock.height ? p.textBlock.height : this.lineHeight, p.textBlock.x = n.width, p.textBlock.y = 0, n.width += Math.round(p.textBlock.width + w + f2 + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType ? 2 * 0.1 * this.lineHeight : 0)), n.items.push(p), this.width = Math.max(n.width, this.width));
            }
            this.height = false === this.itemWrap ? k.length * this.lineHeight : this.height + g;
            this.height = Math.min(q, this.height);
            this.width = Math.min(h, this.width);
          }
          "top" === this.verticalAlign ? (d = "left" === this.horizontalAlign ? e.x1 : "right" === this.horizontalAlign ? e.x2 - this.width : e.x1 + e.width / 2 - this.width / 2, b = e.y1) : "center" === this.verticalAlign ? (d = "left" === this.horizontalAlign ? e.x1 : "right" === this.horizontalAlign ? e.x2 - this.width : e.x1 + e.width / 2 - this.width / 2, b = e.y1 + e.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (d = "left" === this.horizontalAlign ? e.x1 : "right" === this.horizontalAlign ? e.x2 - this.width : e.x1 + e.width / 2 - this.width / 2, b = e.y2 - this.height);
          this.items = r2;
          for (m = 0; m < this.items.length; m++) p = r2[m], p.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[p.id] = {
            id: p.id,
            objectType: "legendItem",
            legendItemIndex: m,
            dataSeriesIndex: p.dataSeriesIndex,
            dataPointIndex: p.dataPointIndex
          };
          this.markerSize = w;
          this.rows = k;
          0 < r2.length && a.layoutManager.registerSpace(c, {
            width: this.width + 2 + 2,
            height: this.height + 5 + 5
          });
          this.bounds = {
            x1: d,
            y1: b,
            x2: d + this.width,
            y2: b + this.height
          };
        };
        U.prototype.render = function() {
          var a = this.bounds.x1, e = this.bounds.y1, c = this.markerMargin, b = this.maxWidth, d = this.maxHeight, h = this.markerSize, q = this.rows;
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, e, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
          for (var f2 = 0, l2 = 0; l2 < q.length; l2++) {
            for (var k = q[l2], m = 0, n = 0; n < k.items.length; n++) {
              var p = k.items[n], g = p.textBlock.x + a + (0 === n ? 0.2 * h : this.horizontalSpacing), r2 = e + f2, w = g;
              this.chart.data[p.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(a, e, b, Math.max(d - d % this.lineHeight, 0));
              this.ctx.clip();
              if ("line" === p.chartType || "stepLine" === p.chartType || "spline" === p.chartType) this.ctx.strokeStyle = p.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(g - 0.1 * this.lineHeight, r2 + this.lineHeight / 2), this.ctx.lineTo(g + 0.85 * this.lineHeight, r2 + this.lineHeight / 2), this.ctx.stroke(), w -= 0.1 * this.lineHeight;
              if ("error" === p.chartType) {
                this.ctx.strokeStyle = this.errorMarkerColor[0];
                this.ctx.lineWidth = h / 8;
                this.ctx.beginPath();
                var y = g - 0.08 * this.lineHeight + 0.1 * this.lineHeight, s = r2 + 0.15 * this.lineHeight, t3 = 0.7 * this.lineHeight, v = t3 + 0.02 * this.lineHeight;
                this.ctx.moveTo(y, s);
                this.ctx.lineTo(y + t3, s);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(y + t3 / 2, s);
                this.ctx.lineTo(y + t3 / 2, s + v);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(y, s + v);
                this.ctx.lineTo(y + t3, s + v);
                this.ctx.stroke();
                this.errorMarkerColor.shift();
              }
              ba.drawMarker(g + h / 2, r2 + this.lineHeight / 2, this.ctx, p.markerType, "error" === p.chartType || "line" === p.chartType || "spline" === p.chartType ? p.markerSize / 2 : p.markerSize, p.markerColor, p.markerBorderColor, p.markerBorderThickness);
              p.textBlock.x = g + c + h;
              if ("line" === p.chartType || "stepLine" === p.chartType || "spline" === p.chartType) p.textBlock.x += 0.1 * this.lineHeight;
              p.textBlock.y = Math.round(r2 + this.lineHeight / 2);
              p.textBlock.render(true);
              this.ctx.restore();
              m = 0 < n ? Math.max(m, p.textBlock.height ? p.textBlock.height : this.lineHeight) : p.textBlock.height ? p.textBlock.height : this.lineHeight;
              this.chart.data[p.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
              g = V(p.id);
              this.ghostCtx.fillStyle = g;
              this.ghostCtx.beginPath();
              this.ghostCtx.fillRect(w, p.textBlock.y - this.lineHeight / 2, p.textBlock.x + p.textBlock.width - w, p.textBlock.height ? p.textBlock.height : this.lineHeight);
              p.x1 = this.chart._eventManager.objectMap[p.id].x1 = w;
              p.y1 = this.chart._eventManager.objectMap[p.id].y1 = p.textBlock.y - this.lineHeight / 2;
              p.x2 = this.chart._eventManager.objectMap[p.id].x2 = p.textBlock.x + p.textBlock.width;
              p.y2 = this.chart._eventManager.objectMap[p.id].y2 = p.textBlock.y + (p.textBlock.height ? p.textBlock.height : this.lineHeight) - this.lineHeight / 2;
            }
            f2 += m;
          }
        };
        qa(Q2, Y);
        Q2.prototype.getDefaultAxisPlacement = function() {
          var a = this.type;
          if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "normal";
          if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
          if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a) return "none";
          "error" !== a && window.console.log("Unknown Chart Type: " + a);
          return null;
        };
        Q2.getDefaultLegendMarker = function(a) {
          if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "square";
          if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a) return "circle";
          if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a) return "triangle";
          if ("error" === a) return "none";
          window.console.log("Unknown Chart Type: " + a);
          return null;
        };
        Q2.prototype.getDataPointAtX = function(a, e, c) {
          if (!this.dataPoints || 0 === this.dataPoints.length) return null;
          var b = {
            dataPoint: null,
            distance: Infinity,
            index: NaN
          }, d = null, h = 0, q = 0, f2 = 1, r2 = Infinity, k = 0, m = 0, n = 0;
          "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (n = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), n = 1 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (n = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
          for (; ; ) {
            q = 0 < f2 ? n + h : n - h;
            if (0 <= q && q < this.dataPoints.length) {
              var d = this.dataPoints[q], p = this.axisX && this.axisX.logarithmic ? d.x > a ? d.x / a : a / d.x : Math.abs(d.x - a);
              p < b.distance && (l(c) || c && !l(d.y)) && (b.dataPoint = d, b.distance = p, b.index = q);
              d = p;
              d <= r2 ? r2 = d : 0 < f2 ? k++ : m++;
              if (1e3 < k && 1e3 < m) break;
            } else if (0 > n - h && n + h >= this.dataPoints.length) break;
            -1 === f2 ? (h++, f2 = 1) : f2 = -1;
          }
          return e || (b.dataPoint.x.getTime ? b.dataPoint.x.getTime() : b.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? e && null !== b.dataPoint ? b : null : b;
        };
        Q2.prototype.getDataPointAtXY = function(a, e, c) {
          if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || e < this.chart.plotArea.y1 || e > this.chart.plotArea.y2) return null;
          c = c || false;
          var b = [], d = 0, h = 0, q = 1, f2 = false, r2 = Infinity, k = 0, m = 0, n = 0;
          if ("none" !== this.chart.plotInfo.axisPlacement) if (n = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({
            x: a,
            y: e
          }), this.axisX.logarithmic) var p = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), n = 1 < p ? Math.min(Math.max((this.dataPoints.length - 1) / p * Math.log(n / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
          else p = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < p ? Math.min(Math.max((this.dataPoints.length - 1) / p * (n - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
          for (; ; ) {
            h = 0 < q ? n + d : n - d;
            if (0 <= h && h < this.dataPoints.length) {
              var p = this.chart._eventManager.objectMap[this.dataPointIds[h]], g = this.dataPoints[h], t3 = null;
              if (p) {
                switch (this.type) {
                  case "column":
                  case "stackedColumn":
                  case "stackedColumn100":
                  case "bar":
                  case "stackedBar":
                  case "stackedBar100":
                  case "rangeColumn":
                  case "rangeBar":
                  case "waterfall":
                  case "error":
                    a >= p.x1 && a <= p.x2 && e >= p.y1 && e <= p.y2 && (b.push({
                      dataPoint: g,
                      dataPointIndex: h,
                      dataSeries: this,
                      distance: Math.min(Math.abs(p.x1 - a), Math.abs(p.x2 - a), Math.abs(p.y1 - e), Math.abs(p.y2 - e))
                    }), f2 = true);
                    break;
                  case "line":
                  case "stepLine":
                  case "spline":
                  case "area":
                  case "stepArea":
                  case "stackedArea":
                  case "stackedArea100":
                  case "splineArea":
                  case "scatter":
                    var w = ka("markerSize", g, this) || 4, y = c ? 20 : w, t3 = Math.sqrt(Math.pow(p.x1 - a, 2) + Math.pow(p.y1 - e, 2));
                    t3 <= y && b.push({
                      dataPoint: g,
                      dataPointIndex: h,
                      dataSeries: this,
                      distance: t3
                    });
                    p = Math.abs(p.x1 - a);
                    p <= r2 ? r2 = p : 0 < q ? k++ : m++;
                    t3 <= w / 2 && (f2 = true);
                    break;
                  case "rangeArea":
                  case "rangeSplineArea":
                    w = ka("markerSize", g, this) || 4;
                    y = c ? 20 : w;
                    t3 = Math.min(Math.sqrt(Math.pow(p.x1 - a, 2) + Math.pow(p.y1 - e, 2)), Math.sqrt(Math.pow(p.x1 - a, 2) + Math.pow(p.y2 - e, 2)));
                    t3 <= y && b.push({
                      dataPoint: g,
                      dataPointIndex: h,
                      dataSeries: this,
                      distance: t3
                    });
                    p = Math.abs(p.x1 - a);
                    p <= r2 ? r2 = p : 0 < q ? k++ : m++;
                    t3 <= w / 2 && (f2 = true);
                    break;
                  case "bubble":
                    w = p.size;
                    t3 = Math.sqrt(Math.pow(p.x1 - a, 2) + Math.pow(p.y1 - e, 2));
                    t3 <= w / 2 && (b.push({
                      dataPoint: g,
                      dataPointIndex: h,
                      dataSeries: this,
                      distance: t3
                    }), f2 = true);
                    break;
                  case "pie":
                  case "doughnut":
                    w = p.center;
                    y = "doughnut" === this.type ? p.percentInnerRadius * p.radius : 0;
                    t3 = Math.sqrt(Math.pow(w.x - a, 2) + Math.pow(w.y - e, 2));
                    t3 < p.radius && t3 > y && (t3 = Math.atan2(e - w.y, a - w.x), 0 > t3 && (t3 += 2 * Math.PI), t3 = Number(((180 * (t3 / Math.PI) % 360 + 360) % 360).toFixed(12)), w = Number(((180 * (p.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), y = Number(((180 * (p.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === y && 1 < p.endAngle && (y = 360), w >= y && 0 !== g.y && !l(g.y) && (y += 360, t3 < w && (t3 += 360)), t3 > w && t3 < y && (b.push({
                      dataPoint: g,
                      dataPointIndex: h,
                      dataSeries: this,
                      distance: 0
                    }), f2 = true));
                    break;
                  case "funnel":
                  case "pyramid":
                    t3 = p.funnelSection;
                    e > t3.y1 && e < t3.y4 && (t3.y6 ? e > t3.y6 ? (h = t3.x6 + (t3.x5 - t3.x6) / (t3.y5 - t3.y6) * (e - t3.y6), t3 = t3.x3 + (t3.x4 - t3.x3) / (t3.y4 - t3.y3) * (e - t3.y3)) : (h = t3.x1 + (t3.x6 - t3.x1) / (t3.y6 - t3.y1) * (e - t3.y1), t3 = t3.x2 + (t3.x3 - t3.x2) / (t3.y3 - t3.y2) * (e - t3.y2)) : (h = t3.x1 + (t3.x4 - t3.x1) / (t3.y4 - t3.y1) * (e - t3.y1), t3 = t3.x2 + (t3.x3 - t3.x2) / (t3.y3 - t3.y2) * (e - t3.y2)), a > h && a < t3 && (b.push({
                      dataPoint: g,
                      dataPointIndex: p.dataPointIndex,
                      dataSeries: this,
                      distance: 0
                    }), f2 = true));
                    break;
                  case "boxAndWhisker":
                    if (a >= p.x1 - p.borderThickness / 2 && a <= p.x2 + p.borderThickness / 2 && e >= p.y4 - p.borderThickness / 2 && e <= p.y1 + p.borderThickness / 2 || Math.abs(p.x2 - a + p.x1 - a) < p.borderThickness && e >= p.y1 && e <= p.y4) b.push({
                      dataPoint: g,
                      dataPointIndex: h,
                      dataSeries: this,
                      distance: Math.min(Math.abs(p.x1 - a), Math.abs(p.x2 - a), Math.abs(p.y2 - e), Math.abs(p.y3 - e))
                    }), f2 = true;
                    break;
                  case "candlestick":
                    if (a >= p.x1 - p.borderThickness / 2 && a <= p.x2 + p.borderThickness / 2 && e >= p.y2 - p.borderThickness / 2 && e <= p.y3 + p.borderThickness / 2 || Math.abs(p.x2 - a + p.x1 - a) < p.borderThickness && e >= p.y1 && e <= p.y4) b.push({
                      dataPoint: g,
                      dataPointIndex: h,
                      dataSeries: this,
                      distance: Math.min(Math.abs(p.x1 - a), Math.abs(p.x2 - a), Math.abs(p.y2 - e), Math.abs(p.y3 - e))
                    }), f2 = true;
                    break;
                  case "ohlc":
                    if (Math.abs(p.x2 - a + p.x1 - a) < p.borderThickness && e >= p.y2 && e <= p.y3 || a >= p.x1 && a <= (p.x2 + p.x1) / 2 && e >= p.y1 - p.borderThickness / 2 && e <= p.y1 + p.borderThickness / 2 || a >= (p.x1 + p.x2) / 2 && a <= p.x2 && e >= p.y4 - p.borderThickness / 2 && e <= p.y4 + p.borderThickness / 2) b.push({
                      dataPoint: g,
                      dataPointIndex: h,
                      dataSeries: this,
                      distance: Math.min(Math.abs(p.x1 - a), Math.abs(p.x2 - a), Math.abs(p.y2 - e), Math.abs(p.y3 - e))
                    }), f2 = true;
                }
                if (f2 || 1e3 < k && 1e3 < m) break;
              }
            } else if (0 > n - d && n + d >= this.dataPoints.length) break;
            -1 === q ? (d++, q = 1) : q = -1;
          }
          a = null;
          for (e = 0; e < b.length; e++) a ? b[e].distance <= a.distance && (a = b[e]) : a = b[e];
          return a;
        };
        Q2.prototype.getMarkerProperties = function(a, e, c, b) {
          var d = this.dataPoints, h = d[a].markerColor ? d[a].markerColor : this.markerColor ? this.markerColor : d[a].color ? d[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length], q = d[a].markerBorderColor ? d[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null, f2 = l(d[a].markerBorderThickness) ? this.markerBorderThickness ? this.markerBorderThickness : null : d[a].markerBorderThickness, r2 = d[a].markerType ? d[a].markerType : this.markerType;
          a = l(d[a].markerSize) ? this.markerSize : d[a].markerSize;
          return {
            x: e,
            y: c,
            ctx: b,
            type: r2,
            size: a,
            color: h,
            borderColor: q,
            borderThickness: f2
          };
        };
        qa(B, Y);
        B.prototype.createExtraLabelsForLog = function(a) {
          a = (a || 0) + 1;
          if (!(5 < a)) {
            var e = this.logLabelValues[0] || this.intervalStartPosition;
            if (Math.log(this.range) / Math.log(e / this.viewportMinimum) < this.noTicks - 1) {
              for (var c = B.getNiceNumber((e - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), true), b = Math.ceil(this.viewportMinimum / c) * c; b < e; b += c) b < this.viewportMinimum || this.logLabelValues.push(b);
              this.logLabelValues.sort(Ta);
              this.createExtraLabelsForLog(a);
            }
          }
        };
        B.prototype.createLabels = function() {
          var a, e, c = 0, b = 0, d, h = 0, q = 0, b = 0, b = this.interval, f2 = 0, t3, k = 0.6 * this.chart.height, m;
          a = false;
          var n = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], p = n.length ? l(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
          if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
            d = this.viewportMaximum;
            if (this.labels) {
              a = Math.ceil(b);
              for (var b = Math.ceil(this.intervalStartPosition), g = false, c = b; c < this.viewportMaximum; c += a) if (this.labels[c]) g = true;
              else {
                g = false;
                break;
              }
              g && (this.interval = a, this.intervalStartPosition = b);
            }
            if (this.logarithmic && !this.equidistantInterval) for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), b = 0, g = p; b < this.logLabelValues.length; b++) if (c = this.logLabelValues[b], c < this.viewportMinimum) b++;
            else {
              for (; g < n.length && c > n[g].endValue; g++) ;
              a = g < n.length && c >= n[g].startValue && c <= n[g].endValue;
              m = c;
              a || (a = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.options,
                value: m,
                label: this.labels[m] ? this.labels[m] : null
              }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : ia(m, this.valueFormatString, this.chart._cultureInfo), a = new la(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: h,
                maxHeight: q,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                cornerRadius: this.labelCornerRadius,
                textAlign: this.labelTextAlign,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle",
                borderThickness: this.labelBorderThickness,
                padding: this.labelPadding
              }), this._labels.push({
                position: m,
                textBlock: a,
                effectiveHeight: null
              }));
            }
            g = p;
            for (c = this.intervalStartPosition; c <= d; c = parseFloat(1e-12 > this.interval ? this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval : (this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval).toFixed(12))) {
              for (; g < n.length && c > n[g].endValue; g++) ;
              a = g < n.length && c >= n[g].startValue && c <= n[g].endValue;
              m = c;
              a || (a = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.options,
                value: m,
                label: this.labels[m] ? this.labels[m] : null
              }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : ia(m, this.valueFormatString, this.chart._cultureInfo), a = new la(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: h,
                maxHeight: q,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                textAlign: this.labelTextAlign,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle",
                padding: this.labelPadding
              }), this._labels.push({
                position: m,
                textBlock: a,
                effectiveHeight: null
              }));
            }
          } else for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval), d = Za(new Date(this.viewportMaximum), this.interval, this.intervalType), g = p, c = this.intervalStartPosition; c < d; Za(c, b, this.intervalType)) {
            for (a = c.getTime(); g < n.length && a > n[g].endValue; g++) ;
            m = a;
            a = g < n.length && a >= n[g].startValue && a <= n[g].endValue;
            a || (a = this.labelFormatter ? this.labelFormatter({
              chart: this.chart,
              axis: this.options,
              value: new Date(m),
              label: this.labels[m] ? this.labels[m] : null
            }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : Da(m, this.valueFormatString, this.chart._cultureInfo), a = new la(this.ctx, {
              x: 0,
              y: 0,
              maxWidth: h,
              backgroundColor: this.labelBackgroundColor,
              borderColor: this.labelBorderColor,
              borderThickness: this.labelBorderThickness,
              cornerRadius: this.labelCornerRadius,
              maxHeight: q,
              angle: this.labelAngle,
              text: this.prefix + a + this.suffix,
              textAlign: this.labelTextAlign,
              fontSize: this.labelFontSize,
              fontFamily: this.labelFontFamily,
              fontWeight: this.labelFontWeight,
              fontColor: this.labelFontColor,
              fontStyle: this.labelFontStyle,
              textBaseline: "middle",
              padding: this.labelPadding
            }), this._labels.push({
              position: m,
              textBlock: a,
              effectiveHeight: null,
              breaksLabelType: void 0
            }));
          }
          if ("bottom" === this._position || "top" === this._position) f2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * S[this.intervalType + "Duration"] * this.interval, h = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (q = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
          else if ("left" === this._position || "right" === this._position) f2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * S[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (h = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), q = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
          for (b = 0; b < this._labels.length; b++) {
            a = this._labels[b].textBlock;
            a.maxWidth = h;
            a.maxHeight = q;
            var x2 = a.measureText();
            t3 = x2.height;
          }
          d = [];
          p = n = 0;
          if (this.labelAutoFit || this.options.labelAutoFit) {
            if (l(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position) {
              if (h = Math.floor(0.9 * f2), p = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
                this.sessionVariables.labelFontSize = this.labelFontSize;
                this.sessionVariables.labelMaxWidth = h;
                this.sessionVariables.labelMaxHeight = q;
                this.sessionVariables.labelAngle = this.labelAngle;
                this.sessionVariables.labelWrap = this.labelWrap;
                for (c = 0; c < this._labels.length; c++) if (!this._labels[c].breaksLabelType) {
                  a = this._labels[c].textBlock;
                  for (var w, g = a.text.split(" "), b = 0; b < g.length; b++) m = g[b], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, m = this.ctx.measureText(m), m.width > p && (w = c, p = m.width);
                }
                c = 0;
                for (c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; c < this._labels.length; c++) if (!this._labels[c].breaksLabelType) {
                  a = this._labels[c].textBlock;
                  x2 = a.measureText();
                  for (g = c + 1; g < this._labels.length; g++) if (!this._labels[g].breaksLabelType) {
                    e = this._labels[g].textBlock;
                    e = e.measureText();
                    break;
                  }
                  d.push(a.height);
                  this.sessionVariables.labelMaxHeight = Math.max.apply(Math, d);
                  Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                  Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                  b = h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (q - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                  if (l(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle) {
                    if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? q : Math.min((b - h * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), m = (k - (t3 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !l(this.options.labelWrap)) this.labelWrap ? l(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, p), m), this.sessionVariables.labelWrap = this.labelWrap, e && x2.width + e.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle) : l(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelMaxWidth = h, e && x2.width + e.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelWrap = this.labelWrap);
                    else {
                      if (l(this.options.labelWrap)) {
                        if (!l(this.options.labelMaxWidth)) this.options.labelMaxWidth < h ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = q);
                        else if (!l(e)) {
                          if (b = x2.width + e.width >> 0, g = this.labelFontSize, p < h) b - 2 * h > n && (n = b - 2 * h, b >= 2 * h && b < 2.2 * h ? (this.sessionVariables.labelMaxWidth = h, l(this.options.labelFontSize) && 12 < g && (g = Math.floor(12 / 13 * g), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 2.2 * h && b < 2.8 * h ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelFontSize = g) : b >= 2.8 * h && b < 3.2 * h ? (this.sessionVariables.labelMaxWidth = Math.max(h, p), this.sessionVariables.labelWrap = true, l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 3.2 * h && b < 3.6 * h ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelFontSize = this.labelFontSize) : b > 3.6 * h && b < 5 * h ? (l(this.options.labelFontSize) && 12 < g && (g = Math.floor(12 / 13 * g), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m) : b > 5 * h && (this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelFontSize = g, this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelAngle = this.labelAngle));
                          else if (w === c && (0 === w && p + this._labels[w + 1].textBlock.measureText().width - 2 * h > n || w === this._labels.length - 1 && p + this._labels[w - 1].textBlock.measureText().width - 2 * h > n || 0 < w && w < this._labels.length - 1 && p + this._labels[w + 1].textBlock.measureText().width - 2 * h > n && p + this._labels[w - 1].textBlock.measureText().width - 2 * h > n)) n = 0 === w ? p + this._labels[w + 1].textBlock.measureText().width - 2 * h : p + this._labels[w - 1].textBlock.measureText().width - 2 * h, this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m;
                          else if (0 === n) for (this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelWrap = true, b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, p), m), x2 = a.measureText(), b < this._labels.length - 1 && (g = b + 1, e = this._labels[g].textBlock, e.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, p), m), e = e.measureText(), x2.width + e.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25));
                        }
                      }
                    }
                  } else (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? q : Math.min((b - h * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), m = 0 != this.labelAngle ? (k - (t3 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : h, this.sessionVariables.labelMaxHeight = this.labelWrap ? (k - m * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, l(this.options.labelWrap)) ? l(this.options.labelWrap) && (this.labelWrap && !l(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m, this.sessionVariables.labelMaxHeight = q) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelMaxHeight = b < 0.9 * f2 ? 0.9 * f2 : b, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m) : (l(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = q);
                }
                for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
              } else for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = l(this.options.labelMaxWidth) ? l(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = h : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = l(this.options.labelFontSize) ? l(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = l(this.options.labelAngle) ? l(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = l(this.options.labelWrap) ? l(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = l(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = q : this.sessionVariables.labelMaxHeight, a.measureText();
            } else if ("left" === this._position || "right" === this._position) if (h = l(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, q = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
              this.sessionVariables.labelFontSize = this.labelFontSize;
              this.sessionVariables.labelMaxWidth = h;
              this.sessionVariables.labelMaxHeight = q;
              this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
              this.sessionVariables.labelWrap = this.labelWrap;
              for (c = 0; c < this._labels.length; c++) if (!this._labels[c].breaksLabelType) {
                a = this._labels[c].textBlock;
                x2 = a.measureText();
                for (g = c + 1; g < this._labels.length; g++) if (!this._labels[g].breaksLabelType) {
                  e = this._labels[g].textBlock;
                  e = e.measureText();
                  break;
                }
                d.push(a.height);
                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, d);
                b = h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (q - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                l(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? l(this.options.labelWrap) ? l(this.options.labelWrap) && (l(this.options.labelMaxWidth) ? l(e) || (f2 = x2.height + e.height >> 0, f2 - 2 * q > p && (p = f2 - 2 * q, f2 >= 2 * q && f2 < 2.4 * q ? (l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : f2 >= 2.4 * q && f2 < 2.8 * q ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = true) : f2 >= 2.8 * q && f2 < 3.2 * q ? (this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelWrap = true, l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : f2 >= 3.2 * q && f2 < 3.6 * q ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelWrap = true, this.sessionVariables.labelFontSize = this.labelFontSize) : f2 > 3.6 * q && f2 < 10 * q ? (l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : f2 > 10 * q && f2 < 50 * q && (l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : h, this.sessionVariables.labelMaxHeight = q) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? h : Math.min((b - q * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), q), l(this.options.labelWrap)) ? l(this.options.labelWrap) && (this.labelWrap && !l(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : h, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? q : b, l(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? q : b, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = h) : (this.sessionVariables.labelMaxHeight = q, l(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap);
              }
              for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
            } else for (l(this.chart.stockChart) || this.chart.isNavigator || (this.sessionVariables.labelMaxHeight = q), c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = l(this.options.labelMaxWidth) ? l(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = h : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = l(this.options.labelFontSize) ? l(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = l(this.options.labelAngle) ? l(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = l(this.options.labelWrap) ? l(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = l(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = q : this.sessionVariables.labelMaxHeight, a.measureText();
          }
          for (c = 0; c < this.stripLines.length; c++) {
            var h = this.stripLines[c], y;
            if ("outside" === h.labelPlacement) {
              q = this.sessionVariables.labelMaxWidth;
              if ("bottom" === this._position || "top" === this._position) l(h.options.labelWrap) && !l(this.sessionVariables.stripLineLabelMaxHeight) ? y = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = y = h.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
              if ("left" === this._position || "right" === this._position) l(h.options.labelWrap) && !l(this.sessionVariables.stripLineLabelMaxHeight) ? y = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = y = h.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
              l(h.labelBackgroundColor) && (h.labelBackgroundColor = "#EEEEEE");
            } else q = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, y = l(h.options.labelWrap) || h.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, l(h.labelBackgroundColor) && (l(h.startValue) && 0 !== h.startValue ? h.labelBackgroundColor = r ? "transparent" : null : h.labelBackgroundColor = "#EEEEEE");
            h.labelFontSize = "outside" === h.labelPlacement && l(h.options.labelFontSize) ? this.labelFontSize : h.labelFontSize;
            h.labelFontFamily = "outside" === h.labelPlacement && l(h.options.labelFontFamily) ? this.labelFontFamily : h.labelFontFamily;
            h.labelFontWeight = "outside" === h.labelPlacement && l(h.options.labelFontWeight) ? this.labelFontWeight : h.labelFontWeight;
            h.labelFontStyle = "outside" === h.labelPlacement && l(h.options.labelFontStyle) ? this.labelFontStyle : h.labelFontStyle;
            a = new la(this.ctx, {
              x: 0,
              y: 0,
              backgroundColor: h.labelBackgroundColor,
              borderColor: h.labelBorderColor,
              borderThickness: h.labelBorderThickness,
              cornerRadius: h.labelCornerRadius,
              maxWidth: h.options.labelMaxWidth ? h.options.labelMaxWidth : q,
              maxHeight: y,
              angle: this.labelAngle,
              text: h.labelFormatter ? h.labelFormatter({
                chart: this.chart,
                axis: this,
                stripLine: h
              }) : h.label,
              textAlign: h.labelTextAlign,
              fontSize: h.labelFontSize,
              fontFamily: h.labelFontFamily,
              fontWeight: h.labelFontWeight,
              fontColor: h.labelFontColor || h.color,
              fontStyle: h.labelFontStyle,
              textBaseline: "middle",
              padding: h.labelPadding
            });
            this._stripLineLabels.push({
              position: h.value,
              textBlock: a,
              effectiveHeight: null,
              stripLine: h
            });
          }
        };
        B.prototype.createLabelsAndCalculateWidth = function() {
          var a = 0, e = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var c = this.chart.isNavigator ? 0 : 5;
          if ("left" === this._position || "right" === this._position) {
            this.createLabels();
            if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index) for (e = 0; e < this._labels.length; e++) {
              var b = this._labels[e].textBlock, b = b.measureText(), d = 0, d = 0 === this.labelAngle ? b.width : b.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + b.height * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
              a < d && (this.labelEffectiveWidth = a = d);
              this._labels[e].effectiveWidth = d;
            }
            for (e = 0; e < this._stripLineLabels.length; e++) "outside" === this._stripLineLabels[e].stripLine.labelPlacement && this._stripLineLabels[e].stripLine.value >= this.viewportMinimum && this._stripLineLabels[e].stripLine.value <= this.viewportMaximum && (b = this._stripLineLabels[e].textBlock, b = b.measureText(), d = 0 === this.labelAngle ? b.width : b.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + b.height * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), "inside" === this.tickPlacement && (d += this.tickLength), "inside" === this.labelPlacement && (a += 0 < this._index ? d : 0), a < d && (a = d), this.stripLineLabelEffectiveWidth = this._stripLineLabels[e].effectiveWidth = d);
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 < this._index ? this.tickLength : 0 : this.tickLength) + c;
        };
        B.prototype.createLabelsAndCalculateHeight = function() {
          var a = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var e, c = 0, b = this.chart.isNavigator ? 0 : 5;
          if ("bottom" === this._position || "top" === this._position) {
            this.createLabels();
            if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index) for (c = 0; c < this._labels.length; c++) {
              e = this._labels[c].textBlock;
              e = e.measureText();
              var d = 0, d = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + e.height * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
              a < d && (this.labelEffectiveHeight = a = d);
              this._labels[c].effectiveHeight = d;
            }
            for (c = 0; c < this._stripLineLabels.length; c++) "outside" === this._stripLineLabels[c].stripLine.labelPlacement && this._stripLineLabels[c].stripLine.value >= this.viewportMinimum && this._stripLineLabels[c].stripLine.value <= this.viewportMaximum && (e = this._stripLineLabels[c].textBlock, e = e.measureText(), d = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + e.height * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), "inside" === this.tickPlacement && (d += this.tickLength), "inside" === this.labelPlacement && (a += 0 < this._index ? d : 0), a < d && (a = d), this.stripLineLabelEffectiveHeight = this._stripLineLabels[c].effectiveHeight = d);
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 < this._index ? this.tickLength : 0 : this.tickLength) + b;
        };
        B.setLayout = function(a, e, c, b, d, h) {
          var f2, u, r2, k, m = a[0] ? a[0].chart : e[0].chart, n = m.isNavigator ? 0 : 10, p = m._axes;
          if (a && 0 < a.length) for (var g = 0; g < a.length; g++) a[g] && a[g].calculateAxisParameters();
          if (e && 0 < e.length) for (g = 0; g < e.length; g++) e[g].calculateAxisParameters();
          if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].calculateAxisParameters();
          if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].calculateAxisParameters();
          for (g = 0; g < p.length; g++) if (p[g] && p[g].scaleBreaks && p[g].scaleBreaks._appliedBreaks.length) for (var t3 = p[g].scaleBreaks._appliedBreaks, w = 0; w < t3.length && !(t3[w].startValue > p[g].viewportMaximum); w++) t3[w].endValue < p[g].viewportMinimum || (l(p[g].scaleBreaks.firstBreakIndex) && (p[g].scaleBreaks.firstBreakIndex = w), t3[w].startValue >= p[g].viewPortMinimum && (p[g].scaleBreaks.lastBreakIndex = w));
          for (var x2 = w = 0, s = 0, z = 0, v = 0, A3 = 0, B2 = 0, F2, I2, K2 = u = 0, L, M, N, t3 = L = M = N = false, g = 0; g < p.length; g++) p[g] && p[g].title && (p[g]._titleTextBlock = new la(p[g].ctx, {
            text: p[g].title,
            fontSize: p[g].titleFontSize,
            fontFamily: p[g].titleFontFamily,
            fontWeight: p[g].titleFontWeight,
            fontColor: p[g].titleFontColor,
            fontStyle: p[g].titleFontStyle,
            borderColor: p[g].titleBorderColor,
            borderThickness: p[g].titleBorderThickness,
            backgroundColor: p[g].titleBackgroundColor,
            cornerRadius: p[g].titleCornerRadius,
            textBaseline: "middle",
            textAlign: p[g].titleTextAlign,
            padding: p[g].titlePadding
          }));
          for (g = 0; g < p.length; g++) if (p[g].title) switch (p[g]._position) {
            case "left":
              p[g]._titleTextBlock.maxWidth = p[g].titleMaxWidth || h.height;
              p[g]._titleTextBlock.maxHeight = p[g].titleWrap ? 0.8 * h.width : 1.5 * p[g].titleFontSize;
              p[g]._titleTextBlock.angle = -90;
              break;
            case "right":
              p[g]._titleTextBlock.maxWidth = p[g].titleMaxWidth || h.height;
              p[g]._titleTextBlock.maxHeight = p[g].titleWrap ? 0.8 * h.width : 1.5 * p[g].titleFontSize;
              p[g]._titleTextBlock.angle = 90;
              break;
            default:
              p[g]._titleTextBlock.maxWidth = p[g].titleMaxWidth || h.width, p[g]._titleTextBlock.maxHeight = p[g].titleWrap ? 0.8 * h.height : 1.5 * p[g].titleFontSize, p[g]._titleTextBlock.angle = 0;
          }
          if ("normal" === d) {
            for (var z = [], v = [], A3 = [], B2 = [], R2 = [], S2 = [], O2 = [], Q3 = []; 4 > w; ) {
              var D = 0, U2 = 0, V2 = 0, W3 = 0, Y2 = d = 0, T = 0, aa3 = 0, X3 = 0, $3 = 0, P = 0, ba2 = 0;
              if (c && 0 < c.length) for (A3 = [], g = P = 0; g < c.length; g++) A3.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateWidth() : 0)), P += A3[g], T += c[g] && !m.isNavigator ? c[g].margin : 0;
              else A3.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
              O2.push(A3);
              if (b && 0 < b.length) for (B2 = [], g = ba2 = 0; g < b.length; g++) B2.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateWidth() : 0)), ba2 += B2[g], aa3 += b[g] ? b[g].margin : 0;
              else B2.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
              Q3.push(B2);
              f2 = Math.round(h.x1 + P + T);
              r2 = Math.round(h.x2 - ba2 - aa3 > m.width - n ? m.width - n : h.x2 - ba2 - aa3);
              if (a && 0 < a.length) for (z = [], g = X3 = 0; g < a.length; g++) a[g] && (a[g].lineCoordinates = {}), a[g].lineCoordinates.width = Math.abs(r2 - f2), a[g].title && (a[g]._titleTextBlock.maxWidth = 0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.width ? a[g].titleMaxWidth : a[g].lineCoordinates.width), z.push(Math.ceil(a[g] ? a[g].createLabelsAndCalculateHeight() : 0)), X3 += z[g], d += a[g] && !m.isNavigator ? a[g].margin : 0;
              else z.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
              R2.push(z);
              if (e && 0 < e.length) for (v = [], g = $3 = 0; g < e.length; g++) e[g] && (e[g].lineCoordinates = {}), e[g].lineCoordinates.width = Math.abs(r2 - f2), e[g].title && (e[g]._titleTextBlock.maxWidth = 0 < e[g].titleMaxWidth && e[g].titleMaxWidth < e[g].lineCoordinates.width ? e[g].titleMaxWidth : e[g].lineCoordinates.width), v.push(Math.ceil(e[g] ? e[g].createLabelsAndCalculateHeight() : 0)), $3 += v[g], Y2 += e[g] && !m.isNavigator ? e[g].margin : 0;
              else v.push(Math.ceil(e[0] ? e[0].createLabelsAndCalculateHeight() : 0));
              S2.push(v);
              if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g] && (a[g].lineCoordinates.x1 = f2, r2 = Math.round(h.x2 - ba2 - aa3 > m.width - n ? m.width - n : h.x2 - ba2 - aa3), a[g]._labels && 1 < a[g]._labels.length && (u = k = 0, k = a[g]._labels[1], u = "dateTime" === a[g].valueType ? a[g]._labels[a[g]._labels.length - 2] : a[g]._labels[a[g]._labels.length - 1], x2 = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), s = u.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(u.textBlock.angle)) + (u.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(u.textBlock.angle))), !a[g] || !a[g].labelAutoFit || l(F2) || l(I2) || m.isNavigator || m.stockChart || (u = 0, 0 < a[g].labelAngle ? I2 + s > r2 && a[g].convertPixelToValue(I2) >= a[g].viewportMinimum && a[g].convertPixelToValue(I2) <= a[g].viewportMaximum && (u += 0 < a[g].labelAngle ? I2 + s - r2 - ba2 : 0) : 0 > a[g].labelAngle ? F2 - x2 < f2 && F2 - x2 < a[g].viewportMinimum && (K2 = f2 - (T + a[g].tickLength + A3 + F2 - x2 + a[g].labelFontSize / 2)) : 0 === a[g].labelAngle && (I2 + s > r2 && a[g].convertPixelToValue(I2) >= a[g].viewportMinimum && a[g].convertPixelToValue(I2) <= a[g].viewportMaximum && (u = I2 + s / 2 - r2 - ba2), F2 - x2 < f2 && F2 - x2 < a[g].viewportMinimum && (K2 = f2 - T - a[g].tickLength - A3 - F2 + x2 / 2)), a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 < a[g].labelAngle && 0 < u ? r2 -= u : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 > a[g].labelAngle && 0 < K2 ? f2 += K2 : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 === a[g].labelAngle && (0 < K2 && (f2 += K2), 0 < u && (r2 -= u))), m.panEnabled ? X3 = l(m.sessionVariables.axisX.height) || m.stockChart ? m.sessionVariables.axisX.height = X3 : m.sessionVariables.axisX.height : m.sessionVariables.axisX.height = X3, u = Math.round(h.y2 - X3 - d + D), k = Math.round(h.y2), a[g].lineCoordinates.x2 = r2, a[g].lineCoordinates.width = r2 - f2, a[g].lineCoordinates.y1 = u, a[g].lineCoordinates.y2 = u, "inside" === a[g].labelPlacement && 0 < g && (a[g].lineCoordinates.y1 = a[0].lineCoordinates.y2 + D + (a[g].labelEffectiveHeight || 0), a[g].lineCoordinates.y2 = a[g].lineCoordinates.y1 + a[g].lineThickness / 2), "inside" === a[g].tickPlacement && 0 < g && (a[g].lineCoordinates.y1 += a[g].tickLength, a[g].lineCoordinates.y2 = a[g].lineCoordinates.y1 + a[g].lineThickness / 2), a[g].bounds = {
                x1: f2,
                y1: u,
                x2: r2,
                y2: k - (X3 + d - z[g] - D),
                width: r2 - f2
              }, a[g].bounds.height = a[g].bounds.y2 - a[g].bounds.y1), D += z[g] + a[g].margin;
              if (e && 0 < e.length) for (g = 0; g < e.length; g++) e[g].lineCoordinates.x1 = Math.round(h.x1 + P + T), e[g].lineCoordinates.x2 = r2 ? r2 : Math.round(h.x2 - ba2 - aa3 > m.width - n ? m.width - n : h.x2 - ba2 - aa3), e[g].lineCoordinates.width = Math.abs(r2 - f2), e[g]._labels && 1 < e[g]._labels.length && (k = e[g]._labels[1], u = "dateTime" === e[g].valueType ? e[g]._labels[e[g]._labels.length - 2] : e[g]._labels[e[g]._labels.length - 1], x2 = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), s = u.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(u.textBlock.angle)) + (u.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(u.textBlock.angle))), m.panEnabled ? $3 = l(m.sessionVariables.axisX2.height) || m.stockChart ? m.sessionVariables.axisX2.height = $3 : m.sessionVariables.axisX2.height : m.sessionVariables.axisX2.height = $3, u = Math.round(h.y1), k = e[g].lineCoordinates.y1 = u + $3 + Y2 - U2, e[g].lineCoordinates.y2 = u, "inside" === e[g].labelPlacement && 0 < g && (e[g].lineCoordinates.y1 = e[0].lineCoordinates.y1 - U2 - (e[g].labelEffectiveHeight || 0) - 5), "inside" === e[g].tickPlacement && 0 < g && (e[g].lineCoordinates.y1 -= e[g].tickLength), e[g].bounds = {
                x1: f2,
                y1: u + ($3 + Y2 - ("inside" === e[g].labelPlacement && 0 === g ? v[g] - 5 : v[g]) - U2),
                x2: r2,
                y2: k,
                width: r2 - f2
              }, e[g].bounds.height = e[g].bounds.y2 - e[g].bounds.y1, U2 += ("inside" === e[g].labelPlacement && 0 === g ? v[g] - 5 : v[g]) + e[g].margin;
              if (c && 0 < c.length) for (g = 0; g < c.length; g++) T = m.isNavigator ? 0 : 10, c[g] && (f2 = Math.round(a[0] ? a[0].lineCoordinates.x1 : e[0].lineCoordinates.x1), T = c[g]._labels && 0 < c[g]._labels.length ? c[g]._labels[c[g]._labels.length - 1].textBlock.height / 2 : n, u = Math.round(h.y1 + $3 + Y2 < Math.max(T, n) ? Math.max(T, n) : h.y1 + $3 + Y2), r2 = Math.round(a[0] ? a[0].lineCoordinates.x1 : e[0].lineCoordinates.x1), T = 0 < a.length ? 0 : c[g]._labels && 0 < c[g]._labels.length ? c[g]._labels[0].textBlock.height / 2 : n, k = Math.round(h.y2 - X3 - d - T), c[g].lineCoordinates = {
                x1: f2 - V2,
                y1: u,
                x2: r2 - V2,
                y2: k,
                height: Math.abs(k - u)
              }, "inside" === c[g].labelPlacement && 0 < g && (c[g].lineCoordinates.x1 = c[0].lineCoordinates.x1 - V2 - (c[g].labelEffectiveWidth || 0) - 5, c[g].lineCoordinates.x2 = c[g].lineCoordinates.x1 + c[g].lineThickness / 2), "inside" === c[g].tickPlacement && 0 < g && (c[g].lineCoordinates.x1 -= c[g].tickLength, c[g].lineCoordinates.x2 = c[g].lineCoordinates.x1 + c[g].lineThickness / 2), c[g].bounds = {
                x1: f2 - (("inside" === c[g].labelPlacement && 0 === g ? A3[g] - 5 : A3[g]) + V2),
                y1: u,
                x2: r2 - V2,
                y2: k,
                height: k - u
              }, c[g].bounds.width = c[g].bounds.x2 - c[g].bounds.x1, c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.height ? c[g].titleMaxWidth : c[g].lineCoordinates.height), V2 += ("inside" === c[g].labelPlacement && 0 === g ? A3[g] - 5 : A3[g]) + c[g].margin);
              if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g] && (f2 = Math.round(a[0] ? a[0].lineCoordinates.x2 : e[0].lineCoordinates.x2), r2 = Math.round(f2), T = b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[b[g]._labels.length - 1].textBlock.height / 2 : 0, u = Math.round(h.y1 + $3 + Y2 < Math.max(T, n) ? Math.max(T, n) : h.y1 + $3 + Y2), T = 0 < a.length ? 0 : b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[0].textBlock.height / 2 : 0, k = Math.round(h.y2 - (X3 + d + T)), b[g].lineCoordinates = {
                x1: f2 + W3,
                y1: u,
                x2: f2 + W3,
                y2: k,
                height: Math.abs(k - u)
              }, "inside" === b[g].labelPlacement && 0 < g && (b[g].lineCoordinates.x1 = b[0].lineCoordinates.x2 + W3 + (b[g].labelEffectiveWidth || 0) + 5, b[g].lineCoordinates.x2 = b[g].lineCoordinates.x1 + b[g].lineThickness / 2), "inside" === b[g].tickPlacement && 0 < g && (b[g].lineCoordinates.x1 += b[g].tickLength, b[g].lineCoordinates.x2 = b[g].lineCoordinates.x1 + b[g].lineThickness / 2), b[g].bounds = {
                x1: f2 + W3,
                y1: u,
                x2: r2 + (("inside" === b[g].labelPlacement && 0 === g ? B2[g] - 5 : B2[g]) + W3),
                y2: k,
                height: k - u
              }, b[g].bounds.width = b[g].bounds.x2 - b[g].bounds.x1, b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.height ? b[g].titleMaxWidth : b[g].lineCoordinates.height), W3 += ("inside" === b[g].labelPlacement && 0 === g ? B2[g] - 5 : B2[g]) + b[g].margin);
              if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g] && (a[g].calculateValueToPixelConversionParameters(), a[g].calculateBreaksSizeInValues(), a[g]._labels && 1 < a[g]._labels.length && (F2 = (a[g].logarithmic ? Math.log(a[g]._labels[1].position / a[g].viewportMinimum) / a[g].conversionParameters.lnLogarithmBase : a[g]._labels[1].position - a[g].viewportMinimum) * Math.abs(a[g].conversionParameters.pixelPerUnit) + a[g].lineCoordinates.x1, f2 = a[g]._labels[a[g]._labels.length - ("dateTime" === a[g].valueType ? 2 : 1)].position, f2 = a[g].getApparentDifference(a[g].viewportMinimum, f2), I2 = a[g].logarithmic ? (1 < f2 ? Math.log(f2) / a[g].conversionParameters.lnLogarithmBase * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) + a[g].lineCoordinates.x1 : (0 < f2 ? f2 * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) + a[g].lineCoordinates.x1));
              if (e && 0 < e.length) for (g = 0; g < e.length; g++) e[g].calculateValueToPixelConversionParameters(), e[g].calculateBreaksSizeInValues(), e[g]._labels && 1 < e[g]._labels.length && (F2 = (e[g].logarithmic ? Math.log(e[g]._labels[1].position / e[g].viewportMinimum) / e[g].conversionParameters.lnLogarithmBase : e[g]._labels[1].position - e[g].viewportMinimum) * Math.abs(e[g].conversionParameters.pixelPerUnit) + e[g].lineCoordinates.x1, f2 = e[g]._labels[e[g]._labels.length - ("dateTime" === e[g].valueType ? 2 : 1)].position, f2 = e[g].getApparentDifference(e[g].viewportMinimum, f2), I2 = e[g].logarithmic ? (1 < f2 ? Math.log(f2) / e[g].conversionParameters.lnLogarithmBase * Math.abs(e[g].conversionParameters.pixelPerUnit) : 0) + e[g].lineCoordinates.x1 : (0 < f2 ? f2 * Math.abs(e[g].conversionParameters.pixelPerUnit) : 0) + e[g].lineCoordinates.x1);
              for (g = 0; g < p.length; g++) "axisY" === p[g].type && (p[g].calculateValueToPixelConversionParameters(), p[g].calculateBreaksSizeInValues());
              if (0 < w) {
                if (a && 0 < a.length) for (g = 0; g < a.length; g++) t3 = R2[w - 1][g] === R2[w][g] ? true : false;
                else t3 = true;
                if (e && 0 < e.length) for (g = 0; g < e.length; g++) L = S2[w - 1][g] === S2[w][g] ? true : false;
                else L = true;
                if (c && 0 < c.length) for (g = 0; g < c.length; g++) M = O2[w - 1][g] === O2[w][g] ? true : false;
                else M = true;
                if (b && 0 < b.length) for (g = 0; g < b.length; g++) N = Q3[w - 1][g] === Q3[w][g] ? true : false;
                else N = true;
              }
              if (t3 && L && M && N) break;
              w++;
            }
            if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(), a[g].calculateBreaksInPixels();
            if (e && 0 < e.length) for (g = 0; g < e.length; g++) e[g].calculateStripLinesThicknessInValues(), e[g].calculateBreaksInPixels();
            if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), c[g].calculateBreaksInPixels();
            if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), b[g].calculateBreaksInPixels();
          } else {
            n = [];
            F2 = [];
            K2 = [];
            x2 = [];
            I2 = [];
            s = [];
            R2 = [];
            for (S2 = []; 4 > w; ) {
              X3 = W3 = V2 = aa3 = T = Y2 = d = Q3 = O2 = D = $3 = 0;
              if (a && 0 < a.length) for (K2 = [], g = W3 = 0; g < a.length; g++) K2.push(Math.ceil(a[g] ? a[g].createLabelsAndCalculateWidth() : 0)), W3 += K2[g], d += a[g] && !m.isNavigator ? a[g].margin : 0;
              else K2.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
              R2.push(K2);
              if (e && 0 < e.length) for (x2 = [], g = X3 = 0; g < e.length; g++) x2.push(Math.ceil(e[g] ? e[g].createLabelsAndCalculateWidth() : 0)), X3 += x2[g], Y2 += e[g] ? e[g].margin : 0;
              else x2.push(Math.ceil(e[0] ? e[0].createLabelsAndCalculateWidth() : 0));
              S2.push(x2);
              if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].lineCoordinates = {}, f2 = Math.round(h.x1 + W3 + d), r2 = Math.round(h.x2 - X3 - Y2 > m.width - 10 ? m.width - 10 : h.x2 - X3 - Y2), c[g].labelAutoFit && !l(z) && (0 < !a.length && (f2 = 0 > c[g].labelAngle ? Math.max(f2, z) : 0 === c[g].labelAngle ? Math.max(f2, z / 2) : f2), 0 < !e.length && (r2 = 0 < c[g].labelAngle ? r2 - v / 2 : 0 === c[g].labelAngle ? r2 - v / 2 : r2)), c[g].lineCoordinates.x1 = f2, c[g].lineCoordinates.x2 = r2, c[g].lineCoordinates.width = Math.abs(r2 - f2), c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width);
              if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].lineCoordinates = {}, f2 = Math.round(h.x1 + W3 + d), r2 = Math.round(h.x2 - X3 - Y2 > b[g].chart.width - 10 ? b[g].chart.width - 10 : h.x2 - X3 - Y2), b[g] && b[g].labelAutoFit && !l(A3) && (0 < !a.length && (f2 = 0 < b[g].labelAngle ? Math.max(f2, A3) : 0 === b[g].labelAngle ? Math.max(f2, A3 / 2) : f2), 0 < !e.length && (r2 -= B2 / 2)), b[g].lineCoordinates.x1 = f2, b[g].lineCoordinates.x2 = r2, b[g].lineCoordinates.width = Math.abs(r2 - f2), b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width);
              if (c && 0 < c.length) for (n = [], g = V2 = 0; g < c.length; g++) n.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateHeight() : 0)), V2 += n[g] + c[g].margin, T += c[g].margin;
              else n.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
              I2.push(n);
              if (b && 0 < b.length) for (F2 = [], g = 0; g < b.length; g++) F2.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateHeight() : 0)), aa3 += b[g].margin;
              else F2.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
              s.push(F2);
              if (c && 0 < c.length) for (g = 0; g < c.length; g++) 0 < c[g]._labels.length && (k = c[g]._labels[0], u = c[g]._labels[c[g]._labels.length - 1], z = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), v = u.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(u.textBlock.angle)) + (u.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(u.textBlock.angle)));
              if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g] && 0 < b[g]._labels.length && (k = b[g]._labels[0], u = b[g]._labels[b[g]._labels.length - 1], A3 = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), B2 = u.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(u.textBlock.angle)) + (u.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(u.textBlock.angle)));
              if (m.panEnabled) for (g = 0; g < c.length; g++) n[g] = l(m.sessionVariables.axisY[g].height) ? m.sessionVariables.axisY[g].height = n[g] : m.sessionVariables.axisY[g].height;
              else for (g = 0; g < c.length; g++) m.sessionVariables.axisY[g].height = n[g];
              if (c && 0 < c.length) for (g = c.length - 1; 0 <= g; g--) u = Math.round(h.y2), k = Math.round(h.y2 > c[g].chart.height ? c[g].chart.height : h.y2), c[g].lineCoordinates.y1 = u - (n[g] + c[g].margin + $3), c[g].lineCoordinates.y2 = u - (n[g] + c[g].margin + $3), "inside" === c[g].labelPlacement && 0 < g && (c[g].lineCoordinates.y1 = c[g].lineCoordinates.y1 + n[g] - (c[g]._titleTextBlock ? c[g]._titleTextBlock.height : 0) - c[g].tickLength - (c[g].stripLineLabelEffectiveHeight || 0) - 5, c[g].lineCoordinates.y2 = c[g].lineCoordinates.y1 + c[g].lineThickness / 2), "inside" === c[g].tickPlacement && 0 < g && (c[g].lineCoordinates.y1 += c[g].tickLength, c[g].lineCoordinates.y2 = c[g].lineCoordinates.y1 + c[g].lineThickness / 2), c[g].bounds = {
                x1: f2,
                y1: u - (n[g] + $3 + c[g].margin),
                x2: r2,
                y2: k - ($3 + c[g].margin),
                width: r2 - f2,
                height: n[g]
              }, c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width), $3 += n[g] + c[g].margin;
              if (b && 0 < b.length) for (g = b.length - 1; 0 <= g; g--) b[g] && (u = Math.round(h.y1), k = Math.round(h.y1 + (F2[g] + b[g].margin + D)), b[g].lineCoordinates.y1 = k, b[g].lineCoordinates.y2 = k, "inside" === b[g].labelPlacement && 0 < g && (b[g].lineCoordinates.y1 = k - F2[g] + (b[g]._titleTextBlock ? b[g]._titleTextBlock.height : 0) + b[g].tickLength + (b[g].stripLineLabelEffectiveHeight || 0), b[g].lineCoordinates.y2 = b[g].lineCoordinates.y1 - b[g].lineThickness / 2), "inside" === b[g].tickPlacement && 0 < g && (b[g].lineCoordinates.y1 -= b[g].tickLength, b[g].lineCoordinates.y2 = b[g].lineCoordinates.y1 - b[g].lineThickness / 2), b[g].bounds = {
                x1: f2,
                y1: u + (b[g].margin + D),
                x2: r2,
                y2: k,
                width: r2 - f2
              }, b[g].bounds.height = b[g].bounds.y2 - b[g].bounds.y1, b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width), D += F2[g] + b[g].margin);
              if (a && 0 < a.length) for (g = 0; g < a.length; g++) {
                T = a[g]._labels && 0 < a[g]._labels.length ? a[g]._labels[0].textBlock.fontSize / 2 : 0;
                f2 = Math.round(h.x1 + d);
                u = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : h.y1 < Math.max(T, 10) ? Math.max(T, 10) : h.y1) : h.y1 < Math.max(T, 10) ? Math.max(T, 10) : h.y1;
                r2 = Math.round(h.x1 + W3 + d);
                k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : h.y2 - V2 > m.height - Math.max(T, 10) ? m.height - Math.max(T, 10) : h.y2 - V2) : h.y2 > m.height - Math.max(T, 10) ? m.height - Math.max(T, 10) : h.y2;
                if (c && 0 < c.length) for (T = 0; T < c.length; T++) c[T] && c[T].labelAutoFit && (r2 = c[T].lineCoordinates.x1, f2 = 0 > c[T].labelAngle || 0 === c[T].labelAngle ? r2 - W3 : f2);
                if (b && 0 < b.length) for (T = 0; T < b.length; T++) b[T] && b[T].labelAutoFit && (r2 = b[T].lineCoordinates.x1, f2 = r2 - W3);
                a[g].lineCoordinates = {
                  x1: r2 - O2,
                  y1: u,
                  x2: r2 - O2,
                  y2: k,
                  height: Math.abs(k - u)
                };
                "inside" === a[g].labelPlacement && 0 < g && (a[g].lineCoordinates.x1 = a[g].lineCoordinates.x1 - (K2[g] - (a[g]._titleTextBlock ? a[g]._titleTextBlock.height : 0)) + a[g].tickLength + (a[g].stripLineLabelEffectiveWidth || 0), a[g].lineCoordinates.x2 = a[g].lineCoordinates.x1 + a[g].lineThickness / 2);
                "inside" === a[g].tickPlacement && 0 < g && (a[g].lineCoordinates.x1 -= a[g].tickLength, a[g].lineCoordinates.x2 = a[g].lineCoordinates.x1 + a[g].lineThickness / 2);
                a[g].bounds = {
                  x1: r2 - (K2[g] + O2),
                  y1: u,
                  x2: r2 - O2,
                  y2: k,
                  height: k - u
                };
                a[g].bounds.width = a[g].bounds.x2 - a[g].bounds.x1;
                a[g].title && (a[g]._titleTextBlock.maxWidth = 0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.height ? a[g].titleMaxWidth : a[g].lineCoordinates.height);
                a[g].calculateValueToPixelConversionParameters();
                a[g].calculateBreaksSizeInValues();
                O2 += K2[g] + a[g].margin;
              }
              if (e && 0 < e.length) for (g = 0; g < e.length; g++) {
                T = e[g]._labels && 0 < e[g]._labels.length ? e[g]._labels[0].textBlock.fontSize / 2 : 0;
                f2 = Math.round(h.x1 - d);
                u = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : h.y1 < Math.max(T, 10) ? Math.max(T, 10) : h.y1) : h.y1 < Math.max(T, 10) ? Math.max(T, 10) : h.y1;
                r2 = Math.round(h.x2 - X3 - Y2);
                k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : h.y2 - V2 > m.height - Math.max(T, 10) ? m.height - Math.max(T, 10) : h.y2 - V2) : h.y2 > m.height - Math.max(T, 10) ? m.height - Math.max(T, 10) : h.y2;
                if (c && 0 < c.length) for (T = 0; T < c.length; T++) c[T] && c[T].labelAutoFit && (r2 = 0 > c[T].labelAngle ? Math.max(r2, z) : 0 === c[T].labelAngle ? Math.max(r2, z / 2) : r2, f2 = 0 > c[T].labelAngle || 0 === c[T].labelAngle ? r2 - X3 : f2);
                if (b && 0 < b.length) for (T = 0; T < b.length; T++) b[T] && b[T].labelAutoFit && (r2 = b[T].lineCoordinates.x2, f2 = r2 - X3);
                e[g].lineCoordinates = {
                  x1: r2 + Q3,
                  y1: u,
                  x2: r2 + Q3,
                  y2: k,
                  height: Math.abs(k - u)
                };
                "inside" === e[g].labelPlacement && 0 < g && (e[g].lineCoordinates.x1 = e[g].lineCoordinates.x1 + (x2[g] - (e[g]._titleTextBlock ? e[g]._titleTextBlock.height : 0) - 2) - e[g].tickLength - (e[g].stripLineLabelEffectiveWidth || 0), e[g].lineCoordinates.x2 = e[g].lineCoordinates.x1 + e[g].lineThickness / 2);
                "inside" === e[g].tickPlacement && 0 < g && (e[g].lineCoordinates.x1 += e[g].tickLength, e[g].lineCoordinates.x2 = e[g].lineCoordinates.x1 + e[g].lineThickness / 2);
                e[g].bounds = {
                  x1: e[g].lineCoordinates.x1,
                  y1: u,
                  x2: r2 + x2[g] + Q3,
                  y2: k,
                  width: r2 - f2,
                  height: k - u
                };
                e[g].bounds.width = e[g].bounds.x2 - e[g].bounds.x1;
                e[g].title && (e[g]._titleTextBlock.maxWidth = 0 < e[g].titleMaxWidth && e[g].titleMaxWidth < e[g].lineCoordinates.height ? e[g].titleMaxWidth : e[g].lineCoordinates.height);
                e[g].calculateValueToPixelConversionParameters();
                e[g].calculateBreaksSizeInValues();
                Q3 += x2[g] + e[g].margin;
              }
              for (g = 0; g < p.length; g++) "axisY" === p[g].type && (p[g].calculateValueToPixelConversionParameters(), p[g].calculateBreaksSizeInValues());
              if (0 < w) {
                if (a && 0 < a.length) for (g = 0; g < a.length; g++) t3 = R2[w - 1][g] === R2[w][g] ? true : false;
                else t3 = true;
                if (e && 0 < e.length) for (g = 0; g < e.length; g++) L = S2[w - 1][g] === S2[w][g] ? true : false;
                else L = true;
                if (c && 0 < c.length) for (g = 0; g < c.length; g++) M = I2[w - 1][g] === I2[w][g] ? true : false;
                else M = true;
                if (b && 0 < b.length) for (g = 0; g < b.length; g++) N = s[w - 1][g] === s[w][g] ? true : false;
                else N = true;
              }
              if (t3 && L && M && N) break;
              w++;
            }
            if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), c[g].calculateBreaksInPixels();
            if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), b[g].calculateBreaksInPixels();
            if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(), a[g].calculateBreaksInPixels();
            if (e && 0 < e.length) for (g = 0; g < e.length; g++) e[g].calculateStripLinesThicknessInValues(), e[g].calculateBreaksInPixels();
          }
        };
        B.render = function(a, e, c, b, d) {
          d = a[0] ? a[0].chart : e[0].chart;
          var h = d.ctx;
          d.alignVerticalAxes && d.alignVerticalAxes();
          h.save();
          h.beginPath();
          a && a.length && h.rect(2, a[0].bounds.y1, a[0].chart.width - 4, a[a.length - 1].bounds.y2);
          e && e.length && h.rect(2, e[e.length - 1].bounds.y1, e[0].chart.width - 4, e[0].bounds.y2);
          h.clip();
          if (a && 0 < a.length) for (var f2 = 0; f2 < a.length; f2++) a[f2].renderLabelsTicksAndTitle();
          if (e && 0 < e.length) for (f2 = 0; f2 < e.length; f2++) e[f2].renderLabelsTicksAndTitle();
          h.restore();
          if (c && 0 < c.length) for (f2 = 0; f2 < c.length; f2++) c[f2].renderLabelsTicksAndTitle();
          if (b && 0 < b.length) for (f2 = 0; f2 < b.length; f2++) b[f2].renderLabelsTicksAndTitle();
          d.preparePlotArea();
          f2 = d.plotArea;
          h.save();
          h.beginPath();
          h.rect(f2.x1, f2.y1, Math.abs(f2.x2 - f2.x1), Math.abs(f2.y2 - f2.y1));
          h.clip();
          if (a && 0 < a.length) for (f2 = 0; f2 < a.length; f2++) a[f2].renderStripLinesOfThicknessType("value");
          if (e && 0 < e.length) for (f2 = 0; f2 < e.length; f2++) e[f2].renderStripLinesOfThicknessType("value");
          if (c && 0 < c.length) for (f2 = 0; f2 < c.length; f2++) c[f2].renderStripLinesOfThicknessType("value");
          if (b && 0 < b.length) for (f2 = 0; f2 < b.length; f2++) b[f2].renderStripLinesOfThicknessType("value");
          if (a && 0 < a.length) for (f2 = 0; f2 < a.length; f2++) a[f2].renderInterlacedColors();
          if (e && 0 < e.length) for (f2 = 0; f2 < e.length; f2++) e[f2].renderInterlacedColors();
          if (c && 0 < c.length) for (f2 = 0; f2 < c.length; f2++) c[f2].renderInterlacedColors();
          if (b && 0 < b.length) for (f2 = 0; f2 < b.length; f2++) b[f2].renderInterlacedColors();
          h.restore();
          if (a && 0 < a.length) for (f2 = 0; f2 < a.length; f2++) a[f2].renderGrid(), r && (a[f2].createMask(), a[f2].renderBreaksBackground());
          if (e && 0 < e.length) for (f2 = 0; f2 < e.length; f2++) e[f2].renderGrid(), r && (e[f2].createMask(), e[f2].renderBreaksBackground());
          if (c && 0 < c.length) for (f2 = 0; f2 < c.length; f2++) c[f2].renderGrid(), r && (c[f2].createMask(), c[f2].renderBreaksBackground());
          if (b && 0 < b.length) for (f2 = 0; f2 < b.length; f2++) b[f2].renderGrid(), r && (b[f2].createMask(), b[f2].renderBreaksBackground());
          if (a && 0 < a.length) for (f2 = 0; f2 < a.length; f2++) a[f2].renderAxisLine();
          if (e && 0 < e.length) for (f2 = 0; f2 < e.length; f2++) e[f2].renderAxisLine();
          if (c && 0 < c.length) for (f2 = 0; f2 < c.length; f2++) c[f2].renderAxisLine();
          if (b && 0 < b.length) for (f2 = 0; f2 < b.length; f2++) b[f2].renderAxisLine();
          h = false;
          if (a && 0 < a.length) for (f2 = 0; f2 < a.length; f2++) a[f2].renderStripLinesOfThicknessType("pixel"), a[f2].crosshair && a[f2].crosshair.enabled && (h = true, d.clearedOverlayedCanvas = a[f2].type);
          if (e && 0 < e.length) for (f2 = 0; f2 < e.length; f2++) e[f2].renderStripLinesOfThicknessType("pixel"), e[f2].crosshair && e[f2].crosshair.enabled && (h = true, d.clearedOverlayedCanvas = e[f2].type);
          if (c && 0 < c.length) for (f2 = 0; f2 < c.length; f2++) c[f2].renderStripLinesOfThicknessType("pixel"), c[f2].crosshair && c[f2].crosshair.enabled && (h = true, d.clearedOverlayedCanvas = c[f2].type);
          if (b && 0 < b.length) for (f2 = 0; f2 < b.length; f2++) b[f2].renderStripLinesOfThicknessType("pixel"), b[f2].crosshair && b[f2].crosshair.enabled && (h = true, d.clearedOverlayedCanvas = b[f2].type);
          if (h || !h && d.clearedOverlayedCanvas && 0 <= d.clearedOverlayedCanvas.indexOf("axis")) d.resetOverlayedCanvas(), d.renderCrosshairs(null, l(d.sessionVariables.crosshairShownByPixel) || d.sessionVariables.crosshairShownByPixel ? true : d.sessionVariables.crosshairShownByPixel);
        };
        B.prototype.calculateStripLinesThicknessInValues = function() {
          for (var a = 0; a < this.stripLines.length; a++) if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
            var e = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue), c = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue), b = this.getApparentDifference(e, c);
            this.stripLines[a].value = this.convertPixelToValue((this.convertValueToPixel(e) + this.convertValueToPixel(c)) / 2);
            this.stripLines[a].thickness = b;
            this.stripLines[a]._thicknessType = "value";
          }
        };
        B.prototype.calculateBreaksSizeInValues = function() {
          for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), b = this.scaleBreaks && !l(this.scaleBreaks.options.spacing), d, h = 0; h < e.length; h++) d = b || !l(e[h].options.spacing), e[h].spacing = Va(e[h].spacing, a, 8, d ? 0.1 * a : 8, d ? 0 : 3) << 0, e[h].size = 0 > e[h].spacing ? 0 : Math.abs(e[h].spacing / c), this.logarithmic && (e[h].size = Math.pow(this.logarithmBase, e[h].size));
        };
        B.prototype.calculateBreaksInPixels = function() {
          if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
            var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
            for (var e = 0; e < a.length && !(a[e].startValue > this.conversionParameters.maximum); e++) a[e].endValue < this.conversionParameters.minimum || (l(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = e), a[e].startValue >= this.conversionParameters.minimum && (a[e].startPixel = this.convertValueToPixel(a[e].startValue), this.scaleBreaks.lastBreakIndex = e), a[e].endValue <= this.conversionParameters.maximum && (a[e].endPixel = this.convertValueToPixel(a[e].endValue)));
          }
        };
        B.prototype.renderLabelsTicksAndTitle = function() {
          var a = this, e = false, c = 0, b = 0, d = 1, h = 0;
          0 !== this.labelAngle && 360 !== this.labelAngle && (d = 1.2);
          if ("undefined" === typeof this.options.interval) {
            if ("bottom" === this._position || "top" === this._position) if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
              for (var c = [], d = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, f2, l2 = this.viewportMaximum, r2 = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                n = this._labels[k];
                if (n.position < this.viewportMinimum) break;
                n.position > this.viewportMaximum || !(k === this._labels.length - 1 || f2 < Math.log(l2 / n.position) * r2 / d) || (c.push(n), l2 = n.position, f2 = n.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
              }
              this._labels = c;
            } else {
              for (k = 0; k < this._labels.length; k++) n = this._labels[k], n.position < this.viewportMinimum || (f2 = n.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += f2);
              c > this.lineCoordinates.width * d && this.labelAutoFit && (e = true);
            }
            if ("left" === this._position || "right" === this._position) if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
              for (var c = [], m, l2 = this.viewportMaximum, r2 = this.lineCoordinates.height / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                n = this._labels[k];
                if (n.position < this.viewportMinimum) break;
                n.position > this.viewportMaximum || !(k === this._labels.length - 1 || m < Math.log(l2 / n.position) * r2) || (c.push(n), l2 = n.position, m = n.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
              }
              this._labels = c;
            } else {
              for (k = 0; k < this._labels.length; k++) n = this._labels[k], n.position < this.viewportMinimum || (m = n.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += m);
              b > this.lineCoordinates.height * d && this.labelAutoFit && (e = true);
            }
          }
          this.logarithmic && !this.equidistantInterval && this.labelAutoFit && this._labels.sort(function(a2, b2) {
            return a2.position - b2.position;
          });
          var k = 0, n, p;
          if ("bottom" === this._position) {
            for (k = 0; k < this._labels.length; k++) n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (p = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (p.x << 0) + 0.5 : p.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, p.y << 0), this.ctx.lineTo(b, p.y + this.tickLength << 0), this.ctx.stroke()), e && 0 !== h++ % 2 && this.labelAutoFit || (0 === n.textBlock.angle ? (p.x -= n.textBlock.width / 2, p.y = "inside" === this.labelPlacement ? p.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + n.textBlock.height - n.textBlock.fontSize / 2) : p.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + n.textBlock.fontSize / 2 + 5) : 0 > this.labelAngle ? (p.x = p.x - ("inside" === this.labelPlacement ? 0 : n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle), p.y = "inside" === this.labelPlacement ? p.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - (n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) : p.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5 + Math.abs(n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - n.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle))) : (p.x = p.x - ("inside" === this.labelPlacement ? n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0) + n.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle), p.y = "inside" === this.labelPlacement ? p.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - (n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) : p.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5 + Math.abs(n.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle))), n.textBlock.x = p.x, n.textBlock.y = p.y));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++) if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (p = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                a.ctx.lineWidth = a.tickThickness;
                a.ctx.strokeStyle = a.tickColor;
                var b2 = 1 === a.ctx.lineWidth % 2 ? (p.x << 0) + 0.5 : p.x << 0;
                a.ctx.save();
                a.ctx.beginPath();
                a.ctx.moveTo(b2, p.y << 0);
                a.ctx.lineTo(b2, p.y - a.tickLength << 0);
                a.ctx.stroke();
                a.ctx.restore();
              }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height + this._titleTextBlock._lineHeight / 2 - 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("top" === this._position) {
            for (k = 0; k < this._labels.length; k++) n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (p = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (p.x << 0) + 0.5 : p.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, p.y << 0), this.ctx.lineTo(b, p.y - this.tickLength << 0), this.ctx.stroke()), e && 0 !== h++ % 2 && this.labelAutoFit || (0 === n.textBlock.angle ? (p.x -= n.textBlock.width / 2, p.y = "inside" === this.labelPlacement ? p.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : p.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + n.textBlock.height - n.textBlock.fontSize / 2)) : 0 > this.labelAngle ? (p.x = p.x - ("inside" === this.labelPlacement ? n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0) + n.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle), p.y = "inside" === this.labelPlacement ? p.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + n.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle) : p.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 2 - (n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle)) : (p.x = p.x - ("inside" === this.labelPlacement ? 0 : n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle), p.y = "inside" === this.labelPlacement ? p.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 + n.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle) : p.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 2 - ((n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle))), n.textBlock.x = p.x, n.textBlock.y = p.y));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++) if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (p = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                a.ctx.lineWidth = a.tickThickness;
                a.ctx.strokeStyle = a.tickColor;
                var b2 = 1 === a.ctx.lineWidth % 2 ? (p.x << 0) + 0.5 : p.x << 0;
                a.ctx.save();
                a.ctx.beginPath();
                a.ctx.moveTo(b2, p.y << 0);
                a.ctx.lineTo(b2, p.y + a.tickLength << 0);
                a.ctx.stroke();
                a.ctx.restore();
              }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + this._titleTextBlock._lineHeight / 2 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("left" === this._position) {
            for (k = 0; k < this._labels.length; k++) n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (p = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (p.y << 0) + 0.5 : p.y << 0, this.ctx.beginPath(), this.ctx.moveTo(p.x << 0, b), this.ctx.lineTo(p.x - this.tickLength << 0, b), this.ctx.stroke()), e && 0 !== h++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (n.textBlock.y = p.y - n.textBlock.topPadding, n.textBlock.x = "inside" === this.labelPlacement ? p.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : p.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : 0 > this.labelAngle ? (n.textBlock.y = ("inside" === this.labelPlacement ? p.y : p.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle)) - n.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle), n.textBlock.x = "inside" === this.labelPlacement ? p.x - n.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : p.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (n.textBlock.height - n.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (n.textBlock.y = ("inside" === this.labelPlacement ? p.y : p.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle)) - n.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle), n.textBlock.x = "inside" === this.labelPlacement ? p.x + (n.textBlock.height - n.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : p.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - n.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5)));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++) if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (p = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                a.ctx.lineWidth = a.tickThickness;
                a.ctx.strokeStyle = a.tickColor;
                var b2 = 1 === a.ctx.lineWidth % 2 ? (p.y << 0) + 0.5 : p.y << 0;
                a.ctx.save();
                a.ctx.beginPath();
                a.ctx.moveTo(p.x << 0, b2);
                a.ctx.lineTo(p.x + a.tickLength << 0, b2);
                a.ctx.stroke();
                a.ctx.restore();
              }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + this._titleTextBlock._lineHeight / 2, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("right" === this._position) {
            for (k = 0; k < this._labels.length; k++) n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (p = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (p.y << 0) + 0.5 : p.y << 0, this.ctx.beginPath(), this.ctx.moveTo(p.x << 0, b), this.ctx.lineTo(p.x + this.tickLength << 0, b), this.ctx.stroke()), e && 0 !== h++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (n.textBlock.y = p.y - n.textBlock.topPadding, n.textBlock.x = "inside" === this.labelPlacement ? p.x - n.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : p.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : 0 > this.labelAngle ? (n.textBlock.y = ("inside" === this.labelPlacement ? p.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : p.y) - n.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle), n.textBlock.x = "inside" === this.labelPlacement ? p.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (n.textBlock.height - n.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : p.x - n.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (n.textBlock.y = ("inside" === this.labelPlacement ? p.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : p.y) - n.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle), n.textBlock.x = "inside" === this.labelPlacement ? p.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - n.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : p.x + (n.textBlock.height - n.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++) if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (p = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                a.ctx.lineWidth = a.tickThickness;
                a.ctx.strokeStyle = a.tickColor;
                var b2 = 1 === a.ctx.lineWidth % 2 ? (p.y << 0) + 0.5 : p.y << 0;
                a.ctx.save();
                a.ctx.beginPath();
                a.ctx.moveTo(p.x << 0, b2);
                a.ctx.lineTo(p.x - a.tickLength << 0, b2);
                a.ctx.stroke();
                a.ctx.restore();
              }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - this._titleTextBlock._lineHeight / 2, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          }
          h = 0;
          if ("inside" === this.labelPlacement) this.chart.addEventListener("dataAnimationIterationEnd", function() {
            for (k = 0; k < a._labels.length; k++) n = a._labels[k], n.position < a.viewportMinimum || n.position > a.viewportMaximum || e && 0 !== h++ % 2 && a.labelAutoFit || (a.ctx.save(), a.ctx.beginPath(), n.textBlock.render(true), a.ctx.restore());
          }, this);
          else for (k = 0; k < this._labels.length; k++) n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || e && 0 !== h++ % 2 && this.labelAutoFit || n.textBlock.render(true);
        };
        B.prototype.renderInterlacedColors = function() {
          var a = this.chart.plotArea.ctx, e, c, b = this.chart.plotArea, d = 0;
          e = true;
          if (("bottom" === this._position || "top" === this._position) && this.interlacedColor) for (a.fillStyle = this.interlacedColor, d = 0; d < this._labels.length; d++) e ? (e = this.getPixelCoordinatesOnAxis(this._labels[d].position), c = d + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[d + 1].position), a.fillRect(Math.min(c.x, e.x), b.y1, Math.abs(c.x - e.x), Math.abs(b.y1 - b.y2)), e = false) : e = true;
          else if (("left" === this._position || "right" === this._position) && this.interlacedColor) for (a.fillStyle = this.interlacedColor, d = 0; d < this._labels.length; d++) e ? (c = this.getPixelCoordinatesOnAxis(this._labels[d].position), e = d + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[d + 1].position), a.fillRect(b.x1, Math.min(c.y, e.y), Math.abs(b.x1 - b.x2), Math.abs(e.y - c.y)), e = false) : e = true;
          a.beginPath();
        };
        B.prototype.renderStripLinesOfThicknessType = function(a) {
          if (this.stripLines && 0 < this.stripLines.length && a) {
            var e = this, c, b, d = 0, h = 0, f2 = false;
            b = false;
            for (var r2 = [], t3 = [], k = false, m, d = 0; d < this.stripLines.length; d++) {
              var n = this.stripLines[d];
              n._thicknessType === a && ("pixel" === a && (n.value < this.viewportMinimum || n.value > this.viewportMaximum || l(n.value) || isNaN(this.range)) || "value" === a && (n.startValue <= this.viewportMinimum && n.endValue <= this.viewportMinimum || n.startValue >= this.viewportMaximum && n.endValue >= this.viewportMaximum || l(n.startValue) || l(n.endValue) || isNaN(this.range)) || r2.push(n));
            }
            for (d = 0; d < this._stripLineLabels.length; d++) if (n = this.stripLines[d], c = this._stripLineLabels[d], !(c.position < this.viewportMinimum || c.position > this.viewportMaximum || isNaN(this.range))) if (b = this.getPixelCoordinatesOnAxis(c.position), "outside" === c.stripLine.labelPlacement) {
              n && (this.ctx.strokeStyle = n.color, this.ctx.lineWidth = "pixel" === n._thicknessType ? n.thickness : this.tickThickness, l(n.opacity) || "pixel" !== n._thicknessType || (m = n.ctx.globalAlpha, n.ctx.globalAlpha = n.opacity));
              if ("bottom" === this._position) {
                var p = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0;
                this.ctx.beginPath();
                this.ctx.moveTo(p, b.y << 0);
                this.ctx.lineTo(p, b.y + this.tickLength << 0);
                this.ctx.stroke();
                0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y += this.tickLength + c.textBlock.fontSize / 2 + 5) : (b.x -= (0 > this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0) - c.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle), b.y += this.tickLength + 5 + (0 > this.labelAngle ? Math.abs(c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - c.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle)) : Math.abs(c.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle))));
              } else "top" === this._position ? (p = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(p, b.y << 0), this.ctx.lineTo(p, b.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y -= this.tickLength + c.textBlock.height - c.textBlock.fontSize / 2) : (b.x -= (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0) - c.textBlock.topPadding * Math.sin(Math.PI / 180 * this.labelAngle), b.y -= this.tickLength + 2 + (0 < this.labelAngle ? (c.textBlock.height - c.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : (c.textBlock.height - c.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle)))) : "left" === this._position ? (p = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, p), this.ctx.lineTo(b.x - this.tickLength << 0, p), this.ctx.stroke(), 0 === this.labelAngle ? (b.x = b.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5, b.y -= c.textBlock.topPadding) : (b.y -= c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + c.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle), b.x -= this.tickLength + 5 + (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + c.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) : c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - (c.textBlock.height - c.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle)))) : "right" === this._position && (p = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, p), this.ctx.lineTo(b.x + this.tickLength << 0, p), this.ctx.stroke(), 0 === this.labelAngle ? (b.x = b.x + this.tickLength + 5, b.y -= c.textBlock.topPadding) : (b.y -= c.textBlock.topPadding * Math.cos(Math.PI / 180 * this.labelAngle), b.x = this.tickLength + 5 + (0 < this.labelAngle ? b.x + (c.textBlock.height - c.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) : b.x - c.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle))));
              m && (n.ctx.globalAlpha = m);
              c.textBlock.x = b.x;
              c.textBlock.y = b.y;
              t3.push(c);
            } else n._thicknessType === a && (c.textBlock.angle = -90, "bottom" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - n.thickness / 2 > this.chart.plotArea.x1 ? l(n.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, l(n.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y1 + c.textBlock.width + 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - n.thickness / 2 > this.chart.plotArea.x1 ? l(n.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, l(n.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + c.textBlock.width + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y2 - c.textBlock.width - 3) : "left" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - n.thickness / 2 > this.chart.plotArea.y1 ? l(n.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : l(n.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.y += c.textBlock.height / 2 - c.textBlock.fontSize + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x2 - c.textBlock.width - 3) : "right" === this._position && (c.textBlock.maxWidth = this.options.stripLines[d].labelMaxWidth ? this.options.stripLines[d].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - n.thickness / 2 > this.chart.plotArea.y1 ? l(n.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : l(n.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x1 + 3), c.textBlock.x = b.x, c.textBlock.y = b.y, t3.push(c));
            if (!k) {
              b = false;
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
              this.ctx.clip();
              for (d = 0; d < r2.length; d++) n = r2[d], n.showOnTop ? f2 || (f2 = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.ctx.clip();
                for (h = 0; h < r2.length; h++) n = r2[h], n.showOnTop && n.render();
                this.ctx.restore();
              }, n)) : n.render();
              for (d = 0; d < t3.length; d++) c = t3[d], c.stripLine.showOnTop ? b || (b = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                for (h = 0; h < t3.length; h++) c = t3[h], "inside" === c.stripLine.labelPlacement && c.stripLine.showOnTop && (e.ctx.save(), e.ctx.beginPath(), e.ctx.rect(e.chart.plotArea.x1, e.chart.plotArea.y1, e.chart.plotArea.width, e.chart.plotArea.height), e.ctx.clip(), c.textBlock.render(true), e.ctx.restore());
              }, c.textBlock)) : "inside" === c.stripLine.labelPlacement && c.textBlock.render(true);
              this.ctx.restore();
              k = true;
            }
            if (k) for (b = false, d = 0; d < t3.length; d++) c = t3[d], "outside" === c.stripLine.labelPlacement && c.textBlock.render(true);
          }
        };
        B.prototype.renderBreaksBackground = function() {
          this.chart._breaksCanvas && this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore());
        };
        B.prototype.createMask = function() {
          if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
            var a = this.scaleBreaks._appliedBreaks;
            r ? (this.maskCanvas = ua(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
            this.maskCtx.save();
            this.maskCtx.beginPath();
            this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.maskCtx.clip();
            for (var e = 0; e < a.length; e++) a[e].endValue < this.viewportMinimum || a[e].startValue > this.viewportMaximum || isNaN(this.range) || a[e].render(this.maskCtx);
            this.maskCtx.restore();
          }
        };
        B.prototype.renderCrosshair = function(a, e) {
          isFinite(this.minimum) && isFinite(this.maximum) && this.crosshair.render(a, e);
        };
        B.prototype.showCrosshair = function(a) {
          l(a) || a < this.viewportMinimum || a > this.viewportMaximum || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a), null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a));
        };
        B.prototype.renderGrid = function() {
          if (this.gridThickness && 0 < this.gridThickness) {
            var a = this.chart.ctx;
            a.save();
            var e, c = this.chart.plotArea;
            a.lineWidth = this.gridThickness;
            a.strokeStyle = this.gridColor;
            a.setLineDash && a.setLineDash(I(this.gridDashType, this.gridThickness));
            if ("bottom" === this._position || "top" === this._position) for (b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType || (a.beginPath(), e = this.getPixelCoordinatesOnAxis(this._labels[b].position), e = 1 === a.lineWidth % 2 ? (e.x << 0) + 0.5 : e.x << 0, a.moveTo(e, c.y1 << 0), a.lineTo(e, c.y2 << 0), a.stroke());
            else if ("left" === this._position || "right" === this._position) for (var b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType || (a.beginPath(), e = this.getPixelCoordinatesOnAxis(this._labels[b].position), e = 1 === a.lineWidth % 2 ? (e.y << 0) + 0.5 : e.y << 0, a.moveTo(c.x1 << 0, e), a.lineTo(c.x2 << 0, e), a.stroke());
            a.restore();
          }
        };
        B.prototype.renderAxisLine = function() {
          var a = this.chart.ctx, e = r ? this.chart._preRenderCtx : a, c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)), b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)), d, h;
          e.save();
          if ("bottom" === this._position || "top" === this._position) {
            if (this.lineThickness) {
              this.reversed ? (d = this.lineCoordinates.x2, h = this.lineCoordinates.x1) : (d = this.lineCoordinates.x1, h = this.lineCoordinates.x2);
              e.lineWidth = this.lineThickness;
              e.strokeStyle = this.lineColor ? this.lineColor : "black";
              e.setLineDash && e.setLineDash(I(this.lineDashType, this.lineThickness));
              var f2 = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
              e.beginPath();
              if (this.scaleBreaks && !l(this.scaleBreaks.firstBreakIndex)) if (l(this.scaleBreaks.lastBreakIndex)) d = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
              else for (var u = this.scaleBreaks.firstBreakIndex; u <= this.scaleBreaks.lastBreakIndex; u++) e.moveTo(d, f2), e.lineTo(this.scaleBreaks._appliedBreaks[u].startPixel + c, f2), d = this.scaleBreaks._appliedBreaks[u].endPixel + b;
              d && (e.moveTo(d, f2), e.lineTo(h, f2));
              e.stroke();
            }
          } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
            this.reversed ? (d = this.lineCoordinates.y1, h = this.lineCoordinates.y2) : (d = this.lineCoordinates.y2, h = this.lineCoordinates.y1);
            e.lineWidth = this.lineThickness;
            e.strokeStyle = this.lineColor;
            e.setLineDash && e.setLineDash(I(this.lineDashType, this.lineThickness));
            f2 = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
            e.beginPath();
            if (this.scaleBreaks && !l(this.scaleBreaks.firstBreakIndex)) if (l(this.scaleBreaks.lastBreakIndex)) d = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
            else for (u = this.scaleBreaks.firstBreakIndex; u <= this.scaleBreaks.lastBreakIndex; u++) e.moveTo(f2, d), e.lineTo(f2, this.scaleBreaks._appliedBreaks[u].startPixel + b), d = this.scaleBreaks._appliedBreaks[u].endPixel + c;
            d && (e.moveTo(f2, d), e.lineTo(f2, h));
            e.stroke();
          }
          r && (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), e.clearRect(0, 0, this.chart.width, this.chart.height));
          e.restore();
        };
        B.prototype.getPixelCoordinatesOnAxis = function(a) {
          var e = {};
          if ("bottom" === this._position || "top" === this._position) e.x = this.convertValueToPixel(a), e.y = this.lineCoordinates.y1;
          if ("left" === this._position || "right" === this._position) e.y = this.convertValueToPixel(a), e.x = this.lineCoordinates.x2;
          return e;
        };
        B.prototype.convertPixelToValue = function(a) {
          if ("undefined" === typeof a) return null;
          var e = 0, c = 0, b, e = true, d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
          if (this.logarithmic) {
            a = b = Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
            if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed) for (c = 0; c < d.length; c++) {
              if (!(d[c].endValue < this.conversionParameters.minimum)) if (e) {
                if (d[c].startValue < this.conversionParameters.minimum) {
                  if (1 < d[c].size && this.conversionParameters.minimum * Math.pow(d[c].endValue / d[c].startValue, Math.log(b) / Math.log(d[c].size)) < d[c].endValue) {
                    a = Math.pow(d[c].endValue / d[c].startValue, Math.log(b) / Math.log(d[c].size));
                    break;
                  } else a *= d[c].endValue / this.conversionParameters.minimum / Math.pow(d[c].size, Math.log(d[c].endValue / this.conversionParameters.minimum) / Math.log(d[c].endValue / d[c].startValue)), b /= Math.pow(d[c].size, Math.log(d[c].endValue / this.conversionParameters.minimum) / Math.log(d[c].endValue / d[c].startValue));
                  e = false;
                } else if (b > d[c].startValue / this.conversionParameters.minimum) {
                  b /= d[c].startValue / this.conversionParameters.minimum;
                  if (b < d[c].size) {
                    a *= Math.pow(d[c].endValue / d[c].startValue, 1 === d[c].size ? 1 : Math.log(b) / Math.log(d[c].size)) / b;
                    break;
                  } else a *= d[c].endValue / d[c].startValue / d[c].size;
                  b /= d[c].size;
                  e = false;
                } else break;
              } else if (b > d[c].startValue / d[c - 1].endValue) {
                b /= d[c].startValue / d[c - 1].endValue;
                if (b < d[c].size) {
                  a *= Math.pow(d[c].endValue / d[c].startValue, 1 === d[c].size ? 1 : Math.log(b) / Math.log(d[c].size)) / b;
                  break;
                } else a *= d[c].endValue / d[c].startValue / d[c].size;
                b /= d[c].size;
              } else break;
            }
            else for (c = d.length - 1; 0 <= c; c--) if (!(d[c].startValue > this.conversionParameters.minimum)) if (e) {
              if (d[c].endValue > this.conversionParameters.minimum) {
                if (1 < d[c].size && this.conversionParameters.minimum * Math.pow(d[c].endValue / d[c].startValue, Math.log(b) / Math.log(d[c].size)) > d[c].startValue) {
                  a = Math.pow(d[c].endValue / d[c].startValue, Math.log(b) / Math.log(d[c].size));
                  break;
                } else a *= d[c].startValue / this.conversionParameters.minimum * Math.pow(d[c].size, Math.log(d[c].startValue / this.conversionParameters.minimum) / Math.log(d[c].endValue / d[c].startValue)) * b, b *= Math.pow(d[c].size, Math.log(this.conversionParameters.minimum / d[c].startValue) / Math.log(d[c].endValue / d[c].startValue));
                e = false;
              } else if (b < d[c].endValue / this.conversionParameters.minimum) {
                b /= d[c].endValue / this.conversionParameters.minimum;
                if (b > 1 / d[c].size) {
                  a *= Math.pow(d[c].endValue / d[c].startValue, 1 >= d[c].size ? 1 : Math.log(b) / Math.log(d[c].size)) * b;
                  break;
                } else a /= d[c].endValue / d[c].startValue / d[c].size;
                b *= d[c].size;
                e = false;
              } else break;
            } else if (b < d[c].endValue / d[c + 1].startValue) {
              b /= d[c].endValue / d[c + 1].startValue;
              if (b > 1 / d[c].size) {
                a *= Math.pow(d[c].endValue / d[c].startValue, 1 >= d[c].size ? 1 : Math.log(b) / Math.log(d[c].size)) * b;
                break;
              } else a /= d[c].endValue / d[c].startValue / d[c].size;
              b *= d[c].size;
            } else break;
            e = a * this.viewportMinimum;
          } else {
            a = b = (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
            if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed) for (c = 0; c < d.length; c++) {
              if (!(d[c].endValue < this.conversionParameters.minimum)) if (e) {
                if (d[c].startValue < this.conversionParameters.minimum) {
                  if (d[c].size && this.conversionParameters.minimum + b * (d[c].endValue - d[c].startValue) / d[c].size < d[c].endValue) {
                    a = 0 >= d[c].size ? 0 : b * (d[c].endValue - d[c].startValue) / d[c].size;
                    break;
                  } else a += d[c].endValue - this.conversionParameters.minimum - d[c].size * (d[c].endValue - this.conversionParameters.minimum) / (d[c].endValue - d[c].startValue), b -= d[c].size * (d[c].endValue - this.conversionParameters.minimum) / (d[c].endValue - d[c].startValue);
                  e = false;
                } else if (b > d[c].startValue - this.conversionParameters.minimum) {
                  b -= d[c].startValue - this.conversionParameters.minimum;
                  if (b < d[c].size) {
                    a += (d[c].endValue - d[c].startValue) * (0 === d[c].size ? 1 : b / d[c].size) - b;
                    break;
                  } else a += d[c].endValue - d[c].startValue - d[c].size;
                  b -= d[c].size;
                  e = false;
                } else break;
              } else if (b > d[c].startValue - d[c - 1].endValue) {
                b -= d[c].startValue - d[c - 1].endValue;
                if (b < d[c].size) {
                  a += (d[c].endValue - d[c].startValue) * (0 === d[c].size ? 1 : b / d[c].size) - b;
                  break;
                } else a += d[c].endValue - d[c].startValue - d[c].size;
                b -= d[c].size;
              } else break;
            }
            else for (c = d.length - 1; 0 <= c; c--) if (!(d[c].startValue > this.conversionParameters.minimum)) if (e) {
              if (d[c].endValue > this.conversionParameters.minimum) {
                if (d[c].size && this.conversionParameters.minimum + b * (d[c].endValue - d[c].startValue) / d[c].size > d[c].startValue) {
                  a = 0 >= d[c].size ? 0 : b * (d[c].endValue - d[c].startValue) / d[c].size;
                  break;
                } else a += d[c].startValue - this.conversionParameters.minimum + d[c].size * (this.conversionParameters.minimum - d[c].startValue) / (d[c].endValue - d[c].startValue), b += d[c].size * (this.conversionParameters.minimum - d[c].startValue) / (d[c].endValue - d[c].startValue), e = false;
              } else if (b < d[c].endValue - this.conversionParameters.minimum) {
                b -= d[c].endValue - this.conversionParameters.minimum;
                if (b > -1 * d[c].size) {
                  a += (d[c].endValue - d[c].startValue) * (0 === d[c].size ? 1 : b / d[c].size) + b;
                  break;
                } else a -= d[c].endValue - d[c].startValue - d[c].size;
                b += d[c].size;
                e = false;
              } else break;
            } else if (b < d[c].endValue - d[c + 1].startValue) {
              b -= d[c].endValue - d[c + 1].startValue;
              if (b > -1 * d[c].size) {
                a += (d[c].endValue - d[c].startValue) * (0 === d[c].size ? 1 : b / d[c].size) + b;
                break;
              } else a -= d[c].endValue - d[c].startValue - d[c].size;
              b += d[c].size;
            } else break;
            e = this.conversionParameters.minimum + a;
          }
          return e;
        };
        B.prototype.convertValueToPixel = function(a) {
          a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
          return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5;
        };
        B.prototype.getApparentDifference = function(a, e, c, b) {
          var d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          if (this.logarithmic) {
            c = l(c) ? e / a : c;
            for (var h = 0; h < d.length && !(e < d[h].startValue); h++) a > d[h].endValue || (a <= d[h].startValue && e >= d[h].endValue ? c = c / d[h].endValue * d[h].startValue * d[h].size : a >= d[h].startValue && e >= d[h].endValue ? c = c / d[h].endValue * a * Math.pow(d[h].size, Math.log(d[h].endValue / a) / Math.log(d[h].endValue / d[h].startValue)) : a <= d[h].startValue && e <= d[h].endValue ? c = c / e * d[h].startValue * Math.pow(d[h].size, Math.log(e / d[h].startValue) / Math.log(d[h].endValue / d[h].startValue)) : !b && a > d[h].startValue && e < d[h].endValue && (c = a * Math.pow(d[h].size, Math.log(e / a) / Math.log(d[h].endValue / d[h].startValue))));
          } else for (c = l(c) ? Math.abs(e - a) : c, h = 0; h < d.length && !(e < d[h].startValue); h++) a > d[h].endValue || (a <= d[h].startValue && e >= d[h].endValue ? c = c - d[h].endValue + d[h].startValue + d[h].size : a > d[h].startValue && e >= d[h].endValue ? c = c - d[h].endValue + a + d[h].size * (d[h].endValue - a) / (d[h].endValue - d[h].startValue) : a <= d[h].startValue && e < d[h].endValue ? c = c - e + d[h].startValue + d[h].size * (e - d[h].startValue) / (d[h].endValue - d[h].startValue) : !b && a > d[h].startValue && e < d[h].endValue && (c = a + d[h].size * (e - a) / (d[h].endValue - d[h].startValue)));
          return c;
        };
        B.prototype.setViewPortRange = function(a, e) {
          this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, e);
          this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, e);
        };
        B.prototype.getXValueAt = function(a) {
          if (!a) return null;
          var e = null;
          "left" === this._position ? e = this.convertPixelToValue(a.y) : "bottom" === this._position && (e = this.convertPixelToValue(a.x));
          return e;
        };
        B.prototype.calculateValueToPixelConversionParameters = function(a) {
          a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          var e = {
            pixelPerUnit: null,
            minimum: null,
            reference: null
          }, c = this.lineCoordinates.width, b = this.lineCoordinates.height, c = "bottom" === this._position || "top" === this._position ? c : b, b = Math.abs(this.range);
          if (this.logarithmic) for (var d = 0; d < a.length && !(this.viewportMaximum < a[d].startValue); d++) this.viewportMinimum > a[d].endValue || (this.viewportMinimum >= a[d].startValue && this.viewportMaximum <= a[d].endValue ? c = 0 : this.viewportMinimum <= a[d].startValue && this.viewportMaximum >= a[d].endValue ? (b = b / a[d].endValue * a[d].startValue, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100) : c - Math.min(a[d].spacing, 0.1 * c)) : this.viewportMinimum > a[d].startValue && this.viewportMaximum >= a[d].endValue ? (b = b / a[d].endValue * this.viewportMinimum, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100 * Math.log(a[d].endValue / this.viewportMinimum) / Math.log(a[d].endValue / a[d].startValue)) : c - Math.min(a[d].spacing, 0.1 * c) * Math.log(a[d].endValue / this.viewportMinimum) / Math.log(a[d].endValue / a[d].startValue)) : this.viewportMinimum <= a[d].startValue && this.viewportMaximum < a[d].endValue && (b = b / this.viewportMaximum * a[d].startValue, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100 * Math.log(this.viewportMaximum / a[d].startValue) / Math.log(a[d].endValue / a[d].startValue)) : c - Math.min(a[d].spacing, 0.1 * c) * Math.log(this.viewportMaximum / a[d].startValue) / Math.log(a[d].endValue / a[d].startValue)));
          else for (d = 0; d < a.length && !(this.viewportMaximum < a[d].startValue); d++) this.viewportMinimum > a[d].endValue || (this.viewportMinimum >= a[d].startValue && this.viewportMaximum <= a[d].endValue ? c = 0 : this.viewportMinimum <= a[d].startValue && this.viewportMaximum >= a[d].endValue ? (b = b - a[d].endValue + a[d].startValue, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100) : c - Math.min(a[d].spacing, 0.1 * c)) : this.viewportMinimum > a[d].startValue && this.viewportMaximum >= a[d].endValue ? (b = b - a[d].endValue + this.viewportMinimum, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100 * (a[d].endValue - this.viewportMinimum) / (a[d].endValue - a[d].startValue)) : c - Math.min(a[d].spacing, 0.1 * c) * (a[d].endValue - this.viewportMinimum) / (a[d].endValue - a[d].startValue)) : this.viewportMinimum <= a[d].startValue && this.viewportMaximum < a[d].endValue && (b = b - this.viewportMaximum + a[d].startValue, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100 * (this.viewportMaximum - a[d].startValue) / (a[d].endValue - a[d].startValue)) : c - Math.min(a[d].spacing, 0.1 * c) * (this.viewportMaximum - a[d].startValue) / (a[d].endValue - a[d].startValue)));
          e.minimum = this.viewportMinimum;
          e.maximum = this.viewportMaximum;
          e.range = b;
          if ("bottom" === this._position || "top" === this._position) this.logarithmic ? (e.lnLogarithmBase = Math.log(this.logarithmBase), e.pixelPerUnit = (this.reversed ? -1 : 1) * c * e.lnLogarithmBase / Math.log(Math.abs(b))) : e.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(b), e.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
          if ("left" === this._position || "right" === this._position) this.logarithmic ? (e.lnLogarithmBase = Math.log(this.logarithmBase), e.pixelPerUnit = (this.reversed ? 1 : -1) * c * e.lnLogarithmBase / Math.log(Math.abs(b))) : e.pixelPerUnit = (this.reversed ? 1 : -1) * c / Math.abs(b), e.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
          this.conversionParameters = e;
        };
        B.prototype.calculateAxisParameters = function() {
          if (this.logarithmic) this.calculateLogarithmicAxisParameters();
          else {
            var a = this.chart.layoutManager.getFreeSpace(), e = false, c = false;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40, b = 4;
            "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
            var a = Math.max(b, Math.floor(this.maxWidth / a)), d, h, f2, b = 0;
            !l(this.options.viewportMinimum) && !l(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum && (this.viewportMinimum = this.viewportMaximum = null);
            if (l(this.options.viewportMinimum) && !l(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum)) this.viewportMinimum = this.sessionVariables.newViewportMinimum;
            else if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
            if (l(this.options.viewportMaximum) && !l(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum)) this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            else if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
            if (this.scaleBreaks) {
              for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++) if ((!l(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue || !l(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[b].startValue || !l(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue) && (!l(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue || !l(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[b].endValue || !l(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue)) {
                this.scaleBreaks._appliedBreaks.splice(b, 1);
                break;
              }
            }
            if ("axisX" === this.type) {
              if (this.dataSeries && 0 < this.dataSeries.length) for (d = 0; d < this.dataSeries.length; d++) "dateTime" === this.dataSeries[d].xValueType && (c = true);
              d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
              h = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
              0 === h - d && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, h += b, d -= b);
              Infinity !== this.dataInfo.minDiff ? f2 = this.dataInfo.minDiff : 1 < h - d ? f2 = 0.5 * Math.abs(h - d) : (f2 = 1, c && (e = true));
            } else "axisY" === this.type && (d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, h = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(d) || isFinite(h) ? isFinite(d) ? isFinite(h) || (h = d) : d = h : (h = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, d = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), 0 === d && 0 === h ? (h += 9, d = 0) : 0 === h - d ? (b = Math.min(Math.abs(0.01 * Math.abs(h)), 5), h += b, d -= b) : d > h ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(h, d, null, true)), 5), 0 <= h ? d = h - b : h = isFinite(d) ? d + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(d, h, null, true)), 0.05), 0 !== h && (h += b), 0 !== d && (d -= b)), f2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - d ? 0.5 * Math.abs(h - d) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < d && (d = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > h && (h = 0));
            b = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? d : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? h : this.viewportMaximum, null, true);
            if ("axisX" === this.type && c) {
              this.valueType = "dateTime";
              this.intervalType || (b / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : b / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : b / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : b / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : b / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : b / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : b / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : b / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : b / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : b / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : b / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : b / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : b / (1 * S.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : b / (2 * S.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : b / (5 * S.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : b / (10 * S.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : b / (15 * S.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : b / (20 * S.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : b / (30 * S.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : b / (1 * S.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : b / (2 * S.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : b / (5 * S.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : b / (10 * S.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : b / (15 * S.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : b / (20 * S.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : b / (30 * S.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : b / (1 * S.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : b / (2 * S.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : b / (3 * S.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : b / (6 * S.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : b / (1 * S.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : b / (2 * S.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : b / (4 * S.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : b / (1 * S.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : b / (2 * S.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : b / (3 * S.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : b / (1 * S.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : b / (2 * S.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : b / (3 * S.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : b / (6 * S.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = b / (1 * S.yearDuration) <= a ? 1 : b / (2 * S.yearDuration) <= a ? 2 : b / (4 * S.yearDuration) <= a ? 4 : Math.floor(B.getNiceNumber(b / (a - 1), true) / S.yearDuration), this.intervalType = "year"));
              if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = d - f2 / 2;
              if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = h + f2 / 2;
              e ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
              this.valueFormatString || (this.valueFormatString = this.autoValueFormatString);
            } else {
              this.intervalType = "number";
              b = B.getNiceNumber(b, false);
              this.interval = this.options && 0 < this.options.interval ? this.options.interval : B.getNiceNumber(b / (a - 1), true);
              if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? d - f2 / 2 : Math.floor(d / this.interval) * this.interval;
              if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? h + f2 / 2 : Math.ceil(h / this.interval) * this.interval;
              0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = B.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
            }
            if (null === this.minimum || null === this.maximum) if ("axisX" === this.type ? (d = null !== this.minimum ? this.minimum : this.dataInfo.min, h = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === h - d && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, h += b, d -= b), f2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - d ? 0.5 * Math.abs(h - d) : 1) : "axisY" === this.type && (d = null !== this.minimum ? this.minimum : this.dataInfo.min, h = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(d) || isFinite(h) ? 0 === d && 0 === h ? (h += 9, d = 0) : 0 === h - d ? (b = Math.min(Math.abs(0.01 * Math.abs(h)), 5), h += b, d -= b) : d > h ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(h, d, null, true)), 5), 0 <= h ? d = h - b : h = isFinite(d) ? d + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(d, h, null, true)), 0.05), 0 !== h && (h += b), 0 !== d && (d -= b)) : (h = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, d = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), f2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - d ? 0.5 * Math.abs(h - d) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < d && (d = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > h && (h = 0)), Math.abs(this.getApparentDifference(d, h, null, true)), "axisX" === this.type && c) {
              this.valueType = "dateTime";
              if (null === this.minimum || isNaN(this.minimum)) this.minimum = d - f2 / 2, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum);
              if (null === this.maximum || isNaN(this.maximum)) this.maximum = h + f2 / 2, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum);
            } else this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? d - f2 / 2 : Math.floor(d / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? h + f2 / 2 : Math.ceil(h / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
            l(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            l(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.range = this.viewportMaximum - this.viewportMinimum;
            this.intervalStartPosition = "axisX" === this.type && c ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
            this.valueFormatString || (this.valueFormatString = B.generateValueFormatString(this.range, 2));
          }
        };
        B.prototype.calculateLogarithmicAxisParameters = function() {
          var a = this.chart.layoutManager.getFreeSpace(), e = Math.log(this.logarithmBase), c;
          "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
          var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3), b, d, h, f2;
          f2 = 1;
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
          if (this.scaleBreaks) {
            for (f2 = 0; f2 < this.scaleBreaks._appliedBreaks.length; f2++) if ((!l(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[f2].startValue || !l(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[f2].startValue || !l(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[f2].startValue) && (!l(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[f2].endValue || !l(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[f2].endValue || !l(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[f2].endValue)) {
              this.scaleBreaks._appliedBreaks.splice(f2, 1);
              break;
            }
          }
          "axisX" === this.type ? (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, d = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === d / b && (f2 = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), d *= f2, b /= f2), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / b > this.logarithmBase ? d / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, d = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= b && !isFinite(d) ? (d = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1) : 0 >= b ? b = d : isFinite(d) || (d = b), 1 === b && 1 === d ? (d *= this.logarithmBase - 1 / this.logarithmBase, b = 1) : 1 === d / b ? (f2 = Math.min(d * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), d *= f2, b /= f2) : b > d ? (f2 = Math.min(b / d * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= d ? b = d / f2 : d = b * f2) : (f2 = Math.min(d / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== d && (d *= f2), 1 !== b && (b /= f2)), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / b > this.logarithmBase ? d / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < b && (b = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > d && (d = 1));
          f2 = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? d : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
          var r2 = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? d : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
          this.intervalType = "number";
          f2 = Math.pow(this.logarithmBase, B.getNiceNumber(Math.abs(Math.log(f2) / e), false));
          this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = B.getNiceExponent(Math.log(f2) / e / (a - 1), true), c = B.getNiceNumber(r2 / (a - 1), true));
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? b / Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / e / this.interval));
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? d * Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(d) / e / this.interval));
          1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval && (this.interval = B.getNiceExponent(Math.ceil(Math.log(f2) / e) / (a - 1)), c = B.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
          if (null === this.minimum || null === this.maximum) "axisX" === this.type ? (b = null !== this.minimum ? this.minimum : this.dataInfo.min, d = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === d / b && (f2 = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), d *= f2, b /= f2), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / b > this.logarithmBase ? d / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.minimum ? this.minimum : this.dataInfo.min, d = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(b) || isFinite(d) ? 1 === b && 1 === d ? (d *= this.logarithmBase, b /= this.logarithmBase) : 1 === d / b ? (f2 = Math.pow(this.logarithmBase, this.interval), d *= f2, b /= f2) : b > d ? (f2 = Math.min(0.01 * (b / d), 5), 1 <= d ? b = d / f2 : d = b * f2) : (f2 = Math.min(d / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== d && (d *= f2), 1 !== b && (b /= f2)) : (d = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : d / b > this.logarithmBase ? d / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < b && (b = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > d && (d = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? b / Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / e / this.interval)), l(null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum) || (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum))), null === this.maximum && (this.maximum = "axisX" === this.type ? d * Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(d) / e / this.interval)), l(null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum) || (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum))), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
          this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
          this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
          this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
          b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (e * this.interval) + 0.2) * this.interval);
          this.range = this.viewportMaximum / this.viewportMinimum;
          this.noTicks = a;
          if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
            for (e = Math.floor(this.viewportMinimum / c + 0.5) * c; e < this.viewportMinimum; ) e += c;
            this.equidistantInterval = false;
            this.intervalStartPosition = e;
            this.interval = c;
          } else this.options.interval || (c = Math.ceil(this.interval), this.range > this.interval && (this.interval = c, b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (e * this.interval) + 0.2) * this.interval))), this.equidistantInterval = true, this.intervalStartPosition = b;
          if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
            e = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
            if (isNaN(e) || !isFinite(e)) e = 2;
            if (2 < e) for (f2 = 0; f2 < e - 2; f2++) this.valueFormatString += "#";
          }
        };
        B.generateValueFormatString = function(a, e) {
          var c = "#,##0.", b = e;
          1 > a && (b += Math.floor(Math.abs(Math.log(a) / Math.LN10)), isNaN(b) || !isFinite(b)) && (b = e);
          for (var d = 0; d < b; d++) c += "#";
          return c;
        };
        B.getNiceExponent = function(a, e) {
          var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = 0 > c ? 1 >= b ? 1 : 5 >= b ? 5 : 10 : Math.max(Math.floor(b), 1);
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        B.getNiceNumber = function(a, e) {
          var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = e ? 1.5 > b ? 1 : 3 > b ? 2 : 7 > b ? 5 : 10 : 1 >= b ? 1 : 2 >= b ? 2 : 5 >= b ? 5 : 10;
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        B.prototype.getLabelStartPoint = function() {
          var a = S[this.intervalType + "Duration"] * this.interval, a = new Date(Math.floor(this.viewportMinimum / a) * a);
          if ("millisecond" !== this.intervalType) if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
          else if ("minute" === this.intervalType) {
            if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0);
          } else if ("hour" === this.intervalType) {
            if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
          } else if ("day" === this.intervalType) {
            if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
          } else if ("week" === this.intervalType) {
            if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
          } else if ("month" === this.intervalType) {
            if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
          } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
          return a;
        };
        qa(W2, Y);
        qa(ga2, Y);
        ga2.prototype.createUserOptions = function(a) {
          if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var e = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (Fa(this.parent[this.optionsName]), e = this.parent.options[this.optionsName].indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options[this.optionsName][e] = this.options;
          }
        };
        ga2.prototype.render = function(a) {
          if (0 !== this.spacing || 0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
            var e = this.ctx, c = this.ctx.globalAlpha;
            this.ctx = a || this.ctx;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.ctx.clip();
            var b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue), d = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
            this.ctx.strokeStyle = this.lineColor;
            this.ctx.fillStyle = this.color;
            this.ctx.beginPath();
            this.ctx.globalAlpha = 1;
            V(this.id);
            var h, f2, l2, r2, k, m;
            a = Math.max(this.spacing, 3);
            var n = Math.max(0, this.lineThickness);
            this.ctx.lineWidth = n;
            this.ctx.setLineDash && this.ctx.setLineDash(I(this.lineDashType, n));
            if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position) {
              if (b = 1 === n % 2 ? (b.x << 0) + 0.5 : b.x << 0, f2 = 1 === n % 2 ? (d.x << 0) + 0.5 : d.x << 0, "top" === this.scaleBreaks.parent._position ? (d = this.chart.plotArea.y1, l2 = this.chart.plotArea.y2 + n / 2 + 0.5 << 0) : (d = this.chart.plotArea.y2, l2 = this.chart.plotArea.y1 - n / 2 + 0.5 << 0, a *= -1), this.bounds = {
                x1: b - n / 2,
                y1: d,
                x2: f2 + n / 2,
                y2: l2
              }, this.ctx.moveTo(b, d), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(b, l2), this.ctx.lineTo(f2, l2), this.ctx.lineTo(f2, d);
              else if ("wavy" === this.type) {
                r2 = b;
                k = d;
                h = 0.5;
                m = (l2 - k) / a / 3;
                for (var p = 0; p < m; p++) this.ctx.bezierCurveTo(r2 + h * a, k + a, r2 + h * a, k + 2 * a, r2, k + 3 * a), k += 3 * a, h *= -1;
                this.ctx.bezierCurveTo(r2 + h * a, k + a, r2 + h * a, k + 2 * a, r2, k + 3 * a);
                r2 = f2;
                h *= -1;
                this.ctx.lineTo(r2, k);
                for (p = 0; p < m; p++) this.ctx.bezierCurveTo(r2 + h * a, k - a, r2 + h * a, k - 2 * a, r2, k - 3 * a), k -= 3 * a, h *= -1;
              } else {
                if ("zigzag" === this.type) {
                  h = -1;
                  k = d + a;
                  r2 = b + a;
                  m = (l2 - k) / a / 2;
                  for (p = 0; p < m; p++) this.ctx.lineTo(r2, k), r2 += 2 * h * a, k += 2 * a, h *= -1;
                  this.ctx.lineTo(r2, k);
                  r2 += f2 - b;
                  for (p = 0; p < m + 1; p++) this.ctx.lineTo(r2, k), r2 += 2 * h * a, k -= 2 * a, h *= -1;
                  this.ctx.lineTo(r2 + h * a, k + a);
                }
              }
            } else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position) {
              if (d = 1 === n % 2 ? (d.y << 0) + 0.5 : d.y << 0, l2 = 1 === n % 2 ? (b.y << 0) + 0.5 : b.y << 0, "left" === this.scaleBreaks.parent._position ? (b = this.chart.plotArea.x1, f2 = this.chart.plotArea.x2 + n / 2 + 0.5 << 0) : (b = this.chart.plotArea.x2, f2 = this.chart.plotArea.x1 - n / 2 + 0.5 << 0, a *= -1), this.bounds = {
                x1: b,
                y1: d - n / 2,
                x2: f2,
                y2: l2 + n / 2
              }, this.ctx.moveTo(b, d), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(f2, d), this.ctx.lineTo(f2, l2), this.ctx.lineTo(b, l2);
              else if ("wavy" === this.type) {
                r2 = b;
                k = d;
                h = 0.5;
                m = (f2 - r2) / a / 3;
                for (p = 0; p < m; p++) this.ctx.bezierCurveTo(r2 + a, k + h * a, r2 + 2 * a, k + h * a, r2 + 3 * a, k), r2 += 3 * a, h *= -1;
                this.ctx.bezierCurveTo(r2 + a, k + h * a, r2 + 2 * a, k + h * a, r2 + 3 * a, k);
                k = l2;
                h *= -1;
                this.ctx.lineTo(r2, k);
                for (p = 0; p < m; p++) this.ctx.bezierCurveTo(r2 - a, k + h * a, r2 - 2 * a, k + h * a, r2 - 3 * a, k), r2 -= 3 * a, h *= -1;
              } else if ("zigzag" === this.type) {
                h = 1;
                k = d - a;
                r2 = b + a;
                m = (f2 - r2) / a / 2;
                for (p = 0; p < m; p++) this.ctx.lineTo(r2, k), k += 2 * h * a, r2 += 2 * a, h *= -1;
                this.ctx.lineTo(r2, k);
                k += l2 - d;
                for (p = 0; p < m + 1; p++) this.ctx.lineTo(r2, k), k += 2 * h * a, r2 -= 2 * a, h *= -1;
                this.ctx.lineTo(r2 + a, k + h * a);
              }
            }
            0 < n && this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.globalAlpha = this.fillOpacity;
            this.ctx.globalCompositeOperation = "destination-over";
            this.ctx.fill();
            this.ctx.restore();
            this.ctx.globalAlpha = c;
            this.ctx = e;
          }
        };
        qa(O, Y);
        O.prototype.createUserOptions = function(a) {
          if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var e = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (Fa(this.parent.stripLines), e = this.parent.options.stripLines.indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options.stripLines[e] = this.options;
          }
        };
        O.prototype.render = function() {
          this.ctx.save();
          var a = this.parent.getPixelCoordinatesOnAxis(this.value), e = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
          if (0 < e) {
            var c = null === this.opacity ? 1 : this.opacity;
            this.ctx.strokeStyle = this.color;
            this.ctx.beginPath();
            var b = this.ctx.globalAlpha;
            this.ctx.globalAlpha = c;
            V(this.id);
            var d, h, f2, l2;
            this.ctx.lineWidth = e;
            this.ctx.setLineDash && this.ctx.setLineDash(I(this.lineDashType, e));
            if ("bottom" === this.parent._position || "top" === this.parent._position) d = h = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, f2 = this.chart.plotArea.y1, l2 = this.chart.plotArea.y2, this.bounds = {
              x1: d - e / 2,
              y1: f2,
              x2: h + e / 2,
              y2: l2
            };
            else if ("left" === this.parent._position || "right" === this.parent._position) f2 = l2 = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, d = this.chart.plotArea.x1, h = this.chart.plotArea.x2, this.bounds = {
              x1: d,
              y1: f2 - e / 2,
              x2: h,
              y2: l2 + e / 2
            };
            this.ctx.moveTo(d, f2);
            this.ctx.lineTo(h, l2);
            this.ctx.stroke();
            this.ctx.globalAlpha = b;
          }
          this.ctx.restore();
        };
        qa($2, Y);
        $2.prototype.showAt = function(a) {
          if (!this.enabled) return false;
          var e = this.chart, c = false;
          e.resetOverlayedCanvas();
          e.clearedOverlayedCanvas = this.parent.type;
          this.chart.renderCrosshairs(this.parent);
          if ("xySwapped" === e.plotInfo.axisPlacement) {
            if ("bottom" === this.parent._position) for (var b = 0; b < e.axisY.length; b++) this.parent === e.axisY[b] && (e.axisY[b]._crosshairValue = a >= e.axisY[b].viewportMinimum && a <= e.axisY[b].viewportMaximum ? a : null);
            else if ("top" === this.parent._position) for (b = 0; b < e.axisY2.length; b++) this.parent === e.axisY2[b] && (e.axisY2[b]._crosshairValue = a >= e.axisY2[b].viewportMinimum && a <= e.axisY2[b].viewportMaximum ? a : null);
            else if ("left" === this.parent._position) for (b = 0; b < e.axisX.length; b++) this.parent === e.axisX[b] && (e.axisX[b]._crosshairValue = a >= e.axisX[b].viewportMinimum && a <= e.axisX[b].viewportMaximum ? a : null);
            else {
              if ("right" === this.parent._position) for (b = 0; b < e.axisX2.length; b++) this.parent === e.axisX2[b] && (e.axisX2[b]._crosshairValue = a >= e.axisX2[b].viewportMinimum && a <= e.axisX2[b].viewportMaximum ? a : null);
            }
          } else if ("bottom" === this.parent._position) for (b = 0; b < e.axisX.length; b++) this.parent === e.axisX[b] && (e.axisX[b]._crosshairValue = a >= e.axisX[b].viewportMinimum && a <= e.axisX[b].viewportMaximum ? a : null);
          else if ("top" === this.parent._position) for (b = 0; b < e.axisX2.length; b++) this.parent === e.axisX2[b] && (e.axisX2[b]._crosshairValue = a >= e.axisX2[b].viewportMinimum && a <= e.axisX2[b].viewportMaximum ? a : null);
          else if ("left" === this.parent._position) for (b = 0; b < e.axisY.length; b++) this.parent === e.axisY[b] && (e.axisY[b]._crosshairValue = a >= e.axisY[b].viewportMinimum && a <= e.axisY[b].viewportMaximum ? a : null);
          else if ("right" === this.parent._position) for (b = 0; b < e.axisY2.length; b++) this.parent === e.axisY2[b] && (e.axisY2[b]._crosshairValue = a >= e.axisY2[b].viewportMinimum && a <= e.axisY2[b].viewportMaximum ? a : null);
          for (b = 0; b < e.axisX.length; b++) a = e.axisX[b]._crosshairValue, e.axisX[b].crosshair && e.axisX[b].crosshair.enabled && (!l(a) && a >= e.axisX[b].viewportMinimum && a <= e.axisX[b].viewportMaximum ? (e.axisX[b].showCrosshair(a), e.axisX[b].sessionVariables.crosshairValue = e.axisX[b].crosshair._updatedValue = a, this === e.axisX[b].crosshair && (c = true)) : void 0 !== a && (e.axisX[b].sessionVariables.crosshairValue = e.axisX[b].crosshair._updatedValue = null));
          for (b = 0; b < e.axisX2.length; b++) a = e.axisX2[b]._crosshairValue, e.axisX2[b].crosshair && e.axisX2[b].crosshair.enabled && (!l(a) && a >= e.axisX2[b].viewportMinimum && a <= e.axisX2[b].viewportMaximum ? (e.axisX2[b].showCrosshair(a), e.axisX2[b].sessionVariables.crosshairValue = e.axisX2[b].crosshair._updatedValue = a, this === e.axisX2[b].crosshair && (c = true)) : void 0 !== a && (e.axisX2[b].sessionVariables.crosshairValue = e.axisX2[b].crosshair._updatedValue = null));
          for (b = 0; b < e.axisY.length; b++) a = e.axisY[b]._crosshairValue, e.axisY[b].crosshair && e.axisY[b].crosshair.enabled && (!l(a) && a >= e.axisY[b].viewportMinimum && a <= e.axisY[b].viewportMaximum ? (e.axisY[b].showCrosshair(a), e.axisY[b].sessionVariables.crosshairValue = e.axisY[b].crosshair._updatedValue = a, this === e.axisY[b].crosshair && (c = true)) : void 0 !== a && (e.axisY[b].sessionVariables.crosshairValue = e.axisY[b].crosshair._updatedValue = null));
          for (b = 0; b < e.axisY2.length; b++) a = e.axisY2[b]._crosshairValue, e.axisY2[b].crosshair && e.axisY2[b].crosshair.enabled && (!l(a) && a >= e.axisY2[b].viewportMinimum && a <= e.axisY2[b].viewportMaximum ? (e.axisY2[b].showCrosshair(a), e.axisY2[b].sessionVariables.crosshairValue = e.axisY2[b].crosshair._updatedValue = a, this === e.axisY2[b].crosshair && (c = true)) : void 0 !== a && (e.axisY2[b].sessionVariables.crosshairValue = e.axisY2[b].crosshair._updatedValue = null));
          this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
          e.sessionVariables.crosshairShownByPixel = false;
          return c;
        };
        $2.prototype.hide = function() {
          this.chart.resetOverlayedCanvas();
          this.chart.renderCrosshairs(this.parent);
          this._hidden = true;
        };
        $2.prototype.render = function(a, e, c) {
          var b, d, h, f2, r2 = null, t3 = null, k = null, m = "";
          this.valueFormatString || ("dateTime" === this.parent.valueType ? this.valueFormatString = this.parent.valueFormatString : (k = 0, k = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0), this.valueFormatString = B.generateValueFormatString(this.parent.range, k)));
          var n = null === this.opacity ? 1 : this.opacity, p = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness), g = this.chart.overlaidCanvasCtx, x2 = g.globalAlpha;
          g.beginPath();
          g.strokeStyle = this.color;
          g.lineWidth = p;
          g.save();
          this.labelFontSize = Math.abs(l(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize);
          this.labelMaxWidth = l(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
          this.labelMaxHeight = l(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
          0 < p && g.setLineDash && g.setLineDash(I(this.lineDashType, p));
          k = new la(g, {
            x: 0,
            y: 0,
            padding: {
              top: 2,
              right: 3,
              bottom: 2,
              left: 4
            },
            backgroundColor: this.labelBackgroundColor,
            borderColor: this.labelBorderColor,
            borderThickness: this.labelBorderThickness,
            cornerRadius: this.labelCornerRadius,
            maxWidth: this.labelMaxWidth,
            maxHeight: this.labelMaxHeight,
            angle: this.labelAngle,
            text: m,
            textAlign: this.labelTextAlign,
            fontSize: this.labelFontSize,
            fontFamily: this.labelFontFamily,
            fontWeight: this.labelFontWeight,
            padding: this.labelPadding,
            fontColor: this.labelFontColor,
            fontStyle: this.labelFontStyle,
            textBaseline: "middle"
          });
          if (this.snapToDataPoint) {
            var w = 0, m = [];
            if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
              var y = null;
              if ("bottom" === this.parent._position || "top" === this.parent._position) w = this.parent.dataSeries[0].axisX.convertPixelToValue({
                y: e
              });
              else if ("left" === this.parent._position || "right" === this.parent._position) w = this.parent.convertPixelToValue({
                y: e
              });
              for (var s = 0; s < this.parent.dataSeries.length; s++) (y = this.parent.dataSeries[s].getDataPointAtX(w, true, true)) && 0 <= y.index && (y.dataSeries = this.parent.dataSeries[s], null !== y.dataPoint.y && y.dataSeries.visible && m.push(y));
              y = null;
              if (0 === m.length) return;
              m.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              var z = y = 0;
              yPercent = cumulativeY = 0;
              for (var w = Infinity, v, s = 0; s < m.length; s++) {
                if ("rangeBar" === m[s].dataSeries.type || "error" === m[s].dataSeries.type) {
                  if (m[s].dataPoint.y) for (var A3 = 0; A3 < m[s].dataPoint.y.length; A3++) z = Math.abs(a - this.parent.convertValueToPixel(m[s].dataPoint.y[A3])), z <= w && (w = z, y = s);
                } else "stackedBar" === m[s].dataSeries.type ? (cumulativeY = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = Math.abs(a - this.parent.convertValueToPixel(cumulativeY)), z <= w && (w = z, y = s)) : "stackedBar100" === m[s].dataSeries.type ? (z = m[0].dataPoint.x.getTime ? m[0].dataPoint.x.getTime() : m[0].dataPoint.x, l(v) && (v = Math.abs(a - this.parent.convertValueToPixel(100 * (m[0].dataSeries.dataPointEOs[m[0].index].cumulativeY / m[0].dataSeries.plotUnit.dataPointYSums[z])))), cumulativeY = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = m[s].dataPoint.x.getTime ? m[s].dataPoint.x.getTime() : m[s].dataPoint.x, yPercent = 100 * (cumulativeY / m[s].dataSeries.plotUnit.dataPointYSums[z]), z = Math.abs(a - this.parent.convertValueToPixel(yPercent)), z <= v && (v = z, y = s)) : (z = Math.abs(a - this.parent.convertValueToPixel(m[s].dataPoint.y)), z <= w && (w = z, y = s));
                l(v) || (w = Math.min(w, v));
              }
              v = m[y];
              s = 0;
              if ("bottom" === this.parent._position || "top" === this.parent._position) {
                if ("rangeBar" === v.dataSeries.type || "error" === v.dataSeries.type) {
                  w = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[0]));
                  for (m = 0; m < v.dataPoint.y.length; m++) z = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[m])), z < w && (w = z, s = m);
                  r2 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0;
                  this.value = v.dataPoint.y[s];
                  k.text = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: v.dataPoint.y[s]
                  }) : l(this.options.label) ? ia(l(c) ? v.dataPoint.y[s] : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                } else "stackedBar" === v.dataSeries.type ? (w = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y)), cumulativeY = v.dataSeries.dataPointEOs[v.index].cumulativeY, r2 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(cumulativeY) << 0) + 0.5 : this.parent.convertValueToPixel(cumulativeY) << 0, this.value = cumulativeY, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: cumulativeY
                }) : l(this.options.label) ? ia(l(c) ? cumulativeY : c, this.valueFormatString, this.chart._cultureInfo) : this.label) : "stackedBar100" === v.dataSeries.type ? (w = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y)), cumulativeY = v.dataSeries.dataPointEOs[v.index].cumulativeY, z = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x, yPercent = 100 * (cumulativeY / v.dataSeries.plotUnit.dataPointYSums[z]), r2 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(yPercent) << 0) + 0.5 : this.parent.convertValueToPixel(yPercent) << 0, this.value = yPercent, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: yPercent
                }) : l(this.options.label) ? ia(l(c) ? yPercent : c, this.valueFormatString, this.chart._cultureInfo) : this.label) : (r2 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y) << 0, this.value = v.dataPoint.y, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: v.dataPoint.y
                }) : l(this.options.label) ? ia(l(c) ? v.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label);
                b = d = r2;
                h = this.chart.plotArea.y1;
                f2 = this.chart.plotArea.y2;
                this.bounds = {
                  x1: b - p / 2,
                  y1: h,
                  x2: d + p / 2,
                  y2: f2
                };
                k.x = b - k.measureText().width / 2;
                k.x + k.width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.width : k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                k.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -k.height + this.parent.tickLength : k.fontSize / 2) + 2;
                k.y + k.height > this.chart.bounds.y2 ? k.y = this.chart.bounds.y2 - k.height : k.y < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1);
              } else if ("left" === this.parent._position || "right" === this.parent._position) {
                h = f2 = t3 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
                b = this.chart.plotArea.x1;
                d = this.chart.plotArea.x2;
                this.bounds = {
                  x1: b,
                  y1: h - p / 2,
                  x2: d,
                  y2: f2 + p / 2
                };
                s = false;
                if (this.parent.labels) for (w = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += w) if (this.parent.labels[m]) s = true;
                else {
                  s = false;
                  break;
                }
                if (s) {
                  if ("axisX" === this.parent.type) for (w = this.parent.convertPixelToValue({
                    y: e
                  }), y = null, s = 0; s < this.parent.dataSeries.length; s++) (y = this.parent.dataSeries[s].getDataPointAtX(w, true, true)) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: v.dataPoint.x
                  }) : l(this.options.label) ? y.dataPoint.label : this.label);
                } else k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: v.dataPoint.x
                }) : l(this.options.label) ? ia(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: v.dataPoint.x
                }) : l(this.options.label) ? Da(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
                this.value = v.dataPoint.x;
                k.y = f2 + k.fontSize / 2 - k.measureText().height / 2 + 2;
                k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
              }
            } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
              w = this.parent.convertPixelToValue({
                x: a
              });
              for (s = 0; s < this.parent.dataSeries.length; s++) (y = this.parent.dataSeries[s].getDataPointAtX(w, true, true)) && 0 <= y.index && (y.dataSeries = this.parent.dataSeries[s], null !== y.dataPoint.y && y.dataSeries.visible && m.push(y));
              if (0 === m.length) return;
              m.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              v = m[0];
              b = d = r2 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
              h = this.chart.plotArea.y1;
              f2 = this.chart.plotArea.y2;
              this.bounds = {
                x1: b - p / 2,
                y1: h,
                x2: d + p / 2,
                y2: f2
              };
              s = false;
              if (this.parent.labels) for (w = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += w) if (this.parent.labels[m]) s = true;
              else {
                s = false;
                break;
              }
              if (s) {
                if ("axisX" === this.parent.type) for (w = this.parent.convertPixelToValue({
                  x: a
                }), y = null, s = 0; s < this.parent.dataSeries.length; s++) (y = this.parent.dataSeries[s].getDataPointAtX(w, true, true)) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: v.dataPoint.x
                }) : l(this.options.label) ? y.dataPoint.label : this.label);
              } else k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: v.dataPoint.x
              }) : l(this.options.label) ? ia(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: v.dataPoint.x
              }) : l(this.options.label) ? Da(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
              this.value = v.dataPoint.x;
              k.x = b - k.measureText().width / 2;
              k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
              k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
              "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            } else if ("left" === this.parent._position || "right" === this.parent._position) {
              !l(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (w = this.parent.dataSeries[0].axisX.convertPixelToValue({
                x: a
              }));
              for (s = 0; s < this.parent.dataSeries.length; s++) (y = this.parent.dataSeries[s].getDataPointAtX(w, true, true)) && 0 <= y.index && (y.dataSeries = this.parent.dataSeries[s], null !== y.dataPoint.y && y.dataSeries.visible && m.push(y));
              if (0 === m.length) return;
              m.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              z = y = 0;
              w = Infinity;
              for (s = 0; s < m.length; s++) {
                if ("rangeColumn" === m[s].dataSeries.type || "rangeArea" === m[s].dataSeries.type || "error" === m[s].dataSeries.type || "rangeSplineArea" === m[s].dataSeries.type || "candlestick" === m[s].dataSeries.type || "ohlc" === m[s].dataSeries.type || "boxAndWhisker" === m[s].dataSeries.type) {
                  if (m[s].dataPoint.y) for (A3 = 0; A3 < m[s].dataPoint.y.length; A3++) z = Math.abs(e - this.parent.convertValueToPixel(m[s].dataPoint.y[A3])), z <= w && (w = z, y = s);
                } else "stackedColumn" === m[s].dataSeries.type ? (b = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = Math.abs(e - this.parent.convertValueToPixel(b)), z <= w && (w = z, y = s)) : "stackedArea" === m[s].dataSeries.type ? (b = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = Math.abs(e - this.parent.convertValueToPixel(b)), z <= w && (w = z, y = s)) : "stackedColumn100" === m[s].dataSeries.type || "stackedArea100" === m[s].dataSeries.type ? (z = m[0].dataPoint.x.getTime ? m[0].dataPoint.x.getTime() : m[0].dataPoint.x, l(v) && (v = Math.abs(e - this.parent.convertValueToPixel(100 * (m[0].dataSeries.dataPointEOs[m[0].index].cumulativeY / m[0].dataSeries.plotUnit.dataPointYSums[z])))), "stackedColumn100" === m[s].dataSeries.type ? (t3 = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = m[s].dataPoint.x.getTime ? m[s].dataPoint.x.getTime() : m[s].dataPoint.x, b = 100 * (t3 / m[s].dataSeries.plotUnit.dataPointYSums[z]), z = Math.abs(e - this.parent.convertValueToPixel(b)), z <= v && (v = z, y = s)) : "stackedArea100" === m[s].dataSeries.type && (t3 = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = m[s].dataPoint.x.getTime ? m[s].dataPoint.x.getTime() : m[s].dataPoint.x, b = 100 * (t3 / m[s].dataSeries.plotUnit.dataPointYSums[z]), z = Math.abs(e - this.parent.convertValueToPixel(b)), z <= v && (v = z, y = s))) : "waterfall" === m[s].dataSeries.type ? (z = Math.abs(e - this.parent.convertValueToPixel(m[s].dataSeries.dataPointEOs[m[s].index].cumulativeSum)), z <= w && (v = w = z, y = s)) : (z = Math.abs(e - this.parent.convertValueToPixel(m[s].dataPoint.y)), z <= w && (w = z, y = s));
                l(v) || (w = Math.min(w, v));
              }
              v = m[y];
              s = 0;
              if ("rangeColumn" === v.dataSeries.type || "rangeArea" === v.dataSeries.type || "error" === v.dataSeries.type || "rangeSplineArea" === v.dataSeries.type || "candlestick" === v.dataSeries.type || "ohlc" === v.dataSeries.type || "boxAndWhisker" === v.dataSeries.type) {
                w = Math.abs(e - this.parent.convertValueToPixel(v.dataPoint.y[0]));
                for (m = 0; m < v.dataPoint.y.length; m++) z = Math.abs(e - this.parent.convertValueToPixel(v.dataPoint.y[m])), z < w && (w = z, s = m);
                t3 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0;
                k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: v.dataPoint.y[s]
                }) : l(this.options.label) ? ia(l(c) ? v.dataPoint.y[s] : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                this.value = v.dataPoint.y[s];
              } else "stackedColumn" === v.dataSeries.type ? (b = v.dataSeries.dataPointEOs[v.index].cumulativeY, t3 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: b
              }) : l(this.options.label) ? ia(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedArea" === v.dataSeries.type ? (b = v.dataSeries.dataPointEOs[v.index].cumulativeY, t3 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: b
              }) : l(this.options.label) ? ia(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedColumn100" === v.dataSeries.type ? (t3 = v.dataSeries.dataPointEOs[v.index].cumulativeY, z = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x, b = 100 * (t3 / v.dataSeries.plotUnit.dataPointYSums[z]), t3 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: b
              }) : l(this.options.label) ? ia(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedArea100" === v.dataSeries.type ? (t3 = v.dataSeries.dataPointEOs[v.index].cumulativeY, z = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x, b = 100 * (t3 / v.dataSeries.plotUnit.dataPointYSums[z]), t3 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: b
              }) : l(this.options.label) ? ia(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "waterfall" === v.dataSeries.type ? (t3 = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: v.dataSeries.dataPointEOs[v.index].cumulativeSum
              }) : l(this.options.label) ? ia(l(c) ? v.dataSeries.dataPointEOs[v.index].cumulativeSum : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = v.dataSeries.dataPointEOs[v.index].cumulativeSum) : (t3 = 1 === g.lineWidth % 2 ? (l(a) ? e : this.parent.convertValueToPixel(v.dataPoint.y) << 0) + 0.5 : l(a) ? e : this.parent.convertValueToPixel(v.dataPoint.y) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: l(c) ? v.dataPoint.y : c
              }) : l(this.options.label) ? ia(l(c) ? v.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = v.dataPoint.y);
              h = f2 = t3;
              b = this.chart.plotArea.x1;
              d = this.chart.plotArea.x2;
              this.bounds = {
                x1: b,
                y1: h - p / 2,
                x2: d,
                y2: f2 + p / 2
              };
              k.y = f2 + k.fontSize / 2 - k.measureText().height / 2 + 2;
              k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
              "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            }
            m = null;
            g.globalAlpha = n;
            if ("bottom" === this.parent._position || "top" === this.parent._position) "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1 + k.fontSize / 2), "bottom" === this.parent._position && this.parent.lineCoordinates.y2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2), this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < p && (g.moveTo(b, h), g.lineTo(d, f2), g.stroke(), this._hidden = false);
            if ("left" === this.parent._position || "right" === this.parent._position) "left" === this.parent._position && k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.measureText().width), this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < p && (g.moveTo(b, h), g.lineTo(d, f2), g.stroke(), this._hidden = false);
          } else {
            if ("bottom" === this.parent._position || "top" === this.parent._position) b = d = r2 = 1 === g.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, h = this.chart.plotArea.y1, f2 = this.chart.plotArea.y2, this.bounds = {
              x1: b - p / 2,
              y1: h,
              x2: d + p / 2,
              y2: f2
            };
            else if ("left" === this.parent._position || "right" === this.parent._position) h = f2 = t3 = 1 === g.lineWidth % 2 ? (e << 0) + 0.5 : e << 0, b = this.chart.plotArea.x1, d = this.chart.plotArea.x2, this.bounds = {
              x1: b,
              y1: h - p / 2,
              x2: d,
              y2: f2 + p / 2
            };
            if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
              if ("left" === this.parent._position || "right" === this.parent._position) {
                s = false;
                if (this.parent.labels) for (w = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += w) if (this.parent.labels[m]) s = true;
                else {
                  s = false;
                  break;
                }
                if (s) {
                  if ("axisX" === this.parent.type) for (w = this.parent.convertPixelToValue({
                    y: e
                  }), y = null, s = 0; s < this.parent.dataSeries.length; s++) (y = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: l(c) ? this.parent.convertPixelToValue(a) : c
                  }) : l(this.options.label) ? y.dataPoint.label : this.label);
                } else k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: l(c) ? this.parent.convertPixelToValue(e) : c
                }) : l(this.options.label) ? ia(l(c) ? this.parent.convertPixelToValue(e) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: l(c) ? this.parent.convertPixelToValue(e) : c
                }) : l(this.options.label) ? Da(l(c) ? this.parent.convertPixelToValue(e) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                k.y = e + k.fontSize / 2 - k.measureText().height / 2 + 2;
                k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x1 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
              } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position) k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: l(c) ? this.parent.convertPixelToValue(a) : c
                }) : l(this.options.label) ? ia(l(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.x = b - k.measureText().width / 2, k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width), k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
              }
            } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
              s = false;
              m = "";
              if (this.parent.labels) for (w = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += w) if (this.parent.labels[m]) s = true;
              else {
                s = false;
                break;
              }
              if (s) {
                if ("axisX" === this.parent.type) for (w = this.parent.convertPixelToValue({
                  x: a
                }), y = null, s = 0; s < this.parent.dataSeries.length; s++) (y = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: l(c) ? this.parent.convertPixelToValue(a) : c
                }) : l(this.options.label) ? l(c) ? y.dataPoint.label : c : this.label);
              } else k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: l(c) ? 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "" : c
              }) : l(this.options.label) ? ia(l(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: l(c) ? this.parent.convertPixelToValue(a) : c
              }) : l(this.options.label) ? Da(l(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              k.x = b - k.measureText().width / 2;
              k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
              k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
              "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            } else if ("left" === this.parent._position || "right" === this.parent._position) k.text = this.labelFormatter ? this.labelFormatter({
              chart: this.chart,
              axis: this.parent.options,
              crosshair: this.options,
              value: l(c) ? this.parent.convertPixelToValue(e) : c
            }) : l(this.options.label) ? ia(l(c) ? this.parent.convertPixelToValue(e) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.y = e + k.fontSize / 2 - k.measureText().height / 2 + 2, k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2), "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            "left" === this.parent._position && k.x < this.chart.bounds.x1 ? k.x = this.chart.bounds.x1 : "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.measureText().width : "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2);
            g.globalAlpha = n;
            0 < p && (g.moveTo(b, h), g.lineTo(d, f2), g.stroke(), this._hidden = false);
            this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(e);
          }
          if ("bottom" === this.parent._position || "top" === this.parent._position) this.parent.sessionVariables.crosshairValue = this._updatedValue = this.parent.convertPixelToValue(r2);
          if ("left" === this.parent._position || "right" === this.parent._position) this.parent.sessionVariables.crosshairValue = this._updatedValue = this.parent.convertPixelToValue(t3);
          this._textBlock = k;
          this._label = c;
          l(c) || this.renderLabel();
          g.restore();
          g.globalAlpha = x2;
        };
        $2.prototype.renderLabel = function() {
          this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && (l(this._textBlock) || l(this._textBlock.text) || !("number" === typeof this._textBlock.text.valueOf() || 0 < this._textBlock.text.length) || this._hidden || this._textBlock.render(true), l(this._label) && this.dispatchEvent("updated", {
            chart: this.chart,
            crosshair: this.options,
            axis: this.parent,
            value: this.value
          }, this.parent));
        };
        qa(aa2, Y);
        aa2.prototype._updateOptions = function() {
          this.updateOption("enabled");
          this.updateOption("shared");
          this.updateOption("animationEnabled");
          this.updateOption("content");
          this.updateOption("contentFormatter");
          this.updateOption("reversed");
          this.updateOption("backgroundColor");
          this.updateOption("borderColor");
          this.updateOption("borderThickness");
          this.updateOption("cornerRadius");
          this.updateOption("fontSize");
          this.updateOption("fontColor");
          this.updateOption("fontFamily");
          this.updateOption("fontWeight");
          this.updateOption("fontStyle");
        };
        aa2.prototype._initialize = function() {
          this.updateOption("updated");
          this.updateOption("hidden");
          if (this.enabled) {
            this.container = document.createElement("div");
            this.container.setAttribute("class", "canvasjs-chart-tooltip");
            this.container.style.position = "absolute";
            this.container.style.height = "auto";
            this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
            this.container.style.zIndex = "1000";
            this.container.style.pointerEvents = "none";
            this.container.style.display = "none";
            var a = document.createElement("div");
            a.style.width = "auto";
            a.style.height = "auto";
            a.style.minWidth = "50px";
            a.style.lineHeight = "normal";
            a.style.margin = "0px 0px 0px 0px";
            a.style.padding = "5px";
            a.style.fontFamily = "Calibri, Arial, Georgia, serif";
            a.style.fontWeight = "normal";
            a.style.fontStyle = r ? "italic" : "normal";
            a.style.fontSize = "14px";
            a.style.color = "#000000";
            a.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";
            a.style.textAlign = "left";
            a.style.border = "2px solid gray";
            a.style.background = r ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
            a.style.textIndent = "0px";
            a.style.whiteSpace = "nowrap";
            a.style.borderRadius = "5px";
            a.style.MozUserSelect = "none";
            a.style.WebkitUserSelect = "none";
            a.style.msUserSelect = "none";
            a.style.userSelect = "none";
            r || (a.style.filter = "alpha(opacity = 90)", a.style.filter = "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666')");
            a.innerText = "Sample Tooltip";
            this.container.appendChild(a);
            this.contentDiv = this.container.firstChild;
            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
            this.chart._canvasJSContainer.appendChild(this.container);
          }
        };
        aa2.prototype.mouseMoveHandler = function(a, e) {
          this._lastUpdated && 4 > (/* @__PURE__ */ new Date()).getTime() - this._lastUpdated || (this._lastUpdated = (/* @__PURE__ */ new Date()).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, e), this.enabled && this._updatedEventParameters && !isNaN(this._prevX) && !isNaN(this._prevY) && this.container && this.container.style && this.dispatchEvent("none" === this.container.style.display ? "hidden" : "updated", this._updatedEventParameters, this));
        };
        aa2.prototype._updateToolTip = function(a, e, c) {
          c = "undefined" === typeof c ? true : c;
          this._updateOptions();
          this.container || this._initialize();
          this.enabled || this.hide();
          if (!this.chart.disableToolTip) {
            if ("undefined" === typeof a || "undefined" === typeof e) {
              if (isNaN(this._prevX) || isNaN(this._prevY)) return;
              a = this._prevX;
              e = this._prevY;
            } else this._prevX = a, this._prevY = e;
            var b = null, d = null, h = [], f2 = 0;
            if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
              var u = [];
              if (this.chart.axisX) for (var t3 = 0; t3 < this.chart.axisX.length; t3++) {
                for (var f2 = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX[t3].convertPixelToValue({
                  y: e
                }) : this.chart.axisX[t3].convertPixelToValue({
                  x: a
                }), k = null, b = 0; b < this.chart.axisX[t3].dataSeries.length; b++) (k = this.chart.axisX[t3].dataSeries[b].getDataPointAtX(f2, c, true)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[t3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && u.push(k));
                k = null;
              }
              if (this.chart.axisX2) for (t3 = 0; t3 < this.chart.axisX2.length; t3++) {
                f2 = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX2[t3].convertPixelToValue({
                  y: e
                }) : this.chart.axisX2[t3].convertPixelToValue({
                  x: a
                });
                k = null;
                for (b = 0; b < this.chart.axisX2[t3].dataSeries.length; b++) (k = this.chart.axisX2[t3].dataSeries[b].getDataPointAtX(f2, c, true)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[t3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && u.push(k));
                k = null;
              }
              if (0 === u.length) return;
              u.sort(function(a2, b2) {
                return a2.dataSeries.axisX.logarithmic || b2.dataSeries.axisX.logarithmic ? a2.distance - b2.distance : a2.distance / a2.dataSeries.axisX.range - b2.distance / b2.dataSeries.axisX.range;
              });
              c = u[0];
              for (b = 0; b < u.length; b++) u[b].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() && h.push(u[b]);
              u = null;
            } else {
              if (b = this.chart.getDataPointAtXY(a, e, c)) this.currentDataPointIndex = b.dataPointIndex, this.currentSeriesIndex = b.dataSeries.index;
              else if (r) {
                if (b = bb(a, e, this.chart._eventManager.ghostCtx), 0 < b && "undefined" !== typeof this.chart._eventManager.objectMap[b]) {
                  b = this.chart._eventManager.objectMap[b];
                  if ("legendItem" === b.objectType) return;
                  this.currentSeriesIndex = b.dataSeriesIndex;
                  this.currentDataPointIndex = 0 <= b.dataPointIndex ? b.dataPointIndex : -1;
                } else this.currentDataPointIndex = -1;
              } else this.currentDataPointIndex = -1;
              if (0 <= this.currentSeriesIndex) {
                d = this.chart.data[this.currentSeriesIndex];
                k = {};
                if (0 <= this.currentDataPointIndex) b = d.dataPoints[this.currentDataPointIndex], k.dataSeries = d, k.dataPoint = b, k.index = this.currentDataPointIndex, k.distance = Math.abs(b.x - f2), "waterfall" === d.type && (k.cumulativeSumYStartValue = d.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, k.cumulativeSum = d.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                else if (this.enabled && d && ("line" === d.type || "stepLine" === d.type || "spline" === d.type || "area" === d.type || "stepArea" === d.type || "splineArea" === d.type || "stackedArea" === d.type || "stackedArea100" === d.type || "rangeArea" === d.type || "rangeSplineArea" === d.type || "candlestick" === d.type || "ohlc" === d.type || "boxAndWhisker" === d.type)) f2 = d.axisX.convertPixelToValue({
                  x: a
                }), k = d.getDataPointAtX(f2, c, true), l(k) || (k.dataSeries = d, this.currentDataPointIndex = k.index, b = k.dataPoint);
                else {
                  "toolTip" === this.chart.clearedOverlayedCanvas && (this.chart.resetOverlayedCanvas(), this.chart.clearedOverlayedCanvas = null, this.container && (this.container.style.display = "none"));
                  return;
                }
                if (!l(k) && !l(k.dataPoint) && !l(k.dataPoint.y)) if (k.dataSeries.axisY) {
                  if (0 < k.dataPoint.y.length) {
                    for (b = c = 0; b < k.dataPoint.y.length; b++) k.dataPoint.y[b] < k.dataSeries.axisY.viewportMinimum ? c-- : k.dataPoint.y[b] > k.dataSeries.axisY.viewportMaximum && c++;
                    c < k.dataPoint.y.length && c > -k.dataPoint.y.length && h.push(k);
                  } else "column" === d.type || "bar" === d.type ? 0 > k.dataPoint.y ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && h.push(k) : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && h.push(k) : "bubble" === d.type ? (c = this.chart._eventManager.objectMap[d.dataPointIds[k.index]].size / 2, k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - c && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + c && h.push(k)) : "waterfall" === d.type ? (c = 0, k.cumulativeSumYStartValue < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSumYStartValue > k.dataSeries.axisY.viewportMaximum && c++, k.cumulativeSum < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSum > k.dataSeries.axisY.viewportMaximum && c++, 2 > c && -2 < c && h.push(k)) : (0 <= k.dataSeries.type.indexOf("100") || "stackedColumn" === d.type || "stackedBar" === d.type || "stackedArea" === d.type || k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum) && h.push(k);
                } else h.push(k);
              }
            }
            if (0 < h.length) {
              if (this.highlightObjects(h), this.enabled) {
                c = "";
                c = this.getToolTipInnerHTML({
                  entries: h
                });
                if (null !== c) {
                  this.contentDiv.innerHTML = c;
                  if (this.isToolTipDefinedInData && l(this.options.content) && l(this.options.contentFormatter)) for (f2 = this.contentDiv.getElementsByTagName("span"), b = 0; b < f2.length; b++) f2[b] && (f2[b].style.color = f2[b].getAttribute("data-color"));
                  f2 = false;
                  "none" === this.container.style.display && (f2 = true, this.container.style.display = "block");
                  try {
                    this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : r ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : 0 < h[0].dataPoint.y ? h[0].dataSeries.risingColor : h[0].dataSeries.fallingColor : "error" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[d.index % h[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[h[0].index % h[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : r ? "italic" : "normal";
                  } catch (m) {
                  }
                  "pie" === h[0].dataSeries.type || "doughnut" === h[0].dataSeries.type || "funnel" === h[0].dataSeries.type || "pyramid" === h[0].dataSeries.type || "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                  0 > a && (a = Math.max(0, a + this.container.clientWidth + 20));
                  a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                  e = 1 !== h.length || this.shared || "line" !== h[0].dataSeries.type && "stepLine" !== h[0].dataSeries.type && "spline" !== h[0].dataSeries.type && "area" !== h[0].dataSeries.type && "stepArea" !== h[0].dataSeries.type && "splineArea" !== h[0].dataSeries.type ? "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) : e : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y);
                  e = -e + 10;
                  0 < e + this.container.clientHeight + 5 && (e -= e + this.container.clientHeight + 5 - 0);
                  this.fixMozTransitionDelay(a, e);
                  !this.animationEnabled || f2 ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                  this.positionLeft = a;
                  this.positionBottom = e;
                  this.container.style.left = a + "px";
                  this.container.style.bottom = e + "px";
                } else this.hide(false), this.enabled && this.dispatchEvent("hidden", {
                  chart: this.chart,
                  toolTip: this
                }, this);
                e = [];
                for (b = 0; b < h.length; b++) e.push({
                  xValue: h[b].dataPoint.x,
                  dataPoint: h[b].dataPoint,
                  dataSeries: h[b].dataSeries,
                  dataPointIndex: h[b].index,
                  dataSeriesIndex: h[b].dataSeries._index
                });
                this._updatedEventParameters = {
                  chart: this.chart,
                  toolTip: this.options,
                  content: c,
                  entries: e
                };
                this._entries = h;
              }
            } else this.hide(), this.enabled && this.dispatchEvent("hidden", {
              chart: this.chart,
              toolTip: this
            }, this);
            this._dataSeriesIndex = this._xValue = null;
          }
        };
        aa2.prototype.highlightObjects = function(a) {
          var e = this.chart.overlaidCanvasCtx;
          l(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas ? (this.chart.resetOverlayedCanvas(), e.clearRect(0, 0, this.chart.width, this.chart.height), this.chart.clearedOverlayedCanvas = "toolTip") : this.chart.clearedOverlayedCanvas = null;
          e.save();
          var c = this.chart.plotArea, b = 0;
          e.beginPath();
          e.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
          e.clip();
          for (c = 0; c < a.length; c++) {
            var d = a[c];
            if ((d = this.chart._eventManager.objectMap[d.dataSeries.dataPointIds[d.index]]) && d.objectType && "dataPoint" === d.objectType) {
              var b = this.chart.data[d.dataSeriesIndex], h = b.dataPoints[d.dataPointIndex], f2 = d.dataPointIndex;
              false === h.highlightEnabled || true !== b.highlightEnabled && true !== h.highlightEnabled || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "scatter" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type ? (h = b.getMarkerProperties(f2, d.x1, d.y1, this.chart.overlaidCanvasCtx), h.size = Math.max(1.5 * h.size << 0, 10), h.borderColor = h.borderColor || "#FFFFFF", h.borderThickness = h.borderThickness || Math.ceil(0.1 * h.size), ba.drawMarkers([h]), "undefined" !== typeof d.y2 && (h = b.getMarkerProperties(f2, d.x1, d.y2, this.chart.overlaidCanvasCtx), h.size = Math.max(1.5 * h.size << 0, 10), h.borderColor = h.borderColor || "#FFFFFF", h.borderThickness = h.borderThickness || Math.ceil(0.1 * h.size), ba.drawMarkers([h]))) : "bubble" === b.type ? (h = b.getMarkerProperties(f2, d.x1, d.y1, this.chart.overlaidCanvasCtx), h.size = d.size, h.color = "white", h.borderColor = "white", e.globalAlpha = 0.3, ba.drawMarkers([h]), e.globalAlpha = 1) : "column" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "bar" === b.type || "rangeBar" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "rangeColumn" === b.type || "waterfall" === b.type ? ea(e, d.x1, d.y1, d.x2, d.y2, "white", 0, null, false, false, false, false, 0.3) : "pie" === b.type || "doughnut" === b.type ? ja2(e, d.center, d.radius, "white", b.type, d.startAngle, d.endAngle, 0.3, d.percentInnerRadius) : "funnel" === b.type || "pyramid" === b.type ? ra2(e, d.funnelSection, 0.3, "white") : "candlestick" === b.type ? (e.globalAlpha = 1, e.strokeStyle = d.color, e.lineWidth = 2 * d.borderThickness, b = 0 === e.lineWidth % 2 ? 0 : 0.5, e.beginPath(), e.moveTo(d.x3 - b, Math.min(d.y2, d.y3)), e.lineTo(d.x3 - b, Math.min(d.y1, d.y4)), e.stroke(), e.beginPath(), e.moveTo(d.x3 - b, Math.max(d.y1, d.y4)), e.lineTo(d.x3 - b, Math.max(d.y2, d.y3)), e.stroke(), ea(e, d.x1, Math.min(d.y1, d.y4), d.x2, Math.max(d.y1, d.y4), "transparent", 2 * d.borderThickness, d.color, false, false, false, false), e.globalAlpha = 1) : "ohlc" === b.type ? (e.globalAlpha = 1, e.strokeStyle = d.color, e.lineWidth = 2 * d.borderThickness, b = 0 === e.lineWidth % 2 ? 0 : 0.5, e.beginPath(), e.moveTo(d.x3 - b, d.y2), e.lineTo(d.x3 - b, d.y3), e.stroke(), e.beginPath(), e.moveTo(d.x3, d.y1), e.lineTo(d.x1, d.y1), e.stroke(), e.beginPath(), e.moveTo(d.x3, d.y4), e.lineTo(d.x2, d.y4), e.stroke(), e.globalAlpha = 1) : "boxAndWhisker" === b.type ? (e.save(), e.globalAlpha = 1, e.strokeStyle = d.stemColor, e.lineWidth = 2 * d.stemThickness, 0 < d.stemThickness && (e.beginPath(), e.moveTo(d.x3, d.y2 + d.borderThickness / 2), e.lineTo(d.x3, d.y1 + d.whiskerThickness / 2), e.stroke(), e.beginPath(), e.moveTo(d.x3, d.y4 - d.whiskerThickness / 2), e.lineTo(d.x3, d.y3 - d.borderThickness / 2), e.stroke()), e.beginPath(), ea(e, d.x1, Math.max(d.y2, d.y3), d.x2, Math.min(d.y2, d.y3), "transparent", 2 * d.borderThickness, d.color, false, false, false, false), e.globalAlpha = 1, e.strokeStyle = d.whiskerColor, e.lineWidth = 2 * d.whiskerThickness, 0 < d.whiskerThickness && (e.beginPath(), e.moveTo(Math.floor(d.x3 - d.whiskerLength / 2), d.y4), e.lineTo(Math.ceil(d.x3 + d.whiskerLength / 2), d.y4), e.stroke(), e.beginPath(), e.moveTo(Math.floor(d.x3 - d.whiskerLength / 2), d.y1), e.lineTo(Math.ceil(d.x3 + d.whiskerLength / 2), d.y1), e.stroke()), e.globalAlpha = 1, e.strokeStyle = d.lineColor, e.lineWidth = 2 * d.lineThickness, 0 < d.lineThickness && (e.beginPath(), e.moveTo(d.x1, d.y5), e.lineTo(d.x2, d.y5), e.stroke()), e.restore(), e.globalAlpha = 1) : "error" === b.type && A2(e, d.x1, d.y1, d.x2, d.y2, "white", d.whiskerProperties, d.stemProperties, d.isXYSwapped, 0.3));
            }
          }
          e.restore();
          e.globalAlpha = 1;
          e.beginPath();
        };
        aa2.prototype.getToolTipInnerHTML = function(a) {
          a = a.entries;
          var e = null, c = null, b = null, d = 0, h = "";
          this.isToolTipDefinedInData = true;
          for (var f2 = 0; f2 < a.length; f2++) if (a[f2].dataSeries.toolTipContent || a[f2].dataPoint.toolTipContent) {
            this.isToolTipDefinedInData = false;
            break;
          }
          if (this.isToolTipDefinedInData && (this.content && "function" === typeof this.content || this.contentFormatter)) a = {
            chart: this.chart,
            toolTip: this.options,
            entries: a
          }, e = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
          else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
            for (var l2 = null, r2 = "", f2 = 0; f2 < a.length; f2++) {
              c = a[f2].dataSeries;
              b = a[f2].dataPoint;
              d = a[f2].index;
              h = "";
              if (0 === f2 && this.isToolTipDefinedInData && !this.content) {
                this.chart.axisX && 0 < this.chart.axisX.length ? r2 += "undefined" !== typeof this.chart.axisX[0].labels[b.x] ? this.chart.axisX[0].labels[b.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (r2 += "undefined" !== typeof this.chart.axisX2[0].labels[b.x] ? this.chart.axisX2[0].labels[b.x] : "{x}");
                r2 += "</br>";
                if (!c.visible) continue;
                r2 = this.chart.replaceKeywordsWithValue(r2, b, c, d);
              }
              null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += l2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}`, l2 = c.axisXIndex) : "bubble" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += l2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}`) : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += l2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}`) : "candlestick" === c.type || "ohlc" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += l2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}`) : "boxAndWhisker" === c.type && (this.chart.axisX && 1 < this.chart.axisX.length && (h += l2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}`), null === e && (e = ""), c.visible && (true === this.reversed ? (e = this.chart.replaceKeywordsWithValue(h, b, c, d) + e, f2 < a.length - 1 && (e = "</br>" + e)) : (e += this.chart.replaceKeywordsWithValue(h, b, c, d), f2 < a.length - 1 && (e += "</br>"))));
            }
            null !== e && (e = r2 + e);
          } else {
            c = a[0].dataSeries;
            b = a[0].dataPoint;
            d = a[0].index;
            if (null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent) return null;
            "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.name ? "{name}:</span>&nbsp;&nbsp;" : b.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : "candlestick" === c.type || "ohlc" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === c.type && (h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
            null === e && (e = "");
            e += this.chart.replaceKeywordsWithValue(h, b, c, d);
          }
          return e;
        };
        aa2.prototype.enableAnimation = function() {
          if (!this.container.style.WebkitTransition) {
            var a = this.getContainerTransition(this.containerTransitionDuration);
            this.container.style.WebkitTransition = a;
            this.container.style.MsTransition = a;
            this.container.style.transition = a;
            this.container.style.MozTransition = this.mozContainerTransition;
          }
        };
        aa2.prototype.disableAnimation = function() {
          this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "");
        };
        aa2.prototype.hide = function(a) {
          this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._entries = this._dataSeriesIndex = this._xValue = null, this._prevY = this._prevX = NaN, this._updatedEventParameters = null, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas());
        };
        aa2.prototype.show = function(a, e, c) {
          this._updateToolTip(a, e, "undefined" === typeof c ? false : c);
        };
        aa2.prototype.showAtIndex = function(a, e) {
        };
        aa2.prototype.showAtX = function(a, e) {
          if (!this.enabled) return false;
          this.chart.clearedOverlayedCanvas = null;
          this._updateOptions();
          var c, b, d, f2 = [];
          d = false;
          e = !l(e) && 0 <= e && e < this.chart.data.length ? e : 0;
          if (this.shared) for (var q = 0; q < this.chart.data.length; q++) c = this.chart.data[q], (b = c.getDataPointAtX(a, false)) && b.dataPoint && !l(b.dataPoint.y) && c.visible && (b.dataSeries = c, this.chart.data[e].axisX.convertValueToPixel(a) === c.axisX.convertValueToPixel(b.dataPoint.x) && f2.push(b));
          else c = this.chart.data[e], (b = c.getDataPointAtX(a, false)) && b.dataPoint && !l(b.dataPoint.y) && c.visible && (b.dataSeries = c, f2.push(b));
          if (0 < f2.length) {
            for (q = 0; q < f2.length; q++) if (b = f2[q], (this.shared || 0 <= b.dataSeries.type.indexOf("100")) && b.dataSeries.axisX && b.dataPoint.x >= b.dataSeries.axisX.viewportMinimum && b.dataPoint.x <= b.dataSeries.axisX.viewportMaximum) {
              d = false;
              break;
            } else if (b.dataSeries.axisX && b.dataSeries.axisY && (b.dataPoint.x < b.dataSeries.axisX.viewportMinimum || b.dataPoint.x > b.dataSeries.axisX.viewportMaximum || b.dataPoint.y < b.dataSeries.axisY.viewportMinimum || b.dataPoint.y > b.dataSeries.axisY.viewportMaximum)) d = true;
            else {
              d = false;
              break;
            }
            if (d) return this.hide(), false;
            this.highlightObjects(f2);
            this._entries = f2;
            q = "";
            q = this.getToolTipInnerHTML({
              entries: f2
            });
            if (null !== q) {
              this.contentDiv.innerHTML = q;
              if (this.isToolTipDefinedInData && l(this.options.content) && l(this.options.contentFormatter)) for (b = this.contentDiv.getElementsByTagName("span"), q = 0; q < b.length; q++) b[q] && (b[q].style.color = b[q].getAttribute("data-color"));
              q = false;
              "none" === this.container.style.display && (q = true, this.container.style.display = "block");
              try {
                this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : r ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === f2[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f2[0].dataPoint.color ? f2[0].dataPoint.color : 0 < f2[0].dataPoint.y ? f2[0].dataSeries.risingColor : f2[0].dataSeries.fallingColor : "error" === f2[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f2[0].dataSeries.color ? f2[0].dataSeries.color : f2[0].dataSeries._colorSet[c.index % f2[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f2[0].dataPoint.color ? f2[0].dataPoint.color : f2[0].dataSeries.color ? f2[0].dataSeries.color : f2[0].dataSeries._colorSet[f2[0].index % f2[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : r ? "italic" : "normal";
              } catch (t3) {
              }
              "pie" === f2[0].dataSeries.type || "doughnut" === f2[0].dataSeries.type ? c = f2[0].dataSeries.dataPointEOs[f2[0].index].center.x + f2[0].dataSeries.radius * Math.cos(f2[0].dataSeries.dataPointEOs[f2[0].index].midAngle) + -("left" === f2[0].dataSeries.dataPointEOs[f2[0].index].hemisphere ? 0 : this.container.clientWidth) : "funnel" === f2[0].dataSeries.type || "pyramid" === f2[0].dataSeries.type ? (b = f2[0].dataSeries.dataPointEOs[f2[0].index].sectionsofFunnel, c = (b.x1 + b.x2 - this.container.clientWidth) / 2) : (c = "bar" === f2[0].dataSeries.type || "rangeBar" === f2[0].dataSeries.type || "stackedBar" === f2[0].dataSeries.type || "stackedBar100" === f2[0].dataSeries.type ? f2[0].dataSeries.axisY.convertValueToPixel(f2[0].dataPoint.y.length ? f2[0].dataPoint.y[f2[0].dataPoint.y.length - 1] : f2[0].dataPoint.y) - this.container.clientWidth << 0 : f2[0].dataSeries.axisX.convertValueToPixel(f2[0].dataPoint.x) - this.container.clientWidth << 0, c -= 10);
              0 > c && (c += this.container.clientWidth + 20);
              c + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (c = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
              1 !== f2.length || this.shared || "line" !== f2[0].dataSeries.type && "stepLine" !== f2[0].dataSeries.type && "spline" !== f2[0].dataSeries.type && "area" !== f2[0].dataSeries.type && "stepArea" !== f2[0].dataSeries.type && "splineArea" !== f2[0].dataSeries.type ? "pie" === f2[0].dataSeries.type || "doughnut" === f2[0].dataSeries.type ? (b = f2[0].dataSeries.dataPointEOs[f2[0].index].center.y + f2[0].dataSeries.radius * Math.sin(f2[0].dataSeries.dataPointEOs[f2[0].index].midAngle), b < f2[0].dataSeries.dataPointEOs[f2[0].index].center.y && (b += this.container.clientHeight)) : "funnel" === f2[0].dataSeries.type || "pyramid" === f2[0].dataSeries.type ? (b = f2[0].dataSeries.dataPointEOs[f2[0].dataSeries.reversed ? f2[0].dataSeries.dataPointEOs.length - 1 - f2[0].index : f2[0].index].sectionsofFunnel, b = "undefined" !== typeof b.x5 ? (b.y2 + b.y4) / 2 : (b.y2 + b.y3) / 2 + this.container.clientHeight / 2) : b = "bar" === f2[0].dataSeries.type || "rangeBar" === f2[0].dataSeries.type || "stackedBar" === f2[0].dataSeries.type || "stackedBar100" === f2[0].dataSeries.type ? f2[0].dataSeries.axisX.convertValueToPixel(f2[0].dataPoint.x) : f2[0].dataSeries.axisY.convertValueToPixel(f2[0].dataPoint.y.length ? f2[0].dataPoint.y[f2[0].dataPoint.y.length - 1] : f2[0].dataPoint.y) : b = f2[0].dataSeries.axisY.convertValueToPixel(f2[0].dataPoint.y);
              b = -b + 10;
              0 < b + this.container.clientHeight + 5 && (b -= b + this.container.clientHeight + 5 - 0);
              this.fixMozTransitionDelay(c, b);
              !this.animationEnabled || q ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
              this.container.style.left = c + "px";
              this.container.style.bottom = b + "px";
            } else return this.hide(false), false;
          } else return this.hide(), false;
          this._xValue = a;
          this._dataSeriesIndex = e;
          this._prevY = this._prevX = NaN;
          return true;
        };
        aa2.prototype.fixMozTransitionDelay = function(a, e) {
          if (20 < this.chart._eventManager.lastObjectId) this.mozContainerTransition = this.getContainerTransition(0);
          else {
            var c = parseFloat(this.container.style.left), c = isNaN(c) ? 0 : c, b = parseFloat(this.container.style.bottom), b = isNaN(b) ? 0 : b;
            10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - e, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0);
          }
        };
        aa2.prototype.getContainerTransition = function(a) {
          return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s";
        };
        ha2.prototype.reset = function() {
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.eventObjects = [];
          r && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath());
        };
        ha2.prototype.getNewObjectTrackingId = function() {
          return ++this.lastObjectId;
        };
        ha2.prototype.mouseEventHandler = function(a) {
          if ("mousemove" === a.type || "click" === a.type) {
            var e = [], c = Ra(a), b = null;
            if ((b = this.chart.getObjectAtXY(c.x, c.y, false)) && "undefined" !== typeof this.objectMap[b]) if (b = this.objectMap[b], "dataPoint" === b.objectType) {
              var d = this.chart.data[b.dataSeriesIndex], f2 = d.dataPoints[b.dataPointIndex], l2 = b.dataPointIndex;
              b.eventParameter = {
                x: c.x,
                y: c.y,
                dataPoint: f2,
                dataSeries: d.options,
                dataPointIndex: l2,
                dataSeriesIndex: d.index,
                chart: this.chart
              };
              b.eventContext = {
                context: f2,
                userContext: f2,
                mouseover: "mouseover",
                mousemove: "mousemove",
                mouseout: "mouseout",
                click: "click"
              };
              e.push(b);
              b = this.objectMap[d.id];
              b.eventParameter = {
                x: c.x,
                y: c.y,
                dataPoint: f2,
                dataSeries: d.options,
                dataPointIndex: l2,
                dataSeriesIndex: d.index,
                chart: this.chart
              };
              b.eventContext = {
                context: d,
                userContext: d.options,
                mouseover: "mouseover",
                mousemove: "mousemove",
                mouseout: "mouseout",
                click: "click"
              };
              e.push(this.objectMap[d.id]);
            } else "legendItem" === b.objectType && (d = this.chart.data[b.dataSeriesIndex], f2 = null !== b.dataPointIndex ? d.dataPoints[b.dataPointIndex] : null, b.eventParameter = {
              x: c.x,
              y: c.y,
              dataSeries: d.options,
              dataPoint: f2,
              dataPointIndex: b.dataPointIndex,
              dataSeriesIndex: b.dataSeriesIndex,
              chart: this.chart
            }, b.eventContext = {
              context: this.chart.legend,
              userContext: this.chart.legend.options,
              mouseover: "itemmouseover",
              mousemove: "itemmousemove",
              mouseout: "itemmouseout",
              click: "itemclick"
            }, e.push(b));
            d = [];
            for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
              f2 = true;
              for (b = 0; b < e.length; b++) if (e[b].id === this.mouseoveredObjectMaps[c].id) {
                f2 = false;
                break;
              }
              f2 ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : d.push(this.mouseoveredObjectMaps[c]);
            }
            this.mouseoveredObjectMaps = d;
            for (c = 0; c < e.length; c++) {
              d = false;
              for (b = 0; b < this.mouseoveredObjectMaps.length; b++) if (e[c].id === this.mouseoveredObjectMaps[b].id) {
                d = true;
                break;
              }
              d || (this.fireEvent(e[c], "mouseover", a), this.mouseoveredObjectMaps.push(e[c]));
              "click" === a.type ? this.fireEvent(e[c], "click", a) : "mousemove" === a.type && this.fireEvent(e[c], "mousemove", a);
            }
          }
        };
        ha2.prototype.fireEvent = function(a, e, c) {
          if (a && e) {
            var b = a.eventParameter, d = a.eventContext, f2 = a.eventContext.userContext;
            f2 && d && f2[d[e]] && f2[d[e]].call(f2, b);
            "mouseout" !== e ? f2.cursor && f2.cursor !== c.target.style.cursor && (c.target.style.cursor = f2.cursor) : (c.target.style.cursor = this.chart.panEnabled ? "itemmouseout" !== d.mouseout || f2.dockInsidePlotArea ? "move" : this.chart._defaultCursor : this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
            "click" === e && "dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
            "click" === e && "dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
          }
        };
        X2.prototype.animate = function(a, e, c, b, d) {
          var f2 = this;
          this.chart.isAnimating = true;
          d = d || R.easing.linear;
          c && this.animations.push({
            startTime: (/* @__PURE__ */ new Date()).getTime() + (a ? a : 0),
            duration: e,
            animationCallback: c,
            onComplete: b
          });
          for (a = []; 0 < this.animations.length; ) if (e = this.animations.shift(), c = (/* @__PURE__ */ new Date()).getTime(), b = 0, e.startTime <= c && (b = d(Math.min(c - e.startTime, e.duration), 0, 1, e.duration), b = Math.min(b, 1), isNaN(b) || !isFinite(b)) && (b = 1), 1 > b && a.push(e), e.animationCallback(b), 1 <= b && e.onComplete) e.onComplete();
          this.animations = a;
          0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
            f2.animate.call(f2);
          }) : this.chart.isAnimating = false;
        };
        X2.prototype.cancelAllAnimations = function() {
          this.animations = [];
          this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
          this.animationRequestId = null;
          this.chart.isAnimating = false;
        };
        var R = {
          yScaleAnimation: function(a, e) {
            if (0 !== a) {
              var c = e.dest, b = e.source.canvas, d = e.animationBase;
              c.drawImage(b, 0, 0, b.width, b.height, 0, d - d * a, c.canvas.width / na, a * c.canvas.height / na);
            }
          },
          xScaleAnimation: function(a, e) {
            if (0 !== a) {
              var c = e.dest, b = e.source.canvas, d = e.animationBase;
              c.drawImage(b, 0, 0, b.width, b.height, d - d * a, 0, a * c.canvas.width / na, c.canvas.height / na);
            }
          },
          xClipAnimation: function(a, e) {
            if (0 !== a) {
              var c = e.dest, b = e.source.canvas;
              c.save();
              0 < a && c.drawImage(b, 0, 0, b.width * a, b.height, 0, 0, b.width * a / na, b.height / na);
              c.restore();
            }
          },
          fadeInAnimation: function(a, e) {
            if (0 !== a) {
              var c = e.dest, b = e.source.canvas;
              c.save();
              c.globalAlpha = a;
              c.drawImage(b, 0, 0, b.width, b.height, 0, 0, c.canvas.width / na, c.canvas.height / na);
              c.restore();
            }
          },
          easing: {
            linear: function(a, e, c, b) {
              return c * a / b + e;
            },
            easeOutQuad: function(a, e, c, b) {
              return -c * (a /= b) * (a - 2) + e;
            },
            easeOutQuart: function(a, e, c, b) {
              return -c * ((a = a / b - 1) * a * a * a - 1) + e;
            },
            easeInQuad: function(a, e, c, b) {
              return c * (a /= b) * a + e;
            },
            easeInQuart: function(a, e, c, b) {
              return c * (a /= b) * a * a * a + e;
            }
          }
        }, ba = {
          drawMarker: function(a, e, c, b, d, f2, l2, r2) {
            if (c) {
              var t3 = 1;
              c.fillStyle = f2 ? f2 : "#000000";
              c.strokeStyle = l2 ? l2 : "#000000";
              c.lineWidth = r2 ? r2 : 0;
              c.setLineDash && c.setLineDash(I("solid", r2));
              "circle" === b ? (c.moveTo(a, e), c.beginPath(), c.arc(a, e, d / 2, 0, 2 * Math.PI, false), f2 && c.fill(), r2 && (l2 ? c.stroke() : (t3 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = t3))) : "square" === b ? (c.beginPath(), c.rect(a - d / 2, e - d / 2, d, d), f2 && c.fill(), r2 && (l2 ? c.stroke() : (t3 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = t3))) : "triangle" === b ? (c.beginPath(), c.moveTo(a - d / 2, e + d / 2), c.lineTo(a + d / 2, e + d / 2), c.lineTo(a, e - d / 2), c.closePath(), f2 && c.fill(), r2 && (l2 ? c.stroke() : (t3 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = t3)), c.beginPath()) : "cross" === b && (c.strokeStyle = f2, c.lineWidth = d / 4, c.beginPath(), c.moveTo(a - d / 2, e - d / 2), c.lineTo(a + d / 2, e + d / 2), c.stroke(), c.moveTo(a + d / 2, e - d / 2), c.lineTo(a - d / 2, e + d / 2), c.stroke());
            }
          },
          drawMarkers: function(a) {
            for (var e = 0; e < a.length; e++) {
              var c = a[e];
              ba.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness);
            }
          }
        };
        return x;
      }();
      t.version = "v3.11.0 GA";
      window.CanvasJS && t && !window.CanvasJS.Chart && (window.CanvasJS.Chart = t);
    })();
    document.createElement("canvas").getContext || function() {
      function V() {
        return this.context_ || (this.context_ = new C(this));
      }
      function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
          return a.apply(b, g.concat(M.call(arguments)));
        };
      }
      function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
      }
      function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}");
      }
      function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
          case "width":
            b.getContext().clearRect();
            b.style.width = b.attributes.width.nodeValue + "px";
            b.firstChild.style.width = b.clientWidth + "px";
            break;
          case "height":
            b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight + "px";
        }
      }
      function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px");
      }
      function D() {
        return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
      }
      function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++) for (var e = 0; 3 > e; e++) {
          for (var f = 0, d2 = 0; 3 > d2; d2++) f += a[g][d2] * b[d2][e];
          c[g][e] = f;
        }
        return c;
      }
      function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX = a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_;
      }
      function Q(a) {
        var b = a.indexOf("(", 3), c = a.indexOf(")", b + 1), b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
        return b;
      }
      function E(a, b, c) {
        return Math.min(c, Math.max(b, a));
      }
      function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a;
      }
      function G(a) {
        if (a in H) return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0)) b = a;
        else if (/^rgb/.test(a)) {
          c = Q(a);
          b = "#";
          for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
          c = +c[3];
        } else if (/^hsl/.test(a)) {
          e = c = Q(a);
          b = parseFloat(e[0]) / 360 % 360;
          0 > b && b++;
          g = E(parseFloat(e[1]) / 100, 0, 1);
          e = E(parseFloat(e[2]) / 100, 0, 1);
          if (0 == g) g = e = b = e;
          else {
            var f = 0.5 > e ? e * (1 + g) : e + g - e * g, d2 = 2 * e - f;
            g = F(d2, f, b + 1 / 3);
            e = F(d2, f, b);
            b = F(d2, f, b - 1 / 3);
          }
          b = "#" + v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
          c = c[3];
        } else b = Z[a] || a;
        return H[a] = {
          color: b,
          alpha: c
        };
      }
      function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute", c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(false);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1;
      }
      function R(a, b, c, g) {
        a.currentPath_.push({
          type: "bezierCurveTo",
          cp1x: b.x,
          cp1y: b.y,
          cp2x: c.x,
          cp2y: c.y,
          x: g.x,
          y: g.y
        });
        a.currentX_ = g.x;
        a.currentY_ = g.y;
      }
      function S(a, b) {
        var c = G(a.strokeStyle), g = c.color, c = c.alpha * a.globalAlpha, e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push("<g_vml_:stroke", ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />');
      }
      function T(a, b, c, g) {
        var e = a.fillStyle, f = a.arcScaleX_, d2 = a.arcScaleY_, k2 = g.x - c.x, n = g.y - c.y;
        if (e instanceof w) {
          var h = 0, l = g = 0, u = 0, m = 1;
          if ("gradient" == e.type_) {
            h = e.x1_ / f;
            c = e.y1_ / d2;
            var p = s(a, e.x0_ / f, e.y0_ / d2), h = s(a, h, c), h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
            0 > h && (h += 360);
            1e-6 > h && (h = 0);
          } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k2, l = (p.y - c.y) / n, k2 /= f * q, n /= d2 * q, m = x.max(k2, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
          f = e.colors_;
          f.sort(function(a2, b2) {
            return a2.offset - b2.offset;
          });
          d2 = f.length;
          p = f[0].color;
          c = f[d2 - 1].color;
          k2 = f[0].alpha * a.globalAlpha;
          a = f[d2 - 1].alpha * a.globalAlpha;
          for (var n = [], r2 = 0; r2 < d2; r2++) {
            var t2 = f[r2];
            n.push(t2.offset * m + u + " " + t2.color);
          }
          b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k2, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />');
        } else e instanceof I ? k2 && n && b.push("<g_vml_:fill", ' position="', -c.x / k2 * f * f, ",", -c.y / n * d2 * d2, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'));
      }
      function s(a, b, c) {
        a = a.m_;
        return {
          x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
          y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r
        };
      }
      function z(a, b, c) {
        isFinite(b[0][0]) && isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1]) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] * b[1][0]))));
      }
      function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = [];
      }
      function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
        switch (b) {
          case "repeat":
          case null:
          case "":
            this.repetition_ = "repeat";
            break;
          case "repeat-x":
          case "repeat-y":
          case "no-repeat":
            this.repetition_ = b;
            break;
          default:
            throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height;
      }
      function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code;
      }
      var x = Math, k = x.round, J = x.sin, K = x.cos, ba = x.abs, aa = x.sqrt, q = 10, r = q / 2;
      navigator.userAgent.match(/MSIE ([\d.]+)?/);
      var M = Array.prototype.slice;
      O(document);
      var U = {
        init: function(a) {
          a = a || document;
          a.createElement("canvas");
          a.attachEvent("onreadystatechange", W(this.init_, this, a));
        },
        init_: function(a) {
          a = a.getElementsByTagName("canvas");
          for (var b = 0; b < a.length; b++) this.initElement(a[b]);
        },
        initElement: function(a) {
          if (!a.getContext) {
            a.getContext = V;
            O(a.ownerDocument);
            a.innerHTML = "";
            a.attachEvent("onpropertychange", X);
            a.attachEvent("onresize", Y);
            var b = a.attributes;
            b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
            b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight;
          }
          return a;
        }
      };
      U.init();
      for (var v = [], d = 0; 16 > d; d++) for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
      var Z = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32"
      }, H = {}, L = {}, $ = {
        butt: "flat",
        round: "round"
      }, d = C.prototype;
      d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(true), this.textMeasureEl_ = null);
        this.element_.innerHTML = "";
      };
      d.beginPath = function() {
        this.currentPath_ = [];
      };
      d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
          type: "moveTo",
          x: c.x,
          y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y;
      };
      d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
          type: "lineTo",
          x: c.x,
          y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y;
      };
      d.bezierCurveTo = function(a, b, c, g, e, f) {
        e = s(this, e, f);
        a = s(this, a, b);
        c = s(this, c, g);
        R(this, a, c, e);
      };
      d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = {
          x: this.currentX_ + 2 / 3 * (a.x - this.currentX_),
          y: this.currentY_ + 2 / 3 * (a.y - this.currentY_)
        };
        R(this, g, {
          x: g.x + (c.x - this.currentX_) / 3,
          y: g.y + (c.y - this.currentY_) / 3
        }, c);
      };
      d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d2 = f ? "at" : "wa", k2 = a + K(g) * c - r, n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k2 != g || f || (k2 += 0.125);
        a = s(this, a, b);
        k2 = s(this, k2, n);
        g = s(this, g, e);
        this.currentPath_.push({
          type: d2,
          x: a.x,
          y: a.y,
          radius: c,
          xStart: k2.x,
          yStart: k2.y,
          xEnd: g.x,
          yEnd: g.y
        });
      };
      d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
      };
      d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e;
      };
      d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e;
      };
      d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e;
      };
      d.createRadialGradient = function(a, b, c, g, e, f) {
        var d2 = new w("gradientradial");
        d2.x0_ = a;
        d2.y0_ = b;
        d2.r0_ = c;
        d2.x1_ = g;
        d2.y1_ = e;
        d2.r1_ = f;
        return d2;
      };
      d.drawImage = function(a, b) {
        var c, g, e, d2, r2, y, n, h;
        e = a.runtimeStyle.width;
        d2 = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width, u = a.height;
        a.runtimeStyle.width = e;
        a.runtimeStyle.height = d2;
        if (3 == arguments.length) c = arguments[1], g = arguments[2], r2 = y = 0, n = e = l, h = d2 = u;
        else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d2 = arguments[4], r2 = y = 0, n = l, h = u;
        else if (9 == arguments.length) r2 = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d2 = arguments[8];
        else throw Error("Invalid number of arguments");
        var m = s(this, c, g), p = [];
        p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:', 10, "px;height:", 10, "px;position:absolute;");
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
          var t2 = [];
          t2.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
          var v2 = s(this, c + e, g), w2 = s(this, c, g + d2);
          c = s(this, c + e, g + d2);
          m.x = x.max(m.x, v2.x, w2.x, c.x);
          m.y = x.max(m.y, v2.y, w2.y, c.y);
          p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t2.join(""), ", sizingmethod='clip');");
        } else p.push("top:", k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d2, 'px"', ' cropleft="', r2 / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r2 - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""));
      };
      d.stroke = function(a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"', ' stroked="', !a, '"', ' path="');
        for (var c = {
          x: null,
          y: null
        }, d2 = {
          x: null,
          y: null
        }, e = 0; e < this.currentPath_.length; e++) {
          var f = this.currentPath_[e];
          switch (f.type) {
            case "moveTo":
              b.push(" m ", k(f.x), ",", k(f.y));
              break;
            case "lineTo":
              b.push(" l ", k(f.x), ",", k(f.y));
              break;
            case "close":
              b.push(" x ");
              f = null;
              break;
            case "bezierCurveTo":
              b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
              break;
            case "at":
            case "wa":
              b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ * f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd));
          }
          if (f) {
            if (null == c.x || f.x < c.x) c.x = f.x;
            if (null == d2.x || f.x > d2.x) d2.x = f.x;
            if (null == c.y || f.y < c.y) c.y = f.y;
            if (null == d2.y || f.y > d2.y) d2.y = f.y;
          }
        }
        b.push(' ">');
        a ? T(this, b, c, d2) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""));
      };
      d.fill = function() {
        this.stroke(true);
      };
      d.closePath = function() {
        this.currentPath_.push({
          type: "close"
        });
      };
      d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_);
      };
      d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop());
      };
      d.translate = function(a, b) {
        z(this, t([[1, 0, 0], [0, 1, 0], [a, b, 1]], this.m_), false);
      };
      d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([[b, a, 0], [-a, b, 0], [0, 0, 1]], this.m_), false);
      };
      d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([[a, 0, 0], [0, b, 0], [0, 0, 1]], this.m_), true);
      };
      d.transform = function(a, b, c, d2, e, f) {
        z(this, t([[a, b, 0], [c, d2, 0], [e, f, 1]], this.m_), true);
      };
      d.setTransform = function(a, b, c, d2, e, f) {
        z(this, [[a, b, 0], [c, d2, 0], [e, f, 1]], true);
      };
      d.drawText_ = function(a, b, c, d2, e) {
        var f = this.m_;
        d2 = 0;
        var r2 = 1e3, t2 = 0, n = [], h;
        h = this.font;
        if (L[h]) h = L[h];
        else {
          var l = document.createElement("div").style;
          try {
            l.font = h;
          } catch (u) {
          }
          h = L[h] = {
            style: l.fontStyle || "normal",
            variant: l.fontVariant || "normal",
            weight: l.fontWeight || "normal",
            size: l.fontSize || 10,
            family: l.fontFamily || "sans-serif"
          };
        }
        var l = h, m = this.element_;
        h = {};
        for (var p in l) h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
          case "left":
          case "center":
          case "right":
            break;
          case "end":
            l = "ltr" == m.direction ? "right" : "left";
            break;
          case "start":
            l = "rtl" == m.direction ? "right" : "left";
            break;
          default:
            l = "left";
        }
        switch (this.textBaseline) {
          case "hanging":
          case "top":
            t2 = h.size / 1.75;
            break;
          case "middle":
            break;
          default:
          case null:
          case "alphabetic":
          case "ideographic":
          case "bottom":
            t2 = -h.size / 2.25;
        }
        switch (l) {
          case "right":
            d2 = 1e3;
            r2 = 0.05;
            break;
          case "center":
            d2 = r2 = 500;
        }
        b = s(this, b + 0, c + t2);
        n.push('<g_vml_:line from="', -d2, ' 0" to="', r2, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(this, n, {
          x: -d2,
          y: 0
        }, {
          x: r2,
          y: h.size
        });
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d2, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""));
      };
      d.fillText = function(a, b, c, d2) {
        this.drawText_(a, b, c, d2, false);
      };
      d.strokeText = function(a, b, c, d2) {
        this.drawText_(a, b, c, d2, true);
      };
      d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return {
          width: this.textMeasureEl_.offsetWidth
        };
      };
      d.clip = function() {
      };
      d.arcTo = function() {
      };
      d.createPattern = function(a, b) {
        return new I(a, b);
      };
      w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({
          offset: a,
          color: b.color,
          alpha: b.alpha
        });
      };
      d = A.prototype = Error();
      d.INDEX_SIZE_ERR = 1;
      d.DOMSTRING_SIZE_ERR = 2;
      d.HIERARCHY_REQUEST_ERR = 3;
      d.WRONG_DOCUMENT_ERR = 4;
      d.INVALID_CHARACTER_ERR = 5;
      d.NO_DATA_ALLOWED_ERR = 6;
      d.NO_MODIFICATION_ALLOWED_ERR = 7;
      d.NOT_FOUND_ERR = 8;
      d.NOT_SUPPORTED_ERR = 9;
      d.INUSE_ATTRIBUTE_ERR = 10;
      d.INVALID_STATE_ERR = 11;
      d.SYNTAX_ERR = 12;
      d.INVALID_MODIFICATION_ERR = 13;
      d.NAMESPACE_ERR = 14;
      d.INVALID_ACCESS_ERR = 15;
      d.VALIDATION_ERR = 16;
      d.TYPE_MISMATCH_ERR = 17;
      G_vmlCanvasManager = U;
      CanvasRenderingContext2D = C;
      CanvasGradient = w;
      CanvasPattern = I;
      DOMException = A;
    }();
  }
});

// node_modules/@canvasjs/angular-charts/fesm2015/canvasjs-angular-charts.js
function CanvasJSChart_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r0.chartContainerId);
    ɵɵproperty("ngStyle", ctx_r0.styles);
  }
}
if (typeof document === "object" && !!document) {
  CanvasJS = require_canvasjs_min();
}
var CanvasJS;
var CanvasJSChart = class _CanvasJSChart {
  constructor() {
    this.shouldUpdateChart = false;
    this.isDOMPresent = typeof document === "object" && !!document;
    this.chartInstance = new EventEmitter();
    this.options = this.options ? this.options : {};
    this.styles = this.styles ? this.styles : {
      width: "100%",
      position: "relative"
    };
    this.styles.height = this.options.height ? this.options.height + "px" : "400px";
    this.chartContainerId = "canvasjs-angular-chart-container-" + _CanvasJSChart._cjsChartContainerId++;
  }
  ngDoCheck() {
    if (this.prevChartOptions != this.options) {
      this.shouldUpdateChart = true;
    }
  }
  ngOnChanges() {
    if (this.shouldUpdateChart && this.chart) {
      this.chart.options = this.options;
      this.chart.render();
      this.shouldUpdateChart = false;
      this.prevChartOptions = this.options;
    }
  }
  ngAfterViewInit() {
    if (this.isDOMPresent) {
      this.chart = new CanvasJS.Chart(this.chartContainerId, this.options);
      this.chart.render();
      this.prevChartOptions = this.options;
      this.chartInstance.emit(this.chart);
    }
  }
  ngOnDestroy() {
    if (this.chart) this.chart.destroy();
  }
};
CanvasJSChart._cjsChartContainerId = 0;
CanvasJSChart.ɵfac = function CanvasJSChart_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CanvasJSChart)();
};
CanvasJSChart.ɵcmp = ɵɵdefineComponent({
  type: CanvasJSChart,
  selectors: [["canvasjs-chart"]],
  inputs: {
    options: "options",
    styles: "styles"
  },
  outputs: {
    chartInstance: "chartInstance"
  },
  standalone: false,
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"]],
  template: function CanvasJSChart_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CanvasJSChart_div_0_Template, 1, 2, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.isDOMPresent);
    }
  },
  dependencies: [NgIf, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasJSChart, [{
    type: Component,
    args: [{
      selector: "canvasjs-chart",
      template: '<div *ngIf="isDOMPresent" id="{{chartContainerId}}" [ngStyle]="styles"></div>'
    }]
  }], function() {
    return [];
  }, {
    options: [{
      type: Input
    }],
    styles: [{
      type: Input
    }],
    chartInstance: [{
      type: Output
    }]
  });
})();
var CanvasJSAngularChartsModule = class {
};
CanvasJSAngularChartsModule.ɵfac = function CanvasJSAngularChartsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CanvasJSAngularChartsModule)();
};
CanvasJSAngularChartsModule.ɵmod = ɵɵdefineNgModule({
  type: CanvasJSAngularChartsModule,
  declarations: [CanvasJSChart],
  imports: [CommonModule],
  exports: [CanvasJSChart]
});
CanvasJSAngularChartsModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasJSAngularChartsModule, [{
    type: NgModule,
    args: [{
      declarations: [CanvasJSChart],
      imports: [CommonModule],
      exports: [CanvasJSChart]
    }]
  }], null, null);
})();
export {
  CanvasJS,
  CanvasJSAngularChartsModule,
  CanvasJSChart
};
//# sourceMappingURL=@canvasjs_angular-charts.js.map
