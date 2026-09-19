# Executive Website Review

## Executive Assessment

The site has solid raw material: credible AI product and research leadership, substantial experience, and writing with a point of view. The current presentation does not yet communicate that level of authority. It feels like a lightly customized Jekyll portfolio assembled from several visual systems rather than a coherent personal practice.

The redesign should feel like an AI executive's working notebook: restrained, editorial, technically literate, and confident. It should make the thinking easy to enter, the career evidence easy to scan, and the relationship between execution and ideas visible without turning the site into a corporate microsite.

## Findings

### 1. The visual system is fragmented

- `style.css` uses plain system typography, light gray borders, and generic blue links.
- `project.css` introduces a separate purple gradient system, rounded cards, and pill-like technology labels.
- `blog.css` uses a third visual vocabulary with black pills, blue labels, and minimal cards.
- The About page contains a large inline `<style>` block with its own gradients, spacing, and component conventions.
- Border radii, shadows, color values, heading sizes, and spacing scales are not shared consistently.

**Impact:** the portfolio, projects, blog, and essays do not feel like parts of one senior-level site.

### 2. The design is generic rather than personal

- The header is a default floating navigation with no strong identity or active-page treatment.
- The site title is only `Jeff Omhover`; it does not establish the site's editorial proposition.
- The homepage is currently a redirect to About, so there is no deliberate front door for the combined portfolio and writing practice.
- Cards and gradients communicate “template portfolio,” not judgment, depth, or technical credibility.

**Impact:** the first impression underuses the strongest differentiator: the combination of AI product execution, research depth, and reflective writing.

### 3. Long-form writing lacks editorial scaffolding

- Post pages have a small type label, title, subtitle, metadata, and then a long uninterrupted column.
- There is no strong reading measure, section rhythm, lead treatment, pull-quote treatment, or visible “back to writing” path.
- The migrated content's essays and flashcards are presented with the same basic article treatment despite having distinct editorial roles.
- Links, blockquotes, code, tables, images, and footnotes do not have a coherent long-form reading system.

**Impact:** profound writing is forced to carry the full burden of presentation itself, increasing cognitive load and reducing perceived polish.

### 4. The About and Projects pages are inconsistent with the editorial content

- About uses extensive inline CSS, emoji location text, a placeholder avatar, and a different visual hierarchy from the rest of the site.
- Projects use saturated purple gradients and hover animations that feel consumer-template-like beside the serious career narrative.
- The project list's empty state is not designed as a confident “portfolio in progress” state.

**Impact:** the site shifts tone when moving between professional evidence and intellectual output.

### 5. Language behavior is inconsistent

- The header includes the language switcher only when a real counterpart with `translation_key` exists.
- English-only posts therefore have no language control at all.
- The current implementation has a correct distinction between real SEO alternates and fallbacks, but the visible navigation should still be present consistently.
- The About pages have explicit inline language links that duplicate the header behavior.

**Proposal:** always render a visible language control. Use the exact counterpart when one exists; otherwise link to the corresponding language home or blog index. Only emit `hreflang` for actual counterparts.

### 6. Responsive behavior is fragile

- The header relies on floats and a checkbox menu with a narrow `600px` breakpoint.
- The site uses several fixed card minimum widths and page-specific negative margins.
- Long titles and metadata have no deliberate mobile treatment.
- Inline About styles and project styles use different responsive breakpoints.

**Impact:** the site may technically fit on mobile without feeling intentionally designed for it.

### 7. Accessibility and semantics need a pass

- Interactive filter controls need visible focus states and explicit status behavior.
- Navigation lacks an obvious current-page state.
- Color contrast and link treatment vary by section.
- The post layout should use article metadata and labels consistently without relying only on color.
- The language switcher should be labelled as a language control and remain keyboard-visible.

## Proposed Direction

### Design language: “Signal over spectacle”

- Warm paper background (`#f6f4ef`) with ink-black text and one electric chartreuse accent.
- Deep ink panels for the homepage hero and selected metadata, creating a confident editorial contrast.
- Use a system sans stack for UI and a restrained serif stack for long-form reading and pull quotes.
- Replace gradients with solid surfaces, hairline rules, and small accent bars.
- Use square or lightly rounded geometry, not repeated 12px cards and pills.
- Use generous whitespace and a visible 70–78 character reading measure.

### Information architecture

- Make `/en/` and `/fr/` intentional homepages rather than redirects to About.
- Homepage: identity statement, evidence strip, selected writing, selected projects, and a concise point-of-view CTA.
- Header: name/role lockup, About, Projects, Writing, and always-visible language control.
- Writing index: unified chronological stream with type labels and filters.
- Article: editorial masthead, type/category, date, topic/tags, lead excerpt where available, and focused reading column.

### CSS architecture

- Establish design tokens in `style.css`: colors, typography, spacing, borders, shadows, and container widths.
- Make `style.css` the shared foundation; keep `blog.css` and `project.css` as small page-specific extensions.
- Move About page styles out of the inline `<style>` block into `about.css` so the page follows the same token system.
- Remove obsolete idea styles and all purple-gradient conventions.

### Required implementation changes

1. Replace the current global CSS with a coherent editorial visual system that remains responsive.
2. Add a proper bilingual homepage using the existing site identity and professional content already present in About.
3. Add active navigation styling and a persistent language control with contextual fallback links.
4. Redesign blog cards, filters, article mastheads, metadata, blockquotes, images, tables, code, and footnotes.
5. Redesign the About and Projects presentation to match the same visual system.
6. Move About CSS into `assets/css/about.css` without changing About copy.
7. Keep all migrated post bodies byte-for-byte semantically intact; modify only surrounding templates/styles and required presentation wrappers.
8. Verify desktop, mobile, bilingual pages, long essays, empty projects, filters, keyboard focus, and local Jekyll output.

## Success Criteria

- A senior AI/product leader is immediately legible from the homepage without reading the full About page.
- Portfolio and writing feel like one coherent practice, not separate templates.
- Long-form essays feel calm, deliberate, and easy to read.
- The language control appears in the header on every rendered page, including English-only posts.
- The real translation pair continues to emit reciprocal `hreflang` tags; fallback language links do not create false SEO alternates.
- No post body content is rewritten.
- The design remains usable at narrow mobile widths and with keyboard navigation.
- The Jekyll build and local HTTP smoke tests pass without warnings or missing assets.
