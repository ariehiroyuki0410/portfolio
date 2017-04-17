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

	$('.filter').click(function() {
		$('.filter').removeClass('on');
		$(this).addClass('on');
	});

});
