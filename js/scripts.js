function getTrianglesShapesParams() {
    $(".shape_wrapp").each(function() {
      left = $(this).find(".left_shape");
      right = $(this).find(".right_shape");
      h = "auto";
      left.css({"border-bottom-width" : h + "px"});
      right.css({"border-top-width" : h + "px"});
      h = $(this).outerHeight();
      left.css({"border-bottom-width" : h + "px"});
      right.css({"border-top-width" : h + "px"});
    });
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {
  getTrianglesShapesParams();
});

$(window).resize(function() {
  getTrianglesShapesParams();
});

$(document).scroll(function() {
});

$(document).ready(function() {
});