import { useState, useEffect } from 'react';

interface District {
  id: number;
  name: string;
}

const useDistricts = () => {
  const [districts, setDistricts] = useState<District[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDistricts = async () => {
    try {
      setLoading(true);
      const response = await fetch('./src/data/districts.json');
      if (!response.ok) {
        throw new Error('Failed to load districts');
      }
      const data: District[] = await response.json();
      setDistricts(data);
      setLoading(false);
    } catch {
      setError('Error loading districts');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDistricts();
  }, []);

  return { districts, loading, error, fetchDistricts };
};

export default useDistricts;
