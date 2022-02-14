import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

// POST /api/post
export default async function createDraft(req, res) {
  const { postId, name, email, comment } = req.body;
  console.log(typeof(req.body))

  const result = await prisma.comment.create({
    data: {
      name: name,
      email: email,
      comment: comment,
      likes: 0,
      post: { connect: { id: postId } },
    },
  });
  res.json(result);
  console.log(result)
}