document.getElementById('education').onclick = ()=>
{document.getElementById('educationList').classList.toggle('education-visible')}


document.getElementById('sliderButtonLeft').onclick = ()=>
{
  document.getElementById('slidRepair').classList.toggle('slide-visible');
  document.getElementById('slideTheyallow').classList.toggle('slide-visible');
}

document.getElementById('sliderButtonRight').onclick = ()=>
{
  document.getElementById('slidRepair').classList.toggle('slide-visible');
  document.getElementById('slideTheyallow').classList.toggle('slide-visible');
}


document.getElementById('theyallowDeskBut').onclick = ()=>
{
  document.getElementById('theyallowDesk').classList.add('images-visible');
  document.getElementById('theyallowMob').classList.remove('images-visible');
}

document.getElementById('theyallowMobBut').onclick = ()=>
{
  document.getElementById('theyallowMob').classList.add('images-visible');
  document.getElementById('theyallowDesk').classList.remove('images-visible');
}



document.getElementById('repairDeskBut').onclick = ()=>
{
  document.getElementById('repairDesk').classList.add('images-visible');
  document.getElementById('repairMob').classList.remove('images-visible');
}

document.getElementById('repairMobBut').onclick = ()=>
{
  document.getElementById('repairMob').classList.add('images-visible');
  document.getElementById('repairDesk').classList.remove('images-visible');
}

