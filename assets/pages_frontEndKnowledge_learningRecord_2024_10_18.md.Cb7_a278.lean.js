import{_ as e,c as n,aQ as a,o as l}from"./chunks/framework.D3lXAOHM.js";const u=JSON.parse('{"title":"2024-10-18 问题笔记","description":"","frontmatter":{},"headers":[],"relativePath":"pages/frontEndKnowledge/learningRecord/2024_10_18.md","filePath":"pages/frontEndKnowledge/learningRecord/2024_10_18.md","lastUpdated":1744461726000}'),o={name:"pages/frontEndKnowledge/learningRecord/2024_10_18.md"};function t(p,s,c,r,i,d){return l(),n("div",null,s[0]||(s[0]=[a(`<h1 id="_2024-10-18-问题笔记" tabindex="-1">2024-10-18 问题笔记 <a class="header-anchor" href="#_2024-10-18-问题笔记" aria-label="Permalink to &quot;2024-10-18 问题笔记&quot;">​</a></h1><h2 id="一、js-获取和设置-css-变量" tabindex="-1">一、js 获取和设置 css 变量 <a class="header-anchor" href="#一、js-获取和设置-css-变量" aria-label="Permalink to &quot;一、js 获取和设置 css 变量&quot;">​</a></h2><ol><li>先在<code>:root</code>跟节点上设置一个<code>css</code>变量</li></ol><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  --fontSize</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">20px</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>使用 js 获取和设置 css 变量</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">//获取内联样式css变量</span></span>
<span class="line"><span style="color:#9CDCFE;">document</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">documentElement</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">style</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">getPropertyValue</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;--fontSize&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#6A9955;">// 获取任意位置的CSS变量</span></span>
<span class="line"><span style="color:#DCDCAA;">getComputedStyle</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">document</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">documentElement</span><span style="color:#D4D4D4;">).</span><span style="color:#DCDCAA;">getPropertyValue</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;--fontSize&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 设置css变量</span></span>
<span class="line"><span style="color:#9CDCFE;">document</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">body</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">style</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">setProperty</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;--fontSize&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;30px&#39;</span><span style="color:#D4D4D4;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3"><li>注意：</li></ol><ul><li><code>document.querySelector(&#39;:root&#39;) === document.documentElement</code></li><li><code> document.documentElement.style.getPropertyValue</code>只能获取内联样式的值，而且<code>document.documentElement.style.setProperty(&#39;--fontSize&#39;, &#39;30px&#39;);</code>方式设置 CSS 变量会添加到内联样式中去</li><li>如果 CSS 变量不是内联样式定义，<code>document.documentElement.style.getPropertyValue</code>就获取不到</li><li><code>getComputedStyle(document.documentElement).getPropertyValue</code>获取到的始终是实际的值</li></ul><h2 id="二、学习到的-css-属性-技巧" tabindex="-1">二、学习到的 css 属性+技巧 <a class="header-anchor" href="#二、学习到的-css-属性-技巧" aria-label="Permalink to &quot;二、学习到的 css 属性+技巧&quot;">​</a></h2><ol><li><h2 id="css文字描边" tabindex="-1"><code>css</code>文字描边： <a class="header-anchor" href="#css文字描边" aria-label="Permalink to &quot;\`css\`文字描边：&quot;">​</a></h2></li></ol><ul><li>文字描边： <ul><li><code>text-shadow</code>(文字阴影)</li><li><code>–webkit-text-stroke</code></li><li><code>svg</code></li><li>具体详情：<a href="https://blog.csdn.net/baidu_36511315/article/details/135433480" target="_blank" rel="noreferrer">文字描边</a></li></ul></li></ul>`,11)]))}const y=e(o,[["render",t]]);export{u as __pageData,y as default};
