# Geektion E-Drive — 16 车型骑行应用场景规划 + 网站集成方案

> 规划文档（v1.0）｜用途：为 16 张白底车型图生成真实骑行应用场景图，并填充至 geektion.com 提升可信度。
> 后续图像生成（阿里 imageGenerate）与网页改造为独立任务，不在本文档范围内。

---

## 一、16 车型完整清单

### 已确认车型（1-10 + 11-16 经 read 核验）

| # | 车型 | 关键特征 | 建议英文产品名 |
| :--- | :--- | :--- | :--- |
| 1 | 折叠车 18" 灰 | 中置电机、车电分离、可折叠 | **Bamboo Flute** (Folding Commuter) |
| 2 | 沙滩车 20" 蓝 fat 胎 | 宽胎、中置电机、休闲 | **Meteor Beach Cruiser** |
| 3 | 城市车 27.5" 酒红 | 通勤、中置电机 | **Meteor City S1** (Wine) |
| 4 | 城市车 27.5" 森林绿 | 通勤、中置电机 | **Meteor City S1** (Forest) |
| 5 | 载重车 26+20" 鼠尾草绿 双座 | 货运/家庭、长尾架 | **Qiulong Cargo** |
| 6 | 胖胎车 24" 灰绿 | fat 胎、越野/雪地 | **Glacier Fat-Trek** |
| 7 | 城市车 28" 酒红 Continental 胎 | 欧式通勤、防刺胎 | **Meteor City L1** (Bordeaux) |
| 8 | 城市车 28" 芥末黄 BOSCH 电机 | 欧式通勤、中置电机 | **Meteor City L1** (Mustard) |
| 9 | 旅行车 700c 橙 KOJAK 胎 | 长途 touring、货架 | **Zenith Tourer** |
| 10 | 旅行车 28" 银 | 长途 touring、碟刹 | **Zenith Tourer S** |
| 11 | 城市车（米白低跨）SCHWALBE BIG BEN 胎 | 低跨、前避震、皮座、后货架 | **Aurora Step-Through** |
| 12 | 城市车（青柠绿低跨）奶油胎壁 | 低跨、内走线、皮件 | **Aurora Step-Through** (Lime) |
| 13 | 城市车（米金低跨）GRAN PRIX 2.40 胎 | 低跨、内变花鼓、全挡泥板 | **Aurora Step-Through** (Champagne) |
| 14 | 城市车（鼠尾草绿低跨）SR SUNTOUR 前叉 + SCHWALBE ENERGIZER PLUS | 低跨、前避震、链罩、后货架 | **Aurora Comfort E** |
| 15 | 旅行/通勤（银灰+铜饰条低跨）GLADIOR/ROAD RACER 胎 | 低跨、碟刹、货架、前避震 | **Zenith Step-Through** |
| 16 | 城市车（银灰低跨）SUNTOUR 前叉、焦糖胎壁、深盆轮 | 低跨、液压碟刹、后货架 | **Aurora Urban** |

> 命名体系说明：采用"音译+品类描述"双轨制 —— Bamboo Flute / Meteor / Qiulong / Aurora / Zenith 为系列名（贴合 Geektion 国际化的同时保留东方意象），后缀（City / Cargo / Tourer / Fat-Trek）标注真实用途，便于 B2B 买家快速识别。

### 11-16 车型核验说明
- **#11**：米白/奶油色低跨 step-through，前避震黑叉，棕色皮革鞍座+把套，全挡泥板+后货架，SCHWALBE BIG BEN PLUS 反射条胎 → 归类 **Aurora Step-Through**（城市通勤，中置电机+内置电池）。
- **#12**：哑光青柠绿低跨，奶油白胎壁+棕胎面，银/铬色弯把+皮把套，圆形 LED 前灯，SELLE 风格皮鞍 → **Aurora Step-Through (Lime)**。
- **#13**：哑光香槟金低跨，GRAN PRIX 2.40 + 60 TPI 标、深盆黑圈、内变花鼓（厚花鼓）、液压碟刹、全挡泥板 → **Aurora Step-Through (Champagne)**。
- **#14**：鼠尾草绿低跨，SR SUNTOUR 前避震、SCHWALBE ENERGIZER PLUS 反射条胎、全包链罩、SELLE ROYAL 皮鞍、后货架+尾灯 → **Aurora Comfort E**。
- **#15**：银灰低跨+铜色饰条，前避震、前后碟刹、银货架、黑挡泥板，胎侧 GLADIOR 2.0 / ROAD RACER → **Zenith Step-Through**（通勤/轻旅行）。
- **#16**：银灰低跨，SUNTOUR 前避震、深盆黑轮+焦糖胎壁、液压碟刹、黑货架、棕色鞍座 → **Aurora Urban**。

---

## 二、16 车型骑行应用场景方案 + 生成 Prompt

> 所有场景必须自然体现 Geektion 三大卖点：**Micro Mid-drive 2.4kg 轻量 / 车电分离 / 100Wh 电池可上飞机 (IATA)**。
> 生成约束通用前缀（供每条 prompt 复用）：`Studio-quality photorealistic advertising photo, the exact ebike from the reference image preserved (same frame design, color, wheel size, components), natural light, shallow depth of field, 35mm lens look, no text, no watermark, no page number.`

### 1. Bamboo Flute（折叠车 18" 灰）
- **场景**：巴黎/东京通勤清晨，商务男士将折叠车推入地铁闸机，电池已取下装入双肩包侧袋，车架单手折叠提行。
- **光线**：清晨 7:30 侧逆光，暖金+冷蓝混合。
- **叙事**：Mid-drive 2.4kg 让"提车进地铁"成为可能；车电分离 → 电池放包里，整车上地铁无安检争议。
- **Prompt**：
```
Urban commuter scene, early morning golden light, a business man in navy coat folding a grey 18-inch folding ebike (Bamboo Flute, exact same matte grey frame, mid-drive motor, compact wheels) at a Paris metro entrance, holding the folded bike in one hand like a briefcase, a sleek black power-bank style battery detached and tucked in his backpack side pocket, blurred station interior background, cinematic depth of field, photorealistic, no text
```

### 2. Meteor Beach Cruiser（沙滩车 20" 蓝 fat 胎）
- **场景**：加州海岸黄昏，骑行者沿沙滩缓行，fat 胎压出车辙，海面反光；车停靠时电池取下在防水包里。
- **光线**：日落 18:00 侧光，橙粉色调。
- **叙事**：20" fat 胎 + 中置电机征服软沙；电池防泼溅快拆 → 海边放心玩水。
- **Prompt**：
```
California beach at sunset, warm orange-pink light, a rider cruising a blue 20-inch fat-tire beach ebike (Meteor Beach Cruiser, exact same blue frame, wide knobby tires, mid-drive motor) along the shoreline with fresh tire tracks in wet sand, ocean waves in background, detached battery module resting in a waterproof hip pack, photorealistic, cinematic, no text
```

### 3. Meteor City S1 酒红（27.5" 城市车）
- **场景**：伦敦砖巷街头午后，通勤者穿酒红色城市车穿行红砖建筑间，停在咖啡店外，电池取下放桌面充电。
- **光线**：午后 14:00 高光比，明暗对比强。
- **叙事**：27.5" 城市几何 + 60Nm 内转子起步灵敏；电池 USB-C 变充电宝，在咖啡店给笔记本续电。
- **Prompt**：
```
Brick Lane London afternoon, a stylish commuter riding a wine-red 27.5-inch city ebike (Meteor City S1, exact same deep wine frame, fenders, mid-drive motor) between red brick buildings, leaning the bike against a café terrace, the battery module detached and charging a laptop via USB-C on the café table, photorealistic street photography, no text
```

### 4. Meteor City S1 森林绿（27.5" 城市车）
- **场景**：哥本哈根通勤自行车高速路，绿车与自行车洪流同行，路过港口风车。
- **光线**：晨间 8:00 散射光，北欧清透。
- **叙事**：轻量化车架+电机 → 城市骑行的"隐形助推"；展示批量交付城市车队的可行性（B2B fleet 暗示）。
- **Prompt**：
```
Copenhagen bicycle highway at morning, soft nordic light, a rider on a forest-green 27.5-inch city ebike (Meteor City S1, exact same green frame, mid-drive motor) riding among a stream of commuter cyclists, harbor wind turbines in background, clean Scandinavian architecture, photorealistic, motion sense, no text
```

### 5. Qiulong Cargo（载重车 26+20" 双座）
- **场景**：荷兰家庭下午，父母载两个孩子骑行，前货篮装购物袋+鲜花，长尾架装儿童座椅。
- **光线**：下午 16:00 柔光，暖调。
- **叙事**：双座长尾设计承载家庭出行；中置电机提供重载起步扭矩；车电分离方便回家提电池充电。
- **Prompt**：
```
Netherlands family ride, soft afternoon light, a sage-green long-tail cargo ebike (Qiulong Cargo, exact same sage green frame, dual-seat long tail, 26+20 inch wheels, mid-drive motor) carrying two kids in a rear bench seat and groceries in a front basket, riding along a canal with Dutch townhouses, detached battery in parent's backpack, photorealistic, warm tones, no text
```

### 6. Glacier Fat-Trek（胖胎车 24" 灰绿）
- **场景**：阿尔卑斯雪后森林小径，骑行者穿 fat 胎压过雪地，呼气成雾，晨雪反光。
- **光线**：清晨 7:00 冷蓝+暖阳低角度。
- **叙事**：24" fat 胎在雪地/沙滩/碎石的全地形能力；-20°C 下电池快拆带走保温，避免低温掉电。
- **Prompt**：
```
Alpine snow forest morning, cold blue light with warm low sun, a rider on a grey-green 24-inch fat-tire ebike (Glacier Fat-Trek, exact same grey-green frame, wide studded tires, mid-drive motor) carving through fresh snow on a forest trail, breath visible in cold air, detached battery tucked into an insulated jacket pocket, photorealistic winter adventure, no text
```

### 7. Meteor City L1 酒红 Continental（28" 城市车）
- **场景**：维也纳环城大道黄昏，绅士风骑行者配大衣，经过美泉宫方向林荫道。
- **光线**：黄昏 17:30 侧逆光，金色。
- **叙事**：28" 欧式车架 + Continental 防刺胎定位高端通勤；电池快拆 → 办公桌旁 USB-C 直充。
- **Prompt**：
```
Vienna Ringstrasse at dusk, golden side light, an elegant rider in a long coat on a bordeaux-red 28-inch European city ebike (Meteor City L1, exact same wine-red frame, Continental puncture-resistant tires, mid-drive motor) passing tree-lined boulevard with historic architecture, detached battery in a leather saddle bag, photorealistic, refined mood, no text
```

### 8. Meteor City L1 芥末黄 BOSCH（28" 城市车）
- **场景**：柏林街头艺术区中午，芥末黄车停在街头咖啡馆旁，骑手站在车边拿电池当充电宝给手机充电。
- **光线**：正午 12:30 强光，明快。
- **叙事**：醒目色系适合共享车队辨识（B2B fleet 卖点）；车电分离 + 100Wh → "任何地方都是充电站"。
- **Prompt**：
```
Berlin creative quarter noon, bright daylight, a mustard-yellow 28-inch city ebike (Meteor City L1, exact same yellow frame, mid-drive motor) parked at a street café, rider standing beside it holding the detached battery module like a power bank charging a smartphone, street art murals background, photorealistic, vibrant, no text
```

### 9. Zenith Tourer（旅行车 700c 橙 KOJAK 胎）
- **场景**：葡萄牙沿海山丘公路，橙车满载驼包（后货架+前包），骑手远眺大西洋。
- **光线**：上午 10:00 明亮侧光。
- **叙事**：700c + KOJAK 半光头胎 → 公路长途效率；轻量系统让 200km/天 不疲惫；电池两块轮换 = 无限续航。
- **Prompt**：
```
Portugal coastal hill road morning, bright side light, a touring ebike (Zenith Tourer, exact same orange frame, 700c wheels, KOJAK tires, mid-drive motor, loaded with front and rear pannier bags) ridden by a traveler pausing to look over the Atlantic ocean, winding coastal road below, photorealistic travel photography, no text
```

### 10. Zenith Tourer S（旅行车 28" 银）
- **场景**：日本濑户内海岛波海道，银车骑行于跨海大桥，海风轻拂，货架装帐篷。
- **光线**：下午 15:00 海面反光，清透。
- **叙事**：28" 碟刹旅行车 + 快拆电池 → 渡轮/新干线接驳无碍（日本铁道规定电池可携带上座席），跨国 touring 的"合法通关"能力。
- **Prompt**：
```
Japan Setouchi Shimanami Kaido afternoon, clear sea light, a silver 28-inch touring ebike (Zenith Tourer S, exact same silver frame, disc brakes, mid-drive motor, rear rack with camping gear) riding across a cable-stayed bridge over the Seto Inland Sea, ferries below, photorealistic, tranquil mood, no text
```

### 11. Aurora Step-Through 米白（低跨城市车）
- **场景**：哥本哈根居民区清晨，米白低跨车停在家门口，通勤者取出电池顺手提进公寓。
- **光线**：清晨 7:00 柔和晨光。
- **叙事**：低跨设计 + 2.4kg 系统 → 通勤零门槛（裙装/老年/城市居民）；电池提回家充电 = 防盗 + 便捷。
- **Prompt**：
```
Copenhagen residential street early morning, soft dawn light, an off-white step-through city ebike (Aurora Step-Through, exact same cream frame, SCHWALBE tires, front suspension, brown leather saddle, rear rack, mid-drive motor) parked at a townhouse doorstep, owner unlocking the door while carrying the detached battery module in hand, photorealistic, cozy nordic mood, no text
```

### 12. Aurora Step-Through 青柠（低跨城市车）
- **场景**：阿姆斯特丹运河边春日午后，青柠绿车靠桥栏，骑手坐岸边把电池放野餐垫上当充电宝给平板充电。
- **光线**：午后 14:00 明亮，郁金香季色彩。
- **叙事**：奶油胎壁+复古皮件 = 生活方式美学；"骑行到公园，电池变电站"的第三空间叙事。
- **Prompt**：
```
Amsterdam canal spring afternoon, bright cheerful light, a lime-green step-through ebike (Aurora Step-Through, exact same matte lime frame, cream sidewall tires, chrome handlebars, brown leather grips, mid-drive motor) leaning on a canal bridge railing, rider sitting on a picnic blanket charging a tablet with the detached battery module, tulips in foreground, photorealistic, fresh colors, no text
```

### 13. Aurora Step-Through 香槟（低跨城市车）
- **场景**：瑞士苏黎世湖畔傍晚，香槟金车停在湖边长椅旁，骑手轻装慢跑归来取车。
- **光线**：傍晚 18:30 金色侧光，湖面波光。
- **叙事**：内变花鼓+液压碟刹 = 免维护高端城市车；电池快拆 → 湖畔小憩后直接带走电源。
- **Prompt**：
```
Zurich lake promenade evening, golden hour, a champagne-beige step-through ebike (Aurora Step-Through, exact same matte champagne frame, GRAN PRIX tires, deep rims, internal gear hub, hydraulic disc brakes, mid-drive motor) parked beside a lakeside bench, jogger returning to pick up the bike with the detached battery in hand, lake glistening, photorealistic, elegant mood, no text
```

### 14. Aurora Comfort E（鼠尾草绿低跨 + SUNTOUR 前叉）
- **场景**：德国弗莱堡黑森林入口周日清晨，退休夫妇各骑一辆绿车慢行，后货架带野餐篮。
- **光线**：早晨 8:30 树林散射光。
- **叙事**：舒适几何 + 前避震 + 全链罩 = 老年/银发骑行市场；电池可拆 → 家中无障碍充电。
- **Prompt**：
```
Freiburg Black Forest entrance Sunday morning, soft forest light, a sage-green comfort step-through ebike (Aurora Comfort E, exact same sage frame, SR SUNTOUR suspension fork, SCHWALBE ENERGIZER PLUS tires, full chainguard, SELLE ROYAL saddle, rear rack with picnic basket, mid-drive motor) ridden by a senior couple, gentle pace, trees and hiking trail background, photorealistic, peaceful, no text
```

### 15. Zenith Step-Through（银灰+铜饰条）
- **场景**：斯德哥尔摩老城石板路雨后傍晚，银车停靠，骑手在面包店门口，车身铜色饰条反光。
- **光线**：雨后 17:00 湿润反光，青灰色调。
- **叙事**：银+铜 = 北欧高级感设计语言；碟刹+货架 = 城市轻旅行；车电分离 → 进店购物电池随身。
- **Prompt**：
```
Stockholm Gamla Stan cobblestone street after rain, cool grey light with wet reflections, a silver step-through ebike with copper accents (Zenith Step-Through, exact same silver frame with copper stripe, disc brakes, rear rack, suspension fork, mid-drive motor) parked outside a bakery, rider walking out holding the detached battery, wet cobblestones reflecting, photorealistic, nordic mood, no text
```

### 16. Aurora Urban（银灰低跨 + 焦糖胎壁）
- **场景**：首尔汉江公园黄昏，银车停江边，骑手把电池插上便携音箱播放音乐，江对岸城市天际线。
- **光线**：黄昏 19:00 蓝调时刻+城市灯亮起。
- **叙事**：焦糖胎壁+深盆轮 = 复古潮流定位；"电池=户外电源"的生活方式场景，直击年轻都市客群。
- **Prompt**：
```
Seoul Han River park at blue hour, city lights beginning to glow, a silver step-through ebike (Aurora Urban, exact same silver frame, SUNTOUR suspension fork, deep-dish black rims with gum sidewall tires, hydraulic disc brakes, rear rack, mid-drive motor) parked on the riverbank, rider sitting beside it powering a portable speaker from the detached battery module, skyline across the river, photorealistic, cinematic dusk, no text
```

---

## 三、网站集成方案

### 3.1 页面落位

| 车型 | 页面 | 区块 | 用途 |
| :--- | :--- | :--- | :--- |
| #1 Bamboo Flute | `/solutions/ebike` | Hero 区（新增"Featured: Folding"） | 旗舰折叠车，突出"可上飞机" |
| #2 Meteor Beach Cruiser | `/solutions/applications` | "Leisure & Coastal" 卡 | 场景化细分 |
| #3/#4 Meteor City S1 | `/solutions/ebike` | "City Series" 轮播（两色并置） | 色系选择展示 |
| #5 Qiulong Cargo | `/solutions/applications` | "Family & Cargo" 卡 | 家庭出行 |
| #6 Glacier Fat-Trek | `/solutions/applications` | "All-Terrain" 卡 | 雪地/越野 |
| #7/#8 Meteor City L1 | `/solutions/ebike` | "European City L1" 轮播 | 欧规通勤 |
| #9/#10 Zenith Tourer | `/solutions/applications` | "Long-Distance Touring" 卡 + `/insights` | 长途旅行 |
| #11-16 Aurora 系列 | `/solutions/ebike` | "Aurora Step-Through Series" 网格（6 图） | 低跨城市车矩阵 |

**新增板块建议**（两个方案选一）：
- **方案 A（推荐，改动小）**：在 `/solutions/applications` 现有 3 卡布局下新增 **"Real-World Rides"** 场景画廊板块（16 图网格，每图 hover 显示场景名）。
- **方案 B（改动大）**：新建独立路由 `/solutions/real-world-rides`，按"通勤/休闲/货运/越野/旅行/城市"六类组织，每类 2-4 图 + 场景文案段落。

### 3.2 图片规格

| 用途 | 尺寸 | 比例 | 格式 |
| :--- | :--- | :--- | :--- |
| Hero 横幅 | 1600 × 900 | 16:9 | WebP（≤300KB） |
| 场景画廊卡 | 1200 × 800 | 3:2 | WebP（≤250KB） |
| 轮播/网格缩略 | 800 × 600 | 4:3 | WebP（≤120KB） |
| 文章内插图 | 1200 × 800 | 3:2 | WebP |

> 生成源图建议 2K（阿里 imageGenerate 支持），再用 imageHighDefinition 放大，最后经 Astro `astro:assets` 自动输出多尺寸 WebP。

### 3.3 SEO ALT 文案（含目标关键词）

| 车型 | ALT 文案（示例，可参数化） |
| :--- | :--- |
| #1 | `Folding ebike with mid-drive motor carried into metro – Bamboo Flute by Geektion` |
| #2 | `Fat tire beach ebike riding on sand – Meteor Beach Cruiser coastal ride` |
| #3 | `27.5 city ebike commuting in London – Meteor City S1 mid-drive ebike` |
| #4 | `Forest green city ebike on Copenhagen bicycle highway – Geektion city ebike` |
| #5 | `Long tail cargo ebike carrying family – Qiulong Cargo for family mobility` |
| #6 | `Fat tire ebike on snow trail – Glacier Fat-Trek all-season ebike` |
| #7 | `28 inch European city ebike at dusk – Meteor City L1 mid-drive ebike` |
| #8 | `Mustard yellow city ebike with detachable battery power bank – Geektion E-Drive` |
| #9 | `700c touring ebike with panniers on coastal road – Zenith Tourer long distance` |
| #10 | `Silver touring ebike on Shimanami Kaido bridge – Zenith Tourer S travel ebike` |
| #11 | `Step-through city ebike parked at home – Aurora, lightweight mid-drive ebike` |
| #12 | `Lime step-through ebike charging tablet with battery – Aurora ebike power bank` |
| #13 | `Champagne step-through ebike by lake – Aurora premium city ebike` |
| #14 | `Comfort step-through ebike with suspension – Aurora Comfort E senior friendly` |
| #15 | `Silver copper step-through ebike in Stockholm old town – Zenith urban ebike` |
| #16 | `Silver ebike with gum tires at Seoul river park – Aurora Urban ebike lifestyle` |

**ALT 通用公式**：`[车型特征] + [场景动作] + [系列名] by Geektion`，前部自然嵌入关键词（folding ebike / cargo ebike / fat tire ebike / touring ebike / step-through ebike / mid-drive ebike）。

---

## 四、执行前置事项（供后续任务参考）

1. **图片净化**：16 张图仍残留右下角"豆包AI生成"水印、左下角页码、胎壁品牌字样（KENDA/KOULINCE/ZOOM/SR SUNTOUR/SCHWALBE/SELLE ROYAL/GRAN PRIX/BOSCH 等）——需先经阿里 `imageOptimize` 清除，再进入 `imageGenerate` 场景化。
2. **授权依赖**：阿里图像工具需连接器切换为卖家账号（当前令牌仍绑定 js**@winboard.cn，报 -32003）。
3. **批量策略**：每条场景 prompt 已内置"exact same frame/color/wheel"保真约束；生成后逐图 read 校验主体保真度，不合格重试。
4. **落地页联动**：场景图与 `/insights` 文章（折叠车选购、内转子技术、航天级电池、电机重量对比）互链，形成"场景→技术→转化"闭环。
