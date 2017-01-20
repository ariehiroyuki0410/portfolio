$(function(){
  hsize = $(window).height();
  wsize = $(window).width();
	$('.pixi_inner').css('height', hsize + 'px');

	$(window).resize(function() {
		hsize = $(window).height();
		$('.pixi_inner').css('height', hsize + 'px');
	});

  var width = 600;
  var height = 600;
  var stage = new PIXI.Stage(0x000000);
  var renderer = PIXI.autoDetectRenderer(width,height);

  document.getElementById("pixiview").appendChild(renderer.view);

  var texture = PIXI.Texture.fromImage('assets/img/img1.jpg');
  var logoimg = new PIXI.Sprite(texture);
  logoimg.position.x = width / 2;
  logoimg.position.y = height / 2;
  logoimg.anchor.x = 0.5;
  logoimg.anchor.y = 0.5;
  // logoimg.width = 60;
  // logoimg.height = 60;
  logoimg.scale.x = 0.3;
  logoimg.scale.y = 0.3;

  logoimg.visible = true;
  logoimg.alpha = 0.8;

  stage.addChild(logoimg);

  function animate(){
    requestAnimationFrame(animate);
    logoimg.rotation += 0.01;
    renderer.render(stage);
  }

  requestAnimationFrame(animate);


});
