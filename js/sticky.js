var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    // hdr = $('#post-background').height();
    hdr = 500px;

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});