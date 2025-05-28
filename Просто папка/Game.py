
import random
import tkinter as tk
from tkinter import messagebox, simpledialog

class GuessTheNumberGame:
    def init(self, root):
        self.root = root
        self.root.title("Угадай число")
        self.root.geometry("400x300")
        
        # Настройки игры
        self.difficulty = "medium"  # easy, medium, hard
        self.secret_number = 0
        self.attempts = 0
        self.max_attempts = 10
        self.score = 0
        self.game_active = False
        
        # Создаем интерфейс
        self.create_widgets()
        
    def create_widgets(self):
        # Фрейм для кнопок сложности
        difficulty_frame = tk.Frame(self.root)
        difficulty_frame.pack(pady=10)
        
        tk.Label(difficulty_frame, text="Выберите сложность:").pack()
        
        tk.Button(difficulty_frame, text="Легкая (1-50)", 
                 command=lambda: self.set_difficulty("easy")).pack(side=tk.LEFT, padx=5)
        tk.Button(difficulty_frame, text="Средняя (1-100)", 
                 command=lambda: self.set_difficulty("medium")).pack(side=tk.LEFT, padx=5)
        tk.Button(difficulty_frame, text="Сложная (1-200)", 
                 command=lambda: self.set_difficulty("hard")).pack(side=tk.LEFT, padx=5)
        
        # Информация об игре
        self.info_label = tk.Label(self.root, text="Выберите сложность и начните игру", font=("Arial", 12))
        self.info_label.pack(pady=10)
        
        self.attempts_label = tk.Label(self.root, text=f"Попыток: 0/{self.max_attempts}")
        self.attempts_label.pack()
        
        self.score_label = tk.Label(self.root, text=f"Очки: {self.score}")
        self.score_label.pack()
        
        # Поле для ввода числа
        self.guess_entry = tk.Entry(self.root, state=tk.DISABLED)
        self.guess_entry.pack(pady=10)
        
        # Кнопки управления
        button_frame = tk.Frame(self.root)
        button_frame.pack(pady=10)
        
        self.start_button = tk.Button(button_frame, text="Начать игру", command=self.start_game)
        self.start_button.pack(side=tk.LEFT, padx=5)
        
        self.guess_button = tk.Button(button_frame, text="Проверить", command=self.check_guess, state=tk.DISABLED)
        self.guess_button.pack(side=tk.LEFT, padx=5)
        
    def set_difficulty(self, difficulty):
        self.difficulty = difficulty
        if difficulty == "easy":
            self.max_attempts = 8
            messagebox.showinfo("Сложность", "Легкий уровень: число от 1 до 50, 8 попыток")
        elif difficulty == "medium":
            self.max_attempts = 10
            messagebox.showinfo("Сложность", "Средний уровень: число от 1 до 100, 10 попыток")
        else:
            self.max_attempts = 12
            messagebox.showinfo("Сложность", "Сложный уровень: число от 1 до 200, 12 попыток")
            
        self.attempts_label.config(text=f"Попыток: 0/{self.max_attempts}")
        
    def start_game(self):
        # Генерируем случайное число в зависимости от сложности
        if self.difficulty == "easy":
            self.secret_number = random.randint(1, 50)
        elif self.difficulty == "medium":
            self.secret_number = random.randint(1, 100)
        else:
            self.secret_number = random.randint(1, 200)
            
        self.attempts = 0
        self.game_active = True
        
        # Активируем поле ввода и кнопку
        self.guess_entry.config(state=tk.NORMAL)
        self.guess_button.config(state=tk.NORMAL)
        self.start_button.config(state=tk.DISABLED)
        
        self.info_label.config(text="Игра началась! Введите ваше число.")
        self.attempts_label.config(text=f"Попыток: {self.attempts}/{self.max_attempts}")
        
    def check_guess(self):
        if not self.game_active:
            return