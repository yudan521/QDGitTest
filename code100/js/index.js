$(function(){
	//导航栏中所有产品
	$('.header01').hover(function(){
		$('.brand').css('display', 'none')
		$('.dis').css('display', 'block')
	},function(){
		$('.dis').hover(function(){
			$('.dis').css('display', 'block')
		},function(){
			$('.dis').css('display', 'none')
		})
		$('.dis').css('display', 'none')
		
	})
	//当鼠标滑过li的左右两侧是将div都消失
	$('.header02').hover(function(){
		$('.dis').css('display', 'none')
		$('.brand').css('display', 'block')
	},function(){
		$('.brand').hover(function(){
			$('.brand').css('display', 'block')
		},function(){
			$('.brand').css('display', 'none')
		})
		$('.brand').css('display', 'none')
	})

	//所有产品的json
	ajax("get", "http://10.30.162.22/code100/json/index.json", "", function(data){
		var arr = JSON.parse(data).data;
	//创建一个div插在header下边
		var div = $('<div class="dis"></div>');
		$('#header').after($(div));
		var div6 = $('<div class="wrap"></div>');
		$(div6).appendTo($(div));
		//创建6个dl
		for(var i = 0; i < 6; i++){
			var dl = $('<dl></dl>')
			$(dl).appendTo($(div6));
			var dd = $('<dd></dd>')
			dd.html(arr[i].title)
			$(dd).appendTo($(dl));
			for(var j = 0; j < arr[i].des.length; j++){
				var dt = $('<dt></dt>')
				var a = $('<a></a>')
				a.html(arr[i].des[j].title)
				a.attr('href', arr[i].des[j].part)
				$(dt).appendTo($(dl))
				$(a).appendTo($(dt))
			}
		}
		//在所有产品里创建一个div插到大div右侧
		var div1 = $('<div class = "dis_r"></div>')
		$(div1).appendTo($('.dis'))
		for(var i = 6; i <=8; i++){
			var dl = $('<dl></dl>')
			$(dl).appendTo($(div1));
			var dd = $('<dd></dd>')
			dd.html(arr[i].title)
			$(dd).appendTo($(dl));
			var dt = $('<dt></dt>');
			$(dt).appendTo($(dl))
			for(var j = 0; j <arr[i].des.length; j++){
				var a = $('<a></a>')
				var img = $('<img />')
				$(img).css('display','inline')
				//a.html(arr[i].des[j].title);
				img.attr('src', arr[i].des[j].title);
				a.attr('href', arr[i].des[j].part);
				$(a).appendTo($(dt));
				$(img).appendTo($(a));
			} 
		}
		$('.dis_r').find('dd').eq(0).css('font-size', '16px');
		$('.dis_r').find('dd').eq(0).css('color', '#fa9c18');
		//更多品牌的json.
		var div2 = $('<div class="brand"></div>');
		$('#header').after($(div2));
		var div7 = $('<div class="wrap"></div>');
		$(div7).appendTo($(div2));
		for(var i = 9; i <=10; i++){
			var span = $('<span></span>')
			var a = $('<a></a>')
			var img = $('<img/>')
			$(img).css('display','inline')
			$(img).appendTo($(a))
			$(a).appendTo($(span))
			
			img.attr('src', arr[i].title);
			a.attr('href', arr[i].des);
			$(span).appendTo($(div7));

		}
	})
	//banner图中的运动
	//alert($(window).width())浏览器当前窗口可视区域宽度
	var veiwWidth = $(document).width();//1920
	var length = $('.banner01').find('li').length;//5
	$('#banner').css('width',veiwWidth + 'px')
	$('.banner01').find('li').css('width',veiwWidth + 'px')
	$('#banner').find('.banner01').css('width',veiwWidth * length + "px");
	//当滑过标签是的颜色变化
	$('.banner02').find('li').mouseover(function(){

		$('.banner02').find('li').attr('class', '');
		$(this).attr('class', 'active')
		//$('.banner01').css('left', -veiwWidth * $(this).index() + 'px')
		$('.banner01').animate({left: -veiwWidth * $(this).index()},400)
		iNow = $(this).index();
		//alert(iNow)
		//clearInterval(tag)
	})
	//当鼠标移动上去的时候停止运动
	$('#banner').hover(function(){
		clearInterval(tag);
		$('.carousel01').css('display', 'block');
		$('.carousel02').css('display', 'block');
	},function(){
		startMove();
		$('.carousel01').css('display', 'none');
		$('.carousel02').css('display', 'none');
	})
	startMove();
	var iNow = 0;
	function startMove(){
		//clearInterval(tag)
		tag = setInterval(function(){
			iNow++;
			if(iNow == length){
				iNow =0;
			}
			//$('.banner01').css('left', -veiwWidth * iNow + 'px')
			$('.banner01').animate({left: -veiwWidth * iNow},400)
			$('.banner02').find('li').attr('class', '');
			$('.banner02').find('li').eq(iNow).attr('class', 'active')
		},2000)

	}	

	//banner图中左右箭头运动。
	$('.carousel01').click(function(){
		iNow = iNow - 1;
		if(iNow == -1){
			iNow = 4;
		}
		$('.banner01').animate({left: -veiwWidth * iNow},400)
		$('.banner02').find('li').attr('class', '');
		$('.banner02').find('li').eq(iNow).attr('class', 'active')

	})
	$('.carousel02').click(function(){
		iNow = iNow + 1;
		if(iNow == 5){
			iNow = 0;
		}
		$('.banner01').animate({left: -veiwWidth * iNow},400);
		$('.banner02').find('li').attr('class', '');
		$('.banner02').find('li').eq(iNow).attr('class', 'active')
	})


	//show中的鼠标放上去后移动事件
	$('.show_l').hover(function(){
		$('.show_l').find('img').animate({width:403,height:487,marginTop:-10,marginLeft:-10})
	},function(){
		$('.show_l').find('img').animate({width:383,height:467,marginTop:0,marginLeft:0})
	})

	$('.show_m').find('img').hover(function(){
		$(this).animate({width:405,height:487,marginTop:-10,marginLeft:-10})
	},function(){
		$(this).animate({width:385,height:467,marginTop:0,marginLeft:0})
	})

	$('.show_t').find('img').hover(function(){
		$(this).animate({width:425,height:250,marginTop:-10,marginLeft:-10})
	},function(){
		$(this).animate({width:395,height:230,marginTop:0,marginLeft:0})
	})

	$('.show_b').find('img').hover(function(){
		$(this).animate({width:425,height:250,marginTop:-10,marginLeft:-10})
	},function(){
		$(this).animate({width:395,height:230,marginTop:0,marginLeft:0})
	})
//imglist中imglist_t的数据
	ajax("get", "http://10.30.162.22/code100/json/imglist.json", "", function(data){
		var obj1 = JSON.parse(data)[0];
		var arr1 = obj1.data;
		//var arr1 = JSON.parse(data).data;
		for(var i = 0; i < arr1.length; i++){
			var oDiv = $('<div class="imglist_div"></div>');
			$(oDiv).appendTo($('.imglist_t'));
			var a = $('<a></a>');
			a.appendTo($(oDiv));
			a.attr('href',arr1[i].href);
			var oImg = $('<img/>')
			oImg.attr('src',arr1[i].img)
			oImg.appendTo($(a));
			var oDiv1 = $('<div class="imglist_tb"></div>')
			oDiv1.html(arr1[i].title)
			oDiv1.appendTo($(oDiv));
		}
		$('.imglist_div').eq(arr1.length - 1).addClass('aa');
		$('.imglist_div').hover(function(){
			$(this).find('img').stop().animate({width:208,height:297,marginTop:-10,marginLeft:-10})
			$(this).find($('.imglist_tb')).css('background','#cf7d0b')
		},function(){
			$(this).find('img').stop().animate({width:188,height:277,marginTop:0,marginLeft:0})
			$(this).find($('.imglist_tb')).css('background','#000')
		})
					
//imglist_b中的数据。
		var obj2 = JSON.parse(data)[1];
		var arr2 = obj2.data1;
		//alert(arr2.length)
		for(var j = 0; j < arr2.length; j++){
			var div = $('<div class="imglist_bb"></div>');
			div.appendTo($('.imglist_b'));
			var a = $('<a></a>')
			a.appendTo(div);
			a.attr('href',arr2[j].href);
			var img = $('<img/>');
			img.appendTo(a);
			img.attr('src', arr2[j].img)
		} 
		$('.imglist_bb').eq(arr2.length - 1).css('border-right','none')

	})
//////////////男装/////////////////////////////////////////////////////////////////////////////
	ajax("get", "http://10.30.162.22/code100/json/produce.json", "", function(data){
		var arr = JSON.parse(data)._data;
		//alert(arr[0].des.length)
		for(var i = 0; i < arr.length; i++){
		//for(var i = arr.length - 1;i >=0; i--){
			var a = $('<a class="man_tt"></a>');
			a.appendTo($('.man_tr'));
			var leng = a.css('width')
			//alert(leng)
			$('.man_tr').css('width','leng *arr.length')
			a.html(arr[i].title);
			a.attr('href','#');

			//创建大块div
			var aDiv = $('<div class="man_b"></div>');
			$('.man_t').after(aDiv);

			//$('.man_t1').after(aDiv);

			//aDiv.appendTo(a)
			//创建左边div
			var aDiv2 = $('<div class="man_bl"></div>');
			aDiv2.appendTo(aDiv);
			//创建中间div
			var aDiv3 = $('<div class="man_bm"></div>');
			aDiv3.appendTo(aDiv);
			//创建右边div
			var aDiv4 = $('<div class="man_br"></div>');
			aDiv4.appendTo(aDiv);
			var aDiv1 = $('<div class="man_blt"></div>')
			aDiv1.appendTo(aDiv2);//在这里使用aDiv2确保不重复添加的问题。
			$('.man_blt').html(arr[i].des[0].title1);
			//强科技助跑图标循环进去
			
			for(var j = 0; j < arr[i].des[0].des1.length; j++){

				var a1 = $('<a class="man_blm"></a>')
				a1.appendTo(aDiv2)
				var img = $('<img/>');
				img.appendTo(a1)
				//alert(arr[i].des[0].des1[j].title)
				img.attr('src',arr[i].des[0].des1[j].title);
				a1.attr('href',arr[i].des[0].des1[j].href);
				if(j % 2 == 1){
					$('.man_blm').eq(j).css('border-right','none')
				}
			}


			var aDiv5 = $('<div class="man_blb"></div>')
			aDiv5.appendTo(aDiv2);
			$('.man_blb').html(arr[i].des[0].title2);

			//将明星系列循环进去
			for(var k = 0; k < arr[i].des[0].des2.length; k++){
				var a2 = $('<a class="man_blf"></a>')
				a2.appendTo(aDiv2)
				var img1 = $('<img/>');
				img1.appendTo(a2)
				img1.attr('src',arr[i].des[0].des2[k].title);
				a2.attr('href',arr[i].des[0].des2[k].href); 
				if(k % 2 == 1){
					$('.man_blf').eq(k).css('border-right','none')
				}
			}
			//对中间的div插入图片
		    var a3 = $('<a class="man_bmm"></a>')
		    a3.appendTo(aDiv3)
		    a3.attr('href',arr[i].des[1].href)
		    a3.css('overflow','hidden').css('width','285px').css('height','470px').css('display','block')
			var img2 = $('<img class="man_bmt"/>')
			img2.appendTo(a3);
			img2.attr('src',arr[i].des[1].title)
			$('.man_bmm').hover(function(){
				$(this).find($('.man_bmt')).stop().animate({width:325,height:510,marginLeft:-20,marginTop:-20},600)
			},function(){
				$(this).find($('.man_bmt')).stop().animate({width:285,height:470,marginTop:0,marginLeft:0},600)
			})
			//对右边的块添加图片
			for(var n = 0; n < arr[i].des[2].des.length;n++){
			//for(var n = arr[i].des[2].des.length - 1; n >=0; n--){
				//alert(arr[i].des[2].des.length)6
				var a4 = $('<a class="man_brm"></a>')
				a4.appendTo(aDiv4)
				var img3 = $('<img class="man_brb"/>');
				img3.appendTo(a4)
				//alert(arr[i].des[0].des1[j].title)
				img3.attr('src',arr[i].des[2].des[n].img);
				a4.attr('href',arr[i].des[2].des[n].href);
				a4.css('width','234px').css('height','223px').css('display','block').css('float','left').css('padding-bottom','11px').css('border-bottom','1px solid #e4e4e4').css('border-right','1px solid #e4e4e4').css('position','relative')
				//a4.find($('img3')).css('position','absolute').css('')
				var aDiv6 = $('<div class="man_brf"><p class="man_brf1"></p><p class="man_brf2"></p></div>');
				aDiv6.appendTo(a4);
				$('.man_brf').css('width','169px').css('height','30px').css('border-left','2px solid #f99302').css('margin-left','20px')
				$('.man_brb').css('width','174px').css('height','174px');
				//$('.man_brf1').html(arr[i].des[2].des[n].title)
				aDiv6.find($('.man_brf1')).html(arr[i].des[2].des[n].title)

				//alert(arr[i].des[2].des[n].title)
				aDiv6.find($('.man_brf2')).html(arr[i].des[2].des[n].price)
				a4.hover(function(){
					$(this).find($('.man_brb')).animate({left:16})
				},function(){
					$(this).find($('.man_brb')).animate({left:26})
				})

			}
		}
		//tab切换
		$('.man_b').css('display','none');
		$('.man_b').eq($('.man_b').size() - 1).css('display','block')
		$('.man_tt').eq(0).css('background','#f99302')
		$('.man_tr').find('a').hover(function(){
			//alert($('.man_tt').size())
			$('.man_tt').css('background','#282828');
			$(this).css('background','#f99302');
			$('.man_b').css('display','none');//$('.man_b').size() - $(this).index()
			$('.man_b').eq($('.man_b').size() - $(this).index()-1).css('display','block')
		},function(){
			$(this).css('background','#282828');
			//$('.man_b').css('display','none');
			//$('.man_b').eq($('.man_tt').index()).css('display','block')
			$('.man_b').eq($('.man_b').size() - $(this).index()-1).css('display','block')
			$(this).css('background','#f99302');
		})

	})
////////////womshoes///////////////////////////////////////////////////////////////////////
	ajax("get", "http://10.30.162.22/code100/json/womshoes.json", "", function(data){
		var arr = JSON.parse(data)._data;
		//alert(arr[0].des.length)
		for(var i = 0; i < arr.length; i++){
		//for(var i = arr.length - 1;i >=0; i--){
			var a = $('<a class="wom_tt"></a>');
			a.appendTo($('.womshoes_tr'));
			var leng = a.css('width')
			//alert(leng)
			$('.womshoes_tr').css('width','leng *arr.length')
			a.html(arr[i].title);
			a.attr('href','#');

			//创建大块div
			var aDiv = $('<div class="wom_b"></div>');
			$('.womshoes_t').after(aDiv);

			//aDiv.appendTo(a)
			//创建左边div
			var aDiv2 = $('<div class="man_bl"></div>');
			aDiv2.appendTo(aDiv);
			//创建中间div
			var aDiv3 = $('<div class="man_bm"></div>');
			aDiv3.appendTo(aDiv);
			//创建右边div
			var aDiv4 = $('<div class="man_br"></div>');
			aDiv4.appendTo(aDiv);
			var aDiv1 = $('<div class="man_blt"></div>')
			aDiv1.appendTo(aDiv2);//在这里使用aDiv2确保不重复添加的问题。
			$('.man_blt').html(arr[i].des[0].title1);
			//强科技助跑图标循环进去
			
			for(var j = 0; j < arr[i].des[0].des1.length; j++){

				var a1 = $('<a class="man_blm"></a>')
				a1.appendTo(aDiv2)
				var img = $('<img/>');
				img.appendTo(a1)
				//alert(arr[i].des[0].des1[j].title)
				img.attr('src',arr[i].des[0].des1[j].title);
				a1.attr('href',arr[i].des[0].des1[j].href);
				if(j % 2 == 1){
					$('.man_blm').eq(j).css('border-right','none')
				}
			}
			$('.wom_b').find($('.man_blm')).eq(4).css('border-bottom','none').css('border-right','1px solid #e4e4e4');


			var aDiv5 = $('<div class="man_blb"></div>')
			aDiv5.appendTo(aDiv2);
			$('.man_blb').html(arr[i].des[0].title2);

			//将明星系列循环进去
			for(var k = 0; k < arr[i].des[0].des2.length; k++){
				var a2 = $('<a class="man_blf"></a>')
				a2.appendTo(aDiv2)
				var img1 = $('<img/>');
				img1.appendTo(a2)
				img1.attr('src',arr[i].des[0].des2[k].title);
				a2.attr('href',arr[i].des[0].des2[k].href); 
				if(k % 2 == 1){
					$('.man_blf').eq(k).css('border-right','none')
				}
			}
			//对中间的div插入图片
		    var a3 = $('<a class="man_bmm"></a>')
		    a3.appendTo(aDiv3)
		    a3.attr('href',arr[i].des[1].href)
		    a3.css('overflow','hidden').css('width','285px').css('height','470px').css('display','block')
			var img2 = $('<img class="man_bmt"/>')
			img2.appendTo(a3);
			img2.attr('src',arr[i].des[1].title)
			$('.man_bmm').hover(function(){
				$(this).find($('.man_bmt')).stop().animate({width:325,height:510,marginLeft:-20,marginTop:-20},600)
			},function(){
				$(this).find($('.man_bmt')).stop().animate({width:285,height:470,marginTop:0,marginLeft:0},600)
			})
			//对右边的块添加图片
			for(var n = 0; n < arr[i].des[2].des.length;n++){
			//for(var n = arr[i].des[2].des.length - 1; n >=0; n--){
				//alert(arr[i].des[2].des.length)6
				var a4 = $('<a class="man_brm"></a>')
				a4.appendTo(aDiv4)
				var img3 = $('<img class="man_brb"/>');
				img3.appendTo(a4)
				//alert(arr[i].des[0].des1[j].title)
				img3.attr('src',arr[i].des[2].des[n].img);
				a4.attr('href',arr[i].des[2].des[n].href);
				a4.css('width','234px').css('height','223px').css('display','block').css('float','left').css('padding-bottom','11px').css('border-bottom','1px solid #e4e4e4').css('border-right','1px solid #e4e4e4').css('position','relative')
				//a4.find($('img3')).css('position','absolute').css('')
				var aDiv6 = $('<div class="man_brf"><p class="man_brf1"></p><p class="man_brf2"></p></div>');
				aDiv6.appendTo(a4);
				$('.man_brf').css('width','169px').css('height','30px').css('border-left','2px solid #f99302').css('margin-left','20px')
				$('.man_brb').css('width','174px').css('height','174px');
				//$('.man_brf1').html(arr[i].des[2].des[n].title)
				aDiv6.find($('.man_brf1')).html(arr[i].des[2].des[n].title)

				//alert(arr[i].des[2].des[n].title)
				aDiv6.find($('.man_brf2')).html(arr[i].des[2].des[n].price)
				a4.hover(function(){
					$(this).find($('.man_brb')).animate({left:16})
				},function(){
					$(this).find($('.man_brb')).animate({left:26})
				})

			}
		}
		//tab切换
		$('.wom_b').css('display','none');
		$('.wom_b').eq($('.wom_b').size() - 1).css('display','block')
		$('.wom_tt').eq(0).css('background','#f99302')
		$('.womshoes_tr').find('a').hover(function(){
			//alert($('.wom_tt').size())
			$('.wom_tt').css('background','#282828');
			$(this).css('background','#f99302');
			$('.wom_b').css('display','none');//$('.wom_b').size() - $(this).index()
			$('.wom_b').eq($('.wom_b').size() - $(this).index()-1).css('display','block')
		},function(){
			$(this).css('background','#282828');
			//$('.wom_b').css('display','none');
			//$('.wom_b').eq($('.wom_tt').index()).css('display','block')
			$('.wom_b').eq($('.wom_b').size() - $(this).index()-1).css('display','block')
			$(this).css('background','#f99302');
		})

	})
//////////////threefloor///////////////////////////////////////////////////////////////////
	ajax("get", "http://10.30.162.22/code100/json/threefloor.json", "", function(data){
		var arr = JSON.parse(data)._data;
		//alert(arr[0].des.length)
		for(var i = 0; i < arr.length; i++){
		//for(var i = arr.length - 1;i >=0; i--){
			var a = $('<a class="three_tt"></a>');
			a.appendTo($('.three_tr'));
			var leng = a.css('width')
			//alert(leng)
			$('.three_tr').css('width','leng *arr.length')
			a.html(arr[i].title);
			a.attr('href','#');

			//创建大块div   wom
			var aDiv = $('<div class="three_b"></div>');
			$('.three_t').after(aDiv);

			//aDiv.appendTo(a)
			//创建左边div
			var aDiv2 = $('<div class="man_bl"></div>');
			aDiv2.appendTo(aDiv);
			//创建中间div
			var aDiv3 = $('<div class="man_bm"></div>');
			aDiv3.appendTo(aDiv);
			//创建右边div
			var aDiv4 = $('<div class="man_br"></div>');
			aDiv4.appendTo(aDiv);
			var aDiv1 = $('<div class="man_blt"></div>')
			aDiv1.appendTo(aDiv2);//在这里使用aDiv2确保不重复添加的问题。
			$('.man_blt').html(arr[i].des[0].title1);
			//强科技助跑图标循环进去
			
			for(var j = 0; j < arr[i].des[0].des1.length; j++){

				var a1 = $('<a class="man_blm"></a>')
				a1.appendTo(aDiv2)
				var img = $('<img/>');
				img.appendTo(a1)
				//alert(arr[i].des[0].des1[j].title)
				img.attr('src',arr[i].des[0].des1[j].title);
				a1.attr('href',arr[i].des[0].des1[j].href);
				if(j % 2 == 1){
					$('.man_blm').eq(j).css('border-right','none')
				}
			}
			$('.three_b').find($('.man_blm')).eq(4).css('border-bottom','none').css('border-right','1px solid #e4e4e4');


			var aDiv5 = $('<div class="man_blb"></div>')
			aDiv5.appendTo(aDiv2);
			$('.man_blb').html(arr[i].des[0].title2);

			//将明星系列循环进去
			for(var k = 0; k < arr[i].des[0].des2.length; k++){
				var a2 = $('<a class="man_blf"></a>')
				a2.appendTo(aDiv2)
				var img1 = $('<img/>');
				img1.appendTo(a2)
				img1.attr('src',arr[i].des[0].des2[k].title);
				a2.attr('href',arr[i].des[0].des2[k].href); 
				if(k % 2 == 1){
					$('.man_blf').eq(k).css('border-right','none')
				}
			}
		//对中间的div插入图片
		    var a3 = $('<a class="man_bmm"></a>')
		    a3.appendTo(aDiv3)
		    a3.attr('href',arr[i].des[1].href)
		    a3.css('overflow','hidden').css('width','285px').css('height','470px').css('display','block')
			var img2 = $('<img class="man_bmt"/>')
			img2.appendTo(a3);
			img2.attr('src',arr[i].des[1].title)
			$('.man_bmm').hover(function(){
				$(this).find($('.man_bmt')).stop().animate({width:325,height:510,marginLeft:-20,marginTop:-20},600)
			},function(){
				$(this).find($('.man_bmt')).stop().animate({width:285,height:470,marginTop:0,marginLeft:0},600)
			})
			//对右边的块添加图片
			for(var n = 0; n < arr[i].des[2].des.length;n++){
			//for(var n = arr[i].des[2].des.length - 1; n >=0; n--){
				//alert(arr[i].des[2].des.length)6
				var a4 = $('<a class="man_brm"></a>')
				a4.appendTo(aDiv4)
				var img3 = $('<img class="man_brb"/>');
				img3.appendTo(a4)
				//alert(arr[i].des[0].des1[j].title)
				img3.attr('src',arr[i].des[2].des[n].img);
				a4.attr('href',arr[i].des[2].des[n].href);
				a4.css('width','234px').css('height','223px').css('display','block').css('float','left').css('padding-bottom','11px').css('border-bottom','1px solid #e4e4e4').css('border-right','1px solid #e4e4e4').css('position','relative')
				//a4.find($('img3')).css('position','absolute').css('')
				var aDiv6 = $('<div class="man_brf"><p class="man_brf1"></p><p class="man_brf2"></p></div>');
				aDiv6.appendTo(a4);
				$('.man_brf').css('width','169px').css('height','30px').css('border-left','2px solid #f99302').css('margin-left','20px')
				$('.man_brb').css('width','174px').css('height','174px');
				//$('.man_brf1').html(arr[i].des[2].des[n].title)
				aDiv6.find($('.man_brf1')).html(arr[i].des[2].des[n].title)

				//alert(arr[i].des[2].des[n].title)
				aDiv6.find($('.man_brf2')).html(arr[i].des[2].des[n].price)
				a4.hover(function(){
					$(this).find($('.man_brb')).animate({left:16})
				},function(){
					$(this).find($('.man_brb')).animate({left:26})
				})

			}
		}
	//tab切换
		$('.three_b').css('display','none');
		$('.three_b').eq($('.three_b').size() - 1).css('display','block')
		$('.three_tt').eq(0).css('background','#f99302')
		$('.three_tr').find('a').hover(function(){
			
			$('.three_tt').css('background','#282828');
			$(this).css('background','#f99302');
			$('.three_b').css('display','none');//$('.three_b').size() - $(this).index()
			$('.three_b').eq($('.three_b').size() - $(this).index()-1).css('display','block')
		},function(){
			$(this).css('background','#282828');
		
			
			$('.three_b').eq($('.three_b').size() - $(this).index()-1).css('display','block')
			$(this).css('background','#f99302');
		})

	})

/////////////fourfloor////////////////////////////////////////////////////////////////////////////////
	ajax("get", "http://10.30.162.22/code100/json/fourfloor.json", "", function(data){
		var arr = JSON.parse(data)._data;
		//alert(arr[0].des.length)
		for(var i = 0; i < arr.length; i++){
		//for(var i = arr.length - 1;i >=0; i--){
			var a = $('<a class="four_tt"></a>');
			a.appendTo($('.four_tr'));
			var leng = a.css('width')
			//alert(leng)
			$('.four_tr').css('width','leng *arr.length')
			a.html(arr[i].title);
			a.attr('href','#');

			//创建大块div   wom
			var aDiv = $('<div class="four_b"></div>');
			$('.four_t').after(aDiv);

			//aDiv.appendTo(a)
			//创建左边div
			var aDiv2 = $('<div class="man_bl"></div>');
			aDiv2.appendTo(aDiv);
			//创建中间div
			var aDiv3 = $('<div class="man_bm"></div>');
			aDiv3.appendTo(aDiv);
			//创建右边div
			var aDiv4 = $('<div class="man_br"></div>');
			aDiv4.appendTo(aDiv);
			var aDiv1 = $('<div class="man_blt"></div>')
			aDiv1.appendTo(aDiv2);//在这里使用aDiv2确保不重复添加的问题。
			$('.man_blt').html(arr[i].des[0].title1);
			//强科技助跑图标循环进去
			
			for(var j = 0; j < arr[i].des[0].des1.length; j++){

				var a1 = $('<a class="man_blm"></a>')
				a1.appendTo(aDiv2)
				var img = $('<img/>');
				img.appendTo(a1)
				//alert(arr[i].des[0].des1[j].title)
				img.attr('src',arr[i].des[0].des1[j].title);
				a1.attr('href',arr[i].des[0].des1[j].href);
				if(j % 2 == 1){
					$('.man_blm').eq(j).css('border-right','none')
				}
			}
			$('.four_b').find($('.man_blm')).eq(2).css('border-right','1px solid #e4e4e4');


			//对中间的div插入图片
			    var a3 = $('<a class="man_bmm"></a>')
			    a3.appendTo(aDiv3)
			    a3.attr('href',arr[i].des[1].href)
			    a3.css('overflow','hidden').css('width','285px').css('height','470px').css('display','block')
				var img2 = $('<img class="man_bmt"/>')
				img2.appendTo(a3);
				img2.attr('src',arr[i].des[1].title)
				$('.man_bmm').hover(function(){
					$(this).find($('.man_bmt')).stop().animate({width:325,height:510,marginLeft:-20,marginTop:-20},600)
				},function(){
					$(this).find($('.man_bmt')).stop().animate({width:285,height:470,marginTop:0,marginLeft:0},600)
				})
				//对右边的块添加图片
				for(var n = 0; n < arr[i].des[2].des.length;n++){
				//for(var n = arr[i].des[2].des.length - 1; n >=0; n--){
					//alert(arr[i].des[2].des.length)6
					var a4 = $('<a class="man_brm"></a>')
					a4.appendTo(aDiv4)
					var img3 = $('<img class="man_brb"/>');
					img3.appendTo(a4)
					//alert(arr[i].des[0].des1[j].title)
					img3.attr('src',arr[i].des[2].des[n].img);
					a4.attr('href',arr[i].des[2].des[n].href);
					a4.css('width','234px').css('height','223px').css('display','block').css('float','left').css('padding-bottom','11px').css('border-bottom','1px solid #e4e4e4').css('border-right','1px solid #e4e4e4').css('position','relative')
					//a4.find($('img3')).css('position','absolute').css('')
					var aDiv6 = $('<div class="man_brf"><p class="man_brf1"></p><p class="man_brf2"></p></div>');
					aDiv6.appendTo(a4);
					$('.man_brf').css('width','169px').css('height','30px').css('border-left','2px solid #f99302').css('margin-left','20px')
					$('.man_brb').css('width','174px').css('height','174px');
					//$('.man_brf1').html(arr[i].des[2].des[n].title)
					aDiv6.find($('.man_brf1')).html(arr[i].des[2].des[n].title)

					//alert(arr[i].des[2].des[n].title)
					aDiv6.find($('.man_brf2')).html(arr[i].des[2].des[n].price)
					a4.hover(function(){
						$(this).find($('.man_brb')).animate({left:16})
					},function(){
						$(this).find($('.man_brb')).animate({left:26})
					})

				}
		}
	//tab切换
		$('.four_b').css('display','none');
		$('.four_b').eq($('.four_b').size() - 1).css('display','block')
		$('.four_tt').eq(0).css('background','#f99302')
		$('.four_tr').find('a').hover(function(){
			
			$('.four_tt').css('background','#282828');
			$(this).css('background','#f99302');
			$('.four_b').css('display','none');//$('.four_b').size() - $(this).index()
			$('.four_b').eq($('.four_b').size() - $(this).index()-1).css('display','block')
		},function(){
			$(this).css('background','#282828');
		
			
			$('.four_b').eq($('.four_b').size() - $(this).index()-1).css('display','block')
			$('.four_b').eq($('.four_b').size() - $(this).index()-1).css('display','block')
			$(this).css('background','#f99302');
		})

	})
/////////////////buttom///////////////////////////////////////////////////////////////////////////////
	$('.buttom_t').find('li').eq(0).css('border-left','none')
	$('.buttom_t').find('li').eq(3).css('border-right','none')

	$('.buttom_b').find('dl').eq(0).css('margin-right','100px')
	$('.buttom_b').find('dl').eq(1).css('margin-right','88px')
	$('.buttom_b').find('dl').eq(2).css('margin-right','108px')
	$('.buttom_b').find('dl').eq(3).css('margin-right','88px')
	$('.buttom_b').find('dl').eq(4).css('margin-right','94px')
	$('.buttom_b').find('dl').eq(5).css('width','202px')
	$('.buttom_b').find('dl').eq(5).find('a').css('background','none')
	$('.buttom_b').find('dl').eq(5).find('img').eq(0).css('position','absolute').css('top','49px')
	$('.buttom_b').find('dl').eq(5).find('img').eq(1).css('position','absolute').css('top','119px')
	$('.buttom_b').find('dl').eq(5).find('p').eq(0).css('font-size','17px').css('text-indent','50px').css('color','#3a3a3a')
	$('.buttom_b').find('dl').eq(5).find('p').eq(1).css('font-size','12px').css('text-indent','50px').css('color','#3c3c3c')
	$('.buttom_b').find('dl').eq(5).find('p').eq(2).css('font-size','12px').css('text-indent','50px').css('color','#3c3c3c')
	$('.buttom_b').find('dl').eq(5).find('a').eq(1).css('font-size','12px').css('text-indent','86px').css('color','#000').css('margin-top','11px')
//////////////////////回到顶部///////////////////////////////////////////////////////////////////////////////
 var scroll_top = document.body.scrollTop ||document.documentElement.scrollTop;

 	$(document).on('scroll',function(){
 		if($(window).scrollTop() > 690){
 			$('#scroll').css('position','static').css('position','fixed').css('top','110px')
 		}else{
 			$('#scroll').css('position','static').css('position','absolute').css('top','800px')
 		}
 	})
 	
 	$(".scroll_t1").toggle(function(){
    	$(".scroll_b").hide();
    	$(".scroll_t1").attr('class','scroll_t2')
    },
    function(){
   		$(".scroll_b").show();
   		$(".scroll_t2").attr('class','scroll_t1')
   	}
  	);
 	

})

