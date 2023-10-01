import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import React, { useState } from 'react';
import { validateTag, validateTagClear } from '../../store/tag/tag.actions';
import { UseTagsReturnType } from './tag.types';

const useTags = (): UseTagsReturnType => {
  const dispatch = useDispatch();
  const { error, data, loading } = useSelector((state: RootState) => state.tag);
  const [text, setText] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(validateTag(text));
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(validateTagClear());
    setText(e.target.value);
  };

  return {
    text,
    onSubmit,
    onChange,
    error,
    data,
    loading,
  };
};

export default useTags;
