"use client"

import dynamic from "next/dynamic"

const BookwhenCalendar = dynamic(() => import("@/components/bookwhen-calendar"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[600px]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
    </div>
  ),
})

interface BookwhenCalendarWrapperProps {
  className?: string
}

export default function BookwhenCalendarWrapper({ className }: BookwhenCalendarWrapperProps) {
  return <BookwhenCalendar className={className} />
}
