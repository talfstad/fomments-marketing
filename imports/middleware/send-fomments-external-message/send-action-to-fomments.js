import $ from 'jquery';

export const EXTERNAL_MESSAGE_NAMESPACE = 'fomments-external-message';
export const EXTERNAL_RESPONSE_NAMESPACE = 'fomments-external-message-response';

export const sendActionToFomments = (action) => {
  let retry = true;
  const onResponse = ({ data }) => {
    if (!Array.isArray(data)) return;

    const [namespace, responseData] = data;

    if (namespace !== EXTERNAL_RESPONSE_NAMESPACE) return;

    if (responseData) {
      const response = responseData[EXTERNAL_RESPONSE_NAMESPACE];
      if (response) {
        // we have correct response, remove listener and resolve
        window.removeEventListener('message', onResponse);
        retry = false;
      }
    }
  };
  window.addEventListener('message', onResponse);

  const sendMessage = () => {
    const $iframe = $('#fomments iframe');
    if ($iframe[0]) {
      $iframe[0].contentWindow.postMessage([EXTERNAL_MESSAGE_NAMESPACE, action], '*');
    }

    setTimeout(() => {
      if (retry) {
        sendMessage();
      }
    }, 1000);
  };

  sendMessage();
};
