//---------轮播图js-------


$(function(){
	var inow=0;
	var timer="";
//	var onewidth=$(".banner_img li").eq(0).width();
	timer=setInterval(change,3000);
	$(".banner_box li").mouseover(function(){
		        clearInterval(timer);
				inow=$(this).index();
				move();
				$(this).css("background","red");
			})
	$(".banner_box li").mouseout(function(){
		       timer=setInterval(change,3000); 
			   $(this).css("background","black");
			})
	
	
			function change(){
				inow++;
				move();
			}
	
	function move(){
		inow=inow<0?3:inow;
		inow=inow>3?0:inow;
	//	if($(".banner_img li:not(:animated)")){
			$(".banner_img li").eq(inow).fadeIn().siblings().fadeOut();
	//	}
	}
})