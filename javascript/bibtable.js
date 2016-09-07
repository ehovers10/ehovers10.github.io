$(document).ready( function() {
  $('.qs_table').DataTable( {
    responsive: {
      details: {
        display: $.fn.dataTable.Responsive.display.childRow,
        type: 'inline'
      }
    },
    columnDefs: [
      {
        className: 'expand',
        orderable: false,
        targets:   0
      }
    ],
    aaSorting: [
      [2,'desc']
    ]
  });
});
