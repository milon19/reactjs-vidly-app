import React, { Component } from "react";
import TableHead from "./tableHead";
import TableBody from "./tableBody";

class Table extends Component {
  render() {
    const { columns, data, sortColumn, onSort } = this.props;
    return (
      <table className="table">
        <TableHead columns={columns} sortColumn={sortColumn} onSort={onSort} />
        <TableBody data={data} columns={columns} />
      </table>
    );
  }
}

export default Table;
