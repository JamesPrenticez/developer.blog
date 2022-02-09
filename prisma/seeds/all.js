const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const {users} = require('./1-users')
const {posts} = require('./2-posts')

async function main() {
  //Users
  for( i = 0; i < users.length; i++){
    const item = users[i]
    await prisma.user.create({
      data: item
    });
  }

  const a = await prisma.user.findMany()
  console.log(a)

  //Posts
  for( i = 0; i < posts.length; i++){
    const item = posts[i]
    await prisma.post.create({
      data: item
    });
  }

  const b = await prisma.post.findMany()
  console.log(b)
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  //https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany-preview