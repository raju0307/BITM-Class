// var h1 = document.getElementById('h1');
//
// h1.onclick = function () {
//     h1.style.color = 'red';
// };

// $('#h1').click(function () {
//     $('#h1').css({
//         'color' : 'red',
//         'font-size' : '100px',
//         'font-family' :'cursive'
//         }
//     );
// });
//
//

//
// $('#btn').click ( function () {
//    var firstName = $('#firstName').val();
//    var lastName = $('#lastName').val ();
//     var fullName   = firstName + ' ' + lastName ;
//
//     $('#fullName').val(fullName);
// // }) ;
//
// $('#divOne').scroll(function () {
//     $('#para').css('display','block').fadeOut(1000);
// });

var count = 0 ;
$('#divOne').scroll(function () {
    // $('#para').html(count=count+1);

    var x = $('#divOne').scrollTop();
    $('#para').html(x);
});