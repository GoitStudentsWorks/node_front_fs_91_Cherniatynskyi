import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as CardServices from 'services/cardsService';

export const getCards = createAsyncThunk(
  'cards/getCards',
  async (id, { rejectWithValue }) => {
    try {
      return await CardServices.fetchGetCards(id);
    } catch (error) {
      toast.error(
        'Oops! Something went wrong! Please try reloading this page!'
      );
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
      toast.error(
        'Oops! Something went wrong! Please try reloading this page!'
      );
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
      toast.error(
        'Oops! Something went wrong! Please try reloading this page!'
      );
      return rejectWithValue(error);
    }
  }
);

export const updateCard = createAsyncThunk(
  'cards/updateCard',
  async ({ id, newCard }, { rejectWithValue }) => {
    try {
      toast.success('Your card was successfully updated');
      return await CardServices.fetchUpdateCard(id, newCard);
    } catch (error) {
      toast.error(
        'Oops! Something went wrong! Please try reloading this page!'
      );
      return rejectWithValue(error);
    }
  }
);

export const updateColumnId = createAsyncThunk(
  'cards/updateColumnID',
  async ({ id, columnId, index }, { rejectWithValue }) => {
    try {
      return CardServices.fetchUpdateColumnIdInCard(id, { columnId, index });
    } catch (error) {
      toast.error(
        'Oops! Something went wrong! Please try reloading this page!'
      );
      return rejectWithValue(error);
    }
  }
);
