import express from "express"; 
import DummyController from "../controllers/dummy.controller";


const router = express.Router();

router.get('/dummy', DummyController.dummy);



export default router;

