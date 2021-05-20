(self.webpackChunksite=self.webpackChunksite||[]).push([[575],{8173:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-6369ec38",path:"/resource/front-env.html",title:"前端环境配置",lang:"zh-CN",frontmatter:{title:"前端环境配置"},excerpt:"",headers:[],filePathRelative:"resource/front-env.md",git:{updatedTime:1621514056e3,contributors:[]}}},2610:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>$});var e=a(6252);const p=(0,e.Uk)("首先需要安装 "),t={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("node"),l=(0,e.Uk)("，并确保 node 版本是 10.x 版本或以上。推荐使用 "),o={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("nvm"),i=(0,e.Uk)(" 来管理 node 版本，windows 用户可以参考 "),u={href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"},m=(0,e.Uk)("nvm-windows"),b=(0,e.Uk)(" 进行安装。下面以在 mac 下安装举例："),k=(0,e.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">curl</span> https://raw.githubusercontent.com/cnpm/nvm/master/install.sh <span class="token operator">|</span> <span class="token function">bash</span>\n\n<span class="token comment"># 增加以下内容到 ~/.bashrc 或者 ~/.zshrc</span>\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$HOME</span>/.nvm&quot;</span>\n<span class="token punctuation">[</span> -s <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>/nvm.sh&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>. <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>/nvm.sh&quot;</span>\n<span class="token punctuation">[</span> -s <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>/bash_completion&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>. <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>/bash_completion&quot;</span>\n\n<span class="token comment"># 使用 nvm 安装 node 的10.22.0版本</span>\n$ nvm <span class="token function">install</span> <span class="token number">10.22</span>.0\n\n<span class="token comment"># 使用 10.22.0 版本</span>\n$ nvm use <span class="token number">10.22</span>.0\n\n<span class="token comment"># 验证 node 是否安装成功</span>\n$ node -v\nv10.22.0\n$ <span class="token function">npm</span> -v\n<span class="token number">6.14</span>.6\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>在国内使用 npm 安装依赖可能会比较慢。建议使用国内镜像源进行加速：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> -g cnpm --registry<span class="token operator">=</span>https://registry.npm.taobao.org\n<span class="token comment"># 验证 cnpm 安装是否成功</span>\n$ cnpm -v\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>除了 npm，我们还可以使用 yarn 作为依赖管理工具：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> i <span class="token function">yarn</span> -g\n$ <span class="token function">yarn</span> -v\n<span class="token number">1.22</span>.5\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',5),d=(0,e.Uk)("如果经常需要切换 npm 镜像源，推荐使用 "),v={href:"https://github.com/Pana/nrm",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("nrm"),g=(0,e.Uk)(" 进行管理："),f=(0,e.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> -g nrm\n$ nrm <span class="token function">ls</span>\n$ nrm use taobao\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',1),$={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[(0,e.Wm)("p",null,[p,(0,e.Wm)("a",t,[r,(0,e.Wm)(a)]),l,(0,e.Wm)("a",o,[c,(0,e.Wm)(a)]),i,(0,e.Wm)("a",u,[m,(0,e.Wm)(a)]),b]),k,(0,e.Wm)("p",null,[d,(0,e.Wm)("a",v,[h,(0,e.Wm)(a)]),g]),f],64)}}}}]);