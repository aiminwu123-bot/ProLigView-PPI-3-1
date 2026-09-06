# ProLigView PPI

浏览器端蛋白-蛋白互作分析工具套件，集成三大模块于单文件，支持蛋白互作检测、WT/Mut 结构叠加与互作差异比对。纯前端实现，无需后端服务器，数据不上传。

## 在线使用

通过 GitHub Pages 直接访问：

🔗 **[https://你的用户名.github.io/ProLigView-PPI/](https://你的用户名.github.io/ProLigView-PPI/)**

> 单文件 `index.html` 包含全部三个模块，通过顶部标签页切换。

## 本地使用

直接双击 `index.html` 在浏览器中打开即可，无需安装任何依赖。

```bash
git clone https://github.com/你的用户名/ProLigView-PPI.git
cd ProLigView-PPI
# 用浏览器打开 index.html
```

---

## 三大模块

### 模块一：PPI 分析

针对单个蛋白复合物，检测链间相互作用。

**支持的互作类型（8 种）：**

- 氢键（距离 + 角度阈值可调）
- 盐桥（静电作用）
- 疏水作用（Cβ 间距）
- π-π 堆积（芳香环几何）
- π-Cation（阳离子-芳香）
- 二硫键（Sγ 距离）
- 卤键（C-X···O 角度）
- 范德华接触（vdW 半径 + 缓冲）

**特色：** 每种互作的阈值可前端实时调节，内置文献共识评判标准。

### 模块二：结构叠加

对比野生型与突变体蛋白结构。

**核心功能：**

- 基于 **Kabsch 算法**的 Cα 最小二乘叠加
- 自动计算 **Cα-RMSD**
- 突变位点自动识别或手动输入
- 突变位点位移可视化（虚线 + 球体 + 标签）

### 模块三：差异比对

分析 WT 和 Mut 分别与同一 Partner 蛋白互作的差异。

**核心功能：**

- 以 **Partner 链为锚定**进行结构叠加
- 分别独立检测 WT-Partner 和 Mut-Partner 互作
- **差异分类**：WT 特有（丢失）、Mut 特有（获得）、两者共有
- 导出 **CSV 差异报告**

---

## 快速开始

### 方式一：在线使用（GitHub Pages）

访问 `https://你的用户名.github.io/ProLigView-PPI/` 即可使用。

### 方式二：本地使用

直接双击 `index.html` 在浏览器中打开即可。

### 方式三：作为静态页面部署

单文件 `index.html` 可部署到任意静态托管服务：

- GitHub Pages
- Vercel / Netlify
- 自有服务器 Nginx/Apache
- 直接发送到同事，双击打开即可

---

## 使用指南

### PPI 分析流程

1. 点击顶部 **PPI 分析** 标签
2. 拖入蛋白复合物 PDB/mmCIF 文件
3. 标记受体链（黄）和配体链（紫）
4. 调节互作阈值
5. 查看统计与列表，点击列表项聚焦
6. 导出 PNG

### 结构叠加流程

1. 点击顶部 **结构叠加** 标签
2. 分别拖入 WT 和 Mut 结构文件
3. 自动触发 Kabsch 叠加
4. 查看 RMSD 与突变位点
5. 点击突变位点聚焦查看位移

### 差异比对流程

1. 点击顶部 **差异比对** 标签
2. 拖入 WT-Partner 和 Mut-Partner 复合物
3. 标记 WT 链（绿）、Mut 链（红）、Partner 链（紫）
4. 执行叠加
5. 查看互作差异（丢失/获得/共有）
6. 导出 PNG 和 CSV 报告

---

## 文件结构

```javascript
ProLigView-PPI/
├── index.html          # 主工具（单文件，含三大模块）
├── README.md           # 项目说明
├── LICENSE             # MIT 许可证
└── examples/           # 示例数据
    ├── 1BRS.pdb        # Barnase-Barstar 蛋白复合物示例
    └── README.md       # 示例数据说明
```

---

## 技术栈

- **[3Dmol.js](https://3Dmol.org/)** — 分子可视化与几何计算
- **原生 JavaScript** — 无框架依赖，零构建步骤
- **Kabsch 算法** — 3×3 SVD 实现结构最小二乘叠加

---

## 浏览器兼容性

- Chrome / Edge / Firefox / Safari 最新版
- 需要 WebGL 支持
- 建议通过本地服务器或 GitHub Pages 访问以获得最佳拖放体验

---

## 示例数据

`examples/1BRS.pdb` 为 Barnase-Barstar 蛋白复合物（PDB: 1BRS），含 6 条链，适合测试 PPI 分析功能。

---

## License

[MIT](./LICENSE)