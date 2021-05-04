window.onload = function(){
    render();
}

function render() {
    window.recaptchVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchVerifier.render();
}



function PhoneAuth()
{
    var phoneNumber = document.getElementById("phoneNumber").value;
    console.log(phoneNumber);

    firebase.auth().signInWithPhoneNumber(phoneNumber, window.recaptchVerifier).then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        coderesult = confirmationResult;
        alert("Message sent");
    }).catch(function (error) {
        alert(error.message);
    });
}

function codeverify() {
    var code=document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function (result) {
        alert("Successfully registered");
        var user=result.user;
        console.log(user);
    }).catch(function (error) {
        alert(error.message);
    });
}