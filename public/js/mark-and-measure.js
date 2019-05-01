window.addEventListener("load", thingToMeasure);

function thingToMeasure() {
  performance.mark('start');
  fetch("/api")
    .then(result => result.json())
    .then(json => {
      json.images.forEach(image => console.log(image.name));
      performance.mark('end');
      performance.measure('Fetching Images', 'start', 'end');
      // performance.getEntriesByType('measure');
      const { duration } = performance.getEntriesByType('measure')[0];
      console.info('time in ms:', duration);
      performance.clearMarks();
      performance.clearMeasures();
    });

}
