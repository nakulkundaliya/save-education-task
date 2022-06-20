import * as React from "react";
import * as Yup from "yup";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import { forgotPassword } from "redux/action";

const ForgotPassword = ({
  onClickClose,
  modalOpen,
  setIsOpenCloseForgotPassword
}: any) => {
  const isLoading = useSelector(
    (state: any) => state.forgotPasswordData.loading
  );
  const dispatch = useDispatch<any>();
  const forgotUserData = useSelector(
    (state: any) => state.forgotPasswordData.user
  );

  const ForgotPasswordSchema = Yup.object().shape({
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

  React.useEffect(() => {
    if (forgotUserData?.status === 200) {
      setIsOpenCloseForgotPassword(false);
    }
  }, [forgotUserData?.status]);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: ""
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: async (values) => {
      dispatch(forgotPassword(values.password, values.confirmPassword));
    }
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <>
      <Dialog open={modalOpen} onClose={onClickClose} fullWidth>
        <DialogContent dividers>
          <FormikProvider value={formik}>
            <Form noValidate onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <Typography component="div" variant="h5" textAlign="center">
                  Reset your password
                </Typography>
                <TextField
                  type="password"
                  fullWidth
                  required
                  label="Enter new password"
                  {...getFieldProps("password")}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                  type="password"
                  fullWidth
                  label="Enter confirm password"
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

export { ForgotPassword };
