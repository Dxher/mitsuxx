export interface Painting {
  id: string;
  title: string;
  year: number;
  medium: string;
  dimensions: {
    width: number;
    height: number;
  };
  description: string;
  price?: number;
  sold: boolean;
  images: string[]; // Changed from single image to array
  category: string;
}

export const paintings: Painting[] = [
  {
    id: "1",
    title: "Whispers of Dawn",
    year: 2024,
    medium: "Oil on Canvas",
    dimensions: { width: 36, height: 48 },
    description: "A contemplative piece exploring the quiet moments before sunrise, where light first touches the horizon and possibilities seem endless. This work represents a pivotal moment in my exploration of light and shadow.",
    price: 2800,
    sold: false,
    images: [
      "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80",
      "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80&sat=-100",
      "https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&q=80"
    ],
    category: "Abstract"
  },
  {
    id: "2",
    title: "Urban Solitude",
    year: 2024,
    medium: "Acrylic on Canvas",
    dimensions: { width: 24, height: 18 },
    description: "Capturing the paradox of loneliness in crowded spaces, this piece reflects on modern urban existence and the invisible barriers we construct around ourselves.",
    price: 1200,
    sold: false,
    images: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80"
    ],
    category: "Contemporary"
  },
  {
    id: "3",
    title: "Botanical Dreams",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: { width: 30, height: 40 },
    description: "An ethereal exploration of nature's patterns and the dreams they inspire. Each leaf and petal was studied for weeks before being committed to canvas.",
    sold: true,
    images: [
      "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=800&q=80",
      "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=800&q=80&blur=50"
    ],
    category: "Nature"
  },
  {
    id: "4",
    title: "Crimson Tide",
    year: 2024,
    medium: "Mixed Media on Canvas",
    dimensions: { width: 48, height: 36 },
    description: "Bold strokes of passion captured in deep reds and burgundies, expressing the intensity of human emotion. This piece incorporates texture through layered paint and subtle metallic accents.",
    price: 3200,
    sold: false,
    images: [
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800&q=80",
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800&q=80&contrast=1.2",
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=600&q=80"
    ],
    category: "Abstract"
  },
  {
    id: "5",
    title: "Silent Conversation",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: { width: 18, height: 24 },
    description: "Two figures in dialogue without words, exploring the depths of non-verbal communication. The muted palette emphasizes the emotional weight of unspoken understanding.",
    price: 1500,
    sold: false,
    images: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80"
    ],
    category: "Figurative"
  },
  {
    id: "6",
    title: "Ocean's Memory",
    year: 2024,
    medium: "Acrylic on Canvas",
    dimensions: { width: 60, height: 40 },
    description: "A large-scale piece that captures the eternal rhythm of the sea and the memories it holds. Created over three months of observation at the Pacific coast.",
    price: 4500,
    sold: false,
    images: [
      "https://images.unsplash.com/photo-1513883049090-d91eebc483fb?w=800&q=80",
      "https://images.unsplash.com/photo-1513883049090-d91eebc483fb?w=800&q=80&sepia=50"
    ],
    category: "Seascape"
  },
  {
    id: "7",
    title: "Golden Hour",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: { width: 24, height: 30 },
    description: "That magical moment when the world turns gold and everything seems touched by warmth. A study in capturing fleeting light.",
    sold: true,
    images: [
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&q=80"
    ],
    category: "Landscape"
  },
  {
    id: "8",
    title: "Fragments of Self",
    year: 2024,
    medium: "Mixed Media on Canvas",
    dimensions: { width: 20, height: 20 },
    description: "A square meditation on identity, featuring layered textures and hidden meanings. This piece invites close inspection to reveal its many layers.",
    price: 950,
    sold: false,
    images: [
      "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=800&q=80",
      "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=800&q=80&grayscale"
    ],
    category: "Abstract"
  },
  {
    id: "9",
    title: "Winter's Breath",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: { width: 36, height: 24 },
    description: "The crisp stillness of winter captured in soft whites, pale blues, and silver undertones. A meditation on silence and space.",
    price: 1800,
    sold: false,
    images: [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
    ],
    category: "Landscape"
  },
  {
    id: "10",
    title: "Nocturnal Garden",
    year: 2024,
    medium: "Acrylic on Canvas",
    dimensions: { width: 40, height: 50 },
    description: "What blooms in darkness? This piece explores the mysterious beauty of night-blooming flowers and the secrets gardens hold after dusk.",
    price: 2600,
    sold: false,
    images: [
      "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
      "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80&brightness=0.8",
      "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&q=80"
    ],
    category: "Nature"
  }
];

export const categories = [...new Set(paintings.map(p => p.category))];