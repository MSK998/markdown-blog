export const mutations = {
    getArchives(state, archives){
        state.archives = archives
    },

    removeArchive(state, id) {
        state.archives.splice(
          state.archives.findIndex((x) => x.id === id),
          1
        );
        state.archives = [...state.archives];
      },
}