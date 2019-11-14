insert into invoices
  (invoice_number, total, currency, invoice_date, due_date, vendor_name, remittance_address, status)
values
  (54321, 199.99, 'USD', '2019-08-17', '2019-09-17', 'Acme Cleaners Inc', '123 ABC St Charlotte, NC 28209', 'Pending'),
  (54322, 9999.99, "USD", "2019-08-20", "2019-09-20", "Scooters Laundromat", "729 Timberland St, Smyrna GA 30080", "Pending"),
  --wrong quotes
  (54323, 59.99, 'USD', '2019-08-21', '2019-09-21', 'Coin-O-Matic Services', '612 Wharf Avenue, Atlantic City NJ 10098', 'Pending'),
  (54324, 1000, 'GBP', '2019-08-10', '2019-09-10', 'British Cleanours', '1 Wharby St, London UK 34598-2345', 'Approved')