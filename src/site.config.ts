import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  // === 基础配置 (Basic configuration) ===
  /** 网站标题。将用于元数据和浏览器标签页标题。 */
  title: '我的 Astro 纯净博客', // <-- 已修改为中文标题
  /** 将用于首页和版权声明 */
  author: '博客作者', // <-- 已修改为中文作者名
  /** 网站的描述元数据。 */
  description: '保持饥饿，保持愚蠢。这是一个简单、快速且强大的 Astro 主题。', // <-- 已修改为中文描述
  /** 网站的默认 favicon，路径应指向 `public/` 目录下的图片。 */
  favicon: '/favicon/favicon.ico',
  /** 网站的默认社交卡片图片，路径应指向 `public/` 目录下的图片。 */
  socialCard: '/images/social-card.png',
  /** 指定本站的默认语言。 */
  locale: {
    lang: 'zh-CN', // <-- 语言修改为中文简体
    attrs: 'zh_CN',
    // 日期语言环境
    dateLocale: 'zh-CN', // <-- 日期语言修改为中文
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  /** 设置在首页显示的 Logo 图片。 */
  logo: {
    src: '/src/assets/avatar.png',
    alt: '我的头像' // <-- 已修改
  },

  // === 全局配置 (Global configuration) ===
  titleDelimiter: '•',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  // 仍在测试中
  head: [
    /* Telegram channel */
    // {
    //   tag: 'meta',
    //   attrs: { name: 'telegram:channel', content: '@cworld0_cn' },
    //   content: ''
    // }
  ],
  customCss: [],

  /** 配置网站的顶部导航栏。 */
  header: {
    menu: [
      { title: '博客', link: '/blog' }, // <-- 已修改
      { title: '文档', link: '/docs' }, // <-- 已修改
      { title: '项目', link: '/projects' }, // <-- 已修改
      { title: '友链', link: '/links' }, // <-- 已修改
      { title: '关于', link: '/about' } // <-- 已修改
    ]
  },

  /** 配置网站的底部。 */
  footer: {
    // 年份格式
    year: `© ${new Date().getFullYear()}`,
    // year: `© 2019 - ${new Date().getFullYear()}`,
    links: [
      // 备案/注册链接
      {
        title: '萌 ICP 备 114514', // <-- 已修改
        link: 'https://icp.gov.moe/?keyword=114514',
        style: 'text-sm' // Uno/TW CSS class
      },
      {
        title: '开往', // <-- 已修改
        link: 'https://www.travellings.cn/go.html',
        style: 'text-sm'
      },
      // 隐私政策链接
      {
        title: '网站政策', // <-- 已修改
        link: '/terms/list',
        pos: 2 // position set to 2 will be appended to copyright line
      }
    ],
    /** 启用在网站底部显示 “Astro & Pure theme powered” 链接。 */
    credits: true,
    /** 可选的社交媒体账户详情。 */
    social: { github: 'https://github.com/cworld1/astro-theme-pure' }
  },

  content: {
    /** 外部链接配置 */
    externalLinks: {
      content: ' ↗', // 保持箭头符号
      /** 外部链接元素的属性 */
      properties: {
        style: 'user-select:none'
      }
    },
    /** 分页的博客页面大小 (可选) */
    blogPageSize: 8,
    // 当前支持 weibo, x, bluesky
    share: ['weibo', 'x', 'bluesky']
  }
}

export const integ: IntegrationUserConfig = {
  // 友链管理
  // See: https://astro-pure.js.org/docs/integrations/links
  links: {
    // 友链日志
    logbook: [
      { date: '2025-03-16', content: 'Is there a leakage?' },
      { date: '2025-03-16', content: 'A leakage of what?' },
      { date: '2025-03-16', content: 'I have a full seat of water, like, full of water!' },
      { date: '2025-03-16', content: 'Must be the water.' },
      { date: '2025-03-16', content: "Let's add that to the words of wisdom." }
    ],
    // 你的友链信息
    applyTip: [
      { name: '名称', val: theme.title }, // <-- 已修改
      { name: '描述', val: theme.description || '无' }, // <-- 已修改
      { name: '链接', val: 'https://astro-pure.js.org/' }, // <-- 已修改
      { name: '头像', val: 'https://astro-pure.js.org/favicon/favicon.ico' } // <-- 已修改
    ],
    // 在 `public/avatars/` 中缓存头像以改善用户体验。
    cacheAvatar: false
  },
  // 启用页面搜索功能
  pagefind: true,
  // 在底部添加随机名言 (默认在首页底部)
  // See: https://astro-pure.js.org/docs/integrations/advanced#web-content-render
  quote: {
    // Hitokoto
    // https://developer.hitokoto.cn/sentence/#%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80
    // server: 'https://v1.hitokoto.cn/?c=i',
    // target: `(data) => (data.hitokoto || 'Error')`
    // Quoteable API (down temporarily)
    // https://github.com/lukePeavey/quotable
    // server: 'https://api.quotable.io/quotes/random?maxLength=60',
    // target: `(data) => data[0].content || 'Error'`
    // DummyJSON
    server: 'https://dummyjson.com/quotes/random',
    target: `(data) => (data.quote.length > 80 ? \`\${data.quote.slice(0, 80)}...\` : data.quote || 'Error')`
  },
  // UnoCSS 排版
  // See: https://unocss.dev/presets/typography
  typography: {
    class: 'prose text-base',
    // blockquote 字体样式，normal 或 italic (默认 italic)
    blockquoteStyle: 'italic',
    // 行内代码块样式，code 或 modern (默认 code)
    inlineCodeBlockStyle: 'modern'
  },
  // 可以添加缩放效果的灯箱库
  // See: https://astro-pure.js.org/docs/integrations/others#medium-zoom
  mediumZoom: {
    enable: true, // 禁用它将不会加载整个库
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  // 评论系统
  waline: {
    enable: true,
    // 服务器服务链接
    server: 'https://astro-theme-pure-waline.arthals.ink/',
    // 参见 https://waline.js.org/en/guide/features/emoji.html
    emoji: ['bmoji', 'weibo'],
    // 参见 https://waline.js.org/en/reference/client/props.html
    additionalConfigs: {
      // search: false,
      pageview: true,
      comment: true,
      locale: {
        reaction0: '喜欢', // <-- 已修改
        placeholder: '欢迎评论。 (填写邮箱即可接收回复通知，无需登录)' // <-- 已修改
      },
      imageUploader: false
    }
  }
}

export const terms: CardListData = {
  title: '条款内容', // <-- 已修改
  list: [
    {
      title: '隐私政策', // <-- 已修改
      link: '/terms/privacy-policy'
    },
    {
      title: '条款与条件', // <-- 已修改
      link: '/terms/terms-and-conditions'
    },
    {
      title: '版权声明', // <-- 已修改
      link: '/terms/copyright'
    },
    {
      title: '免责声明', // <-- 已修改
      link: '/terms/disclaimer'
    }
  ]
}

const config = { ...theme, integ } as Config
export default config