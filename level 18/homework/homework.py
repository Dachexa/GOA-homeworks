#ააგეთ პროგრამა, რომელიც მოსთხოვს მომხმარებელს, 
# რომ შეიყვანეს რიცხვი 1 - 100 მდე.

#პროგრამის დანიშნულება არის ის, 
# რომ გამოიცნოს მომხმარებლის მიერ შემოტანილი რიცხვი, 
# იმდენჯერ მიეცეს გამოცნობის შესაძლებლობა 
# სანამ საბოლოოდ არ გამოიცნობს.

enter_number = int(input('გთხოვთ შეიყვანოთ რიცხვი ერთიდან ასამდე: '))
if 1 <= enter_number <= 100:
    print('თქვენი შეყვანილი რიცხვია: ' + str(enter_number))
else:
    print('გთხოვთ შეიყვანოთ რიცხვი ერთიდან ასამდე')

#დაწერეთ პროგრამა სადაც შეამოწმეთ,
# სტუდენტმა ჩააბარა თუ არა ჩააბარა კურსი 
# მათი გამოცდის ქულების მიხედვით. 
# სთხოვეთ მომხმარებელს შეიყვანოს ქულები შუალედური გამოცდისთვის,
# დასკვნითი გამოცდისთვის და პროექტისთვის. 
# დარწმუნდით, რომ მომხმარებელმა შეიყვანოს სწორი ქულები 
# (პოზიტიური რიცხვები 0-დან 100-მდე) თითოეული კომპონენტისთვის.

#გამოიყენეთ შემდეგი შეფასების კრიტერიუმები:
# თუ საშუალო ქულა (20% შუალედური კურსისთვის, 40% საბოლოო და 40% პროექტისთვის)
# არის 70 ან მეტი, სტუდენტი გაივლის კურსს. 
# თუ საშუალო ქულა 70-ზე დაბალია,
# სტუდენტი ვერ ახერხებს კურსის ჩაბარებას.
# აჩვენეთ მომხმარებლისთვის შეტყობინება, რომელშიც მითითებულია
# მისი გავლის/ჩავარდნის სტატუსი და გამოთვლილი საშუალო ქულა.
x = input("გთხოვთ შეიყვანეთ თქვენი სახელი და გვარი: ")
h = input('გთხოვთ შეიყვანოთ თქვენი გამოცდის ქულები: შუალედური გამოცდისთვის, დასკვნითი გამოცდისთვის და პროექტისთვის: ')
num1 = 100
if num1 > 100:
    print('გთხოვთ სცადოთ თავიდან.')
    h = input('გთხოვთ შეიყვანოთ თქვენი გამოცდის ქულები: შუალედური გამოცდისთვის, დასკვნითი გამოცდისთვის და პროექტისთვის: ')
# ცოტა ვერმივხვდი ამას.

# დაწერეთ პროგრამა სადაც შეამოწმებთ, 
# აქვს თუ არა ადამიანს მართვის მოწმობის აღების უფლება 
# მისი ასაკისა და მართვის გამოცდილებიდან გამომდინარე.
# დარწმუნდით, რომ მომხმარებელი შეიყვანს თავისი ასაკს და წლების რაოდენობა,
# რომელსაც მანქანას მართავდა.მომხმარებელმა უნდა შეიყვანოს დადებითი მთელი რიცხვები 
# ასაკისა და მართვის გამოცდილებისთვის. (დაგნა მოხდეს ოპერაციები)

# გამოიყენეთ შემდეგი საკვალიფიკაციო კრიტერიუმები: პირი უნდა იყოს მინიმუმ 18 წლის მართვის მოწმობის მისაღებად. თუ პირი 18 წლამდეა, მას არ შეეძლება მართვის მოწმობის აღება.
# თუ პირი არის 18 წლის ან მეტი, მას უნდა ჰქონდეს მინიმუმ 1 წლიანი მართვის გამოცდილება, რომ დაშვებული იყოს მართვის მოწმობის აღებისთვის.
# მომხმარებლისთვის აჩვენეთ შეტყობინება, რომელშიც მითითებულია მართვის მოწმობის მიღების უფლება.


    