# Homepage v2

My personal website - upgraded to version 2.
[Click here to visit.](https://bglen.netlify.app/)

## What are the differences?

- built in React (Gatsby), as opposed to vanilla JS in the first version
- routing (main page + several subpages)
- uses DatoCMS, which allows editing content in a flexible manner

## Installation

Before you start:

1. Install dependencies
2. Rename `example.env` to `.env` and paste in a DatoCMS access token

### Development

1. Run `npm run start`
2. Navigate to `http://localhost:8000/` to see the website

### Deployment (self-hosted)

1. Run `npm run build`
2. Gatsby will build the website into `public` folder

Now you can preview the website with `npm run serve`.
However, you should use a specialized server such as _nginx_
to serve it on the internet.

### Deployment (Netlify)

You don't need to install anything on your machine for this variant.

1. Fork this repo
2. Go to the [Netlify dashboard](https://app.netlify.com) and click _New site from Git_
3. When asked, pick the repo you've forked
4. **IMPORTANT!** When on the _Deploy settings_ step, click _Show advanced_,
   and then create a new environment variable called `DATOCMS_TOKEN` and assign it
   the value of your DatoCMS access token
5. Click _Deploy site_

Now wait a few minutes. A link to the website will be created, and as soon
as the site is build, you will be able to access it with this link.
