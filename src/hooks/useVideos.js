import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        doSearch(defaultTerm)
    }, [defaultTerm]);

    const doSearch = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    };

    return [videos, doSearch];
};

export default useVideos;
