import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { SelectItemOptionsType } from "primereact/selectitem";
import { classNames } from "primereact/utils";

interface Items {
  name: string;
  code: string;
}

export default function AppDropDown({
  selectedItems,
  handleChangeDropDown,
  item,
  title,
}: {
  item: SelectItemOptionsType | undefined;
  selectedItems: Items | null;
  handleChangeDropDown?: any;
  title: string;
}) {
  const handleChange = (value: any) => {
    handleChangeDropDown?.(value);
  };

  console.log({ item });

  return (
    <div className="card flex justify-content-center gap-4 flex-col w-full">
      <label htmlFor={title} className="text-darkBlue text-xl ">
        {title}
      </label>
      <Dropdown
        value={selectedItems}
        onChange={(e: DropdownChangeEvent) => handleChange(e.value)}
        options={item}
        optionLabel="name"
        placeholder={title}
        className="w-full bg-lightGray"
        pt={Tailwind.dropdown}
      />
    </div>
  );
}
const Tailwind = {
  dropdown: {
    root: ({ props }: { props: any }) => ({
      className: classNames(
        "cursor-pointer inline-flex  relative select-none",
        " border-none outline-none transition-colors duration-200 ease-in-out rounded-md",
        "dark:bg-gray-900",
        "w-full",
        "focus:outline-none ",
        {
          "opacity-60 select-none pointer-events-none cursor-default":
            props.disabled,
        }
      ),
    }),
    input: ({ props }: { props: any }) => ({
      className: classNames(
        "cursor-pointer block flex flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap relative",
        "bg-transparent border-0 text-gray-800",
        "dark:text-white/80",
        "p-3 transition duration-200 bg-transparent rounded appearance-none font-sans text-base",
        "focus:outline-none focus:shadow-none",
        { "pr-7": props.showClear }
      ),
    }),
    trigger: {
      className: classNames(
        "flex items-center justify-center shrink-0",
        "bg-transparent text-gray-500 w-12 rounded-tr-lg rounded-br-lg"
      ),
    },
    wrapper: {
      className: classNames(
        "max-h-[200px] overflow-auto",
        "bg-white text-gray-700 border-0 rounded-md shadow-lg",
        "dark:bg-gray-900 dark:text-white/80"
      ),
    },
    list: {
      className: "py-3 list-none m-0",
    },
    item: ({ context }: { context: any }) => ({
      className: classNames(
        "cursor-pointer font-normal overflow-hidden relative whitespace-nowrap",
        "m-0 p-3 border-0  transition-shadow duration-200 rounded-none",
        "dark:text-white/80 dark:hover:bg-lightBlue",
        "hover:text-white hover:bg-lightBlue",
        {
          "text-gray-700": !context.focused && !context.selected,
          " text-white dark:bg-lightBlue": context.focused && !context.selected,
          "bg-lightBlue text-white dark:bg-darkBlue dark:text-white/80":
            context.focused && context.selected,
          "bg-lightBlue text-white  dark:text-white/80":
            !context.focused && context.selected,
          "opacity-60 select-none pointer-events-none cursor-default":
            context.disabled,
        }
      ),
    }),
    itemgroup: {
      className: classNames(
        "m-0 p-3 text-gray-800 bg-white font-bold",
        "dark:bg-gray-900 dark:text-white/80",
        "cursor-auto"
      ),
    },
    header: {
      className: classNames(
        "p-3 border-b border-gray-300 text-gray-700 mt-0 rounded-tl-lg rounded-tr-lg",
        "dark:bg-gray-800 dark:text-white/80 dark:border-darkBlue"
      ),
    },
    filtercontainer: {
      className: "relative",
    },
    filterinput: {
      className: classNames(
        "pr-7 -mr-7",
        "w-full",
        "font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none",
        "dark:bg-gray-900 dark:border-darkBlue dark:hover:border-darkBlue dark:text-white/80",
        "hover:border-darkBlue focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]"
      ),
    },
    filtericon: {
      className: "-mt-2 absolute top-1/2",
    },
    clearicon: {
      className: "text-gray-500 right-12 -mt-2 absolute top-1/2",
    },
    transition: {
      classNames: {
        enterActive:
          "transition-transform transition-opacity duration-150 ease-in",
        enterDone:
          "transition-transform transition-opacity duration-150 ease-in",
        exitActive: "transition-opacity duration-150 ease-linear",
        exitDone: "opacity-0",
      },
      addEndListener: () => {
        // Add your transition end listener logic here
      },
    },
  },
};
