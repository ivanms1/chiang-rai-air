import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './SearchResult.module.css';
import { Card, Icon } from 'semantic-ui-react';
import classNames from 'classnames';
import { format } from 'date-fns';

interface IData {
  uid: number;
  aqi: number;
  station: {
    name: string;
  };
  time: {
    stime: string;
    tz: string;
  };
}

const SearchResult = () => {
  const [data, setData] = useState<[IData] | null>(null);
  const [loading, setLoading] = useState(false);
  const { city = '' } = useParams();
  useEffect(() => {
    const customAbortController = new AbortController();
    setLoading(true);
    fetch(
      `https://api.waqi.info/search/?token=2178af5fc32c6f7ca404b345a1066dd52f9a59ce&keyword=${encodeURI(
        city
      )}`,
      { signal: customAbortController.signal }
    )
      .then(data => data.json())
      .then(json => {
        if (json.status !== 'error') {
          setData(json.data);
          setLoading(false);
        }
      });

    return () => {
      if (!city) {
        return customAbortController.abort();
      }
    };
  }, [city]);
  return (
    <div className={styles.SearchResult}>
      <h1>Showing results for {city}</h1>
      {loading || !data ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.Results}>
          {data.map(result => (
            <Card key={result.uid} raised className={styles.Card}>
              <Card.Content className={styles.CardContent}>
                <Card.Meta>
                  <span className={styles.Label}>{result.station.name}</span>
                </Card.Meta>
                <Card.Header>
                  <h1
                    className={classNames(
                      styles.Aqi,
                      { [styles.green]: result.aqi < 50 },
                      { [styles.yellow]: result.aqi > 49 && result.aqi < 150 },
                      { [styles.red]: result.aqi > 149 }
                    )}
                  >
                    {result.aqi}
                  </h1>
                </Card.Header>
              </Card.Content>
              <Card.Content extra>
                <span>
                  Last update {format(new Date(result.time.stime), 'EEEE H:mm')}{' '}
                  (Thailand Time)
                </span>
              </Card.Content>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
