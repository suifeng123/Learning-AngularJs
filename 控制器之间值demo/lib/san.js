var obj = {
	name:'wangshengwem'
}; //用来监听的数据


function scan(value){
	//进行扫描数据,发现数据是不是发生了变化
	if(obj.name !== value){
	     console.log('数值发生了变化了');	
	}
    console.log('数值没有发生变化');
}

function mySet(newVal){
	//这个函数用来设置重新
	var oldValue = obj.name;
	console.log(obj);
	obj.name = newVal;
	scan(oldValue);
}

function _mySet(newVal){
	 return function(){
	 	return mySet(newVal);
	 }
}

//setInterval(_mySet(Math.random()+" "),2000);
//首先把setInterval这个
var sto = global.setInterval;
global.setInterval = function(callback,timeout,param){
    //在这个函数中 callback 是回调函数，timeout是
    var args = Array.prototype.slice.call(arguments,2);
    var _cb = function(){
    	callback.apply(null,args);
    }

    sto(_cb,timeout);
}

setInterval(mySet,2000,'sadfdsa');
