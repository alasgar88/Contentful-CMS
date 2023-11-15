import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
  space: 'blvsjlo308om',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(true);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'projects',
      });
      const newData = response.items.map((item) => {
        const id = item?.sys?.id;
        const title = item?.fields?.title;
        const url = item?.fields?.url;
        const img = item?.fields?.image?.fields?.file?.url;
        return { title, url, img, id };
      });
      setProjects(newData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { projects, loading };
};
