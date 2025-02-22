"use client";
import CreateBlogs from "@/components/Blogs/CreateBlogs";
import { DataTable } from "@/components/ui/data-table";
import { CircleUser } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const data = [
  {
    title: "Blog 1",
    desc: "Description 1",
    date: "01/01/2025",
    category: "Category 1",
    icon: CircleUser,
  },
  {
    title: "Blog 2",
    desc: "Description 2",
    date: "01/01/2025",
    category: "Category 2",
    icon: CircleUser,
  },
  {
    title: "Blog 3",
    desc: "Description 3",
    date: "01/01/2025",
    category: "Category 3",
    icon: CircleUser,
  },
  {
    title: "Blog 4",
    desc: "Description 4",
    date: "01/01/2025",
    category: "Category 4",
    icon: CircleUser,
  },
  {
    title: "Blog 5",
    desc: "Description 5",
    date: "01/01/2025",
    category: "Category 5",
    icon: CircleUser,
  },
];

const page = () => {
  const [open, setOpen] = useState(false);
  const navigate = useRouter();

  const columns = [
    {
      accessorKey: "icon",
      header: "Featured Image",
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
      header: "Content",
      width: 150,
    },{
      accessorKey: "category",
      header: "Category",
      width: 150,
    },{
      accessorKey: "date",
      header: "Date",
      width: 150,
    },
  ];

  return (
    <div className="p-5">
      <DataTable
        columns={columns}
        data={data}
        btn="Add Blog"
        handleBtn={() => setOpen(true)}
      />
      <CreateBlogs onClose={() => setOpen(false)} open={open} />
    </div>
  );
};

export default page;
