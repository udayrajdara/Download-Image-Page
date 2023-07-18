const downloadBtn = document.querySelector('#button')
const urlInput = document.getElementById('input').required;
const thankQ = document.querySelector('.icon')


downloadBtn.addEventListener('click', async()=>{
    try {
        const response = await fetch(urlInput.value);
        const file = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file)
        link.download = new Date().getTime();
        link.click();
        thankQ.innerHTML = '<i class="fa-solid fa-face-laugh-beam fa-bounce"></i><br><br> <span>Download Completed</span>'
    } catch(error) {
        alert('Failed to download the file');
    }

});
console.log()
