export interface Destination {
  id: string
  name: string
  country: string
  image: string
  tourCount: number
}

export interface Tour {
  id: string
  title: string
  destination: string
  country: string
  duration: string
  price: number
  oldPrice?: number // Optional for special offers
  image: string
  type: "Adventure" | "Family" | "Cruise" | "Food" | "Culture" | "Luxury"
  rating: number
  reviews: number
  features: string[] // Features like "Private MPV Airport Transfer", "5-Star Sky Hotel"
  tags: string[]
  description: string
  details?: string[] // Make this optional
  specialOffer?: string // Optional: To mark special offers (e.g., "Discount", "VIP Access")
}





export interface Cruise {
  id: string
  title: string
  route: string
  duration: string
  price: number
  image: string
  company: string
  rating: number
  shipName: string
}

export interface Booking {
  id: string
  tourId: string
  userId: string
  date: string
  guests: number
  totalPrice: number
  status: "pending" | "confirmed" | "cancelled"
}
