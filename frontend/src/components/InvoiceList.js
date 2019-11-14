import React, { Component } from "react";

class InvoiceList extends Component {
  state = {
    invoices: []
  };

  async componentDidMount() {
    const invoices = await this.loadInvoiceData();
    this.setState({
      invoices
    });

    setInterval(async () => {
      const invoices = await this.loadInvoiceData();
      this.setState({
        invoices
      });
    }, 5000);
  }

  loadInvoiceData = async () => {
    const url = "http://localhost:4000/invoice";
    const response = await fetch(url, {
      method: "get"
    });
    const data = response.json();
    return data;
  };

  trimDate = date => {
    date = date.split("T")[0];
    return date;
  };

  approveInvoice = async invoice_number => {
    const url = `http://localhost:3000/invoice/${invoice_number}`;
    const response = await fetch(url, {
      method: "put"
    });
    const invoices = await this.loadInvoiceData();
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Vendor Name</th>
            <th>Vendor Address</th>
            <th>Invoice Total</th>
            <th>Invoice Date</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.invoices.map((invoice, index) => {
            return (
              <tr key={`${index}`}>
                <td>{invoice.invoice_number}</td>
                <td>{invoice.vendor_name}</td>
                <td>{invoice.remittance_address}</td>
                <td>{invoice.total}</td>
                <td>{trimDate(invoice.invoice_date)}</td>
                <td>{trimDate(invoice.due_date)}</td>
                <td>
                  <button
                    class="approve-button"
                    onClick={() => this.approveInvoice(invoice.invoice_number)}
                  >
                    <b>Approve</b>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default InvoiceList;
