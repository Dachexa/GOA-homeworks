from turtle import *

#step 1: draw a square

width(5)

color("purple")
begin_fill()

speed(5)

forward(200)

left(90)


forward(200)

left(90)



forward(200)

left(90)


forward(200)

left(90)
end_fill()

# end of square

# drawing a door



forward(70)

color("yellow")
begin_fill()


left(90)
forward(120)     #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()
# end of door

penup()
goto(200, 200)
pendown()
color("red")

begin_fill()

right(150)

forward(200)

left(120)
forward(200)

end_fill()

color("purple")
goto(0, 135)

right(240)


forward(35)
begin_fill()
color("brown")

left(90)

forward(45)

right(90)

forward(45)

right(90)

forward(45)

right(90)

forward(45)

end_fill()






exitonclick()
