(function () {

    document.querySelector('main').insertAdjacentHTML('beforeend', '<article><h3>Vibrate</h3><p id="vibrateStatusText"></p><button id="vibrateAction">vibrate!</button></article>');


    if (typeof window.navigator.vibrate !== 'function') {
        document.querySelector('#vibrateAction').disabled = 'true';
        document.querySelector('#vibrateStatusText').innerHTML = 'NOT AVAILABLE!';
        return;
    }

    document.querySelector('#vibrateStatusText').innerHTML = 'AVAILABLE!';

    document.querySelector('#vibrateAction').addEventListener('click', function () {
        window.navigator.vibrate(200);
    })
    
}());
