(function () {
    var resultText = navigator.connection ? '<pre>' + navigator.connection.toString() + '</pre>' : '<p>navigator.connection IS NOT AVAILABLE</p>';
    document.querySelector('main').insertAdjacentHTML('beforeend', '<article><h3>Connection?</h3> ' + resultText + '</article>');
}());
