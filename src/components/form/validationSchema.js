import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  policyholderType: Yup.string().required('Это поле обязательно для заполнения'),
  identificationNumber: Yup.string().required('Это поле обязательно для заполнения'),
  region: Yup.string().required('Это поле обязательно для заполнения'),
  mobilePhone: Yup.string().required('Это поле обязательно для заполнения'),
  corporateEmail: Yup.string().email('Введите корректный email').required('Это поле обязательно для заполнения'),
  organizationStartDate: Yup.string().required('Это поле обязательно для заполнения'),
  insuranceEventsPastFiveYears: Yup.boolean().required('Это поле обязательно для заполнения'),
  economicActivityType: Yup.string().required('Это поле обязательно для заполнения'),
  amountOfEmployees: Yup.number().required('Это поле обязательно для заполнения'),
  gfotOfEmployees: Yup.number().required('Это поле обязательно для заполнения'),
  doesExistContract: Yup.boolean().required('Это поле обязательно для заполнения'),
  dateOfInsuranceCommencement: Yup.string().required('Это поле обязательно для заполнения'),
  dateOfInsuranceTermination: Yup.string().required('Это поле обязательно для заполнения'),
  hasBranchesOfCompany: Yup.boolean().required('Это поле обязательно для заполнения'),
  frequencyOfInsurance: Yup.string().required('Это поле обязательно для заполнения'),
  paymentMethod: Yup.string().required('Это поле обязательно для заполнения'),
  edsOfFirstHead: Yup.boolean().required('Это поле обязательно для заполнения'),
  whoSignsDeclaration: Yup.string().required('Это поле обязательно для заполнения'),
});

export default validationSchema;
