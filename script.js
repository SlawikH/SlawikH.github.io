$(function() {
    $(document).scroll(function(){
        var $nav = $('.nav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});



var menu = document.getElementById("bar");
var items = document.getElementById("navbar");

items.style.right = "-360px";

menu.onclick = function () {
    if(items.style.right == "-360px") {
        items.style.right = "0";
    }
    else {
        items.style.right = "-360px";
    }
}




// Action button

var action = document.querySelector('.action');



function actionToggle() {
    var action = document.querySelector('.action');
    action.classList.toggle('active')
}


// document.onclick = function (e) {
//     if(e.target.classList !== 'active') {
//         toggle.classList.remove('action')
//     }
// }