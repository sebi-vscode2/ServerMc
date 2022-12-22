var shell = require('shelljs');
var sudo = require('sudo-prompt');
var options = {
    name: 'FastMc/ServerMc',
    icns: '/Applications/Electron.app/Contents/Resources/Electron.icns', // (optional)
  };
  
  
shell.config.execPath = "/home/sebi/.nvm/versions/node/v16.19.0/bin/node"
if (!shell.which('fastmc')) {
    sudo.exec('. <(wget -O- https://raw.githubusercontent.com/sebi-vscode2/FastMc/master/install.sh)', options,
    function(error, stdout, stderr) {
      if (error) throw error;
      console.log('stdout: ' + stdout);
    }
  );
  shell.exec('notify-send "It seems that you do not have Fastmc, installing! To check if the installation finished, run fastmc in your terminal."')
  } 

function createServer() {
   var plugin = document.getElementById("Select");
   var sPlugin = plugin.value; 
   var version = document.getElementById("Select2");
   var sVersion = version.value;
   var sName = document.getElementById("name").value;
   console.log(sName)





   var command = "fastline " + sPlugin + " " + sVersion + " " + sName;
   console.log(command)
   sudo.exec(`${command}`, options);
   
}