import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as s,c as i,a as e,b as o,d as t,e as l}from"./app-3e11076d.js";const h="/img/sapgui_ie_control.png",p={},c=l('<h2 id="general" tabindex="-1"><a class="header-anchor" href="#general" aria-hidden="true">#</a> General</h2><p>The primary front-end for abapGit is <strong>SAP GUI for Windows</strong>. With limitations, abapGit can work with <em>SAP GUI for Java</em> and <em>SAP GUI for HTML</em>.</p><p>The abapGit application is displayed using a SAP GUI HTML Control embedded in SAP GUI.</p><h3 id="sap-gui-for-windows" tabindex="-1"><a class="header-anchor" href="#sap-gui-for-windows" aria-hidden="true">#</a> SAP GUI for Windows</h3><p>abapGit is working without restrictions for <em>SAP GUI for Windows 7.60</em> or higher when using the HTML Control based on <em>Internet Explorer</em>.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>With <em>SAP GUI for Windows 7.70</em> or higher, there is the option to use <em>Edge (based on Chromium)</em> as the HTML Control.</p><p>Starting with <em>SAP GUI for Windows 8.00</em>, the <em>Edge (based on Chromium)</em> HTML Control is the default setting.</p></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>Using the <em>Edge (based on Chromium)</em> HTML Control with abapGit requires <em>SAP GUI for Windows 7.70 SP 14</em> or <em>SAP GUI for Windows 8.00 SP 3 patch 1 or SP 4</em> or higher (see SAP Note 3331099).</p></div><p>Alternative 1:</p><p>Switch SAP GUI to use the <em>Internet Explorer</em> control in general.</p><figure><img src="'+h+'" alt="SAP GUI IE Control Setting" tabindex="0" loading="lazy"><figcaption>SAP GUI IE Control Setting</figcaption></figure><p>Alternative 2:</p><p>Configure <em>Internet Explorer</em> as a fallback solution for abapGit. The solution is described in SAP Note 2957665:</p><ol><li>Implement SAP Note 3153691</li><li>Add an entry to your Windows registry configuring the fallback for abapGit<br> For your convenience, you can download preconfigured <a href="/assets/BrowserControlFallback.reg">BrowserControllFallback.reg</a><br> and merge it to your registry. It points to <a href="/assets/BrowserControlFallback.xml">BrowserControlFallback.xml</a>.</li></ol><p>Related issue:</p>',14),d={href:"https://github.com/abapGit/abapGit/issues/4841",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/abapGit/abapGit/issues/6339",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"Relevant SAP Notes:",-1),m={href:"https://me.sap.com/notes/2913405",target:"_blank",rel:"noopener noreferrer"},b={href:"https://me.sap.com/notes/2901278",target:"_blank",rel:"noopener noreferrer"},g={href:"https://me.sap.com/notes/2957665",target:"_blank",rel:"noopener noreferrer"},_={href:"https://me.sap.com/notes/3153691",target:"_blank",rel:"noopener noreferrer"},w={href:"https://me.sap.com/notes/3331099",target:"_blank",rel:"noopener noreferrer"},G={href:"https://me.sap.com/notes/3335007",target:"_blank",rel:"noopener noreferrer"},I={href:"https://me.sap.com/notes/3337501",target:"_blank",rel:"noopener noreferrer"},S={href:"https://help.sap.com/docs/sap_gui_for_windows/e8f03b91f99d45f4ae9d90ddf6e44b70/64155e6b9cb84de79ac28b55ec6fa26c.html",target:"_blank",rel:"noopener noreferrer"},A=e("h3",{id:"sap-gui-for-java",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sap-gui-for-java","aria-hidden":"true"},"#"),o(" SAP GUI for Java")],-1),P=e("p",null,[o("When you start abapGit for the first time using "),e("em",null,"SAP GUI for JAVA"),o(", you will get a warning that this GUI is not supported and there might be issues.")],-1),U=e("p",null,"You may confirm that you want to use this GUI anyway and continue.",-1),k=e("p",null,"Known issues:",-1),C={href:"https://github.com/abapGit/abapGit/issues/5082",target:"_blank",rel:"noopener noreferrer"},T=e("h3",{id:"sap-gui-for-html",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sap-gui-for-html","aria-hidden":"true"},"#"),o(" SAP GUI for HTML")],-1),L=e("p",null,[o("abapGit also works with "),e("em",null,"SAP GUI for HTML"),o(". However, there are currently several known issues, which prevent proper usage of this GUI.")],-1),y=e("p",null,"Known issues:",-1),v={href:"https://github.com/abapGit/abapGit/issues/4433",target:"_blank",rel:"noopener noreferrer"},W={href:"https://github.com/abapGit/abapGit/issues/6567",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/abapGit/abapGit/issues/6568",target:"_blank",rel:"noopener noreferrer"},H=e("h3",{id:"browser",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#browser","aria-hidden":"true"},"#"),o(" Browser")],-1),M={href:"https://github.com/abapGit/web-edition",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"This solution is currently limited by the fact that will use several SAP GUI popups that don't work in a browser.",-1);function B(N,R){const r=a("ExternalLinkIcon");return s(),i("div",null,[c,e("ul",null,[e("li",null,[e("a",d,[o("SAP GUI for Windows: Issues with chromium-based browser control (WebView/Edge)"),t(r)])]),e("li",null,[e("a",u,[o("SAP GUI 8.00 SP>=03 / 7.70 SP>=13 chromium browser control not working properly"),t(r)])])]),f,e("ul",null,[e("li",null,[e("a",m,[o("2913405 - SAP GUI for Windows: Dependencies to browsers/browser controls"),t(r)])]),e("li",null,[e("a",b,[o("2901278 - SAP GUI HTML Control based on Chromium Edge: Legacy HTML does not work (correctly) / present limitations"),t(r)])]),e("li",null,[e("a",g,[o("2957665 - SAP GUI HTML Control: Browser Control Fallback Configuration"),t(r)])]),e("li",null,[e("a",_,[o("3153691 - SAP GUI HTML Control: Fallback mechanism is not working sometimes in some applications"),t(r)])]),e("li",null,[e("a",w,[o("3331099 - SAP GUI for Windows Edge HTML control: Custom URI scheme support is now available"),t(r)])]),e("li",null,[e("a",G,[o('3335007 - SAP GUI for Windows Edge HTML control: Edge browser extension "SAP GUI connector for Microsoft Edge" is not working with SAP Logon Pad and NWBC'),t(r)])]),e("li",null,[e("a",I,[o("3337501 - SAP GUI for Windows Edge HTML Control: Crash is observed when calling ABAP method GET_BROWSER_STRING of CL_GUI_HTML_VIEWER"),t(r)])]),e("li",null,[e("a",S,[o("What’s New in SAP GUI for Windows"),t(r)])])]),A,P,U,k,e("ul",null,[e("li",null,[e("a",C,[o("Commit page is non-functional, #5082"),t(r)])])]),T,L,y,e("ul",null,[e("li",null,[e("a",v,[o("Issue running abapGit in WebGUI (SAP GUI for HTML), #4433"),t(r)])]),e("li",null,[e("a",W,[o("SAP GUI for HTML: Toolbar on Repository List not working, #6567"),t(r)])]),e("li",null,[e("a",E,[o("SAP GUI for HTML: Staging does not work correctly, #6568"),t(r)])])]),H,e("p",null,[o("A plain HTML version that runs in any browser is available as a "),e("a",M,[o("proof-of-concept"),t(r)]),o(".")]),x])}const J=n(p,[["render",B],["__file","sapgui.html.vue"]]);export{J as default};
