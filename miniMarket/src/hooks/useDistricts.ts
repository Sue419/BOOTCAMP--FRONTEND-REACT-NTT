import { useState, useEffect } from 'react';

interface District {
  id: number;
  name: string;
}

const useDistricts = () => {
  const [districts, setDistricts] = useState<District[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await fetch('./src/data/districts.json');
        if (!response.ok) {
          throw new Error('Failed to load districts');
        }
        const data: District[] = await response.json();
        setDistricts(data);
      } catch {
        setLoading(false);
      }
    };

    fetchDistricts();
  }, []);

  return { districts, loading, error };
};

export default useDistricts;
