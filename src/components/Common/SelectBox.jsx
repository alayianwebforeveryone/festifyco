import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectBox({ values, type, setSelectType }) {
  return (
    <Select onValueChange={setSelectType}>
      <SelectTrigger
        type={type}
        className={` ${type === "table" ? "w-[187px]" : "w-full"} `}
      >
        <SelectValue
          className="placeholder-font-regular "
          placeholder={`${type === "form" ? "Chose plan" : "Filter"}`}
        />
      </SelectTrigger>
      <SelectContent className="  ">
        <SelectGroup>
          {type === "table" ? <SelectLabel>Filter</SelectLabel> : null}

          {values.map((value) => (
            <SelectItem
              className="text-md   font-regular"
              key={value}
              value={value}
            >
              {value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
