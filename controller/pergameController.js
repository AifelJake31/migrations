import asyncHandler from 'express-async-handler';
import Sharks from "../models/shark.js";
import RackBets from "../models/rack_bet.js"
import Racks from "../models/rack.js"
import Bettor_Wallet from "../models/bettor_wallet.js"
import Pick_One_Bet from "../models/pick_one_bet.js";
import Bettor from '../models/bettor.js'
import Pick_One from '../models/pick_one.js';
import Event_Shark from "../models/event_shark.js"
import "./../models/index.js"

// import db from "../models/index.js"

// async function getAllDataFromDatabase() {
//     try {
//       const pickOneBets = await db.Pick_One_Bet.findAll({
//         include: [
//           { model: db.Bettor, as: 'bettor' },
//           { model: db.Pick_One, as: 'pick_one' },
//           { model: db.Event_Shark, as: 'event_shark' },
//         ],
//       });
  
//       return pickOneBets;
//     } catch (error) {
//       throw new Error('Error fetching data from the database: ' + error.message);
//     }
//   }
  
//   // Usage example:
//   getAllDataFromDatabase()
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error(error);
//     });

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

const getAllPickOneBets = asyncHandler(async (req, res) => {
    try {
        const pickOneBet = await Pick_One_Bet.findAll({
        include: [
          {
            model: Bettor, 
            as: 'bettor',
          },
          {
            model: Pick_One, 
            as: 'pick_one',
          },
          {
            model: Event_Shark, 
            as: 'event_shark',
          },
        ],
      });
  
      return res.status(200).json({ success: true, data: pickOneBet });
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        const errorMessages = error.errors.map((validationError) => validationError.message);
        return res.status(400).json({ success: false, error: errorMessages });
      } else {
        console.error(error);
        return res.status(500).json({ success: false, error: 'Server Error' });
      }
    }
  });
  



export {
    getAllSharks,
    getAllBets,
    getAllPickOneBets
};
