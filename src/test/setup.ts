import { expect, afterEach, beforeEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Clean up after each test case
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

beforeEach(() => {
  // Reset DOM
  document.body.innerHTML = '';
});

// Mock environment variables
vi.mock('@/utils/constants', async () => {
  const actual = await vi.importActual('@/utils/constants');
  return {
    ...actual,
    API_BASE_URL: 'http://localhost:3001',
  };
});

// Mock localStorage with full implementation
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
    get length() {
      return Object.keys(store).length;
    },
    key: vi.fn((index: number) => Object.keys(store)[index] || null),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

Object.defineProperty(window, 'sessionStorage', {
  value: localStorageMock,
  writable: true,
});

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
  root: null,
  rootMargin: '',
  thresholds: [],
}));

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock MutationObserver
global.MutationObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  disconnect: vi.fn(),
  takeRecords: vi.fn(),
}));

// Mock fetch API
global.fetch = vi.fn();

// Mock window.URL.createObjectURL
Object.defineProperty(window.URL, 'createObjectURL', {
  value: vi.fn(() => 'mocked-url'),
  writable: true,
});

Object.defineProperty(window.URL, 'revokeObjectURL', {
  value: vi.fn(),
  writable: true,
});

// Mock scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
});

// Mock console methods in tests
Object.defineProperty(console, 'warn', {
  value: vi.fn(),
  writable: true,
});

Object.defineProperty(console, 'error', {
  value: vi.fn(),
  writable: true,
});

// Add custom matchers
expect.extend({
  toBeInTheDocument: received => {
    const pass = received && document.body.contains(received);
    return {
      message: () =>
        pass
          ? `Expected element not to be in the document`
          : `Expected element to be in the document`,
      pass,
    };
  },
});
