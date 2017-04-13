        $(document).ready(function() {
            console.log( "ready!" );

            let searchBox = document.querySelector("#search");
            // console.log(searchBox);
            searchBox.addEventListener('keypress', checkCaptionTitle); // listen once a change happens in the input box
            
            function checkCaptionTitle() {
                // loop through all of the pictures and their captions
                console.log(searchBox.value);
                $('.pic-container a').each(function() { 
                    console.log($(this).attr('data-title')); // caption
                if ($(this).attr('data-title').toLowerCase().indexOf(searchBox.value.toLowerCase()) == -1) { // -1 if value not found, hide pics
                    $(this).css("display", "none");
                } else {
                    $(this).show(); 
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