console.log("Script running")
// CODE ALONG
// Use querySelectorAll to select all the buttons
let buttonsArray = document.querySelectorAll("button")

// Use a for loop to console log each of the buttons in the array
for(let i=0; i<buttonsArray.length; i++) {
  console.log(buttonsArray[i])
}


// Use getElementsByClassName to select all the p tags under the buttons
let pTags = document.getElementsByClassName("color")

// Console log the length of the array to confirm you have all ten elements
for (let i=0; i<pTags.length; i++) {
  console.log(pTags[i])
}

// Add an event listener to the first button (red), such that when you click it, all the p tags turn red

buttonsArray[0].addEventListener("click", function(event) {
  for (let i=0; i<pTags.length; i++) {
    pTags[i].style.color = "red"
  }
})



// LESSON 12 CODING EXERCISES
// Task 1
// Set up similar event listeners for the green and blue buttons
buttonsArray[1].addEventListener("click", function(event) {
  for (let i=0; i<pTags.length; i++) {
    pTags[i].style.color = "green"
  }
})

buttonsArray[2].addEventListener("click", function(event) {
  for (let i=0; i<pTags.length; i++) {
    pTags[i].style.color = "blue"
  }
})


// Task 2
// Select the skunk button
let button = document.querySelector("#skunk")

// Use querySelectorAll to select all the images
let images = document.querySelectorAll(".images")

// Add an event listener to the skunk button such that when you click it, all the images become skunk.webp
button.addEventListener("click", function(event){
  for(let x=0; x<images.length;x++){
    images[x].src = "skunk.webp"
  }
})


// LESSON 13 CODING EXERCISES
// Task 1 
// Write a for loop that goes through every image
for(let i = 0;i < images.length; i++){
  images[i].addEventListener("mouseover", function(event){
    images[i].style.width = "110%"
  })
  images[i].addEventListener("mouseout", function(event){
    images[i].style.width = "100%"
  })
}
// In the for loop, add an event listener to each image such that when the mouse is over it, the width goes to 110%

// In the same for loop, add an event listener to each image such that when the mouse moves off it, the width goes back to 100%

// Task 2
// Set up the DOM manipulation flow such that when you click any of the p tags, the font family changes to "Indie Flower", cursive;
for(let x = 0; x < pTags.length;x++){
  pTags[x].addEventListener("click", function(event){
    pTags[x].style.fontFamily = "Indie Flower"
  })
}



// Task 3
// Set up the DOM manipulation flow such that when move your mouse over any of the buttons, the background color changes to black and the text color changes to white. It should change back to normal when you move your mouse off it.
for(let p = 0; p < buttonsArray.length;p++){
  buttonsArray[p].addEventListener("mouseover", function(event){
    buttonsArray[p].style.backgroundColor = "black"
  })
  buttonsArray[p].addEventListener("mouseout", function(event){
    buttonsArray[p].style.backgroundColor = "white"
  })
}



// Task 4 (Stretch)
// Re-write the code along/Task 1 code to have just 1 event listener for all 3 buttons to work correctly
// Hint: you may need to use an array to store colors to match buttons



