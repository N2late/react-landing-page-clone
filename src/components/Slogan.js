/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const innerStyle = css`
  width: 100%;
  max-width: 1440px;
  padding-left: 40px;
  padding-right: 40px;
  margin: 0px auto;
`;
const contentStyle = css`
  width: 683px;
  max-width: 1064px;
  padding: 0px;
  margin: 0px auto;
`;
const sectionInfoStyle = css`
  align-items: center;
  margin: 120px 0px;
  width: 100%;
  max-width: 880px;
  text-align: center;
  > h2 {
    font-size: 50px;
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

const appImgStyle = css`
  display: block;
  margin: 40px auto 0px;
  cursor: pointer;
  width: 150px;
  height: 275px;
  background: url(https://kiff.app/static/en-kiff-download-qr.svg) center top /
    100% no-repeat;
`;

function Slogan() {
  return (
    <div css={innerStyle}>
      <div css={contentStyle}>
        <div css={sectionInfoStyle}>
          <h2>Stop wasting food and start saving money.</h2>
          <p>Pay once, yours forever.</p>
          <a css={appImgStyle} alt="get Kiff app for iOS">
            {' '}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
