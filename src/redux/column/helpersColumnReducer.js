export const handlePending = state => {
  state.isLoadding = true;
  state.error = null;
};

export const handleFulfilled = state => {
  state.isLoadding = false;
};

export const handleFulfilledGetColumns = (state, { payload }) => {
  state.columns = payload;
};

export const handleFulfilledAddColumn = (state, { payload }) => {
  state.columns.push(payload);
};

export const handleFulfilledDeleteColumn = (state, { payload }) => {
  state.columns = state.columns.filter(column => column._id !== payload.id);
};

export const handleFulfilledUpdateColumn = (state, { payload }) => {
  state.columns = state.columns.map(column =>
    column._id === payload._id ? { ...column, ...payload } : column
  );
};

export const handleRejected = (state, { payload }) => {
  state.isLoadding = false;
  state.error = payload;
};
