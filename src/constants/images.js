// Define image path constants for CDN images only. export const images directly for project specific images
export const headerLogo = `${
  process.env.REACT_APP_CDN_URL
}/images/logo-small.png`;

export const menu = `${process.env.REACT_APP_CDN_URL}/images/menu.svg`;

export const search = `${process.env.REACT_APP_CDN_URL}/images/search.svg`;
