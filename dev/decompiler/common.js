$(window).on("load", function(){

  // 現在ページのURL取得
	var url = location.href;

	if(url == "http://localhost:3001/"){
    mixitup('#Container', {
      load: {
        sort: 'default:desc'
      },
    });
	}
	if(url == "http://192.168.1.14:3001/"){
    mixitup('#Container', {
      load: {
        sort: 'default:desc'
      },
    });
	}

	$('.filter').click(function() {
		$('.filter').removeClass('on');
		$(this).addClass('on');
	});

  //pagetop
  $(function() {
      var topBtn = $('.showf');
      //スクロールが100に達したらボタン表示
      $(window).scroll(function () {
          if ($(this).scrollTop() > 150) {
          //ボタンの表示方法
            topBtn.addClass('showf-on');
          } else {
          //ボタンの非表示方法
            topBtn.removeClass('showf-on');
          }
      });
      //スクロールしてトップ
      topBtn.click(function () {
          $('body, html').animate({
            scrollTop: 0
          }, 400);
          return false;
      });
  });

});
