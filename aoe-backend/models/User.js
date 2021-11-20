import { v4 } from 'uuid';


export class User {

    name = '';
    fav = [];
    id = '';


    constructor(name, fav){
        this.name = name;
        this.fav = fav;
        this.id = v4();
    }
}