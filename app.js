"use strict";
$(document).ready(function () {


    $('.btn').click(function (e) {
        e.preventDefault();
        if (!$.trim($('input').val()) == '') {
            let a = b => {
                for (let i = 0; i < b; i++) { $('.minibox').append(`<h2>${b}</h2>`) }
            }
            let v = f => Number(f) ? a(f) : $('.minibox').append(`<h2>${f}</h2>`);
            v($('input').val())
        }
         $('input').val('')
    });












});


// $('.btn').click(function (e) {
//     e.preventDefault();
//     let b = (a) => {
//         for (let i = 1; i <= a; i++) {
//             $('.minibox').append(`<div class="btn">${i}</div>`);

//         }
//     }
//     b($('input').val());
// });
