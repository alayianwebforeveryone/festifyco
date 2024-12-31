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

export function FilterTableData({ setFilterType }) {
  return (
    <Select onValueChange={setFilterType}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter Data" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filter</SelectLabel>
          <SelectItem value="past">Passed</SelectItem>
          <SelectItem value="upcoming">Upcoming</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
