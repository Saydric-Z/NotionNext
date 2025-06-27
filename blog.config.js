const BLOG = {
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',

  THEME: process.env.NEXT_PUBLIC_THEME || 'proxio',
  LANG: process.env.NEXT_PUBLIC_LANG || 'en-US',
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2025,

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5,
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'dark',
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6],

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Saydric Zheng',
  BIO: process.env.NEXT_PUBLIC_BIO || '',
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://SaydricZheng-Blog.com',
  KEYWORDS:
    process.env.NEXT_PUBLIC_KEYWORD ||
    'University of Waterloo, Computer Science, Personal Blog, SWE',
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '',
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/',

  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true,

  // 分模块配置加载
  ...require('./conf/comment.config'),       // 评论插件
  ...require('./conf/contact.config'),       // 联系方式
  ...require('./conf/post.config'),          // 文章相关
  ...require('./conf/analytics.config'),     // 统计
  ...require('./conf/image.config'),         // 图片
  ...require('./conf/font.config'),          // 字体
  ...require('./conf/right-click-menu'),     // 右键菜单
  ...require('./conf/code.config'),          // 代码样式
  ...require('./conf/animation.config'),     // 动效
  ...require('./conf/widget.config'),        // 悬浮挂件
  ...require('./conf/ad.config'),            // 广告
  ...require('./conf/plugin.config'),        // 插件

  // 高级配置
  ...require('./conf/layout-map.config'),
  ...require('./conf/notion.config'),
  ...require('./conf/dev.config'),

  CUSTOM_EXTERNAL_JS: [''],
  CUSTOM_EXTERNAL_CSS: [''],

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true,
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true,
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    "Hi，I'm Saydric Zheng. Welcome to my Blog !",

  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
