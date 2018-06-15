// global variables.
var attack;
var defend;
var attackcharacter;
var attackerHP;
var attackerAP;
var attackerCAP;
var defendcharacter;
var defenderHP;
var defenderAP;
var defenderCAP;
var name;
var YourCharacter;
var YourDefender;
var myChar = "";
var myDef = "";
//var sound;

function reset() {	

$("#picRow").show();

$(".restart").hide();
$(".attackButton").show();

// reset myChar and myDef to equal nothing.
var myChar = "";
var myDef = "";
// var YourCharacter;
// var YourDefender;


// reset health points.
characters.ObiWan.healthPoints = 120;
characters.Talzin.healthPoints = 100;
characters.Bane.healthPoints = 150;
characters.DarMaul.healthPoints = 180;

// reset attack power.
characters.ObiWan.attackPower = 8;
characters.Talzin.attackPower = 10;
characters.Bane.attackPower = 10;
characters.DarMaul.attackPower = 12;

// delete all in-game text.
$(".youAttacked").empty();
$(".attackedBack").empty();
$(".youDefeated").empty();
$(".youWon").empty();
$(".youLose").empty();
$(".noEnemy").empty();

//writing each characters full name to the html so they show up on the page.
$(".nameo").html(characters.ObiWan.fullName);
$(".namel").html(characters.Talzin.fullName);
$(".nameds").html(characters.Bane.fullName);
$(".namedm").html(characters.DarMaul.fullName);

//adding the picture for each character so they show up on the page.
$("#darthS").appendTo("#picRow");
$("#darthM").appendTo("#picRow");
$("#luke").appendTo("#picRow");
$("#obi").appendTo("#picRow");

//writing each characters healthpoints to the html so they show up on the page.
$(".ob1hp").html(characters.ObiWan.healthPoints);
$(".lukehp").html(characters.Talzin.healthPoints);
$(".darthshp").html(characters.Bane.healthPoints);
$(".darthmhp").html(characters.DarMaul.healthPoints);

// reset border colors. 
$(".firstRow").css({"background-color": "white", "outline-color": "limegreen", 
"border-width": "3px", "outline-style": "solid", "border-color": "white", "outline-width": "3px"});

};

// array to hold each characters stats.
var characters = { 

ObiWan: {
    name: "ObiWan",
    visual: 'assets/images/obi-wan.jpg',
    healthPoints: 120,
    attackPower: 8,
    fullName: "Obi-Wan Kenobi",
    counterAttackPower: 24
    },

Talzin:{
    name: "Talzin",
    visual: 'assets/images/mother-talzin.png',
    healthPoints: 200,
    attackPower: 15,
    fullName: "Mother Talzin",
    counterAttackPower: 5
    },

Bane:{ 
    name: "Bane",
    visual: 'assets/images/bane.jpg',
    healthPoints: 150,
    attackPower: 10,
    fullName: "Bounty Hunter Bane",
    counterAttackPower: 20
    },

DarMaul:{ 
    name: "DarMaul",
    visual: 'assets/images/darth-maul.png',
    healthPoints: 180,
    attackPower: 12,
    fullName: "Darth Maul",
    counterAttackPower: 25
    }
};


$(document).ready(function(){
reset();

// When the player clicks on any of the characters, the game determines which one was clicked, moves the one clicked into
// "Your Character" and moves the other three into "Enemies available to attach".
$(".firstRow").click(function(){
        
   if (myChar == "") {
   // appends the chosen character to "Your Character"
   console.log(this);	       
   $(this).appendTo("#yourChar");
   myChar = $(this);
   YourCharacter = $(myChar).attr("value");
      }
   // if else statements that determine who is currently "Your Character" and assign
   // that person to the character array's properties. 
   if (YourCharacter == characters.ObiWan.name) {
           attackerHP = characters.ObiWan.healthPoints;
           attackerAP = characters.ObiWan.attackPower;
           attackerCAP = characters.ObiWan.counterAttackPower;
           attackerFN = characters.ObiWan.fullName;
           attack = characters.ObiWan;
   }
   else if (YourCharacter == characters.Talzin.name){
           attackerHP = characters.Talzin.healthPoints;
           attackerAP = characters.Talzin.attackPower;
           attackerCAP = characters.Talzin.counterAttackPower;
           attackerFN = characters.Talzin.fullName;
           attack = characters.Talzin;
   }
   else if (YourCharacter == characters.Bane.name){
           attackerHP = characters.Bane.healthPoints;
           attackerAP = characters.Bane.attackPower;
           attackerCAP = characters.Bane.counterAttackPower;
           attackerFN = characters.Bane.fullName;
           attack = characters.Bane;
   }
   else if (YourCharacter == characters.DarMaul.name){
           attackerHP = characters.DarMaul.healthPoints;
           attackerAP = characters.DarMaul.attackPower;
           attackerCAP = characters.DarMaul.counterAttackPower;
           attackerFN = characters.DarMaul.fullName;
           attack = characters.DarMaul;
   }
          
   // clones the three remaining characters to "Enemies available to attack" three separate divs.
   for (var i = 0; i < 4; i++) {
       $("._" + [i]).not(myChar).appendTo("#enemies" + [i]);

       // changing color
       $("._" + [i]).not(myChar).css({"background-color": "red", "outline-color": "black", 
           "border-width": "3px", "outline-style": "solid", "border-color": "black", "outline-width": "1px"});


   }
           
   // Clears the characters from the top.
   // $("#picRow").empty();
   $("#picRow").hide();
  
});

// When the player clicks on any of the characters in the "enemies available to attack" section, the game 
// determines which one was clicked and moves the one clicked into the "Defender" position. The other two 
// characters remain in "enemies available to attack" section.     
$(".move").click(function(){

     // if (myDef === "") {
        // clones the chosen character to "Defender"
     // moves that character to the "Defender" section on the page.
     $(this).appendTo("#defender");
     myDef = $(this);
     YourDefender = $(myDef).children().attr("value");
     $(".youDefeated").empty();

     // if else statements that determine who is currently "Defender" and assign
   // that person to the character array's properties.
   if (YourDefender == characters.ObiWan.name) {
           defenderHP = characters.ObiWan.healthPoints;
           defenderAP = characters.ObiWan.attackPower;
           defenderCAP = characters.ObiWan.counterAttackPower;
           defenderFN = characters.ObiWan.fullName;
           defend = characters.ObiWan;
       
       }
    else if (YourDefender == characters.Talzin.name){
           defenderHP = characters.Talzin.healthPoints;
           defenderAP = characters.Talzin.attackPower;
           defenderCAP = characters.Talzin.counterAttackPower;
           defenderFN = characters.Talzin.fullName;
           defend = characters.Talzin;
           
   }
   else if (YourDefender == characters.Bane.name){
           defenderHP = characters.Bane.healthPoints;
           defenderAP = characters.Bane.attackPower;
           defenderCAP = characters.Bane.counterAttackPower;
           defenderFN = characters.Bane.fullName;
           defend = characters.Bane;
           
   }
   else if (YourDefender == characters.DarMaul.name){
           defenderHP = characters.DarMaul.healthPoints;
           defenderAP = characters.DarMaul.attackPower;
           defenderCAP = characters.DarMaul.counterAttackPower;
           defenderFN = characters.DarMaul.fullName;
           defend = characters.DarMaul;       
   }
});


// when the user clicks attack, the player/Your Character's Health Points go down based on the counter attack 
// property of the "Defender".Their counter attack decreases your health.
$(".attackButton").click(function(){

     // if player clicks attack button and no one is in the "defender" div, then 
     // game says "no enemy here".
     if ($("#defender").children().length == 0) {
         $(".noEnemy").html("No enemy here.");
     }

     if (!(attackerHP < 1) || !(defenderHP < 1)) {

     // when button is clicked (if both players healthpoints are not 0, 
     // the game subtracks the defendersCAP from the attackers HP.)
     attackerHP = (attackerHP - defenderCAP);
     
     // writing the attacker/Your Character's new healthpoints to the html. 
     $("." + YourCharacter).html(attackerHP);

     // writing the text "You attacked Luke Skywalker for 8 damage".
     $(".youAttacked").html("You attacked " + defenderFN + " for " + attackerAP + " damage.");

     // when button is clicked (if both players healthpoints are not 0, 
     // the game subtracks the attackers AP points from the defenders HP.)
     defenderHP = (defenderHP - attackerAP);

     // writing the text "Luke Skywalker attacked you back for 10 damage."
     $(".attackedBack").html(defenderFN + " attacked you back for " + defenderCAP + " damage.");
    
    // write the defender's new healthpoints to the html.
    $("." + YourDefender).html(defenderHP);
     
 } 
     // if your character defeats the defender.
     if (defenderHP <= 0) {

         // clear text from the bottom and add defeated text.
         $(".youAttacked").empty();
         $(".attackedBack").empty();
         $(".youDefeated").html("You have defeated " + defenderFN + ", you can choose to fight another enemy.");

         // remove defender from the page.
         $("#defender").empty();

         // Your Character's attack power goes up by 10. 
         console.log(attackerAP);
         attackerAP = (attackerAP + 10);

         // redefining "YourCharacter"'s attack power to equal the new value. 
         attack.attackPower = attackerAP;
         console.log(attackerAP);

     }
     
     // if all enemies have been defeated and the attacker still has health, then the player wins
     if ($(".move").children().length == 0){
      
      // clear out the other paragraphs and let user know they won.
      $(".youAttacked").empty();
      $(".attackedBack").empty();
      $(".youDefeated").empty();
      $(".noEnemy").empty();
      $(".youWon").html("You Won!!!! GAME OVER!!!"); 

      // show the restart button. 
      $(".restart").show();

      // When you click "Restart" the game begins again. 
      $(".restart").click(function(){
          location.reload(true);
      })
                       
     }

     // if your characters hp = 0 then you lose.
     if (attackerHP <= 0) {

         // show the restart button.
         $(".restart").show();

         // hide the attack button.
         $(".attackButton").hide();

         // You lose.
         $(".youAttacked").empty();
          $(".attackedBack").empty();
         $(".youDefeated").empty();
         $(".youLose").html("You've been defeated...GAME OVER!!!")

          // When you click "Restart" the game begins again. 
          $(".restart").click(function(){
              location.reload(true);
          });

     }      
     
});


// The game remembers every time you attack and slowly increases your attack power. 
});