export function uniqueUsername(prefix = 'autotest'): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
}

export const PASSWORD = 'TestPass123!';

export function longString(length: number): string {
  return 'a'.repeat(length);
}

export const INJECTION_SCRIPTS = {
  html: '<script>alert(1)</script>',
  sql: "' OR 1=1 --",
  sqlLogin: "' OR '1'='1",
  unicode: '\uD83D\uDE00\uD83D\uDD25test',
} as const;

export const WHITESPACE_ONLY = '   ';
