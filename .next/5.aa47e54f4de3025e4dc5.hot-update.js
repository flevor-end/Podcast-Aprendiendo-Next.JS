webpackHotUpdate(5,{

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__("./node_modules/nprogress/nprogress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
var _jsxFileName = "C:\\Users\\fabian\\CursosPlatzi\\Curso-NextJs\\platzi-nextjs-1.Router\\components\\Layout.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






__WEBPACK_IMPORTED_MODULE_5_next_router__["Router"].onRouteChangeStart = function (url) {
  __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.start();
};

__WEBPACK_IMPORTED_MODULE_5_next_router__["Router"].events.on('routeChangeStart', function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.start();
});
__WEBPACK_IMPORTED_MODULE_5_next_router__["Router"].events.on('routeChangeComplete', function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
});
__WEBPACK_IMPORTED_MODULE_5_next_router__["Router"].events.on('routeChangeError', function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
});

var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-96192552"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-96192552"
      }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-96192552"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-96192552"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-96192552"
      }, "Podcasts"))), children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1799716260",
        css: "header.jsx-96192552{color:#fff;background:#8756ca;padding:15px;text-align:center;}header.jsx-96192552 a.jsx-96192552{color:#fff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmtCLEFBR3dCLEFBTUEsV0FMUSxBQU1FLG1CQUxSLGFBQ0ssa0JBQ3RCLEFBSUEiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcZmFiaWFuXFxDdXJzb3NQbGF0emlcXEN1cnNvLU5leHRKc1xccGxhdHppLW5leHRqcy0xLlJvdXRlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKHVybCkgPT4ge1xyXG4gIE5Qcm9ncmVzcy5zdGFydCgpXHJcbn1cclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpICk7XHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpICk7XHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpICk7IFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdGl0bGUgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoXCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8aGVhZGVyPjxMaW5rIGhyZWY9XCIvXCI+PGE+UG9kY2FzdHM8L2E+PC9MaW5rPjwvaGVhZGVyPlxyXG5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVhZGVyIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIE1ha2UgY2xpY2tzIHBhc3MtdGhyb3VnaCAqL1xyXG4gICAgICAgICNucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbnByb2dyZXNzIC5iYXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzI5ZDtcclxuXHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDMxO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogRmFuY3kgYmx1ciBlZmZlY3QgKi9cclxuICAgICAgICAjbnByb2dyZXNzIC5wZWcge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzI5ZCwgMCAwIDVweCAjMjlkO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xyXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBSZW1vdmUgdGhlc2UgdG8gZ2V0IHJpZCBvZiB0aGUgc3Bpbm5lciAqL1xyXG4gICAgICAgICNucHJvZ3Jlc3MgLnNwaW5uZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDMxO1xyXG4gICAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyLWljb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzI5ZDtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjlkO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICBhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLnNwaW5uZXIsXHJcbiAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbn0iXX0= */\n/*@ sourceURL=components\\Layout.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "4253796869",
        css: "body{margin:0;font-family:system-ui;background:white;}#nprogress{pointer-events:none;}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}.nprogress-custom-parent{overflow:hidden;position:relative;}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q3lCLEFBR3NCLEFBT1MsQUFJSixBQWFGLEFBZUEsQUFRSCxBQWNLLEFBTUUsQUFLZSxBQUdFLEFBS1YsQUFHRSxTQWxGSCxFQStDWixHQXZCTSxBQWVILEVBM0JBLEFBaURHLEVBTXBCLEVBNURBLEdBeUN3QixNQVJULEVBdkNNLEFBWU4sQUEyRGIsQ0EvQ1UsQ0FrRFYsQ0FiRixRQXBDYyxBQWVILEVBM0JILENBb0N1QixHQWhEL0IsRUFhUyxDQTJCSSxHQWZDLEdBVkQsS0EwQmIsSUFmeUMsRUFWNUIsTUFpQ1csS0FoQ3hCLEVBNkRFLE1BR0EsU0EvQnVCLFFBdkJiLFVBRTBDLEtBc0JsQyxrQkFFd0MsNEJBdkJWLDhCQXdCRSxpQkF2Qk4sMkZBd0I5QyxrREF2QkEiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcZmFiaWFuXFxDdXJzb3NQbGF0emlcXEN1cnNvLU5leHRKc1xccGxhdHppLW5leHRqcy0xLlJvdXRlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKHVybCkgPT4ge1xyXG4gIE5Qcm9ncmVzcy5zdGFydCgpXHJcbn1cclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpICk7XHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpICk7XHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpICk7IFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdGl0bGUgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoXCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8aGVhZGVyPjxMaW5rIGhyZWY9XCIvXCI+PGE+UG9kY2FzdHM8L2E+PC9MaW5rPjwvaGVhZGVyPlxyXG5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVhZGVyIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIE1ha2UgY2xpY2tzIHBhc3MtdGhyb3VnaCAqL1xyXG4gICAgICAgICNucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbnByb2dyZXNzIC5iYXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzI5ZDtcclxuXHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDMxO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogRmFuY3kgYmx1ciBlZmZlY3QgKi9cclxuICAgICAgICAjbnByb2dyZXNzIC5wZWcge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzI5ZCwgMCAwIDVweCAjMjlkO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xyXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBSZW1vdmUgdGhlc2UgdG8gZ2V0IHJpZCBvZiB0aGUgc3Bpbm5lciAqL1xyXG4gICAgICAgICNucHJvZ3Jlc3MgLnNwaW5uZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDMxO1xyXG4gICAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyLWljb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzI5ZDtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjlkO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICBhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLnNwaW5uZXIsXHJcbiAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbn0iXX0= */\n/*@ sourceURL=components\\Layout.js */"
      }));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=5.aa47e54f4de3025e4dc5.hot-update.js.map