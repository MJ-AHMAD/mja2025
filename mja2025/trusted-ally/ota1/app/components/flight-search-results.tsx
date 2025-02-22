"use client"

import { useState, useEffect } from "react"
import { Plane, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { flightDatabase, type Flight } from "../lib/flight-data"

interface FlightSearchResultsProps {
  origin: string
  destination: string
  departureDate: Date | undefined
  passengers: number
}

export default function FlightSearchResults({
  origin,
  destination,
  departureDate,
  passengers,
}: FlightSearchResultsProps) {
  const [sortBy, setSortBy] = useState("price")
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>([])

  useEffect(() => {
    const filtered = flightDatabase.filter(
      (flight) =>
        flight.origin.toLowerCase().includes(origin.toLowerCase()) &&
        flight.destination.toLowerCase().includes(destination.toLowerCase()) &&
        (!departureDate || flight.departureDate === departureDate.toISOString().split("T")[0]),
    )
    setFilteredFlights(filtered)
  }, [origin, destination, departureDate])

  const sortedFlights = [...filteredFlights].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price
    if (sortBy === "duration") return a.duration.localeCompare(b.duration)
    return 0
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Available Flights</h2>
        <Select onValueChange={setSortBy} defaultValue={sortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price">Price: Low to High</SelectItem>
            <SelectItem value="duration">Duration: Shortest</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {sortedFlights.length === 0 ? (
        <p className="text-center text-gray-500 my-8">No flights found for the selected route and date.</p>
      ) : (
        <div className="space-y-4">
          {sortedFlights.map((flight) => (
            <Card key={flight.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <img src={flight.logo || "/placeholder.svg"} alt={flight.airline} className="w-8 h-8 mr-2" />
                  {flight.airline}
                </CardTitle>
                <CardDescription>
                  {flight.origin} to {flight.destination}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Plane className="h-5 w-5 text-blue-500 mr-2" />
                    <span>
                      {flight.departureTime} - {flight.arrivalTime}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    <span>{flight.duration}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-gray-500">Date: {flight.departureDate}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold">${flight.price * passengers}</span>
                <Button>Select</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

