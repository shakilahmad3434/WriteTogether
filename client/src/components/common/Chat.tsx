import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

const Chat = () => {
    return (
        <>
            <div className="flex-1 flex flex-col space-y-4 p-3 overflow-y-auto">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-md">Shakil</p>
                        <span className="text-xs text-gray-600">08:22 AM</span>
                    </div>
                    <p className="bg-gray-100 py-2 px-3 rounded-sm text-sm">
                        Hey! I started working on the introduction section.
                    </p>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-md">Meraj</p>
                        <span className="text-xs text-gray-600">08:22 AM</span>
                    </div>
                    <p className="bg-blue-500 text-white py-2 px-3 rounded-sm text-sm w-fit">
                        Hello
                    </p>
                </div>
            </div>
            <div className="flex-shrink-0 p-3 border-t border-gray-300">
                <div className="flex items-center gap-2">
                    <Input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1"
                    />
                    <Button>
                        <Send />
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Chat;
