import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip } from "@mui/material";

const rows = [
  {
    id: 0,
    amount: 10,
    date: new Date().toLocaleDateString("de-DE"),
    person: "Friedrich",
    purpose: "Kebab",
    lent: false
  },
  {
    id: 1,
    amount: 53,
    date: new Date().toLocaleDateString("de-DE"),
    person: "Philipp",
    purpose: "Kino",
    lent: true
  },
  {
    id: 2,
    amount: 35,
    date: new Date().toLocaleDateString("de-DE"),
    person: "Friedrich",
    purpose: "Kebab",
    lent: false
  },
  {
    id: 3,
    amount: 53,
    date: new Date().toLocaleDateString("de-DE"),
    person: "Friedrich",
    purpose: "Kebab",
    lent: true
  },
  {
    id: 4,
    amount: 26,
    date: new Date().toLocaleDateString("de-DE"),
    person: "Friedrich",
    purpose: "Kebab",
    lent: false
  },
  {
    id: 5,
    amount: 29,
    date: new Date().toLocaleDateString("de-DE"),
    person: "Friedrich",
    purpose: "Kebab",
    lent: true
  },
  {
    id: 6,
    amount: 8,
    date: new Date().toLocaleDateString("de-DE"),
    person: "Friedrich",
    purpose: "Kebab",
    lent: false
  }
];

function DebtTable() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Person</TableCell>
              <TableCell>Purpose</TableCell>
              <TableCell>asdf</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.person}</TableCell>
                <TableCell>{row.purpose}</TableCell>
                {row.lent ? (
                  <TableCell>
                    <Chip label="Lent" color="primary" />
                  </TableCell>
                ) : (
                  <TableCell>
                    <Chip label="Borrowed" color="error" />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DebtTable;
