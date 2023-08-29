import express from 'express';
const router = express.Router();

import { getAllSharks } from "../controller/pergameController.js"
import { getAllBets, getAllPickOneBets, getAllEventSharks, getAllRackbets, savePickOneBets } from "../controller/pergameController.js"


router.route('/getAllSharks').get(getAllSharks);
router.route('/getAllRackbets').get(getAllBets);
router.route('/getAllPickOneBet').get(getAllPickOneBets)
router.route('/getAllEventShark').get(getAllEventSharks)
router.route('/getAllRackBet').get(getAllRackbets)
router.route('/savePickOneBets').post(savePickOneBets)
export default router