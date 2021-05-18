(self.webpackChunksite=self.webpackChunksite||[]).push([[4963],{4079:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-02c7ef8e",path:"/material/basic/init.html",title:"物料初始化",lang:"zh-CN",frontmatter:{title:"物料初始化",order:1},excerpt:"",headers:[],filePathRelative:"material/basic/init.md",git:{updatedTime:1621352433e3,contributors:[]}}},5136:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>b});var e=a(6252);const t=(0,e.uE)('<p>通过 <code>iceworks init</code> 命令可以初始化一个物料项目：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 创建物料文件夹</span>\n$ <span class="token function">mkdir</span> my-materials <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> my-materials\n\n<span class="token comment"># 初始化物料项目</span>\n$ iceworks init\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',2),p=(0,e.Uk)("执行 init 命令后，默认创建完整的物料项目，如需独立开发业务组件，请参考"),l={href:"/docs/materials/reference/dev.md",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("《开发独立业务组件》"),o=(0,e.Uk)("。初始化完成后，在项目根目录 "),c=(0,e.Wm)("code",null,"package.json",-1),i=(0,e.Uk)(" 中，iceworks 会生成一个 "),u=(0,e.Wm)("code",null,"materialConfig",-1),m=(0,e.Uk)(" 字段，这个字段存储了一些当前物料的信息及配置："),k=(0,e.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;materialConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 字符串，指定当前物料的前端框架类型 eg: &#39;react&#39;, &#39;vue&#39;, &#39;angular&#39;，请勿随意更改</span>\n    <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@icedesign/ice-react-material-template&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 记录当前物料初始化时的物料模版，当添加物料时，将依赖这个值获取物料模版，请勿随意更改</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',1),b={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("p",null,[p,(0,e.Wm)("a",l,[r,(0,e.Wm)(a)]),o,c,i,u,m]),k],64)}}}}]);