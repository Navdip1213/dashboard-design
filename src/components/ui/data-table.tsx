import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "./button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { Input } from "./input";
import { useEffect, useState } from "react";
import {
  SquarePen,
  Trash2,
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
} from "lucide-react";

export type TableProps<T> = {
  data: T[];
  btn?: string;
  columns: any;
  search?: boolean;
  className?: string;
  pagination?: boolean;
  handleBtn?: () => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
};

export function DataTable<T>({
  data,
  columns,
  onEdit,
  onDelete,
  btn = "",
  className,
  handleBtn,
  search = true,
  pagination = true,
}: TableProps<T>) {
  const [row, setRow] = useState(null);
  const [open, setOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const sortableColumns = columns.filter((col: any) => col.sort);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  useEffect(() => {
    setPageIndex(pageIndex);
  }, [row, table]);

  const handleSort = (columnId: string) => {
    const isSortedDesc = sorting.some(
      (sort) => sort.id === columnId && sort.desc
    );

    setSorting([
      {
        id: columnId,
        desc: !isSortedDesc,
      },
    ]);
  };

  return (
    <div className="w-full">
      {search && (
        <div className="flex items-center justify-between pb-4 gap-5">
          <Input
            type="text"
            placeholder="Filter..."
            value={
              (table
                .getColumn(columns[0].accessorKey)
                ?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table
                .getColumn(columns[0].accessorKey)
                ?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          {btn && <Button onClick={handleBtn}>{btn}</Button>}
        </div>
      )}
      <div className={`border ${className ? className : ""}`}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    style={{
                      width: (header.column.columnDef as any).width,
                    }}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className="flex items-center cursor-pointer"
                        onClick={() =>
                          sortableColumns.some(
                            (col: any) => col.accessorKey === header.id
                          ) && handleSort(header.id)
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {sortableColumns.some(
                          (col: any) => col.accessorKey === header.id
                        ) && (
                          <>
                            {sorting.some(
                              (sort) => sort.id === header.id && sort.desc
                            ) ? (
                              <Button>
                                <ArrowDownNarrowWide size={16} />
                              </Button>
                            ) : (
                              <ArrowUpNarrowWide size={16} />
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return cell?.column?.id === "actions" ? (
                      <TableCell key={cell.id}>
                        <Button
                          variant="secondary"
                          className="bg-transparent hover:bg-transparent"
                          size="icon"
                        >
                          <SquarePen size={20} />
                        </Button>
                        <Button
                          variant="secondary"
                          className="bg-transparent hover:bg-transparent"
                          size="icon"
                        >
                          <Trash2 size={20} />
                        </Button>
                      </TableCell>
                    ) : cell?.column?.id === "icon" ? (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ) : (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length + 1}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {pagination && (
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="space-x-2">
            <Button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      )}
      {/* <DeleteModel
        open={open}
        onDelete={() => {
          setRow(null);
          onDelete(row);
          setOpen(false);
          table?.setPageIndex(pageIndex);
        }}
        onCancel={() => setOpen(false)}
      /> */}
    </div>
  );
}
