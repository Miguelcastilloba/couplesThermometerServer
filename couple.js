import { bdOperation } from "./commonFunctions.js";

async function getCouple(name){

    try{

        const couple = await bdOperation(`SELECT couple FROM users WHERE name = '${name}'`);
   
        if (couple.length == 0) {
            return 404;
        }else{

            const partnerLevel = await bdOperation(`SELECT level FROM users WHERE couple = '${couple[0].couple}'`);

            if(partnerLevel.length == 0){

                return 404;

            }else{

                return partnerLevel[0].level
            
            }

       

        }

    }catch(error){
        console.log(error);
    }

}

export { getCouple };