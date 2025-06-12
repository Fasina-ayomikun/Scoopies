import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Name is Required")
    .max(100, "Please input a shorter name"),
  email: yup
    .string()
    .email("Please provide a valid email")
    .required("Email is Required"),
  password: yup
    .string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, &)."
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .required("Confirm Password is Required"),
});
export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Please provide a valid email")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});
export const messageSchema = yup.object({
  name: yup
    .string()
    .required("Name is Required")
    .max(100, "Please input a shorter name"),

  email: yup
    .string()
    .email("Please provide a valid email")
    .required("Email is Required"),
  message: yup
    .string()
    .required("Write a message")
    .max(500, "Message should not be more tha 500 characters"),
});
