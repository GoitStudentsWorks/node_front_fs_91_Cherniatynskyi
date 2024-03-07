import { createAsyncThunk } from '@reduxjs/toolkit';
import * as CardServices from 'services/cardsService';

export const getCards = createAsyncThunk(
  'cards/getCards',
  async (id, { rejectWithValue }) => {
    try {
      return await CardServices.fetchGetCards(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postCard = createAsyncThunk(
  'cards/postCard',
  async (newCard, { rejectWithValue }) => {
    try {
      return await CardServices.fetchAddCard(newCard);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async (id, { rejectWithValue }) => {
    try {
      return await CardServices.fetchDeleteCard(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateCard = createAsyncThunk(
  'cards/updateCard',
  async ({ id, newCard }, { rejectWithValue }) => {
    try {
      return await CardServices.fetchUpdateCard(id, newCard);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateColumnId = createAsyncThunk(
  'cards/updateColumnID',
  async ({ id, newCard }, { rejectWithValue }) => {
    try {
      return CardServices.fetchUpdateColumnIdInCard(id, newCard);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
