import asyncHandler from 'express-async-handler';
import Shark from "../models/shark.js"

const addSharks =  asyncHandler(async(req, res) => {
    try{

        const { name, short_name, location} = req.body

        const newSharks = await Shark.create({
            name, 
            short_name, 
            location
        })

        return res.status(201).json({ message: 'Points added successfully'});
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errorMessages = error.errors.map((validationError) => validationError.message);
            throw new Error(errorMessages);
          } else {
            console.log(error)
            throw new Error(error);
          }
    }
})

export {
    addSharks
}