export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilled = state => {
  state.isLoading = false;
};

export const handleFulfilledGetColumns = (state, { payload }) => {
  state.isLoading = false;
  state.columns = payload;
};

export const handleFulfilledAddColumn = (state, { payload }) => {
  state.isLoading = false;
  state.columns.push(payload);
};

export const handleFulfilledDeleteColumn = (state, { payload }) => {
  state.isLoading = false;
  state.columns = state.columns.filter(column => column._id !== payload.id);
};

export const handleFulfilledUpdateColumn = (state, { payload }) => {
  state.isLoading = false;
  state.columns = state.columns.map(column =>
    column._id === payload._id ? { ...column, ...payload } : column
  );
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
