var search=document.querySelector('.search')
search.addEventListener('submit', (e)=>{
    e.preventDefault()
   var incoming_data=document.querySelector('[placeholder="Enter USA Currency Name"]')
   var data_value=incoming_data.value
   console.log(data_value) 
   
   var incoming_data1=document.querySelector('[placeholder="Enter India currency Name"]')
   var data_value1=incoming_data1.value
   console.log(data_value1)
   api(data_value,data_value1)
})
async function api(data_value,data_value1){
    var data = fetch(`https://exchange-rates.abstractapi.com/v1/live/?api_key=92eececedcb24c71bd7212d4cbe29df3&base=${data_value}&target=${data_value1}`)
    console.log(data)
    var promise = await data
    var response = promise.json()
    var result = await response
    console.log(result)
    // for(let i of result){
    //     console.log(i.exchange_rates)
    // }
    
   var user_data= document.querySelector('.user_data')
   var user= document.querySelector('.user')
    user.innerHTML=`
    <p class="para"> 1 USD equal to ${result.exchange_rates.INR} Indian rupees</p>
    `
    user_data.append(user)

}

api()