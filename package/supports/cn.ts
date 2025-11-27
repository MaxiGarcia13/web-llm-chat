export function cn(...classes: Array<string | null | undefined | boolean>) {
  return classes
    .filter(Boolean)
    .map(item => typeof item === 'string' ? item.trim() : item)
    .join(' ');
}
