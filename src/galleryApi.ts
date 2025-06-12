import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';
const API_KEY = 'wvL1FWdr_UouvBVkti9rZ763wmBm6XkdICd1Oxg2ZCU';

export interface Image {
  id: string;
  alt_description?: string | null;
  urls: {
    small: string;
    regular: string;
  };
}

export interface GalleryResponse {
  results: Image[];
  total_pages: number;
}

export const fetchGallery = async (query: string, page: number): Promise<GalleryResponse> => {
  try {
    const response = await axios.get<GalleryResponse>('', {
      params: {
        query,
        page,
        per_page: 15,
        client_id: API_KEY,
        orientation: 'landscape' as const,
      },
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};