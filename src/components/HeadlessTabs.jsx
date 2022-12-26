import { Tab } from "@headlessui/react";

const HeadlessTabs = () => {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>
          {({selected}) => (
            <div className={selected ? 'text-rose-300' : ''}>
              Tab one
            </div>
          )}
          </Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels className='mt-2 border border-gray-100'>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
export default HeadlessTabs;
