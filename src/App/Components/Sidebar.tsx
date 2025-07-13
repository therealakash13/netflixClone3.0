import React from 'react';

interface Video {
  name: string;
  key: string;
}

interface SidebarProps {
  selectedData: Video[];
  setKey: (key: string) => void;
  categories: string[];
  onCategoryClick: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedData, setKey, categories, onCategoryClick }) => {
  return (
    <div className="w-[30%] bg-gradient-to-b from-gray-700 to-black rounded-lg text-white p-2">
      <div className="m-2">
        <ul className="flex flex-wrap justify-between gap-2 text-base">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => onCategoryClick(cat)}
              className="bg-slate-600 px-3 py-1 rounded-lg cursor-pointer shadow-lg"
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-red-600 my-2" />

      <div className="overflow-auto h-[94%]">
        {selectedData.map((video, idx) => (
          <div key={idx} className="m-3">
            <button
              onClick={() => setKey(video.key)}
              className="bg-black text-white hover:text-slate-500 px-3 py-1 text-base rounded-xl"
            >
              {video.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
