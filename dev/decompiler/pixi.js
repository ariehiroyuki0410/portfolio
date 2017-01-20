$(function(){
  hsize = $(window).height();
  wsize = $(window).width();
	$('.pixi_inner').css('height', hsize + 'px');

	$(window).resize(function() {
		hsize = $(window).height();
		$('.pixi_inner').css('height', hsize + 'px');
	});

  var width = 600;
  var height = 400;
  var stage = new PIXI.Stage(0x000000);
  var renderer = PIXI.autoDetectRenderer(width,height);

  document.getElementById("pixiview").appendChild(renderer.view);

  var word = "Hello World!";
  var style = {font:"bold 60pt Futura-PT", fill:"white"};
  var textobj = new PIXI.Text(word, style);
  textobj.position.x = 60;
  textobj.position.y = height / 2;

  stage.addChild(textobj);

  function animate(){
    requestAnimationFrame(animate);
    textobj.rotation += 0.01;
    renderer.render(stage);
  }

  requestAnimationFrame(animate);


});
