import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# ファイルからデータを読み込む
with open('./calc/output.txt', 'r') as file:
    raw_data = file.read()

# データの整形
data_list = eval(raw_data)  # 注意: evalは入力データが信頼できる場合のみ使用

# 初期設定
fig, ax = plt.subplots()
ax.set_xlim(-300, 300)
ax.set_ylim(-300, 300)

# scatterプロットの初期化
scatter = ax.scatter([], [], s=0.1)  # s=10で点の大きさを指定


# アニメーション用の初期化関数
def init():
    scatter.set_offsets(np.empty((0, 2)))  # 空の2次元配列を設定
    return scatter,

# アニメーション用の更新関数
def update(frame):
    data = np.array(data_list[frame % len(data_list)])
    scatter.set_offsets(data)
    return scatter,

# アニメーションを作成
ani = FuncAnimation(fig, update, frames=len(data_list), init_func=init, interval=1000, blit=True)

# アニメーションを表示
plt.show()
