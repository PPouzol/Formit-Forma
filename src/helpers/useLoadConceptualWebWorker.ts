//This code will move over to design-mode in a near future step.
import formaService from "../services/forma.service" 

async function useLoadConceptualWebWorker(authContext: string, proposalId: string) {
    const init = async (url) => {
      try {
        const initTerrainWorker = await import(
          /* @vite-ignore */
          url
        )
        await initTerrainWorker.default(proposalId, authContext)
      } catch (e) {
        console.log("error in terrain worker initiator", e)
      }
    }

    if (proposalId && authContext) {
      let url = formaService.FormatConceptualWorkerUrl();
      init(url);
    }
}

export default useLoadConceptualWebWorker