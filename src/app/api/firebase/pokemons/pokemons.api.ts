import { convertCollectionSnapshotToMap, firestore } from "Api/firebase/firebase.utils";
import { apiSuccess, apiError } from "App/state/redux/api/api.actions";

export async function freePokemonsApiRequest(dispatch, feature) {
    try {
      const freePokemonsRef = firestore.collection('freePokemons');
      const mapCallback = doc => ({
        ...doc.data(),
        id: doc.id,
        photoId: doc.data().photoId
      });
      const snapshot = await freePokemonsRef.get();
      const freePokemonsMap = await convertCollectionSnapshotToMap(snapshot, mapCallback);
      dispatch(apiSuccess({ response: freePokemonsMap, feature }));
    } catch (error) {
      console.error(error.message);
      dispatch(apiError({ error, feature }));
    }
}

export async function capturedPokemonsApiRequest(dispatch, feature) {
    try {
      const capturedPokemonsRef = firestore.collection('capturedPokemons');
      const mapCallback = doc => ({
        ...doc.data(),
        id: doc.id,
        photoId: doc.data().photoId
      });
      const snapshot = await capturedPokemonsRef.get();
      const capturedPokemonsMap = await convertCollectionSnapshotToMap(snapshot, mapCallback);
      dispatch(apiSuccess({ response: capturedPokemonsMap, feature }));
    } catch (error) {
      console.error(error.message);
      dispatch(apiError({ error, feature }));
    }
}
