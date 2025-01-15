import { bdOperation } from "./commonFunctions.js";

async function getCouple(name){

    try{

        const couple = await bdOperation(`SELECT couple FROM users WHERE name = '${name}'`);
   
        if (couple.length == 0) {
            return 404;
        }else{

            const partnerLevel = await bdOperation(`SELECT level FROM users WHERE couple = '${couple[0].couple}' and name != '${name}'`);

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

async function updateMyLevel(name,level){

    try{

        const update = await bdOperation(`UPDATE users SET level = '${level}' WHERE name = '${name}'`);

        if(update.affectedRows == 0){
            return 404;
        }else{
            return 200;
        }

    }catch(error){
        console.log(error);
    }

}

export { getCouple, updateMyLevel };