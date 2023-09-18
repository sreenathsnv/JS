// p = new Promise((resolve,reject) =>{
// let a= 1+2

// if (a ==1){resolve('Success')}
// else{reject('Failed')}

// })

// p.then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

// // Changing a callback to promise

// userLogin = true

// function UserStatus(successCallback,errCallback)
// {
//     if(userLogin)
//     {
//         successCallback('User is logged in')
//     }
//     else
//     {
//         errCallback({message:'Sorry! cannot logged in',code : '100'});

//     }
// }

// UserStatus((message)=>{console.log(message)},
// (err)=>{console.log(`${err.message}!! [status code :${err.code}]`)})

// //===============

// function UserStatusPromise()
// {
//     return new Promise((resolve,reject)=>
//     {
//         if(userLogin)
//     {
//         resolve('User is logged in')
//     }
//     else
//     {
//         reject({message:'Sorry! cannot logged in',code : '100'});

//     }
//     })
// }
// UserStatusPromise().then((message)=> {console.log(message)}).catch(({message})=>{console.log(message)})

// function delay()
// {
//     setTimeout(()=>console.log("Hello world"),2000);
// }

// p = new Promise((resolve, reject)=>
//     {
//         let a = 1
//         if( a==1)resolve(delay);
//         else reject('Failed to load');
//     }
// )

// p.then(
//     (call)=> {console.log('inside Promise'); return call}
// )
// .then((call) => {call();
//     console.log('hellooooo')}
// )
// .catch((message)=> console.log(message))

//============================================================================

// function fetchBooks()
// {
   
//     books = {Name:'Alchemist',
//     Auhtor: 'Paulo Coehlo',
//     Publisher : 'ABC'}
//     return books
// }
// let promise = new Promise((resolve,reject)=>{

//     setTimeout( ()=>{resolve(fetchBooks())}, 1000)
//     }
//     )

// promise.then((result) => {

//     console.log(result)
    
// }).catch((err) => {
//     console.log(err)
// });
// ==============================================


// Promise chaining


function getWeather(){

    return new Promise((resolve,reject)=>
    {
       setTimeout(()=> {resolve('sunny');},1000);
      
    })
}

function getWeatherIcon(data)
{
    return new Promise(
        (resolve,reject)=>
        {
            switch(data)
            {
                case 'sunny':
                    resolve('🌞')
                    break
                case 'rainy':
                    resolve('🌧')
                    break
                case 'cloudy':
                    resolve('☁')
                    break
                default:
                    reject('No Icon')
            }
        }
    )
}

function onSuccess(data)
{
    if(data === undefined){return}

    console.log(data)
}
function onFailure(data)
{
    console.log(data)
}

// getWeather()
// .then(getWeatherIcon)
// .then(onSuccess,onFailure)

// wont work check!!
// getWeather()
// .then(onSuccess,onFailure)
// .then(getWeatherIcon)
// .then((message)=>{console.log(`The weather icon is ${message}`)})
getWeather()
.then(getWeatherIcon)
.then((message)=>{console.log(`The weather icon is ${message}`)})
.then(onSuccess,onFailure)