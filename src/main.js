import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { playerState, stateControl, chooseStrength, chooseHealth, resetCurrentHealth, enemyState, battleCycle, playerAttack, enemyAttack, isCharacterAlive, setPlayerAttack, setEnemyAttack, changeState, enemyType } from './../src/RPG-game.js';

//User Interface

$(document).ready(function() {
  $("#newGame").click(function(event){
    event.preventDefault();
    const player = stateControl(playerState);
    $("#startMenu").hide();
    $("#charCreation").show();
    $("#charCreationDisplay").append(`Level: ${player.level}<br>Strength: ${player.strength}<br>Health: ${player.health}`);
  });

  $("#plusDamage").click(function(event){
    event.preventDefault();
    const player = stateControl(chooseStrength);
    $("#charCreation").hide();
    $("#charSummary").show();
    $("#charSummaryStats").html(`Level: ${player.level}<br>Strength: ${player.strength}<br>Health: ${player.health}`);
  });

  $("#plusHealth").click(function(event){
    event.preventDefault();
    const player = stateControl(chooseHealth);
    $("#charCreation").hide();
    $("#charSummary").show();
    $("#charSummaryStats").html(`Level: ${player.level}<br>Strength: ${player.strength}<br>Health: ${player.health}`);
  });

  $("#startBattle").click(function(event){
    event.preventDefault();
    const player = stateControl(resetCurrentHealth);
    const enemy = stateControl(enemyType);
    $("#charSummary").hide();
    $("#battle").show();
    $("#enemyDamageDone").empty();
    $("#playerDamageDone").empty();
    $("#playerBattleStats").html(`Level: ${player.level}<br>Health: ${player.currentHealth}/${player.health}<br>Strength: ${player.strength}`);
    $("#enemyBattleStats").html(`Level: ${enemy.level}<br>Health: ${enemy.currentHealth}/${enemy.health}<br>Strength: ${enemy.strength}`);
  });

  function attackCycle() {
    const enemy = stateControl(playerAttack);
    if (isCharacterAlive(enemy) === false) {
      $("#battle").hide();
      $("#victoryScreen").show();
    } else {
      const player = stateControl(enemyAttack);
      if (isCharacterAlive(player) === false) {
        $("#battle").hide();
        $("#gameOver").show();
      }
    }
  }

  $("#battleAttack").click(function(event){
    event.preventDefault();
    const player = stateControl(setPlayerAttack);
    const enemy = stateControl(changeState("currentHealth")(-player.currentAttack));
    //battleCycle(playerState)(enemyState);
    $("#playerBattleStats").html(`Level: ${player.level}<br>Health: ${player.currentHealth}/${player.health}<br>Strength: ${player.strength}`);
    $("#enemyBattleStats").html(`Level: ${enemy.level}<br>Health: ${enemy.currentHealth}/${enemy.health}<br>Strength: ${enemy.strength}`);
  });

  $("#battleRun").click(function(event){
    event.preventDefault();
    const player = stateControl(resetCurrentHealth);
    $("#charSummary").show();
    $("#battle").hide();
  });

  // $("#damageLevelUp").click(function(event){
  //   event.preventDefault();
  //   player.characterLevelUp("damage");
  //   player.healthReset();
  //   $("#charSummaryStats").html(`Level: ${player.level}<br>Strength: ${player.strength}<br>Health: ${player.health}`);
  //   $("#victoryScreen").hide();
  //   $("#charSummary").show();
  // });

  // $("#healthLevelUp").click(function(event){
  //   event.preventDefault();
  //   player.characterLevelUp("health");
  //   player.healthReset();
  //   $("#charSummaryStats").html(`Level: ${player.level}<br>Strength: ${player.strength}<br>Health: ${player.health}`);
  //   $("#victoryScreen").hide();
  //   $("#charSummary").show();
  // });
  
  // $("#startOver").click(function(){
  //   location.reload();
  // });
});

