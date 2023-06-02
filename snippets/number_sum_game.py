import random


def turn():
  number_count = random.randint(2, 5)
  expected_sum = 0

  for i in range(number_count - 1):
    number = random.randint(1, 20)
    expected_sum = expected_sum + number
    print(number, end=' + ')

  number = random.randint(1, 20)
  expected_sum = expected_sum + number
  print(number, end=' = ')

  guess = input()

  if guess == expected_sum:
    print("Correct! 1 point")
    return True
  else:
    print("BZZZT, wrong answer! The correct answer was: " + str(expected_sum))
    return False


def game():
  print("Welcome to the number sum game!")

  errors = 0
  points = 0

  while errors < 3:
    turn_result = turn()
    if turn_result:
      points = points + 1
    else:
      errors = errors + 1

  print("You earned " + str(points) + " total points!")


turn()

