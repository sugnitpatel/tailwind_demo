

$(document).ready(function () {
    $('select').select2();
});

$(window).on('load', function () {
    setTimeout(function () { $('#loader').fadeOut() }, 400);
});

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        $(".modal_custom").removeClass("show-modal");
    }
});


// Notiflix.Report.init({
//     borderRadius: '0.75rem',
//     backgroundColor: '#dec5a0',
//     width: '400px',
//     fontFamily: 'Merriweather',

//     success: {
//         svgColor: '#b35f06',
//     },
//     failure: {
//         svgColor: '#b35f06',
//     },
//     warning: {
//         svgColor: '#b35f06',
//     },
//     info: {
//         svgColor: '#b35f06',
//     },
// });

// Notiflix.Notify.init({
//     fontFamily: 'Merriweather',
//     cssAnimationStyle: 'zoom',
//     cssAnimationDuration: 500,
//     timeout: 9000,
// });