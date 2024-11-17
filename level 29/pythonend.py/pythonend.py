








# Return
#    We need to calculate the area of a given rectangle.
#      Your program needs to take whe width and length as 
#      input and output area of the rectangle



#   def area(x, y):
#       return x * y


#  x = area(7, 4)
#   print(x)


#    def sum(x):
#      res = 0
#       for i in range(x):
#           res+=i
#       return res

#    print(sum(4))

#  output = 6


"""
  dostring function
  
"""


"""
    You are working on a search engine. Watch your back Google!

The given code takes a text and a word as input and passes them to a 
function called <b>search()</b>.

The search() function should return "Word found" if the word is 
present in the text, or "Word not found", if it’s not.

Sample Input

"This is awesome"

"awesome"

Sample Output

Word found
"""


#    text = input("Enter Some text: ")
#    word = input("Emter word: ")



#   def search(text, word):
#       if word in text:
#           return "Word found"
#       else:
#            return "Word not found"


#    print(search(text, word))



'''
    შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და გამოითვლის, 
    რამდენი სიტყვაა ამ ტექსტში.
'''

#       def words(text):
#           words = text.split(' ')
#           return len(words)

#       text = "random words"
#       print(words(text))



'''
    შექმენი პროგრამა, რომელიც იფუნქციონირებს შემდეგნაირად: 
    მომხმარებლის შეყვანილი რიცხვი იქნება დადებითი, უარყოფითი, 
    ან ნულოვანი, და შესაბამისი შეტყობინება უნდა გამოიტანოს.
'''

num = int(input('Enter a number: '))

if num > 0:
    print('Positive')

elif num < 0:
    print('Negative')
else:
    print('Zero')



"""
    შექმენი პროგრამა, რომელიც მიიღებს მომხმარებლის ასაკს და დააბრუნებს 
    შეტყობინებას იმის მიხედვით, თუ რომელ ასაკობრივ კატეგორიაშია მომხმარებელი.
"""

age = int(input('შეიყვანეთ თქვენი ასაკი: '))

if age < 18:
    print('თქვენ უმცირესი ბრძანდებით.')
elif age >= 18 and age <= 64:
    print('თქვენ ზრდასრული ბრძანდებით.')
else:
    print('თქვენ უხუცესი ბრძანდებით.')