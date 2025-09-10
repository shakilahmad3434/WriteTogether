import { ArrowLeft, MessageSquareMore, Save, Users as UsersIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Chat from "../components/common/Chat";
import Users from "../components/common/Users";
import Editor from "../components/common/Editor";

const Document = () => {
    return (
        <div className="flex flex-col h-screen w-full">
            <header className="flex-shrink-0 flex justify-between items-center py-3 px-6 border-b border-gray-300">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-500">
                        <ArrowLeft />
                        <span>Back to Documents</span>
                    </div>

                    <div className="w-px h-6 bg-gray-300"></div>

                    <div className="flex flex-col">
                        <p className="text-xl font-semibold">NodeJS Tutorial</p>
                        <p className="text-gray-500">
                            Last edited 9/6/2025, 1:33:59 PM
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 bg-green-200 rounded-xl py-1 px-3">
                        <span className="w-2 h-2 rounded-full bg-green-700 block animate-pulse"></span>
                        <span className="text-sm">Live</span>
                    </div>
                    <Button
                        variant="default"
                        className="bg-blue-100 text-blue-600"
                    >
                        <MessageSquareMore /> Chat
                    </Button>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                <div className="flex-1 flex flex-col">
                    <div className="flex-shrink-0 flex items-center justify-between py-3 text-gray-600 border-b border-gray-300 px-6">
                        <div className="flex items-center gap-2">
                            <UsersIcon size={16} />
                            <span className="text-sm">3 Active users</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Save size={16} />
                            <span className="text-sm">Auto-saved</span>
                        </div>
                    </div>
                    <Editor />
                </div>

                <div className="w-80 border-l border-gray-300 flex flex-col h-full">
                    <Tabs defaultValue="chat" className="py-2 h-full">
                        <TabsList className="flex w-full border-b border-gray-300 bg-transparent rounded-none">
                            <TabsTrigger
                                value="chat"
                                className="flex-1 rounded-none border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-500 hover:text-black data-[state=active]:border-black data-[state=active]:text-black"
                            >
                                Chat
                            </TabsTrigger>
                            <TabsTrigger
                                value="users"
                                className="flex-1 rounded-none border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-500 hover:text-black data-[state=active]:border-black data-[state=active]:text-black"
                            >
                                Users (3)
                            </TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="chat" className="flex flex-col h-full overflow-hidden m-0">
                            <Chat />
                        </TabsContent>
                        <TabsContent value="users">
                            <Users />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Document;