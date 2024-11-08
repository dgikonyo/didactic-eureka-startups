import type { Country } from '@/types/Country';
import axios from 'axios';

const BACKEND_URL = '';

export const getCountries = async (): Promise<Country[]> => {
  const response = await axios.get('BACKEND_URL/countries');
  return response.data;
};
