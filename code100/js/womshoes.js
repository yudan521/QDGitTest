var arr = [
	{'title':'灰色卫衣',
	'des':[
			{'img':'http://361img.361sport.com.cn/product/2016/02/19/56c6e46516c35.jpg'},
			{'img':'http://361img.361sport.com.cn/product/2016/02/19/m_56c6e4655f54c.jpg'},
			{'img':'http://361img.361sport.com.cn/product/2016/02/19/m_56c6e465ad1e9.jpg'},
			{'img':'http://361img.361sport.com.cn/product/2016/02/19/m_56c6e465f3b81.jpg'}
			]
	},
	{
		'title':'白色卫衣',
		'des':[
				{'img':'http://361img.361sport.com.cn/product/2016/02/19/m_56c6e4664d390.jpg'},
				{'img':'http://361img.361sport.com.cn/product/2016/02/19/m_56c6e46699089.jpg'},
				{'img':'http://361img.361sport.com.cn/product/2016/02/19/m_56c6e466e0a7a.jpg'},
				{'img':'http://361img.361sport.com.cn/product/2016/02/19/m_56c6e46732b27.jpg'}
			]
	}

]

var obj = {'_data':arr};
var str = JSON.stringify(obj);
document.write(str);