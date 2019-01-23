
/**
 * @desc	基本类型判断
 *
 * @example	string | number | array | object |	bool | function
 *
 * */

var Type = (function(){

	var type = {};
	var typeArr = ['String', 'Object', 'Number', 'Array','Undefined', 'Function', 'Null', 'Symbol'];
	for (var i = 0; i < typeArr.length; i++) {
		(function(name) {
			type['is' + name] = function(obj) {
				return Object.prototype.toString.call(obj) == '[object ' + name + ']';
			}
		})(typeArr[i]);
	}
	return type;

})()

export default Type;


