import * as Yup from "yup";
import {
  Box,
  Dialog,
  DialogContent,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "redux/action";
import LoadingButton from "@mui/lab/LoadingButton";
import { useEffect } from "react";

const SignUp = ({
  signUpModalOpen,
  onSignUpClose,
  setIsOpenCloseSignUp
}: any) => {
  const dispatch = useDispatch<any>();
  const signUpUserData = useSelector((state: any) => state.signupUserData.user);
  const isLoading = useSelector((state: any) => state.signupUserData.loading);

  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .when("password", {
        is: (val: any) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        )
      })
  });

  useEffect(() => {
    if (signUpUserData?.status === 200) {
      setIsOpenCloseSignUp(false);
    }
  }, [signUpUserData?.status]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values) => {
      dispatch(
        signUpUser(values.email, values.password, values.confirmPassword)
      );
    }
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <>
      <Dialog open={signUpModalOpen} onClose={onSignUpClose} fullWidth>
        <DialogContent dividers>
          <FormikProvider value={formik}>
            <Form noValidate onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <Typography component="div" variant="h5" textAlign="center">
                  Sign up to your account
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
                  fullWidth
                  type="password"
                  label="Enter Your Password"
                  {...getFieldProps("password")}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <TextField
                  fullWidth
                  type="password"
                  label="Enter confirm Password"
                  {...getFieldProps("confirmPassword")}
                  error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                  }
                  helperText={touched.confirmPassword && errors.confirmPassword}
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
              </Stack>
            </Form>
          </FormikProvider>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { SignUp };
