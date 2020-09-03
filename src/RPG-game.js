//Business Logic



//class Character{
//  constructor(level, strength, health, type){
//  this.level = level;
//  this.strength = strength;
//  this.health = health;
//  this.currentHealth = health;
//  this.type = type;
//  }
//
//  chooseStrengthClass()
//}



//Create New Character Constructor
// export function Character(level, strength, health, type) {
//   this.level = level;
//   this.strength = strength;
//   this.health = health;
//   this.currentHealth = health;
//   this.type = type;
// }

// Character.prototype.chooseStrengthClass = function(){
//   this.strength += 3;
// };

// Character.prototype.chooseHealthClass = function(){
//   this.health += 6;
//   this.currentHealth = this.health;
// };

// Character.prototype.healthReset = function(){
//   this.currentHealth = this.health;
// };

// Character.prototype.characterLevelUp = function(levelUpType){
//   this.level += 1;
//   if (levelUpType === "health") {
//     this.health += 1;
//   } else if (levelUpType === "damage") {
//     this.strength += 1;
//   }
// };



// export function Battle(player, enemy){
//   this.combatants = [player, enemy];
// }

// Battle.prototype.attack = function(attacker){
//   let damage;
//   if (attacker.type === "player"){
//     damage = attacker.strength + Math.floor(Math.random() * (4-1+1)) + 1;
//     this.combatants[1].currentHealth -= damage;
//   } else if (attacker.type === "enemy") {
//     damage = attacker.strength + Math.floor(Math.random() * (2-1+1)) + 1;
//     this.combatants[0].currentHealth -= damage;
//   }
//   return damage;
// };






export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

export const changeHealthState = (propToChange, propBase) => {
  return (state) => ({
    ...state,
    [propToChange]: state[propBase]
  });
};

export const changeTypeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: value
    });
  };
};

export const changeAttackState = (propToChange, propBase) => {
  return (value) => {
    return (state) => ({
      ...state,
      [propToChange]: state[propBase] + value
    })
  }
}

export const isCharacterAlive = function(attackedCharacter){
  if (attackedCharacter.currentHealth <= 0) {
    return false;
  }
  return true;
};

export const battleCycle = (attackerState) => {
  return (defenderState) => {
    if(attackerState.type == "player"){
      return {
        ...defenderState(),
        currentHealth: defenderState.currentHealth - (attackerState.strength + Math.floor(Math.random() * (4-1+1)) + 1)
      }
    } else if (attackerState.type == "enemy"){
      return {
        ...defenderState(),
        currentHealth: defenderState.currentHealth - (attackerState.strength + Math.floor(Math.random() * (2-1+1)) + 1)
      }
    }
  }
}

export const stateControl = storeState();

//start game:
export const player = {level: 1, strength: 2, health: 5, type: "player"};
export const playerState = storeState(player);
export const enemy = {...player};
export const enemyState = storeState(enemy);

//buttons for "choose strength" vs "choose health"
export const chooseStrength = changeState("strength")(3);

export const chooseHealth = changeState("health")(6);
export const resetCurrentHealth = changeHealthState("currentHealth", "health");

//start battle:
export const enemyType = changeTypeState("type")("enemy")(enemy);

//battle
//export const playerAttack = stateControl(player.strength + Math.floor(Math.random() * (4-1+1)) + 1);
//export const enemyAttack =  stateControl(enemy.strength + Math.floor(Math.random() * (2-1+1)) + 1);

export const setPlayerAttack = changeAttackState("currentAttack", "strength")(Math.floor(Math.random() * (4-1+1)) + 1)
export const setEnemyAttack = changeAttackState("currentAttack", "strength")(Math.floor(Math.random() * (2-1+1)) + 1)
// //level up happens:
// changeState("level")(1)(playerState)
// //click strength button
// changeState("strength")(1)(playerState)

