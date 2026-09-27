# Google Form: Skills & Needs

Create at forms.google.com while signed in to a ward leader's account. Settings to set first:

- **Settings → Responses → Collect email addresses:** Off (contact info is asked below instead).
- **Settings → Responses → Limit to 1 response:** Off (it would force a Google sign-in).
- **Responses → Link to Sheets.** Share that Sheet only with the bishopric and the emergency preparedness leaders.
- Do **not** turn on "See summary charts and text responses" for respondents.

**Form title:** [Ward Name] Skills & Needs

**Form description:**
> This helps our ward look after each other in an emergency. Only the bishopric and ward emergency preparedness leaders will see your answers. Needs are never shared publicly. Fill out one form per household. To update your answers later, just submit the form again.

---

## Section 1: Your household

1. **Name(s) of household members** (short answer, required)
2. **Street address** (short answer, required). Help text: *So we know which gathering point and neighbors are closest to you.*
3. **Best phone number** (short answer, required)
4. **Can we text this number?** (multiple choice: Yes / No)
5. **Email** (short answer, optional)
6. **Number of people in your household** (short answer, number validation)

## Section 2: Skills and resources you could offer

7. **Skills** (checkboxes, "Other" option on)
   - Doctor, nurse, EMT, or other medical professional
   - First aid / CPR certified
   - Mental health or counseling
   - Ham radio operator (call sign in "Other")
   - Search and rescue / CERT trained
   - Construction, carpentry, or structural assessment
   - Electrician
   - Plumber
   - Chainsaw / tree removal
   - Heavy equipment operator
   - Childcare
   - Cooking for large groups
   - Languages other than English
8. **Equipment or resources** (checkboxes, "Other" option on)
   - Generator
   - Truck or trailer
   - 4-wheel drive vehicle
   - Chainsaw
   - Water filtration or large water storage
   - Space to temporarily house another family
   - Extra food storage to share
   - Ham / GMRS radio
9. **Anything else you'd like us to know about how you can help?** (paragraph, optional)

## Section 3: Needs (confidential)

Section description: *Only ward leaders see this. Answer only what you're comfortable sharing.*

10. **Would anyone in your household need extra help in an emergency?** (checkboxes, "Other" option on)
    - Limited mobility or uses a wheelchair/walker
    - Medical equipment that needs electricity (oxygen, CPAP, dialysis, etc.)
    - Medications that need refrigeration
    - Hearing, vision, or cognitive impairment
    - Lives alone
    - No vehicle / can't drive
    - Infants or young children
    - Pets or livestock that would need help evacuating
    - None of these
11. **Anything else that would help us help you?** (paragraph, optional)

## Section 4: Emergency contact

12. **Out-of-state contact name and phone** (short answer, optional). Help text: *Someone outside Utah we could reach if we can't reach you.*

---

**Confirmation message:**
> Thank you! Your ward leaders will keep this confidential. If anything changes, you can submit the form again at any time.

When the form is ready: **Send → link icon → Shorten URL → Copy**, then paste the link into `FORM_URL` in `index.html` and into the printed-copy line (search for `[form link]`).
