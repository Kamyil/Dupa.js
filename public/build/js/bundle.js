/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/scss/main.scss":
/*!**********************************!*\
  !*** ./resources/scss/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./resources/typescript/Components/App.tsx":
/*!*************************************************!*\
  !*** ./resources/typescript/Components/App.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.App = () => /*#__PURE__*/React.createElement("div", null, "I work!");

/***/ }),

/***/ "./resources/typescript/main.ts":
/*!**************************************!*\
  !*** ./resources/typescript/main.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_23pcvfrnv2=function(){var path="/Users/kamyil/Desktop/MyProjects/Izi/resources/typescript/main.ts",hash="50ddbcb09f99e6f0d7226a75698a22966da3fb56",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/kamyil/Desktop/MyProjects/Izi/resources/typescript/main.ts",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:14},end:{line:7,column:41}},"2":{start:{line:9,column:12},end:{line:21,column:1}},"3":{start:{line:10,column:18},end:{line:10,column:46}},"4":{start:{line:11,column:2},end:{line:19,column:5}},"5":{start:{line:12,column:4},end:{line:18,column:5}},"6":{start:{line:13,column:6},end:{line:15,column:9}},"7":{start:{line:14,column:8},end:{line:14,column:55}},"8":{start:{line:17,column:6},end:{line:17,column:32}},"9":{start:{line:20,column:2},end:{line:20,column:17}},"10":{start:{line:23,column:0},end:{line:23,column:57}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:9,column:12},end:{line:9,column:13}},loc:{start:{line:9,column:42},end:{line:21,column:1}},line:9},"1":{name:"(anonymous_1)",decl:{start:{line:11,column:35},end:{line:11,column:36}},loc:{start:{line:11,column:42},end:{line:19,column:3}},line:11},"2":{name:"(anonymous_2)",decl:{start:{line:13,column:38},end:{line:13,column:39}},loc:{start:{line:13,column:50},end:{line:15,column:7}},line:13}},branchMap:{"0":{loc:{start:{line:11,column:14},end:{line:11,column:25}},type:"binary-expr",locations:[{start:{line:11,column:14},end:{line:11,column:19}},{start:{line:11,column:23},end:{line:11,column:25}}],line:11},"1":{loc:{start:{line:12,column:4},end:{line:18,column:5}},type:"if",locations:[{start:{line:12,column:4},end:{line:18,column:5}},{start:{line:12,column:4},end:{line:18,column:5}}],line:12}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},f:{"0":0,"1":0,"2":0},b:{"0":[0,0],"1":[0,0]},inputSourceMap:{version:3,sources:["resources/typescript/main.ts"],names:[],mappings:";;;;;;AAEA,MAAA,KAAA,GAAA,OAAA,CAAA,kBAAA,CAAA;;AAGA,MAAM,GAAG,GAAG,CAAC,IAAD,EAAO,KAAP,EAAc,GAAG,QAAjB,KAA6B;AACvC,QAAM,OAAO,GAAG,QAAQ,CAAC,aAAT,CAAuB,IAAvB,CAAhB;AAEA,EAAA,MAAM,CAAC,IAAP,CAAY,KAAK,IAAI,EAArB,EAAyB,OAAzB,CAAiC,GAAG,IAAG;AACrC,QAAI,GAAG,KAAK,OAAZ,EAAqB;AACnB,MAAA,MAAM,CAAC,IAAP,CAAY,KAAK,CAAC,GAAD,CAAjB,EAAwB,OAAxB,CAAgC,QAAQ,IAAG;AACzC,QAAA,OAAO,CAAC,KAAR,CAAc,QAAd,IAA0B,KAAK,CAAC,GAAD,CAAL,CAAW,QAAX,CAA1B;AACD,OAFD;AAGD,KAJD,MAIO;AACL,MAAA,OAAO,CAAC,GAAD,CAAP,GAAe,KAAK,CAAC,GAAD,CAApB;AACD;AACF,GARD;AAUA,SAAO,OAAP;AACD,CAdD;;AAgBA,QAAQ,CAAC,cAAT,CAAwB,MAAxB,EAAgC,WAAhC,CAA4C,KAAA,CAAA,GAAA,EAA5C",sourcesContent:["\nimport Dupa, { Component } from \"./Dupa\";\nimport { App } from './Components/App';\n\n/** @jsx dom */\nconst dom = (name, props, ...children) => {\n  const element = document.createElement(name);\n\n  Object.keys(props || {}).forEach(key => {\n    if (key === 'style') {\n      Object.keys(props[key]).forEach(styleKey => {\n        element.style[styleKey] = props[key][styleKey];\n      });\n    } else {\n      element[key] = props[key];\n    }\n  });\n\n  return element;\n}\n\ndocument.getElementById('root').appendChild(App());"],sourceRoot:"/Users/kamyil/Desktop/MyProjects/Izi/",file:"/Users/kamyil/Desktop/MyProjects/Izi/resources/typescript/main.ts"},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_23pcvfrnv2.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});const App_1=(cov_23pcvfrnv2.s[1]++,__webpack_require__(/*! ./Components/App */ "./resources/typescript/Components/App.tsx"));cov_23pcvfrnv2.s[2]++;const dom=(name,props,...children)=>{cov_23pcvfrnv2.f[0]++;const element=(cov_23pcvfrnv2.s[3]++,document.createElement(name));cov_23pcvfrnv2.s[4]++;Object.keys((cov_23pcvfrnv2.b[0][0]++,props)||(cov_23pcvfrnv2.b[0][1]++,{})).forEach(key=>{cov_23pcvfrnv2.f[1]++;cov_23pcvfrnv2.s[5]++;if(key==='style'){cov_23pcvfrnv2.b[1][0]++;cov_23pcvfrnv2.s[6]++;Object.keys(props[key]).forEach(styleKey=>{cov_23pcvfrnv2.f[2]++;cov_23pcvfrnv2.s[7]++;element.style[styleKey]=props[key][styleKey];});}else{cov_23pcvfrnv2.b[1][1]++;cov_23pcvfrnv2.s[8]++;element[key]=props[key];}});cov_23pcvfrnv2.s[9]++;return element;};cov_23pcvfrnv2.s[10]++;document.getElementById('root').appendChild(App_1.App());

/***/ }),

/***/ 0:
/*!***********************************************************************!*\
  !*** multi ./resources/typescript/main.ts ./resources/scss/main.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./resources/typescript/main.ts */"./resources/typescript/main.ts");
module.exports = __webpack_require__(/*! ./resources/scss/main.scss */"./resources/scss/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map