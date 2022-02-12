// import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function createDraft(req, res) {
  const { title, description, img, slug, content } = req.body;

  // const session = await getSession({ req });
  const result = await prisma.post.create({
    data: {
      title: title,
      description: description,
      img: img,
      slug: slug,
      content: content,
      author: { connect: { email: 'jamesprenticez@gmail.com' } },
      // author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
  console.log(result)
}