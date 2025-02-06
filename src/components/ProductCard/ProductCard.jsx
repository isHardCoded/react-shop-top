import "./ProductCard.css";
import StarIcon from "../../assets/images/star-icon.svg";

function ProductCard({ title, imageUrl, rating, price }) {
  return (
    <div className="product__card">
      <img src={imageUrl} alt="" />
      <h3 className="product__title">{title}</h3>
      <div className="rating">
        <div className="stars">
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
        </div>
        <p className="rating__value">{rating}/5</p>
      </div>
      <p className="product__price">${price}</p>
    </div>
  );
}

export default ProductCard;
