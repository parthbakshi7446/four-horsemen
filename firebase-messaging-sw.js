importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js')

console.log("hello5")
if ('serviceWorker' in navigator) {
    console.log("hello4")
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
        .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
        }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
        });
    }

firebase.initializeApp({
    messageSenderId: "678966640489"
})

const initMessaging = firebase.messaging();