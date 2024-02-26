"use client";

import * as React from "react";
import { format } from "date-fns";

import Link from "next/link";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StyleGuide = () => {
  const [date, setDate] = React.useState();

  return (
    <>
      {/* typography */}
      <div className="flex flex-col gap-y-4 p-24">
        {" "}
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit vestibulum,
          aliquet in mus integer et sociis tristique, lacinia semper primis
          ridiculus habitasse congue posuere. Feugiat vitae ullamcorper nibh
        </p>
      </div>
      <div className="bg-black p-24 flex flex-col gap-y-4">
        <Link href="/">Let`s eat</Link>
        {/* buttons */}
        <Button variant="default">Button 1</Button>
        <Button variant="orange">Button 2</Button>
        <Button variant="input">Button 3</Button>
        <Button variant="orange" size="sm">
          Button 4
        </Button>
        {/*  label & input */}
        <div>
          <Label htmlFor="firstname">First Name</Label>
          <Input type="firstname" id="firstname" />
        </div>
        <div>
          <Label htmlFor="lastname">Last Name</Label>
          <Input type="lastname" id="lastname" />
        </div>
        {/* Calendar */}
        <div>
          <label>Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"input"}
                className={cn("w-full justify-start text-left font-normal")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* select */}
        <Select>
          <SelectTrigger className="w-full ">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default StyleGuide;
