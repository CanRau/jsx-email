import{_ as t,o as e,c as p,k as s,a as l,t as n,Q as o}from"./chunks/framework.fd95ed2e.js";const L=JSON.parse('{"title":"All (The Things)","description":"This package exports all of the JSX email components","frontmatter":{"title":"All (The Things)","description":"This package exports all of the JSX email components","slug":"all","head":[["meta",{"name":"og:description","content":"This package exports all of the JSX email components"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"All (The Things)"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"This package exports all of the JSX email components"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"All (The Things)"}]]},"headers":[],"relativePath":"../../../docs/components/all.md","filePath":"../../../docs/components/all.md"}'),c={name:"../../../docs/components/all.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=s("h2",{id:"install",tabindex:"-1"},[l("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),y=s("p",null,"Install component from your command line.",-1),m={class:"vp-code-group vp-adaptive-theme"},h=o('<div class="tabs"><input type="radio" name="group-ZgJvl" id="tab-z_RiEh6" checked="checked"><label for="tab-z_RiEh6">pnpm</label><input type="radio" name="group-ZgJvl" id="tab-EYi8Hoz"><label for="tab-EYi8Hoz">npm</label><input type="radio" name="group-ZgJvl" id="tab-XgYvPD2"><label for="tab-XgYvPD2">yarn</label></div>',1),E={class:"blocks"},_={class:"language-console vp-adaptive-theme active"},g=s("button",{title:"Copy Code",class:"copy"},null,-1),u=s("span",{class:"lang"},"console",-1),D={class:"shiki slack-dark vp-code-dark"},C={class:"line"},f={style:{color:"#E6E6E6"}},k={class:"shiki slack-ochin vp-code-light"},v={class:"line"},b={style:{color:"#002339"}},B={class:"language-console vp-adaptive-theme"},T=s("button",{title:"Copy Code",class:"copy"},null,-1),x=s("span",{class:"lang"},"console",-1),A={class:"shiki slack-dark vp-code-dark"},S={class:"line"},$={style:{color:"#E6E6E6"}},j={class:"shiki slack-ochin vp-code-light"},F={class:"line"},P={style:{color:"#002339"}},q={class:"language-console vp-adaptive-theme"},J=s("button",{title:"Copy Code",class:"copy"},null,-1),H=s("span",{class:"lang"},"console",-1),X={class:"shiki slack-dark vp-code-dark"},I={class:"line"},V={style:{color:"#E6E6E6"}},w={class:"shiki slack-ochin vp-code-light"},N={class:"line"},z={style:{color:"#002339"}},R=o(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Using this package, all JSX email components can be accessed from a single import. For folks who prefer that style, versus importing individual component packages.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Button</span><span style="color:#E6E6E6;">, </span><span style="color:#9CDCFE;">Heading</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/all&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Heading</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">as</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;h1&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">Batman</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Heading</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Button</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">href</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://example.com&quot;</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">style</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#D4D4D4;">{ </span><span style="color:#9CDCFE;">color:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#61dafb&#39;</span><span style="color:#D4D4D4;"> }</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      Click me</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Button</span><span style="color:#002339;">, </span><span style="color:#2F86D2;">Heading</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/all&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Heading</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">as</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;h1&quot;</span><span style="color:#002339;">&gt;Batman&lt;/</span><span style="color:#DC3EB7;">Heading</span><span style="color:#002339;">&gt;;</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">href</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;https://example.com&quot;</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">style</span><span style="color:#7B30D0;">=</span><span style="color:#002339;">{{ color: </span><span style="color:#A44185;">&#39;#61dafb&#39;</span><span style="color:#002339;"> }}&gt;</span></span>
<span class="line"><span style="color:#002339;">      Click me</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div>`,3);function Y(a,U,Z,O,Q,G){return e(),p("div",null,[s("h2",r,[l(n(a.$frontmatter.title)+" ",1),i]),s("p",null,n(a.$frontmatter.description),1),d,y,s("div",m,[h,s("div",E,[s("div",_,[g,u,s("pre",D,[s("code",null,[s("span",C,[s("span",f,"pnpm add @jsx-email/"+n(a.$frontmatter.slug),1)])])]),s("pre",k,[s("code",null,[s("span",v,[s("span",b,"pnpm add @jsx-email/"+n(a.$frontmatter.slug),1)])])])]),s("div",B,[T,x,s("pre",A,[s("code",null,[s("span",S,[s("span",$,"npm add @jsx-email/"+n(a.$frontmatter.slug),1)])])]),s("pre",j,[s("code",null,[s("span",F,[s("span",P,"npm add @jsx-email/"+n(a.$frontmatter.slug),1)])])])]),s("div",q,[J,H,s("pre",X,[s("code",null,[s("span",I,[s("span",V,"yarn add @jsx-email/"+n(a.$frontmatter.slug),1)])])]),s("pre",w,[s("code",null,[s("span",N,[s("span",z,"yarn add @jsx-email/"+n(a.$frontmatter.slug),1)])])])])])]),R])}const M=t(c,[["render",Y]]);export{L as __pageData,M as default};