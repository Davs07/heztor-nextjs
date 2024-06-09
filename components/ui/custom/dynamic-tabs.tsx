import React, { useState, useRef, useEffect } from "react";

export interface DynamicTabItem {
  key: string;
  label: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

export interface DynamicTabsProps {
  items: DynamicTabItem[];
  defaultActiveKey?: string;
}

const DynamicTabs: React.FC<DynamicTabsProps> = ({
  items,
  defaultActiveKey = "1",
}) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeTab = tabsRef.current?.querySelector(`.tab-${activeKey}`);
    if (activeTab) {
      const { offsetLeft, offsetWidth } = activeTab as HTMLElement;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeKey]);

  const handleTabClick = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div className="w-full h-full">
      <div className="relative flex border-b border-gray-300" ref={tabsRef}>
        {items.map((item) => (
          <div
            key={item.key}
            className={`tab-${
              item.key
            } cursor-pointer py-2 px-4 flex items-center ${
              item.key === activeKey ? "text-main" : ""
            }`}
            onClick={() => handleTabClick(item.key)}>
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </div>
        ))}
        <div
          className="absolute bottom-0 h-1 bg-main transition-all  rounded-t-lg duration-300"
          style={indicatorStyle}
        />
      </div>
      <div className="p-4 border border-t-0 border-gray-300 w-full h-full relative">
        {items.map(
          (item) =>
            item.key === activeKey && <div key={item.key}>{item.children}</div>
        )}
      </div>
    </div>
  );
};

export default DynamicTabs;
