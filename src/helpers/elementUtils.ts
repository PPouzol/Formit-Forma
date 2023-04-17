import { Urn as NextGenElementUrn } from "@spacemakerai/element-types"
import { ElementResponse } from "@spacemakerai/element-types"

export const parseUrn = (
  urn: NextGenElementUrn | string,
): {
  namespace: string
  authcontext?: string
  system: string
  id: string
  revision: string
} => {
  const split = urn.split(":")
  if (split.length === 6) {
    const [, namespace, system, authcontext, id, revision] = split
    return { namespace, system, authcontext, id, revision }
  } else if (split.length === 5) {
    const [, namespace, system, id, revision] = split
    return { namespace, system, id, revision }
  }
  throw new Error("urn is not of length 5 or 6")
}

export const elementUrnToUrl = (
  elementSetUrn: string | NextGenElementUrn,
  projectId: string,
  includeIdSuffix = true,
) => {
  let elementUrl: string

  const { authcontext, system, id, revision } = parseUrn(elementSetUrn)

  if (authcontext) {
    if (includeIdSuffix) {
      elementUrl = `/api/${system}/elements/${id}/revisions/${revision}?authcontext=${authcontext}&version=2`
    } else {
      const suffixIndex = id.indexOf("+")
      elementUrl = `/api/${system}/elements/${id.slice(
        0,
        suffixIndex,
      )}/revisions/${revision}?authcontext=${authcontext}&version=2`
    }
    //TODO FUTURE_DELETE handling for classic type
  } else {
    elementUrl = `/api/${system}/elements/${id}/revisions/${revision}?projectId=${projectId}`
  }

  return elementUrl
}

export function removeElementFromMap(elementResponseMap, keyToRemove)
{
  let clearedMap: ElementResponse = {};
  for (const [urn, element] of Object.entries(elementResponseMap)) {
    if(urn !== keyToRemove)
    {
      clearedMap[urn] = element;
    }
  }
  return clearedMap;
}