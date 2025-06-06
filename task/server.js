const { exec } = require("child_process");
const os = require("os");

const PORT = 3000;
const BASE_PATH = "/ships/adventure/";
const getLocalIPAddress = () => {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
};

const IP_ADDRESS = getLocalIPAddress();
const URL = `http://${IP_ADDRESS}:${PORT}${BASE_PATH}`;
const server = exec("next dev --turbopack");

// 一定時間待ってからブラウザを開く
setTimeout(() => {
  switch (process.platform) {
    case "darwin": // macOS
      exec(`open ${URL}`);
      break;
    case "win32": // Windows
      exec(`start ${URL}`);
      break;
    default: // Linux
      exec(`xdg-open ${URL}`);
      break;
  }
}, 2000);

server.stdout.pipe(process.stdout);
server.stderr.pipe(process.stderr);
