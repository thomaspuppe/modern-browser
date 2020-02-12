var resultText = navigator.connection ? navigator.connection.toString() : 'navigator.connection IS NOT AVAILABLE';
document.querySelector('main').insertAdjacentHTML('beforeend', '<article><h3>Connection?</h3> ' + resultText + '<article>');
