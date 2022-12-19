import React from 'react';
import Record from './records.json'
import Button from './Button';

const TableRowData = () => {
    return (
        <>
            {
                Record.map((records, index) => (
                    <tr key={index} class="bg-white border-b">
                        <td class="px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                            <td>
                                {
                                    records.flightOffer.map((getFlightoffer, index) => (
                                        <tr key={index}>
                                            {
                                                getFlightoffer.itineraries.map((getIntineraries, index) => (
                                                    <tr key={index}>
                                                        {
                                                            getIntineraries.segments.map((getSegments, index) => (
                                                                <tr key={index}>
                                                                    {getSegments.marketingCarrier}
                                                                </tr>
                                                            ))
                                                        }
                                                    </tr>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </td>
                            <td>
                                {
                                    records.flightOffer.map((getFlightoffer, index) => (
                                        <tr key={index}>
                                            {
                                                getFlightoffer.itineraries.map((getIntineraries, index) => (
                                                    <tr key={index}>
                                                        {
                                                            getIntineraries.segments.map((getSegments, index) => (
                                                                <tr key={index}>
                                                                    {getSegments.aircraft}
                                                                </tr>
                                                            ))
                                                        }
                                                    </tr>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </td>
                        </td>
                        <td class="px-6 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                            {
                                records.flightOffer.map((getFlightoffer, index) => (
                                    <tr key={index}>
                                        {
                                            getFlightoffer.itineraries.map((getIntineraries, index) => (
                                                <tr key={index}>
                                                    {
                                                        getIntineraries.segments.map((getSegments, index) => (
                                                            <tr key={index}>
                                                                {getSegments.flightNumber}
                                                            </tr>
                                                        ))
                                                    }
                                                </tr>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </td>
                        <td class="px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                            {
                                records.flightOffer.map((getFlightoffer, index) => (
                                    <tr key={index}>
                                        {
                                            getFlightoffer.class.map((getClass, index) => (
                                                <tr key={index}>
                                                    {
                                                        getClass.map((classes, index) => (
                                                            <tr key={index}>
                                                                {classes}
                                                            </tr>
                                                        ))
                                                    }
                                                </tr>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </td>
                        <td class="px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                            {
                                records.flightOffer.map((getFlightoffer, index) => (
                                    <tr key={index}>
                                        {
                                            getFlightoffer.fareBasis.map((getFareBasis, index) => (
                                                <tr key={index}>
                                                    {
                                                        getFareBasis.map((fareBasises, index) => (
                                                            <tr key={index}>
                                                                {fareBasises}
                                                            </tr>
                                                        ))
                                                    }
                                                </tr>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </td>
                        <td class="px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                            <td>
                                {
                                    records.flightOffer.map((getFlightoffer, index) => (
                                        <tr key={index}>
                                            {
                                                getFlightoffer.itineraries.map((getIntineraries, index) => (
                                                    <tr key={index}>
                                                        {
                                                            getIntineraries.segments.map((getSegments, index) => (
                                                                <tr key={index}>
                                                                    {
                                                                        getSegments.departure.iataCode + " -"
                                                                    }
                                                                </tr>
                                                            ))
                                                        }
                                                    </tr>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </td>
                            <td>
                                {
                                    records.flightOffer.map((getFlightoffer, index) => (
                                        <tr key={index}>
                                            {
                                                getFlightoffer.itineraries.map((getIntineraries, index) => (
                                                    <tr key={index}>
                                                        {
                                                            getIntineraries.segments.map((getSegments, index) => (
                                                                <tr key={index}>
                                                                    {
                                                                        getSegments.arrival.iataCode
                                                                    }
                                                                </tr>
                                                            ))
                                                        }
                                                    </tr>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </td>
                        </td>
                        <td class="px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                            {
                                records.flightOffer.map((getFlightoffer, index) => (
                                    <tr key={index}>
                                        {
                                            getFlightoffer.itineraries.map((getIntineraries, index) => (
                                                <tr key={index}>
                                                    {
                                                        getIntineraries.segments.map((getSegments, index) => (
                                                            <tr key={index}>
                                                                {
                                                                    getSegments.departure.at
                                                                }
                                                            </tr>
                                                        ))
                                                    }
                                                </tr>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </td>
                        <td class="px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                            {
                                records.flightOffer.map((getFlightoffer, index) => (
                                    <tr key={index}>
                                        {
                                            getFlightoffer.itineraries.map((getIntineraries, index) => (
                                                <tr key={index}>
                                                    {
                                                        getIntineraries.segments.map((getSegments, index) => (
                                                            <tr key={index}>
                                                                {
                                                                    getSegments.arrival.at
                                                                }
                                                            </tr>
                                                        ))
                                                    }
                                                </tr>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </td>
                        <td class="px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                            {
                                records.flightOffer.map((getFlightoffer, index) => (
                                    <tr key={index}>
                                        {
                                            getFlightoffer.itineraries.map((getIntineraries, index) => (
                                                <tr key={index}>
                                                    {
                                                        getIntineraries.duration
                                                    }
                                                </tr>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </td>
                        <td class="px-6 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                            {
                                records.flightOffer.map((getFlightoffer, index) => (
                                    <tr key={index}>
                                        {
                                            getFlightoffer.price
                                        }
                                        <Button />
                                    </tr>
                                ))
                            }
                        </td>
                    </tr>
                    //  console.log(records, index)
                ))

            }

        </>
    )
}

export default TableRowData