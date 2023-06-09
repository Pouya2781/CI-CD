import random
import time

line_count = int(input("Input number of lines: "))
line_length = 100
max_char_repeat = 1
time_interval = 500
t = int(time.time() * 1000)

while True:
    if line_count == 0: break
    if int(time.time() * 1000) - t >= time_interval:
            line_count -= 1
        t = int(time.time() * 1000)
        num_text = ""
        while len(num_text) < line_length:
            num_text += str(random.randint(0, 1)) * random.randint(0, min(max_char_repeat, line_length - len(num_text)))
        print(num_text)
