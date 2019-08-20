import React, { Component } from "react";

class InvoiceList extends Component {
  state = {
    invoices: []
  };

  async componentDidMount() {
    const invoices = await this.loadInvoiceData();
    console.log("INVOICES:", invoices);
    this.setState({
      invoices
    });
  }

  loadInvoiceData = async () => {
    const url = "http://localhost:3000/invoice";
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
    console.log(`INVOICE #${invoice_number} APPROVED`);
    const invoices = await this.loadInvoiceData();
    console.log("INVOICES:", invoices);
    this.setState({
      invoices
    });
  };

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>Invoice Number</td>
            <td>Vendor Name</td>
            <td>Vendor Address</td>
            <td>Invoice Total</td>
            <td>Invoice Date</td>
            <td>Due Date</td>
            <td>Action</td>
          </tr>
          {this.state.invoices.map((invoice, index) => {
            return (
              <tr key={`${index}`}>
                <td>{invoice.invoice_number}</td>
                <td>{invoice.vendor_name}</td>
                <td>{invoice.remittance_address}</td>
                <td>{invoice.total}</td>
                <td>{this.trimDate(invoice.invoice_date)}</td>
                <td>{this.trimDate(invoice.due_date)}</td>
                <td>
                  <button
                    onClick={() => this.approveInvoice(invoice.invoice_number)}
                  >
                    Approve
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
