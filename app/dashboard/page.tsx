import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold">What kind of apple? Dashboard</h1>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-600">Welcome, {user.email}</p>
        <p className="text-gray-500 mt-4">Dashboard coming soon.</p>
      </main>
    </div>
  )
}