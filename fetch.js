const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'upload.wikimedia.org',
  port: 443,
  path: '/wikipedia/commons/e/e0/Khabib_Nurmagomedov_%28cropped%29.jpg',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/114.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
  }
};

const req = https.request(options, res => {
  console.log('Status:', res.statusCode);
  if (res.statusCode === 301 || res.statusCode === 302) {
    console.log('Redirecting to:', res.headers.location);
    https.get(res.headers.location, { headers: options.headers }, (res2) => {
      res2.pipe(fs.createWriteStream('public/khabib.jpg'));
    });
  } else {
    res.pipe(fs.createWriteStream('public/khabib.jpg'));
  }
});

req.on('error', error => {
  console.error(error);
});

req.end();
