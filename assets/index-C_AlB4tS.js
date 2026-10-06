(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={meta:{title:`Netil | ابزارهای شبکه و اینترنت`,description:`تست سرعت اینترنت و تشخیص روشن بودن VPN — رایگان، سریع و بدون نیاز به نصب.`},brand:{name:`Netil`,tagline:`ابزارهای شبکه و اینترنت`},hero:{title:`Netil`,subtitle:`تست سرعت اینترنت و ابزارهای پرکاربرد`},nav:{speed:`تست سرعت`,vpn:`تشخیص VPN`,api:`API`},speed:{title:`تست سرعت اینترنت`,description:`دانلود، آپلود و تأخیر شبکه تان را مستقیم در مرورگر اندازه گیری کنید.`,start:`شروع تست`,running:`در حال تست...`,again:`تست مجدد`,ping:`پینگ`,download:`دانلود`,upload:`آپلود`,provider:`ارائه‌دهنده`,providerUnknown:`نامشخص`,unitMs:`ms`,unitMbps:`Mbps`,phase:{idle:`آماده برای شروع`,ping:`اندازه‌گیری تأخیر...`,download:`اندازه‌گیری سرعت دانلود...`,upload:`اندازه‌گیری سرعت آپلود...`,done:`تست کامل شد`,error:`خطا در انجام تست. دوباره تلاش کنید.`},note:`تست فقط در مرورگر شما اجرا می شود و به وب سرویس اختصاصی وابسته نیست.`},vpn:{title:`تشخیص روشن بودن VPN`,description:`وضعیت اتصال را بررسی کنید و از API رایگان برای برنامه های خود استفاده کنید.`,checking:`در حال بررسی...`,recheck:`بررسی مجدد`,on:`فیلترشکن / VPN فعال است.`,off:`اتصال مستقیم و عادی است (VPN خاموش).`,error:`خطا در برقراری ارتباط با سرویس.`,unknown:`در حال استعلام وضعیت شبکه...`},api:{title:`نحوه استفاده از سرویس تشخیص VPN`,description:`خروجی در قالب Boolean خالص (<code>true</code> / <code>false</code>) بازگردانده می شود.`,method:`GET`,path:`/vpn`,tabs:{curl:`cURL`,js:`JavaScript`,python:`Python`,go:`Go`}},footer:{builtBy:`ساخته شده توسط`,author:`فرید کرمی`,authorUrl:`https://faridkarami.ir`}};function t(e){let t=e.replace(/\/$/,``);return{curl:`curl -s ${t}`,js:`fetch("${t}")
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
}`}}var n={vpnApiUrl:`https://api.netil.ir/vpn`.replace(/\/$/,``)||`https://api.netil.ir/vpn`,speed:{downloadUrl:`https://speed.cloudflare.com/__down`,uploadUrl:`https://speed.cloudflare.com/__up`,metaUrl:`https://speed.cloudflare.com/meta`,ispFallbackUrl:`https://ipwho.is/`,pingSamples:6,downloadBytes:[1e6,5e6,1e7],uploadBytes:[1e6,25e5,5e6]}};async function r(){let e=await fetch(n.vpnApiUrl,{cache:`no-store`,headers:{Accept:`application/json`}});if(!e.ok)throw Error(`VPN API responded with ${e.status}`);let t=await e.json();if(typeof t!=`boolean`)throw Error(`Unexpected VPN API payload`);return t}function i(e){if(e.length===0)return 0;let t=[...e].sort((e,t)=>e-t),n=Math.floor(t.length/2);return t.length%2==0?(t[n-1]+t[n])/2:t[n]}function a(e,t){return t<=0?0:e*8/(t/1e3)/1e6}function o(e){if(typeof e!=`string`)return null;let t=e.trim();return t.length>0?t:null}async function s(){try{let e=await fetch(n.speed.metaUrl,{cache:`no-store`,mode:`cors`,headers:{Accept:`application/json`}});if(e.ok){let t=await e.json(),n=o(t.asOrganization);if(n)return typeof t.asn==`number`||typeof t.asn==`string`?`${n} (AS${t.asn})`:n}}catch{}try{let e=await fetch(n.speed.ispFallbackUrl,{cache:`no-store`,mode:`cors`,headers:{Accept:`application/json`}});if(!e.ok)return null;let t=await e.json();if(t.success===!1)return null;let r=o(t.connection?.isp)??o(t.connection?.org);if(!r)return null;let i=t.connection?.asn;return typeof i==`number`||typeof i==`string`?`${r} (AS${i})`:r}catch{return null}}async function c(e){let t=[],{downloadUrl:r}=n.speed;for(let n=0;n<e;n++){let e=`${r}?bytes=0&r=${Math.random()}`,n=performance.now();await(await fetch(e,{cache:`no-store`,mode:`cors`})).arrayBuffer(),t.push(performance.now()-n)}return i(t)}async function l(e,t){let{downloadUrl:r}=n.speed,o=[];for(let n=0;n<e.length;n++){let i=e[n],s=`${r}?bytes=${i}&r=${Math.random()}`,c=performance.now(),l=await fetch(s,{cache:`no-store`,mode:`cors`});if(!l.ok||!l.body)throw Error(`download failed: ${l.status}`);let u=l.body.getReader(),d=0;for(;;){let{done:r,value:o}=await u.read();if(r)break;d+=o.byteLength;let s=performance.now()-c;t(a(d,s),(n+d/i)/e.length)}o.push(a(d,performance.now()-c))}return o.length===1?o[0]:i(o.slice(1))}async function u(e,t){let{uploadUrl:r}=n.speed,o=[];for(let n=0;n<e.length;n++){let i=e[n],s=new Uint8Array(i),c=performance.now(),l=window.setInterval(()=>{let r=performance.now()-c;t(a(Math.min(i,i*r/Math.max(r+500,1)),r),(n+Math.min(r/2e3,.95))/e.length)},120),u=await fetch(`${r}?r=${Math.random()}`,{method:`POST`,body:s,mode:`cors`,headers:{"Content-Type":`application/octet-stream`}});if(window.clearInterval(l),!u.ok)throw Error(`upload failed: ${u.status}`);await u.arrayBuffer();let d=a(i,performance.now()-c);o.push(d),t(d,(n+1)/e.length)}return o.length===1?o[0]:i(o.slice(1))}async function d(e){let t=t=>{e({pingMs:null,downloadMbps:null,uploadMbps:null,provider:null,progress:0,liveMbps:null,...t})},r=null,i=null,a=null,o=null;try{t({phase:`ping`,progress:2});let e=s().then(e=>(o=e,e));r=await c(n.speed.pingSamples),o=await e,t({phase:`ping`,pingMs:r,provider:o,progress:12}),t({phase:`download`,pingMs:r,provider:o,progress:15}),i=await l(n.speed.downloadBytes,(e,n)=>{t({phase:`download`,pingMs:r,provider:o,downloadMbps:e,liveMbps:e,progress:15+n*45})}),t({phase:`download`,pingMs:r,provider:o,downloadMbps:i,liveMbps:i,progress:60}),t({phase:`upload`,pingMs:r,downloadMbps:i,provider:o,progress:62}),a=await u(n.speed.uploadBytes,(e,n)=>{t({phase:`upload`,pingMs:r,downloadMbps:i,provider:o,uploadMbps:e,liveMbps:e,progress:62+n*35})}),t({phase:`done`,pingMs:r,downloadMbps:i,uploadMbps:a,provider:o,liveMbps:null,progress:100})}catch{t({phase:`error`,pingMs:r,downloadMbps:i,uploadMbps:a,provider:o,liveMbps:null,progress:0})}}var f=2*Math.PI*85;function p(e){return e===null||Number.isNaN(e)?`—`:e>=100?e.toFixed(0):e.toFixed(1)}function m(e){return e===null||Number.isNaN(e)?`—`:Math.round(e).toString()}function h(e){return e===null?f:f*(1-Math.min(Math.max(e/200,0),1))}function g(r){let i=t(n.vpnApiUrl),a=e;r.innerHTML=`
    <header class="site-header">
      <div class="brand-mark" aria-hidden="true">N</div>
      <h1>${a.hero.title}</h1>
      <p class="subtitle">${a.hero.subtitle}</p>
      <nav class="nav-pills" aria-label="ابزارها">
        <a href="#speed">${a.nav.speed}</a>
        <a href="#vpn">${a.nav.vpn}</a>
        <a href="#api">${a.nav.api}</a>
      </nav>
    </header>

    <section class="panel" id="speed">
      <h2>${a.speed.title}</h2>
      <p class="desc">${a.speed.description}</p>

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
                style="stroke-dasharray: ${f}; stroke-dashoffset: ${f}"
              ></circle>
            </svg>
            <div class="gauge-center">
              <div class="gauge-number" id="gaugeNumber">—</div>
              <div class="gauge-unit" id="gaugeUnit">${a.speed.unitMbps}</div>
            </div>
          </div>
          <p class="gauge-phase" id="speedPhase">${a.speed.phase.idle}</p>
        </div>

        <div>
          <div class="metrics">
            <div class="metric">
              <span class="metric-label"><span class="metric-dot ping"></span>${a.speed.ping}</span>
              <span class="metric-value"><span id="pingValue">—</span><span class="unit">${a.speed.unitMs}</span></span>
            </div>
            <div class="metric">
              <span class="metric-label"><span class="metric-dot download"></span>${a.speed.download}</span>
              <span class="metric-value"><span id="downloadValue">—</span><span class="unit">${a.speed.unitMbps}</span></span>
            </div>
            <div class="metric">
              <span class="metric-label"><span class="metric-dot upload"></span>${a.speed.upload}</span>
              <span class="metric-value"><span id="uploadValue">—</span><span class="unit">${a.speed.unitMbps}</span></span>
            </div>
            <div class="metric metric-provider">
              <span class="metric-label"><span class="metric-dot provider"></span>${a.speed.provider}</span>
              <span class="metric-value metric-value-text" id="providerValue">—</span>
            </div>
          </div>
          <div class="btn-row">
            <button type="button" class="btn" id="speedBtn">${a.speed.start}</button>
          </div>
        </div>
      </div>
      <p class="panel-note">${a.speed.note}</p>
    </section>

    <section class="panel" id="vpn">
      <h2>${a.vpn.title}</h2>
      <p class="desc">${a.vpn.description}</p>
      <div class="result-box">
        <div class="status-indicator checking" id="statusIndicator"></div>
        <span id="statusText">${a.vpn.unknown}</span>
      </div>
      <button type="button" class="btn" id="recheckBtn">${a.vpn.recheck}</button>
    </section>

    <section class="panel" id="api">
      <h2>${a.api.title}</h2>
      <p class="api-desc">${a.api.description}</p>
      <div class="endpoint-info">
        <span class="method">${a.api.method}</span>
        <span class="path" id="apiPath">${n.vpnApiUrl}</span>
      </div>

      <div class="tabs" role="tablist">
        <button type="button" class="tab-btn active" data-tab="curl" role="tab">${a.api.tabs.curl}</button>
        <button type="button" class="tab-btn" data-tab="js" role="tab">${a.api.tabs.js}</button>
        <button type="button" class="tab-btn" data-tab="python" role="tab">${a.api.tabs.python}</button>
        <button type="button" class="tab-btn" data-tab="go" role="tab">${a.api.tabs.go}</button>
      </div>

      <div class="code-container active" id="curl" role="tabpanel">
        <pre><code>${i.curl}</code></pre>
      </div>
      <div class="code-container" id="js" role="tabpanel">
        <pre><code>${i.js}</code></pre>
      </div>
      <div class="code-container" id="python" role="tabpanel">
        <pre><code>${i.python}</code></pre>
      </div>
      <div class="code-container" id="go" role="tabpanel">
        <pre><code>${i.go}</code></pre>
      </div>
    </section>

    <footer class="site-footer">
      <p>
        ${a.footer.builtBy}
        <a href="${a.footer.authorUrl}" target="_blank" rel="noopener noreferrer">${a.footer.author}</a>
      </p>
    </footer>
  `,_(r),v(r),y(r)}function _(e){let t=e.querySelectorAll(`.tab-btn`),n=e.querySelectorAll(`.code-container`);t.forEach(r=>{r.addEventListener(`click`,()=>{t.forEach(e=>e.classList.remove(`active`)),n.forEach(e=>e.classList.remove(`active`)),r.classList.add(`active`),e.querySelector(`#${r.dataset.tab}`)?.classList.add(`active`)})})}function v(t){let n=t.querySelector(`#statusIndicator`),i=t.querySelector(`#statusText`),a=t.querySelector(`#recheckBtn`);async function o(){n.className=`status-indicator checking`,i.textContent=e.vpn.checking,a.disabled=!0;try{await r()?(n.className=`status-indicator vpn`,i.textContent=e.vpn.on):(n.className=`status-indicator direct`,i.textContent=e.vpn.off)}catch{n.className=`status-indicator error`,i.textContent=e.vpn.error}finally{a.disabled=!1}}a.addEventListener(`click`,()=>{o()}),o()}function y(t){let n=t.querySelector(`#speedBtn`),r=t.querySelector(`#speedPhase`),i=t.querySelector(`#gaugeArc`),a=t.querySelector(`#gaugeNumber`),o=t.querySelector(`#pingValue`),s=t.querySelector(`#downloadValue`),c=t.querySelector(`#uploadValue`),l=t.querySelector(`#providerValue`),u=!1,g=t=>{r.textContent=e.speed.phase[t.phase],o.textContent=m(t.pingMs),s.textContent=p(t.downloadMbps),c.textContent=p(t.uploadMbps),t.provider?l.textContent=t.provider:(t.phase===`done`||t.phase===`error`)&&(l.textContent=e.speed.providerUnknown);let n=t.liveMbps??(t.phase===`done`?t.downloadMbps:null)??t.downloadMbps;t.phase===`ping`?a.textContent=m(t.pingMs):n===null?(t.phase===`idle`||t.phase===`error`)&&(a.textContent=`—`):a.textContent=p(n);let u=t.phase===`ping`?null:t.liveMbps??t.downloadMbps??t.uploadMbps;i.style.strokeDashoffset=String(h(u)),t.phase===`upload`?i.style.stroke=`var(--green)`:t.phase===`error`?i.style.stroke=`var(--red)`:i.style.stroke=`var(--primary)`};n.addEventListener(`click`,()=>{u||(u=!0,n.disabled=!0,n.textContent=e.speed.running,o.textContent=`—`,s.textContent=`—`,c.textContent=`—`,l.textContent=`—`,a.textContent=`—`,i.style.strokeDashoffset=String(f),d(t=>{g(t),(t.phase===`done`||t.phase===`error`)&&(u=!1,n.disabled=!1,n.textContent=e.speed.again)}))})}document.title=e.meta.title;var b=document.querySelector(`meta[name="description"]`);b&&b.setAttribute(`content`,e.meta.description);var x=document.querySelector(`#app`);x&&g(x);
//# sourceMappingURL=index-C_AlB4tS.js.map