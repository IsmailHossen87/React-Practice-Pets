import Header from './Header'

import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}
