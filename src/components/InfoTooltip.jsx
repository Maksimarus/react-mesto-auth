import success from '../images/success.png';
import fail from '../images/fail.png';

const InfoTooltip = ({isOpen, onClose, status}) => {
  return (
    <div className={`popup popup_role_tooltip ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <div className="tooltip">
          <img
            className="tooltip__image"
            src={status ? success : fail}
            alt={status ? 'Успех' : 'Неудача'}
          />
          <p className="tooltip__text">
            {status
              ? 'Вы успешно зарегистрировались!'
              : 'Что-то пошло не так! Попробуйте ещё раз.'}
          </p>
        </div>
        <button
          type="button"
          className="button popup__close-button"
          onClick={onClose}></button>
      </div>
    </div>
  );
};

export default InfoTooltip;
