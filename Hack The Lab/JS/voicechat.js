navigator.webkitGetUserMedia({video: true, audio: true}, function(stream){
    const Peer = require('simple-peer');
    var peer = new Peer({
        initiator: location.hash == "#init",
        trickle: false,
        stream: streamW
    })


    peer.on('stream', function(stream){
        var uaudio = document.createElement('video');
        document.body.appendChild(uaudio);

        uaudio.src = window.URL.createObjectURL(stream);
        uaudio.play();  
    })

}, function(err) {
    console.error(err);
})