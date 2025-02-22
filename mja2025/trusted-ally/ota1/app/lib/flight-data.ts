import { addDays, format } from "date-fns"

export interface Flight {
  id: string
  airline: string
  logo: string
  origin: string
  destination: string
  departureDate: string
  departureTime: string
  arrivalTime: string
  duration: string
  price: number
}

const airlines = [
  { name: "Biman Bangladesh Airlines", logo: "/biman-bangladesh-airlines-logo.svg" },
  { name: "Saudi Arabian Airlines", logo: "/saudi-arabian-airlines-logo.svg" },
  { name: "Novoair", logo: "/novoair-logo.svg" },
  { name: "US-Bangla Airlines", logo: "/us-bangla-airlines-logo.svg" },
  { name: "Qatar Airways", logo: "/qatar-airways-logo.svg" },
  { name: "Emirates", logo: "/emirates-logo.svg" },
  { name: "Air India", logo: "/air-india-logo.svg" },
  { name: "Gulf Air", logo: "/gulf-air-logo.svg" },
  { name: "flydubai", logo: "/flydubai-logo.svg" },
  { name: "Jazeera Airways", logo: "/jazeera-airways-logo.svg" },
  { name: "IndiGo", logo: "/indigo-logo.svg" },
  { name: "AirAstra", logo: "/airastra-logo.svg" },
  { name: "Kuwait Airways", logo: "/kuwait-airways-logo.svg" },
]

const destinations = [
  "JED",
  "CXB",
  "CGP",
  "ZYL",
  "KUL",
  "SPD",
  "JSR",
  "BZL",
  "MCT",
  "RUH",
  "DOH",
  "DXB",
  "DMM",
  "SIN",
  "SHJ",
  "KWI",
  "BKK",
  "AUH",
]

function generateRoutes() {
  const routes = []
  const origins = ["DAC", "CGP"]

  for (const origin of origins) {
    for (const destination of destinations) {
      if (origin !== destination) {
        routes.push({ origin: `${origin}`, destination: `${destination}` })
        routes.push({ origin: `${destination}`, destination: `${origin}` }) // Return route
      }
    }
  }

  return routes
}

const routes = generateRoutes()

function generateFlightData(): Flight[] {
  const flights: Flight[] = []
  const today = new Date()

  for (let i = 0; i < 7; i++) {
    const currentDate = addDays(today, i)

    airlines.forEach((airline) => {
      routes.forEach((route) => {
        const departureHour = Math.floor(Math.random() * 24)
        const departureMinute = Math.floor(Math.random() * 60)
        const durationHours = Math.floor(Math.random() * 6) + 1
        const durationMinutes = Math.floor(Math.random() * 60)

        const departureTime = `${departureHour.toString().padStart(2, "0")}:${departureMinute.toString().padStart(2, "0")}`
        const arrivalTime = new Date(currentDate.getTime() + (durationHours * 60 + durationMinutes) * 60000)

        flights.push({
          id: `${airline.name}-${route.origin}-${route.destination}-${format(currentDate, "yyyy-MM-dd")}-${departureTime}`,
          airline: airline.name,
          logo: airline.logo,
          origin: route.origin,
          destination: route.destination,
          departureDate: format(currentDate, "yyyy-MM-dd"),
          departureTime: departureTime,
          arrivalTime: format(arrivalTime, "HH:mm"),
          duration: `${durationHours}h ${durationMinutes}m`,
          price: Math.floor(Math.random() * 500) + 100,
        })
      })
    })
  }

  return flights
}

export const flightDatabase = generateFlightData()

