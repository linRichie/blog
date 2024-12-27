import{_ as l,c as o,a as n,b as a,d as e,e as p,f as i,r as c,o as u}from"./app-BCC5ysrj.js";const r={},d={class:"vuepress-toc"},k={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},m={class:"vuepress-toc-item"},g={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},f={class:"vuepress-toc-item"},y={class:"vuepress-toc-item"};function q(_,s){const t=c("router-link");return u(),o("div",null,[s[8]||(s[8]=n("h1",{id:"oop-面向对象-class",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#oop-面向对象-class"},[n("span",null,[a("OOP 面向对象："),n("code",null,"class")])])],-1)),n("nav",d,[n("ul",null,[n("li",k,[e(t,{to:"#什么是-class"},{default:p(()=>s[0]||(s[0]=[a("什么是 class")])),_:1}),n("ul",null,[n("li",v,[e(t,{to:"#类的定义"},{default:p(()=>s[1]||(s[1]=[a("类的定义")])),_:1})]),n("li",m,[e(t,{to:"#类的组成"},{default:p(()=>s[2]||(s[2]=[a("类的组成")])),_:1})])])]),n("li",g,[e(t,{to:"#创建对象"},{default:p(()=>s[3]||(s[3]=[a("创建对象")])),_:1})]),n("li",h,[e(t,{to:"#使用方法"},{default:p(()=>s[4]||(s[4]=[a("使用方法")])),_:1})]),n("li",b,[e(t,{to:"#继承"},{default:p(()=>s[5]||(s[5]=[a("继承")])),_:1})]),n("li",f,[e(t,{to:"#多态"},{default:p(()=>s[6]||(s[6]=[a("多态")])),_:1})]),n("li",y,[e(t,{to:"#应用场景"},{default:p(()=>s[7]||(s[7]=[a("应用场景")])),_:1})])])]),s[9]||(s[9]=i(`<p>在 Python 中，<code>class</code> 是面向对象编程（OOP）的核心概念之一。它提供了一种创建对象的方式，使得代码更具结构性和可重用性。本文将详细介绍 Python 中 <code>class</code> 的定义、用法及其应用场景。</p><h2 id="什么是-class" tabindex="-1"><a class="header-anchor" href="#什么是-class"><span>什么是 <code>class</code></span></a></h2><p><code>class</code> 是一种用于定义对象的蓝图或模板。它封装了数据（属性）和行为（方法），使得对象可以根据类的定义进行实例化。</p><h3 id="类的定义" tabindex="-1"><a class="header-anchor" href="#类的定义"><span>类的定义</span></a></h3><p>在 Python 中，使用 <code>class</code> 关键字定义类。类名通常使用大写字母开头的驼峰命名法。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;一个简单的狗类&quot;&quot;&quot;</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">sit</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token triple-quoted-string string">&quot;&quot;&quot;模拟小狗被命令时坐下&quot;&quot;&quot;</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> 坐下了。&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">roll_over</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token triple-quoted-string string">&quot;&quot;&quot;模拟小狗被命令时打滚&quot;&quot;&quot;</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> 打滚了。&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的组成" tabindex="-1"><a class="header-anchor" href="#类的组成"><span>类的组成</span></a></h3><ul><li><strong>属性</strong>：类中的变量，用于存储对象的状态。</li><li><strong>方法</strong>：类中的函数，用于定义对象的行为。</li><li><strong>构造���数</strong>：<code>__init__</code> 方法，用于初始化对象的属性。</li></ul><h2 id="创建对象" tabindex="-1"><a class="header-anchor" href="#创建对象"><span>创建对象</span></a></h2><p>对象是类的实例。通过调用类名并传递必要的参数，可以创建对象。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">my_dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&#39;旺财&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;我的狗的名字是 </span><span class="token interpolation"><span class="token punctuation">{</span>my_dog<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">，它今年 </span><span class="token interpolation"><span class="token punctuation">{</span>my_dog<span class="token punctuation">.</span>age<span class="token punctuation">}</span></span><span class="token string"> 岁。&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><p>可以通过对象调用类中定义的方法。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">my_dog<span class="token punctuation">.</span>sit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">my_dog<span class="token punctuation">.</span>roll_over<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h2><p>继承是 OOP 的一个重要特性，允许一个类从另一个类继承属性和方法。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GoldenRetriever</span><span class="token punctuation">(</span>Dog<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;金毛猎犬类，继承自 Dog 类&quot;&quot;&quot;</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">fetch</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token triple-quoted-string string">&quot;&quot;&quot;模拟金毛猎犬捡回物品&quot;&quot;&quot;</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> 捡回了物品。&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多态" tabindex="-1"><a class="header-anchor" href="#多态"><span>多态</span></a></h2><p>多态允许不同类的对象以相同的方式调用相同的方法。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">make_sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;喵喵&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">make_sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;汪汪&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">animal_sound</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    animal<span class="token punctuation">.</span>make_sound<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">cat <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">animal_sound<span class="token punctuation">(</span>cat<span class="token punctuation">)</span>  <span class="token comment"># 输出: 喵喵</span></span>
<span class="line">animal_sound<span class="token punctuation">(</span>dog<span class="token punctuation">)</span>  <span class="token comment"># 输出: 汪汪</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2><ul><li><strong>类</strong>：适用于需要封装数据和行为的场景，如游戏角色、银行账户。</li><li><strong>继承</strong>：适用于需要重用代码的场景，如创建不同种类的动物类。</li><li><strong>多态</strong>：适用于需要统一接口的场景，如处理不同类型的文件。</li></ul>`,22))])}const x=l(r,[["render",q],["__file","concept-oop-class.html.vue"]]),O=JSON.parse('{"path":"/fpython/library/concept/concept-oop-class.html","title":"OOP 面向对象：class","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"什么是 class","slug":"什么是-class","link":"#什么是-class","children":[{"level":3,"title":"类的定义","slug":"类的定义","link":"#类的定义","children":[]},{"level":3,"title":"类的组成","slug":"类的组成","link":"#类的组成","children":[]}]},{"level":2,"title":"创建对象","slug":"创建对象","link":"#创建对象","children":[]},{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"继承","slug":"继承","link":"#继承","children":[]},{"level":2,"title":"多态","slug":"多态","link":"#多态","children":[]},{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}],"git":{"updatedTime":1735029308000,"contributors":[{"name":"wanglinhao","username":"wanglinhao","email":"wanglinhao@wegooooo.com","commits":2}]},"filePathRelative":"fpython/library/concept/concept-oop-class.md"}');export{x as comp,O as data};