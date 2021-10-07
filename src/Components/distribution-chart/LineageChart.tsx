import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import * as d3 from 'd3';


const colours = [
    "#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600"
];


function tooltipFormatter(value: number, name: string, props: any) {
    return value.toFixed(2);
}


function tooltipLabelFormatter(label: any) {
    return !!label ? <strong>{new Date(label).toISOString().slice(0, 7)}</strong> : <></>;
}


interface IProps {
    data: any;
}


function LineageChart(props: IProps) {
    const { data } = props;
    const lineages = Object.keys(data[0]).filter(key => key !== "date");
    const dates = data.map((d: any) => d.date);

    const margin = {
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
    };
    const legendMargin = {
        top: 0,
        right: 10,
        left: 10,
        bottom: 0,
    };
    const legendWrapperStyle = {
        paddingLeft: "1em"
    };

    return (
        <ResponsiveContainer width="100%" aspect={1.8}>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={d3.timeFormat('%y-%b')} />
                <YAxis domain={[0, 1]} ticks={[0, 0.25, 0.5, 0.75, 1]} />
                <Tooltip formatter={tooltipFormatter} labelFormatter={tooltipLabelFormatter} />
                <Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={legendWrapperStyle} iconType="circle" />
                {lineages.map((lineage: string, idx: number) => (<Area key={lineage} type="monotone" dataKey={lineage} stackId="1" stroke={colours[idx % colours.length]} fill={colours[idx % colours.length]} />))}
            </AreaChart>
        </ResponsiveContainer>
    );
}


export default LineageChart;
