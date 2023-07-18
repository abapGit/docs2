import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as s,c as n,a as t,b as e,d as i,e as c}from"./app-16f0cc3e.js";const p="/img/ZABAPGIT_CI_selection_screen.png",l="/img/ZABAPGIT_CI_result.png",d="/img/ZABAPGIT_CI_JOB_SCHEDULER.png",h="/img/STMS.png",u={},b=t("h1",{id:"abapgit-ci-tests",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#abapgit-ci-tests","aria-hidden":"true"},"#"),e(" abapGit CI Tests")],-1),g={href:"https://ci.abapgit.org",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/abapGit/CI",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/abapGit-tests",target:"_blank",rel:"noopener noreferrer"},I=c('<ul><li>create a package (if needed)</li><li>clone</li><li>pull</li><li>syntax check</li><li>object check</li><li>create transport request</li><li>purge (uninstall)</li><li>delete transport request</li><li>check for leftovers</li></ul><p>Additionally, a set of generic tests is performed checking the latest abapGit build.</p><p>If there is any error in these steps abapGit CI will indicate that.</p><p>Run report <code>ZABAPGIT_CI_UPDATE_ABAPGIT</code> to update the abapGit repo.</p><p>Run report <code>ZABAPGIT_CI_UPDATE_ABAPGIT_CI</code> to update the abapGit CI repo.</p><p>There are currently three possibilities to run abapGit CI:</p><h2 id="_1-adhoc-ci-with-report-zabapgit-ci" tabindex="-1"><a class="header-anchor" href="#_1-adhoc-ci-with-report-zabapgit-ci" aria-hidden="true">#</a> 1. Adhoc CI with report <code>ZABAPGIT_CI</code></h2><p>Selection screen:</p><figure><img src="'+p+'" alt="abapGit CI selection screen" tabindex="0" loading="lazy"><figcaption>abapGit CI selection screen</figcaption></figure><p>Result list:</p><figure><img src="'+l+'" alt="abapGit CI results" tabindex="0" loading="lazy"><figcaption>abapGit CI results</figcaption></figure><h2 id="_2-rest-api" tabindex="-1"><a class="header-anchor" href="#_2-rest-api" aria-hidden="true">#</a> 2. REST API</h2><p><code>POST /sap/zabapgit_ci/run</code></p><p><a href="/assets/example/response.json">response.json</a></p><h2 id="_3-schedule-job-sequence-with-report-zabapgit-ci-job-scheduler" tabindex="-1"><a class="header-anchor" href="#_3-schedule-job-sequence-with-report-zabapgit-ci-job-scheduler" aria-hidden="true">#</a> 3. Schedule job sequence with report <code>ZABAPGIT_CI_JOB_SCHEDULER</code></h2><p>A job sequence is created with</p><ol><li>Update abapGit repo</li><li>Update abapGit CI repo</li><li>Run abapGit CI</li></ol><figure><img src="'+d+'" alt="abapGit CI job scheduler" tabindex="0" loading="lazy"><figcaption>abapGit CI job scheduler</figcaption></figure><h3 id="check-transportable-packages" tabindex="-1"><a class="header-anchor" href="#check-transportable-packages" aria-hidden="true">#</a> Check transportable packages</h3><p>Optionally you can also let abapGit CI create the repositories in transportable packages. You need to activate the checkbox in the selection screen and specify the transport layer. Then the pull and purge actions will each get recorded into a transport request per repository. These get released and their content is checked to ensure it matches the objects in the repository.</p><p>To set up a suitable transport landscape on the AS ABAP Developer Edition you need to create a new virtual system in STMS (for example <code>EXP</code>, <code>Virtual export system</code>). This serves as a dummy export target for transport requests. Next, you need to create a new transport layer (for example <code>ZEXP</code>) and connect the current system and the virtual system with it. Then save and activate the configuration.</p><figure><img src="'+h+'" alt="STMS transports landscape" tabindex="0" loading="lazy"><figcaption>STMS transports landscape</figcaption></figure><p><strong>Prerequisites:</strong></p><ul><li>abapGit developer version</li><li>SAP NetWeaver 7.50 or higher</li></ul>',24);function m(G,C){const a=o("ExternalLinkIcon");return s(),n("div",null,[b,t("p",null,[e("Results from latest CI run: "),t("a",g,[e("https://ci.abapgit.org"),i(a)])]),t("p",null,[e("Repo "),t("a",_,[e("abapGit CI"),i(a)]),e(" provides basic continuous integration capabilities for abapGit. The repository aims to test the serialization and deserialization of object types, as these cannot be unit-tested properly.")]),t("p",null,[e("The CI process fetches abapGit test repos from "),t("a",f,[e("abapGit Tests"),i(a)]),e(". Then for each repository, the following steps are executed:")]),I])}const y=r(u,[["render",m],["__file","ci.html.vue"]]);export{y as default};