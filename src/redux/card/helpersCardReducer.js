export const handlePending = state => {
  state.isLoadding = true;
  state.error = null;
};

export const handleFulfilled = state => {
  state.isLoadding = false;
};

export const handleFulfilledGetCards = (state, { payload }) => {
  state.cards = payload;
};

export const handleFulfilledAddCard = (state, { payload }) => {
  state.cards.push(payload);
};

export const handleFulfilledDeleteCard = (state, { payload }) => {
  state.cards = state.cards.filter(card => card._id !== payload.id);
};

export const handleFulfilledUpdateCard = (state, { payload }) => {
  state.cards = state.cards.map(card =>
    card._id === payload._id ? { ...card, ...payload } : card
  );
};

export const handleRejected = (state, { payload }) => {
  state.isLoadding = false;
  state.error = payload;
};
