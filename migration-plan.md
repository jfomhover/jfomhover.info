# ThingsAI Content Migration Plan

## Scope

Merge the publishable content from `C:\Users\jfomh\source\thingsai.io` into the new `jfomhover.info` repository, while retaining the existing `jfomhover.info` layout and site identity.

Included:

- Posts from `_posts/`
- Essays from `_essays/`
- Flashcards/memos from `_flashcards/`
- Images referenced by the included content
- A unified blog/content index with `post`, `essay`, and `flashcard` categories
- Preservation of existing ThingsAI URLs through redirects or aliases

Excluded:

- `_ideas/` content, idea navigation/listing, and legacy idea URLs; Ideas can be deprecated as part of the ThingsAI shutdown
- ThingsAI layouts, theme CSS, theme switcher, and site-specific page copy
- ThingsAI home/about/category pages unless a later decision explicitly requires them

The requested target domain is assumed to be `https://jfomhover.info`; the repository name `jfomhover.info-private` is treated as the source repository name, not the public hostname.

## Findings

### Existing portfolio site

- It is a small Jekyll 4.3 site with `projects` as its only collection.
- It uses a simple shared `default` and `page` layout and `assets/css/style.css`.
- Its language model is `/en/` and `/fr/`, with alternate-language logic based on replacing that path segment.
- It already lists `jekyll-redirect-from` in `Gemfile`, but `_config.yml` does not currently load it in `plugins`.
- Its GitHub Pages workflow builds the repository as a Pages site with a custom domain.

### ThingsAI content site

- It defines four collections: `posts`, `essays`, `flashcards`, and `ideas`.
- Current collection URLs are:
  - posts: `/posts/:path/`
  - essays: `/essays/:path/`
  - flashcards: `/memos/:path/`
  - ideas: `/ideas/:path/`
- Current included inventory is five entries: one English post, one English essay, two English flashcards, and one French flashcard. The three idea entries are explicitly not migrated and may be deprecated without destination equivalents.
- The included files use `post`, `essay`, and `flashcard` layouts, which must be normalized to the portfolio site's own post rendering layout without changing article body text.
- The essay contains a Jekyll `{% link %}` to the flashcard source path. That link must be updated when files are relocated, or replaced with the final public URL; otherwise the migrated build will contain a broken link.
- The destination's current language-alternate include guesses the counterpart by replacing `/en/` and `/fr/`. That is unsafe for the English-only entries and must be replaced with explicit translation mapping.
- Content references shared root-relative images under `/assets/images/`. The referenced images must be copied into the destination repository with those paths preserved.
- ThingsAI's feed and content pages merge all collections and use collection identity to determine the displayed category. That behavior needs to be recreated, not copied wholesale with the old layout.

## Recommended Content Model

Use the destination site's `posts` collection as the single canonical collection for all three included content types.

- Move each included source file into `_posts/<lang>/`, preserving its source-relative slug unless a collision or translation-pair normalization requires a deliberate rename. Record the resulting source path and generated URL for every document. The French source `computational-thinking.md` is not date-prefixed even though it has a date in front matter.
- Normalize only the front matter needed by the destination build:
- `layout: post`
- preserve `title`, `subtitle`, `excerpt`, `date`, `topic`, `tags`, `lang`, and other meaningful metadata; explicitly decide whether `pinned` and `source` are retained
- add a required `content_type` field with exactly one of `post`, `essay`, or `flashcard`
- add an explicit `translation_key` only to documents with a real counterpart, such as the English/French computational-thinking pair
- Keep the Markdown/HTML article body unchanged except for links that must point to the relocated content or copied assets.
- Create a destination `_layouts/post.html`, then configure the collection permalink as `/posts/:path/`. Verify the generated URL for every migrated document; do not infer `:path` from the date front matter. This keeps the example URL exactly stable:
  `https://thingsai.io/posts/en/2026-02-22-ai-ego-loop-collaboration/` becomes
  `https://jfomhover.info/posts/en/2026-02-22-ai-ego-loop-collaboration/`.
- Preserve the existing `/en/` and `/fr/` language path convention. Do not infer language from the collection directory alone; retain the explicit `lang` front matter.

This deliberately changes the canonical paths for essays and flashcards to `/posts/...`, making them categories of the blog as requested. Their former ThingsAI paths (`/essays/...` and `/memos/...`) must receive legacy redirects. Decide before implementation whether the French computational-thinking document remains `/posts/fr/computational-thinking/` or is deliberately renamed to `/posts/fr/2026-01-23-computational-thinking/`.

## Destination Site Changes

1. Extend `_config.yml` with the `posts` collection and its `/posts/:path/` permalink. Keep the existing `projects` collection unchanged.
2. Add the `jekyll-redirect-from` plugin to the loaded plugin list if it is used for exact legacy aliases. The Gemfile entry alone is insufficient.
3. Add destination layouts/includes only as needed, based on the existing portfolio layout. Do not copy ThingsAI's layouts or theme CSS.
4. Implement one post layout that renders the three categories from `page.content_type` while using the portfolio site's typography, header, footer, metadata, SEO, and language behavior. It must not depend on the former collection name and must deliberately handle `subtitle`, `topic`, `tags`, `date`, `lang`, `excerpt`, and any retained `pinned`/`source` fields.
5. Add a unified blog index for English and French, likely `/en/blog/` and `/fr/blog/`, filtering `site.posts` by `lang` and `content_type`, and allowing `post`, `essay`, and `flashcard` filters. Add it to `_data/navigation.yml`.
6. Add category links or filtered views only if they are useful to navigation. Avoid recreating ThingsAI's separate `/essays/` and `/memos/` top-level pages unless they are needed as legacy redirect sources.
7. Copy the two required images, `assets/images/pitrat-1997-first-page.png` and `assets/images/computational-thinking-operations.png`. Make article image references baseurl-aware with Liquid `relative_url` expressions, then review all Markdown links for references to excluded ThingsAI pages, collection paths, or old site URLs.
8. Update site metadata that still describes ThingsAI as a sister site, if the merged content makes that description inaccurate. Keep unrelated portfolio metadata unchanged.
9. Decide whether the feed should include all `site.posts` documents or only `content_type: post`, then configure and test it deliberately. Verify feed item count, URLs, titles, dates, language handling, and canonical host; do not assume `feed-fr.xml` exists merely because the current layout links to it.
10. Replace guessed alternate-language URL generation with counterpart-aware lookup by `translation_key`. If no counterpart exists, omit the alternate link and do not emit a guessed `hreflang`; scope this behavior to pages/documents with explicit mappings.

## Legacy URL Strategy

There are two separate redirect requirements:

### Path redirects on `jfomhover.info`

For any old ThingsAI path whose canonical destination path changes, add exact aliases from the old path to the new canonical `/posts/...` path. At minimum, map:

- each included `/essays/<lang>/.../` path to its new `/posts/<lang>/.../` path
- each included `/memos/<lang>/.../` path to its new `/posts/<lang>/.../` path

The old-host post URL already has the canonical destination path and must be handled by the host redirect, not by a destination-side self-redirect. Add `jekyll-redirect-from` to `_config.yml` if it is used for destination-side aliases, and verify its generated HTML. On GitHub Pages it should be treated as a static HTML/meta-refresh/JavaScript redirect unless the deployed response proves otherwise; it does not provide a server-side 301/308 by itself.

### Host redirect from `thingsai.io`

The old domain must remain deployed and its DNS/custom-domain configuration must remain under control until the redirect is verified. A `CNAME` file alone cannot redirect a domain, and GitHub Pages does not provide a general wildcard host redirect for every path.

Recommended approach:

- Identify the authoritative DNS provider and the HTTP-capable edge/redirect service separately. Configure the redirect at the edge or web-server layer; DNS records alone cannot preserve paths, queries, trailing slashes, or HTTP status codes.
- Use explicit redirect classes rather than blindly preserving every old path:
  - Migrated article paths redirect to their new canonical `jfomhover.info` URLs.
- The old ThingsAI root and excluded page paths, including `/ideas/`, receive explicit targets or an intentional decommission response; they must not automatically map to same-path portfolio URLs. Idea URLs may be retired rather than redirected.
  - Old asset paths either remain served by the old deployment or receive explicit asset redirects. They must not be assumed safe to map to destination assets, which may collide with portfolio assets.
- Put the host-level rules in the selected HTTP-capable edge service, preserving the query string for migrated article redirects and changing only the host/path according to the redirect matrix.
- Use a permanent redirect status such as 301 or 308, subject to the provider's behavior and the desired caching policy.
- Keep a fallback redirect deployment for known legacy paths if the edge provider cannot provide the required rules.
- Do not point `thingsai.io` directly at the new GitHub Pages site and expect it to redirect; that would either serve the new site under the old host or conflict with the custom-domain configuration.

The redirect target for the example must be exactly:

`https://jfomhover.info/posts/en/2026-02-22-ai-ego-loop-collaboration/`

Before configuring the edge, produce and approve a redirect matrix with at least these rows:

| Old host URL class | Destination behavior | Status/notes |
| --- | --- | --- |
| Included `/posts/<lang>/<slug>/` | Same path on `jfomhover.info` | Permanent host redirect; no destination self-redirect |
| Included `/essays/<lang>/<slug>/` | Corresponding `/posts/<lang>/<slug>/` URL | Permanent redirect; exact mapping |
| Included `/memos/<lang>/<slug>/` | Corresponding `/posts/<lang>/<slug>/` URL | Permanent redirect; exact mapping |
| ThingsAI root and excluded pages | Explicit selected target or intentional retirement response | Never blindly preserve same path |
| ThingsAI CSS/JS/image assets | Retain old deployment or explicit asset mapping | Never assume destination asset equivalence |
| Unknown paths | Explicit fallback policy | Must be tested for loops and accidental portfolio exposure |

The matrix must record trailing-slash behavior, query-string handling, and whether each class is retained, redirected, retired, or excluded.

## Implementation Sequence (after approval)

1. Snapshot the current repositories and record the complete source URL inventory, including actual generated collection URLs, page redirect stubs, assets, and excluded paths.
2. Decide the French computational-thinking slug, define translation keys for the one English/French pair, and define the redirect matrix for retained, redirected, intentionally retired, and excluded URL classes.
3. Define the destination front matter schema, including required `content_type` and optional translation metadata.
4. Add the posts collection permalink, load `jekyll-redirect-from` if needed, implement the destination post layout, and implement counterpart-aware alternate URL generation.
5. Move/copy the five documents into `_posts/`, normalize front matter, and update the essay's Liquid link to the exact destination `_posts` source path.
6. Copy the two required images, make references baseurl-aware, and audit all copied content, navigation, SEO, feeds, and JSON-LD links for old or excluded paths.
7. Add the blog/category navigation and only the necessary destination aliases.
8. Build locally with `bundle exec jekyll build --trace`; generate a URL/link inventory from `_site` and verify canonical URLs, no duplicate URLs, all mapped links, assets, feeds, sitemap, and `hreflang` output.
9. Test English-only pages, the English/French pair, all three content types, exact post URL, legacy essay/memo paths, baseurl preview, and missing-link failure behavior.
10. Deploy the destination site while leaving `thingsai.io` unchanged.
11. Configure and test the HTTP-capable host redirect according to the matrix, including status, `Location`, query preservation, trailing slashes, excluded paths, asset paths, and loop absence.
12. After propagation, verify with an HTTP client that old-host article URLs return the intended permanent redirect and destination pages return the canonical page. Monitor logs/search-console signals before decommissioning the old site.

## Acceptance Criteria

- The destination builds successfully with no Liquid, collection, or missing-link errors.
- All five included entries are present with unchanged article body content, apart from explicitly necessary link/path repairs.
- No idea entry is published or linked from the merged blog.
- The three categories are visible as blog categories, and the site uses the `jfomhover.info` layout and branding.
- The example old URL redirects to the exact destination URL and the destination page renders successfully.
- Old essay and memo URLs redirect to their new `/posts/...` canonical URLs.
- Images render on migrated entries.
- English/French alternate links are emitted only for explicit counterparts and do not point to nonexistent documents. For documents without a counterpart, omit the alternate link; `x-default` must point to an existing selected default-language page or the current canonical page.
- The generated URL inventory contains exactly five migrated documents, with no duplicate URLs and no unexpected date/slug transformations.
- The essay's rendered link resolves to the final computational-thinking post URL.
- `thingsai.io` redirects migrated article URLs at the HTTP-capable host layer without serving duplicate article content or exposing the old layout.
- Redirects preserve query strings according to the matrix, handle trailing slashes deliberately, and do not form loops.
- Excluded pages, idea URLs, and assets follow the documented decommission/retention policy rather than an unsafe same-path wildcard. Idea URLs are not required to resolve after deprecation.

## Open Decisions Before Implementation

- Confirm that all essays and flashcards should receive new canonical `/posts/...` URLs, with their old `/essays/...` and `/memos/...` URLs retained only as redirects.
- Decide whether the French computational-thinking document retains `/posts/fr/computational-thinking/` or is renamed to `/posts/fr/2026-01-23-computational-thinking/`.
- Confirm whether the blog should be linked as `/en/blog/` and `/fr/blog/`, or use another path/name.
- Confirm which provider controls DNS and which HTTP-capable edge/redirect service can serve `thingsai.io`; this determines whether the redirect matrix can be implemented.
- Confirm whether the old ThingsAI repository/domain will remain available during rollout and for how long.
- Decide whether migrated content should appear in the main homepage's recent-content section or only on the blog page.
- Decide whether existing analytics identifiers and feed URLs should be retained, merged, or changed.

## Non-Goals

- Do not migrate `_ideas/` entries; they may be permanently deprecated.
- Do not reproduce the ThingsAI visual design, theme switcher, layout hierarchy, or content-page CSS.
- Do not rewrite article prose, correct citations, or otherwise editorially alter content as part of the technical migration.
- Do not change DNS or deploy either site until the migration implementation is separately approved.
