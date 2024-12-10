export const getMascotaRepository = () => {
    return 'Retornando mascotas de la BD';
}

export const getMascotaByIdRepository = (id) => {
    console.log('Se muestra la mascota: ' + id);
    return 'Una mascota de la BD';
}

export const postMascotaRepository = (mascota) => {
    console.log('Se agrega la mascota: ' + JSON.stringify(mascota));
    return 'Se agrega una mascota';
}

export const putMascotaRepository = (id, mascota) => {
    console.log('Se actualiza la mascota: ' + id + 'de propiedades: ' + JSON.stringify(mascota));
    return 'Se actualiza mascota';
}

export const deleteMascotaRepository = (id) => {
    console.log('Se borra mascota: ' + id);
    return 'mascota borrada';
}