# Zhongye 版本 2.0 · Logo 对比草稿

版本1已保存在 version-1 分支，线上网站仍由 main 分支发布。本分支为 2.0 修改稿。

- index.html：已选定的金色细黑边 Logo 版（logo-gold-outlined.png）
- orange-preview.html：工业橙色 Logo 版
- logo-comparison.html：相同背景和尺寸下的两版对比
- logo-gold-outlined.png：已选定的金色细黑边标志，页头与页脚共用；logo-gold.png 保留为原图备份
- logo-orange.png：通过内置图像编辑工具处理的橙色 Logo，待用户选定

橙色处理提示：保留原始 Z/B 交叠图形的轮廓、比例、方向及负空间，将浅金色调整为 #EE7725 工业橙，清理边缘，透明背景；不添加文字、阴影、描边、渐变或额外图案。金色版使用用户原始图片，没有生成重绘。

已选定金色细黑边 Logo。本次保存到 version-2.0 分支，线上 main 仍保留版本1。发布完整 2.0 时再合并到 main；不要覆盖 version-1 备份分支。

---
# Zhongye 网站维护

网站：https://learningsteps14th.github.io/zhongye-bridge/

本网站现在由 GitHub 独立维护。页面、样式、图片全部在本仓库，不依赖 Framer，也不需要付费建站工具。提交到 `main` 分支后，GitHub Pages 会自动发布。

## 修改文字

在 GitHub 打开 `index.html`，点击铅笔按钮编辑。找到需要修改的英文文字，保留周围的 HTML 标签，修改后点击 Commit changes。

`styles.css` 控制颜色、字号、间距和手机版布局。

## 替换或补充照片

页面共保留 11 个照片位置，每处在 `index.html` 中都有 `PHOTO 01` 至 `PHOTO 11` 注释。

- 替换已有照片：准备一张同名图片，通过 Add file → Upload files 上传到仓库根目录并提交，即可替换。
- 补充空位照片：先把照片上传到仓库根目录，再在 `index.html` 中找到对应 `PHOTO` 注释，将 `src="photo-placeholder.svg"` 改为真实图片名，删除该图片的 `class="placeholder"`，更新 `alt` 和下方说明文字。
- 推荐图片名使用英文小写和连字符；不要在不同项目之间复用照片来填空。
- 照片只使用真实工厂或对应项目资料；上传前确认没有合同、价格、客户身份、签字或印章等不应公开的信息。

| 位置 | 内容 | 当前文件 |
| --- | --- | --- |
| PHOTO 01 | 首页工厂照片 | factory-exterior-watermarked.webp |
| PHOTO 02 | 印尼：工厂准备与部件包装 | 待补充 |
| PHOTO 03 | 印尼：装箱发运 | indonesia-production.png |
| PHOTO 04 | 西藏：桥梁全景 | tibet-bridge-1.png |
| PHOTO 05 | 西藏：第二张项目照片 | 待补充 |
| PHOTO 06 | 吉尔吉斯斯坦：桥梁构件 | kyrgyzstan-bridge.png |
| PHOTO 07 | 吉尔吉斯斯坦：第二张项目照片 | 待补充 |
| PHOTO 08 | 厄瓜多尔：原项目卡片照片 | ecuador-bridge.png |
| PHOTO 09 | 厄瓜多尔：第二张项目照片 | 待补充 |
| PHOTO 10 | 机器人焊接与自动生产 | 待补充 |
| PHOTO 11 | 车间作业与桥梁构件制造 | workshop-production.png |

沿用照片的项目归属依照原网站；未经确认的其他桥梁和设备图片没有重新分配到项目或焊接工序。请核实原厄瓜多尔和吉尔吉斯斯坦照片的归属，必要时替换。

## 联系方式

WhatsApp 链接出现在首页和联系区。如更换号码，请同时修改两处按钮和可见号码。

工厂地址按提供的原文显示在联系区。

## 发布

GitHub Settings → Pages：Deploy from a branch → main → /(root)。`.nojekyll` 应保留。每次提交后可在 Actions 查看 `pages build and deployment` 是否成功。

## 图片展示与保存限制
首页工厂照片使用 1920 × 1246 的 WebP，照片内直接合成 16 处 ZHONGYE 文字水印，透明度 20%。高清原图仅在本地保留。image-protection.js 禁止图片右键菜单和拖拽；文字和链接的正常菜单不受影响。这只能阻止常见的直接保存操作，不能防止截图或通过浏览器工具下载。仓库历史中原有无水印图片不因本次替换而消失。
