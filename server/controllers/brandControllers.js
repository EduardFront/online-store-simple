const {Type, Brand} = require("../models/models");

class BrandController {
    async create(req,res,next){
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }
    async getAll(req,res,next){
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandController()