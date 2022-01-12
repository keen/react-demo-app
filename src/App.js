import React from 'react';
import { KeenDataviz } from '@keen.io/dataviz';
import { FunnelChart } from '@keen.io/charts';

const data = [
  { name: 'JavaScript', jobOffers: 225 },
  { name: 'Python', jobOffers: 122 },
  { name: 'Go', jobOffers: 10 },
  { name: 'PHP', jobOffers: 11 },
  { name: 'Java', jobOffers: 134 },
  { name: 'Scala', jobOffers: 98 },
  { name: 'Groovy', jobOffers: 11 },
];

function App() {
  const container = React.useRef(null);

  React.useEffect(() => {
    new KeenDataviz({
      type: 'funnel',
      container: container.current,
      widget: {
        title: {
          content: 'Job offers',
        },
        subtitle: {
          content: 'By programming languages',
        },
      },
      settings: {
        data,
        theme: {
          colors: ['red', 'green', 'blue', 'yellow', 'violet'],
        },
        valueKey: "jobOffers",
        labelSelector: 'name',
      },
    }).render();
  }, []);

  return (
    <>
      <div style={{ width: '600px', height: '450px' }} ref={container} />
    <div
      style={{
        width: '700px',
        height: '500px',
      }}
    >
      <FunnelChart
        labelSelector="name"
        valueKey="jobOffers"
        svgDimensions={{ width: 700, height: 500 }}
        data={data}
      />
    </div>
    </>
  );

}

export default App;
