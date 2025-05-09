document.addEventListener("DOMContentLoaded", function () {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if(product){
        document.getElementById("productImg").src = product.image;
        document.getElementById("productTitle").innerText = product.title;
        document.getElementById("productDesc").innerText = product.desc;
        document.getElementById("productPrice").innerText = product.price;    }
});


function addToCart(){
    let cart = JSON.parse(localStorage.getItem("selectedProduct"))
}


// Generate star ratings dynamically
document.addEventListener("DOMContentLoaded", () => {
    const ratings = document.querySelectorAll(".rating");
  
    ratings.forEach((rating) => {
      const ratingValue = parseFloat(rating.dataset.rating);
      const fullStars = Math.floor(ratingValue);
      const hasHalfStar = ratingValue % 1 !== 0;
  
      let starsHTML = "";
  
      for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
          starsHTML += '<span class="star">&#9733;</span>'; // Full star
        } else if (hasHalfStar && i === fullStars) {
          starsHTML += '<span class="star">&#9734;</span>'; // Half star
        } else {
          starsHTML += '<span class="star" style="color: #ccc;">&#9734;</span>'; // Empty star
        }
      }
  
      rating.innerHTML = starsHTML;
    });
  });
  