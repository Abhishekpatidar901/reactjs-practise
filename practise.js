async function fetchData(){
    try{
const response = await fetch('');
const data = await response.json();
console.log(data);
    }catch(error){
console.error('Error:',error);
    }
}

async function fetchdataa(){
    try{
const response = await axios.get('');
console.log(response.data);
    }catch(err){
        console.error('Error:',err);
    }
}