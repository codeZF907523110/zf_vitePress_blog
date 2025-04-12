import{_ as n,c as a,aQ as l,o as e}from"./chunks/framework.D3lXAOHM.js";const C=JSON.parse('{"title":"用 setTimeout 实现 setInterval","description":"","frontmatter":{},"headers":[],"relativePath":"pages/frontEndKnowledge/writtenQuestion/11_用setTimeout实现setInterval.md","filePath":"pages/frontEndKnowledge/writtenQuestion/11_用setTimeout实现setInterval.md","lastUpdated":1744461726000}'),p={name:"pages/frontEndKnowledge/writtenQuestion/11_用setTimeout实现setInterval.md"};function o(t,s,r,c,D,i){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="用-settimeout-实现-setinterval" tabindex="-1">用 setTimeout 实现 setInterval <a class="header-anchor" href="#用-settimeout-实现-setinterval" aria-label="Permalink to &quot;用 setTimeout 实现 setInterval&quot;">​</a></h1><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> mySetInterval</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">fn</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">delay</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#569CD6;">  let</span><span style="color:#9CDCFE;"> id</span></span>
<span class="line"><span style="color:#569CD6;">  const</span><span style="color:#DCDCAA;"> interval</span><span style="color:#D4D4D4;"> = () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    id</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">setTimeout</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">      fn</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#DCDCAA;">      interval</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    }, </span><span style="color:#9CDCFE;">delay</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#DCDCAA;">  interval</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#C586C0;">  return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">    clear</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#DCDCAA;"> clearTimeout</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 示例用法</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> intervalId</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">mySetInterval</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;This will run every 1000 milliseconds&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}, </span><span style="color:#B5CEA8;">1000</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// 如果你想在某个时刻停止这个定时器，可以调用 clear 方法</span></span>
<span class="line"><span style="color:#6A9955;">// 例如，5秒后停止定时器</span></span>
<span class="line"><span style="color:#DCDCAA;">setTimeout</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  intervalId</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">clear</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#9CDCFE;">  console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Interval cleared&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}, </span><span style="color:#B5CEA8;">5000</span><span style="color:#D4D4D4;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,2)]))}const b=n(p,[["render",o]]);export{C as __pageData,b as default};
