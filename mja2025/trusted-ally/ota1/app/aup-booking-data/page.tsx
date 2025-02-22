import { Suspense } from "react"
import AUPBookingForm from "../components/aup-booking-form"

export const metadata = {
  title: "AUP Booking - T-Ally",
  description: "Complete your Umrah package booking",
}

export default function AUPBookingPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Complete Your Umrah Package Booking</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <AUPBookingForm />
      </Suspense>
    </div>
  )
}

