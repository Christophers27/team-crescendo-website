export const blogs = [
  {
    slug: "memoria-wake-announcement",
    game: "Memoria Wake",
    title: "Announcing Memoria Wake - Our First Game!",
    date: "2025-04-06",
    image: "/images/memoria-wake-home.png",
    description:
      "Team Crescendo announces their first game Memoria Wake and opens community Discord",
    content: `
      <div class="max-w-none">
        <p class="mb-6 text-crescendo-white">
          Hey everyone, we are <span class="font-bold text-crescendo-purple">Team Crescendo</span>, 
          a team of strong and passionate video game developers situated in Pittsburgh who want to 
          make a name for themselves while also pursuing our interests of making exciting games.
        </p>
        
        <p class="mb-6 text-crescendo-white">
          We're so excited to finally share our first announcement trailer for 
          <span class="font-bold">Memoria Wake</span>, a project we've been working on and are 
          happy to finally show to the world! This is just the beginning of an incredible journey, 
          and we can't wait for you all to experience it with us.
        </p>

        <div class="text-center my-8">
          <a 
            href="https://youtu.be/0TbYepa6dbA?si=9X9rQ5u_4nztzTBX" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-block px-6 py-3 bg-crescendo-purple text-crescendo-white rounded-lg hover:bg-crescendo-purple/80 transition-colors font-bold"
          >
            See Our Trailer!
          </a>
        </div>
        
        <div class="bg-crescendo-black/50 border-l-4 border-crescendo-purple p-4 my-6">
          <h3 class="text-xl font-bold text-crescendo-white mb-3">
            To celebrate, we're officially opening our community Discord server!
          </h3>
          <p class="text-crescendo-white">
            Whether you're looking to connect with people who love immersive story driven games 
            or want exclusive behind-the-scenes insights into Memoria Wake's development, 
            this is the place to be.
          </p>
        </div>
        
        <ul class="list-none space-y-2 mb-6">
          <li class="flex items-start">
            <span class="text-crescendo-purple mr-2">🔹</span>
            <span class="text-crescendo-white">Chat with like-minded players</span>
          </li>
          <li class="flex items-start">
            <span class="text-crescendo-purple mr-2">🔹</span>
            <span class="text-crescendo-white">Get deeper updates & dev insights</span>
          </li>
          <li class="flex items-start">
            <span class="text-crescendo-purple mr-2">🔹</span>
            <span class="text-crescendo-white">Be part of the game's growth</span>
          </li>
        </ul>
        
        <p class="mb-6 text-crescendo-white">
          Join us and help shape our community by becoming a part of it. We'd love to have you!
        </p>
        
        <div class="text-center my-8">
          <a 
            href="https://discord.gg/69QahHAG" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-block px-6 py-3 bg-crescendo-purple text-crescendo-white rounded-lg hover:bg-crescendo-purple/80 transition-colors font-bold"
          >
            Join Our Discord
          </a>
        </div>
        
        <p class="text-center text-crescendo-white/80">
          See you there! ✨
        </p>
      </div>
    `,
  },
];

export const newsMW = blogs
  .filter((blog) => blog.game === "Memoria Wake")
  .map((blog) => ({
    title: blog.title,
    date: blog.date,
    description: blog.description,
    link: `/blog/${blog.slug}`,
    image: blog.image,
  }));

export const members = [
  {
    name: "Chris",
    roles: ["Game Designer"],
    description:
      "Chris is a computer scientist who's branching out into writing, modeling and game development to bring great ideas to life.",
    image: "/profiles/chris.png",
  },
  {
    name: "Cole",
    roles: ["Creative Director"],
    description:
      "Cole is an multimedia electronics artist from New York. Cole aims to make artistic experimentation more accessible through electronic entertainment such as music and video games.",
    image: "/profiles/cole.png",
  },
  {
    name: "Daniel",
    roles: ["Co-Founder", "Graphics Engineer", "3D Artist"],
    description:
      "A graphics engineer and 3D artist from New York, Daniel specializes in physics simulation and environment art.",
    image: "/profiles/daniel.png",
  },
  {
    name: "Emma",
    roles: ["2D Concept Artist"],
    description:
      "Emma is an interdisciplinary artist and designer interested in creating playful experiences through visual storytelling and interaction design.",
    image: "/profiles/emma.png",
  },
  {
    name: "Hank",
    roles: ["Co-Founder", "Studio Director"],
    description:
      "Coming from a graphics engineering background, Hank enjoys many aspects of game development, including gameplay, rendering, visual effects, and animation.",
    image: "/profiles/hank.png",
  },
  {
    name: "Jingxuan",
    roles: ["Game Designer", "Gameplay Engineer"],
    description:
      "Jingxuan is a generalist with a background in software engineering and a hobby for art. They bring a versatile skill set to the team, contributing to both technical development and gameplay design.",
    image: "/profiles/jingxuan.png",
  },
  {
    name: "Leo",
    roles: ["Composer"],
    description:
      "Leo is a digital artist and electronic music composer from California. Aspiring to open themself to more outlets of artistic expression, Leo aspires to reach greater artistic heights and be involved in a story that other people can respect.",
    image: "/profiles/leo.png",
  },
  {
    name: "Mark",
    roles: ["Audio Engineer", "Composer"],
    description:
      "With a background in both computer science and music, Mark is a composer and sound designer who takes inspiration from classical and modern genres to tell the special story from the team's hearts.",
    image: "/profiles/mark.png",
  },
  {
    name: "Stanley",
    roles: ["3D Artist"],
    description:
      "Stanley is a digital artist skilled artistically and technically, interested in creating immersive interactive worlds with captivating visual storytelling.",
    image: "/profiles/stanley.png",
  },
  {
    name: "Xiao",
    roles: ["Gameplay Engineer"],
    description:
      "Xiao is an interdisciplinary artist with a background in computer science and the visual arts, focused on writing software to enable new kinds of creative experience.",
    image: "/profiles/xiao.png",
  },
];
