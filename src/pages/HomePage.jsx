import Hero from "../componants/Hero.jsx"
import HomeCards from "../componants/HomeCards.jsx"
import JobListings from "../componants/JobListings.jsx"
import ViewAllJobs from "../componants/ViewAllJobs.jsx"

const HomePage = () => {
  return (
    <>
      <Hero></Hero>
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage
