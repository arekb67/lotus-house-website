// 11ty (Eleventy) build configuration.
//
// What this file does:
//   - Tells 11ty where source content lives (src/) and where to write the
//     built static site (_site/).
//   - Sets Nunjucks (njk) as the templating language for both .md and .html
//     so {% %} / {{ }} syntax works consistently across page types.
//   - Passes through static assets (src/assets/) to the build output verbatim.
//   - Passes through the harness/ folder so the deployed site keeps the
//     multi-device review URLs alive at /harness/* alongside production pages.
//
// Run `npm run dev` for the local dev server (auto-rebuilds on save).
// Run `npm run build` for a one-shot production build into _site/.

export default function(eleventyConfig) {
  // Static assets (CSS, images, favicons) — copied unchanged from src/assets/
  // to _site/assets/. The src/ prefix is stripped because src/ is the input dir.
  eleventyConfig.addPassthroughCopy("src/assets");

  // Brand-review harness — lives at the repo root rather than inside src/, so
  // we map it explicitly. Source path on the left, output path on the right.
  eleventyConfig.addPassthroughCopy({ "harness": "harness" });

  // CNAME file for GitHub Pages custom domain. Must land at the root of the
  // deployed artefact (_site/CNAME) for Pages to recognise lotushousetherapy.com
  // as the custom domain. Without an extension, 11ty would otherwise ignore it.
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // {% year %} shortcode — emits the current year, useful for footer copyright.
  // Evaluated at build time, so a rebuild after 31/12 picks up the new year.
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // markdown-it typographer: turns straight apostrophes / quotes into typeset
  // smart quotes at build time (’ instead of ', “” instead of "). Em-dashes
  // (—), en-dashes (–), and ellipses (…) are preserved when already typed.
  // Source markdown stays untouched; the transformation is purely build-time.
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.set({ typographer: true }));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    // Treat .md files as Nunjucks-templated so we can use {{ vars }} and
    // {% includes %} inside markdown front matter / body if needed.
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
