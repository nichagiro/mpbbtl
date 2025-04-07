import { notFound } from 'next/navigation';

/**
 * A helper function to get an item from an array of objects by a specific key and value.
 * @param items - The array of objects to search through.
 * @param key - The key to match against.
 * @param value - The value to match against.
 * @returns The found item or a 404 page if not found.
 */
export default function getDataHelper<T>(items: T[], key: keyof T, value: string): T {
  const item = items.find((i) => i[key] === value);

  if (!item) return notFound();

  return item;
}

