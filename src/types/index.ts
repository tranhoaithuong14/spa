import { type ComponentType } from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface RouteConfig {
  path: string;
  component: ComponentType;
  exact?: boolean;
}

export interface AppState {
  isLoading: boolean;
  error: string | null;
  user: User | null;
}

export type Theme = 'light' | 'dark';

export interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  user: User | null;
  setUser: (user: User | null) => void;
}
