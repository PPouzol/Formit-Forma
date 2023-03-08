import { Urn as NextGenElementUrn } from "@spacemakerai/element-types"

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