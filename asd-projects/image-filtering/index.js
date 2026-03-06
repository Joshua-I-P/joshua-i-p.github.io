// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(reddify);
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterColor){
  for(var i = 0; i < image.length; i++){
    for(var j = 0 ; j < image[i].length; j++){
      let pixel = image[i][j];
      let pixelArray = rgbStringToArray(pixel);
      
      //Modify color values here

      filterColor(pixelArray)
      let updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel
      
    }
  }
}


// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterColor){
  let backgroundColor = image[0][0];
  for(var i = 0; i < image.length; i++){
    for(var j = 0 ; j < image[i].length; j++){
      let pixel = image[i][j];
      let pixelArray = rgbStringToArray(pixel);
      if (backgroundColor !== pixel){
      //Modify color values here

      filterColor(pixelArray)
      let updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel
      }
    }
  }
}
applyFilter(reddify);
applyFilterNoBackground(decreaseBlue);
applyFilter(increaseGreenByBlue);
applyFilterNoBackground(reddify);
// TODO 6: Create the keepInBounds function
function keepItInBounds(num){
  if(num < 0){
    return 0
  } else if (num > 225){
    return 255
  } else {return num}
}

// TODO 4: Create reddify filter function
function reddify(pArr){
  pArr[RED] = 200
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pArr){
  pArr[BLUE] -= 50;
  keepItInBounds(pArr[BLUE])
}

function increaseGreenByBlue(pArr){
  pArr[GREEN] += pArr[BLUE];
  keepItInBounds(pArr[GREEN])
}
// CHALLENGE code goes below here
