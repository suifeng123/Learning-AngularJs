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

//修复IE中没有trim的缺点
var trim = (function(){
	if(!String.prototype.trim){
        return funtion(value){
        	return isString(value) ? value.replace(/^\s*/,"").replace(/\s*$/,'')
        };
	}

	return function(value){
         return isString(value)?Object.prototype.trim.call(value):value;
	}
})();  //立即执行

function isString(obj){
	return typeof obj === 'string';
}

function isElement(node){
	return node && node.find && (node.name || (node.find && node.on));
}

//写一个函数，将一个以逗号隔开的字符串弄成一个map
function makeMap(str){
	var obj = {};//定义一个对象
	var items = str.split(',');
	var i;

	for(i = 0 ; i < items.length ; i++){
		obj[items[i]] = items[i];
	}
	return obj;
}


function isObject(obj){
	return typeof obj === 'object';
}
function size(obj,ownPropsOnly){
	var size = 0,key;

	if(isArray(obj) || isString(obj)){
		return obj.length;
	}else if(isObject(obj)){
		for(key in obj){
			if(!ownPropsOnly || obj.hasOwnProperty(key)) size++;
		}
	}

   return size;
}

function include(array,obj){
	return indexOf(array,obj);
}

function indexOf(array,obj){
	if(array.indexOf) return array.indexOf(obj);

	for(var i = 0 ; i < array.length ; i++){
		if(obj === array[i]) return  i;
	}
	return -1;
}

function removeArray(array,obj){
	var index = indexOf(array,obj);  //获取obj在对象中的位置
	if(index > 0)
		array.splice(index,1);
	return obj;
}

function isLeafNode(node){
	if(node){
		switch(node.nodeName){
			case 'OPTION':
			case "PRE":
			case 'TITLE':
			return true;
		}
	}
	return false;
}

function copy(source,desitination){
	if(isWindow(source) || isScope(source)){
		throw Error("source is can not copy")
	}

	if(!desitination){
		source = desitination;
		if(source){
          if(isArray(source)){
          	desitination = copy(source,[]);
          }else if(isDate(source)){
          	desitination = new Date(source.getTime());
          }else if(isRegExp(source)){
          	desitination = new RegExp(source.source);
          }else if(isObject(source)){
          	desitination = copy(source,{});
          }

		}
	}else{
		if(source === desitination){
			throw Error("source is the same with the desitination");
		}

		if(isArray(source)){
			desitination.length = 0;
			//下面开始遍历,如果是单个没有特殊的个体，只需直接复制
			for(var i = 0 ; i < source.length ; i++){
				desitination.push(copy(source[i]));
			}
		}
	}
}

function toJsonReplacer(key,value){

}

function startingTag(element){

}

function angularInit(element,bootstrap){
	var elements = [element];
	var appElement,module,
	names = ['ng:app','ng-app','x-ng-app','data-ng-app'],
	NG_APP_CLASS_REGEXP = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
	
}

