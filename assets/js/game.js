var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values like this: 
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) { //repeat and execute until enemy-robot is dead
            //window.alert("Welcome to Robot Gladiators"); //alert players that they are starting the round 

            var promptFight = window.prompt("Do you want to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose."); //ask player if they'd like to fight or run
            console.log(promptFight);

            if (promptFight === "skip" || promptFight ==="SKIP") { //confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to skip?");

            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 10; //subtract money from player for skipping
                console.log("playerMoney",playerMoney) //why is this expression not ended with ";"?
                break;
            }
        }

        enemyHealth = enemyHealth - playerAttack; //remove enemy's health by subtracting playerAttack value
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        if (enemyHealth <= 0) { //Check enemy health
            window.alert(enemyName + "has died!");

            playerMoney = playerMoney + 20; //award player for winning
            console.log("playerMoney", playerMoney);
            break; //leave while() loop since enemy is dead
        } else {
            window.alert(enemyName+ " still has " + enemyHealth + " health left.");
        }

        playerHealth = playerHealth - enemyAttack; //decrement player health from enemy attack
        console.log(enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );

        if (playerHealth <= 0) {  //check player's health
            window.alert(playerName + " has died!"); 
            break; //leave while loop if player dead
        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
    }
};

          


for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}