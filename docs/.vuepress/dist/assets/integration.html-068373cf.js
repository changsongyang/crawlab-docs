import{_ as a,Z as n,$ as s,a4 as e}from"./framework-64cb0dab.js";const t={},o=e(`<h1 id="spider-integration" tabindex="-1"><a class="header-anchor" href="#spider-integration" aria-hidden="true">#</a> Spider Integration</h1><p>You can integrate your spiders with Crawlab SDK. This allows you to view scraped results visually on Crawlab.</p><p>Crawlab SDK supports integration with various web crawler frameworks including Scrapy, and programming languages including Python, Node.js, Go.</p><div class="hint-container tip"><p class="hint-container-title">NOTE</p><p>By default, Crawlab SDK is installed in the base image of Crawlab. You can also install it manually if you are not using Crawlab Docker image.</p></div><h2 id="scrapy" tabindex="-1"><a class="header-anchor" href="#scrapy" aria-hidden="true">#</a> Scrapy</h2><ol><li>Make sure you have created a Scrapy spider on Crawlab.</li><li>Add <code>crawlab.CrawlabPipeline</code> to <code>Item_PIPELINES</code> in <code>settings.py</code> file.<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ITEM_PIPELINES <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;crawlab.CrawlabPipeline&#39;</span><span class="token punctuation">:</span> <span class="token number">888</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>That&#39;s it! You can now run your spider on Crawlab.</li></ol><h2 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h2><ol><li>Make sure you have created a Python spider on Crawlab.</li><li>Add package import line to import method <code>save_item</code> to your spider code.<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> crawlab <span class="token keyword">import</span> save_item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>Call <code>save_item</code> method to save scraped item.<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>save_item<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;example&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;url&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;https://example.com&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h2><ol><li>Make sure you have created a Node.js spider on Crawlab.</li><li>Add package import line to import method <code>saveItem</code> to your spider code.<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> saveItem <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;crawlab-sdk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>Call <code>saveItem</code> method to save scraped item.<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">saveItem</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;example&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://example.com&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h2><ol><li>Make sure you have created a Go spider on Crawlab.</li><li>Add package import line to import method <code>SaveItem</code> to your spider code.<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/crawlab-team/crawlab-sdk-go&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>Call <code>SaveItem</code> method to save scraped item.<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>crawlab<span class="token punctuation">.</span><span class="token function">SaveItem</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
    <span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;example&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,12),i=[o];function p(l,c){return n(),s("div",null,i)}const d=a(t,[["render",p],["__file","integration.html.vue"]]);export{d as default};
