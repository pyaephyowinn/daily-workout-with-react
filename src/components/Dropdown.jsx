import { useState } from "react";
import { Menu } from "@headlessui/react";

const OPTIONS = [
  {
    id: "1",
    content: "blue",
  },
  {
    id: "2",
    content: "red",
  },
];

const Dropdown = () => {
  const [index, setIndex] = useState(null);
  const handleClick = (index) => {
    setIndex(index);
  };

  console.log(index);

  return (
    <Menu>
      <Menu.Button>
        {index === null ? "Color" : OPTIONS[index]?.content}
      </Menu.Button>
      <Menu.Items>
        {OPTIONS.map((option, index) => (
          <Menu.Item onClick={handleClick.bind(null, index)} key={option.id}>
            {({ active }) => (
              <div className={active ? "text-rose-400" : ""}>
                {option.content}
              </div>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
export default Dropdown;
