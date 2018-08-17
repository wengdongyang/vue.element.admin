# vue.project.admin
  
## 目录结构 ##

    ├── build				// 构建相关
    ├── config				// 配置相关
    ├── src					// 源代码
    │   ├── api				// 所有请求
    │   ├── assets			// 主题 字体等静态资源
    │   ├── components		// 全局公用组件
    │   ├── directive		// 全局指令
    │   ├── filtres			// 全局 filter
    │   ├── icons			// 项目所有 svg icons
    │   ├── lang			// 国际化 language
    │   ├── mock			// 项目mock 模拟数据
    │   ├── router			// 路由
    │   ├── store			// 全局 store管理
    │   ├── styles			// 全局样式
    │   ├── utils			// 全局公用方法
    │   ├── vendor			// 公用vendor
    │   ├── views			// view
    │   ├── App.vue			// 入口页面
    │   ├── main.js			// 入口 加载组件 初始化等
    │   └── permission.js	// 权限管理
    ├── static				// 第三方不打包资源
    │   └── Tinymce			// 富文本
    ├── .babelrc			// babel-loader 配置
    ├── eslintrc.js			// eslint 配置项
    ├── .gitignore			// git 忽略项
    ├── favicon.ico			// favicon图标
    ├── index.html			// html模板
    └── package.json		// package.json

## api 和 views ##

推荐议根据业务模块来划分 views，并且 将views 和 api 两个模块一一对应，从而方便维护。

	├── view				├── api	
	│	│					│
	│   ├── article			│   ├── article.js
    │   │	└── ...			│			
    │   ├── audit			│   ├── audit.js
    │   │	└── ...			│
	│   ├── canendar		│   ├── canendar.js
    │   │	└── ...			

## components ##

这里的 components 放置的都是全局公用的一些组件，如上传组件，富文本等等。一些页面级的组件建议还是放在各自views文件下，方便管理

	├── components			// components
    │   ├── form			// form组件
	│	│   ├── form		// 组件
	│	│   └── ...			// ...
	│   ├── table			// table组件
	│	│   ├── table		// 组件
	│	│   └── ...			// ...

## store ##
	
	├── store				// store
    │   ├── form			// form组件
	│	│   ├── form		// 组件
	│	│   └── ...			// ...
	│   ├── table			// table组件
	│	│   ├── table		// 组件
	│	│   └── ...			// ...

## alias ##

当项目逐渐变大之后，文件与文件直接的引用关系会很复杂，这时候就需要使用 **alias** 了

    resolve: {
  		alias: {
    		'~': resolve(__dirname, 'src')
  		}
	}

## ESLint ##

不管是多人合作还是个人项目，代码规范是很重要的。这样做不仅可以很大程度地避免基本语法错误，也保证了代码的可读性。这所谓工欲善其事，必先利其器，个人推荐 eslint+vscode 来写 vue，绝对有种飞一般的感觉。  

- 首先安装eslint插件  

- 安装并配置完成 ESLint 后，我们继续回到 VSCode 进行扩展设置，依次点击 文件 > 首选项 > 设置 打开 VSCode 配置文件,添加如下配置  

    	"files.autoSave":"off",
    	"eslint.validate": [
       		"javascript",
       		"javascriptreact",
       		"html",
       		{ "language": "vue", "autoFix": true }
 		],
 		"eslint.options": {
        	"plugins": ["html"]
     	}

这样每次保存的时候就可以根据根目录下.eslintrc.js你配置的eslint规则来检查和做一些简单的fix。这里提供了一份我平时的[eslint规则地址](https://github.com/PanJiaChen/vue-element-admin/blob/master/.eslintrc.js)，都简单写上了注释。每个人和团队都有自己的代码规范，统一就好了，去打造一份属于自己的eslint 规则上传到npm吧，如[饿了么团队的config](https://www.npmjs.com/package/eslint-config-elemefe)，[vue的config](https://github.com/vuejs/eslint-config-vue)。

## 封装 axios ##

我们经常遇到一些线上 的bug，但测试环境很难模拟。其实可以通过简单的配置就可以在本地调试线上环境。这里结合业务封装了axios：

    import axios from 'axios'
    import { Message } from 'element-ui'
    import store from '@/store'
    import { getToken } from '@/utils/auth'
	
    // 创建axios实例
    const service = axios.create({
      baseURL: process.env.BASE_API, // api的base_url
      timeout: 5000 // 请求超时时间
    })
	
    // request拦截器
    service.interceptors.request.use(config => {
      // Do something before request is sent
      if (store.getters.token) {
        config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
      }
      return config
    }, error => {
      // Do something with request error
      console.log(error) // for debug
      Promise.reject(error)
    })
	
    // respone拦截器
    service.interceptors.response.use(
      response => response,
      /**
       * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
       * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
       */
      //  const res = response.data;
      // if (res.code !== 20000) {
      //   Message({
      // message: res.message,
      // type: 'error',
      // duration: 5 * 1000
      //   });
      //   // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      // MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
      //   confirmButtonText: '重新登录',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // }).then(() => {
      //   store.dispatch('FedLogOut').then(() => {
      // location.reload();// 为了重新实例化vue-router对象 避免bug
      //   });
      // })
      //   }
      //   return Promise.reject('error');
      // } else {
      //   return response.data;
      // }
      error => {
    	console.log('err' + error)// for debug
    	Message({
          message: error.message,
          type: 'error',
          duration: 5 * 1000
        })
      return Promise.reject(error)
    })
	
    export default service

    import request from '@/utils/request'

----------

    //使用
    export function getInfo(params) {
      return request({
        url: '/user/info',
        method: 'get',
        params
      });
    }

比如后台项目，每一个请求都是要带 token 来验证权限的，这样封装以下的话我们就不用每个请求都手动来塞 token，或者来做一些统一的异常处理，一劳永逸。而且因为我们的 api 是根据 env 环境变量动态切换的，如果以后线上出现了bug，我们只需配置一下 @/config/dev.env.js 再重启一下服务，就能在本地模拟线上的环境了。

    module.exports = {
      NODE_ENV: '"development"',
      BASE_API: '"https://api-dev"', //修改为'"https://api-prod"'就行了
      APP_ORIGIN: '"https://wallstreetcn.com"' //为公司打个广告 pc站为vue+ssr
    }

## 多环境 ##

vue-cli 默认只提供了dev和prod两种环境。但其实正真的开发流程可能还会多一个sit或者stage环境，就是所谓的测试环境和预发布环境。所以我们就要简单的修改一下代码。其实很简单就是设置不同的环境变量

    "build:prod": "NODE_ENV=production node build/build.js",
    "build:sit": "NODE_ENV=sit node build/build.js",

之后在代码里自行判断，想干就干啥

    var env = process.env.NODE_ENV === 'production' ? config.build.prodEnv : config.build.sitEnv

新版的 vue-cli 也内置了 webpack-bundle-analyzer 一个模块分析的东西，相当的好用。使用方法也很简单，和之前一样封装一个 npm script 就可以。


    //package.json
     "build:sit-preview": "cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js"
    
    //之后通过process.env.npm_config_report来判断是否来启用webpack-bundle-analyzer
    
    var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())

webpack-bundle-analyzer这个插件还是很有用的，对后期的代码优化什么的，最重要的是它够装逼~

## 跨域问题 ##

首先前后端交互不可避免的就会遇到跨域问题，我司现在全是用 **cors** 来解决的，如果你司后端嫌麻烦不肯配置的话，dev环境也可以通过 
**webpack-dev-server** 的 **proxy** 来解决，开发环境用nginx反代理一下就好了，具体配置这里就不展开了。

## 前端自行mock ##

如果后端不肯来帮你 mock 数据的话，前端自己来 mock 也是很简单的。你可以使用mock server 或者使用 [mockjs](https://github.com/badoo/MockJS) + [rap](https://github.com/thx/RAP) 也是很方便的。 不久前出的 [easy-mock](https://easy-mock.com/) 也相当的不错，还能结合 swagger。

## router-view ##

different router the same component vue。真实的业务场景中，这种情况很多。比如

    {path:'create',component:PostCreate,name:'发布文章'}，
	{path:'edit/:id(\\d+)',component:PostCreate,name:'编辑文章'}

我创建和编辑的页面使用的是同一个component,默认情况下当这两个页面切换时并不会触发vue的created或者mounted钩子，官方说你可以通过watch $route的变化来做处理，但其实说真的还是蛮麻烦的。后来发现其实可以简单的在 router-view上加上一个唯一的key，来保证路由切换时都会重新渲染触发钩子了。这样简单的多了。

    <router-view :key="key"></router-view>

	computed: {
      key() {
        return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
      }
 	}





