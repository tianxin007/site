(self.webpackChunksite=self.webpackChunksite||[]).push([[7432],{2235:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-b6769572",path:"/material/basic/start.html",title:"快速开发物料",lang:"zh-CN",frontmatter:{title:"快速开发物料",order:1},excerpt:"",headers:[{level:2,title:"安装工具",slug:"安装工具",children:[]},{level:2,title:"初始化物料项目",slug:"初始化物料项目",children:[]},{level:2,title:"单个物料开发",slug:"单个物料开发",children:[]},{level:2,title:"物料数据生成",slug:"物料数据生成",children:[]},{level:2,title:"物料数据发布与使用",slug:"物料数据发布与使用",children:[]}],filePathRelative:"material/basic/start.md",git:{updatedTime:1621514056e3,contributors:[]}}},8713:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>l});const e=(0,a(6252).uE)('<h2 id="安装工具"><a class="header-anchor" href="#安装工具">#</a> 安装工具</h2><p>全局安装 iceworks：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> iceworks -g\n\n<span class="token comment"># 检查是否安装成功</span>\n$ iceworks -V\n<span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">3.1</span>.0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="初始化物料项目"><a class="header-anchor" href="#初始化物料项目">#</a> 初始化物料项目</h2><p>创建空目录然后初始化：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> my-material <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> my-material\n$ iceworks init\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>根据提示，在项目根目录安装依赖后，即可进入开发。初始化的目录结构如下所示，默认会生成一个区块和组件：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>├── blocks\n│      └── ExampleBlock\n├── components\n│      └── ExampleComponent\n├── README.md\n└── package.json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="单个物料开发"><a class="header-anchor" href="#单个物料开发">#</a> 单个物料开发</h2><p>以区块开发为例，假设我们需要开发一个 ProfileCard 区块用于展示用户信息，我们在项目根目录执行命令：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ iceworks <span class="token function">add</span>\n<span class="token comment"># 或者</span>\n$ iceworks <span class="token function">add</span> block\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>填写信息之后，会在 blocks/ 目录下生成 ProfileCard 目录及初始代码，根据提示执行以下命令即可开始开发：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> blocks/ProfileCard\n$ <span class="token function">npm</span> <span class="token function">install</span>\n$ <span class="token function">npm</span> start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>物料开发完成后，即可通过 npm 发布。</p><h2 id="物料数据生成"><a class="header-anchor" href="#物料数据生成">#</a> 物料数据生成</h2><p><strong>将每个物料发布到 npm 之后</strong>，我们即可生成物料集合数据，在根目录下执行以下命令：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ iceworks generate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>会生成 <code>build/materials.json</code> 文件，这个文件描述了整个物料集合的元数据。</p><h2 id="物料数据发布与使用"><a class="header-anchor" href="#物料数据发布与使用">#</a> 物料数据发布与使用</h2><p>接着我们可以通过 <code>iceworks sync</code> 方式将物料数据同步到物料中心，你也可以通过私有的服务托管，同步完成后我们会得到一个 url 可以访问到这些物料数据。</p><p>接着在 iceworks VS Code 插件中添加自定义物料填入 URL 即可在开发项目中使用这些物料。</p>',21),l={render:function(s,n){return e}}}}]);