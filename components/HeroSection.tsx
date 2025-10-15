export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Optimize Your Agricultural Decisions
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Get data-driven crop recommendations based on soil parameters, climate data, 
            and real-time market pricing across six key Indian states.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">6</div>
              <div className="text-primary-100">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">12+</div>
              <div className="text-primary-100">Crop Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24+</div>
              <div className="text-primary-100">Yield Records</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}