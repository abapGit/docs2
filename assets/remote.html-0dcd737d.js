import{_ as e,X as t,Y as i,a2 as o}from"./framework-c1ee72d8.js";const n="/img/repo_settings_remote_online.png",s="/img/repo_settings_remote_offline.png",r={},a=o('<h2 id="remote-settings" tabindex="-1"><a class="header-anchor" href="#remote-settings" aria-hidden="true">#</a> Remote Settings</h2><p>The following settings define the remote source of the abapGit repository. You can also switch the type of repository between &quot;online&quot; and &quot;offline&quot;.</p><p>Note: Changing the remote settings will <em>not</em> impact any objects in your system. If you want the system to reflect the changes, then you have to pull them into your system after saving the settings.</p><h3 id="online-repositories" tabindex="-1"><a class="header-anchor" href="#online-repositories" aria-hidden="true">#</a> Online Repositories</h3><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Online repositories are specified by the URL. The URL can point to the original repository or a fork of one.</p><p>The head of the repository used by abapGit can be defined in one of four ways:</p><ul><li>Branch</li><li>Tag</li><li>Commit</li><li>Pull Request</li></ul><p>The default setting is to use the main or default branch of the repository (<code>refs/heads/main</code>).</p><h3 id="offline-repositories" tabindex="-1"><a class="header-anchor" href="#offline-repositories" aria-hidden="true">#</a> Offline Repositories</h3><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>You can change the name of offline repositories that is shown in the abapGit repository list.</p>',12),h=[a];function l(f,p){return t(),i("div",null,h)}const d=e(r,[["render",l],["__file","remote.html.vue"]]);export{d as default};