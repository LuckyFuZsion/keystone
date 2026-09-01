"use client"

import { cn } from "@/lib/utils"

type BookwhenCalendarProps = {
  className?: string
  fillHeight?: boolean
}

export default function BookwhenCalendar({ className, fillHeight = false }: BookwhenCalendarProps) {
  if (fillHeight) {
    return (
      <div className={cn("relative h-full min-h-[600px] w-full", className)}>
        <iframe
          src="https://bookwhen.com/keystone/iframe/e/ev-stlz-20250613130000"
          frameBorder="0"
          scrolling="yes"
          seamless={true}
          className="absolute inset-0 h-full w-full border-0"
          title="Book an appointment with Keystone Sports Therapy"
        />
      </div>
    )
  }

  return (
    <div className={cn(className)}>
      <iframe
        src="https://bookwhen.com/keystone/iframe/e/ev-stlz-20250613130000"
        frameBorder="0"
        scrolling="yes"
        seamless={true}
        className="block w-full border-0"
        style={{ height: "900px" }}
        title="Book an appointment with Keystone Sports Therapy"
      />
    </div>
  )
}
