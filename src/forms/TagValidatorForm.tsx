import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {TextField, Stack, Card, Typography, Container, Box, useTheme} from '@mui/material';
import {RootState} from "../store/reducer";
import {validateTag, validateTagClear} from "../store/tag/tag.actions";
import {LoadingButton} from "../components";

const TagValidatorForm: React.FC = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  const { error, data, loading } = useSelector((state: RootState) => state.tag);
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(validateTag(text));
  };

  return (
    <Container>
      <Typography variant="h3" color="white" align="center" gutterBottom>
        {'<Tags Validator/>'}
      </Typography>
      <Card sx={{ padding: theme.spacing(2), boxSizing: 'border-box' }}>
        {error && <Typography variant="overline" color="error">{error}</Typography>}
        {data && <Typography variant="overline">{data.message}</Typography>}
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              id="outlined-multiline-static"
              label="Enter your text to validate"
              minRows={10}
              maxRows={30}
              multiline
              value={text}
              onChange={(e) => {
                dispatch(validateTagClear());
                setText(e.target.value);
              }}
              disabled={loading}
              variant="outlined"
              name="message"
            />

            <Box display="flex" justifyContent="center" marginTop={2}>
              <LoadingButton type="submit" variant="contained" color="primary" loading={loading}>
                Validate
              </LoadingButton>
            </Box>

          </Stack>
        </form>
      </Card>
    </Container>

  );
}

export default TagValidatorForm;
