name = input("What is your name? ")
year = int(input("Hi " + name + ". What year is it now? "))
birth_year = int(input("What year were you born? "))
y2k = 1999

print()
print("Here are some age facts, " + name + ":")
age = year - birth_year

print("You are ~" + str(age) + " years old.")
print("You were ~" + str(y2k - birth_year) + " years old when Y2K happened.")
print("You are approximately " + str(age * 365 * 24 * 60 * 60) + " seconds old!")
