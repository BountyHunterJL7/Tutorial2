document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
displayMeme();
}



//YOLO BABY YEAAAAH
async function displayMeme() {
    try {
        const response = await
        fetch("https://api.imgflip.com/get_memes");
        const jsonResponse = await response.json();

        console.log(jsonResponse);
<<<<<<< HEAD
        const meme = jsonResponse.data.memes[2];
=======
        const meme = jsonResponse.data.memes[3];
>>>>>>> master

        const image = document.createElement("img");
        image.src = meme.url;
        image.alt = meme.name;
        image.width = 200;

        const memeContainer =
        document.querySelector("#meme");
        memeContainer.appendChild(image);
    } catch (error) {
        console.log("Promise failerd", error);
    }
}