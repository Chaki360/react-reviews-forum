import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Bar } from 'recharts';
import Charts from '../../../Charts/Charts';



const Dashboard = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <section className='flex container'>
            <div className='flex-1 lg:flex-auto lg:w-6/12 flex flex-col justify-center h-[70vh] items-center'>
                <BarChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="MediumSpringGreen" />
                    <Bar dataKey="revenue" fill="MediumPurple" />
                    <Bar dataKey="sell" fill="#4B0082" />

                </BarChart>
            </div>
            <div className='flex-1 lg:flex-auto lg:w-6/12 flex flex-col justify-center h-[70vh] items-center'>
                <Charts></Charts>
            </div>

        </section>
    );

};
export default Dashboard;