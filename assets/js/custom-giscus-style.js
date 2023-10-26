// 通过等待文档加载完成，确保 "giscus" 插件已加载
document.addEventListener("DOMContentLoaded", function () {
    // 获取 "giscus" 插件的评论框元素
    const commentBox = document.querySelector(".giscus-comment-box");

    // 添加自定义样式
    if (commentBox) {
        commentBox.style.background = "white";
    }
});

