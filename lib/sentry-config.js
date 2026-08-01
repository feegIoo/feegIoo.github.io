function initSentry(withFeedback) {
  const integrations = [
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    })
  ]

  // if (withFeedback) {
  //   integrations.push(
  //     Sentry.feedbackIntegration({
  //       colorScheme: "light",
  //       showBranding: false,
  //       isNameRequired: false,
  //       isEmailRequired: true,
  //       enableScreenshot: false,
  //       triggerLabel: "Masz pytanie?",
  //       formTitle: "Masz pytanie?",
  //       nameLabel: "Imię",
  //       namePlaceholder: "",
  //       emailPlaceholder: "",
  //       isRequiredLabel: "(wymagane)",
  //       messageLabel: "Wiadomość",
  //       messagePlaceholder: "",
  //       submitButtonLabel: "Wyślij",
  //       cancelButtonLabel: "Anuluj",
  //       successMessageText: "Wiadomość wysłana"
  //     })
  //   )
  // }

  Sentry.onLoad(function() {
    Sentry.init({
      dsn: "https://80c32dff6b98c61c03158dbf5202b885@o4507817217490944.ingest.de.sentry.io/4507817219457104",
      integrations,
      tracesSampleRate: 1.0,
      replaysSessionSampleRate: 0.5,
      replaysOnErrorSampleRate: 1.0,
    });
  });  
}

function reorderAgaTreatmentSections() {
  if (window.location.pathname !== '/leczenie-lysienia-androgenowego-u-mezczyzn/') return;

  const main = document.querySelector('main');
  const palmaStart = document.getElementById('palma-dynia');
  const alfatradiolHeading = Array.from(document.querySelectorAll('main h4')).find(function (heading) {
    return heading.textContent.trim().startsWith('d) Alfatradiol');
  });

  if (!main || !palmaStart || !alfatradiolHeading) return;

  let alfatradiolSection = alfatradiolHeading;
  while (alfatradiolSection.parentElement && alfatradiolSection.parentElement !== main) {
    alfatradiolSection = alfatradiolSection.parentElement;
  }

  const palmaHeading = palmaStart.querySelector('h4');
  if (palmaHeading) palmaHeading.textContent = 'd) palma sabałowa lub olej z pestek dyni';
  alfatradiolHeading.textContent = 'e) Alfatradiol codziennie (wcierka)';

  const fragment = document.createDocumentFragment();
  let node = palmaStart;

  while (node) {
    const next = node.nextSibling;
    fragment.appendChild(node);
    node = next;
  }

  main.insertBefore(fragment, alfatradiolSection);
}

document.addEventListener('DOMContentLoaded', reorderAgaTreatmentSections);
