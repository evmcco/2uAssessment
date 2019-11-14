create table invoices
(
  invoice_number integer primary key,
  total numeric(9,2),
  currency varchar(3),
  due_date date,
  vendor_name varchar(200),
  remittance_address varchar(200),
  status varchar(20)
);

