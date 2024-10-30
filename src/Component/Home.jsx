import Header from './Header'

import { Outlet, useLocation, useNavigation } from 'react-router-dom'


export default function Home() {
  const navigation = useNavigation()
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <Header></Header>
      {
        navigation.state === "loading"?<div className='text-center mt-8'><span className="loading loading-spinner loading-lg"></span></div>: <Outlet></Outlet>
      }
   
    </div>
  )
}
