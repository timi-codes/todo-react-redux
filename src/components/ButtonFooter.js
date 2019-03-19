import React from "react";
import FilterButton from "../containers/FilterButton";
import { VisibilityFilters } from "../actions";

const Footer = () => (
  <p>
    Show; <FilterButton filter={VisibilityFilters.SHOW_ALL}>All</FilterButton>
    {","}
    <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterButton>
    {","}
    <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>
      Complete
    </FilterButton>
  </p>
);

export default Footer;
