import { getStates, getCrops, getCropYieldRecords, getFeaturedState } from '@/lib/cosmic'
import { State, Crop, CropYieldRecord } from '@/types'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StateSelector from '@/components/StateSelector'
import RecommendationSection from '@/components/RecommendationSection'
import DataTables from '@/components/DataTables'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  const [states, crops, yieldRecords, featuredState] = await Promise.all([
    getStates(),
    getCrops(),
    getCropYieldRecords(),
    getFeaturedState(),
  ]);

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <StateSelector 
          states={states as State[]} 
          featuredState={featuredState as State | null}
        />
        
        <RecommendationSection 
          crops={crops as Crop[]}
          yieldRecords={yieldRecords as CropYieldRecord[]}
          states={states as State[]}
        />
        
        <DataTables 
          yieldRecords={yieldRecords as CropYieldRecord[]}
          featuredState={featuredState as State | null}
          states={states as State[]}
        />
      </div>
    </main>
  )
}