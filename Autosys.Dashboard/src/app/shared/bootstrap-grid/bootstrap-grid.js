"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MyTable = (function () {
    function MyTable() {
        this.name = "MyTable";
    }
    MyTable.prototype.ngAfterViewInit = function () {
        $table = $('#fresh-table');
        $alertBtn = $('#alertBtn');
        full_screen = false;
        window_height = 0;
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
            formatShowingRows: function (pageFrom, pageTo, totalRows) {
                //do nothing here, we don't want to show the text "showing x of y from..." 
            },
            formatRecordsPerPage: function (pageNumber) {
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
        window.operateEvents = {
            'click .like': function (e, value, row, index) {
                alert('You click like icon, row: ' + JSON.stringify(row));
                console.log(value, row, index);
            },
            'click .edit': function (e, value, row, index) {
                alert('You click edit icon, row: ' + JSON.stringify(row));
                console.log(value, row, index);
            },
            'click .remove': function (e, value, row, index) {
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
    };
    MyTable.prototype.operateFormatter = function (value, row, index) {
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
    };
    return MyTable;
}());
__decorate([
    core_1.ViewChild('table'),
    __metadata("design:type", core_1.ElementRef)
], MyTable.prototype, "input", void 0);
MyTable = __decorate([
    core_1.Component({
        selector: 'my-table',
        templateUrl: '/src/app/shared/bootstrap-grid/full-screen-table.html'
    })
], MyTable);
exports.MyTable = MyTable;
//# sourceMappingURL=bootstrap-grid.js.map