//This lives in Chrome Dev Tools
// console.log('here');

const time1 = document.querySelector('#time');
const button = document.querySelector('#reset');
button.addEventListener('click', () => {
  time1.innerHTML = `${0} hr ${0} min ${0} sec`;
  chrome.storage.local.set({ 'storedTime': JSON.stringify({ s: 0, m: 0, h: 0 })}, function () {
    console.log(data.storedTime);
  });
  }
);