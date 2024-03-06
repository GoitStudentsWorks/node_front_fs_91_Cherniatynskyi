export const handlePending = state => {
  state.isLoadding = true;
  state.error = null;
};

export const handleFulfilledGetBoards = (state, { payload }) => {
  state.boards = payload;
};

export const handleFulfilledAddBoard = (state, { payload }) => {
  state.boards.unshift(payload);
};

export const handleFulfilledDeleteBoard = (state, { payload }) => {
  state.boards = state.boards.filter(board => board._id !== payload.id);
};

export const handleFulfilledUpdateBoard = (state, { payload }) => {
  state.boards = state.boards.map(board =>
    board._id === payload._id ? { ...board, ...payload } : board
  );
};

export const handleFulfilled = state => {
  state.isLoadding = false;
};

export const handleReject = (state, { payload }) => {
  state.isLoadding = false;
  state.error = payload;
};
