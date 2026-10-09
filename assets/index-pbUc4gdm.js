(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={meta:{title:`Netil | ابزارهای شبکه و اینترنت`,description:`تست سرعت اینترنت و تشخیص روشن بودن VPN — رایگان، سریع و بدون نیاز به نصب.`},brand:{name:`Netil`,tagline:`ابزارهای شبکه و اینترنت`},hero:{title:`Netil`,subtitle:`تست سرعت اینترنت و ابزارهای پرکاربرد`},nav:{speed:`تست سرعت`,vpn:`تشخیص VPN`,api:`API`},speed:{title:`تست سرعت اینترنت`,description:`دانلود، آپلود و پینگ شبکه تان را مستقیم در مرورگر اندازه گیری کنید.`,start:`شروع تست`,running:`در حال تست...`,again:`تست مجدد`,ping:`پینگ`,download:`دانلود`,upload:`آپلود`,provider:`ارائه دهنده`,providerUnknown:`نامشخص`,unitMs:`ms`,unitMbps:`Mbps`,phase:{idle:`آماده برای شروع`,ping:`اندازه گیری پینگ...`,download:`اندازه گیری سرعت دانلود...`,upload:`اندازه گیری سرعت آپلود...`,done:`تست کامل شد`,error:`خطا در انجام تست. دوباره تلاش کنید.`}},vpn:{title:`تشخیص روشن بودن VPN`,description:`وضعیت اتصال را بررسی کنید و از API رایگان برای برنامه های خود استفاده کنید.`,checking:`در حال بررسی...`,recheck:`بررسی مجدد`,on:`فیلترشکن / VPN فعال است.`,off:`اتصال مستقیم و عادی است (VPN خاموش).`,error:`خطا در برقراری ارتباط با سرویس.`,unknown:`در حال استعلام وضعیت شبکه...`},api:{title:`نحوه استفاده از سرویس تشخیص VPN`,description:`خروجی در قالب Boolean خالص (<code>true</code> / <code>false</code>) بازگردانده می شود.`,method:`GET`,path:`/vpn`,tabs:{curl:`cURL`,js:`JavaScript`,python:`Python`,go:`Go`}},footer:{builtBy:`ساخته شده توسط`,author:`فرید کرمی`,authorUrl:`https://faridkarami.ir`}};function t(e){let t=e.replace(/\/$/,``);return{curl:`curl -s ${t}`,js:`fetch("${t}")
  .then(res => res.json())
  .then(isVpn => {
    console.log(isVpn ? "VPN is on" : "VPN is off");
  });`,python:`import requests

is_vpn = requests.get("${t}").json()
print("VPN is on" if is_vpn else "VPN is off")`,go:`package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	resp, _ := http.Get("${t}")
	defer resp.Body.Close()

	var isVPN bool
	json.NewDecoder(resp.Body).Decode(&isVPN)

	if isVPN {
		fmt.Println("VPN is on")
	} else {
		fmt.Println("VPN is off")
	}
}`}}function n(e){return e.replace(/\/$/,``)}var r=n(`https://api.netil.ir/vpn`);function i(e){try{return new URL(e).origin}catch{return`https://api.netil.ir`}}var a=i(r),o={vpnApiUrl:r,apiOrigin:a,speed:{endpoints:[{id:`cloudflare`,downloadUrl:`https://speed.cloudflare.com/__down`,uploadUrl:`https://speed.cloudflare.com/__up`,metaUrl:`https://speed.cloudflare.com/meta`},{id:`netil`,downloadUrl:`${a}/speed/down`,uploadUrl:`${a}/speed/up`,metaUrl:`${a}/speed/meta`}],pingSamples:6,downloadBytes:[1e6,5e6,1e7],uploadBytes:[1e6,25e5,5e6],probeTimeoutMs:4e3}},s={iran_network_providers:{mobile_operators:[{name_fa:`همراه اول (MCI)`,name_en:`Mobile Communication Company of Iran (MCI)`,asns:[`AS197207`]},{name_fa:`ایرانسل (MTN Irancell)`,name_en:`Iran Cell Service and Communication Company`,asns:[`AS44244`]},{name_fa:`رایتل (Rightel)`,name_en:`Rightel Communication Service Company`,asns:[`AS57218`]},{name_fa:`شاتل موبایل`,name_en:`Shatel Mobile`,asns:[`AS34369`]}],fixed_broadband_fcp:[{name_fa:`مخابرات ایران (TCI)`,name_en:`Telecommunication Company of Iran (TCI)`,asns:[`AS58224`]},{name_fa:`شاتل (Aria Shatel)`,name_en:`Aria Shatel PJSC`,asns:[`AS31549`]},{name_fa:`آسیاتک`,name_en:`Asiatech Data Transmission Company`,asns:[`AS43754`]},{name_fa:`پارس آنلاین`,name_en:`Parsan Lin Co.`,asns:[`AS16322`]},{name_fa:`مبین نت`,name_en:`Mobin Net Communication Company`,asns:[`AS47330`]},{name_fa:`های وب (داده گستر عصر نوین)`,name_en:`Dadeh Gostar Asr Novin (HiWeb)`,asns:[`AS44337`]},{name_fa:`پیشگامان`,name_en:`Pishgaman Toseeh Ertebatat`,asns:[`AS3263`,`AS49100`]},{name_fa:`صبانت`,name_en:`Neda Gostar Saba Data Transmission Co.`,asns:[`AS25144`]},{name_fa:`رسپینا`,name_en:`Respina Networks & Beyond`,asns:[`AS42337`]},{name_fa:`افرانت`,name_en:`Afranet`,asns:[`AS25184`]},{name_fa:`فناوا`,name_en:`Fanava Group`,asns:[`AS41881`,`AS24631`]},{name_fa:`سپنتا`,name_en:`Sepanta Communication Development`,asns:[`AS39074`]},{name_fa:`لایزر`,name_en:`Laser Telecommunication Company`,asns:[`AS39501`]},{name_fa:`حلما گستر خاورمیانه`,name_en:`Helma Gostar Khavarmianeh`,asns:[`AS59433`]},{name_fa:`داده پردازی ایران (DPI)`,name_en:`Dadeh Pardazi Iran`,asns:[`AS12393`]}],enterprise_regional:[{name_fa:`سروش رسانه (Sinet)`,name_en:`Soroush Rasaneh Company`,asns:[`AS21341`]},{name_fa:`پتیاک`,name_en:`Petiak Systems`,asns:[`AS48434`]},{name_fa:`ماهان نت`,name_en:`Mahan Net Data Transmission Co.`,asns:[`AS51167`]},{name_fa:`زی تل (Danesh Nehad Arvand)`,name_en:`Danesh Nehad Arvand (Zitel)`,asns:[`AS56402`]},{name_fa:`ابر آروان (ArvanCloud)`,name_en:`ArvanCloud`,asns:[`AS208008`]},{name_fa:`داتک`,name_en:`Datak Telecom`,asns:[`AS25185`]}],infrastructure:[{name_fa:`شرکت ارتباطات زیرساخت (TIC)`,name_en:`Telecommunication Infrastructure Company (TIC)`,asns:[`AS49666`,`AS12880`]}]}};function c(){let e=s.iran_network_providers;return[...e.mobile_operators,...e.fixed_broadband_fcp,...e.enterprise_regional,...e.infrastructure]}function l(e){if(e==null)return null;let t=String(e).trim().toUpperCase();if(!t)return null;let n=t.startsWith(`AS`)?t:`AS${t}`;return/^AS\d+$/.test(n)?n:null}var u=new Map;for(let e of c())for(let t of e.asns){let n=l(t);n&&u.set(n,e)}function d(e){let t=l(e);return t?u.get(t)??null:null}function f(e){return d(e)?.name_fa??null}function p(e){return d(e)!==null}async function m(){let e=await fetch(o.vpnApiUrl,{cache:`no-store`,headers:{Accept:`application/json`}});if(!e.ok)throw Error(`VPN API responded with ${e.status}`);let t=await e.json();if(typeof t!=`boolean`)throw Error(`Unexpected VPN API payload`);return t}async function h(){let e=o.speed.endpoints.find(e=>e.id===`netil`);if(!e)return null;try{let t=await fetch(e.metaUrl,{cache:`no-store`,mode:`cors`,headers:{Accept:`application/json`}});if(!t.ok)return null;let n=await t.json();return typeof n.asn==`number`||typeof n.asn==`string`?n.asn:null}catch{return null}}async function g(){let[e,t]=await Promise.all([m(),h()]);return!!(e||t!==null&&!p(t))}function _(e){if(e.length===0)return 0;let t=[...e].sort((e,t)=>e-t),n=Math.floor(t.length/2);return t.length%2==0?(t[n-1]+t[n])/2:t[n]}function v(e,t){return t<=0?0:e*8/(t/1e3)/1e6}async function y(e){let t=new AbortController,n=window.setTimeout(()=>t.abort(),o.speed.probeTimeoutMs);try{let n=`${e.downloadUrl}?bytes=0&r=${Math.random()}`,r=await fetch(n,{cache:`no-store`,mode:`cors`,signal:t.signal});return r.ok?(await r.arrayBuffer(),!0):!1}catch{return!1}finally{window.clearTimeout(n)}}async function b(){for(let e of o.speed.endpoints)if(await y(e))return e;throw Error(`No reachable speed-test endpoint`)}async function x(e){try{let t=await fetch(e.metaUrl,{cache:`no-store`,mode:`cors`,headers:{Accept:`application/json`}});if(!t.ok)return null;let n=await t.json();return f(typeof n.asn==`number`||typeof n.asn==`string`?n.asn:null)}catch{return null}}async function S(e,t){let n=[];for(let r=0;r<t;r++){let t=`${e.downloadUrl}?bytes=0&r=${Math.random()}`,r=performance.now();await(await fetch(t,{cache:`no-store`,mode:`cors`})).arrayBuffer(),n.push(performance.now()-r)}return _(n)}async function C(e,t,n){let r=[];for(let i=0;i<t.length;i++){let a=t[i],o=`${e.downloadUrl}?bytes=${a}&r=${Math.random()}`,s=performance.now(),c=await fetch(o,{cache:`no-store`,mode:`cors`});if(!c.ok||!c.body)throw Error(`download failed: ${c.status}`);let l=c.body.getReader(),u=0;for(;;){let{done:e,value:r}=await l.read();if(e)break;u+=r.byteLength;let o=performance.now()-s;n(v(u,o),(i+u/a)/t.length)}r.push(v(u,performance.now()-s))}return r.length===1?r[0]:_(r.slice(1))}async function w(e,t,n){let r=[];for(let i=0;i<t.length;i++){let a=t[i],o=new Uint8Array(a),s=performance.now(),c=window.setInterval(()=>{let e=performance.now()-s;n(v(Math.min(a,a*e/Math.max(e+500,1)),e),(i+Math.min(e/2e3,.95))/t.length)},120),l=await fetch(`${e.uploadUrl}?r=${Math.random()}`,{method:`POST`,body:o,mode:`cors`,headers:{"Content-Type":`application/octet-stream`}});if(window.clearInterval(c),!l.ok)throw Error(`upload failed: ${l.status}`);await l.arrayBuffer();let u=v(a,performance.now()-s);r.push(u),n(u,(i+1)/t.length)}return r.length===1?r[0]:_(r.slice(1))}async function T(e){let t=t=>{e({pingMs:null,downloadMbps:null,uploadMbps:null,provider:null,endpointId:null,progress:0,liveMbps:null,...t})},n=null,r=null,i=null,a=null,s=null;try{t({phase:`ping`,progress:1});let e=await b();s=e.id;let c=x(e).then(e=>(a=e,e));t({phase:`ping`,endpointId:s,provider:a,progress:4}),n=await S(e,o.speed.pingSamples),a=await c,t({phase:`ping`,pingMs:n,provider:a,endpointId:s,progress:12}),t({phase:`download`,pingMs:n,provider:a,endpointId:s,progress:15}),r=await C(e,o.speed.downloadBytes,(e,r)=>{t({phase:`download`,pingMs:n,provider:a,endpointId:s,downloadMbps:e,liveMbps:e,progress:15+r*45})}),t({phase:`download`,pingMs:n,provider:a,endpointId:s,downloadMbps:r,liveMbps:r,progress:60}),t({phase:`upload`,pingMs:n,downloadMbps:r,provider:a,endpointId:s,progress:62}),i=await w(e,o.speed.uploadBytes,(e,i)=>{t({phase:`upload`,pingMs:n,downloadMbps:r,provider:a,endpointId:s,uploadMbps:e,liveMbps:e,progress:62+i*35})}),t({phase:`done`,pingMs:n,downloadMbps:r,uploadMbps:i,provider:a,endpointId:s,liveMbps:null,progress:100})}catch{t({phase:`error`,pingMs:n,downloadMbps:r,uploadMbps:i,provider:a,endpointId:s,liveMbps:null,progress:0})}}var E=2*Math.PI*85;function D(e){return e===null||Number.isNaN(e)?`—`:e>=100?e.toFixed(0):e.toFixed(1)}function O(e){return e===null||Number.isNaN(e)?`—`:Math.round(e).toString()}function k(e){return e===null?E:E*(1-Math.min(Math.max(e/200,0),1))}function A(n){let r=t(o.vpnApiUrl),i=e;n.innerHTML=`
    <header class="site-header">
      <div class="brand-mark" aria-hidden="true">N</div>
      <h1>${i.hero.title}</h1>
      <p class="subtitle">${i.hero.subtitle}</p>
      <nav class="nav-pills" aria-label="ابزارها">
        <a href="#speed">${i.nav.speed}</a>
        <a href="#vpn">${i.nav.vpn}</a>
        <a href="#api">${i.nav.api}</a>
      </nav>
    </header>

    <section class="panel" id="speed">
      <h2>${i.speed.title}</h2>
      <p class="desc">${i.speed.description}</p>

      <div class="speed-layout">
        <div class="gauge-wrap">
          <div class="gauge" role="img" aria-label="سرعت اینترنت">
            <svg viewBox="0 0 200 200" aria-hidden="true">
              <circle class="gauge-track" cx="100" cy="100" r="85"></circle>
              <circle
                class="gauge-value"
                id="gaugeArc"
                cx="100"
                cy="100"
                r="85"
                style="stroke-dasharray: ${E}; stroke-dashoffset: ${E}"
              ></circle>
            </svg>
            <div class="gauge-center">
              <div class="gauge-number" id="gaugeNumber">—</div>
              <div class="gauge-unit" id="gaugeUnit">${i.speed.unitMbps}</div>
            </div>
          </div>
          <p class="gauge-phase" id="speedPhase">${i.speed.phase.idle}</p>
        </div>

        <div>
          <div class="metrics">
            <div class="metric">
              <span class="metric-label"><span class="metric-dot ping"></span>${i.speed.ping}</span>
              <span class="metric-value"><span id="pingValue">—</span><span class="unit">${i.speed.unitMs}</span></span>
            </div>
            <div class="metric">
              <span class="metric-label"><span class="metric-dot download"></span>${i.speed.download}</span>
              <span class="metric-value"><span id="downloadValue">—</span><span class="unit">${i.speed.unitMbps}</span></span>
            </div>
            <div class="metric">
              <span class="metric-label"><span class="metric-dot upload"></span>${i.speed.upload}</span>
              <span class="metric-value"><span id="uploadValue">—</span><span class="unit">${i.speed.unitMbps}</span></span>
            </div>
            <div class="metric metric-provider">
              <span class="metric-label"><span class="metric-dot provider"></span>${i.speed.provider}</span>
              <span class="metric-value metric-value-text" id="providerValue">—</span>
            </div>
          </div>
          <div class="btn-row">
            <button type="button" class="btn" id="speedBtn">${i.speed.start}</button>
          </div>
        </div>
      </div>
    </section>

    <section class="panel" id="vpn">
      <h2>${i.vpn.title}</h2>
      <p class="desc">${i.vpn.description}</p>
      <div class="result-box">
        <div class="status-indicator checking" id="statusIndicator"></div>
        <span id="statusText">${i.vpn.unknown}</span>
      </div>
      <button type="button" class="btn" id="recheckBtn">${i.vpn.recheck}</button>
    </section>

    <section class="panel" id="api">
      <h2>${i.api.title}</h2>
      <p class="api-desc">${i.api.description}</p>
      <div class="endpoint-info">
        <span class="method">${i.api.method}</span>
        <span class="path" id="apiPath">${o.vpnApiUrl}</span>
      </div>

      <div class="tabs" role="tablist">
        <button type="button" class="tab-btn active" data-tab="curl" role="tab">${i.api.tabs.curl}</button>
        <button type="button" class="tab-btn" data-tab="js" role="tab">${i.api.tabs.js}</button>
        <button type="button" class="tab-btn" data-tab="python" role="tab">${i.api.tabs.python}</button>
        <button type="button" class="tab-btn" data-tab="go" role="tab">${i.api.tabs.go}</button>
      </div>

      <div class="code-container active" id="curl" role="tabpanel">
        <pre><code>${r.curl}</code></pre>
      </div>
      <div class="code-container" id="js" role="tabpanel">
        <pre><code>${r.js}</code></pre>
      </div>
      <div class="code-container" id="python" role="tabpanel">
        <pre><code>${r.python}</code></pre>
      </div>
      <div class="code-container" id="go" role="tabpanel">
        <pre><code>${r.go}</code></pre>
      </div>
    </section>

    <footer class="site-footer">
      <p>
        ${i.footer.builtBy}
        <a href="${i.footer.authorUrl}" target="_blank" rel="noopener noreferrer">${i.footer.author}</a>
      </p>
    </footer>
  `,j(n),M(n),N(n)}function j(e){let t=e.querySelectorAll(`.tab-btn`),n=e.querySelectorAll(`.code-container`);t.forEach(r=>{r.addEventListener(`click`,()=>{t.forEach(e=>e.classList.remove(`active`)),n.forEach(e=>e.classList.remove(`active`)),r.classList.add(`active`),e.querySelector(`#${r.dataset.tab}`)?.classList.add(`active`)})})}function M(t){let n=t.querySelector(`#statusIndicator`),r=t.querySelector(`#statusText`),i=t.querySelector(`#recheckBtn`);async function a(){n.className=`status-indicator checking`,r.textContent=e.vpn.checking,i.disabled=!0;try{await g()?(n.className=`status-indicator vpn`,r.textContent=e.vpn.on):(n.className=`status-indicator direct`,r.textContent=e.vpn.off)}catch{n.className=`status-indicator error`,r.textContent=e.vpn.error}finally{i.disabled=!1}}i.addEventListener(`click`,()=>{a()}),a()}function N(t){let n=t.querySelector(`#speedBtn`),r=t.querySelector(`#speedPhase`),i=t.querySelector(`#gaugeArc`),a=t.querySelector(`#gaugeNumber`),o=t.querySelector(`#pingValue`),s=t.querySelector(`#downloadValue`),c=t.querySelector(`#uploadValue`),l=t.querySelector(`#providerValue`),u=!1,d=t=>{r.textContent=e.speed.phase[t.phase],o.textContent=O(t.pingMs),s.textContent=D(t.downloadMbps),c.textContent=D(t.uploadMbps),t.provider?l.textContent=t.provider:(t.phase===`done`||t.phase===`error`)&&(l.textContent=e.speed.providerUnknown);let n=t.liveMbps??(t.phase===`done`?t.downloadMbps:null)??t.downloadMbps;t.phase===`ping`?a.textContent=O(t.pingMs):n===null?(t.phase===`idle`||t.phase===`error`)&&(a.textContent=`—`):a.textContent=D(n);let u=t.phase===`ping`?null:t.liveMbps??t.downloadMbps??t.uploadMbps;i.style.strokeDashoffset=String(k(u)),t.phase===`upload`?i.style.stroke=`var(--green)`:t.phase===`error`?i.style.stroke=`var(--red)`:i.style.stroke=`var(--primary)`};n.addEventListener(`click`,()=>{u||(u=!0,n.disabled=!0,n.textContent=e.speed.running,o.textContent=`—`,s.textContent=`—`,c.textContent=`—`,l.textContent=`—`,a.textContent=`—`,i.style.strokeDashoffset=String(E),T(t=>{d(t),(t.phase===`done`||t.phase===`error`)&&(u=!1,n.disabled=!1,n.textContent=e.speed.again)}))})}document.title=e.meta.title;var P=document.querySelector(`meta[name="description"]`);P&&P.setAttribute(`content`,e.meta.description);var F=document.querySelector(`#app`);F&&A(F);
//# sourceMappingURL=index-pbUc4gdm.js.map