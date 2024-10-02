import { get, set, del } from "idb-keyval";
import {
  PersistedClient,
  Persister,
} from "@tanstack/react-query-persist-client";

export function createIDBPersister(idbValidKey: IDBValidKey = "reactQuery") {
  return {
    persistClient: async (client: PersistedClient) => {
      // Ensure this runs in the client
      if (typeof window !== "undefined" && window.indexedDB) {
        await set(idbValidKey, client);
      }
    },
    restoreClient: async () => {
      // Ensure this runs in the client
      if (typeof window !== "undefined" && window.indexedDB) {
        return await get<PersistedClient>(idbValidKey);
      }
      return undefined;
    },
    removeClient: async () => {
      // Ensure this runs in the client
      if (typeof window !== "undefined" && window.indexedDB) {
        await del(idbValidKey);
      }
    },
  } as Persister;
}
