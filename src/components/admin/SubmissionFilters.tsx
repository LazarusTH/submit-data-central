
import { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface SubmissionFiltersProps {
  onStatusChange: (status: string | null) => void;
  showStatusFilter?: boolean;
}

const statuses = [
  { value: 'all', label: 'All Statuses' },
  { value: 'pending', label: 'Pending' },
  { value: 'accepted', label: 'Accepted' },
  { value: 'rejected', label: 'Rejected' },
];

export function SubmissionFilters({ onStatusChange, showStatusFilter = false }: SubmissionFiltersProps) {
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const handleStatusSelect = (value: string) => {
    const status = value === 'all' ? null : value;
    setSelectedStatus(status);
    onStatusChange(status);
    setOpen(false);
  };

  return (
    <div className="flex items-center gap-2">
      {showStatusFilter && (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[180px] justify-between"
            >
              {selectedStatus ? statuses.find(status => status.value === selectedStatus)?.label : 'Filter by status'}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[180px] p-0">
            <Command>
              <CommandInput placeholder="Search status..." />
              <CommandEmpty>No status found.</CommandEmpty>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    onSelect={handleStatusSelect}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedStatus === status.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {status.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}
