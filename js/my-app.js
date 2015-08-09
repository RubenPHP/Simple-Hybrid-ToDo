// Initialize your app
var myApp = new Framework7({
        material: true
    });

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main');

$$(document).on('ajaxStart', function (e) {
    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function () {
    myApp.hideIndicator();
});


/*Important! Close the popover so the new popped view is not obsured by the modal*/
$$('.popover a').on('click', function () {
    myApp.closeModal('.popover');
});
