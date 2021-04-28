var numberofbutton=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofbutton;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

 
    var buttonHTML =this.innerHTML;

    switch (buttonHTML) {
        case "w":
            var audio =new Audio("mi4.wav")
            audio.play();
            break;
        case "a":
            var audio =new Audio("mi5.wav")
            audio.play();
            break; 
        case "s":
            var audio =new Audio("mi1.wav")
            audio.play();
            break; 
        case "d":
            var audio =new Audio("mi2.wav")
            audio.play();
            break; 
        case "j":
            var audio =new Audio("mi3.wav")
            audio.play();
            break; 
        case "k":
            var audio =new Audio("mi4.wav")
            audio.play();
            break; 
        case "l":
            var audio =new Audio("mi5.wav")
            audio.play();
            break; 




        default: console.log(buttonHTML);

    }
});
}





