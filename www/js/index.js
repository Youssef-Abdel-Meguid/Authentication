
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}


function SMSPage(){
    window.location = 'SMS.html';
}

function FacebookPage(){
    window.location = 'FBLogin.html';
    
}

// importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js");
// // For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
// importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js");

// // Initialize the Firebase app in the service worker by passing in the
// // messagingSenderId.
// firebase.initializeApp({
//     apiKey: "AIzaSyByyHShy8yM-Dvq_aKpkzmEx43HCZhl3GU",
//     authDomain: "cordovaauthontication.firebaseapp.com",
//     projectId: "cordovaauthontication",
//     storageBucket: "cordovaauthontication.appspot.com",
//     messagingSenderId: "127819839879",
//     appId: "1:127819839879:web:84f34fa5c9419a3b25bb22",
//     measurementId: "G-35H92HNX0S"
// });

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
//     console.log("Received background message ", payload);
//     // Customize notification here
//     const notificationTitle = "Background Message Title";
//     const notificationOptions = {
//         body: "Background Message body.",
//         icon: "/itwonders-web-logo.png"
//     };

//     return self.registration.showNotification(
//         notificationTitle,
//         notificationOptions
//     );
// });

// if('undefined' === typeof window){
//     importScripts("https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js");
//     importScripts("https://www.gstatic.com/firebasejs/8.4.2/firebase-messaging.js",);
    
    
    
//     var firebaseConfig = {
//         apiKey: "AIzaSyByyHShy8yM-Dvq_aKpkzmEx43HCZhl3GU",
//         authDomain: "cordovaauthontication.firebaseapp.com",
//         projectId: "cordovaauthontication",
//         storageBucket: "cordovaauthontication.appspot.com",
//         messagingSenderId: "127819839879",
//         appId: "1:127819839879:web:84f34fa5c9419a3b25bb22",
//         measurementId: "G-35H92HNX0S"
//     };
    
//     firebase.initializeApp(firebaseConfig);
    
//     const messaging = firebase.messaging();
    
//     messaging.setBackgroundMessageHandler(function(payload) {
//         console.log("Received background message ", payload);
//         // Customize notification here
//         const notificationTitle = "Background Message Title";
//         const notificationOptions = {
//             body: "Background Message body.",
//             icon: "/itwonders-web-logo.png"
//         };
    
//         return self.registration.showNotification(
//             notificationTitle,
//             notificationOptions
//         );
//     });
// }
