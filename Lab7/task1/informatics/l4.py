
bin = int(input())
i = 0
dec = 0

while bin > 0:
    dec += bin % 10 * 2 ** i
    bin = bin // 10
    i += 1

print(dec)