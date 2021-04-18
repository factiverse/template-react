import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../translations/i18n';
import i18n from 'i18next';

const HelloWorld: React.FC = () => {
  const { t } = useTranslation();

  function changeLanguage(e) {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div>
      <label>
        <input
          type="radio"
          id="langEN"
          name="lang"
          value="en"
          defaultChecked
          onChange={changeLanguage}
        />
        English
      </label>
      <label>
        <input
          type="radio"
          id="langNO"
          name="lang"
          value="no"
          onChange={changeLanguage}
        />
        Norwegian
      </label>
      <h1>{t('helloWorld')}</h1>
    </div>
  );
};

export default HelloWorld;
