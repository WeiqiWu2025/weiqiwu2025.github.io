# Weiqi Wu 学术主页（Jekyll 可维护版）

本目录是从静态 HTML 版本重构出的 GitHub Pages/Jekyll 版本。页面外观和网址保持一致，但导航、个人资料、新闻、论文和项目都已集中管理。

原静态版本位于相邻目录 `academic-homepage`，本次重构没有修改该目录。

## 最常修改的文件

| 需要修改的内容 | 文件 |
| --- | --- |
| 姓名、头像、单位、邮箱、外部链接 | `_config.yml` |
| 顶部导航与 Research 下拉菜单 | `_data/navigation.yml` |
| News | `_data/news.yml` |
| Publications | `_data/publications.yml` |
| Projects | `_data/projects.yml` |
| 合作者及共同论文 | `_data/collaborators.yml` |
| 首页介绍 | `index.md` |
| Research 各页面正文 | 对应的 `research-*.md` 文件 |
| 样式 | `assets/css/styles.css` |

## 添加一条 News

编辑 `_data/news.yml`，在文件顶部添加：

```yaml
- date: "2026.08"
  content: "Your news content."
```

## 添加一篇论文

编辑 `_data/publications.yml`，在对应分类的 `items` 下添加：

```yaml
- tag: "Venue'26"
  authors: "<strong>Weiqi Wu</strong>, Coauthor"
  title: "Paper title"
  venue: "Journal or Conference"
  details: "2026"
  doi: "https://doi.org/..."
  code: "https://github.com/..."
```

没有 DOI 或代码时可以省略对应字段。

## 添加一个项目

编辑 `_data/projects.yml`：

```yaml
- name: "Project Name"
  description: "Short project description."
  url: "https://github.com/..."
```

## 添加一位合作者

编辑 `_data/collaborators.yml`。首次添加时，删除文件中的 `[]`，然后写入：

```yaml
- name: "Collaborator Name"
  title: "Professor"
  affiliation: "University Name"
  homepage: "https://example.com"
  avatar: "https://example.com/avatar.jpg"
  interests: "Backscatter communication, Internet of Things"
  collaboration: "A short introduction to the collaboration."
  publications:
    - title: "Joint paper title"
      venue: "Journal or Conference"
      year: 2026
      url: "https://doi.org/..."
```

每位合作者会自动生成一个独立信息区块，并在其下方列出共同论文。

## 修改页面正文

直接编辑对应 `.md` 文件。每个文件开头的 `---` 区域是页面配置，通常只修改配置区之后的正文。

## 发布到 GitHub Pages

1. 将本目录内的全部文件上传到 `WeiqiWu2025.github.io` 仓库根目录。
2. 不要上传旧静态目录，也不要添加 `.nojekyll`。
3. 在仓库 `Settings → Pages` 中选择 `Deploy from a branch`。
4. 选择 `main` 和 `/ (root)` 后保存。
5. GitHub Pages 会自动运行 Jekyll 并发布网站。

## 本地预览（可选）

安装 Ruby 和 Jekyll 后，在本目录运行：

```powershell
jekyll serve
```

然后访问 `http://127.0.0.1:4000/`。
