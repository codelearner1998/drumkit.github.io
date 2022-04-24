

// document.querySelectorAll(".drum")[0].addEventListener("click",function(){ alert("i got clicked")    })

// document.querySelectorAll(".drum")[1].addEventListener("click",function(){ alert("i got clicked")    })

// document.querySelectorAll(".drum")[2].addEventListener("click",function(){ alert("i got clicked")    })

// document.querySelectorAll(".drum")[3].addEventListener("click",function(){ alert("i got clicked")    })

// document.querySelectorAll(".drum")[4].addEventListener("click",function(){ alert("i got clicked")    })

// document.querySelectorAll(".drum")[5].addEventListener("click",function(){ alert("i got clicked")    })

// document.querySelectorAll(".drum")[6].addEventListener("click",function(){ alert("i got clicked")    })

// use above manually or you can create a loop  -- for loop ;




//Detecting Button press


var drumsButtons =document.querySelectorAll(".drum").length;

for (i=0 ; i <drumsButtons ; i++)  {

document.querySelectorAll(".drum")[i].addEventListener("click",function()
{    

    var buttonInnerhtml = this.innerHTML;

    makeSound(buttonInnerhtml);

    buttonAnimation(buttonInnerhtml)

   
  })
}



// Detecting keyword press


document.addEventListener("keypress" , function (event){
    makeSound(event.key);

    buttonAnimation(event.key);



})





//function for both


function makeSound(key){

    switch (key) {
        case "w":
         var audio = new Audio('sounds/tom-4.mp3');
         audio.play(); 
            
            break;
 
            case "a":
             var audio = new Audio('sounds/tom-3.mp3');
             audio.play(); 
             break;
 
             case "s":
         var audio = new Audio('sounds/tom-2.mp3');
         audio.play(); 
            
            break;
 
            case "d":
             var audio = new Audio('sounds/tom-1.mp3');
             audio.play(); 
             break;
 
             case "j":
                 var audio = new Audio('sounds/crash.mp3');
                 audio.play(); 
                 break;
     
                 case "k":
             var audio = new Audio('sounds/snare.mp3');
             audio.play(); 
             break;
             case "l":
             var audio = new Audio('sounds/kick-bass.mp3');
             audio.play(); 
             break;
 
    
        default: console.log(buttonInnerhtml);
            break;
    }
 
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");

    },100);




}


 


