/**
 * Created by jwarnock on 11/18/15.
 */

/* Header Menu Collapse*/
$(document).on('click',function(e){
    if ($(e.target).is('.dropdown-toggle')) {

    } else {
        $('.collapse').collapse('hide');
    }
});

$(function(){
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('#stickyheader').offset().top;

    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('#stickyheader').css({position: 'fixed', top: '0px'});
            $('#stickyalias').css('display', 'block');
        } else {
            $('#stickyheader').css({position: 'static', top: '0px'});
            $('#stickyalias').css('display', 'none');
        }
    });
});