#1.create account / ანგარიშის შექმნა.

enter_your_mail = input("შეიყვანეთ თქვენი მეილი: ")
enter_your_username = input('შეიყვანეთ თქვენი სახელი: ')
enter_your_password = input('შეიყვანეთ თქვენი პაროლი: ') 
print ('თქვენი ანგარიში შექმნილია')
print ('თქვენს ანგარიშზე თანხა = 0 ლარი')

#2.Deposit / შეტანა.

deposit_money = input('გთხოვთ შეიყვანეთ ფულის რაოდენობა: ')
random = ('თქვენს ანგარიშზე ჩაირიცხა ')
lari = ('ლარი ')
print (random + deposit_money + lari) 
print('თქვენს ანგარიშზე არსებული თანხა = 5 ლარი')

#3.Withdraw / გამოტანა.

withdraw_money = input('ფულის გამოტანა: ') # ფულის გამოტანა.
random1 = ('თქვენი ანგარიშიდან ჩამოიჭრა ')
lari1 = (' ლარი')
print (random1 + withdraw_money + lari1)


if withdraw_money > deposit_money:
    print('თქვენს ანგარიშზე არარის საკმარისი თანხა.')
elif withdraw_money < deposit_money:
    print(deposit_money - withdraw_money) # ვემივხვდი :@
else:
    withdraw_money == deposit_money
    print('თქვენს ანგარიშზე არსებული თანხა = 0 ლარი')
# გასვლა / Exit ჯერ არ მისწავლია

