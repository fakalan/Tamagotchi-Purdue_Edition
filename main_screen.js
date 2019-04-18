var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

var feedButton = document.getElementById("feedButton");





//var playereName = prompt("Whats your name", "Enter name here");

var petType = prompt("which pet you want?", "cat/dog");

//var petType = "cat.png";
var maxHealth = 260;
var maxHunger = 100;
var maxThirst = 100;
var dead = false;

// window.addEventListener('mousemove', 
// function(event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
//   //console.log(mouse.x);
// })

function Dead()
{
  dead = true;
  console.log("DEYAAD");
}



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
    c.drawImage(healthBar,20,30,340,85);
  }
}

function pet(petType,x,y,health){
    this.x = x;
    this.y = y;
    this.xv = 1;
    this.health  = health;
    this.healthV = 0.08;
    var petImage = new Image();
    petImage.src = "./images/" + petType + ".jpg";

    this.feed = function()
    {
      if (this.health < maxHealth)
      {
        console.log("been fed");
        this.health += 10;
      }
      else
      {
        console.log("Tummy is full buddy");
      }

    }

    this.statUpdate = function()
    {
      if (this.health > 10)
      {
        this.health -= this.healthV;
      }
      else
      {
        Dead();
      }
      c.beginPath();
      c.fillStyle = "red";
      c.fillRect(93,53,this.health,40);
      c.stroke();
    }
    

  this.draw = function(){
    //console.log(this.x,this.y);
    c.drawImage(petImage,this.x,this.y,250,250);
    
  }


  this.update = function(){
    if (this.x == canvas.width-250 || this.x == 0)
    {
      this.xv = -this.xv;
    }
    this.x += this.xv;
    //this.y++;
    if (dead)
    {
      petImage.src = "images/dead.png";
    }
    this.draw();
  }

}


petObject = new pet(petType,(canvas.width/2),(canvas.height)-250,maxHealth)
everythingElse = new draw_everthing_else();

feedButton.addEventListener("click", feed);
function feed()
{
  petObject.feed();
}

function animate(){
  requestAnimationFrame(animate)
  c.clearRect(0,0,innerWidth, innerHeight);
  everythingElse.backgroundDraw();
  everythingElse.healthBarDraw();
  petObject.statUpdate();
  petObject.update();
}

animate();