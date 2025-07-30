export const APP_NAME = 'React SPA Production';
export const APP_VERSION = '1.0.0';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  NOT_FOUND: '*',
} as const;

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

export const STORAGE_KEYS = {
  THEME: 'app_theme',
  USER: 'app_user',
} as const;
