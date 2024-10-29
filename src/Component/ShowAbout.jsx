import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ShowAbout() {
    const data = useLoaderData()
    console.log(data)
  return (
    <div>
      <h3>Show All About Detail</h3>
    </div>
  )
}
