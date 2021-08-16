const request = require('request');
const fs = require('fs');
const webpageStr = process.argv[2];
const pathToSave = process.argv[3];
// const stdin = process.stdin;
// stdin.setRawMode(true);
// stdin.setEncoding('utf8');
let errorCheck = false;


try {
  const refCheck = require(pathToSave);
}
catch(err) {
  console.log(`Invalid file path`);
}

if (errorCheck) {
} else {

  request(webpageStr, (error, response, body) => {
    if(response.statusCode === 200) {
      fs.writeFile(pathToSave, body, err => {
        if (err) {
          console.error(err)
          return
        }
        console.log(`Downloaded and saved ${body.length} bytes to ./index.html`);
      })
    } else {
      console.log(`The URL returns ${response.statusCode} status code.`);
    }
  
  });
}