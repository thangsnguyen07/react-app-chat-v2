import yup from "./yup/yupGlobal";

export const registerSchema = yup.object().shape({
  email: yup.string().required("Required").email("Email invalid"),
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  password: yup
    .string()
    .required("Required")
    .password(
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.",
    ),
});
