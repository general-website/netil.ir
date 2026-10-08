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
}`}}function n(e){return e.replace(/\/$/,``)}var r=n(`https://api.netil.ir/vpn`);function i(e){try{return new URL(e).origin}catch{return`https://api.netil.ir`}}var a=i(r),o={vpnApiUrl:r,apiOrigin:a,speed:{endpoints:[{id:`cloudflare`,downloadUrl:`https://speed.cloudflare.com/__down`,uploadUrl:`https://speed.cloudflare.com/__up`,metaUrl:`https://speed.cloudflare.com/meta`},{id:`netil`,downloadUrl:`${a}/speed/down`,uploadUrl:`${a}/speed/up`,metaUrl:`${a}/speed/meta`}],pingSamples:6,downloadBytes:[1e6,5e6,1e7],uploadBytes:[1e6,25e5,5e6],probeTimeoutMs:4e3}};async function s(){let e=await fetch(o.vpnApiUrl,{cache:`no-store`,headers:{Accept:`application/json`}});if(!e.ok)throw Error(`VPN API responded with ${e.status}`);let t=await e.json();if(typeof t!=`object`||!t||!(`vpn`in t)||typeof t.vpn!=`boolean`)throw Error(`Unexpected VPN API payload`);return t.vpn}function c(e){if(e.length===0)return 0;let t=[...e].sort((e,t)=>e-t),n=Math.floor(t.length/2);return t.length%2==0?(t[n-1]+t[n])/2:t[n]}function l(e,t){return t<=0?0:e*8/(t/1e3)/1e6}function u(e){if(typeof e!=`string`)return null;let t=e.trim();return t.length>0?t:null}function d(e,t){return e?typeof t==`number`||typeof t==`string`?`${e} (AS${t})`:e:null}async function f(e){let t=new AbortController,n=window.setTimeout(()=>t.abort(),o.speed.probeTimeoutMs);try{let n=`${e.downloadUrl}?bytes=0&r=${Math.random()}`,r=await fetch(n,{cache:`no-store`,mode:`cors`,signal:t.signal});return r.ok?(await r.arrayBuffer(),!0):!1}catch{return!1}finally{window.clearTimeout(n)}}async function p(){for(let e of o.speed.endpoints)if(await f(e))return e;throw Error(`No reachable speed-test endpoint`)}async function m(e){try{let t=await fetch(e.metaUrl,{cache:`no-store`,mode:`cors`,headers:{Accept:`application/json`}});if(!t.ok)return null;let n=await t.json();return d(u(n.asOrganization),n.asn)}catch{return null}}async function h(e,t){let n=[];for(let r=0;r<t;r++){let t=`${e.downloadUrl}?bytes=0&r=${Math.random()}`,r=performance.now();await(await fetch(t,{cache:`no-store`,mode:`cors`})).arrayBuffer(),n.push(performance.now()-r)}return c(n)}async function g(e,t,n){let r=[];for(let i=0;i<t.length;i++){let a=t[i],o=`${e.downloadUrl}?bytes=${a}&r=${Math.random()}`,s=performance.now(),c=await fetch(o,{cache:`no-store`,mode:`cors`});if(!c.ok||!c.body)throw Error(`download failed: ${c.status}`);let u=c.body.getReader(),d=0;for(;;){let{done:e,value:r}=await u.read();if(e)break;d+=r.byteLength;let o=performance.now()-s;n(l(d,o),(i+d/a)/t.length)}r.push(l(d,performance.now()-s))}return r.length===1?r[0]:c(r.slice(1))}async function _(e,t,n){let r=[];for(let i=0;i<t.length;i++){let a=t[i],o=new Uint8Array(a),s=performance.now(),c=window.setInterval(()=>{let e=performance.now()-s;n(l(Math.min(a,a*e/Math.max(e+500,1)),e),(i+Math.min(e/2e3,.95))/t.length)},120),u=await fetch(`${e.uploadUrl}?r=${Math.random()}`,{method:`POST`,body:o,mode:`cors`,headers:{"Content-Type":`application/octet-stream`}});if(window.clearInterval(c),!u.ok)throw Error(`upload failed: ${u.status}`);await u.arrayBuffer();let d=l(a,performance.now()-s);r.push(d),n(d,(i+1)/t.length)}return r.length===1?r[0]:c(r.slice(1))}async function v(e){let t=t=>{e({pingMs:null,downloadMbps:null,uploadMbps:null,provider:null,endpointId:null,progress:0,liveMbps:null,...t})},n=null,r=null,i=null,a=null,s=null;try{t({phase:`ping`,progress:1});let e=await p();s=e.id;let c=m(e).then(e=>(a=e,e));t({phase:`ping`,endpointId:s,provider:a,progress:4}),n=await h(e,o.speed.pingSamples),a=await c,t({phase:`ping`,pingMs:n,provider:a,endpointId:s,progress:12}),t({phase:`download`,pingMs:n,provider:a,endpointId:s,progress:15}),r=await g(e,o.speed.downloadBytes,(e,r)=>{t({phase:`download`,pingMs:n,provider:a,endpointId:s,downloadMbps:e,liveMbps:e,progress:15+r*45})}),t({phase:`download`,pingMs:n,provider:a,endpointId:s,downloadMbps:r,liveMbps:r,progress:60}),t({phase:`upload`,pingMs:n,downloadMbps:r,provider:a,endpointId:s,progress:62}),i=await _(e,o.speed.uploadBytes,(e,i)=>{t({phase:`upload`,pingMs:n,downloadMbps:r,provider:a,endpointId:s,uploadMbps:e,liveMbps:e,progress:62+i*35})}),t({phase:`done`,pingMs:n,downloadMbps:r,uploadMbps:i,provider:a,endpointId:s,liveMbps:null,progress:100})}catch{t({phase:`error`,pingMs:n,downloadMbps:r,uploadMbps:i,provider:a,endpointId:s,liveMbps:null,progress:0})}}var y=2*Math.PI*85;function b(e){return e===null||Number.isNaN(e)?`—`:e>=100?e.toFixed(0):e.toFixed(1)}function x(e){return e===null||Number.isNaN(e)?`—`:Math.round(e).toString()}function S(e){return e===null?y:y*(1-Math.min(Math.max(e/200,0),1))}function C(n){let r=t(o.vpnApiUrl),i=e;n.innerHTML=`
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
                style="stroke-dasharray: ${y}; stroke-dashoffset: ${y}"
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
  `,w(n),T(n),E(n)}function w(e){let t=e.querySelectorAll(`.tab-btn`),n=e.querySelectorAll(`.code-container`);t.forEach(r=>{r.addEventListener(`click`,()=>{t.forEach(e=>e.classList.remove(`active`)),n.forEach(e=>e.classList.remove(`active`)),r.classList.add(`active`),e.querySelector(`#${r.dataset.tab}`)?.classList.add(`active`)})})}function T(t){let n=t.querySelector(`#statusIndicator`),r=t.querySelector(`#statusText`),i=t.querySelector(`#recheckBtn`);async function a(){n.className=`status-indicator checking`,r.textContent=e.vpn.checking,i.disabled=!0;try{await s()?(n.className=`status-indicator vpn`,r.textContent=e.vpn.on):(n.className=`status-indicator direct`,r.textContent=e.vpn.off)}catch{n.className=`status-indicator error`,r.textContent=e.vpn.error}finally{i.disabled=!1}}i.addEventListener(`click`,()=>{a()}),a()}function E(t){let n=t.querySelector(`#speedBtn`),r=t.querySelector(`#speedPhase`),i=t.querySelector(`#gaugeArc`),a=t.querySelector(`#gaugeNumber`),o=t.querySelector(`#pingValue`),s=t.querySelector(`#downloadValue`),c=t.querySelector(`#uploadValue`),l=t.querySelector(`#providerValue`),u=!1,d=t=>{r.textContent=e.speed.phase[t.phase],o.textContent=x(t.pingMs),s.textContent=b(t.downloadMbps),c.textContent=b(t.uploadMbps),t.provider?l.textContent=t.provider:(t.phase===`done`||t.phase===`error`)&&(l.textContent=e.speed.providerUnknown);let n=t.liveMbps??(t.phase===`done`?t.downloadMbps:null)??t.downloadMbps;t.phase===`ping`?a.textContent=x(t.pingMs):n===null?(t.phase===`idle`||t.phase===`error`)&&(a.textContent=`—`):a.textContent=b(n);let u=t.phase===`ping`?null:t.liveMbps??t.downloadMbps??t.uploadMbps;i.style.strokeDashoffset=String(S(u)),t.phase===`upload`?i.style.stroke=`var(--green)`:t.phase===`error`?i.style.stroke=`var(--red)`:i.style.stroke=`var(--primary)`};n.addEventListener(`click`,()=>{u||(u=!0,n.disabled=!0,n.textContent=e.speed.running,o.textContent=`—`,s.textContent=`—`,c.textContent=`—`,l.textContent=`—`,a.textContent=`—`,i.style.strokeDashoffset=String(y),v(t=>{d(t),(t.phase===`done`||t.phase===`error`)&&(u=!1,n.disabled=!1,n.textContent=e.speed.again)}))})}document.title=e.meta.title;var D=document.querySelector(`meta[name="description"]`);D&&D.setAttribute(`content`,e.meta.description);var O=document.querySelector(`#app`);O&&C(O);
//# sourceMappingURL=index-D7kdL7rL.js.map