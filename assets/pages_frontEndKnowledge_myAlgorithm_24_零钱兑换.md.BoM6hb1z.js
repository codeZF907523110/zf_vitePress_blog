import{_ as n,c as a,aQ as l,o as p}from"./chunks/framework.D3lXAOHM.js";const i=JSON.parse('{"title":"零钱兑换","description":"","frontmatter":{},"headers":[],"relativePath":"pages/frontEndKnowledge/myAlgorithm/24_零钱兑换.md","filePath":"pages/frontEndKnowledge/myAlgorithm/24_零钱兑换.md","lastUpdated":1744461726000}'),o={name:"pages/frontEndKnowledge/myAlgorithm/24_零钱兑换.md"};function e(D,s,t,r,c,y){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="零钱兑换" tabindex="-1">零钱兑换 <a class="header-anchor" href="#零钱兑换" aria-label="Permalink to &quot;零钱兑换&quot;">​</a></h1><blockquote><p>力扣id: 322 <a href="https://leetcode.cn/problems/coin-change/description/" target="_blank" rel="noreferrer">零钱兑换</a></p></blockquote><blockquote><p>题目：</p><p>给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。你可以认为每种硬币的数量是无限的。</p></blockquote><blockquote><p>示例：</p><blockquote><p>输入：coins = [1, 2, 5], amount = 11</p><p>输出：3</p><p>解释：11 = 5 + 5 + 1</p></blockquote></blockquote><blockquote><p>思路：</p><ul><li>相当于爬楼梯，每次只能爬指定的台阶</li><li>定义状态：dp[i] 表示凑成金额 i 所需的最少硬币数量。</li><li>初始状态：dp[0] = 0，因为凑成金额 0 所需的硬币数量为 0。</li><li>状态转移方程：对于每一个金额 i，遍历所有硬币面额 coin，如果 i &gt;= coin，则 dp[i] = min(dp[i], dp[i - coin] + 1)。</li><li>最终结果：dp[amount] 即为所求，若 dp[amount] 仍为初始值（通常设为无穷大），说明无法凑成该金额，返回 -1。</li></ul></blockquote><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#DCDCAA;"> coinChange</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">coins</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">amount</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> dp</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#DCDCAA;"> Array</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">amount</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">).</span><span style="color:#DCDCAA;">fill</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">amount</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#9CDCFE;">    dp</span><span style="color:#D4D4D4;">[</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">] = </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"><span style="color:#C586C0;">    for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">let</span><span style="color:#9CDCFE;"> i</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">++) {</span></span>
<span class="line"><span style="color:#C586C0;">        for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">let</span><span style="color:#9CDCFE;"> j</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#9CDCFE;">coins</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">++) {</span></span>
<span class="line"><span style="color:#C586C0;">            if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">coins</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">] &gt; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">continue</span></span>
<span class="line"><span style="color:#9CDCFE;">            dp</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">] = </span><span style="color:#9CDCFE;">Math</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">min</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">], </span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> - </span><span style="color:#9CDCFE;">coins</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">j</span><span style="color:#D4D4D4;">]] + </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#C586C0;">    return</span><span style="color:#9CDCFE;"> dp</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;"> - </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">] &gt; </span><span style="color:#9CDCFE;">amount</span><span style="color:#D4D4D4;"> ? -</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;"> : </span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;"> - </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,6)]))}const d=n(o,[["render",e]]);export{i as __pageData,d as default};
