const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

console.log("~~~ Clean.js ~~~")
async function clean() {  
    await prisma.user.deleteMany({})
    await prisma.post.deleteMany({})
    await prisma.comment.deleteMany({})
    const a = await prisma.user.findMany()
    const b = await prisma.post.findMany()
    const c = await prisma.comment.findMany()

    console.log("users: " + a.length, " | ", "projects: " + b.length, " | ", "projects: " + c.length)
  }

  clean()

module.exports = {clean}