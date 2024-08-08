export default function handler(req, res) {
  const quiz = [
    {
      isLiked: true,
      share: "share",
      image: "/images/recipe-card-img.png",
      title: "Tteokbokki",
      description:
        "Tteokbokki is one of the most popular Korean street foods in Korea.",
      time: 20,
      rating: 4.5,
      meals: 4,
      yums: 550,
    },
    {
      isLiked: true,
      share: "share",
      image: "/images/recipe-card-img.png",
      title: "Tteokbokki",
      description:
        "Tteokbokki is one of the most popular Korean street foods in Korea.",
      time: 20,
      rating: 4.5,
      meals: 4,
      yums: 550,
    },
    {
      isLiked: true,
      share: "share",
      image: "/images/recipe-card-img.png",
      title: "Tteokbokki",
      description:
        "Tteokbokki is one of the most popular Korean street foods in Korea.",
      time: 20,
      rating: 4.5,
      meals: 4,
      yums: 550,
    },
    {
      isLiked: true,
      share: "share",
      image: "/images/recipe-card-img.png",
      title: "Bibimbap",
      description:
        "Bibimbap is a traditional Korean rice dish with mixed vegetables and beef.",
      time: 30,
      rating: 4.7,
      meals: 2,
      yums: 420,
    },
    {
      isLiked: true,
      share: "share",
      image: "/images/recipe-card-img.png",
      title: "Kimchi",
      description:
        "Kimchi is a famous Korean side dish made of fermented vegetables.",
      time: 15,
      rating: 4.6,
      meals: 5,
      yums: 610,
    },
    {
      isLiked: true,
      share: "share",
      image: "/images/recipe-card-img.png",
      title: "Kimchi",
      description:
        "Kimchi is a famous Korean side dish made of fermented vegetables.",
      time: 15,
      rating: 4.6,
      meals: 5,
      yums: 610,
    },
  ];

  res.status(200).json(quiz);
}
