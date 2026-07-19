const https = require('https');
const fs = require('fs');

const url = 'https://www.sportsnet.ca/wp-content/uploads/2020/07/Abdulmanap-Nurmagomedov-Khabib-Nurmagomedov-1040x572.jpg';

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
  }
}, (res) => {
  console.log('Status:', res.statusCode);
  if (res.statusCode === 200) {
    res.pipe(fs.createWriteStream('public/khabib.jpg'));
  } else if (res.statusCode === 301 || res.statusCode === 302) {
      console.log(res.headers.location);
  }
}).on('error', (err) => {
  console.error(err);
});
