import React, { useEffect } from "react";
import * as Yup from "yup";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Link,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "redux/action";
import LoadingButton from "@mui/lab/LoadingButton";
import { ForgotPassword } from "pages/ForgotPassword";

const SignIn = ({ onClickClose, modalOpen, setIsOpenCloseSignIn }: any) => {
  const [isOpenCloseForgotPassword, setIsOpenCloseForgotPassword] =
    React.useState<boolean>(false);
  const dispatch = useDispatch<any>();
  const isLoading = useSelector((state: any) => state.userData.loading);
  const signInUserData = useSelector((state: any) => state.userData.user);

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required")
  });

  useEffect(() => {
    if (signInUserData?.status === 200) {
      setIsOpenCloseSignIn(false);
    }
  }, [signInUserData?.status]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      dispatch(signInUser(values.email, values.password));
    }
  });

  const handleOpenForgotPassword = () => {
    setIsOpenCloseForgotPassword(true);
    setIsOpenCloseSignIn(false);
  };

  const handleCloseForgotPassword = () => setIsOpenCloseForgotPassword(false);

  const { errors, touched, handleSubmit, getFieldProps } = formik;
  return (
    <>
      <Dialog open={modalOpen} onClose={onClickClose} fullWidth>
        <DialogContent dividers>
          <FormikProvider value={formik}>
            <Form noValidate onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <Typography component="div" variant="h5" textAlign="center">
                  Sign In to your account
                </Typography>
                <TextField
                  fullWidth
                  type="email"
                  label="Enter Your Email Address"
                  {...getFieldProps("email")}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  type="password"
                  fullWidth
                  label="Enter Your Password"
                  {...getFieldProps("password")}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <Box display="flex" justifyContent="center">
                  <LoadingButton
                    type="submit"
                    color="primary"
                    variant="contained"
                    loading={isLoading}
                    loadingPosition="center"
                  >
                    Submit
                  </LoadingButton>
                </Box>
                <Link
                  onClick={handleOpenForgotPassword}
                  style={{ textAlign: "center" }}
                  color="inherit"
                  href="#"
                >
                  Forgot Password
                </Link>
              </Stack>
            </Form>
          </FormikProvider>
        </DialogContent>
      </Dialog>
      <ForgotPassword
        setIsOpenCloseForgotPassword={setIsOpenCloseForgotPassword}
        onClickClose={handleCloseForgotPassword}
        modalOpen={isOpenCloseForgotPassword}
      />
    </>
  );
};

export { SignIn };
