# // Write a program to print count a substring in a Main string.
# // var mainString="My name is kumar, and my friend’s name is Dhamu" var subString="is"
# // Output:
# // The substring is there 2 times in main string.

mainString="My name is kumar and my friend’s name is Dhamu"
subString="is"
i=0
s=""
l=[]
while i<len(mainString):
    if mainString[i]==" ":
        l.append(s)
        s=""
    else:
        s+=mainString[i]
    i=i+1
print(l)