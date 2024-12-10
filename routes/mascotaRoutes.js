import { Router } from "express";
import { getMascotaController, getMascotaByIdController, postMascotaController, putMascotaController, deleteMascotaController } from "../controller/mascotaController.js";

const router = Router();

router.get('/mascota', getMascotaController)

router.get('/mascota/porId/:id', getMascotaByIdController)

router.post('/mascota/agregar', postMascotaController)

router.put('/mascota/actualizar/:id', deleteMascotaController)

export default router