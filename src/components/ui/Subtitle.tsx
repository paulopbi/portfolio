import React from "react"

const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-muted text-center text-sm font-light uppercase">
      {children}
    </h2>
  )
}

export default Subtitle
