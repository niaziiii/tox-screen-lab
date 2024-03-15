function AppSelectAble({
  title,
  value,
  items,
  handlerSelected,
  note,
}: {
  title: string;
  value: string;
  items: string[];
  handlerSelected: any;
  note?: string;
}) {
  return (
    <div className="w-full ">
      <div className="flex justify-between items-center">
        <label htmlFor={title} className="text-darkBlue text-xs ">
          {title}
        </label>
        <p className="text-darkBlue">{note}</p>
      </div>
      <div className="w-full flex flex-wrap gap-5 mt-3">
        {items.map((item) => {
          const isActive = item == value;
          return (
            <button
              onClick={() => handlerSelected(item)}
              key={item}
              className={`py-2 px-6 rounded-[10px] border-none outline-none ${
                isActive ? "bg-darkBlue text-white" : "bg-lightGray"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default AppSelectAble;
