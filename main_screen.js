var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');





//var playereName = prompt("Whats your name", "Enter name here");

//var petType = prompt("which pet you want?", "Pet here");

var petType = "dog";

function draw_everthing_else()
{
  this.backgroundDraw = function()
  {
    var backgroundImage = new Image();
    backgroundImage.src = "images/roomPic.jpg";
    c.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
    //console.log(backgroundImage);
  }

  this.healthBarDraw = function()
  {
    var healthBar = new Image();
    healthBar.src = "images/healthBar.jpg";
    c.drawImage(healthBar,20,30,200,200);
  }
}

function pet(petType,x,y){
    this.x = x;
    this.y = y;
    this.xv = 1;
    var petImage = new Image();

  this.draw = function(){
    //console.log(this.x,this.y);
    c.drawImage(petImage,this.x,this.y,250,250);
    petImage.src = "./images/" + petType + ".jpg";
    
  }


  this.update = function(){
    if (this.x == canvas.width-250 || this.x == 0)
    {
      this.xv = -this.xv;
    }
    this.x += this.xv;
    //this.y++;
    this.draw();
  }

}

petObject = new pet(petType,(canvas.width/2),(canvas.height)-250)
everythingElse = new draw_everthing_else();

function animate(){
  requestAnimationFrame(animate)
  c.clearRect(0,0,innerWidth, innerHeight);
  everythingElse.healthBarDraw();
  everythingElse.backgroundDraw();
  petObject.update();
}

animate();