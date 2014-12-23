webpackJsonp([0],[
/* 0 */
/*!************************!*\
  !*** ./src/js/feed.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../css/feed.css */ 3);
	var $ = __webpack_require__(/*! jquery */ 6);
	
	$('body').css('border', '1px dashed black');


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/*!**************************!*\
  !*** ./src/css/feed.css ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./~/css-loader!./src/css/feed.css */ 4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./~/style-loader/addStyles.js */ 5)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/pilou/dev/bundle-build/node_modules/css-loader/index.js!/Users/pilou/dev/bundle-build/src/css/feed.css", function() {
			var newContent = require("!!/Users/pilou/dev/bundle-build/node_modules/css-loader/index.js!/Users/pilou/dev/bundle-build/src/css/feed.css");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/*!*****************************************!*\
  !*** ./~/css-loader!./src/css/feed.css ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./~/css-loader/cssToString.js */ 7)();
	__webpack_require__(/*! ./~/css-loader/mergeImport.js */ 8)(exports, __webpack_require__(/*! -!./~/css-loader!./common.css */ 9), "");
	exports.push([module.id, "\n\nbody {\n    color: purple;\n}\n", ""]);

/***/ }
]);
//# sourceMappingURL=feed.js.map