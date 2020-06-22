export const SESSION_TOKEN_NAME = 'v3t4pp_t0k3n';

export const routePaths = {
  home: '/home',
  login: '/login'
};

export const routes = {
  home: {
    exact: true,
    path: routePaths.home
  },
  login: {
    exact: true,
    path: routePaths.login
  }
};