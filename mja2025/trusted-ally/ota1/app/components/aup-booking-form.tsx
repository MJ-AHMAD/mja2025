"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AUPBookingForm() {
  const searchParams = useSearchParams()
  const [packageData, setPackageData] = useState({
    id: "",
    name: "",
    price: 0,
    duration: "",
  })
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    passportNumber: "",
    specialRequests: "",
  })

  useEffect(() => {
    const id = searchParams.get("id")
    const name = searchParams.get("name")
    const price = searchParams.get("price")
    const duration = searchParams.get("duration")

    if (id && name && price && duration) {
      setPackageData({
        id,
        name,
        price: Number.parseInt(price),
        duration,
      })
    }
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Booking data:", { ...packageData, ...formData })
    // You could also add a confirmation message or redirect to a confirmation page
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Selected Package</CardTitle>
          <CardDescription>Review your selected Umrah package</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Package:</strong> {packageData.name}
          </p>
          <p>
            <strong>Price:</strong> ${packageData.price}
          </p>
          <p>
            <strong>Duration:</strong> {packageData.duration}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Please enter your details to complete the booking</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="passportNumber">Passport Number</Label>
            <Input
              id="passportNumber"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="specialRequests">Special Requests</Label>
            <Textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Complete Booking
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

