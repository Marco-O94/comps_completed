import Table from './Table';

export default function SortableTable(props) {
    // Get config from props
    const { config } = props;
    // mapping through the config array, if I find sortValue then create button.
    const updatedConfig = config.map((column) => {
        if(!column.sortValue) { return column; }
        return {
            ...column,
            header: () => <th>{column.label}</th>
        }
    });
       
    return <Table {...props} config={updatedConfig} />;
}