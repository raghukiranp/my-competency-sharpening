import React from 'react';

const PeopleList = ({people}) => (
    <ul className="list-group">
        {
            people.map(person => <li>{person.name}</li>)
        }
    </ul>
);

export default PeopleList;