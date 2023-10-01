import axios from 'axios';

const instance = axios.create({
  baseURL: ' http://localhost:3000/dev/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export type TagValidateResponse = {
  message: string;
};
export const validateTagApi = async (
  text: string,
): Promise<TagValidateResponse> => {
  const response = await instance.post<TagValidateResponse>(`tags/validate`, {
    text,
  });
  return response.data;
};
