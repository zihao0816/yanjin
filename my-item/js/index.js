
function banner_play(){
				var note_b =$('#note span');
				var oBigBox = $("#section_banner");
				var oTop = $("#top1");	
				var oBigPic = $('#top1 li');
				var oa = $('#top1 a');
				var banner_pic =$("#top1 img");
				var indexA = 0;
				var timer = null;
				autoPlay();	
				var circle = 0;	
				oa.mouseenter(function(){
						clearInterval(timer);
				})
				oa.mouseleave(function(){
						autoPlay();
				})
				note_b.mouseenter(function(){
				 indexA = $(this).index();
				 console.log(indexA);
					slider();
					})	
			function slider(){					
					for(var i = 0 ;i < oa.length;i ++){
						oBigPic.eq(i).css("display","none");
						note_b.eq(i).removeClass("not_b1");
					}
					note_b.eq(indexA).addClass("not_b1");
					oBigPic.eq(indexA).css("display","block");
	
				}			
			function autoPlay(){
					timer = setInterval(function(){
						indexA ++;
						if(indexA == oBigPic.length){
							indexA = 0;
						}
					slider();
				circle ++;
			if(circle > note_b.length-1){
					circle = 0;
				}
				for(var i = 0,len = note_b.length;i < len;i ++){
					note_b[i].className = '';
				}
				note_b[circle].className = "not_b1";
					},2000)	
				}	
			}
function aside(){
	$("aside p").mouseenter(function(){
		$(this).css({
			border:"1px solid #90c31f",
			borderRight:0
		})
	})
}
function skill(){
	$(".search_right li").on({
		mouseenter :function(){
			color = $(this).css('color');
			$(this).css({
				backgroundColor:"#fff",
				color:"red"
			})
			var index = $(this).index();
			if(index == 0){
				$(".search_right li").eq(1).css("backgroundColor","#f4f4f4")
				$(".search_right p") .eq(0).css("display","block");
				$(".search_right p") .eq(1).css("display","none");
			}else{
				$(".search_right li").eq(0).css("backgroundColor","#f4f4f4")
				$(".search_right p") .eq(1).css("display","block");
				$(".search_right p") .eq(0).css("display","none");	
			}			
		},
		mouseleave : function(){
			$(this).css({
				backgroundColor:"#fff",
				color:color
			});
		}
	})
}
function firstFloor(){
	$("#main1 .main1_left1_top span").on({
		mouseenter:function(){
			var index = $(this).index();
			if(index == 0){
			$("#main1 .main1_left1_top img").eq(0).css("display","block");
			$("#main1 .main1_left1_top img").eq(1).css("display","none");
				$(this).css({
				backgroundColor:"#add351"
			});
			$("#main1 .main1_left1_top span").eq(1).css("backgroundColor","#666666");
			}else{
			$("#main1 .main1_left1_top img").eq(1).css("display","block");
			$("#main1 .main1_left1_top img").eq(0).css("display","none");
				$(this).css({
				backgroundColor:"#add351"
			});
			$("#main1 .main1_left1_top span").eq(0).css("backgroundColor","#666666");
			}
			
		}
	})
}
function sFloor(){
	$("#main2 .main1_left1_top span").on({
		mouseenter:function(){
			var index = $(this).index();
			if(index == 0){
			$("#main2 .main1_left1_top img").eq(0).css("display","block");
			$("#main2 .main1_left1_top img").eq(1).css("display","none");
				$(this).css({
				backgroundColor:"#add351"
			});
			$("#main2 .main1_left1_top span").eq(1).css("backgroundColor","#666666");
			}else{
			$("#main2 .main1_left1_top img").eq(1).css("display","block");
			$("#main2 .main1_left1_top img").eq(0).css("display","none");
				$(this).css({
				backgroundColor:"#add351"
			});
			$("#main2 .main1_left1_top span").eq(0).css("backgroundColor","#666666");
			}
			
		}
	})
}
function thFloor(){
	$("#main3 .main1_left1_top span").on({
		mouseenter:function(){
			var index = $(this).index();
			if(index == 0){
			$("#main3 .main1_left1_top img").eq(0).css("display","block");
			$("#main3 .main1_left1_top img").eq(1).css("display","none");
				$(this).css({
				backgroundColor:"#add351"
			});
			$("#main3 .main1_left1_top span").eq(1).css("backgroundColor","#666666");
			}else{
			$("#main3 .main1_left1_top img").eq(1).css("display","block");
			$("#main3 .main1_left1_top img").eq(0).css("display","none");
				$(this).css({
				backgroundColor:"#add351"
			});
			$("#main3 .main1_left1_top span").eq(0).css("backgroundColor","#666666");
			}
			
		}
	})
}
function loginForm(){
	var res = /^\w{0,5}$/g;
	var res1 =/^\d{7,15}$/g;
	$("#tet").blur(function(){
		if(res.test(this.value)){
			$(".wu3").css("display","block");
		}else{
			$(".wu1").css("display","block");			
		}
	})
	$("#pwd").blur(function(){
		if(res1.test(this.value)){
			$(".wu4").css("display","block");
		}else{
			$(".wu2").css("display","block");			
		}
	})
}
function ajax(){
	$.ajax({
		type:"get",
		url:"JSON/index.json",
		success:function(arr){
				var conSr = "";
			for(var i = 0;i < 5;i ++){
					var pro = arr.seckill.list[i];
				conSr += `<li>
				<a href="">
					<img src="img/${pro.src}" alt="" />
					<p>${pro.name}</p>
					<span>
					<i>￥</i>
					${pro.price}</span>
				</a>
					</li>`;
				}
			$("#seckill ul").html(conSr);
			$(".seckill_left p").mouseenter(function(){
				var conSr = "";
				var indexa = $(this).index();
			for(var i = 0;i < 5;i ++){
				if(indexa == 0){
					var pro = arr.seckill.list[i];
				}else{
					var pro = arr.seck1.list[i];
				}
				conSr += `<li>
				<a href="">
					<img src="img/${pro.src}" alt="" />
					<p>${pro.name}</p>
					<span>
					<i>￥</i>
					${pro.price}</span>
				</a>
					</li>`;
				}
				$("#seckill ul").html(conSr);
			})
		}
	})
}

//function asideTop(){
//	$("#asider p").on({
//		mouseenter:function(){
//			$(this).css({
//				border:"1px solid #90c31f",
//				borderRight:0,
//				background:red
//			})
//			$(".aside_top1").css("display","block");
//		}//,
////		mouseleave:function(){
////			$(this).css({
////				border:0
////			})
////			$(".aside_top1").on({
////				mouseenter:function(){
////					$(this).css("display","block");
////				},
////				mouseleave:function(){
////					$(this).css("display","none");
////				}
////			})
////			$(".aside_top1").css("display","none");
////		}
//	})
//}

