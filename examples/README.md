# 示例数据说明

本目录用于存放示例数据文件，帮助新用户快速上手。

## 推荐的示例数据获取方式

### 1. AlphaFold 3 预测结构

如果你使用 AlphaFold 3 预测了蛋白复合物结构，可直接下载 `.cif` 或 `.pdb` 文件使用。

### 2. PDB 数据库

从 [RCSB PDB](https://www.rcsb.org/) 下载实验解析结构：

```bash
# 示例：下载胰岛素二聚体
wget https://files.rcsb.org/download/1ZNJ.pdb
```

### 3. 模拟 WT/Mut 对比数据

对于差异比对模块 (`diff.html`)，你需要准备两组复合物：

```
示例场景：蛋白 A 与蛋白 B 互作

文件1: A_WT + B 的复合物结构 (AF3 预测或实验结构)
文件2: A_Mut + B 的复合物结构 (AF3 预测或实验结构)

注意：两个复合物中的 B (Partner) 应该是同一蛋白
```

## 文件命名建议

```
examples/
├── complex_WT_partner.pdb      # WT-Partner 复合物
├── complex_Mut_partner.pdb     # Mut-Partner 复合物
├── protein_WT.pdb              # 单独的 WT 蛋白
└── protein_Mut.pdb             # 单独的 Mut 蛋白
```

## 支持的文件格式

- `.pdb` / `.ent` — Protein Data Bank 格式
- `.cif` / `.mmcif` — mmCIF 格式（推荐，AF3 默认输出）

## 注意事项

1. 结构文件应包含标准氨基酸残基命名
2. 氢原子可选（工具支持自动识别极性氢）
3. 对于 AF3 预测结构，建议保留 pLDDT 信息（B-factor 列）
4. 大结构（>10,000 原子）可能在低端设备上渲染较慢
