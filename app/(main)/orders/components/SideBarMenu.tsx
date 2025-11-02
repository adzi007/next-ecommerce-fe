"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Package,
  Settings,
  LogOut,
} from "lucide-react"

export default function SideBarMenu() {
  return (
    <div className="w-full space-y-4">
      {/* <div className="space-y-1">
        <h4 className="text-lg font-semibold">Menu</h4>
      </div> */}

      <Card className="w-full bg-white shadow-sm rounded-md">
        {/* --- Profile Section --- */}
        <CardHeader className="flex flex-col items-center justify-center space-y-3 pb-4">
          <Avatar className="size-16">
            <AvatarImage src="/avatar-placeholder.png" alt="User Avatar" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <p className="font-semibold text-gray-900 dark:text-white">Aji Saputra</p>
            <p className="text-sm text-gray-500">aji@example.com</p>
          </div>
        </CardHeader>

        <Separator />

        {/* --- Menu Section --- */}
        <CardContent className="flex flex-col space-y-1 pt-4">
          <SidebarMenuItem icon={<User className="size-4" />} label="Profile" />
          <SidebarMenuItem icon={<Package className="size-4" />} label="Orders" />
          <SidebarMenuItem icon={<Settings className="size-4" />} label="Settings" />
          <Separator className="my-2" />
          <SidebarMenuItem
            icon={<LogOut className="size-4 text-red-600" />}
            label="Logout"
            isLogout
          />
        </CardContent>
      </Card>
    </div>
  )
}

function SidebarMenuItem({
  icon,
  label,
  isLogout = false,
}: {
  icon: React.ReactNode
  label: string
  isLogout?: boolean
}) {
  return (
    <Button
      variant="ghost"
      className={`w-full justify-start gap-2 text-sm ${
        isLogout
          ? "text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
          : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
      }`}
    >
      {icon}
      {label}
    </Button>
  )
}
