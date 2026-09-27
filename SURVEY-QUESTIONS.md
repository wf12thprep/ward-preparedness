# Google Form: Household Preparedness Survey (anonymous)

This is a **separate form** from Skills & Needs. It asks for no names, addresses, or contact info, so people can answer honestly.

Settings to set first:

- **Settings → Responses → Collect email addresses:** Off.
- **Settings → Responses → Limit to 1 response:** Off (that setting requires a Google sign-in and would tie answers to an account).
- **Responses → Link to Sheets.** Share the Sheet with the bishopric and emergency preparedness leaders. The **Summary** tab in Forms gives ready-made charts for ward council.
- Do **not** ask for names anywhere in the form, including in paragraph questions.

**Form title:** Washington Fields 12th Ward Preparedness Survey

**Form description:**
> This anonymous survey takes about 3 minutes. Please answer once per household. We don't ask for your name, and your answers are combined with everyone else's to help the ward plan classes and support. "Not yet" is a perfectly good answer; that's what this is for. Not sure how much you need? The calculator at https://ward-preparedness.vercel.app/#calculator works it out for your family.

Use the same three answer choices for questions 2–11 (multiple choice): **Yes · Partly · Not yet**

---

1. **How many people live in your household?** (multiple choice: 1 · 2 · 3–4 · 5–6 · 7 or more)

**Water and food**

2. **Do you have at least two weeks of stored drinking water for your household?** Help text: *1 gallon per person per day, so 14 gallons each. Double it for summer heat.*
3. **Do you have a way to purify more water** (filter, purification tablets, or bleach and instructions)?
4. **Do you have a 3-month supply of the everyday foods your family already eats?** Help text: *Roughly 270 meals per person.*
5. **Do you have longer-term food storage** (grains, beans, and other basics that keep for years)?

**Kits and supplies**

6. **Does everyone in your household have a 72-hour kit** or go-bag ready to grab?
7. **Do you have at least a week's supply of essential medications** set aside, plus a first-aid kit?
8. **Could you get through a summer power outage safely?** (a way to stay cool, lights, a battery or crank radio, charged power banks)

**Plans and skills**

9. **Does your family have an emergency plan:** where to meet, an out-of-state contact, and who picks up the kids?
10. **Does an adult in your home know how and when to shut off the gas and water?**
11. **Do you have an emergency financial reserve,** including some cash at home?
12. **How confident do you feel about handling an emergency?** (linear scale 1–5, "Not at all" to "Very")

**Help from the ward**

13. **What would help your household most?** (checkboxes, "Other" option on)
    - A class on water storage
    - A class on food storage
    - Help putting together 72-hour kits
    - First aid / CPR class
    - Group purchases (water barrels, food storage, kits)
    - Help making a family emergency plan
    - Planning for heat and power outages
    - Emotional and spiritual resilience
14. **Anything else you'd like the ward leaders to know?** (paragraph, optional). Help text: *Please don't include names.*

---

**Confirmation message:**
> Thank you! For a checklist of next steps, see the family preparedness resources on the ward site: https://ward-preparedness.vercel.app/#family

When the form is ready: **Send → link icon → Shorten URL → Copy**, then paste the link into `SURVEY_URL` in `index.html` and into the printed-copy line (search for `[survey link]`).
