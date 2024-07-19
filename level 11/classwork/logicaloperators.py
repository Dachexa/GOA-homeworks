# Logical Operator: 
# 1) 'and' operator
# 2) 'or' operator

# 1) პირობა
# 2) ოპერატორი
# 3) პირობა


#    (1)  (2)  (3)

# and operator    
print(True and True) # True
print(True and False) # False
print(False and True) # False
print(False and False) # False

# True and True
# True ამ შემთხვევაში არის გადაცემული მნიშვნელობები

# ხოლო and - არის ოეპრატორი რომელმაც უნდა გამოიტანოს საბოლოო მნიშვნელობა. ეს შეიძლება იყოს True or False

# or operator
print(True or True) # True
print(True or False) # True
print(False or True) # True
print(False or False) # False

#```დავალება: მომხმარებელს შემოატანინეთ ასაკი,
# თუ მომხმარებლის ასაკი უდრის თქვენს ასაკს
#  დაპრინტეთ True, ხოლო სხვა შემთხვევაში False.
ჩემი_ასაკი = input('enter your age: ')
მეგობრის_ასაკი = input('enter your friends age: ')

if ჩემი_ასაკი > მეგობრის_ასაკი:
    print(False)
elif ჩემი_ასაკი == მეგობრის_ასაკი:
    print(True)
else:
    ჩემი_ასაკი < მეგობრის_ასაკი
    print(False)


steps = int(input('enter steps: '))
active_minutes = input('enter minutes: ')

if steps == 10035:
   active_minutes == 15
   print(True)

steps = int(input('enter steps: '))
active_minutes = input('enter minutes: ')




steps = int(input('enter steps: '))
active_minutes = input('enter minutes: ')
if steps == 9850:
     active_minutes == 45
     print(True)

 
