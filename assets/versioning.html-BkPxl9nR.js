import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as r,d as t,e as o,f as n,a as i,r as d,o as p}from"./app-W-jXdfVZ.js";const c={};function h(g,e){const a=d("RouteLink");return p(),l("div",null,[r("p",null,[e[2]||(e[2]=t("abapGit is continuously developed and updated. The main branch always represents the latest ")),o(a,{to:"/user-guide/getting-started/install.html"},{default:n(()=>e[0]||(e[0]=[t("development version")])),_:1}),e[3]||(e[3]=t(" and corresponds to the published ")),o(a,{to:"/user-guide/getting-started/install.html"},{default:n(()=>e[1]||(e[1]=[t("standalone version")])),_:1}),e[4]||(e[4]=t("."))]),e[8]||(e[8]=i('<p>abapGit does not have a predefined release cycle. However, we strive to tag a new version once a month (or two).</p><h2 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>Version</span></a></h2><p>abapGit follows <a href="https://semver.org/" target="_blank" rel="noopener noreferrer">semantic version</a> format. The community has settled on releasing enhancements and changes as minor versions. A more granular approach to releasing every change as a patch is adding too much overhead.</p><p>Example release sequence: <code>1.118.0 &gt; 1.119.0 &gt; 1.120.0</code></p><h2 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog"><span>Changelog</span></a></h2>',5)),r("p",null,[e[6]||(e[6]=t("All additions, changes, fixes, and removals that are relevant to abapGit users are listed in the ")),o(a,{to:"/development-guide/read-first/changelog.html"},{default:n(()=>e[5]||(e[5]=[t("changelog")])),_:1}),e[7]||(e[7]=t("."))]),e[9]||(e[9]=i('<p>Reorgs, refactoring, or changes related to testing or repo actions are omitted from the changelog.</p><p>Since abapGit is enforcing a linear history, you can find all changes in <a href="https://github.com/abapGit/abapGit/commits/main" target="_blank" rel="noopener noreferrer">commit list</a> of the main branch.</p><h2 id="process" tabindex="-1"><a class="header-anchor" href="#process"><span>Process</span></a></h2><p>The following steps need to be taken to create a new abapGit version:</p><ol><li>Create a new branch name like the new version. For example, <code>v1.121.0</code>.</li><li>Update <a href="https://github.com/abapGit/abapGit/blob/main/src/zif_abapgit_version.intf.abap" target="_blank" rel="noopener noreferrer"><code>zif_abapgit_version</code></a> and increase the minor version of constant <code>c_abap_version</code> by one. Example: <code>&#39;1.120.0&#39; &gt; &#39;1.121.&#39;</code>.</li><li>Update <a href="https://github.com/abapGit/abapGit/blob/main/changelog.txt" target="_blank" rel="noopener noreferrer"><code>changelog.txt</code></a> and add a section at the top for the new version.</li><li>Compile a list of the relevant pull requests (see above) based on a comparison between the most recent tag and <code>main</code>. For example, <a href="https://github.com/abapGit/abapGit/compare/v1.123.0...main" target="_blank" rel="noopener noreferrer"><code>v1.123.0</code> vs <code>main</code></a>.</li><li>Label each change (PR) corresponding to the legend (<code>*</code>: fixed, <code>!</code>: changed, <code>+</code>: added, <code>-</code>: removed).</li><li>Create a new, draft pull request from the new branch.</li><li>Have the changes reviewed by someone else.</li><li>On the release day, update the date in the changelog, and merge the pull request.</li></ol><p>The merge will trigger a GitHub action to automatically tag the new release and perform some downstream tasks (like updating the <code>build</code> repository).</p>',6))])}const b=s(c,[["render",h],["__file","versioning.html.vue"]]),v=JSON.parse('{"path":"/development-guide/read-first/versioning.html","title":"Versioning","lang":"en-US","frontmatter":{"title":"Versioning","category":"read-first","order":50,"description":"abapGit is continuously developed and updated. The main branch always represents the latest and corresponds to the published . abapGit does not have a predefined release cycle. ...","head":[["meta",{"property":"og:url","content":"https://docs.abapgit.org/development-guide/read-first/versioning.html"}],["meta",{"property":"og:site_name","content":"abapGit Docs"}],["meta",{"property":"og:title","content":"Versioning"}],["meta",{"property":"og:description","content":"abapGit is continuously developed and updated. The main branch always represents the latest and corresponds to the published . abapGit does not have a predefined release cycle. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-23T16:02:22.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-23T16:02:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Versioning\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-23T16:02:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"abapGit\\",\\"url\\":\\"https://github.com/abapGit\\"}]}"]]},"headers":[{"level":2,"title":"Version","slug":"version","link":"#version","children":[]},{"level":2,"title":"Changelog","slug":"changelog","link":"#changelog","children":[]},{"level":2,"title":"Process","slug":"process","link":"#process","children":[]}],"git":{"createdTime":1671461768000,"updatedTime":1684857742000,"contributors":[{"name":"Marc Bernard","username":"Marc Bernard","email":"59966492+mbtools@users.noreply.github.com","commits":2,"url":"https://github.com/Marc Bernard"},{"name":"Ludwig Stockbauer-Muhr","username":"Ludwig Stockbauer-Muhr","email":"35834861+stockbal@users.noreply.github.com","commits":1,"url":"https://github.com/Ludwig Stockbauer-Muhr"}]},"readingTime":{"minutes":1.08,"words":325},"filePathRelative":"development-guide/read-first/versioning.md","localizedDate":"December 19, 2022","autoDesc":true,"excerpt":"<p>abapGit is continuously developed and updated. The main branch always represents the latest <a href=\\"/user-guide/getting-started/install.html\\" target=\\"_blank\\">development version</a> and corresponds to the published <a href=\\"/user-guide/getting-started/install.html\\" target=\\"_blank\\">standalone version</a>.</p>"}');export{b as comp,v as data};
