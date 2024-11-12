def solution(string):
    reversed_string = " "
    for i in string:
        reversed_string = i + reversed_string
        return reversed_string
    print(reversed_string)