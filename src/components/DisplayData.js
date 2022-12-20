import React from 'react';
import TableRowData from './TableRowData';
// import TableMessage from './TableRowData';

const DisplayData = () => {

    // const[message, setMessage]= useState('');
    // const messageDisplay = () => {
    //     Records.map((records) => (
    //         message(records.message)
    //     ))
    //     setMessage(message);
    //     console.log(message);
    // };
    return (
        <div className='max-w-[1240px] mx-auto'>
            <h1 className='font-semibold'> </h1>
            <br />
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-1 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden ">
                            <table class="min-w-full">
                                <thead class="border-b bg-gray-200">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-center">
                                            Flight
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-center">
                                            AIRCRAFT
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-center">
                                            CLASS
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-center">
                                            FARE
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-center">
                                            ROUTE
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-center">
                                            DEPARTURE
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-center">
                                            ARRIVAL
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-center">
                                            DURATION
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-center">
                                            PRICE
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-[#f90303] text-center'>
                                    <TableRowData/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayData