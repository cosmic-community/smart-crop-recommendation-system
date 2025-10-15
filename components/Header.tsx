export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl">🌾</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Smart Crop Recommendation
              </h1>
              <p className="text-sm text-gray-600">
                Data-driven agricultural intelligence for India
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}