export type Locale = string | undefined;

export interface Localization {
  [key: Locale & string]: Record<string, string>
}
