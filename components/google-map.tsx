"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface GoogleMapProps {
  address: string
  height?: string
  zoom?: number
  className?: string
}

const GoogleMap = ({
  address = "14-1085 Bellamy Rd N Toronto, Ontario, M1H 3C7",
  height = "400px",
  zoom = 15,
  className = "",
}: GoogleMapProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const mapRef = useRef<HTMLIFrameElement>(null)

  // Encode the address for the URL
  const encodedAddress = encodeURIComponent(address)

  // Create the Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBcFl1DvUjidOWqqOgLvyvoS_eDrGJ1J3g&q=${encodedAddress}&zoom=${zoom}`

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.onload = () => setIsLoaded(true)
    }
  }, [])

  return (
    <motion.div
      className={`w-full overflow-hidden rounded-lg shadow-lg ${className}`}
      style={{ height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <iframe
        ref={mapRef}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapUrl}
        title={`Google Maps - ${address}`}
      ></iframe>
    </motion.div>
  )
}

export default GoogleMap
