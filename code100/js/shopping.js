$(function(){
	$('.shop_bt').find('li').eq(0).css({width:'56px'})
	$('.shop_bt').find('li').eq(1).css({width:'140px'})
	$('.shop_bt').find('li').eq(2).css({width:'198px'})
	$('.shop_bt').find('li').eq(3).css({width:'171px'})
	$('.shop_bt').find('li').eq(4).css({width:'161px'})
	$('.shop_bt').find('li').eq(5).css({width:'127px'})
	$('.shop_bt').find('li').eq(6).css({width:'148px'})
	$('.shop_bt').find('li').eq(7).css({width:'88px'})

	

	$('.shop_bb').find('ul').css({width:'1089px',height:'109px',border:'1px solid #e9e9e9'})
	$('.shop_bb').find('li').eq(0).css({width:'56px',height:'109px'})
	$('.shop_bb').find('li').eq(1).css({width:'118px',height:'109px'})
	$('.shop_bb').find('li').eq(2).css({width:'167px',height:'109px'})
	$('.shop_bb').find('li').eq(3).css({width:'171px',height:'109px',lineHeight:'109px'})
	$('.shop_bb').find('li').eq(4).css({width:'161px',height:'109px',position:'relative'})
	$('.shop_bb').find('li').eq(5).css({width:'127px',height:'109px',lineHeight:'109px'})
	$('.shop_bb').find('li').eq(6).css({width:'148px',height:'109px',lineHeight:'109px'})
	$('.shop_bb').find('li').eq(7).css({width:'88px',height:'109px',lineHeight:'109px'})
	$('.shop_bb').find('li').eq(4).find('div').css({width:'77px',height:'24px',border:'1px solid #dcd9da',marginTop:'41px',marginLeft:'41px'})	
	$('.shop_bb').find('li').eq(4).find('div').find('span').eq(0).css({width:'24px',height:'24px',display:'block',float:'left',borderRight:'1px solid #e4e3e6',lineHeight:'24px'})
	$('.shop_bb').find('li').eq(4).find('div').find('span').eq(2).css({width:'24px',height:'24px',display:'block',float:'left',borderLeft:'1px solid #e4e3e6',lineHeight:'24px'})
	

	var sc_str = $.cookie("goods");
	//alert(typeof sc_str)//[{"title":"images/m_56c6e46516c35.jpg","des":"连帽套头卫衣","num":8}]
	if(sc_str){
		var sc_obj = eval(sc_str);
		//alert(sc_obj[0].title)//images/m_56c6e46516c35.jpg
		var sc_num = 0;
		//$('.shop_bb').find('li').eq(1).
		var aImg = $('<img/>')
		aImg.attr('src',sc_obj[0].title)
		aImg.appendTo($('.shop_bb').find('li').eq(1))
		aImg.css({width:'74px',height:'77px',marginTop:'10px'}) 
		$('.shop_bb').find('li').eq(2).html(sc_obj[0].des).css('lineHeight','109px')
		$('.shop_bb').find('li').eq(4).find('div').find('span').eq(1).css({width:'27px',height:'24px',float:'left',lineHeight:'24px'}).html(sc_obj[0].num)
		$('.shop_bb').find('li').eq(3).html(sc_obj[0].price)
		$('.shop_bb').find('li').eq(5).html(sc_obj[0].price)
		
	
	}
	$('.shop_f1').css('cursor', 'pointer')
	$('.shop_f3').css('cursor', 'pointer').css('position','absolute').css('right','41px')
	var shopnum = parseInt($('.shop_f2').html());
	$('.shop_f1').click(function(){
		
		shopnum--;
		if(shopnum == 0){
			shopnum = 1
		}
		$('.shop_f2').html(shopnum)
	})
	$('.shop_f3').click(function(){
		var shopnum = parseInt($('.shop_f2').html());
		shopnum++;
		$('.shop_f2').html(shopnum)
	})
	//计算总价
	var total = 0;
	if(shopnum){
		total = shopnum * 149.00
	}else{
		total = 0
	}
		
	$('.shop_bb').find('li').eq(6).html('￥' + total + '.00')
	$('.remove').click(function(){
		$(this).parent().parent().remove();
		$.cookie("goods",null);
	})
	if($.cookie("goods") == null){
		$('.shop_m').css('display','block')
	}else{
		$('.shop_m').css('display','none')
	}




})

