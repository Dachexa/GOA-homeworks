#              0     1    2     3    
# 4products = ['text', 30, True, 11.5, 
# [10, 23, 'Hello', False]]

# ========================


# Basic way to add value to list

# products += ['new value']

# print(products)


# ========================

# Change value in list


# products[0] = 'String'
# print(products)

# ========================

# Display individual value from list

# print(products[4][3])

# ========================


# List Functions

# len() - returns the number of elements
# in the list


# nums = [20, 13, 23, 56, 67, 99]


# print(len())

# ========================

# append() - adds an item to the end
#  of the list

# dataa = [10, False, '2000']

# dataa.append(True)

# print(dataa)

# ========================

# insert() - adds an item to the

# words = ['python, fun']

# words.insert(1, 'is')

# print(words)

# ========================


# index() - returns the index of the 
# elements

# letters = ['a', 'b', 'c', 'd']

# lets = letters.index('c')

# print(lets)


# ========================

# max() - output the maximum value
# min() - output the minimum value

# nums = [12, 24, 78, 125, 156]
 
# print(max(nums))


# strr = ['name', 'last_name', 'age']

# print(max(strr))


# ========================


# count() - returns a count of how many items
# an item in the list.

# nums = [10, 20, 23, 10, 23]

# print(nums.count(10))




# ========================


# remove() - remove an item from a list.

# nums = [10, 20, 23, 10, 23]
# nums.remove(10)
# print(nums)


# ========================

# reverse() - reverse the list

# nums = [10, 20, 23, 10, 23]
# nums.reverse()
# print(nums)




# ========================



list = [8, 4, 2, 6]
list.remove(2)
# მოშორდება '2'
# დარჩება 8, 4, 6
print(len(list)+list.count(6))
# შემდეგ დარჩება 3 და როდესაც დაემატება 6 
# გახდება 4 ციფრი ისევ





# ========================





nums = [2, 4, 8, 9, 5]

nums.insert(1, 3)

# ჩაამატა 3 ორსა და ოთხს შორის

# გამოვიდა 2, 3, 4, 8, 9, 5

nums.remove(9)

# მოშორა 9

# გამოვიდა 2, 3, 4, 8, 5

nums.insert(0, nums.count(8))

# 0 ზე ჩაამატა 8
#          0  1  2  3  4  5 
# გამოვიდა 8, 2, 3, 4, 8, 5

# და აქედან მესამე იყო 4

print(nums[3])






# ========================




# Exiting queue
queoe = ["John" , 'Amy', 'Bob', 'Adam']

# Take input from the user

# Add the input item to the end
# of the queoe



# Output the resulting list



