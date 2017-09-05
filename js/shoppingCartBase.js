//获取全部
function getAll(){
	var listStr=getCookie("datas");
	var listObj=JSON.parse(listStr);
	return listObj;	
}

//获取购物车总数
function getTotal(){
	var listObj=getAll();
	var total=0;
	for(var i=0;i<listObj.length;i++){
		total=total+listObj[i].pcount;
	}
	return total;
}

//判断商品是否存在
function checkishas(id){
	var listObj=getAll();
	var ext=false;
	for(var i=0;i<listObj.length;i++){
		if(listObj[i].pid==id){
			ext=true;
			break;	
		}	
	}
	return ext;	
}

//存在后 更新数量
function updateNum(id,num){
	var listObj=getAll();
	for(var i=0;i<listObj.length;i++){
		if(listObj[i].pid==id){
			listObj[i].pcount+=num;	
		}	
	}
	var lisobj=JSON.stringify(listObj);
	setCookie("datas",lisobj,50)		
}

//删除商品
function delProduct(id){
	var listObj=getAll();
	for(var i=0;i<listObj.length;i++){
		if(id==listObj[i].pid){
			listObj.splice(i,1);
		}
		
	}
	var listobj=JSON.stringify(listObj);
	setCookie("datas",listobj,50);
	
}

//设置cookie  ---name --value ---days
	function setCookie(name,value,days){
		var mydate=new Date();
//		escape ---字符串编码
//      unescape---字符串解码
		mydate.setMinutes(mydate.getMinutes()+days);
		document.cookie=name+"="+escape(value)+
		
		((days==null)?"":";expires="+mydate.toGMTString());
		
		//document.cookie="user=666;expires="+mydate.toGMTString()
		
	}
//获取cookie
	function getCookie(name){
			//获取所有cookie
		var x=document.cookie;
	//	console.log(x);
		//分割cookie
		var y=x.split("; ");
		
			//字符串解码unescape
	//		console.log(y);
			//循环数组  =分割  name=value
			for(var i=0;i<y.length;i++){
				var z=y[i].split("=");
				//cookie有没有用户传的name
				if(z[0]==name){
					return unescape(z[1]);
					break;
				}
			}
			
		}		
		
//判断是否存在cookie
	function ishasCookie(name){
		//	返回第一次出现的位置  name=  hh=
		var x=document.cookie.indexOf(name+"=");
		if(x!=-1){
			return true;
		}else{
			return false;
		}
	}
//删除cookie
function delCookie(name){
		var myval=getCookie(name);
		var mydate=new Date();
		mydate.setTime(mydate.getTime()-1);
		if(myval){
			//设置时间-1  --删除
			document.cookie=name+"="+escape(myval)+";expires="+mydate.toGMTString();
		}
}	

//onclick加载事件                    不能在window.onload或者$(function(){})里面用      不然就双重加载数据
function goodsCut(){
				var num_val=document.getElementById('number');
				var new_num=num_val.value;
				 if(isNaN(new_num)){
				 	alert('请输入数字');
				 	return false
				 }
				var Num = parseInt(new_num);
				if(Num>1){
					Num=Num-1;
				}
				
				num_val.value=Num;
			}

function goodsAdd(){
				var num_val=document.getElementById('number');
				var new_num=num_val.value;
				 if(isNaN(new_num)){
				 	alert('请输入数字');
				 	return false
				 }
				var Num = parseInt(new_num);
				Num=Num+1;
				num_val.value=Num;
			}

function TotalPrice(){
				var num_val=document.getElementById('number');
				var new_num=num_val.value;
				var Num=parseInt(new_num);
				var price=document.getElementById("ECS_SHOPPRICE");
				var price_val=Number(price.innerHTML.substr(1,5));
				var totalPrice=document.getElementById("ECS_GOODS_AMOUNT");
				totalPrice.innerHTML="￥"+Num*price_val+"元";
	            
			}
