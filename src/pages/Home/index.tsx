import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Card } from 'semantic-ui-react';
import format from 'date-fns/format';

import styles from './Home.module.css';

interface IData {
  aqi: number;
  time: {
    s: string;
    tz: string;
  };
}

const Home = () => {
  const [data, setData] = useState<IData | null>(null);
  useEffect(() => {
    const customAbortController = new AbortController();
    fetch(
      `https://api.waqi.info/feed/chiang%20rai/?token=2178af5fc32c6f7ca404b345a1066dd52f9a59ce`,
      { signal: customAbortController.signal }
    )
      .then(data => data.json())
      .then(json => setData(json.data));

    return () => customAbortController.abort();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div className={styles.Home}>
      <div className={styles.RightSide}>
        <h1>Chiang Rai Air</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis adipisci
          molestias doloribus eos autem sapiente recusandae consequuntur nobis
          perferendis quasi.
        </p>
      </div>
      <div className={styles.LeftSide}>
        <Card raised fluid className={styles.Card}>
          <Card.Content className={styles.CardContent}>
            <Card.Meta>
              <span className={styles.Label}>Current Air Quality Index </span>
            </Card.Meta>
            <Card.Header>
              <h1
                className={classNames(
                  styles.Aqi,
                  { [styles.green]: data.aqi > 50 },
                  { [styles.yellow]: data.aqi > 49 && data.aqi < 150 },
                  { [styles.red]: data.aqi > 149 }
                )}
              >
                {data.aqi}
              </h1>
            </Card.Header>
            <Card.Description>
              Last update {format(new Date(data.time.s), 'EEEE H:mm')} (Thailand
              Time)
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default Home;
