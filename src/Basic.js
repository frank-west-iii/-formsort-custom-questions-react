import { useEffect, useState } from 'react';
import { getResponderUuid } from '@formsort/custom-question-api';

function Basic() {
  const [uuid, setUuid] = useState('no uuid');

  useEffect(() => {
    const run = async () => {
      const uuid = await getResponderUuid();
      setUuid(uuid);
    };
    run();
  }, []);

  return (
    <div>
      <h1>Basic</h1>
      <h2>{uuid}</h2>
    </div>
  );
}

export default Basic;
