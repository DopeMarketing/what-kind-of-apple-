# What kind of apple? 🍎

A mobile-friendly web app that uses image recognition to identify apple varieties from photos. Users simply take a picture of an apple and receive instant identification with information about the variety.

## Features

- 📸 Camera integration for taking apple photos
- 🔍 AI-powered image recognition for apple identification
- 📚 Database of common apple varieties with characteristics
- 🖼️ Simple photo gallery of identified apples
- 📱 Mobile-responsive design

## Tech Stack

- **Frontend**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Backend**: Supabase (Authentication, Database, Storage)
- **Database**: PostgreSQL via Supabase
- **Authentication**: Supabase Auth

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Supabase project

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd what-kind-of-apple
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Fill in your Supabase credentials in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key

4. Run the database migrations:
```bash
# Install Supabase CLI if you haven't already
npm install -g @supabase/cli

# Run migrations
supabase db push
```

5. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see the app in action.

## Project Structure

```
├── app/
│   ├── (auth)/
│   │   ├── login/          # Login page
│   │   └── signup/         # Signup page
│   ├── dashboard/          # Main app dashboard
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── lib/
│   └── supabase/           # Supabase client configuration
├── supabase/
│   └── migrations/         # Database migrations
└── middleware.ts           # Authentication middleware
```

## Database Schema

### Tables

- `apple_identifications`: Stores user's apple identification history
- `apple_varieties`: Reference data for different apple varieties

### Key Features

- Row Level Security (RLS) enabled for data privacy
- User-specific identification history
- Comprehensive apple variety database with characteristics

## Target Users

- Apple enthusiasts and collectors
- Grocery shoppers choosing varieties  
- Farmers market visitors
- Curious consumers exploring flavors
- Anyone wanting quick apple identification

## Success Metrics

- Identification accuracy rate above 80%
- Average identification time under 3 seconds
- User retention rate after first week

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.