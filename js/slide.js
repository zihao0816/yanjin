
//图片轮播
  $(function () {
    var len = $("#slide_img ul li").length;
//  console.log(len);
	//获取图片
	
	//记录下标
    var index = 0;
    //计时器
    var picTimer;
    //创建轮播小圆点
    var btn = '<div class="slide_controls">';
    //遍历
    for (var i = 1; i <= len; i++) {
        btn += "<span>" + i + "</span>";
    }
    btn += "</div>";
    //给slide_img添加小圆点
    $('#slide_img').append(btn);
    //找到第一个li添加class属性
    $("#slide_img ul li").eq(0).addClass('active');
    
    $("#slide_img span").mouseover(function () {
        index = $("#slide_img span").index(this);
				clearInterval(picTimer);
        showPics(index);
    }).eq(0).trigger("mouseover");

    $("#slide_img ul").hover(function () {
        clearInterval(picTimer);
    }, function () {
        picTimer = setInterval(function () {
            showPics(index);
            index++;
            if (index == len) { index = 0; }
        }, 2000);
    }).trigger("mouseleave");

    function showPics(index) {
        $("#slide_img ul li").eq(index).addClass('active').siblings().removeClass();
        $("#slide_img span").removeClass("cur").eq(index).addClass("cur");

    }
    
    
});



//底部品牌轮播
$(function () {
    var index = 0;
    var Swidth = 550;
    var timer = null;
    var Slen = $(".store_box_scroll .scroll_brand").length;
    function NextPage() {
        if (index > Slen - 1) {
            index = 0;
        }
        $(".store_box_scroll .scroll_brand").stop(true, false).animate({ left: -index * Swidth + "px" }, 600)
    }

    function PrevPage() {
        if (index < 0) {
            index = Slen - 1;
        }

        $(".store_box_scroll .scroll_brand").stop(true, false).animate({ left: -index * Swidth + "px" }, 600)
    }



    $(".next").click(function () {
        index++;
        NextPage();
    });

    $(".prev").click(function () {
        index--;
        PrevPage();
    });
})


//小图片轮播
$(function(){
	smallPic(188,".smallpic");
	smallPic(188,".smallpic1");
	smallPic(188,".smallpic2");
	smallPic(188,".smallpic3");
	function smallPic(Swidth,className){
		var index = 0;
		var Swidth = Swidth;
		var timer = null;
		var Slen = $(className).length;
		
		
		function NextPage() {
	    if (index > Slen - 1) {
	        index = 0;
	    }
	    $(className).stop(true, false).animate({ left: -index * Swidth + "px" }, 600)
		}
	
		function PrevPage() {
	    if (index < 0) {
	        index = Slen - 1;
	    }
	
	    $(className).stop(true, false).animate({ left: -index * Swidth + "px" }, 600)
		}
	
	
	
		$(".next").click(function () {
	    index++;
	    NextPage();
		});
	
		$(".prev").click(function () {
	    index--;
	    PrevPage();
		});
		
	}
	
})










