import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="">
        <div>
          <div>Avatar</div>
          <p>john_doe</p>
        </div>

        <div className="w-full h-[112.5px]">Image</div>

        <div>
          <p>Like</p>
          <p>Comment</p>
        </div>
        <div>
          <p>Total likes</p>
          <p>Likes</p>
        </div>

        <div>
          <p>John_doe</p>
          <p>Description</p>
        </div>

        <div>
          <Button variant="outline">View all comments</Button>
        </div>

        <div>
          <Input placeholder="Add a comment..." />
          <Button>Post</Button>
        </div>
      </div>
    </div>
  );
}
