export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilled = state => {
  state.isLoading = false;
};

export const handleFulfilledGetCards = (state, { payload }) => {
  state.isLoading = false;
  state.cards = payload;
};

export const handleFulfilledAddCard = (state, { payload }) => {
  state.isLoading = false;
  state.cards.push(payload);
};

export const handleFulfilledDeleteCard = (state, { payload }) => {
  state.isLoading = false;
  state.cards = state.cards.filter(card => card._id !== payload.id);
};

export const handleFulfilledUpdateCard = (state, { payload }) => {
  state.isLoading = false;
  state.cards = state.cards.map(card =>
    card._id === payload._id ? { ...card, ...payload } : card
  );
};

export const handleFulfilledUpdateColumnId = (state, { payload }) => {
  state.cards = state.cards.map(card =>
    card._id === payload._id ? { ...card, ...payload } : card
  );
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
