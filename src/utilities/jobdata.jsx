const addToDb = id =>{
    const quantity = localStorage.getItem(id);
    if(quantity){
        console.log("ase add kora");
    }
    else{
        localStorage.setItem(id,1);
    }
    
}
export {addToDb}