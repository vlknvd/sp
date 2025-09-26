const Button = ({ name, onClick }) => {
  return (
    <button className={`button ${name}__button`} onClick={onClick}>
      Заказать прайс
    </button>
  );
};

export default Button;
