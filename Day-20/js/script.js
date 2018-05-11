function checkFirstName() {
    var firstName = $('#firstName').val();

    var regexp = /^[a-zA-Z -._@]{2,10}$/ ;
    if(regexp.test(firstName)){
        $('#firstNameError').text(' ');
    }else {
        $('#firstNameError').text('First name should be 2 to 10 character & only character');
    }
}
function checkLastName() {
    var lastName = $('#lastName').val();

    var regexp = /^[a-zA-Z ._@]{2,10}$/ ;
    if(regexp.test(lastName)){
        $('#lastNameError').text(' ');
    }else {
        $('#lastNameError').text('last name should be 2 to 10 character & only character');
    }
}

function checkEmailAddress() {
    var emailAddress = $('#emailAddress').val();

    var regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    if(regExp.test(emailAddress)){
        $('#emailAddressError').text(' ');
    }else {
        $('#emailAddressError').text('Invalid Email Address');
    }
}

function checkPassword() {
    var password = $('#password').val();
    if(password.length >= 6){
        $('#passwordError').text(' ');
    }else {
        $('#passwordError').text('Password must be minimum 6 character');
    }
}
$('#showHidePassword').click(function () {
    var attrValue = $('#password').attr('type');
    if(attrValue == 'password'){
        $('#password').attr('type','text');
    }else {
        $('#password').attr('type','password');
    }
})

function checkConfirmPassword() {
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    if(password == confirmPassword){
        $('#confirmPasswordError').text(' ');
    }else {
        $('#confirmPasswordError').text('password & confirm password are not same.')
    }
}


$('#firstName').keyup(function () {
   checkFirstName();
});


$('#lastName').keyup(function () {
    checkLastName();
})

$('#emailAddress').keyup(function () {
    checkEmailAddress();
})
$('#confirmPassword').keyup(function () {
    checkConfirmPassword();
})







