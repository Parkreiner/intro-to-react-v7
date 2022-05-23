import { useState, useEffect, useDebugValue } from "react";

const localCache = {};

export default function useBreedList(animal) {
  // Intended to be used as enumerated type; possibilities are unloaded, loading, or loaded
  const [status, setStatus] = useState("unloaded");
  const [breedList, setBreedList] = useState([]);
  useDebugValue(`Cache values loaded: ${Object.keys(localCache).length}`);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      // Reset state while data is transitioning from one animal to the next
      setBreedList([]);
      setStatus("loading");

      const response = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
      const json = await response.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
