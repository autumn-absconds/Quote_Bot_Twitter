import { spawn } from 'child_process';

function getImageCaption(imageLink) {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', ['image_captioning.py', imageLink]);

        let result = '';

        pythonProcess.stdout.on('data', (data) => {
            result += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            reject(data.toString());
        });

        pythonProcess.on('close', (code) => {
            if (code === 0) {
                resolve(result.trim());
            } else {
                reject(`Process exited with code ${code}`);
            }
        });
    });
}

// Export the function
module.exports = getImageCaption;
