import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as e,d as i,e as n,f as l,a as t,r as h,o as p}from"./app-W-jXdfVZ.js";const d="/img/w3mimepoller-1.png",c="/img/w3mimepoller-2.png",k="/img/w3mimepoller-3.png",g={};function m(u,s){const a=h("RouteLink");return p(),r("div",null,[e("p",null,[s[1]||(s[1]=i("This documentation covers asset management, CSS processing, and recommended asset development flow. See also the ")),n(a,{to:"/development-guide/user-interface/developing-ui.html"},{default:l(()=>s[0]||(s[0]=[i("UI - HTML Pages")])),_:1}),s[2]||(s[2]=i("."))]),s[10]||(s[10]=t(`<h2 id="tl-dr" tabindex="-1"><a class="header-anchor" href="#tl-dr"><span>TL;DR</span></a></h2><ul><li>If you add an asset - code it in <code>ZCL_ABAPGIT_UI_FACTORY=&gt;INIT_ASSET_MANAGER</code></li><li>There are 3 main CSS sheets to mind: <code>ag-icons.css</code> with icon definitions, <code>common.css</code> with layouts (don&#39;t use for colors!), and <code>theme-default.css</code> for colors</li><li>Custom themes (&quot;Dark&quot; and &quot;Belize&quot;) are combined with &quot;Default&quot; so that missing attributes are inherited from the default one</li><li>abapGit uses internal CSS preprocessing to support CSS variables (which are otherwise not supported by IE - undercover browser of SAP GUI)</li><li>A convenient way for changing and uploading CSS and other assets is <a href="https://github.com/sbcgua/abap_w3mi_poller" target="_blank" rel="noopener noreferrer">W3MIPOLLER</a></li></ul><h2 id="asset-manager" tabindex="-1"><a class="header-anchor" href="#asset-manager"><span>Asset Manager</span></a></h2><p><code>ZCL_ABAPGIT_GUI_ASSET_MANAGER</code> class is responsible for managing static assets. Very briefly: relevant assets must be registered in the asset manager instance during GUI initiation so that they can be used in the browser UI. The registration happens in <code>ZCL_ABAPGIT_UI_FACTORY=&gt;INIT_ASSET_MANAGER</code>. Here is an abstract from the method for example:</p><div class="language-abap line-numbers-mode" data-highlighter="shiki" data-ext="abap" data-title="abap" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DEFINE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> _inline.</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    APPEND</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> lt_inline. </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&quot; &lt;&lt;&lt; THIS IS USED TO INCLUDE ASSET IN-CODE WITH ABAPMERGE</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">END-OF-DEFINITION</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DATA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> lt_inline</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TYPE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> string_table.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CLEAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> lt_inline.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&quot; @@abapmerge include zabapgit_css_common.w3mi.data.css &gt; _inline &#39;$$&#39;.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ro_asset_man-&gt;register_asset(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    iv_url       </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;css/common.css&#39;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         &quot; &lt;&lt;&lt; PATH TO THE ASSET FROM HTML, WHICH IS ALSO IT&#39;S UNIQUE NAME</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    iv_type      </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;text/css&#39;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">               &quot; &lt;&lt;&lt; CONTENT TYPE OF THE ASSET</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    iv_mime_name </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;ZABAPGIT_CSS_COMMON&#39;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &quot; &lt;&lt;&lt; MIME OBJECT NAME</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    iv_inline    </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> concat_lines_of</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> table</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> lt_inline sep </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> cl_abap_char_utilities=&gt;newline ) ).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CLEAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> lt_inline.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&quot; @@abapmerge include-base64 zabapgit_icon_font.w3mi.data.woff &gt; _inline &#39;$$&#39;. &quot; &lt;&lt;&lt; THE FILE BINARY !!!</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ro_asset_man-&gt;register_asset(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    iv_url       </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;font/ag-icons.woff&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    iv_type      </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;font/woff&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    iv_mime_name </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;ZABAPGIT_ICON_FONT&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    iv_base64    </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> concat_lines_of</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> table</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> lt_inline ) ).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&quot; see https://github.com/abapGit/abapGit/issues/201 for source SVG</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ro_asset_man-&gt;register_asset(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    iv_url       </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;img/logo&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    iv_type      </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;image/png&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    iv_base64    </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &#39;iVBORw0KGgoAAAANSUhENCSVQICAgIfAhkiAAA...&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are several ways to store the content of a static asset in abapGit.</p><ol><li>Pass the asset inline. e.g. the logo at the end is a PNG image. It is encoded as BASE64 and passed as <code>iv_base64</code> param</li><li>Inline can be also a text then should be passed with <code>iv_inline</code></li><li>Read from a MIME object - if inline is not passed, the asset falls back to the MIME</li></ol><h3 id="compiling-standalone-version-of-abapgit-abapmerge" tabindex="-1"><a class="header-anchor" href="#compiling-standalone-version-of-abapgit-abapmerge"><span>Compiling Standalone Version of abapGit (abapmerge)</span></a></h3><p>The tricky thing is that abapGit can be either installed as a development version, deploying all the MIME objects in particular <strong>or</strong> as a single program (standalone version). This program must contain all the assets (images, CSS, JavaScript, and fonts) <strong>in-code</strong>. This is enabled by <strong>abapmerge</strong> tool. Consider the <code>css/common.css</code> registration above.</p><ul><li>First, <code>lt_inline</code> is cleared. And in the development version of abapGit, it is then just passed to <code>register_asset</code> being initial. The asset manager thus falls back to <code>ZABAPGIT_CSS_COMMON</code> MIME object (which is conveniently deployed with the developer version).</li><li>In case of the standalone version of abapGit, there is no MIME object. However, <code>@@abapmerge include</code> statement is processed by abapmerge and the file <code>zabapgit_css_common.w3mi.data.css</code> is included to the code line by line in form of <code>_inline &#39;$$&#39;</code>, where <code>$$</code> is the text file line. Thus, at the moment of <code>register_asset</code> the content of <code>lt_inline</code> is <strong>not</strong> initial and takes the priority over the missing MIME.</li></ul><p>Note: for the binary files, like fonts, use <code>@@abapmerge include-base64</code> pragma.</p><h2 id="css-structure-and-themes" tabindex="-1"><a class="header-anchor" href="#css-structure-and-themes"><span>CSS Structure and Themes</span></a></h2><p>abapGit uses several CSS sheets to style its visual design:</p>`,13)),e("ul",null,[e("li",null,[s[4]||(s[4]=e("code",null,"ag-icons.css",-1)),s[5]||(s[5]=i(" (")),s[6]||(s[6]=e("code",null,"ZABAPGIT_ICON_FONT_CSS",-1)),s[7]||(s[7]=i(") - defines the icons. See ")),n(a,{to:"/development-guide/user-interface/adding-icons.html"},{default:l(()=>s[3]||(s[3]=[i("Adding Icons")])),_:1}),s[8]||(s[8]=i(" for details"))]),s[9]||(s[9]=t("<li><code>common.css</code> (<code>ZABAPGIT_CSS_COMMON</code>) - main CSS sheet which defines the layout. <strong>Please don&#39;t define colors in it</strong></li><li><code>theme-default.css</code> (<code>ZABAPGIT_CSS_THEME_DEFAULT</code>) - default color scheme</li><li><code>theme-belize-blue.css</code> and <code>theme-dark.css</code> ( <code>ZABAPGIT_CSS_THEME_BELIZE_BLUE</code> and <code>ZABAPGIT_CSS_THEME_DARK</code> ) - custom color schemes.</li>",3))]),s[11]||(s[11]=t(`<p>A regular page loads: icons, common, default theme, and optionally, one of the custom themes. So the resulting style is defined by a combination of them. <strong>Importantly</strong> custom themes take the default one as the basis, so colors and variables <strong>not</strong> defined explicitly in the theme will be taken from the default one.</p><h3 id="css-variables-support" tabindex="-1"><a class="header-anchor" href="#css-variables-support"><span>CSS Variables Support</span></a></h3><p>Internet explorer - which is the undercover browser component of SAP GUI - does not support CSS variables which are quite useful, for example, color definitions. However, abapGit preprocesses <code>theme-*</code> files, detecting the variables and applying them explicitly to other attributes and classes.</p><p>Internally this is done by a combination of <code>ZCL_ABAPGIT_GUI_HTML_PROCESSOR</code> and <code>ZCL_ABAPGIT_GUI_CSS_PROCESSOR</code>. The first one detects CSS links in the HTML head, the second one merges them into <code>bundle.css</code> which is then re-linked from the HTML head instead of <code>theme-*</code>.</p><p><strong>Debugging note</strong>: the links to the replaced CSS files remain in the HTML head, they are just commented out. So if you what to edit UI files locally, just uncomment them and comment out the <code>bundle.css</code> link.</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;text/css&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;css/common.css&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;text/css&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;css/ag-icons.css&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &lt;!-- by AG HTML preprocessor &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;css/theme-default.css&quot;&gt;--&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &lt;!-- UNCOMMENT THIS ^^^^^^^^^^^^^^^^^^ --&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &lt;!-- by AG HTML preprocessor --&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;text/css&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;css/bundle.css&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &lt;!-- COMMENT THIS ^^^^^^^^^^^^^^^^^^ --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="recommended-asset-development-flow" tabindex="-1"><a class="header-anchor" href="#recommended-asset-development-flow"><span>Recommended Asset Development Flow</span></a></h2><p>To edit CSS files you have to download them to the frontend, edit, debug in IE or Chrome Devtools, and upload them back. Doing so via SMW0 may be inconvenient for multiple assets (main CSS + themes + js). One of the solutions is to use <a href="https://github.com/sbcgua/abap_w3mi_poller" target="_blank" rel="noopener noreferrer">W3MIPOLLER</a>. The idea of the tool is to define a connection between a MIME asset and a frontend file and then monitor file changes - as soon as you save the file, the poller detects it and automatically uploads it to the MIME storage.</p><figure><img src="`+d+'" alt="sel.screen" tabindex="0" loading="lazy"><figcaption>sel.screen</figcaption></figure><p>In the selection screen, you define one or several pairs MIME-to-File. You can also save them as variants. Choose the right option at the bottom:</p><ul><li>Just start polling - just start the detection of changes</li><li>Download before polling - take existing MIME object and overwrite the files - useful for initial setup or after remote AG changes</li><li>Upload before polling - overwrites MIME object with existing files</li></ul><p>Just a handy recommendation: if you save a variant, save it with &quot;just start polling&quot;, not to overwrite something occasionally.</p><p>Run the program. After the initial action (if chosen) it will start monitoring file changes - leave it running. Eventually, after a file was modified, it will report the upload on the screen.</p><figure><img src="'+c+'" alt="result" tabindex="0" loading="lazy"><figcaption>result</figcaption></figure><p>The latest version of the w3mipoller has also an option to track <strong>all</strong> W3MI files in the package (and its sub-packages) at once. This can be convenient in case of simultaneous multiple file editing. Briefly:</p><ul><li>choose the <code>$ABAPGIT</code> package</li><li>choose the root directory to save files to</li><li>optionally enter regex for file names (e.g. &quot;.*css$&quot; if you intend to edit css file only)</li><li>optionally select &quot;Sort by ...&quot; flag to split files by sub-directories by extension (since abapgit html pages refer to <code>css/..</code> and <code>js/..</code> URIs is may be helpful)</li><li>see more in <a href="https://github.com/sbcgua/abap_w3mi_poller" target="_blank" rel="noopener noreferrer">ABAP W3MI poller readme</a></li></ul><figure><img src="'+k+'" alt="whole project" tabindex="0" loading="lazy"><figcaption>whole project</figcaption></figure>',17))])}const b=o(g,[["render",m],["__file","developing-ui-css.html.vue"]]),f=JSON.parse(`{"path":"/development-guide/user-interface/developing-ui-css.html","title":"CSS and Assets","lang":"en-US","frontmatter":{"title":"CSS and Assets","category":"ui","order":30,"description":"This documentation covers asset management, CSS processing, and recommended asset development flow. See also the . TL;DR If you add an asset - code it in ZCL_ABAPGIT_UI_FACTORY=...","head":[["meta",{"property":"og:url","content":"https://docs.abapgit.org/development-guide/user-interface/developing-ui-css.html"}],["meta",{"property":"og:site_name","content":"abapGit Docs"}],["meta",{"property":"og:title","content":"CSS and Assets"}],["meta",{"property":"og:description","content":"This documentation covers asset management, CSS processing, and recommended asset development flow. See also the . TL;DR If you add an asset - code it in ZCL_ABAPGIT_UI_FACTORY=..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://docs.abapgit.org/img/w3mimepoller-1.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-06T06:24:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-06T06:24:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS and Assets\\",\\"image\\":[\\"https://docs.abapgit.org/img/w3mimepoller-1.png\\",\\"https://docs.abapgit.org/img/w3mimepoller-2.png\\",\\"https://docs.abapgit.org/img/w3mimepoller-3.png\\"],\\"dateModified\\":\\"2024-06-06T06:24:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"abapGit\\",\\"url\\":\\"https://github.com/abapGit\\"}]}"]]},"headers":[{"level":2,"title":"TL;DR","slug":"tl-dr","link":"#tl-dr","children":[]},{"level":2,"title":"Asset Manager","slug":"asset-manager","link":"#asset-manager","children":[{"level":3,"title":"Compiling Standalone Version of abapGit (abapmerge)","slug":"compiling-standalone-version-of-abapgit-abapmerge","link":"#compiling-standalone-version-of-abapgit-abapmerge","children":[]}]},{"level":2,"title":"CSS Structure and Themes","slug":"css-structure-and-themes","link":"#css-structure-and-themes","children":[{"level":3,"title":"CSS Variables Support","slug":"css-variables-support","link":"#css-variables-support","children":[]}]},{"level":2,"title":"Recommended Asset Development Flow","slug":"recommended-asset-development-flow","link":"#recommended-asset-development-flow","children":[]}],"git":{"createdTime":1562921613000,"updatedTime":1717655095000,"contributors":[{"name":"Francisco Milán","username":"Francisco Milán","email":"36721657+francisco-milan@users.noreply.github.com","commits":1,"url":"https://github.com/Francisco Milán"},{"name":"Ludwig Stockbauer-Muhr","username":"Ludwig Stockbauer-Muhr","email":"35834861+stockbal@users.noreply.github.com","commits":1,"url":"https://github.com/Ludwig Stockbauer-Muhr"},{"name":"Alexander Tsybulsky","username":"Alexander Tsybulsky","email":"sbcgua@users.noreply.github.com","commits":2,"url":"https://github.com/Alexander Tsybulsky"},{"name":"Marc Bernard","username":"Marc Bernard","email":"59966492+mbtools@users.noreply.github.com","commits":3,"url":"https://github.com/Marc Bernard"},{"name":"Lars Hvam","username":"Lars Hvam","email":"larshp@hotmail.com","commits":1,"url":"https://github.com/Lars Hvam"}]},"readingTime":{"minutes":3.78,"words":1134},"filePathRelative":"development-guide/user-interface/developing-ui-css.md","localizedDate":"July 12, 2019","autoDesc":true,"excerpt":"<p>This documentation covers asset management, CSS processing, and recommended asset development flow. See also the <a href=\\"/development-guide/user-interface/developing-ui.html\\" target=\\"_blank\\">UI - HTML Pages</a>.</p>\\n<h2>TL;DR</h2>\\n<ul>\\n<li>If you add an asset - code it in <code>ZCL_ABAPGIT_UI_FACTORY=&gt;INIT_ASSET_MANAGER</code></li>\\n<li>There are 3 main CSS sheets to mind: <code>ag-icons.css</code> with icon definitions, <code>common.css</code> with layouts (don't use for colors!), and <code>theme-default.css</code> for colors</li>\\n<li>Custom themes (\\"Dark\\" and \\"Belize\\") are combined with \\"Default\\" so that missing attributes are inherited from the default one</li>\\n<li>abapGit uses internal CSS preprocessing to support CSS variables (which are otherwise not supported by IE - undercover browser of SAP GUI)</li>\\n<li>A convenient way for changing and uploading CSS and other assets is <a href=\\"https://github.com/sbcgua/abap_w3mi_poller\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">W3MIPOLLER</a></li>\\n</ul>"}`);export{b as comp,f as data};
