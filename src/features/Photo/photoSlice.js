import { createSlice } from "@reduxjs/toolkit";

const initialPhotos = [
    {
        id: 1,
        categoryId: 1,
        photoUrl: 'https://picsum.photos/300/300?random=1',
        title: 'Lorem ipsum dolor sit'
    },
    {
        id: 2,
        categoryId: 2,
        photoUrl: 'https://picsum.photos/300/300?random=2',
        title: 'amet consectetur adipisicing elit'
    },
    {
        id: 3,
        categoryId: 3,
        photoUrl: 'https://picsum.photos/300/300?random=3',
        title: 'Saepe possimus quae quis dolorum explicabo vel'
    },
    {
        id: 4,
        categoryId: 4,
        photoUrl: 'https://picsum.photos/300/300?random=4',
        title: 'odit facilis porro magnam nostrum'
    },
    {
        id: 5,
        categoryId: 5,
        photoUrl: 'https://picsum.photos/300/300?random=5',
        title: 'fuga fugit obcaecati'
    },
    {
        id: 6,
        categoryId: 1,
        photoUrl: 'https://picsum.photos/300/300?random=6',
        title: 'Deserunt sequi quibusdam'
    },
    {
        id: 7,
        categoryId: 3,
        photoUrl: 'https://picsum.photos/300/300?random=7',
        title: 'dicta voluptatem totam nulla!'
    },
    {
        id: 8,
        categoryId: 3,
        photoUrl: 'https://picsum.photos/300/300?random=8',
        title: 'nobis quasi iste explicabo commodi accusantium a laudantium reprehenderit nisi excepturi.'
    },
    {
        id: 9,
        categoryId: 1,
        photoUrl: 'https://picsum.photos/300/300?random=9',
        title: 'consequuntur vitae sed eveniet saepe eaque'
    },
    {
        id: 10,
        categoryId: 2,
        photoUrl: 'https://picsum.photos/300/300?random=10',
        title: 'quae ex praesentium'
    },
    {
        id: 11,
        categoryId: 1,
        photoUrl: 'https://picsum.photos/300/300?random=11',
        title: 'Quisquam pariatur'
    },
]

const photo = createSlice({
    name: 'photos',
    initialState: initialPhotos,
    reducers: {
        addPhoto: (state, action) => {
            const newPhoto = action.payload;
            state.push(newPhoto);
        },
        // editPhoto: (state, action) => {
        //     const newPhoto = action.payload;
        //     state = [...state ];
        // },
        removePhoto: (state, action) => {
            const idPhoto = action.payload;
            console.log(idPhoto, action.payload, (action.payload !== idPhoto));
            return state.filter((photo) => photo.id !== idPhoto);
        }
    }
});


const { reducer, actions } = photo;

export const { addPhoto, removePhoto } = actions;
export default reducer;