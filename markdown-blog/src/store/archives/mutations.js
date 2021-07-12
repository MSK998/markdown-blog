export const mutations = {
    getArchives(state, archives){
        state.archives = archives
    },
    removeArchive(state, archive) {
        state.archive.splice(
          state.archive.findIndex((x) => x.id === archive),
          1
        );
    
        state.archive = [...state.archive];
      },
}