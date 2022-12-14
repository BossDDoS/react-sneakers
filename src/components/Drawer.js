function Drawer({onClose, items = []}) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="img/btn-remove.svg"
            alt="Remove"
          />
        </h2>
        <div className="items mb-40">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src={obj.imageUrl}
                alt=""
              />
              <div>
                <p className="mb-5 mr-20">{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <div>
                <img
                  className="removeBtn"
                  src="img/btn-remove.svg"
                  alt="Remove"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 rub. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 rub. </b>
            </li>
          </ul>
          <button className="greenButton">
            <span>Оформить заказ</span>
            <img src="img/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
