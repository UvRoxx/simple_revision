# Only one thread can be running at one time due to GIL or global interpreter lock
# Program and tasks can be divided into 2 types that is
# 1.CPU bound =  Program / task that spends most of its time waiting for internal events (CPU Intensive)
# use multiprocessing for use cases like this
# 2.io bound
#  Program or tasks that spends most of it time waiting for external events (user input, web scraping) using
# should use multithreading
import threading
import time


def eat_breakfast():
    time.sleep(3)
    print("Breakfast done")


def drink_coffee():
    time.sleep(4)
    print("Coffee done")


def study():
    time.sleep(5)
    print("Study done")


thread_one = threading.Thread(target=eat_breakfast, args=())
thread_one.start()

thread_two = threading.Thread(target=drink_coffee, args=())
thread_two.start()

thread_three = threading.Thread(target=study, args=())
thread_three.start()

print(threading.active_count())
print(threading.enumerate())
print(time.perf_counter())
