

			//  添加头部尾部
			$(".head_wrap").load("header.html");
			$(".foot_wrap").load("footer.html");
			//  产品简介
			$(".pro_box li").each(function(i,ele){
				$(".pro_box li").eq(i).click(function(){
				$(".pro_bottom>div").eq(i).css("display","block").siblings().css("display","none");
				$(this).css("color","#ff71a7").siblings().css("color","#333");
			 });
			});
			//  图片切换
			$(".onbg").click(function(){
				var bigimg='<div class="thumb" id="thumb">'
				+'<img src="'+$(this).find("img").attr("src")+'"/>'
				+'</div>';
				$(".details_img").append(bigimg);
				$("#thumb").show("fast");
				$(this).css("border","1px solid #ccc").siblings().css("border","none");
			})

			//下拉选项
			$(".btnnav").mouseover(function(){
				$(".shoplist").show();
			});
			setTimeout(function(){
				$(".btnnav").mouseout(function(){
					$(".shoplist").css("display","none");
				});
			},300)
			$(".lists li").each(function(i){
				$(".lists li").mouseover(function(){
				$(".shoplist").show();
				$(this).eq(i).css("background","skyblue").siblings().css("background","white");
			});
			})
			
			
			$(".shoplist").mouseout(function(){
					$(".shoplist").css("display","none");
				});

			//看过的商品添加、删除
			
			//计算总价
			
			
            
            
            
            //添加评论
            
            
            
            //商品详情
            
            var hashname=window.location.hash.substr(1);
			var searchName=window.location.search.substr(1);
			var details="";
			if(searchName=="com"){
				details=product.com_data;
			}else if(searchName=="hot"){
				details=product.hot_data;
			}
			$.each(details,function(i,ele){
				if(details[i].id==hashname){
					$(".f2").html(details[i].id);
					$(".thumb img").attr("src",details[i].srcl);
					$(".onbg img").eq(0).attr("src",details[i].srcl);
					$(".onbg img").eq(1).attr("src",details[i].srcm);
					$(".onbg img").eq(2).attr("src",details[i].srcr);
					$(".name").html(details[i].name);
					$(".grief").html(details[i].grief);
					$(".shop").html(details[i].price);
					$(".market").html(details[i].old);
				}
	
			})
            
            
            
            


//验证码

	var code="";
			var codes=["M","N","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B"];
			function makeCode(len){				
				code="";
				for(var i=0;i<len;i++){
				var index=Math.floor(Math.random()*codes.length);
				code+=codes[index];
				}
				return code;	
			}
		
	var myCode=document.getElementById("myCode");
			makeCode(4);
			myCode.innerHTML=code;			
			myCode.onclick=function(){
			makeCode(4);
			myCode.innerHTML=code;		
			}
			
	var btn=document.getElementById("btn");
			btn.onclick=function(){
				
				var code=document.getElementById("myCode").innerHTML.toLowerCase();
				var ips=document.getElementsByName("captcha")[0].value.toLowerCase();
				//不区分大小写
				if(ips==code&&ips!=""){
					alert("通过验证");
				}else{
					alert("验证码错误");
					document.getElementsByName("captcha")[0].value="";
					document.getElementsByName("captcha")[0].focus();
					makeCode();
					makeCode(4);
					makeCode.innerHTML=code;
				}	
			}
			
			
	
	
	


		//获取cookies
			
var cookies=getCookie("datas");
if(cookies==undefined){
	cookies=getCookie("datas");
	setCookie("datas","[]",50);
}
var cookiesarr=JSON.parse(cookies);


$(".buyt a").eq(0).click(function(){
	var pid=$(".clearfix dd").eq(1).find("font").html();
	var imgSrc=$(".onbg img").eq(0).attr("src");
	var pdes=$(".name").html();
	var pri=$(".clearfix dd").eq(0).find("font").html();
	var price=Number(pri.substr(1,5));
	var pcount=$("#number").val();
	var counts=Number(pcount);
	if(checkishas(pid)){
			updateNum(pid,1);
		}else{
			var obj={
				pid:pid,
				imgSrc:imgSrc,
				pdes:pdes,
				price:price,
				pcount:counts
			}
			console.log(obj);
		var cookies=getCookie("datas");
		var cookiesarr=JSON.parse(cookies);
		cookiesarr.push(obj);
		var cookiesarrstr=JSON.stringify(cookiesarr);
		setCookie("datas",cookiesarrstr,50);
		}		
		
    })


