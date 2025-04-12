import{_ as n,c as a,aQ as l,o as p}from"./chunks/framework.D3lXAOHM.js";const C=JSON.parse('{"title":"回文串","description":"","frontmatter":{},"headers":[],"relativePath":"pages/frontEndKnowledge/myAlgorithm/29_回文串.md","filePath":"pages/frontEndKnowledge/myAlgorithm/29_回文串.md","lastUpdated":1744461726000}'),o={name:"pages/frontEndKnowledge/myAlgorithm/29_回文串.md"};function e(r,s,t,D,c,i){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="回文串" tabindex="-1">回文串 <a class="header-anchor" href="#回文串" aria-label="Permalink to &quot;回文串&quot;">​</a></h1><h2 id="回文子串" tabindex="-1">回文子串 <a class="header-anchor" href="#回文子串" aria-label="Permalink to &quot;回文子串&quot;">​</a></h2><blockquote><p>力扣id=647 <a href="https://leetcode.cn/problems/palindromic-substrings/submissions/606674349/" target="_blank" rel="noreferrer">回文串</a></p></blockquote><blockquote><p>题目：</p><p>给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。回文字符串 是正着读和倒过来读一样的字符串。子字符串 是字符串中的由连续字符组成的一个序列。</p></blockquote><blockquote><p>思路：</p><ul><li>for循环遍历数组，判断数组为奇数和偶数的情况，分别用双指针和单指针判断是否为回文串</li><li>偶数：双指针，一个指针指向当前字符，一个指针指向当前字符的下一个字符，判断是否为回文串</li><li>奇数：单指针，指向当前字符，判断是否为回文串</li></ul></blockquote><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> countSubstrings</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#569CD6;">    let</span><span style="color:#9CDCFE;"> num</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#DCDCAA;"> count</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">        while</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">] === </span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">] &amp;&amp; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> &gt;= </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;"> &amp;&amp; </span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;">            num</span><span style="color:#D4D4D4;">++</span></span>
<span class="line"><span style="color:#9CDCFE;">            i</span><span style="color:#D4D4D4;">--</span></span>
<span class="line"><span style="color:#9CDCFE;">            j</span><span style="color:#D4D4D4;">++</span></span>
<span class="line"><span style="color:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">    for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">let</span><span style="color:#9CDCFE;"> i</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#9CDCFE;">s</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">++) {</span></span>
<span class="line"><span style="color:#DCDCAA;">        count</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#DCDCAA;">        count</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#9CDCFE;"> num</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,6)]))}const b=n(o,[["render",e]]);export{C as __pageData,b as default};
