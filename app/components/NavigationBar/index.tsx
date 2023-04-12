'use client'

import Container from "../common/Container";
import Logo from "./Logo";
import Search from "./Search";
import USerMenu from "./UserMenu";

const NavigationBar = () => {

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="border-b-[1px] py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <USerMenu/>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavigationBar;
