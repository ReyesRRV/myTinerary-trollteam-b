const User = require('../models/User')
const user = require('../models/User')

const userController ={
    create: async(req,res)=>{
        try{
            await new User(req.body)
            res.status(201).jason({
                message: 'user created',
                success: true
            })
        }catch(error){
            res.status(400).json({
                menssage:"could't create user",
                success: false
            })
        }
    }
}

module.exports = userController