const some = {
    "content": "Happy women's Day",
    "image": "https://www.freepnglogos.com/uploads/flower-bouquet-png/rose-bouquet-png-transparent-image-33.png",
};
const content = some.content;
const image = some.image;


function pushTheButton() {
    const contentElement = document.getElementById("content");
    contentElement.innerHTML = content;
    contentElement.style.color = "pink";
    contentElement.style.fontSize = "3rem";
    const imageElement = document.getElementById("image");
    setTimeout(function () {
        imageElement.src = image;
        imageElement.style.display = "block"
        imageElement.style.margin = "auto"
    }, 2000);
}