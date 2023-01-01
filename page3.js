let products = {
    data: [
      {
        productName: "html",
        category: "html",
        title: "courses html for begginers",
        image: "img5.png",
      },
      {
        productName: "HTML",
        category: "html",
        title: "courses html",
        image: "img6.jpg",
      },
      {
        productName: "HTML",
        category: "html",
        title: "free coursses html",
        image: "HTML.jpg",
      },
      {
        productName: "CSS",
        category: "css",
        title: "learning css for free",
        image: "img8.jpg",
      },
      {
        productName: "CSS",
        category: "css",
        title: "css coursses for begginers",
        image: "img9.jpg",
      },
      {
        productName: "CSS",
        category: "css",
        title: "css easy",
        image: "img10.jpg",
      },
    
      {
        productName: "javascript",
        category: "js",
        title: "js coursses for begginers",
        image: "img1.jpg",
      },
      {
        productName: "javascript",
        category: "js",
        title: "js coursses",
        image: "img2.jpg",
      },
      {
        productName: "javascript",
        category: "js",
        title: "easy javascript",
        image: "img3.jpg",
      },
      {
        productName: "php",
        category: "php",
        title: "php coursse",
        image: "img10.jpg",
      },
      {
        productName: "php",
        category: "php",
        title: "php for begginers",
        image: "php.jpg",
      },
      {
        productName: "php",
        category: "php",
        title: "php easy",
        image: "img12.jpg",
      },

   
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //title
    let title = document.createElement("h6");
    title.innerText = "-" + i.title;
    container.appendChild(title);
  
    card.appendChild(container);
    document.getElementById("cr").appendChild(card);
  }
  

  function filterProduct(value) {
  
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
    
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    
    let elements = document.querySelectorAll(".card");
    
    elements.forEach((element) => {
      
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        
        if (element.classList.contains(value)) {
          
          element.classList.remove("hide");
        } else {
          
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    
    elements.forEach((element, index) => {
      
      if (element.innerText.includes(searchInput.toUpperCase())) {
        
        cards[index].classList.remove("hide");
      } else {
        
        cards[index].classList.add("hide");
      }
    });
  });
  
  
  window.onload = () => {
    filterProduct("all");
  };
