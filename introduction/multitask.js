// Changing the threadpool size will 
// help the threadpool function usage to be more performant
process.env.UV_THREADPOOL_SIZE = 5;

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();
function doRequest() {
https.request('https://www.google.com', res => {
  res.on('data', () => {});
  res.on('end', () => {
    console.log(Date.now() - start);
  });
})
.end();
}

function doHash() {
  crypto.pbkdf2('a', 'b',100000, 512, 'sha512', () => {
    console.log('Hash: ', Date.now() - start);
  });  
}

// Probably ends first because it doesn't use the event loop
// but the OS scheduler for doing the actual request, "skipping" the event loop.
doRequest();

// fs Module requests access to HD and uses the threadpool
// then it get some stats about the file before reading it
// while it is waiting, the thread is yield to do other tasks
// and the same goes for the reading, that can "run forever".
fs.readFile('multitask.js', 'utf8', () => {
  console.log('FS: ', Date.now() - start);
});

// pbdf2 function will use th threadpool so it will probably
// so we have a race condition between fs and doHash
doHash();
doHash();
doHash();
doHash();