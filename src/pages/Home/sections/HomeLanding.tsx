import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import Images from 'assets';
import { SignUp } from 'pages/SignUp';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const HomeLanding = () => {
  const [isOpenCloseSignUp, setIsOpenCloseSignUp] = useState<boolean>(false);
  const signUpUserData = useSelector((state: any) => state.signupUserData.user);
  const styles = {
    paperContainer: {
      minHeight: '100vh',
      backgroundImage: `url(${Images.Banner})`,
    },
  };
  const RootStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(28, 0),
  }));

  const handleOpenSignUp = () => setIsOpenCloseSignUp(true);

  const handleCloseSignUp = () => setIsOpenCloseSignUp(false);

  const { t } = useTranslation();
  return (
    <>
      <Paper style={styles.paperContainer}>
        <RootStyle>
          <Container maxWidth='md'>
            <Box>
              <Typography
                variant='h2'
                color='white'
                sx={{
                  fontSize: { md: '3.5rem', sm: '3rem', xs: '2rem' },
                  textTransform: 'capitalize',
                  textAlign: 'center',
                }}
                gutterBottom
              >
                {t('landing.introduction')}
              </Typography>
            </Box>
            <Stack
              direction='row'
              justifyContent='center'
              sx={{ mt: { xs: 8, sm: 4 } }}
            >
              {!signUpUserData && (
                <Button
                  onClick={handleOpenSignUp}
                  variant='contained'
                  color='primary'
                >
                  Join Us!
                </Button>
              )}
            </Stack>
          </Container>
        </RootStyle>
      </Paper>
      <SignUp
        setIsOpenCloseSignUp={setIsOpenCloseSignUp}
        onSignUpClose={handleCloseSignUp}
        signUpModalOpen={isOpenCloseSignUp}
      />
    </>
  );
};

export { HomeLanding };
