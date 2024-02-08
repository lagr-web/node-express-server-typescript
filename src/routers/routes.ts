import express, { Router, Request, Response } from "express";
import { Schema, model, connect, Error } from 'mongoose';
import Data from "../models/Data";
import { Enemies } from "../types/type";

const router: Router = express.Router();

router.use(express.json());


//** router call start */

router.get('/', (req: Request, res: Response) => {

    res.send('Express + TS Server');
});


router.get('/getdata', async (req: Request, res: Response) => {

    try {
        const cards: Enemies[] = await Data.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }

})

//** router call end */


export default router;