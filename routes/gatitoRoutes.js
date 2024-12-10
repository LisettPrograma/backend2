import { Router } from "express";
import { getGatitoController, getGatitoByIdController, postGatitoController, putGatitoController, deleteGatitoController } from "../controller/gatitoController.js";
const router = Router();

router.get('/gatito', getGatitoController)

router.get('/gatito/porId/:id' , getGatitoByIdController)

router.post('/gatito/agregar', postGatitoController)

router.put('/gatito/actualizar/:id', putGatitoController)

router.delete('/gatito/delete/:id', deleteGatitoController)

export default router