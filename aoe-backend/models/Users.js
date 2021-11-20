import { loadData, saveData } from "../db/db.js";

export class Users {

    _list = {};

    get listArr(){
        const list= [];
        if(this._list){

            Object.keys(this._list).forEach(key =>{
                list.push(this._list[key])
            })
        }

        return list;
    }
    
    loadUserFromArray(usersList = []){
        usersList.forEach(user => {
            this._list[user.id] = user
        });
    }

    constructor(){
        this.loadUserFromArray(loadData())
    }
    loadUsers(userList = []){
        this._list = userList
    }
    createUser(user){
        this._list[user.id] = user
        saveData(this.listArr)
        this.loadUserFromArray(loadData())
    }
    searchUserName( name ){
        const userList = this.listArr.filter(e=>e.name === name)
        if(userList.length ==0)
        {
            return null
        }
        const user = userList[0]
        return user
    }
    searchUserId(id){
        if(!this._list[id])
        {
            return null
        }
        return this._list[id]
    }
    searchUserIdAndUpdate( id , fav ){
        if(!this._list[id])
        {
            return null
        }
        this._list[id].fav = fav
        saveData(this.listArr)
        return this._list[id]
    }

}