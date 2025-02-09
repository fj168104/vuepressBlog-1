module.exports = {
	title: '个人主页',
	description: 'Personal Website',
	head: [ // 注入到当前页面的 HTML <head> 中的标签
		['link', {rel: 'icon', href: '/images/photo.jpg'}],
		['link', {rel: 'manifest', href: '/images/photo.jpg'}],
		['link', {rel: 'apple-touch-icon', href: '/images/photo.jpg'}],
		['meta', {'http-quiv': 'pragma', cotent: 'no-cache'}],
		['meta', {'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
		['meta', {'http-quiv': 'expires', cotent: '0'}]
	],
	serviceWorker: true, // 是否开启 PWA
	base: '/', // 部署到github相关的配置
	markdown: {
		lineNumbers: true // 代码块是否显示行号
	},
	themeConfig: {
		nav: [ // 导航栏配置
			{text: '前端基础', link: '/accumulate/'},
			{text: '算法题库', link: '/algorithm/'},
			{text: '诗和远方', link: '/others/'},
			{text: '微博', link: 'https://baidu.com'},
			{text: '菜单4',
				items:[
					{text:'菜单4-1',link: '/accumulate/1.md'},
					{text:'菜单4-2',link: '/algorithm/'}
				]
			}
		],

		sidebar: {
			'/accumulate/': [
				{
					title: 'AAAAA',
					children: [
						'/accumulate/1.html',
						'/accumulate/2.html',
						'/accumulate/3.html'
					]
				}
			],
			'/algorithm/': [
				'/algorithm/',
				{
					title: '第二组侧边栏下拉框的标题1',
					children: [
						'/algorithm/'
					]
				}
			]
		},
		// sidebar: 'auto', // 侧边栏配置
		sidebarDepth: 1,

		themeConfig: {
			lastUpdated: 'Last Updated' // string | boolean
		}
	}
};
