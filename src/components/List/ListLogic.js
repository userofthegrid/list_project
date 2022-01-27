import {useEffect, useContext} from 'react';
import { Context } from '../Store';

const ListLogic = () => {
  
    const { albums } = useContext(Context);
    const { setAlbums } = useContext(Context);
    const { sorting } = useContext(Context);
    const { listLayout } = useContext(Context);

    useEffect(() => {
        localStorage.setItem("sorting", sorting);
        const currentSorting = localStorage.getItem('sorting');

        const sortVal = currentSorting;
        switch (sortVal) {
        case 'title':
            albums.sort((a, b) => {
            let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();
        
            if (fa < fb) { return -1;}
            if (fa > fb) { return 1;}
            return 0;
            });
            break;
        case 'date':
            albums.sort((a, b) => {
            return b.timeNow - a.timeNow;
            });
            break;
        case 'id':
            albums.sort((a, b) => {
            return a.id > b.id;
            });
            break;
        default:
            albums.sort((a, b) => {
            return a.id > b.id;
            });
        }

        setAlbums((newAlbumsOrder) => [...newAlbumsOrder]);
    }, [sorting]);    

    const handleAlbumEdit = ({ id }) => {
        const findAlbum = albums.find((album) => album.id === id);

        updateAlbum(findAlbum.title, findAlbum.id, findAlbum.year, findAlbum.tracks, findAlbum.image, !findAlbum.favourite, findAlbum.timeNow)
    }

    const updateAlbum = (title, id, year, tracks, image, favourite, timeNow) => {
        const newAlbum = albums.map((album) =>
            album.id === id ? { title, id, year, tracks, image, favourite, timeNow } : album
        )
        setAlbums(newAlbum);
    }

    const handleAlbumDelete = ({ id }) => {
        setAlbums(albums.filter((album) => album.id !== id));
    }
  
    return { albums, listLayout, handleAlbumEdit, handleAlbumDelete };
}

export default ListLogic;