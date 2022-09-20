/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import expires from '../images/expires.svg';
import expiresIn from '../images/ExpiresIn.svg';
import milkExp from '../images/milkExp.svg';
import x1 from '../images/x1.svg';

const containerStyle = css`
  padding: 40px 40px;
  display: flex;
  width: 78%;
  margin: 7% auto;
`;

const textContainerStyle = css`
  width: 50%;
  padding-right: 12px;
  > h2 {
    padding-right: 10px;
    font-size: calc(45px + 15 * ((100vw - 500px) / 940));
    margin-top: 10%;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin-bottom: 0px;
  }
  > p {
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    color: rgb(54, 181, 53);
  }
`;

const foodItemsStyle = css`
  width: 50%;
  height: 339px;
  padding-left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  > div:nth-child(2) {
    position: relative;
    top: 33%;
    left: -28%;
    z-index: 4;
  }
  > div:nth-child(3) {
    position: relative;
    top: 13%;
    right: -16%;
    z-index: 5;
  }
`;

const cardContainerStyle = css`
  position: relative;
  display: inline-block;
  width: 50%;
  > img:nth-child(1) {
    border-radius: 20px;
    box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
    color: rgb(0, 0, 0);
    width: 80%;
  }
`;

const numberItems = css`
  width: 19%;
  height: 19%;
  position: absolute;
  top: 8%;
  right: 23%;
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

const colorMilkStyle = css`
  background: linear-gradient(
    135deg,
    rgb(218, 227, 244) 0%,
    rgb(146, 163, 195) 100%
  );
`;

const expiresInStyle = css`
  opacity: 1;
  z-index: 7;
`;

function ExpiratationDate() {
  return (
    <div css={containerStyle}>
      <div css={textContainerStyle}>
        <h2>Expiration dates under control.</h2>
        <p>
          If your food has an expiration date, Kiff will keep it under control
          so you can eat it before it's too late.
        </p>
      </div>

      <div css={foodItemsStyle}>
        <div css={cardContainerStyle}>
          <img css={colorMilkStyle} src={milkExp} alt="food item" />
          <span css={numberItems}>
            <img src={x1} alt="number" />
          </span>
        </div>
        <div css={cardContainerStyle}>
          <img css={expiresInStyle} src={expiresIn} alt="expiration time" />
        </div>
        <div css={cardContainerStyle}>
          <img css={expiresInStyle} src={expires} alt="expiration time" />
        </div>
      </div>
    </div>
  );
}

export default ExpiratationDate;
