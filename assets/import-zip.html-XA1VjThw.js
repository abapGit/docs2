import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as o,o as a}from"./app-W-jXdfVZ.js";const r={};function l(n,e){return a(),i("div",null,e[0]||(e[0]=[o('<h2 id="download-zip-file" tabindex="-1"><a class="header-anchor" href="#download-zip-file"><span>Download ZIP File</span></a></h2><p>An offline project is based on a ZIP file that contains all files of a git repository.</p><p>First, download the latest version of the project you want to import.</p><ul><li>For GitHub : <ol><li>Go to the project main page (e.g. <a href="https://github.com/larshp/abapOpenChecks" target="_blank" rel="noopener noreferrer">https://github.com/larshp/abapOpenChecks</a>)</li><li>Select <strong>Code</strong> &gt; <strong>Download ZIP</strong></li><li>Save file</li></ol></li></ul><h2 id="import-zip-file" tabindex="-1"><a class="header-anchor" href="#import-zip-file"><span>Import ZIP File</span></a></h2><ol><li>Connect to SAP in language English (<strong>EN</strong>)</li><li>Run abapGit: <ul><li>If you have installed the standalone version: in transaction <code>SE38</code>, run the program you created (<code>ZABAPGIT_STANDALONE</code> or <code>ZABAPGIT_FULL</code> or other)</li><li>If you have installed the developer version: run transaction <code>ZABAPGIT</code></li></ul></li><li>Select <strong>New Offline</strong></li><li>Enter the project name and select an existing package or create a new package</li><li>Select <strong>Import <sup>zip</sup></strong></li><li>Select the ZIP file (eg. <em>abapGit-master.zip</em>)</li><li>Select <strong>Pull <sup>zip</sup></strong></li></ol><h2 id="hints" tabindex="-1"><a class="header-anchor" href="#hints"><span>Hints</span></a></h2><p>abapGit can only import files with <a href="https://en.wikipedia.org/wiki/Newline" target="_blank" rel="noopener noreferrer"><code>LF</code></a> as line-terminator. If you clone a project on windows with git cli to pack into a ZIP file later on, configure git not replace <code>LF</code> by <code>CRLF</code>:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [--global, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--local,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --system</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] core.autocrlf false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',9)]))}const c=t(r,[["render",l],["__file","import-zip.html.vue"]]),h=JSON.parse('{"path":"/user-guide/projects/offline/import-zip.html","title":"Import ZIP","lang":"en-US","frontmatter":{"title":"Import ZIP","category":"offline projects","order":10,"description":"Download ZIP File An offline project is based on a ZIP file that contains all files of a git repository. First, download the latest version of the project you want to import. Fo...","head":[["meta",{"property":"og:url","content":"https://docs.abapgit.org/user-guide/projects/offline/import-zip.html"}],["meta",{"property":"og:site_name","content":"abapGit Docs"}],["meta",{"property":"og:title","content":"Import ZIP"}],["meta",{"property":"og:description","content":"Download ZIP File An offline project is based on a ZIP file that contains all files of a git repository. First, download the latest version of the project you want to import. Fo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-23T08:23:25.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-23T08:23:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Import ZIP\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-23T08:23:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"abapGit\\",\\"url\\":\\"https://github.com/abapGit\\"}]}"]]},"headers":[{"level":2,"title":"Download ZIP File","slug":"download-zip-file","link":"#download-zip-file","children":[]},{"level":2,"title":"Import ZIP File","slug":"import-zip-file","link":"#import-zip-file","children":[]},{"level":2,"title":"Hints","slug":"hints","link":"#hints","children":[]}],"git":{"createdTime":1495128307000,"updatedTime":1684830205000,"contributors":[{"name":"Ludwig Stockbauer-Muhr","username":"Ludwig Stockbauer-Muhr","email":"35834861+stockbal@users.noreply.github.com","commits":1,"url":"https://github.com/Ludwig Stockbauer-Muhr"},{"name":"Marc Bernard","username":"Marc Bernard","email":"59966492+mbtools@users.noreply.github.com","commits":1,"url":"https://github.com/Marc Bernard"},{"name":"Lars Kiilerich","username":"Lars Kiilerich","email":"60612804+IvxLars@users.noreply.github.com","commits":1,"url":"https://github.com/Lars Kiilerich"},{"name":"germanysources","username":"germanysources","email":"johannes@gerbershagen-pfn.de","commits":1,"url":"https://github.com/germanysources"},{"name":"AlexandreHT","username":"AlexandreHT","email":"44161780+AlexandreHT@users.noreply.github.com","commits":2,"url":"https://github.com/AlexandreHT"},{"name":"Frederik Hudák","username":"Frederik Hudák","email":"frederik.hudak@sap.com","commits":10,"url":"https://github.com/Frederik Hudák"},{"name":"Lars Hvam","username":"Lars Hvam","email":"larshp@hotmail.com","commits":3,"url":"https://github.com/Lars Hvam"},{"name":"larshp","username":"larshp","email":"larshp@hotmail.com","commits":3,"url":"https://github.com/larshp"}]},"readingTime":{"minutes":0.63,"words":189},"filePathRelative":"user-guide/projects/offline/import-zip.md","localizedDate":"May 18, 2017","autoDesc":true,"excerpt":"<h2>Download ZIP File</h2>\\n<p>An offline project is based on a ZIP file that contains all files of a git repository.</p>\\n<p>First, download the latest version of the project you want to import.</p>\\n<ul>\\n<li>For GitHub :\\n<ol>\\n<li>Go to the project main page (e.g. <a href=\\"https://github.com/larshp/abapOpenChecks\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/larshp/abapOpenChecks</a>)</li>\\n<li>Select <strong>Code</strong> &gt; <strong>Download ZIP</strong></li>\\n<li>Save file</li>\\n</ol>\\n</li>\\n</ul>"}');export{c as comp,h as data};
