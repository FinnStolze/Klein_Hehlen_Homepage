// Add google map script if not exist; if exist, return true
window.checkAndAttachMapScript = function (callback) {
    if (!!window.google) {  // If you're using vue cli, then directly checking
        // 'google' obj will throw an error at the time of transpiling.
        callback();
        return true;
    }

    window.mapApiInitialized = callback;
    let script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDFamPiBIvXAQ58suK7S_QWigrkXKji-eA&callback=mapApiInitialized&map_ids=debfad8bd0280011";
    document.body.appendChild(script);
}