import useTags from './useTags';
import TagValidatorForm from './TagValidatorForm';
import React from 'react';
import './TagValidatorPage.css';

const TagValidatorPage = () => {
  const props = useTags();

  return (
    <div className="container">
      <TagValidatorForm data-testid="tag-validator-form" {...props} />
    </div>
  );
};

export default TagValidatorPage;
