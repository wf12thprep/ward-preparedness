/**
 * Builds both Washington Fields 12th Ward Google Forms in one run:
 *   1. Skills & Needs (names kept; responses for leaders only)
 *   2. Household Preparedness Survey (anonymous)
 * Each form gets its own linked response Sheet in your Google Drive.
 *
 * How to run:
 *   1. Sign in to the Google account that should own the forms.
 *   2. Go to https://script.google.com, click "New project", delete the sample code, paste this whole file.
 *   3. Click Run (with createWardForms selected). Approve the permissions prompt.
 *   4. Open "Execution log" and copy the two links it prints.
 */

const WARD = 'Washington Fields 12th Ward';
const SITE = 'https://ward-preparedness.vercel.app';

function createWardForms() {
  const skills = createSkillsAndNeedsForm_();
  const survey = createSurveyForm_();
  Logger.log('Skills & Needs form link:  ' + shortUrl_(skills));
  Logger.log('Preparedness survey link:   ' + shortUrl_(survey));
  Logger.log('Edit Skills & Needs:        ' + skills.getEditUrl());
  Logger.log('Edit survey:                ' + survey.getEditUrl());
  Logger.log('Response Sheets are in your Google Drive, named "... (Responses)". Share them only with ward leaders.');
}

// ---------------------------------------------------------------------------
// 1. Skills & Needs
// ---------------------------------------------------------------------------
function createSkillsAndNeedsForm_() {
  const form = FormApp.create(WARD + ' Skills & Needs');
  form.setDescription(
    'This helps our ward look after each other in an emergency. Only the bishopric and ward emergency ' +
    'preparedness leaders will see your answers. Needs are never shared publicly. Fill out one form per ' +
    'household. To update your answers later, just submit the form again.');
  commonSettings_(form, 'Thank you! Your ward leaders will keep this confidential. If anything changes, you can submit the form again at any time.');

  form.addSectionHeaderItem().setTitle('Your household');
  form.addTextItem().setTitle('Name(s) of household members').setRequired(true);
  form.addTextItem().setTitle('Street address').setRequired(true)
    .setHelpText('So we know which neighbors are closest to you.');
  form.addTextItem().setTitle('Best phone number').setRequired(true);
  form.addMultipleChoiceItem().setTitle('Can we text this number?').setChoiceValues(['Yes', 'No']);
  form.addTextItem().setTitle('Email').setHelpText('Optional');
  form.addTextItem().setTitle('Number of people in your household')
    .setValidation(FormApp.createTextValidation().requireNumber().setHelpText('Please enter a number.').build());

  form.addPageBreakItem().setTitle('Skills and resources you could offer');
  form.addCheckboxItem().setTitle('Skills').showOtherOption(true).setChoiceValues([
    'Doctor, nurse, EMT, or other medical professional',
    'First aid / CPR certified',
    'Mental health or counseling',
    'Ham radio operator (put your call sign in "Other")',
    'Search and rescue / CERT trained',
    'Construction, carpentry, or structural assessment',
    'Electrician',
    'Plumber',
    'Chainsaw / tree removal',
    'Heavy equipment operator',
    'Childcare',
    'Cooking for large groups',
    'Languages other than English',
  ]);
  form.addCheckboxItem().setTitle('Equipment or resources').showOtherOption(true).setChoiceValues([
    'Generator',
    'Truck or trailer',
    '4-wheel drive vehicle',
    'Chainsaw',
    'Water filtration or large water storage',
    'Space to temporarily house another family',
    'Extra food storage to share',
    'Ham / GMRS radio',
  ]);
  form.addParagraphTextItem().setTitle("Anything else you'd like us to know about how you can help?");

  form.addPageBreakItem().setTitle('Needs (confidential)')
    .setHelpText("Only ward leaders see this. Answer only what you're comfortable sharing.");
  form.addCheckboxItem().setTitle('Would anyone in your household need extra help in an emergency?')
    .showOtherOption(true).setChoiceValues([
      'Limited mobility or uses a wheelchair/walker',
      'Medical equipment that needs electricity (oxygen, CPAP, dialysis, etc.)',
      'Medications that need refrigeration',
      'Hearing, vision, or cognitive impairment',
      'Lives alone',
      "No vehicle / can't drive",
      'Infants or young children',
      'Pets or livestock that would need help evacuating',
      'None of these',
    ]);
  form.addParagraphTextItem().setTitle('Anything else that would help us help you?');

  form.addPageBreakItem().setTitle('Emergency contact');
  form.addTextItem().setTitle('Out-of-state contact name and phone')
    .setHelpText("Optional. Someone outside Utah we could reach if we can't reach you.");

  linkSheet_(form);
  return form;
}

// ---------------------------------------------------------------------------
// 2. Household Preparedness Survey (anonymous)
// ---------------------------------------------------------------------------
function createSurveyForm_() {
  const form = FormApp.create(WARD + ' Preparedness Survey');
  form.setDescription(
    'This anonymous survey takes about 3 minutes. Please answer once per household. We don\'t ask for your ' +
    'name, and your answers are combined with everyone else\'s to help the ward plan classes and support. ' +
    '"Not yet" is a perfectly good answer; that\'s what this is for. Not sure how much you need? The calculator at ' +
    SITE + '/#calculator works it out for your family.');
  commonSettings_(form, 'Thank you! For next steps, see the family preparedness resources on the ward site: ' + SITE + '/#family');

  const YPN = ['Yes', 'Partly', 'Not yet'];
  const q = (title, help) => {
    const item = form.addMultipleChoiceItem().setTitle(title).setChoiceValues(YPN);
    if (help) item.setHelpText(help);
    return item;
  };

  form.addMultipleChoiceItem().setTitle('How many people live in your household?')
    .setChoiceValues(['1', '2', '3–4', '5–6', '7 or more']);

  form.addSectionHeaderItem().setTitle('Water and food');
  q('Do you have at least two weeks of stored drinking water for your household?',
    '1 gallon per person per day, so 14 gallons each. Double it for summer heat.');
  q('Do you have a way to purify more water?', 'A filter, purification tablets, or bleach and instructions.');
  q('Do you have a 3-month supply of the everyday foods your family already eats?', 'Roughly 270 meals per person.');
  q('Do you have longer-term food storage?', 'Grains, beans, and other basics that keep for years.');

  form.addSectionHeaderItem().setTitle('Kits and supplies');
  q('Does everyone in your household have a 72-hour kit or go-bag ready to grab?');
  q('Do you have at least a week\'s supply of essential medications set aside, plus a first-aid kit?');
  q('Could you get through a summer power outage safely?',
    'A way to stay cool, lights, a battery or crank radio, charged power banks.');

  form.addSectionHeaderItem().setTitle('Plans and skills');
  q('Does your family have an emergency plan?', 'Where to meet, an out-of-state contact, and who picks up the kids.');
  q('Does an adult in your home know how and when to shut off the gas and water?');
  q('Do you have an emergency financial reserve, including some cash at home?');
  form.addScaleItem().setTitle('How confident do you feel about handling an emergency?')
    .setBounds(1, 5).setLabels('Not at all', 'Very');

  form.addSectionHeaderItem().setTitle('Help from the ward');
  form.addCheckboxItem().setTitle('What would help your household most?').showOtherOption(true).setChoiceValues([
    'A class on water storage',
    'A class on food storage',
    'Help putting together 72-hour kits',
    'First aid / CPR class',
    'Group purchases (water barrels, food storage, kits)',
    'Help making a family emergency plan',
    'Planning for heat and power outages',
    'Emotional and spiritual resilience',
  ]);
  form.addParagraphTextItem().setTitle("Anything else you'd like the ward leaders to know?")
    .setHelpText("Optional. Please don't include names.");

  linkSheet_(form);
  return form;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function commonSettings_(form, confirmation) {
  form.setCollectEmail(false);                 // no email collection
  form.setLimitOneResponsePerUser(false);      // "limit to 1" would force a Google sign-in
  form.setPublishingSummary(false);            // respondents can't see others' answers
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage(confirmation);
  // In a Google Workspace account, forms default to "only people in your organization".
  // Ward members need to open it without signing in. (Personal Gmail accounts don't have this setting.)
  try { form.setRequireLogin(false); } catch (e) { /* not a Workspace account */ }
}

function linkSheet_(form) {
  const sheet = SpreadsheetApp.create(form.getTitle() + ' (Responses)');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
}

function shortUrl_(form) {
  try { return form.shortenFormUrl(form.getPublishedUrl()); } catch (e) { return form.getPublishedUrl(); }
}
