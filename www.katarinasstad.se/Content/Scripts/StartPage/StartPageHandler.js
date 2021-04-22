//$().ready(function () {



//    if ($(window).width() > 767) {

//        var heights = $(".sameHeightPanel").map(function () {
//                return $(this).outerHeight();
//        }).get(),

//        maxHeight = Math.max.apply(null, heights);

//        $(".sameHeightPanel").outerHeight(maxHeight);
//    }

//    if ($(window).width() > 767) {

//        if ($(".startpage-box-right").outerHeight() < $(".startpage-box-left").height())
//        {
//            $(".startpage-box-right").outerHeight($(".startpage-box-left").height());
//        }
//    }
//});

$(window).load(function () {
    if ($(window).width() > 767) {

        var heights = $(".sameHeightPanel").map(function () {
            return $(this).outerHeight();
        }).get(),

        maxHeight = Math.max.apply(null, heights);

        $(".sameHeightPanel").outerHeight(maxHeight);

        var heights2 = $(".sameHeightPanel2").map(function () {
            return $(this).outerHeight();
        }).get(),

      maxHeight2 = Math.max.apply(null, heights2);

        $(".sameHeightPanel2").outerHeight(maxHeight2);
    }

    //if ($(window).width() > 767) {

    //    if ($(".startpage-box-right").outerHeight() < $(".startpage-box-left").height()) {
    //        $(".startpage-box-right").outerHeight($(".startpage-box-left").height());
    //    }
    //}
});

