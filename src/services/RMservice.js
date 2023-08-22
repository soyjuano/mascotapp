import { API_RM } from "../constants/Api.constants";

class RMservice {

    async getAllCharacters(){
        const response = await fetch(API_RM.CHARACTERS());
        //Interceptor
        return response.json();
    }

    async getCharacterById(id){
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
        //Interceptor
        return response.json();
    }

}

export default new RMservice();
