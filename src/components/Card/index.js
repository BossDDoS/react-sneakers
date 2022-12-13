import styles from "./Card.module.scss";
import React from 'react'

function Card({imageUrl, title, price, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({imageUrl, title, price});
    setIsAdded(!isAdded);
  }

  return (
    <div className={styles.card} onClick={onFavorite}>
      <div className={styles.favorite}>
        <img src="img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price} rub</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? 'img/btn-checked.svg' : 'img/btn-plus.svg'}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
