importScripts("https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.4.2/firebase-messaging.js",
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
    "https://www.gstatic.com/firebasejs/8.4.2/firebase-analytics.js",
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    messagingSenderId: "127819839879",
    apiKey: "AIzaSyByyHShy8yM-Dvq_aKpkzmEx43HCZhl3GU",
    authDomain: "cordovaauthontication.firebaseapp.com",
    projectId: "cordovaauthontication",
    storageBucket: "cordovaauthontication.appspot.com",
    messagingSenderId: "127819839879",
    appId: "1:127819839879:web:84f34fa5c9419a3b25bb22",
    measurementId: "G-35H92HNX0S"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});
