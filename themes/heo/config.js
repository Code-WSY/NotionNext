const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-07-22', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://blog.sylearn.cn' },
    { title: 'Jupyter', url: 'http://jupyter.sylearn.cn' },
    { title: 'AI', url: 'https://chat.sylearn.cn' },

  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: true,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'Sylearn',
  HEO_HERO_TITLE_2: '分享知识和笔记',
  HEO_HERO_TITLE_3: 'blog.sylearn.cn',
  HEO_HERO_TITLE_4: '欢迎访问',
  HEO_HERO_TITLE_5: '🎉 欢迎来到我的博客！',
  HEO_HERO_TITLE_LINK: 'https://blog.sylearn.cn',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '个人项目', url: '/tag/个人项目' },
  HEO_HERO_CATEGORY_2: { title: '知识笔记', url: '/tag/知识笔记' },
  HEO_HERO_CATEGORY_3: { title: '随笔杂谈', url: '/tag/随笔杂谈' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是 Sylearn',
    '🔍 分享与热心帮助',
    '🏃 脚踏实地行动派',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: 'https://www.zhihu.com/people/wang-su-yun-69',
  HEO_INFO_CARD_ICON1: 'fab fa-zhihu', 
  HEO_INFO_CARD_URL2: 'https://github.com/Code-WSY',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: '/about',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_2: 'AI',
      img_2: '/images/heo/AI.webp',
      color_2: '#42210d',
      title_1: 'Manchine Learning',
      img_1: '/images/heo/ML.webp',
      color_1: '#ffffff',
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/docker.webp',
      color_1: '#57b6e6',
      title_2: 'AIs',
      img_2: '/images/heo/AIs.webp',
      color_2: '#003666'
    },
    {
      title_1: 'jupyter',
      img_1: '/images/heo/jupyter.webp',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/python.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'vasp',
      img_1: '/images/heo/vasp.webp',
      color_1: '#eb6840',
      title_2: 'openai',
      img_2: '/images/heo/openai.webp',
      color_2: '#ffffff',
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/docker.webp',
      color_1: '#57b6e6',
      title_2: 'javascript',
      img_2: '/images/heo/javascript.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'jupyter',
      img_1: '/images/heo/jupyter.webp',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/python.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/git.webp',
      color_1: '#df5b40',
      title_2: 'linux',
      img_2: '/images/heo/linux.webp',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群(未上线)',
  HEO_SOCIAL_CARD_URL: 'https://blog.sylearn.cn',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
