"use client";
import CreateCategory from "@/components/Category/CreateCategory";
import { DataTable } from "@/components/ui/data-table";
import { CircleUser } from "lucide-react";
import React, { useState } from "react";

const data = [
  {
    title: "Category 1",
    desc: "Description 1",
    icon: CircleUser,
  },
  {
    title: "Category 2",
    desc: "Description 2",
    icon: CircleUser,
  },
  {
    title: "Category 3",
    desc: "Description 3",
    icon: CircleUser,
  },
  {
    title: "Category 4",
    desc: "Description 4",
    icon: CircleUser,
  },
  {
    title: "Category 5",
    desc: "Description 5",
    icon: CircleUser,
  },
];

const CategoryPage = () => {
  const [open, setOpen] = useState(false);

  const columns = [
    {
      accessorKey: "icon",
      header: "Category Image",
      cell: ({ row }: any) => <row.original.icon className="w-6 h-6" />,
      width: 180,
    },
    {
      accessorKey: "title",
      header: "Title",
      sort: true,
      width: 200,
    },
    {
      accessorKey: "desc",
      header: "desc",
      width: 250,
    },
    {
      accessorKey: "actions",
      header: "Actions",
      width: 150,
    },
  ];

  return (
    <div className="p-5">
      <DataTable
        columns={columns}
        data={data}
        btn="Add Category"
        handleBtn={() => setOpen(true)}
      />
      <CreateCategory open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default CategoryPage;
