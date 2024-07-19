# დავალება: მომხმარებელს შემოატანინეთ სახელი 
# თუ მისი სახელი უდრის თქვენ სახელს 
# მაშინ გამოგვიტანოს True ხოლო სხვა შემთხვევაში False
name1 = input('enter your name: ')
name2 = input('enter friends name: ')
if name1 == name2:
    print(True)
else:
    print(False)


# დავალება2: მომხმარებელს შემატანინეთ რიცხვი 
# თუ რიცხვი იყო 0 მეტი და 10 ნაკლები 
# მაშინ დაგვიპრინტოს True 
# ხოლო სხვა შემთხვევაში False

num1 = input('enter first number: ')
num2 = str(0)
if num1 > num2:
    print(True)
elif num1 < 10:
    print(False)
