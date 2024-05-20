const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = []

const count = 10;
const apiKey = 'gbKYXs_fOGS1N3g0tzcQ1tKt4yF22pc7vbAc3sDqryk';
const apiUrl =` https://api.unsplash.com/photos/?client_id=${apiKey}&count=${count}`;


function imageLoader(){
    
}
// Create Elements for Links & Photos, Add to DOM
function displayPhotos(){
    photosArray.forEach((photo)=>{
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');

        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

        img.addEventListener('load', imageLoader)

        item.appendChild(img);
        imageContainer.appendChild(item);

    })
}


// Get Photos From Unsplash API
async function getPhotos(){  
    try{
        const response = await fetch(apiUrl);
        photosArray = response.json();
        displayPhotos();
    }catch(error){
        alert("Error loading photoes");
    }
   
}

window.addEventListener('scroll', ()=>{
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
        getPhotos(); 
    }
})


getPhotos();