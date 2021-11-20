import { Users } from "../models/Users.js";

export const updateFav = async (req, res) =>{
    const userId = req.params.id
    const fav = req.body.fav
    try {
        const users = await new Users()
        let user = users.searchUserId(userId)
        if(!user)
        {
            return res.status(404).json({
                ok:false,
                msg: 'there is no user Whit this id'
            })
        }
        
        const userUpdated = await users.searchUserIdAndUpdate(userId, fav)
        res.json({
            ok: true,
            msg: 'Fav updated',
            user: userUpdated
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'Please contact whit the administrator'
        })
    }
}