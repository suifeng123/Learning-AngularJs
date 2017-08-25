function forEach(obj,iterator,context){
	//在这个函数中，obj是我们处理的，iterator 使我们所需的迭代器
	//context 是函数执行的上下文
	var key;
	if(obj){
		if(typeof obj == 'function'){
			for(key in obj){
				if(key != 'prototype' && key != 'length' && key != 'name
					&& obj.hasOwnProperty(key)){
					iterator.call(iterator,obj[key],key);
				}
			}
		}else if(obj.forEach && obj.forEach !== forEach){
			obj.forEach(iterator,context);
		}else if(isArrayLike(obj)){
			for(key = 0 ; key < obj.length ; key++)
				iterator.call(context,obj[key],key);
		}else{
			for(key in obj){
				if(obj.hasOwnProperty(key)){
					iterator.call(context,obj[key],key);
				}
			}
		}
	}
	return obj;	
}


function isArrayLike(obj){
	//判断一个函数是否是类数组
	if(obj === null || isWindow(obj) ){
		return false;
	}
	var length = obj.length;

	if(obj.nodeType === 1 && length){
		return true;
	}

   return isArray(obj) || !isFunction(obj) &&
   (length === 0 || typeof length === "number" && length > 0 && (length-1) in obj);

}

function isFunction(obj){
   return typeof obj == 'function';
}

function isWindow(obj){
	//判断一个对象是否是window对象
	return obj && obj.document && obj.alert && obj.location;
}

function isArray(obj){
	//判断一个数组是否是数组对象
	return Object.prototype.toString.apply(value) == '[object Array]';
}