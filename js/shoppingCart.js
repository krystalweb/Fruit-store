
$(function(){
	
			$("#head").load("header.html");
			$("#foot").load("footer.html");
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
})
				
			

			
			
			
var listObj=getAll();
var box=document.getElementsByClassName('list')[0];
var table=document.getElementById("table");
var tbody=document.getElementById("tbody");
var tfoot=document.getElementById("tfoot");
console.log(listObj);
if(listObj.length==0){
	box.style.display="block";
	table.style.display="none";	
}else{
	box.style.display="none";
	table.style.display="block";
	for(var i=0;i<listObj.length;i++){
		console.log(11);
		var tr=document.createElement("tr");
		tr.innerHTML='<td><input type="checkbox" class="ck"/></td>'
						+'<td><img style="width: 200px; height: 150px;" src="'+listObj[i].imgSrc+'"/></td>'
						+'<td>'+listObj[i].pid+'</td>'
						+'<td>'+listObj[i].pdes+'</td>'
						+'<td><button class="down">-</button><input class="num" type="text"  value="'+listObj[i].pcount+'"/><button class="up">+</button></td>'
						+'<td>'+listObj[i].price+'</td>'
						+'<td>'+listObj[i].pcount*listObj[i].price+'</td>'
						+'<td><button class="del">删除</button></td>'
		tr.setAttribute("id",listObj[i].pid);
		tbody.appendChild(tr);	
	}
}

var showTotal=document.getElementById("showTotal");
var cks=document.querySelectorAll(".ck");
 function getTotalPrice(){
 	cks=document.querySelectorAll(".ck");
 	var sum=0;
 		for(var i=0;i<cks.length;i++){
 			if(cks[i].checked==true){
 				var tr=cks[i].parentNode.parentNode;
 				var temp=tr.children[6].innerHTML;
 				sum+=Number(temp);
 			}
 		}
 		return sum;
 	
 }

for(var i=0;i<cks.length;i++){
	cks[i].onchange=function(){
		ischeckAll();
		showTotal.innerHTML="总价格："+getTotalPrice();	
	}	
}

var checkall=document.getElementById("allCheck");
checkall.onchange=function(){
	for(var i=0;i<cks.length;i++){
		cks[i].checked=this.checked;	
	}
	showTotal.innerHTML="总价格："+getTotalPrice();	
}

function ischeckAll(){
	var flag=true;
	for(var i=0;i<cks.length;i++){
		if(cks[i].checked==false){
			flag=false;			
		}	
	}
	if(flag){
		checkall.checked=true;
	}else{
		checkall.checked=false;
	}	
}

var add=document.getElementsByClassName("up");
var jian=document.getElementsByClassName("down");
var inps=document.querySelectorAll(".num");
var dels=document.querySelectorAll(".del");
for(var i=0;i<add.length;i++){
	add[i].onclick=function(){
		var txtnum=this.previousElementSibling;
		txtnum.value=Number(txtnum.value)+1;
		var tr=this.parentNode.parentNode;
		var pid=tr.getAttribute('id');
		updateNum(pid,1);
		var price=tr.children[5].innerHTML;
		tr.children[6].innerHTML=Number(txtnum.value)*Number(price);
		var myck=tr.children[0].firstElementChild;
		if(myck.checked==true){
			showTotal.innerHTML=getTotalPrice();
		}		
	}
	
	jian[i].onclick=function(){
		var texnum=this.nextElementSibling;
		texnum.value=Number(texnum.value)-1;
		var tr=this.parentNode.parentNode;
		var pid=tr.getAttribute("id");
		if(texnum.value<1){
			texnum.value=1;
		}else{
			updateNum(pid,-1);
		}
		var price=tr.children[5].innerHTML;
		tr.children[6].innerHTML=Number(texnum.value)*Number(price);
		var mycks=tr.children[0].children[0];
		if(mycks.checked==true){
			showTotal.innerHTML=getTotalPrice();
			
		}
		
		
	}
	inps[i].onblur=function(){
		var num=parseInt(this.value);
		this.value=num;
		if(num<1||isNaN(num)){
			alert("输入有误");
			this.value=1;
			return;
			
		}
		var tr=this.parentNode.parentNode;
		var pid=tr.getAttribute("id");
		var price=tr.children[5].innerHTML;
		tr.children[6].innerHTML=Number(num)*Number(price);
		var mychek=tr.children[0].children[0];
		if(mychek.checked==true){
				showTotal.innerHTML=getTotalPrice();
			}
		
		var listObj=getAll();
		for(var j=0;j<listObj.length;j++){
			if(pid==listObj[j].pid){
				listObj[j].pcount=num;
			}
			
			
		}
		listobjstr=JSON.stringify(listObj);
		setCookie("datas",listobjstr,50);
	}
	dels[i].onclick=function(){
		var tr=this.parentNode.parentNode;
		var pid=tr.getAttribute("id");
		tr.remove();
		delProduct(pid);
		if(tbody.children.length==0){
			box.style.display="block";
			table.style.display="none";
		}
		showTotal.innerHTML=getTotalPrice();
	}
	
}			

//var cookies=delCookie("datas");
