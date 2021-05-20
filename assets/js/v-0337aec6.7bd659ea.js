(self.webpackChunksite=self.webpackChunksite||[]).push([[5403],{3672:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-0337aec6",path:"/guide/basic/page.html",title:"页面配置",lang:"zh-CN",frontmatter:{title:"页面配置",order:9},excerpt:"",headers:[{level:2,title:"页面标题",slug:"页面标题",children:[]},{level:2,title:"页面滚动",slug:"页面滚动",children:[]},{level:2,title:"页面埋点",slug:"页面埋点",children:[]}],filePathRelative:"guide/basic/page.md",git:{updatedTime:1621514056e3,contributors:[]}}},2998:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>o});var p=a(6252);const t=(0,p.uE)('<p>框架为页面级组件提供了一些特殊的配置项，让页面级组件可以快速拥有一些能力。</p><h2 id="页面标题"><a class="header-anchor" href="#页面标题">#</a> 页面标题</h2><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// src/pages/Home/index.tsx</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Head <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ice&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Head</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello Home</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Head</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Home</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="页面滚动"><a class="header-anchor" href="#页面滚动">#</a> 页面滚动</h2><p><code>scrollToTop</code>：用于渲染页面前是否需要将当前页面滚动至顶部，这个配置用于嵌套路由的应用场景。</p><blockquote><p>Type: Boolean (default: false)</p></blockquote><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">const</span> <span class="token function-variable function">HomePage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token comment">// jsx code...</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nHomePage<span class="token punctuation">.</span>pageConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  scrollToTop<span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="页面埋点"><a class="header-anchor" href="#页面埋点">#</a> 页面埋点</h2>',8),e=(0,p.Uk)("参考 "),l=(0,p.Uk)("页面埋点"),c=(0,p.Uk)("。"),o={render:function(n,s){const a=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("p",null,[e,(0,p.Wm)(a,{to:"/docs/guide/advance/statistical.html"},{default:(0,p.w5)((()=>[l])),_:1}),c])],64)}}}}]);