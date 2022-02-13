import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

// POST /api/post
export default async function createDraft(req, res) {
  const { title, description, image, slug, content } = req.body;

  const session = await getSession({ req });
  const result = await prisma.post.create({
    data: {
      title: title,
      description: description,
      image: image,
      slug: slug,
      content: content,
      author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
  console.log(result)
}