# Washington Fields 12th Ward Preparedness site

Live at https://ward-preparedness.vercel.app

One static page (`index.html`) plus two Google Forms (skills and needs, and an anonymous preparedness survey). No build step, no database.

## Handing off this calling

Everything belongs to one Google account: **wf12thprep@gmail.com**. To hand off, give your successor that account's password and have them:

1. Change the password, and replace the phone number and recovery email with their own (Google Account → Security).
2. Update their date of birth (Google Account → Personal info).

That one account owns everything, so nothing else needs transferring:

| What | Where | Signed in with |
|---|---|---|
| Skills & Needs form + response Sheet | Google Drive (forms.google.com) | wf12thprep@gmail.com |
| Preparedness survey + response Sheet | Google Drive | wf12thprep@gmail.com |
| Website files and edit history | GitHub (github.com) | wf12thprep@gmail.com |
| Website hosting | Vercel (vercel.com) | "Continue with GitHub" |

All of these are free. The response Sheets should be shared only with the bishopric and emergency preparedness leaders; review who has access at each handoff.

## Making a quick edit (no software needed)

1. Sign in to github.com, open the **ward-preparedness** repository, and click **index.html**.
2. Click the pencil icon (Edit), change the text, and click **Commit changes**.
3. The live site updates by itself in about a minute.

Common edits: contact names and phones (search for "Who to contact"), the "Last updated" date (near the bottom), and the form links (`FORM_URL` and `SURVEY_URL` near the bottom).

## Filling in the ward details

Every placeholder in `index.html` is wrapped in `<span class="fill">[...]</span>` and shows highlighted in yellow in the browser. Search the file for `class="fill"` and replace each one with the real text (you can drop the span once it's filled). Placeholders include the ward name, gathering points, contacts, radio station, and last-updated date.

## Google Forms

`tools/create-forms.gs` builds both forms (Skills & Needs, and the anonymous survey) in one run from script.google.com, signed in as wf12thprep@gmail.com. The questions are also listed in `FORM-QUESTIONS.md` and `SURVEY-QUESTIONS.md`. Paste each form's link into `FORM_URL` and `SURVEY_URL` near the bottom of `index.html`.

## Deploying

Vercel is connected to the GitHub repository, so every commit to it publishes automatically. There's nothing to run.

After changing the page, paste the site URL into the Facebook debugger (developers.facebook.com/tools/debug) and click **Scrape Again** so the ward's Facebook post shows the updated preview.

## Printing

The **Print our plan** button (or Cmd/Ctrl+P) prints a compact version: no navigation or buttons, a blank line for the family's out-of-state contact, and the form link as text.

## Preview image

`og-image.png` is rendered from `tools/og-image.html`. To change it, edit that file and run:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --hide-scrollbars --window-size=1200,630 --screenshot="$PWD/og-image.png" "file://$PWD/tools/og-image.html"
```
