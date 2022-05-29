$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
}); 

var elements = document.querySelectorAll('.scroll_top');
elements.forEach(function(el, index) {
    el.onclick = () => {
        let off = $('#navig').offset().top;  
        $('body,html').animate({scrollTop: off},1500)
    };
});