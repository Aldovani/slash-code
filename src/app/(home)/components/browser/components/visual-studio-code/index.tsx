import { VisualStudioCodeHeader as Header } from "./components/header";
import { VisualStudioCodeSideBar as SideBar } from "./components/side-bar";
import { VisualStudioCodeBody as Body } from "./components/body";

export  function VisualStudioCode() {
  return (
    <div className="grid grid-cols-[4rem_1fr] w-full grid-rows-[40px_1fr] h-full ">
      <Header />
      <SideBar />
      <Body />
    </div>
  );
}
