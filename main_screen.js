var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');


//var playereName = prompt("Please enter your name", "Enter your name here");

var petType = 'dog';
var petImage = new Image();
petImage.src = "images/dog.jpg";


function pet(petType,x,y){
    console.log("here0");

    //var petImage = "images/" + petType + ".jpg";
    
  
  this.draw = function(){
    c.clearRect(0,0,innerWidth, innerHeight);
    c.drawImage(petImage,x,y);
    console.log(petImage);
  }


  this.update = function(){
    //x++;
    //y++;
    this.draw();
    console.log("update");
    //requestAnimationFrame(update)
  }

  this.update();

}



function animate(){
  //requestAnimationFrame(animate)
  c.clearRect(0,0,innerWidth, innerHeight);
  this.pet(petType,10,10);

}

animate();