// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.VITE_API_BASE_URL || "https://api.smileeye-charity.org",
  TIMEOUT: 10000,
} as const;

// Contact Information
export const CONTACT_INFO = {
  PHONE: "0962 414 125",
  EMAIL: "dinhdongphuong@gmail.com",
  ADDRESS: "Co-tu Communities, Vietnam",
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  FACEBOOK: "https://facebook.com/smileeye-charity",
  INSTAGRAM: "https://instagram.com/smileeye-charity",
  YOUTUBE: "https://youtube.com/@smileeye-charity",
  TWITTER: "https://twitter.com/smileeye-charity",
} as const;

// Image Configurations
export const IMAGE_CONFIG = {
  PLACEHOLDER:
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
  HERO_VIDEO: "https://www.youtube.com/embed/543jwFfCZvg?si=cFkeCK3EdYHGqfDM",
  UNSPLASH_BASE: "https://images.unsplash.com/",
} as const;

// App Configuration
export const APP_CONFIG = {
  NAME: "SmileEye Charity v2",
  VERSION: "2.0.0",
  DESCRIPTION: "Supporting Co-tu communities in Vietnam",
  DEFAULT_LANGUAGE: "en",
  SUPPORTED_LANGUAGES: ["en", "vn", "jp"] as const,
} as const;

// Animation Durations
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const;

// UI Constants
export const UI_CONSTANTS = {
  MAX_CONTENT_WIDTH: "7xl",
  MODAL_Z_INDEX: 50,
  HEADER_HEIGHT: "64px",
  FOOTER_HEIGHT: "200px",
} as const;

// Form Validation
export const VALIDATION = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 50,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 500,
  PHONE_REGEX: /^[+]?[\d\s\-\(\)]+$/,
} as const;
