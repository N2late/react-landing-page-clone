/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from '../images/logo2.svg';

const containerStyle = css`
  width: 100%;
  height: 80px;
  display: flex;
  margin-top: 4px;
  max-width: 1440px;
  padding-left: 10%;
  padding-right: 10%;
  justify-content: space-between;
  align-items: center;
`;

const logoStyle = css`
  width: 180px;
  height: 56px;
  margin-right: 51px;
`;

const navStyle = css`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  text-align: center;
  > a {
    width: fit-content;
    height: 40px;
    font-size: 18px;
    align-self: center;
    display: flex;
    align-items: center;
    font-weight: 500;
    margin-left: 48px;

    &:last-child {
      padding: 8px 24px;
      border-radius: 20px;
      background-color: rgb(31, 31, 31);
      color: #fff;
    }
  }
`;

function Nav() {
  return (
    <div css={containerStyle}>
      <img css={logoStyle} src={logo} alt="Kiff logo" />

      <nav css={navStyle}>
        <a href="#abc">
          <span>About</span>
        </a>
        <a href="#abc">
          <span>Awareness</span>
        </a>
        <a href="#abc">
          <span>Support</span>
        </a>
        <a href="#abc">
          <span>Download</span>
        </a>
      </nav>
    </div>
  );
}

export default Nav;
