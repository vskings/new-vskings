import React from 'react';

const Table = () => {
  return (
    <div className=" w-full py-4 px-6 mx-auto mb-12 rounded-md border overflow-x-auto border-secondary2-500">
      <table className="table-auto w-full overflow-x-auto">
        <thead className=" border-b-2 ">
          <tr>
            <th className="text-left py-4 web-sub1 text-grey-500 dark:text-white">
              Game
            </th>
            <th className="text-left py-4 web-sub1 text-grey-500 dark:text-white">
              Players
            </th>
            <th className="text-left py-4 web-sub1 text-grey-500 dark:text-white">
              Bet amount
            </th>
            <th className="text-left py-4 web-sub1 text-grey-500 dark:text-white">
              Multiplier
            </th>
            <th className="text-left py-4 web-sub1 text-grey-500 dark:text-white">
              Profit
            </th>
            <th className="text-left py-4 web-sub1 text-grey-500 dark:text-white"></th>
          </tr>
        </thead>
        <tbody className="p-10">
          <tr>
            <td className="py-4  web-p4 text-grey-500 dark:text-white">
              Call of duty
            </td>
            <td className="py-4 web-p4 text-secondary2-500 italic">@Gameboy</td>
            <td className="py-4  web-p4 text-grey-500 dark:text-white">$200</td>
            <td className="py-4  web-p4 text-grey-500 dark:text-white">2x</td>
            <td className="py-4  web-p4 text-grey-500 dark:text-white">$400</td>
            <td className="py-4  web-p4 text-grey-500 dark:text-white">
              {' '}
              <a href="/">bet</a>
            </td>
          </tr>
          <tr>
            <td className="py-4  web-p4 text-grey-500 dark:text-white">
              Call of duty
            </td>
            <td className="py-4 web-p4 text-secondary2-500 italic">@Gameboy</td>
            <td className="py-4  web-p4 text-grey-500 dark:text-white">$200</td>
            <td className="py-4  web-p4 text-grey-500 dark:text-white">2x</td>
            <td className="py-4  web-p4 text-grey-500 dark:text-white">$400</td>
            <td className="py-4  web-p4 text-grey-500 dark:text-white">
              {' '}
              <a href="/">bet</a>
            </td>
          </tr>
          <tr>
            <td className="py-4  web-p4 text-grey-500 dark:text-white">
              Call of duty
            </td>
            <td className="py-4 web-p4 text-secondary2-500 italic">@Gameboy</td>
            <td className="py-4  web-p4 text-grey-500 dark:text-white">$200</td>
            <td className="py-4  web-p4 text-grey-500 dark:text-white">2x</td>
            <td className="py-4  web-p4 text-grey-500 dark:text-white">$400</td>
            <td className="py-4  web-p4 text-grey-500 dark:text-white">
              {' '}
              <a href="/">bet</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
