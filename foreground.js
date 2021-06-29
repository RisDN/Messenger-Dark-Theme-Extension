console.log('Loaded Messenger Dark theme')
document.querySelectorAll('style')[0].innerText = ''
let watermark = null;
window.addEventListener('DOMContentLoaded', () => {
    watermark = document.createElement('div')
    watermark.innerHTML =
        `
    
    <div id="darktheme"><span>Messenger Dark theme</span><br><span>Created By: Ris#2928</span></div>
    
        `
    document.querySelector('body').appendChild(watermark)
});