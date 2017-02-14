@ Column definition
name (string) - key in json
label (string) - label for column
sortable (bool) - is column sortable? (default: true)
sortBy (string/function) - Sort definition. By path string like 'json.leaf.subleaf', function that will be used in array.sort. Arguments: prev, next, rootPrev, rootNext. Result will be multipled by sorting negator (1 for asc, -1 for desc).



# Options
multiSort (bool) - enable/disable sorting by multiple columns
url - url for data source
source - plain data source
side - server or client side
limit - current limit of items per page
limits - limits per pages to available to choose
searchable - array of named searchable columns
screen-sizes - definitions of screen sizes
:screen-sizes=`{
  'small': 'only screen and (max-width: 600px)'
}`