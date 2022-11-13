function show_lightbox(event){
    unhide_lightbox()
    let thumbnail_img = event.target
    if(thumbnail_img.tagName == "IMG"){
        thumbnail_img = event.target.parentNode
    }
    img_url = thumbnail_img.style.backgroundImage
    img_src = img_url.slice(5, -2)
    console.log(img_src)

    document.getElementById("lightbox-img").src = img_src
    
}

function unhide_lightbox(){
    lb_container.style.display = "block"
}

function hide_lightbox(event){
    lb_container.style.display = "none"
}

function add_thumbnail_listeners(){
    //add event listeners for all thumbnail galleries
    const thumbnail_galleries = document.getElementsByClassName("grid-gallery")
    for(i=0; i<thumbnail_galleries.length; i++){
        thumbnail_galleries[i].addEventListener('click', show_lightbox)
    }
}

const lb_container = document.getElementById("custom-lightbox-gallery")
lb_container.addEventListener('click', hide_lightbox)

add_thumbnail_listeners()
