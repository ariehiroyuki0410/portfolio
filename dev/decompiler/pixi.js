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

  // ステージを作る
  var stage = new PIXI.Stage(0x000000);

  // レンダラーを作る
  var renderer = PIXI.autoDetectRenderer(width, height);

  // レンダラーのviewをDOMに追加する
  document.getElementById("pixiview").appendChild(renderer.view);

  // テキストオブジェクトを作る
  var word = "Hello World!";
  var style = {font:'bold 20pt Arial', fill:'white'};
  var textobj = new PIXI.Text(word, style);
  textobj.position.x = width / 2;
  textobj.position.y = height / 2;

  // テキストオブジェクトをステージに乗せる
  stage.addChild(textobj);

  // アニメーション関数を定義する
  function animate(){
      // requestAnimationFrame(animate); // 次の描画タイミングでanimateを呼び出す
      // textobj.rotation += 0.01; // テキストを回転する
      renderer.render(stage);   // 描画する
  }

  // 次のアニメーションフレームでanimate()を呼び出してもらう
  animate();
});
