import { useState } from "react";
import React from "react";
import "./index.scss";
import '../../app.scss';
import {
  Select,
  Input,
  Typography,
  DatePicker,
  Radio,
  InputNumber,
  Flex,
  Button,
  Table
} from "antd";
import InputMask from "react-input-mask";
const { Text } = Typography;
const { RangePicker } = DatePicker;

function Form() {
  const [formData, setFormData] = useState({
    policyholderType: 'individual',
    identificationNumber: "",
    region: "",
    mobilePhone: "",
    corporateEmail: "",
    organizationStartDate: "",
    insuranceEventsPastFiveYears: null,
    economicActivityType: "",
    amountOfEmployees: 1,
    gfotOfEmployees: 510000,
    doesExistContract: "",
    dateOfInsuranceCommencement: "",
    dateOfInsuranceTermination: "",
    hasBranchesOfCompany: "",
    frequencyOfInsurance: "",
    paymentMethod: "",
    edsOfFirstHead: "",
    whoSignsDeclaration: "",
  });

  const columns = [
    {
      title: 'Страховая сумма, тг',
      dataIndex: 'insuranceSum',
      key: 'insuranceSum',
    },
    {
      title: 'Тариф, %',
      dataIndex: 'tariff',
      key: 'tariff',
    },
    {
      title: 'Поправочный коэффициент, %',
      dataIndex: 'correctionCoefficient',
      key: 'correctionCoefficient',
    },
    {
      title: 'Страховая премия, тг',
      dataIndex: 'insurancePremium',
      key: 'insurancePremium',
    },
  ];

  const data = [
    {
      key: '1',
      insuranceSum: '0 ₸',
      tariff: '0%',
      correctionCoefficient: '0%',
      insurancePremium: '0 ₸',
    },
  ];

  const [whatPolicyHolderType, setWhatPolicyHolderType] = useState('iin');
  
  

  const regions = ["Almaty", "Atyrau"];
  const activityTypes = [
    {
      id: 1,
      type: "1 - Выращивание риса",
    },
    {
      id: 2,
      type: "2 - Производство хоз. товаров",
    },
    {
      id: 3,
      type: "3 - Химическая промышленность",
    },
  ];

  const onChangeSelect = (text, stateValue) => {
    setFormData({
      ...formData,
      [stateValue]: text,
    });
  };



  const onChangeDate = (date, dateString) => {
    setFormData({
      ...formData,
      organizationStartDate: dateString,
    });
  };

  const onChangeRadio = (e, stateValue) => {
    setFormData({
      ...formData,
      [stateValue]: e.target.value,
    });
  };

  const onChangeFirstRadio = (e) => {
    if (e.target.value === 'individual') {
      setWhatPolicyHolderType('iin');
    } else {
      setWhatPolicyHolderType('bin');
    }
    setFormData({
      ...formData,
      policyholderType: e.target.value,
    });
  }

  const onChangeNumber = (e) => {
    const cleanedValue = e.target.value.replace(/\D/g, ""); // Удаляем все нечисловые символы
    setFormData({
      ...formData,
      mobilePhone: cleanedValue,
    });
  };

  const onChangeAmount = (e) => {
    setFormData({
      ...formData,
      amountOfEmployees: e,
    });
  };

  const onChangeGfot = (e) => {
    setFormData({
      ...formData,
      gfotOfEmployees: e,
    });
  };

  const onChangeDates = (data, dataString) => {
    setFormData({
      ...formData,
      dateOfInsuranceCommencement: dataString[0],
      dateOfInsuranceTermination: dataString[1],
    });
  };

  const onChangeIndentification = (e) => {
    setFormData({
      ...formData,
      identificationNumber: e,
    });
  };

  const onChangeEmail = (e) => {
    setFormData({
      ...formData,
      corporateEmail: e.target.value,
    });
  };

  const onSubmitForm = () => {
    console.log(formData)
  }

  return (
    <div className="form-wrapper">
      <div className="container">
        <form className="form">
          <Flex vertical gap={"large"} justify="start" align="start">
            <Flex vertical gap={"middle"}>
              <h1 className="form__title">
                Расчет страховой премии по договору страхования
              </h1>
              <div className="form__block">
                <Radio.Group
                  onChange={(e) => {
                    onChangeFirstRadio(e)
                  }}
                  value={formData.policyholderType}
                >
                  <Radio value={"individual"}>
                    Страхователь - физическое лицо
                  </Radio>
                  <Radio value={"legal_entity"}>
                    Страхователь – юридическое лицо
                  </Radio>
                </Radio.Group>
              </div>
              <div className="form__block">
                <Text>
                  {whatPolicyHolderType==='iin' ? 'ИИН' : 'БИН'}<sup>*</sup>
                </Text>
                <br />
                <InputNumber
                  min={0}
                  controls={false}
                  onChange={onChangeIndentification}
                  style={{width:"20%", minWidth:"200px"}}
                />
              </div>
              <div className="form__block">
                <Text>
                  Регион (где заключается договор)<sup>*</sup>
                </Text>
                <Select
                  mode="single"
                  value={formData.region}
                  onChange={(text) => onChangeSelect(text, 'region')}
                  style={{
                    width: "100%",
                  }}
                  options={regions.map((item) => ({
                    value: item,
                    label: item,
                  }))}
                />
              </div>
              <Flex gap={"50px"}>
                <div className="form__block">
                  <Text>
                    Мобильный телефон Страхователя<sup>*</sup>
                  </Text>
                  <InputMask
                    mask="+7 (999) 999-99-99"
                    maskChar="_"
                    value={formData.mobilePhone}
                    onChange={onChangeNumber}
                  >
                    {() => <Input />}
                  </InputMask>
                </div>
                <div className="form__block">
                  <Text>
                    Корпоративный e-mail страхователя<sup>*</sup>
                  </Text>
                  <Input onChange={onChangeEmail} />
                </div>
              </Flex>
              <Flex>
                <div className="form__block">
                  <Text>
                    Начало деятельности организации <br />
                    (указать с какого месяца и года)<sup>*</sup>
                  </Text>
                  <DatePicker onChange={onChangeDate} />
                </div>
                <div className="form__block">
                  <Text>
                    Были ли страховые случаи за последние 5 лет?<sup>*</sup>
                  </Text>
                  <Radio.Group
                    onChange={(text) => onChangeRadio(text, 'insuranceEventsPastFiveYears')}
                    value={formData.insuranceEventsPastFiveYears}
                  >
                    <Radio value={true}>Да</Radio>
                    <Radio value={false}>Нет</Radio>
                  </Radio.Group>
                </div>
              </Flex>
            </Flex>
            <Flex vertical gap={"middle"}>
              <h2 className="form__title">Расчет страховой премии</h2>
              <div className="form__block">
                <Text>Вид экономической деятельности</Text>
                <Select
                  mode="single"
                  value={formData.economicActivityType}
                  onChange={(text) => onChangeSelect(text, 'economicActivityType')}
                  style={{
                    width: "100%",
                  }}
                  options={activityTypes.map((type) => ({
                    value: type.id,
                    label: type.type,
                  }))}
                />
              </div>
              <div className="form__block">
                <Text>
                  Укажите количество работников, подлежащих страхованию </Text>
                <InputNumber
                  min={1}
                  defaultValue={1}
                  onChange={onChangeAmount}
                />
              </div>
              <div className="form__block">
                <Text>Укажите ГФОТ работников, подлежащих страхованию </Text>
                <InputNumber
                  min={510000}
                  defaultValue={510000}
                  onChange={onChangeGfot}
                />
              </div>
              <div className="form__block">
                <Table columns={columns} dataSource={data} pagination={false} bordered={true} />
              </div>
              <div className="form__block">
                <Text>Существует ли действующий договор страхования? </Text>
                <Radio.Group
                  onChange={(e) => onChangeRadio(e, 'doesExistContract')}
                  value={formData.doesExistContract}
                >
                  <Radio value={true}>Да</Radio>
                  <Radio value={false}>Нет</Radio>
                </Radio.Group>
              </div>
              </Flex>
              <Flex vertical gap={"middle"}>
              <h2 className="form__title">Сроки страхования</h2>
              <div className="form__block">
                <Text>
                  Начало страхования - Конец страхования<sup>*</sup>
                </Text>
                <br />
                <RangePicker onChange={onChangeDates} format={"YYYY-MM-DD"} />
              </div>
              <div className="form__block">
                <Text>Имеет ли Ваша организация филиалы?</Text>
                <br />
                <Radio.Group
                  onChange={(e) => onChangeRadio(e, 'hasBranchesOfCompany')}
                  value={formData.hasBranchesOfCompany}
                >
                  <Radio value={true}>Да</Radio>
                  <Radio value={false}>Нет</Radio>
                </Radio.Group>
              </div>
              <div className="form__block">
                <Text>
                  Выберите периодичности оплаты страховой премии<sup>*</sup>
                </Text>
                <br />
                <Radio.Group
                  onChange={(e) => onChangeRadio(e, 'frequencyOfInsurance')}
                  value={formData.frequencyOfInsurance}
                >
                  <Radio value={"once"}>Единовременно</Radio>
                  <Radio value={"installments"}>В рассрочку</Radio>
                </Radio.Group>
              </div>
              <div className="form__block">
                <Text>
                  Выберите метод оплаты<sup>*</sup>
                </Text>
                <br />
                <Radio.Group
                  onChange={(e) => onChangeRadio(e, 'paymentMethod')}
                  value={formData.paymentMethod}
                >
                  <Radio value={"online"}>Онлайн оплата платёжной картой</Radio>
                  <Radio value={"by-bill"}>Оплатить по счету</Radio>
                </Radio.Group>
              </div>
              <div className="form__block">
                <Text>
                  У вас есть сертификат ЭЦП первого руководителя организации?
                  <sup>*</sup>
                </Text>{" "}
                <br />
                <Radio.Group
                  onChange={(e) => onChangeRadio(e, 'edsOfFirstHead')}
                  value={formData.edsOfFirstHead}
                >
                  <Radio value={true}>Да</Radio>
                  <Radio value={false}>Нет</Radio>
                </Radio.Group>
              </div>
              <div className="form__block">
                <Text>
                  Кто подписывает заявление?<sup>*</sup>
                </Text>{" "}
                <br />
                <Radio.Group
                  onChange={(e) => onChangeRadio(e, 'whoSignsDeclaration')}
                  value={formData.whoSignsDeclaration}
                >
                  <Radio value={'me'}>Я сам (сама)</Radio>
                  <Radio value={'send'}>
                    Отправить на подпись первому руководителю
                  </Radio>
                </Radio.Group>
              </div>
            </Flex>
            <Button onClick={() => onSubmitForm()} type="primary">Отправить заявку</Button>
          </Flex>
        </form>
      </div>
    </div>
  );
}

export default Form;
