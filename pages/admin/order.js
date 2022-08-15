import React from 'react'

export default function order() {
    return (
        <div class="mx-3 ml-[18%] pt-[7%]">
            <div class="w-full overflow-hidden rounded-lg shadow-xs">
                <div class="w-full overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="text-xs font-semibold tracking-wide text-left uppercase border-b border-gray-700  text-gray-400 bg-gray-800">
                                <th class="px-4 py-3">Client</th>
                                <th class="px-4 py-3">Address</th>
                                <th class="px-4 py-3">Amount</th>
                                <th class="px-4 py-3">Status</th>
                                <th class="px-4 py-3">Contact Number</th>
                            </tr>
                        </thead>
                        <tbody class="divide-gray-700 bg-gray-800">
                            <tr class="bg-gray-800  hover:bg-gray-900 text-gray-300 dark:text-gray-400">
                                <td class="px-4 py-3">
                                    <div class="flex items-center text-sm">
                                        <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                        </div>
                                        <div>
                                            <p class="font-semibold">Hans Burger</p>
                                            <p class="text-xs text-gray-400">10x Developer</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <h2>Radha Kunj Colony </h2>
                                        <h3>Maheshwar {451224}</h3>
                                    </div>
                                </td>
                                <td class="px-4 py-3 text-sm">$855.85</td>
                                <td class="px-4 py-3 text-xs">
                                    <span class="px-2 py-1 font-semibold leading-tight  rounded-full bg-green-700 text-green-100"> Approved </span>
                                </td>
                                <td class="px-4 py-3 text-sm">{9926493691}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
