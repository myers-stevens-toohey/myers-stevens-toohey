/**
 * Created by jwarnock on 11/18/15.
 */

$(document).on('click',function(e){
    if ($(e.target).is('.dropdown-toggle')) {

    } else {
        $('.collapse').collapse('hide');
    }
});