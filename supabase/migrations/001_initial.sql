-- Create apple_identifications table
CREATE TABLE apple_identifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  image_url TEXT,
  identified_variety TEXT,
  confidence_score DECIMAL(3,2),
  characteristics JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create apple_varieties table for reference data
CREATE TABLE apple_varieties (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  flavor_profile TEXT,
  texture TEXT,
  best_uses TEXT[],
  color TEXT,
  size TEXT,
  season TEXT,
  origin TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert some common apple varieties
INSERT INTO apple_varieties (name, description, flavor_profile, texture, best_uses, color, size, season, origin) VALUES
('Granny Smith', 'Crisp and tart green apple', 'Tart, acidic', 'Crisp, firm', '{"baking", "snacking", "salads"}', 'Green', 'Medium to large', 'Fall', 'Australia'),
('Red Delicious', 'Classic red apple with mild flavor', 'Mild, sweet', 'Soft, mealy when old', '{"snacking", "lunch boxes"}', 'Red', 'Medium to large', 'Fall', 'United States'),
('Gala', 'Sweet and crisp with red and yellow stripes', 'Sweet, mild', 'Crisp, tender', '{"snacking", "salads"}', 'Red-orange with yellow', 'Small to medium', 'Late summer', 'New Zealand'),
('Fuji', 'Very sweet and crisp apple', 'Very sweet, honey-like', 'Crisp, dense', '{"snacking", "juice"}', 'Red with yellow', 'Large', 'Late fall', 'Japan'),
('Honeycrisp', 'Exceptionally crisp and juicy', 'Sweet-tart, balanced', 'Extremely crisp', '{"snacking", "salads"}', 'Red with yellow', 'Large', 'Fall', 'United States');

-- Enable row level security
ALTER TABLE apple_identifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE apple_varieties ENABLE ROW LEVEL SECURITY;

-- Create policies for apple_identifications
CREATE POLICY "Users can view their own identifications" ON apple_identifications
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own identifications" ON apple_identifications
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own identifications" ON apple_identifications
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own identifications" ON apple_identifications
  FOR DELETE USING (auth.uid() = user_id);

-- Create policies for apple_varieties (read-only for all authenticated users)
CREATE POLICY "Anyone can view apple varieties" ON apple_varieties
  FOR SELECT USING (true);

-- Create indexes for better performance
CREATE INDEX idx_apple_identifications_user_id ON apple_identifications(user_id);
CREATE INDEX idx_apple_identifications_created_at ON apple_identifications(created_at);
CREATE INDEX idx_apple_varieties_name ON apple_varieties(name);