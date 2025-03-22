import express from "express";
import { addPlaces, sendAll, sendDayDetail } from "../controller/places";

const router = express.Router();

router.route("/day")
.post(sendDayDetail)

router.route("/add/all").post(addPlaces)
router.route("/all").get(sendAll)

export default router;