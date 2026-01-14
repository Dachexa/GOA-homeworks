# create person class

# with greeting method


class Myself:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greeting(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."


Me = Myself("Dachi", 15)

print(Me.greeting())


# create inheritance Class


class Zebra(Myself):
    def __init__(
        self,
        fname,
        lname,
    ):
        Myself.__init__(self, fname, lname)


new_self = Myself("Dachi", 15)
print(new_self.greeting())
