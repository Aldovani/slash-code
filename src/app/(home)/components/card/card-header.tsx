import { ReactNode } from "react";

type CardHeaderProps = {
  children: ReactNode;
};

export function CardHeader({ children }: CardHeaderProps) {
  return <header>{children}</header>;
}
