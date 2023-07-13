/* <a href="path/to/shopping/cart" aria-label="View 3 items in your shopping cart">
  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
</a>
 AddToCart
https://stackoverflow.com/questions/59424119/how-to-remove-or-avoid-duplicate-values-in-localstorage
*/

//Slides
let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
showSlides();

function currentSlide(index){
slideIndex = index;
(slideIndex > slides.length) ? index = 1 : index = slides.length;
for( let i = 0; i < slides.length; i++){
  slides[i].style.display = "none";
}
for( let i = 0; i < dots.length; i++){
  dots[i].className = dots[i].className.replace(" active","");
}
slides[index-1].style.display = "block";
dots[index-1].className += " active";
}


function showSlides() {
  var i;
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active","");
  }
  slideIndex++;
  if(slideIndex > slides.length){
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides,2000); // change carousel image every 2 seconds
}

$(document).ready(function (){
  // Add To Cart Section
  if(localStorage.getItem('cartNumber') != null) {
    $('#cartCount').html(localStorage.getItem('cartNumber'));
  } else {
    $('#cartCount').html('0');
  }
  // Clothing & Accessories Section
  // const url = ;
  $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function(response){
    // console.log(response);

    // Clothing elements created
    const clothing = $("<div>").addClass("containerStyles");
    const clothingCards = $("<div>").addClass("clothing-cards");
    const paraClothing = $("<p>").addClass("para-heading").html("Clothing For Men and Women");
    const clothingImagesDiv = $("<div>").addClass("clothing-imagesDiv");
    
    // Clothing elements appended
    $("#clothingSection").append(clothing);
    clothing.append(clothingCards);
    clothingCards.append(paraClothing);
    clothingCards.append(clothingImagesDiv);
    
    
    // Accessories elments created
    const accessories = $("<div>").addClass("containerStyles");
    const accessoriesCards = $("<div>").addClass("accessories-cards");
    const paraAccessories = $("<p>").addClass("para-heading").html("Accessories For Men and Women");
    const accessoriesImagesDiv = $("<div>").addClass("accessories-imagesDiv");
    
    // Accessories elements appended
    accessoriesCards.append(accessoriesImagesDiv);
    accessoriesCards.prepend(paraAccessories);
    accessories.append(accessoriesCards);
    $("#accessoriesSection").append(accessories);
    
    let i = 0;
    let j = 1;
    for(let x of response){
      // console.log(x);
      if(!x.isAccessory){
        // Clothing section -> creating elements of image section
        let link = $("<a>").attr("href", "./ProdPrevDetailsPg/2nd_prod_prev_details.html?p=" + j);
        let image = $("<img>").addClass("clothingImages").attr("src", x.preview);
        const clothingImageDesc = $("<div>").addClass("image-desc");
        let h2 = $("<h2>").addClass("image-name").html(x.name);
        let h4 = $("<h4>").addClass("image-brand").html(x.brand);
        let h5 = $("<h5>").addClass("image-price").html("Rs "+ x.price);
        let clothingIndvImageSec = $("<div>").addClass("indvImageSection").prop({id: "image" + i});

        // Append in clothing ImageSection-> adding elements 
        link.append(image);
        clothingIndvImageSec.append(link);

        clothingImageDesc.append(h2);
        clothingImageDesc.append(h4);
        clothingImageDesc.append(h5);
        clothingIndvImageSec.append(clothingImageDesc);

        clothingImagesDiv.append(clothingIndvImageSec);
      }else{
        // Accessories section -> adding image section
        let link = $("<a>").attr("href", "./ProdPrevDetailsPg/2nd_prod_prev_details.html?p=" + j);
        let image = $("<img>").addClass("accessoriesImages").attr("src", x.preview);
        const accessoriesImageDesc = $("<div>").addClass("image-desc");
        let h2 = $("<h2>").addClass("image-name").html(x.name);
        let h4 = $("<h4>").addClass("image-brand").html(x.brand);
        let h5 = $("<h5>").addClass("image-price").html("Rs "+ x.price);
        let accessoriesIndvImageSec = $("<div>").addClass("indvImageSection").prop({id: "image" + i});

        // Append in accessories ImageSection-> adding elements 
        link.append(image);
        accessoriesIndvImageSec.append(link);

        accessoriesImageDesc.append(h2);
        accessoriesImageDesc.append(h4);
        accessoriesImageDesc.append(h5);
        accessoriesIndvImageSec.append(accessoriesImageDesc);

        accessoriesImagesDiv.append(accessoriesIndvImageSec);
      }
      i++;
      j++;
    }
    for(let k = 0; k < response.length; k++) {
      $("#image" + k).click(function () {
        console.log('Clicked');
      });
    }
  });
});