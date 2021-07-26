export const mutations = {
  getArchives(state, archives) {
    state.archives = archives;
  },

  setPage(state, page) {
    state.currentPage = page;
  },

  setTotalPages(state, total) {
    state.totalPages = total;
  },

  removeArchive(state, id) {
    state.archives.splice(
      state.archives.findIndex((x) => x.id === id),
      1
    );
    state.archives = [...state.archives];
  },
};
