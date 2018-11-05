export const fetchApiData = async ()=>{
    try{
        const response = await fetch("http://localhost:4000/producers");
        const data = await response.tojson();
        return data;
    }catch(e){
        console.log(e)
    }
};