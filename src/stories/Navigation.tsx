import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";

interface Fields {
  Id: string;
  DisplayName: string;
  Title: string;
  NavigationTitle: string;
  Href: string;
  Querystring: string;
  Styles: string[];
  Children: Array<Fields>;
}

type NavigationProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: NavigationProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`component navigation ${props.params.styles.trimEnd()}`}>
      <div className="mx-2">
        <a href="#">Home</a>
      </div>
      <ProductList />
      <SolutionList />
      <div className="mx-2">
        <a href="#">About</a>
      </div>
    </div>
  );
};

export const SolutionList = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Popover className="relative">
        {() => (
          <>
            <PopoverButton
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className={`navigation-title mx-2 font-semibold`}
              key={2}
            >
              <Link href="#">Solutions</Link>
            </PopoverButton>
            <Transition
              show={isOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="absolute mt-1 w-screen max-w-[280px] transform bg-white z-50"
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="p-2">
                    <ul>
                      <li>
                        <a href="#">Solution 1</a>
                      </li>
                      <li>
                        <a href="#">Solution 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export const ProductList = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Popover className="relative">
        {() => (
          <>
            <PopoverButton
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className={`navigation-title mx-2 font-semibold`}
              key={2}
            >
              <Link href="#">Products</Link>
            </PopoverButton>
            <Transition
              show={isOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="absolute mt-1 w-screen max-w-[280px] transform bg-white z-50"
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="p-2">
                    <ul>
                      <li>
                        <a href="#">Product 1</a>
                      </li>
                      <li>
                        <a href="#">Product 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};
