import { useState } from "react"
import React from 'react'
import './index.scss';
import { Select, Input, Typography, DatePicker, Radio } from 'antd';
import InputMask from 'react-input-mask';
const { Text } = Typography;


function Home() {
  
  const [formData, setFormData] = useState({
    policyholderType: null,
    identificationNumber: '',
    region: '',
    mobilePhone: '',
    corporateEmail: '',
    organizationStartDate: '',
    insuranceEventsPastFiveYears: null,
    economicActivityType: '',
    amountOfEmployees: '',
    gfotOfEmployees: '',
    doesExistContract: '',
    dateOfInsuranceCommencement: '',
    dateOfInsuranceTermination: '',
    hasBranchesOfCompany: '',
    frequencyOfInsurance: '',
    paymentMethod: '',
    edsOfFirstHead: '',
    whoSignsDeclaration: ''
  });

  const regions = ['Almaty', 'Atyrau']; 
  const activityTypes = [
    {
      id: 1,
      type: 'Выращивание канабиса'
    },
    {
      id: 2,
      type: 'Работорговля'
    },
    {
      id: 3,
      type: 'Оборот наркотиков'
    },
  ]; 


  const onChangeSelect1 = (text) => {
    setFormData({
      ...formData,
      region: text,
    });
  };

  const onChangeSelect2 = (text) => {
    setFormData({
      ...formData,
      economicActivityType: text,
    });
  };

  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };

  const onChangeRadio1 = (e) => {
    setFormData({
      ...formData,
      policyholderType: e.target.value,
    });
  };

  const onChangeRadio2 = (e) => {
    setFormData({
      ...formData,
      insuranceEventsPastFiveYears: e.target.value,
    });
  };
  const onChangeNumber = (e) => {
    const cleanedValue = e.target.value.replace(/\D/g, ''); // Удаляем все нечисловые символы
    setFormData({
      ...formData,
      mobilePhone: cleanedValue,
    });
  };

  
  return (
    <div className="form-wrapper">
      <div className="container">
        <form className="form">
          <h1 className="form__title">Расчет страховой премии по договору страхования</h1>
          <div className="form__block">
            <Radio.Group onChange={(e) => onChangeRadio1(e)} value={formData.policyholderType}>
              <Radio value={'individual'}>Страхователь - физическое лицо</Radio>
              <Radio value={'legal_entity'}>Страхователь – юридическое лицо</Radio>
            </Radio.Group>
          </div>
          <div className="form__block">
            <Text>ИИН<sup>*</sup></Text>
            <Input />
          </div>
          <div className="form__block">
            <Text>Регион (где заключается договор) <sup>*</sup></Text>
            <Select
              mode="single"
              placeholder="Inserted are removed"
              value={formData.region}
              onChange={(text) => onChangeSelect1(text)}
              style={{
                width: '100%',
              }}
              options={regions.map((item) => ({
                value: item,
                label: item
              }))}
            />
          </div>
          <div className="form__block">
            <Text>Мобильный телефон Страхователя<sup>*</sup></Text>
            <InputMask mask="+7 (999) 999-99-99" maskChar="_" value={formData.mobilePhone} onChange={onChangeNumber}>
              {() => <Input placeholder="Введите номер телефона" />}
            </InputMask>
          </div>
          <div className="form__block">
            <Text>Корпоративный e-mail страхователя<sup>*</sup></Text>
            <Input />
          </div>
          <div className="form__block">
            <Text>Начало деятельности организации (указать с какого месяца и года)<sup>*</sup></Text>
            <DatePicker onChange={onChangeDate} />
          </div>
          <div className="form__block">
            <Text>Корпоративный e-mail страхователя<sup>*</sup></Text>
            <Radio.Group onChange={(text) => onChangeRadio2(text)} value={formData.insuranceEventsPastFiveYears}>
              <Radio value={true}>Да</Radio>
              <Radio value={false}>Нет</Radio>
            </Radio.Group>
          </div>
          <h2 className="form__title">Расчет страховой премии</h2>
          <div className="form__block">
          <Text>Вид экономической деятельности</Text>
          <Select
              mode="single"
              placeholder="Inserted are removed"
              value={formData.economicActivityType}
              onChange={(text) => onChangeSelect2(text)}
              style={{
                width: '100%',
              }}
              options={activityTypes.map((type) => ({
                value: type.id,
                label: type.type
              }))}
            />
          </div>
          <div className="form__block">
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home