const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

console.log("~~~ Clean.js ~~~")
async function clean() {  
    await prisma.user.deleteMany({})
    await prisma.post.deleteMany({})
    const w = await prisma.user.findMany()
    const x = await prisma.post.findMany()

    console.log("users: " + w.length, " | ", "projects: " + x.length)
  }

  clean()

module.exports = {clean}