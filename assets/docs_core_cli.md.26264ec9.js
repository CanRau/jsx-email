import{_ as l,o as p,c as o,k as s,a as e,t as n,Q as i}from"./chunks/framework.7fda9092.js";const t="/preview-1.png",c="/preview-2.png",r="/preview-3.png",d="/preview-4.png",x=JSON.parse('{"title":"CLI","description":"The Command Line Interface and developer tooling for JSX email","frontmatter":{"title":"CLI","description":"The Command Line Interface and developer tooling for JSX email","params":"-D","slug":"cli","type":"package","head":[["meta",{"name":"og:description","content":"The Command Line Interface and developer tooling for JSX email"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"CLI"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"The Command Line Interface and developer tooling for JSX email"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"CLI"}]]},"headers":[],"relativePath":"../../../docs/core/cli.md","filePath":"../../../docs/core/cli.md"}'),m={name:"../../../docs/core/cli.md"},y={id:"frontmatter-title",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=s("h2",{id:"install",tabindex:"-1"},[e("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),u=i(`<div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-5CVU4" id="tab--BvIkUg" checked="checked"><label for="tab--BvIkUg">pnpm</label><input type="radio" name="group-5CVU4" id="tab-jeculFg"><label for="tab-jeculFg">bun</label><input type="radio" name="group-5CVU4" id="tab-QEpa_eb"><label for="tab-QEpa_eb">npm</label><input type="radio" name="group-5CVU4" id="tab-HuSEHxs"><label for="tab-HuSEHxs">yarn</label></div><div class="blocks"><div class="language-console vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">pnpm add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">pnpm add jsx-email</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">bun add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">bun add jsx-email</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">npm add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">npm add jsx-email</span></span></code></pre></div><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">yarn add jsx-email</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">yarn add jsx-email</span></span></code></pre></div></div></div><p>Nearly all installations of this package will want it installed into <code>devDependencies</code> so please make sure to add the <code>-D</code> flag.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Installing this package will add an <code>email</code> binary, which will be available to <code>pnpm exec</code>, <code>npx</code>, and <code>yarn</code>.</p><p>Invoking the CLI without parameters or flags will produce help information in the console. From there, all of the functions of the CLI can be viewed, along with any applicable parameters and flags:</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">→ pnpm exec email</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6;">jsx-email v0.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6;">A CLI for working with Email Templates made with jsx-email</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6;">Usage</span></span>
<span class="line"><span style="color:#E6E6E6;">  $ email [...options]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6;">Commands</span></span>
<span class="line"><span style="color:#E6E6E6;">  build       &lt;template file or dir path&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  check       &lt;template file path&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  create      &lt;template name&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  help        [&lt;command&gt;]</span></span>
<span class="line"><span style="color:#E6E6E6;">  preview     &lt;template dir path&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6;">Options</span></span>
<span class="line"><span style="color:#E6E6E6;">  --help      Displays this message</span></span>
<span class="line"><span style="color:#E6E6E6;">  --version   Displays the current jsx-email version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6;">Examples</span></span>
<span class="line"><span style="color:#E6E6E6;">  $ email</span></span>
<span class="line"><span style="color:#E6E6E6;">  $ email --help</span></span>
<span class="line"><span style="color:#E6E6E6;">  $ email build ./src/templates/Invite.tsx</span></span>
<span class="line"><span style="color:#E6E6E6;">  $ email create invite</span></span>
<span class="line"><span style="color:#E6E6E6;">  $ email preview ./src/templates</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">→ pnpm exec email</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">jsx-email v0.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">A CLI for working with Email Templates made with jsx-email</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">Usage</span></span>
<span class="line"><span style="color:#002339;">  $ email [...options]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">Commands</span></span>
<span class="line"><span style="color:#002339;">  build       &lt;template file or dir path&gt;</span></span>
<span class="line"><span style="color:#002339;">  check       &lt;template file path&gt;</span></span>
<span class="line"><span style="color:#002339;">  create      &lt;template name&gt;</span></span>
<span class="line"><span style="color:#002339;">  help        [&lt;command&gt;]</span></span>
<span class="line"><span style="color:#002339;">  preview     &lt;template dir path&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">Options</span></span>
<span class="line"><span style="color:#002339;">  --help      Displays this message</span></span>
<span class="line"><span style="color:#002339;">  --version   Displays the current jsx-email version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">Examples</span></span>
<span class="line"><span style="color:#002339;">  $ email</span></span>
<span class="line"><span style="color:#002339;">  $ email --help</span></span>
<span class="line"><span style="color:#002339;">  $ email build ./src/templates/Invite.tsx</span></span>
<span class="line"><span style="color:#002339;">  $ email create invite</span></span>
<span class="line"><span style="color:#002339;">  $ email preview ./src/templates</span></span></code></pre></div><p>To view help for specific commands, use <code>email help &lt;command&gt;</code>. e.g. <code>email help build</code>.</p><h2 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-label="Permalink to &quot;Build&quot;">​</a></h2><p>The <code>build</code> command compiles and renders an email template to HTML for use with an email provider. The command takes a directory or single file as input:</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">$ cd </span><span style="color:#D4D4D4;">~</span><span style="color:#E6E6E6;">/code/email-app</span></span>
<span class="line"><span style="color:#E6E6E6;">$ email build ./emails</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">$ cd </span><span style="color:#7B30D0;">~</span><span style="color:#002339;">/code/email-app</span></span>
<span class="line"><span style="color:#002339;">$ email build ./emails</span></span></code></pre></div><p>Or for a single file:</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">$ cd </span><span style="color:#D4D4D4;">~</span><span style="color:#E6E6E6;">/code/email-app</span></span>
<span class="line"><span style="color:#E6E6E6;">$ email build ./emails/Batman.tsx</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">$ cd </span><span style="color:#7B30D0;">~</span><span style="color:#002339;">/code/email-app</span></span>
<span class="line"><span style="color:#002339;">$ email build ./emails/Batman.tsx</span></span></code></pre></div><h2 id="check" tabindex="-1">Check <a class="header-anchor" href="#check" aria-label="Permalink to &quot;Check&quot;">​</a></h2><p><code>jsx-email</code> can run a client compatibility check on any template, comparing it to the compatibility tables from \`<a href="https://caniemail.com/" target="_blank" rel="noreferrer">caniuse.com</a> and display any email client incompatibility issues. This check is incredibly helpful in diagnosing and debugging display issues between multiple email clients.</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">$ email check ./emails/Batman.tsx</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">$ email check ./emails/Batman.tsx</span></span></code></pre></div><p>Example output:</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">Checking email template for Client Compatibility...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6;">Found 1 files:</span></span>
<span class="line"><span style="color:#E6E6E6;">   ./emails/Batman.tsx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6;">Starting build...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6;">Build complete</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6;">./emails/Batman.tsx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6;">  error  Class selector is not supported by:</span></span>
<span class="line"><span style="color:#E6E6E6;">           gmail.mobile-webmail</span></span>
<span class="line"><span style="color:#E6E6E6;">           protonmail.desktop-webmail</span></span>
<span class="line"><span style="color:#E6E6E6;">           protonmail.ios</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6;">  error  border-radius is not supported by:</span></span>
<span class="line"><span style="color:#E6E6E6;">           outlook.windows</span></span>
<span class="line"><span style="color:#E6E6E6;">           outlook.windows-mail</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6;">  warn  target attribute is only partially supported by:</span></span>
<span class="line"><span style="color:#E6E6E6;">          apple-mail.macos</span></span>
<span class="line"><span style="color:#E6E6E6;">          apple-mail.ios</span></span>
<span class="line"><span style="color:#E6E6E6;">          outlook.windows</span></span>
<span class="line"><span style="color:#E6E6E6;">          outlook.windows-mail</span></span>
<span class="line"><span style="color:#E6E6E6;">          outlook.ios</span></span>
<span class="line"><span style="color:#E6E6E6;">          outlook.android</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E6E6E6;">Check Complete: 14 error(s), 20 warning(s)</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">Checking email template for Client Compatibility...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">Found 1 files:</span></span>
<span class="line"><span style="color:#002339;">   ./emails/Batman.tsx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">Starting build...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">Build complete</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">./emails/Batman.tsx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">  error  Class selector is not supported by:</span></span>
<span class="line"><span style="color:#002339;">           gmail.mobile-webmail</span></span>
<span class="line"><span style="color:#002339;">           protonmail.desktop-webmail</span></span>
<span class="line"><span style="color:#002339;">           protonmail.ios</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">  error  border-radius is not supported by:</span></span>
<span class="line"><span style="color:#002339;">           outlook.windows</span></span>
<span class="line"><span style="color:#002339;">           outlook.windows-mail</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">  warn  target attribute is only partially supported by:</span></span>
<span class="line"><span style="color:#002339;">          apple-mail.macos</span></span>
<span class="line"><span style="color:#002339;">          apple-mail.ios</span></span>
<span class="line"><span style="color:#002339;">          outlook.windows</span></span>
<span class="line"><span style="color:#002339;">          outlook.windows-mail</span></span>
<span class="line"><span style="color:#002339;">          outlook.ios</span></span>
<span class="line"><span style="color:#002339;">          outlook.android</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">Check Complete: 14 error(s), 20 warning(s)</span></span></code></pre></div><h2 id="preview" tabindex="-1">Preview <a class="header-anchor" href="#preview" aria-label="Permalink to &quot;Preview&quot;">​</a></h2><p>JSX email ships with a Preview Tool as part of the CLI. Our Preview is fast, simple, and smooth. It doesn&#39;t require installing any crazy dependencies, downloading additional &quot;clients,&quot; or copying your project&#39;s dependencies. It just works. And the best part: it works with monorepos out of the box.</p><p>To use the Preview Tool, open your terminal and navigate to your project. We&#39;re assuming you&#39;ve already installed the CLI as shown above, and that you&#39;ve already run <code>email create</code> to create an email in an <code>emails</code> directory.</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#E6E6E6;">$ cd </span><span style="color:#D4D4D4;">~</span><span style="color:#E6E6E6;">/code/email-app</span></span>
<span class="line"><span style="color:#E6E6E6;">$ email preview ./emails</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#002339;">$ cd </span><span style="color:#7B30D0;">~</span><span style="color:#002339;">/code/email-app</span></span>
<span class="line"><span style="color:#002339;">$ email preview ./emails</span></span></code></pre></div><p>The Preview Tool will start up and open a new window in your browser, and you&#39;ll be presented with a page that looks like:</p><p><img src="`+t+'" alt="Preview 1"><br><br><img src="'+c+'" alt="Preview 1"><br><br><img src="'+r+'" alt="Preview 1"><br><br><img src="'+d+'" alt="Preview 1"></p>',23);function g(a,v,k,b,w,f){return p(),o("div",null,[s("h2",y,[e(n(a.$frontmatter.title)+" ",1),E]),s("p",null,n(a.$frontmatter.description),1),h,s("p",null,"Install the "+n(a.$frontmatter.type)+" from your command line",1),u])}const _=l(m,[["render",g]]);export{x as __pageData,_ as default};
