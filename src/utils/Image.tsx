import React from 'react';

interface Props {
    filename: string
}
const Image= ({filename}:Props) => {

    const imageUrl = `../assets/img/${filename}`;
    return (
        <div className='main__image'>
            <img src={imageUrl} alt="Изображение"/>
        </div>
    );
};

export default Image;