const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    // store triggered events
    window.deferredPrompt = event;

    // remove hidden class from button
    butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const eventPrompt = window.deferredPrompt;

    if (!eventPrompt) {
      return;
    }

    // display prompt
    eventPrompt.prompt();

    // reset the deferredPrompt variable
    window.deferredPrompt = null;

    butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    // remove prompt
    window.deferredPrompt = null;
});
