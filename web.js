var toggleButton = document.querySelector(' .toggle-dark-mode');
var cs1 = document.querySelector("body")
console.log(toggleButton);
// 为按钮添加点击事件
toggleButton.addEventListener('click', () => {
  // 切换 body 的类名
  document.body.classList.toggle('dark-mode');
});


// 获取网站计数器元素
var counterElement = document.querySelector("counter");

// 从本地存储中获取访问次数
var count = localStorage.getItem("count");

// 如果访问次数不存在，则将其初始化为 0
if (!count) {
    count = 0;
}

// 将访问次数加 1
count++;

// 将访问次数保存到本地存储中
localStorage.setItem("count", count);

// 在网站计数器元素中显示访问次数
counterElement.innerHTML = "You have visited this site " + count + " times.";

