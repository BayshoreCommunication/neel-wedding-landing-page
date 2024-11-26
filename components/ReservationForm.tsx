import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ReservationForm = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="btn bg-primary border-0 text-white font-light text-lg hover:bg-primary">
          RSVP
        </DialogTrigger>
        <DialogContent className=" py-10">
          <DialogHeader className="place-items-center">
            <DialogTitle className="text-3xl font-light text-primary  ">
              RSVP
            </DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here.
            </DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-8 py-4">
            <div className="flex items-center">
              <div className="group relative w-full focus:ring-primary">
                <label
                  htmlFor="name"
                  className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground "
                >
                  <span className="inline-flex bg-background px-2">Name</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder=""
                  className="caret-primary"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="group relative w-full">
                <label
                  htmlFor="email"
                  className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
                >
                  <span className="inline-flex bg-background px-2">Email</span>
                </label>
                <Input id="email" type="email" placeholder="" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="group relative w-full">
                <label
                  htmlFor="phone"
                  className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
                >
                  <span className="inline-flex bg-background px-2">Phone</span>
                </label>
                <Input id="phone" type="text" placeholder="" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="group relative w-full">
                <label
                  htmlFor="numberOfGuests"
                  className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
                >
                  <span className="inline-flex bg-background px-2">
                    Number of guests
                  </span>
                </label>
                <Input id="numberOfGuests" type="number" placeholder="" />
              </div>
            </div>
          </div>
          <DialogFooter className="place-self-center">
            <Button type="submit" className="px-10 text-lg font-light ">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog> */}
    </div>
  );
};

export default ReservationForm;
