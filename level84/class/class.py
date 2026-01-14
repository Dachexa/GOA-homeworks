#create class name Lomi
#give two properties << simba >>  and  << mufasa >>
#give values "mefe lomi 2"               "mefe lomi 1"



#     class Lomi:
#         simba = "mefe lomi 1"
#         mufasa = "mefe lomi 2"
#     print(Lomi.simba)
#     print(Lomi.mufasa)


#=================================================================================


#create sname quest but make it with __init__

#     class Dachi:
#         def __init__(self, name, surname):
#             self.name = name
#             self.surname = surname
#     new_dachi = Dachi("daviti" , "sateni")

#     print(new_dachi.name)
#     print(new_dachi.surname)


#=================================================================================


#print rom davwert lamad gamogigdos chveni propertiebi <3 


class Lomi:
    def __init__(self, alika, mefe):
        self.alika = alika
        self.mefe = mefe
    def __str__(self):
        return f"Lomi alika:  {self.alika} , lomi mefe : {self.mefe}"