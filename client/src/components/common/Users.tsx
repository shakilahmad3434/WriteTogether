const Users = () => {
    return (
        <div className="flex-1 overflow-y-auto p-3">
            <h3 className="font-semibold text-sm mb-4">Active in Document</h3>
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <div className="relative w-9 h-9 bg-green-600 text-white rounded-full flex justify-center items-center">
                        <p className="font-semibold text-xl">S</p>
                        <span className="w-3 h-3 rounded-full bg-green-600 absolute -bottom-[1px] -right-0.5"></span>
                    </div>
                    <div className="flex flex-col gap-0">
                        <p className="font-semibold -mb-1">shakil123</p>
                        <span className="text-xs text-gray-600">Online</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative w-9 h-9 bg-gray-400 text-white rounded-full flex justify-center items-center">
                        <p className="font-semibold text-xl">S</p>
                        <span className="w-3 h-3 rounded-full bg-gray-400 absolute -bottom-[1px] -right-0.5"></span>
                    </div>
                    <div className="flex flex-col gap-0">
                        <p className="font-semibold -mb-1 text-gray-400">
                            shakil123
                        </p>
                        <span className="text-xs text-gray-400">Offline</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
