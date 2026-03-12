// @ts-ignore - Import with .js extension for ES modules
import { blogPosts } from '../data/blogPosts.js';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

export const generateRSSFeed = () => {
  const siteUrl = 'https://livebetterlife.co.uk';
  const date = new Date().toUTCString();

  const items = blogPosts
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .map((post) => {
      const postUrl = `${siteUrl}/blog/${post.slug}`;
      const pubDate = new Date(post.publishDate).toUTCString();
      
      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${postUrl}</link>
          <guid isPermaLink="true">${postUrl}</guid>
          <pubDate>${pubDate}</pubDate>
          <description><![CDATA[${post.excerpt}]]></description>
          <content:encoded><![CDATA[${post.content}]]></content:encoded>
          <dc:creator><![CDATA[${post.author.name}]]></dc:creator>
          ${post.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('\n          ')}
        </item>`;
    })
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss 
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:content="http://purl.org/rss/1.0/modules/content/"
      xmlns:atom="http://www.w3.org/2005/Atom"
      version="2.0"
    >
      <channel>
        <title><![CDATA[Live Better Life Blog]]></title>
        <link>${siteUrl}/blog</link>
        <description><![CDATA[Expert advice and insights on home renovation, kitchen remodeling, and property improvements in London]]></description>
        <language>en-gb</language>
        <lastBuildDate>${date}</lastBuildDate>
        <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
        <image>
          <url>${siteUrl}/logo.png</url>
          <title>Live Better Life Blog</title>
          <link>${siteUrl}/blog</link>
        </image>
        ${items}
      </channel>
    </rss>`;

  // Ensure the public directory exists
  const publicDir = join(process.cwd(), 'public');
  if (!existsSync(publicDir)) {
    mkdirSync(publicDir, { recursive: true });
  }

  // Write the RSS feed to public/rss.xml
  writeFileSync(join(publicDir, 'rss.xml'), rss);

  console.log('RSS feed generated successfully!');

  // Execute the function if this file is run directly
  if (process.argv[1] === new URL(import.meta.url).pathname) {
    generateRSSFeed();
  }
}; // Close the generateRSSFeed function
