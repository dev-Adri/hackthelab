import tkinter as tk
import os
import socket

width = 1280
height = 720

window = tk.Tk()
canvas = tk.Canvas(window, width=width, height=height)

canvas.pack()

chat_line = int((width / 2))
canvas.create_line(0, chat_line, height, chat_line, fill="#000000")

window.mainloop()