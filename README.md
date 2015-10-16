## Installation

1. git clone https://github.com/jamesfwz/demosite.git
2. cd demosite
3. bundle
4. rake db:create
5. rake db:migrate
6. rake db:seed
7. rails s

## Description:

There is a datatable to show:
  1.  300 rows x 20 columns json data
  2.  With date/string/numeric formatted from the json data

For each row in the datatable:
  1.  Double click to expand the row (i.e., show a sub datatable under the row).
  2.  The sub-datatable shows:
  + Random rows x 20 columns json data
  + With date/string/numeric format

The performance is critical
  1.  The loading of the table should be less than 1s
  2.  The expansion of rows should not have visible blinking

Other optional functionalities
  1.  Resizable columns
  2.  Searchable columns