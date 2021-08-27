var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//You can also log multiple values like this: 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
console.log (enemyName, enemyAttack,enemyHealth);

var fight = function() {
    window.alert("Welcome to Robot Gladiators"); //alert players that they are starting the round 
    enemyHealth = enemyHealth - playerAttack;//subtract the value of 'playerAttack' from the value of 'enemyHealth'
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."//log a resulting message to the console so we know that variable worked
    );
    if (enemyHealth <=0) { //check enemy's health
        window.alert(enemyName + " has died!");
    }
    else { 
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack//subtract the value of 'enemyAttack' from the value of 'playerHealth'
    console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."//Log a resulting message to the console so we know that it worked.
    );
    if (playerHealth <=0) { //check player health
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();