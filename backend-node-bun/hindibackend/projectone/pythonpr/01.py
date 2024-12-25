import random
import sys

print("bantywithpython developer  web3 developer...........")
print("")
playerchoice = input(
    "Enter ...... \n1  for Rock , \n2 for Paper or  \n3 for Scissors :\n\n"
)
player = int(playerchoice)
if player < 1 | player > 3:
    sys.exit("you must enter 1, 2 or 3 yrr ")

computerchoise = random.choice("123")
computer = int(computerchoise)
print("Your chose in " + playerchoice + " .")
print("computer chose  in " + computerchoise + " .")
if player == 1 and computer == 3:
    print("You Win  !  ")
elif player == 2 and computer == 1:
    print("You Win  !  ")
elif player == 3 and computer == 2:
    print("You win !!!!! ")
elif player == computer:
    print("draw")
else:
    print("computer is Win!")
