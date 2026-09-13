const REPO_NAME = 'ohsu-portfolio';

/** Prefix a public/ asset path with the GitHub Pages basePath in production. */
export function withBase(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (!base) return path;
  return `${base}${path}`;
}

export const INSTAGRAM_URL = 'https://www.instagram.com/evrista_prod';

export const FOUNDER = {
  name: 'Rosangela Shaijan',
  portrait: '/rosangela-portrait.jpg',
};

export const BRAND = {
  name: 'Evrista',
  wordmark: 'EVRISTA',
  manifest: [
    'Evrista is a creative media and design venture focused on transforming ideas and emotions into visually engaging content. The brand combines graphic design, digital art, editing, and visual storytelling to create content that feels personal, expressive, and meaningful.',
    'Evrista focuses on creating original visual concepts rather than simply following existing trends. From digital designs and illustrations to edited videos and creative social-media content, the goal is to turn an idea into something people can see, understand, and connect with.',
  ],
  bio: [
    "I'm a creative and detail-oriented student with a strong interest in graphic design, digital editing, visual storytelling, and creative media. I have experience working with Photoshop, Illustrator, PowerPoint, After Effects, and CapCut, and I enjoy turning ideas into visually engaging content.",
    'Alongside my school work, I also work on creative projects through my company, Evrista. This has helped me develop my skills in design, content creation, editing, and presenting ideas professionally. I enjoy experimenting with different styles while making sure that the final work communicates its message clearly.',
  ],
};
