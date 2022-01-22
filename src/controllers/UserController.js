
const { User } = require("../models");


class UserController{

    async create(req, res){
        const {
                firstName,
                lastName,
                email
            } = req.body;

        const userCreate = await User.create(
            {
                firstName: firstName,
                lastName: lastName,
                email: email
            }
        );
        return res.status(200).json({msg: "Usuario: "+ firstName +" criado"});
    }


    // metodo get que busca todos usuarios do banco
    async get(req, res){
        const usuarios = await User.findAll();
        return res.status(200).json(usuarios);
    }





    async update(req, res){
        const {firstName, lastName, email} = req.body;

        const updateUser = await User.update({
          firstName: firstName,
          lastName: lastName,
          email: email  
        },{
            where:{
                id: req.params.id
            }
        });


        return res.status(200).json(updateUser);
    }

    async delete(req, res){
        const userDelete = await User.destroy({
            where:{
                id: req.params.id
            }
        });

        return res.status(200).json(userDelete);
    }

}


module.exports = new UserController();