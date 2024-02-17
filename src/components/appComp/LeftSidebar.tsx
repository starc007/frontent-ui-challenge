import { useState } from "react";

const list = [
  "Frontend",
  "Backend",
  "Review the design",
  "Database",
  "DevOps",
  "Testing",
];

const LeftSidebar = () => {
  const [checked, setChecked] = useState(new Array(list.length).fill(false));

  const handleCheckboxChange = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !checked[index];
    setChecked(newChecked);
  };
  return (
    <div className="bg-primary-700 h-full rounded-xl text-white p-8">
      <p className="font-semibold text-2xl">Today’s Task</p>
      <div className="mt-6">
        {list.map((item, index) => (
          <div key={index} className="flex items-center gap-2 mt-3">
            <input
              type="checkbox"
              id={`checkbox-${index + 1}`}
              checked={checked[index]}
              onChange={() => handleCheckboxChange(index)}
              className="w-5 h-5 check"
            />
            <label
              htmlFor={`checkbox-${index + 1}`}
              className={checked[index] ? "checked" : ""}
            >
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
