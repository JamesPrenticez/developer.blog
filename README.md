# Developer.Blog
![Code](./public//brackets.png?raw=true "Logo")

## Frontend Design
https://www.youtube.com/watch?v=I2dcpatq54o&t=3822s

## Prisma with Sqlite3
https://vercel.com/guides/nextjs-prisma-postgres

``` npx prisma generate ``` This every time you update schema
``` npx prisma db push ```  Then this
``` npx prisma studio ```   Then you can do this\

#### Mirgations/Seeds
``` npx prisma migrate dev --name development ``` You will need to delete and re-run this is you change the schema
``` npx prisma migrate reset ``` Do this to reset the entire DB
``` node prisma/seeds/clean.js ``` 
``` npx prisma db seed ``` 

## Dealing with Dates in next.js
[https://codegregg.com/tinywins/2021/nextjs-date-type-static-props/]
[https://www.npmjs.com/package/babel-plugin-superjson-next]
``` npm install babel-plugin-superjson-next ```
``` npm install superjson ```
``` touch .babelrc ```
```
{
  "presets": ["next/babel"],
  "plugins": ["superjson-next"]
}
```
## Rich Text Editor
[https://www.npmjs.com/package/react-draft-wysiwyg]

## Features
- ISR (Incremental Static Regeneration) using getStaticPath & getStaticProps - Dynamic Pages (AKA each blog post) is pre-built and cached. Meaning that things a super fast!


## Pro Tips
Emmit:
div>h3*3 = 
     <div>
          <h3></h3>
          <h3></h3>
          <h3></h3>
        </div>