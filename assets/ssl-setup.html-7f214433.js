import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as c,c as h,a as e,b as t,d as i,w as s,e as n}from"./app-fe79a37a.js";const d="/img/ssl_setup_cryptolib.png",u="/img/ssl_setup_services.png",p="/img/ssl_setup_trust.png",f="/img/ssl_setup_chrome.gif",_="/img/ssl_setup_proxy.png",g={},m=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),t(" Overview")],-1),b=e("p",null,"In general, Git servers require secure connections. Therefore, abapGit is using secure connections based on HTTPS to access Git servers.",-1),S=e("p",null,"Note: Using unsecure HTTP connections is possible but strongly discouraged since the content of your repository would become visible on the network.",-1),y=e("p",null,"To support HTTPS, your SAP system must be configured accordingly:",-1),v=e("ul",null,[e("li",null,"Enabled HTTP/HTTPS service connection in SAP system profile"),e("li",null,"Import Git server certificates into SAP trust manager"),e("li",null,"If necessary, define an HTTP Proxy Server in abapGit settings")],-1),T=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"Note"),e("p",null,"There are usually policies in place of who is permitted to make changes to these settings in your SAP system. Please contact your SAP Basis and network team to coordinate requirements.")],-1),A={href:"http://GitHub.com",target:"_blank",rel:"noopener noreferrer"},P=e("h3",{id:"sap-crypto-library",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sap-crypto-library","aria-hidden":"true"},"#"),t(" SAP Crypto Library")],-1),x=e("p",null,"Secure connections require installation of the SAP Crypto Library (CommonCryptoLib 8). Since SAP NetWeaver 7.4 this library is installed with the system. However, if your system is older or not up-to-date, you might have to update the library to a more recent version.",-1),C=e("div",{class:"hint-container note"},[e("p",{class:"hint-container-title"},"Note"),e("p",null,[t("It's highly recommended to run a recent version of the Crypto Library to avoid known security issues. As of December 2022, the latest version is "),e("code",null,"8.5.47"),t(".")])],-1),w={href:"https://me.sap.com/softwarecenter/template/products/%20_APP=00200682500000001943&_EVENT=DISPHIER&HEADER=Y&FUNCTIONBAR=N&EVENT=TREE&NE=NAVIGATE&ENR=01200615320100002625&V=MAINT&TA=ACTUAL&PAGE=SEARCH/SAPCRYPTOLIB",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,[t("You can find the installed version number in transaction "),e("code",null,"STRUST"),t(" > Environment > Display SSF Version:")],-1),k=e("figure",null,[e("img",{src:d,alt:"ssl_setup_cryptolib",tabindex:"0",loading:"lazy"}),e("figcaption",null,"ssl_setup_cryptolib")],-1),I=e("h3",{id:"sap-system-profile",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sap-system-profile","aria-hidden":"true"},"#"),t(" SAP System Profile")],-1),G={href:"https://me.sap.com/notes/510007",target:"_blank",rel:"noopener noreferrer"},H=n(`<p>The currently recommended settings for TLS v1.2 interoperability are (requiring at least CommonCryptoLib 8.4.38, recommending at least 8.5.4):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssl/ciphersuites             = 135:PFS:HIGH::EC_X25519:EC_P256:EC_HIGH
ssl/client_ciphersuites      = 150:PFS:HIGH::EC_X25519:EC_P256:EC_HIGH
icm/HTTPS/client_sni_enabled = TRUE
ssl/client_sni_enabled       = TRUE

SETENV_26 = SECUDIR=$(DIR_INSTANCE)$(DIR_SEP)sec
SETENV_27 = SAPSSL_CLIENT_CIPHERSUITES=150:PFS:HIGH::EC_X25519:EC_P256:EC_HIGH
SETENV_28 = SAPSSL_CLIENT_SNI_ENABLED=TRUE 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To add profile parameters, use transaction <code>RZ10</code> or update the contents of file <code>DEFAULT.PFL</code> directly. A system restart might be required.</p>`,3),N={href:"https://go.support.sap.com/minisap/#/minisap",target:"_blank",rel:"noopener noreferrer"},q=n('<ul><li>&quot;A4H - SAP NetWeaver AS ABAP 7.4 and above (Linux / SAP HANA)&quot; - <code>/usr/sap/A4H/sys/profile/DEFAULT.PFL</code></li><li>&quot;NPL - SAP NetWeaver 7.x&quot; - <code>/sapmnt/NPL/profile/DEFAULT.PFL</code></li></ul><p>If configured correctly, transaction <code>SMICM</code> &gt; Goto &gt; Services (<code>Shift + F1</code>) will show a green checkmark next to the HTTPS service.</p><figure><img src="'+u+'" alt="ssl_setup_services" tabindex="0" loading="lazy"><figcaption>ssl_setup_services</figcaption></figure><h3 id="sap-trust-manager" tabindex="-1"><a class="header-anchor" href="#sap-trust-manager" aria-hidden="true">#</a> SAP Trust Manager</h3><p>As a default, abapGit uses an anonymous client connection (<code>ANONYM - SSL Client (Anonymous)</code>). A secure connection requires that the Git server certificate is available in the certificate list. The certificate must also be valid!</p><p>First, download the server certificates to you local machine. Then import and add these certificates to your SAP system.</p>',6),L={href:"https://help.sap.com/docs/SAP_NETWEAVER_750/280f016edb8049e998237fcbd80558e7/4c5bdb17f85640f1e10000000a42189c.html",target:"_blank",rel:"noopener noreferrer"},R=n('<p>If done correctly, transaction <code>STRUST</code> will show the Git server certificates in the certificate list.</p><figure><img src="'+p+'" alt="ssl_setup_trust" tabindex="0" loading="lazy"><figcaption>ssl_setup_trust</figcaption></figure><h4 id="download-the-certificate-files" tabindex="-1"><a class="header-anchor" href="#download-the-certificate-files" aria-hidden="true">#</a> Download the Certificate Files</h4><h5 id="option-a-chrome" tabindex="-1"><a class="header-anchor" href="#option-a-chrome" aria-hidden="true">#</a> Option A - Chrome</h5>',4),D={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},U=e("li",null,'Click on the lock icon near the address bar, then click on "Connection is secure"',-1),F=e("li",null,'On the Security tab, click on "Certificate is valid"',-1),V=e("li",null,'Go to the "Details" tab and select "Export..." to download the certificate to a file',-1),M=e("li",null,'In the "Certification hierarchy" box, select the parent node of the GitHub certificate and export it as well. Repeat the same with the root node.',-1),B=e("figure",null,[e("img",{src:f,alt:"ssl_setup_chrome",tabindex:"0",loading:"lazy"}),e("figcaption",null,"ssl_setup_chrome")],-1),O=e("h5",{id:"option-b-firefox",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#option-b-firefox","aria-hidden":"true"},"#"),t(" Option B - Firefox")],-1),W={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},z=e("li",null,'Click on the lock icon and then "More Information ..." and there "View Certificate"',-1),Y=e("li",null,"Switch to the Details Tab and choose the first certificate of the hierarchy and click Export",-1),X=e("li",null,"Do the same for the next certificate in the hierarchy",-1),j=e("h5",{id:"option-c-safari",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#option-c-safari","aria-hidden":"true"},"#"),t(" Option C - Safari")],-1),Z={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},$=e("li",null,'Click on the lock icon and then "View Certificate"',-1),J=e("li",null,"In the certificate hierarchy, select the root certificate",-1),K=e("li",null,"Holding down the Option key (⌥), drag the large certificate icon into a text editor",-1),Q=e("li",null,[t("Save the document as a "),e("code",null,".PEM"),t(" file")],-1),ee=e("h5",{id:"option-d-manual",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#option-d-manual","aria-hidden":"true"},"#"),t(" Option D - Manual")],-1),te=e("li",null,"Goto GitHub, find the certificate that it is using",-1),ie={href:"https://www.digicert.com/digicert-root-certificates.htm",target:"_blank",rel:"noopener noreferrer"},oe=n('<h4 id="install-the-certificate-files" tabindex="-1"><a class="header-anchor" href="#install-the-certificate-files" aria-hidden="true">#</a> Install the Certificate Files</h4><ol><li>Install the certificates in transaction <code>STRUST</code>:</li><li>Click on the Change button</li><li>Open &quot;SSL client Client SSL Client (Anonymous)&quot; folder</li><li>In the third box called &quot;Certificate&quot;, click on the bottom-left button &quot;Import certificate&quot; to bring the certificate into the system</li><li>Select &quot;Add to certificate list&quot;</li><li>Repeat the process for all downloaded certificates</li><li>Save</li></ol><h3 id="abapgit-settings" tabindex="-1"><a class="header-anchor" href="#abapgit-settings" aria-hidden="true">#</a> abapGit Settings</h3><p>If your SAP system is behind a firewall, it might require an HTTP proxy to access the Git server. If this is the case, maintain the proxy host, port, and authentication (user/password) in your global abapGit settings.</p><figure><img src="'+_+'" alt="ssl_setup_proxy" tabindex="0" loading="lazy"><figcaption>ssl_setup_proxy</figcaption></figure><h3 id="testing-the-connection" tabindex="-1"><a class="header-anchor" href="#testing-the-connection" aria-hidden="true">#</a> Testing the Connection</h3>',6),ne=n('<h3 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h3><p>Connection issues typically lead to &quot;Access to resource forbidden&quot; (HTTP 403) or &quot;Misdirected Request&quot; (HTTP 421) errors.</p><ol><li>Go to transaction <code>SMICM</code></li><li>Check that ICM is in status &quot;running&quot; (green light)</li><li>Select Goto &gt; Services and check that the HTTPS service is active (green checkmark)</li><li>Select Goto &gt; Trace Files &gt; Display All to view the ICM trace (<code>dev_icm</code>)</li></ol><ul><li>Check for any errors</li><li>Find the section called &quot;SSL Initialization&quot; and check if it ends with &quot;Success - SapCryptoLib SSL ready!&quot;</li><li>Compare the listed SSL settings to the recommended settings of SAP Note 51007 (and mentioned above)</li></ul><ol start="5"><li>Go to transaction <code>STRUST</code></li><li>Select &quot;SSL client SSL Client (Anonymous)&quot;</li><li>Verify that the required Git server certificates are included in the certificate list</li><li>Check that all required certificates are valid</li></ol><p>The following blog posts on the SAP Community Network might be helpful:</p>',6),re={href:"https://scn.sap.com/people/jens.gleichmann/blog/2008/10/31/calling-webservices-from-abap-via-httpsssl-with-pfx-certificates",target:"_blank",rel:"noopener noreferrer"},se={href:"https://scn.sap.com/people/thomas.jung/blog/2004/11/17/bsp-a-developers-journal-part-xiv--consuming-webservices-with-abap",target:"_blank",rel:"noopener noreferrer"},ae=n('<div class="hint-container info"><p class="hint-container-title">Info</p><p>There might be user exits in play that modify the default connection behavior (see section below). Check which exits are implemented and what values they return!</p></div><h3 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h3><h4 id="actions-requiring-authentication" tabindex="-1"><a class="header-anchor" href="#actions-requiring-authentication" aria-hidden="true">#</a> Actions Requiring Authentication</h4>',3),le=e("strong",null,"private repository",-1),ce=e("strong",null,"pushing to any GitHub repository",-1),he={href:"http://github.com",target:"_blank",rel:"noopener noreferrer"},de={href:"https://api.github.com",target:"_blank",rel:"noopener noreferrer"},ue=e("strong",null,"api",-1),pe={href:"https://github.com/abapGit/abapGit/issues/1491",target:"_blank",rel:"noopener noreferrer"},fe={href:"https://github.com/abapGit/abapGit/issues/6768",target:"_blank",rel:"noopener noreferrer"},_e=n('<h3 id="user-exits" tabindex="-1"><a class="header-anchor" href="#user-exits" aria-hidden="true">#</a> User Exits</h3><p>The following exits are available to customize certain aspects of connection to the Git server using ABAP:</p><ul><li>Using a RFC connection instead of HTTP</li><li>Defining proxy host and port (if abapGit settings are not sufficient)</li><li>Defining the SSL certificate section (if other than <code>ANONYM</code>)</li><li>Identifying local systems and setting logon tickets</li><li>Changing the used HTTP protocol</li></ul>',3),ge=e("h4",{id:"accessing-github",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessing-github","aria-hidden":"true"},"#"),t(" Accessing GitHub")],-1),me={href:"https://githubengineering.com/crypto-removal-notice/",target:"_blank",rel:"noopener noreferrer"},be={href:"https://me.sap.com/notes/510007",target:"_blank",rel:"noopener noreferrer"};function Se(ye,ve){const r=a("RouterLink"),o=a("ExternalLinkIcon");return c(),h("div",null,[m,b,S,y,v,e("p",null,[t("Note: Alternatively, connection details can be defined via "),i(r,{to:"/user-guide/reference/exits.html#exits"},{default:s(()=>[t("user exit")]),_:1}),t(".")]),T,e("p",null,[t("We use "),e("a",A,[t("GitHub.com"),i(o)]),t(" as an example for configuring secure connections. This is also required if you want to clone and contribute to abapGit itself. The setup for other Git servers is quite similar and will require different certificates.")]),P,x,C,e("p",null,[e("a",w,[t("Crypto Library in SAP Download Center"),i(o)])]),E,k,I,e("p",null,[t("See "),e("a",G,[t("SAP Note 510007"),i(o)]),t(", section 7, for detailed information on how to configure your SAP system to support SSL.")]),H,e("p",null,[t("For "),e("a",N,[t("preview, evaluation, and developer versions of SAP NetWeaver"),i(o)]),t(" refer to following locations, depending on your system name:")]),q,e("p",null,[e("a",L,[t("Trust Manager in SAP Documentation"),i(o)])]),R,e("ol",null,[e("li",null,[t("Using Google Chrome to go to "),e("a",D,[t("https://github.com"),i(o)])]),U,F,V,M]),B,O,e("ol",null,[e("li",null,[t("Use Firefox to go to "),e("a",W,[t("https://github.com"),i(o)])]),z,Y,X]),j,e("ol",null,[e("li",null,[t("Use Safari to go to "),e("a",Z,[t("https://github.com"),i(o)])]),$,J,K,Q]),ee,e("ol",null,[te,e("li",null,[t("Download certificate from "),e("a",ie,[t("https://www.digicert.com/digicert-root-certificates.htm"),i(o)])])]),oe,e("p",null,[t("Report "),i(r,{to:"/user-guide/setup/ssl-test.html"},{default:s(()=>[t("ZABAPGIT_TEST_SSL")]),_:1}),t(" can be used to verify that the connection works.")]),ne,e("ul",null,[e("li",null,[e("a",re,[t("Calling WebServices from ABAP via HTTPS/SSL with pfx certificates"),i(o)])]),e("li",null,[e("a",se,[t("BSP a Developer’s Journal Part XIV – Consuming WebServices with ABAP"),i(o)])])]),ae,e("p",null,[t("To perform operations that require authentication, like e.g. cloning a "),le,t(" or "),ce,t(", you need to install not only the certificates for "),e("a",he,[t("github.com"),i(o)]),t(" but also for "),e("a",de,[t("https://"),ue,t(".github.com"),i(o)]),t(". Repeat the download and STRUST import steps for the API server as described in the sections above accordingly (see also "),e("a",pe,[t("#1491"),i(o)]),t(" and "),e("a",fe,[t("#6768"),i(o)]),t(")")]),_e,e("p",null,[t("See "),i(r,{to:"/user-guide/reference/exits.html"},{default:s(()=>[t("User Exits")]),_:1}),t(" for more details.")]),ge,e("p",null,[t("On "),e("a",me,[t("2018-02-22"),i(o)]),t(", GitHub deprecated weak TLS connections. See "),e("a",be,[t("SAP Note 510007"),i(o)]),t(" for details on required profile parameter changes.")])])}const Pe=l(g,[["render",Se],["__file","ssl-setup.html.vue"]]);export{Pe as default};