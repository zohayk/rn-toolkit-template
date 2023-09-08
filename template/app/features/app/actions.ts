import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from 'services/api';

export const resetApp = createAsyncThunk('app/RESET_APP', () => {
  Api.clearAuthToken();
});
