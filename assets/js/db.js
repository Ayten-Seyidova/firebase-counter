
const firebaseConfig = {
    apiKey: "AIzaSyBVnBJ-T7k_PXlySF3XmSQ02wbUUIQgA9o",
    authDomain: "todoapp-361c5.firebaseapp.com",
    databaseURL: "https://todoapp-361c5-default-rtdb.firebaseio.com/",
    projectId: "todoapp-361c5",
    storageBucket: "todoapp-361c5.appspot.com",
    messagingSenderId: "175025111113",
    appId: "1:175025111113:web:892cfc6d85482e852abf98"
};

firebase.initializeApp(firebaseConfig)

let db = firebase.database();