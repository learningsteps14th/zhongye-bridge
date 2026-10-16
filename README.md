# Zhongye 网站维护

正式网址：https://zhongye-steelbridge.github.io/meet-us/

当前最新版本已设为首页。main 分支的 index.html 是正式页面；此维护稿的 styles.css 和 image-protection.js 分别保存样式与图片保护脚本，照片放在同一目录。main 分支提交后由 GitHub Pages 自动发布。

## 版本与入口

- 版本 1 原始备份保留在 version-1 分支。
- version-2.0 分支保留当前维护稿。
- v2.html 作为旧入口跳转到首页，日常分享使用上面的正式网址。

## 修改图片和文字

在 index.html 中查找 data-image-slot 可定位对应照片，替换 src 时同时核对 alt 和 figcaption。图片先处理为适合网页的大小，再上传；原始高清照片留在本地。首页工厂图无水印，其余照片使用 ZHONGYE 水印。

WhatsApp 按钮位于首页和联系区，更改号码时同步检查两处按钮和可见号码。

## 发布检查

Settings → Pages 使用 main / (root)，保持 .nojekyll。提交后在 Actions 检查 pages build and deployment 是否成功，并用正式网址检查图片、手机版显示和联系按钮。
