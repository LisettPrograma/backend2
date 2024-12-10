import { getMascotaServices, getMascotaByIdServices, postMascotaServices, putMascotaServices, deleteMascotaServices } from "../services/mascotaServices.js";

export const getMascotaController = (req, res) => {
    let respuestaServices = getMascotaServices();
    console.log(respuestaServices);
    res.send('Mostrando una mascota');
}

export const getMascotaByIdController = (req, res) => {
    let respuestaServices = getMascotaByIdServices(req.params.id);
    console.log(respuestaServices);
    res.send('la mascota es: ' + req.params.id);

}

export const postMascotaController = (req, res) => {
    const mascota = req.body;
    let respuestaServices = postMascotaServices(mascota);
    console.log(respuestaServices);
    res.send(mascota);
}

export const putMascotaController = (req, res) => {
    const id = req.params.id;
    const mascota = req.body;
    let respuestaServices = putMascotaServices(id, mascota)
    console.log(respuestaServices);
    res.send('Actualizando mascota');
}

export const deleteMascotaController = (req, res) => {
    const id = req.params.id;
    let respuestaServices = deleteMascotaServices(id);
    console.log(respuestaServices);
    res.send('Borrando mascota');
}