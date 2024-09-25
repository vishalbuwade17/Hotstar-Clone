
let movies = [
    {
      name: "falcon and the winter soldier", 
      des: "Following the events of 'Avengers: Endgame,' Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities -- and their patience.",
      image: "./images/slider 2.PNG"
    },
    {
      name: "falcon and the winter soldier", 
      des: "Following the events of 'Avengers: Endgame,' Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities -- and their patience.",
      image: "./images/slider 1.PNG"
    },
    {
      name: "falcon and the winter soldier", 
      des: "Following the events of 'Avengers: Endgame,' Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities -- and their patience.",
      image: "./images/slider 3.PNG"
    },
    {
      name: "falcon and the winter soldier", 
      des: "Following the events of 'Avengers: Endgame,' Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities -- and their patience.",
      image: "./images/slider 4.PNG"
    },
    {
      name: "falcon and the winter soldier", 
      des: "Following the events of 'Avengers: Endgame,' Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities -- and their patience.",
      image: "./images/slider 5.PNG"
    }
  ];
  
  const carousel = document.querySelector('.carousel');
  let sliders = []; // This is the global array to store all slides
  let slideIndex = 0; // Track the current slide
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // Create DOM elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
  
    // Attach all the elements
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.append(h1);
    content.append(p);  
    slide.appendChild(imgElement);
    slide.appendChild(content);
  
    // Setting up the image
    imgElement.src = movies[slideIndex].image;
  
    // Increment slide index
    slideIndex++;
  
    // Setting elements' class names
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className ='movie-des';
  
    // Append the slide to the carousel
    carousel.appendChild(slide);
  
    // Store the slide in sliders array
    sliders.push(slide);
  
    // Adjusting the margin for sliding effect
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
  };
  
  // Initially create 3 slides
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  // Set an interval to create new slides every 3 seconds
  setInterval(() => {
    createSlide();
  }, 3000);
  