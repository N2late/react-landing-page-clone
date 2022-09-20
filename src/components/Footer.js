/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import footer from '../images/footer.svg';
import language from '../images/language.svg';

const footContainerStyle = css`
  width: 100%;
  background-color: rgb(20, 20, 20);
  font-weight: 500;
  color: rgb(255, 255, 255);
`;

const innerStyle = css`
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
`;

const mainLinksStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px 5px 0px;
`;

const copyrightStyle = css`
  width: 25%;
  > ul {
    list-style-type: none;
    display: flex;
    gap: 10px;
    padding-left: 0px;
  }
  > p {
    margin-bottom: 24px;
    opacity: 0.45;
  }
`;

const logoStyle = css`
  width: 120px;
`;

const termsStyle = css`
  color: white;
  text-decoration: dashed;
`;

const navStyle = css`
  font-size: 1.3rem;
  line-height: 54px;
  text-align: right;
  width: 60%;
  > ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  a {
    color: white;
  }
`;

const secondaryLinksStyle = css`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18px;
  font-size: calc(18px + 0 * ((100vw - 500px) / 940));

  li {
    list-style: none;
  }
`;

const languageStyle = css`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.08);
  cursor: pointer;
  font-size: 0.8125rem;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'San Francisco', Roboto,
    'Segoe UI', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  line-height: 0.8125rem;
  letter-spacing: 0.03125rem;
  padding: 0px;
  border: 0px;
  border-radius: 4px;
  margin: 0px;
  opacity: 1;
`;

const iconStyle = css`
  color: rgb(131, 131, 131);
`;
function Footer() {
  return (
    <footer css={footContainerStyle}>
      <div css={innerStyle}>
        <div css={mainLinksStyle}>
          <div css={copyrightStyle}>
            <a>
              <img css={logoStyle} src={footer} alt="topxel" />
            </a>
            <p>
              Kiff, an app from Topxel. <br />© Copyright 2020-2022. All Rights
              Reserved.
            </p>
            <ul>
              <li>
                <a css={termsStyle} href="abc">
                  Terms
                </a>
              </li>
              <li>
                <a css={termsStyle} href="abc">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <nav css={navStyle}>
            <ul>
              <li>
                <a href="#abc">Home</a>
              </li>
              <li>
                <a href="#abc">Press Kit</a>
              </li>
              <li>
                <a href="#abc">About</a>
              </li>
              <li>
                <a href="#abc">Support</a>
              </li>
              <li>
                <a href="#abc">Download</a>
              </li>
            </ul>
          </nav>
        </div>
        <div css={secondaryLinksStyle}>
          <button css={languageStyle}>
            <img css={iconStyle} src={language} alt="site language" />
            <span css={iconStyle}>ES</span>
          </button>
          <ul>
            <li>
              <a css={iconStyle} href="#abc">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
