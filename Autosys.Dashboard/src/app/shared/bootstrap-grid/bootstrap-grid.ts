import { ViewChild, ElementRef, AfterViewInit, Component } from '@angular/core';

declare var jQuery: any;
declare var $table: any;
declare var $alertBtn: any;
declare var full_screen: any;
declare var window_height: any;
declare var table_height: any;

@Component({
    selector: 'my-table',
    templateUrl: '/src/app/shared/bootstrap-grid/full-screen-table.html'
})
export class MyTable implements AfterViewInit {

    name = "MyTable";

    @ViewChild('table') input: ElementRef;

    ngAfterViewInit() {
        $table = $('#fresh-table');
        $alertBtn = $('#alertBtn');
         full_screen = false;
         window_height = <any>0;
        window_height = $(window).height();
        table_height = window_height - 20;


        $table.bootstrapTable({
            toolbar: ".toolbar",

            showRefresh: true,
            search: true,
            showToggle: true,
            showColumns: true,
            pagination: true,
            striped: true,
            sortable: true,
            height: table_height,
            pageSize: 25,
            pageList: [25, 50, 100],

            formatShowingRows: function (pageFrom: any, pageTo: any, totalRows: any) {
                //do nothing here, we don't want to show the text "showing x of y from..." 
            },
            formatRecordsPerPage: function (pageNumber: any) {
                return pageNumber + " rows visible";
            },
            icons: {
                refresh: 'fa fa-refresh',
                toggle: 'fa fa-th-list',
                columns: 'fa fa-columns',
                detailOpen: 'fa fa-plus-circle',
                detailClose: 'fa fa-minus-circle'
            }
        });

        (<any>window).operateEvents = {
            'click .like': function (e: any, value: any, row: any, index: any) {
                alert('You click like icon, row: ' + JSON.stringify(row));
                console.log(value, row, index);
            },
            'click .edit': function (e: any, value: any, row: any, index: any) {
                alert('You click edit icon, row: ' + JSON.stringify(row));
                console.log(value, row, index);
            },
            'click .remove': function (e: any, value: any, row: any, index: any) {
                $table.bootstrapTable('remove', {
                    field: 'id',
                    values: [row.id]
                });

            }
        };

        $alertBtn.click(function () {
            alert("You pressed on Alert");
        });


        $(window).resize(function () {
            $table.bootstrapTable('resetView');
        });
        jQuery(this.input.nativeElement).datepicker();
    }

    operateFormatter(value: any, row: any, index: any) {
    return [
        '<a rel="tooltip" title="Like" class="table-action like" href="javascript:void(0)" title="Like">',
        '<i class="fa fa-heart"></i>',
        '</a>',
        '<a rel="tooltip" title="Edit" class="table-action edit" href="javascript:void(0)" title="Edit">',
        '<i class="fa fa-edit"></i>',
        '</a>',
        '<a rel="tooltip" title="Remove" class="table-action remove" href="javascript:void(0)" title="Remove">',
        '<i class="fa fa-remove"></i>',
        '</a>'
    ].join('');
}
}