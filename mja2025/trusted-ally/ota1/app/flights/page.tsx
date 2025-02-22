import FlightsClient from "./flights-client"

export const metadata = {
  title: "Flight Search - TravelEase",
  description: "Search for flights to your favorite destinations",
}

export default function FlightsPage() {
  return <FlightsClient />
}

