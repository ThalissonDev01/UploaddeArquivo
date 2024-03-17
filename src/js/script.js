const form = document.querySelector('form'),
fileInput = form.querySelector('.file-input'),
progressArea = document.querySelector('.progress-area'),
uploadedArea = document.querySelector('.uploaded-area');

form.addEventListener('click', () => {
    fileInput.click();
})

fileInput.onchange = ({target}) => {
    let file = target.files[0];
    if(file) {
        let fileName = file.name;
        uploadedFile(fileName)
    }
}

function uploadedFile(name) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'src/php/upload.php');
    xhr.upload.addEventListener('progress', e =>{
        console.log(e)
    })
    let formData = new FormData(form);
    xhr.send(formData);
}