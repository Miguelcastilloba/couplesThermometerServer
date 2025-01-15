import { bdOperation } from "./commonFunctions.js";

async function getCouple(name){

    try{

        const couple = await bdOperation(`SELECT couple FROM users WHERE name = '${name}'`);
    

        if (couple.length == 0) {
            return 404;
        }else{

            return couple[0].couple;

        }

    }catch(error){
        console.log(error);
    }

}

export { getCouple };