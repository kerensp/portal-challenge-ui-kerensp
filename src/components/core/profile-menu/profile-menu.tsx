import { Suspense, memo } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User } from 'lucide-react'

const UserAvatarSkeleton = memo(function UserAvatarSkeleton() {
  return <div className="h-9 w-9 bg-gray-200 rounded-full animate-pulse border-2 border-gray-200" />
})

const ProfileMenu = memo(function UserAvatar() {
  return (
    <Suspense fallback={<UserAvatarSkeleton />}>
      <Avatar
        aria-label="user-avatar"
        role="button"
        className="sm:w-unset w-[39px] min-w-[39px] bg-slate-50 hover:cursor-pointer hover:bg-slate-100 [&>div]:!rounded-[39px]"
      >
        <AvatarFallback>
          <User className="text-primary" />
        </AvatarFallback>
      </Avatar>
    </Suspense>
  )
})

export default ProfileMenu
