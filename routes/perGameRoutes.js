import express from 'express';
const router = express.Router();

import { getAllSharks } from "../controller/pergameController.js"
import { getAllBets, getAllPickOneBets } from "../controller/pergameController.js"


router.route('/getAllSharks').get(getAllSharks);
router.route('/getAllRackbets').get(getAllBets);
router.route('/getAllPickOneBet').get(getAllPickOneBets)

export default router