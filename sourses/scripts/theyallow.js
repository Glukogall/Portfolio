document.getElementById('theyallowPageDeskBut').onclick = ()=>
{
  document.getElementById('theyallowPageDesk').classList.add('images-visible');
  document.getElementById('theyallowPageMob').classList.remove('images-visible');
}

document.getElementById('theyallowPageMobBut').onclick = ()=>
{
  document.getElementById('theyallowPageMob').classList.add('images-visible');
  document.getElementById('theyallowPageDesk').classList.remove('images-visible');
}
