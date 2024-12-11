// import { connect } from "../db.js";
// import { GatitoModel } from "./models/gatitoModel.js";

import { gatos } from "../gatos.js";

// connect();

export const getGatitoRepository = async () => {
  try {
    // const gatitosObtenidos = await GatitoModel.find();
    // return gatitosObtenidos;
    console.log(gatos);
    return gatos;
  } catch (error) {
    console.log(error);
  }
};

export const getGatitoByIdRepository = async (id) => {
  try {
    const gatitoObtenido = gatos.find((gato) => gato.id == id);
    // const gatitoObtenido = await GatitoModel.findById(id);
    return gatitoObtenido;
  } catch (error) {
    console.log(error);
  }
};

export const postGatitoRepository = async (gatito) => {
  try {
    // const gatitoAgregado = new GatitoModel(gatito);
    // await gatitoAgregado.save();
    const gatitoAgregado = gatito;
    gatos.push(gatitoAgregado);
    return gatitoAgregado;
  } catch (error) {
    console.log(error);
  }
};

export const putGatitoRepository = async (id, gatito) => {
  try {
    // const gatitoActualizado = await GatitoModel.findByIdAndUpdate(id, gatito, {
    //   new: true,
    // });
    // return gatitoActualizado;

    const index = gatos.findIndex((gato) => gato.id == id);
    gatos[index] = gatito;

    return gatos[index];
  } catch (error) {
    console.log(error);
  }
};

export const deleteGatitoRepository = async (id) => {
  try {
    // const gatitoBorrado = await GatitoModel.findByIdAndDelete(id);
    // return gatitoBorrado;
    const index = gatos.findIndex((gato) => gato.id == id);
    if (index !== -1) {
      gatos.splice(index, 1);
    }
    return gatos;
  } catch (error) {
    console.log(error);
  }
};
