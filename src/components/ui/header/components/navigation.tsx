
import { usePathname } from "next/navigation";
import { NavigationItem } from "./navigation-item";

type NavigationProps = {
  isOpen: boolean;
  onHandleCloseNavigation: () => void;
};

export function Navigation({
  isOpen,
  onHandleCloseNavigation,
}: NavigationProps) {
  const path = usePathname();

  return (
    <nav
      data-is-open={isOpen}
      className="group hidden md:block max-md:data-[is-open=true]:flex  bg-white  max-md:data-[is-open=true]:justify-center max-md:data-[is-open=true]:items-center max-md:data-[is-open=true]:fixed max-md:data-[is-open=true]:inset-0 max-md:data-[is-open=true]:w-full max-md:data-[is-open=true]:h-full"
    >
      <ul className="max-md:group-data-[is-open=true]:flex-col max-md:group-data-[is-open=true]:items-center flex gap-10">
        <NavigationItem
          currentPath={path}
          href="/"
          onClick={onHandleCloseNavigation}
          className="max-md:group-data-[is-open=true]:text-5xl"
        >
          Inicio
        </NavigationItem>
        <NavigationItem
          currentPath={path}
          href="/challenges"
          onClick={onHandleCloseNavigation}
          className="max-md:group-data-[is-open=true]:text-5xl"
        >
          Desafios
        </NavigationItem>
        <NavigationItem
          isDisabled
          currentPath={path}
          href="/blog"
          onClick={onHandleCloseNavigation}
          className="max-md:group-data-[is-open=true]:text-5xl"
        >
          Blog
        </NavigationItem>
      </ul>
    </nav>
  );
}
