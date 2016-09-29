$(function(){
	//登录界面中账号获取焦点时
	$('.reg_mlb8').css('display','none')
	$('.reg_mlb5').find($('input')).click(function(){
		$('.reg_mlb8').css('display','block')
	})
	$('.reg_mlb2').find($('input')).focus(function(){
		$(this).attr('placeholder','')
	})
	//登录界面中账号失去焦点时
	$('.reg_mlb2').find($('input')).blur(function(){
		$(this).attr('placeholder','用户名或手机或邮箱');
	})
	
	$('.reg_mlb5').find($('input')).click(function(){
			$('.reg_mlb8').css('display','block')
			$('.reg_mlb8').delay(2000).hide(0);
			var oValue = $('.reg_mlb2').find($('input')).val().replace(/\s/g, "");
			$('.reg_mlb2').find($('input')).val(oValue);
			//验证手机号
			if(!/^1[0-9]{10}/.test($('.reg_mlb2').find($('input')).val())){
				$('.reg_mlb8').find($('input')).val('不存在该账号')
			}
			if(!/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/.test($('.reg_mlb2').find($('input')).val())){
				$('.reg_mlb8').find($('input')).val('不存在该账号')
			}
			
			var oPassword = $('.reg_mlb3').find($('input')).val().replace(/\s/g, "");
			$('.reg_mlb3').find($('input')).val(oPassword)
			if(!$('.reg_mlb3').find($('input')).val()){
				$('.reg_mlb8').find($('input')).val('请输入您的密码')
			}
			if($('.reg_mlb2').find($('input')).val() == ''){
				$('.reg_mlb8').find($('input')).val('请输入您的账号')
			}

	})
	//右侧注册页面的验证$('.two').find($('input'))
	
	var oValue2 = $('.two').find($('input')).val().replace(/\s/g, "");
	$('.two').find($('input')).val(oValue2);
	//alert($('.two').find($('input')).val())
	var oValue3 = $('.three').find($('input')).val().replace(/\s/g, "");
	$('.three').find($('input')).val(oValue3);
	var oValue4 = $('.four').find($('input')).val().replace(/\s/g, "");
	$('.four').find($('input')).val(oValue4);
	var oValue5 = $('.five').find($('input')).val().replace(/\s/g, "");
	$('.five').find($('input')).val(oValue5);

	$('.reg_mlb9').css('display','none')
	$('.seven').find($('input')).click(function(){
		$('.reg_mlb9').css('display','block')
		$('.reg_mlb9').delay(2000).hide(0);
		//alert($('.two').find($('input')).val())
		if($('.two').find($('input')).val() == ''){
			$('.reg_mlb9').find($('input')).val('请输入手机号')
		}else if(!/[0-9]{11}/.test($('.two').find($('input')).val())){
			$('.reg_mlb9').find($('input')).val('请输入正确的手机号')
		}else if($('.three').find($('input')).val() == ''){
			$('.reg_mlb9').find($('input')).val('请输入用户名')
		}else if($('.three').find($('input')).val().length < 6){
			$('.reg_mlb9').find($('input')).val('用户名由六位以上数字或字母组成')
		}else if(!/[a-zA-Z0-9]/.test($('.three').find($('input')).val())){
			$('.reg_mlb9').find($('input')).val('用户名由六位以上数字或字母组成')
		}else if($('.four').find($('input')).val() == ''){
			$('.reg_mlb9').find($('input')).val('请输入您的密码')
		}else if($('.five').find($('input')).val() == ''){
			$('.reg_mlb9').find($('input')).val('请输入您的确认密码')
		}else if($('.five').find($('input')).val() !== $('.four').find($('input')).val()){
			$('.reg_mlb9').find($('input')).val('两次密码不一致')
		}else{
			$('.reg_mlb9').css('display','none')
		}
	})
	
		

	
	
})