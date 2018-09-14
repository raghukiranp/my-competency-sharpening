import React from 'react';
import { List, Datagrid, TextField, DateField } from 'react-admin';

export const DeviceList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField label="Alias" source="alias_name" />
            <TextField label="Device Name" source="device_name" />
            <TextField label="Group" source="device_type" />
            <TextField label="Location" source="location" />
            <TextField label="Signal" source="rssi" />
            <DateField label="Last Seen" source="feed_data[0].alarms[0].acknowledgements[0].note" />
        </Datagrid>
    </List>
);