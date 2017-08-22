webpackHotUpdate(0,{

/***/ "xu7D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var actions = {
	linking: function linking(patch_url) {
		return {
			type: "LINKING",
			patch_url: patch_url,
			id: Math.round(Math.random() * 100)
		};
	}
	// createInfoProduct: function(){
	// 	return{
	// 		type: "INFO_PRODUCT",
	// 		id: Math.round(Math.random() * 100)
	// 	}
	// },
	// increaseNumber: function(quantity){
	// 	return{
	// 		type: "INCREASE_NUMBER",
	// 		quantity: quantity + 1
	// 	}
	// },
	// decreaseNumber: function(quantity){
	// 	return{
	// 		type: "DECREASE_NUMBER",
	// 		quantity: quantity - 1
	// 	}
	// }
};

exports.default = actions;

/***/ })

})
//# sourceMappingURL=modules.map