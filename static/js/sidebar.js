// 获取按钮和侧边栏元素
const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar-menu');
const overlay = document.getElementById('overlay');

// 点击菜单按钮显示侧边栏
menuButton.addEventListener('click', () => {
    document.body.classList.add('show-sidebar-menu');
});

// 点击遮罩层隐藏侧边栏
overlay.addEventListener('click', () => {
    document.body.classList.remove('show-sidebar-menu');
});