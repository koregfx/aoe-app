import { saveData } from "../db/db.js";
import { User } from "../models/User.js";
import { Users } from "../models/Users.js";


export const login = async (req, res) =>{
    const {name,fav} = req.body
    try {
        const users = await new Users()
        let user = users.searchUserName(name)
        if(!user)
        {
            user = new User(name,fav)

            users.createUser(user);
            return res.status(201).json({
                ok: true,
                msg: 'user Registered',
                user:{
                    uid: user.id,
                    name: user.name,
                    fav: user.fav
                }
            })
        }
        res.json({
            ok: true,
            msg: 'login done',
            user:{
                uid: user.id,
                name: user.name,
                fav: user.fav
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'Please contact whit the administrator'
        })
    }
}