# String functions

# ==================

# format() - დავაფორმატოთ ცვლადები, უფრო დეტალურად: 
# მნიშვნელობები ჩავაშენოთ სხვა მნიშვნელობებში ან ცვლადებში.

# basic way

# name = " Dachi"
# last_name = " Zirakashvili"

#  info = "Hello my name is" + name + " " + "my last name is" + last_name

#  print(info)


# =================

# format()


#  name = "Dachi"

#  last_name = "Zirakashvili"

#    info = "Hello my name is {0} My last name is {1}".format(name, last_name)
#                                                              0,      1
#   print(info)
# 0 = dachi
# 1 = zirakashvili



# =================

# third way - simple & comfortable

#  name = "Dachi"

#  last_name = "Zirakashvili"

#  info = f"Hello my name is {name} My last name is {last_name}"

#  print(info)




#  =================

# join () - სიის შემთხვევაში სიაში არსებული მნიშვნელობები
#  გარდაიქმნება სტრინგად და სტრინგებს ერთმანეთისგან გამოვყოფთ
#  რაიმე ნებისმიერი  ასობგერით    ან   თუმდაც    რიცხვით

#   x = ["dato ", 'gio ', "dachi"]
#          1       2        3



 # 'dato -! gio -! dachi -!"

#   valeus = 'cool ' .join(x)
#    print(valeus)




#  values = ['dato', 'gio', 'dachi]
        
#   new_list = ' -!'.join(values)

#   print(new_list)





#  =================

#   output = თითოეულ ასოს შორის ჩაჯდება :) ეს სიმბოლო.

#    strr = ' :) '.join('Hello world!')

#    print(strr)





# =================================================================



# split = 

x = 'H#e#l#l#o####'

# x = 'hello' 

# by hand 


#  new_x = x.split('#')

#  print(new_x)


#  strr = 's--o--m---e -te-x----t'


# new_strr = strr.split('-')

# convert_list_to_str = ' '.join(new_strr)

# print(convert_list_to_str)



#  strr = 'dadadadaaaaaaa  amaaaaaaa babababaaaa'

#   new_str = strr.split('a')

#  print(new_str)

#  convert_list_to_str = ''.join(new_str)

#  print(convert_list_to_str)




# =================================================================



#  x = 'hello group 34'

#  new_x = x.replace('34', '32')

#  print(new_x)









# =================================================================


# Level 27:

# 1. task

# Your friend sent you a message, however his keyboard is broken and types a
# # instead of a space.

#  Replace all of the # characters in the given input with spaces and
#  output the result.



message = "Hey,###how#are##you##doing###?"

msg = message.replace('#', ' ')

print(msg)






# =================================================================


# Fill in the blanks to output the second world of the given string 'x'.

x = 'x world'

words = x.replace ('x', 'second')

res = words[]

print(res)



# =================================================================


#  Fill in the blanks to replace all '!' characters in str with a dot "."


str = 'Hello, world! How are you doing?'

str = str.replace('!', '.')

print(str)


# =================================================================


#  Fill in the blanks to turn the string uppercase.

a = 'spam'
b = a.upper()

print(b)
