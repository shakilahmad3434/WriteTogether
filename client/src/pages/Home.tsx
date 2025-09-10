import { NotebookPen, Plus, Search } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../components/ui/dialog"
import { useState } from "react"

const Home = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex justify-center">
        <div className="w-10/12 py-6">
            <header className="flex justify-between items-center py-2 px-6 bg-white rounded-full shadow-xl mb-12">
                <div className="flex items-center gap-2">
                    <div className="bg-blue-600 rounded-lg p-1.5"><NotebookPen className='text-white' size={24} /></div>
                    <p className="font-semibold text-xl">WriteTogether</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="flex items-center gap-2 bg-gray-200 rounded py-1 px-3">
                        <span className="w-3 h-3 rounded-full bg-blue-700 block"></span>
                        <span className="text-sm">Meraj</span>
                    </div>
                    <Button variant="ghost">Logout</Button>
                </div>
            </header>

            <div className="px-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold">Your Documents</h2>
                        <p>Collaborate in real-time with your team</p>
                    </div>
                    <Button onClick={() => setIsOpenModal(prev => !prev)}><Plus /> New Document</Button>
                </div>
                <div className="relative">
                    <Input type="text" placeholder="Search documents..." className="h-12 !text-lg px-4 pl-8" />
                    <Search className="absolute left-2 top-3.5 text-gray-400" size={20} />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <NotebookPen className="text-gray-300 mb-4" size={64} />
                <h3 className="text-2xl font-semibold">No documents yet</h3>
                <p className="text-sm mb-4">Create your first document to start collaborating</p>
                <Button size='lg' onClick={() => setIsOpenModal(prev => !prev)}>Create Document</Button>
            </div>
        </div>

        <Dialog open={isOpenModal}>
            <DialogContent className="sm:max-w-md [&>button]:hidden">
                <DialogHeader>
                <DialogTitle>Create New Document</DialogTitle>
                <DialogDescription>
                    Anyone who has this code will be able to collab this.
                </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2">
                <div className="grid flex-1 gap-2">
                    <Input type="text" placeholder="Document title" className="h-12" />
                </div>
                </div>
                <DialogFooter className="flex w-full gap-2">
                <Button type="button" variant="secondary" className="flex-1" onClick={() => setIsOpenModal(prev => !prev)}>Cancel</Button>
                <Button className="flex-1">Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default Home