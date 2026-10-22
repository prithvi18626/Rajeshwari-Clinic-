/* ---- EDIT THESE ---- */
const C={phone:"[Phone number]",tel:"",wa:"",addr:"[Clinic address]",hours:"[Days · Hours]",mapHours:"[Opening – closing]",
 areas:["Ponda","[Nearby area]","[Nearby area]","[Nearby area]"],ig:"#",fb:"#",reviews:"https://www.google.com/maps",rating:"[Rating]",count:"[Number]",
 formEndpoint:"" /* optional: URL that receives the form as JSON POST */};
/* -------------------- */
const T=[
["Back & neck pain","Relief for stiffness, strain and nagging pain from desk work or injury.","Stiffness, aching or sharp pain from long hours sitting, poor posture, a strain or an old injury.","A full assessment first, then manual therapy, targeted exercises and posture advice you can keep up at home.","Pain that lasts more than a few days, keeps returning, or spreads to the arm or leg."],
["Joint & knee problems","Care for arthritis, joint pain and recovery after surgery.","Joint pain, swelling or stiffness from arthritis, wear and tear, or recovery after surgery.","Gentle mobilisation, strengthening and guided movement to ease pain and improve how the joint works.","Pain on stairs or walking, morning stiffness, or before and after a joint operation."],
["Sports injuries","Rehab and return-to-play plans for sprains, strains and overuse injuries.","Sprains, strains and overuse injuries from running, gym work or sport.","Hands-on care, strength and mobility work, and a step-by-step plan for returning to your sport.","An injury that is not settling, or when you want to get back to training safely."],
["Stroke & nerve rehabilitation","Structured recovery to rebuild movement, balance and independence.","Weakness, balance problems or loss of movement after a stroke or nerve injury.","Structured exercise and movement retraining to rebuild strength, balance and everyday independence.","As early as your doctor advises, and throughout your recovery."],
["Chiropractic care","Hands-on spinal and joint care, planned after a proper assessment.","Spinal and joint pain that has not eased with rest or simple exercises.","Hands-on adjustment of the spine and joints, planned only after a proper assessment.","Persistent back, neck or joint pain, or restricted movement."],
["Home physiotherapy","Treatment at home for patients who find it hard to travel.","Difficulty travelling to a clinic because of age, recovery or illness.","The same assessment and treatment plan, delivered at your home in Ponda and nearby areas.","After surgery, a stroke or a fall, or whenever coming to the clinic is hard."]];
const NAV=[["home","Home"],["treatments","Treatments"],["home-visits","Home visits"],["about","About"],["contact","Contact"]];
const ph=(l,c="")=>`<div class="ph ${c}"><span>${l}</span></div>`;
const rings='<svg viewBox="0 0 200 200" fill="none" stroke="#fff" stroke-width=".5"><circle cx="100" cy="100" r="90"/><circle cx="130" cy="70" r="60"/></svg>';
const opts=a=>a.map(x=>`<option>${x}</option>`).join("");
const band=(h,p,second)=>`<section class="band green"><div class="wrap"><div><h2>${h}</h2><p>${p}</p></div><div class="row" style="margin:0"><a class="btn b-cream" href="#book">Book an appointment</a>${second}</div></div></section>`;
const callBtn='<a class="btn b-out" data-tel>Call <span data-phone></span></a>';
const waBtn='<a class="btn b-out" data-wa>WhatsApp us</a>';
const consent='<label class="chk"><input type="checkbox" name="consent" required> <span>I agree to be contacted about this request and I have read the <a href="#privacy">privacy policy</a>.</span></label>';
const side=`<div class="box d"><small>Prefer to talk?</small><p>Call or message us and we’ll find a time together.</p><a class="btn b-mint" data-tel>Call <span data-phone></span></a><a class="btn b-wa" data-wa>WhatsApp us</a></div>`;

const P={
home:()=>`
<section class="dark"><div class="wrap hero"><div><div class="eye">Ponda · Physiotherapy clinic</div><h1>Move freely.<br>Live comfortably.</h1>
<p class="lead">Specialist physiotherapy for back and neck pain, joint and knee problems, sports injuries and stroke recovery, at our clinic in Ponda or at your home.</p>
<div class="row"><a class="btn b-mint" href="#book">Book an appointment</a><a class="btn b-out" data-wa>WhatsApp us</a></div></div>
<div class="ph big">${rings}<span>Photo · Treatment in progress</span></div></div></section>
<section class="info"><div class="wrap">
<div class="c"><svg class="i" viewBox="0 0 24 24"><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg><div><small>Visit us</small><span data-addr></span><br>Ponda</div></div>
<div class="c"><svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><div><small>Open</small><span data-hours></span><br>Sunday · by appointment</div></div>
<div class="c"><svg class="i" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg><div><small>Call or WhatsApp</small><span data-phone></span><br>We reply quickly</div></div></div></section>
<section class="sec cream"><div class="wrap"><div class="eye">How to book</div><h2>Booking takes about a minute.</h2><div class="g3" style="margin-top:44px">
${[["Choose how to reach us","Send the short form, message us on WhatsApp, or call the clinic."],["We confirm a time","Our team calls you shortly to agree on a time that suits you."],["Visit or stay home","Come to the clinic in Ponda, or ask for a physiotherapist to visit you at home."]].map((s,i)=>`<div class="step"><div class="n">0${i+1}</div><h4>${s[0]}</h4><p>${s[1]}</p></div>`).join("")}</div></div></section>
<section class="sec sand"><div class="wrap"><div class="head"><div><div class="eye">What we treat</div><h2>Care for the way you move.</h2></div><a class="btn b-out" href="#treatments">View all treatments</a></div>
<div class="cards">${T.map((t,i)=>`<a class="card" href="#${i==5?"home-visits":"treatments"}"><small>0${i+1}</small><h3>${t[0]}</h3><p>${t[1]}</p><span style="color:var(--green);font-size:13px;font-weight:500">${i==5?"Request a home visit":"Learn more"} →</span></a>`).join("")}</div></div></section>
<section class="sec dark"><div class="wrap"><div class="eye">Our approach</div><h2 style="max-width:620px">Treatment planned around you, not a template.</h2><div class="g3" style="margin-top:44px">
${[["Assessment first","We find the cause of your pain before we start any treatment."],["One-to-one sessions","Your physiotherapist stays with you through the session, with time to ask questions."],["A plan you can follow","Clear steps, simple exercises for home, and honest updates on your progress."]].map(s=>`<div class="step"><span style="color:var(--mint)">✦</span><h4>${s[0]}</h4><p>${s[1]}</p></div>`).join("")}</div></div></section>
<section class="sec cream"><div class="wrap"><div class="eye">In their words</div><h2>What patients say.</h2><div class="cards">
${[0,1,2].map(()=>`<div class="card quote"><p>[Patient testimonial. Added only with the patient’s permission.]</p><b>[Patient name]</b><em>[Condition treated]</em></div>`).join("")}</div>
<div class="row" style="align-items:center"><span style="color:var(--mut);font-size:14px">${C.rating} · ${C.count} Google reviews</span><a class="btn b-out" href="${C.reviews}" target="_blank" rel="noopener">Read our Google reviews →</a></div></div></section>
<section class="sec dark"><div class="wrap split">${ph("Photo · Dr Rajeshwari","tall")}<div><div class="eye">The physiotherapist</div><h2>Dr Rajeshwari</h2>
<div style="margin:18px 0"><span class="pill">[Degree]</span><span class="pill">Reg. no. [Number]</span><span class="pill">[X] years’ experience</span></div>
<p class="lead" style="margin-top:0">[Short introduction: training, areas of focus and approach to patient care.]</p><div class="row"><a class="btn b-out" href="#about">Read the full profile →</a></div></div></div></section>
<section class="sec sand"><div class="wrap"><div class="eye">The clinic</div><h2>A calm space for recovery.</h2><div class="gal g4c">${["Reception","Treatment room","Exercise area","Equipment"].map(l=>ph(l,"light")).join("")}</div></div></section>
${band("Ready to feel better?","Tell us what hurts. We’ll call you shortly to find a time.",callBtn)}`,

treatments:()=>`
<section class="dark"><div class="wrap" style="padding:64px 24px 72px"><div class="eye">What we do</div><h1>Treatments.</h1><p class="lead">Care grouped under simple headings, so you can find your problem quickly. Each one explains the problem, how we treat it, and when to visit.</p></div></section>
<section class="cream" style="padding:12px 0 40px"><div class="wrap">${T.map((t,i)=>`<div class="trow"><div><div class="no">0${i+1}</div><h3>${t[0]}</h3></div><div><small>The problem</small><p>${t[2]}</p></div><div><small>How we treat it</small><p>${t[3]}</p></div><div><small>When to visit</small><p>${t[4]}</p>${i==5?'<a href="#home-visits">Request a home visit →</a>':""}</div></div>`).join("")}</div></section>
${band("Not sure which treatment you need?","Tell us what hurts and we’ll point you in the right direction.",waBtn)}`,

about:()=>`
<section class="dark"><div class="wrap split" style="padding:64px 24px">${ph("Photo · Dr Rajeshwari","tall")}<div><div class="eye">The physiotherapist</div><h1>Dr Rajeshwari</h1>
<p style="color:var(--mint);font-size:17px;margin:16px 0">[Qualification] · Physiotherapist and founder</p><p style="color:#b9afa4">[Short professional bio: training, years of practice, areas of focus and the approach she takes with patients.]</p>
<div class="facts"><div><small>Qualification</small>[Degree, university]</div><div><small>Registration</small>[Reg. no., state council]</div><div><small>Experience</small>[X] years</div><div><small>Special interest</small>[Area of focus]</div></div></div></div></section>
<section class="sec cream"><div class="wrap"><div class="eye">Credentials</div><h2 style="max-width:520px">Qualified, registered and accountable.</h2><div class="cards">
${[["Registration certificate","[Council name · registration number]"],["[Degree certificate]","[University · year]"],["[Clinic certification]","[Issuing body · year]"]].map(c=>`<div class="card cert"><div class="ph light"><span>Certificate image</span></div><b>${c[0]}</b><small>${c[1]}</small></div>`).join("")}</div></div></section>
<section class="sec dark"><div class="wrap"><div class="eye">The team</div><h2>The people who will treat you.</h2><div class="g3" style="margin-top:36px">${[0,1,2].map(()=>`<div>${ph("Photo","big").replace("big","")}<h3 style="margin-top:14px">[Team member name]</h3><p style="color:#b9afa4;font-size:13px">[Role · qualification]</p></div>`).join("")}</div></div></section>
<section class="sec sand"><div class="wrap"><div class="eye">The clinic</div><h2>See where you’ll be treated.</h2><div class="gal g3c">${["Reception","Treatment room","Exercise area","Equipment","Waiting area","Entrance"].map(l=>ph(l,"light")).join("")}</div></div></section>
${band("Meet Dr Rajeshwari.","Book a visit and talk through your problem in person.",callBtn)}`,

book:()=>`
<section class="dark"><div class="wrap" style="padding:64px 24px 72px"><div class="eye">Book an appointment</div><h1>Tell us what hurts.</h1><p class="lead">Fill in the short form and we’ll call you shortly. Prefer to talk? Call or message us on WhatsApp.</p></div></section>
<section class="sec cream"><div class="wrap formgrid">
<form class="form" id="f-book" novalidate><div class="eye">Clinic visit</div><h2>Request an appointment</h2>
<label for="n">Full name</label><input id="n" name="name" type="text" placeholder="Your name" required autocomplete="name">
<label for="p">Phone number</label><input id="p" name="phone" type="tel" placeholder="Your mobile number" required autocomplete="tel">
<label for="pr">What is the problem?</label><select id="pr" name="problem">${opts(["Back or neck pain","Joint or knee problem","Sports injury","Stroke or nerve rehabilitation","Chiropractic care","Something else"])}</select>
<div class="two"><div><label for="d">Preferred day</label><input id="d" name="day" type="date"></div><div><label for="t">Preferred time</label><select id="t" name="time">${opts(["Morning","Afternoon","Evening"])}</select></div></div>
<label for="m">Anything else we should know? (optional)</label><textarea id="m" name="notes" placeholder="For example, how long you’ve had the pain"></textarea>
${consent}<div class="err" id="e">Please add your name and phone number.</div>
<div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap"><button class="btn b-ink" type="submit">Send request</button><span style="font-size:12px;color:var(--mut)">Sent instantly to the clinic on WhatsApp and email.</span></div></form>
<aside class="side">${side}<div class="box l"><small>Clinic hours</small>${C.mapHours} Mon–Sat<br>Sunday · by appointment</div><div class="box m"><small>Need treatment at home?</small>We visit patients in Ponda and nearby areas.<br><a class="u" href="#home-visits" style="display:inline-block;margin-top:10px">Request a home visit →</a></div></aside></div></section>`,

"home-visits":()=>`
<section class="dark"><div class="wrap" style="padding:64px 24px 72px"><div class="eye">Home visits</div><h1>Physiotherapy, at your door.</h1><p class="lead">For patients in Ponda and nearby areas who find it hard to travel, because of age, surgery, a stroke or illness.</p></div></section>
<section class="sec sand"><div class="wrap"><div class="eye">How it works</div><h2>Four simple steps.</h2><div class="g4" style="margin-top:40px">
${[["Share your details","Fill in the short form below with your area and the problem."],["We call to confirm","Our team calls shortly to check details and agree a time."],["Physiotherapist visits","Your therapist assesses you at home and starts treatment."],["Follow your plan","You get a clear plan and simple exercises to do between visits."]].map((s,i)=>`<div class="step"><div class="n">0${i+1}</div><h4>${s[0]}</h4><p>${s[1]}</p></div>`).join("")}</div></div></section>
<section class="sec cream"><div class="wrap" style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.6fr);gap:40px;align-items:start" id="hv">
<div><div class="eye">Areas we cover</div><div class="chips">${C.areas.map(a=>`<span>${a}</span>`).join("")}</div><p style="color:var(--mut);font-size:14px">[Travel charge, if any]</p>
<div class="eye" style="margin-top:28px">Who it suits</div><ul style="padding-left:20px;line-height:2"><li>Recovery after surgery</li><li>Stroke and nerve rehabilitation</li><li>Older adults with limited mobility</li><li>Anyone unable to travel to the clinic</li></ul><div class="side" style="margin-top:24px">${side.replace("<p>Call or message us and we’ll find a time together.</p>","")}</div></div>
<form class="form" id="f-home" novalidate><div class="eye">Home visit</div><h2>Request a home visit</h2>
<label for="hn">Patient’s name</label><input id="hn" name="name" type="text" placeholder="Name of the person who needs care" required>
<label for="hp">Contact number</label><input id="hp" name="phone" type="tel" placeholder="Your mobile number" required>
<label for="ha">Area</label><select id="ha" name="area">${opts(C.areas)}</select>
<label for="hr">What is the problem?</label><select id="hr" name="problem">${opts(["Recovery after surgery","Stroke or nerve rehabilitation","Mobility problems with age","Back, neck or joint pain","Something else"])}</select>
<label for="ht">Preferred time</label><select id="ht" name="time">${opts(["Morning","Afternoon","Evening"])}</select>
${consent}<div class="err" id="e">Please add the name and phone number.</div>
<div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap"><button class="btn b-ink" type="submit">Request home visit</button><span style="font-size:12px;color:var(--mut)">We’ll call you shortly to confirm.</span></div></form></div></section>`,

contact:()=>`
<section class="dark"><div class="wrap" style="padding:64px 24px 72px"><div class="eye">Get in touch</div><h1>Visit us in Ponda.</h1><p class="lead">Walk in during clinic hours, call, or message us on WhatsApp. Sundays are by appointment.</p>
<div class="row"><a class="btn b-mint" data-tel>Call <span data-phone></span></a><a class="btn b-wa" data-wa>WhatsApp us</a><a class="btn b-out" href="#book">Book an appointment</a></div></div></section>
<section class="sec cream"><div class="wrap" style="display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:28px" id="cg">
<div class="map"><svg viewBox="0 0 600 440" preserveAspectRatio="xMidYMid slice"><g stroke="#f5ede2" stroke-width="18" fill="none"><path d="M0 230L600 90"/><path d="M0 300L600 360"/><path d="M230 0L170 440"/><path d="M380 0L420 440"/></g><rect x="60" y="60" width="110" height="60" fill="#c9ddd5"/><rect x="330" y="300" width="140" height="80" fill="#c9ddd5"/><path d="M240 195a18 18 0 1 1 36 0c0 14-18 32-18 32s-18-18-18-32z" fill="#416e5c"/><circle cx="258" cy="195" r="6" fill="#fff"/></svg>
<div class="tag"><b>Dr Rajeshwari’s Physioworld</b><br><span data-addr></span>, Ponda</div><a class="btn b-ink" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Physioworld+Ponda">Get directions →</a></div>
<div class="side"><div class="box l"><small>Clinic timings</small><div class="kv"><div>Monday to Saturday<span>${C.mapHours}</span></div><div>Sunday<span>By appointment only</span></div></div></div>
<div class="box l"><small>Getting here</small><div class="kv"><div>Building<span>[Building name]</span></div><div>Floor<span>[Floor]</span></div><div>Landmark<span>[Nearby landmark]</span></div><div>Parking<span>[Parking details]</span></div></div></div>
<div class="box m"><small>Can’t travel?</small>We visit patients at home in Ponda and nearby areas.<br><a class="u" href="#home-visits" style="display:inline-block;margin-top:10px">Request a home visit →</a></div></div></div></section>
<section class="sand" style="padding:56px 0"><div class="wrap head"><div><div class="eye">Reviews</div><h2>See what patients say on Google.</h2><p style="color:var(--mut);margin-top:8px">${C.rating} · ${C.count} Google reviews</p></div><a class="btn b-ink" href="${C.reviews}" target="_blank" rel="noopener">Read Google reviews →</a></div></section>`,

thanks:()=>{const r=window.__req||{};return `<section class="cream"><div class="wrap thanks"><div class="tick"><svg class="i" style="width:28px;height:28px;stroke-width:2.4" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div><div class="eye">Request received</div><h1>Thank you.<br>We’ll call you shortly.</h1>
<p style="color:var(--mut);max-width:440px;margin:20px auto 0">Your appointment request has reached our team. We’ll confirm a time by phone or WhatsApp.</p>
<div class="sum"><div><span>Name</span><b>${r.name||"[Name]"}</b></div><div><span>Problem</span><b>${r.problem||"[Problem]"}</b></div><div><span>Preferred time</span><b>${r.when||"[Day · Time]"}</b></div></div>
<div class="row" style="justify-content:center;margin-top:0"><a class="btn b-ink" href="#home">Back to home</a><a class="btn b-wa" data-wa>WhatsApp us</a></div>
<p style="font-size:13px;color:var(--mut);margin-top:24px">Need us sooner? Call <b data-phone></b>.</p></div></section>`},

privacy:()=>`<section class="cream"><div class="wrap" style="padding:72px 24px;max-width:720px"><div class="eye">Privacy policy</div><h1 style="font-size:44px;color:var(--ink)">How we use your details.</h1><p style="margin-top:20px;color:var(--mut)">[Add your privacy policy here: what you collect through the booking forms, why, who sees it, how long you keep it, and how patients can ask for it to be removed.]</p></div></section>`
};

const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function fill(){
 document.querySelectorAll("[data-phone]").forEach(e=>e.textContent=C.phone);
 document.querySelectorAll("[data-addr]").forEach(e=>e.textContent=C.addr);
 document.querySelectorAll("[data-hours]").forEach(e=>e.textContent=C.hours);
 document.querySelectorAll("[data-tel]").forEach(e=>{if(C.tel)e.href="tel:"+C.tel});
 document.querySelectorAll("[data-wa]").forEach(e=>{if(C.wa){e.href="https://wa.me/"+C.wa;e.target="_blank";e.rel="noopener"}});
 document.querySelectorAll("[data-ig]").forEach(e=>e.href=C.ig);document.querySelectorAll("[data-fb]").forEach(e=>e.href=C.fb);
}
function route(){
 let k=(location.hash||"#home").slice(1);if(!P[k])k="home";
 document.getElementById("app").innerHTML=P[k]();
 const l=document.getElementById("links");l.classList.remove("open");
 l.innerHTML=NAV.map(n=>`<a href="#${n[0]}" class="${n[0]==k?"on":""}">${n[1]}</a>`).join("");
 document.title=(k=="home"?"":NAV.concat([["book","Book an appointment"],["thanks","Thank you"],["privacy","Privacy policy"]]).find(n=>n[0]==k)[1]+" · ")+"Dr Rajeshwari’s Physioworld, Ponda";
 fill();window.scrollTo(0,0);
 document.querySelectorAll("form").forEach(f=>f.addEventListener("submit",ev=>{
  ev.preventDefault();const d=Object.fromEntries(new FormData(f));
  if(!d.name||!d.phone||!d.consent){f.querySelector(".err").style.display="block";return}
  window.__req={name:esc(d.name),problem:esc(d.problem),when:esc([d.day,d.time].filter(Boolean).join(" · ")||d.time||"")};
  if(C.formEndpoint){try{fetch(C.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})}catch(e){}}
  location.hash="#thanks";
 }));
}
document.getElementById("burger").onclick=()=>document.getElementById("links").classList.toggle("open");
addEventListener("hashchange",route);route();
