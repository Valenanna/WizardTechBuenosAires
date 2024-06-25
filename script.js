
const datos = []

const dato = [{
    id: 1,
    title: 'Iron Man',
    year: 2008
},{
    id: 2,
    title: 'Spiderman',
    year: 2010    
},{
    id: 3,
    title: 'Hulk',
    year: 2013
}];

// const getDatos = () =>{
//    return datos;}
//

const getDatos = () =>{
    return new Promise((resolve, reject) => {
    if(datos.length === 0){
        reject(new Error('No existen Datos'))
    }
    setTimeout(() =>   {
        resolve(datos);
    }, 3000);

    });    
}

//getDatos()
//    .then((datos)=> console.log(datos));

async function fetchingData(){
    try {
    const datosFetched = await getDatos();
    console.log(datosFetched); 
} catch(err) {
    console.log(err.message)
}
}
fetchingData();