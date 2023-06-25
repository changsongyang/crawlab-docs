import{_ as c,E as p,Z as l,$ as i,a0 as n,a3 as s,a1 as a,a4 as o}from"./framework-64cb0dab.js";const u={},r=n("h1",{id:"安装-docker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装-docker","aria-hidden":"true"},"#"),s(" 安装: Docker")],-1),k={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},d=n("h2",{id:"主流程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#主流程","aria-hidden":"true"},"#"),s(" 主流程")],-1),m=n("p",null,"Docker 部署有多种模式，不过其主流程是相似的。",-1),v={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"},g=n("li",null,"拉取 Crawlab Docker 镜像（如果没有 MongoDB，也需要拉取）",-1),_=n("li",null,[s("创建 "),n("code",null,"docker-compose.yml"),s(" 并进行配置")],-1),y=n("li",null,"启动 Docker 容器",-1),q=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,"在接下来的指南中，我们假设您已经安装了 Docker 和 Docker-Compose，并已经拉取了相应的 Docker 镜像。")],-1),h=n("h2",{id:"单节点部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#单节点部署","aria-hidden":"true"},"#"),s(" 单节点部署")],-1),A=o(`<p><strong>单节点部署（SND）</strong> 与 <a href="../quick-start">快速开始</a> 中的配置类似，它通常用作演示或少量爬虫管理。在 SND 中，所有 Docker 容器 ( 包括 Crawlab 和 MongoDB) 都在单独一台机器上，即主节点（如上图）。</p><p>创建 <code>docker-compose.yml</code> 并输入如下内容。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">master</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> crawlabteam/crawlab
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> crawlab_master
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">CRAWLAB_NODE_MASTER</span><span class="token punctuation">:</span> <span class="token string">&quot;Y&quot;</span>  <span class="token comment"># Y: 主节点</span>
      <span class="token key atrule">CRAWLAB_MONGO_HOST</span><span class="token punctuation">:</span> <span class="token string">&quot;mongo&quot;</span>  <span class="token comment"># mongo host address. 在 Docker-Compose 网络中，直接引用 service 名称</span>
      <span class="token key atrule">CRAWLAB_MONGO_PORT</span><span class="token punctuation">:</span> <span class="token string">&quot;27017&quot;</span>  <span class="token comment"># mongo port </span>
      <span class="token key atrule">CRAWLAB_MONGO_DB</span><span class="token punctuation">:</span> <span class="token string">&quot;crawlab&quot;</span>  <span class="token comment"># mongo database </span>
      <span class="token key atrule">CRAWLAB_MONGO_USERNAME</span><span class="token punctuation">:</span> <span class="token string">&quot;username&quot;</span>  <span class="token comment"># mongo username</span>
      <span class="token key atrule">CRAWLAB_MONGO_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span>  <span class="token comment"># mongo password </span>
      <span class="token key atrule">CRAWLAB_MONGO_AUTHSOURCE</span><span class="token punctuation">:</span> <span class="token string">&quot;admin&quot;</span>  <span class="token comment"># mongo auth source </span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/.crawlab/master:/root/.crawlab&quot;</span>  <span class="token comment"># 持久化 crawlab 元数据</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/crawlab/master:/data&quot;</span>  <span class="token comment"># 持久化 crawlab 数据</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>  <span class="token comment"># 开放 api 端口</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mongo

  <span class="token key atrule">mongo</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mongo<span class="token punctuation">:</span><span class="token number">4.2</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MONGO_INITDB_ROOT_USERNAME</span><span class="token punctuation">:</span> <span class="token string">&quot;username&quot;</span>  <span class="token comment"># mongo username</span>
      <span class="token key atrule">MONGO_INITDB_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span>  <span class="token comment"># mongo password</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/crawlab/mongo/data/db:/data/db&quot;</span>  <span class="token comment"># 持久化 mongo 数据</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;27017:27017&quot;</span>  <span class="token comment"># 开放 mongo 端口到宿主机</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>docker-compose up -d</code> 并在浏览器中导航至 <code>http://&lt;your_ip&gt;:8080</code>，然后开始使用 Crawlab。</p><h2 id="多节点部署" tabindex="-1"><a class="header-anchor" href="#多节点部署" aria-hidden="true">#</a> 多节点部署</h2>`,5),O=o(`<p><strong>多节点部署（MND）</strong> 通常用在由主节点和工作节点组成的生产环境。主节点于工作节点连接，并在集群中起中控的作用。</p><p>多节点部署（MND）配置比单节点部署（SND）要复杂一些，但您可以参考下面的教程来创建小型集群，整个过程非常直观。</p><h3 id="搭建主节点" tabindex="-1"><a class="header-anchor" href="#搭建主节点" aria-hidden="true">#</a> 搭建主节点</h3><p>在 <strong>主节点</strong> 中创建 <code>docker-compose.yml</code>，并输入如下内容。 然后执行 <code>docker-compose up -d</code> 以启动容器。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 主节点</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">master</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> crawlabteam/crawlab
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> crawlab_master
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">CRAWLAB_NODE_MASTER</span><span class="token punctuation">:</span> <span class="token string">&quot;Y&quot;</span>  <span class="token comment"># Y: 主节点</span>
      <span class="token key atrule">CRAWLAB_MONGO_HOST</span><span class="token punctuation">:</span> <span class="token string">&quot;mongo&quot;</span>  <span class="token comment"># mongo host address. 在 Docker-Compose 网络中，直接引用 service 名称</span>
      <span class="token key atrule">CRAWLAB_MONGO_PORT</span><span class="token punctuation">:</span> <span class="token string">&quot;27017&quot;</span>  <span class="token comment"># mongo port </span>
      <span class="token key atrule">CRAWLAB_MONGO_DB</span><span class="token punctuation">:</span> <span class="token string">&quot;crawlab&quot;</span>  <span class="token comment"># mongo database </span>
      <span class="token key atrule">CRAWLAB_MONGO_USERNAME</span><span class="token punctuation">:</span> <span class="token string">&quot;username&quot;</span>  <span class="token comment"># mongo username</span>
      <span class="token key atrule">CRAWLAB_MONGO_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span>  <span class="token comment"># mongo password </span>
      <span class="token key atrule">CRAWLAB_MONGO_AUTHSOURCE</span><span class="token punctuation">:</span> <span class="token string">&quot;admin&quot;</span>  <span class="token comment"># mongo auth source </span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/.crawlab/master:/root/.crawlab&quot;</span>  <span class="token comment"># 持久化 crawlab 元数据</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/crawlab/master:/data&quot;</span>  <span class="token comment"># 持久化 crawlab 数据</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>  <span class="token comment"># 开放 api 端口</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9666:9666&quot;</span>  <span class="token comment"># 开放 grpc 端口</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mongo

  <span class="token key atrule">mongo</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mongo<span class="token punctuation">:</span><span class="token number">4.2</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MONGO_INITDB_ROOT_USERNAME</span><span class="token punctuation">:</span> <span class="token string">&quot;username&quot;</span>  <span class="token comment"># mongo username</span>
      <span class="token key atrule">MONGO_INITDB_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span>  <span class="token comment"># mongo password</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/crawlab/mongo/data/db:/data/db&quot;</span>  <span class="token comment"># 持久化 mongo 数据</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;27017:27017&quot;</span>  <span class="token comment"># 开放 mongo 端口到宿主机</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="搭建工作节点" tabindex="-1"><a class="header-anchor" href="#搭建工作节点" aria-hidden="true">#</a> 搭建工作节点</h3><p>在每个 <strong>工作节点</strong> 中创建 <code>docker-compose.yml</code>，并输入如下内容。 然后执行 <code>docker-compose up -d</code> 以启动容器。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 工作节点</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">worker</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> crawlabteam/crawlab
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> crawlab_worker
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">CRAWLAB_NODE_MASTER</span><span class="token punctuation">:</span> <span class="token string">&quot;N&quot;</span>  <span class="token comment"># N: 工作节点</span>
      <span class="token key atrule">CRAWLAB_GRPC_ADDRESS</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;master_node_ip&gt;:9666&quot;</span>  <span class="token comment"># grpc address</span>
      <span class="token key atrule">CRAWLAB_FS_FILER_URL</span><span class="token punctuation">:</span> <span class="token string">&quot;http://&lt;master_node_ip&gt;:8080/api/filer&quot;</span>  <span class="token comment"># seaweedfs api</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/.crawlab/worker:/root/.crawlab&quot;</span>  <span class="token comment"># 持久化 crawlab 元数据</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/crawlab/worker:/data&quot;</span>  <span class="token comment"># 持久化 crawlab 数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意您需要将 <code>&lt;master_node_ip&gt;</code> 替换为主节点 IP 地址，并保证其能被工作节点访问。</p><p>主节点和工作节点都启动之后，您可以导航至 <code>http://&lt;master_node_ip&gt;:8080</code> 并开始使用 Crawlab.</p><div class="hint-container warning"><p class="hint-container-title">注意</p><h3 id="开放主节点端口" tabindex="-1"><a class="header-anchor" href="#开放主节点端口" aria-hidden="true">#</a> 开放主节点端口</h3><p>由于工作节点是通过端口 <strong>8080</strong> (API) 以及 <strong>9666</strong> (gRPC) 来连接主节点的，您需要保证它们都是处于开放状态，<strong>没有</strong> 被主节点防火墙所禁用。</p></div><h2 id="外部-mongodb" tabindex="-1"><a class="header-anchor" href="#外部-mongodb" aria-hidden="true">#</a> 外部 MongoDB</h2><p>在之前介绍的多节点部署（MND）中，您可能已经注意到 MongoDB 默认是部署在主节点上的。但出于性能考虑，这样的顺手部署配置将导致问题，因为 MongoDB 本身可能会成为瓶颈，尤其是在大规模分布式系统中。</p><p>所幸的是，这个问题能够通过部署外部 MongoDB 到其他节点或云数据库服务供应商（例如 AWS、Azure、Aliyun）来解决。通过这个方式，MongoDB 能够轻松的扩容，因此数据库的稳定性能够得到有效保证。请参考下图。</p>`,14),w=o(`<p>主节点配置文件 \`docker-compose.与 <a href="#multi-node-deployment">默认多节点部署（MND）</a> 稍微有些不同。请参考下面内容。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 外部 MongoDB 的主节点</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">master</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> crawlabteam/crawlab
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> crawlab_master
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">CRAWLAB_NODE_MASTER</span><span class="token punctuation">:</span> <span class="token string">&quot;Y&quot;</span>  <span class="token comment"># Y: 主节点</span>
      <span class="token key atrule">CRAWLAB_MONGO_URI</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_uri&gt;&quot;</span>  <span class="token comment"># mongo uri (单独设置)</span>
      <span class="token key atrule">CRAWLAB_MONGO_HOST</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_host&gt;&quot;</span>  <span class="token comment"># mongo host address</span>
      <span class="token key atrule">CRAWLAB_MONGO_PORT</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_port&gt;&quot;</span>  <span class="token comment"># mongo port </span>
      <span class="token key atrule">CRAWLAB_MONGO_DB</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_db&gt;&quot;</span>  <span class="token comment"># mongo database </span>
      <span class="token key atrule">CRAWLAB_MONGO_USERNAME</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_username&gt;&quot;</span>  <span class="token comment"># mongo username</span>
      <span class="token key atrule">CRAWLAB_MONGO_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_password&gt;&quot;</span>  <span class="token comment"># mongo password </span>
      <span class="token key atrule">CRAWLAB_MONGO_AUTHSOURCE</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_auth_source&gt;&quot;</span>  <span class="token comment"># mongo auth source </span>
      <span class="token key atrule">CRAWLAB_MONGO_AUTHMECHANISM</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_auth_mechanism&gt;&quot;</span>  <span class="token comment"># mongo auth mechanism </span>
      <span class="token key atrule">CRAWLAB_MONGO_AUTHMECHANISMPROPERTIES</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_auth_mechanism_properties&gt;&quot;</span>  <span class="token comment"># mongo auth mechanism properties</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/.crawlab/master:/root/.crawlab&quot;</span>  <span class="token comment"># 持久化 crawlab 元数据</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/crawlab/master:/data&quot;</span>  <span class="token comment"># 持久化 crawlab 数据</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>  <span class="token comment"># 开放 api 端口</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9666:9666&quot;</span>  <span class="token comment"># 开放 grpc 端口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，服务 <code>mongo</code> 被移除了，MongoDB 连接相关的环境变量 (例如 <code>CRAWLAB_MONGO_HOST</code>, <code>CRAWLAB_MONGO_PORT</code>) 指向了外部 MongoDB。您可以将其中一些不需要设置的环境变量留空。</p>`,3);function R(N,M){const e=p("ExternalLinkIcon"),t=p("Mermaid");return l(),i("div",null,[r,n("p",null,[s("Docker 是安装部署 Crawlab 最便捷的方式。如果您不熟悉 Docker，您可以参考 "),n("a",k,[s("Docker 官网"),a(e)]),s(" 并将其安装在本地。在进行任何操作前，请先保证您已安装好了 Docker。")]),d,m,n("ol",null,[n("li",null,[s("安装 "),n("a",v,[s("Docker"),a(e)]),s(" 和 "),n("a",b,[s("Docker-Compose"),a(e)])]),g,_,y]),q,h,a(t,{id:"mermaid-42",code:"eJxLy8kvT85ILCpRCHHiUlAoLk1KL0osyFBQeto79UVX0/OmnS+bVzzfu+n9no5gP5f3ezqVgKoUFHKjn+zYDZGPVbDR1bVTyE2P9s3PS893cYoFqkjNSwGZVlKZk6qQq5CWmZNjpWySZGGcZKSTnJ+TX2RVnpFZkopQkg5VY2aebGSciKIGAHDOPmE="}),A,a(t,{id:"mermaid-56",code:"eJxLy8kvT85ILCpR8AniUlAoLk1KL0osyFBQerpk1ouupudNO182r3i+d9P7PR2+fi7v93QqAVUpKORGP9mxGyIfq2Cjq2unUG4Y/XT70id750BEFQxjIQqhskaoskaossaossYg2dS8FJCDSipzUoHq0jJzcqyUTZIsjJOMdJLzc/KLrMozMktS4UrKDaFqUs0SjYyTsasxIkKNMW41AKN/dP8="}),O,a(t,{id:"mermaid-100",code:"eJxLy8kvT85ILCpR8AniUlAoLk1KL0osyFBQerpk2svmFQq++Xnp+S5OCs9ntTxdMutFV9Pzpp1A8ed7N73f0+Hr5/J+T6cSUJ+CQkpmUWpySWZ+nkKIE1ggN/rJjt0QDbEKNrq6dgrlhtFPty99sncORFTBMBaiECprhCprhCprjCprDJVNj4a6EGpHLlA4NS8F5JWSypxUoPa0zJwcK2WTJAvjJCOd5Pyc/CKr8ozMklS4knJDqJpUs0Qj42TsaoyIUGNMWE1uOlSNmXmykXEiihoA+hSU6g=="}),w])}const D=c(u,[["render",R],["__file","docker.html.vue"]]);export{D as default};
