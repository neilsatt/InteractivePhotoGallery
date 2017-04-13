        $(document).ready(function() {
            console.log( "ready!" );

            let searchBox = document.querySelector("#search");
            // console.log(searchBox);
            searchBox.addEventListener('keypress', checkCaption); // listen once a change happens in the input box
            
            function checkCaption() {
                // loop through all of the pictures and their captions
                console.log(searchBox.value);
                $('.pic-container a').each(function() { 
                    //console.log($(this).attr('data-title')); // caption
                
                // Do a search based and only show the picture if the user enters the complete caption title
                if ( $(this).attr('data-title').toLowerCase() === searchBox.value.toLowerCase() ) { 
                    $(this).show();  // Show pic if it exists
                } else {
                     $(this).css("display", "none"); // hide
                }      
            });
           } // end of function
            
            // Allow the user to reset the page
            let resetBtn = document.querySelector("#resetBtn");
            resetBtn.onclick = function() {
                console.log('btn');
                location.reload();
            };  
            
            
        }); // end of document ready 