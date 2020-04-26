/** @format */

const mobile = {
  portrait: 'only screen and (max-width: 450px)',
  landscape:
    'only screen and (min-device-width: 450px) and (max-device-width: 900px) and (orientation: landscape)'
};

const media = {
  mobile: `${mobile.portrait}, ${mobile.landscape}`,
  mobilePortrait: mobile.portrait,
  mobileLandscape: mobile.landscape
};

export default media;
