$(document).ready(function(){
	var $foot_zj = $("#foot_zj");
	var $foot_ls = $("#foot_ls");
	$foot_zj.mouseenter(function(){
		$foot_zj.css("background-image","url(../img/zj2.png)");
	}).mouseleave(function(){
		$foot_zj.css("background-image","url(../img/zj.png)");
	})
	
	$foot_ls.mouseenter(function(){
		$foot_ls.css("background-image","url(../img/ls.png)");
	}).mouseleave(function(){
		$foot_ls.css("background-image","url(../img/ls2.png)");
	})
	

})



//侧边栏
$(function(){
	//个人中心
	$(".menu_top .user_s").mouseenter(function(){
		$(this).css("background","red");
		$(this).next().css("display","block")
					   .animate({left:-88},300,function(){
					   		$(this).fadeOut(300,0,function(){
//						   			$(this).fadeIn(300,1);
					   		});
					   })

	}).mouseleave(function(){
		$(this).css("background","");
	})
	
	
	//购物车
	$(".menu_top .cart").mouseenter(function(){
		$(this).css("background","red");
	}).mouseleave(function(){
		$(this).css("background","");
	})
	
	//资产中心
	$(".menu_top .asset_s").mouseenter(function(){
		$(this).css("background","red");
		$(this).next().css("display","block")
					   .animate({left:-88},300,function(){
					   		$(this).fadeOut(300,0,function(){
//						   			$(this).fadeIn(300,1);
					   		});
					   })

	}).mouseleave(function(){
		$(this).css("background","");
	})
	
	
	//关注商品
	$(".menu_top .goods_s").mouseenter(function(){
		$(this).css("background","red");
		$(this).next().css("display","block")
					   .animate({left:-88},300,function(){
					   		$(this).fadeOut(300,0,function(){
//						   			$(this).fadeIn(300,1);
					   		});
					   })

	}).mouseleave(function(){
		$(this).css("background","");
	})
	
	//浏览历史
	$(".menu_top .history_s").mouseenter(function(){
		$(this).css("background","red");
		$(this).next().css("display","block")
					   .animate({left:-88},300,function(){
					   		$(this).fadeOut(300,0,function(){
//						   			$(this).fadeIn(300,1);
					   		});
					   })

	}).mouseleave(function(){
		$(this).css("background","");
	})
	
	$(".menu_bot .go_top").mouseenter(function(){
		$(this).css("background","red");
		$(this).next().css("display","block")
					   .animate({left:-88},300,function(){
					   		$(this).fadeOut(300,0,function(){
//						   			$(this).fadeIn(300,1);
					   		});
					   })

	}).mouseleave(function(){
		$(this).css("background","");
	})
	
	//返回顶部
	$(".menu_bot .go_top").click(function(){
		$(this).css("background","red");
		$("html,body").animate({scrollTop:0}, 500);
	})
	
})

//二维码展开
$(function(){
	 $("#code").on("mouseenter", function () {
	 	console.log(111);
        var e = $(this).is(":animated");
        if (!e) {
            $(this).find(".code_bar").stop().animate({ height: 0 }, 300);
            $(this).find(".code_detail").addClass("qrcode-hover").stop().animate({ top: "-22px", height: "115px" }, 300);
        }
    });
    $("#code").on("mouseleave", function () {
    	console.log(222);
        var e = $(this).is(":animated");
        if (!e) {
            $(this).find(".code_bar").stop().animate({ height: "26px" }, 300);
            $(this).find(".code_detail").removeClass("active").stop().animate({ top: "26px", height: 0 }, 300);
        }
    })

})
