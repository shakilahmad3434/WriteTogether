import { LogIn, NotebookPen } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const Login = () => {
    return (
        <div className="w-1/4 bg-white rounded-2xl px-8 py-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center items-center mb-6">
                <div className="w-16 h-16 rounded-full shadow bg-blue-100 flex justify-center items-center">
                    <NotebookPen className="text-indigo-500" size={32} />
                </div>
            </div>
            <h2 className="text-center font-bold text-2xl">
                Welcome to WriteTogether
            </h2>
            <p className="text-center text-sm text-gray-500 mb-6">
                Enter your username to start collaborating
            </p>

            <div className="mb-6">
                <span>Username</span>
                <Input
                    type="text"
                    placeholder="Enter your username"
                    className="h-10"
                />
            </div>
            <Button variant="default" className="w-full mb-6" size="lg">
                <LogIn /> JoinCollaboration
            </Button>

            <Separator />
            <p className="text-xs text-gray-500 mt-2 text-center">
                WriteTogether offers a real-time collaborative editing. Multiple
                users can edit documents simultaneously.
            </p>
        </div>
    );
};

export default Login;
