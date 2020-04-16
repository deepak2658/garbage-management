exports.getLogin = (req, res, next) => {

  res.render('../views/auth/login.pug', {
    path: '/loginit',
    pageTitle: 'Login'
   // isAuthenticated: isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader('Set-Cookie', 'loggedIn=true');
  res.redirect('/loginit');
};
