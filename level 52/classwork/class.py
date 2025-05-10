def open_or_senior(data):
    res = []
    
    for i in data:
        age = i[0]
        handicap = i[1]
        
        if age <= 55 and handicap > 7:
            res.append("Senior")
        else:
            res.append('Open')
        return res
    





