import React, { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Collapsible = ({ open, children, title }) => {
    const [isOpen, setIsOpen] = useState(open);

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div>
            <div className="bg-gray-100 p-6 rounded shadow cursor-pointer hover:bg-emerald-600 hover:text-white transition">
                <div className="p-3 border-b-2 flex justify-content items-center">
                    <p className="text-xl font-semibold mb-2">{title}</p>
                    <button type="button" onClick={handleFilterOpening}>
                        {!isOpen ? (
                            <ExpandLessIcon />
                        ) : (
                            <ExpandMoreIcon />
                        )}
                    </button>
                </div>

                <div className="border-b-2">
                    <div>
                        {isOpen &&
                            <div className="p-3">
                                {children}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collapsible;