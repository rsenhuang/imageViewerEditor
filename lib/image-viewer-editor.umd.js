(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["image-viewer-editor"] = factory(require("vue"));
	else
		root["image-viewer-editor"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "31fc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6f06":
/***/ (function(module, exports) {

!function(c){var l,t,a,i,e,o,h='<svg><symbol id="icon-jiazai" viewBox="0 0 1024 1024"><path d="M748.5 852.3c9.5 16.1 4.1 37.5-12.4 46.6-16.5 9.5-37.2 3.9-46.6-12.4-10-16.1-4.1-37.1 12-46.6 16.9-9.6 37.5-3.7 47 12.4zM546.7 925c0 18.6-15.5 34.2-34.7 34.2-18.7 0-34.3-15.1-34.3-34.2v-24c0-19.1 15.7-34.2 34.3-34.2 19.1 0 34.7 15.1 34.7 34.2v24z m-211.6-38.5c-9.9 16.9-30.8 22.3-47 12.7-16.7-9.3-22.5-30.3-12.8-46.8l25.6-44.5c9.8-16.4 30.8-22 47.4-12.7 16.3 9.5 22.1 30.7 12.3 46.8l-25.5 44.5z m-164-138.3c-16.7 9.3-38 3.7-47.1-12.7-9.8-16.1-4.3-37.3 12.2-46.8l68.6-39.6c16.4-9 37.7-3.9 47 12.7 9.3 16.1 3.8 37.3-12.8 47l-67.9 39.4zM98.2 546.3C79.1 546.3 64 531 64 512.2c0-19.1 15.1-34.4 34.2-34.4H205c19.1 0 34.3 15.4 34.3 34.2 0 19.1-15.2 34.4-34.3 34.4 0-0.1-106.8-0.1-106.8-0.1z m38.2-211.2c-16.7-9.3-22-30.3-12.2-46.6 9.1-16.6 30.4-22.2 47.1-12.7l116 67.1c16.5 9.3 21.9 30.3 12.8 46.4-9.9 16.7-30.9 22.1-47.1 12.7-0.1 0-116.6-66.9-116.6-66.9z m139-163.6l80.7 139.9c9.9 16.4 30.8 22.2 47.3 12.4 16.5-9.3 21.7-30.5 12.2-46.8l-81-139.6c-9.3-16.1-30.4-22-46.5-12.4-16.7 9.4-22 30.5-12.7 46.5z m202.1-72.3c0-18.5 15.7-34.4 34.3-34.4 19.1 0 34.7 15.4 34.7 34.4v161.2c0 19.1-15.5 34.4-34.7 34.6-18.7 0-34.3-15.1-34.3-34.6V99.2zM689 137.3c9.9-16.6 30.6-22 47.1-12.7 16.7 9.3 22.5 30.3 12.7 46.8l-81 139.9c-9 16.4-30.6 22.2-46.8 12.7-16.5-9.5-21.9-30.7-12.6-47.2L689 137.3z m164.5 138.5l-140.4 80.8c-16.5 9.3-22.1 30.3-12.8 46.8 9.9 16.1 30.9 21.5 47.1 12.4L887.9 335c16.1-9.3 22-30.3 12.2-46.6-9.2-16.5-30.4-22.4-46.6-12.6z m72.2 201.9c19.3 0 34.5 15.4 34.3 34.4 0 18.8-15 34.2-34.3 34.2H764c-18.6 0-34.3-15.4-34.3-34.4 0-18.8 15.7-34.2 34.3-34.2h161.7z"  ></path></symbol><symbol id="icon-jinzhi" viewBox="0 0 1024 1024"><path d="M512 118.25c217.4625 0 393.75 176.2875 393.75 393.75S729.4625 905.75 512 905.75 118.25 729.4625 118.25 512 294.5375 118.25 512 118.25zM178.015625 512c0 184.45429688 149.53007812 333.984375 333.984375 333.984375 81.49306641 0 156.16933594-29.18759766 214.14550781-77.67773438L256.22597656 297.21992188C207.41503906 355.28574219 178.015625 430.20898437 178.015625 512z m333.984375-333.984375c-81.14501953 0-155.53125 28.93798828-213.40107422 77.05722656l469.79824219 470.96279297C816.83369141 668.07617188 845.984375 593.44208984 845.984375 512c0-184.45429688-149.53007812-333.984375-333.984375-333.984375z" fill="#d81e06" ></path></symbol><symbol id="icon-yulan" viewBox="0 0 1024 1024"><path d="M502.36 310.54666667c-115.98 0-210 94.02-210 210s94.02 210 210 210 210-94.02 210-210S618.34 310.54666667 502.36 310.54666667zM502.36 670.54666667c-82.86 0-150-67.14-150-150s67.14-150 150-150 150 67.14 150 150S585.22 670.54666667 502.36 670.54666667zM918.34 415.00666667c-101.58-137.34-250.26-224.16-416.28-224.16S187.42 277.66666667 85.84 415.00666667c-44.88 60.66-44.88 150.78 0 211.38 101.58 137.34 250.26 224.16 416.28 224.16s314.64-86.82 416.28-224.16C963.22 565.78666667 963.22 475.66666667 918.34 415.00666667zM873.22 576.64666667C779.02 712.60666667 643.36 790.66666667 501.04 790.66666667c-142.2 0-277.86-78.06-372.12-213.96-22.44-32.4-22.44-79.44 0-111.84 94.26-136.02 229.92-213.96 372.12-213.96 142.32 0 277.98 78 372.18 213.96C895.66 497.20666667 895.66 544.30666667 873.22 576.64666667z"  ></path></symbol><symbol id="icon-guanbi" viewBox="0 0 1024 1024"><path d="M561.3125 512.1875l244.6875-242.90625 0.09375-0.09375c13.59375-13.59375 13.59375-35.625 0.09375-49.21875-13.59375-13.6875-35.625-13.78125-49.3125-0.1875l-244.6875 242.90625-242.90625-244.6875c-13.59375-13.6875-35.625-13.78125-49.3125-0.1875-13.6875 13.59375-13.78125 35.625-0.1875 49.3125l242.90625 244.6875-244.6875 242.90625-0.09375 0.09375c-13.59375 13.59375-13.59375 35.625-0.09375 49.21875 13.59375 13.6875 35.625 13.78125 49.3125 0.1875l244.6875-242.90625 242.90625 244.6875c13.59375 13.6875 35.625 13.78125 49.3125 0.1875l0.09375-0.09375c13.59375-13.59375 13.59375-35.625 0.09375-49.21875l-242.90625-244.6875z"  ></path></symbol><symbol id="icon-huabi1" viewBox="0 0 1024 1024"><path d="M691.79489493 414.53470507L382.54689493 783.09668587a12.81462827 12.81462827 0 0 1-5.8124192 3.92045653l-93.6423616 31.05158187a12.83413333 12.83413333 0 0 1-16.77409493-14.04342934l14.31649493-97.62133333a12.79512427 12.79512427 0 0 1 2.8672-6.3975616l309.26750507-368.5619808a12.8536384 12.8536384 0 0 1 18.1004192-1.57988587l79.34537067 66.56975254a12.8536384 12.8536384 0 0 1 1.57988586 18.1004192z m102.00990507-121.5731808l-45.17302827 53.8331424a12.8536384 12.8536384 0 0 1-18.11992426 1.59939093l-79.34537174-66.5892576a12.8536384 12.8536384 0 0 1-1.5603808-18.1004192l45.17302934-53.8331424a12.8536384 12.8536384 0 0 1 18.10041813-1.59939093l79.34537173 66.5892576c5.44182827 4.54460907 6.144 12.65859093 1.57988587 18.1004192z" fill="#d81e06" ></path></symbol><symbol id="icon-fangda" viewBox="0 0 1024 1024"><path d="M752 473.33333333a300 300 0 1 0-300 300 300 300 0 0 0 300-300z m60 0A360 360 0 1 1 452 113.33333333a360 360 0 0 1 360 360z" fill="#515151" ></path><path d="M670.7 734.63333333a30 30 0 0 1 42.6-42.6l150 150a30 30 0 0 1-42.6 42.6zM332 503.33333333a30 30 0 0 1 0-60h240a30 30 0 0 1 0 60z" fill="#515151" ></path><path d="M482 593.33333333a30 30 0 0 1-60 0V353.33333333a30 30 0 0 1 60 0z" fill="#515151" ></path></symbol><symbol id="icon-zoomOut" viewBox="0 0 1024 1024"><path d="M622.88 444.32H342.56c-15.36 0-27.84 13.44-27.84 29.76 0 16.8 12.48 30.24 27.84 30.24h280.32c15.36 0 27.84-13.44 27.84-29.76 0-16.32-12.48-29.76-27.84-30.24z" fill="#515151" ></path><path d="M903.2 857.6l-155.04-155.04 2.4-2.88c53.28-62.88 82.08-143.04 82.08-225.12 0-192.96-156.96-350.4-350.4-350.4-192.96 0-350.4 156.96-350.4 350.4 0 192.96 156.96 350.4 350.4 350.4 79.68 0 157.92-27.84 219.84-78.24l2.88-2.4 155.52 155.52c6.24 6.24 14.4 9.12 22.08 8.64h0.96c15.36 0 27.84-12.48 27.84-27.84v-0.48c0.96-8.16-1.92-16.32-8.16-22.56z m-420.48-92.16c-160.32 0-290.88-130.56-290.88-290.88 0-160.32 130.56-290.88 290.88-290.88 160.32 0 290.88 130.56 290.88 290.88 0 160.32-130.56 290.88-290.88 290.88z" fill="#515151" ></path></symbol><symbol id="icon-caijian1" viewBox="0 0 1024 1024"><path d="M874.54882787 841.589844h-32.95898387v32.95898387a32.95898463 32.95898463 0 0 1-65.91796925 0v-32.95898387H314.24609375a131.83593775 131.83593775 0 0 1-131.83593775-131.83593775V248.32812525H149.45117213a32.95898463 32.95898463 0 0 1 0-65.91796925h32.95898387V149.45117213a32.95898463 32.95898463 0 0 1 65.91796925 0v32.95898387h362.54882788a32.95898463 32.95898463 0 0 1 0 65.91796925H248.32812525v461.425781c0 5.86669947 1.02172877 11.43676732 2.43896459 16.84204127L792.90942383 184.48657201C806.91699193 170.47900391 828.70288086 169.52319361 841.589844 182.410156s11.93115209 34.67285131-2.07641601 48.68042017L297.40405248 773.23291016c5.40527318 1.41723658 10.9753418 2.43896459 16.84204127 2.43896459h461.425781V446.0820315a32.95898463 32.95898463 0 0 1 65.91796925 0v329.58984325h32.95898387a32.95898463 32.95898463 0 0 1 0 65.91796925z" fill="#515151" ></path></symbol><symbol id="icon-chehui" viewBox="0 0 1024 1024"><path d="M237.303467 377.216l113.152 106.026667c16.584533 16.763733 33.6512 43.933867 17.066666 60.693333-16.597333 16.759467-39.227733 16.759467-55.816533 0L138.368 368.3968c-13.162667-13.2608-14.122667-34.491733-0.96-47.752533l174.301867-178.2784c16.5888-16.759467 39.223467-16.759467 55.812266 0s-0.477867 43.933867-17.066666 60.689066L238.775467 313.216h380.881066c153.211733 0 276.343467 132.881067 276.343467 285.738667 0 152.853333-123.136 298.845867-276.343467 298.845866H213.457067c-23.317333 0-42.88-10.824533-42.88-34.133333 0-23.313067 19.562667-29.870933 42.88-29.870933h402.816c102.762667 0 215.714133-132.322133 215.714133-234.845867s-112.951467-221.725867-215.714133-221.725867H237.303467z" fill="#515151" ></path></symbol><symbol id="icon-baocun" viewBox="0 0 1024 1024"><path d="M632.36 128a96 96 0 0 1 68.25 28.5l167.64 169.41a96 96 0 0 1 27.75 67.53V836a60 60 0 0 1-60 60H188a60 60 0 0 1-60-60V188a60 60 0 0 1 60-60h444.36z m0 60H188v648h132v-257.49V574.01a30 30 0 0 1 30-30h324a30 30 0 0 1 30 30v3.99l-0.03 0.51V836H836V393.44a36 36 0 0 0-7.74-22.29l-2.67-3.03-167.64-169.44a36 36 0 0 0-25.59-10.68z m7.62 420h-255.99v228h255.99v-228zM386 302c3.3 0 6 2.7 6 6v48a6 6 0 0 1-6 6H278a6 6 0 0 1-6-6V308c0-3.3 2.7-6 6-6h108z" fill="#515151" ></path></symbol><symbol id="icon-wenzi" viewBox="0 0 1024 1024"><path d="M783.93422832 890.45170948h-6.48280459c-19.75510635 0-37.43082158-12.27577675-44.32914492-30.7879251l-54.26021162-145.60857774c-6.89832334-18.51214834-24.57313945-30.78792598-44.32914492-30.78792597H385.72291602c-20.08158487 0-37.97495333 12.67870342-44.63223927 31.6252582l-50.57271211 143.9348124c-6.65728594 18.94655391-24.5506544 31.6252582-44.63223925 31.62525821h-5.81905459c-33.13263604 0-56.00143125-33.18120352-44.20862666-64.14450997L448.09922481 164.01333536c6.9873627-18.34576172 24.57763594-30.46954131 44.20862665-30.46954219h39.38429708c19.63098984 0 37.22216308 12.12378047 44.20862666 30.46954219l252.24118066 662.29386415c11.79370372 30.96330644-11.07509151 64.14450997-44.20772753 64.14450996zM496.36410137 283.06831572L405.81709209 534.41460283c-11.10656953 30.82929785 11.73794151 63.34045489 44.50722363 63.34045488h119.2474503c32.82414521 0 55.6722545-32.61188935 44.46225527-63.46277226L522.75041123 283.06831572a29.02332217 29.02332217 0 0 1-0.1591919-0.45958887c-4.35214951-12.86937422-22.5908833-12.63013682-26.22711797 0.45958888z" fill="#515151" ></path><path d="M783.9333292 904.61530654h-6.48550283c-25.5282917 0-48.66420586-16.0765998-57.58435811-40.00757431L665.58436982 718.99555713c-4.79824717-12.89545664-17.28627979-21.56647763-31.04605107-21.56647763H385.7274125c-14.05027354 0-26.62105078 8.90576191-31.28079112 22.16097422l-50.57271211 143.93211415c-8.62964912 24.57403857-31.93105078 41.09313867-57.98458651 41.09313867h-5.82175284a61.47152227 61.47152227 0 0 1-50.6140831-26.59316923 61.45353458 61.45353458 0 0 1-6.83176817-56.75422061L434.86199932 158.9695543C443.87838653 135.29400664 466.9594376 119.38379346 492.30785146 119.38379346h39.38519708c25.34841387 0 48.42946494 15.91021318 57.44585126 39.58576084L841.37918135 821.2679167a61.45353458 61.45353458 0 0 1-6.83176817 56.7542206 61.47152227 61.47152227 0 0 1-50.61408398 26.59316924zM385.7274125 669.10728096h248.81180625c25.5282917 0 48.67769619 16.0765998 57.58435723 40.00038047l54.27909931 145.61217422c4.79914628 12.90265224 17.28627979 21.57367325 31.0460502 21.57367323h6.48550284c11.06339941 0 21.02054766-5.22725625 27.29829198-14.34077666 6.27864346-9.10632568 7.61963378-20.26685918 3.67850567-30.60355078L562.66894619 169.05081992c-4.85400937-12.77134102-17.31416133-21.34522792-30.97679765-21.34522792h-39.38519708c-13.66263633 0-26.12278916 8.57388692-30.97679765 21.34522792L209.08897402 831.34918145c-3.94112813 10.33759073-2.60013691 21.4972251 3.67850567 30.60355078 6.27864346 9.11352129 16.23489258 14.34077666 27.29829199 14.34077665h5.82175283c14.05027354 0 26.60666045-8.90576191 31.26730078-22.15377948L327.72843652 710.1932249c8.64314033-24.57403857 31.95893144-41.08594394 57.99897598-41.08594394z m183.84255528-57.1895253H450.32251748c-19.99704199 0-38.79069961-9.76288096-50.28220899-26.12278828-11.50589883-16.36710293-14.31289599-37.36606553-7.53689003-56.18040996l90.53891454-251.34179062c3.05612754-11.15963349 13.78765195-19.333292 26.38541075-19.333292 12.2110207 0 22.63765166 7.50900849 26.57967891 19.1255335L627.33330371 529.45536553c6.84525849 18.82153916 4.07963408 39.85557802-7.41277353 56.26315371-11.49150849 16.40128008-30.31214854 26.1992373-50.35056241 26.19923643z m-60.04598906-323.75079668L419.13796045 539.21195c-3.70638721 10.29531973-2.22689003 21.3380332 4.06614288 30.29955732 6.29213379 8.94713379 16.18003037 14.08445068 27.11841415 14.08445069h119.2474503c10.96626445 0 20.85416104-5.15170723 27.14629482-14.12672256 6.29213379-8.98221006 7.74464942-20.03841386 4.01038066-30.34092832L509.52397872 288.16695898z m-0.09623497-15.06658535l-0.01349033 14.16089883h0.02788066l-0.01439033-14.16089883z" fill="#515151" ></path></symbol><symbol id="icon-nishizhenxuanzhuan" viewBox="0 0 1024 1024"><path d="M924.8 337.6c-22.6-53.4-54.9-101.3-96-142.4s-89-73.4-142.4-96C631.1 75.9 572.5 64 512 64S392.9 75.9 337.6 99.2c-53.4 22.6-101.3 54.9-142.4 96-22.4 22.4-42.2 46.8-59.2 73.1V228c0-19.8-16.2-36-36-36s-36 16.2-36 36v288c0 19.8 16.2 36 36 36s36-16.2 36-36v-50.2c4.2-34.8 13.2-68.7 27-101.2 19.1-45.1 46.4-85.6 81.2-120.4C279 209.4 319.5 182 364.6 163c46.7-19.7 96.3-29.8 147.4-29.8 51.2 0 100.8 10 147.4 29.8 45.1 19.1 85.6 46.4 120.4 81.2C814.6 279 842 319.5 861 364.6c19.7 46.7 29.8 96.3 29.8 147.4 0 51.2-10 100.8-29.8 147.4-19.1 45.1-46.4 85.6-81.2 120.4C745 814.6 704.5 842 659.4 861c-46.7 19.7-96.3 29.8-147.4 29.8-64.6 0-128.4-16.5-184.4-47.8-54.4-30.4-100.9-74.1-134.6-126.6-10.3-16.1-31.7-20.8-47.8-10.4-16.1 10.3-20.8 31.7-10.4 47.8 39.8 62 94.8 113.7 159.1 149.6 66.2 37 141.7 56.6 218.1 56.6 60.5 0 119.1-11.9 174.4-35.2 53.4-22.6 101.3-54.9 142.4-96 41.1-41.1 73.4-89 96-142.4C948.1 631.1 960 572.5 960 512s-11.9-119.1-35.2-174.4z" fill="#515151" ></path><path d="M275.4 575.5c9.5-2.5 19.1 2.9 22.3 12.2 3.5 10.2 9.9 17.7 19.1 22.6 7.1 3.9 15.1 5.8 24 5.8 16.6 0 30.8-6.9 42.5-20.8 11.7-13.8 20-32.7 24.9-75.1-7.7 12.2-17.3 20.8-28.7 25.8-11.4 5-23.7 7.4-36.8 7.4-26.7 0-47.7-8.3-63.3-24.9-15.5-16.6-23.3-37.9-23.3-64.1 0-25.1 7.7-47.1 23-66.2 15.3-19 37.9-28.6 67.8-28.6 40.3 0 68.1 18.1 83.4 54.4 8.5 19.9 12.7 44.9 12.7 74.9 0 33.8-5.1 63.8-15.3 89.9-16.9 43.5-45.5 65.2-85.8 65.2-27 0-47.6-7.1-61.6-21.2-10-10.1-16.4-22-19.3-35.8-2-9.6 4-19.1 13.5-21.6l0.9 0.1z m103-74.4c9.4-7.5 14.1-20.6 14.1-39.3 0-16.8-4.2-29.3-12.7-37.5S360.6 412 347.5 412c-14 0-25.2 4.7-33.4 14.1-8.2 9.4-12.4 22-12.4 37.7 0 14.9 3.6 26.7 10.9 35.5 7.2 8.8 18.8 13.1 34.6 13.1 11.4 0 21.8-3.8 31.2-11.3zM646.6 414.4c12.4 22.8 18.5 54 18.5 93.7 0 37.6-5.6 68.7-16.8 93.3-16.2 35.3-42.8 52.9-79.6 52.9-33.2 0-57.9-14.4-74.2-43.3-13.5-24.1-20.3-56.4-20.3-97 0-31.4 4.1-58.4 12.2-80.9 15.2-42 42.7-63 82.5-63 35.9 0 61.8 14.8 77.7 44.3z m-40.2 173.3c9.4-13.9 14-39.9 14-78 0-27.4-3.4-50-10.1-67.7-6.8-17.7-19.9-26.6-39.4-26.6-17.9 0-31 8.4-39.3 25.2-8.3 16.8-12.4 41.6-12.4 74.3 0 24.6 2.6 44.4 7.9 59.4 8.1 22.8 22 34.3 41.6 34.3 15.7 0 28.3-7 37.7-20.9zM803.3 387.2c11.2 11.3 16.8 25 16.8 41.2 0 16.7-5.8 30.7-17.5 41.8C791 481.4 777.4 487 762 487c-17.1 0-31.2-5.8-42.1-17.4-10.9-11.6-16.4-25.1-16.4-40.6 0-16.5 5.8-30.4 17.3-41.7 11.5-11.3 25.3-17 41.2-17 16.3 0 30.1 5.7 41.3 16.9zM739.5 451c6.2 6.2 13.7 9.3 22.5 9.3 8.4 0 15.8-3.1 22.1-9.3 6.3-6.2 9.4-13.7 9.4-22.6 0-8.5-3.1-15.9-9.3-22.1-6.2-6.2-13.6-9.3-22.2-9.3s-16.1 3.1-22.4 9.3c-6.3 6.2-9.4 13.7-9.4 22.6-0.1 8.4 3 15.8 9.3 22.1z" fill="#515151" ></path></symbol><symbol id="icon-shunshizhenxuanzhuan" viewBox="0 0 1024 1024"><path d="M1464.3 279.7" fill="#515151" ></path><path d="M512 960c-60.5 0-119.1-11.9-174.4-35.2-53.4-22.6-101.3-54.9-142.4-96s-73.4-89-96-142.4C75.9 631.1 64 572.5 64 512s11.9-119.1 35.2-174.4c22.6-53.4 54.9-101.3 96-142.4s89-73.4 142.4-96C392.9 75.9 451.5 64 512 64s119.1 11.9 174.4 35.2c53.4 22.6 101.3 54.9 142.4 96s73.4 89 96 142.4C948.1 392.9 960 451.5 960 512c0 19.1-15.5 34.6-34.6 34.6s-34.6-15.5-34.6-34.6c0-51.2-10-100.8-29.8-147.4-19.1-45.1-46.4-85.6-81.2-120.4C745 209.4 704.5 182 659.4 163c-46.7-19.7-96.3-29.8-147.4-29.8-51.2 0-100.8 10-147.4 29.8-45.1 19.1-85.6 46.4-120.4 81.2S182 319.5 163 364.6c-19.7 46.7-29.8 96.3-29.8 147.4 0 51.2 10 100.8 29.8 147.4 19.1 45.1 46.4 85.6 81.2 120.4C279 814.6 319.5 842 364.6 861c46.7 19.7 96.3 29.8 147.4 29.8 64.6 0 128.4-16.5 184.4-47.8 54.4-30.4 100.9-74.1 134.6-126.6 10.3-16.1 31.7-20.8 47.8-10.4 16.1 10.3 20.8 31.7 10.4 47.8-39.8 62-94.8 113.7-159.1 149.6-66.2 37-141.7 56.6-218.1 56.6z" fill="#515151" ></path><path d="M924 552c-19.8 0-36-16.2-36-36V228c0-19.8 16.2-36 36-36s36 16.2 36 36v288c0 19.8-16.2 36-36 36zM275.4 575.5c9.5-2.5 19.1 2.9 22.3 12.2 3.5 10.2 9.9 17.7 19.1 22.6 7.1 3.9 15.1 5.8 24 5.8 16.6 0 30.8-6.9 42.5-20.8 11.7-13.8 20-32.7 24.9-75.1-7.7 12.2-17.3 20.8-28.7 25.8-11.4 5-23.7 7.4-36.8 7.4-26.7 0-47.7-8.3-63.3-24.9-15.5-16.6-23.3-37.9-23.3-64.1 0-25.1 7.7-47.1 23-66.2 15.3-19 37.9-28.6 67.8-28.6 40.3 0 68.1 18.1 83.4 54.4 8.5 19.9 12.7 44.9 12.7 74.9 0 33.8-5.1 63.8-15.3 89.9-16.9 43.5-45.5 65.2-85.8 65.2-27 0-47.6-7.1-61.6-21.2-10-10.1-16.4-22-19.3-35.8-2-9.6 4-19.1 13.5-21.6l0.9 0.1z m103-74.4c9.4-7.5 14.1-20.6 14.1-39.3 0-16.8-4.2-29.3-12.7-37.5S360.6 412 347.5 412c-14 0-25.2 4.7-33.4 14.1-8.2 9.4-12.4 22-12.4 37.7 0 14.9 3.6 26.7 10.9 35.5 7.2 8.8 18.8 13.1 34.6 13.1 11.4 0 21.8-3.8 31.2-11.3zM646.6 414.4c12.4 22.8 18.5 54 18.5 93.7 0 37.6-5.6 68.7-16.8 93.3-16.2 35.3-42.8 52.9-79.6 52.9-33.2 0-57.9-14.4-74.2-43.3-13.5-24.1-20.3-56.4-20.3-97 0-31.4 4.1-58.4 12.2-80.9 15.2-42 42.7-63 82.5-63 35.9 0 61.8 14.8 77.7 44.3z m-40.2 173.3c9.4-13.9 14-39.9 14-78 0-27.4-3.4-50-10.1-67.7-6.8-17.7-19.9-26.6-39.4-26.6-17.9 0-31 8.4-39.3 25.2-8.3 16.8-12.4 41.6-12.4 74.3 0 24.6 2.6 44.4 7.9 59.4 8.1 22.8 22 34.3 41.6 34.3 15.7 0 28.3-7 37.7-20.9zM803.3 387.2c11.2 11.3 16.8 25 16.8 41.2 0 16.7-5.8 30.7-17.5 41.8C791 481.4 777.4 487 762 487c-17.1 0-31.2-5.8-42.1-17.4-10.9-11.6-16.4-25.1-16.4-40.6 0-16.5 5.8-30.4 17.3-41.7 11.5-11.3 25.3-17 41.2-17 16.3 0 30.1 5.7 41.3 16.9zM739.5 451c6.2 6.2 13.7 9.3 22.5 9.3 8.4 0 15.8-3.1 22.1-9.3 6.3-6.2 9.4-13.7 9.4-22.6 0-8.5-3.1-15.9-9.3-22.1-6.2-6.2-13.6-9.3-22.2-9.3s-16.1 3.1-22.4 9.3c-6.3 6.2-9.4 13.7-9.4 22.6-0.1 8.4 3 15.8 9.3 22.1z" fill="#515151" ></path></symbol><symbol id="icon-huabi" viewBox="0 0 1024 1024"><path d="M258.56 916.48c-30.72 0-64-5.12-92.16-15.36-64-23.04-97.28-69.12-99.84-128-2.56-89.6 66.56-120.32 120.32-143.36 51.2-23.04 79.36-35.84 79.36-74.24 0-46.08-79.36-84.48-112.64-89.6-12.8-5.12-20.48-17.92-20.48-30.72 2.56-12.8 15.36-23.04 28.16-20.48 46.08 7.68 156.16 56.32 156.16 140.8 0 74.24-61.44 99.84-110.08 120.32-56.32 25.6-92.16 43.52-89.6 97.28 0 38.4 23.04 66.56 64 81.92 66.56 25.6 166.4 7.68 192-23.04 10.24-10.24 25.6-12.8 35.84-2.56 10.24 10.24 12.8 25.6 2.56 35.84-25.6 30.72-89.6 51.2-153.6 51.2z" fill="#515151" ></path><path d="M435.2 757.76c-5.12 5.12 2.56 17.92 12.8 25.6s23.04 10.24 28.16 5.12l107.52-81.92-102.4-74.24-46.08 125.44zM929.28 120.32c-28.16-20.48-69.12-15.36-89.6 15.36L509.44 591.36l102.4 74.24 332.8-455.68c20.48-28.16 12.8-69.12-15.36-89.6z" fill="#515151" ></path></symbol><symbol id="icon-bianji" viewBox="0 0 1024 1024"><path d="M831.9865625 549.0903125c0-17.671875 14.325-31.99875 31.9978125-31.99875s31.99875 14.325 31.99875 31.99875V783.96875c0 61.1465625-45.7640625 111.995625-103.995 111.995625H216.0115625c-58.23 0-103.995-50.85-103.995-111.995625V223.9915625c0-61.1446875 45.765-111.995625 103.995-111.995625H468.715625c17.671875 0 31.9996875 14.3259375 31.9996875 31.9996875s-14.3259375 31.99875-31.9996875 31.99875H216.0125c-21.2953125 0-39.9984375 20.7815625-39.9984375 47.998125V783.96875c0 27.2165625 18.703125 47.998125 39.9975 47.998125h575.9765625c21.294375 0 39.9984375-20.7815625 39.9984375-47.998125V549.0903125z m-284.071875-3.8521875c-11.7403125 13.209375-31.9659375 14.398125-45.174375 2.6578125s-14.398125-31.966875-2.6578125-45.174375l319.9875-359.9859375c11.739375-13.2084375 31.9659375-14.398125 45.174375-2.656875s14.3971875 31.9659375 2.656875 45.174375L547.915625 545.238125z" fill="#515151" ></path></symbol></svg>',n=(n=document.getElementsByTagName("script"))[n.length-1].getAttribute("data-injectcss");if(n&&!c.__iconfont__svg__cssinject__){c.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(c){console&&console.log(c)}}function s(){e||(e=!0,a())}l=function(){var c,l,t,a;(a=document.createElement("div")).innerHTML=h,h=null,(t=a.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",c=t,(l=document.body).firstChild?(a=c,(t=l.firstChild).parentNode.insertBefore(a,t)):l.appendChild(c))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(l,0):(t=function(){document.removeEventListener("DOMContentLoaded",t,!1),l()},document.addEventListener("DOMContentLoaded",t,!1)):document.attachEvent&&(a=l,i=c.document,e=!1,(o=function(){try{i.documentElement.doScroll("left")}catch(c){return void setTimeout(o,50)}s()})(),i.onreadystatechange=function(){"complete"==i.readyState&&(i.onreadystatechange=null,s())})}(window);

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "9a9b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_index_vue_vue_type_style_index_0_id_0ffcbb06_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("31fc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_index_vue_vue_type_style_index_0_id_0ffcbb06_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_index_vue_vue_type_style_index_0_id_0ffcbb06_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a07f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./packages/ImageViewer/src/index.vue?vue&type=template&id=0ffcbb06&scoped=true

const _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withScopeId"])("data-v-0ffcbb06")

Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-0ffcbb06")
const _hoisted_1 = { class: "i_modal" }
const _hoisted_2 = { class: "canvas_container" }
const _hoisted_3 = { class: "img_container" }
const _hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", { class: "pre_title" }, "原图", -1)
const _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createStaticVNode"])("<div id=\"cut_content\" data-v-0ffcbb06></div><div id=\"cut_left\" data-v-0ffcbb06></div><div id=\"cut_right\" data-v-0ffcbb06></div><div id=\"cut_top\" data-v-0ffcbb06></div><div id=\"cut_bottom\" data-v-0ffcbb06></div><div id=\"border_left\" data-v-0ffcbb06></div><div id=\"border_right\" data-v-0ffcbb06></div><div id=\"border_top\" data-v-0ffcbb06></div><div id=\"border_bottom\" data-v-0ffcbb06></div><div id=\"border_lt\" data-v-0ffcbb06></div><div id=\"border_rt\" data-v-0ffcbb06></div><div id=\"border_lb\" data-v-0ffcbb06></div><div id=\"border_rb\" data-v-0ffcbb06></div>", 13)
const _hoisted_18 = { id: "cut_size" }
const _hoisted_19 = { class: "pre_img" }
const _hoisted_20 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", { class: "pre_title" }, " 效果图 ", -1)
const _hoisted_21 = { class: "acts" }
const _hoisted_22 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("use", { "xlink:href": "#icon-nishizhenxuanzhuan" })
], -1)
const _hoisted_23 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("use", { "xlink:href": "#icon-shunshizhenxuanzhuan" })
], -1)
const _hoisted_24 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("use", { "xlink:href": "#icon-fangda" })
], -1)
const _hoisted_25 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("use", { "xlink:href": "#icon-zoomOut" })
], -1)
const _hoisted_26 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("use", { "xlink:href": "#icon-caijian1" })
], -1)
const _hoisted_27 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("use", { "xlink:href": "#icon-huabi" })
], -1)
const _hoisted_28 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("use", { "xlink:href": "#icon-chehui" })
], -1)
const _hoisted_29 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("use", { "xlink:href": "#icon-yulan" })
], -1)
const _hoisted_30 = {
  key: 0,
  class: "icon",
  "aria-hidden": "true"
}
const _hoisted_31 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("use", { "xlink:href": "#icon-baocun" }, null, -1)
const _hoisted_32 = {
  key: 1,
  class: "icon loading",
  "aria-hidden": "true"
}
const _hoisted_33 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("use", { "xlink:href": "#icon-jiazai" }, null, -1)
const _hoisted_34 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("use", { "xlink:href": "#icon-guanbi" })
], -1)
const _hoisted_35 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", { class: "modal_bg" }, null, -1)
Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])()

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    onAfterEnter: $options.afterEnter,
    onAfterLeave: $options.afterLeave
  }, {
    default: _withId(() => [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_1, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_2, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_3, [
            _hoisted_4,
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("canvas", {
              id: "canvas",
              width: $data.scopeX,
              height: $data.scopeY,
              style: {"border":"1px dashed #ddd"},
              class: [$data.scrawl ? 'scrawl' : '']
            }, null, 10, ["width", "height"]),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
              id: "cut_area",
              style: { width: $data.sketchWidth + 'px', height: $data.sketchHeight + 'px' }
            }, [
              _hoisted_5,
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.cutWidth + 2 * $data.borderWidth) + " × " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.cutHeight + 2 * $data.borderWidth), 1)
            ], 4), [
              [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $data.canCut]
            ])
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("canvas", {
            id: "sketch",
            width: $options.skecthDrawWidth,
            height: $options.skecthDrawHeight,
            style: {"border":"1px dashed #ddd"}
          }, null, 8, ["width", "height"]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_19, [
            _hoisted_20,
            ($data.endImage)
              ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("img", {
                  key: 0,
                  style: $options.aimStyle,
                  src: $data.endImage,
                  alt: ""
                }, null, 12, ["src"]))
              : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
          ])
        ]),
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_21, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            class: "act_btn",
            onClick: _cache[1] || (_cache[1] = $event => ($options.handleRotate(false)))
          }, [
            _hoisted_22
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            class: "act_btn",
            onClick: _cache[2] || (_cache[2] = $event => ($options.handleRotate(true)))
          }, [
            _hoisted_23
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            class: "act_btn",
            onClick: _cache[3] || (_cache[3] = $event => ($options.handleScale(true)))
          }, [
            _hoisted_24
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            class: "act_btn",
            onClick: _cache[4] || (_cache[4] = $event => ($options.handleScale(false)))
          }, [
            _hoisted_25
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            class: "act_btn",
            onClick: _cache[5] || (_cache[5] = (...args) => ($options.toggleCut && $options.toggleCut(...args)))
          }, [
            _hoisted_26
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            class: "act_btn",
            onClick: _cache[6] || (_cache[6] = (...args) => ($options.toggleGraffiti && $options.toggleGraffiti(...args)))
          }, [
            _hoisted_27
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            class: "act_btn",
            onClick: _cache[7] || (_cache[7] = (...args) => ($options.reset && $options.reset(...args)))
          }, [
            _hoisted_28
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            class: "act_btn",
            onClick: _cache[8] || (_cache[8] = (...args) => ($options.canvasToUrl && $options.canvasToUrl(...args)))
          }, [
            _hoisted_29
          ]),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            class: [$data.endImage ? 'act_btn' : 'disabled'],
            onClick: _cache[9] || (_cache[9] = (...args) => ($options.handleSave && $options.handleSave(...args)))
          }, [
            (!$props.saving)
              ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", _hoisted_30, [
                  _hoisted_31
                ]))
              : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", _hoisted_32, [
                  _hoisted_33
                ]))
          ], 2)
        ]),
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
          class: "modal_close",
          onClick: _cache[10] || (_cache[10] = (...args) => ($options.handleClose && $options.handleClose(...args)))
        }, [
          _hoisted_34
        ]),
        _hoisted_35
      ], 512), [
        [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $props.visible]
      ])
    ]),
    _: 1
  }, 8, ["onAfterEnter", "onAfterLeave"]))
})
// CONCATENATED MODULE: ./packages/ImageViewer/src/index.vue?vue&type=template&id=0ffcbb06&scoped=true

// EXTERNAL MODULE: ./packages/assets/var.scss
var assets_var = __webpack_require__("a07f");

// EXTERNAL MODULE: ./packages/assets/font.js
var font = __webpack_require__("6f06");

// CONCATENATED MODULE: ./packages/assets/forbid.cur
/* harmony default export */ var forbid = (__webpack_require__.p + "assets/forbid.8c1a2f28.cur");
// CONCATENATED MODULE: ./packages/util/index.js

/**
 *  对比容器与图片size，得到图片最优放置大小
 * params: 容器大小(mx, my)，图片大小(sx, sy)
 */
const computedImageSize = (mx, my, sx, sy) => { 
  let x, y; 
  if (mx >= sx){
    if(my >= sy){
      x = sx;
      y = sy;
    } else {
      y = my;
      x = y * sx / sy
    }
  } else {
    if (my < sy){
      let ty = sy * mx / sx; 
      if (ty > my){
        y = my;
        x = y * sx / sy;
      } else {
        x = mx;
        y = x * sy / sx;
      }
    } else {
      x = mx;
      y = x * sy / sx;
    }
  } 
  return {
    x,
    y 
  }
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./packages/ImageViewer/src/index.vue?vue&type=script&lang=js





let cxt = undefined;
let canvas = undefined;
/* harmony default export */ var srcvue_type_script_lang_js = ({
  name: "ImageViewer",
  props: {
    imgUrl: {
      type: String,
      default: "",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
    // 保存状态
    saving: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      center: {
        x: 0,
        y: 0,
      }, // 原点位置
      endImage: "",
      sketchWidth: 0, // 效果
      sketchHeight: 0, // 效果
      direction: 1, // 旋转角度1-4：0、90°、180°、270°
      scale: 1, // 缩放比例
      minWidth: 1000, // 容器宽高
      scopeX: 0, // 图片大小（宽）重点注意：动态修改canvas宽高会导致canvas重新渲染，原点回归左上顶角
      scopeY: 0, // 图片大小（高）
      canCut: false, // 是否启用裁剪
      originSize: 50, // 裁剪区默认大小（1/2宽高）
      initCut: false, // 是否初始化裁剪
      cutStartX: 0, // 裁剪开始坐标x
      cutStartY: 0, // 裁剪开始左边y
      beforeCutStartX: 0, // 裁剪开始坐标x
      beforeCutStartY: 0, // 裁剪开始左边y
      cutWidth: 100, // 裁剪区宽
      cutHeight: 100, // 裁剪区高
      startCut: false, // 选择裁剪区
      startDom: { x: 0, y: 0 }, // 拖拽起点
      borderWidth: 10, // 可伸缩宽度
      scrawl: false, // 涂鸦模式
      maxHeight: 0,
      maxWidth: 0,
    };
  },
  watch: {
    visible(val) {
      if (val) {
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      }
    },
  },
  computed: {
    skecthDrawWidth: function () {
      if (this.canCut) {
        return this.cutWidth + 2 * this.borderWidth;
      } else {
        return this.sketchWidth;
      }
    },
    skecthDrawHeight: function () {
      if (this.canCut) {
        return this.cutHeight + 2 * this.borderWidth;
      } else {
        return this.sketchHeight;
      }
    },
    aimStyle: function () {
      let scopeX = this.scopeX,
        scopeY = this.scopeY;
      if (this.canCut) {
        scopeX = this.cutWidth + 2 * this.borderWidth;
        scopeY = this.cutHeight + 2 * this.borderWidth;
      }
      let size = computedImageSize(
        this.maxWidth,
        this.maxHeight,
        scopeX,
        scopeY
      );
      return { width: size.x + "px", height: size.y + "px" };
    },
  },
  mounted() {
    this.maxHeight = document.body.clientHeight - 175;
    this.maxWidth = (document.body.clientWidth - 40) / 2;
    document.onmouseup = () => (document.onmousemove = null);
    canvas = document.getElementById("canvas");
    cxt = canvas.getContext("2d");
    cxt.lineWidth = 1;
    this.reset();
  },
  methods: {
    afterEnter() {
      this.$emit("opened");
    },
    afterLeave() {
      this.$emit("closed");
    },
    handleClose() {
      this.$emit("closed");
    },
    handleSave() {
      if (this.endImage) {
        this.$emit("save", this.endImage);
      }
    },
    // x: x轴，y：y轴 reset: 重置原点
    moveCenter(x = 0, y = 0, reset = false) {
      if (reset) {
        this.center = {
          x: 0,
          y: 0,
        };
      }
      cxt.translate(x, y);
      this.center.x += x;
      this.center.y += y;
    },
    // 计算宽高
    computedSize(image = {}) {
      let width = image.width,
        height = image.height;
      if (!(this.direction % 2)) {
        width = image.height;
        height = image.width;
      }
      let size = computedImageSize(
        this.maxWidth,
        this.maxHeight,
        width,
        height
      );
      this.scopeX = size.x;
      this.scopeY = size.y;
      return {
        width: this.scopeX,
        height: this.scopeY,
      };
    },
    handleRotate(clockwise = true) {
      this.endImage = "";
      this.canCut = false;
      // 顺时针+1，逆时针-1
      if (clockwise) {
        if (this.direction < 4) {
          this.direction += 1;
        } else {
          this.direction = 1;
        }
      } else {
        if (this.direction === 1) {
          this.direction = 4;
        } else {
          this.direction -= 1;
        }
      }
      cxt.clearRect(
        -this.scopeX,
        -this.scopeY,
        2 * this.scopeX,
        2 * this.scopeY
      );
      let image = new Image();
      image.setAttribute("crossOrigin", "anonymous");
      image.src = this.imgUrl;
      image.addEventListener("load", () => {
        this.moveCenter(-this.scopeX / 2, -this.scopeY / 2);
        let img = this.computedSize(image);
        this.$nextTick(() => {
          this.sketchWidth = this.scopeX;
          this.sketchHeight = this.scopeY;
          this.moveCenter(this.scopeX / 2, this.scopeY / 2);
          cxt.rotate(((5 - this.direction) * -90 * Math.PI) / 180);
          cxt.drawImage(
            image,
            this.direction % 2 ? -img.width / 2 : -img.height / 2,
            this.direction % 2 ? -img.height / 2 : -img.width / 2,
            this.direction % 2 ? img.width : img.height,
            this.direction % 2 ? img.height : img.width
          );
          this.showCenter();
        });
      });
    },
    // 缩放
    handleScale(big = true) {
      this.endImage = "";
      this.canCut = false;
      let size = big ? 1.2 : 5 / 6;
      this.scale = this.scale * (big ? 1.2 : 5 / 6);
      cxt.clearRect(
        -this.scopeX,
        -this.scopeY,
        2 * this.scopeX,
        2 * this.scopeY
      );
      cxt.scale(size, size);
      let image = new Image();
      image.src = this.imgUrl;
      image.setAttribute("crossOrigin", "anonymous");
      image.addEventListener("load", () => {
        let img = this.computedSize(image);
        this.sketchWidth = img.width * (this.scale > 1 ? 1 : this.scale);
        this.sketchHeight = img.height * (this.scale > 1 ? 1 : this.scale);
        this.$nextTick(() => {
          cxt.drawImage(
            image,
            this.direction % 2 ? -img.width / 2 : -img.height / 2,
            this.direction % 2 ? -img.height / 2 : -img.width / 2,
            this.direction % 2 ? img.width : img.height,
            this.direction % 2 ? img.height : img.width
          );
          this.showCenter();
        });
      });
    },
    reset() {
      this.endImage = "";
      this.canCut = false;
      this.scrawl = false;
      canvas.removeEventListener("mousedown", this.DrawLine);
      this.cutStartX = -this.cutWidth / 2;
      this.cutStartY = -this.cutHeight / 2;
      // 重置宽高
      this.sketchWidth = 0;
      this.sketchHeight = 0;
      cxt.lineWidth = 1;
      cxt.clearRect(
        -this.scopeX,
        -this.scopeY,
        2 * this.scopeX,
        2 * this.scopeY
      );
      let image = new Image();
      image.setAttribute("crossOrigin", "anonymous");
      image.src = this.imgUrl;
      image.addEventListener("load", () => {
        this.moveCenter(-this.scopeX / 2, -this.scopeY / 2);
        let img = this.computedSize(image);
        if (this.direction % 2) {
          this.$nextTick(() => {
            this.moveCenter(this.scopeX / 2, this.scopeY / 2);
            cxt.scale(1 / this.scale, 1 / this.scale);
            cxt.rotate(((5 - this.direction) * 90 * Math.PI) / 180);
            this.sketchWidth = img.width;
            this.sketchHeight = img.height;
            cxt.drawImage(
              image,
              -this.scopeX / 2,
              -this.scopeY / 2,
              this.sketchWidth,
              this.sketchHeight
            );
            this.showCenter();
            this.direction = 1;
            this.scale = 1;
          });
        } else {
          this.scopeX = img.height;
          this.scopeY = img.width;
          this.$nextTick(() => {
            this.moveCenter(this.scopeX / 2, this.scopeY / 2);
            this.sketchWidth = img.height;
            this.sketchHeight = img.width;
            cxt.drawImage(
              image,
              -this.scopeX / 2,
              -this.scopeY / 2,
              this.sketchWidth,
              this.sketchHeight
            );
            this.showCenter();
            this.direction = 1;
            this.scale = 1;
          });
        }
      });
    },
    // 标识中心：用于辅助：确定中心位置
    showCenter() {
      // cxt.beginPath();
      // cxt.fillStyle = "blue";
      // cxt.rect(-13, -13, 26, 26);
      // cxt.fill();
      // cxt.closePath();
    },
    // 启动裁剪
    toggleCut() {
      this.endImage = "";
      if (!this.canCut) {
        this.canCut = true;
        this.initCut = false;
        this.cutWidth = 100; // 裁剪区宽
        this.cutHeight = 100; // 裁剪区高
        this.startDom = { x: 0, y: 0 };
        this.cutStartX =
          this.cutWidth < this.sketchWidth
            ? -this.cutWidth / 2
            : -this.sketchWidth / 2;
        this.cutStartY =
          this.cutHeight < this.sketchHeight
            ? -this.cutHeight / 2
            : -this.sketchHeight / 2;
        this.readyMoveCutArea();
      }
    },
    // 启动裁剪框移动
    readyMoveCutArea() {
      let cutContent = document.getElementById("cut_content");
      // 初始化
      this.beforeCutStartX = this.cutStartX;
      this.beforeCutStartY = this.cutStartY;
      this.moveCutArea();
      cutContent.onmousedown = (e) => {
        // if (!this.initCut) {
        this.startDom = { x: e.x, y: e.y };
        // }
        this.beforeCutStartX = this.cutStartX;
        this.beforeCutStartY = this.cutStartY;
        this.initCut = true;
        document.onmousemove = (event) => {
          event.preventDefault();
          this.moveCutArea(event);
        };
        cutContent.onmouseup = () => {
          document.onmousemove = null;
        };
      };
    },
    // 拖拽裁剪框
    moveCutArea(event = { x: 0, y: 0 }, startDom = this.startDom) {
      let dx = event.x - startDom.x,
        dy = event.y - startDom.y;
      let cutStartX = this.beforeCutStartX + dx,
        cutStartY = this.beforeCutStartY + dy,
        // 左上角坐标的移动范围(minX, minY)到(maxX, maxY)
        maxX = this.sketchWidth / 2 - this.cutWidth - this.borderWidth,
        maxY = this.sketchHeight / 2 - this.cutHeight - this.borderWidth,
        minX = -this.sketchWidth / 2 + this.borderWidth,
        minY = -this.sketchHeight / 2 + this.borderWidth;
      if (maxX < cutStartX) {
        cutStartX = maxX;
      }
      if (minX > cutStartX) {
        cutStartX = minX;
      }
      if (maxY < cutStartY) {
        cutStartY = maxY;
      }
      if (minY > cutStartY) {
        cutStartY = minY;
      }
      this.cutStartX = cutStartX;
      this.cutStartY = cutStartY;
      this.changeCutArea();
    },
    changeCutArea() {
      let cutContent = document.getElementById("cut_content");
      this.setStyle(cutContent, {
        border: "1px solid white",
        width: this.cutWidth + 2 * this.borderWidth + "px",
        height: this.cutHeight + 2 * this.borderWidth + "px",
        top:
          Math.abs(this.sketchHeight / 2 + this.cutStartY) -
          this.borderWidth -
          1 +
          "px",
        left:
          Math.abs(this.cutStartX + this.sketchWidth / 2) -
          this.borderWidth -
          1 +
          "px",
        cursor: "move",
      });
      this.setCutArea();
    },
    // border原点为左上顶点、canvas原点为图形中心
    setBorder() {
      let borderLeft = document.getElementById("border_left"),
        borderRight = document.getElementById("border_right"),
        borderTop = document.getElementById("border_top"),
        borderBottom = document.getElementById("border_bottom"),
        borderLt = document.getElementById("border_lt"),
        borderRt = document.getElementById("border_rt"),
        borderLb = document.getElementById("border_lb"),
        borderRb = document.getElementById("border_rb"),
        cutSize = document.getElementById("cut_size");
      this.setStyle(cutSize, {
        position: "absolute",
        top:
          this.cutStartY +
          this.sketchHeight / 2 -
          2 * this.borderWidth -
          12 +
          "px",
        left: this.cutStartX + this.sketchWidth / 2 - this.borderWidth + "px",
        background: "rgba(0,0,0,0.8)",
        color: "white",
      });
      this.setStyle(borderLeft, {
        width: this.borderWidth + "px",
        height: this.cutHeight + "px",
        // background: "rgba(0,0,255, 0.8)",
        top: this.cutStartY + this.sketchHeight / 2 + "px",
        left: this.cutStartX + this.sketchWidth / 2 - this.borderWidth + "px",
        cursor: "w-resize",
      });
      this.setStyle(borderRight, {
        width: this.borderWidth + "px",
        height: this.cutHeight + "px",
        // background: "rgba(0,0,255, 0.8)",
        top: this.cutStartY + this.sketchHeight / 2 + "px",
        left: this.cutStartX + this.cutWidth + this.sketchWidth / 2 + "px",
        cursor: "e-resize",
      });
      this.setStyle(borderTop, {
        width: this.cutWidth + "px",
        height: this.borderWidth + "px",
        // background: "rgba(255,0,0, 0.8)",
        top: this.cutStartY + this.sketchHeight / 2 - this.borderWidth + "px",
        left: this.cutStartX + this.sketchWidth / 2 + "px",
        cursor: "n-resize",
      });
      this.setStyle(borderBottom, {
        width: this.cutWidth + "px",
        height: this.borderWidth + "px",
        // background: "rgba(255,0,0, 0.8)",
        top: this.cutStartY + this.sketchHeight / 2 + this.cutHeight + "px",
        left: this.cutStartX + this.sketchWidth / 2 + "px",
        cursor: "s-resize",
      });
      // 设置四顶角
      this.setStyle(borderLt, {
        width: this.borderWidth + "px",
        height: this.borderWidth + "px",
        // background: "rgba(0,255,0, 0.8)",
        top: this.cutStartY + this.sketchHeight / 2 - this.borderWidth + "px",
        left: this.cutStartX + this.sketchWidth / 2 - this.borderWidth + "px",
        cursor: "nw-resize",
      });
      this.setStyle(borderRt, {
        width: this.borderWidth + "px",
        height: this.borderWidth + "px",
        // background: "rgba(0,255,0, 0.8)",
        top: this.cutStartY + this.sketchHeight / 2 - this.borderWidth + "px",
        left: this.cutStartX + this.cutWidth + this.sketchWidth / 2 + "px",
        cursor: "ne-resize",
      });
      this.setStyle(borderLb, {
        width: this.borderWidth + "px",
        height: this.borderWidth + "px",
        // background: "rgba(0,255,0,  0.8)",
        top: this.cutStartY + this.sketchHeight / 2 + this.cutHeight + "px",
        left: this.cutStartX + this.sketchWidth / 2 - this.borderWidth + "px",
        cursor: "sw-resize",
      });
      this.setStyle(borderRb, {
        width: this.borderWidth + "px",
        height: this.borderWidth + "px",
        // background: "rgba(0,255, 0, 0.8)",
        top: this.cutStartY + this.sketchHeight / 2 + this.cutHeight + "px",
        left: this.cutStartX + this.cutWidth + this.sketchWidth / 2 + "px",
        cursor: "se-resize",
      });
      borderLeft.onmousedown = (se) => this.dragBorder(se, "bl");
      borderLeft.onmouseup = () => (document.onmousemove = null);
      borderRight.onmousedown = (se) => this.dragBorder(se, "br");
      borderRight.onmouseup = () => (document.onmousemove = null);
      borderTop.onmousedown = (se) => this.dragBorder(se, "bt");
      borderTop.onmouseup = () => (document.onmousemove = null);
      borderBottom.onmousedown = (se) => this.dragBorder(se, "bb");
      borderBottom.onmouseup = () => (document.onmousemove = null);
      borderLt.onmousedown = (se) => this.dragBorder(se, "lt");
      borderLt.onmouseup = () => (document.onmousemove = null);
      borderRt.onmousedown = (se) => this.dragBorder(se, "rt");
      borderRt.onmouseup = () => (document.onmousemove = null);
      borderLb.onmousedown = (se) => this.dragBorder(se, "lb");
      borderLb.onmouseup = () => (document.onmousemove = null);
      borderRb.onmousedown = (se) => this.dragBorder(se, "rb");
      borderRb.onmouseup = () => (document.onmousemove = null);
    },
    // 拖拽边界
    dragBorder(se, dom) {
      let sx = this.cutStartX,
        sy = this.cutStartY,
        sw = this.cutWidth,
        sh = this.cutHeight,
        maxX = this.sketchWidth / 2 - this.borderWidth,
        maxY = this.sketchHeight / 2 - this.borderWidth,
        minX = -this.sketchWidth / 2 + this.borderWidth,
        minY = -this.sketchHeight / 2 + this.borderWidth;
      switch (dom) {
        case "bl":
          document.onmousemove = (ee) => {
            let moveDis = ee.x - se.x;
            let startX = sx + moveDis;
            if (startX >= minX && startX < sx + sw) {
              this.cutStartX = sx + moveDis;
              this.cutWidth = sw - moveDis;
            } else {
              return false;
            }
            this.changeCutArea();
          };
          break;
        case "br":
          document.onmousemove = (ee) => {
            let moveDis = ee.x - se.x;
            if (sx + sw + moveDis <= maxX && sw > -moveDis) {
              this.cutWidth = sw + moveDis;
            } else {
              return false;
            }
            this.changeCutArea();
          };
          break;
        case "bt":
          document.onmousemove = (ee) => {
            let moveDis = ee.y - se.y;
            let startY = sy + moveDis;
            if (startY < sy + sh && startY >= minY) {
              this.cutStartY = sy + moveDis;
              this.cutHeight = sh - moveDis;
            } else {
              return false;
            }
            this.changeCutArea();
          };
          break;
        case "bb":
          document.onmousemove = (ee) => {
            let moveDis = ee.y - se.y;
            if (sy + sh + moveDis <= maxY && sh > -moveDis) {
              this.cutHeight = sh + moveDis;
            } else {
              return false;
            }
            this.changeCutArea();
          };
          break;

        case "lt":
          document.onmousemove = (ee) => {
            let movex = ee.x - se.x;
            let movey = ee.y - se.y;
            if (sx + movex >= minX && movex < sw) {
              this.cutWidth = sw - movex;
              this.cutStartX = sx + movex;
            }
            if (sy + movey >= minY && movey < sh) {
              this.cutHeight = sh - movey;
              this.cutStartY = sy + movey;
            }
            this.changeCutArea();
          };
          break;
        case "rt":
          document.onmousemove = (ee) => {
            let movex = ee.x - se.x;
            let movey = ee.y - se.y;
            if (sx + sw + movex <= maxX && sw > -movex) {
              this.cutWidth = sw + movex;
            }
            if (sy - movey >= minY && -movey < sh - this.borderWidth) {
              this.cutHeight = sh - movey;
              this.cutStartY = sy + movey;
            }
            this.changeCutArea();
          };
          break;
        case "lb":
          document.onmousemove = (ee) => {
            let movex = ee.x - se.x;
            let movey = ee.y - se.y;
            if (sx + movex >= minX && sw > movex) {
              this.cutWidth = sw - movex;
              this.cutStartX = sx + movex;
            }
            if (sy + sh + movey <= maxY && movey > -sh) {
              this.cutHeight = sh + movey;
            }
            this.changeCutArea();
          };
          break;
        case "rb":
          document.onmousemove = (ee) => {
            let movex = ee.x - se.x;
            let movey = ee.y - se.y;
            if (sx + sw + movex <= maxX && sw > -movex) {
              this.cutWidth = sw + movex;
            }
            if (sy + sh + movey <= maxY && sh > -movey) {
              this.cutHeight = sh + movey;
            }

            this.changeCutArea();
          };
          break;
        default:
          break;
      }
    },
    // 裁剪范围
    setCutArea() {
      this.setBorder();
      let cutLeft = document.getElementById("cut_left"),
        cutRight = document.getElementById("cut_right"),
        cutTop = document.getElementById("cut_top"),
        cutBottom = document.getElementById("cut_bottom");
      cutLeft.style.background = "rgba(0,0,0,0.3)";
      cutRight.style.background = "rgba(0,0,0,0.3)";
      cutTop.style.background = "rgba(0,0,0,0.3)";
      cutBottom.style.background = "rgba(0,0,0,0.3)";
      this.setStyle(cutLeft, {
        width:
          Math.abs(this.cutStartX + this.sketchWidth / 2) -
          this.borderWidth +
          "px",
        height: this.sketchHeight + "px",
        top: 0,
      });
      this.setStyle(cutRight, {
        width:
          Math.abs(this.sketchWidth / 2 - (this.cutStartX + this.cutWidth)) -
          this.borderWidth +
          "px",
        height: this.sketchHeight + "px",
        top: 0,
        right: 0,
      });
      this.setStyle(cutTop, {
        width: this.cutWidth + 2 * this.borderWidth + "px",
        height:
          Math.abs(this.sketchHeight / 2 + this.cutStartY) -
          this.borderWidth +
          "px",
        top: 0,
        left:
          Math.abs(this.cutStartX + this.sketchWidth / 2) -
          this.borderWidth +
          "px",
      });
      this.setStyle(cutBottom, {
        width: this.cutWidth + 2 * this.borderWidth + "px",
        height:
          this.sketchHeight -
          Math.abs(this.sketchHeight / 2 + this.cutStartY) -
          this.cutHeight -
          this.borderWidth +
          "px",
        top:
          Math.abs(this.sketchHeight / 2 + this.cutStartY) +
          this.cutHeight +
          this.borderWidth +
          "px",
        left:
          Math.abs(this.cutStartX + this.sketchWidth / 2) -
          this.borderWidth +
          "px",
      });
    },
    // 设置样式
    setStyle(dom, css) {
      for (let prop in css) {
        dom.style[prop] = css[prop];
      }
    },
    // 启动涂鸦
    toggleGraffiti() {
      this.canCut = false;
      this.scrawl = !this.scrawl;
      if (this.scrawl) {
        canvas.addEventListener("mousedown", this.DrawLine);
      } else {
        canvas.removeEventListener("mousedown", this.DrawLine);
      }
    },
    // 划线
    DrawLine(e) {
      cxt.beginPath();
      let canvasPosition = canvas.getBoundingClientRect();
      let ox =
          (1 / this.scale) * (e.clientX - canvasPosition.left - this.center.x),
        oy =
          (1 / this.scale) * (e.clientY - canvasPosition.top - this.center.y);
      let start = this.computedDrawLine(ox, oy);
      cxt.moveTo(start.x, start.y);
      cxt.strokeStyle = "red";
      canvas.onmousemove = (event) => {
        let ox2 =
            (1 / this.scale) *
            (event.clientX - canvasPosition.left - this.center.x),
          oy2 =
            (1 / this.scale) *
            (event.clientY - canvasPosition.top - this.center.y);
        let moveS = this.computedDrawLine(ox2, oy2);
        cxt.lineTo(moveS.x, moveS.y);
        cxt.stroke();
      };
      canvas.onmouseup = () => {
        canvas.onmousemove = null;
      };
    },
    // 涂鸦路线
    computedDrawLine(x, y) {
      let tmp = x;
      switch (this.direction) {
        case 1:
          break;
        case 2:
          x = y;
          y = -tmp;
          break;
        case 3:
          x = -x;
          y = -y;
          break;
        case 4:
          x = -y;
          y = tmp;
          break;
      }
      return {
        x,
        y,
      };
    },
    // 生成图片
    canvasToUrl() {
      this.endImage = "";
      // 在新的画布上绘制
      const sketch = document.getElementById("sketch");
      const sketchCxt = sketch.getContext("2d");
      sketchCxt.clearRect(0, 0, this.sketchWidth, this.sketchHeight);
      let x = 0,
        y = 0,
        width = 0,
        height = 0;
      if (this.canCut) {
        x = this.cutStartX - this.borderWidth + this.sketchWidth / 2;
        y = this.cutStartY - this.borderWidth + this.sketchHeight / 2;
        width = this.cutWidth + 2 * this.borderWidth;
        height = this.cutHeight + 2 * this.borderWidth;
      } else {
        if (this.sketchWidth > this.sketchHeight) {
          // 图片横向
          x = 0;
          y = (this.scopeY - this.sketchHeight) / 2;
          if (this.scale < 1) {
            x = (this.scopeX - this.sketchWidth) / 2;
          }
        } else {
          // 图片竖向
          x = (this.scopeX - this.sketchWidth) / 2;
          y = 0;
          if (this.scale < 1) {
            y = (this.scopeY - this.sketchHeight) / 2;
          }
        }
        if (this.scale > 1) {
          width = this.sketchWidth * this.scale;
          height = this.sketchHeight * this.scale;
        } else {
          width = this.sketchWidth;
          height = this.sketchHeight;
        }
      }
      width = width > this.maxWidth ? width : this.maxWidth;
      height = height > this.maxHeight ? height : this.maxHeight;
      let canvasData = cxt.getImageData(x, y, width, height);
      sketchCxt.putImageData(canvasData, 0, 0);
      let url = sketch.toDataURL("image/png", 1);
      this.endImage = url;
    },
  },
});

// CONCATENATED MODULE: ./packages/ImageViewer/src/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/ImageViewer/src/index.vue?vue&type=style&index=0&id=0ffcbb06&lang=scss&scoped=true
var srcvue_type_style_index_0_id_0ffcbb06_lang_scss_scoped_true = __webpack_require__("9a9b");

// CONCATENATED MODULE: ./packages/ImageViewer/src/index.vue





srcvue_type_script_lang_js.render = render
srcvue_type_script_lang_js.__scopeId = "data-v-0ffcbb06"

/* harmony default export */ var ImageViewer_src = (srcvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/index.js

const components = [ImageViewer_src]

const install = function(Vue ) { 
  components.forEach(component => {
    Vue.component(component.name, component);
  }); 
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  version: '2.15.1', 
  install, 
  ImageViewer: ImageViewer_src
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=image-viewer-editor.umd.js.map