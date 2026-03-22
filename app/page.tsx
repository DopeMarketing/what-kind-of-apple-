import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-red-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            What kind of apple? 🍎
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Identify apple varieties instantly with photo recognition
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simply take a picture of any apple and discover its variety, characteristics, and flavor profile. 
            Perfect for grocery shopping, farmers markets, or satisfying your curiosity about that mystery apple.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-xl font-semibold mb-2">Snap a Photo</h3>
            <p className="text-gray-600">Use your camera to capture any apple variety</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">AI Recognition</h3>
            <p className="text-gray-600">Get instant identification with 80%+ accuracy</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Learn More</h3>
            <p className="text-gray-600">Discover taste, texture, and best uses</p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <Link 
            href="/signup"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Get Started
          </Link>
          <div>
            <Link 
              href="/login"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Already have an account? Sign in
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Perfect for:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Apple enthusiasts and collectors
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Grocery shoppers choosing varieties
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Farmers market visitors
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Curious consumers exploring flavors
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Anyone wanting to learn about apples
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Quick identification on the go
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}