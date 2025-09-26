import { useState } from 'react';
import './popup.scss';

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const phoneRegex =
    /^(\+7|8)?\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Имя обязательно';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Имя должно быть не короче 2 символов';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Телефон обязателен';
    } else if (!phoneRegex.test(phone.trim())) {
      newErrors.phone = 'Некорректный номер телефона';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch('https://formspree.io/f/manpnglb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
        }),
      });

      if (response.ok) {
        setSuccessMessage('Спасибо! Мы свяжемся с вами в ближайшее время.');
        setName('');
        setPhone('');
        setErrors({});
        // optionally close the popup after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
          onClose(); // если ты передал функцию onClose
        }, 3000);
      } else {
        setSuccessMessage('Произошла ошибка. Попробуйте позже.');
      }
    } catch (err) {
      console.error('Ошибка отправки:', err);
      setSuccessMessage('Произошла ошибка. Попробуйте позже.');
    }
  };

  return (
    <div className='popup'>
      <div className='popup__overlay' onClick={onClose} />
      <div className='popup__content'>
        <button
          className='popup__close'
          onClick={onClose}
          aria-label='Закрыть попап'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <line x1='18' y1='6' x2='6' y2='18' />
            <line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        </button>
        <h2 className='sp-h2 sp-text-upper popup__title'>Заказать прайс</h2>
        {successMessage ? (
          <p className='popup__success sp-text-sm' style={{ color: 'green' }}>
            {successMessage}
          </p>
        ) : (
          <form className='popup__form' onSubmit={handleSubmit}>
            <label>
              Имя:
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Ваше имя'
                className='popup__input'
              />
              {errors.name && (
                <div
                  style={{ color: 'red', marginTop: '6px', fontSize: '14px' }}
                >
                  {errors.name}
                </div>
              )}
            </label>

            <label>
              Телефон:
              <input
                type='tel'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='+7 (999) 999-99-99'
                className='popup__input'
              />
              {errors.phone && (
                <div
                  style={{ color: 'red', marginTop: '6px', fontSize: '14px' }}
                >
                  {errors.phone}
                </div>
              )}
            </label>
            <button type='submit' className='popup__button'>
              Отправить
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Popup;
