import { ProjectItem, AwardItem, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  nameZh: '杨玮馨',
  nameEn: 'Vincy Yeo Wey Xin',
  displayTitle: 'Vincy Yeo (杨玮馨)',
  heroTaglineZh: '同济大学影视艺术硕士 · 3D创作者 · 分镜师 · 视听全流程导演',
  heroTaglineEn: 'Tongji MFA · 3D Creator & Pre-vis Artist · Storyboarder · Full-Pipeline Director',
  bioZh: '精通从选题策划、分镜绘制（40+页高精度分镜）、3D镜头预演到现场灯光调度与后期合成的全流程制作。马来西亚籍跨文化视角，三语工作能力，致力于以手绘分镜与3D数字技术赋能电影感叙事。',
  bioEn: 'Specializing in end-to-end audiovisual creation: narrative scripting, 40+ pages hand-drawn storyboards, 3D pre-visualization, Arri lighting schemes, and VFX compositing. Native Southeast Asian perspective with UK dual-degree training.',
  locationZh: '中国上海 · 马来西亚吉隆坡',
  locationEn: 'Shanghai, China · Kuala Lumpur, Malaysia',
  languages: ['普通话 (Native)', 'English (Fluent / Academic)', '粤语 (Fluent)', 'Bahasa Melayu (Professional)'],
  contacts: {
    email1: 'vincyyyyo@qq.com',
    email2: 'yeovincy0428@alumni.tongji.edu.cn',
    phone: '+86 19821980535',
    wechat: 'yeoweyxin02',
    bilibili: 'https://space.bilibili.com/3546560457607191',
    baiduPan: 'https://pan.baidu.com/s/1MSL0e8f5dWiSs9AX_w29Eg?pwd=dr8n',
    baiduPwd: 'dr8n'
  },
  stats: [
    { labelZh: '独立与主导影视作品', labelEn: 'Film & Media Works', value: '10+' },
    { labelZh: '单片手绘分镜页数', labelEn: 'Hand-drawn Storyboard Pages', value: '40+' },
    { labelZh: '单片机位镜头规划', labelEn: 'Camera Setups Planned', value: '50+' },
    { labelZh: '国际影展奖项', labelEn: 'International Film Awards', value: '3+' },
  ]
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'unforgettable-18',
    title: '《Unforgettable 18》',
    titleEn: 'Unforgettable 18 (18岁未忘)',
    type: 'Narrative Film',
    typeZh: '剧情短片',
    year: '2021 - 2022',
    roles: ['导演 (Director)', '执行制片 (Executive Producer)', '分镜绘制 (Storyboard Artist)', '编剧 (Scriptwriter)', '后期调色 (Colorist)'],
    bilibiliUrl: 'https://www.bilibili.com/video/BV1YJNneEEqd/?share_source=copy_web&vd_source=9b983d808deefe41dacd93e4d871c323',
    bilibiliBvid: 'BV1YJNneEEqd',
    summary: '获奖院线级剧情短片。讲述女主角 Rachel 在母亲 Carolyn 房中意外发现被封存已久的领养证明，经历内心身份危机与撕扯，最终在一叠修补的旧照片与拍立得中体会爱与和解。',
    storyboardPagesCount: 42,
    cameraSetupsCount: 58,
    awards: [
      '🏆 NITIIN 国际电影节 2022 —— 最佳马来西亚短片 (Best Malaysian Short Film Winner)',
      '🎨 NITIIN 国际电影节 2022 —— 最佳海报奖 (Best Poster Winner)',
      '🌟 新加坡世界电影嘉年华 —— 学生电影评审团特别奖 (World Film Carnival Singapore Critics’ Choice Award)'
    ],
    highlights: [
      '手绘 40+ 页高精度 Storyboard 与现场 Shootboard，严谨标定 50+ 镜头的景别 (CU/MCU/OTS/Bird Eye)、机位角度与走位',
      '精确把控 Arri 650W/1K 钨丝灯与 LED 色温组光比，建立客厅、走廊与卧房的清冷与暖调情绪转换',
      '全权统筹演员排期、通告单管控、道具（领养证明书、拍立得撕拉片相纸、旧照片框架）'
    ],
    equipment: ['Arri Tungsten Lights', 'LED Bi-Color Panels', 'Cinema Camera Setup', 'CamScanner Pre-vis', 'Wacom Storyboard'],
    palette: ['#2B2A27', '#8C3827', '#E0BC75', '#EFE9DF'],
    coverAccent: '#C8523B',
    targetRoles: ['director', '3d-storyboard'],
    directorStatement: '“分镜不仅是摄影指南，更是角色的心理心电图。从俯拍桌上残破的领养纸张，到特写母亲手足无措的眼泪，每一个运镜都为角色的情绪呼吸服务。”',
    storyboardPreview: [
      {
        id: 'uf-sc1',
        act: 'ACT I',
        sceneNo: 'Scene 1',
        shotNo: 'Shot 1 - 3',
        time: '2:45pm - 3:00pm',
        location: 'Living room / Kitchen',
        camera: 'LS -> MFS -> MS',
        props: 'cutleries, food dishes',
        talents: 'Rachel & Carolyn',
        wardrobe: 'Outfit 1 (Day)',
        description: '公寓远景确立镜头(Establishing shot)。Rachel 与 Carolyn 在餐桌共进午餐欢笑交谈，随后转移到厨房洗碗。Rachel 不经意问起自己的出生地，Carolyn 瞬间神色迟疑，借故离席。',
        sketchNote: '高角度俯瞰公寓建筑，自然光从窗侧切入；切入厨房过肩镜头 (OTS)。',
        panelDoodleType: 'condo'
      },
      {
        id: 'uf-sc2',
        act: 'ACT I',
        sceneNo: 'Scene 2',
        shotNo: 'Shot 7 - 10',
        time: '6:00pm - 6:45pm',
        location: "Carolyn's bedroom",
        camera: 'LS -> CU -> MCU/MS',
        props: 'open carton box, adoption legal documents',
        talents: 'Rachel',
        wardrobe: 'Outfit 1 (Day)',
        description: 'Rachel 打扫母亲房间，意外在开封的纸箱中瞥见厚重档案。拾起翻阅，文件赫然写着“ADOPTION / IDENTIFICATION - Mary Wong”。Rachel 瞳孔紧缩，遭遇强烈的身份认同坍塌。',
        sketchNote: '特写手指抚过档案标题字迹；随后切大仰角特写 Rachel 苍白面容。',
        panelDoodleType: 'adoption-box'
      },
      {
        id: 'uf-sc3',
        act: 'ACT I',
        sceneNo: 'Scene 3',
        shotNo: 'Shot 11 - 12',
        time: '8:45pm - 9:15pm',
        location: "Rachel's room",
        camera: 'OTS - MCU -> MS',
        props: 'adoption documents, desk lamp',
        talents: 'Rachel',
        wardrobe: 'Outfit 1 (Night)',
        description: '深夜台灯昏黄光圈下，Rachel 独坐在书桌前反复默读文件。她抱膝蜷缩在冰冷的地板墙角：“My life has been a lie...”。',
        sketchNote: '台灯单点光源打出高对比度剪影，孤独阴影投射在侧墙。',
        panelDoodleType: 'lamp'
      },
      {
        id: 'uf-sc8',
        act: 'ACT II',
        sceneNo: 'Scene 8',
        shotNo: 'Shot 35 - 38',
        time: '1:15pm - 4:15pm',
        location: 'Dining room',
        camera: 'MCU -> 2 Shot MFS -> CU',
        props: 'food, phone, adoption papers',
        talents: 'Rachel & Carolyn',
        wardrobe: 'Outfit 4 (Day)',
        description: '正面情绪大爆发。Rachel 当面对质养母隐瞒身份的事实。在极度委屈与愤怒中，双手将领养文件当场撕碎两半！Carolyn 瘫坐在椅子上掩面痛哭。',
        sketchNote: '特写撕裂纸张的双手纤维断裂细节；双人全景强化桌子两端不可逾越的隔阂。',
        panelDoodleType: 'confrontation'
      },
      {
        id: 'uf-sc10',
        act: 'ACT III',
        sceneNo: 'Scene 10',
        shotNo: 'Shot 44 - 46',
        time: '10:15pm - 10:45pm',
        location: "Carolyn's bedroom",
        camera: 'MCU -> MFS',
        props: 'mobile phone text, bed',
        talents: 'Rachel & Carolyn',
        wardrobe: 'Outfit 3 (Night)',
        description: '夜深，读完母亲发自肺腑的道歉短信后，Rachel 冲入母亲房中。看见坐在床沿流泪的 Carolyn，两人紧紧相拥。',
        sketchNote: '柔和逆光勾勒发丝轮廓，双人拥抱景别收束，重归温情。',
        panelDoodleType: 'hug'
      },
      {
        id: 'uf-sc11',
        act: 'ACT III',
        sceneNo: 'Scene 11',
        shotNo: 'Shot 54 - 58',
        time: '10:15am - 11:45am',
        location: 'Dining room',
        camera: 'MFS -> CU of Polaroids',
        props: 're-taped adoption paper, Instax camera, picture frame',
        talents: 'Rachel & Carolyn',
        wardrobe: 'Outfit 5 (Day)',
        description: '数日后，Rachel 递给 Carolyn 一个纸袋：里面是用胶带重新拼贴完整的领养证书、一台拍立得相机和一个相框。两人开心自拍，画面淡出定格在桌上的合影拍立得照片上。',
        sketchNote: '大特写定格在桌面上交叠的相框与胶带修补的证书，象征裂痕被爱弥合。',
        panelDoodleType: 'polaroid'
      }
    ]
  },
  {
    id: 'im-on-my-way',
    title: '《I\'m on my way》',
    titleEn: 'I\'m on My Way (逐光旅程)',
    type: 'Animation & VFX',
    typeZh: '动画与合成',
    year: '2021 - 2022',
    roles: ['导演 (Director)', '3D与视觉特效合成 (3D & VFX Compositor)', '角色设定 (Character Designer)', '分镜设计 (Storyboard)'],
    bilibiliUrl: 'https://www.bilibili.com/video/BV1UwLy6CEux/?share_source=copy_web&vd_source=9b983d808deefe41dacd93e4d871c323',
    bilibiliBvid: 'BV1UwLy6CEux',
    summary: '真人绿幕与二维/三维视觉特效合成短片。主角 Vincy 给妈妈通完电话后，被神秘黑影追逐坠入维度之门。在绝境中伙伴 Mei 现身格挡，双色挂坠爆发能量！包含角色立绘设计、3D空间跟踪、粒子光效与动漫热血分镜。',
    storyboardPagesCount: 18,
    cameraSetupsCount: 36,
    awards: ['影视动画与合成专业高分毕业创作 / 学术优秀展映作品'],
    highlights: [
      '完整设计 Vincy 与 Mei 的二次元人设立绘（红黑色系 vs 黄黑色系动漫战服、手套细节与发型）',
      '从无实物绿幕动作拍摄到 3D 摄像机空间反求，合成闪电落雷、暗黑法球与烈焰充能粒子特效',
      '分镜详细规划镜头运镜：Dolly follow 跟踪运镜、MTS 转身过肩、落地雷霆重拳慢放与消散灰烬'
    ],
    equipment: ['Green Screen Studio', 'Camera Stabilizer & Dolly', 'After Effects VFX Suite', '3D Camera Tracker', 'Photoshop Character Sheet'],
    palette: ['#E63946', '#F1FAEE', '#A8DADC', '#1D3557'],
    coverAccent: '#D49A3D',
    targetRoles: ['3d-storyboard', 'ai-content', 'director'],
    directorStatement: '“把动漫分镜的爆发力通过 3D 合成技术注入真人实拍中。每一帧的光剑粒子与挂坠光芒，都是虚实融合的视听探索。”',
    storyboardPreview: [
      {
        id: 'iomw-1',
        act: 'ACT I',
        sceneNo: 'Scene 1',
        shotNo: 'Shot 1 - 5',
        location: 'Corridor & Dimensional Door',
        camera: 'Tracking -> MS -> Dolly Follow',
        props: 'Smartphone, Red pendant',
        talents: 'Vincy',
        description: 'Vincy 一边通话（“I will be home soon, mom”），一边察觉身后被黑影追踪。狂奔至一扇异界之门，推门而入发现跌落超现实暗黑异空间。',
        sketchNote: '手绘速写表现急促脚步动线；手持相机高速后退推拉。',
        panelDoodleType: 'vfx-portal'
      },
      {
        id: 'iomw-2',
        act: 'ACT II',
        sceneNo: 'Scene 2',
        shotNo: 'Shot 6 - 12',
        location: 'Void Arena',
        camera: 'Over-the-shoulder -> Two Shot MFS',
        props: 'Yellow pendant, Light burst',
        talents: 'Vincy, Mei, Dark Side',
        description: '暗黑化身步步紧逼夺取红色吊坠。千钧一发之际，身佩黄色吊坠的 Mei 瞬移现身格挡！Mei 挥出雷霆重拳将黑影击退，自身亦受暗黑光球反噬负伤。',
        sketchNote: '分镜草图详注雷光粒子落点与打击感顿挫帧。',
        panelDoodleType: 'anime-fight'
      },
      {
        id: 'iomw-3',
        act: 'ACT III',
        sceneNo: 'Scene 3',
        shotNo: 'Shot 13 - 17',
        location: 'Dimension Exit',
        camera: 'MCU -> LS on Tripod',
        props: 'Both pendants, Phone',
        talents: 'Vincy',
        description: 'Mei 在化作光之尘埃前将黄色吊坠交托给 Vincy。Vincy 双手握紧两枚吊坠，从异界之门走出。日光洒下，手机再次响起：“I am on my way.”',
        sketchNote: '晨光微熹，低角度仰拍走出大门的孤独背影与坚毅眼神。',
        panelDoodleType: 'character-sheet'
      }
    ]
  },
  {
    id: 'eyes-on-me',
    title: '《Eyes on Me》',
    titleEn: 'Eyes on Me (注视之时)',
    type: 'Documentary',
    typeZh: '纪录片',
    year: '2022',
    roles: ['制片人 (Producer)', '摄影指导 (Cinematographer)', '剪辑师 (Editor)'],
    bilibiliUrl: 'https://www.bilibili.com/video/BV1eJNneEEAj/?share_source=copy_web&vd_source=9b983d808deefe41dacd93e4d871c323',
    bilibiliBvid: 'BV1eJNneEEAj',
    summary: '主创团队 5 人深入生活肌理拍摄的纪实观察短片。摒弃繁琐人造光源，运用手持摄影机与环境自然光，真挚细腻地捕捉人物内心的脆弱、渴望与情感共鸣。',
    storyboardPagesCount: 15,
    cameraSetupsCount: 28,
    awards: ['马来西亚泰莱大学数字媒体优秀纪录片展播', '真实电影感镜头语言特别表彰'],
    highlights: [
      '轻量化机动拍摄方案：手持稳定与自然光线调动，营造呼吸感的电影纪实语调',
      '非侵入式声音收录，以环境声场和呼吸停顿营造直击人心的声画张力',
      '主导后期剪辑，精准修剪受访者眼神流转与微表情之间的叙事停顿'
    ],
    equipment: ['Mirrorless Cinema Rig', 'Handheld Gimbal', 'Natural Light Reflector', 'Sennheiser Wireless Mics'],
    palette: ['#33415C', '#5C677D', '#979DAC', '#001219'],
    coverAccent: '#2C3E55',
    targetRoles: ['director', 'ai-content'],
    directorStatement: '“真正的摄影不仅是看见，更是感受。在摇晃的镜头与柔和的窗影里，每个被拍摄者的灵魂都在无声诉说。”',
    storyboardPreview: [
      {
        id: 'eom-1',
        act: 'Scene 1',
        sceneNo: 'Observational',
        shotNo: 'Shot 1 - 4',
        location: 'Natural Light Room',
        camera: 'Handheld MCU -> Extreme CU',
        description: '自然窗光斜射入室，镜头紧随主角面部光影微调。不经意的眨眼与沉默，烘托出直击心灵的情绪流动。',
        panelDoodleType: 'lamp'
      }
    ]
  },
  {
    id: 'my-pets-haven',
    title: '《My Pets Haven》',
    titleEn: 'My Pets Haven (流浪庇护所)',
    type: 'Documentary',
    typeZh: '公益纪录片',
    year: '2021 - 2022',
    roles: ['项目统筹 (Project Coordinator)', '外联制片 (External Liaison)', '现场制片 (Producer)'],
    bilibiliUrl: 'https://www.bilibili.com/video/BV1Z7Gy6QEvQ/?share_source=copy_web&vd_source=9b983d808deefe41dacd93e4d871c323',
    bilibiliBvid: 'BV1Z7Gy6QEvQ',
    summary: '聚焦马来西亚民间流浪动物庇护所的公益纪实短片。杨玮馨自主提案获选并组建摄制团队，克服多语言沟通与场地异味等挑战，全程跟拍庇护所创办人与毛孩子们相互依偎的生命故事。',
    storyboardPagesCount: 16,
    cameraSetupsCount: 32,
    awards: ['泰莱大学社会责任与媒体传播创新奖 (Social Impact Media Award)'],
    highlights: [
      '自主选题提案入选并全权组建跨职能学生制作组，完成从零到一的公益落地',
      '独立攻克与马来西亚非营利组织的深度外联协议，保障多机位实地取景安全',
      '低角度追踪萌宠视角，融合温情旁白呼吁公众领养代替购买'
    ],
    equipment: ['Broadcast Tripod', 'Wireless Lavalier Kit', 'Color Calibrated Monitors', 'Multi-Angle Handheld'],
    palette: ['#6B705C', '#A5A58D', '#B7B7A4', '#DDBEA9'],
    coverAccent: '#4E6B56',
    targetRoles: ['director', 'ai-content'],
    directorStatement: '“镜头可以照亮那些无声角落里的温柔守护者。公益影像的价值，在于唤醒社会最柔软的同理心。”',
    storyboardPreview: [
      {
        id: 'mph-1',
        act: 'Field Doc',
        sceneNo: 'Shelter Story',
        shotNo: 'Shot 1 - 6',
        location: 'Pet Haven Shelter',
        camera: 'Low Angle Tracking -> Close-up Paws',
        description: '贴地镜头捕捉狗狗奔向创办人的欢快步伐，穿插义工清洗犬舍的日常汗水，用真实笔触记录无私大爱。',
        panelDoodleType: 'polaroid'
      }
    ]
  }
];

export const AWARDS: AwardItem[] = [
  {
    id: 'award-nitiin-short',
    title: '最佳马来西亚短片 (Winner)',
    titleEn: 'Best Malaysian Short Film',
    festival: 'NITIIN 国际电影节 (NITIIN International Film Festival)',
    festivalEn: 'NITIIN International Film Festival Malaysia',
    year: '2022',
    badge: 'WINNER',
    category: '《Unforgettable 18》 导演作品',
    description: 'NITIIN 国际电影节马来西亚赛区最高荣誉奖项，表彰在叙事深度、剧作结构与视听语言上的杰出水准。',
    certificateType: 'nitiin-film'
  },
  {
    id: 'award-nitiin-poster',
    title: '最佳海报设计奖 (Winner)',
    titleEn: 'Best Poster / Short Film',
    festival: 'NITIIN 国际电影节 (NITIIN International Film Festival)',
    festivalEn: 'NITIIN International Film Festival Malaysia',
    year: '2022',
    badge: 'WINNER',
    category: '《Unforgettable 18》 视觉设计',
    description: '以手绘折痕质感与礼物盒剪影暗喻领养秘密的经典海报，斩获国际影展官方最佳视觉海报大奖。',
    certificateType: 'nitiin-poster'
  },
  {
    id: 'award-singapore',
    title: '学生电影评审团特别奖 (Monthly Winner)',
    titleEn: 'Student Film (Critics\' Choice Award)',
    festival: '新加坡世界电影嘉年华 (World Film Carnival Singapore)',
    festivalEn: 'World Film Carnival - Singapore',
    year: '2022',
    badge: 'CRITICS\' CHOICE',
    category: '《Unforgettable 18》 导演',
    description: '由资深国际影评人组成的评委会一致认可，荣获新加坡世界电影嘉年华年度学生单元最佳评委推荐奖。',
    certificateType: 'singapore-carnival'
  },
  {
    id: 'award-tongji',
    title: '上海市政府 A 类全额奖学金',
    titleEn: 'Shanghai Government Type-A Full Scholarship',
    festival: '上海市教育委员会 & 同济大学',
    festivalEn: 'Tongji University & Shanghai Gov',
    year: '2023 - 2026',
    badge: 'SCHOLARSHIP',
    category: '同济大学广播电视艺术硕士 (MFA)',
    description: '面向全球顶尖研究生的最高等级政府奖学金资助，在校期间硕士 GPA 达 4.11 / 5.0。',
    certificateType: 'tongji-scholarship'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2025.06 – 2025.12',
    company: '亿咖通科技 (ECARX)',
    companyEn: 'ECARX Corporation',
    role: '企业文化与内容运营实习生 (Culture & Video Content Operations)',
    location: '上海 (Shanghai)',
    points: [
      '独立负责企业宣传及文化短视频全流程（脚本→拍摄→剪辑→包装），累计交付 10+ 条高品质企业短视频',
      '创新引入即梦 AI + After Effects 漫画风格素材批量生成，将传统三周周期缩短约 40%，实现标准流水线化',
      '主导设计制作《新人地图》视觉方案，覆盖 200+ 新入职员工，获集团管理层高分赞誉与标杆推广',
      '主导新马地区高校破冰对接，联络 14 所新马顶尖学府，促成校企战略合作备忘录通道'
    ]
  },
  {
    period: '2022.08 – 2022.12',
    company: 'AppAsiaStream',
    companyEn: 'AppAsiaStream Media',
    role: '海外制片实习生 (Overseas Production Intern)',
    location: '马来西亚 · 沙巴 & 吉隆坡 (Malaysia)',
    points: [
      '主导三菱汽车 (Mitsubishi) 品牌见证视频及 5 支商业 TVC 的全流程海外落地执行',
      '统筹马来西亚沙巴外景现场摄制：场记调度、外景道具调拨、演职人员排期及紧急协调',
      '搭建东南亚垂类 KOL 商务数据库，制定出海商业视觉出镜规范与分镜头脚本共创'
    ]
  },
  {
    period: '2023.12 – 2025.06',
    company: '同济大学飞盘社 (Tongji Ultimate Frisbee Club)',
    companyEn: 'Tongji Ultimate Frisbee Club',
    role: '宣传负责人 & 核心队员 (Promo Lead & Core Player)',
    location: '上海 (Shanghai)',
    points: [
      '打造社团新媒体视觉矩阵，发布 6 条短视频与 6 篇推文，全网曝光量破 9000+，交付率 100%',
      '作为主力队员高强度竞技协同，勇夺 2024 CUUA 全国高等院校飞盘赛上海预选赛第 1 名、全国总决赛季第 11 名'
    ]
  }
];

export const EDUCATION = [
  {
    period: '2023.09 – 2026.06',
    school: '同济大学 · 艺术与传媒学院',
    schoolEn: 'Tongji University · School of Arts and Media',
    degree: '广播电视 · 艺术硕士 (MFA)',
    degreeEn: 'Master of Fine Arts in Radio & Television',
    gpa: '4.11 / 5.0',
    honors: ['上海市政府 A 类全额奖学金', '主修 VR影像、交互设计、叙事研究、智能传播、影视节目策划']
  },
  {
    period: '2020.04 – 2023.06',
    school: '马来西亚泰莱大学 & 英国西英格兰大学 (双学士)',
    schoolEn: 'Taylor\'s University & University of the West of England (Dual Degree)',
    degree: '数字媒体制作 & 媒体与新闻学 (荣誉双学士)',
    degreeEn: 'BSc (Hons) in Digital Media Production & BA (Hons) Media & Journalism',
    gpa: '4.0 / 4.0 (First Class Honours)',
    honors: ['一等荣誉学士学位 (First Class Honours)', '全学期入选院长嘉许名单 (Dean\'s List)', 'SHINE Gold Award 最高荣誉']
  }
];

export const SKILL_STACK = {
  filmmaking: [
    'Storyboard / Shootboard (40+ pages)',
    '3D Scene Pre-visualization',
    'Arri Lighting & Grips',
    'Directing & Actor Coaching',
    'Cinematography & Framing',
    'Post Color Grading (Rec.709)',
    'Sound Design & Audio Track Mix'
  ],
  digitalTools: [
    'Three.js / WebGL 3D',
    'Adobe Premiere Pro',
    'Adobe After Effects',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Final Cut Pro',
    'Figma & UI Storyboards',
    'Canva & Jitter'
  ],
  aiAnd3d: [
    'Midjourney AI Pre-vis',
    '即梦 AI (Jimeng AI Video)',
    '3D Camera Matchmove',
    'Green Screen Keying & VFX',
    'DeepSeek & Prompt Scripting',
    'Claude Code / Web Development'
  ],
  languages: [
    'Mandarin (Native)',
    'English (IELTS 8.0 Level / UK Degree)',
    'Cantonese (Native Fluency)',
    'Bahasa Melayu (Fluent Working)'
  ]
};
