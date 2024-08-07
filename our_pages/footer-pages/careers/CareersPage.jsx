import Banner from '@/components/footer-pages/careers/Banner'
import CareerForm from '@/components/footer-pages/careers/CareerForm'
import LocationContextProvider from '@/context/location-context'

const CareersPage = () => {
  return (
    <>
    <LocationContextProvider>
    <Banner/>
    <CareerForm/>
    </LocationContextProvider>
    </>
  )
}

export default CareersPage