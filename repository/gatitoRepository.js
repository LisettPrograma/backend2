import {connect} from '../db.js'
import { GatitoModel } from './models/gatitoModel.js';
connect();

export const getGatitoRepository = async () => {
    try {
        const gatitosObtenidos = await GatitoModel.find();
        return gatitosObtenidos;
    } catch (error) {
        console.log(error);
    }
    
}

export const getGatitoByIdRepository = async (id) => {
    try {
        const gatitoObtenido = await GatitoModel.findById(id);
        return gatitoObtenido;
    } catch (error) {
        console.log(error);
    }
    
}

export const postGatitoRepository = async (gatito) => {
    try {
        const gatitoAgregado = new GatitoModel(gatito);
        await gatitoAgregado.save();
        return gatitoAgregado;
    } catch (error) {
        console.log(error);
    }
    
}

export const putGatitoRepository = async (id, gatito) => {
    try {
        const gatitoActualizado = await GatitoModel.findByIdAndUpdate(id, gatito, {new : true});
        return gatitoActualizado;
    } catch (error) {
        console.log(error);
    }
    
}

export const deleteGatitoRepository = async (id) => {
    try {
        const gatitoBorrado = await GatitoModel.findByIdAndDelete(id);
        return gatitoBorrado;
    } catch (error) {
        console.log(error);
    }
    
}