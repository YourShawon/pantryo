import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const RecipeSearch = () => {
  return (
    <div>
      <Dialog >
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]"
          overlayClassName="bg-white bg-opacity-50 backdrop-blur-[10px]"
        >
          
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default RecipeSearch