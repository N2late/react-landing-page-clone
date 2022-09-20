/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import carrots from '../images/carrots.svg';
import lettuce from '../images/lettuce.svg';
import pineapple from '../images/pineapple.svg';
import tomatoes from '../images/tomatoes.svg';
import x2 from '../images/x2.svg';
import x2Tomatoes from '../images/x2Tomatoes.svg';
import x4 from '../images/x4.svg';
import x4Carrots from '../images/x4Carrots.svg';

const containerStyle = css`
  padding: 40px 40px;
  display: flex;
  width: 78%;
  margin: 0 auto;
`;

const foodItemsStyle = css`
  width: 50%;
  height: 339px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const cardContainerStyle = css`
  position: relative;
  display: inline-block;
  width: 50%;
  margin-left: -12px;
  > img:nth-child(1) {
    border-radius: 20px;
    box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
    color: rgb(0, 0, 0);
    width: 80%;
    margin: 12px 12px;
  }
`;

const colorLettuceStyle = css`
  background: linear-gradient(
    135deg,
    rgb(202, 236, 172) 0%,
    rgb(131, 208, 197) 100%
  );
`;

const colorPineappleStyle = css`
  background: linear-gradient(
    135deg,
    rgb(255, 239, 184) 0%,
    rgb(251, 220, 113) 100%
  );
`;

const colorTomatoesStyle = css`
  background: linear-gradient(
    135deg,
    rgb(255, 200, 143) 0%,
    rgb(255, 143, 143) 100%
  );
`;

const colorCarrotsStyle = css`
  background: linear-gradient(
    135deg,
    rgb(255, 232, 188) 0%,
    rgb(255, 156, 84) 100%
  );
`;

const numberItems = css`
  width: 19%;
  height: 19%;
  position: absolute;
  top: 11%;
  right: 19%;
  z-index: 1;
  > img {
    width: 100%;
    height: 100%;
    content: '';
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
  }
`;

const textContainerStyle = css`
  width: 50%;
  padding-left: 5%;
  > h2 {
    font-size: calc(45px + 15 * ((100vw - 500px) / 940));
    margin-top: 10%;
    margin-bottom: 2%;
  }
  > p {
    margin-top: 0px;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    color: rgb(54, 181, 53);
  }
`;

function FoodWaste() {
  return (
    <div css={containerStyle}>
      <div css={foodItemsStyle}>
        <div css={cardContainerStyle}>
          <img css={colorLettuceStyle} src={lettuce} alt="food item" />
          <span css={numberItems}>
            <img src={x4} alt="number" />
          </span>
        </div>
        <div css={cardContainerStyle}>
          <img css={colorPineappleStyle} src={pineapple} alt="food item" />
          <span css={numberItems}>
            <img src={x2} alt="number" />
          </span>
        </div>
        <div css={cardContainerStyle}>
          <img css={colorTomatoesStyle} src={tomatoes} alt="food item" />
          <span css={numberItems}>
            <img src={x2Tomatoes} alt="number" />
          </span>
        </div>
        <div css={cardContainerStyle}>
          <img css={colorCarrotsStyle} src={carrots} alt="food item" />
          <span css={numberItems}>
            <img src={x4Carrots} alt="number" />
          </span>
        </div>
      </div>
      <div css={textContainerStyle}>
        <h2>Don't let your food go to waste.</h2>
        <p>
          Kiff tracks your food's state and orders it by priority, so you will
          know what to eat at a glance.
        </p>
      </div>
    </div>
  );
}

export default FoodWaste;
