import {
  Box,
  Stack,
  Paper,
  styled,
  Button,
  Container,
  Typography
} from "@mui/material";
import { useState } from "react";
import { SignUp } from "pages/SignUp";
import { useSelector } from "react-redux";

const HomeFooter = () => {
  const [isOpenCloseSignUp, setIsOpenCloseSignUp] = useState<boolean>(false);
  const signUpUserData = useSelector((state: any) => state.signupUserData.user);
  const RootStyle = styled("div")(({ theme }) => ({
    padding: theme.spacing(10, 0),
    color: theme.palette.neutral.main
  }));

  const handleOpenSignUp = () => setIsOpenCloseSignUp(true);

  const handleCloseSignUp = () => setIsOpenCloseSignUp(false);

  return (
    <>
      <Paper>
        <RootStyle>
          <Container maxWidth="md">
            <Box>
              <Typography variant="h5" textAlign="center">
                Looking forward to contributing to your success! source your
                recruitment to us and let us help you find the right talents!
              </Typography>
            </Box>
            <Stack direction="row" justifyContent="center" marginTop={2}>
              {!signUpUserData && (
                <Button
                  variant="contained"
                  onClick={handleOpenSignUp}
                  size="large"
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
export { HomeFooter };
