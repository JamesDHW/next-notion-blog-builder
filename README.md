<p align="center">
    <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" width="100" height="100" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png" width="100" height="100" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" width="100" height="100" />
</p>
<br />

<h1 align="center">📚 Notion Blog Builder CLI</h1>


Want to start posting blog content and stand out from [Medium](https://www.medium.com) and [DEV](https://dev.to/t/blog)? Use this CLI to quickly generate yourself a NextJS blog which uses Notion as a CMS to easily store and edit all your articles!

### [Check out my site to see what you can do!](https://www.jameshw.dev)
### [View on NPMJS](https://www.npmjs.com/package/next-notion-blog-builder)


<br />

## 🌱 Getting started

### ⚙️ Generate the project with the CLI

1. Run: `npx next-notion-blog-builder` and follow the CLI.
2. `cd` into your `<project-name>` directory
3. Run: `yarn dev` to start the development server on [http://localhost:3000](http://localhost:3000)
4. Update the `page.tsx` files in the `/app` directory to fill in the blanks!

### 💿 Create Notion databases for the CMS

See the [Notion template page](https://www.notion.so/jdhw/Next-Notion-Blog-Template-8e961bdf11d64f8cb20787c53f43b422) for the database you will need:

1. Copy this page into your personal Notion space.
2. Follow the steps in the [NotionAPI Docs](https://developers.notion.com/docs/create-a-notion-integration) to create an integration:
   - give the integration read-only permissions;
   - share each database you need with that integration (`Add connections`);
   - add the Notion integration secret to your `.env.local` file.
3. Copy the [database ids](https://developers.notion.com/docs/create-a-notion-integration#step-3-save-the-database-id) and add them into your `.env.local` file.
4. Open notion in the web and open the network tab when signed in. Check request cookie:
   - copy token_v2 into your `.env.local` file;
   - copy notion_user_id into your `.env.local` file.

### 🚀 Deploy to Production

I used [Vercel](https://vercel.com/home) to deploy my blog automatically every time I push to the `main` GitHub branch. See the [setup docs](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy).

<br />

## ✨ Features
- NextJS 13 [Server Components](https://nextjs.org/blog/next-13#new-app-directory-beta) and Tailwind
- Mobile responsiveness
- 404/500 error pages
- Loading skeletons
- Dark mode!

### 🏡 Home page
### ❓ About me page (optional)
### 📝 Blog (optional)
A blog which pulls articles from your Notion database and renders the article content. Includes:
- Search bar for articles by title/ tags
- Renders embedded images & video
- Renders code blocks & inline code
- Renders Notion components (e.g. callouts)
- Shows the date and article tags

### 📔 Dev journal (optional)
A development journal to keep track of daily learnings. Includes:
- Search bar for journal entries by title/ tags
- Renders embedded images & video
- Renders code blocks & inline code
- Renders Notion components (e.g. callouts)
- Shows the date and article tags

### 🎓 Resources (optional)
A searchable, filterable list for recommended resources to track external resources you would recommend to others. Filter by resource type (Book, Article, Channel, Video, Newsletter, Website).

### 🤖 Technologies (optional)
Show off what technologies/ tools you use.

### Acknowledgements
The general UX of this site is inspired by [Lee Rob](https://leerob.io/). I liked it because it's a very clear, minimal design which also has some mobile responsiveness (which is a must-have).