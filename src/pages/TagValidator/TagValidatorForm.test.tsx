import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TagValidatorForm from './TagValidatorForm';

describe('TagValidatorForm', () => {
  const setup = () => {
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    const utils = render(
      <TagValidatorForm
        onChange={onChange}
        onSubmit={onSubmit}
        text=""
        loading={false}
        data={null}
        error={null}
      />,
    );
    const input = utils.getByLabelText('Enter your text to validate');
    const button = utils.getByText('Validate');
    return {
      onChange,
      onSubmit,
      input,
      button,
      ...utils,
    };
  };

  it('renders the form', () => {
    const { getByText } = setup();
    expect(getByText('<Tags Validator/>')).toBeInTheDocument();
  });

  it('allows typing into text box', async () => {
    const { input, onChange } = setup();
    fireEvent.change(input, { target: { value: 'test tag' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('triggers submit when the button has clicked', () => {
    const onSubmit = jest.fn();
    const { getByText } = render(
      <TagValidatorForm
        onChange={jest.fn()}
        onSubmit={onSubmit}
        text=""
        loading={false}
        data={null}
        error={null}
      />,
    );
    const formNode = document.createElement('form');
    formNode.onsubmit = onSubmit;

    const buttonNode = getByText('Validate');
    formNode.appendChild(buttonNode);
    fireEvent.submit(formNode);
    expect(onSubmit).toHaveBeenCalled();
  });
});
