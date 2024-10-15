import { VisualStudioCodeHeader as Header } from "./components/header";
import { VisualStudioCodeSideBar as SideBar } from "./components/side-bar";
import { VisualStudioCodeBody as Body } from "./components/body";

export default function VisualStudioCode() {
  return (
    <div className="grid grid-cols-[4rem_1fr] grid-rows-[40px_1fr] h-full ">
      <Header />
      <SideBar />
      <Body />
    </div>
  );
}
