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
    title: "Nostalgia",
    year: 2023,
    medium: "Acrylic on Canvas",
    dimensions: { width: 36, height: 48 },
    description: "“Only be careful, and watch yourselves closely so that you do not forget the things your eyes have seen or let them fade from your heart as long as you live. Teach them to your children and to their children after them.”" +
                  "Deuteronomy 4:9, NIV" + 
                "During the moments of your birth, your mother holds you and prays to God that she can be guided by Him. She wishes for you to be healthy and bright and that the world may be kind to you. This work is a memory of your most vulnerable moment, it is also a cry from your inner child wishing they could remember all that your mother teaches, her voice, her smell and her warmth. On our last day on earth, we remember our mother teaching us to be cautious as God had taught her and by remembering her passing, it is as though we lost ourselves in that moment. No longer having our mother to guide us to the path of righteousness, humanity continues to deviate from that path and reaching our final day, we are nostalgic on what we missed." +
                "Cite: Murtagh, Daniel, Kate.",
    price: 0.00,
    sold: false,
    images: [
      "/portraits/p27-1.png",
      "/portraits/p27-2.png",
      "/portraits/p27-3.png"
    ],
    category: "Portrait"
  },
  {
    id: "2",
    title: "Nostalgia",
    year: 2023,
    medium: "Acrylic on Canvas",
    dimensions: { width: 36, height: 28 },
    description: "“It is I who made the earth and created mankind on it. My own hands stretched out the heavens; I marshalled their starry hosts.” Isaiah 45:12, NIV" +
                "Many say, the earth can bring you peace and hopefulness for the future. In your last moments on earth, the yearning to return to times of peace, and hopefullness can allow you to be grateful or regretful for the present you have found yourself in.This work serves as a memory of the past, to which God had given us, the flowers and greenery depicting life while also foreshadowing what is to come. Each flower in this piece being a cultural symbol of a dark future, the path to suffering and the loss of innocence chained to the fate of each person alive today. " +
                "Cite: Robert Hughes, Edward, The princess out of school, 1901, gouache and watercolour.",
    price: 0.00,
    sold: false,
    images: [
      "/portraits/p26-1.png",
      "/portraits/p26-2.png",
      "/portraits/p26-3.png",
      "/portraits/p26-4.png",
    ],
    category: "Portrait"
  },
  {
    id: "3",
    title: "The Sixth Trumpet",
    year: 2023,
    medium: "Acrylic on Canvas",
    dimensions: { width: 30, height: 40 },
    description: "“It said to the sixth angel who had the trumpet, “Release the four angels who are bound at the great river Euphrates.” And the four angels who had been kept ready for this very hour and day and month and year were released to kill a third of mankind.” Revelation 9, NIV" + 
                  "A reflection to the future of humankind through the eyes of one our own. She looks up in horror as this moment was not as she had pictured it or how she had been told through her years of prayer. This piece takes one of the most sombre moments in the bible and brings it forward in time to allow you, the audience, to look beyond what is shown to you as simple portraiture. It is created to further deepen one’s feelings as you witness the true power of God. What would you feel at that moment?" +
                  "Cite: Bryullov, Karl, The Last Day of Pompeii, 1833, Oil on canvas.",
    sold: true,
    images: [
      "/portraits/p25-1.png",
      "/portraits/p25-2.png",
      "/portraits/p25-3.png",
    ],
    category: "Portrait"
  },
  {
    id: "4",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p24.png"],
    category: "Portrait"
  },
  {
    id: "5",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p23.png"],
    category: "Portrait"
  },
  {
    id: "6",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 38, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p22.png"],
    category: "Portrait"
  },
  {
    id: "7",
    title: "to be filled",
    year: 2023,
    medium: "Mural",
    dimensions: { width: 58, height: 35 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p21.png"],
    category: "Portrait"
  },
  {
    id: "8",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p20.png"],
    category: "Portrait"
  },
  {
    id: "9",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 35, height: 58 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p19.png"],
    category: "Portrait"
  },
  {
    id: "10",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 58, height: 35 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p18.png"],
    category: "Portrait"
  },
  {
    id: "11",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 58, height: 35 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p17.png"],
    category: "Portrait"
  },
  {
    id: "12",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p16.png"],
    category: "Portrait"
  },
  {
    id: "13",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 40, height: 30 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p15.png"],
    category: "Portrait"
  },
  {
    id: "14",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p14.png"],
    category: "Portrait"
  },
  {
    id: "15",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p13.png"],
    category: "Portrait"
  },
  {
    id: "16",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p12.png"],
    category: "Portrait"
  },
  {
    id: "17",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p11.png"],
    category: "Portrait"
  },
  {
    id: "18",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p10.png"],
    category: "Portrait"
  },
  {
    id: "19",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p9.png"],
    category: "Portrait"
  },
  {
    id: "20",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p8.png"],
    category: "Portrait"
  },
  {
    id: "21",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 48, height: 36 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p7.png"],
    category: "Portrait"
  },
  {
    id: "22",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p6.png"],
    category: "Portrait"
  },
  {
    id: "23",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p5.png"],
    category: "Portrait"
  },
  {
    id: "24",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p4.png"],
    category: "Portrait"
  },
  {
    id: "25",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p3.png"],
    category: "Portrait"
  },
  {
    id: "26",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p2.png"],
    category: "Portrait"
  },
  {
    id: "27",
    title: "to be filled",
    year: 2023,
    medium: "Medium acrylic on canvas",
    dimensions: { width: 36, height: 48 },
    description: "to be filled",
    price: 0.00,
    sold: false,
    images: ["/portraits/p1.png"],
    category: "Portrait"
  }
];

export const categories = [...new Set(paintings.map(p => p.category))];