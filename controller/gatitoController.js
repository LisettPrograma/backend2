import { getGatitoServices, getGatitoByIdServices, postGatitoServices, putGatitoServices, deleteGatitoServices } from "../services/gatitoServices.js";

export const getGatitoController = async(req, res) => {
    try {
        let respuestaServices = await getGatitoServices();
        
        res.send(respuestaServices);
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
    
}

export const getGatitoByIdController = async(req, res) => {
    try {
        let respuestaServices = await getGatitoByIdServices(req.params.id);
       
        res.send(respuestaServices);
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
    
}

export const postGatitoController = async(req, res) => {
    try {
        const gatito = req.body
        let respuestaServices = await postGatitoServices(gatito);
        
        res.send(respuestaServices);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
    
}

export const putGatitoController = async(req, res) => {
    try {
        const id = req.params.id;
        const gatito = req.body;
        let respuestaServices = await putGatitoServices(id, gatito);
        
        res.send(respuestaServices);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
    
}

export const deleteGatitoController = async(req, res) => {
    try {
        const id = req.params.id;
        let respuestaServices = await deleteGatitoServices(id);
        
        res.send(respuestaServices);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
    
}