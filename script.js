const sideBar = document.querySelector(".side-bar")
const menuBtn = document.querySelector(".menu-btn")
const closeBtn = document.querySelector(".close-btn")
const transparent = document.querySelector(".transparent")
const navCart = document.querySelector(".nav_cart")
const productCart = document.querySelector(".product_cart")
const  productThumnnails = document.querySelectorAll(".product__thumnnails img")
const  mainDisplay = document.querySelector(".main_display")
const  previousBtn = document.querySelector(".previous-btn")
const  nextBtn = document.querySelector(".next-btn")
const itemTxt  = document.querySelector(".btn_txt")
const addBtn  = document.querySelector(".add_btn")
const minusBtn  = document.querySelector(".minus_btn")
const addCart = document.querySelector(".addcart")
const  lightBoxProductThumnnails = document.querySelectorAll(".lightbox--product__thumnnails img")
const  lightBoxMainDisplay = document.querySelector(".lightbox-main_display")
const  lightBoxPreviousBtn = document.querySelector(".lightbox--previous-btn")
const  lightBoxNextBtn = document.querySelector(".lightbox--next-btn")
const  lightBoxCloseBtn = document.querySelector(".lightbox--close-btn")
const  lightBox = document.querySelector(".lightbox")


const arrayImg = [
    "/img/image-product-1.jpg",
    "/img/image-product-2.jpg",
    "/img/image-product-3.jpg",
    "/img/image-product-4.jpg"
]

menuBtn.addEventListener("click",()=>{
    sideBar.style.visibility = "visible"
    transparent.style.visibility = "visible"

})

closeBtn.addEventListener("click",()=>{
    sideBar.style.visibility = "hidden"
    transparent.style.visibility = "hidden"
})

navCart.addEventListener("click",()=>{
    productCart.classList.toggle("show")
})

productThumnnails.forEach(image => {
    image.addEventListener("click",()=>{
        productThumnnails.forEach(img =>{
            img.classList.remove("img--focus")
        })
        image.classList.add("img--focus")
        mainDisplay.src = image.src
    //    const clickImg = Array.from(productThumnnails).indexOf(image)
    //    console.log(image.src)
    })
})
let currentIndex = 0



nextBtn.addEventListener("click",()=>{

    currentIndex =(currentIndex + 1) % arrayImg.length

    mainDisplay.src = arrayImg[currentIndex]
})

previousBtn.addEventListener("click",()=>{
    currentIndex =(currentIndex - 1 + arrayImg.length) % arrayImg.length

    mainDisplay.src = arrayImg[currentIndex]
})

let itemNum = 0

addBtn.addEventListener("click",()=>{
    itemNum++
    itemTxt.innerText = itemNum
})

minusBtn.addEventListener("click",()=>{
    if(itemTxt.innerText <= 0){
        itemTxt.innerText = itemNum
    }else{
        itemNum--
        itemTxt.innerText = itemNum
    }
})


addCart.addEventListener("click",()=>{
    const productTxt = document.querySelector(".section--two_header h3").innerText
    const productPrice = document.querySelector(".price").textContent

    const extractedNumber = parseFloat(productPrice.trim())
    
    if(itemNum !== 0){
        document.querySelector(".empty_cart").style.visibility = "hidden"
        document.querySelector(".cart--container").style.visibility = "visible"
        document.querySelector(".checkout").style.visibility = "visible"
        document.querySelector(".img--cart").src = mainDisplay.src
        document.querySelector(".product--cart-name").textContent = productTxt
        document.querySelector(".price--cal").textContent = `$${productPrice} * ${itemNum}`
        document.querySelector(".total").textContent = `$${extractedNumber * itemNum}.00`  
        document.querySelector(".notification").textContent = `${itemNum}`  
    }
    else{
        document.querySelector(".empty_cart").style.visibility = "visible"
        document.querySelector(".cart--container").style.visibility = "hidden"
        document.querySelector(".checkout").style.visibility = "hidden"
    }

})

document.querySelector(".delete-btn").addEventListener("click",()=>{
    document.querySelector(".empty_cart").style.visibility = "visible"
    document.querySelector(".cart--container").style.visibility = "hidden"
    document.querySelector(".checkout").style.visibility = "hidden"
    document.querySelector(".notification").textContent = 0  

})

lightBoxProductThumnnails.forEach(image => {
    image.addEventListener("click",()=>{
        lightBoxProductThumnnails.forEach(img =>{
            img.classList.remove("img--focus")
        })
        image.classList.add("img--focus")
        lightBoxMainDisplay.src = image.src
    })
})

lightBoxNextBtn.addEventListener("click",()=>{

    currentIndex =(currentIndex + 1) % arrayImg.length

    lightBoxMainDisplay.src = arrayImg[currentIndex]
})

lightBoxPreviousBtn.addEventListener("click",()=>{
    currentIndex =(currentIndex - 1 + arrayImg.length) % arrayImg.length

    lightBoxMainDisplay.src = arrayImg[currentIndex]
})

lightBoxCloseBtn.addEventListener("click",()=>{
    lightBox.style.visibility = "hidden"
})

mainDisplay.addEventListener("click",()=>{

        lightBox.style.visibility = "visible"

})

// window.addEventListener("resize",()=>{
//     if(innerWidth <= 639){
//         lightBox.style.visibility = "hidden"
//     }
// })