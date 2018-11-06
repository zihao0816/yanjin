
//创建cookie
function $cookie(key,value,expires){
	var cookieStr = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';
	if(typeof expires === 'number'){
		var date = new Date();
		date.setDate(date.getDate() + expires);
		cookieStr += ";expires=" + date;
	}
	document.cookie = cookieStr;
}


function getCookie(key){
	var arr = document.cookie.split('; ');
	for(var i = 0,len = arr.length;i < len;i ++){
		var list = arr[i].split('=');
		if(encodeURIComponent(key) === list[0]){
			return decodeURIComponent(list[1]);
		}
	}
}

//删除cookie
function removeCookie(key){
	document.cookie = encodeURIComponent(key) + '=;expires=' + new Date(0) + ";path=/";
}