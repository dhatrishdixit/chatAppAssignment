import React from 'react';
import { Button } from "@/components/ui/button"

const FilterTabs = () => (
  <div className="flex space-x-2 p-2">
    {['All', 'Unread', 'Archived', 'Blocked'].map((tab) => (
      <Button 
        key={tab} 
        variant={tab === 'All' ? 'default' : 'ghost'}
        className={`text-sm rounded-full ${tab === 'All' ? 'bg-primary text-primary-foreground' : ''}`}
      >
        {tab}
      </Button>
    ))}
  </div>
);
export default FilterTabs;