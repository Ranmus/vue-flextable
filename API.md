# Named slots
title - title of table
nodata - no data information
row - template for row rendering
  props:
    data.xxx
    size
    device
    isMobile
    isPhone
    isTablet
heading-row = template for heading row rendering
  props:
    size
    device
    isMobile
    isPhone
    isTablet
    sortBy - method for sorting

# Options
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