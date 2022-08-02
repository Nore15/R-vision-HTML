function Exo1()
{
        let time = $('#time').text()

        if (time != "TERMINE!"){
                console.log('carré cliqué')
                $('.vert-center').hide()
                let screenWidth = screen.width;
                let screenHeight = screen.height;
                let score = $('#score').text()
                console.log(score)
                $('#score').html(parseInt(score) + 1)
                let offsetTop = Math.floor(Math.random() * (screenHeight -100));
                let offsetLeft = Math.floor(Math.random() * (screenWidth -100));
                console.log(offsetTop,$('.vert-center').offset().top);
                console.log(offsetLeft,$('.vert-center').offset().left);
                $('.vert-center').css({top: offsetTop, left: offsetLeft})
                $('.vert-center').show()  
        }
        else (ancienScore > bestScore){
                console.log('Score sauvegardé', bestScore);
                localStorage.setItem('bestScore');
        }        
        // récupérer les largeurs et la hauteur de l'écran
        // var x = document.getElementById("screen");
        // x.innerHTML = "Device Screen: width: " + screenWidth + ", height: " + screenHeight + ".";
}

function decrease()
{
        let time = $('#time').text()
       
        if (parseInt(time) > 0){
                $('#time').html(parseInt(time) - 1)
        }

        if (parseInt(time) == 0){ 
                if (typeof intervalId != 'undefined'){
                        clearInterval(intervalId);
                }
                document.getElementById("time").innerHTML = "TERMINE!";
        }
}