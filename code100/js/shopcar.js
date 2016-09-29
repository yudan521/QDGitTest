$(function(){
	/*$('.img01').css('width','0').css('height','0').css('border','0')*/
	$('#sort').find($('span')).css('color','#282924');
	//通过json来创建右侧商品
	ajax("get", "http://10.30.162.22/code100/json/shopcar.json", "", function(data){
		var arr = JSON.parse(data)._data;
		for(var i = 0; i < arr.length; i++){
			var div1 = $('<div class ="buy01"></div>');
			div1.appendTo($('.buy_l'));
			$('.buy01').css({width:'101px',height:'537px'})
			for(var j = 0; j < arr[i].des.length; j++){
				var img = $('<img class="img05"/>');
				img.attr('src',arr[i].des[j].img);
				img.appendTo(div1);
				$('.img05').css({width:'99px',height:'99px',border:'1px solid #e5e5e5',float:'left',marginBottom:'12px'})
			}
		}
		$('.buy_l').css('overflow','hidden')
		$('.buy_l').find('img').css('cursor','pointer')
		//$('.buy_l').find('.buy01').css('margin-top','-451px')
		$('.buy01').eq(0).find('img').eq(0).css('border','2px solid #545555')
		$('.buy_r5').find('img').eq(0).click(function(){
			$('.buy01').eq(0).find('img').eq(0).css('border','2px solid #545555')
			$('.buy_l').find('.buy01').css('margin-top','0');
		});
		$('.buy_r5').find('img').eq(1).click(function(){
			$('.buy_l').find('.buy01').css('margin-top','-451px');
			$('.buy01').eq(1).find('img').eq(0).css('border','2px solid #545555')

		});
		//当鼠标滑到左边小图，大图在右边显示
		$('.buy_l').find('img').mouseover(function(){
			$('.buy_m').children().remove();
			var img1 = $('<img/>');
			img1.attr('src', $(this).attr('src'));
			img1.css({width:'542px',height:'535px'})
			img1.appendTo($('.buy_m'))
			$('.buy_l').find('img').css('border','1px solid #e5e5e5')
			$(this).css('border','2px solid #545555')
		})
		//$('.buy_m').
		var img2 = $('<img src = "http://361img.361sport.com.cn/product/2016/02/19/56c6e46516c35.jpg"/>')
		img2.css({width:'532px',height:'535px'})
		img2.appendTo($('.buy_m'))
		$('.buy_r5').find('img').eq(1).click(function(){
			img2.attr('src','http://361img.361sport.com.cn/product/2016/02/19/56c6e4664d390.jpg')
		})
		$('.buy_r5').find('img').eq(0).click(function(){
			img2.attr('src','http://361img.361sport.com.cn/product/2016/02/19/56c6e46516c35.jpg')
		})
	})
	var sel = 0;
	$('.buy_r5').find('img').click(function(){
		$('.buy_r5').find('img').css('border','1px solid #efeeef')
		$(this).css('border','1px solid #f39800')
		$('.buy_r5').find('img').removeClass('shopcolor')
		$(this).addClass('shopcolor')
		sel++
		//alert(sel)
	})
	//立即购买与加入购物车的提示
	var aDiv1 = $('<div></div>')
	aDiv1.css({width:'200px',height:'60px',border:'1px solid #000',position:'fixed',top:'200px',left:'700px',zIndex:'20',color:'#000',font:'20px/60px ""',background:'#fff',textAlign:'center',borderRadius:'4px',display:'none'})
	aDiv1.appendTo($('#sort'))
	$('.buy_r91').click(function(){
		if(sel == 0){
			//alert('请选择商品颜色')
			aDiv1.html('请选择商品颜色').delay(2000).hide(0);
			aDiv1.css('display','block')
		}else if(selm == 0){
			//alert('请选择商品尺码')
			aDiv1.html('请选择商品尺码').delay(2000).hide(0);
			aDiv1.css('display','block')
		}
	})
	//加入购物车

	sc_car()
	$('.buy_r92').click(function(){
		if(sel == 0){
			//alert('请选择商品颜色')
			aDiv1.html('请选择商品颜色').delay(2000).hide(0);
			aDiv1.css('display','block')
		}else if(selm == 0){
			//alert('请选择商品尺码')
			aDiv1.html('请选择商品尺码').delay(2000).hide(0);
			aDiv1.css('display','block')
		}
//////////////////////////////////////////////////////////////////////////////////////////////////////
		var arr9 = {'title':'images/m_56c6e46516c35.jpg','des':'连帽套头卫衣','price':'￥149.00','num':'1','VIPprice':'149.00',}
		/*var obj = {'_data':arr9};
		var str = JSON.stringify(obj);*/
		//alert(str)
		//判断商品是不是第一次
		var first = $.cookie('goods') == null ? true : false;
		var same = false;
		if(first){
			//alert(111)
			//'[{id:'+id+',num:1}]'
			//第一次添加，建立json结构
			$.cookie('goods','[{title:"images/m_56c6e46516c35.jpg",des:"连帽套头卫衣",num:"1",price:"149.00"}]');
			//alert($.cookie('goods'))
			$.cookie('first','false');
		}else{
			var str11 = $.cookie('goods');
			//alert(str11)
			//alert('ll')
			var arr11 = eval(str11);
			//遍历所有对象。如果id相同，让该商品数量递增 ;
			for(var attr in arr11){
				if(arr11[attr].title == 'images/m_56c6e46516c35.jpg'){		
					arr11[attr].num = Number(arr11[attr].num) + 1;  //让json结构中num自增。
					var cookieStr = JSON.stringify(arr11);//将json对象转换成字符串.
					$.cookie('goods',cookieStr);
					//same = true;
				}
			}

		}
		sc_car()
	})
	function sc_car(){
		var sc_str = $.cookie('goods');
		if(sc_str){ //如果购物车cookie不为空
			var sc_obj = eval(sc_str);
			var sc_num = 0;
			for(var i in sc_obj){
				sc_num = Number(sc_obj[i].num) + sc_num;
			}
			
			$('.scroll1').find('span').html(sc_num)
			$('.img02').find('span').html(sc_num)
		}
	}	

	//尺码选择
	var selm = 0;
	$('.buy_r6').find('em').click(function(){
		$('.buy_r6').find('em').css('border','1px solid #dddddd')
		$(this).css('border','1px solid #f99302');
		selm++
	})
	//放大镜的位置
	//$('.buy-m').mouseover()
	$('.buy_m').mousemove(function(ev){
		$('.buy_m1').css('display','block');
		$('.glass').css('display','block');
		//
		$('.glass').children().remove();
		var img3 = $('<img/>');
		img3.attr('src', $(this).find('img').attr('src'));
		img3.css({width:'800px',height:'800px',position:'absolute'})
		img3.appendTo($('.glass'))
		$('.glass').css('overflow','hidden')
		//////////////放大效果
		var left1=ev.pageX - $('.buy_m').offset().left - $('.buy_m1').width()/2;
		if(left1 < 0){
			left1 = 0
		}
		if(left1 > $('.buy_m').width() - $('.buy_m1').width()){
			left1 = $('.buy_m').width() - $('.buy_m1').width()
		}
		//alert(left1)
		//alert(ev.pageX) 
		var top1 =ev.pageY - $('.buy_m').offset().top - $('.buy_m1').height()/2;
		if(top1 < 0){
			top1 = 0
		}
		if(top1 > $('.buy_m').height() - $('.buy_m1').height()){
			top1 = $('.buy_m').height() - $('.buy_m1').height()
		}

		$('.buy_m1').css('left',left1 + 'px').css('top',top1 + 'px');
		var proportionX = left1 / ($('.buy_m').width() - $('.buy_m1').width());
		//alert($('.buy_m').width() - $('.buy_m1').width())
		var proportionY = top1 / ($('.buy_m').height() - $('.buy_m1').height());
		$('.glass').find('img').css('left',-proportionX * ($('.glass').find('img').width() - $('.glass').width())+ 'px')
		$('.glass').find('img').css('top',-proportionY * ($('.glass').find('img').height() - $('.glass').height())+ 'px')
		$('.buy_m1').css('display','block');

	})
	$('.buy_m').mouseout(function(){
		$('.buy_m1').css('display','none');
		$('.glass').css('display','none');
	})
	$('.buy_m').mouseover(function(){
		$('.buy_m1').css('display','block');
		$('.glass').css('display','block');
	})

	//det_t
	$('.det_t').find('p').eq(0).css({height: '110px',borderBottom: '1px dashed #c9c9c9',lineHeight: '110px',textAlign: 'center',marginBottom: '8px'})
	$('.det_t').find('p').eq(1).css({font:"11px/21px ''",color:'#000'})
	$('.det_t').find('p').eq(1).find('span').eq(1).css('margin-left','220px')
	$('.det_t').find('p').eq(1).find('span').eq(2).css('margin-left','161px')
	$('.det_t').find('p').eq(2).css({font:"11px/21px ''",color:'#000'})
	$('.det_t').find('p').eq(3).css({font:"11px/111px ''",color:'#000'})
	$('.eval_t').find('p').eq(0).css({height: '158px',lineHeight: '158px',textAlign: 'center'})
	$('.size_t').find('p').eq(0).css({height: '132px',lineHeight: '132px',textAlign: 'center'});

	$('.details').css('display','block');
	$('.cont_r').find('i').eq(0).css('background','#f9f9f9')
	$('.cont_r').find('i').eq(1).click(function(){
		//$('.cont_r').find('a').css('display','none');
		$('.cont_r').find('i').css('background','#ececec')
		$(this).css('background','#f9f9f9')
		$('.details').css('display','none');
		$('.size').css('display','none');
		$('.evaluate').css('display','block');
		$('#content').css('height','2000px')
	})
	$('.cont_r').find('i').eq(2).click(function(){
		$('.cont_r').find('i').css('background','#ececec')
		$(this).css('background','#f9f9f9')
		$('.details').css('display','none');
		$('.size').css('display','block');
		$('.evaluate').css('display','none');
		$('.cont_r').css('height','800px')
		$('#content').css('height','2000px')
	})
	$('.cont_r').find('i').eq(0).click(function(){
		$('.cont_r').find('i').css('background','#ececec')
		$(this).css('background','#f9f9f9')
		$('.details').css('display','block');
		$('.size').css('display','none');
		$('.evaluate').css('display','none');
	})
	//当按向上向下按钮时购买数量加减
	$('.buy_r73').click(function(){
		var num = parseInt($('.buy_r72').html());
		num++;
		//alert(num)
		$('.buy_r72').html(num)
	})
	$('.buy_r74').click(function(){
		var num = parseInt($('.buy_r72').html());
		num--;
		//alert(num)
		if(num <= 1){
			num = 1
		}
		$('.buy_r72').html(num)
	})


})
