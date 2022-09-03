import React from 'react'

export default function Row({ e }) {
    return (
            <tr className="bg-gray-800  hover:bg-gray-900 text-gray-300 dark:text-gray-400">
                <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                        <div>
                            <p className="font-semibold">{e?.buyername}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div>
                        <h2>{e?.address}</h2>
                    </div>
                </td>
                <td className="px-4 py-3 text-sm">{e?.total}</td>
              
                <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight  rounded-full bg-green-900"> {e.deliver?"true":"false"} </span>
                </td>
                <td className="px-4 py-3 text-sm">{e?.date}</td>
            </tr>
    )
}
