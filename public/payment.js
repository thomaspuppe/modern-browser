(function () {
    var resultText = typeof PaymentRequest !== 'undefined' ? 'AVAILABLE! 💸' : 'NOT AVAILABLE</p>';
    document.querySelector('main').insertAdjacentHTML('beforeend', '<article><h3>PaymentRequest API</h3><p>' + resultText + '</p></article>');
}());

