<?php
$WEBSITE = $_SERVER['DOCUMENT_ROOT'];
include($WEBSITE . "/module/meta.php");
?>

<body id="inner_page">
  <?php include($WEBSITE . "/module/header.php"); ?>

  <section class="inner">

    <section class="contents" id="contents">
      <h2>chapeaud'O</h2>
      <ul>
        <li class=""><img src="/assets/img/works/web/17/01.png" alt="" /></li>
        <li class=""><img src="/assets/img/works/web/17/02.png" alt="" /></li>
      </ul>
      <div class="text-section">
        <p class="info">chapeaud'O</p>
        <p class="info link"><a href="https://chapeaudo.com/" target="_blank">visit website</a></p>
        <p class="credit">
          design : me <br>
          develop : me
        </p>
      </div>
    </section>

  </section>
  <?php
    $WEBSITE = $_SERVER['DOCUMENT_ROOT'];
    include($WEBSITE . "/module/footer.php");
  ?>
</body>
</html>
