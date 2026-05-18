import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar', 'id', 'ms', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});