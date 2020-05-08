var button = document.getElementById('button');
button.addEventListener("click", changePic);
var imageHolder = document.getElementById('picture')
function changePic() {
    var randomNumber = Math.floor(Math.random() * 8);
 imageHolder.src ="image/img" + randomNumber + ".jpg"
}
