import "../../index.css";
import { v4 as uuidv4 } from "uuid";

const icons = {
  Customers: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 opacity-75"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  SMS: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 opacity-75"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  ),
  Settings: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 opacity-75"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
};

const Icon = (props) => {
  return <span {...props}>{props.children}</span>;
};

const Menus = [
  {
    id: uuidv4(),
    name: "Customers",
    active: false,
    onClickHandler: () => {},
    items: [
      {
        id: uuidv4(),
        name: "sub-item-1",
        active: false,
        onClickHandler: () => {},
      },
    ],
  },
  {
    id: uuidv4(),
    name: "SMS",
    active: false,
    onClickHandler: () => {},
    items: [
      {
        id: uuidv4(),
        name: "Inbox",
        active: false,
        onClickHandler: () => {},
      },
      {
        id: uuidv4(),
        name: "OutBox",
        active: false,
        onClickHandler: () => {},
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Settings",
    active: false,
    onClickHandler: () => {},
    items: [],
  },
];

const MenuItem = ({ subMenuItems = [], menuName, onClickHandler, icons }) => {
  if (!subMenuItems?.length) {
    return (
      <a
        href="#"
        className="active:text-active hover:text-active flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
        onClick={onClickHandler}
      >
        <Icon>{icons[menuName]}</Icon>

        <span className="ml-3 text-sm font-medium">{menuName}</span>
      </a>
    );
  }
  return (
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg group hover:bg-gray-100 hover:text-active">
        <Icon>{icons[menuName]}</Icon>

        <span onClick={onClickHandler} className="ml-3 text-sm font-medium ">
          {menuName}
        </span>

        <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>

      {subMenuItems?.length && (
        <nav className="flex flex-col mt-2 ml-8 space-y-1">
          {subMenuItems.map((item) => {
            return (
              <a
                key={`${item?.id || uuidv4()}`}
                href="#"
                className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-active"
                onClick={item.onClickHandler}
              >
                {item.name}
              </a>
            );
          })}
        </nav>
      )}
    </details>
  );
};

export default ({Menus = [], icons = {}}) => {
  return (
    <nav className="flex flex-col space-y-sm">
      {Menus?.map((menu) => {
        return (
          <MenuItem
            key={uuidv4()}
            onClickHandler={menu.onClickHandler}
            menuName={menu.name}
            subMenuItems={menu.items}
            icons={icons}
          />
        );
      })}
    </nav>
  );
};
