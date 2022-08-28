import React from 'react'

export default function Order() {
    return (
        <div className="mx-3 ml-[18%] pt-[7%]">
            <div className="w-full overflow-hidden rounded-lg shadow-xs mt-16">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-700  text-gray-400 bg-gray-800">
                                <th className="px-4 py-3">Client</th>
                                <th className="px-4 py-3">Address</th>
                                <th className="px-4 py-3">Amount</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Contact Number</th>
                            </tr>
                        </thead>
                        <tbody className="divide-gray-700 bg-gray-800">
                            <tr className="bg-gray-800  hover:bg-gray-900 text-gray-300 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Hans Burger</p>
                                            <p className="text-xs text-gray-400">10x Developer</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <h2>Radha Kunj Colony </h2>
                                        <h3>Maheshwar {451224}</h3>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm">$855.85</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight  rounded-full bg-green-700 text-green-100"> Approved </span>
                                </td>
                                <td className="px-4 py-3 text-sm">{9926493691}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
