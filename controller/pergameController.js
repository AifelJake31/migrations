import asyncHandler from 'express-async-handler';
import Shark from "../models/shark.js";
import Rack from "../models/rack.js"
import Bettor_Wallet from "../models/bettor_wallet.js"
import Pick_One_Bet from "../models/pick_one_bet.js";
import Bettor from '../models/bettor.js'
import Pick_One from '../models/pick_one.js';
import Event_Shark from "../models/event_shark.js"
import "./../models/index.js"
import Rack_Bet from '../models/rack_bet.js';
import Event from '../models/event.js';

const getAllSharks = asyncHandler(async (req, res) => {
  try {
    // Assuming you want to find all sharks with the name "Dennis Orcollo"
    const sharks = await Shark.findAll({
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


const getAllBets = asyncHandler(async (req, res) => {
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

// const getAllPickOneBets = asyncHandler(async (req, res) => {
//   try {
//     const pickOneBets = await Pick_One_Bet.findAll({
//       attributes: ['amount', 'payout', 'rake'],
//       include: [
//         {
//           model: Bettor,
//           as: 'bettor',
//         },
//         {
//           model: Pick_One,
//           as: 'pick_one',
//         },
//         {
//           model: Event_Shark,
//           as: 'event_shark',
//           include: [
//             {
//               model: Event,
//               as: 'event',  
//             },
//           ],
//         },
//       ],
//     });

//     // Filter out any entries where the associated event has active ≠ 0
//     const filteredPickOneBets = pickOneBets.filter(
//       (bet) => bet.event_shark && bet.event_shark.event && bet.event_shark.event.active === 0
//     );

//     return res.status(200).json({ success: true, data: filteredPickOneBets });
//   } catch (error) {
//     if (error.name === 'SequelizeValidationError') {
//       const errorMessages = error.errors.map(validationError => validationError.message);
//       return res.status(400).json({ success: false, error: errorMessages });
//     } else {
//       console.error(error);
//       return res.status(500).json({ success: false, error: 'Server Error' });
//     }
//   }
// });


const getAllPickOneBets = asyncHandler(async (req, res) => {
  try {
    // First, retrieve events with active === 0
    const eventsWithActiveZero = await Event.findAll({
      attributes: ['id'],
      where: { active: 0 },
    });

    // Extract the event IDs from the filtered events
    const eventIdsWithActiveZero = eventsWithActiveZero.map(event => event.id);

    // Now, query Pick_One_Bet with the filtered event IDs
    const pickOneBets = await Pick_One_Bet.findAll({
      attributes: ['amount', 'payout', 'rake'],
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
          include: [
            {
              model: Event,
              as: 'event',
              where: {
                id: eventIdsWithActiveZero // Filter by the event IDs with active === 0
              },
            },
          ],
        },
      ],
    });

    return res.status(200).json({ success: true, data: pickOneBets });
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errorMessages = error.errors.map(validationError => validationError.message);
      return res.status(400).json({ success: false, error: errorMessages });
    } else {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Server Error' });
    }
  }
});








const getAllEventSharks = asyncHandler(async (req, res) => {
  try {
    const allEventSharks = await Event_Shark.findAll({
      include: [
        {
          model: Shark,
          as: 'shark'
        },
        {
          model: Event,
          as: 'event'
        },
      ],
    });

    const extractedData = allEventSharks.map(eventShark => ({
      shark: {
        name: eventShark.shark.name,
        shortName: eventShark.shark.shortName
      },
      event: {
        numberOfSharks: eventShark.event.number_of_sharks
      }
    }));

    return res.status(200).json({ success: true, data: extractedData });
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



const getAllRackbets = asyncHandler(async(req, res) => {
  try {
    const getRackBets = await Rack_Bet.findAll({
      include: [
        {
          model: Rack,
          as: 'rack'
        },
        {
          model: Event_Shark,
          as: 'event_shark'
        },
        {
          model: Bettor,
          as: 'bettor'
        }
      ]
    })
    return res.status(200).json({ success: true, data: getRackBets });
  }

  catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errorMessages = error.errors.map((validationError) => validationError.message);
      return res.status(400).json({ success: false, error: errorMessages });
    } else {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Server Error' });
    }
  }
})


export {
  getAllSharks,
  getAllBets,
  getAllPickOneBets,
  getAllEventSharks,
  getAllRackbets
};
