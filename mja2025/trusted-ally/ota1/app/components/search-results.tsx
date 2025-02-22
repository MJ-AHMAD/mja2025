"use client"

import { useState } from "react"
import { Star, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { useRouter } from "next/navigation"

const mockUmrahPackages = [
  {
    id: 1,
    name: "Essential Umrah Experience",
    image: "/placeholder.svg?height=400&width=600&text=Makkah",
    price: 1500,
    rating: 4.5,
    duration: "10 days",
    groupSize: "20-30 pilgrims",
    accommodationType: "3-star hotels",
    description: "A comprehensive Umrah package for those seeking a spiritual journey with comfortable accommodations.",
  },
  {
    id: 2,
    name: "Premium Umrah Journey",
    image: "/placeholder.svg?height=400&width=600&text=Madinah",
    price: 2500,
    rating: 4.8,
    duration: "14 days",
    groupSize: "15-20 pilgrims",
    accommodationType: "4-star hotels",
    description:
      "An enhanced Umrah experience with premium accommodations and smaller group sizes for a more personalized journey.",
  },
  {
    id: 3,
    name: "Luxury Umrah Retreat",
    image: "/placeholder.svg?height=400&width=600&text=Luxury+Umrah",
    price: 3500,
    rating: 5.0,
    duration: "12 days",
    groupSize: "10-15 pilgrims",
    accommodationType: "5-star hotels",
    description:
      "The ultimate Umrah package featuring luxury accommodations, gourmet dining, and exclusive guided tours.",
  },
]

export default function UmrahPackages() {
  const [sortBy, setSortBy] = useState("price")
  const router = useRouter()

  const sortedPackages = [...mockUmrahPackages].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price
    if (sortBy === "rating") return b.rating - a.rating
    if (sortBy === "duration") return a.duration.localeCompare(b.duration)
    return 0
  })

  const handleBookNow = (pkg: (typeof mockUmrahPackages)[0]) => {
    const queryParams = new URLSearchParams({
      id: pkg.id.toString(),
      name: pkg.name,
      price: pkg.price.toString(),
      duration: pkg.duration,
    }).toString()
    router.push(`/aup-booking-form?${queryParams}`)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Available Umrah Packages</h2>
        <Select onValueChange={setSortBy} defaultValue={sortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price">Price: Low to High</SelectItem>
            <SelectItem value="rating">Rating: High to Low</SelectItem>
            <SelectItem value="duration">Duration</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPackages.map((pkg) => (
          <Card key={pkg.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{pkg.name}</CardTitle>
              <CardDescription>{pkg.accommodationType}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-500 mr-1" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-500 mr-1" />
                  <span>{pkg.groupSize}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="font-bold text-lg">${pkg.price}</span>
                  <span className="text-gray-500 ml-1">per person</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span>{pkg.rating.toFixed(1)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handleBookNow(pkg)}>
                Book Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

