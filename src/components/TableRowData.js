import React from 'react';
import Records from './records.json';
import Button from './Button';

const TableMessage = ({ collectMessage }) => {
    return (
        <div>
            {
                Records.map((records)=>{
                    return(records.message)
                })
            }
        </div>
    )
}

const TableRowData = () => {
    return (
        <>
            {
                Records.map((records) => {
                    return (
                        records.flightOffer.map((getFlightoffer) => {
                            return (
                                getFlightoffer.itineraries.map((getIntineraries, index) => {
                                    return (
                                        <tr key={index} className=' hover:bg-gray-200 even:bg-gray-200 odd:bg-white'>
                                            <td>
                                                {
                                                    getIntineraries.segments.map((getSegments, index) => (
                                                        <div key={index}>
                                                            {`${getSegments.carrierCode} ${getSegments.aircraft}`}
                                                        </div>
                                                    ))
                                                }
                                            </td>
                                            <td>
                                                {
                                                    getIntineraries.segments.map((getSegments, index) => (
                                                        <div key={index}>
                                                            {getSegments.flightNumber}
                                                        </div>
                                                    ))
                                                }
                                            </td>
                                            <td>
                                                {
                                                    getFlightoffer.class.map((getClass) => (
                                                        getClass.map((classes, index) => (
                                                            <div key={index}>{classes}</div>
                                                        ))
                                                    ))
                                                }
                                            </td>
                                            <td>
                                                {
                                                    getFlightoffer.fareBasis.map((getFare) => (
                                                        getFare.map((fareBasises, index) => (
                                                            <div key={index}>{fareBasises}</div>
                                                        ))
                                                    ))
                                                }
                                            </td>
                                            <td>
                                                {
                                                    getIntineraries.segments.map((getSegments,index) => (
                                                        <div key={index}>
                                                            {`${getSegments.departure.iataCode} - ${getSegments.arrival.iataCode}`}
                                                        </div>
                                                    ))
                                                }
                                            </td>
                                            <td>
                                                {
                                                    getIntineraries.segments.map((getSegments, index) => (
                                                        <div key={index}>
                                                            {getSegments.departure.at}
                                                        </div>
                                                    ))
                                                }
                                            </td>
                                            <td>
                                                {
                                                    getIntineraries.segments.map((getSegments, index) => (
                                                        <div key={index}>
                                                            {getSegments.arrival.at}
                                                        </div>
                                                    ))
                                                }
                                            </td>
                                            <td className="align-top p-1">
                                                {getIntineraries.duration}
                                            </td>
                                            <td>
                                                {getFlightoffer.price}
                                                <Button/>
                                            </td>
                                        </tr>
                                    )
                                })
                            )
                        })
                    )
                    // print the nested record
                    // console.log(records)
                })
            }
        </>
    )
}

export default TableRowData;

