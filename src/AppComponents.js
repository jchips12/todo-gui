import tw from 'twin.macro';

export const DoneButton = tw.button`
    w-8 h-8
    flex flex-row items-center justify-center
    gap-1 px-2 py-0.5
    rounded-lg border-2
    bg-blue-400 
    hover:bg-blue-600
    focus:ring-2
    focus:ring-gray-400
`;

export const DeleteButton = tw.button`
    w-8 h-8
    flex flex-row items-center justify-center
    gap-1 px-2 py-0.5
    rounded-lg border-2
    bg-red-400 
    hover:bg-red-600
    focus:ring-2
    focus:ring-gray-400
`;

export const AddButton = tw.button`
    w-8 h-8
    flex flex-row items-center justify-center
    gap-1 px-2 py-0.5
    rounded-lg border-2
    bg-green-400 
    hover:bg-green-600
    focus:ring-2
    focus:ring-gray-400
    disabled:bg-gray-200
    disabled:text-gray-400
`;

export const EditButton = tw.button`
    w-8 h-8
    flex flex-row items-center justify-center
    gap-1 px-2 py-0.5
    rounded-lg border-2
    bg-cyan-400
    hover:bg-cyan-600
    focus:ring-2
    focus:ring-gray-400
`;

export const TodoInput = tw.input`
    shadow
    appearance-none
    border
    rounded
    w-full
    py-2
    px-3
    text-gray-700
    focus:outline-none
    focus:ring-2
    focus:ring-gray-400
`;
