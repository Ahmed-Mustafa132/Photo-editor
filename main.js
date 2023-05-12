// came elemintor 
let saturate   = document.getElementById("saturate")
let contrast   = document.getElementById("contrast")
let brightness = document.getElementById("brightness")
let sepia      = document.getElementById("sepia")
let grayscale  = document.getElementById("grayscale")
let blur       = document.getElementById("blur")
let huerotate  = document.getElementById("huerotate")

let upload    = document.getElementById("uploud")
let dawnloud   = document.getElementById("dawnloud")
let img        = document.getElementById("img")
let reset      = document.querySelector("span")
let imgbox     = document.querySelector('.img-box')

window.onload = function() {
    dawnloud.style.display = 'none'
    reset.style.display = 'none'
    imgbox.style.display = 'none'

}
upload.onchange = function(){
    dawnloud.style.display = 'block'
    reset.style.display = 'block'
    imgbox.style.display = 'block'
    let file = new FileReader()
    file.readAsDataURL(upload.files[0])
    file.onload = function(){
        img.src = file.result
    }
}
function resetvalue(){
    img.style.filter = 'none'
    saturate.value = '100'
    contrast.value = '100'
    brightness.value = '100'
    sepia.value = '0'
    grayscale.value = '0'
    blur.value = '0'
    huerotate.value = '0'


}
let filters = document.querySelectorAll(" ul li input");
filters.forEach( filters =>{
    filters.addEventListener('input', function(){
        img.style.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value}%)
        blur(${blur.value}px)
        hue-rotate(${huerotate.value}deg)


        `
    })
    })



// user flater
// فلاتر جاهزة ]
//save flter  
