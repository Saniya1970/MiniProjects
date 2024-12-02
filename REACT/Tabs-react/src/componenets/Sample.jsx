import React from 'react'
import { useState } from 'react';

export default function Sample() {
    const tabs = {
        content: 'content for tab1',
        content: 'content for tab2',
        content: 'content for tab3'
    };

    const handleClick = (tabId) => {
        setData(tabId);

    }

    const [data, setData] = useState(tabs[0].id);

    return (
        <div>
            <div>
                {Object.keys.tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleClick(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}

            </div>

            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    style={{
                        display: data === tab.id ? 'block' : 'none'
                    }}
                >
                    {tab.content}
                </div>
            ))}
        </div>
    )
}
