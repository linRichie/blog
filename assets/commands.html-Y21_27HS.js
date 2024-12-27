import{_ as t,c as p,a as n,d as e,e as l,f as c,r,o,b as i}from"./app-BCC5ysrj.js";const d={},u={class:"vuepress-toc"},m={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},k={class:"vuepress-toc-item"},g={class:"vuepress-toc-item"},f={class:"vuepress-toc-item"},x={class:"vuepress-toc-item"},_={class:"vuepress-toc-item"},y={class:"vuepress-toc-item"};function w(O,s){const a=r("router-link");return o(),p("div",null,[s[10]||(s[10]=n("h1",{id:"常用-command",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#常用-command"},[n("span",null,"常用 Command")])],-1)),n("nav",u,[n("ul",null,[n("li",m,[e(a,{to:"#网络相关"},{default:l(()=>s[0]||(s[0]=[i("网络相关")])),_:1}),n("ul",null,[n("li",v,[e(a,{to:"#ip"},{default:l(()=>s[1]||(s[1]=[i("IP")])),_:1})]),n("li",h,[e(a,{to:"#带宽管理"},{default:l(()=>s[2]||(s[2]=[i("带宽管理")])),_:1})]),n("li",b,[e(a,{to:"#网卡配置"},{default:l(()=>s[3]||(s[3]=[i("网卡配置")])),_:1})]),n("li",k,[e(a,{to:"#网络诊断"},{default:l(()=>s[4]||(s[4]=[i("网络诊断")])),_:1})])])]),n("li",g,[e(a,{to:"#系统管理"},{default:l(()=>s[5]||(s[5]=[i("系统管理")])),_:1}),n("ul",null,[n("li",f,[e(a,{to:"#用户会话"},{default:l(()=>s[6]||(s[6]=[i("用户会话")])),_:1})]),n("li",x,[e(a,{to:"#进程管理"},{default:l(()=>s[7]||(s[7]=[i("进程管理")])),_:1})])])]),n("li",_,[e(a,{to:"#定时任务"},{default:l(()=>s[8]||(s[8]=[i("定时任务")])),_:1}),n("ul",null,[n("li",y,[e(a,{to:"#crontab-配置"},{default:l(()=>s[9]||(s[9]=[i("crontab 配置")])),_:1})])])])])]),s[11]||(s[11]=c(`<hr><h2 id="网络相关" tabindex="-1"><a class="header-anchor" href="#网络相关"><span>网络相关</span></a></h2><h3 id="ip" tabindex="-1"><a class="header-anchor" href="#ip"><span>IP</span></a></h3><h4 id="获取本地-ip" tabindex="-1"><a class="header-anchor" href="#获取本地-ip"><span>获取本地 IP</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 获取系统本地 IP 地址</span></span>
<span class="line"><span class="token function">ip</span> addr <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;state UP&quot;</span> <span class="token parameter variable">-A2</span> <span class="token operator">|</span> <span class="token function">grep</span> inet <span class="token operator">|</span> <span class="token function">egrep</span> <span class="token parameter variable">-v</span> <span class="token string">&#39;(127.0.0.1|inet6|docker)&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;addr:&quot;</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> / <span class="token parameter variable">-f1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="扫描网段" tabindex="-1"><a class="header-anchor" href="#扫描网段"><span>扫描网段</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查询某网段存活主机</span></span>
<span class="line">nmap <span class="token parameter variable">-nsP</span> <span class="token number">192.168</span>.50.0/24 <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;Nmap scan&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $5}&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带宽管理" tabindex="-1"><a class="header-anchor" href="#带宽管理"><span>带宽管理</span></a></h3><h4 id="查看带宽速度" tabindex="-1"><a class="header-anchor" href="#查看带宽速度"><span>查看带宽速度</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 实时监控网卡带宽</span></span>
<span class="line"><span class="token function">vmstat</span> <span class="token parameter variable">-i</span> eth0 <span class="token parameter variable">-l</span> </span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看带宽大小</span></span>
<span class="line"><span class="token function">ethtool</span> eth0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网卡配置" tabindex="-1"><a class="header-anchor" href="#网卡配置"><span>网卡配置</span></a></h3><h4 id="修改网卡名称" tabindex="-1"><a class="header-anchor" href="#修改网卡名称"><span>修改网卡名称</span></a></h4><p>主要配置文件：</p><ul><li>网卡配置：<code>/etc/sysconfig/network-scripts/ifcfg-ens160</code></li><li>系统引导：<code>/etc/default/grub</code></li></ul><ol><li><p><strong>修改网卡配置</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 重命名配置文件</span></span>
<span class="line"><span class="token function">mv</span> /etc/sysconfig/network-scripts/ifcfg-ens160 /etc/sysconfig/network-scripts/ifcfg-eth0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改配置内容</span></span>
<span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/NAME=ens160/NAME=eth0/&#39;</span> /etc/sysconfig/network-scripts/ifcfg-eth0</span>
<span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/DEVICE=ens160/DEVICE=eth0/&#39;</span> /etc/sysconfig/network-scripts/ifcfg-eth0</span>
<span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/BOOTPROTO=dhcp/BOOTPROTO=static/&#39;</span> /etc/sysconfig/network-scripts/ifcfg-eth0</span>
<span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/ONBOOT=no/ONBOOT=yes/&#39;</span> /etc/sysconfig/network-scripts/ifcfg-eth0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>修改系统引导</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 添加内核参数</span></span>
<span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/quiet/quiet net.ifnames=0 biosdevname=0/&#39;</span> /etc/default/grub</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新 GRUB 配置</span></span>
<span class="line">grub2-mkconfig <span class="token parameter variable">-o</span> /boot/grub2/grub.cfg</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>重启验证</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 删除旧连接</span></span>
<span class="line">nmcli conn show <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;NR == 2 {print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> nmcli conn delete</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启系统</span></span>
<span class="line"><span class="token function">reboot</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证配置</span></span>
<span class="line"><span class="token function">ifconfig</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="网络诊断" tabindex="-1"><a class="header-anchor" href="#网络诊断"><span>网络诊断</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 路由追踪</span></span>
<span class="line"><span class="token function">traceroute</span> ip地址</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 端口扫描</span></span>
<span class="line">nmap <span class="token parameter variable">-p</span> <span class="token number">1</span>-65535 ip地址</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统管理" tabindex="-1"><a class="header-anchor" href="#系统管理"><span>系统管理</span></a></h2><h3 id="用户会话" tabindex="-1"><a class="header-anchor" href="#用户会话"><span>用户会话</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看当前登录用户</span></span>
<span class="line"><span class="token function">who</span> am i</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看系统日志</span></span>
<span class="line">journalctl</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理"><span>进程管理</span></a></h3><h4 id="查看进程" tabindex="-1"><a class="header-anchor" href="#查看进程"><span>查看进程</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看所有进程</span></span>
<span class="line"><span class="token function">ps</span> <span class="token parameter variable">-aux</span></span>
<span class="line"><span class="token function">ps</span> <span class="token parameter variable">-ef</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查找特定进程</span></span>
<span class="line"><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> httpd</span>
<span class="line"><span class="token function">ps</span> <span class="token parameter variable">-aux</span> <span class="token operator">|</span> <span class="token function">grep</span> httpd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="终止进程" tabindex="-1"><a class="header-anchor" href="#终止进程"><span>终止进程</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 终止指定进程</span></span>
<span class="line"><span class="token function">kill</span> PID</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 强制终止</span></span>
<span class="line"><span class="token function">kill</span> <span class="token parameter variable">-9</span> PID</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务"><span>定时任务</span></a></h2><h3 id="crontab-配置" tabindex="-1"><a class="header-anchor" href="#crontab-配置"><span>crontab 配置</span></a></h3><h4 id="区别说明" tabindex="-1"><a class="header-anchor" href="#区别说明"><span>区别说明</span></a></h4><ul><li><code>crontab -e</code>：用户级定时任务</li><li><code>/etc/crontab</code>：系统级定时任务</li></ul><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 编辑当前用户的定时任务</span></span>
<span class="line"><span class="token function">crontab</span> <span class="token parameter variable">-e</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看定时任务</span></span>
<span class="line"><span class="token function">crontab</span> <span class="token parameter variable">-l</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除所有定时任务</span></span>
<span class="line"><span class="token function">crontab</span> <span class="token parameter variable">-r</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="服务管理" tabindex="-1"><a class="header-anchor" href="#服务管理"><span>服务管理</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 重启 crond 服务</span></span>
<span class="line">systemctl restart crond</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意：</strong></p><ul><li>定时任务的时间格式要准确</li><li>注意命令的绝对路径</li><li>重要任务要做好日志记录</li></ul></blockquote><hr><blockquote><p><strong>参考资料：</strong></p><ul><li><a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer">Linux 命令大全</a></li><li><a href="https://crontab.guru/" target="_blank" rel="noopener noreferrer">Crontab 教程</a></li></ul></blockquote>`,36))])}const q=t(d,[["render",w],["__file","commands.html.vue"]]),N=JSON.parse('{"path":"/flinux/Commands/commands.html","title":"常用 Command","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"网络相关","slug":"网络相关","link":"#网络相关","children":[{"level":3,"title":"IP","slug":"ip","link":"#ip","children":[]},{"level":3,"title":"带宽管理","slug":"带宽管理","link":"#带宽管理","children":[]},{"level":3,"title":"网卡配置","slug":"网卡配置","link":"#网卡配置","children":[]},{"level":3,"title":"网络诊断","slug":"网络诊断","link":"#网络诊断","children":[]}]},{"level":2,"title":"系统管理","slug":"系统管理","link":"#系统管理","children":[{"level":3,"title":"用户会话","slug":"用户会话","link":"#用户会话","children":[]},{"level":3,"title":"进程管理","slug":"进程管理","link":"#进程管理","children":[]}]},{"level":2,"title":"定时任务","slug":"定时任务","link":"#定时任务","children":[{"level":3,"title":"crontab 配置","slug":"crontab-配置","link":"#crontab-配置","children":[]}]}],"git":{"updatedTime":1701333900000,"contributors":[{"name":"wanglinhao","username":"wanglinhao","email":"wanglinhao@wegooooo.com","commits":2}]},"filePathRelative":"flinux/Commands/commands.md"}');export{q as comp,N as data};