const time = document.querySelector('#time');

function getTime() {
  // Retrieve time from google storage, set timeObj to our stored data if there is data
  chrome.storage.local.get(['storedTime'], (data) => {
    // This add time to our object
    timeObj = JSON.parse(data.storedTime);
    // console.log(timeObj)

    timeObj.s += 1;
    if (timeObj.s >= 60) {
      timeObj.m += 1;
      timeObj.s = 0;
    }
    if (timeObj.m >= 60) {
      timeObj.h += 1;
      timeObj.m = 0;
    }

    // console.log(timeObj);
    // console.log(data.storedTime);

    // Updates our HTML with new time
    time.innerHTML = `${timeObj.h} hr ${timeObj.m} min ${timeObj.s} sec`;
    // console.log(time);

    chrome.storage.local.set({ 'storedTime': JSON.stringify(timeObj)}, function () {
      // console.log(data.storedTime);
    });
  });
}

chrome.webNavigation.onCommitted.addListener(function() {
  if (timeObj.s > 0 || timeObj.m > 0 || timeObj.h > 0) {
    setInterval(getTime, 1000),
    {url: [
      { urlMatches: '*://www.youtube.com/*' },
    ]}
    }
  }
);

