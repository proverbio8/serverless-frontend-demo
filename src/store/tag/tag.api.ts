import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const TAGS_VALIDATE_PATH = 'tags/validate';

export type TagValidateResponse = {
  message: string;
};
export const validateTagApi = async (
  text: string,
): Promise<TagValidateResponse> => {
  const response = await instance.post<TagValidateResponse>(
    TAGS_VALIDATE_PATH,
    {
      text,
    },
  );
  return response.data;
};
