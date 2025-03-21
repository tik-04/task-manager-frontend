import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["TaskName","Description", "Status", "Due date", "submitDate",];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Managerlawndiawhfpoajwdfpoawjfpoawjfwaoiidawf",
    status:"compledt",
    date: "23/04/18",
    submitDate: "23/4/25"
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    status:"compledt",
    date: "23/04/18",
    submitDate: "23/4/25"
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    status:"compledt",
    date: "23/04/18",
    submitDate: "23/4/25"
  },
  {
    name: "Michael Levi",
    job: "Developer",
    status:"compledt",
    date: "23/04/18",
    submitDate: "23/4/25"
  },
  {
    name: "Richard Gran",
    job: "Manager",
    status:"compledt",
    date: "23/04/18",
    submitDate: "23/4/25"
  },
];

const Table = ({ historyTask }) => {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((e, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={e.name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {e.name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal w-24 overflow-scroll"
                  >
                    {e.job}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {e.status}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {e.date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {e.submitDate}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default Table;
