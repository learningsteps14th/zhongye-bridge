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
| PHOTO 01 | 首页工厂照片 | factory-exterior.png |
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
