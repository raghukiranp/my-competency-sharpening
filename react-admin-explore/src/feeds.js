import React from 'react';
import { List, Datagrid, EmailField, TextField, DateField, ReferenceField, FunctionField  } from 'react-admin';
import Moment from 'react-moment';

export const FeedsList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <ReferenceField label="Device Name" source="device.id" reference="devices">
                <TextField source="alias_name" />
            </ReferenceField>
            <TextField label="Feed"  source="name" />
            <TextField label="Criticality" source="health" />
            <ReferenceField label="Last Feed" source="device.id" reference="devices">
                <FunctionField render={function render(record) { return ( <Moment unix fromNow>{parseInt(record.last_seen)}</Moment>);}} />
            </ReferenceField>
            <TextField label="Ack State" source="" />
        </Datagrid>
    </List>
);