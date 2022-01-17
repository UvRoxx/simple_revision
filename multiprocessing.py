# Multiprocessing
# This enables us to run multiple operations on different CPI cores and bypass the GIL which is a limitation for
# multithreading
#  Multiprocessing = better for CPU bound tasks (Heavy CPU usage)
#  Multithreading  = better for io bound tasks (waiting around)
from multiprocessing import Process, cpu_count
import time


def counter(num):
    count = 0
    while count < num:
        count += 1


def main():
    print("Current CPU count", cpu_count())
    # CPU count is important because there is a overhead involved in creating a processing and then killing a process
    # If the number of processes created are greater than the CPU count of the device then the result in performance
    # would actually hinder the performance. So when using multiprocessing we need to be mindful of the processes
    # we create
    a = Process(target=counter, args=(25000000,))
    b = Process(target=counter, args=(25000000,))
    c = Process(target=counter, args=(25000000,))
    d = Process(target=counter, args=(25000000,))
    a.start()
    b.start()
    c.start()
    d.start()
    a.join()
    b.join()
    c.join()
    d.join()

    print("Finished In", time.perf_counter())


if __name__ == "__main__":
    main()
