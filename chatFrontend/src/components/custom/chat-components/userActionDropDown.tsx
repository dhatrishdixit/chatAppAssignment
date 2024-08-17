import { UserX, Archive, UserCheck, ArchiveRestore, MoreVertical } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type UserStatus = 'normal' | 'blocked' | 'archived'

interface UserActionDropdownProps {
  status: UserStatus
  onStatusChange: (newStatus: UserStatus) => void
}

export function UserActionDropdown({ status, onStatusChange }: UserActionDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
          <span className="sr-only">More options</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {status === 'normal' && (
          <>
            <DropdownMenuItem onClick={() => onStatusChange('blocked')}>
              <UserX className="mr-2 h-4 w-4" />
              <span>Block User</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onStatusChange('archived')}>
              <Archive className="mr-2 h-4 w-4" />
              <span>Archive Chat</span>
            </DropdownMenuItem>
          </>
        )}
        {status === 'blocked' && (
          <DropdownMenuItem onClick={() => onStatusChange('normal')}>
            <UserCheck className="mr-2 h-4 w-4" />
            <span>Unblock User</span>
          </DropdownMenuItem>
        )}
        {status === 'archived' && (
          <DropdownMenuItem onClick={() => onStatusChange('normal')}>
            <ArchiveRestore className="mr-2 h-4 w-4" />
            <span>Unarchive Chat</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}