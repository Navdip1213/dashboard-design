import InputWithLabel from '@/components/ui/InputWithLabel'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Modal from '../common/Modal'
import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "@/components/ui/file-upload";
import { DropzoneOptions } from 'react-dropzone';
import Image from 'next/image';

const CreateBlogs = ({onClose, open}:any) => {const [files, setFiles] = useState<File[] | null>([]);
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
      header="Create Blog"
      className="p-5"
    >
      <div className="grid grid-cols-2 gap-5">
        <div className="w-full col-span-2">
        <label className="text-sm">Add Featured image</label>
        <FileUploader
          value={files}
          onValueChange={setFiles}
          dropzoneOptions={dropzone}
          
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
      <InputWithLabel id='title' placeholder='Add Blog Title' label='Add Blog Title : ' name='title' className="col-span-2"/>
      <InputWithLabel id='content' placeholder='Add Blog Content' label='Add Blog Content : ' name='content' className="col-span-2"/>
      <InputWithLabel id='category' placeholder='Add Blog Category' label='Add Blog Category : ' name='category' className="col-span-2"/>
      <InputWithLabel id='date' placeholder='Add Blog Date' label='Add Blog Date : ' name='date' className="col-span-2"/>
      </div>
      <div className="flex gap-3 justify-end items-center">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </div>
    </Modal>
  )
}

export default CreateBlogs;
