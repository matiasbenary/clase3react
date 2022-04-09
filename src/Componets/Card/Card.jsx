import style from './Card.module.css';

const Card = (props) => {
  console.log(props);
  console.log(true && 'hola');
  console.log(false || 'como');
  console.log(false ? 'como' : 'estas?');
  return (
    <div className={props.isOffer ? style.cardOffer : style.card}>
      <h3 className={style.card__title}>{props.title || 'Sin titulo'}</h3>
      <p>{props.price}</p>
      {props.isOffer && <h2>Esta de oferta</h2>}
      <button className={style.card__btn}>
        {props.btnText || 'Sin button'}
      </button>
    </div>
  );
};

export default Card;
