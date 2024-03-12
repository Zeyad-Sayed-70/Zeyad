export const blogs_data = [
  {
    id: "blog:1",
    title: "The Adventures of a Homebrewer: From Drain Pour to Delicious",
    author: "John Barley",
    publish_data: "March 8, 2024",
    content_sample:
      "Let me tell you, those initial attempts were...rough. My first batch, a valiant attempt at an American Pale Ale, resembled ditch water more than a refreshing beverage. The second, a stout, well, let's just say it could have doubled as a burnt rubber substitute.  Undeterred (and maybe a little braver for having survived those olfactory assaults), I persisted. I dove deep into online resources, befriended some seasoned homebrewers at my local shop, and invested in some better equipment (plastic buckets were not the answer).",
    comments: [
      {
        id: 1,
        name: "Sarah Hopsalot",
        body: "Love your journey, John! Keep up the brewing and share your recipes sometime!",
      },
      {
        id: 2,
        name: "Brewing Bill",
        body: "Been thinking about getting into homebrewing myself. Any tips for a complete beginner?",
      },
    ],
  },
  {
    id: "blog:2",
    title: "5 Must-Have Houseplants for Beginners (That Won't Die on You)",
    author: "Fiona Flora",
    publish_data: "February 20, 2024",
    content_sample:
      "Do you dream of transforming your living space into a lush urban jungle, but worry you lack the nurturing touch? Fear not, fellow plant enthusiasts!  Even the blackest of thumbs can cultivate a thriving indoor garden with the right houseplants.  Here are 5 low-maintenance beauties that will add a pop of life (and clean the air!) to your home, without demanding constant attention.",
    comments: [
      {
        id: 1,
        name: "Leaf Lover Lisa",
        body: "Love this list! My ZZ plant is basically thriving on neglect, which is perfect for me.  Any tips on propagating the pothos? I'd love to share it with some friends.",
      },
      {
        id: 2,
        name: "New Plant Parent Nick",
        body: "This is exactly what I needed! My apartment gets pretty low light, so I'm excited to try a snake plant and ZZ plant. Any recommendations for where to find good quality pots with drainage holes?",
      },
      {
        id: 3,
        name: "Curious about Tillandsias Tara",
        body: "Air plants are so fascinating! I never knew they didn't need soil.  Are there any specific types that are easier for beginners?",
      },
    ],
  },
];

export type Blog = (typeof blogs_data)[0];
