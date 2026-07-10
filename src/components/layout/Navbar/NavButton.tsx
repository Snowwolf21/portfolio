import { Button } from "@/components/ui";

export default function NavButton() {
  return (
    <Button className="text-base bg-accent/70 hover:bg-accent-hover hover:text-gray-200 p-5 rounded-lg cursor-pointer 
    transition-all duration-300 ease-in-out hover:scale-105 
    hover:shadow-lg ">
      Hire Me
    </Button>
  );
}