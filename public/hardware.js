(function () {
    document.querySelector('main').insertAdjacentHTML('beforeend', `
        <article><h3>Hardware Information</h3><p>
        <strong>hardwareConcurrency:</strong> ${window.navigator.hardwareConcurrency}<br/>
        <strong>maxTouchPoints:</strong> ${window.navigator.maxTouchPoints}<br/>
        <strong>deviceMemory:</strong> ${window.navigator.deviceMemory}
        </p></article>
    `);
}());

