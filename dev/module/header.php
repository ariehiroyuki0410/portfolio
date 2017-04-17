<header>
  <div class="header-inner">
    <h1><a href="/">arie</a></h1>
    <nav>
      <ul>
        <li><a href="https://www.instagram.com/ariehiroyuki0410/" target="_blank"><span>about</span></a></li>
        <li><a href="mailto:mail@arie-hiroyuki.com"><span>contact</span></a></li>
      </ul>
    </nav>

    <?php
    $WEBSITE = 'localhost:3000/';
    $Toppage = $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
    if ($WEBSITE == $Toppage) {
      echo '
      <ul class="inner_nav controls">
        <li class="on filter mixitup-control-active programs-sort-btn-active" data-filter="all" data-sort="default:desc"><span>all</span></li>
        <li class="filter" data-filter=".category-1" data-sort="default:desc"><span>web</span></li>
        <li class="filter" data-filter=".category-2" data-sort="default:desc"><span>graphic</span></li>
        <li class="filter" data-filter=".category-3" data-sort="default:desc"><span>fashion</span></li>
      </ul>
      ';
    }
    ?>
  </div>
</header>
