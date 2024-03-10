import logo from "./assets/images/logo.jpg";

import links from "./links";

const Header = () => {
  console.log(links.facebook);

  const iconWidth = 40;
  const iconHeight = 40;

  return (
    <>
      <div className="header">
        <div className="navbar">
          <img className="logo" src={logo} alt="Logo" />

          <div className="links">
            <a href={links.facebook} target="_blank">
              <img
                width={iconWidth}
                height={iconHeight}
                src="https://img.icons8.com/fluency/48/facebook-new.png"
                alt="facebook-new"
              />
            </a>
            <a href={links.insta} target="_blank">
              <img
                width={iconWidth}
                height={iconHeight}
                src="https://img.icons8.com/fluency/48/instagram-new.png"
                alt="instagram-new"
              />
            </a>
            <a href={links.telegram} target="_blank">
              <img
                width={iconWidth}
                height={iconHeight}
                src="https://img.icons8.com/color/48/telegram-app--v1.png"
                alt="telegram-app--v1"
              />
            </a>

            <a href={links.snap} target="_blank">
              <img
                width={iconWidth - 1}
                height={iconHeight - 1}
                src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-snapchat-a-multimedia-messaging-app-used-globally-logo-shadow-tal-revivo.png"
                alt="external-snapchat-a-multimedia-messaging-app-used-globally-logo-shadow-tal-revivo"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
