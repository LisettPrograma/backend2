
export const getMascotaServices = () => {
    let respuestaRepository = getMascotaRepository();
    console.log(respuestaRepository);
    return 'Respuesta del getMascotaRepository';
}

export const getMascotaByIdServices =(id) => {
    let respuestaRepository = getMascotaByIdRepository(id);
    console.log('El id recibido desde el controller es: ' + id);
    return respuestaRepository;
}

export const postMascotaServices = (mascota) => {
    let respuestaRepository = getMascotaByIdRepository(mascota);
    console.log('La mascota es: ' + JSON.stringify(mascota));
    return respuestaRepository;
}

export const putMascotaServices = (id, mascota) => {
    let respuestaRepository = putMascotaRepository(id, mascota);
    console.log('La mascota a actualizar es: ' + id + ', sus datos son: ' + JSON.stringify(mascota));
    return respuestaRepository;
}

export const deleteMascotaServices = (id) => {
    let respuestaRepository = deleteMascotaServices(id);
    console.log('La mascota con el id: ' + id + ' fue borrada correctamente');
    return respuestaRepository; 
}