import prisma from '../../../lib/prisma';

// POST /api/post/createComment
export default async function createComment(req, res) {
  const { postId, name, email, content } = req.body; 
  try {
    await prisma.comment.create({
      data: {
        name: name,
        email: email,
        content: content,
        post: { connect: { id: postId } },
        approved: true,
      },
    })
    } catch (err) {
        return res.status(500).send({ message: 'Error submiting comment ', err})
    }
  return res.status(200).send({ message: 'Comment successfully submitted' })
}