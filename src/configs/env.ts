// Centralized environment configuration with fallbacks
export const env = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.nikan.hospital/api',
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://nikan.hospital',
} as const;
