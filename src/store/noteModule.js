export const noteModule = {
  state: () => ({
    notes: [],
    selectedNote: {},
    visibleOpenNote: false,
    visibleAddNote: false,
  }),
  getters: {

  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes
    },
    setSelectedNote(state, selectedNote) {
      state.selectedNote = selectedNote
    },
    setVisibleOpenNote(state, visibleOpenNote) {
      state.visibleOpenNote = visibleOpenNote
    },
    setVisibleAddNote(state, visibleAddNote) {
      state.visibleAddNote = visibleAddNote
    },
  },
  actions: {
    toggleAddNote({ state, commit }) {
      commit('setVisibleAddNote', !state.visibleAddNote)
    },
  }
}