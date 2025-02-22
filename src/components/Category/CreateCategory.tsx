"use client";
import React, { useState } from "react";
import Modal from "../common/Modal";
import InputWithLabel from "../ui/InputWithLabel";
import TextAreaWithLabel from "../ui/TextAreaWithLabel";
import { Button } from "../ui/button";
import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "@/components/ui/file-upload";
import { DropzoneOptions } from "react-dropzone";
import Image from "next/image";

const CreateCategory = ({ open, onClose }: any) => {
  const [files, setFiles] = useState<File[] | null>([]);
  const dropzone = {
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    multiple: false,
    maxSize: 1 * 1024 * 1024,
  } satisfies DropzoneOptions;

  return (
    <Modal
      open={open}
      onClose={onClose}
      header="Create Category"
      className="p-5"
    >
      <div className="grid grid-cols-2 gap-5">
      <div className="w-full col-span-2">
      <label className="text-sm">Add Category Image</label>
        <FileUploader
          value={files}
          onValueChange={setFiles}
          dropzoneOptions={dropzone}
          className="w-full col-span-2"
        >
          {files?.length === 0 && (
            <FileInput>
              <div className="flex items-center justify-center h-32 w-full border bg-background rounded-md">
                <p className="text-gray-400">Drop files here</p>
              </div>
            </FileInput>
          )}
          <FileUploaderContent className="flex items-center flex-row gap-2">
            {files?.map((file, i) => (
              <FileUploaderItem
                key={i}
                index={i}
                className="size-20 p-0 rounded-md overflow-hidden"
                aria-roledescription={`file ${i + 1} containing ${file.name}`}
              >
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  height={80}
                  width={80}
                  className="size-20 p-0"
                />
              </FileUploaderItem>
            ))}
          </FileUploaderContent>
        </FileUploader>
        </div>
        <InputWithLabel
          id="name"
          name="name"
          label="Category Name"
          placeholder="Enter Category Name"
          className="col-span-2"
        />
        <TextAreaWithLabel
          id="desc"
          name="desc"
          label="Category Description"
          placeholder="Enter Category Description"
          className="col-span-2"
        />
      </div>
      <div className="flex gap-3 justify-end items-center">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </div>
    </Modal>
  );
};

export default CreateCategory;
