import { idb } from "@composi/idb"

export function setCache(key: string, data: any) {
    idb.set(key, data)
  }
  
export async function getCache(key: string) {
  return await idb.get(key)
}

export async function deleteCacheForKey(keyPrefix: string) {
  const keys = await idb.keys()

  for (const key of keys) {
    if (key.includes(keyPrefix)) {
      await idb.remove(key)
      console.log(`removing ${key} from cache`)
    }
  }
}