var resultScreenHeight = window.screen.height;
var resultScreenWidth = window.screen.width;
document.querySelector('main').insertAdjacentHTML(
    'beforeend',
    '<article><h3>Screen?</h3> ' + 'Width: ' + resultScreenWidth + '<br />Height: ' + resultScreenHeight + '<article>'
);

var resultViewportHeight = window.innerHeight;
var resultViewportWidth = window.innerWidth;
document.querySelector('main').insertAdjacentHTML(
    'beforeend',
    '<article><h3>Viewport?</h3> ' + 'Width: ' + resultViewportWidth + '<br />Height: ' + resultViewportHeight + '<article>'
);
