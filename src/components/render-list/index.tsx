import { ReactNode } from "react";

type RenderList<T> = {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
};

export function RenderList<T>({ data, renderItem }: RenderList<T>) {
  return data.map((item, index) => renderItem(item, index));
}
