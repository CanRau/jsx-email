import{_ as o,o as l,c as p,k as s,a as t,t as a,Q as n}from"./chunks/framework.fd95ed2e.js";const L=JSON.parse('{"title":"Preview","description":"Renders a preview viewable in recipient email clients","frontmatter":{"title":"Preview","description":"Renders a preview viewable in recipient email clients","slug":"preview","head":[["meta",{"name":"og:description","content":"Renders a preview viewable in recipient email clients"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"Preview"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"Renders a preview viewable in recipient email clients"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"Preview"}]]},"headers":[],"relativePath":"../../../docs/components/preview.md","filePath":"../../../docs/components/preview.md"}'),c={name:"../../../docs/components/preview.md"},i={id:"frontmatter-title",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"Email clients have this concept of “preview text” which gives insight into what's inside the email before you open. A good practice is to keep that text under 90 characters.")],-1),m=s("h2",{id:"install",tabindex:"-1"},[t("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),_=s("p",null,"Install component from your command line.",-1),h={class:"vp-code-group vp-adaptive-theme"},y=n('<div class="tabs"><input type="radio" name="group--6sWI" id="tab-HsUMu_E" checked="checked"><label for="tab-HsUMu_E">pnpm</label><input type="radio" name="group--6sWI" id="tab-q9ihZcZ"><label for="tab-q9ihZcZ">npm</label><input type="radio" name="group--6sWI" id="tab-xGN5JEP"><label for="tab-xGN5JEP">yarn</label></div>',1),E={class:"blocks"},v={class:"language-console vp-adaptive-theme active"},u=s("button",{title:"Copy Code",class:"copy"},null,-1),g=s("span",{class:"lang"},"console",-1),k={class:"shiki slack-dark vp-code-dark"},b={class:"line"},f={style:{color:"#E6E6E6"}},w={class:"shiki slack-ochin vp-code-light"},C={class:"line"},P={style:{color:"#002339"}},x={class:"language-console vp-adaptive-theme"},D=s("button",{title:"Copy Code",class:"copy"},null,-1),T=s("span",{class:"lang"},"console",-1),B={class:"shiki slack-dark vp-code-dark"},$={class:"line"},j={style:{color:"#E6E6E6"}},I={class:"shiki slack-ochin vp-code-light"},A={class:"line"},S={style:{color:"#002339"}},N={class:"language-console vp-adaptive-theme"},V=s("button",{title:"Copy Code",class:"copy"},null,-1),q=s("span",{class:"lang"},"console",-1),R={class:"shiki slack-dark vp-code-dark"},J={class:"line"},U={style:{color:"#E6E6E6"}},Z={class:"shiki slack-ochin vp-code-light"},W={class:"line"},F={style:{color:"#002339"}},G=n(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Preview</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/preview&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Preview</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">Email preview text</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Preview</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Preview</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/preview&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> &lt;</span><span style="color:#DC3EB7;">Preview</span><span style="color:#002339;">&gt;Email preview text&lt;/</span><span style="color:#DC3EB7;">Preview</span><span style="color:#002339;">&gt;;</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><p>This component has no custom props, but expresses all of the <a href="https://react.dev/reference/react-dom/components/common" target="_blank" rel="noreferrer">Common Component Props</a> for <code>ComponentProps&lt;&#39;div&#39;&gt;</code>.</p>`,5);function H(e,M,O,Q,X,z){return l(),p("div",null,[s("h2",i,[t(a(e.$frontmatter.title)+" ",1),r]),s("p",null,a(e.$frontmatter.description),1),d,m,_,s("div",h,[y,s("div",E,[s("div",v,[u,g,s("pre",k,[s("code",null,[s("span",b,[s("span",f,"pnpm add @jsx-email/"+a(e.$frontmatter.slug),1)])])]),s("pre",w,[s("code",null,[s("span",C,[s("span",P,"pnpm add @jsx-email/"+a(e.$frontmatter.slug),1)])])])]),s("div",x,[D,T,s("pre",B,[s("code",null,[s("span",$,[s("span",j,"npm add @jsx-email/"+a(e.$frontmatter.slug),1)])])]),s("pre",I,[s("code",null,[s("span",A,[s("span",S,"npm add @jsx-email/"+a(e.$frontmatter.slug),1)])])])]),s("div",N,[V,q,s("pre",R,[s("code",null,[s("span",J,[s("span",U,"yarn add @jsx-email/"+a(e.$frontmatter.slug),1)])])]),s("pre",Z,[s("code",null,[s("span",W,[s("span",F,"yarn add @jsx-email/"+a(e.$frontmatter.slug),1)])])])])])]),G])}const Y=o(c,[["render",H]]);export{L as __pageData,Y as default};