(()=>{const path=location.pathname.split('/').pop()||'index.html';const openPages=['account.html','about.html',''];const actions=document.querySelector('.header-actions');
 function requireLogin(){location.href='account.html?next='+encodeURIComponent(path||'index.html')}
 if(!window.pantryFirebaseReady){const oldUser=(()=>{try{return JSON.parse(localStorage.getItem('pantrychef_user'))}catch{return null}})();if(!oldUser&&!openPages.includes(path)&&path!=='index.html')location.replace('account.html?next='+encodeURIComponent(path));return}
 pantryAuth.onAuthStateChanged(user=>{
  if(user){const profile={uid:user.uid,name:user.displayName||user.email.split('@')[0],email:user.email};localStorage.setItem('pantrychef_user',JSON.stringify(profile));if(actions){const accountLink=actions.querySelector('a[href="account.html"]');if(accountLink)accountLink.textContent='Hi, '+profile.name;if(!document.getElementById('pantryLogout')){const out=document.createElement('button');out.id='pantryLogout';out.className='btn btn-quiet';out.textContent='Log out';out.addEventListener('click',async()=>{await pantryAuth.signOut();localStorage.removeItem('pantrychef_user');location.href='index.html'});actions.insertBefore(out,actions.lastElementChild||null)}}}
  else{localStorage.removeItem('pantrychef_user');if(!openPages.includes(path)&&path!=='index.html')location.replace('account.html?next='+encodeURIComponent(path))}
 });
 if(path==='index.html'){
  const require=()=>{if(!pantryAuth.currentUser)requireLogin()};
  document.querySelectorAll('.ingredient-chip,#addIngredient,#clearFilters,[data-favorite],[data-open-recipe],#ingredientInput,#categoryFilter,#timeFilter,#sortFilter').forEach(el=>{el.addEventListener('click',e=>{if(!pantryAuth.currentUser){e.preventDefault();e.stopImmediatePropagation();requireLogin()}},true);if(el.matches('input,select'))el.addEventListener('focus',e=>{if(!pantryAuth.currentUser){e.target.blur();requireLogin()}},true)});
 }
})();
