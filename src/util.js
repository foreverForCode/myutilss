
import type from './type';

var util = {};

util.extend = function(){

	var options, name, src, copy, deep = false, target = arguments[0], i = 1, length = arguments.length;
	if (typeof (target) === "boolean") deep = target, target = arguments[1] || {}, i = 2;
	if (typeof (target) !== "object" && typeof (target) !== "function") target = {};
	if (length === i) target = this, --i;
	for (; i < length; i++) {
		if ((options = arguments[i]) != null) {
			for (name in options) {
				src = target[name], copy = options[name];
				if (target === copy) continue;
				if (copy !== undefined) target[name] = copy;
			}
		}
	}
	return target;
}


export default util

