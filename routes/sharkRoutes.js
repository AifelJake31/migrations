import express from 'express';
const router = express.Router();

import { addSharks  } from "../controller/sharkController.js"

router.route('/addSharks').post(addSharks );

export default router;