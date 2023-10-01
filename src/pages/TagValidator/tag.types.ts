import React from 'react';

export type FormProps = {
  text?: string;
  data: { message: string } | null;
  error: string | null;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export type UseTagsReturnType = FormProps;
export type TagValidatorFormProps = FormProps;
