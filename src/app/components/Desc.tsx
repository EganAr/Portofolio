import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Desc() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gray-950 hover:opacity-90">description</Button>
      </DialogTrigger>
      <DialogContent className="text-left">
        <DialogHeader>
          <DialogTitle className="text-gray-600">Sn ecommerce</DialogTitle>
        </DialogHeader>
        <div className="">
          <p className="text-xs text-justify tracking-wide text-gray-400">
            This project is an e-commerce fashion store designed to provide a
            seamless and engaging shopping experience for users, the store
            offers a robust platform for purchasing, and managing fashion
            products.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export function Desc2() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gray-950 hover:opacity-90">description</Button>
      </DialogTrigger>
      <DialogContent className="text-left">
        <DialogHeader>
          <DialogTitle className="text-gray-600">SnBlog</DialogTitle>
        </DialogHeader>
        <div className="">
          <p className="text-xs text-justify tracking-wide text-gray-400">
            A full-featured blog application that allows users to sign up, sign
            in, create, delete blog posts, and update their profiles.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
