const unhappy=document.querySelector('.negative');
const neutral=document.querySelector('.neutral');
const happy=document.querySelector('.positive');
let string='';
let t1=t2=t3=false
unhappy.addEventListener('click',()=>{
  {
    string='unhappy';
    t1=!t1
    t2=t3=false
    unhappy.classList.toggle('active-negative')
    happy.classList.remove('active-positive')
    neutral.classList.remove('active-neutral')
  }
})
neutral.addEventListener('click',()=>{
  {
    string='neutral';
    t2=!t2
    t1=t3=false
    neutral.classList.toggle('active-neutral')
    happy.classList.remove('active-positive')
    unhappy.classList.remove('active-negative')
  }
})
happy.addEventListener('click',()=>{
  {
    string='happy';
    t3=!t3
    t1=t2=false
    happy.classList.toggle('active-positive')
    neutral.classList.remove('active-neutral')
    unhappy.classList.remove('active-negative')

  }
})
document.querySelector('.btn').addEventListener('click',()=>
{ const name=document.querySelector('.input').value;
  if (!t1 && !t2 && !t3)
  {
    document.querySelector('.display').innerHTML='Please select one';
    string=''
  }
  else if(name==='')
  {
    document.querySelector('.display').innerHTML='Please Enter Your Name';
    document.querySelector('.js-alert').innerHTML='*required field'
  }
  else
  {
    document.querySelector('.container').innerHTML=`<h1>Thank You ${name}!</h1><h2>Feedback:${string}</h2><p>We'll use your feedback to improve our customer support.</p>`
  }
})

