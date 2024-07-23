function getInputFile () {
    let files = document.getElementById("inputPicture").files;
    let src = files[0].name;
    document.getElementById("preview").src = src;
}