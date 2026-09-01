const translations = Object.freeze({
  'translation-name': 'My name is Aleksander Figiel',
  'translation-and-i-am': 'and I am a',
  'translation-trichologist': 'trichologist',
  'translation-intro-1': 'I identify scalp conditions,',
  'translation-intro-2': 'and help treat the causes of hair loss.',
  'translation-book-consultation': 'Book a Trichology Consultation',
  'translation-consultation-details': '(30 min + recommendations by email, PLN 200)',
  'translation-consultation-location': ' in Warsaw (Młociny) or online.',
  'translation-phone': 'Phone: ',
  'translation-after-consultation': 'After the consultation, ',
  'translation-individual-plan': 'I send you a personalized plan by email',
  'translation-plan-before-dermatologists': ': suggested medications and contacts for ',
  'translation-dermatologists': 'dermatologists specializing in hair loss',
  'translation-plan-after-dermatologists': ', a hair transplant strategy (best clinics, number of grafts), dietary supplementation, treatments and hair-care practices.',
  'translation-rebuild-1': 'I show you how to restore your hair and keep it',
  'translation-rebuild-2': 'for many years without unnecessary expenses.',
  'translation-education': 'I educate based on the knowledge of world-class experts, scientific research and personal experience.',
  'translation-guide-label': 'My free guide - instruction in PDF',
  'translation-guide-title': 'Treatment of androgenetic alopecia ',
  'translation-guide-men': 'in men'
});

const pageTranslations = Object.freeze({
  title: 'trycholog.pl | Aleksander Figiel | Warsaw',
  description: 'I identify androgenetic and telogen hair loss, plan treatment based on scientific research, and advise how to achieve a successful hair transplant. Consultation in Warsaw or online.'
});

function getPrimaryBrowserLanguage() {
  const languages = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage || 'pl'];

  return String(languages[0] || 'pl').trim().toLowerCase().split('-')[0];
}

function shouldTranslateToEnglish() {
  return getPrimaryBrowserLanguage() !== 'pl';
}

function applyEnglishTranslations() {
  Object.entries(translations).forEach(([id, translation]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = translation;
  });

  document.documentElement.lang = 'en';
  document.title = pageTranslations.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', pageTranslations.description);
}

window.isEnglishTranslationActive = shouldTranslateToEnglish();

if (window.isEnglishTranslationActive) {
  document.addEventListener('DOMContentLoaded', applyEnglishTranslations);
}
