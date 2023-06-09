import random

print("Welcome to the game!")
print("If you roll a 1, your money is divided by 2")
print("If you roll a 2, 3, or 4, you gain the amount you rolled")
print("If you roll a 5, you gain 10")
print("If you roll a 6, your money is doubled")

roll_cost = 3.0
total_money = 10.0
roll_num = 1

def roll(total_money):
    roll = random.randint(1, 6)

    if(roll == 1):
      total_money = total_money / 2

    if(roll == 2 or roll == 3 or roll == 4):
      total_money = total_money + roll

    if(roll == 5):
      total_money = total_money + 10

    if(roll == 6):
      total_money = total_money * 2

    print("You rolled a " + str(roll) + ", and now have $" + str(total_money))
    return total_money

while True:
    if total_money < roll_cost:
        print("You have $" + str(total_money) + ". This isn't enough to roll, game over!")
        break
        
    print("You have $" + str(total_money) + ". Would you like to roll? (y/n)")
    answer = input()
    if answer != 'y':
        break
    
    total_money = total_money - 3
    print("You paid $" + str(roll_cost) + " to roll, $" + str(total_money) + " left.")
    total_money = roll(total_money)

print("You ended the game with $" + str(total_money))
