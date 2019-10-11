import React from 'react';
import './ListItem.css';
// import danAbramovImage from '../../../assets/images/danabramov.jpg';
const ListItem = ({
    name,
    description,
    image,
    twitterLink
}) => (
        <li className="listItem__wrapper">
            <img
                src={image} alt={name}
                className="listItem__image"
            />
            <div>
                <h2 className="listItem__name">{name}</h2>
                <p className="listItem__description">{description}</p>
                <a className="listItem__button" href={twitterLink}>visit twitter page</a>
            </div>
        </li>
    );
export default ListItem;