
x = int(input())
d = int(input())
c = 0

while x > 0:
    ld = x % 10
    if ld == d:
        c+=1
    x = x // 10

print(c)