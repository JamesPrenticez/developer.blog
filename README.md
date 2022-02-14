# <img src="./public//brackets.png" alt="Angle Brackets" width="20" /> Developer.Blog


## Next JS Frontend Design
- [Medium Clone](https://www.youtube.com/watch?v=I2dcpatq54o)
- Ofcourse we modified this to suit our needs

## Prisma with Postgres
- [Next JS with Prisma Blog Tutorial](https://vercel.com/guides/nextjs-prisma-postgres)
- ``` npx prisma generate ``` 
- ``` npx prisma db push ```  This every time you update schema (Update Step 2)
- ``` npx prisma studio ```   Then you can do this
- [Mirgations/Seeds](https://www.prisma.io/docs/guides/database/seed-database)
- ``` npx prisma migrate dev --name development ``` You will need to delete and re-run this is you change the schema (Update Step 1)
- ``` npx prisma migrate reset ``` Do this to reset the entire DB
- ``` node prisma/seeds/clean.js ``` 
- ``` npx prisma db seed ``` 

## Dealing with Dates in next.js
- (https://codegregg.com/tinywins/2021/nextjs-date-type-static-props/)
- (https://www.npmjs.com/package/babel-plugin-superjson-next)
- ``` npm install babel-plugin-superjson-next ```
- ``` npm install superjson ```
- ``` touch .babelrc ```
  ```
  {
    "presets": ["next/babel"],
    "plugins": ["superjson-next"]
  }
  ``` 
## Rich Text Editor
- [React Draft What You See Is What You Get](https://www.npmjs.com/package/react-draft-wysiwyg)
- Modified with custom toolbar/styles 

## Forms
- [react-hook-form](https://www.npmjs.com/package/react-hook-form)

## Features
- ISR (Incremental Static Regeneration) using getStaticPath & getStaticProps - Dynamic Pages (AKA each blog post) is pre-built and cached. Meaning that things a super fast!