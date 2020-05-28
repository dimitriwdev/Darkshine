console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');


  
  // Tested on :
  // Firefox 76.0.1
  // Chrome 81.0.4044.138
  // Edge 81.0.416.72



  addMyEventListeners()

  showSlides();  // initiate slider function

});


function addMyEventListeners(){
  
  /*----------------- Show/Hide feature -----------------*/

  // as event, on h1 clicked, the section will toggle between show and hide state
  // use of slideToggle() method to show and hide content, it already contains transition

  $('#secondSection > h1').click(function(){    
    $('#seeMore').slideToggle();                
      
  });

  // Modify HTML content

  // as event, on h1 clicked, html content will toggle between 'Read more' and 'Show less'
  // clicking on h1, if the html content is equal to 'Read more'...
  // ... it will be modified with 'Show less'
  // if it already has the value 'Show less' the html content will be change with 'Read more'

  $('#secondSection > h1').click(function(){     
    if($('#moreLess').html() === 'Read more'){   
    $('#moreLess').html('Show less');             
    } else {
      $('#moreLess').html('Read more');          
    }
  });

  /*--------------- End of Show/Hide feature------------------- */
};




    /*--------------- Slider script------------------- */ 

    var imageIndex = 0;                                             // set a variable to index 0 (first image)
    
    
    function showSlides() {                                         // creation of a function to start the slider
      var i;
      var slides = document.getElementsByClassName("slides");
      for (i = 0; i < slides.length; i++) {                         // creation of a loop to read all elements of the array 
        slides[i].style.display = "none";                           // hide all elements of the aray
      }
      imageIndex++;
      if (imageIndex > slides.length) {                             // end of the loop, if the last image is reached, the loop stop and restart from the first image
        imageIndex = 1;                                             // image 1 but image 1 is index 0...
      }  
      slides[imageIndex-1].style.display = "block";                 // ... so we have to remove 1 to display imageIndex 0 because we are in an array so we are based on 0 (01234 and not 12345)
      setTimeout(showSlides, 2000);                                 // Change image every 2 seconds through showSlide() function
    }

    /*--------------- End of Slider script------------------- */ 



    