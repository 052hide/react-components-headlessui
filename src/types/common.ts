export type Nullable<T> = T | null
export type OmitClassNames<T> = Omit<T, 'classNames'>

/**
 * Kのみ省略不可
 */
export type PartialRequire<O, K extends keyof O> = {
  [P in K]-?: O[P]
} &
  O

/**
 * Tのうちどれか必須
 */
export type RequireOne<T, K extends keyof T = keyof T> = K extends keyof T
  ? PartialRequire<T, K>
  : never
