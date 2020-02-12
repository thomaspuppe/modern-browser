var resultCookies = navigator.cookieEnabled ? navigator.cookieEnabled.toString() : 'navigator.cookieEnabled IS NOT AVAILABLE';
document.querySelector('main').insertAdjacentHTML(
    'beforeend',
    '<article><h3>Cookies?</h3> ' + resultCookies
);
