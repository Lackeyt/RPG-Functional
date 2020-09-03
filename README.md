#  _RPG-game_

#### _Simple RPG with character stats, combat, level progression_
##### __Created:__ 6/24/2020
##### __Last Updated:__ 6/24/2020
##### By _**Tyson Lackey & Michael Watts & Johnny Duverseau**_


## Description

_{detailed desc}_

## Behaviors

| Spec| Example input | Example Output
| ----------- | ----------- | ----------- |
-- Character Creation
| When user creates a character, a new object is made with the character's level = 1, strength = 2, health = 5, current health = 5 | n/a | n/a |
| If a user selects the "Doing Damage" class, their strength = 5 and health/current health = 5, advance to "character summary" page | click => Doing Damage | Health: 5, current health:5, Strength: 5 |
| If a user selects the "Staying Alive" class, their strength = 2 and health/current health = 11, advance to "character summary" page | click => health | Health: 11, current health: 11 Strength: 2 |


-- Char Summary
| When "start battle" is selected, create an enemy object with health = player health, current health = player health, Strength = player strength, advance to "battle" page | n/a | n/a |
| When "start battle" is selected, create a battle object with combatants = [player, enemy], advance to "battle" page | n/a | n/a |


-- Battle
| When player clicks "attack", calculate damage = player strength + random int (1-4). display damage | player strength = 5, random int = 2 | 7 damage |
| Enemy current health is reduced by the damage roll of the player | Player damage = 7 | (enemy current health -= 7) |
| if enemy current health is <= 0, battle ends and "victory" screen is displayed | n/a | n/a |
| else, after player attack, calculate enemy damage = enemy strength + random int (1-2). display damage | Enemy strength = 5, random int = 1 | 6 damage |
| Player current health is reduced by the damage roll of the enemy | Enemy damage = 6 | (player current health -= 6) |
| if player current health is <= 0, battle ends and "game over" screen is displayed | n/a | n/a |
| when "Run" button is clicked, battle ends and player is retured to "character summary" page, player current health is set equal to player health | player current health = 2, player health = 20, click -> run | player current health = 20, player health = 20|

-- Victory Screen
| When player wins a battle, player level is increased by 1 | n/a | n/a |
| When player selects "increase health", player health and current health is increased by 1 | n/a | n/a |
| When player selects "increase strength", player strength is increased by 1 | n/a | n/a |

-- Game Over Screen
| When player clicks "start over", page reloads and a new game is prompted | n/a | n/a |

## Setup/Installation Requirements

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open by downloading:
1. Internet Browser
2. Code editor like VScode to view the codebase

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open by downloading:

1. Download this repository onto your computer
2. Double click index.html to open it in your web browser

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open via Bash/GitBash:

1. Clone this repository onto your computer:
    "git clone https://github.com/Lackeyt/RPG-game"
2. Navigate into the "RPG-game" directory in Visual Studio Code or preferred text editor:
3. Open the project
    "code ."
4. Open your computer's terminal and navigate to the directory bearing the name of the program and containing the top level subdirectories and files.
5. Enter the command "$ npm install" in the terminal and press "Enter".
6. Enter the command "$ npm run build" in the terminal and press "Enter".
7. Enter the command "$ npm run start" in the terminal and press "Enter".
8. Open index.html in your browser:
    "open index.html"

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Directly in your Browser:

* Navigate to {GH Pages URL} in your web browser.

## Known Bugs

* n/a

## Support and contact details

* Discord: TysonL#4409
* Email: lackeyt90@gmail.com


## Technologies Used

* Visual Studio Code
* HTML
* CSS
* Bootstrap
* Javascript
* JQuery

## Resources:

*

### License

Copyright (c) 2020 **_Tyson Lackey_**

This software is licensed under the MIT license.
