const {
  query,
  where,
  collection,
  getDocs,
  setDoc,
  updateDoc,
  doc,
  limit,
} = require("firebase/firestore");
const { store } = require("./index");

const setAquariumTemperature = async ({ id, temperature }) => {
  try {
    console.log(temperature);
    updateDoc(doc(store, "aquariums", `${id}`), {
      temperature: temperature,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  setAquariumTemperature,
};
