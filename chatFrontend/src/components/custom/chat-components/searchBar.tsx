import React from 'react';
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';

const SearchBar = () => (
  <div className="p-2 relative">
    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
    <Input type="search" placeholder="Search" className="w-full pl-10 border rounded-full" />
  </div>
);

export default SearchBar;