import Button from '../button/Button';
import './feedback.scss';

const Feedback = () => {
  return (
    <section className='feedback'>
      <div className='container'>
        <div className='feedback__content'>
          <h2 className='feedback__title sp-h2 sp-text-upper sp-text-white'>
            НАПИШИТЕ НАМ
          </h2>
          <h3 className='feedback__subtitle sp-h3 sp-text-white'>
            с предложением о сотрудничестве
          </h3>
          <Button name={'feedback'} />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
