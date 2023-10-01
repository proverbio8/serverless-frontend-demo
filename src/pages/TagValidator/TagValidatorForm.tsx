import React from 'react';
import {
  TextField,
  Stack,
  Card,
  Typography,
  Container,
  Box,
} from '@mui/material';
import { LoadingButton } from '../../components';
import { TagValidatorFormProps } from './tag.types';

const TagValidatorForm: React.FC<TagValidatorFormProps> = ({
  onChange,
  onSubmit,
  text,
  loading,
  data,
  error,
}) => (
  <Container>
    <Typography variant="h3" color="white" align="center" gutterBottom>
      {'<Tags Validator/>'}
    </Typography>
    <Card sx={{ padding: 2, boxSizing: 'border-box' }}>
      {error && (
        <Typography variant="overline" color="error">
          {error}
        </Typography>
      )}
      {data && <Typography variant="overline">{data.message}</Typography>}
      <form onSubmit={onSubmit}>
        <Stack spacing={2}>
          <TextField
            data-testid="text-input"
            label="Enter your text to validate"
            minRows={10}
            maxRows={30}
            multiline
            value={text}
            onChange={onChange}
            disabled={loading}
            variant="outlined"
            name="message"
          />

          <Box display="flex" justifyContent="center" marginTop={2}>
            <LoadingButton
              type="submit"
              variant="contained"
              color="primary"
              loading={loading}
            >
              Validate
            </LoadingButton>
          </Box>
        </Stack>
      </form>
    </Card>
  </Container>
);
export default TagValidatorForm;
