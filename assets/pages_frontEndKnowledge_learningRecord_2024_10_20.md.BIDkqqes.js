import{_ as a,c as n,aQ as l,o as e}from"./chunks/framework.D3lXAOHM.js";const b=JSON.parse('{"title":"2024-10-20 问题笔记","description":"","frontmatter":{},"headers":[],"relativePath":"pages/frontEndKnowledge/learningRecord/2024_10_20.md","filePath":"pages/frontEndKnowledge/learningRecord/2024_10_20.md","lastUpdated":1744461726000}'),o={name:"pages/frontEndKnowledge/learningRecord/2024_10_20.md"};function p(r,s,c,t,i,d){return e(),n("div",null,s[0]||(s[0]=[l(`<h1 id="_2024-10-20-问题笔记" tabindex="-1">2024-10-20 问题笔记 <a class="header-anchor" href="#_2024-10-20-问题笔记" aria-label="Permalink to &quot;2024-10-20 问题笔记&quot;">​</a></h1><h2 id="一、-css-用渐变背景实现下划线" tabindex="-1">一、 css 用渐变背景实现下划线 <a class="header-anchor" href="#一、-css-用渐变背景实现下划线" aria-label="Permalink to &quot;一、 css 用渐变背景实现下划线&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">.box</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  background</span><span style="color:#D4D4D4;">: </span><span style="color:#DCDCAA;">linear-gradient</span><span style="color:#D4D4D4;">(to </span><span style="color:#CE9178;">right</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">#0d00ff</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">#5ac554</span><span style="color:#D4D4D4;">) </span><span style="color:#CE9178;">no-repeat</span><span style="color:#D4D4D4;">; //设置渐变背景</span></span>
<span class="line"><span style="color:#9CDCFE;">  background-size</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0px</span><span style="color:#B5CEA8;"> 5px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  background-position</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">right</span><span style="color:#CE9178;"> bottom</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  transition</span><span style="color:#D4D4D4;">: background-size </span><span style="color:#B5CEA8;">1s</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;">// 鼠标移入改变background位置</span></span>
<span class="line"><span style="color:#D7BA7D;">.box:hover</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  background-position</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">left</span><span style="color:#CE9178;"> bottom</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  background-size</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">100%</span><span style="color:#B5CEA8;"> 2px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="二、-css-实现边框发光效果-box-shadow" tabindex="-1">二、 css 实现边框发光效果(box-shadow) <a class="header-anchor" href="#二、-css-实现边框发光效果-box-shadow" aria-label="Permalink to &quot;二、 css 实现边框发光效果(box-shadow)&quot;">​</a></h2><ol><li><code>box-shadow</code>属性用于为元素添加一个或多个下拉阴影效果。其基本语法如下：<div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#569CD6;">  box-shadow</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">horizontal-offset</span><span style="color:#569CD6;"> vertical-offset</span><span style="color:#569CD6;"> blur-radius</span><span style="color:#569CD6;"> spread-radius</span><span style="color:#D4D4D4;"> color;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p><code>horizontal-offset</code>：水平阴影的位置，正值表示向右偏移，负值表示向左偏移。</p></li><li><p><code>vertical-offset</code>：垂直阴影的位置，正值表示向下偏移，负值表示向上偏移。</p></li><li><p><code>blur-radius</code>：阴影的模糊半径，值越大阴影越模糊。</p></li><li><p><code>spread-radius</code>：阴影的扩展半径，正值表示阴影扩大，负值表示阴影缩小。</p></li><li><p><code>color</code>：阴影的颜色。‌</p></li><li><p>重要：<code>box-shadow</code>属性可以接受多个值，用于创建多层阴影效果。多个阴影之间用逗号分隔，按照从内到外的顺序依次应用</p></li><li><p>实例:</p></li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">  .box</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      box-shadow</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#B5CEA8;"> 0</span><span style="color:#B5CEA8;"> 10px</span><span style="color:#CE9178;"> #9affb0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#B5CEA8;">                  0</span><span style="color:#B5CEA8;"> 0</span><span style="color:#B5CEA8;"> 20px</span><span style="color:#CE9178;"> #cdffd7</span><span style="color:#D4D4D4;">, </span></span>
<span class="line"><span style="color:#B5CEA8;">                  0</span><span style="color:#B5CEA8;"> 0</span><span style="color:#B5CEA8;"> 30px</span><span style="color:#CE9178;"> #99ffaf</span><span style="color:#D4D4D4;">, </span></span>
<span class="line"><span style="color:#B5CEA8;">                  0</span><span style="color:#B5CEA8;"> 0</span><span style="color:#B5CEA8;"> 40px</span><span style="color:#CE9178;"> #9dffb2</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ol><h2 id="三、css指针事件-pointer-events" tabindex="-1">三、css指针事件(pointer-events) <a class="header-anchor" href="#三、css指针事件-pointer-events" aria-label="Permalink to &quot;三、css指针事件(pointer-events)&quot;">​</a></h2><ol><li>什么是<code>pointer-events</code><ul><li><code>pointer-events</code> 直译为指针事件，该属性指定在什么情况下某个DOM可以成为鼠标事件的 <code>target</code>。</li><li>简而言之，就是允许/禁止DOM的鼠标事件(click事件、hover事件、mouse事件等鼠标事件)</li></ul></li><li>具体属性： <ul><li>auto：默认值</li><li>none: 元素不再是鼠标事件的目标，鼠标不再监听当前层，而去监听下一层中的元素(这里的层指的是图层)。但是如果当前层的子元素设置了<code>pointer-events</code>为其它值，比如auto，鼠标还是会监听这个子元素的。</li></ul></li></ol>`,7)]))}const y=a(o,[["render",p]]);export{b as __pageData,y as default};
