const Fetchfetcher =()=>{
//create
fetch('https://api.example.com/items',{
    method:'POST',
    header:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
        name:'New Item',
        price:100
    })
})
  .then(response => response.json())
  .then(data => console.log('Created:', data))
  .catch(error=> console.error('Error:', error));

  fetch('https://api.example.com/items')
  .then(response =>response.json())
  .then(data=> console.log('Fetched Data:', data))
  .catch(error=> console.error('Error:',error));

fetch("https://api.example.com/items/1",{
    method:'PUT',
    header:{
        'Content-Type':'applcation/json'
    },
    body:JSON.stringify({
        name:'Updated Item',
        price: 150
    })
}).then(response => response.json())
   .then(data => console.log('Updated:', data))
   .catch(error => console.error('Error:',error));


   fetch('https://api.example.com/items/1',{
    method:'PATCH',
    header:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        price:120
    })

   })
   .then(response => response.json())
   .then(data => console.log('Partially Updated',data))
   .catch(error=> console.error('Error:',error));


   fetch('https://api/example.com/items/1',{
    method:'Delete'
   })
   .then(response =>
   {
    if(response.ok)console.log('Deleted Successfully');
    else throw new Error('Deleted failed');
   } 
   )
   .catch(error=> console.error('Error:',error));
return (
    <>
    <h1>Hello fetch!</h1>
    </>
)
};

export default Fetchfetcher;