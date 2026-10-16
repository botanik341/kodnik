"use strict";
(()=>{
 const link=document.querySelector('.account-link');if(!link)return;
 const pl=document.documentElement.lang==='pl';
 function check(){
 try {
 const key='kodnik-nav-check',pending=JSON.parse(sessionStorage.getItem(key)||'null');
 const match=/^#kodnik-session=([a-f0-9]{32})\.(yes|no|unknown)$/.exec(location.hash);
 if(match&&pending&&match[1]===pending.nonce&&Date.now()-pending.at<30000){
   sessionStorage.removeItem(key);history.replaceState(null,'',location.pathname+location.search+(pending.hash||''));
   if(match[2]==='yes')link.textContent=pl?'Moje konto':'My account';
   return;
 }
 // Avoid redirect loops if a network error or blocked storage interrupted the check.
 if(pending&&Date.now()-pending.at<30000)return;
 const bytes=crypto.getRandomValues(new Uint8Array(16)),nonce=Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');
 sessionStorage.setItem(key,JSON.stringify({nonce,at:Date.now(),hash:location.hash}));
 location.replace('https://kodnik-fulfillment.ujot.workers.dev/session-check.html#'+new URLSearchParams({origin:location.origin,nonce}));
 }catch{} }
 check();addEventListener('pageshow',e=>{if(e.persisted)check();});
})();
