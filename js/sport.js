
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,true)[attr];
}

function sport(obj,json,fn){
	clearInterval(obj.timer);
	
	obj.timer = setInterval(()=>{
		//检测停止的开关
		var stop = true;
		
		//遍历对象
		for(var attr in json){
			
			//1.获取当前值
			var cur = attr === 'opacity' ? parseInt(parseFloat(getStyle(obj,attr))*100) : parseInt(getStyle(obj,attr));
			
			//2.设置速度
			var speed = (json[attr] - cur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			
			//3.检测停止
			if(cur !== json[attr]){
				stop = false;
			}
			
			//4.运动
			if(attr === 'opacity'){
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
			}else{
				obj.style[attr] = cur + speed + 'px';
			}
		}
		
		//停止定时器
		if(stop){
			clearInterval(obj.timer);
			
			if(typeof fn === 'function'){
				fn();
			}
		}
	},30)
}
