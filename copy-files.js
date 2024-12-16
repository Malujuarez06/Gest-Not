const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const source = path.join(__dirname, 'dist');
const destination = path.join(__dirname, 'public/dist');

if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
}

exec(`cp -r ${source}/. ${destination}`, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error copying files: ${err.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(`Files copied: ${stdout}`);
});
