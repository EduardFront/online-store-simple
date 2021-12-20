const {Type} = require('../models/models')
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req,res,next){
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }
    async getAll(req,res,next){
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()