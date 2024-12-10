import { getGatitoRepository, getGatitoByIdRepository, postGatitoRepository, putGatitoRepository, deleteGatitoRepository } from "../repository/gatitoRepository.js";
export const getGatitoServices = async() => {
    try {
        let respuestaRepository = await getGatitoRepository();
        
        return respuestaRepository;
    } catch (error) {
        console.log(error)
    }
    
}

export const getGatitoByIdServices = async(id) => {
    try {
        let respuestaRepository = await getGatitoByIdRepository(id);
        
        return respuestaRepository;
    } catch (error) {
        console.log(error)
    }
    
}

export const postGatitoServices = async(gatito) => {
    try {
        let respuestaRepository = await postGatitoRepository(gatito);
       
        return respuestaRepository;
    } catch (error) {
        console.log(error)
    }
    
}

export const putGatitoServices = async(id, gatito) => {
    try {
        let respuestaRepository = await putGatitoRepository(id, gatito); 
       
        return respuestaRepository;
    } catch (error) {
        console.log(error)
    }
    
}

export const deleteGatitoServices = async(id) => {
    try {
        let respuestaRepository = await deleteGatitoRepository(id);
        
        return respuestaRepository;
    } catch (error) {
        console.log(error)
    }
    
}
