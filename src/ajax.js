/**
 * ajax 原生封装
 *
 * eg：
 * ajax({
        url: "./TestXHR.aspx",              //请求地址
        type: "POST",                       //请求方式
        data: { name: "super", age: 20 },        //请求参数
        dataType: "json",
        success: function (response, xml) {
            // 此处放成功后执行的代码
        },
        fail: function (status) {
            // 此处放失败后执行的代码
        }
    });
 *
 * */

import promise from 'es6-promise';

function Ajax(options){

	let defaultOpts = {

		cache : false,		// 	请求数据是否缓存
		type  : "GET",		//	请求类型	GET | POST
		dataType : 'json'	//	返回数据类型
	}

	this.opts = {defaultOpts, ...options};

}

Ajax.prototype.init = function () {

	new promise((resolve, reject) => {

		return ajax(this.opts, resolve, reject)
	})
}

Ajax.prototype.get = function () {

	var type = {type : 'GET'};

}
function ajax(options, resolve, reject){

	options = options || {};

	options.type = (options.type || "GET").toUpperCase();
	options.dataType = options.dataType || "json";

	var params = formatParams(options.data);

	// 创建 -- 非IE6 - 第一步

	if(window.XMLHttpRequest){

		var xhr = new XMLHttpRequest();
	}else{

		var xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}

	// 连接 + 发送

	if(options.type == "GET"){

		xhr.open("GET", options.url + "?" + params, true);
		xhr.send(null);
	}else if(options.type == "POST"){

		xhr.open("POST", options.url, true);

		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xhr.send(params);
	}


	// 接收

	xhr.onreadystatechange = function () {

		if(xhr.readyState == 4){

			var status = xhr.status;

			if(status >= 200 && status <= 300){

				resolve(xhr.responseText, xhr.responseXML);
				options.success && options.success(xhr.responseText, xhr.responseXML);
			}else{

				reject(status);
				options.fail && options.fail(status);
			}
		}
	}
}

/**
 * @desc 传输数据格式化
 *
 * @params data [object]
 * */
function formatParams(data) {

	var arr = [];

	for(var name in data){

		arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
	}

	// 清除接口缓存
	arr.push(("v=" + Math.random()).replace(".", ""));

	return arr.join("&")
}