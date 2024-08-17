import React from 'react';
import { Input } from "@/components/ui/input"

const SearchBar = () => (
  <div className="p-2">
    <Input type="search" placeholder="Search" className="w-full" />
  </div>
);

export default SearchBar;