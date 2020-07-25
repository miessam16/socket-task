export const HASH_SERVICE = 'HASH_SERVICE';

export interface HashInterface {
  hash(plainText: string): Promise<string>;
  compare(plainText: string, hashedText: string): Promise<boolean>;
}
