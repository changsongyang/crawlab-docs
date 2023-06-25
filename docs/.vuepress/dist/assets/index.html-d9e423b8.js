import{_ as s,E as r,Z as l,$ as d,a0 as e,a3 as t,a1 as n,a4 as o}from"./framework-64cb0dab.js";const c="/assets/data-sources-menu-bff4f430.png",i="/assets/new-data-source-button-d82fcfd4.png",u="/assets/mongo-form-6a7401f4.png",p="/assets/mongo-data-source-f5635164.png",h="/assets/results-f00c6458.png",_={},m=e("h1",{id:"data-sources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#data-sources","aria-hidden":"true"},"#"),t(" Data Sources")],-1),b=e("p",null,[e("a",{href:"../../pro"},"Crawlab Pro"),t(" supports data sources integration, which means you can use Crawlab Pro to manage your data sources, such as MongoDB, MySQL, PostgreSQL, SQL Server, etc.")],-1),g={href:"https://github.com/crawlab-team/crawlab",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"supported-data-sources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#supported-data-sources","aria-hidden":"true"},"#"),t(" Supported Data Sources")],-1),k=e("thead",null,[e("tr",null,[e("th",null,"Category"),e("th",null,"Data Source"),e("th",null,"Supported")])],-1),v=e("td",null,"Non-Relational",-1),S={href:"https://mongodb.com",target:"_blank",rel:"noopener noreferrer"},w=e("td",null,"✅",-1),y=e("td",null,"Non-Relational",-1),x={href:"https://elastic.co",target:"_blank",rel:"noopener noreferrer"},C=e("td",null,"✅",-1),D=e("td",null,"Relational",-1),E={href:"https://mysql.com",target:"_blank",rel:"noopener noreferrer"},N=e("td",null,"✅",-1),L=e("td",null,"Relational",-1),P={href:"https://postgresql.org/",target:"_blank",rel:"noopener noreferrer"},R=e("td",null,"✅",-1),B=e("td",null,"Relational",-1),q={href:"https://www.microsoft.com/en-us/sql-server/sql-server-downloads",target:"_blank",rel:"noopener noreferrer"},M=e("td",null,"✅",-1),Q=e("td",null,"Relational",-1),I={href:"https://www.cockroachlabs.com/",target:"_blank",rel:"noopener noreferrer"},T=e("td",null,"✅",-1),V=e("td",null,"Relational",-1),A={href:"https://www.sqlite.org",target:"_blank",rel:"noopener noreferrer"},G=e("td",null,"✅",-1),j=e("td",null,"Streaming",-1),K={href:"https://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"},U=e("td",null,"✅",-1),Z=o('<h2 id="add-data-source" tabindex="-1"><a class="header-anchor" href="#add-data-source" aria-hidden="true">#</a> Add Data Source</h2><ol><li>Go to the <code>Data Sources</code> page <br><img src="'+c+'" alt="data-sources-menu"></li><li>Click <code>New Data Source</code> button <br><img src="'+i+'" alt="new-data-source-button"></li><li>Select <code>Type</code> as the data source type, and enter <code>Name</code> and connection fields <br><img src="'+u+'" alt="mongo-form"></li><li>Click <code>Confirm</code> button to save the data source</li></ol><p>Now you should be able to see the data source in the <code>Data Sources</code> page.</p><h2 id="use-data-source" tabindex="-1"><a class="header-anchor" href="#use-data-source" aria-hidden="true">#</a> Use Data Source</h2><ol><li>Go to the <code>Spider Detail</code> page</li><li>Select the data source in the <code>Data Source</code> field <br><img src="'+p+'" alt="mongo-data-source"></li><li>Click on <code>Save</code> button to save the spider</li><li>Add related integration code in the code where saving results data (refer to the <code>Spider Code Examples</code> section below)</li><li>Run the spider, and you should see the results in the <code>Data</code> tab <br><img src="'+h+'" alt="results"></li></ol><h2 id="spider-code-examples" tabindex="-1"><a class="header-anchor" href="#spider-code-examples" aria-hidden="true">#</a> Spider Code Examples</h2><h3 id="general-python-spider" tabindex="-1"><a class="header-anchor" href="#general-python-spider" aria-hidden="true">#</a> General Python Spider</h3>',7),$=e("code",null,"save_item",-1),z={href:"https://pypi.org/project/crawlab-sdk/",target:"_blank",rel:"noopener noreferrer"},F=o(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
\`\`\`py
<span class="token keyword">from</span> crawlab <span class="token keyword">import</span> save_item

<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  save_item<span class="token punctuation">(</span>result_item<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scrapy-spider" tabindex="-1"><a class="header-anchor" href="#scrapy-spider" aria-hidden="true">#</a> Scrapy Spider</h3><p>Add <code>crawlab.CrawlabPipeline</code> to <code>settings.py</code>.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ITEM_PIPELINES <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;crawlab.CrawlabPipeline&#39;</span><span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function H(J,O){const a=r("ExternalLinkIcon");return l(),d("div",null,[m,b,e("p",null,[t("The "),e("a",g,[t("Community Edition"),n(a)]),t(" only supports storing results data to default MongoDB, which stores operational data of Crawlab.")]),f,e("table",null,[k,e("tbody",null,[e("tr",null,[v,e("td",null,[e("a",S,[t("MongoDB"),n(a)])]),w]),e("tr",null,[y,e("td",null,[e("a",x,[t("ElasticSearch"),n(a)])]),C]),e("tr",null,[D,e("td",null,[e("a",E,[t("MySQL"),n(a)])]),N]),e("tr",null,[L,e("td",null,[e("a",P,[t("PostgreSQL"),n(a)])]),R]),e("tr",null,[B,e("td",null,[e("a",q,[t("SQL Server"),n(a)])]),M]),e("tr",null,[Q,e("td",null,[e("a",I,[t("CockroachDB"),n(a)])]),T]),e("tr",null,[V,e("td",null,[e("a",A,[t("Sqlite"),n(a)])]),G]),e("tr",null,[j,e("td",null,[e("a",K,[t("Kafka"),n(a)])]),U])])]),Z,e("p",null,[t("The method "),$,t(" in "),e("a",z,[t("crawlab-sdk"),n(a)]),t(" can be used to save data to designated data source.")]),F])}const X=s(_,[["render",H],["__file","index.html.vue"]]);export{X as default};
