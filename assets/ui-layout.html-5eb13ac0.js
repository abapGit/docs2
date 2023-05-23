import{_ as h,X as d,Y as c,Z as a,$ as e,a0 as t,a1 as o,a2 as s,H as r}from"./framework-c1ee72d8.js";const g="/img/ui_top.png",p="/img/ui_header_online.png",l="/img/ui_header_offline.png",u="/img/ui_header_favorite_off.png",f="/img/ui_header_favorite_on.png",m="/img/ui_header_write_protected.png",_="/img/ui_header_background_mode.png",b="/img/ui_header_branch.png",y="/img/ui_header_tag.png",x="/img/ui_header_commit.png",v="/img/ui_footer.png",k={},w=s('<p>The abapGit user interface is based on HTML. Each page is structured into four sections: top, header, content, and footer.</p><h2 id="page-top" tabindex="-1"><a class="header-anchor" href="#page-top" aria-hidden="true">#</a> Page Top</h2><p>At the top of each page, abapGit displays its logo and the current page title on the left, and optionally menu items on the right.</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>This section is &quot;sticky&quot; and remains at the top of the page when scrolling downwards.</p><h2 id="page-header" tabindex="-1"><a class="header-anchor" href="#page-header" aria-hidden="true">#</a> Page Header</h2><p>Pages in abapGit that are related to a repository contain a header including essential repository information and some useful features.</p><h3 id="icon-and-description" tabindex="-1"><a class="header-anchor" href="#icon-and-description" aria-hidden="true">#</a> Icon and Description</h3><p>Online Repositories:</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Offline Repositories:</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="repository" tabindex="-1"><a class="header-anchor" href="#repository" aria-hidden="true">#</a> Repository</h3><p>For online repositories, abapGit shows the URL, a button to change the remote settings, a button to copy the URL, the current commit, and a button to show the changelog.</p><h3 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h3>',15),z=s('<h3 id="favorite" tabindex="-1"><a class="header-anchor" href="#favorite" aria-hidden="true">#</a> Favorite</h3><p>An icon indicates if a repository is marked as a favorite. Click the icon to toggle the state.</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="write-protection" tabindex="-1"><a class="header-anchor" href="#write-protection" aria-hidden="true">#</a> Write Protection</h3><p>If a repository is protected against changes (in local settings), then the header will show a lock icon.</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="background-mode" tabindex="-1"><a class="header-anchor" href="#background-mode" aria-hidden="true">#</a> Background Mode</h3><p>For repositories that have a defined background mode (in settings), a &quot;BG&quot; icon will be shown.</p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="branch-tag-commit" tabindex="-1"><a class="header-anchor" href="#branch-tag-commit" aria-hidden="true">#</a> Branch / Tag / Commit</h3><p>The currently selected remote is shown on the right of the header. This can be either a branch like &quot;main&quot;, a tag, or a commit (hash).</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Click the name to select a different branch or tag.</p><h3 id="package" tabindex="-1"><a class="header-anchor" href="#package" aria-hidden="true">#</a> Package</h3><p>The root package of the repository is shown on the far left. Click the name to jump to the package maintenance.</p><h2 id="page-content" tabindex="-1"><a class="header-anchor" href="#page-content" aria-hidden="true">#</a> Page Content</h2><p>In the area between header and footer is filled differently depending on the selected page or command. Some pages like the repository list and repository view contain an additional menu bar. Pages that contain input forms, use the top menu bar to switch between forms (like tabs) and a row of buttons at the bottom to select commands.</p><h2 id="page-footer" tabindex="-1"><a class="header-anchor" href="#page-footer" aria-hidden="true">#</a> Page Footer</h2><p>At the end of each page, abapGit displays a footer.</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="sponsor-us" tabindex="-1"><a class="header-anchor" href="#sponsor-us" aria-hidden="true">#</a> Sponsor Us</h3>',24),G={href:"https://abapgit.org/sponsor.html",target:"_blank",rel:"noopener noreferrer"},T=a("h3",{id:"version",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#version","aria-hidden":"true"},"#"),e(" Version")],-1),C={href:"https://abapgit.org/",target:"_blank",rel:"noopener noreferrer"},I=a("h3",{id:"javascript",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#javascript","aria-hidden":"true"},"#"),e(" JavaScript")],-1);function L(P,R){const i=r("RouterLink"),n=r("ExternalLinkIcon");return d(),c("div",null,[w,a("p",null,[e("abapGit allows to display the changelog of a repository and alert the user if a new release is available. You can read instructions on how to add a changelog to your own repository "),t(i,{to:"/development-guide/read-first/changelog.html"},{default:o(()=>[e("here")]),_:1}),e(".")]),z,a("p",null,[e("On the left, you find a link to the "),a("a",G,[e("Sponsor Us"),t(n)]),e(" page. abapGit is exclusively developed and maintained by volunteers. Any donations are highly appreciated.")]),T,a("p",null,[e("In the middle under the abapGit logo, you see the current version of abapGit. This includes version number and a description whether you can running the "),t(i,{to:"/user-guide/getting-started/install.html#install-standalone-version"},{default:o(()=>[e("standalone")]),_:1}),e(" or the "),t(i,{to:"/user-guide/getting-started/install.html#install-developer-version"},{default:o(()=>[e("developer version")]),_:1}),e(".")]),a("p",null,[e("Hovering of the logo shows the backend runtime of the last navigation step. Clicking the logo takes you to the "),a("a",C,[e("abapGit Homepage"),t(n)]),e(".")]),I,a("p",null,[e('On the right, a small texts shows the state of any JavaScript that may be included on the page. In general, this should show "js: OK". In case of issues, the text might show debugging information or no text at all. For details, see '),t(i,{to:"/development-guide/user-interface/developing-ui-js.html"},{default:o(()=>[e("here")]),_:1}),e(".")])])}const B=h(k,[["render",L],["__file","ui-layout.html.vue"]]);export{B as default};
