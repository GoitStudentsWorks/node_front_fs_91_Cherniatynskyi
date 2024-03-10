// export const handlePending = state => {
//   state.isLoadding = true;
//   state.error = null;
// };

// export const handleFulfilledGetBoards = (state, { payload }) => {
//   state.boards = payload;
// };

// export const handleFulfilledAddBoard = (state, { payload }) => {
//   state.boards.unshift(payload);
// };

// export const handleFulfilledDeleteBoard = (state, { payload }) => {
//   state.boards = state.boards.filter(board => board._id !== payload.id);
// };

// export const handleFulfilledUpdateBoard = (state, { payload }) => {
//   state.boards = state.boards.map(board =>
//     board._id === payload._id ? { ...board, ...payload } : board
//   );
// };

// export const handleFulfilled = state => {
//   state.isLoadding = false;
// };

// export const handleReject = (state, { payload }) => {
//   state.isLoadding = false;
//   state.error = payload;
// };

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isRefreshing = false;
  state.error = payload;
  state.isLoggedIn = true;
};

export const handleFulfilled = state => {
  state.isLoading = false;
};

export const handleFulfilledGetBoard = (state, { payload }) => {
  state.error = '';
  state.boards = payload;
};

export const handleFulfilledAddBoard = (state, { payload }) => {
  state.error = '';
  state.currentBoardId = payload._id;
  state.boards.push({ ...payload });
};

export const handleFulfilledDeleteBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.currentBoardId = payload._id;
  state.boards = state.boards.filter(board => board._id !== payload.id);
};

export const handleFulfilledUpdateBoard = (state, { payload }) => {
  state.error = '';
  state.boards = state.boards.map(board =>
    board._id === payload._id ? { ...board, ...payload } : board
  );
};
