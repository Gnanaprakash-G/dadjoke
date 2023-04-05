const apikey='gM/umj66pf4CjvWKe0GAsQ==NsPnIjAEdErnYEyV'
const options={
  method:'GET',
  headers:{
    'X-Api-Key':apikey
  }
}
const btn=document.querySelector('.js-btn');
const joke=document.querySelector('.joke')
btn.addEventListener('click',async()=>
{
  try 
  {
    joke.innerHTML='updating...'
    btn.disabled=true
    btn.innerHTML='loading...'
    const response=await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1',options)
    const data= await response.json()
    joke.innerHTML=data[0].joke
    btn.disabled=false
    btn.innerHTML='TELL ME A JOKE'
  } catch (error) {
    joke.innerHTML='Make sure you have Internet connection'
    btn.disabled=false
    btn.innerHTML='TELL ME A JOKE'
  }
})
