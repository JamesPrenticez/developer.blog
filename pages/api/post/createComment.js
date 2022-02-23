import prisma from '../../../lib/prisma';

// POST /api/post/createComment
export default async function createComment(req, res) {
  const { postId, name, email, comment } = req.body; 
  try {
    await prisma.comment.create({
      data: {
        name: name,
        email: email,
        comment: comment,
        //likes: 0,
        post: { connect: { id: postId } },
      },
    })
    } catch (err) {
        return res.status(500).send({ message: 'Error submiting comment ', err})
    }
  return res.status(200).send({ message: 'Comment successfully submitted' })
}