// Simplified Chinese (zh-CN) product text. Slugs, brand names and article numbers (SKU) stay in Latin.
import type { Spec } from "./products";

export interface ProductZh {
  name: string;
  tagline: string;
  description: string;
  specs: Spec[];
}

// Keys are product slugs. Spec arrays keep the same order as the English specs.
export const zh: Record<string, ProductZh> = {
  "clayo-pottery-wheel": {
    name: "CLAYO 陶艺拉坯机，220 V，350 W",
    tagline: "用于成型陶艺作品的电动拉坯机。",
    description: "用于成型陶艺作品的电动拉坯机。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-P9278" },
      { label: "电压", value: "220V" },
      { label: "功率", value: "350W" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-ceramic-kiln": {
    name: "CLAYO 陶瓷窑炉，220 V，1.6 kW",
    tagline: "用于烧制陶瓷作品的电窑。",
    description: "用于烧制陶瓷作品的电窑。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-P7266" },
      { label: "电压", value: "220V" },
      { label: "功率", value: "1.6 kW" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-clay-trap": {
    name: "CLAYO 泥浆沉淀槽",
    tagline: "用于沉淀、澄清陶泥浆的沉淀槽。",
    description: "用于沉淀、澄清陶泥浆的沉淀槽。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-P2897" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-mini-slab-roller": {
    name: "CLAYO 迷你泥板机",
    tagline: "用于压制泥板的紧凑型压泥机。",
    description: "用于压制泥板的紧凑型压泥机。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-P8133" },
      { label: "尺寸", value: "迷你" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-clay-extruder": {
    name: "CLAYO 挤泥机，壁挂式，手动",
    tagline: "用于成型泥坯的手动壁挂式挤泥机。",
    description: "用于成型泥坯的手动壁挂式挤泥机。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-T3881" },
      { label: "类型", value: "壁挂式，手动" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-banding-wheel-small": {
    name: "CLAYO 陶艺转台，小号",
    tagline: "用于塑形和装饰陶艺作品的旋转台。",
    description: "用于塑形和装饰陶艺作品的旋转台。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R9895" },
      { label: "尺寸", value: "小号" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-banding-wheel-large": {
    name: "CLAYO 陶艺转台，大号",
    tagline: "用于塑形和装饰陶艺作品的旋转台。",
    description: "用于塑形和装饰陶艺作品的旋转台。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-P4792" },
      { label: "尺寸", value: "大号" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-slip-trailer-set": {
    name: "CLAYO 挤浆瓶套装（塑料瓶，含喷嘴）",
    tagline: "带喷嘴的塑料挤浆瓶。",
    description: "带喷嘴的塑料挤浆瓶。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-01" },
      { label: "材质", value: "塑料" },
      { label: "包装内容", value: "挤浆瓶，含喷嘴" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-hand-sprayer": {
    name: "CLAYO 手持喷壶",
    tagline: "工作时用于润湿陶泥和作品的手持喷壶。",
    description: "工作时用于润湿陶泥和作品的手持喷壶。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-02" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-pottery-ladle": {
    name: "CLAYO 陶艺水勺",
    tagline: "用于舀取和定量取用水或泥浆的水勺。",
    description: "用于舀取和定量取用水或泥浆的水勺。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-03" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-painting-brush": {
    name: "CLAYO 彩绘笔",
    tagline: "用于陶艺作品彩绘的画笔。",
    description: "用于陶艺作品彩绘的画笔。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-04" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-round-sponge": {
    name: "CLAYO 圆形海绵",
    tagline: "用于在陶艺作品上上色的圆形海绵。",
    description: "用于在陶艺作品上上色的圆形海绵。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-05" },
      { label: "形状", value: "圆形" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-rolling-pin": {
    name: "CLAYO 擀泥棒",
    tagline: "用于擀压陶泥的擀泥棒。",
    description: "用于擀压陶泥的擀泥棒。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-06" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-wooden-thickness-guides-set": {
    name: "CLAYO 木质厚度导条（擀泥定厚条），套装",
    tagline: "擀泥时用于控制泥板厚度的木质导条。",
    description: "擀泥时用于控制泥板厚度的木质导条。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-07" },
      { label: "材质", value: "木质" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-cutting-wire": {
    name: "CLAYO 陶艺切线",
    tagline: "用于将成品从拉坯机上切下的切线。",
    description: "用于将成品从拉坯机上切下的切线。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-08" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-burnishing-tool-ptfe": {
    name: "CLAYO 压光工具（PTFE）",
    tagline: "用于抚平和压光作品表面的 PTFE 工具。",
    description: "用于抚平和压光作品表面的 PTFE 工具。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-09" },
      { label: "材质", value: "聚四氟乙烯（PTFE）" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-wooden-modeling-tool-set": {
    name: "CLAYO 木质塑形工具套装",
    tagline: "用于处理陶泥的木质塑形工具套装。",
    description: "用于处理陶泥的木质塑形工具套装。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-10" },
      { label: "材质", value: "木质" },
      { label: "包装内容", value: "标准套装" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-basic-pottery-tool-set": {
    name: "CLAYO 基础陶艺工具套装",
    tagline: "基础陶艺手工工具套装。",
    description: "基础陶艺手工工具套装。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-11" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-cutting-knife-long-blade": {
    name: "CLAYO 切割刀，长刃",
    tagline: "用于切割陶泥的长刃刀。",
    description: "用于切割陶泥的长刃刀。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-12" },
      { label: "刀刃", value: "长刃" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-cutting-knife-double-edged": {
    name: "CLAYO 切割刀，双刃",
    tagline: "用于切割陶泥的双刃刀。",
    description: "用于切割陶泥的双刃刀。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-13" },
      { label: "刀刃", value: "双刃" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-needle-tool": {
    name: "CLAYO 金属针形工具（锥子）",
    tagline: "用于处理陶泥的金属针形工具。",
    description: "用于处理陶泥的金属针形工具。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-14" },
      { label: "材质", value: "金属" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-glazing-tongs": {
    name: "CLAYO 施釉夹",
    tagline: "施釉时用于夹持作品的夹子。",
    description: "施釉时用于夹持作品的夹子。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-15" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-steel-scraper-type-1": {
    name: "CLAYO 钢制刮刀，1 型",
    tagline: "用于刮平和清理作品表面的钢制刮刀。",
    description: "用于刮平和清理作品表面的钢制刮刀。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-16" },
      { label: "类型", value: "1 型" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-steel-scraper-type-2": {
    name: "CLAYO 钢制刮刀，2 型",
    tagline: "用于刮平和清理作品表面的钢制刮刀。",
    description: "用于刮平和清理作品表面的钢制刮刀。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-17" },
      { label: "类型", value: "2 型" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-textured-rolling-pin-set": {
    name: "CLAYO 纹理擀泥棒套装（3 种花纹）",
    tagline: "用于装饰陶艺作品的三支花纹擀泥棒套装。",
    description: "用于装饰陶艺作品的三支花纹擀泥棒套装。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-18" },
      { label: "包装内容（3 件）", value: "花纹 1 型擀泥棒；花纹 2 型擀泥棒；花纹 3 型擀泥棒" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-square-slab-forming-tool": {
    name: "CLAYO 方形泥板成型工具",
    tagline: "用于成型方形泥件的工具。",
    description: "用于成型方形泥件的工具。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-20" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-cotton-canvas-slab-mat": {
    name: "CLAYO 棉帆布擀泥垫",
    tagline: "用于擀压泥板的棉帆布垫。",
    description: "用于擀压泥板的棉帆布垫。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R8060-21" },
      { label: "材质", value: "棉帆布" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-engobe-set-14-colors": {
    name: "CLAYO 化妆土（液态泥浆）套装，14 色，190 ml",
    tagline: "14 色化妆土（液态泥浆）套装。",
    description: "14 色化妆土（液态泥浆）套装。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R1415-01" },
      { label: "容量", value: "每瓶不少于 190 ml" },
      { label: "颜色（14 种）", value: "亮黄；黄；橙；红；仙客来紫；薰衣草紫；蓝；蓝眼睛；人鱼之歌；浅绿；草绿；棕；灰；黑" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-clear-glaze": {
    name: "CLAYO 透明釉",
    tagline: "陶瓷用透明釉。",
    description: "陶瓷用透明釉。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R1415-02" },
      { label: "类型", value: "透明" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-white-glaze": {
    name: "CLAYO 白釉",
    tagline: "陶瓷用白釉。",
    description: "陶瓷用白釉。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R1415-03" },
      { label: "颜色", value: "白色" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-high-fire-clay-cream": {
    name: "CLAYO 高温陶泥，奶油色，10 kg",
    tagline: "高温陶泥，奶油色，10 kg。",
    description: "高温陶泥，奶油色，10 kg。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R1415-04" },
      { label: "生产国", value: "德国" },
      { label: "颜色", value: "奶油色" },
      { label: "重量", value: "10 kg" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-high-fire-clay-ivory": {
    name: "CLAYO 高温陶泥，象牙色，10 kg",
    tagline: "高温陶泥，象牙色，10 kg。",
    description: "高温陶泥，象牙色，10 kg。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R1415-05" },
      { label: "生产国", value: "德国" },
      { label: "颜色", value: "象牙色" },
      { label: "重量", value: "10 kg" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-red-modeling-clay": {
    name: "CLAYO 红色造型陶泥",
    tagline: "造型用红色陶泥。",
    description: "造型用红色陶泥。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R1415-06" },
      { label: "颜色", value: "红色" },
      { label: "包装规格", value: "每 1 kg" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-ceramic-paint-set-10-colors": {
    name: "CLAYO 陶瓷颜料套装，10 色",
    tagline: "10 色陶瓷颜料套装。",
    description: "10 色陶瓷颜料套装。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-R1415-07" },
      { label: "颜色（10 种）", value: "柠檬酒色；南瓜橙；草莓田；白雪皇后；黑天鹅；木兰；人鱼之歌；丛林绿；碧海蓝；李子紫" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-pottery-studio-chair": {
    name: "CLAYO 陶艺工作室座椅",
    tagline: "陶艺工作室座椅。",
    description: "陶艺工作室座椅。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-C0120" },
      { label: "类别", value: "陶艺工坊设备" },
    ],
  },
  "clayo-airbrush": {
    name: "CLAYO 喷笔",
    tagline: "用于模型上色的喷笔。",
    description: "用于模型上色的喷笔。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "货号（SKU）", value: "CLY-K9652" },
      { label: "类别", value: "工具" },
    ],
  },
  "airbrush-acrylic-paint-water-based": {
    name: "喷笔用水性丙烯颜料",
    tagline: "用于模型喷涂的水性丙烯颜料。",
    description: "用于模型喷涂的水性丙烯颜料。CLAYO 出品。",
    specs: [
      { label: "品牌", value: "CLAYO" },
      { label: "类型", value: "水性丙烯" },
      { label: "类别", value: "工具" },
    ],
  },
};
