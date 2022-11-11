function scroll_nav_height(event){
    const nav_element = document.getElementById('top-nav')
    const current_height_int = parseInt(nav_element.style.height.slice(0, -2))
    
    if(current_height_int > 128){
        const new_height_int = current_height_int - 64
        set_height(nav_element, new_height_int)
    }
}

function set_height(element, height_int){
    element.style.height = `${height_int}px`
}

function view_image(event){
    
    //check if img or column, need to set the column bg
    let thumbnail_img = event.target
    if(event.target.tagName == "IMG"){
        thumbnail_img = event.target.parentNode
    }
    const main_img = thumbnail_img.parentNode.parentNode.parentNode.querySelector('.col')
    main_img.style.background = thumbnail_img.style.background
}


const page = document.querySelector("body")
page.addEventListener('wheel', scroll_nav_height)

//add event listeners for all thumbnail galleries
const thumbnail_galleries = document.getElementsByClassName("thumbnail-cols-col")
for(i=0; i<thumbnail_galleries.length; i++){
    thumbnail_galleries[i].addEventListener('click', view_image)
}