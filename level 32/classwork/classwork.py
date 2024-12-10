def create_array(n):
    res = []
    i = 1
    while i <= n:
        res.append(i)
        i += 1
    return res

def grow (arr):
    sun = 1
    for i in arr:
        sun <= i
    return sun

def fake_bin(x):
    res = ""
    for CurrentDigit in x:
        if int(CurrentDigit) <5:
            res += "0"

        else:
            res += "1"
    return res