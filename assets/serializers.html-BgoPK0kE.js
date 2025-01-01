import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as s}from"./app-d4zT3DN9.js";const r={};function o(n,e){return s(),a("div",null,e[0]||(e[0]=[i(`<h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor"><span>Constructor</span></a></h2><p>The constructor is implemented in the superclass and takes two parameters as input:</p><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>IS_ITEM</code></td><td>Contains object type, object name, SAP package, and state (active/inactive)</td></tr><tr><td><code>IV_LANGUAGE</code></td><td>Contains the language key for the main language of the repository</td></tr><tr><td><code>IO_FILES</code></td><td>Collection of files associtated with the object</td></tr><tr><td><code>IO_I18N_PARAMS</code></td><td>Parameters related to translation of objects</td></tr></tbody></table><p>These parameters are stored in attributes <code>MS_ITEM</code>, <code>MV_LANGUAGE</code>, <code>MO_FILES</code>, and <code>MO_I18N_PARAMS</code> respectively.</p><p>Requirements that are necessary to support an object type should be checked in the constructor using the following logic. This is typical if object types are not supported in lower releases.</p><div class="language-abap line-numbers-mode" data-highlighter="shiki" data-ext="abap" data-title="abap" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  METHOD</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> constructor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    DATA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    super</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-&gt;constructor(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      is_item        </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> is_item</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      iv_language    </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> iv_language</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      io_files       </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> io_files</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      io_i18n_params </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> io_i18n_params ).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    TRY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        &quot; Check requirements...</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      CATCH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> cx_root.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        &quot; Raise an exception if not supported</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        zcx_abapgit_exception=&gt;raise( </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Object type SRFC not supported&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ).</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    ENDTRY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  ENDMETHOD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will ensure that none of the other class methods are called, even if objects of the given type exist in a repo.</p><p>Example: <a href="https://github.com/abapGit/abapGit/blob/main/src/objects/zcl_abapgit_object_srfc.clas.abap" target="_blank" rel="noopener noreferrer"><code>SRFC</code></a>.</p><h2 id="interface" tabindex="-1"><a class="header-anchor" href="#interface"><span>Interface</span></a></h2><p>Serializers must implement all methods of interface <a href="https://github.com/abapGit/abapGit/blob/main/src/objects/zif_abapgit_object.intf.abap" target="_blank" rel="noopener noreferrer"><code>ZIF_ABAPGIT_OBJECT</code></a>:</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>SERIALIZE</code></td><td>Contains all process steps to read the relevant object type-specific information and serialize it (as one or more files)</td></tr><tr><td><code>DESERIALIZE</code></td><td>Contains all process steps to create or update an object based on one or more files</td></tr><tr><td><code>DELETE</code></td><td>Contains all process steps to delete an object based on one or more files</td></tr><tr><td><code>EXISTS</code></td><td>Returns whether a given object already exists in any state (i.e. return <code>abap_true</code> for inactive objects)</td></tr><tr><td><code>IS_LOCKED</code></td><td>Returns whether a given object is currently locked</td></tr><tr><td><code>IS_ACTIVE</code></td><td>Returns whether a given object exists in an active state</td></tr><tr><td><code>CHANGED_BY</code></td><td>Returns the name of the user who last changed a given object (if undetermined, return <code>c_user_unknown</code>)</td></tr><tr><td><code>JUMP</code></td><td>Navigates to the corresponding object maintenance screen</td></tr><tr><td><code>GET_METADATA</code></td><td>Returns object-specific metadata (see below)</td></tr><tr><td><code>GET_COMPARATOR</code></td><td>Triggered before deserialization to perform checks (for example, to warn the user that database tables are changed)</td></tr><tr><td><code>GET_DESERIALIZE_STEPS</code></td><td>Defines the deserialzation step or steps used to build the processing sequence (see below)</td></tr><tr><td><code>GET_DESERIALIZE_ORDER</code></td><td>Returns the list of objects that shall be deserialized before an object (optional, see below)</td></tr><tr><td><code>MAP_FILENAME_TO_OBJECT</code></td><td>Derive the object from a given filename (optional)</td></tr><tr><td><code>MAP_OBJECT_TO_FILENAME</code></td><td>Derive the filename from a given object (optional)</td></tr></tbody></table><p>Example: <a href="https://github.com/abapGit/abapGit/blob/main/src/objects/zcl_abapgit_object_doma.clas.abap" target="_blank" rel="noopener noreferrer"><code>DOMA</code></a>.</p><h3 id="metadata" tabindex="-1"><a class="header-anchor" href="#metadata"><span>Metadata</span></a></h3><p>It is mandatory to provide the following metadata:</p><table><thead><tr><th>Attribute</th><th>Description</th></tr></thead><tbody><tr><td><code>CLASS</code></td><td>Technical name used to identify the serializer within serialized XML files (format <code>LCL_OBJECT_{type}</code>)</td></tr><tr><td><code>VERSION</code></td><td>Version number of the serializer (format <code>v1.0.0</code>)</td></tr></tbody></table><p>It&#39;s recommended to fill <code>CLASS</code> and <code>VERSION</code> metadata using <code>SUPER-&gt;GET_METADATA( )</code> and then change settings as required.</p><h3 id="deserialization-step" tabindex="-1"><a class="header-anchor" href="#deserialization-step"><span>Deserialization Step</span></a></h3><p>It is mandatory to provide at least one deserialization step (see below).</p><h3 id="deserialization-order" tabindex="-1"><a class="header-anchor" href="#deserialization-order"><span>Deserialization Order</span></a></h3><p>This method is used to return a list of objects that shall be deserialized before the given object.</p><h2 id="super-class" tabindex="-1"><a class="header-anchor" href="#super-class"><span>Super Class</span></a></h2><p>Serializers can take advantage of the following methods in <a href="https://github.com/abapGit/abapGit/blob/main/src/objects/zcl_abapgit_objects_super.clas.abap" target="_blank" rel="noopener noreferrer"><code>ZCL_ABAPGIT_OBJECTS_SUPER</code></a>:</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>GET_METADATA</code></td><td>Return default metadata for class and version</td></tr><tr><td><code>CORR_INSERT</code></td><td>Insert the object into a transport (for transportable objects)</td></tr><tr><td><code>TADIR_INSERT</code></td><td>Insert the object into TADIR</td></tr><tr><td><code>TADIR_DELETE</code></td><td>Delete the object from TADIR</td></tr><tr><td><code>EXISTS_A_LOCK_ENTRY_FOR</code></td><td>Check if an enqueue lock exists</td></tr><tr><td><code>SET_DEFAULT_PACKAGE</code></td><td>Set SAP package for RS_CORR_INSERT when it can&#39;t be supplied via APIs</td></tr><tr><td><code>SET_DEFAULT_TRANSPORT</code></td><td>Set transport request for RS_CORR_INSERT when it can&#39;t be supplied via APIs</td></tr><tr><td><code>IS_ACTIVE</code></td><td>Method to check if an ABAP Workbench object or its parts are active</td></tr><tr><td><code>DELETE_DDIC</code></td><td>Method to remove DDIC objects</td></tr></tbody></table><p>In addition, there are some methods to handle documents associated with an object (transaction <code>SE61</code>, table <code>DOKIL</code>).</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>SERIALIZE_LONGTEXTS</code></td><td>Serialize document including I18N handling</td></tr><tr><td><code>DESERIALIZE_LONGTEXTS</code></td><td>Deserialize document including I18N handling</td></tr><tr><td><code>DELETE_LONGTEXTS</code></td><td>Delete document</td></tr><tr><td><code>SERIALIZE_LXE_TEXTS</code></td><td>Serialize translation texts (new approach, see below)</td></tr><tr><td><code>DESERIALIZE_LXE_TEXTS</code></td><td>Deserialize translation texts (new approach, see below)</td></tr></tbody></table><h2 id="generic-class" tabindex="-1"><a class="header-anchor" href="#generic-class"><span>Generic Class</span></a></h2><p>If it&#39;s not possible to provide a native implementation for an object serializer, using generic class <a href="https://github.com/abapGit/abapGit/blob/main/src/objects/zcl_abapgit_objects_generic.clas.abap" target="_blank" rel="noopener noreferrer"><code>ZCL_ABAPGIT_OBJECTS_GENERIC</code></a> is possible for logical transport objects (see table <code>OBJH</code>, object type <code>L</code>).</p><p>Example: <a href="https://github.com/abapGit/abapGit/blob/main/src/objects/zcl_abapgit_object_iwmo.clas.abap" target="_blank" rel="noopener noreferrer"><code>IWMO</code></a>.</p><h2 id="serialize-object" tabindex="-1"><a class="header-anchor" href="#serialize-object"><span>Serialize Object</span></a></h2><p>The serialize method shall produce one or several files containing the data that represents a given object. There are a few methods available to define files and attach data using <a href="https://github.com/abapGit/abapGit/blob/main/src/xml/zif_abapgit_xml_output.intf.abap" target="_blank" rel="noopener noreferrer"><code>ZIF_ABAPGIT_OUTPUT_XML</code></a> (input parameter <code>IO_XML</code>).</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>ADD</code></td><td>Append a value, structure, or internal table to the output (using ID transformation to XML suppressing initial fields)</td></tr><tr><td><code>ADD_XML</code></td><td>Append an instance of an XML document to the output (<code>IF_XML_ELEMENT</code>)</td></tr><tr><td><code>SET_RAW</code></td><td>Set the output to an instance of an XML document (<code>IF_XML_ELEMENT</code>)</td></tr><tr><td><code>I18N_PARAMS</code></td><td>Get the settings for internationalization (see below)</td></tr></tbody></table><h2 id="deserialize-object" tabindex="-1"><a class="header-anchor" href="#deserialize-object"><span>Deserialize Object</span></a></h2><p>The deserialize method shall read the file or files representing a given object and create the object in the system. If the object already exists, it shall be updated according to the definition in the file or files. There are a few methods available to process files using <a href="https://github.com/abapGit/abapGit/blob/main/src/xml/zif_abapgit_xml_input.intf.abap" target="_blank" rel="noopener noreferrer"><code>ZIF_ABAPGIT_INPUT_XML</code></a> (input parameter <code>IO_XML</code>).</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>READ</code></td><td>Return a value, structure, or internal table from the input (using ID transformation from XML accepting data loss)</td></tr><tr><td><code>GET_RAW</code></td><td>Return the input as an instance of an XML document (<code>IF_XML_ELEMENT</code>)</td></tr><tr><td><code>GET_METADATA</code></td><td>Return the metadata used at the time of serializing the object</td></tr><tr><td><code>I18N_PARAMS</code></td><td>Get the settings for internationalization (see below)</td></tr></tbody></table><p>In addition, the deserialize method must add or update the TADIR entry for the given object and insert the object into a transport request (for transportable packages). If the used SAP APIs are not performing these tasks, <code>TADIR_INSERT( iv_package )</code> and <code>CORR_INSERT( iv_package )</code> shall be called by the deserialize method.</p><h2 id="activate-object" tabindex="-1"><a class="header-anchor" href="#activate-object"><span>Activate Object</span></a></h2><p>After deserializing, an object (or dependent objects) might have to be activated. Add such objects to the activation queue using [<code>ZCL_ABAPGIT_OBJECTS_ACTIVATION</code>]:</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>ADD</code></td><td>Append a given object type and name to the queue (for example, <code>INDX</code> <code>{table}</code> for database indexes when deserializing tables)</td></tr><tr><td><code>ADD_ITEM</code></td><td>Append a given object to the queue (for example, use <code>ms_item</code> for activating the object itself)</td></tr></tbody></table><p>The activation queue is built separately for each phase (see &#39;Deserialize Process&#39; below).</p><h2 id="internationalization-i18n" tabindex="-1"><a class="header-anchor" href="#internationalization-i18n"><span>Internationalization (I18N)</span></a></h2><p>In general, the serializer class shall process texts of an object in all available languages i.e. the original language as well as any translations. It shall respect the &quot;Serialize Main Language Only&quot; setting of a repository and limit the texts to the language provided to the constructor (<code>MV_LANGUAGE</code>).</p><p>The recommended approach is to check <code>io_xml-&gt;i18n_params( )-main_language_only = abap_false</code> and then serialize the additional translations in the XML (typically using the <code>I18N</code> prefix). During deserialize, the translation languages can then be retrieved and processed accordingly.</p><p>Example: <a href="https://github.com/abapGit/abapGit/blob/main/src/objects/tabl/zcl_abapgit_object_tabl.clas.abap" target="_blank" rel="noopener noreferrer"><code>TABL</code></a>.</p><p>Note: A new approach for serializing translations based on LXE is under development. See <a href="https://github.com/abapGit/abapGit/issues/4470" target="_blank" rel="noopener noreferrer">#4470</a> for further details and discussion.</p><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing"><span>Testing</span></a></h2><p>When adding new serializers, add at least one test repository to the organization <a href="https://github.com/abapGit-tests" target="_blank" rel="noopener noreferrer">abapGit-tests</a> with the name of the object type in capitals (for example, <a href="https://github.com/abapGit-tests/TABL" target="_blank" rel="noopener noreferrer"><code>TABL</code></a>. This test will be used by <a href="https://github.com/abapGit/CI" target="_blank" rel="noopener noreferrer">abapGit Continuous Integration</a>.</p><p>Example (using <code>SUSH</code>):</p><ol><li>Go to https://github.com/abapGit-tests/SUSH and create a fork</li><li>In your system (where you have the new <code>SUSH</code> class), start abapGit and create a new online repo for the URL of your fork (pick any local package like <code>$SUSH</code>).</li><li>Add one <code>SUSH</code> object to this package (like <code>ZAG_UNIT_TEST</code>)</li><li>Go back to abapGit and you should see the new object in the object list of the repo</li><li>Stage everything and commit</li><li>Go to your forked repo and create a pull request (at the top there&#39;s a section showing the delta to the original and a compare button which you can click to create the PR)</li></ol><h2 id="processing-order-and-dependencies" tabindex="-1"><a class="header-anchor" href="#processing-order-and-dependencies"><span>Processing Order and Dependencies</span></a></h2><h3 id="serialize-process" tabindex="-1"><a class="header-anchor" href="#serialize-process"><span>Serialize Process</span></a></h3><p>abapGit determines which objects need to be serialized based on the SAP package assigned to a repository (including sub-packages unless &quot;Ignore sub-packages&quot; is selected in the repository settings). The list of objects is then sorted by package, object type, and object name.</p><p>If a sufficient number of work processes is available, abapGit will activate objects in parallel (unless &quot;Disable Parallel Processing&quot; is selected in the repository settings).</p><p>For details, see <a href="https://github.com/abapGit/abapGit/blob/main/src/objects/core/zcl_abapgit_serialize.clas.abap" target="_blank" rel="noopener noreferrer"><code>ZCL_ABAPGIT_SERIALIZE</code></a>.</p><h3 id="deserialize-process" tabindex="-1"><a class="header-anchor" href="#deserialize-process"><span>Deserialize Process</span></a></h3><p>Objects are deserialized in three phases. After each phase, all objects included in the phase will be activated.</p><table><thead><tr><th>Step</th><th>Description</th><th>Activation</th></tr></thead><tbody><tr><td><code>EARLY</code></td><td>Used for objects (like classes and interfaces) that are dependencies for DDIC objects</td><td>None</td></tr><tr><td><code>DDIC</code></td><td>Used for DDIC objects which require processing and activation before other object types</td><td>DDIC Mass Activation</td></tr><tr><td><code>ABAP</code></td><td>Used for non-DDIC objects (code or mostly anything else) which might depend on DDIC objects</td><td>Workbench Mass Activation</td></tr><tr><td><code>LATE</code></td><td>Used for objects that depend on other objects processed in the previous two phases</td><td>DDIC &amp; Workbench Mass Activation</td></tr></tbody></table><p>Within each phase, the sequence of objects is determined by abapGit based on known object type dependencies. For details, see method <code>PRIORITIZE_DESER</code> in <a href="https://github.com/abapGit/abapGit/blob/main/src/objects/core/zcl_abapgit_file_deserialize.clas.abap" target="_blank" rel="noopener noreferrer"><code>ZCL_ABAPGIT_FILE_DESERIALIZE</code></a>.</p><h3 id="uninstall-process" tabindex="-1"><a class="header-anchor" href="#uninstall-process"><span>Uninstall Process</span></a></h3><p>During the uninstallation of a repository, abapGit will determine the objects in the same fashion as the <code>serialize</code> process. The sequence of objects is determined by abapGit based on known object type dependencies. For details, see method <code>RESOLVE</code> in <a href="https://github.com/abapGit/abapGit/blob/main/src/objects/core/zcl_abapgit_dependencies.clas.abap" target="_blank" rel="noopener noreferrer"><code>ZCL_ABAPGIT_DEPENDENCIES</code></a>.</p><p>Note: There are suggestions to <a href="https://github.com/abapGit/abapGit/issues/3536" target="_blank" rel="noopener noreferrer">refactor the logic to determine the processing order</a>.</p>`,60)]))}const l=t(r,[["render",o],["__file","serializers.html.vue"]]),p=JSON.parse('{"path":"/development-guide/serializers/serializers.html","title":"Serializer Class","lang":"en-US","frontmatter":{"title":"Serializer Class","category":"serializers","order":20,"description":"Constructor The constructor is implemented in the superclass and takes two parameters as input: These parameters are stored in attributes MS_ITEM, MV_LANGUAGE, MO_FILES, and MO_...","head":[["meta",{"property":"og:url","content":"https://docs.abapgit.org/development-guide/serializers/serializers.html"}],["meta",{"property":"og:site_name","content":"abapGit Docs"}],["meta",{"property":"og:title","content":"Serializer Class"}],["meta",{"property":"og:description","content":"Constructor The constructor is implemented in the superclass and takes two parameters as input: These parameters are stored in attributes MS_ITEM, MV_LANGUAGE, MO_FILES, and MO_..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-05T12:53:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-05T12:53:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Serializer Class\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-05T12:53:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"abapGit\\",\\"url\\":\\"https://github.com/abapGit\\"}]}"]]},"headers":[{"level":2,"title":"Constructor","slug":"constructor","link":"#constructor","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[{"level":3,"title":"Metadata","slug":"metadata","link":"#metadata","children":[]},{"level":3,"title":"Deserialization Step","slug":"deserialization-step","link":"#deserialization-step","children":[]},{"level":3,"title":"Deserialization Order","slug":"deserialization-order","link":"#deserialization-order","children":[]}]},{"level":2,"title":"Super Class","slug":"super-class","link":"#super-class","children":[]},{"level":2,"title":"Generic Class","slug":"generic-class","link":"#generic-class","children":[]},{"level":2,"title":"Serialize Object","slug":"serialize-object","link":"#serialize-object","children":[]},{"level":2,"title":"Deserialize Object","slug":"deserialize-object","link":"#deserialize-object","children":[]},{"level":2,"title":"Activate Object","slug":"activate-object","link":"#activate-object","children":[]},{"level":2,"title":"Internationalization (I18N)","slug":"internationalization-i18n","link":"#internationalization-i18n","children":[]},{"level":2,"title":"Testing","slug":"testing","link":"#testing","children":[]},{"level":2,"title":"Processing Order and Dependencies","slug":"processing-order-and-dependencies","link":"#processing-order-and-dependencies","children":[{"level":3,"title":"Serialize Process","slug":"serialize-process","link":"#serialize-process","children":[]},{"level":3,"title":"Deserialize Process","slug":"deserialize-process","link":"#deserialize-process","children":[]},{"level":3,"title":"Uninstall Process","slug":"uninstall-process","link":"#uninstall-process","children":[]}]}],"git":{"createdTime":1531040596000,"updatedTime":1712321582000,"contributors":[{"name":"Marc Bernard","username":"Marc Bernard","email":"59966492+mbtools@users.noreply.github.com","commits":11,"url":"https://github.com/Marc Bernard"},{"name":"Ludwig Stockbauer-Muhr","username":"Ludwig Stockbauer-Muhr","email":"35834861+stockbal@users.noreply.github.com","commits":1,"url":"https://github.com/Ludwig Stockbauer-Muhr"},{"name":"Lars Hvam","username":"Lars Hvam","email":"larshp@hotmail.com","commits":11,"url":"https://github.com/Lars Hvam"},{"name":"Fabian Lupa","username":"Fabian Lupa","email":"fabian@lupa.dev","commits":1,"url":"https://github.com/Fabian Lupa"},{"name":"pokrakam","username":"pokrakam","email":"mike@quirky.me.uk","commits":1,"url":"https://github.com/pokrakam"},{"name":"ThomasPloski","username":"ThomasPloski","email":"39330834+ThomasPloski@users.noreply.github.com","commits":1,"url":"https://github.com/ThomasPloski"},{"name":"Martin Fuchs","username":"Martin Fuchs","email":"43238681+mfsap@users.noreply.github.com","commits":1,"url":"https://github.com/Martin Fuchs"},{"name":"larshp","username":"larshp","email":"larshp@hotmail.com","commits":1,"url":"https://github.com/larshp"}]},"readingTime":{"minutes":5.09,"words":1527},"filePathRelative":"development-guide/serializers/serializers.md","localizedDate":"July 8, 2018","autoDesc":true,"excerpt":"<h2>Constructor</h2>\\n<p>The constructor is implemented in the superclass and takes two parameters as input:</p>\\n<table>\\n<thead>\\n<tr>\\n<th>Parameter</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>IS_ITEM</code></td>\\n<td>Contains object type, object name, SAP package, and state (active/inactive)</td>\\n</tr>\\n<tr>\\n<td><code>IV_LANGUAGE</code></td>\\n<td>Contains the language key for the main language of the repository</td>\\n</tr>\\n<tr>\\n<td><code>IO_FILES</code></td>\\n<td>Collection of files associtated with the object</td>\\n</tr>\\n<tr>\\n<td><code>IO_I18N_PARAMS</code></td>\\n<td>Parameters related to translation of objects</td>\\n</tr>\\n</tbody>\\n</table>"}');export{l as comp,p as data};