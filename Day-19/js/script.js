var image = ['images/img1.jpg','images/img2.jpg','images/img3.jpg','images/img4.jpg'];

var index = 0;

function changeImage() {
    $('#mainImage').attr('src',image[index]);
    index++ ;
    if(index > image.length){
        index = 0 ;
    }
}
setInterval(changeImage,1000);




var mainImage = $('#mainImage');



$('#img1').click ( function () {

    mainImage .attr('src',$(this).attr('src'));
}) ;

$('#img2').click ( function () {

    mainImage .attr('src',$(this).attr('src'));
}) ;

$('#img3').click ( function () {

    mainImage .attr('src',$(this).attr('src'));
}) ;

$('#img4').click ( function () {

    mainImage .attr('src',$(this).attr('src'));
}) ;






var floatingDivPosition = $('#floatingDiv').position();

$(window).scroll(function () {
    var  currentScrollPosition = $(window).scrollTop();
    if(currentScrollPosition >= floatingDivPosition.top){
        $('#floatingDiv').css({
            'position' : 'fixed',
            'top' : '0px',
            'width': '90%'

        });

    }else {
        $('#floatingDiv').css({
            'position': 'relative',
            'top': '0px',
            'width': '100%'

        });
    }
});



$(function(){
    $('img').click(function(){
        $('img').removeClass('focused');
        $(this).addClass('focused');
    });
});
// var floatingDivPosition = $('#floatingDiv').position();
//
// $(window).scroll(function () {
//     var  currentScrollPosition = $(window).scrollTop();
//     if(currentScrollPosition >= floatingDivPosition.top){
//         $('#floatingDiv').css({
//             'position' : 'fixed',
//             'top' : '0px'
//         });
//
//     }else {
//         $('#floatingDiv').css({
//             'position': 'relative',
//             'top': '0px'
//
//         });
//     }
// });
