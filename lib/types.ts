export type Vector2 = [number, number];

export type Morphism<A, B> = (a: A) => B;
export type Transformation<T> = Morphism<T, T>;