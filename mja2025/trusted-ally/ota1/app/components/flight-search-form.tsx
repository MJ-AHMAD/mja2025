"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"

interface FlightSearchFormProps {
  onSearch: (origin: string, destination: string, departureDate: Date | undefined, passengers: number) => void
}

const airports = [
  { code: "DAC", name: "Dhaka" },
  { code: "CGP", name: "Chittagong" },
  { code: "JED", name: "Jeddah" },
  { code: "CXB", name: "Cox's Bazar" },
  { code: "ZYL", name: "Sylhet" },
  { code: "KUL", name: "Kuala Lumpur" },
  { code: "SPD", name: "Saidpur" },
  { code: "JSR", name: "Jashore" },
  { code: "BZL", name: "Barisal" },
  { code: "MCT", name: "Muscat" },
  { code: "RUH", name: "Riyadh" },
  { code: "DOH", name: "Doha" },
  { code: "DXB", name: "Dubai" },
  { code: "DMM", name: "Dammam" },
  { code: "SIN", name: "Singapore" },
  { code: "SHJ", name: "Sharjah" },
  { code: "KWI", name: "Kuwait" },
  { code: "BKK", name: "Bangkok" },
  { code: "AUH", name: "Abu Dhabi" },
]

export default function FlightSearchForm({ onSearch }: FlightSearchFormProps) {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [departureDate, setDepartureDate] = useState<Date>()
  const [passengers, setPassengers] = useState(1)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(origin, destination, departureDate, passengers)
  }

  return (
    <form onSubmit={handleSearch} className="bg-white shadow-md rounded-lg p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="origin">Origin</Label>
          <Select onValueChange={setOrigin} value={origin}>
            <SelectTrigger>
              <SelectValue placeholder="Select origin" />
            </SelectTrigger>
            <SelectContent>
              {airports.map((airport) => (
                <SelectItem key={airport.code} value={airport.code}>
                  {airport.name} ({airport.code})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="destination">Destination</Label>
          <Select onValueChange={setDestination} value={destination}>
            <SelectTrigger>
              <SelectValue placeholder="Select destination" />
            </SelectTrigger>
            <SelectContent>
              {airports.map((airport) => (
                <SelectItem key={airport.code} value={airport.code}>
                  {airport.name} ({airport.code})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="departure-date">Departure Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <Calendar className="mr-2 h-4 w-4" />
                {departureDate ? format(departureDate, "PP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <div className="relative">
          <Label htmlFor="passengers">Passengers</Label>
          <Input
            id="passengers"
            type="number"
            min="1"
            value={passengers}
            onChange={(e) => setPassengers(Number.parseInt(e.target.value))}
            className="pl-10"
          />
          <Users className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <Button type="submit" className="w-full mt-4">
        Search Flights
      </Button>
    </form>
  )
}

