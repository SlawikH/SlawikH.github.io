// Navbar background scroll
$(function() {
    $(document).scroll(function(){
        var $nav = $('.nav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


// Navbar
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


// Comments
const showContainers = document.querySelectorAll(".show-replies");

showContainers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let parentContainer = e.target.closest(".comment__container");
    let _id = parentContainer.id;
    if (_id) {
      let childrenContainer = parentContainer.querySelectorAll(
        `[dataset=${_id}]`
      );
      childrenContainer.forEach((child) => child.classList.toggle("opened"));
    }
  })
);