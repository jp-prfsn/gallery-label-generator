var fileInput = document.getElementById("csv"),

    readFile = function () {

        var reader = new FileReader();

        reader.onload = function () {

            var entrants = reader.result.split('\n');
            entrants.shift(); 
            var len = entrants.length;
            //console.log(entrants);


            

            function drawLabels(item, index){

                var entrantArray = item.split('|');
                entrantArray[0].replace('"""', '"');
                entrantArray[1].replace('"""', '"');
                entrantArray[2].replace('"""', '"');
                entrantArray[3].replace('"""', '"');
                entrantArray[4].replace('"""', '"');
                $( "#label-container" ).append( "<div class='label' id='box-" + index + "'></div>" );
                $( "#box-" + index ).append( "<span class='artist'>" + entrantArray[0] + "</span>" );
                $( "#box-" + index ).append( "<span class='country'>" + entrantArray[1] + "</span>" );
                $( "#box-" + index ).append( "<span class='title'>" + entrantArray[2] + "</span>" );
                $( "#box-" + index ).append( "<span class='medium'>" + entrantArray[3] + "</span>" );
                $( "#box-" + index ).append( "<span class='quote'>" + entrantArray[4] + "</span>" );
                $( "#box-" + index ).append( "<img src='logo.png' class='icon'>" );

            }

            entrants.forEach(drawLabels);

        };
        // start reading the file. When it is done, calls the onload event defined above.
        reader.readAsBinaryString(fileInput.files[0]);
        document.getElementById("bar").classList.add("height0");
    };

    fileInput.addEventListener('change', readFile);
