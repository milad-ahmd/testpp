import {NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder} from "ng-zorro-antd/table";
import {DataItem} from "./DataItem";

export class ColumnItem{
  name: string | any;
  sortOrder: NzTableSortOrder | any;
  sortFn: NzTableSortFn<DataItem> | any;
  listOfFilter: NzTableFilterList | any;
  filterFn: NzTableFilterFn<DataItem> | any;
  filterMultiple: boolean | any;
  sortDirections: NzTableSortOrder[] | any;
}
