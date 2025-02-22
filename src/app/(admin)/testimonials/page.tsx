"use client";
import CreateTestimonial from "@/components/Testimonial/CreateTestimonial";
import { DataTable } from "@/components/ui/data-table";
import { CircleUser } from "lucide-react";
import React, { useState } from "react";

const data = [
  {
    title: "Outstanding Service!",
    testimonial: "The customer service team was incredibly helpful.",
    date: "15 Feb, 2024",
    name: "John Doe",
    icon: CircleUser,
  },
  {
    title: "Great Product Quality",
    testimonial: "I purchased a laptop from this store.",
    date: "10 Jan, 2024",
    name: "Alice Johnson",
    icon: CircleUser,
  },
  {
    title: "Fast and Reliable",
    testimonial: "Shipping was super fast, and the product.",
    date: "22 Dec, 2023",
    name: "Michael Smith",
    icon: CircleUser,
  },
  {
    title: "Exceptional Experience",
    testimonial: "From browsing to checkout, the experience was seamless.",
    date: "05 Mar, 2024",
    name: "Sophia Williams",
    icon: CircleUser,
  },
  {
    title: "Highly Recommended",
    testimonial:
      "I've been a loyal customer for years, and they never disappoint.",
    date: "30 Nov, 2023",
    name: "David Brown",
    icon: CircleUser,
  },
];

const TestimonialPage = () => {
  const [open, setOpen] = useState(false);

  const columns = [
    {
      accessorKey: "icon",
      header: "Image",
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
      accessorKey: "name",
      header: "Name",
      width: 250,
    },
    {
      accessorKey: "testimonial",
      header: "Testimonial",
      width: 400,
    },
    {
      accessorKey: "date",
      header: "Date",
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
        btn="Add Testimonial"
        handleBtn={() => setOpen(true)}
      />
      <CreateTestimonial open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default TestimonialPage;
