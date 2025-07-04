### This code is about SnakeandLadder game
### Initial development started on July 31st, 24

import random as r
import time, sys


playerName=[];
playerPosition=[];
snakeBite={10:2, 25:6, 40:4, 55:5, 60:22, 77:12, 89:50, 99:1};
ladderHelp = {9:19, 13:30, 30:61, 47: 90};

#Get the Player Name
def getPlayerDetails():
    try:
        print("Welcome to Snake and Ladder game !! \n");
        totalPlayers = int(input("Enter No of Players for this game: "));
        if totalPlayers < 0:
            return 0;
        else:
                       
            for i in range (0,totalPlayers):
                print("Enter player", i+1, "Name");
                name = input();
                playerName.append(name)
                name="";
            return playerName;
             
        
    except Exception as e:
        print(e)

#Get the Dice Number
def diceRoll():
    randomNumber = r.randint(1,6)
    return randomNumber;

#Actual Game
def startGame():
    try:
    
        playerName = getPlayerDetails();
        print(playerName);
        if len(playerName) == 0:
            print("Invalid Entry.. .Program will Exit now");
            sys.exit();
        else:
                
            diceNumber = diceRoll();
            totalPlayers = len(playerName);
            for i in range(0,totalPlayers):
                playerPosition.append([playerName[i],0])

            #print(playerPosition);

            print("Let the game begin");
            print("\n\n")
            
            while True:

                #Loop chances for the players
                for i in range(0,totalPlayers):
                    diceNum=0
                    diceNumber = diceRoll();
                    print("Time to Play : ",playerName[i]);
                    print("Dice No Rolled by ", playerName[i], "is: " , diceNumber);
                    
                    print(playerName[i], "was in ", playerPosition[i][1]);
                    diceNum += diceNumber + playerPosition[i][1]
                    playerPosition[i][1] = diceNum;
                    print(playerName[i], "has been moved to ", playerPosition[i][1]);
                    

                    ## Check for Snake Bite
                    if playerPosition[i][1] in snakeBite.keys():
                        print("Before bite Value is ", playerPosition[i][1]);
                        print(" Oops Its a bite", playerPosition[i][1]);
                        playerPosition[i][1] = snakeBite[diceNum];
                        print("After bite Value is ", playerPosition[i][1]);

                    ## Check for Ladder   
                    if playerPosition[i][1] in ladderHelp.keys():
                        print("Yayy Its a ladder", playerPosition[i][1]);
                        print("Before ladder Value is ", playerPosition[i][1]);
                        playerPosition[i][1] = ladderHelp[diceNum];
                        print("After ladder Value is ", playerPosition[i][1]);

                    ## game Completed?    
                    if playerPosition[i][1] ==100:
                         print(playerName[i], "has won the game");
                         sys.exit();

                    ## If not, move back
                    elif playerPosition[i][1] > 100:
                         playerPosition[i][1] = 100-(playerPosition[i][1]-100);
                         print(playerName[i], " has been moved to ", playerPosition[i][1]);

                    time.sleep(3);
                    print("\n\n")
        
    except Exception as e:
        print(e);
    
startGame()