const cookiesParser = (req, res, next) => {

  let parsedCookies = {};

  if (req.headers.cookie) {
    const cookiesArray = req.headers.cookie.split(';');

    cookiesArray.forEach(cookie => {
      const parsedCookie = cookie.split('=');
      const cookieName = parsedCookie[0].trim();
      const cookieValue = parsedCookie[1].trim();

      parsedCookies = { ... parsedCookies, [cookieName]: cookieValue};
    });
  }
  
  req.parsedCookies = parsedCookies;
  next();
};

export default cookiesParser;
