import prisma from '../../lib/prisma';

//Not used
export default async function getPosts(req, res){
  const posts = await prisma.post.findMany()
  return res.status(200).json(posts)
}