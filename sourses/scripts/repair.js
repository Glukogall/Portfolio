
document.getElementById('repairPageDeskBut').onclick = ()=>
{
  document.getElementById('repairPageDesk').classList.add('images-visible');
  document.getElementById('repairPageMob').classList.remove('images-visible');
}

document.getElementById('repairPageMobBut').onclick = ()=>
{
  document.getElementById('repairPageMob').classList.add('images-visible');
  document.getElementById('repairPageDesk').classList.remove('images-visible');
}
