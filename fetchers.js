const transformGrades = (collection, { id, name }) => {
  collection[name.charAt(0)]
    ? collection[name.charAt(0)].push({ id, name })
    : (collection[name.charAt(0)] = [{ id, name }]);
  return collection;
};

export const gradesFetcher = props =>
  fetch(
    'http://joomla35.hardtberg-gymnasium.de/neu/components/com_school_mobile/wserv/service.php?user=mustermann&pw&task=getUpdates'
  )
    .then(response => response.json())
    .then(({ klassenjgst }) => klassenjgst.reduce(transformGrades, {}));

export const substituteFetcher = props =>
  fetch('https://untitled-gfajk6wt7ldu.runkit.sh/').then(response => response.json());
