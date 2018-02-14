const APP_ID = 'um0vl1v4';

export const bootIntercom = () => {
  $.getScript(`https://widget.intercom.io/widget/${APP_ID}`)
    .then(() => {
      window.Intercom('boot', {
        app_id: APP_ID,
      });
    });
};

export const updateIntercom = (data = {}) => {
  window.Intercom('update', data);
};

export const shutdownIntercom = () => {
  window.Intercom('shutdown');
};
