# Premier League one-pager: source

`EDJ-Premier-League-Cybersecurity-Rules.html` is the master for
`downloads/EDJ-Premier-League-Cybersecurity-Rules.pdf`. Edit the HTML, then
re-render the PDF. The header pulls the real logo from `img/logo.svg`, so do
not replace it with typed text.

## Re-render the PDF

Either:

1. Open the HTML in Chrome, print to PDF with paper size Letter, margins None,
   and "Background graphics" ticked. Save over
   `downloads/EDJ-Premier-League-Cybersecurity-Rules.pdf`.

2. Or run the script from the repo root (needs Node and Playwright with Chrome):

   ```
   node src/one-pager/render.mjs
   ```

Check the result is one page and the header shows the logo image before
committing.
