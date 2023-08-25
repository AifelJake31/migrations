import asyncHandler from 'express-async-handler';
import Sharks from "../models/shark.js";
import RackBets from "../models/rack_bet.js"
import Racks from "../models/rack.js"
import Bettor_Wallet from "../models/bettor_wallet.js"
import Pick_One_Bets from "../models/pick_one_bet.js";
import Bettors from '../models/bettor.js'
import Pick_Ones from '../models/pick_one.js';
import Event_Sharks from "../models/event_shark.js"

const getAllSharks = asyncHandler(async (req, res) => {
    try {
        // Assuming you want to find all sharks with the name "Dennis Orcollo"
        const sharks = await Sharks.findAll({
            where: {
                name: "Denniss Orcollo" // Use an object with property and value
            }
            
            
        });

        return res.status(200).json({ success: true, data: sharks }); // Return the 'sharks' data
        
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errorMessages = error.errors.map((validationError) => validationError.message);
            res.status(400).json({ success: false, error: errorMessages });
        } else {
            console.error(error);
            res.status(500).json({ success: false, error: 'Server Error' });
        }
    }
});


const getAllBets = asyncHandler(async(req, res) => {
    try {

        const bet = await Bettor_Wallet.findAll()

        res.status(200).json({ success: true, data: bet });

    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errorMessages = error.errors.map((validationError) => validationError.message);
            res.status(400).json({ success: false, error: errorMessages });
        } else {
            console.error(error);
            res.status(500).json({ success: false, error: 'Server Error' });
        }
    }
})

const getAllPickOneBets = asyncHandler(async(req, res) => {
    try {
        const pickOneBets = await Pick_One_Bets.findAll({
          include: [
            {
              model: Bettors,
              as: 'bettor',
            },
            {
              model: Pick_Ones,
              as: 'pick_ones',
            },
            {
              model: Event_Sharks,
              as: 'event_sharks',
            },
          ],
        });
    
        return pickOneBets;
      }

      catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errorMessages = error.errors.map((validationError) => validationError.message);
            res.status(400).json({ success: false, error: errorMessages });
        } else {
            console.error(error);
            res.status(500).json({ success: false, error: 'Server Error' });
        }
    }
})



export {
    getAllSharks,
    getAllBets,
    getAllPickOneBets
};
