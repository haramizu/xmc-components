import React, { useState } from "react";

type NavigationProps = {
  params: { [key: string]: string };
};

export const Default = (props: NavigationProps): JSX.Element => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <div className={`component navigation ${props.params.styles.trimEnd()}`}>
      <div className="relative">
        <button
          className="block px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          メニュー
        </button>
        {isSubMenuOpen && (
          <div className="absolute left-0 mt-2 py-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
            >
              サブメニュー1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
            >
              サブメニュー2
            </a>
            {/* 他のサブメニュー項目も同様に追加 */}
          </div>
        )}
      </div>
    </div>
  );
};
