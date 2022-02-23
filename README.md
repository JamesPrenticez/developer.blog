# <img src="./public//brackets.png" alt="Angle Brackets" width="30" /> Developer.Blog
- Version 0.0.2 - deployed 22st Feb 2022
- ***[Live Demo!](https://blog-jamesprenticez.vercel.app/)***


## Next JS Frontend Design
- [Medium Clone](https://www.youtube.com/watch?v=I2dcpatq54o)
- Ofcourse we modified this to suit our needs
- https://dropbox.tech/

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

## APIs
- We can either specify headers: { 'Content-Type': 'application/json' }, when sending to the api or we can stringify and then parse in the api..
- We need to protect the api somehow? https://next-auth.js.org/tutorials/securing-pages-and-api-routes

## Useful
- git push origin --set-upstream name
- VSCode settings.json - "emmet.showSuggestionsAsSnippets": true, & "editor.snippetSuggestions": "top"

## Typewriter Effect
- https://www.npmjs.com/package/typewriter-effect the reason I have decided to use a package here is beacuse building it myself is little bit jancky and its not work this time to make it perfect... and I want it perfect because its on the home page and the focus point for all visitors..
- https://levelup.gitconnected.com/typing-effect-in-react-56697def0473 janky options
- https://codepen.io/brunadafonseca/pen/PxqLMq?editors=1010 slightly better option

## To Do
- [o] Render comments
- [o] Drafts Edit ability
- [o] Actually pull demo account from the database
- [o] Upgrade Session to have a username? https://www.youtube.com/watch?v=a6Xs2Ir40OI 3.30.20
- [o] Fix left,right,center and justify text display
- [X] Splash on landing page
- [X] Drafts not working? import prisma herpderp
- [X] User Account Page
- [X] Make the signIn page a bit nicer
- [X] Add Demo Account
- [X] Fonts arn't working in deployment? Is this due to a trimmed package? idk?
- [X] Render code block
## Feature creep
- [o] Animation for comment submission https://dev.to/devwares/how-to-create-tailwind-css-animation-379 & https://codepen.io/ottodevs/pen/BMmdMM
- [o] Custom component for images with Draft.js? How hard is this?