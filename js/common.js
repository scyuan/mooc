
var wenzi = ['意见反馈','常见问题','APP下载<div class="app-qrcode"></div>','官方微信<div class="wx-qrcode"></div>'];
var icon =['<i class="icon">&#xe61e;</i>','<i class="icon">&#xe619;</i>','<i class="icon">&#xe61a;</i>','<i class="icon">&#xe62b;</i>'];

$('.info-block').on('mouseenter',function(){
	var index = $(this).index();
	
	$(this).html(wenzi[index]);
}).on('mouseleave',function(){
	var index = $(this).index();
	
	$(this).html(icon[index]);
})