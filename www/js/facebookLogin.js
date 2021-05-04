function signin(){
    var provider = new firebase.auth.FacebookAuthProvider();

    provider.addScope('user_birthday,email');
    firebase.auth().useDeviceLanguage();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        console.log(user);
        var user = result.user;

        console.log(user.email);

        var userImage = document.querySelector("#user-image");
        var userPic = document.createElement("img");

        userPic.src = user.photoURL;
        userImage.append(userPic);
      
        var userEmail = document.querySelector("#user-email");
        userEmail.innerHTML = user.email;

      }).catch(function(error) {
        console.log(error.code);
        console.log(error.message);
        console.log(error.email);
        console.log(error.credential);
      });


}