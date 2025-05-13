import { FC } from 'react';
import { Story } from '../model/types';

interface StoryCardProps {
  // product: Story; //не существует!
  story: Story,
  onClick?: () => void;
  showQuantity?: boolean;
  showDiscount?: boolean;
}

export const StoryCard: FC<StoryCardProps> = ({
  story,
  onClick,
  showQuantity = true,
  showDiscount = true,
}) => {
  const { name, description, price, discountPrice, quantity } = story;

  return (
    <div
      className="CLASS__NAME"
      onClick={onClick}
    >
      <h2 className="CLASS__NAME">{name}</h2>
      <p className="CLASS__NAME">{description}</p>

      <div className="CLASS__NAME">
        {showDiscount && discountPrice ? (
          <div>
            <span className="CLASS__NAME">${discountPrice}</span>
            <span className="lCLASS__NAME">${price}</span>
          </div>
        ) : (
          <span className="CLASS__NAME">${price}</span>
        )}
      </div>

      {showQuantity && (
        <p className="CLASS__NAME">В наличии: {quantity} шт</p>
      )}
    </div>
  );
};