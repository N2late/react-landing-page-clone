/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import phoneScreenshot from '../images/hero-phone.png';

const heroContainerStyle = css`
  padding: 46px 0;
  margin: 0 auto;
`;

const heroH1Style = css`
  width: 683px;
  margin: 0 auto;
  text-align: center;
  font-size: 150px;
  font-weight: 900;

  span:nth-child(1) {
    height: fit-content;
    position: relative;
    left: -32px;
    border: 0px;
    padding: 0px;
    margin: 0px;
  }

  span:last-child {
    height: fit-content;
    position: relative;
    border: 0px;
    padding: 0px;
    top: -57px;
    z-index: 1;
  }
`;

const imgStyle = css`
  width: 300px;
  position: absolute;
  top: 14%;
  left: 48%;
  z-index: 0;
`;

const appStoreContainerStyle = css`
  color: rgb(54, 181, 53);
  text-align: center;
  padding: 0 40px;
  margin: 0 auto;
  width: 850px;
  > h2 {
    font-weight: 400;
    font-size: 40px;
    margin: 0 24.3px;
    margin-bottom: 40px;
  }
`;

function Hero() {
  return (
    <>
      <div css={heroContainerStyle}>
        <h1 css={heroH1Style}>
          <span>EAT</span>
          <br />
          <span>FRESH</span>
        </h1>
        <picture>
          <img
            css={imgStyle}
            src={phoneScreenshot}
            alt="phone app screenshot"
          />
        </picture>
      </div>
      <div css={appStoreContainerStyle}>
        <h2>Save time and money managing your fridge or pantry with Kiff.</h2>
      </div>
    </>
  );
}

export default Hero;
