"use strict"

let count = 100;

$("#dicrease").on("click", ()=>{
    count--;
    db.ref("/counter").set({count});
})

$("#restart").on("click", ()=>{
    count = 100;
    db.ref("/counter").set({count});
})

db.ref("/counter").on("value", function(snap){
    $("#clickCount").text(snap.val().count);
})
