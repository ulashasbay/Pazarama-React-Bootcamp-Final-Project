import * as yup from "yup";

const AdminLoginVal = yup.object().shape({
  username: yup.string().required("Lütfen Kullanıcı Adınızı Giriniz!")
  .matches(/^kodluyoruz$/, "Yanlış Kullanıcı Adı!"),
  password: yup
    .string()
    .min(5, "Şifreniz En Az 5 Karakterli Olmalıdır!")
    .required("Lütfen Şifrenizi Giriniz!")
    .matches(/^bootcamp109$/, "Yanlış Şifre!"),
});

export default AdminLoginVal;
