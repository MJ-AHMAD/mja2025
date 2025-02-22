"use client"

import { useState } from "react"
import FlightSearchForm from "../components/flight-search-form"
import FlightSearchResults from "../components/flight-search-results"

export default function FlightsClient() {
  const [searchCriteria, setSearchCriteria] = useState({
    origin: "",
    destination: "",
    departureDate: undefined as Date | undefined,
    passengers: 1,
  })

  const handleSearch = (origin: string, destination: string, departureDate: Date | undefined, passengers: number) => {
    setSearchCriteria({ origin, destination, departureDate, passengers })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Find Your Perfect Flight</h2>
      <FlightSearchForm onSearch={handleSearch} />
      <FlightSearchResults
        origin={searchCriteria.origin}
        destination={searchCriteria.destination}
        departureDate={searchCriteria.departureDate}
        passengers={searchCriteria.passengers}
      />
    </div>
  )
}

